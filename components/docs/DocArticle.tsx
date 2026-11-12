import { Fragment } from 'react'
import Link from 'next/link'
import { ChevronDown, Info, Sparkles } from 'lucide-react'
import { cn } from '@/lib/utils'
import { appPageUrl, docPath } from '@/lib/docs'
import { inlineOf, type DocBlock, type DocList, type DocSection } from '@/lib/docs-text'

// One help article drawn as a docs page, from the plain text the app's assistants read too
// (lib/docs-text.ts), the way the app's own Docs page draws it: the opening "What it is" is the
// lead; "Plan" and "Good to know" are boxes; numbered steps are a step track; questions fold
// open. Another article it names is a link to that article's page here, a page of the app it
// gives the web address of opens in the app, and a short quoted label ("Start run") is drawn as
// the button's name. Rendered on the server: every word is in the page's HTML.

type Links = Record<string, string>

// "Web:", "App:" at the start of a bullet: which product the line is about, as a small tag
const PLATFORMS = new Set(['Web', 'App', 'Phone', 'Web and app', 'Terminal', 'Mobile app', 'On a phone', 'Computer'])

const Inline = ({ text, links, leadTerm }: { text: string; links: Links; leadTerm?: boolean }) => (
  <>
    {inlineOf(text, links, { leadTerm }).map((piece, i) => {
      if (piece.kind === 'term') {
        const name = piece.text.replace(/:$/, '')
        return PLATFORMS.has(name) ? (
          <span key={i} className="mr-0.5 inline-block rounded-full bg-warm-100 px-2 align-[0.12em] text-[10.5px] font-semibold uppercase leading-[1.75] tracking-wider text-warm-700">
            {name}
          </span>
        ) : (
          <strong key={i} className="font-semibold text-warm-950">
            {piece.text}
          </strong>
        )
      }
      if (piece.kind === 'ui')
        return (
          <span key={i} className="rounded-md border border-warm-200 bg-white px-1.5 py-px text-[0.92em] font-medium text-warm-950 shadow-[0_1px_0_rgba(27,26,25,0.04)] [box-decoration-break:clone]">
            {piece.text}
          </span>
        )
      if (piece.kind === 'doc')
        return (
          <Link key={i} href={docPath(piece.id)} className="font-medium text-forest-600 underline decoration-forest-200 underline-offset-[3px] transition-colors hover:text-forest-700 hover:decoration-forest-500">
            {piece.text}
          </Link>
        )
      if (piece.kind === 'page')
        return (
          <a
            key={i}
            href={appPageUrl(piece.to)}
            target="_blank"
            rel="nofollow noopener noreferrer"
            title={`Open ${piece.to} in Fork`}
            className="whitespace-nowrap rounded-full bg-warm-100 px-2 py-0.5 font-mono text-[0.82em] text-warm-800 transition-colors hover:bg-warm-200 hover:text-warm-950"
          >
            {piece.text}
            <span aria-hidden="true"> ↗</span>
          </a>
        )
      return <Fragment key={i}>{piece.text}</Fragment>
    })}
  </>
)

const List = ({ list, links, nested }: { list: DocList; links: Links; nested?: boolean }) => {
  if (list.ordered) {
    return (
      <ol className={cn('space-y-3.5', nested && 'mt-3')}>
        {list.items.map((item, i) => (
          <li key={i} className="flex gap-3.5">
            <span aria-hidden="true" className="mt-[2px] flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-warm-100 text-[12px] font-semibold text-warm-950">
              {i + 1}
            </span>
            <div className="min-w-0 flex-1">
              <span className="sr-only">Step {i + 1}: </span>
              <Inline text={item.text} links={links} />
              {item.children.map((child, j) => (
                <List key={j} list={child} links={links} nested />
              ))}
            </div>
          </li>
        ))}
      </ol>
    )
  }
  return (
    <ul className={cn('space-y-2.5', nested && 'mt-2.5')}>
      {list.items.map((item, i) => (
        <li key={i} className="relative pl-5 before:absolute before:left-[5px] before:top-[0.72em] before:h-[5px] before:w-[5px] before:rounded-full before:bg-warm-300">
          <Inline text={item.text} links={links} leadTerm />
          {item.children.map((child, j) => (
            <List key={j} list={child} links={links} nested />
          ))}
        </li>
      ))}
    </ul>
  )
}

const Block = ({ block, links }: { block: DocBlock; links: Links }) => {
  if (block.type === 'p')
    return (
      <p>
        <Inline text={block.text} links={links} />
      </p>
    )
  if (block.type === 'sub') return <h3 className="pt-3 text-[18px] font-semibold tracking-tight text-warm-950">{block.text}</h3>
  if (block.type === 'list') return <List list={block} links={links} />
  return (
    <div className="divide-y divide-warm-100 overflow-hidden rounded-2xl border border-warm-200 bg-white">
      {block.items.map((item, i) => (
        <details key={i} className="group">
          <summary className="flex cursor-pointer list-none items-start justify-between gap-4 px-5 py-4 font-semibold text-warm-950 transition-colors hover:bg-warm-50 [&::-webkit-details-marker]:hidden">
            <span className="min-w-0">
              <Inline text={item.q} links={links} />
            </span>
            <span aria-hidden="true" className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-warm-100 text-warm-600 transition-transform duration-200 group-open:rotate-180">
              <ChevronDown className="h-3.5 w-3.5" />
            </span>
          </summary>
          {item.a ? (
            <div className="px-5 pb-5 pr-14 text-warm-600">
              <Inline text={item.a} links={links} />
            </div>
          ) : null}
        </details>
      ))}
    </div>
  )
}

// "Who can use it: jobs with ..." is written as one line; under its heading the sentence starts
// with a capital (a first word with a capital inside it, "iPhone", is left alone)
const sentence = (text: string) => (/^[a-z]+(?![A-Za-z])/.test(text) ? text.charAt(0).toUpperCase() + text.slice(1) : text)
const opening = (section: DocSection): DocBlock[] => {
  const [first, ...others] = section.blocks
  return first?.type === 'p' ? [{ ...first, text: sentence(first.text) }, ...others] : section.blocks
}

// Sections drawn as a box rather than under a heading
const CALLOUTS: Record<string, { icon: typeof Info; box: string; glyph: string }> = {
  Plan: { icon: Sparkles, box: 'bg-warm-50', glyph: 'bg-white text-warm-700' },
  'Good to know': { icon: Info, box: 'bg-forest-50/70', glyph: 'bg-white text-forest-600' },
}
// A box that is one short line ("Plan: Essential (Schedule).") is drawn as that line, its name leading it
const ONE_LINE = 120

/** The article's body from its sections (parseDoc of its text); the page draws the title above it. */
export default function DocArticle({ sections, links }: { sections: DocSection[]; links: Links }) {
  const blocksOf = (section: DocSection) => opening(section).map((block, i) => <Block key={i} block={block} links={links} />)
  return (
    <div className="text-[16.5px] leading-[1.75] text-warm-700">
      {sections.map((section) => {
        // The opening lines read as the article's lead
        if (!section.label || section.label === 'What it is')
          return (
            <section key={section.id} id={section.id} className="scroll-mt-24 space-y-4 text-[19px] leading-[1.6] text-warm-600 md:text-[20px]">
              {blocksOf(section)}
            </section>
          )
        const callout = CALLOUTS[section.label]
        if (callout) {
          const Icon = callout.icon
          const only = section.blocks.length === 1 && section.blocks[0].type === 'p' && section.blocks[0].text.length <= ONE_LINE ? section.blocks[0] : null
          const glyph = (
            <span aria-hidden="true" className={cn('inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full shadow-[0_1px_2px_rgba(27,26,25,0.08)]', callout.glyph)}>
              <Icon className="h-4 w-4" />
            </span>
          )
          if (only)
            return (
              <section key={section.id} id={section.id} className={cn('mt-8 flex scroll-mt-24 items-center gap-3.5 rounded-2xl px-4 py-3 text-[15.5px] leading-[1.6]', callout.box)}>
                {glyph}
                <p className="min-w-0">
                  <strong className="font-semibold text-warm-950">{section.label}</strong>
                  <span aria-hidden="true" className="mx-2 text-warm-300">
                    ·
                  </span>
                  <Inline text={sentence(only.text)} links={links} />
                </p>
              </section>
            )
          return (
            <section key={section.id} id={section.id} className={cn('mt-8 flex scroll-mt-24 gap-3.5 rounded-2xl p-5', callout.box)}>
              {glyph}
              <div className="min-w-0 flex-1 space-y-3 text-[15.5px] leading-[1.65]">
                <h2 className="pt-1 text-[15.5px] font-semibold tracking-normal text-warm-950">{section.label}</h2>
                {blocksOf(section)}
              </div>
            </section>
          )
        }
        return (
          <section key={section.id} id={section.id} className="mt-14 scroll-mt-24 space-y-4">
            <h2 className="group text-[26px] font-semibold leading-tight tracking-tight text-warm-950">
              {section.label}
              <a href={`#${section.id}`} aria-label={`Link to ${section.label}`} className="ml-2 font-normal text-warm-300 opacity-0 transition-opacity hover:text-warm-600 focus:opacity-100 group-hover:opacity-100">
                #
              </a>
            </h2>
            {blocksOf(section)}
          </section>
        )
      })}
    </div>
  )
}
