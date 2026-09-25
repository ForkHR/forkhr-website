import type { MetadataRoute } from 'next'

const baseUrl = 'https://forkhr.com'

const pages: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] }[] = [
  { path: '', priority: 1, changeFrequency: 'weekly' },
  { path: '/products', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/pricing', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/sops', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/sales', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/supply', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/ai-assistant', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/hiring', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/solutions/compliance', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/solutions/operational-efficiency', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/solutions/multi-location', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/solutions/employee-retention', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/solutions/franchise', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/about', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/faq', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/privacy-policy', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/terms-of-service', priority: 0.3, changeFrequency: 'yearly' },
]

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date()
  return pages.map((p) => ({ url: `${baseUrl}${p.path}`, lastModified, changeFrequency: p.changeFrequency, priority: p.priority }))
}
