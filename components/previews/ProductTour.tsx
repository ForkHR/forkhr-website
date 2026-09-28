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

// The hero's guided tour: one window, five screens. It advances on its own. A segmented
// strip under the window shows where the tour is: done screens are filled, the current
// one fills as its time runs. A click jumps to that screen and holds it longer.
const TABS: { key: string; label: string; title: string; icon: ComponentType<{ className?: string }>; Demo: ComponentType<{ className?: string }>; blurb: string }[] = [
  { key: 'schedule', label: 'Schedule', title: 'Fork · Schedule', icon: CalendarDays, Demo: SchedulePreview, blurb: 'Build the week. Every phone gets it.' },
  { key: 'sops', label: 'Checklists', title: 'Fork · SOPs', icon: ClipboardCheck, Demo: SopsPreview, blurb: 'Opening, closing and temps, done the same way.' },
  { key: 'feed', label: 'Feed', title: 'Fork · Feed', icon: Megaphone, Demo: FeedPreview, blurb: 'Announcements people confirm they read.' },
  { key: 'vendors', label: 'Vendor chat', title: 'Fork · Chat · Bluebird Dairy', icon: MessageSquare, Demo: VendorChatPreview, blurb: 'Message vendors. Their email reply lands in the chat.' },
  { key: 'invoice', label: 'Get paid', title: 'Fork · Sales · Order S-2088', icon: Receipt, Demo: InvoicePreview, blurb: 'Invoice customers. No account needed on their side.' },
]

const AUTO_MS = 8500
const HOLD_AFTER_CLICK_MS = 20000

export default function ProductTour({ className }: { className?: string }) {
  const reduced = usePrefersReducedMotion()
  const [index, setIndex] = useState(0)
  // How long the current screen stays. Auto-advance uses AUTO_MS; a click holds longer.
  const [holdMs, setHoldMs] = useState(AUTO_MS)

  useEffect(() => {
    if (reduced) return
    const t = setTimeout(() => {
      setHoldMs(AUTO_MS)
      setIndex((i) => (i + 1) % TABS.length)
    }, holdMs)
    return () => clearTimeout(t)
  }, [index, holdMs, reduced])

  const active = TABS[index]

  return (
    <div className={cn('flex flex-col gap-4', className)}>
      <div>
        <Window title={active.title} mat>
          {/* Fixed-height stage: screens differ in height, the hero must not move. Overflow fades out. */}
          <div className="relative h-[380px] overflow-hidden mask-[linear-gradient(to_bottom,black_90%,transparent)] sm:h-[410px]">
            <div key={active.key} className="tour-enter">
              <active.Demo />
            </div>
          </div>
        </Window>

        {/* Progress strip: one segment per screen */}
        <div className="mt-3 flex gap-1.5 px-3 sm:px-5" aria-hidden="true">
          {TABS.map((t, i) => (
            <div key={t.key} className="h-[3px] flex-1 overflow-hidden rounded-full bg-warm-200">
              {i < index || (i === index && reduced) ? (
                <div className="h-full w-full rounded-full bg-warm-950" />
              ) : i === index ? (
                <div key={`${index}-${holdMs}`} className="tour-fill h-full rounded-full bg-warm-950" style={{ animationDuration: `${holdMs}ms` }} />
              ) : null}
            </div>
          ))}
        </div>
      </div>

      <div className="flex flex-col items-center gap-2.5">
        <div role="tablist" aria-label="Product tour" className="inline-flex max-w-full gap-1 rounded-full border border-warm-200 bg-white p-1 shadow-sm">
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
                  setHoldMs(HOLD_AFTER_CLICK_MS)
                }}
                className={cn(
                  'flex items-center gap-1.5 rounded-full px-2.5 py-1.5 text-[12px] font-medium transition-colors sm:px-3 sm:text-[13px]',
                  selected ? 'bg-warm-950 text-white' : 'text-warm-500 hover:bg-warm-50 hover:text-warm-950',
                )}
              >
                <t.icon className="h-3.5 w-3.5" />
                <span className={cn('sm:inline', selected ? 'inline' : 'hidden')}>{t.label}</span>
              </button>
            )
          })}
        </div>
        <p key={active.key} className="tour-enter min-h-5 text-center text-[13px] text-warm-500" aria-live="polite">
          {active.blurb}
        </p>
      </div>
    </div>
  )
}
