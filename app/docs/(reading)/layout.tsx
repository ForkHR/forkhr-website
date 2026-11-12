import DocsMobileBar from '@/components/docs/DocsMobileBar'
import DocsNav from '@/components/docs/DocsNav'
import { DocsSearchTrigger } from '@/components/docs/DocsSearch'
import { cn } from '@/lib/utils'
import { fetchDocsIndex, navSectionsOf } from '@/lib/docs'

// The reading pages of the Docs (a topic, an article): the contents down the left on a wide
// screen, with the search above them; below that width a bar under the site header holds a
// Contents button (the same list in a sheet) and the search.
export const revalidate = 3600

export default async function DocsReadingLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const index = await fetchDocsIndex()
  const sections = index ? navSectionsOf(index) : []
  const hasNav = sections.length > 0

  return (
    <main className="pt-16">
      <div className={cn('mx-auto max-w-6xl px-4 md:px-6', hasNav && 'lg:grid lg:grid-cols-[248px_minmax(0,1fr)] lg:gap-12')}>
        {hasNav && (
          <aside className="hidden border-r border-warm-100 lg:block">
            <div className="sticky top-16 flex h-[calc(100vh-4rem)] flex-col pr-6 pt-8">
              <DocsSearchTrigger />
              {/* The list fades out under the search and at the foot, where it scrolls on */}
              <div data-docs-nav-scroll className="-mr-3 mt-3 min-h-0 flex-1 overflow-y-auto pb-10 pr-3 pt-3 mask-[linear-gradient(to_bottom,transparent,black_14px,black_calc(100%-32px),transparent)]">
                <DocsNav sections={sections} />
              </div>
            </div>
          </aside>
        )}
        <div className="min-w-0">
          {hasNav && <DocsMobileBar sections={sections} />}
          {children}
        </div>
      </div>
    </main>
  )
}
