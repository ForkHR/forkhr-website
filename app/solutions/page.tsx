import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Hero from '@/components/marketing/Hero'
import SectionHeading from '@/components/marketing/SectionHeading'
import CtaSection from '@/components/marketing/CtaSection'
import { SOLUTION_MENU, type SolutionLink } from '@/lib/solutions'
import { renderPreview } from '@/components/previews/registry'

const description =
  'Fork for coffee shops and bakeries, restaurants, food distributors, retail stores, gyms and franchises, and for the jobs they need done: employee scheduling, food safety checklists, wholesale ordering and invoicing, vendor ordering, compliance, cost control and multi-location management.'

export const metadata: Metadata = {
  title: 'Solutions — Fork for coffee shops, restaurants, distributors, retail, gyms and franchises',
  description,
  alternates: { canonical: '/solutions' },
  openGraph: { title: 'Solutions — Fork', description, url: 'https://forkhr.com/solutions', images: ['/og-image.png'], type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Solutions — Fork', description, images: ['/og-image.png'] },
}

const Card = ({ link }: { link: SolutionLink }) => (
  <Link href={link.href} className="surface surface-hover group flex flex-col overflow-hidden">
    <div className="p-5 pb-0">
      <h3 className="flex items-center justify-between gap-2 text-[17px] font-semibold tracking-tight text-warm-950">
        {link.label}
        <ArrowRight className="h-4 w-4 shrink-0 text-warm-300 transition-transform group-hover:translate-x-0.5 group-hover:text-warm-950" />
      </h3>
      <p className="mt-1 text-[14px] leading-relaxed text-warm-500">{link.desc}</p>
    </div>
    <div className="mt-4 flex-1 bg-warm-100/70 px-3 pt-3">
      <div className="@container pointer-events-none h-[150px] overflow-hidden rounded-t-lg border border-b-0 border-warm-200 bg-white shadow-[0_16px_40px_-24px_rgba(9,9,11,0.3)] mask-[linear-gradient(to_bottom,black_70%,transparent)]" aria-hidden="true">
        {renderPreview(link.preview)}
      </div>
    </div>
  </Link>
)

export default function SolutionsIndexPage() {
  return (
    <main className="pt-16">
      <Hero
        crumb={{ label: 'Fork', href: '/', current: 'Solutions' }}
        title="Built for the businesses that run on shifts, and the ones that supply them"
        lede="Pick your kind of business or the job you need done. Every page shows the features that matter for it, live, and what they cost."
        secondaryHref="/products"
        secondaryLabel="See every product"
      />

      <section className="border-b border-warm-100">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <SectionHeading eyebrow="By business" title="What kind of business do you run?" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SOLUTION_MENU.business.map((l) => (
              <Card key={l.href} link={l} />
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-warm-100 bg-warm-50">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
          <SectionHeading eyebrow="By need" title="What do you need done?" />
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SOLUTION_MENU.need.map((l) => (
              <Card key={l.href} link={l} />
            ))}
          </div>
        </div>
      </section>

      <CtaSection />
    </main>
  )
}
