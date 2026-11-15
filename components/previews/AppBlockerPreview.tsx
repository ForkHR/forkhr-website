'use client'

import { ShieldBan } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Initials, Pill, type PillTone } from './bits'
import { useInView, useSequence } from './useSequence'

// Operations → App blocker in the app, on its People tab: who is covered, their phone as the table
// says it (appBlockerRules.deviceWords: "iPhone · On since Nov 2", "Turned off"), where each one
// stands right now (nowWords: "Blocked until 10:00 PM", "On break until 6:40 PM", "Unlocked · 4 min
// left"; the controller's "At work, not blocked" for a phone that turned it off) and the attempts
// today. An attempt then arrives on the Activity as it happens ("Blocked", with the app's name).
type Person = { name: string; phone: string; phoneTone?: string; now: string; tone: PillTone; today: number }

const PEOPLE: Person[] = [
  { name: 'Jordan Lee', phone: 'iPhone · On since Nov 2', now: 'Blocked until 10:00 PM', tone: 'brand', today: 2 },
  { name: 'Maya Chen', phone: 'Android · On since Nov 3', now: 'On break until 6:40 PM', tone: 'neutral', today: 0 },
  { name: 'Luis Ortega', phone: 'iPhone · On since Nov 4', now: 'Unlocked · 4 min left', tone: 'warn', today: 1 },
  { name: 'Priya Nair', phone: 'Turned off · Nov 14', phoneTone: 'text-bad-700', now: 'At work, not blocked', tone: 'bad', today: 0 },
]

export default function AppBlockerPreview({ className }: { className?: string }) {
  const { ref, inView } = useInView<HTMLDivElement>()
  // 1–4 the people at work · 5 Jordan opens a blocked app: the count and the Activity line
  const step = useSequence(5, { inView, ms: [420, 420, 420, 420, 1300], holdMs: 3200 })
  const attempt = step >= 5

  return (
    <div ref={ref} className={cn('relative text-warm-950', className)}>
      <div className="flex items-center justify-between gap-3 border-b border-warm-100 px-4 py-2.5">
        <div className="flex min-w-0 items-center gap-3">
          <span className="text-[13px] font-semibold">App blocker</span>
          <span className="flex items-center gap-2.5 text-[11px]">
            <span className="border-b-2 border-warm-950 pb-0.5 font-semibold">People</span>
            <span className="pb-0.5 text-warm-400">Activity</span>
          </span>
        </div>
        <span className="inline-flex shrink-0 items-center gap-1.5 text-[11px] text-warm-500">
          <span className="pv-live inline-block h-1.5 w-1.5 rounded-full bg-ok-500 text-ok-500" />4 at work
        </span>
      </div>

      <div className="hidden grid-cols-[minmax(0,1fr)_auto_44px] gap-3 px-4 pb-1 pt-2.5 text-[9.5px] font-bold uppercase tracking-wider text-warm-400 @md:grid">
        <span>Person</span>
        <span>Right now</span>
        <span className="text-right">Today</span>
      </div>

      <div>
        {PEOPLE.map((p, i) => {
          const today = attempt && i === 0 ? p.today + 1 : p.today
          return (
            <div key={p.name} data-on={step > i} className="pv-item flex items-center gap-3 border-b border-warm-100 px-4 py-2.5 last:border-b-0">
              <Initials name={p.name} size={28} />
              <div className="min-w-0 flex-1">
                <div className="truncate text-[12px] font-semibold">{p.name}</div>
                <div className={cn('truncate text-[10.5px]', p.phoneTone || 'text-warm-500')}>{p.phone}</div>
              </div>
              <Pill tone={p.tone} className="hidden @xs:inline-flex">
                {p.now}
              </Pill>
              <span className={cn('pv-swap w-11 shrink-0 text-right text-[12px] font-semibold tabular-nums', today ? (attempt && i === 0 ? 'text-forest-600' : 'text-warm-950') : 'text-warm-300')}>{today || '—'}</span>
            </div>
          )
        })}
      </div>

      {/* The attempt, as the Activity tab records it the moment it happens */}
      <div data-on={attempt} className="pv-item flex items-center gap-2.5 border-t border-warm-100 bg-warm-50/70 px-4 py-2">
        <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-warm-100 text-warm-600">
          <ShieldBan className="h-3 w-3" />
        </span>
        <div className="min-w-0 flex-1 truncate text-[10.5px] text-warm-600">
          <span className="font-semibold tabular-nums text-warm-950">6:12 PM</span> · Jordan Lee · <span className="font-semibold text-warm-950">Blocked</span> · Instagram · Main St
        </div>
      </div>
    </div>
  )
}
