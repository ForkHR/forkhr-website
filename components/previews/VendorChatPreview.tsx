'use client'

import { Check, FileText, Mail, Package } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Initials, Pill, Typing } from './bits'
import { useInView, useSequence } from './useSequence'

// One conversation with a business that is not on Fork. What you type goes out as an email;
// their reply lands back in the chat. `role` is who the other side is to you.
const SIDES = {
  vendor: {
    name: 'Bluebird Dairy',
    email: 'orders@bluebirddairy.com',
    role: 'Vendor',
    ask: "Can you add 6 more gallons of whole milk to tomorrow's order? We're catering an event.",
    reply: 'Done, updated to 18 gallons. Same truck, 6:30 AM. Updated invoice attached.',
    file: 'INV-2041.pdf',
    card: { title: 'Order #1042 updated', sub: '12 items · $486.20 · delivery Thu 6:30 AM' },
  },
  customer: {
    name: 'Corner Café',
    email: 'hello@cornercafe.com',
    role: 'Customer',
    ask: "Morning! Your Friday order is confirmed: 24 sourdough, 36 croissants, 18 baguettes. Anything to add before the 4 PM cutoff?",
    reply: 'Yes please, 12 more baguettes. And can you send the invoice to accounts@ this time?',
    file: null,
    card: { title: 'Order S-2088 updated', sub: '3 items · $228.00 · delivery Fri 6:40 AM' },
  },
}

export default function VendorChatPreview({ className, role = 'vendor' }: { className?: string; role?: 'vendor' | 'customer' }) {
  const { ref, inView } = useInView<HTMLDivElement>()
  const step = useSequence(5, { inView, ms: [500, 900, 900, 1400, 900], holdMs: 3200 })
  const s = SIDES[role]

  return (
    <div ref={ref} className={cn('flex flex-col text-warm-950', className)}>
      <div className="flex items-center gap-3 border-b border-warm-100 px-4 py-2.5">
        <Initials name={s.name} size={32} />
        <div className="min-w-0 flex-1">
          <div className="text-[13px] font-semibold">{s.name}</div>
          <div className="flex items-center gap-1 truncate text-[10.5px] text-warm-500">
            <Mail className="h-3 w-3 shrink-0" /> Emails {s.email}
          </div>
        </div>
        <Pill tone="neutral">{s.role}</Pill>
        <Pill tone="brand" className="hidden @lg:inline-flex">
          Not on Fork
        </Pill>
      </div>

      <div className="min-h-[250px] space-y-2.5 bg-warm-50 px-4 py-3">
        <div className="text-center text-[10px] text-warm-400">Today</div>

        {/* Own message */}
        <div data-on={step >= 1} className="pv-item flex justify-end">
          <div className="max-w-[82%]">
            <div className="rounded-2xl rounded-br-md bg-warm-950 px-3 py-2 text-[12px] leading-relaxed text-white">{s.ask}</div>
            <div className="mt-1 flex items-center justify-end gap-1 text-[10px] text-warm-400">
              <span data-on={step >= 2} className="pv-item inline-flex items-center gap-1">
                <Check className="h-3 w-3 text-ok-500" /> Sent by email · 8:12 AM
              </span>
            </div>
          </div>
        </div>

        {/* Typing */}
        {step === 3 && (
          <div className="pv-fade-in flex items-end gap-2">
            <Initials name={s.name} size={22} />
            <div className="rounded-2xl rounded-bl-md border border-warm-200 bg-white px-3 py-2 text-warm-500">
              <Typing />
            </div>
          </div>
        )}

        {/* Reply */}
        <div data-on={step >= 4} className="pv-item flex items-end gap-2">
          <Initials name={s.name} size={22} />
          <div className="max-w-[82%]">
            <div className="rounded-2xl rounded-bl-md border border-warm-200 bg-white px-3 py-2 text-[12px] leading-relaxed">
              {s.reply}
              {s.file && (
                <div className="mt-2 flex w-fit items-center gap-2 rounded-lg border border-warm-200 bg-warm-50 px-2 py-1.5 text-[11px]">
                  <FileText className="h-3.5 w-3.5 text-warm-500" />
                  <span className="font-medium">{s.file}</span>
                  <span className="text-warm-400">42 KB</span>
                </div>
              )}
            </div>
            <div className="mt-1 flex items-center gap-1 text-[10px] text-warm-400">
              <Mail className="h-3 w-3" /> Replied by email · 8:19 AM
            </div>
          </div>
        </div>

        {/* Order card */}
        <div data-on={step >= 5} className="pv-item mx-auto flex max-w-[92%] items-center gap-3 rounded-xl border border-warm-200 bg-white px-3 py-2.5">
          <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-forest-50 text-forest-700">
            <Package className="h-4 w-4" />
          </span>
          <div className="min-w-0 flex-1 text-[11.5px]">
            <div className="font-semibold">{s.card.title}</div>
            <div className="text-warm-500">{s.card.sub}</div>
          </div>
          <span className="text-[11px] font-semibold text-forest-600">View</span>
        </div>
      </div>

      <div className="flex items-center gap-2 border-t border-warm-100 px-4 py-2.5">
        <div className="flex-1 rounded-full border border-warm-200 bg-white px-3 py-1.5 text-[11px] text-warm-400">Message {s.name}…</div>
        <span className="text-[10px] text-warm-400">Sends as email</span>
      </div>
    </div>
  )
}
