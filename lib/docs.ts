// The Docs, forkhr.com/docs: Fork's help center as public pages a search engine can index. The
// articles are not kept here. They are the app's own (the app repo's backend/assets/knowledgeBase,
// the ones its Docs page and Fork Support read) and come from the app API with no login:
//   GET /public/help               the contents: sections → topics → each article's title and summary
//   GET /public/help/topics/:key   one topic with its articles in full
//   GET /public/help/search?q=     the search box (called from the browser, components/docs/DocsSearch)
// So an article edited in the app repo shows here within the hour, and nothing is copied by hand.
// The pages are static with ISR (DOCS_REVALIDATE_SECONDS) and `generateStaticParams` comes from the
// contents. An article page reads its whole topic (some thirty requests build every page; a
// topic's answer is shared by its articles).
//
// When the API cannot be reached, or is one from before it had these routes (the live app then
// answers its own web page, not JSON): while the site builds, the pages carry on without it (an
// empty Docs home, no article pages yet, each built on its first visit), never a failed build; on
// a live refresh the page throws instead, so the copy already being served stays
// (docsUnavailable); under `next dev` the page says what is missing and how to get it.
//
// Working on the Docs pages on your own machine needs no database and not the whole API: in the
// app repo, `node backend/scripts/serveDocs.js` serves just these three routes from the article
// files on port 5391, and NEXT_PUBLIC_DOCS_API_URL=http://localhost:5391/api in .env.local points
// the Docs (and only the Docs) at it.
import { API_URL, APP_URL } from '@/lib/site'
import { navTitleOf } from '@/lib/docs-text'

export const SITE_URL = 'https://forkhr.com'
export const DOCS_REVALIDATE_SECONDS = 3600
/** Where the Docs are read from: the app API, unless NEXT_PUBLIC_DOCS_API_URL names another. Public, because the search box calls it from the browser. */
export const DOCS_API_URL = (process.env.NEXT_PUBLIC_DOCS_API_URL || API_URL).replace(/\/$/, '')

const TIMEOUT_MS = 10_000
const ID_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/
const DESCRIPTION_LENGTH = 160

export type DocsArticleBrief = { id: string; title: string; summary: string; plan: string | null }
export type DocsTopic = { key: string; label: string; description: string; articles: DocsArticleBrief[] }
export type DocsSection = { key: string; label: string; topics: DocsTopic[] }
export type DocsIndex = { version: string; count: number; sections: DocsSection[] }

export type DocsLink = { id: string; title: string }
export type DocsArticle = {
  id: string
  title: string
  topic: string
  topicLabel: string
  section: string
  sectionLabel: string
  summary: string
  plan: string | null
  /** The article's plain text (lib/docs-text.ts reads it). */
  content: string
  /** Quoted names in the text that are other articles: the words → that article's id. */
  links: Record<string, string>
  related: DocsLink[]
  prev: DocsLink | null
  next: DocsLink | null
}
export type DocsTopicBundle = Omit<DocsTopic, 'articles'> & { section: string; sectionLabel: string; articles: DocsArticle[] }

type Answer<T> = { data: T } | { missing: true } | { failed: true }

const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms))

/** GET the API's `data`. A 404 is `missing`; anything else that goes wrong (network, timeout, 429, 5xx, bad JSON) is `failed`, after one more try. */
const getData = async <T,>(path: string): Promise<Answer<T>> => {
  for (let attempt = 0; attempt < 2; attempt += 1) {
    if (attempt) await wait(600)
    try {
      const res = await fetch(`${DOCS_API_URL}${path}`, {
        next: { revalidate: DOCS_REVALIDATE_SECONDS },
        signal: AbortSignal.timeout(TIMEOUT_MS),
        headers: { Accept: 'application/json' },
      })
      if (res.status === 404) return { missing: true }
      if (!res.ok) continue
      const json = (await res.json()) as { data?: T }
      if (json?.data) return { data: json.data }
    } catch {
      // tried once more, then failed
    }
  }
  return { failed: true }
}

const BUILDING = process.env.NEXT_PHASE === 'phase-production-build'
/** Under `next dev`: a page that cannot read the Docs draws DocsOnTheWay, which says why and what to run. */
export const DOCS_DEV = process.env.NODE_ENV === 'development'

/**
 * The API gave no answer. On a live refresh of the live site this throws: Next then keeps
 * serving the page it already has and tries again on a later visit. While the site builds, and
 * under `next dev`, it returns, and the caller draws what it can without the articles.
 */
export const docsUnavailable = () => {
  if (!BUILDING && !DOCS_DEV) throw new Error(`The Docs could not be read from ${DOCS_API_URL}/public/help`)
}

/** The contents, or null when the API cannot be reached. */
export const fetchDocsIndex = async (): Promise<DocsIndex | null> => {
  const answer = await getData<DocsIndex>('/public/help')
  if (!('data' in answer) || !Array.isArray(answer.data.sections)) return null
  const sections = answer.data.sections
    .map((section) => ({
      ...section,
      topics: (section.topics || [])
        .filter((topic) => topic && ID_RE.test(String(topic.key)))
        .map((topic) => ({ ...topic, articles: (topic.articles || []).filter((a) => a && ID_RE.test(String(a.id))) }))
        .filter((topic) => topic.articles.length),
    }))
    .filter((section) => section.topics.length)
  return { version: String(answer.data.version || ''), count: sections.reduce((n, s) => n + s.topics.reduce((m, t) => m + t.articles.length, 0), 0), sections }
}

/** One topic with its articles in full; 'missing' when there is no such topic, null when the API cannot be reached. */
export const fetchDocsTopic = async (key: string): Promise<DocsTopicBundle | 'missing' | null> => {
  if (!ID_RE.test(key)) return 'missing'
  const answer = await getData<DocsTopicBundle>(`/public/help/topics/${encodeURIComponent(key)}`)
  if ('missing' in answer) return 'missing'
  if (!('data' in answer) || !Array.isArray(answer.data.articles)) return null
  return answer.data
}

/** Where an article sits in the contents, or null. */
export const placeOf = (index: DocsIndex, id: string) => {
  for (const section of index.sections) {
    for (const topic of section.topics) {
      const brief = topic.articles.find((a) => a.id === id)
      if (brief) return { section, topic, brief }
    }
  }
  return null
}

export const topicOf = (index: DocsIndex, key: string) => {
  for (const section of index.sections) {
    const topic = section.topics.find((t) => t.key === key)
    if (topic) return { section, topic }
  }
  return null
}

/** One article; 'missing' when the contents have no such id, null when the API cannot be reached. */
export const fetchDocsArticle = async (id: string): Promise<DocsArticle | 'missing' | null> => {
  if (!ID_RE.test(id)) return 'missing'
  const index = await fetchDocsIndex()
  if (!index) return null
  const place = placeOf(index, id)
  if (!place) return 'missing'
  const topic = await fetchDocsTopic(place.topic.key)
  if (!topic || topic === 'missing') return null
  // In the contents but not in its topic: the two answers are from either side of a deploy
  return topic.articles.find((a) => a.id === id) || null
}

export const docPath = (id: string) => `/docs/${encodeURIComponent(id)}`
export const topicPath = (key: string) => `/docs/topics/${encodeURIComponent(key)}`
/** A page of the app an article gives the web address of ("/schedule" → app.forkhr.com/schedule). */
export const appPageUrl = (path: string) => `${APP_URL}${path}`

export const articlesLabel = (n: number) => `${n} ${n === 1 ? 'article' : 'articles'}`

/** The contents as the sidebar draws them: names only, each article under its short name. */
export type DocsNavSection = { key: string; label: string; topics: { key: string; label: string; articles: DocsLink[] }[] }
export const navSectionsOf = (index: DocsIndex): DocsNavSection[] =>
  index.sections.map((section) => ({
    key: section.key,
    label: section.label,
    topics: section.topics.map((topic) => {
      const titles = topic.articles.map((a) => a.title)
      return { key: topic.key, label: topic.label, articles: topic.articles.map((a) => ({ id: a.id, title: navTitleOf(a.title, titles) })) }
    }),
  }))

/** Where a new reader usually starts (the app's Docs home shows the same); only those that exist are shown. */
export const POPULAR_DOCS = ['fork-overview', 'team-add-employees', 'schedule-create-edit-shifts', 'supply-placing-orders', 'sops-create-board', 'timecards-clock-in']

/** Those articles as the Docs home and the search palette offer them: the short name, with the topic each sits in. */
export type DocsPopular = { id: string; title: string; topic: string; topicLabel: string }
export const popularDocsOf = (index: DocsIndex): DocsPopular[] =>
  POPULAR_DOCS.flatMap((id) => {
    const place = placeOf(index, id)
    return place ? [{ id, title: navTitleOf(place.brief.title), topic: place.topic.key, topicLabel: place.topic.label }] : []
  })

const clip = (text: string, max: number) => (text.length <= max ? text : `${text.slice(0, max - 1).trimEnd()}…`)
const lowerFirst = (text: string) => (/^[A-Z][a-z]/.test(text) ? text.charAt(0).toLowerCase() + text.slice(1) : text)

/** The browser tab and the search result's title: "<Article> | Fork Docs". */
export const docTitle = (title: string) => `${title} | Fork Docs`
export const docDescription = (article: Pick<DocsArticle, 'summary' | 'title'>) => clip((article.summary || article.title).replace(/\s+/g, ' ').trim(), DESCRIPTION_LENGTH)
/** "Scheduling in Fork: shifts, templates, open shifts, trades, availability. 15 step-by-step articles for the web and the app." */
export const topicDescription = (topic: Pick<DocsTopic, 'label' | 'description' | 'articles'>) =>
  `${topic.label} in Fork${topic.description ? `: ${lowerFirst(topic.description)}` : ''}. ${topic.articles.length === 1 ? 'A step-by-step article' : `${topic.articles.length} step-by-step articles`} for the web and the app.`

// An article's text goes through JSON.stringify; "<" is escaped too so no title can close the script tag
export const jsonLd = (value: unknown) => JSON.stringify(value).replace(/</g, '\\u003c')
