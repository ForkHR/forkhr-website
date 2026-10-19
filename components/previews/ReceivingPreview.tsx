'use client'

import { Mail } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Pill } from './bits'
import { useInView, useSequence } from './useSequence'

// Checking a delivery in at the back door, on a phone: the app's "Receive order" screen. Each
// line shows "Receiving: x / y" (green once it is all there, orange while short) and an issue
// from the "Flag issue" sheet: its type and what the café asks for (constants/orderIssues.js:
// Short quantity, Received additional quantity, Damaged; Credit, Keep it — bill me). Then the
// pending credit, the "Email {vendor} about the discrepancies" switch and "Submit receipt"; a
// vendor not on Fork gets the issues as a reply to the order email, and the order reads
// "Partially delivered".
type Line = { name: string; ordered: number; got: number; issue?: { type: string; ask: string; credit?: number } }
const LINES: Line[] = [
  { name: 'Whole milk, gal', ordered: 18, got: 18 },
  { name: 'Butter, 36 lb case', ordered: 3, got: 2, issue: { type: 'Short quantity', ask: 'Credit', credit: 98 } },
  { name: 'Heavy cream, qt', ordered: 12, got: 13, issue: { type: 'Received additional quantity', ask: 'Keep it — bill me' } },
  { name: 'Eggs, 15 doz case', ordered: 2, got: 2, issue: { type: 'Damaged', ask: 'Credit', credit: 38.5 } },
]

export default function ReceivingPreview({ className }: { className?: string }) {
  const { ref, inView } = useInView<HTMLDivElement>()
  // 1–4 count each line in · 5 tap Submit receipt · 6 submitted
  const step = useSequence(6, { inView, ms: [600, 900, 900, 1000, 1000, 800], holdMs: 3400 })
  const counted = Math.min(LINES.length, step)
  const flagged = LINES.filter((l, i) => l.issue && counted > i)
  const credit = flagged.reduce((sum, l) => sum + (l.issue?.credit || 0), 0)
  const sent = step >= 6

  return (
    <div ref={ref} className={cn('px-3 pb-4 pt-1 text-warm-950', className)}>
      <div className="flex items-center justify-between pb-2">
        <span className="text-[12px] font-semibold">Receive order</span>
        <Pill tone="brand" className={cn('transition-opacity', sent ? 'opacity-100' : 'opacity-0')}>
          Partially delivered
        </Pill>
      </div>
      <div className="text-[10.5px] text-warm-500">Bluebird Dairy · delivered Thu 6:30 AM</div>

      <div className="mt-2.5 divide-y divide-warm-100 rounded-xl ring-1 ring-warm-100">
        {LINES.map((l, i) => {
          const on = counted > i
          const full = l.got >= l.ordered
          return (
            <div key={l.name} className="px-2.5 py-2">
              <div className="truncate text-[11px] font-medium">{l.name}</div>
              <div className={cn('pv-swap mt-0.5 text-[10.5px] font-semibold tabular-nums', !on ? 'text-warm-300' : full ? 'text-ok-600' : 'text-warn-600')}>
                Receiving: {on ? l.got : '–'} / {l.ordered}
              </div>
              {l.issue && (
                <div data-on={on} className="pv-item mt-1 truncate text-[9.5px] text-warn-700">
                  <span className="font-semibold">{l.issue.type}</span> · {l.issue.ask}
                </div>
              )}
            </div>
          )
        })}
      </div>

      <div className="mt-2 flex flex-wrap items-center justify-between gap-x-2 gap-y-0.5 text-[10px] text-warm-500">
        <span>{flagged.length ? `${flagged.length} item${flagged.length === 1 ? '' : 's'} flagged with issues` : 'No issues'}</span>
        <span className="tabular-nums">{credit ? <>Pending credit <span className="font-semibold text-warm-950">-${credit.toFixed(2)}</span></> : null}</span>
      </div>

      <div data-on={step >= 4} className="pv-item mt-2.5">
        <div className="mb-2 flex items-center justify-between gap-2 rounded-lg bg-warm-50 px-2.5 py-1.5 text-[9.5px] text-warm-600 ring-1 ring-warm-100">
          <span className="truncate">Email Bluebird Dairy about the discrepancies</span>
          <span className="relative h-3.5 w-6 shrink-0 rounded-full bg-ok-500">
            <span className="absolute right-0.5 top-0.5 h-2.5 w-2.5 rounded-full bg-white" />
          </span>
        </div>
        <div
          className={cn(
            'flex h-8 items-center justify-center gap-1.5 rounded-full text-[11px] font-semibold transition-all duration-300',
            sent ? 'bg-ok-50 text-ok-700' : step >= 5 ? 'scale-95 bg-warm-700 text-white' : 'bg-warm-950 text-white',
          )}
        >
          {sent ? (
            <>
              <Mail className="h-3.5 w-3.5" /> Emailed to Bluebird Dairy
            </>
          ) : (
            'Submit receipt'
          )}
        </div>
      </div>
    </div>
  )
}
