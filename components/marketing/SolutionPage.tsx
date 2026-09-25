import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Hero from './Hero'
import FeatureRow from './FeatureRow'
import SectionHeading from './SectionHeading'
import CtaSection from './CtaSection'
import PlanBadge from './PlanBadge'
import { Window } from '@/components/previews/bits'
import { frameFor, renderPreview } from '@/components/previews/registry'
import { tierByKey } from '@/lib/catalog'
import { relatedLink, type Solution } from '@/lib/solutions'
import { GUARANTEE_DAYS, REGISTER_URL } from '@/lib/site'

/**
 * Every solution page (an industry or a job to be done) renders through this one template,
 * so they all sell the same way: the searcher's words in the headline, the day-one changes,
 * the three or four features that matter with their live demo, what it costs for them, and
 * the questions people type into Google.
 */
export default function SolutionPage({ solution }: { solution: Solution }) {
  const paid = tierByKey(solution.pricing.paidTier)
  const related = solution.related.map(relatedLink).filter((l): l is NonNullable<typeof l> => !!l)

  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: solution.faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Fork', item: 'https://forkhr.com' },
        { '@type': 'ListItem', position: 2, name: 'Solutions', item: 'https://forkhr.com/solutions' },
        { '@type': 'ListItem', position: 3, name: solution.name, item: `https://forkhr.com/solutions/${solution.slug}` },
      ],
    },
  ]

  return (
    <main className="pt-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Hero
        crumb={{ label: 'Solutions', href: '/solutions', current: solution.menuLabel }}
        plan={solution.plan}
        title={solution.h1}
        lede={solution.lede}
        secondaryHref="#pricing"
        secondaryLabel="What it costs"
        aside={<Window title={solution.heroPreviewTitle}>{renderPreview(solution.heroPreview)}</Window>}
      />

      {/* Day one */}
      <section className="border-b border-warm-100 bg-warm-50">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <SectionHeading eyebrow="What changes on day one" title={`Before and after, for ${solution.name.toLowerCase()}`} />
          <div className="mt-10 overflow-hidden rounded-2xl border border-warm-200 bg-white">
            <div className="hidden grid-cols-[1fr_40px_1fr] border-b border-warm-200 bg-warm-50 px-6 py-3 text-[11px] font-bold uppercase tracking-wider text-warm-400 md:grid">
              <span>Today</span>
              <span />
              <span>With Fork</span>
            </div>
            {solution.pains.map((p) => (
              <div key={p.before} className="grid gap-2 border-b border-warm-100 px-6 py-5 last:border-b-0 md:grid-cols-[1fr_40px_1fr] md:items-center md:gap-0">
                <p className="text-[15px] leading-relaxed text-warm-500">{p.before}</p>
                <span className="hidden justify-center text-warm-300 md:flex">
                  <ArrowRight className="h-4 w-4" />
                </span>
                <p className="text-[15px] font-medium leading-relaxed text-warm-950">{p.after}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      {solution.features.map((f, i) => (
        <FeatureRow
          key={f.title}
          flip={i % 2 === 1}
          eyebrow={f.eyebrow}
          plan={f.plan}
          title={f.title}
          lede={f.lede}
          bullets={f.bullets}
          preview={renderPreview(f.preview)}
          previewTitle={f.previewTitle}
          frame={frameFor(f.preview)}
          href={f.href}
          hrefLabel={f.hrefLabel}
        />
      ))}

      {/* Pricing for this business */}
      <section id="pricing" className="scroll-mt-24 border-b border-warm-100 bg-warm-50">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <SectionHeading
            eyebrow="What it costs"
            title={`Pricing for ${solution.name.toLowerCase()}`}
            lede={`Start on the free plan. Add the team tools when you are ready, one price per location, unlimited employees, ${GUARANTEE_DAYS}-day money-back guarantee.`}
          />
          <div className="mt-12 grid gap-5 md:grid-cols-2">
            <div className="surface flex flex-col p-7">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-warm-950">Free</h3>
                <span className="rounded-full bg-ok-50 px-2 py-0.5 text-[11px] font-semibold text-ok-700">No card needed</span>
              </div>
              <div className="mt-3 flex items-end gap-1">
                <span className="text-4xl font-semibold tracking-tight text-warm-950">$0</span>
                <span className="mb-1.5 text-sm text-warm-500">forever</span>
              </div>
              <ul className="mt-5 flex-1 space-y-2.5">
                {solution.pricing.free.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-[15px] text-warm-700">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-forest-600" strokeWidth={2.5} />
                    {b}
                  </li>
                ))}
              </ul>
              <Link href={REGISTER_URL} target="_blank" className="mt-7 inline-flex items-center justify-center rounded-full border border-warm-200 bg-white px-5 py-2.5 text-sm font-medium text-warm-950 transition-colors hover:border-warm-300">
                Start for free
              </Link>
            </div>
            <div className="surface flex flex-col border-warm-950 p-7 ring-1 ring-warm-950">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-warm-950">{paid.name}</h3>
                <PlanBadge tier={paid.key} />
              </div>
              <div className="mt-3 flex items-end gap-1">
                <span className="text-4xl font-semibold tracking-tight text-warm-950">${paid.price}</span>
                <span className="mb-1.5 text-sm text-warm-500">/mo per location</span>
              </div>
              <ul className="mt-5 flex-1 space-y-2.5">
                {solution.pricing.paid.map((b) => (
                  <li key={b} className="flex items-start gap-2.5 text-[15px] text-warm-700">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-forest-600" strokeWidth={2.5} />
                    {b}
                  </li>
                ))}
              </ul>
              <p className="mt-4 text-sm text-warm-500">{solution.pricing.note}</p>
              <Link href={REGISTER_URL} target="_blank" className="mt-5 inline-flex items-center justify-center rounded-full bg-warm-950 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-warm-800">
                Start with {paid.name}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="mt-6 text-sm text-warm-500">
            Every plan includes the plans before it.{' '}
            <Link href="/pricing" className="font-medium text-forest-600 hover:text-forest-700">
              Compare every feature by plan
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-warm-100">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid gap-12 md:grid-cols-[1fr_1.6fr] md:gap-16">
            <SectionHeading eyebrow="Questions" title={solution.kind === 'business' ? `${solution.name} ask us` : `Questions about ${solution.name.toLowerCase()}`} lede="Short answers. Anything else, support@forkhr.com answers within the day." />
            <Accordion type="single" collapsible className="w-full border-t border-warm-100">
              {solution.faqs.map((faq, i) => (
                <AccordionItem key={i} value={`faq-${i}`} className="border-warm-100 last:border-b">
                  <AccordionTrigger className="py-5 text-left text-base font-medium text-warm-950 hover:text-warm-600 hover:no-underline">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-[15px] leading-relaxed text-warm-600">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Related */}
      {related.length > 0 && (
        <section className="border-b border-warm-100 bg-warm-50">
          <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-10 md:flex-row md:items-center md:gap-8">
            <span className="shrink-0 text-[13px] font-medium text-warm-400">Also for</span>
            <div className="flex flex-wrap gap-2">
              {related.map((l) => (
                <Link key={l.href} href={l.href} className="inline-flex items-center gap-1.5 rounded-full border border-warm-200 bg-white px-3.5 py-1.5 text-[13px] font-medium text-warm-600 transition-colors hover:border-warm-300 hover:text-warm-950">
                  {l.label}
                  <ArrowRight className="h-3 w-3 text-warm-400" />
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <CtaSection title={solution.ctaTitle} lede="Ordering and selling are free. Add the team tools when you are ready, from $39 per location per month." />
    </main>
  )
}
