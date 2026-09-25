import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { TIERS } from '@/lib/catalog'
import { GUARANTEE_DAYS, REGISTER_URL } from '@/lib/site'
import { cn } from '@/lib/utils'
import SectionHeading from './SectionHeading'

/** The four plans at a glance, for the home page. Full detail lives on /pricing. */
export default function PricingTeaser() {
  return (
    <section className="border-b border-warm-100 bg-warm-50">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <SectionHeading
          eyebrow="Pricing"
          title="Free to order and sell. Pay per location for the team tools."
          lede={`One price per location, unlimited employees. Every paid plan comes with a ${GUARANTEE_DAYS}-day money-back guarantee.`}
        />
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {TIERS.map((t) => (
            <div key={t.key} className={cn('surface surface-hover flex flex-col p-6', t.popular && 'border-warm-950 ring-1 ring-warm-950')}>
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold text-warm-950">{t.name}</h3>
                {t.popular && <span className="rounded-full bg-warm-950 px-2 py-0.5 text-[11px] font-semibold text-white">Most popular</span>}
                {t.key === 'free' && <span className="rounded-full bg-ok-50 px-2 py-0.5 text-[11px] font-semibold text-ok-700">No card</span>}
              </div>
              <div className="mt-3 flex items-end gap-1">
                <span className="text-4xl font-semibold tracking-tight text-warm-950">${t.price}</span>
                <span className="mb-1.5 text-sm text-warm-500">{t.price === 0 ? 'forever' : '/mo per location'}</span>
              </div>
              <p className="mt-2 text-sm text-warm-500">{t.tagline}</p>
              <ul className="mt-5 space-y-2">
                {t.bullets.slice(0, 5).map((b) => (
                  <li key={b} className="flex items-start gap-2 text-[13.5px] text-warm-600">
                    <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-forest-600" strokeWidth={3} />
                    {b}
                  </li>
                ))}
              </ul>
              <Link href={REGISTER_URL} target="_blank" className="mt-auto pt-6">
                <span className={cn('inline-flex w-full items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition-colors', t.popular ? 'bg-warm-950 text-white hover:bg-warm-800' : 'border border-warm-200 bg-white text-warm-950 hover:border-warm-300')}>
                  {t.cta}
                </span>
              </Link>
            </div>
          ))}
        </div>
        <div className="mt-8 flex flex-wrap items-center justify-between gap-4 text-sm text-warm-500">
          <span>Company-wide plan · one tier for every active location · unlimited employees on every plan</span>
          <Link href="/pricing" className="inline-flex items-center gap-1.5 font-medium text-forest-600 hover:text-forest-700">
            Compare every feature
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
