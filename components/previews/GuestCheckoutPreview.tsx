'use client'

import { ArrowLeft, Check, ChevronDown, Lock } from 'lucide-react'
import { cn } from '@/lib/utils'
import { money } from './bits'
import { MILK, ProductArt, SELLER } from './storefrontBits'
import { useInView, useSequence } from './useSequence'

// Guest checkout on a storefront (app.forkhr.com/v/<slug>/checkout), laid out like the app's: the
// order on the seller's colour on the left ("Pay Northside Roasters", the total, the lines, the
// minimum met), the form on white on the right in three parts (Contact, Delivery address,
// Delivery: one of the next dates the seller's delivery days and cutoff allow), then one "Pay $X"
// button. Prices are the seller's base prices with its delivery fee and sales tax. The card page
// itself is Stripe's; the demo skips to the paid state. In a narrow window the lines fold behind
// "Order summary", as they do on a phone; the totals stay.
const LINES = [
  { item: MILK[0], qty: 2 },
  { item: MILK[1], qty: 1 },
  { item: MILK[2], qty: 1 },
]
const SUBTOTAL = LINES.reduce((s, l) => s + l.item.price * l.qty, 0)
const DELIVERY = 8
const TAX = Math.round(SUBTOTAL * 0.085 * 100) / 100
const TOTAL = SUBTOTAL + DELIVERY + TAX
// Ordered Tuesday evening, after the 4 pm cutoff: Thursday is the first date offered
const DATES = ['Thu 9', 'Fri 10', 'Sat 11', 'Mon 13']

const Field = ({ label, value, on, placeholder }: { label: string; value: string; on: boolean; placeholder: string }) => (
  <div className="min-w-0">
    <div className="mb-0.5 text-[9px] font-medium text-warm-500">{label}</div>
    <div className={cn('pv-swap truncate rounded-md border px-2 py-1.5 text-[10.5px]', on ? 'border-warm-300 text-warm-950' : 'border-warm-200 text-warm-300')}>{on ? value : placeholder}</div>
  </div>
)

export default function GuestCheckoutPreview({ className }: { className?: string }) {
  const { ref, inView } = useInView<HTMLDivElement>()
  // 1 business · 2 contact · 3 address · 4 date · 5 Pay · 6 paid
  const step = useSequence(6, { inView, ms: [600, 800, 900, 900, 1000, 1200], holdMs: 3400 })
  const paid = step >= 6

  return (
    <div ref={ref} className={cn('relative grid text-warm-950 @lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]', className)}>
      {/* The order, on the seller's colour */}
      <div className="px-4 py-3.5 text-white" style={{ background: SELLER.brand }}>
        <div className="flex items-center gap-1 text-[10px] text-white/70">
          <ArrowLeft className="h-3 w-3" /> {SELLER.name}
        </div>
        <div className="mt-2.5 text-[10.5px] text-white/70">Pay {SELLER.name}</div>
        <div className="text-[22px] font-bold leading-tight tabular-nums">{money(TOTAL)}</div>
        <div className="mt-2 flex items-center justify-between border-t border-white/15 pt-2 text-[10.5px] @lg:hidden">
          <span className="flex items-center gap-1 font-semibold">
            Order summary <ChevronDown className="h-3 w-3" />
          </span>
          <span className="text-white/70">4 items · $150 minimum met</span>
        </div>
        <div className="mt-2.5 hidden space-y-2 @lg:block">
          {LINES.map(({ item, qty }) => (
            <div key={item.id} className="flex items-center gap-2">
              <span className="relative inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-white/90">
                <ProductArt kind={item.art} accent={item.accent} className="h-6 w-6" />
              </span>
              <div className="min-w-0 flex-1">
                <div className="truncate text-[10.5px] font-semibold">{item.name}</div>
                <div className="text-[9px] text-white/60">
                  {qty} × {money(item.price)} / {item.unit}
                </div>
              </div>
              <span className="text-[10.5px] font-semibold tabular-nums">{money(item.price * qty)}</span>
            </div>
          ))}
        </div>
        <div className="mt-2 space-y-1 text-[10px] tabular-nums @lg:mt-3 @lg:border-t @lg:border-white/15 @lg:pt-2">
          {[
            ['Subtotal', SUBTOTAL],
            ['Delivery', DELIVERY],
            ['Sales tax', TAX],
          ].map(([label, amount]) => (
            <div key={label as string} className="flex justify-between text-white/75">
              <span>{label}</span>
              <span>{money(amount as number)}</span>
            </div>
          ))}
          <div className="flex justify-between pt-0.5 text-[11.5px] font-bold">
            <span>Total</span>
            <span>{money(TOTAL)}</span>
          </div>
        </div>
        <div className="mt-2.5 hidden @lg:block">
          <div className="h-1 overflow-hidden rounded-full bg-white/20">
            <div className="h-full w-full rounded-full bg-white" />
          </div>
          <div className="mt-1 text-[9px] text-white/70">$150 minimum met</div>
        </div>
      </div>

      {/* The form */}
      <div className="space-y-2.5 px-4 py-3.5">
        <div className="text-[10px] font-bold uppercase tracking-wider text-warm-400">Contact</div>
        <Field label="Business name" value="Harbor Bistro" placeholder="Harbor Bistro" on={step >= 1} />
        <div className="grid grid-cols-2 gap-2">
          <Field label="Contact name" value="Sam Ortiz" placeholder="Your name" on={step >= 2} />
          <Field label="Phone" value="(718) 555-0198" placeholder="Phone" on={step >= 2} />
        </div>
        <div className="pt-1 text-[10px] font-bold uppercase tracking-wider text-warm-400">Delivery address</div>
        <Field label="Street" value="9 Water St, Brooklyn, NY 11201" placeholder="Street, city, ZIP" on={step >= 3} />
        <div className="pt-1 text-[10px] font-bold uppercase tracking-wider text-warm-400">Delivery</div>
        <div className="flex flex-wrap gap-1.5">
          {DATES.map((d, i) => (
            <span
              key={d}
              className={cn('pv-swap rounded-full border px-2 py-1 text-[9.5px] font-semibold', step >= 4 && i === 0 ? 'border-warm-950 bg-warm-950 text-white' : 'border-warm-200 text-warm-600')}
            >
              {d}
            </span>
          ))}
        </div>
        <div className="pt-1">
          <div
            className={cn(
              'flex h-8 items-center justify-center gap-1.5 rounded-lg text-[11px] font-semibold transition-all duration-300',
              paid ? 'bg-ok-50 text-ok-700' : step >= 5 ? 'scale-[0.97] text-white opacity-90' : 'text-white',
            )}
            style={paid ? undefined : { background: SELLER.brand }}
          >
            {paid ? (
              <>
                <Check className="h-3.5 w-3.5" /> Paid · order placed
              </>
            ) : (
              `Pay ${money(TOTAL)}`
            )}
          </div>
          <div className="mt-1.5 flex items-center justify-center gap-1 text-[9px] text-warm-400">
            {paid ? (
              'Receipt emailed, with a link to the order'
            ) : (
              <>
                <Lock className="h-2.5 w-2.5" /> Card payment on Stripe&apos;s secure page
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
