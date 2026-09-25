'use client'

import { Camera, Check, ClipboardList, Repeat, Thermometer, Trash2, Workflow, Wrench } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Checkbox, IconTile, Initials, Pill, Progress } from './bits'
import { useInView, useSequence } from './useSequence'

// SOPs: the boards in the sidebar and an opening checklist being run on the right.
const BOARDS = [
  { name: 'Opening & closing', kind: 'Routine', icon: <Repeat />, due: '1 due', color: 'bg-forest-500' },
  { name: 'Fridges & freezers', kind: 'Log', icon: <Thermometer />, due: '3 checks', color: 'bg-ok-500' },
  { name: 'Waste log', kind: 'Log', icon: <Trash2 />, due: '', color: 'bg-warn-500' },
  { name: 'Equipment care', kind: 'Routine', icon: <Wrench />, due: '8 PM', color: 'bg-plum-600' },
  { name: 'Incidents', kind: 'Workflow', icon: <Workflow />, due: '', color: 'bg-bad-500' },
]

const STEPS = [
  { label: 'Unlock and disarm the alarm' },
  { label: 'Check walk-in temperature', meta: '36°F · in range', kind: 'temp' },
  { label: 'Photo of the line, ready for service', kind: 'photo' },
  { label: 'Count the float in the till', meta: '$200.00 · matches' },
  { label: 'Turn on the front-of-house lights' },
]

export default function SopsPreview({ className }: { className?: string }) {
  const { ref, inView } = useInView<HTMLDivElement>()
  const step = useSequence(7, { inView, ms: [400, 650, 650, 650, 650, 650, 900], holdMs: 3000 })
  const done = Math.max(0, Math.min(STEPS.length, step - 1))
  const complete = step >= 7

  return (
    <div ref={ref} className={cn('grid text-warm-950 @lg:grid-cols-[170px_1fr]', className)}>
      {/* Boards */}
      <aside className="hidden border-r border-warm-100 bg-warm-50 @lg:block">
        <div className="px-3 pb-1.5 pt-3 text-[10px] font-bold uppercase tracking-wider text-warm-400">Boards</div>
        {BOARDS.map((b, i) => (
          <div key={b.name} className={cn('flex items-center gap-2 px-3 py-2 text-[11px]', i === 0 && 'bg-white font-semibold')}>
            <span className={cn('h-1.5 w-1.5 rounded-full', b.color)} />
            <span className="min-w-0 flex-1 truncate">{b.name}</span>
            {b.due && <span className="text-[9px] text-warm-400">{b.due}</span>}
          </div>
        ))}
        <div className="px-3 pb-3 pt-2 text-[10px] text-warm-400">
          <div className="mb-1 font-bold uppercase tracking-wider">All runs</div>
          <div>Today · 6 done · 2 due</div>
        </div>
      </aside>

      {/* Run */}
      <div className="relative">
        <div className="flex items-center gap-3 border-b border-warm-100 px-4 py-3">
          <IconTile tone="brand" size={34}>
            <ClipboardList />
          </IconTile>
          <div className="min-w-0 flex-1">
            <div className="text-[13px] font-semibold">Opening checklist</div>
            <div className="flex items-center gap-1.5 text-[11px] text-warm-500">
              Main St · due 7:30 AM · <Initials name="Maya Chen" size={14} /> Maya
            </div>
          </div>
          <Pill tone={complete ? 'ok' : done > 0 ? 'brand' : 'neutral'}>{complete ? 'Completed 7:26 AM' : done > 0 ? 'In progress' : 'Due'}</Pill>
        </div>

        <div className="flex items-center gap-3 px-4 pt-3">
          <Progress value={(done / STEPS.length) * 100} tone={complete ? 'ok' : 'dark'} className="flex-1" />
          <span className="text-[11px] font-semibold tabular-nums text-warm-600">
            {done}/{STEPS.length}
          </span>
        </div>

        <ul className="mt-2">
          {STEPS.map((s, i) => {
            const checked = done > i
            return (
              <li key={s.label} data-on={step >= 1} className="pv-item flex items-center gap-3 border-t border-warm-100 px-4 py-2.5" style={{ transitionDelay: `${i * 60}ms` }}>
                <Checkbox checked={checked} />
                <div className="min-w-0 flex-1">
                  <div className={cn('pv-swap truncate text-[12px] font-medium', checked && 'text-warm-400 line-through')}>{s.label}</div>
                  {s.meta && (
                    <div data-on={checked} className="pv-item text-[10.5px] text-warm-500">
                      {s.meta}
                    </div>
                  )}
                </div>
                {s.kind === 'photo' && (
                  <span data-on={checked} className={cn('pv-pop inline-flex items-center gap-1 rounded-md bg-warm-100 px-1.5 py-0.5 text-[10px] text-warm-600')}>
                    <Camera className="h-3 w-3" /> 1 photo
                  </span>
                )}
                {s.kind === 'temp' && (
                  <span data-on={checked} className="pv-pop inline-flex items-center gap-1 rounded-md bg-ok-50 px-1.5 py-0.5 text-[10px] font-semibold text-ok-700">
                    <Thermometer className="h-3 w-3" /> 36°F
                  </span>
                )}
              </li>
            )
          })}
        </ul>

        <div className="flex items-center justify-between border-t border-warm-100 px-4 py-2.5 text-[10.5px] text-warm-400">
          <span>Steps, photos, temperatures and signatures are kept on the run</span>
          <span data-on={complete} className="pv-pop inline-flex items-center gap-1 font-semibold text-ok-600">
            <Check className="h-3 w-3" /> 4 min early
          </span>
        </div>
      </div>
    </div>
  )
}
