'use client'

import { Check, Landmark, Mail, QrCode } from 'lucide-react'
import { cn } from '@/lib/utils'
import { FakeQr, Initials, Pill, money } from './bits'
import { useInView, useSequence } from './useSequence'

// An invoice getting paid by a customer who is not on Fork: a bakery's sales order (`order`),
// or a month of a service provider's calls on one invoice (`service`).
const VARIANTS = {
  order: {
    customer: 'Corner Café',
    title: 'Order S-2088',
    sub: 'Customer · not on Fork · billed by email',
    before: 'Delivered',
    cols: ['Item', 'Qty', 'Amount'],
    lines: [
      { title: 'Sourdough loaf', detail: money(3.4), mid: '24', amount: 24 * 3.4 },
      { title: 'Butter croissant', detail: money(1.9), mid: '36', amount: 36 * 1.9 },
      { title: 'Baguette', detail: money(2.6), mid: '30', amount: 30 * 2.6 },
    ],
    extra: ['Delivery', 'Free over $150'],
    terms: 'Net 7 · due Mon, Oct 6',
  },
  service: {
    customer: 'Harbor Market',
    title: 'Invoice INV-3110',
    sub: '3 service calls · not on Fork · billed by email',
    before: 'Completed',
    cols: ['Service call', 'Date', 'Amount'],
    lines: [
      { title: 'Walk-in cooler repair', detail: '#SR-1042', mid: 'Sep 18', amount: 328 },
      { title: 'Ice machine descale', detail: '#SR-1051', mid: 'Sep 22', amount: 180 },
      { title: 'Quarterly coil cleaning', detail: '#SR-1060', mid: 'Sep 29', amount: 240 },
    ],
    extra: ['Work reports', '3 pages on the PDF'],
    terms: 'Net 15 · due Wed, Oct 15',
  },
}

export default function InvoicePreview({ variant = 'order', className }: { variant?: keyof typeof VARIANTS; className?: string }) {
  const { ref, inView } = useInView<HTMLDivElement>()
  const step = useSequence(5, { inView, ms: [500, 1000, 1000, 1200, 1000], holdMs: 3200 })
  const paid = step >= 4
  const v = VARIANTS[variant]
  const subtotal = v.lines.reduce((s, l) => s + l.amount, 0)

  return (
    <div ref={ref} className={cn('text-warm-950', className)}>
      <div className="flex items-center gap-3 border-b border-warm-100 px-4 py-2.5">
        <Initials name={v.customer} size={30} />
        <div className="min-w-0 flex-1">
          <div className="flex items-center gap-2 text-[13px] font-semibold">
            {v.title} <span className="text-warm-400">·</span> {v.customer}
          </div>
          <div className="text-[10.5px] text-warm-500">{v.sub}</div>
        </div>
        <Pill tone={paid ? 'ok' : step >= 2 ? 'warn' : 'neutral'}>{paid ? 'Paid' : step >= 2 ? 'Invoiced' : v.before}</Pill>
      </div>

      <div className="grid @md:grid-cols-[1fr_190px]">
        {/* Lines */}
        <div className="px-4 py-3">
          <div className="grid grid-cols-[1fr_48px_64px] text-[10px] font-bold uppercase tracking-wider text-warm-400">
            <span>{v.cols[0]}</span>
            <span className="text-right">{v.cols[1]}</span>
            <span className="text-right">{v.cols[2]}</span>
          </div>
          {v.lines.map((l, i) => (
            <div key={l.title} data-on={step >= 1} className="pv-item grid grid-cols-[1fr_48px_64px] border-b border-warm-100 py-2 text-[12px]" style={{ transitionDelay: `${i * 80}ms` }}>
              <span className="truncate">
                {l.title} <span className="text-warm-400">· {l.detail}</span>
              </span>
              <span className="text-right tabular-nums text-warm-600">{l.mid}</span>
              <span className="text-right font-medium tabular-nums">{money(l.amount)}</span>
            </div>
          ))}
          <div data-on={step >= 1} className="pv-item space-y-1 pt-2 text-[11px]" style={{ transitionDelay: '260ms' }}>
            <div className="flex justify-between text-warm-500">
              <span>{v.extra[0]}</span>
              <span>{v.extra[1]}</span>
            </div>
            <div className="flex justify-between text-[13px] font-semibold">
              <span>Total due</span>
              <span className="tabular-nums">{money(subtotal)}</span>
            </div>
            <div className="text-warm-400">{v.terms}</div>
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
