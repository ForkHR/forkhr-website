'use client'

import { Check, Sparkles } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Initials, Pill, RatingDots, SectionLabel, Toast, type PillTone } from './bits'
import { useInView, useSequence } from './useSequence'

// A 90-day review being written: the manager rates from the record Fork already keeps
// (attendance, shift flags, tasks, training, recognition), proposes a raise, the owner approves
// it and the new rate lands on the pay rate. Status names are the app's (pages/performance).
const QUESTIONS = [
  { text: 'Knows the job', value: 4 },
  { text: 'Reliability', value: 5 },
  { text: 'Teamwork', value: 4 },
  { text: 'Guest care', value: 5 },
]

const RECORD = [
  { label: 'Shifts worked', value: '58 of 60' },
  { label: 'On time', value: '97%' },
  { label: 'Absences', value: '2' },
  { label: 'Great shifts', value: '4' },
  { label: 'Covered for others', value: '3' },
  { label: 'Shift tasks done', value: '94%' },
  { label: 'Courses', value: '2' },
  { label: 'Recognitions', value: '★ 3' },
]

const STATUS: { label: string; tone: PillTone }[] = [
  { label: 'In progress', tone: 'warn' },
  { label: 'Raise to approve', tone: 'plum' },
  { label: 'Shared', tone: 'brand' },
  { label: 'Completed', tone: 'ok' },
]

export default function PerformancePreview({ className }: { className?: string }) {
  const { ref, inView } = useInView<HTMLDivElement>()
  const step = useSequence(9, { inView, ms: [450, 500, 450, 450, 450, 700, 900, 1400, 1200], holdMs: 3400 })
  const rated = Math.max(0, Math.min(QUESTIONS.length, step - 1))
  const status = step >= 9 ? STATUS[3] : step >= 8 ? STATUS[2] : step >= 7 ? STATUS[1] : STATUS[0]
  const raise = step >= 9 ? { label: 'On their pay rate', tone: 'ok' as const } : step >= 8 ? { label: 'Approved', tone: 'ok' as const } : { label: 'Waiting for approval', tone: 'plum' as const }

  return (
    <div ref={ref} className={cn('relative text-warm-950', className)}>
      <div className="flex items-center gap-3 border-b border-warm-100 px-4 py-3">
        <Initials name="Maya Chen" size={34} />
        <div className="min-w-0 flex-1">
          <div className="text-[13px] font-semibold">Maya Chen</div>
          <div className="truncate text-[10.5px] text-warm-500">Barista · Main St · 90-day review</div>
        </div>
        <Pill tone={status.tone}>{status.label}</Pill>
      </div>

      <div className="grid grid-cols-1 @lg:grid-cols-[minmax(0,1fr)_190px]">
        <div className="min-w-0">
          {/* Narrow frames: the record as three numbers above the questions */}
          <div className="grid grid-cols-3 gap-px border-b border-warm-100 bg-warm-100 @lg:hidden">
            {RECORD.slice(0, 2)
              .concat(RECORD[3])
              .map((r) => (
                <div key={r.label} data-on={step >= 1} className="pv-item bg-white px-3 py-2">
                  <div className="truncate text-[9.5px] text-warm-400">{r.label}</div>
                  <div className="text-[13px] font-semibold tabular-nums">{r.value}</div>
                </div>
              ))}
          </div>

          <SectionLabel right="Dana W. · manager">Manager review</SectionLabel>
          {QUESTIONS.map((q, i) => {
            const on = rated > i
            return (
              <div key={q.text} className="flex items-center gap-3 border-b border-warm-100 px-4 py-2">
                <span className="min-w-0 flex-1 truncate text-[12px] font-medium">{q.text}</span>
                <RatingDots value={on ? q.value : 0} />
                <span className={cn('pv-swap w-3 text-right text-[11px] font-semibold tabular-nums', on ? 'text-warm-950' : 'text-transparent')}>{q.value}</span>
              </div>
            )
          })}

          <div data-on={step >= 6} className="pv-item flex items-center justify-between gap-3 border-b border-warm-100 px-4 py-2.5">
            <span className="text-[11px] text-warm-500">Overall rating</span>
            <span className="text-[12px] font-semibold">
              4 / 5 <span className="font-normal text-warm-500">· Exceeds expectations</span>
            </span>
          </div>

          <div data-on={step >= 7} className="pv-item px-4 py-2.5">
            <div className="flex items-center justify-between gap-3">
              <span className="text-[11px] text-warm-500">Raise</span>
              <Pill tone={raise.tone}>{raise.label}</Pill>
            </div>
            <div className="mt-1 flex items-baseline justify-between gap-3">
              <span className="text-[13px] font-semibold tabular-nums">
                $17.00 <span className="text-warm-400">→</span> $18.25<span className="text-[11px] font-medium text-warm-500">/hr</span>
              </span>
              <span className="text-[10.5px] text-warm-500">+7.4% · starts Oct 27</span>
            </div>
          </div>
        </div>

        {/* Wide frames: the whole record beside the questions */}
        <aside className="hidden border-l border-warm-100 bg-warm-50 @lg:block">
          <div className="px-3.5 pb-1 pt-3">
            <div className="text-[10px] font-bold uppercase tracking-wider text-warm-400">Record</div>
            <div className="text-[10px] text-warm-400">Jul 28 – Oct 25 · from the schedule and clock</div>
          </div>
          {RECORD.map((r, i) => (
            <div key={r.label} data-on={step >= 1} className="pv-item flex items-center justify-between gap-2 border-b border-warm-100 px-3.5 py-[7px] last:border-b-0" style={{ transitionDelay: `${i * 55}ms` }}>
              <span className="truncate text-[10.5px] text-warm-500">{r.label}</span>
              <span className="text-[11.5px] font-semibold tabular-nums">{r.value}</span>
            </div>
          ))}
          <div data-on={step >= 1} className="pv-item mx-3.5 mb-3 mt-2 flex items-start gap-1.5 rounded-md bg-white px-2 py-1.5 text-[9.5px] leading-snug text-warm-500 ring-1 ring-warm-100">
            <Sparkles className="mt-px h-3 w-3 shrink-0 text-forest-500" />
            Filled in by Fork. Nobody typed it.
          </div>
        </aside>
      </div>

      <div className="flex items-center justify-between gap-3 border-t border-warm-100 px-4 py-2.5 text-[10.5px] text-warm-400">
        <span className="truncate">Next automatic review: Luis Ortega, day 90 on Nov 3</span>
        <span className="shrink-0">2 of 6 due this month</span>
      </div>

      <Toast on={step >= 9}>
        <Check className="h-3.5 w-3.5 text-ok-500" /> Pay rate updated · $18.25/hr from Oct 27
      </Toast>
    </div>
  )
}
