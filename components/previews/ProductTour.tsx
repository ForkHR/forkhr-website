'use client'

import { useEffect, useState, type ComponentType } from 'react'
import { cn } from '@/lib/utils'
import { Window } from './bits'
import SchedulePreview from './SchedulePreview'
import SopsPreview from './SopsPreview'
import FeedPreview from './FeedPreview'
import PerformancePreview from './PerformancePreview'
import VendorChatPreview from './VendorChatPreview'
import InvoicePreview from './InvoicePreview'
import { usePrefersReducedMotion } from './useSequence'

// The hero's guided tour: one window, six screens, advancing on its own. The progress line
// under the window is the only control: done screens are filled, the current one fills as its
// time runs, and a click on a segment jumps to that screen and holds it longer. The window's
// title bar says which screen it is; a segment names its screen on hover or keyboard focus.
const TABS: { key: string; label: string; title: string; Demo: ComponentType<{ className?: string }> }[] = [
  { key: 'schedule', label: 'Schedule', title: 'Fork · Schedule', Demo: SchedulePreview },
  { key: 'sops', label: 'Checklists', title: 'Fork · SOPs', Demo: SopsPreview },
  { key: 'feed', label: 'Feed', title: 'Fork · Feed', Demo: FeedPreview },
  { key: 'reviews', label: 'Reviews', title: 'Fork · Performance · Maya Chen', Demo: PerformancePreview },
  { key: 'vendors', label: 'Vendor chat', title: 'Fork · Chat · Bluebird Dairy', Demo: VendorChatPreview },
  { key: 'invoice', label: 'Get paid', title: 'Fork · Sales · Order S-2088', Demo: InvoicePreview },
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
    <div className={cn('flex flex-col', className)}>
      <Window title={active.title} mat>
        {/* Fixed-height stage: screens differ in height, the hero must not move. Overflow fades out. */}
        <div className="relative h-[380px] overflow-hidden mask-[linear-gradient(to_bottom,black_90%,transparent)] sm:h-[410px]">
          <div key={active.key} className="tour-enter">
            <active.Demo />
          </div>
        </div>
      </Window>

      <div role="tablist" aria-label="Product tour" className="mt-1.5 flex gap-1.5 px-3 sm:px-5">
        {TABS.map((t, i) => {
          const selected = i === index
          return (
            <button
              key={t.key}
              type="button"
              role="tab"
              aria-selected={selected}
              aria-label={t.label}
              onClick={() => {
                setIndex(i)
                setHoldMs(HOLD_AFTER_CLICK_MS)
              }}
              // The line is 3px; the button around it is tall enough to hit.
              className="group relative flex-1 cursor-pointer rounded-sm py-2.5 outline-none focus-visible:ring-2 focus-visible:ring-warm-950/40"
            >
              <span className="block h-[3px] overflow-hidden rounded-full bg-warm-200 transition-colors group-hover:bg-warm-300">
                {i < index || (selected && reduced) ? (
                  <span className="block h-full w-full rounded-full bg-warm-950" />
                ) : selected ? (
                  <span key={`${index}-${holdMs}`} className="tour-fill block h-full rounded-full bg-warm-950" style={{ animationDuration: `${holdMs}ms` }} />
                ) : null}
              </span>
              <span className="pointer-events-none absolute left-1/2 top-full z-10 -translate-x-1/2 whitespace-nowrap rounded-md bg-warm-950 px-2 py-1 text-[11px] font-medium text-white opacity-0 shadow-sm transition-opacity duration-150 group-hover:opacity-100 group-focus-visible:opacity-100">
                {t.label}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
