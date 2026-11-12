// A help article's text read as a page: sections, lists, numbered steps and questions. The
// articles are plain text, written for Fork's assistants too (the app repo's
// backend/assets/knowledgeBase), in this shape:
//   "Label:" alone on a paragraph's first line, or one of the standard labels with text after it
//   ("What it is: ...", "Plan: ...", "How to ...: ...") → a section heading
//   "- " bullets, "  - " (two spaces more) sub-bullets, "1. " numbered steps
//   "Q: " / "A: " → a question and its answer
// Anything else is a paragraph. Nothing here is HTML: the page builds elements from these blocks.
//
// This is the app's own reader (frontend/src/components/help/docText.js in the app repo) in
// TypeScript, so an article reads the same on forkhr.com/docs as in the app. Keep the two alike.

export type DocList = { type: 'list'; ordered: boolean; items: DocListItem[] }
export type DocListItem = { text: string; children: DocList[] }
export type DocFaq = { type: 'faq'; items: { q: string; a: string }[] }
export type DocBlock = { type: 'p'; text: string } | { type: 'sub'; text: string } | DocList | DocFaq
export type DocSection = { id: string; label: string | null; blocks: DocBlock[] }

export type InlinePiece =
  | { kind: 'text' | 'term' | 'ui'; text: string }
  | { kind: 'doc'; text: string; id: string }
  | { kind: 'page'; text: string; to: string }

const HEADING_ALONE = /^([A-Z][^:.!?\n]{1,72}):\s*$/
const HEADING_INLINE = /^(What it is|Plan|Where to find it|Who can use it|Good to know|How [^:.!?"\n]{1,56}):[ \t]+(\S.*)$/
const BULLET = /^(\s*)- (.*)$/
const STEP = /^(\s*)(\d{1,2})[.)] (.*)$/
const QUESTION = /^Q:\s*(.*)$/
const ANSWER = /^A:\s*(.*)$/

export const slugOf = (text = '') => text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '').slice(0, 60) || 'section'

const headingOf = (line: string): { label: string; rest: string } | null => {
  const trimmed = line.trim()
  if (/^(Q|A):/.test(trimmed)) return null
  const alone = trimmed.match(HEADING_ALONE)
  // a short label, its brackets and quotes closed ("Use-by dates ("Keeps for N days")")
  const balanced = (s: string) => (s.match(/\(/g) || []).length === (s.match(/\)/g) || []).length && (s.match(/"/g) || []).length % 2 === 0
  if (alone && alone[1].split(/\s+/).length <= 10 && balanced(alone[1])) return { label: alone[1], rest: '' }
  const inline = trimmed.match(HEADING_INLINE)
  return inline ? { label: inline[1], rest: inline[2] } : null
}

const depthOf = (indent: string) => Math.min(2, Math.floor(indent.replace(/\t/g, '  ').length / 2))

// Lines of one paragraph → blocks
function blocksOf(lines: string[]): DocBlock[] {
  const blocks: DocBlock[] = []
  // the open list at each depth, so a sub-bullet lands under the item above it
  let stack: (DocList | undefined)[] = []
  const last = () => blocks[blocks.length - 1]
  const lastFaq = () => {
    const block = last()
    return block?.type === 'faq' ? block : null
  }

  for (const raw of lines) {
    if (!raw.trim()) continue
    const q = raw.trim().match(QUESTION)
    const a = raw.trim().match(ANSWER)
    if (q) {
      stack = []
      let faq = lastFaq()
      if (!faq) {
        faq = { type: 'faq', items: [] }
        blocks.push(faq)
      }
      // "Q: ...? A: ..." on one line, as older articles have it
      const [, question, answer] = q[1].match(/^(.*?[?.!])\s+A:\s+(.*)$/) || [null, q[1], '']
      faq.items.push({ q: question || '', a: answer || '' })
      continue
    }
    const openFaq = lastFaq()
    if (a && openFaq) {
      const item = openFaq.items[openFaq.items.length - 1]
      item.a = item.a ? `${item.a} ${a[1]}` : a[1]
      continue
    }
    const bullet = raw.match(BULLET)
    const step = !bullet ? raw.match(STEP) : null
    const mark = bullet || step
    if (mark) {
      const depth = depthOf(mark[1])
      const ordered = !!step
      const item: DocListItem = { text: bullet ? bullet[2] : step![3], children: [] }
      stack = stack.slice(0, depth + 1)
      let list = stack[depth]
      if (!list || list.ordered !== ordered) {
        list = { type: 'list', ordered, items: [] }
        const parentList = depth === 0 ? undefined : stack[depth - 1]
        if (!parentList) {
          blocks.push(list)
          stack = [list]
        } else {
          parentList.items[parentList.items.length - 1].children.push(list)
        }
        stack[depth] = list
      }
      list.items.push(item)
      continue
    }
    // A line under a list item, indented: more of that item; under an answer: more of it
    const openList = stack[stack.length - 1]
    if (/^\s{2,}\S/.test(raw) && openList) {
      const item = openList.items[openList.items.length - 1]
      item.text = `${item.text} ${raw.trim()}`
      continue
    }
    if (openFaq && openFaq.items[openFaq.items.length - 1]?.a) {
      const item = openFaq.items[openFaq.items.length - 1]
      item.a = `${item.a} ${raw.trim()}`
      continue
    }
    stack = []
    // "Add a customer:" alone on a line inside a section: a sub-heading over the steps below it
    const sub = headingOf(raw)
    if (sub && !sub.rest) blocks.push({ type: 'sub', text: sub.label })
    else blocks.push({ type: 'p', text: raw.trim() })
  }
  return blocks
}

/** The article as sections: label null for text before any heading. */
export function parseDoc(content = ''): DocSection[] {
  const sections: DocSection[] = []
  const used = new Set<string>()
  const open = (label: string | null) => {
    let id = slugOf(label || 'intro')
    for (let n = 2; used.has(id); n++) id = `${slugOf(label || 'intro')}-${n}`
    used.add(id)
    const section: DocSection = { id, label, blocks: [] }
    sections.push(section)
    return section
  }
  let current: DocSection | null = null
  for (const para of String(content).replace(/\r\n?/g, '\n').split(/\n\s*\n/)) {
    const lines = para.split('\n')
    const heading = headingOf(lines[0] || '')
    let body = lines
    if (heading) {
      current = open(heading.label)
      body = heading.rest ? [heading.rest, ...lines.slice(1)] : lines.slice(1)
    } else if (!current) {
      current = open(null)
    }
    for (const block of blocksOf(body)) {
      const prev: DocBlock | undefined = current.blocks[current.blocks.length - 1]
      // One section's questions, or one list, split by blank lines, read as one
      if (prev && block.type === 'faq' && prev.type === 'faq') prev.items.push(...block.items)
      else if (prev && block.type === 'list' && prev.type === 'list' && prev.ordered === block.ordered) prev.items.push(...block.items)
      else current.blocks.push(block)
    }
  }
  return sections.filter((section) => section.label || section.blocks.length)
}

// Inline pieces of one line of text: quoted names that are other articles (links: { text: id }),
// "web address /path" pages, a bold lead term on a list item, short quoted on-screen labels.
const TOKEN = /"([^"\n]{2,200})"|(web address(?:es)?\s+)(\/[^\s,;)]*)/g
export function inlineOf(text = '', links: Record<string, string> = {}, { leadTerm = false }: { leadTerm?: boolean } = {}): InlinePiece[] {
  const out: InlinePiece[] = []
  let rest = text
  if (leadTerm) {
    const m = rest.match(/^([A-Z0-9][^:"]{0,44}):\s+(?=\S)/)
    if (m && m[1].split(/\s+/).length <= 6) {
      out.push({ kind: 'term', text: `${m[1]}:` })
      out.push({ kind: 'text', text: ' ' })
      rest = rest.slice(m[0].length)
    }
  }
  let at = 0
  for (const match of rest.matchAll(TOKEN)) {
    const index = match.index ?? 0
    if (index > at) out.push({ kind: 'text', text: rest.slice(at, index) })
    if (match[1] !== undefined) {
      const id = links[match[1]] || links[match[1].replace(/[.,;]$/, '')]
      // A short quoted name that is not an article is what the screen says ("Start run"): drawn
      // as a label; a quoted sentence or message keeps its quotes
      const label = !id && match[1].length <= 42 && /^[A-Z0-9+#$@…]/.test(match[1]) && !/[.!?]\s|:\s/.test(match[1])
      if (id) out.push({ kind: 'doc', text: match[1].replace(/[.,;]$/, ''), id })
      else if (label) out.push({ kind: 'ui', text: match[1] })
      else out.push({ kind: 'text', text: match[0] })
    } else {
      const path = match[3].replace(/[.:]+$/, '')
      const trailing = match[3].slice(path.length)
      out.push({ kind: 'text', text: match[2] })
      // a page that opens as it is; a path with an id in it stays text
      if (/[<>:()]|your-/.test(path)) out.push({ kind: 'text', text: path })
      else out.push({ kind: 'page', text: path, to: path })
      if (trailing) out.push({ kind: 'text', text: trailing })
    }
    at = index + match[0].length
  }
  if (at < rest.length) out.push({ kind: 'text', text: rest.slice(at) })
  return out
}

/** The sections an article's "On this page" lists: every titled section but the lead and the plan box. */
export const outlineOf = (sections: DocSection[]) => sections.filter((section) => section.label && section.label !== 'What it is' && section.label !== 'Plan')

/** A shorter name for the contents: the title's lead ("Placing a purchase order" for "Placing a
 *  purchase order (web and app)"), when that lead is long enough to stand alone and no other
 *  article in the list starts the same way; else the whole title. */
export const navTitleOf = (title = '', siblings: string[] = []) => {
  const head = title.split(/: | \(/)[0].trim()
  if (head === title || head.length < 16) return title
  const clash = siblings.filter((t) => t !== title && t.split(/: | \(/)[0].trim() === head).length
  return clash ? title : head
}

/** Every question an article answers, as plain text (the page's FAQ structured data). */
export const questionsOf = (sections: DocSection[]) =>
  sections.flatMap((section) => section.blocks.flatMap((block) => (block.type === 'faq' ? block.items.filter((item) => item.q && item.a) : [])))
