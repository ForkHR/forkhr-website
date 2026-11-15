'use client'

import { Link2, Star } from 'lucide-react'
import { cn } from '@/lib/utils'
import { IconTile, Pill } from './bits'
import { useInView, useSequence } from './useSequence'

// Locations → Links in the app: every link is a short address and a QR code of its own, so a scan
// at the counter is told from a tap on the Instagram bio. The list's columns are the app's (Link,
// Location, what it Opens: "The link page" or "The Google review form", the 7-day count); a review
// link wears a filled star, a page link a link mark. Beside it, Main St's link page as the server
// draws it: the round mark, the name, the place with "Open today 7 AM – 6 PM", the buttons as pills
// with the first one in the brand colour, "Made with Fork". A press is counted, never who pressed.
const BRAND = '#1F6F5C'

const LINKS = [
  { name: 'Counter stand', where: 'Main St', opens: 'The link page', review: false, from: 77, to: 78 },
  { name: 'Receipt QR', where: 'Main St', opens: 'The Google review form', review: true, from: 21, to: 21 },
  { name: 'Window sticker', where: 'Harbor St', opens: 'The link page', review: false, from: 24, to: 24 },
  { name: 'Instagram bio', where: 'All locations', opens: 'The link page', review: false, from: 39, to: 39 },
]

const BUTTONS = ['Review us on Google', 'Get directions', 'Call us', "We're hiring"]

export default function LinksPreview({ className }: { className?: string }) {
  const { ref, inView } = useInView<HTMLDivElement>()
  // 1–4 the links · 5 Main St's page · 6 someone scans the counter stand and presses Review
  const step = useSequence(6, { inView, ms: [450, 450, 450, 450, 800, 1300], holdMs: 3200 })
  const pressed = step >= 6

  return (
    <div ref={ref} className={cn('relative text-warm-950', className)}>
      <div className="flex items-center justify-between gap-3 border-b border-warm-100 px-4 py-2.5">
        <div className="flex min-w-0 items-center gap-2">
          <span className="text-[13px] font-semibold">Links</span>
          <Pill>All locations</Pill>
        </div>
        <span className="inline-flex shrink-0 items-center gap-1.5 text-[11px] text-warm-500">
          <span className="pv-live inline-block h-1.5 w-1.5 rounded-full bg-ok-500 text-ok-500" />
          {pressed ? 162 : 161} opens · 7 days
        </span>
      </div>

      <div className="grid @lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)]">
        <div className="min-w-0">
          {LINKS.map((l, i) => {
            const count = pressed ? l.to : l.from
            const live = pressed && l.to !== l.from
            return (
              <div key={l.name} data-on={step > i} className="pv-item flex items-center gap-3 border-b border-warm-100 px-4 py-2.5 last:border-b-0">
                <IconTile tone={live ? 'brand' : 'neutral'} size={28}>
                  {l.review ? <Star className="fill-current" /> : <Link2 />}
                </IconTile>
                <div className="min-w-0 flex-1">
                  <div className="truncate text-[12px] font-semibold">{l.name}</div>
                  <div className="truncate text-[10.5px] text-warm-500">
                    {l.where} · {l.opens}
                  </div>
                </div>
                <span className={cn('pv-swap shrink-0 text-[12.5px] font-semibold tabular-nums', live ? 'text-forest-600' : 'text-warm-950')}>{count}</span>
              </div>
            )
          })}
        </div>

        {/* Main St's link page, as a visitor sees it */}
        <div className="hidden border-l border-warm-100 bg-[#f6f6f7] px-4 pb-4 pt-3.5 @lg:block">
          <div data-on={step >= 5} className="pv-slide-r flex flex-col items-center">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-full text-[15px] font-semibold text-white" style={{ background: BRAND }}>
              J
            </span>
            <div className="mt-1.5 text-[12.5px] font-semibold">Juniper Coffee</div>
            <div className="text-[10px] text-warm-500">Main St · 214 Main St</div>
            <span className="mt-1.5 rounded-full bg-[#ececee] px-2 py-0.5 text-[9.5px] text-warm-800">Open today 7 AM – 6 PM</span>
            <div className="mt-3 w-full space-y-1.5">
              {BUTTONS.map((b, i) => (
                <div
                  key={b}
                  className={cn(
                    'pv-swap relative flex h-7 items-center justify-center rounded-full border text-[10.5px] font-semibold',
                    i === 0 ? 'border-transparent text-white' : 'border-[#e2e2e5] bg-white text-warm-950',
                    i === 0 && pressed && 'ring-2 ring-offset-1 ring-[#1F6F5C]/40',
                  )}
                  style={i === 0 ? { background: BRAND } : undefined}
                >
                  {b}
                </div>
              ))}
            </div>
            <div className="mt-3 text-[9px] text-warm-400">Made with Fork</div>
          </div>
        </div>
      </div>

      {/* What the page's buttons were pressed for, as the link's sheet counts them */}
      <div data-on={step >= 5} className="pv-item flex items-center gap-4 border-t border-warm-100 bg-warm-50/60 px-4 py-2 text-[10.5px]">
        <span className="font-semibold text-warm-500">Buttons pressed</span>
        <span className="truncate text-warm-600">
          Wi-Fi <b className="font-semibold tabular-nums text-warm-950">31</b>
        </span>
        <span className="truncate text-warm-600">
          Review us on Google <b className={cn('pv-swap font-semibold tabular-nums', pressed ? 'text-forest-600' : 'text-warm-950')}>{pressed ? 16 : 15}</b>
        </span>
      </div>
    </div>
  )
}
