'use client'

import { cn } from '@/lib/utils'
import { Pill } from './bits'
import { useInView, useSequence } from './useSequence'

// Sales vs. labor: a week of sales bars with labor read against them, from the POS sync.
const DAYS = [
  { d: 'Mon', sales: 2140, labor: 610 },
  { d: 'Tue', sales: 1980, labor: 590 },
  { d: 'Wed', sales: 2460, labor: 640 },
  { d: 'Thu', sales: 2610, labor: 680 },
  { d: 'Fri', sales: 3870, labor: 820 },
  { d: 'Sat', sales: 4320, labor: 910 },
  { d: 'Sun', sales: 3150, labor: 1080 },
]
const fmt = (n: number) => `$${n.toLocaleString('en-US')}`

export default function ReportPreview({ className, title = 'Sales vs. labor' }: { className?: string; title?: string }) {
  const { ref, inView } = useInView<HTMLDivElement>()
  const step = useSequence(3, { inView, ms: [500, 700, 1200], holdMs: 3400 })
  const max = Math.max(...DAYS.map((x) => x.sales))
  const sales = DAYS.reduce((s, x) => s + x.sales, 0)
  const labor = DAYS.reduce((s, x) => s + x.labor, 0)
  const pct = Math.round((labor / sales) * 100)

  return (
    <div ref={ref} className={cn('text-warm-950', className)}>
      <div className="flex items-center justify-between border-b border-warm-100 px-4 py-2.5">
        <div className="flex items-center gap-2">
          <span className="text-[13px] font-semibold">{title}</span>
          <Pill>Main St</Pill>
          <Pill>This week</Pill>
        </div>
        <span className="text-[10.5px] text-warm-400">Square · synced 12 min ago</span>
      </div>

      <div className="grid grid-cols-3 gap-4 px-4 pt-3">
        {[
          { l: 'Sales', v: fmt(sales) },
          { l: 'Labor', v: fmt(labor) },
          { l: 'Labor %', v: `${pct}%`, tone: pct > 30 ? 'text-bad-600' : 'text-ok-600' },
        ].map((s) => (
          <div key={s.l} data-on={step >= 1} className="pv-item">
            <div className="text-[10.5px] text-warm-400">{s.l}</div>
            <div className={cn('text-[18px] font-semibold tabular-nums tracking-tight', s.tone)}>{s.v}</div>
          </div>
        ))}
      </div>

      <div className="flex items-end gap-2 px-4 pb-2 pt-4" style={{ height: 150 }}>
        {DAYS.map((x, i) => {
          const dayPct = Math.round((x.labor / x.sales) * 100)
          const hot = dayPct > 30
          return (
            <div key={x.d} className="flex flex-1 flex-col items-center gap-1">
              <span data-on={step >= 3} className={cn('pv-item text-[9px] font-bold tabular-nums', hot ? 'text-bad-600' : 'text-warm-400')}>
                {dayPct}%
              </span>
              <div className="flex w-full flex-1 items-end">
                <div
                  data-on={step >= 2}
                  className="pv-grow relative w-full overflow-hidden rounded-md bg-warm-100"
                  style={{ height: `${(x.sales / max) * 100}%`, transitionDelay: `${i * 60}ms` }}
                >
                  <div className={cn('absolute bottom-0 left-0 right-0 rounded-md', hot ? 'bg-bad-500' : 'bg-warm-950')} style={{ height: `${(x.labor / x.sales) * 100}%` }} />
                </div>
              </div>
              <span className="text-[10px] text-warm-500">{x.d}</span>
            </div>
          )
        })}
      </div>

      <div className="flex items-center justify-between border-t border-warm-100 px-4 py-2 text-[10.5px] text-warm-400">
        <span className="inline-flex items-center gap-3">
          <span className="inline-flex items-center gap-1">
            <span className="h-2 w-2 rounded-sm bg-warm-100 ring-1 ring-warm-200" /> Sales
          </span>
          <span className="inline-flex items-center gap-1">
            <span className="h-2 w-2 rounded-sm bg-warm-950" /> Labor
          </span>
        </span>
        <span data-on={step >= 3} className="pv-item font-medium text-bad-600">
          Sunday ran 34% labor · 2 people over
        </span>
      </div>
    </div>
  )
}
