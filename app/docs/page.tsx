import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ArrowUpRight, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Backdrop from '@/components/visual/Backdrop'
import GradientStage from '@/components/visual/GradientStage'
import CtaSection from '@/components/marketing/CtaSection'
import { DocsSearchTrigger } from '@/components/docs/DocsSearch'
import { DocsOnTheWay } from '@/components/docs/DocsBits'
import { topicIcon } from '@/components/docs/topicIcons'
import { SITE_URL, articlesLabel, docPath, docsUnavailable, fetchDocsIndex, jsonLd, popularDocsOf, topicPath, type DocsPopular } from '@/lib/docs'
import { APP_URL, SUPPORT_EMAIL } from '@/lib/site'

// Static with ISR: rebuilt in the background once an hour from the app API's help center
export const revalidate = 3600

const title = 'Fork Docs: guides for every part of Fork'
const description =
  'How everything in Fork works, on the web and in the app: schedules, timecards, time off, chat, SOPs, hiring and HR records, ordering from vendors, stock counts, selling and invoicing. Where things are, what each button does and how to get the work done.'

export async function generateMetadata(): Promise<Metadata> {
  const index = await fetchDocsIndex()
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: '/docs' },
    openGraph: { title, description, url: `${SITE_URL}/docs`, images: ['/og-image.png'], type: 'website', siteName: 'Fork' },
    twitter: { card: 'summary_large_image', title, description, images: ['/og-image.png'] },
    // A page with no articles on it yet (DocsOnTheWay) is not one for a search engine to keep
    ...(index ? {} : { robots: { index: false, follow: true } }),
  }
}

/**
 * Where a new reader usually starts, as a window standing on the moving gradient, the way the
 * site's other heroes show the product. These are real links, so the frame is drawn here and not
 * with the demos' Window (which nothing in can be clicked).
 */
const StartHere = ({ popular }: { popular: DocsPopular[] }) => (
  <div className="pv-window overflow-hidden rounded-2xl border border-warm-200 bg-white text-warm-950 shadow-[0_24px_60px_-28px_rgba(9,9,11,0.35)]">
    <div aria-hidden="true" className="flex items-center gap-2 border-b border-warm-100 px-3.5 py-2.5">
      <div className="flex gap-1.5">
        <span className="h-2.5 w-2.5 rounded-full bg-warm-200" />
        <span className="h-2.5 w-2.5 rounded-full bg-warm-200" />
        <span className="h-2.5 w-2.5 rounded-full bg-warm-200" />
      </div>
      <div className="flex-1 truncate pr-11 text-center text-[11px] font-medium text-warm-400">Fork · Docs</div>
    </div>
    <div className="p-2.5 sm:p-3">
      <h2 className="px-3 pb-1.5 pt-2 text-[11px] font-semibold uppercase tracking-wider text-warm-400">Start here</h2>
      <ul>
        {popular.map((a) => {
          const Icon = topicIcon(a.topic)
          return (
            <li key={a.id}>
              <Link href={docPath(a.id)} className="group flex items-center gap-3 rounded-2xl px-3 py-2.5 transition-colors hover:bg-warm-100/70">
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-warm-100 text-warm-700 transition-colors group-hover:bg-white group-hover:text-forest-600">
                  <Icon className="h-[18px] w-[18px]" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block truncate text-[15px] font-semibold leading-snug tracking-tight text-warm-950">{a.title}</span>
                  <span className="block truncate text-[13px] leading-snug text-warm-500">{a.topicLabel}</span>
                </span>
                <ChevronRight aria-hidden="true" className="h-4 w-4 shrink-0 text-warm-300 transition-[color,transform] group-hover:translate-x-0.5 group-hover:text-warm-600" />
              </Link>
            </li>
          )
        })}
      </ul>
    </div>
  </div>
)

export default async function DocsHomePage() {
  const index = await fetchDocsIndex()
  if (!index) {
    docsUnavailable()
    return (
      <main className="pt-16">
        <div className="mx-auto max-w-6xl px-4 md:px-6">
          <DocsOnTheWay />
        </div>
      </main>
    )
  }
  const popular = popularDocsOf(index)
  const topics = index.sections.flatMap((s) => s.topics)

  const collection = {
    '@context': 'https://schema.org',
    '@type': 'CollectionPage',
    name: 'Fork Docs',
    description,
    url: `${SITE_URL}/docs`,
    isPartOf: { '@type': 'WebSite', name: 'Fork', url: SITE_URL },
    hasPart: topics.map((t) => ({ '@type': 'CollectionPage', name: t.label, url: `${SITE_URL}${topicPath(t.key)}` })),
  }

  return (
    <main className="pt-16">
      {/* The hero, as on the site's other pages: the words and the search at the left, where to start on the moving gradient at the right */}
      <section className="relative overflow-hidden border-b border-warm-100">
        <Backdrop />
        <div className="relative mx-auto max-w-6xl px-6 pb-16 pt-12 md:pb-24 md:pt-24">
          <div className="grid items-center gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-20">
            <div className="relative z-10">
              <span className="eyebrow mb-4">Docs</span>
              <h1 className="text-4xl font-semibold leading-[1.05] tracking-[-0.02em] text-warm-950 sm:text-5xl md:text-6xl">How can we help?</h1>
              <p className="mt-6 max-w-xl text-lg leading-relaxed text-warm-600 md:text-xl">Guides for every part of Fork: where things are, what each button and menu does, and how to get the work done.</p>
              <DocsSearchTrigger size="lg" className="mt-9 max-w-xl" />
              <p className="mt-5 text-sm text-warm-400">
                {articlesLabel(index.count)} in {topics.length} topics, kept in step with the app
              </p>
            </div>
            {popular.length > 0 && (
              <div className="on-gradient relative min-w-0 lg:static">
                <GradientStage className="lg:h-[620px]" seed={4} />
                <div className="relative lg:pl-10">
                  <StartHere popular={popular} />
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Every topic, by area: the area named at the left, its topics as cards beside it */}
      <section aria-labelledby="browse-title" className="mx-auto max-w-6xl px-4 pb-8 pt-14 md:px-6 md:pt-20">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl">
            <span className="eyebrow mb-4">Browse</span>
            <h2 id="browse-title" className="text-3xl font-semibold tracking-tight text-warm-950 md:text-4xl">
              Every part of Fork, by topic
            </h2>
          </div>
        </div>
        <nav aria-label="Areas" className="-mx-4 mt-7 flex gap-2 overflow-x-auto px-4 pb-1 [scrollbar-width:none] md:mx-0 md:flex-wrap md:px-0 [&::-webkit-scrollbar]:hidden">
          {index.sections.map((section) => (
            <a
              key={section.key}
              href={`#${section.key}`}
              className="shrink-0 rounded-full border border-warm-200 bg-white px-3.5 py-1.5 text-[13px] font-medium text-warm-600 transition-colors hover:border-warm-300 hover:text-warm-950"
            >
              {section.label}
            </a>
          ))}
        </nav>

        <div className="mt-6 divide-y divide-warm-100">
          {index.sections.map((section) => {
            const count = section.topics.reduce((n, t) => n + t.articles.length, 0)
            return (
              <section key={section.key} id={section.key} aria-labelledby={`${section.key}-title`} className="grid scroll-mt-20 gap-x-10 gap-y-5 py-10 lg:grid-cols-[200px_minmax(0,1fr)] lg:py-12">
                <div>
                  <h3 id={`${section.key}-title`} className="text-[22px] font-semibold leading-tight tracking-tight text-warm-950">
                    {section.label}
                  </h3>
                  <p className="mt-1.5 text-[13.5px] text-warm-400">{articlesLabel(count)}</p>
                </div>
                <ul className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
                  {section.topics.map((topic) => {
                    const Icon = topicIcon(topic.key)
                    return (
                      <li key={topic.key} className="flex min-w-0">
                        <Link href={topicPath(topic.key)} className="surface surface-hover group relative flex min-w-0 flex-1 flex-col p-5">
                          <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-forest-50 text-forest-600 transition-colors group-hover:bg-forest-600 group-hover:text-white">
                            <Icon className="h-[18px] w-[18px]" />
                          </span>
                          <ArrowUpRight aria-hidden="true" className="absolute right-5 top-5 h-4 w-4 text-warm-300 opacity-0 transition-opacity group-hover:opacity-100" />
                          <span className="mt-4 text-[16px] font-semibold leading-snug tracking-tight text-warm-950">{topic.label}</span>
                          <span className="mt-1 flex-1 text-[14px] leading-relaxed text-warm-600">{topic.description}</span>
                          <span className="mt-4 text-[13px] font-medium text-warm-400">{articlesLabel(topic.articles.length)}</span>
                        </Link>
                      </li>
                    )
                  })}
                </ul>
              </section>
            )
          })}
        </div>
      </section>

      {/* When the docs did not answer it */}
      <section className="border-t border-warm-100 bg-warm-50">
        <div className="mx-auto flex max-w-6xl flex-col gap-5 px-4 py-12 md:flex-row md:items-center md:justify-between md:px-6 md:py-16">
          <div className="max-w-xl">
            <h2 className="text-2xl font-semibold tracking-tight text-warm-950 md:text-3xl">Didn&apos;t find what you need?</h2>
            <p className="mt-2 text-[15px] leading-relaxed text-warm-600">Fork Support, inside the app, answers from these docs and can pass you to Fork&apos;s team.</p>
          </div>
          <div className="flex shrink-0 flex-wrap gap-3">
            <Button asChild size="lg" className="h-11 px-6 text-base">
              <a href={`${APP_URL}/docs`} target="_blank" rel="noopener noreferrer">
                Ask in the app
                <ArrowUpRight className="ml-1.5 h-4 w-4" />
              </a>
            </Button>
            <Button asChild variant="outline" size="lg" className="h-11 px-6 text-base">
              <a href={`mailto:${SUPPORT_EMAIL}`}>
                Email support
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      <CtaSection />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(collection) }} />
    </main>
  )
}
