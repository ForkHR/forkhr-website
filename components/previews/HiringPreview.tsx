'use client'

import { Briefcase, ScanSearch } from 'lucide-react'
import { cn } from '@/lib/utils'
import { IconTile, Initials, Pill, SectionLabel } from './bits'
import { useInView, useSequence } from './useSequence'

// Hiring: a posting on the public board and the applicants moving through the pipeline.
const APPLICANTS = [
  { name: 'Jordan Lee', sub: 'Applied yesterday · 3 yrs experience', stage: 'New', tone: 'neutral' as const, fit: 'Good fit' },
  { name: 'Sam Patel', sub: 'Interview Thu 2:00 PM', stage: 'Interview', tone: 'warn' as const, fit: 'Excellent fit' },
  { name: 'Ana Costa', sub: 'Offer sent · starts Oct 6', stage: 'Offer', tone: 'ok' as const, fit: 'Good fit' },
]

export default function HiringPreview({ className }: { className?: string }) {
  const { ref, inView } = useInView<HTMLDivElement>()
  const step = useSequence(5, { inView, ms: [450, 450, 450, 450, 1000], holdMs: 3000 })

  return (
    <div ref={ref} className={cn('text-warm-950', className)}>
      <div data-on={step >= 1} className="pv-item flex items-center gap-3 border-b border-warm-100 px-4 py-3">
        <IconTile tone="brand" size={34}>
          <Briefcase />
        </IconTile>
        <div className="min-w-0 flex-1">
          <div className="text-[13px] font-semibold">Line cook · Main St</div>
          <div className="text-[10.5px] text-warm-500">jobs.forkhr.com/blue-door-bakery · posted 6 days ago · 14 applicants</div>
        </div>
        <Pill tone="ok" dot>
          Open
        </Pill>
      </div>

      <SectionLabel right="Applied → Interview → Feedback → Result">Applicants</SectionLabel>
      {APPLICANTS.map((a, i) => (
        <div key={a.name} data-on={step >= i + 2} className="pv-item flex items-center gap-3 border-b border-warm-100 px-4 py-2.5 last:border-b-0">
          <Initials name={a.name} size={30} />
          <div className="min-w-0 flex-1">
            <div className="text-[12px] font-semibold">{a.name}</div>
            <div className="truncate text-[10.5px] text-warm-500">{a.sub}</div>
          </div>
          <span data-on={step >= 5} className="pv-pop hidden items-center gap-1 rounded-md bg-plum-100 px-1.5 py-0.5 text-[10px] font-semibold text-plum-600 @lg:inline-flex">
            <ScanSearch className="h-3 w-3" /> {a.fit}
          </span>
          <Pill tone={a.tone}>{a.stage}</Pill>
        </div>
      ))}
      <div className="px-4 py-2.5 text-[10.5px] text-warm-400">Hire → the applicant becomes an employee with onboarding started</div>
    </div>
  )
}
