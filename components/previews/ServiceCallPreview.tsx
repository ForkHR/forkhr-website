'use client'

import { Camera, Check, Landmark, MapPin, Navigation, Receipt, Wrench } from 'lucide-react'
import { cn } from '@/lib/utils'
import { IconTile, Initials, Pill, money } from './bits'
import { useInView, useSequence } from './useSequence'

// A service call from the provider's side: booked, worked on site, and the visit's parts and
// hours turning into the invoice, paid by a customer who is not on Fork.
const CALL_OUT = 95
const LABOR = { hours: 1.5, rate: 110 }
const PART = { name: 'Evaporator fan motor', price: 68 }
const total = CALL_OUT + LABOR.hours * LABOR.rate + PART.price

const STATUS = [
  { label: 'New', tone: 'neutral' },
  { label: 'Scheduled', tone: 'brand' },
  { label: 'On the way', tone: 'brand' },
  { label: 'On site', tone: 'warn' },
  { label: 'Completed', tone: 'ok' },
  { label: 'Invoiced', tone: 'warn' },
  { label: 'Paid', tone: 'ok' },
] as const

export default function ServiceCallPreview({ className }: { className?: string }) {
  const { ref, inView } = useInView<HTMLDivElement>()
  const step = useSequence(6, { inView, ms: [700, 900, 900, 1300, 1100, 1100], holdMs: 3200 })
  const status = STATUS[step]
  const finished = step >= 4

  const timeline = [
    { on: step >= 1, icon: <Initials name="Marco Ruiz" size={20} />, t: 'Visit booked · Marco', d: 'Thu 8–10 AM' },
    { on: step >= 2, icon: <Navigation className="h-3 w-3" />, t: 'On the way', d: '8:12 AM · customer told' },
    { on: step >= 3, icon: <MapPin className="h-3 w-3" />, t: 'Arrived', d: '8:31 AM' },
    { on: step >= 4, icon: <Check className="h-3 w-3" />, t: 'Finished · signed by Dana', d: '10:02 AM · 2 photos', ok: true },
    { on: step >= 5, icon: <Receipt className="h-3 w-3" />, t: 'Invoice emailed', d: 'Pay link + work report' },
    { on: step >= 6, icon: <Landmark className="h-3 w-3" />, t: 'Paid by card', d: `${money(total)} · Fri 9:40 AM`, ok: true },
  ]

  return (
    <div ref={ref} className={cn('text-warm-950', className)}>
      <div className="flex items-center gap-3 border-b border-warm-100 px-4 py-2.5">
        <IconTile tone="brand" size={30}>
          <Wrench />
        </IconTile>
        <div className="min-w-0 flex-1">
          <div className="truncate text-[13px] font-semibold">Walk-in cooler not holding temp</div>
          <div className="truncate text-[10.5px] text-warm-500">#SR-1042 · Corner Café · Main St · not on Fork</div>
        </div>
        <Pill tone={status.tone}>{status.label}</Pill>
      </div>

      <div className="grid @md:grid-cols-[1fr_200px]">
        {/* Charges: the call-out from the start, labor and parts from the visit */}
        <div className="px-4 py-3">
          <div className="grid grid-cols-[1fr_64px] text-[10px] font-bold uppercase tracking-wider text-warm-400">
            <span>Charges</span>
            <span className="text-right">Amount</span>
          </div>
          <div className="grid grid-cols-[1fr_64px] border-b border-warm-100 py-2 text-[12px]">
            <span className="truncate">
              Service call <span className="text-warm-400">· per visit</span>
            </span>
            <span className="text-right font-medium tabular-nums">{money(CALL_OUT)}</span>
          </div>
          <div data-on={finished} className="pv-item grid grid-cols-[1fr_64px] border-b border-warm-100 py-2 text-[12px]">
            <span className="truncate">
              Labor <span className="text-warm-400">· 1 h 30 min × {money(LABOR.rate)}</span>
            </span>
            <span className="text-right font-medium tabular-nums">{money(LABOR.hours * LABOR.rate)}</span>
          </div>
          <div data-on={finished} className="pv-item grid grid-cols-[1fr_64px] border-b border-warm-100 py-2 text-[12px]" style={{ transitionDelay: '120ms' }}>
            <span className="truncate">
              {PART.name} <span className="text-warm-400">· part</span>
            </span>
            <span className="text-right font-medium tabular-nums">{money(PART.price)}</span>
          </div>
          <div className="flex justify-between pt-2 text-[13px] font-semibold">
            <span>Total</span>
            <span className="pv-swap tabular-nums">{money(finished ? total : CALL_OUT)}</span>
          </div>
          <div className="text-[10.5px] text-warm-400">{finished ? 'Hours and parts added from the visit' : 'Hours and parts come from the visit'}</div>

          {/* Proof of work */}
          <div className="mt-3 flex items-center gap-2">
            {['Before', 'After'].map((label, i) => (
              <span
                key={label}
                data-on={finished}
                className="pv-pop flex h-11 w-14 flex-col items-center justify-center gap-0.5 rounded-md bg-linear-to-br from-warm-200 to-warm-100 text-[9px] font-medium text-warm-500"
                style={{ transitionDelay: `${i * 100}ms` }}
              >
                <Camera className="h-3 w-3" />
                {label}
              </span>
            ))}
            <span data-on={finished} className="pv-pop flex h-11 flex-1 flex-col justify-center rounded-md border border-warm-200 px-2" style={{ transitionDelay: '200ms' }}>
              <svg viewBox="0 0 80 18" className="h-4 w-20" aria-hidden="true">
                <path d="M2 13 C 8 2, 12 2, 14 10 S 20 16, 24 8 S 32 2, 34 11 S 42 15, 46 7 S 56 4, 60 10 S 70 13, 78 6" fill="none" stroke="#09090B" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <span className="text-[9px] text-warm-500">Dana Lee · manager</span>
            </span>
          </div>
        </div>

        {/* What happened, in order */}
        <div className="border-t border-warm-100 bg-warm-50 px-4 py-3 @md:border-l @md:border-t-0">
          <ol className="space-y-2.5 text-[11px]">
            {timeline.map((e) => (
              <li key={e.t} data-on={e.on} className="pv-item flex items-start gap-2">
                <span className={cn('mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full', e.ok ? 'bg-ok-100 text-ok-700' : 'bg-white text-warm-500 ring-1 ring-warm-200')}>
                  {e.icon}
                </span>
                <div className="min-w-0">
                  <div className="truncate font-semibold">{e.t}</div>
                  <div className="truncate text-warm-500">{e.d}</div>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
  )
}
