'use client'

import { Check, Hash, Image as ImageIcon } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Initials, Typing } from './bits'
import { useInView, useSequence } from './useSequence'

// Team chat: a group everyone at Main St is in, a photo, a shift shared into it, and the groups
// list on the side. As in the app: groups have the names people give them and fill themselves
// from a location or job rule, your bubble is blue when it reached people on Fork, a group says
// "Delivered" under your latest message, and a shared shift is the shift's card ("View Details").
const CHANNELS = [
  { name: 'Main St team', unread: 2, active: true },
  { name: 'Riverside team', unread: 0 },
  { name: 'Baristas', unread: 5 },
  { name: 'Managers', unread: 0 },
]

export default function ChatPreview({ className }: { className?: string }) {
  const { ref, inView } = useInView<HTMLDivElement>()
  const step = useSequence(5, { inView, ms: [500, 900, 900, 1000, 1200], holdMs: 3000 })

  return (
    <div ref={ref} className={cn('grid grid-cols-1 text-warm-950 @lg:grid-cols-[150px_minmax(0,1fr)]', className)}>
      <aside className="hidden border-r border-warm-100 bg-warm-50 @lg:block">
        <div className="px-3 pb-1.5 pt-3 text-[10px] font-bold uppercase tracking-wider text-warm-400">Channels</div>
        {CHANNELS.map((c) => (
          <div key={c.name} className={cn('flex items-center gap-1.5 px-3 py-1.5 text-[11px]', c.active ? 'bg-white font-semibold' : 'text-warm-600')}>
            <Hash className="h-3 w-3 text-warm-400" />
            <span className="flex-1 truncate">{c.name}</span>
            {c.unread > 0 && <span className="rounded-full bg-warm-950 px-1.5 text-[9px] font-bold text-white">{c.unread}</span>}
          </div>
        ))}
        <div className="px-3 pb-1.5 pt-3 text-[10px] font-bold uppercase tracking-wider text-warm-400">Direct</div>
        {['Maya Chen', 'Luis Ortega'].map((n) => (
          <div key={n} className="flex items-center gap-2 px-3 py-1.5 text-[11px] text-warm-600">
            <Initials name={n} size={16} />
            <span className="truncate">{n}</span>
          </div>
        ))}
      </aside>

      <div className="flex flex-col">
        <div className="flex items-center gap-2 border-b border-warm-100 px-4 py-2.5">
          <Hash className="h-3.5 w-3.5 shrink-0 text-warm-400" />
          <span className="shrink-0 text-[13px] font-semibold">Main St team</span>
          <span className="min-w-0 truncate text-[10.5px] text-warm-400">· Everyone at Main St</span>
        </div>

        <div className="min-h-[230px] flex-1 space-y-2.5 bg-warm-50 px-4 py-3">
          <div data-on={step >= 1} className="pv-item flex items-end gap-2">
            <Initials name="Maya Chen" size={22} />
            <div className="max-w-[80%]">
              <div className="mb-0.5 ml-1 text-[10px] font-semibold text-warm-500">Maya Chen</div>
              <div className="rounded-2xl rounded-bl-md border border-warm-200 bg-white px-3 py-2 text-[12px] leading-relaxed">Truck is here early, can someone help unload?</div>
            </div>
          </div>

          <div data-on={step >= 2} className="pv-item flex justify-end">
            <div className="max-w-[80%]">
              <div className="rounded-2xl rounded-br-md bg-forest-500 px-3 py-2 text-[12px] leading-relaxed text-white">On my way. Luis, grab the dolly from the back.</div>
              <div className="mt-1 flex items-center justify-end gap-1 text-[10px] text-warm-400">
                <Check className="h-3 w-3 text-ok-500" /> Delivered
              </div>
            </div>
          </div>

          {step === 3 && (
            <div className="pv-fade-in flex items-end gap-2">
              <Initials name="Luis Ortega" size={22} />
              <div className="rounded-2xl rounded-bl-md border border-warm-200 bg-white px-3 py-2 text-warm-500">
                <Typing />
              </div>
            </div>
          )}

          <div data-on={step >= 4} className="pv-item flex items-end gap-2">
            <Initials name="Luis Ortega" size={22} />
            <div className="max-w-[80%]">
              <div className="mb-0.5 ml-1 text-[10px] font-semibold text-warm-500">Luis Ortega</div>
              <div className="rounded-2xl rounded-bl-md border border-warm-200 bg-white px-3 py-2 text-[12px] leading-relaxed">
                Got it 👍
                <div className="mt-2 flex h-16 w-36 items-center justify-center rounded-lg bg-gradient-to-br from-warm-200 to-warm-100 text-warm-400">
                  <ImageIcon className="h-4 w-4" />
                </div>
              </div>
            </div>
          </div>

          <div data-on={step >= 5} className="pv-item flex items-end gap-2">
            <Initials name="Dana W." size={22} />
            <div className="w-[78%] rounded-2xl rounded-bl-md border border-warm-200 bg-white p-1.5 text-[11px]">
              <div className="rounded-xl bg-warm-50 px-2.5 py-2 ring-1 ring-warm-100">
                <div className="text-[9.5px] font-semibold uppercase tracking-wider text-warm-400">Shift</div>
                <div className="font-semibold">Open Shift — 2026-10-02</div>
                <div className="mt-0.5 text-[10.5px] text-warm-500">Main St · 3:00 PM – 10:00 PM · Barista</div>
                <div className="mt-1.5 flex items-center justify-between">
                  <span className="rounded-full bg-warn-50 px-1.5 py-0.5 text-[9.5px] font-semibold text-warn-700">Open</span>
                  <span className="text-[10.5px] font-semibold text-forest-600">View Details</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-2 border-t border-warm-100 px-4 py-2.5">
          <div className="flex-1 rounded-full border border-warm-200 bg-white px-3 py-1.5 text-[11px] text-warm-400">Message</div>
        </div>
      </div>
    </div>
  )
}
