'use client'

import { Mail } from 'lucide-react'
import { cn } from '@/lib/utils'
import { SELLER } from './storefrontBits'
import { useInView, useSequence } from './useSequence'

// What the storefront did lately, on the seller's Sales → Set up ("Storefront views"): views this
// week against last with a bar per day for 14 days, then "Most viewed" (items whose tile stayed on
// a reader's screen) and "Searched but not found" (what readers typed that matched nothing). Counts
// only, never who. Under it, the Monday summary email that carries the same week.
const DAYS = [3, 5, 4, 6, 2, 5, 4, 7, 9, 8, 11, 6, 10, 13]
const MOST = [
  ['Oat milk, barista', 41],
  ['Espresso blend, 5 lb', 33],
  ['12 oz hot cups', 19],
  ['Cold brew concentrate', 12],
] as const
const MISSED = [
  ['decaf', 6],
  ['chai concentrate', 4],
  ['compostable lids', 3],
] as const

export default function StorefrontInsightsPreview({ className }: { className?: string }) {
  const { ref, inView } = useInView<HTMLDivElement>()
  // 1 the week · 2 bars · 3 most viewed · 4 not found · 5 the Monday email
  const step = useSequence(5, { inView, ms: [500, 700, 900, 900, 1000], holdMs: 3200 })
  const max = Math.max(...DAYS)
  const thisWeek = DAYS.slice(7).reduce((s, n) => s + n, 0)
  const lastWeek = DAYS.slice(0, 7).reduce((s, n) => s + n, 0)

  return (
    <div ref={ref} className={cn('px-4 py-3.5 text-warm-950', className)}>
      <div className="flex items-center justify-between gap-3">
        <span className="text-[13px] font-semibold">Storefront views</span>
        <span className="truncate text-[10px] text-warm-400">/v/{SELLER.slug}</span>
      </div>

      <div className="mt-2 flex items-center justify-between gap-4 border-b border-warm-100 pb-3">
        <div data-on={step >= 1} className="pv-item min-w-0">
          <div className="text-[12px] font-semibold tabular-nums">{thisWeek} views this week</div>
          <div className="text-[10px] tabular-nums text-ok-700">+{thisWeek - lastWeek} vs last week</div>
        </div>
        <div className="flex h-9 w-[104px] shrink-0 items-end gap-[3px] @sm:w-[140px]">
          {DAYS.map((v, i) => (
            <span
              key={i}
              data-on={step >= 2}
              className={cn('pv-grow flex-1 rounded-xs', i >= 7 ? 'bg-warm-950' : 'bg-warm-300')}
              style={{ height: `${Math.max(15, Math.round((v / max) * 100))}%`, transitionDelay: `${i * 35}ms` }}
            />
          ))}
        </div>
      </div>

      <div className="grid gap-4 pt-3 @md:grid-cols-2">
        <div className="min-w-0">
          <div className="text-[11.5px] font-semibold">Most viewed</div>
          <div className="text-[9.5px] text-warm-400">Items whose tile stayed on screen, last 14 days.</div>
          {MOST.map(([name, n], i) => (
            <div key={name} data-on={step >= 3} className="pv-item flex items-center justify-between gap-3 border-b border-warm-100 py-1.5 last:border-b-0" style={{ transitionDelay: `${i * 70}ms` }}>
              <span className="truncate text-[11px]">{name}</span>
              <span className="shrink-0 text-[10px] tabular-nums text-warm-500">{n} views</span>
            </div>
          ))}
        </div>
        <div className="min-w-0">
          <div className="text-[11.5px] font-semibold">Searched but not found</div>
          <div className="text-[9.5px] text-warm-400">Buyers looked for these on your page and found nothing.</div>
          {MISSED.map(([term, n], i) => (
            <div key={term} data-on={step >= 4} className="pv-item flex items-center justify-between gap-3 border-b border-warm-100 py-1.5 last:border-b-0" style={{ transitionDelay: `${i * 70}ms` }}>
              <span className="truncate text-[11px]">{term}</span>
              <span className="shrink-0 text-[10px] tabular-nums text-warm-500">{n} searches</span>
            </div>
          ))}
        </div>
      </div>

      <div data-on={step >= 5} className="pv-item mt-3 flex items-center gap-2.5 rounded-lg bg-warm-50 px-3 py-2 ring-1 ring-warm-100">
        <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-warm-600 ring-1 ring-warm-200">
          <Mail className="h-3 w-3" />
        </span>
        <div className="min-w-0 flex-1 leading-tight">
          <div className="truncate text-[10.5px] font-semibold">{SELLER.name}: your week on Fork</div>
          <div className="truncate text-[9.5px] text-warm-500">
            Mon 8:00 AM · {thisWeek} views · 11 orders received · $2,184.60 delivered
          </div>
        </div>
      </div>
    </div>
  )
}
