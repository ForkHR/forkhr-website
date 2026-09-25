'use client'

import { FileSignature, FileText, FolderOpen, ShieldCheck } from 'lucide-react'
import { cn } from '@/lib/utils'
import { IconTile, Initials, Pill, Progress, SectionLabel } from './bits'
import { useInView, useSequence } from './useSequence'

// A new hire's first week: onboarding tasks, signed forms and a contract, documents with expiry.
export default function PeoplePreview({ className }: { className?: string }) {
  const { ref, inView } = useInView<HTMLDivElement>()
  const step = useSequence(6, { inView, ms: [450, 450, 450, 450, 900, 1000], holdMs: 3000 })
  const pct = step >= 5 ? 75 : 62

  return (
    <div ref={ref} className={cn('text-warm-950', className)}>
      <div className="flex items-center gap-3 border-b border-warm-100 px-4 py-3">
        <Initials name="Jordan Lee" size={34} />
        <div className="min-w-0 flex-1">
          <div className="text-[13px] font-semibold">Jordan Lee</div>
          <div className="text-[10.5px] text-warm-500">Barista · Main St · started Monday</div>
        </div>
        <Pill tone="brand">Onboarding</Pill>
      </div>

      <div className="px-4 pt-3">
        <div className="flex items-center justify-between text-[11px]">
          <span className="font-semibold">First week guide</span>
          <span className="tabular-nums text-warm-500">
            <span className="font-semibold text-warm-950">{step >= 5 ? 6 : 5}</span> of 8 tasks · {pct}%
          </span>
        </div>
        <Progress value={pct} className="mt-1.5" tone="brand" />
      </div>

      <SectionLabel>Forms & contracts</SectionLabel>
      <div data-on={step >= 1} className="pv-item flex items-center gap-3 border-b border-warm-100 px-4 py-2.5">
        <IconTile tone="ok">
          <FileText />
        </IconTile>
        <div className="min-w-0 flex-1">
          <div className="text-[12px] font-semibold">W-4 and I-9</div>
          <div className="text-[10.5px] text-warm-500">Employment forms · filled on a phone</div>
        </div>
        <Pill tone="ok">Signed</Pill>
      </div>
      <div data-on={step >= 2} className="pv-item flex items-center gap-3 border-b border-warm-100 px-4 py-2.5">
        <IconTile tone="ok">
          <FileSignature />
        </IconTile>
        <div className="min-w-0 flex-1">
          <div className="text-[12px] font-semibold">Employment agreement</div>
          <div className="text-[10.5px] text-warm-500">Contract · from template · e-signed Sep 22</div>
        </div>
        <Pill tone="ok">Signed</Pill>
      </div>
      <div data-on={step >= 3} className="pv-item flex items-center gap-3 border-b border-warm-100 px-4 py-2.5">
        <IconTile tone={step >= 5 ? 'ok' : 'warn'}>
          <ShieldCheck />
        </IconTile>
        <div className="min-w-0 flex-1">
          <div className="text-[12px] font-semibold">Employee handbook</div>
          <div className="text-[10.5px] text-warm-500">Policy · {step >= 5 ? 'acknowledged Tue' : 'acknowledgement pending'}</div>
        </div>
        <Pill tone={step >= 5 ? 'ok' : 'warn'}>{step >= 5 ? 'Acknowledged' : 'Pending'}</Pill>
      </div>

      <SectionLabel>Documents</SectionLabel>
      <div data-on={step >= 4} className="pv-item flex items-center gap-3 border-b border-warm-100 px-4 py-2.5">
        <IconTile tone="ok">
          <FolderOpen />
        </IconTile>
        <div className="min-w-0 flex-1">
          <div className="text-[12px] font-semibold">Food handler card</div>
          <div className="text-[10.5px] text-warm-500">Expires Mar 2027</div>
        </div>
        <Pill tone="ok">Valid</Pill>
      </div>
      <div data-on={step >= 4} className="pv-item flex items-center gap-3 px-4 py-2.5" style={{ transitionDelay: '100ms' }}>
        <IconTile tone={step >= 6 ? 'brand' : 'warn'}>
          <FolderOpen />
        </IconTile>
        <div className="min-w-0 flex-1">
          <div className="text-[12px] font-semibold">Driver&apos;s license</div>
          <div className="text-[10.5px] text-warm-500">{step >= 6 ? 'Renewal requested · reminder sent' : 'Expires in 12 days'}</div>
        </div>
        <Pill tone={step >= 6 ? 'brand' : 'warn'}>{step >= 6 ? 'Requested' : 'Expiring'}</Pill>
      </div>
    </div>
  )
}
