import type { MetadataRoute } from 'next'
import { SOLUTIONS } from '@/lib/solutions'
import { fetchSuppliers, supplierPath } from '@/lib/suppliers'
import { docPath, fetchDocsIndex, topicPath } from '@/lib/docs'

// The supplier pages and the Docs come from the app API; the sitemap is rebuilt with them once an hour
export const revalidate = 3600

const baseUrl = 'https://forkhr.com'

type Page = { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] }

const pages: Page[] = [
  { path: '', priority: 1, changeFrequency: 'weekly' },
  { path: '/products', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/pricing', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/sops', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/performance', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/sales', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/storefront', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/supply', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/service-providers', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/suppliers', priority: 0.8, changeFrequency: 'daily' },
  { path: '/ai-assistant', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/hiring', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/solutions', priority: 0.8, changeFrequency: 'monthly' },
  ...SOLUTIONS.map((s): Page => ({ path: `/solutions/${s.slug}`, priority: 0.8, changeFrequency: 'monthly' })),
  { path: '/solutions/compliance', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/solutions/operational-efficiency', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/solutions/multi-location', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/solutions/employee-retention', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/solutions/franchise', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/demo', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/vendors', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/about', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/faq', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/privacy-policy', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/terms-of-service', priority: 0.3, changeFrequency: 'yearly' },
]

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const lastModified = new Date()
  // One entry per listed supplier (forkhr.com/suppliers/<slug>); none when the API cannot be reached
  const suppliers = await fetchSuppliers()
  // The Docs: the home, a page per topic and a page per article (forkhr.com/docs/<article>); none
  // when the API cannot be reached. No date: the API does not say when an article last changed.
  const docs = await fetchDocsIndex()
  const docTopics = docs ? docs.sections.flatMap((s) => s.topics) : []
  return [
    ...pages.map((p) => ({ url: `${baseUrl}${p.path}`, lastModified, changeFrequency: p.changeFrequency, priority: p.priority })),
    ...(docs ? [{ url: `${baseUrl}/docs`, lastModified, changeFrequency: 'weekly' as const, priority: 0.7 }] : []),
    ...docTopics.map((t) => ({ url: `${baseUrl}${topicPath(t.key)}`, changeFrequency: 'weekly' as const, priority: 0.5 })),
    ...docTopics.flatMap((t) => t.articles.map((a) => ({ url: `${baseUrl}${docPath(a.id)}`, changeFrequency: 'weekly' as const, priority: 0.5 }))),
    ...suppliers.map((s) => ({
      url: `${baseUrl}${supplierPath(s.slug)}`,
      lastModified: s.updatedAt ? new Date(s.updatedAt) : lastModified,
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    })),
  ]
}
