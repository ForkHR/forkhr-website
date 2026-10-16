'use client'

import { Award, BookOpen, Check, FolderOpen, HelpCircle, ShieldCheck } from 'lucide-react'
import { cn } from '@/lib/utils'
import { IconTile, Initials, Pill, SectionLabel, Toast, type PillTone } from './bits'
import { useInView, useSequence } from './useSequence'

// A new hire's first week in Learn, the way the app lays out "Learning & Resources": the
// training journey (a ring and "n of m courses complete"), the courses on the job with their
// progress, the policies to acknowledge, and the Library and FAQ tiles. Courses and policies are
// Premium. Food safety basics was finished on Monday's training shift (the story's moment).
const COURSES = [
  { title: 'Food safety basics', meta: '6 pages · quiz', startPct: 100, doneAt: 0 },
  { title: 'Espresso 101', meta: '5 sections · video · quiz', startPct: 60, doneAt: 1 },
  { title: 'Register and cash handling', meta: '4 pages · quiz', startPct: 0, doneAt: 2 },
]

const POLICIES = [
  { title: 'Employee handbook', meta: 'v3', ackAt: 0 },
  { title: 'Cash handling', meta: 'v2', ackAt: 0 },
  { title: 'Allergens and food safety', meta: 'v1', ackAt: 3 },
]

/** The journey ring, as on My work and the journey map. */
const Ring = ({ pct, done }: { pct: number; done: boolean }) => {
  const r = 15
  const c = 2 * Math.PI * r
  return (
    <span className="relative inline-flex h-11 w-11 shrink-0 items-center justify-center">
      <svg viewBox="0 0 36 36" className="absolute inset-0 -rotate-90">
        <circle cx="18" cy="18" r={r} fill="none" strokeWidth="3.5" className="stroke-warm-100" />
        <circle
          cx="18"
          cy="18"
          r={r}
          fill="none"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeDasharray={c}
          strokeDashoffset={c * (1 - pct / 100)}
          className={cn('transition-[stroke-dashoffset,stroke] duration-700', done ? 'stroke-ok-500' : 'stroke-forest-500')}
        />
      </svg>
      <span className="text-[10px] font-semibold tabular-nums">{pct}%</span>
    </span>
  )
}

export default function LearningPreview({ className }: { className?: string }) {
  const { ref, inView } = useInView<HTMLDivElement>()
  // 1 Espresso 101 done · 2 Register done · 3 last policy acknowledged · 4 library read · 5 toast
  const step = useSequence(5, { inView, ms: [900, 1200, 1100, 900, 900], holdMs: 3400 })
  const coursesDone = COURSES.filter((c) => step >= c.doneAt).length
  const policiesDone = POLICIES.filter((p) => step >= p.ackAt).length
  const pct = Math.round((coursesDone / COURSES.length) * 100)
  const next = COURSES.find((c) => step < c.doneAt)
  const ready = step >= 3
  const header: { label: string; tone: PillTone } = ready ? { label: 'Trained', tone: 'ok' } : { label: 'In training', tone: 'brand' }

  return (
    <div ref={ref} className={cn('relative text-warm-950', className)}>
      <div className="flex items-center gap-3 border-b border-warm-100 px-4 py-3">
        <Initials name="Jordan Lee" size={34} />
        <div className="min-w-0 flex-1">
          <div className="text-[13px] font-semibold">Jordan Lee</div>
          <div className="truncate text-[10.5px] text-warm-500">Barista · Main St · first week</div>
        </div>
        <Pill tone={header.tone}>{header.label}</Pill>
      </div>

      {/* Training journey */}
      <div className="mx-3 mt-3 flex items-center gap-3 rounded-xl bg-warm-50 px-3 py-2.5 ring-1 ring-warm-100">
        <Ring pct={pct} done={pct === 100} />
        <div className="min-w-0 flex-1">
          <div className="text-[12px] font-semibold">Training journey</div>
          <div className="truncate text-[10.5px] text-warm-500">
            {coursesDone} of {COURSES.length} courses complete{next ? ` · next: ${next.title}` : ' · all done'}
          </div>
        </div>
        <span className="flex shrink-0 gap-1" aria-hidden="true">
          {COURSES.map((c) => (
            <span
              key={c.title}
              className={cn('pv-swap inline-flex h-6 w-6 items-center justify-center rounded-full', step >= c.doneAt ? 'bg-warn-100 text-warn-700' : 'bg-warm-100 text-warm-300')}
            >
              <Award className="h-3.5 w-3.5" />
            </span>
          ))}
        </span>
      </div>

      <SectionLabel>Courses</SectionLabel>
      {COURSES.map((c) => {
        const done = step >= c.doneAt
        const value = done ? 100 : c.startPct
        return (
          <div key={c.title} className="flex items-center gap-3 border-b border-warm-100 px-4 py-2">
            <IconTile tone={done ? 'ok' : 'neutral'} size={28}>
              <BookOpen />
            </IconTile>
            <div className="min-w-0 flex-1">
              <div className="truncate text-[12px] font-semibold">{c.title}</div>
              <div className="flex items-center gap-2">
                <span className="h-1 w-14 shrink-0 overflow-hidden rounded-full bg-warm-100">
                  <span className={cn('pv-fill block h-full rounded-full', done ? 'bg-ok-500' : 'bg-forest-500')} style={{ width: `${value}%` }} />
                </span>
                <span className="truncate text-[10px] text-warm-500">
                  <span className="tabular-nums">{value}%</span> · {c.meta}
                </span>
              </div>
            </div>
            <Pill tone={done ? 'ok' : value > 0 ? 'brand' : 'neutral'}>{done ? 'Completed' : value > 0 ? 'In progress' : 'Not started'}</Pill>
          </div>
        )
      })}

      <SectionLabel right={`${policiesDone} of ${POLICIES.length} acknowledged`}>Policies</SectionLabel>
      {POLICIES.map((p) => {
        const done = step >= p.ackAt
        return (
          <div key={p.title} className="flex items-center gap-3 border-b border-warm-100 px-4 py-2">
            <IconTile tone={done ? 'ok' : 'warn'} size={28}>
              <ShieldCheck />
            </IconTile>
            <span className="min-w-0 flex-1 truncate text-[12px] font-medium">
              {p.title} <span className="text-warm-400">· {p.meta}</span>
            </span>
            <Pill tone={done ? 'ok' : 'warn'}>{done ? 'Acknowledged' : 'To acknowledge'}</Pill>
          </div>
        )
      })}

      <SectionLabel>Resources</SectionLabel>
      <div className="grid grid-cols-2 gap-2 px-4 pb-4">
        <div className="flex items-center gap-2 rounded-lg px-2.5 py-2 ring-1 ring-warm-100">
          <IconTile size={26}>
            <FolderOpen />
          </IconTile>
          <div className="min-w-0">
            <div className="text-[11.5px] font-semibold">Library</div>
            <div className="truncate text-[10px] text-warm-500">{step >= 4 ? 'Fall menu recipes · read' : 'Guides and files'}</div>
          </div>
        </div>
        <div className="flex items-center gap-2 rounded-lg px-2.5 py-2 ring-1 ring-warm-100">
          <IconTile size={26}>
            <HelpCircle />
          </IconTile>
          <div className="min-w-0">
            <div className="text-[11.5px] font-semibold">FAQs</div>
            <div className="truncate text-[10px] text-warm-500">Answers to common questions</div>
          </div>
        </div>
      </div>

      <Toast on={step >= 5}>
        <Check className="h-3.5 w-3.5 text-ok-500" /> 3 courses done · policies acknowledged
      </Toast>
    </div>
  )
}
