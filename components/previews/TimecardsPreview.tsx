'use client'

import { Check, MapPin, Smartphone, Tablet } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Initials, Pill, SectionLabel, Toast } from './bits'
import { useInView, useSequence } from './useSequence'

// Today's timecards: scheduled vs punched, hours and cost, and where each card stands. The
// statuses are the app's ("Pending", then "Approved" with the toast "Approved 2 timecards";
// "On the clock"); a timecard carries no on-time verdict, lateness lives in the On-time arrival
// report, and the week goes out through Export to payroll on the web.
const ROWS: { name: string; scheduled: string; punch: string; status?: string; tone?: 'ok' | 'warn' | 'brand'; hours: string; cost: string; via: string; live?: boolean }[] = [
  { name: 'Maya Chen', scheduled: '7:00 – 3:00', punch: 'In 6:58 · Out 3:01', status: 'Pending', tone: 'warn', hours: '8h 03m', cost: '$128.80', via: 'kiosk' },
  { name: 'Luis Ortega', scheduled: '9:00 – 5:00', punch: 'In 9:12 · Out 5:00', status: 'Pending', tone: 'warn', hours: '7h 48m', cost: '$117.00', via: 'phone' },
  { name: 'Priya Nair', scheduled: '1:00 – 9:00', punch: 'In 12:57', status: 'On the clock', tone: 'brand', hours: '3h 20m', cost: '$60.00', via: 'gps', live: true },
  { name: 'Jordan Lee', scheduled: '3:00 – 10:00', punch: 'Starts at 3:00 PM', hours: '—', cost: '—', via: 'phone' },
]

const VIA = {
  kiosk: <Tablet className="h-3 w-3" />,
  phone: <Smartphone className="h-3 w-3" />,
  gps: <MapPin className="h-3 w-3" />,
}

export default function TimecardsPreview({ className }: { className?: string }) {
  const { ref, inView } = useInView<HTMLDivElement>()
  const step = useSequence(6, { inView, ms: [450, 450, 450, 450, 900, 1200], holdMs: 3000 })

  return (
    <div ref={ref} className={cn('relative text-warm-950', className)}>
      <div className="flex items-center justify-between border-b border-warm-100 px-4 py-2.5">
        <div className="flex items-center gap-2">
          <span className="text-[13px] font-semibold">Timecards</span>
          <Pill>Main St</Pill>
          <Pill>Today</Pill>
        </div>
        <span className="inline-flex items-center gap-1.5 text-[11px] text-warm-500">
          <span className="pv-live inline-block h-1.5 w-1.5 rounded-full bg-ok-500 text-ok-500" />3 on the clock
        </span>
      </div>

      <SectionLabel right="Scheduled · punched · status">Team</SectionLabel>
      <div>
        {ROWS.map((r, i) => (
          <div key={r.name} data-on={step > i} className="pv-item flex items-center gap-3 border-b border-warm-100 px-4 py-2.5 last:border-b-0">
            <Initials name={r.name} size={30} />
            <div className="min-w-0 flex-1">
              <div className="flex items-center justify-between gap-2">
                <span className="truncate text-[12px] font-semibold">{r.name}</span>
                <span className="text-[12px] font-semibold tabular-nums">{r.hours}</span>
              </div>
              <div className="flex items-center justify-between gap-2 text-[11px] text-warm-500">
                <span className="flex items-center gap-1.5 truncate">
                  <span className="text-warm-400">{VIA[r.via as keyof typeof VIA]}</span>
                  {r.scheduled} <span className="text-warm-300">·</span> {r.punch}
                </span>
                <span className="tabular-nums">{r.cost}</span>
              </div>
            </div>
            {r.status && (
              <Pill tone={r.status === 'Pending' && step >= 6 ? 'ok' : r.tone} dot={r.live}>
                {r.status === 'Pending' && step >= 6 ? 'Approved' : r.status}
              </Pill>
            )}
          </div>
        ))}
      </div>

      {/* Footer stats */}
      <div className="grid grid-cols-3 gap-px border-t border-warm-100 bg-warm-100 text-[11px]">
        {[
          { l: 'Hours today', v: '19h 11m' },
          { l: 'Labor cost', v: '$305.80' },
          { l: 'Overtime', v: '0h' },
        ].map((s) => (
          <div key={s.l} data-on={step >= 5} className="pv-item bg-white px-4 py-2.5">
            <div className="text-warm-400">{s.l}</div>
            <div className="text-[14px] font-semibold tabular-nums">{s.v}</div>
          </div>
        ))}
      </div>

      <Toast on={step >= 6} className="bottom-[68px]">
        <Check className="h-3.5 w-3.5 text-ok-500" /> Approved 2 timecards
      </Toast>
    </div>
  )
}
