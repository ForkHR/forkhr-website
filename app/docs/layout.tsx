import { DocsSearchProvider } from '@/components/docs/DocsSearch'
import { fetchDocsIndex, popularDocsOf } from '@/lib/docs'

// The Docs (forkhr.com/docs): Fork's help center, read from the app API (lib/docs.ts), inside
// the marketing site's header and footer:
//   /docs                   a page of the site: the hero with the search, every topic by section
//   /docs/topics/<topic>    one topic's articles          ┐ the reading pages: the contents down the
//   /docs/<article>         one article, "On this page"   ┘ left (app/docs/(reading)/layout.tsx)
// This layout holds what all of them share: the search palette and the keys that open it.
// Static with ISR: rebuilt in the background once an hour, so an article changed in the app
// shows here without a deploy of this site.
export const revalidate = 3600

export default async function DocsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const index = await fetchDocsIndex()
  return <DocsSearchProvider popular={index ? popularDocsOf(index) : []}>{children}</DocsSearchProvider>
}
