'use client'

import { Lock, MessageSquareQuote } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Initials, Pill } from './bits'
import { useInView, useSequence } from './useSequence'

// Anonymous feedback from a team on its manager. Results stay locked until enough people have
// answered (3 by default, backend minResponses), and nobody ever sees who answered what.
const RESULTS = [
  { text: 'Gives clear direction for each shift', value: 4.4 },
  { text: 'Posts the schedule in time and fairly', value: 4.1 },
  { text: 'Treats everyone on the team fairly', value: 4.6 },
  { text: 'Notices and recognizes good work', value: 3.8 },
  { text: 'Is easy to approach with a problem', value: 4.3 },
]

const ANSWERED = [0, 1, 2, 3, 5, 7]
const FLOOR = 3

export default function ManagerFeedbackPreview({ className }: { className?: string }) {
  const { ref, inView } = useInView<HTMLDivElement>()
  const step = useSequence(5, { inView, ms: [700, 700, 900, 1100, 1000], holdMs: 3400 })
  const answered = ANSWERED[step]
  const open = answered >= FLOOR

  return (
    <div ref={ref} className={cn('text-warm-950', className)}>
      <div className="flex items-center gap-3 border-b border-warm-100 px-4 py-3">
        <Initials name="Dana Whitfield" size={32} />
        <div className="min-w-0 flex-1">
          <div className="text-[13px] font-semibold">Manager feedback · Dana Whitfield</div>
          <div className="truncate text-[10.5px] text-warm-500">From the team at Main St · anonymous</div>
        </div>
        <Pill tone={open ? 'ok' : 'neutral'}>
          <span className="tabular-nums">{answered}</span> of 9 answered
        </Pill>
      </div>

      {open ? (
        <div key="open" className="pv-fade-in">
          <div className="flex items-center justify-between px-4 pb-1.5 pt-3">
            <span className="text-[10px] font-bold uppercase tracking-wider text-warm-400">Average of {answered} answers</span>
            <span className="text-[10px] text-warm-400">out of 5</span>
          </div>
          {RESULTS.map((r, i) => (
            <div key={r.text} className="px-4 py-1.5">
              <div className="flex items-center justify-between gap-3 text-[11.5px]">
                <span className="truncate font-medium">{r.text}</span>
                <span className="font-semibold tabular-nums">{r.value.toFixed(1)}</span>
              </div>
              <div className="mt-1 h-1.5 overflow-hidden rounded-full bg-warm-100">
                <div className="pv-bar-in h-full rounded-full bg-warm-950" style={{ width: `${(r.value / 5) * 100}%`, animationDelay: `${i * 80}ms` }} />
              </div>
            </div>
          ))}
          <div data-on={step >= 4} className="pv-item mx-4 mb-3 mt-2.5 space-y-1.5">
            {['Always has the schedule up by Wednesday.', 'More notice when the close changes would help.'].map((c) => (
              <div key={c} className="flex items-start gap-2 rounded-lg bg-warm-50 px-2.5 py-1.5 text-[10.5px] leading-snug text-warm-600">
                <MessageSquareQuote className="mt-px h-3 w-3 shrink-0 text-warm-400" />
                {c}
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div key="locked" className="pv-dashed m-4 flex h-[188px] flex-col items-center justify-center gap-2 rounded-xl text-center">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-warm-500 ring-1 ring-warm-200">
            <Lock className="h-3.5 w-3.5" />
          </span>
          <div className="text-[12px] font-semibold">Results show from {FLOOR} answers</div>
          <div className="max-w-[230px] text-[10.5px] leading-snug text-warm-500">So no answer can be traced back to the person who gave it.</div>
        </div>
      )}

      <div className="flex items-center gap-1.5 border-t border-warm-100 px-4 py-2.5 text-[10.5px] text-warm-400">
        <Lock className="h-3 w-3" />
        Nobody sees who answered, not HR and not Dana.
      </div>
    </div>
  )
}
