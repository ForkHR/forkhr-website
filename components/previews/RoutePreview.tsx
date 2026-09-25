'use client'

import { Camera, Check, Truck } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Initials, Pill } from './bits'
import { useInView, useSequence } from './useSequence'

// A delivery route: the planned path on a map, the van moving stop to stop, proof of delivery.
const W = 300
const H = 190
const START = { x: 26, y: 156 }
const STOPS = [
  { x: 88, y: 58, name: 'Corner Café', eta: '6:40 AM', crates: '3 crates' },
  { x: 168, y: 36, name: 'Northside Deli', eta: '7:05 AM', crates: '5 crates' },
  { x: 226, y: 108, name: 'Pine & Pour', eta: '7:30 AM', crates: '2 crates' },
  { x: 272, y: 164, name: 'Harbor Market', eta: '7:55 AM', crates: '4 crates' },
]
const PATH = `M ${START.x} ${START.y} C 40 110, 60 70, ${STOPS[0].x} ${STOPS[0].y} S 140 30, ${STOPS[1].x} ${STOPS[1].y} S 220 60, ${STOPS[2].x} ${STOPS[2].y} S 250 150, ${STOPS[3].x} ${STOPS[3].y}`

export default function RoutePreview({ className }: { className?: string }) {
  const { ref, inView } = useInView<HTMLDivElement>()
  const step = useSequence(5, { inView, ms: [500, 1300, 1200, 1200, 1200], holdMs: 3000 })
  const delivered = Math.max(0, step - 1)
  const truck = step <= 1 ? START : STOPS[Math.min(delivered, STOPS.length) - 1]

  return (
    <div ref={ref} className={cn('grid text-warm-950 @lg:grid-cols-[1.15fr_1fr]', className)}>
      {/* Map */}
      <div className="relative flex items-center border-b border-warm-100 bg-[#F6F7F9] @lg:border-b-0 @lg:border-r">
        <div className="absolute left-3 top-3 z-10 flex items-center gap-2 rounded-full bg-white/90 px-2.5 py-1 text-[10.5px] font-medium shadow-sm ring-1 ring-warm-200">
          <Truck className="h-3 w-3 text-warm-500" /> Van 1 · Luis · 4 stops
        </div>
        {/* Wrapper hugs the drawing, so the van's percentages map to the viewBox */}
        <div className="relative w-full">
        <svg viewBox={`0 0 ${W} ${H}`} className="block h-auto w-full" aria-hidden="true">
          {/* streets */}
          <g stroke="#E4E4E7" strokeWidth="6" strokeLinecap="round">
            <path d="M0 40 H300" />
            <path d="M0 96 H300" />
            <path d="M0 150 H300" />
            <path d="M60 0 V190" />
            <path d="M130 0 V190" />
            <path d="M205 0 V190" />
            <path d="M255 0 V190" />
          </g>
          <g stroke="#fff" strokeWidth="1.2">
            <path d="M0 40 H300" />
            <path d="M0 96 H300" />
            <path d="M0 150 H300" />
            <path d="M60 0 V190" />
            <path d="M130 0 V190" />
            <path d="M205 0 V190" />
            <path d="M255 0 V190" />
          </g>
          {/* planned path */}
          <path d={PATH} fill="none" stroke="#2563EB" strokeOpacity="0.25" strokeWidth="3" strokeLinecap="round" />
          <path d={PATH} pathLength={100} data-on={step >= 1} className="pv-path" fill="none" stroke="#2563EB" strokeWidth="3" strokeLinecap="round" />
          {/* start */}
          <rect x={START.x - 7} y={START.y - 7} width="14" height="14" rx="3" fill="#09090B" />
          {/* stops */}
          {STOPS.map((s, i) => {
            const done = delivered > i
            return (
              <g key={s.name}>
                <circle cx={s.x} cy={s.y} r="9" fill={done ? '#10B981' : '#fff'} stroke={done ? '#10B981' : '#2563EB'} strokeWidth="2" className="pv-swap" />
                {done ? (
                  <path d={`M ${s.x - 3.5} ${s.y} l 2.5 2.5 l 4.5 -5`} fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                ) : (
                  <text x={s.x} y={s.y + 3.5} textAnchor="middle" fontSize="9" fontWeight="700" fill="#2563EB">
                    {i + 1}
                  </text>
                )}
              </g>
            )
          })}
        </svg>
        {/* the van */}
        <div
          className="absolute flex h-6 w-6 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-warm-950 text-white shadow-md transition-[left,top] duration-[1100ms] ease-in-out"
          style={{ left: `${(truck.x / W) * 100}%`, top: `${(truck.y / H) * 100}%` }}
        >
          <Truck className="h-3 w-3" />
        </div>
        </div>
      </div>

      {/* Stops */}
      <div>
        <div className="flex items-center justify-between border-b border-warm-100 px-4 py-2.5">
          <span className="text-[13px] font-semibold">Thu, Sep 25</span>
          <Pill tone={step >= 5 ? 'ok' : 'brand'}>{step >= 5 ? 'Route complete' : `${delivered}/4 delivered`}</Pill>
        </div>
        <ol>
          {STOPS.map((s, i) => {
            const done = delivered > i
            const next = delivered === i && step >= 1
            return (
              <li key={s.name} className="flex items-center gap-3 border-b border-warm-100 px-4 py-2.5 last:border-b-0">
                <span className={cn('pv-swap inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[10px] font-bold', done ? 'bg-ok-500 text-white' : next ? 'bg-forest-600 text-white' : 'bg-warm-100 text-warm-500')}>
                  {done ? <Check className="h-3 w-3" /> : i + 1}
                </span>
                <Initials name={s.name} size={24} />
                <div className="min-w-0 flex-1">
                  <div className="truncate text-[12px] font-semibold">{s.name}</div>
                  <div className="text-[10.5px] text-warm-500">
                    ETA {s.eta} · {s.crates}
                  </div>
                </div>
                {done ? (
                  <span className="inline-flex items-center gap-1 text-[10px] font-medium text-warm-500">
                    <Camera className="h-3 w-3" /> Photo
                  </span>
                ) : next ? (
                  <Pill tone="brand">Next</Pill>
                ) : null}
              </li>
            )
          })}
        </ol>
        <div className="px-4 py-2.5 text-[10.5px] text-warm-400">Optimized order · 14.2 mi · proof of delivery on every stop</div>
      </div>
    </div>
  )
}
