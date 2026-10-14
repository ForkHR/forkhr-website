'use client'

import { Camera, Check, MapPin, Navigation, Phone as PhoneIcon, Timer, Wrench } from 'lucide-react'
import { cn } from '@/lib/utils'
import { IconTile, Pill, SectionLabel, money } from './bits'
import { useInView, useSequence } from './useSequence'

// The technician's phone through one visit: On my way, Arrived, then the finish screen
// collecting photos, time on site, parts and the customer's signature.
const STAGES = [
  { pill: 'Scheduled', tone: 'brand', button: 'On my way' },
  { pill: 'On the way', tone: 'brand', button: 'Arrived' },
  { pill: 'On site', tone: 'warn', button: 'Finish visit' },
  { pill: 'On site', tone: 'warn', button: 'Finish visit' },
  { pill: 'On site', tone: 'warn', button: 'Finish visit' },
  { pill: 'On site', tone: 'warn', button: 'Finish visit' },
  { pill: 'Completed', tone: 'ok', button: 'Ready to invoice' },
] as const

export default function TechnicianPreview({ className }: { className?: string }) {
  const { ref, inView } = useInView<HTMLDivElement>()
  const step = useSequence(6, { inView, ms: [900, 1000, 1000, 900, 1100, 1000], holdMs: 3000 })
  const stage = STAGES[step]
  const finishing = step >= 3
  const done = step >= 6

  return (
    <div ref={ref} className={cn('text-warm-950', className)}>
      <div className="flex items-center justify-between border-b border-warm-100 px-3 py-2.5">
        <span className="text-[13px] font-semibold">#SR-1042</span>
        <Pill tone={stage.tone}>{stage.pill}</Pill>
      </div>

      {/* The job */}
      <div className="px-3 pt-3">
        <div className="flex items-start gap-2.5">
          <IconTile tone="brand" size={30}>
            <Wrench />
          </IconTile>
          <div className="min-w-0 flex-1">
            <div className="text-[12px] font-semibold leading-snug">Walk-in cooler not holding temp</div>
            <div className="mt-0.5 flex items-center gap-1 text-[10.5px] text-warm-500">
              <MapPin className="h-3 w-3 shrink-0" /> Corner Café · 412 Main St
            </div>
            <div className="text-[10.5px] text-warm-500">Thu 8–10 AM · ask for Dana</div>
          </div>
        </div>
        <div className="mt-2.5 grid grid-cols-2 gap-2">
          <span className="inline-flex items-center justify-center gap-1 rounded-full bg-warm-950 py-1.5 text-[10.5px] font-semibold text-white">
            <Navigation className="h-3 w-3" /> Navigate
          </span>
          <span className="inline-flex items-center justify-center gap-1 rounded-full border border-warm-200 py-1.5 text-[10.5px] font-semibold">
            <PhoneIcon className="h-3 w-3" /> Call
          </span>
        </div>
      </div>

      {/* Finish visit: what the work report will say */}
      <SectionLabel className={cn('pv-swap px-3 pt-4', !finishing && 'opacity-40')} right={finishing ? 'Proof of work' : 'after the work'}>
        Finish visit
      </SectionLabel>
      <div className="space-y-2 px-3 pb-3">
        <div className="flex gap-1.5">
          {[0, 1].map((i) => (
            <span
              key={i}
              data-on={step >= 3}
              className="pv-pop flex h-10 flex-1 items-center justify-center gap-1 rounded-md bg-linear-to-br from-warm-200 to-warm-100 text-[9.5px] font-medium text-warm-500"
              style={{ transitionDelay: `${i * 120}ms` }}
            >
              <Camera className="h-3 w-3" /> After
            </span>
          ))}
        </div>
        <div data-on={step >= 4} className="pv-item flex items-center justify-between rounded-md border border-warm-100 px-2 py-1.5 text-[10.5px]">
          <span className="inline-flex items-center gap-1 text-warm-600">
            <Timer className="h-3 w-3" /> On site
          </span>
          <span className="font-semibold tabular-nums">1 h 30 min</span>
        </div>
        <div data-on={step >= 4} className="pv-item flex items-center justify-between rounded-md border border-warm-100 px-2 py-1.5 text-[10.5px]" style={{ transitionDelay: '120ms' }}>
          <span className="truncate text-warm-600">Evaporator fan motor × 1</span>
          <span className="font-semibold tabular-nums">{money(68)}</span>
        </div>
        <div className="rounded-md border border-warm-100 px-2 pb-1 pt-1.5">
          <svg viewBox="0 0 120 26" className="h-6 w-full" aria-hidden="true">
            <path
              d="M4 18 C 12 4, 18 4, 21 15 S 30 22, 35 11 S 46 3, 49 15 S 60 21, 65 10 S 78 5, 83 14 S 98 19, 116 8"
              pathLength={100}
              data-on={step >= 5}
              className="pv-path"
              fill="none"
              stroke="#09090B"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
          <div className="flex justify-between border-t border-warm-100 pt-1 text-[9.5px] text-warm-500">
            <span>Customer signature</span>
            <span data-on={step >= 5} className="pv-item font-medium text-warm-700">
              Dana Lee
            </span>
          </div>
        </div>
      </div>

      <div className="px-3 pb-4">
        <span
          className={cn(
            'pv-swap flex items-center justify-center gap-1.5 rounded-full py-2 text-[12px] font-semibold',
            done ? 'bg-ok-50 text-ok-700' : 'bg-warm-950 text-white',
          )}
        >
          {done && <Check className="h-3.5 w-3.5" />}
          {stage.button}
        </span>
      </div>

    </div>
  )
}
