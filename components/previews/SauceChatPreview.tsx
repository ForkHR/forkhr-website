'use client'

import { useEffect, useState, type ComponentType } from 'react'
import { ArrowLeft, ArrowUp, CalendarDays, ChevronRight, CupSoda, Droplet, Ellipsis, Milk, Package, Plus, Sun, TriangleAlert } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Face, SauceCard, SauceMark, type CardRow, type CardSubject } from './sauceBits'
import { useInView, usePrefersReducedMotion } from './useSequence'

/**
 * The home page's hero: a manager using Sauce on the phone, the way they would text a shift lead.
 * It plays seven conversations in turn, each typed into the box and sent, asking and doing by turns:
 * who is working tomorrow (an answer), Maya calling in sick (Sauce asks who should cover, a tap, the
 * card, Save change, the crew's reply), what is coming in today (an answer), an oat milk order (a card,
 * Place order), what is low on stock (an answer), a write-up (a draft, Save draft) and time off (a
 * card, Send request).
 * Everything shown is what the app does: Sauce answers from the schedule and the orders, offers the
 * people as buttons, prepares a card, and only the person's own tap carries it out. The café is the
 * one the other demos share (Juniper Coffee, Main St, Monday Nov 23).
 * (2026-11-23, the owner: "animate like person is typing and sends a message", then "a few more
 * scenarios, like order … from …, who's working tomorrow, what orders are we getting today", and to
 * my list of three more, time off, stock and a write-up: "okay build it".)
 *
 * Drawn as Messages draws a conversation and as the app draws Sauce's screen (2026-11-24, the owner:
 * "it should look like this i message design", "i dont know if its a good ideas when i land on the
 * screen the mobile has a blank page", and of the app's head, "Header should look like that on it"):
 * the app's head (back and more as round buttons, Sauce's face in the middle with its name on a pill
 * and "AI assistant" under it), the person's questions in blue bubbles and Sauce's answers in grey ones,
 * each with the Messages tail, Sauce at work as a grey bubble of three dots with two round puffs for a
 * tail, and the app's one-pill box. The conversation before stays in the thread over the one playing,
 * as a chat scrolls, so the phone is never an empty screen: it opens on the shift swap already done,
 * with the next question being typed under it.
 */

/** A row of an answer: a person or a business (face), or a thing on the shelf (icon); ok and warn colour its line. */
type ListRow = { face?: { initials: string; color: string; round?: boolean }; icon?: ComponentType<{ className?: string }>; title: string; sub: string; ok?: boolean; warn?: boolean }
type Card = { icon: ComponentType<{ className?: string; strokeWidth?: number }>; title: string; subject?: CardSubject; rows: CardRow[]; confirm: string; doneLabel: string; done: string }

type Beat =
  | { t: 'idle'; ms: number }
  | { t: 'type'; ms: number }
  | { t: 'send'; ms: number }
  | { t: 'think'; ms: number }
  | { t: 'say'; text: string; rows?: ListRow[]; ms: number }
  | { t: 'chips'; options: string[]; ms: number }
  | { t: 'tap'; option: string; ms: number }
  | { t: 'me'; text: string; ms: number }
  | { t: 'card'; ms: number }
  | { t: 'press'; ms: number }
  | { t: 'done'; ms: number }
  | { t: 'notify'; ms: number }

type Scenario = { question: string; card?: Card; notify?: { face: { initials: string; color: string; round?: boolean }; name: string; where: string; text: string }; beats: Beat[] }

const MAYA = { initials: 'MC', color: '#6D28D9', round: true }
const PRIYA = { initials: 'PN', color: '#BE185D', round: true }
const LUIS = { initials: 'LR', color: '#C2410C', round: true }
const RISE = { initials: 'RB', color: '#9A3412' }
const NORTHSIDE = { initials: 'NR', color: '#78350F' }

const SCENARIOS: Scenario[] = [
  {
    question: 'Who’s working tomorrow?',
    beats: [
      { t: 'idle', ms: 600 },
      { t: 'type', ms: 1300 },
      { t: 'send', ms: 350 },
      { t: 'think', ms: 900 },
      {
        t: 'say',
        text: 'Tomorrow at Main St:',
        rows: [
          { face: MAYA, title: 'Maya Chen', sub: '6:30 AM – 2:30 PM · Opening' },
          { face: PRIYA, title: 'Priya Nair', sub: '2:00 – 10:00 PM · Closing' },
        ],
        ms: 3200,
      },
    ],
  },
  {
    question: 'Maya’s sick tomorrow. Who can open?',
    card: {
      icon: CalendarDays,
      title: 'Change shift',
      rows: [
        { label: 'When', value: 'Tue, Nov 24 · 6:30 – 2:30' },
        { label: 'Who', value: 'Luis Romero', was: 'Maya Chen' },
      ],
      confirm: 'Save change',
      doneLabel: 'Saved',
      done: 'Saved. Luis was told.',
    },
    notify: { face: LUIS, name: 'Luis Romero', where: 'Main St crew', text: 'Got it, I’ll open tomorrow.' },
    beats: [
      { t: 'idle', ms: 600 },
      { t: 'type', ms: 1800 },
      { t: 'send', ms: 350 },
      { t: 'think', ms: 900 },
      { t: 'say', text: 'Luis and Priya are free from 6:30 tomorrow. Who should take Maya’s opening shift?', ms: 600 },
      { t: 'chips', options: ['Luis Romero', 'Priya Nair'], ms: 1100 },
      { t: 'tap', option: 'Luis Romero', ms: 500 },
      { t: 'me', text: 'Luis Romero', ms: 450 },
      { t: 'think', ms: 850 },
      { t: 'card', ms: 1600 },
      { t: 'press', ms: 380 },
      { t: 'done', ms: 1000 },
      { t: 'notify', ms: 3400 },
    ],
  },
  {
    question: 'What orders are we getting today?',
    beats: [
      { t: 'idle', ms: 600 },
      { t: 'type', ms: 1600 },
      { t: 'send', ms: 350 },
      { t: 'think', ms: 900 },
      {
        t: 'say',
        text: 'Two deliveries today:',
        rows: [
          { face: RISE, title: 'Rise Bakery', sub: 'Came at 6:47 AM · 48 pastries, all there', ok: true },
          { face: NORTHSIDE, title: 'Northside Roasters', sub: 'Due at 10:30 AM · 20 lb house espresso' },
        ],
        ms: 3400,
      },
    ],
  },
  {
    question: 'Order 6 cases of oat milk from Bluebird for Thursday',
    card: {
      icon: Package,
      title: 'New order',
      subject: { initials: 'BD', color: '#0E7490', name: 'Bluebird Dairy', sub: 'Gets the order by email' },
      rows: [
        { label: 'Delivery', value: 'Thu, Nov 26' },
        { label: 'Items', value: 'Oat milk × 6 cases' },
        { label: 'Total', value: '$143.70' },
      ],
      confirm: 'Place order',
      doneLabel: 'Placed',
      done: 'Placed. On the calendar for Thursday.',
    },
    beats: [
      { t: 'idle', ms: 600 },
      { t: 'type', ms: 2100 },
      { t: 'send', ms: 350 },
      { t: 'think', ms: 900 },
      { t: 'say', text: 'Here’s the order. Check it, then place it.', ms: 500 },
      { t: 'card', ms: 1800 },
      { t: 'press', ms: 380 },
      { t: 'done', ms: 3400 },
    ],
  },
  {
    question: 'What’s low on stock?',
    beats: [
      { t: 'idle', ms: 600 },
      { t: 'type', ms: 1300 },
      { t: 'send', ms: 350 },
      { t: 'think', ms: 900 },
      {
        t: 'say',
        text: 'Three items are under par at Main St:',
        rows: [
          { icon: Milk, title: 'Oat milk', sub: '3 cartons left · par 12', warn: true },
          { icon: CupSoda, title: '16 oz hot cups', sub: '1 sleeve left · par 6', warn: true },
          { icon: Droplet, title: 'Vanilla syrup', sub: '1 bottle left · par 4', warn: true },
        ],
        ms: 3400,
      },
    ],
  },
  {
    question: 'Write up Jordan for missing Saturday’s shift',
    card: {
      icon: TriangleAlert,
      title: 'Write-up',
      subject: { initials: 'JL', color: '#0369A1', round: true, name: 'Jordan Lee', sub: 'Barista · Main St' },
      rows: [
        { label: 'Reason', value: 'No call, no show' },
        { label: 'Shift', value: 'Sat, Nov 21 · 3:00 – 10:00 PM' },
      ],
      confirm: 'Save draft',
      doneLabel: 'Draft saved',
      done: 'Saved as a draft. Nothing goes to Jordan until you submit it.',
    },
    beats: [
      { t: 'idle', ms: 600 },
      { t: 'type', ms: 1900 },
      { t: 'send', ms: 350 },
      { t: 'think', ms: 900 },
      { t: 'say', text: 'Here’s a draft. Check it, then save it.', ms: 500 },
      { t: 'card', ms: 1700 },
      { t: 'press', ms: 380 },
      { t: 'done', ms: 3200 },
    ],
  },
  {
    question: 'Book me paid time off Dec 24 to 26 for a family trip',
    card: {
      icon: Sun,
      title: 'Time off request',
      rows: [
        { label: 'Dates', value: 'Thu, Dec 24 – Sat, Dec 26' },
        { label: 'Type', value: 'Paid time off · 24 hours' },
        { label: 'Reason', value: 'Family trip' },
      ],
      confirm: 'Send request',
      doneLabel: 'Sent',
      done: 'Sent for approval.',
    },
    beats: [
      { t: 'idle', ms: 600 },
      { t: 'type', ms: 2100 },
      { t: 'send', ms: 350 },
      { t: 'think', ms: 900 },
      { t: 'say', text: 'Here’s your request. Check it, then send it.', ms: 500 },
      { t: 'card', ms: 1700 },
      { t: 'press', ms: 380 },
      { t: 'done', ms: 3000 },
    ],
  },
]

// People who asked for less motion see the shift swap, finished
const STILL = { s: 1, b: SCENARIOS[1].beats.length - 1 }
// The first conversation typed is the third (what is coming in today), so the shift swap is already in the thread
const START = { s: 2, b: 0 }

// The app's own bubble colours: a message delivered on Fork (uChatBubble), and the other side's (chatBubble)
const ME_FILL = '#3A83F7'
const SAUCE_FILL = '#E9E9EA'

/** The Messages tail at a bubble's foot, the app's path (components/chat/bubble/styles.js TAIL_PATH), in the phone's size. */
function Tail({ side, fill }: { side: 'me' | 'sauce'; fill: string }) {
  return (
    <svg viewBox="0 0 9 16" width={7} height={12.5} aria-hidden="true" className={cn('absolute bottom-0', side === 'me' ? '-right-[6px]' : '-left-[6px] -scale-x-100')}>
      <path d="M0,8 L1,8 A8,8 0 0 0 6.6,15.63 L6.6,16 L0,16 Z" fill={fill} />
    </svg>
  )
}

/** Sauce at work, as Messages draws someone typing: three dots lit one after another, two round puffs for a tail. */
function TypingBubble() {
  return (
    <span className="pv-imsg-pop relative mb-1.5 inline-flex h-[26px] items-center rounded-full px-2.5" style={{ background: SAUCE_FILL }}>
      <span className="absolute -bottom-[2px] -left-[2px] h-[9px] w-[9px] rounded-full" style={{ background: SAUCE_FILL }} />
      <span className="absolute -bottom-[6px] -left-[7px] h-[4px] w-[4px] rounded-full" style={{ background: SAUCE_FILL }} />
      <span className="pv-imsg-dots relative inline-flex items-center gap-[4px]">
        <span />
        <span />
        <span />
      </span>
    </span>
  )
}

/**
 * One conversation's messages as they stand at beat \`b\`. \`live\` is the one playing (its typing bubble, the
 * chip under the finger, the button being pressed); the one before it is drawn finished, over it. Keys
 * carry the conversation's number, so a conversation that finishes keeps its messages where they are.
 */
function threadOf(s: number, b: number, live: boolean) {
  const sc = SCENARIOS[s]
  const cur = sc.beats[b]
  const seen = sc.beats.slice(0, b + 1)
  const sendAt = sc.beats.findIndex((x) => x.t === 'send')
  const tapAt = sc.beats.findIndex((x) => x.t === 'tap')
  const cardDone = seen.some((x) => x.t === 'done')
  const key = (i: number) => `${s}-${i}`
  const face = <SauceMark size={20} title={null} />

  const me = (text: string, k: string) => (
    <div key={k} className="pv-msg-in flex justify-end">
      <div className="relative max-w-[80%]">
        <Tail side="me" fill={ME_FILL} />
        <div className="rounded-[15px] rounded-br-none px-3 py-[7px] text-[12px] leading-snug text-white" style={{ background: ME_FILL }}>
          {text}
        </div>
      </div>
    </div>
  )

  return seen.flatMap((beat, i) => {
    switch (beat.t) {
      case 'send':
        return b > sendAt ? [me(sc.question, key(i))] : []
      case 'think':
        return live && i === b
          ? [
              <div key={key(i)} className="flex items-end gap-2">
                <span className="mb-1.5">{face}</span>
                <TypingBubble />
              </div>,
            ]
          : []
      case 'say':
        return [
          <div key={key(i)} className="pv-msg-in flex items-end gap-2">
            {face}
            <div className="relative max-w-[84%]">
              <Tail side="sauce" fill={SAUCE_FILL} />
              <div className="rounded-[15px] rounded-bl-none px-3 py-[7px] text-[12px] leading-snug text-warm-950" style={{ background: SAUCE_FILL }}>
                {beat.text}
                {beat.rows && (
                  <div className="mt-1.5 divide-y divide-warm-950/10">
                    {beat.rows.map((r) => (
                      <div key={r.title} className="flex items-start gap-2 py-1.5">
                        {r.face ? (
                          <Face initials={r.face.initials} color={r.face.color} round={r.face.round} size={22} className="mt-0.5" />
                        ) : r.icon ? (
                          <span className="mt-0.5 inline-flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-md bg-white/80 text-warm-700">
                            <r.icon className="h-3 w-3" />
                          </span>
                        ) : null}
                        <div className="min-w-0 flex-1 leading-tight">
                          <div className="truncate text-[11.5px] font-semibold text-warm-950">{r.title}</div>
                          <div className={cn('text-[10.5px] leading-snug', r.ok ? 'text-ok-700' : r.warn ? 'text-warn-700' : 'text-warm-600')}>{r.sub}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>,
        ]
      case 'chips': {
        if (tapAt >= 0 && b > tapAt) return []
        const tapping = live && cur.t === 'tap' ? cur.option : null
        return [
          <div key={key(i)} className="pv-msg-in flex gap-1.5 pl-7">
            {beat.options.map((o) => (
              <span
                key={o}
                className={cn('pv-swap relative rounded-full px-3 py-1.5 text-[11px] font-semibold', tapping === o ? 'scale-95 bg-warm-950 text-white' : 'bg-warm-950/[0.07] text-warm-950')}
              >
                {o}
                {tapping === o && <span className="pv-tap" />}
              </span>
            ))}
          </div>,
        ]
      }
      case 'me':
        return [me(beat.text, key(i))]
      case 'card':
        return sc.card
          ? [
              <div key={key(i)} className="pv-msg-in pl-7">
                <SauceCard size="sm" {...sc.card} pressed={live && cur.t === 'press'} state={cardDone ? 'done' : 'ready'} />
              </div>,
            ]
          : []
      default:
        return []
    }
  })
}

export default function SauceChatPreview({ className }: { className?: string }) {
  const { ref, inView } = useInView<HTMLDivElement>()
  const reduced = usePrefersReducedMotion()
  const [at, setAt] = useState(START)
  const [typed, setTyped] = useState(0)

  const pos = reduced ? STILL : at
  const sc = SCENARIOS[pos.s]
  const cur = sc.beats[pos.b]
  const before = (pos.s - 1 + SCENARIOS.length) % SCENARIOS.length

  // The next beat, then the next conversation; paused while the phone is off screen
  useEffect(() => {
    if (reduced || !inView) return
    const timer = setTimeout(() => {
      setAt(({ s, b }) => (b < SCENARIOS[s].beats.length - 1 ? { s, b: b + 1 } : { s: (s + 1) % SCENARIOS.length, b: 0 }))
    }, cur.ms)
    return () => clearTimeout(timer)
  }, [at, inView, reduced, cur.ms])

  // The question appears a letter at a time while the beat is "type"
  useEffect(() => {
    if (cur.t !== 'type') {
      setTyped(cur.t === 'send' ? sc.question.length : 0)
      return
    }
    setTyped(0)
    const every = Math.max(26, Math.floor((cur.ms - 250) / sc.question.length))
    const id = setInterval(() => setTyped((n) => (n >= sc.question.length ? n : n + 1)), every)
    return () => clearInterval(id)
  }, [cur, sc.question])

  const composing = cur.t === 'type' || cur.t === 'send'
  const notified = sc.beats.slice(0, pos.b + 1).some((x) => x.t === 'notify')
  const items = [...threadOf(before, SCENARIOS[before].beats.length - 1, false), ...threadOf(pos.s, pos.b, true)]

  return (
    <div ref={ref} className={cn('relative flex h-[492px] flex-col bg-white', className)}>
      {/* The app's head: back and more as round buttons, Sauce's face in the middle, its name on a pill under it */}
      <div className="relative z-10 flex flex-col items-center bg-white px-3 pb-2 pt-1">
        <span className="absolute left-3 top-2 inline-flex h-8 w-8 items-center justify-center rounded-full border border-warm-200 bg-white">
          <ArrowLeft className="h-4 w-4 text-warm-950" strokeWidth={2.2} />
        </span>
        <SauceMark size={44} title={null} />
        <span className="-mt-1.5 inline-flex items-center gap-0.5 rounded-full border border-warm-200 bg-white py-[3px] pl-2.5 pr-1.5 text-[12px] font-semibold leading-tight text-warm-950 shadow-[0_1px_2px_rgba(27,26,25,0.06)]">
          Sauce
          <ChevronRight className="h-3 w-3 text-warm-400" strokeWidth={2.5} />
        </span>
        <span className="mt-1 text-[9.5px] leading-none text-warm-500">AI assistant</span>
        <span className="absolute right-3 top-2 inline-flex h-8 w-8 items-center justify-center rounded-full border border-warm-200 bg-white">
          <Ellipsis className="h-4 w-4 text-warm-950" strokeWidth={2.5} />
        </span>
      </div>

      {/* The newest at the bottom, as a chat scrolled down; the conversation before runs off the top and fades */}
      <div className="relative flex-1 overflow-hidden mask-[linear-gradient(to_bottom,transparent,black_28px)]">
        <div className="absolute inset-x-0 bottom-0 flex flex-col gap-2 px-3 pb-2">{items}</div>
      </div>

      {/* The app's box: one pill, the + at its start and the send button inside its end */}
      <div className="bg-white px-2.5 pb-3 pt-1.5">
        <div className={cn('flex items-end gap-1.5 rounded-[20px] border bg-white py-1 pl-2.5 pr-1 shadow-[0_2px_10px_-4px_rgba(27,26,25,0.14)] transition-colors', composing ? 'border-warm-300' : 'border-warm-200')}>
          <Plus className="mb-[5px] h-4 w-4 shrink-0 text-warm-950" strokeWidth={2.2} />
          {/* Grows to a second line as the question gets longer, as a phone's message box does */}
          <span className={cn('min-w-0 flex-1 py-[5px] text-[11.5px] leading-snug', composing ? 'text-warm-950' : 'truncate text-warm-400')}>
            {composing ? (
              <>
                {sc.question.slice(0, typed)}
                {cur.t === 'type' && <span className="pv-caret" />}
              </>
            ) : (
              'Ask anything'
            )}
          </span>
          <span
            className={cn(
              'pv-swap relative inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full transition-transform',
              composing && typed > 0 ? 'bg-warm-950 text-white' : 'bg-warm-100 text-warm-400',
              cur.t === 'send' && 'scale-90',
            )}
          >
            <ArrowUp className="h-3.5 w-3.5" strokeWidth={2.5} />
            {cur.t === 'send' && <span className="pv-tap" />}
          </span>
        </div>
      </div>

      {/* A reply from the crew, as it lands on the manager's phone */}
      {sc.notify && (
        <div data-on={notified} className="pv-pop absolute inset-x-2.5 top-2 z-20 flex items-start gap-2 rounded-2xl bg-white/95 p-2.5 shadow-[0_12px_30px_-10px_rgba(27,26,25,0.45)] ring-1 ring-warm-950/5 backdrop-blur">
          <Face initials={sc.notify.face.initials} color={sc.notify.face.color} round={sc.notify.face.round} size={28} />
          <div className="min-w-0 leading-snug">
            <div className="text-[11px] font-semibold text-warm-950">
              {sc.notify.name} <span className="font-normal text-warm-500">· {sc.notify.where}</span>
            </div>
            <div className="text-[11.5px] text-warm-700">{sc.notify.text}</div>
          </div>
        </div>
      )}
    </div>
  )
}
