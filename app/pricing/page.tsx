import type { Metadata } from 'next'
import { Fragment } from 'react'
import Link from 'next/link'
import { ArrowRight, Bot, Check, Gift, Minus, ShieldCheck, Users } from 'lucide-react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import Backdrop from '@/components/visual/Backdrop'
import CtaSection from '@/components/marketing/CtaSection'
import SectionHeading from '@/components/marketing/SectionHeading'
import { FEATURE_GROUPS, TIERS, tierIncludes } from '@/lib/catalog'
import { PRICING_FAQS as faqs } from '@/lib/pricing-faq'
import { GUARANTEE_DAYS, REFERRAL_REWARD_MONTHS, REGISTER_URL, SUPPORT_EMAIL } from '@/lib/site'
import { cn } from '@/lib/utils'

const description = `Ordering and selling are free. Team tools from $39 per location per month with unlimited employees and a ${GUARANTEE_DAYS}-day money-back guarantee.`

export const metadata: Metadata = {
  title: 'Pricing — Fork | Free to order and sell, per-location plans for the team',
  description,
  alternates: { canonical: '/pricing' },
  openGraph: {
    title: 'Pricing — Fork | Free to order and sell, per-location plans for the team',
    description,
    url: 'https://forkhr.com/pricing',
    images: ['/og-image.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pricing — Fork',
    description,
    images: ['/og-image.png'],
  },
}

export default function PricingPage() {
  const jsonLdFaq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  }

  return (
    <main className="pt-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />

      {/* Hero + plans */}
      <section className="relative overflow-hidden border-b border-warm-100">
        <Backdrop />
        <div className="relative mx-auto max-w-6xl px-6 pb-16 pt-12 md:pb-24 md:pt-28">
          <div className="max-w-2xl">
            <span className="eyebrow mb-4">Pricing</span>
            <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight text-warm-950 md:text-6xl">Free to order and sell. One price per location for the team.</h1>
            <p className="mt-5 text-lg leading-relaxed text-warm-600">
              Unlimited employees on every plan. No per-user fees. Every paid plan comes with a {GUARANTEE_DAYS}-day money-back guarantee.
            </p>
            <a
              href="/pricing.md"
              className="mt-6 inline-flex items-center gap-2 rounded-full border border-warm-200 bg-white/80 px-3.5 py-1.5 text-[13px] font-medium text-warm-600 transition-colors hover:border-warm-300 hover:text-warm-950"
            >
              <Bot className="h-3.5 w-3.5 text-forest-600" />
              Are you an AI agent? See pricing
              <ArrowRight className="h-3.5 w-3.5" />
            </a>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {TIERS.map((tier) => (
              <div key={tier.key} className={cn('surface flex flex-col p-7', tier.popular && 'border-warm-950 ring-1 ring-warm-950')}>
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-semibold text-warm-950">{tier.name}</h2>
                  {tier.popular && <span className="rounded-full bg-warm-950 px-2 py-0.5 text-[11px] font-semibold text-white">Most popular</span>}
                  {tier.key === 'free' && <span className="rounded-full bg-ok-50 px-2 py-0.5 text-[11px] font-semibold text-ok-700">No card needed</span>}
                </div>
                <p className="mt-1 text-sm text-warm-500">{tier.tagline}</p>
                <div className="mt-5 flex items-end gap-1">
                  <span className="text-5xl font-semibold tracking-tight text-warm-950">${tier.price}</span>
                  <span className="mb-1.5 text-sm text-warm-500">{tier.price === 0 ? 'forever' : '/mo per location'}</span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-warm-600">{tier.description}</p>
                <Link href={REGISTER_URL} target="_blank" className="mb-6 mt-6">
                  <Button className="w-full" variant={tier.popular ? 'default' : 'outline'}>
                    {tier.cta}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
                <div className="mb-3 text-xs font-semibold uppercase tracking-wider text-warm-500">What&apos;s included</div>
                <ul className="flex-1 space-y-2.5">
                  {tier.bullets.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-forest-600" strokeWidth={2.5} />
                      <span className="text-[14px] text-warm-600">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {[
              { icon: <Users className="h-4 w-4" />, t: 'Unlimited employees', d: 'One price per active location, no matter how many people work there.' },
              { icon: <ShieldCheck className="h-4 w-4" />, t: `${GUARANTEE_DAYS}-day money-back guarantee`, d: 'Not for you? Cancel within the first month of a paid plan for a full refund.' },
              { icon: <Gift className="h-4 w-4" />, t: 'Referrals: a month for both of you', d: `Refer a business and you each get ${REFERRAL_REWARD_MONTHS} month of their plan as credit.` },
            ].map((b) => (
              <div key={b.t} className="flex items-start gap-3 rounded-xl border border-warm-200/70 bg-white/70 p-4">
                <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-forest-50 text-forest-600">{b.icon}</span>
                <div>
                  <div className="text-[14px] font-semibold text-warm-950">{b.t}</div>
                  <div className="text-[13px] leading-relaxed text-warm-500">{b.d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison */}
      <section className="border-b border-warm-100">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <SectionHeading eyebrow="Compare" title="Every feature, by plan" lede="Each plan includes everything in the plans before it." />

          <div className="mt-12 overflow-x-auto">
            <table className="w-full min-w-[640px] border-collapse text-left">
              <thead>
                <tr className="border-b border-warm-200">
                  <th className="py-3 pr-4 text-[13px] font-medium text-warm-400">Feature</th>
                  {TIERS.map((t) => (
                    <th key={t.key} className="w-[15%] px-2 py-3 text-center">
                      <div className="text-[14px] font-semibold text-warm-950">{t.name}</div>
                      <div className="text-[12px] font-normal text-warm-400">{t.price === 0 ? 'Free' : `$${t.price}/location`}</div>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {FEATURE_GROUPS.map((group) => (
                  <Fragment key={group.label}>
                    <tr className="bg-warm-50">
                      <th colSpan={TIERS.length + 1} className="px-3 py-2 text-[11px] font-bold uppercase tracking-wider text-warm-500">
                        {group.label}
                      </th>
                    </tr>
                    {group.features.map((f) => (
                      <tr key={f.key} className="border-b border-warm-100">
                        <td className="py-3 pr-4 text-[14px] text-warm-700">
                          {f.label}
                          {f.note && <span className="block text-[12px] text-warm-400">{f.note}</span>}
                        </td>
                        {TIERS.map((t) => (
                          <td key={t.key} className="px-2 py-3 text-center">
                            {tierIncludes(t.key, f) ? (
                              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-forest-50 text-forest-600">
                                <Check className="h-3 w-3" strokeWidth={3} />
                              </span>
                            ) : (
                              <Minus className="inline h-3.5 w-3.5 text-warm-300" />
                            )}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </Fragment>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mt-6 text-sm text-warm-400">
            Reports are unlocked one by one: labor and purchasing reports on Essential, attendance and SOP reports on Premium. Vendor and customer chat stays free on every plan.
          </p>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-warm-100 bg-warm-50">
        <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
          <h2 className="mb-10 text-3xl font-semibold tracking-tight text-warm-950 md:text-4xl">Questions about pricing</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-warm-200">
                <AccordionTrigger className="py-5 text-left text-base font-medium text-warm-950 hover:text-warm-600 hover:no-underline">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-[15px] leading-relaxed text-warm-600">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <p className="mt-8 text-sm text-warm-500">
            Something else?{' '}
            <a href={`mailto:${SUPPORT_EMAIL}`} className="font-medium text-forest-600 hover:text-forest-700">
              {SUPPORT_EMAIL}
            </a>
          </p>
        </div>
      </section>

      <CtaSection title="Start on Free today" lede="Set up your locations, vendors and customers for free. Add the team tools when you are ready." />
    </main>
  )
}
