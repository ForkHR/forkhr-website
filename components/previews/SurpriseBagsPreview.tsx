'use client'

import { Clock, Minus, Plus } from 'lucide-react'
import { cn } from '@/lib/utils'
import { LogoMark } from '@/components/navigation/Logo'
import { Pill, money, type PillTone } from './bits'
import { useInView, useSequence } from './useSequence'

// Surprise bags in the app: the shop's own page (app.forkhr.com/grab/<slug>, the shop's colour,
// no account) on one side, today's orders at Main St on the other. A reservation lands as the
// staff see it: a row with its 4-character code and "New", the push's words in the toast
// ("New surprise bag order" / "Sam · 2 bags · pick up Today, 5–6 PM", backend/utils/grabBagNotify.js),
// then "Got it". The card's words are the public page's (GrabShopPage.jsx: "N left" / "Only N left",
// "worth about", "Pick up Today, 5–6 PM · order by 5:45 PM", "Usually inside", "Reserve a bag");
// the strip under them is Availability's bar and stepper ("left of 8"). Same cast and numbers as
// the drawings: Juniper Coffee, Pastry bag $6.00, 8 a day, Sam reserves 2 at 2:18 PM, code K7RT.
const BRAND = '#1F6F5C'

type OrderRow = { code: string; name: string; bags: number; status: 'New' | 'Got it' }

const EARLIER: OrderRow[] = [
  { code: 'R9KD', name: 'Omar K.', bags: 1, status: 'Got it' },
  { code: 'M3TA', name: 'Leah P.', bags: 1, status: 'Got it' },
  { code: 'C7HF', name: 'Kenji T.', bags: 1, status: 'Got it' },
]

// The app's own tones (grabBagModel ORDER_TONES): New amber, Got it blue
const TONE: Record<OrderRow['status'], PillTone> = { New: 'warn', 'Got it': 'brand' }

function CodeChip({ code, live }: { code: string; live?: boolean }) {
  return (
    <span
      className={cn(
        'pv-swap inline-flex h-7 w-[46px] shrink-0 items-center justify-center rounded-lg font-mono text-[11px] font-semibold tracking-[0.12em]',
        live ? 'bg-warm-950 text-white' : 'bg-warm-100 text-warm-700',
      )}
    >
      {code}
    </span>
  )
}

/** The kraft bag the public page draws when a bag has no picture of its own. */
function BagArt() {
  return (
    <svg viewBox="0 0 160 120" className="h-full w-full" aria-hidden="true">
      <rect width="160" height="120" fill="#EFE6D8" />
      <ellipse cx="80" cy="110" rx="44" ry="4" fill="#D9CBB6" />
      <g transform="rotate(22 102 40)">
        <rect x="94" y="0" width="16" height="78" rx="8" fill="#D9A55E" />
        <rect x="103" y="4" width="6" height="70" rx="3" fill="#C38B45" />
      </g>
      <path d="M52 48 C53 36 64 29 74 29 C84 29 95 36 96 48 C96 50 93 51 92 49 C89 45 82 43 74 43 C66 43 59 45 56 49 C55 51 52 50 52 48 Z" fill="#E0B06A" />
      <path d="M48 46 H112 L116 108 H44 Z" fill="#C7A27A" />
      <path d="M48 46 H112 L110 56 H50 Z" fill="#B48C64" />
      <circle cx="80" cy="80" r="11" fill={BRAND} />
      <text x="80" y="84.5" textAnchor="middle" fontSize="12" fontWeight="700" fill="#fff">
        J
      </text>
    </svg>
  )
}

export default function SurpriseBagsPreview({ className }: { className?: string }) {
  const { ref, inView } = useInView<HTMLDivElement>()
  // 1–3 today's orders · 3 the shop's page · 4 Sam presses Reserve · 5 the order lands · 6 Got it
  const step = useSequence(6, { inView, ms: [450, 450, 800, 1200, 900, 1500], holdMs: 3200 })
  const landed = step >= 5
  const seen = step >= 6
  const left = landed ? 3 : 5
  const sold = 8 - left
  const rows: OrderRow[] = landed ? [{ code: 'K7RT', name: 'Sam O.', bags: 2, status: seen ? 'Got it' : 'New' }, ...EARLIER] : EARLIER

  return (
    <div ref={ref} className={cn('relative text-warm-950', className)}>
      <div className="flex items-center justify-between gap-3 border-b border-warm-100 px-4 py-2.5">
        <div className="flex min-w-0 items-center gap-2">
          <span className="text-[13px] font-semibold">Orders</span>
          <Pill>Today · Main St</Pill>
        </div>
        <span className="inline-flex shrink-0 items-center gap-1.5 text-[11px] text-warm-500">
          <span className="pv-live inline-block h-1.5 w-1.5 rounded-full bg-ok-500 text-ok-500" />
          <span className="pv-swap tabular-nums">{left + 4}</span> left today
        </span>
      </div>

      <div className="grid @lg:grid-cols-[minmax(0,1.25fr)_minmax(0,1fr)]">
        <div className="min-w-0">
          {rows.map((r, i) => {
            const fresh = r.code === 'K7RT'
            return (
              <div
                key={r.code}
                data-on={fresh ? landed : step > i - (landed ? 1 : 0)}
                className={cn('pv-item flex items-center gap-3 border-b border-warm-100 px-4 py-2.5', fresh && !seen && 'bg-warn-50/50')}
              >
                <CodeChip code={r.code} live={fresh && !seen} />
                <div className="min-w-0 flex-1">
                  <div className="truncate text-[12px] font-semibold">{r.name}</div>
                  <div className="truncate text-[10.5px] text-warm-500">
                    {r.bags} {r.bags === 1 ? 'bag' : 'bags'} · pick up 5–6 PM
                  </div>
                </div>
                <Pill tone={TONE[r.status]} dot={r.status === 'New'}>
                  {r.status}
                </Pill>
              </div>
            )
          })}

          {/* Availability: today's count for the bag, changed with a tap */}
          <div data-on={step >= 2} className="pv-item px-4 pb-3 pt-3">
            <div className="flex items-center justify-between text-[10.5px]">
              <span className="font-semibold text-warm-600">Pastry bag · Main St</span>
              <span className="text-warm-500">
                <b className="pv-swap font-semibold tabular-nums text-warm-950">{sold}</b> sold · <b className="pv-swap font-semibold tabular-nums text-warm-950">{left}</b> left
              </span>
            </div>
            <div className="mt-1.5 flex items-center gap-3">
              <div className="flex h-2 flex-1 overflow-hidden rounded-full bg-warm-100">
                <span className="pv-fill h-full rounded-full bg-warm-950" style={{ width: `${(sold / 8) * 100}%` }} />
              </div>
              <div className="flex shrink-0 flex-col items-center">
                <span className="inline-flex items-center gap-1.5 rounded-full border border-warm-200 px-1 py-0.5">
                  <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-warm-100 text-warm-600">
                    <Minus className="h-2.5 w-2.5" />
                  </span>
                  <span className="pv-swap w-3 text-center text-[11px] font-semibold tabular-nums">{left}</span>
                  <span className="inline-flex h-4 w-4 items-center justify-center rounded-full bg-warm-100 text-warm-600">
                    <Plus className="h-2.5 w-2.5" />
                  </span>
                </span>
                <span className="mt-0.5 text-[8.5px] text-warm-400">left of 8</span>
              </div>
            </div>
          </div>
        </div>

        {/* The shop's own page, as a customer sees it */}
        <div className="hidden border-l border-warm-100 bg-[#f6f6f7] px-4 pb-4 pt-3.5 @lg:block">
          <div data-on={step >= 3} className="pv-slide-r">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-6 w-6 items-center justify-center rounded-full text-[11px] font-semibold text-white" style={{ background: BRAND }}>
                J
              </span>
              <span className="text-[11.5px] font-semibold">Juniper Coffee</span>
            </div>
            <div className="mt-2 text-[15px] font-semibold tracking-tight">Surprise bags</div>
            <div className="text-[9.5px] text-warm-500">Main St · 214 Main St</div>

            <div className="mt-2.5 overflow-hidden rounded-xl border border-[#e2e2e5] bg-white">
              <div className="relative h-[74px]">
                <BagArt />
                <span
                  className={cn('pv-swap absolute left-2 top-2 rounded-full px-1.5 py-0.5 text-[9px] font-semibold', landed ? 'bg-[#FFF4E5] text-[#9A4B00]' : 'bg-white text-warm-800')}
                >
                  {landed ? 'Only 3 left' : '5 left'}
                </span>
              </div>
              <div className="px-2.5 pb-2.5 pt-2">
                <div className="flex items-baseline justify-between gap-2">
                  <span className="text-[12px] font-semibold">Pastry bag</span>
                  <span className="text-right">
                    <b className="text-[12px] font-semibold">{money(6)}</b>
                    <span className="block text-[8.5px] text-warm-400">worth about {money(18)}</span>
                  </span>
                </div>
                <div className="mt-1 flex items-start gap-1 text-[9.5px] leading-tight text-warm-600">
                  <Clock className="mt-px h-2.5 w-2.5 shrink-0" />
                  <span>
                    Pick up Today, 5–6 PM
                    <span className="block text-warm-400">order by 5:45 PM</span>
                  </span>
                </div>
                <div className="mt-1 text-[9px] text-warm-500">
                  <span className="font-semibold text-warm-600">Usually inside</span> Croissants · Muffins · A loaf of the day
                </div>
                <div
                  className={cn('pv-swap mt-2 flex h-6 items-center justify-center rounded-full text-[10.5px] font-semibold text-white', step === 4 && 'ring-2 ring-offset-1 ring-[#1F6F5C]/40')}
                  style={{ background: BRAND }}
                >
                  Reserve a bag
                </div>
              </div>
            </div>
            <div className="mt-2 text-center text-[8.5px] text-warm-400">Made with Fork</div>
          </div>
        </div>
      </div>

      {/* The push the person on shift gets */}
      <div
        data-on={landed && !seen}
        className="pv-pop pointer-events-none absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-2xl bg-warm-950 px-3 py-2 text-white shadow-lg @lg:left-[30%]"
      >
        <span className="inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-white">
          <LogoMark size={13} className="text-warm-950" />
        </span>
        <span className="leading-tight">
          <span className="block text-[10.5px] font-semibold">New surprise bag order</span>
          <span className="block text-[10px] text-white/70">Sam · 2 bags · pick up Today, 5–6 PM</span>
        </span>
      </div>
    </div>
  )
}
