'use client'

import { CalendarClock, Camera, Check, PauseCircle, Wrench } from 'lucide-react'
import { cn } from '@/lib/utils'
import { IconTile, Initials, Pill, type PillTone } from './bits'
import { useInView, useSequence } from './useSequence'

// A problem a customer on Fork reported after the visit, on the service provider's call: the type,
// their note and photo, and what they ask for (another visit, a credit or a refund). A pending
// problem holds the invoice. Accepting it with another visit puts the call on hold with a revisit
// to schedule (serviceJobControllers resolveJobIssue); the customer is told either way.
const STATUS: { label: string; tone: PillTone }[] = [
  { label: 'Completed', tone: 'ok' },
  { label: 'Problem reported', tone: 'bad' },
  { label: 'On hold', tone: 'warn' },
  { label: 'Revisit booked', tone: 'brand' },
]

export default function ServiceIssuePreview({ className }: { className?: string }) {
  const { ref, inView } = useInView<HTMLDivElement>()
  // 1 problem arrives · 2 photo · 3 invoice held · 4 accept with another visit · 5 revisit booked
  const step = useSequence(5, { inView, ms: [800, 600, 800, 1200, 1100], holdMs: 3400 })
  const status = step >= 5 ? STATUS[3] : step >= 4 ? STATUS[2] : step >= 1 ? STATUS[1] : STATUS[0]

  return (
    <div ref={ref} className={cn('text-warm-950', className)}>
      <div className="flex items-center gap-3 border-b border-warm-100 px-4 py-2.5">
        <IconTile tone="brand" size={30}>
          <Wrench />
        </IconTile>
        <div className="min-w-0 flex-1">
          <div className="truncate text-[13px] font-semibold">Ice machine leaking</div>
          <div className="truncate text-[10.5px] text-warm-500">#SR-1051 · Harbor Market · on Fork</div>
        </div>
        <Pill tone={status.tone}>{status.label}</Pill>
      </div>

      {/* The problem, as the customer reported it from their app */}
      <div data-on={step >= 1} className="pv-item px-4 pt-3">
        <div className="rounded-xl bg-bad-50/60 p-3 ring-1 ring-bad-100">
          <div className="flex items-center gap-2">
            <Initials name="Harbor Market" size={22} />
            <div className="min-w-0 flex-1 text-[10.5px] text-warm-500">
              <span className="font-semibold text-warm-950">Harbor Market</span> reported a problem · Mon 9:12 AM
            </div>
            <span className="shrink-0 rounded-full bg-white px-2 py-0.5 text-[10px] font-semibold text-bad-700 ring-1 ring-bad-100">Not fixed</span>
          </div>
          <p className="mt-2 text-[11.5px] leading-snug text-warm-800">Still leaking under the bin after Thursday&apos;s visit. Towels down again this morning.</p>
          <div className="mt-2 flex items-center gap-2">
            <span data-on={step >= 2} className="pv-pop inline-flex h-10 w-14 items-center justify-center gap-1 rounded-md bg-linear-to-br from-warm-200 to-warm-100 text-[9.5px] text-warm-500">
              <Camera className="h-3 w-3" /> Photo
            </span>
            <span className="text-[10.5px] text-warm-600">
              Asks for: <span className="font-semibold text-warm-950">another visit</span>
            </span>
          </div>
        </div>
      </div>

      <div data-on={step >= 3} className="pv-item mx-4 mt-2.5 flex items-center gap-2 rounded-lg bg-warn-50 px-3 py-2 text-[10.5px] text-warn-700">
        <PauseCircle className="h-3.5 w-3.5 shrink-0" />
        The invoice for this call waits until you answer
      </div>

      {/* Your answer */}
      <div className="grid grid-cols-3 gap-1.5 px-4 pt-3">
        {['Another visit', 'Credit', 'Turn down'].map((a, i) => (
          <span
            key={a}
            className={cn(
              'pv-swap inline-flex h-7 items-center justify-center rounded-full text-[10.5px] font-semibold ring-1',
              i === 0 && step >= 4 ? 'bg-warm-950 text-white ring-warm-950' : 'bg-white text-warm-600 ring-warm-200',
            )}
          >
            {i === 0 && step >= 4 && <Check className="mr-1 h-3 w-3" strokeWidth={3} />}
            {a}
          </span>
        ))}
      </div>

      <div data-on={step >= 5} className="pv-item mx-4 mb-3.5 mt-2.5 flex items-center gap-2.5 rounded-lg px-3 py-2 ring-1 ring-warm-100">
        <IconTile tone="brand" size={26}>
          <CalendarClock />
        </IconTile>
        <div className="min-w-0 flex-1">
          <div className="text-[11.5px] font-semibold">Revisit booked · Tue 8–10 AM · Marco</div>
          <div className="truncate text-[10px] text-warm-500">No charge · Harbor Market was told in their app</div>
        </div>
      </div>
    </div>
  )
}
