'use client'

import { Check, CircleCheck } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Initials, Pill, SectionLabel, type PillTone } from './bits'
import { useInView, useSequence } from './useSequence'

// An improvement plan in progress: written expectations with how each is measured, the
// person's acknowledgement, and checkpoints ticked off. Status names are the app's.
type Exp = { text: string; measure: string; states: { from: number; label: string; tone: PillTone }[] }

const EXPECTATIONS: Exp[] = [
  {
    text: 'Clock in on time for every shift',
    measure: 'On-time rate from the time clock',
    states: [
      { from: 0, label: 'Open', tone: 'neutral' },
      { from: 2, label: 'On track', tone: 'brand' },
    ],
  },
  {
    text: 'Finish the closing checklist every close',
    measure: 'Closing runs on the SOP board',
    states: [
      { from: 0, label: 'Open', tone: 'neutral' },
      { from: 3, label: 'At risk', tone: 'warn' },
      { from: 6, label: 'Met', tone: 'ok' },
    ],
  },
  {
    text: 'Complete Food safety basics',
    measure: 'Course in Learn',
    states: [
      { from: 0, label: 'Open', tone: 'neutral' },
      { from: 4, label: 'Met', tone: 'ok' },
    ],
  },
]

const CHECKPOINTS = [
  { date: 'Oct 10', at: 5 },
  { date: 'Oct 20', at: 6 },
  { date: 'Oct 31', at: 99 },
]

const stateAt = (e: Exp, step: number) => [...e.states].reverse().find((s) => step >= s.from) || e.states[0]

export default function PlanPreview({ className }: { className?: string }) {
  const { ref, inView } = useInView<HTMLDivElement>()
  const step = useSequence(6, { inView, ms: [600, 800, 800, 800, 900, 1000], holdMs: 3400 })

  return (
    <div ref={ref} className={cn('text-warm-950', className)}>
      <div className="flex items-center gap-3 border-b border-warm-100 px-4 py-3">
        <Initials name="Luis Ortega" size={32} />
        <div className="min-w-0 flex-1">
          <div className="text-[13px] font-semibold">Improvement plan · Luis Ortega</div>
          <div className="truncate text-[10.5px] text-warm-500">Line cook · Oct 1 – Oct 31 · run by Dana</div>
        </div>
        <Pill tone="warn">In progress</Pill>
      </div>

      <div data-on={step >= 1} className="pv-item flex items-center gap-2 border-b border-warm-100 bg-ok-50/60 px-4 py-2 text-[11px] text-ok-700">
        <CircleCheck className="h-3.5 w-3.5" />
        Read and acknowledged by Luis in the app · Oct 2
      </div>

      <SectionLabel>Expectations</SectionLabel>
      {EXPECTATIONS.map((e) => {
        const s = stateAt(e, step)
        return (
          <div key={e.text} className="flex items-center gap-3 border-b border-warm-100 px-4 py-2">
            <div className="min-w-0 flex-1">
              <div className="truncate text-[12px] font-medium">{e.text}</div>
              <div className="truncate text-[10.5px] text-warm-500">{e.measure}</div>
            </div>
            <Pill tone={s.tone}>{s.label}</Pill>
          </div>
        )
      })}

      <div className="px-4 py-2.5 text-[11px] leading-snug text-warm-600">
        <span className="font-semibold text-warm-950">Support:</span> two training closes with Priya, a weekly check-in with Dana.
      </div>

      <div className="flex items-center gap-2 border-t border-warm-100 px-4 py-2.5">
        <span className="text-[10px] font-bold uppercase tracking-wider text-warm-400">Checkpoints</span>
        <div className="flex flex-1 items-center justify-end gap-1.5">
          {CHECKPOINTS.map((c) => {
            const done = step >= c.at
            return (
              <span key={c.date} className={cn('pv-swap inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[10px] font-semibold', done ? 'bg-warm-950 text-white' : 'bg-warm-100 text-warm-500')}>
                {done && <Check className="h-2.5 w-2.5" strokeWidth={3} />}
                {c.date}
              </span>
            )
          })}
        </div>
      </div>
    </div>
  )
}
