import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import SolutionPage from '@/components/marketing/SolutionPage'
import { SOLUTIONS, getSolution } from '@/lib/solutions'

// Generated solution pages (industries and jobs to be done). Hand-built pages in sibling
// folders (compliance, franchise, ...) take precedence over this dynamic segment.
export const dynamicParams = false

export function generateStaticParams() {
  return SOLUTIONS.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const s = getSolution(slug)
  if (!s) return {}
  const url = `https://forkhr.com/solutions/${s.slug}`
  return {
    title: `${s.title} | Fork`,
    description: s.description,
    alternates: { canonical: `/solutions/${s.slug}` },
    openGraph: { title: s.title, description: s.description, url, images: ['/og-image.png'], type: 'website' },
    twitter: { card: 'summary_large_image', title: s.title, description: s.description, images: ['/og-image.png'] },
  }
}

export default async function Page({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const solution = getSolution(slug)
  if (!solution) notFound()
  return <SolutionPage solution={solution} />
}
