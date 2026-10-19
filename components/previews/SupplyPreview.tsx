'use client'

import { Check, RefreshCw } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Initials, Pill, Progress, SectionLabel, Toast } from './bits'
import { useInView, useSequence } from './useSequence'

// The buyer's side: orders out to vendors, a recurring order, and what is on hand against par.
// Labels are the app's: order numbers ORD-YYMMDD-XXXXX, "Submitted" once an order goes out, a
// recurring plan "Weekly" and "Active", the order guide's "+8 to par", and the phone's Par refill
// toast ("2 items topped up to par at Main St").
const ORDERS = [
  { vendor: 'Bluebird Dairy', no: '#ORD-260929-K7F3Q', when: 'Delivery Thu 6:30 AM', total: '$486.20', status: 'Confirmed', tone: 'ok' as const },
  { vendor: 'Harvest Produce', no: '#ORD-260930-M2B8D', when: 'Delivery Fri', total: '$312.10', status: 'Submitted', tone: 'brand' as const },
  { vendor: 'Fork Warehouse', no: 'Recurring · Weekly · Mon', when: 'Next run Mon 5', total: '$208.00', status: 'Active', tone: 'neutral' as const, standing: true },
]

const COUNT = [
  { item: 'Whole milk, gal', have: 4, par: 12 },
  { item: 'Butter, lb', have: 9, par: 10 },
  { item: 'Eggs, dozen', have: 2, par: 6 },
]

export default function SupplyPreview({ className }: { className?: string }) {
  const { ref, inView } = useInView<HTMLDivElement>()
  const step = useSequence(6, { inView, ms: [450, 450, 450, 800, 900, 1100], holdMs: 3000 })

  return (
    <div ref={ref} className={cn('relative grid text-warm-950 @lg:grid-cols-[1.2fr_1fr]', className)}>
      <div className="@lg:border-r @lg:border-warm-100">
        <div className="flex items-center gap-1 border-b border-warm-100 px-3 py-2 text-[11px] font-medium">
          {['Orders', 'Recurring', 'Vendors', 'Invoices'].map((t, i) => (
            <span key={t} className={cn('rounded-full px-2.5 py-1', i === 0 ? 'bg-warm-950 text-white' : 'text-warm-500')}>
              {t}
            </span>
          ))}
        </div>
        <SectionLabel right="This week">Orders</SectionLabel>
        {ORDERS.map((o, i) => (
          <div key={o.no} data-on={step > i} className="pv-item flex items-center gap-3 border-b border-warm-100 px-4 py-2.5 last:border-b-0">
            <Initials name={o.vendor} size={30} />
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-1.5 text-[12px] font-semibold">
                <span className="truncate">{o.vendor}</span>
                {o.standing && <RefreshCw className="h-3 w-3 text-warm-400" />}
              </div>
              <div className="truncate text-[10.5px] text-warm-500">
                {o.no} · {o.when}
              </div>
            </div>
            <div className="text-right">
              <div className="text-[12px] font-semibold tabular-nums">{o.total}</div>
              <Pill tone={o.tone} className="mt-0.5">
                {o.status}
              </Pill>
            </div>
          </div>
        ))}
      </div>

      <div className="border-t border-warm-100 @lg:border-t-0">
        <SectionLabel right="Main St">On hand / par</SectionLabel>
        {COUNT.map((c, i) => {
          const short = c.par - c.have
          const pct = (c.have / c.par) * 100
          const low = pct < 50
          return (
            <div key={c.item} data-on={step >= 4} className="pv-item border-b border-warm-100 px-4 py-2.5" style={{ transitionDelay: `${i * 80}ms` }}>
              <div className="flex items-center justify-between text-[12px]">
                <span className="font-semibold">{c.item}</span>
                <span className="tabular-nums text-warm-500">
                  <span className={cn('font-semibold', low ? 'text-bad-600' : 'text-warm-950')}>{c.have}</span> / par {c.par}
                </span>
              </div>
              <div className="mt-1.5 flex items-center gap-2">
                <Progress value={step >= 5 ? pct : 0} tone={low ? 'brand' : 'dark'} className="flex-1" />
                <span data-on={step >= 6 && short > 1} className={cn('pv-pop whitespace-nowrap rounded-full bg-forest-50 px-2 py-0.5 text-[10px] font-semibold text-forest-700', short <= 1 && 'invisible')}>
                  +{short} to par
                </span>
              </div>
            </div>
          )
        })}
        <div className="px-4 py-2.5 text-[10.5px] text-warm-400">Counted on a phone · Par refill puts what is short in the cart</div>
      </div>

      <Toast on={step >= 6}>
        <Check className="h-3.5 w-3.5 text-ok-500" /> 2 items topped up to par at Main St
      </Toast>
    </div>
  )
}
