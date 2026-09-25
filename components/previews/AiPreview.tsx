'use client'

import type { ReactNode } from 'react'
import { Send, Sparkles } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Initials, Typing } from './bits'
import { useInView, useSequence } from './useSequence'

// The assistant answering from the company's own data, then drafting a message.
export default function AiPreview({ className, dark = false }: { className?: string; dark?: boolean }) {
  const { ref, inView } = useInView<HTMLDivElement>()
  const step = useSequence(6, { inView, ms: [500, 700, 1300, 1500, 700, 1400], holdMs: 3600 })

  const user = (text: string, on: boolean) => (
    <div data-on={on} className="pv-item flex justify-end">
      <div className={cn('max-w-[80%] rounded-2xl rounded-br-md px-3 py-2 text-[12px] leading-relaxed', dark ? 'bg-white text-warm-950' : 'bg-warm-950 text-white')}>{text}</div>
    </div>
  )

  const bot = (on: boolean, children: ReactNode) => (
    <div data-on={on} className="pv-item flex items-start gap-2">
      <span className={cn('mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full', dark ? 'bg-lime-accent/15 text-lime-accent' : 'bg-forest-50 text-forest-600')}>
        <Sparkles className="h-3 w-3" />
      </span>
      <div className={cn('max-w-[86%] rounded-2xl rounded-bl-md px-3 py-2 text-[12px] leading-relaxed', dark ? 'border border-white/10 bg-white/5 text-warm-200' : 'border border-warm-200 bg-white text-warm-800')}>{children}</div>
    </div>
  )

  return (
    <div ref={ref} className={cn('flex flex-col', dark ? 'text-warm-200' : 'text-warm-950', className)}>
      <div className={cn('flex items-center gap-2.5 border-b px-4 py-2.5', dark ? 'border-white/10' : 'border-warm-100')}>
        <span className={cn('inline-flex h-7 w-7 items-center justify-center rounded-full', dark ? 'bg-lime-accent/15 text-lime-accent' : 'bg-forest-50 text-forest-600')}>
          <Sparkles className="h-3.5 w-3.5" />
        </span>
        <div>
          <div className={cn('text-[13px] font-semibold', dark ? 'text-white' : '')}>Fork assistant</div>
          <div className={cn('text-[10.5px]', dark ? 'text-warm-500' : 'text-warm-500')}>Answers from your schedule, policies, FAQs and library</div>
        </div>
      </div>

      <div className="min-h-[280px] space-y-2.5 px-4 py-3">
        {user('Who is off next Friday?', step >= 1)}

        {step === 2 && bot(true, <Typing />)}
        {bot(
          step >= 3,
          <>
            <span className={cn('font-semibold', dark ? 'text-white' : 'text-warm-950')}>Two people</span> are off on Friday, Oct 3:
            <ul className="mt-1 list-disc space-y-0.5 pl-4">
              <li>Maya Chen · vacation, approved</li>
              <li>Luis Ortega · personal day</li>
            </ul>
            <div className="mt-1.5">Main St still has 4 people on the dinner shift, but nobody is set to close.</div>
          </>,
        )}

        {user('Draft a message asking someone to cover the closing shift.', step >= 4)}

        {step === 5 && bot(true, <Typing />)}
        {bot(
          step >= 6,
          <>
            <div className={cn('rounded-lg border px-2.5 py-2 italic', dark ? 'border-white/10 bg-white/5' : 'border-warm-200 bg-warm-50')}>
              &ldquo;Hey team, we need one person to close Main St on Friday, Oct 3 (3–10 PM). Reply here or claim the open shift in Fork. Thank you!&rdquo;
            </div>
            <div className="mt-2 flex items-center gap-2">
              <span className={cn('inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[10.5px] font-semibold', dark ? 'bg-white text-warm-950' : 'bg-warm-950 text-white')}>
                <Send className="h-3 w-3" /> Post in #main-st
              </span>
              <span className={cn('rounded-full px-2.5 py-1 text-[10.5px] font-medium', dark ? 'bg-white/10' : 'bg-warm-100 text-warm-600')}>Create open shift</span>
            </div>
          </>,
        )}
      </div>

      <div className={cn('flex items-center gap-2 border-t px-4 py-2.5', dark ? 'border-white/10' : 'border-warm-100')}>
        <Initials name="Dana Whitfield" size={22} />
        <div className={cn('flex-1 rounded-full border px-3 py-1.5 text-[11px]', dark ? 'border-white/10 bg-white/5 text-warm-500' : 'border-warm-200 bg-white text-warm-400')}>Ask anything about your team…</div>
      </div>
    </div>
  )
}
