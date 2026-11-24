'use client'

import { useState, type ComponentType } from 'react'
import { BookOpen, CalendarRange, Clock, CupSoda, Droplet, FileText, Milk, ScanBarcode } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Face, SauceMark } from '@/components/previews/sauceBits'

/*
 * "Ask it about your café": the questions as a row of pills, and one answer at a time the way Sauce
 * gives it, with the people, items and days as rows with their pictures (the look of the home page's
 * one day of the calendar). Each answer says what Sauce read for it: the schedule, stock counts, the
 * timecards, your policies (the app's lookups and the company's own documents). The section was four
 * look-alike boxes of bubbles until the owner asked for better (2026-11-23); it is a row of pills over
 * one card so it does not repeat the request list beside a card of "Or have it do the work" below it.
 */
type Row = { title: string; sub: string; face?: { initials: string; color: string }; icon?: ComponentType<{ className?: string }>; level?: number; value?: string }
type Answer = {
  key: string
  q: string
  lead: string
  rows?: Row[]
  hours?: { day: string; h: number }[]
  quote?: { text: string; source: string }
  reads: string
  readsIcon: ComponentType<{ className?: string }>
}

const ANSWERS: Answer[] = [
  {
    key: 'tomorrow',
    q: 'Who’s working tomorrow?',
    lead: 'Two people at Main St tomorrow:',
    rows: [
      { title: 'Maya Chen', sub: 'Opening · 6:30 AM – 2:30 PM', face: { initials: 'MC', color: '#6D28D9' } },
      { title: 'Priya Nair', sub: 'Closing · 2:00 – 10:00 PM', face: { initials: 'PN', color: '#BE185D' } },
    ],
    reads: 'Read from the schedule',
    readsIcon: CalendarRange,
  },
  {
    key: 'stock',
    q: 'What’s low on stock?',
    lead: 'Three things are under par at Main St:',
    rows: [
      { title: 'Oat milk', sub: '3 cartons · par 12', icon: Milk, level: 3 / 12 },
      { title: '16 oz hot cups', sub: '1 sleeve · par 6', icon: CupSoda, level: 1 / 6 },
      { title: 'Vanilla syrup', sub: '1 bottle · par 4', icon: Droplet, level: 1 / 4 },
    ],
    reads: 'Read from your stock counts',
    readsIcon: ScanBarcode,
  },
  {
    key: 'hours',
    q: 'How many hours has Jordan worked this week?',
    lead: 'Jordan Lee has worked 31 hours this week, over five shifts:',
    hours: [
      { day: 'Mon', h: 7 },
      { day: 'Tue', h: 0 },
      { day: 'Wed', h: 7.5 },
      { day: 'Thu', h: 6 },
      { day: 'Fri', h: 5.5 },
      { day: 'Sat', h: 5 },
    ],
    reads: 'Read from the timecards',
    readsIcon: Clock,
  },
  {
    key: 'policy',
    q: 'Can I swap a shift with someone?',
    lead: 'Yes. Here’s what your policy says:',
    quote: { text: 'Offer the shift in the pool or ask a coworker. A manager approves every trade before it counts.', source: 'Shift swaps · Policies' },
    reads: 'Read from your policies and FAQs',
    readsIcon: BookOpen,
  },
]

export default function SauceAnswers() {
  const [picked, setPicked] = useState(ANSWERS[0].key)
  const a = ANSWERS.find((x) => x.key === picked) ?? ANSWERS[0]
  const maxH = Math.max(...(a.hours ?? [{ h: 1 }]).map((d) => d.h))

  return (
    <div className="flex flex-col items-center">
      <div role="tablist" aria-label="Questions to ask Sauce" className="-mx-6 flex w-[calc(100%+3rem)] gap-2 overflow-x-auto px-6 pb-1 [scrollbar-width:none] sm:mx-0 sm:w-auto sm:flex-wrap sm:justify-center sm:overflow-visible sm:px-0 sm:pb-0">
        {ANSWERS.map((x) => {
          const on = x.key === picked
          return (
            <button
              key={x.key}
              type="button"
              role="tab"
              aria-selected={on}
              onClick={() => setPicked(x.key)}
              className={cn(
                'shrink-0 whitespace-nowrap rounded-full border px-4 py-2 text-[14.5px] transition-colors',
                on ? 'border-warm-950 bg-warm-950 text-white' : 'border-warm-200 bg-white text-warm-800 hover:border-warm-300',
              )}
            >
              {x.q}
            </button>
          )
        })}
      </div>

      <div role="tabpanel" className="mt-8 w-full max-w-[640px] rounded-[28px] sm:min-h-[390px] border border-warm-200 bg-white p-5 shadow-[0_30px_60px_-40px_rgba(27,26,25,0.35)] sm:p-7">
        <div key={a.key} className="pv-fade-in flex flex-col gap-4">
          <span className="max-w-[88%] self-end rounded-2xl rounded-br-md bg-warm-950 px-4 py-2.5 text-[15px] leading-snug text-white">{a.q}</span>

          <div className="flex gap-3">
            <SauceMark size={30} title={null} className="mt-0.5 shrink-0" />
            <div className="min-w-0 flex-1">
              <p className="text-[16px] leading-relaxed text-warm-950">{a.lead}</p>

              {a.rows && (
                <ul className="mt-3 divide-y divide-warm-100 rounded-2xl border border-warm-200">
                  {a.rows.map((r) => (
                    <li key={r.title} className="flex items-center gap-3 px-3.5 py-3">
                      {r.face ? (
                        <Face initials={r.face.initials} color={r.face.color} round size={36} />
                      ) : r.icon ? (
                        <span aria-hidden="true" className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-warn-50 text-warn-700">
                          <r.icon className="h-[18px] w-[18px]" />
                        </span>
                      ) : null}
                      <span className="min-w-0 flex-1">
                        <span className="block text-[15px] font-semibold text-warm-950">{r.title}</span>
                        <span className="block text-[13.5px] text-warm-500">{r.sub}</span>
                      </span>
                      {r.level !== undefined && (
                        <span aria-hidden="true" className="h-1.5 w-20 shrink-0 overflow-hidden rounded-full bg-warm-100">
                          <span className="block h-full rounded-full bg-warn-500" style={{ width: `${Math.round(r.level * 100)}%` }} />
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              )}

              {a.hours && (
                <div className="mt-3 rounded-2xl border border-warm-200 px-4 pb-3 pt-4">
                  <div className="flex items-center gap-3">
                    <Face initials="JL" color="#0369A1" round size={30} />
                    <span className="text-[15px] font-semibold text-warm-950">Jordan Lee</span>
                    <span className="ml-auto text-[15px] font-semibold tabular-nums text-warm-950">31 h</span>
                  </div>
                  <div className="mt-4 grid grid-cols-6 items-end gap-2" style={{ height: 92 }}>
                    {a.hours.map((d) => (
                      <div key={d.day} className="flex h-full flex-col items-center justify-end gap-1.5">
                        <span className="text-[11.5px] tabular-nums text-warm-500">{d.h ? `${d.h}h` : ''}</span>
                        <span className={cn('w-full max-w-[34px] rounded-md', d.h ? 'bg-warm-800' : 'bg-warm-100')} style={{ height: d.h ? `${Math.round((d.h / maxH) * 52)}px` : 4 }} />
                      </div>
                    ))}
                  </div>
                  <div className="mt-1.5 grid grid-cols-6 gap-2 text-center text-[12px] text-warm-500">
                    {a.hours.map((d) => (
                      <span key={d.day}>{d.day}</span>
                    ))}
                  </div>
                </div>
              )}

              {a.quote && (
                <div className="mt-3 rounded-2xl border border-warm-200">
                  <p className="px-4 py-3.5 text-[15px] leading-relaxed text-warm-800">“{a.quote.text}”</p>
                  <div className="flex items-center gap-2.5 border-t border-warm-100 px-4 py-2.5 text-[13.5px] text-warm-600">
                    <FileText className="h-4 w-4 text-warm-500" />
                    {a.quote.source}
                  </div>
                </div>
              )}

              <span className="mt-3 flex items-center gap-1.5 text-[13px] text-warm-500">
                <a.readsIcon className="h-3.5 w-3.5" />
                {a.reads}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
