import Link from 'next/link'
import { ArrowRight, ArrowUpRight, BookOpen, ChevronRight, FileText, LifeBuoy } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { APP_URL, SUPPORT_EMAIL } from '@/lib/site'
import { DOCS_API_URL, DOCS_DEV, docPath, type DocsArticleBrief } from '@/lib/docs'

// The pieces the Docs pages share: breadcrumbs, the plan pill, a list of articles and the card
// that ends every page.

export type Crumb = { label: string; href?: string }

export const Crumbs = ({ items }: { items: Crumb[] }) => (
  <nav aria-label="Breadcrumb" className="mb-5 flex min-w-0 flex-wrap items-center gap-x-1.5 gap-y-1 text-sm">
    {items.map((item, i) => (
      <span key={item.label} className="inline-flex min-w-0 items-center gap-1.5">
        {i > 0 && <ChevronRight aria-hidden="true" className="h-3.5 w-3.5 shrink-0 text-warm-300" />}
        {item.href ? (
          <Link href={item.href} className="text-warm-500 transition-colors hover:text-warm-950">
            {item.label}
          </Link>
        ) : (
          <span className="text-warm-500">{item.label}</span>
        )}
      </span>
    ))}
  </nav>
)

const planLabel = (plan: string) => (/plan$/i.test(plan) ? plan : `${plan} plan`)

/** The plan an article's feature is on ("Essential plan", "Every plan"); links to pricing unless it sits inside a link already. */
export const PlanPill = ({ plan, link = true, className }: { plan: string; link?: boolean; className?: string }) => {
  const label = planLabel(plan)
  const cls = cn('inline-flex shrink-0 items-center gap-1.5 rounded-full border border-warm-200 bg-white px-2.5 py-0.5 text-[12px] font-medium text-warm-600', className)
  const body = (
    <>
      <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-warm-400" />
      {label}
    </>
  )
  return link ? (
    <Link href="/pricing" className={cn(cls, 'transition-colors hover:border-warm-300 hover:text-warm-950')}>
      {body}
    </Link>
  ) : (
    <span className={cls}>{body}</span>
  )
}

/** Articles as rows of one card: the title, the plan when it matters, and the article's one-line summary. */
export const ArticleRows = ({ articles, showPlans = true }: { articles: DocsArticleBrief[]; showPlans?: boolean }) => (
  <ul className="divide-y divide-warm-100 overflow-hidden rounded-2xl border border-warm-200 bg-white">
    {articles.map((a) => (
      <li key={a.id}>
        <Link href={docPath(a.id)} className="group flex items-start gap-4 px-5 py-5 transition-colors hover:bg-warm-50">
          <span aria-hidden="true" className="mt-0.5 hidden h-9 w-9 shrink-0 items-center justify-center rounded-full bg-warm-100 text-warm-600 transition-colors group-hover:bg-forest-50 group-hover:text-forest-600 sm:inline-flex">
            <FileText className="h-4 w-4" />
          </span>
          <span className="min-w-0 flex-1">
            <span className="block text-[16px] font-semibold leading-snug tracking-tight text-warm-950">{a.title}</span>
            <span className="mt-1 block text-[14.5px] leading-relaxed text-warm-600">{a.summary}</span>
          </span>
          {/* The plan, quietly: the article says it in full, and a pill on every row shouted */}
          {showPlans && a.plan ? <span className="mt-[3px] hidden shrink-0 whitespace-nowrap text-[12.5px] font-medium text-warm-400 md:block">{planLabel(a.plan)}</span> : null}
          <ArrowRight aria-hidden="true" className="mt-2.5 h-4 w-4 shrink-0 text-warm-300 transition-[color,transform] group-hover:translate-x-0.5 group-hover:text-warm-950" />
        </Link>
      </li>
    ))}
  </ul>
)

const code = 'rounded-md bg-warm-100 px-1.5 py-px font-mono text-[0.88em] text-warm-900'

/**
 * A Docs page with no articles to draw: the app API gave no answer when the page was made (the
 * site built before the API had the Docs routes, or with the API down). The page fills in on its
 * next refresh. Under `next dev` it also says which address was asked and how to get an answer
 * on this machine; that note is never part of the live site.
 */
export const DocsOnTheWay = () => (
  <div className="flex max-w-xl flex-col items-start gap-4 py-20 md:py-28">
    <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-warm-100 text-warm-700">
      <BookOpen className="h-5 w-5" />
    </span>
    <h1 className="text-2xl font-semibold tracking-tight text-warm-950">The docs are on their way</h1>
    <p className="text-[15px] leading-relaxed text-warm-600">
      They could not be loaded just now. Try again in a few minutes, or write to{' '}
      <a href={`mailto:${SUPPORT_EMAIL}`} className="font-medium text-forest-600 hover:text-forest-700">
        {SUPPORT_EMAIL}
      </a>
      .
    </p>
    {DOCS_DEV && (
      <div className="mt-2 w-full space-y-3 rounded-2xl border border-warm-200 bg-warm-50 p-5 text-[14px] leading-relaxed text-warm-700">
        <p className="text-[12px] font-semibold uppercase tracking-wider text-warm-400">Only shown on your machine</p>
        <p>
          <span className={code}>{DOCS_API_URL}/public/help</span> did not answer with the Docs. The live API has these routes once the app repo is deployed with them; until then, serve the articles from your own copy of the app repo:
        </p>
        <ol className="list-decimal space-y-2 pl-5">
          <li>
            In the app repo: <span className={code}>node backend/scripts/serveDocs.js</span> (no database needed).
          </li>
          <li>
            In this repo&apos;s <span className={code}>.env.local</span>: <span className={code}>NEXT_PUBLIC_DOCS_API_URL=http://localhost:5391/api</span>
          </li>
        </ol>
        <p>Then reload this page.</p>
      </div>
    )}
  </div>
)

/** The end of every reading page: where to ask when the docs did not answer it. */
export const HelpCard = () => (
  <div className="mt-16 flex flex-col gap-6 rounded-3xl bg-warm-50 p-6 sm:flex-row sm:items-center sm:justify-between md:p-8">
    <div className="flex min-w-0 items-start gap-4">
      <span aria-hidden="true" className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-white text-warm-700 shadow-[0_1px_2px_rgba(27,26,25,0.1)]">
        <LifeBuoy className="h-5 w-5" />
      </span>
      <div className="min-w-0">
        <div className="text-[18px] font-semibold tracking-tight text-warm-950">Didn&apos;t find what you need?</div>
        <p className="mt-1 max-w-md text-[14.5px] leading-relaxed text-warm-600">Fork Support, inside the app, answers from these docs and can pass you to Fork&apos;s team.</p>
      </div>
    </div>
    <div className="flex shrink-0 flex-wrap gap-2 sm:pl-0">
      <Button asChild>
        <a href={`${APP_URL}/docs`} target="_blank" rel="noopener noreferrer">
          Ask in the app
          <ArrowUpRight className="ml-1 h-4 w-4" />
        </a>
      </Button>
      <Button asChild variant="outline">
        <a href={`mailto:${SUPPORT_EMAIL}`}>Email support</a>
      </Button>
    </div>
  </div>
)
