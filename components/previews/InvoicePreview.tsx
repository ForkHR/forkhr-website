'use client'

import { Check, Landmark, Mail, QrCode } from 'lucide-react'
import { cn } from '@/lib/utils'
import { FakeQr, Initials, Pill, money } from './bits'
import { useInView, useSequence } from './useSequence'

// A sales order turning into an invoice and getting paid by a customer who is not on Fork.
const LINES = [
  { item: 'Sourdough loaf', qty: 24, price: 3.4 },
  { item: 'Butter croissant', qty: 36, price: 1.9 },
  { item: 'Baguette', qty: 18, price: 2.6 },
]
const subtotal = LINES.reduce((s, l) => s + l.qty * l.price, 0)

export default function InvoicePreview({ className }: { className?: string }) {
  const { ref, inView } = useInView<HTMLDivElement>()
  const step = useSequence(5, { inView, ms: [500, 1000, 1000, 1200, 1000], holdMs: 3200 })
  const paid = step >= 4

  return (
    <div ref={ref} className={cn('text-warm-950', className)}>
      <div className="flex items-center gap-3 border-b border-warm-100 px-4 py-2.5">
        <Initials name="Corner Café" size={30} />
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 text-[13px] font-semibold">
            Order S-2088 <span className="text-warm-400">·</span> Corner Café
          </div>
          <div className="text-[10.5px] text-warm-500">Customer · not on Fork · billed by email</div>
        </div>
        <Pill tone={paid ? 'ok' : step >= 2 ? 'warn' : 'neutral'}>{paid ? 'Paid' : step >= 2 ? 'Invoiced' : 'Delivered'}</Pill>
      </div>

      <div className="grid @md:grid-cols-[1fr_190px]">
        {/* Lines */}
        <div className="px-4 py-3">
          <div className="grid grid-cols-[1fr_44px_64px] text-[10px] font-bold uppercase tracking-wider text-warm-400">
            <span>Item</span>
            <span className="text-right">Qty</span>
            <span className="text-right">Amount</span>
          </div>
          {LINES.map((l, i) => (
            <div key={l.item} data-on={step >= 1} className="pv-item grid grid-cols-[1fr_44px_64px] border-b border-warm-100 py-2 text-[12px]" style={{ transitionDelay: `${i * 80}ms` }}>
              <span className="truncate">
                {l.item} <span className="text-warm-400">· {money(l.price)}</span>
              </span>
              <span className="text-right tabular-nums text-warm-600">{l.qty}</span>
              <span className="text-right font-medium tabular-nums">{money(l.qty * l.price)}</span>
            </div>
          ))}
          <div data-on={step >= 1} className="pv-item space-y-1 pt-2 text-[11px]" style={{ transitionDelay: '260ms' }}>
            <div className="flex justify-between text-warm-500">
              <span>Delivery</span>
              <span>Free over $150</span>
            </div>
            <div className="flex justify-between text-[13px] font-semibold">
              <span>Total due</span>
              <span className="tabular-nums">{money(subtotal)}</span>
            </div>
            <div className="text-warm-400">Net 7 · due Tue, Sep 30</div>
          </div>
        </div>

        {/* Timeline + pay */}
        <div className="border-t border-warm-100 bg-warm-50 px-4 py-3 @md:border-l @md:border-t-0">
          <ol className="space-y-2.5 text-[11px]">
            {[
              { on: step >= 2, icon: <Mail className="h-3 w-3" />, t: 'Invoice sent', d: 'Email + PDF · Mon 6:02 AM' },
              { on: step >= 3, icon: <QrCode className="h-3 w-3" />, t: 'Opened by customer', d: 'Pay link · 7:14 AM' },
              { on: step >= 4, icon: <Landmark className="h-3 w-3" />, t: 'Paid by bank transfer', d: `${money(subtotal)} · Tue 9:40 AM`, ok: true },
              { on: step >= 5, icon: <Check className="h-3 w-3" />, t: 'Payout to your bank', d: 'Thu · Stripe', ok: true },
            ].map((e) => (
              <li key={e.t} data-on={e.on} className="pv-item flex items-start gap-2">
                <span className={cn('mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full', e.ok ? 'bg-ok-100 text-ok-700' : 'bg-white text-warm-500 ring-1 ring-warm-200')}>
                  {e.icon}
                </span>
                <div>
                  <div className="font-semibold">{e.t}</div>
                  <div className="text-warm-500">{e.d}</div>
                </div>
              </li>
            ))}
          </ol>

          <div className="mt-3 flex items-center gap-3 rounded-lg border border-warm-200 bg-white p-2">
            <FakeQr size={44} />
            <div className="text-[10.5px] leading-snug text-warm-500">
              <div className="font-semibold text-warm-950">Pay online</div>
              Card or US bank. The QR is printed on the PDF too.
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
