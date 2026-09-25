'use client'

import { useEffect, useState, type ComponentType } from 'react'
import { CalendarDays, ClipboardCheck, Megaphone, MessageSquare, Receipt } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Window } from './bits'
import SchedulePreview from './SchedulePreview'
import SopsPreview from './SopsPreview'
import FeedPreview from './FeedPreview'
import VendorChatPreview from './VendorChatPreview'
import InvoicePreview from './InvoicePreview'
import { usePrefersReducedMotion } from './useSequence'

// The hero's guided tour: one window, five screens, auto-advancing. Clicking a tab jumps to
// it and pauses the auto-advance for a while so the demo can be watched in full.
const TABS: { key: string; label: string; title: string; icon: ComponentType<{ className?: string }>; Demo: ComponentType<{ className?: string }>; blurb: string }[] = [
  { key: 'schedule', label: 'Schedule', title: 'Fork · Schedule', icon: CalendarDays, Demo: SchedulePreview, blurb: 'Build the week, publish once, every phone gets it.' },
  { key: 'sops', label: 'SOPs', title: 'Fork · SOPs', icon: ClipboardCheck, Demo: SopsPreview, blurb: 'Opening, closing, temps and waste, run the same way on every shift.' },
  { key: 'feed', label: 'Feed', title: 'Fork · Feed', icon: Megaphone, Demo: FeedPreview, blurb: 'Announcements with read receipts, recognitions and surveys.' },
  { key: 'vendors', label: 'Vendor chat', title: 'Fork · Chat · Bluebird Dairy', icon: MessageSquare, Demo: VendorChatPreview, blurb: 'Message vendors who are not on Fork. Their email reply lands in the chat.' },
  { key: 'invoice', label: 'Get paid', title: 'Fork · Sales · Order S-2088', icon: Receipt, Demo: InvoicePreview, blurb: 'Invoice customers and get paid online, no account needed on their side.' },
]

const AUTO_MS = 8500
const PAUSE_AFTER_CLICK_MS = 20000

export default function ProductTour({ className }: { className?: string }) {
  const reduced = usePrefersReducedMotion()
  const [index, setIndex] = useState(0)
  const [pausedUntil, setPausedUntil] = useState(0)

  useEffect(() => {
    if (reduced) return
    const t = setInterval(() => {
      if (Date.now() < pausedUntil) return
      setIndex((i) => (i + 1) % TABS.length)
    }, AUTO_MS)
    return () => clearInterval(t)
  }, [pausedUntil, reduced])

  const active = TABS[index]

  return (
    <div className={cn('flex flex-col gap-3', className)}>
      <div className="relative">
        <Window title={active.title} mat>
          <div key={active.key} className="pv-fade-in">
            <active.Demo />
          </div>
        </Window>
      </div>

      <div role="tablist" aria-label="Product tour" className="grid grid-cols-5 gap-1.5 sm:gap-2">
        {TABS.map((t, i) => {
          const selected = i === index
          return (
            <button
              key={t.key}
              role="tab"
              type="button"
              aria-selected={selected}
              onClick={() => {
                setIndex(i)
                setPausedUntil(Date.now() + PAUSE_AFTER_CLICK_MS)
              }}
              className={cn(
                'group relative flex flex-col items-center gap-1 overflow-hidden rounded-xl border px-1 py-2 text-[11px] font-medium transition-colors sm:flex-row sm:justify-center sm:gap-2 sm:px-3 sm:text-[12px]',
                selected ? 'border-warm-950 bg-warm-950 text-white' : 'border-warm-200 bg-white text-warm-600 hover:border-warm-300 hover:text-warm-950',
              )}
            >
              <t.icon className="h-3.5 w-3.5 shrink-0" />
              <span className="truncate">{t.label}</span>
              {selected && !reduced && (
                <span key={`${t.key}-${pausedUntil}`} className="absolute bottom-0 left-0 h-0.5 bg-white/60" style={{ animation: `tour-progress ${AUTO_MS}ms linear forwards` }} />
              )}
            </button>
          )
        })}
      </div>
      <p className="min-h-[1.25rem] text-center text-[13px] text-warm-500" aria-live="polite">
        {active.blurb}
      </p>
      <style>{`@keyframes tour-progress { from { width: 0 } to { width: 100% } }`}</style>
    </div>
  )
}
