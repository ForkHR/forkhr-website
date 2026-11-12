import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ArticleRows, Crumbs, DocsOnTheWay, HelpCard, PlanPill } from '@/components/docs/DocsBits'
import { topicIcon } from '@/components/docs/topicIcons'
import { DOCS_DEV, SITE_URL, articlesLabel, docPath, docTitle, docsUnavailable, fetchDocsIndex, jsonLd, topicDescription, topicOf, topicPath } from '@/lib/docs'

// Static with ISR: every topic of the contents is built, and each page is rebuilt in the
// background once an hour from the app API's help center
export const revalidate = 3600
export const dynamicParams = true

type Params = { params: Promise<{ topic: string }> }

export async function generateStaticParams() {
  const index = await fetchDocsIndex()
  return index ? index.sections.flatMap((s) => s.topics.map((t) => ({ topic: t.key }))) : []
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { topic: key } = await params
  const index = await fetchDocsIndex()
  const found = index ? topicOf(index, key) : null
  if (!found) return { title: 'Topic not found', robots: { index: false, follow: false } }
  const title = docTitle(found.topic.label)
  const description = topicDescription(found.topic)
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: topicPath(found.topic.key) },
    openGraph: { title, description, url: `${SITE_URL}${topicPath(found.topic.key)}`, images: ['/og-image.png'], type: 'website', siteName: 'Fork' },
    twitter: { card: 'summary', title, description, images: ['/og-image.png'] },
  }
}

export default async function DocsTopicPage({ params }: Params) {
  const { topic: key } = await params
  const index = await fetchDocsIndex()
  if (!index) {
    docsUnavailable()
    // `next dev` says what is missing; a build leaves a 404 that its next refresh replaces
    if (DOCS_DEV) return <DocsOnTheWay />
    notFound()
  }
  const found = topicOf(index, key)
  if (!found) notFound()
  const { section, topic } = found
  const Icon = topicIcon(topic.key)
  const url = `${SITE_URL}${topicPath(topic.key)}`

  // One plan for the whole topic is said once, in the header, not on every row
  const plans = [...new Set(topic.articles.map((a) => a.plan).filter(Boolean))]
  const onePlan = plans.length === 1 && topic.articles.every((a) => a.plan === plans[0]) ? plans[0] : null

  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Docs', item: `${SITE_URL}/docs` },
      { '@type': 'ListItem', position: 2, name: topic.label, item: url },
    ],
  }
  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: `${topic.label}: Fork Docs`,
    numberOfItems: topic.articles.length,
    itemListElement: topic.articles.map((a, i) => ({ '@type': 'ListItem', position: i + 1, name: a.title, url: `${SITE_URL}${docPath(a.id)}` })),
  }

  return (
    <div className="max-w-3xl pb-24 pt-8 lg:pt-12">
      {/* A section named as its only topic (Sales, Reports) is the title below, not a crumb too */}
      <Crumbs items={[{ label: 'Docs', href: '/docs' }, ...(section.label !== topic.label ? [{ label: section.label, href: `/docs#${section.key}` }] : [])]} />
      <header className="flex items-start gap-4">
        <span className="mt-0.5 inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-forest-50 text-forest-600">
          <Icon className="h-[22px] w-[22px]" />
        </span>
        <div className="min-w-0">
          <h1 className="text-[2rem] font-semibold leading-[1.1] tracking-[-0.02em] text-warm-950 sm:text-[2.5rem] md:text-[2.75rem]">{topic.label}</h1>
          <p className="mt-3 flex flex-wrap items-center gap-x-2.5 gap-y-2 text-[17px] leading-relaxed text-warm-600">
            <span>
              {topic.description ? `${topic.description} · ` : ''}
              {articlesLabel(topic.articles.length)}
            </span>
            {onePlan ? <PlanPill plan={onePlan} /> : null}
          </p>
        </div>
      </header>

      <div className="mt-10">
        <ArticleRows articles={topic.articles} showPlans={!onePlan} />
      </div>

      <HelpCard />

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(itemList) }} />
    </div>
  )
}
