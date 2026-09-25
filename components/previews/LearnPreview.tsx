'use client'

import { BookOpen, FolderOpen, HelpCircle, ShieldCheck } from 'lucide-react'
import { cn } from '@/lib/utils'
import { IconTile, Pill, Progress, SectionLabel } from './bits'
import { useInView, useSequence } from './useSequence'

// The Learn tab: courses, a policy waiting for a signature, the library and FAQs, in one list.
export default function LearnPreview({ className }: { className?: string }) {
  const { ref, inView } = useInView<HTMLDivElement>()
  const step = useSequence(6, { inView, ms: [450, 450, 450, 450, 900, 1100], holdMs: 3000 })
  const signed = step >= 6

  return (
    <div ref={ref} className={cn('text-warm-950', className)}>
      <div className="flex items-center justify-between border-b border-warm-100 px-4 py-2.5">
        <span className="text-[13px] font-semibold">Learn</span>
        <Pill tone={signed ? 'ok' : 'warn'}>{signed ? 'All caught up' : '2 to do'}</Pill>
      </div>

      <SectionLabel>Courses</SectionLabel>
      <div data-on={step >= 1} className="pv-item border-b border-warm-100 px-4 py-2.5">
        <div className="flex items-center gap-3">
          <IconTile tone="brand">
            <BookOpen />
          </IconTile>
          <div className="min-w-0 flex-1">
            <div className="text-[12px] font-semibold">Espresso 101</div>
            <div className="text-[10.5px] text-warm-500">6 modules · video + quiz · 35 min</div>
          </div>
          <span className="text-[11px] font-semibold tabular-nums">{step >= 5 ? '67%' : '50%'}</span>
        </div>
        <Progress value={step >= 5 ? 67 : 50} className="mt-2" />
      </div>
      <div data-on={step >= 2} className="pv-item flex items-center gap-3 border-b border-warm-100 px-4 py-2.5">
        <IconTile tone="ok">
          <BookOpen />
        </IconTile>
        <div className="min-w-0 flex-1">
          <div className="text-[12px] font-semibold">Food safety basics</div>
          <div className="text-[10.5px] text-warm-500">Completed Aug 12 · certificate</div>
        </div>
        <Pill tone="ok">Done</Pill>
      </div>

      <SectionLabel>Policies</SectionLabel>
      <div data-on={step >= 3} className="pv-item flex items-center gap-3 border-b border-warm-100 px-4 py-2.5">
        <IconTile tone={signed ? 'ok' : 'warn'}>
          <ShieldCheck />
        </IconTile>
        <div className="min-w-0 flex-1">
          <div className="text-[12px] font-semibold">Cash handling</div>
          <div className="text-[10.5px] text-warm-500">v3 · updated Sep 1 · {signed ? 'acknowledged today' : 'needs your signature'}</div>
        </div>
        <Pill tone={signed ? 'ok' : 'warn'}>{signed ? 'Signed' : 'Sign'}</Pill>
      </div>

      <SectionLabel>Library & FAQs</SectionLabel>
      <div data-on={step >= 4} className="pv-item flex items-center gap-3 border-b border-warm-100 px-4 py-2.5">
        <IconTile>
          <FolderOpen />
        </IconTile>
        <div className="min-w-0 flex-1">
          <div className="text-[12px] font-semibold">Fall menu recipes</div>
          <div className="text-[10.5px] text-warm-500">Library · 8 files · Kitchen</div>
        </div>
      </div>
      <div data-on={step >= 4} className="pv-item flex items-center gap-3 px-4 py-2.5" style={{ transitionDelay: '100ms' }}>
        <IconTile>
          <HelpCircle />
        </IconTile>
        <div className="min-w-0 flex-1">
          <div className="text-[12px] font-semibold">How do I swap a shift?</div>
          <div className="text-[10.5px] text-warm-500">FAQ · Schedule · 42 views · feeds the assistant</div>
        </div>
      </div>
    </div>
  )
}
