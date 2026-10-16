'use client'

import { Check, ChevronLeft } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Initials, Pill, RatingDots } from './bits'
import { useInView, useSequence } from './useSequence'

// The employee's side, in the app: the shared review, the new rate, and the acknowledgement.
export default function ReviewPhonePreview({ className }: { className?: string }) {
  const { ref, inView } = useInView<HTMLDivElement>()
  const step = useSequence(7, { inView, ms: [450, 550, 550, 550, 700, 1100, 700], holdMs: 3200 })
  const acknowledged = step >= 7

  return (
    <div ref={ref} className={cn('relative px-3 pb-4 pt-1 text-warm-950', className)}>
      <div className="flex items-center gap-1 pb-2 text-[11px] font-semibold">
        <ChevronLeft className="h-3.5 w-3.5 text-warm-400" />
        Your reviews
      </div>

      <div data-on={step >= 1} className="pv-item rounded-xl bg-warm-50 p-2.5 ring-1 ring-warm-100">
        <div className="flex items-center gap-2">
          <Initials name="Dana Whitfield" size={22} />
          <div className="min-w-0 text-[10px] leading-tight text-warm-500">
            <span className="font-semibold text-warm-950">Dana Whitfield</span> shared your
            <br />
            90-day review · Oct 24
          </div>
        </div>
      </div>

      <div data-on={step >= 2} className="pv-item mt-3">
        <div className="text-[9.5px] font-bold uppercase tracking-wider text-warm-400">Overall</div>
        <div className="mt-0.5 flex items-center justify-between">
          <span className="text-[14px] font-semibold tracking-tight">Exceeds expectations</span>
          <RatingDots value={4} size={6} />
        </div>
      </div>

      <p data-on={step >= 3} className="pv-item mt-2 border-l-2 border-warm-200 pl-2 text-[10.5px] leading-snug text-warm-600">
        Already runs the bar like a veteran. Next up: learning the close.
      </p>

      <div data-on={step >= 4} className="pv-item mt-2.5 divide-y divide-warm-100 rounded-lg ring-1 ring-warm-100">
        {[
          { t: 'Reliability', v: 5 },
          { t: 'Guest care', v: 5 },
          { t: 'Knows the job', v: 4 },
        ].map((q) => (
          <div key={q.t} className="flex items-center justify-between px-2.5 py-1.5">
            <span className="text-[10.5px] font-medium">{q.t}</span>
            <RatingDots value={q.v} size={5} />
          </div>
        ))}
      </div>

      <div data-on={step >= 5} className="pv-pop mt-2.5 flex items-center justify-between rounded-lg bg-ok-50 px-2.5 py-2">
        <div>
          <div className="text-[9.5px] text-ok-700">New rate from Oct 27</div>
          <div className="text-[15px] font-semibold tabular-nums text-ok-700">$18.25/hr</div>
        </div>
        <Pill tone="ok">+7.4%</Pill>
      </div>

      <div data-on={step >= 5} className="pv-item mt-3">
        <div
          className={cn(
            'flex h-8 items-center justify-center gap-1.5 rounded-full text-[11px] font-semibold transition-all duration-300',
            acknowledged ? 'bg-ok-50 text-ok-700' : step >= 6 ? 'scale-95 bg-warm-700 text-white' : 'bg-warm-950 text-white',
          )}
        >
          {acknowledged ? (
            <>
              <Check className="h-3.5 w-3.5" /> Acknowledged
            </>
          ) : (
            'Read and acknowledge'
          )}
        </div>
      </div>
    </div>
  )
}
