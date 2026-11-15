'use client'

import { AlarmClock, CalendarClock, CircleHelp, Coffee, LogOut } from 'lucide-react'
import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { IconTile, Pill } from './bits'
import { useInView, useSequence } from './useSequence'

// Operations → Reminders in the app. The rows are Fork's starters as the list words them
// (reminderRules.whenWords / whoWords): "7:00 PM the evening before", "1 hour before a shift starts",
// "10 min after a shift ends" + "if still clocked in", "25 min into a break" + "if still on break"
// (sent switched off), plus a reminder of the company's own that asks a log's question. The alarm
// is the one that rings over Fork until it is answered; for a clock-out it reads "Clock out" /
// "Still working", and the answer is what the reminder's History keeps.
type Item = { icon: ReactNode; name: string; when: string; cond?: string; on: boolean }

const ITEMS: Item[] = [
  { icon: <CalendarClock />, name: 'Shift tomorrow', when: '7:00 PM the evening before', on: true },
  { icon: <AlarmClock />, name: 'Shift in 1 hour', when: '1 hour before a shift starts', on: true },
  { icon: <LogOut />, name: 'Time to clock out', when: '10 min after a shift ends', cond: 'if still clocked in', on: true },
  { icon: <Coffee />, name: 'Break is almost over', when: '25 min into a break', cond: 'if still on break', on: false },
  { icon: <CircleHelp />, name: 'Is the shop open?', when: 'Every day, 7:00 AM', on: true },
]

const Switch = ({ on }: { on: boolean }) => (
  <span className={cn('pv-swap relative inline-flex h-[18px] w-8 shrink-0 items-center rounded-full', on ? 'bg-warm-950' : 'bg-warm-200')}>
    <span className={cn('absolute h-3.5 w-3.5 rounded-full bg-white shadow-sm transition-transform duration-300', on ? 'translate-x-4' : 'translate-x-0.5')} />
  </span>
)

export default function RemindersPreview({ className }: { className?: string }) {
  const { ref, inView } = useInView<HTMLDivElement>()
  // 1–5 the reminders · 6 the clock-out alarm rings · 7 it was answered: the row says so
  const step = useSequence(7, { inView, ms: [380, 380, 380, 380, 380, 900, 2200], holdMs: 3000 })
  const ringing = step === 6

  return (
    <div ref={ref} className={cn('relative text-warm-950', className)}>
      <div className="flex items-center justify-between gap-3 border-b border-warm-100 px-4 py-2.5">
        <div className="flex min-w-0 items-center gap-2">
          <span className="text-[13px] font-semibold">Reminders</span>
          <Pill>Main St</Pill>
        </div>
        <span className="shrink-0 rounded-full bg-warm-950 px-2.5 py-1 text-[10.5px] font-semibold text-white">New reminder</span>
      </div>

      <div>
        {ITEMS.map((r, i) => {
          const clockOut = r.name === 'Time to clock out'
          return (
            <div key={r.name} data-on={step > i} className="pv-item flex items-center gap-3 border-b border-warm-100 px-4 py-2.5 last:border-b-0">
              <IconTile tone={clockOut && step >= 6 ? 'brand' : 'neutral'} size={28}>
                {r.icon}
              </IconTile>
              <div className="min-w-0 flex-1">
                <div className="truncate text-[12px] font-semibold">{r.name}</div>
                <div className="truncate text-[10.5px] text-warm-500">
                  {clockOut && step >= 7 ? (
                    <span className="text-ok-700">Last run 10:10 PM · Jordan Lee: Clock out</span>
                  ) : (
                    <>
                      {r.when}
                      {r.cond && <span className="text-warm-400"> · {r.cond}</span>}
                    </>
                  )}
                </div>
              </div>
              <Switch on={r.on} />
            </div>
          )
        })}
      </div>

      {/* The alarm, as it rings over Fork until someone answers */}
      <div
        data-on={ringing}
        className="pv-pop absolute bottom-3 right-3 z-10 w-[220px] rounded-2xl bg-warm-950 p-3.5 text-white shadow-[0_24px_50px_-18px_rgba(9,9,11,0.6)]"
      >
        <div className="flex items-center gap-2">
          <span className="pv-live inline-flex h-6 w-6 items-center justify-center rounded-full bg-white/12 text-white">
            <AlarmClock className="h-3.5 w-3.5" />
          </span>
          <span className="text-[10px] font-medium text-white/60">Fork · now</span>
        </div>
        <div className="mt-2 text-[13px] font-semibold">Time to clock out</div>
        <div className="mt-0.5 text-[10.5px] leading-snug text-white/70">Your shift at Main St ended at 10:00 PM and you are still clocked in.</div>
        <div className="mt-3 grid grid-cols-2 gap-1.5">
          <span className="rounded-full bg-white py-1.5 text-center text-[10.5px] font-semibold text-warm-950">Clock out</span>
          <span className="rounded-full bg-white/12 py-1.5 text-center text-[10.5px] font-semibold text-white">Still working</span>
        </div>
      </div>
    </div>
  )
}
