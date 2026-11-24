import type { ComponentType } from 'react'
import { ClipboardCheck, Croissant } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Face } from '@/components/previews/sauceBits'

/*
 * One day of the café's calendar, up close: Tuesday as a list, each row with its picture (a person's
 * face, a vendor's logo, a checklist's or the surprise bags' mark, as the app's Calendar draws them),
 * Luis's new opening shift at the top and his reply in the crew chat hanging off it. Sketch H of
 * 2026-11-23, picked by the owner with pictures added ("those like people maybe need like avatar").
 */
type Row = {
  time: string
  title: string
  sub: string
  face?: { initials: string; color: string; round?: boolean }
  mark?: { icon: ComponentType<{ className?: string }>; bg: string; fg: string }
  isNew?: boolean
}

const ROWS: Row[] = [
  { time: '6:30 AM', title: 'Luis Romero', sub: 'Opening shift · was Maya Chen', face: { initials: 'LR', color: '#C2410C', round: true }, isNew: true },
  { time: '6:30 AM', title: 'Opening checklist', sub: '12 steps · for the opener', mark: { icon: ClipboardCheck, bg: 'rgb(238,255,240)', fg: 'rgb(25,128,42)' } },
  { time: '6:45 AM', title: 'Rise Bakery', sub: 'Delivery · 48 pastries', face: { initials: 'RB', color: '#9A3412' } },
  { time: '2:00 PM', title: 'Priya Nair', sub: 'Closing shift', face: { initials: 'PN', color: '#BE185D', round: true } },
  { time: '5:00 PM', title: 'Surprise bags', sub: '6 ready for pickup', mark: { icon: Croissant, bg: 'rgb(255,241,251)', fg: 'rgb(190,40,150)' } },
]

export default function CalendarDay() {
  return (
    <div className="relative lg:pr-12">
      <div className="rounded-[28px] border border-warm-200 bg-white p-3 shadow-[0_30px_60px_-36px_rgba(27,26,25,0.35)] sm:p-5">
        <div className="flex items-baseline gap-2.5 px-3 pb-3 pt-1">
          <span className="text-[20px] font-semibold tracking-tight text-warm-950">Tuesday, Nov 24</span>
          <span className="text-[14px] text-warm-500">Main St</span>
        </div>
        <ul>
          {ROWS.map((r) => (
            <li key={r.time + r.title} className={cn('flex items-center gap-3 rounded-2xl px-3 py-3 sm:gap-4', r.isNew && 'bg-warm-100/80')}>
              <span className="w-[62px] shrink-0 text-[14px] font-semibold tabular-nums text-warm-700 sm:w-[70px] sm:text-[15px]">{r.time}</span>
              {r.face ? (
                <Face initials={r.face.initials} color={r.face.color} round={r.face.round} size={38} />
              ) : r.mark ? (
                <span aria-hidden="true" className="inline-flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-[11px]" style={{ background: r.mark.bg, color: r.mark.fg }}>
                  <r.mark.icon className="h-[18px] w-[18px]" />
                </span>
              ) : null}
              <span className="min-w-0 flex-1">
                <span className="block truncate text-[16px] font-semibold text-warm-950">{r.title}</span>
                <span className="block text-[14px] leading-snug text-warm-500 sm:truncate">{r.sub}</span>
              </span>
              {r.isNew && <span className="shrink-0 rounded-full bg-forest-50 px-2 py-0.5 text-[12px] font-semibold text-forest-700">New</span>}
            </li>
          ))}
        </ul>
      </div>

      {/* Luis's reply in the crew chat, off the row it is about */}
      <div className="mt-4 flex gap-3 rounded-2xl bg-white p-3.5 shadow-[0_24px_48px_-20px_rgba(27,26,25,0.45),0_0_0_1px_rgba(27,26,25,0.06)] lg:absolute lg:-right-4 lg:top-[124px] lg:mt-0 lg:w-[260px]">
        <Face initials="LR" color="#C2410C" round size={34} />
        <span className="min-w-0">
          <span className="block text-[13.5px] font-semibold text-warm-950">
            Luis Romero <span className="font-medium text-warm-500">in Main St crew</span>
          </span>
          <span className="mt-0.5 block text-[14px] leading-snug text-warm-800">Got it, I’ll open tomorrow.</span>
        </span>
      </div>
    </div>
  )
}
