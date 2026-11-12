import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowLeft, ArrowRight, FileText } from 'lucide-react'
import DocArticle from '@/components/docs/DocArticle'
import DocsToc from '@/components/docs/DocsToc'
import { Crumbs, DocsOnTheWay, HelpCard, PlanPill } from '@/components/docs/DocsBits'
import { outlineOf, parseDoc, questionsOf } from '@/lib/docs-text'
import { DOCS_DEV, SITE_URL, docDescription, docPath, docTitle, docsUnavailable, fetchDocsArticle, fetchDocsIndex, jsonLd, topicPath } from '@/lib/docs'

// Static with ISR: every article of the contents is built, one added since is built on its
// first visit, and each page is rebuilt in the background once an hour from the app API
export const revalidate = 3600
export const dynamicParams = true

type Params = { params: Promise<{ id: string }> }

const RELATED_SHOWN = 4

export async function generateStaticParams() {
  const index = await fetchDocsIndex()
  return index ? index.sections.flatMap((s) => s.topics.flatMap((t) => t.articles.map((a) => ({ id: a.id })))) : []
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { id } = await params
  const article = await fetchDocsArticle(id)
  if (!article || article === 'missing') return { title: 'Article not found', robots: { index: false, follow: false } }
  const title = docTitle(article.title)
  const description = docDescription(article)
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: docPath(article.id) },
    openGraph: { title, description, url: `${SITE_URL}${docPath(article.id)}`, images: ['/og-image.png'], type: 'article', siteName: 'Fork' },
    twitter: { card: 'summary', title, description, images: ['/og-image.png'] },
  }
}

export default async function DocsArticlePage({ params }: Params) {
  const { id } = await params
  const article = await fetchDocsArticle(id)
  if (article === 'missing') notFound()
  if (!article) {
    docsUnavailable()
    // `next dev` says what is missing; a build leaves a 404 that its next refresh replaces
    if (DOCS_DEV) return <DocsOnTheWay />
    notFound()
  }

  const sections = parseDoc(article.content)
  const outline = outlineOf(sections).map((s) => ({ id: s.id, label: s.label as string }))
  const questions = questionsOf(sections)
  const url = `${SITE_URL}${docPath(article.id)}`
  const description = docDescription(article)

  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Docs', item: `${SITE_URL}/docs` },
      { '@type': 'ListItem', position: 2, name: article.topicLabel, item: `${SITE_URL}${topicPath(article.topic)}` },
      { '@type': 'ListItem', position: 3, name: article.title, item: url },
    ],
  }
  const techArticle = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: article.title,
    description,
    url,
    mainEntityOfPage: url,
    articleSection: article.topicLabel,
    inLanguage: 'en',
    isPartOf: { '@type': 'WebSite', name: 'Fork Docs', url: `${SITE_URL}/docs` },
    about: { '@type': 'SoftwareApplication', name: 'Fork', applicationCategory: 'BusinessApplication', operatingSystem: 'Web, iOS, Android', url: SITE_URL },
    publisher: { '@type': 'Organization', name: 'Fork Workforce Inc.', url: SITE_URL, logo: `${SITE_URL}/favicon.svg` },
  }
  const faq = questions.length
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: questions.map((item) => ({ '@type': 'Question', name: item.q, acceptedAnswer: { '@type': 'Answer', text: item.a } })),
      }
    : null

  return (
    <div className="pb-24 pt-8 lg:pt-12 xl:grid xl:grid-cols-[minmax(0,1fr)_176px] xl:gap-12">
      <article className="min-w-0">
        <Crumbs
          items={[
            { label: 'Docs', href: '/docs' },
            // A section named as its only topic (Sales, Reports) is said once
            ...(article.sectionLabel && article.sectionLabel !== article.topicLabel ? [{ label: article.sectionLabel, href: `/docs#${article.section}` }] : []),
            { label: article.topicLabel, href: topicPath(article.topic) },
          ]}
        />
        <h1 className="text-[2rem] font-semibold leading-[1.1] tracking-[-0.02em] text-warm-950 sm:text-[2.5rem] md:text-[2.75rem]">{article.title}</h1>
        {article.plan ? (
          <div className="mt-4">
            <PlanPill plan={article.plan} />
          </div>
        ) : null}

        <div className="mt-7">
          <DocArticle sections={sections} links={article.links || {}} />
        </div>

        {article.related?.length ? (
          <section aria-labelledby="related-title" className="mt-16">
            <h2 id="related-title" className="text-[13px] font-semibold uppercase tracking-wider text-warm-400">
              Related
            </h2>
            <ul className="mt-4 grid gap-3 sm:grid-cols-2">
              {article.related.slice(0, RELATED_SHOWN).map((r) => (
                <li key={r.id} className="flex">
                  <Link href={docPath(r.id)} className="surface surface-hover group flex min-w-0 flex-1 items-center gap-3 px-4 py-3.5 text-[14.5px] font-medium leading-snug text-warm-800 hover:text-warm-950">
                    <span aria-hidden="true" className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-warm-100 text-warm-600 transition-colors group-hover:bg-forest-50 group-hover:text-forest-600">
                      <FileText className="h-4 w-4" />
                    </span>
                    <span className="min-w-0">{r.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ) : null}

        {article.prev || article.next ? (
          <nav aria-label="More in this topic" className="mt-12 grid gap-3 border-t border-warm-100 pt-8 sm:grid-cols-2">
            {article.prev ? (
              <Link href={docPath(article.prev.id)} className="surface surface-hover group flex min-w-0 flex-col gap-1 px-5 py-4">
                <span className="inline-flex items-center gap-1 text-[12.5px] font-medium text-warm-400">
                  <ArrowLeft aria-hidden="true" className="h-3.5 w-3.5" />
                  Previous
                </span>
                <span className="text-[14.5px] font-semibold leading-snug text-warm-800 group-hover:text-warm-950">{article.prev.title}</span>
              </Link>
            ) : (
              <span className="hidden sm:block" />
            )}
            {article.next ? (
              <Link href={docPath(article.next.id)} className="surface surface-hover group flex min-w-0 flex-col gap-1 px-5 py-4 sm:items-end sm:text-right">
                <span className="inline-flex items-center gap-1 text-[12.5px] font-medium text-warm-400">
                  Next
                  <ArrowRight aria-hidden="true" className="h-3.5 w-3.5" />
                </span>
                <span className="text-[14.5px] font-semibold leading-snug text-warm-800 group-hover:text-warm-950">{article.next.title}</span>
              </Link>
            ) : null}
          </nav>
        ) : null}

        <HelpCard />
      </article>

      <aside className="hidden xl:block">
        <div className="sticky top-24 max-h-[calc(100vh-7rem)] overflow-y-auto pb-4">
          <DocsToc items={outline} />
        </div>
      </aside>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbs) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(techArticle) }} />
      {faq && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(faq) }} />}
    </div>
  )
}
