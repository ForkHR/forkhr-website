import type { ComponentType, ReactNode } from 'react'
import { CalendarDays, CalendarPlus, Check, Megaphone, Package, Sun, TriangleAlert } from 'lucide-react'
import { cn } from '@/lib/utils'

/*
 * Sauce, Fork's AI assistant, as the site draws it: its face and the card it puts under an answer.
 * The face is the app's own (frontend/src/components/assistant/SauceMark.jsx, the owner's pick of
 * 2026-11-22): change both. The card is the app's RecordCard look (a tile, the title and its pill, who
 * it is about, label / value rows, a foot), and the words on each card's button are the app's own
 * (backend/utils/assistantActionKinds.js and assistantKinds/), so the site never promises a button
 * the product does not have.
 */

export const SAUCE_COLORS = { ground: '#FFE4D6', drop: '#E5462B', ink: '#16181D', spark: '#E89B0C' }

export function SauceMark({ size = 28, round = true, className, title = 'Sauce' }: { size?: number; round?: boolean; className?: string; title?: string | null }) {
  return (
    <svg viewBox="0 0 100 100" width={size} height={size} className={cn('block shrink-0', className)} role={title ? 'img' : undefined} aria-label={title ?? undefined} aria-hidden={title ? undefined : true}>
      <rect width="100" height="100" rx={round ? 50 : 24} fill={SAUCE_COLORS.ground} />
      <path d="M56 19C52 26 30 44 30 61A20 20 0 0 0 70 61C70 46 58 32 56 19Z" fill={SAUCE_COLORS.drop} />
      <path d="M37 55Q38 49 42.5 45.5" fill="none" stroke="#FFFFFF" strokeOpacity={0.55} strokeWidth={3} strokeLinecap="round" />
      <ellipse cx="43" cy="61" rx="3.2" ry="4.4" fill={SAUCE_COLORS.ink} />
      <ellipse cx="57" cy="61" rx="3.2" ry="4.4" fill={SAUCE_COLORS.ink} />
      <circle cx="44" cy="59.4" r="1.1" fill="#FFFFFF" />
      <circle cx="58" cy="59.4" r="1.1" fill="#FFFFFF" />
      <path d="M44.5 68.5Q50 73.5 55.5 68.5" fill="none" stroke={SAUCE_COLORS.ink} strokeWidth={3} strokeLinecap="round" />
      <path d="M75 26C75.7 30 77 31.3 81 32C77 32.7 75.7 34 75 38C74.3 34 73 32.7 69 32C73 31.3 74.3 30 75 26Z" fill={SAUCE_COLORS.spark} />
    </svg>
  )
}

export type CardSubject = { initials: string; color: string; round?: boolean; name: string; sub: string }
export type CardRow = { label: string; value: string; was?: string }

export type SauceTask = {
  key: string
  /** The words on the tab and in the bubble: what someone would type. */
  request: string
  reply: string
  icon: ComponentType<{ className?: string; strokeWidth?: number }>
  title: string
  subject: CardSubject
  rows: CardRow[]
  confirm: string
  doneLabel: string
  done: string
}

/** What a person asks and the card Sauce makes, in the café the site's demos share (Juniper Coffee, week of Nov 23). */
export const SAUCE_TASKS: SauceTask[] = [
  {
    key: 'order',
    request: 'Order 6 cases of oat milk from Bluebird for Thursday',
    reply: 'Here’s the order. Check it, then place it.',
    icon: Package,
    title: 'New order',
    subject: { initials: 'BD', color: '#0E7490', name: 'Bluebird Dairy', sub: 'Not on Fork · gets the order by email' },
    rows: [
      { label: 'Delivery', value: 'Thu, Nov 26 · Main St' },
      { label: 'Items', value: 'Oat milk × 6 cases' },
      { label: 'Total', value: '$143.70' },
    ],
    confirm: 'Place order',
    doneLabel: 'Placed',
    done: 'Placed. Bluebird got it by email, and it’s on the calendar for Thursday.',
  },
  {
    key: 'swap',
    request: 'Maya’s sick tomorrow. Give her opening shift to Luis',
    reply: 'Here’s the change. Luis is free from 6:30.',
    icon: CalendarDays,
    title: 'Change shift',
    subject: { initials: 'MC', color: '#6D28D9', round: true, name: 'Opening shift', sub: 'Main St' },
    rows: [
      { label: 'When', value: 'Tue, Nov 24 · 6:30 AM – 2:30 PM' },
      { label: 'Who', value: 'Luis Romero', was: 'Maya Chen' },
    ],
    confirm: 'Save change',
    doneLabel: 'Saved',
    done: 'Saved. Luis has it on their phone, and Maya is off tomorrow.',
  },
  {
    key: 'shift',
    request: 'Add a closing shift for Priya on Friday, 3 to 10',
    reply: 'Here’s the shift. It stays a draft until you publish the week.',
    icon: CalendarPlus,
    title: 'New shift',
    subject: { initials: 'PN', color: '#BE185D', round: true, name: 'Priya Nair', sub: 'Barista · Main St' },
    rows: [
      { label: 'When', value: 'Fri, Nov 27 · 3:00 – 10:00 PM' },
      { label: 'Where', value: 'Main St' },
    ],
    confirm: 'Create shift',
    doneLabel: 'Created',
    done: 'Created as a draft on Friday’s schedule.',
  },
  {
    key: 'writeup',
    request: 'Write up Jordan for missing Saturday’s shift',
    reply: 'Here’s a draft. Nothing goes to Jordan until you submit it.',
    icon: TriangleAlert,
    title: 'Write-up',
    subject: { initials: 'JL', color: '#0369A1', round: true, name: 'Jordan Lee', sub: 'Barista · Main St' },
    rows: [
      { label: 'Reason', value: 'No call, no show' },
      { label: 'Shift', value: 'Sat, Nov 21 · 3:00 – 10:00 PM' },
    ],
    confirm: 'Save draft',
    doneLabel: 'Draft saved',
    done: 'Saved as a draft in Records, ready when you are.',
  },
  {
    key: 'timeoff',
    request: 'Book me off Dec 24 to 26 for a family trip',
    reply: 'Here’s your request. It goes to your manager to approve.',
    icon: Sun,
    title: 'Time off request',
    subject: { initials: 'LR', color: '#C2410C', round: true, name: 'Luis Romero', sub: 'Barista · Main St' },
    rows: [
      { label: 'Dates', value: 'Thu, Dec 24 – Sat, Dec 26' },
      { label: 'Type', value: 'Paid time off · 24 hours' },
      { label: 'Reason', value: 'Family trip' },
    ],
    confirm: 'Send request',
    doneLabel: 'Sent',
    done: 'Sent to your manager to approve.',
  },
  {
    key: 'update',
    request: 'Post an update: we switch oat milk brands on Monday',
    reply: 'Here’s the update. It goes out when you post it.',
    icon: Megaphone,
    title: 'New update',
    subject: { initials: 'MC', color: '#6D28D9', round: true, name: 'From you', sub: 'To everyone at Main St · 14 people' },
    rows: [{ label: 'Message', value: 'Heads up, team: we switch oat milk brands on Monday. Same steaming, a little sweeter.' }],
    confirm: 'Post update',
    doneLabel: 'Posted',
    done: 'Posted. All 14 people got it on their phones.',
  },
]

export function Face({ initials, color, round, size = 36, className }: { initials: string; color: string; round?: boolean; size?: number; className?: string }) {
  return (
    <span
      aria-hidden="true"
      className={cn('inline-flex shrink-0 items-center justify-center font-bold text-white', className)}
      style={{ width: size, height: size, borderRadius: round ? '50%' : Math.round(size * 0.28), background: color, fontSize: Math.max(8, Math.round(size * 0.33)) }}
    >
      {initials}
    </span>
  )
}

/**
 * The card Sauce puts under its answer. `state` ready shows Not now and the card's own button
 * (`pressed` darkens it, for the demos), done shows the green line. `size` sm is the phone's.
 */
export function SauceCard({
  icon: Icon,
  title,
  subject,
  rows,
  confirm,
  doneLabel,
  done,
  state = 'ready',
  pressed = false,
  size = 'md',
  className,
  footer,
}: {
  icon: ComponentType<{ className?: string; strokeWidth?: number }>
  title: string
  subject?: CardSubject
  rows: CardRow[]
  confirm: string
  doneLabel: string
  done: string
  state?: 'ready' | 'done'
  pressed?: boolean
  size?: 'sm' | 'md'
  className?: string
  /** Something in place of the two buttons (the home page's own buttons). */
  footer?: ReactNode
}) {
  const sm = size === 'sm'
  return (
    <div className={cn('flex flex-col border border-warm-200 bg-white text-left text-warm-950', sm ? 'gap-2.5 rounded-[18px] p-3' : 'gap-3 rounded-3xl p-4 shadow-[0_24px_48px_-30px_rgba(27,26,25,0.45)]', className)}>
      <div className="flex items-center gap-2.5">
        <span className={cn('inline-flex shrink-0 items-center justify-center bg-warm-100 text-warm-950', sm ? 'h-7 w-7 rounded-lg' : 'h-8 w-8 rounded-[10px]')}>
          <Icon className={sm ? 'h-3.5 w-3.5' : 'h-4 w-4'} strokeWidth={2} />
        </span>
        <span className={cn('min-w-0 flex-1 font-semibold', sm ? 'text-[13px] leading-tight' : 'truncate text-[15px]')}>{title}</span>
        <span
          className={cn(
            'pv-swap inline-flex shrink-0 items-center whitespace-nowrap rounded-full font-semibold',
            sm ? 'h-5 px-2 text-[10px]' : 'h-6 px-2.5 text-[12px]',
            state === 'done' ? 'bg-ok-50 text-ok-700' : 'bg-warm-100 text-warm-600',
          )}
        >
          {state === 'done' ? doneLabel : sm ? 'Ready' : 'Ready to confirm'}
        </span>
      </div>

      {subject && (
        <div className="flex items-center gap-2.5">
          <Face initials={subject.initials} color={subject.color} round={subject.round} size={sm ? 28 : 36} />
          <span className="min-w-0">
            <span className={cn('block truncate font-semibold', sm ? 'text-[12.5px]' : 'text-[14px]')}>{subject.name}</span>
            <span className={cn('block truncate text-warm-500', sm ? 'text-[11px]' : 'text-[12.5px]')}>{subject.sub}</span>
          </span>
        </div>
      )}

      <div className="divide-y divide-warm-100 border-t border-warm-100">
        {rows.map((r) => (
          <div key={r.label} className={cn('flex items-baseline gap-3', sm ? 'py-1.5 text-[11.5px]' : 'py-2 text-[13.5px]')}>
            <span className={cn('shrink-0 text-warm-500', sm ? 'w-11' : 'w-[76px]')}>{r.label}</span>
            <span className="flex min-w-0 flex-1 flex-wrap items-baseline gap-x-1.5">
              {r.was && (
                <>
                  <span className="text-warm-400 line-through">{r.was}</span>
                  <span className="text-warm-400" aria-hidden="true">
                    →
                  </span>
                </>
              )}
              <span className="font-medium text-warm-950">{r.value}</span>
            </span>
          </div>
        ))}
      </div>

      {state === 'done' ? (
        <div className={cn('pv-fade-in flex items-center gap-2 rounded-xl bg-ok-50 text-ok-700', sm ? 'px-2.5 py-2 text-[11.5px]' : 'px-3 py-2.5 text-[13.5px]')}>
          <span className={cn('inline-flex shrink-0 items-center justify-center rounded-full bg-ok-600 text-white', sm ? 'h-4 w-4' : 'h-5 w-5')}>
            <Check className={sm ? 'h-2.5 w-2.5' : 'h-3 w-3'} strokeWidth={3.5} />
          </span>
          <span className="leading-snug">{done}</span>
        </div>
      ) : (
        (footer ?? (
          <div className="flex justify-end gap-2">
            <span className={cn('inline-flex items-center rounded-full border border-warm-300 bg-white font-medium', sm ? 'h-7 px-3 text-[11.5px]' : 'h-9 px-4 text-[13.5px]')}>Not now</span>
            <span
              className={cn(
                'pv-swap relative inline-flex items-center rounded-full font-medium text-white transition-transform',
                sm ? 'h-7 px-3 text-[11.5px]' : 'h-9 px-4 text-[13.5px]',
                pressed ? 'scale-95 bg-warm-700' : 'bg-warm-950',
              )}
            >
              {confirm}
              {pressed && <span className="pv-tap" />}
            </span>
          </div>
        ))
      )}
    </div>
  )
}
