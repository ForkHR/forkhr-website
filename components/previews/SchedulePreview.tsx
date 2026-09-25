'use client'

import { Check, Send } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Initials, Pill, Toast } from './bits'
import { useInView, useSequence } from './useSequence'

// The week schedule: one row per person, a chip per shift, a dashed open shift, then Publish.
const DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

type Tone = 'blue' | 'green' | 'violet' | 'amber'
const CHIP: Record<Tone, string> = {
  blue: 'bg-forest-50 text-forest-800 border-forest-400',
  green: 'bg-ok-50 text-ok-700 border-ok-500',
  violet: 'bg-plum-100 text-plum-600 border-plum-600',
  amber: 'bg-warn-50 text-warn-700 border-warn-500',
}

const PEOPLE: { name: string; role: string; tone: Tone; shifts: Partial<Record<string, string>> }[] = [
  { name: 'Maya Chen', role: 'Barista', tone: 'blue', shifts: { Mon: '7a–3p', Tue: '7a–3p', Thu: '7a–3p', Fri: '7a–3p', Sat: '8a–4p' } },
  { name: 'Luis Ortega', role: 'Cook', tone: 'green', shifts: { Mon: '9a–5p', Wed: '9a–5p', Thu: '9a–5p', Sat: '10a–6p', Sun: '10a–6p' } },
  { name: 'Priya Nair', role: 'Shift lead', tone: 'violet', shifts: { Tue: '1p–9p', Wed: '1p–9p', Fri: '1p–9p', Sat: '1p–9p' } },
  { name: 'Jordan Lee', role: 'Barista', tone: 'amber', shifts: { Mon: '3p–10p', Tue: '3p–10p', Wed: '3p–10p', Sun: '3p–10p' } },
]

export default function SchedulePreview({ className }: { className?: string }) {
  const { ref, inView } = useInView<HTMLDivElement>()
  const step = useSequence(6, { inView, ms: [450, 450, 450, 450, 900, 1100], holdMs: 3000 })
  const published = step >= 6

  return (
    <div ref={ref} className={cn('relative text-warm-950', className)}>
      {/* Toolbar */}
      <div className="flex items-center justify-between gap-3 border-b border-warm-100 px-4 py-2.5">
        <div className="flex items-center gap-2">
          <span className="text-[13px] font-semibold">Week of Sep 22</span>
          <Pill>Main St</Pill>
        </div>
        <div className="flex items-center gap-3">
          <span className="hidden text-[11px] text-warm-500 @lg:block">148 h · $2,910 labor</span>
          <span
            className={cn(
              'pv-swap inline-flex items-center gap-1 rounded-full px-2.5 py-1 text-[11px] font-semibold',
              published ? 'bg-ok-500 text-white' : 'bg-warm-950 text-white',
            )}
          >
            {published ? <Check className="h-3 w-3" /> : <Send className="h-3 w-3" />}
            {published ? 'Published' : 'Publish'}
          </span>
        </div>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-[76px_repeat(4,1fr)] text-[10px] @md:grid-cols-[92px_repeat(5,1fr)] @lg:grid-cols-[120px_repeat(7,1fr)]">
        <div className="border-b border-warm-100 px-3 py-1.5 text-warm-400" />
        {DAYS.map((d, i) => (
          <div key={d} className={cn('border-b border-l border-warm-100 py-1.5 text-center font-semibold text-warm-500', i === 4 && 'hidden @md:block', i >= 5 && 'hidden @lg:block')}>
            {d} <span className="font-normal text-warm-400">{22 + i}</span>
          </div>
        ))}

        {PEOPLE.map((p, r) => (
          <div key={p.name} className="contents">
            <div data-on={step > r} className="pv-item flex items-center gap-2 border-b border-warm-100 px-3 py-2">
              <Initials name={p.name} size={22} />
              <div className="min-w-0">
                <div className="truncate text-[11px] font-semibold">{p.name.split(' ')[0]}</div>
                <div className="truncate text-[9px] text-warm-400">{p.role}</div>
              </div>
            </div>
            {DAYS.map((d, i) => {
              const shift = p.shifts[d]
              const isOpen = r === PEOPLE.length - 1 && d === 'Thu'
              return (
                <div key={d} className={cn('border-b border-l border-warm-100 p-1', i === 4 && 'hidden @md:block', i >= 5 && 'hidden @lg:block')}>
                  {shift && (
                    <div
                      data-on={step > r}
                      className={cn('pv-pop whitespace-nowrap rounded-md border-l-2 px-1 py-1 font-medium leading-tight @md:px-1.5', CHIP[p.tone])}
                      style={{ transitionDelay: `${i * 45}ms` }}
                    >
                      {shift}
                    </div>
                  )}
                  {isOpen && (
                    <div data-on={step >= 5} className="pv-pop pv-dashed rounded-md px-1.5 py-1 font-medium leading-tight text-warm-500">
                      Open
                      <span className="block whitespace-nowrap text-[9px] font-normal">3p–10p</span>
                    </div>
                  )}
                </div>
              )
            })}
          </div>
        ))}
      </div>

      <div className="flex items-center justify-between px-4 py-2 text-[10px] text-warm-400">
        <span>Drag a shift to move it · tap a day to add</span>
        <span data-on={step >= 5} className="pv-item inline-flex items-center gap-1 text-warm-500">
          <span className="h-2 w-2 rounded-sm border border-dashed border-warm-400" /> 1 open shift · 3 people can claim it
        </span>
      </div>

      <Toast on={published}>
        <Check className="h-3.5 w-3.5 text-ok-500" /> Sent to 12 phones
      </Toast>
    </div>
  )
}
