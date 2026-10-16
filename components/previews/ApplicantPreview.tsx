'use client'

import { Check, CircleAlert, FileText, Sparkles } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Initials, Pill, Toast, Typing, type PillTone } from './bits'
import { useInView, useSequence } from './useSequence'

// One applicant, from the job board to hired: the AI summary the app writes from the resume and
// the screening answers (summary, highlights, red flags, overall fit — hiringControllers.js),
// the interview the candidate accepted from the email, and the hire that creates their profile.
const HIGHLIGHTS = ['3 years at a busy café', 'Food handler card', 'Free weekends and early opens']

const STAGES: { label: string; tone: PillTone }[] = [
  { label: 'Applied', tone: 'neutral' },
  { label: 'Interview', tone: 'warn' },
  { label: 'Hired', tone: 'ok' },
]

export default function ApplicantPreview({ className }: { className?: string }) {
  const { ref, inView } = useInView<HTMLDivElement>()
  // 1 summarizing · 2 summary · 3 highlights · 4 red flag · 5 interview · 6 hired · 7 toast
  const step = useSequence(7, { inView, ms: [700, 1300, 600, 600, 1200, 1300, 900], holdMs: 3200 })
  const stage = step >= 6 ? 2 : step >= 5 ? 1 : 0
  const summarizing = step === 1

  return (
    <div ref={ref} className={cn('relative text-warm-950', className)}>
      <div className="flex items-center gap-3 border-b border-warm-100 px-4 py-3">
        <Initials name="Jordan Lee" size={34} />
        <div className="min-w-0 flex-1">
          <div className="text-[13px] font-semibold">Jordan Lee</div>
          <div className="truncate text-[10.5px] text-warm-500">Barista · Main St · applied Mon 9:14 AM</div>
        </div>
        <Pill tone={STAGES[stage].tone}>{STAGES[stage].label}</Pill>
      </div>

      <div className="flex flex-wrap items-center gap-1.5 border-b border-warm-100 px-4 py-2.5 text-[10.5px]">
        <span className="inline-flex items-center gap-1 rounded-md bg-warm-100 px-1.5 py-0.5 font-medium text-warm-700">
          <FileText className="h-3 w-3" /> jordan-lee-resume.pdf
        </span>
        <span className="rounded-md bg-warm-50 px-1.5 py-0.5 text-warm-600 ring-1 ring-warm-100">Weekends: yes</span>
        <span className="rounded-md bg-warm-50 px-1.5 py-0.5 text-warm-600 ring-1 ring-warm-100">Food handler card: yes</span>
      </div>

      {/* AI summary */}
      <div className="px-4 py-3">
        <div className="rounded-xl bg-forest-50/70 p-3 ring-1 ring-forest-100">
          <div className="flex items-center justify-between gap-2">
            <span className="inline-flex items-center gap-1.5 text-[11.5px] font-semibold text-forest-700">
              <Sparkles className="h-3.5 w-3.5" />
              {step >= 2 ? 'AI summary' : summarizing ? 'Summarizing' : 'Summarize with AI'}
              {summarizing && <Typing className="text-forest-500" />}
            </span>
            <span data-on={step >= 2} className="pv-pop rounded-full bg-white px-2 py-0.5 text-[10px] font-semibold text-ok-700 ring-1 ring-ok-100">
              Good fit
            </span>
          </div>
          <p data-on={step >= 2} className="pv-item mt-2 text-[11px] leading-relaxed text-warm-700">
            Three years as a barista at a busy café, where Jordan opens on their own and trains new staff. Free on weekends.
          </p>
          <ul className="mt-2 space-y-1">
            {HIGHLIGHTS.map((h, i) => (
              <li key={h} data-on={step >= 3} className="pv-item flex items-center gap-1.5 text-[10.5px] text-warm-700" style={{ transitionDelay: `${i * 90}ms` }}>
                <Check className="h-3 w-3 shrink-0 text-ok-600" strokeWidth={3} />
                {h}
              </li>
            ))}
            <li data-on={step >= 4} className="pv-item flex items-center gap-1.5 text-[10.5px] text-warm-700">
              <CircleAlert className="h-3 w-3 shrink-0 text-warn-600" />
              No closing experience yet
            </li>
          </ul>
        </div>
      </div>

      {/* Where the applicant is */}
      <div className="flex items-center gap-2 border-t border-warm-100 px-4 py-2.5 text-[10.5px]">
        {STAGES.map((s, i) => (
          <span key={s.label} className="flex items-center gap-2">
            <span className={cn('pv-swap inline-flex items-center gap-1 font-semibold', stage >= i ? 'text-warm-950' : 'text-warm-300')}>
              <span className={cn('pv-swap inline-flex h-3.5 w-3.5 items-center justify-center rounded-full', stage >= i ? 'bg-warm-950 text-white' : 'bg-warm-100 text-transparent')}>
                <Check className="h-2.5 w-2.5" strokeWidth={3} />
              </span>
              {s.label}
            </span>
            {i < STAGES.length - 1 && <span className="h-px w-4 bg-warm-200" />}
          </span>
        ))}
        <span className="ml-auto hidden truncate text-warm-400 @md:inline">{stage === 2 ? '$17.00/hr · part-time' : stage === 1 ? 'Thu 3:00 PM · accepted' : 'From your job board'}</span>
      </div>

      <Toast on={step >= 7}>
        <Check className="h-3.5 w-3.5 text-ok-500" /> Hired · profile and app invite created
      </Toast>
    </div>
  )
}
