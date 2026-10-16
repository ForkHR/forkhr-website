'use client'

import { Camera, Check, ChevronLeft, Mail, Minus, Plus, TriangleAlert } from 'lucide-react'
import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { Pill, type PillTone } from './bits'
import { useInView, useSequence } from './useSequence'

// Checking a delivery in at the back door, on a phone. Each line is received or flagged: short,
// over-delivered, damaged (with a photo), each with what the café wants for it. Issue types and
// resolutions are the app's (orderModel trade issues: short_quantity, over_delivery, damaged;
// credit, accept = keep and pay). The issues then go to the vendor in one message, posted in the
// chat and emailed when the vendor is not on Fork (orderControllers messageVendorIssues).
type Line = { name: string; ordered: number; got: number; issue?: { icon: ReactNode; label: string; ask: string; tone: PillTone; photo?: boolean } }

const LINES: Line[] = [
  { name: 'Whole milk, gal', ordered: 18, got: 18 },
  { name: 'Butter, 36 lb case', ordered: 3, got: 2, issue: { icon: <Minus />, label: '1 short', ask: 'Credit', tone: 'warn' } },
  { name: 'Heavy cream, qt', ordered: 12, got: 13, issue: { icon: <Plus />, label: '1 extra', ask: 'Keep and pay', tone: 'brand' } },
  { name: 'Eggs, 15 doz case', ordered: 2, got: 2, issue: { icon: <TriangleAlert />, label: '1 damaged', ask: 'Credit', tone: 'bad', photo: true } },
]

export default function ReceivingPreview({ className }: { className?: string }) {
  const { ref, inView } = useInView<HTMLDivElement>()
  // 1–4 check each line in · 5 tap Send · 6 sent
  const step = useSequence(6, { inView, ms: [600, 900, 900, 1000, 1000, 800], holdMs: 3400 })
  const checked = Math.min(LINES.length, step)
  const issues = LINES.filter((l, i) => l.issue && checked > i).length
  const sent = step >= 6

  return (
    <div ref={ref} className={cn('px-3 pb-4 pt-1 text-warm-950', className)}>
      <div className="flex items-center justify-between pb-2">
        <span className="flex items-center gap-1 text-[11px] font-semibold">
          <ChevronLeft className="h-3.5 w-3.5 text-warm-400" />
          Order #1042
        </span>
        <Pill tone={sent ? 'ok' : 'brand'}>{sent ? 'Received' : 'Checking in'}</Pill>
      </div>
      <div className="text-[10.5px] text-warm-500">Bluebird Dairy · delivered Thu 6:30 AM</div>

      <div className="mt-2.5 divide-y divide-warm-100 rounded-xl ring-1 ring-warm-100">
        {LINES.map((l, i) => {
          const on = checked > i
          return (
            <div key={l.name} className="px-2.5 py-2">
              <div className="flex items-center gap-2">
                <span
                  className={cn(
                    'pv-swap inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-[5px] border',
                    !on ? 'border-warm-300 bg-white text-transparent' : l.issue ? 'border-warn-500 bg-warn-500 text-white' : 'border-warm-950 bg-warm-950 text-white',
                  )}
                >
                  {l.issue && on ? <span className="text-[9px] font-bold leading-none">!</span> : <Check className="h-2.5 w-2.5" strokeWidth={3} />}
                </span>
                <span className="min-w-0 flex-1 truncate text-[11px] font-medium">{l.name}</span>
                <span className={cn('pv-swap text-[10.5px] font-semibold tabular-nums', on ? (l.issue ? 'text-warn-700' : 'text-warm-950') : 'text-warm-300')}>
                  {on ? l.got : '–'}
                  <span className="font-normal text-warm-400">/{l.ordered}</span>
                </span>
              </div>
              {l.issue && (
                <div data-on={on} className="pv-item mt-1.5 flex items-center gap-1.5 pl-6">
                  <Pill tone={l.issue.tone} className="[&>svg]:h-2.5 [&>svg]:w-2.5">
                    {l.issue.icon}
                    {l.issue.label}
                  </Pill>
                  <span className="truncate text-[9.5px] text-warm-500">{l.issue.ask}</span>
                  {l.issue.photo && (
                    <span className="ml-auto inline-flex shrink-0 items-center gap-0.5 rounded bg-warm-100 px-1 py-0.5 text-[9px] text-warm-600">
                      <Camera className="h-2.5 w-2.5" /> 1
                    </span>
                  )}
                </div>
              )}
            </div>
          )
        })}
      </div>

      <div className="mt-2 flex items-center justify-between text-[10px] text-warm-500">
        <span>
          <span className="font-semibold tabular-nums text-warm-950">{checked}</span> of {LINES.length} checked
        </span>
        <span className="tabular-nums">{issues ? `${issues} issue${issues === 1 ? '' : 's'}` : 'No issues'}</span>
      </div>

      <div data-on={step >= 4} className="pv-item mt-2.5">
        <div
          className={cn(
            'flex h-8 items-center justify-center gap-1.5 rounded-full text-[11px] font-semibold transition-all duration-300',
            sent ? 'bg-ok-50 text-ok-700' : step >= 5 ? 'scale-95 bg-warm-700 text-white' : 'bg-warm-950 text-white',
          )}
        >
          {sent ? (
            <>
              <Mail className="h-3.5 w-3.5" /> Emailed to Bluebird · in the chat too
            </>
          ) : (
            'Send issues to Bluebird'
          )}
        </div>
      </div>
    </div>
  )
}
