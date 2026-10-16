'use client'

import { ArrowRight, Clock3, Target } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Checkbox, IconTile, Initials, Pill, SectionLabel } from './bits'
import { useInView, useSequence } from './useSequence'

// A 1:1 check-in between reviews: talking points, an action item, and a goal that Fork measures
// from the person's own record (here, on-time clock-ins from the time clock).
const POINTS = ['How the first closing shifts went', 'Saturday availability in November', 'Shift lead training: when to start']

export default function CheckInPreview({ className }: { className?: string }) {
  const { ref, inView } = useInView<HTMLDivElement>()
  const step = useSequence(6, { inView, ms: [500, 600, 600, 800, 900, 900], holdMs: 3200 })
  const ticked = Math.min(POINTS.length, step)
  const goal = step >= 5 ? 97 : 0

  return (
    <div ref={ref} className={cn('text-warm-950', className)}>
      <div className="flex items-center gap-3 border-b border-warm-100 px-4 py-3">
        <Initials name="Maya Chen" size={32} />
        <div className="min-w-0 flex-1">
          <div className="text-[13px] font-semibold">Check-in with Maya Chen</div>
          <div className="flex items-center gap-1 text-[10.5px] text-warm-500">
            <Clock3 className="h-3 w-3" /> Thu, Oct 9 · 3:30 PM · with Dana
          </div>
        </div>
        <Pill tone={step >= 3 ? 'ok' : 'brand'}>{step >= 3 ? 'Held' : 'Today'}</Pill>
      </div>

      <SectionLabel>Talking points</SectionLabel>
      {POINTS.map((p, i) => (
        <div key={p} className="flex items-center gap-3 border-b border-warm-100 px-4 py-2">
          <Checkbox checked={ticked > i} />
          <span className={cn('pv-swap truncate text-[12px] font-medium', ticked > i && 'text-warm-400 line-through')}>{p}</span>
        </div>
      ))}

      <div data-on={step >= 4} className="pv-item flex items-center gap-2.5 border-b border-warm-100 px-4 py-2.5">
        <ArrowRight className="h-3.5 w-3.5 shrink-0 text-forest-600" />
        <span className="min-w-0 flex-1 truncate text-[11.5px]">
          <span className="font-semibold">Action:</span> two training closes with Priya
        </span>
        <span className="shrink-0 text-[10px] text-warm-400">Due Oct 16</span>
      </div>

      <SectionLabel right="From the time clock">Goal</SectionLabel>
      <div className="flex items-center gap-3 px-4 pb-3.5">
        <IconTile tone="brand" size={30}>
          <Target />
        </IconTile>
        <div className="min-w-0 flex-1">
          <div className="flex items-center justify-between gap-2 text-[12px]">
            <span className="truncate font-semibold">On-time clock-ins, 95% or better</span>
            <span className="font-semibold tabular-nums">{goal}%</span>
          </div>
          <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-warm-100">
            <div className="pv-fill h-full rounded-full bg-forest-500" style={{ width: `${goal}%` }} />
          </div>
        </div>
        <Pill tone={step >= 6 ? 'ok' : 'neutral'}>{step >= 6 ? 'On track' : 'Measuring'}</Pill>
      </div>
    </div>
  )
}
