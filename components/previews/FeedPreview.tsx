'use client'

import { ClipboardCheck, Heart, MessageCircle, Pin, Star, ThumbsUp } from 'lucide-react'
import { cn } from '@/lib/utils'
import { AvatarStack, Initials, Pill } from './bits'
import { useInView, useSequence } from './useSequence'

// The feed: a pinned announcement with confirmations, reactions and replies, then a recognition.
const CONFIRMERS = ['Maya Chen', 'Luis Ortega', 'Priya Nair', 'Jordan Lee', 'Sam Patel', 'Ana Costa', 'Noah Kim', 'Elena Ruiz', 'Omar Haddad', 'Zoe Park', 'Ivy Chen']

export default function FeedPreview({ className }: { className?: string }) {
  const { ref, inView } = useInView<HTMLDivElement>()
  const step = useSequence(6, { inView, ms: [400, 900, 800, 800, 900, 800], holdMs: 3000 })
  const confirmed = step >= 2 ? 11 : 4

  return (
    <div ref={ref} className={cn('relative bg-warm-50 text-warm-950', className)}>
      <div className="flex items-center gap-1 border-b border-warm-100 bg-white px-3 py-2 text-[11px] font-medium">
        {['Feed', 'Today', 'This week', 'Dashboard'].map((t, i) => (
          <span key={t} className={cn('rounded-full px-2.5 py-1', i === 0 ? 'bg-warm-950 text-white' : 'text-warm-500')}>
            {t}
          </span>
        ))}
        <span className="ml-auto text-[10px] text-warm-400">All locations</span>
      </div>

      <div className="space-y-2.5 p-3">
        {/* Announcement */}
        <article data-on={step >= 1} className="pv-item rounded-xl border border-warm-200 bg-white p-3.5">
          <div className="flex items-center gap-2.5">
            <Initials name="Dana Whitfield" size={30} />
            <div className="min-w-0 flex-1">
              <div className="flex items-center gap-1.5 text-[12px]">
                <span className="font-semibold">Dana Whitfield</span>
                <span className="text-warm-400">· Manager · 9:12 AM</span>
              </div>
              <div className="text-[10px] text-warm-400">Main St, Riverside</div>
            </div>
            <Pill tone="warn">
              <Pin className="h-2.5 w-2.5" /> Pinned
            </Pill>
          </div>
          <h4 className="mt-2.5 text-[13px] font-semibold leading-snug">New closing procedure starts Monday</h4>
          <p className="mt-1 text-[11.5px] leading-relaxed text-warm-600">
            Read the updated checklist before your next closing shift. The float count moves to the end, and every close needs a photo of the line.
          </p>
          <div className="mt-2.5 inline-flex items-center gap-2 rounded-lg border border-warm-200 bg-warm-50 px-2.5 py-1.5 text-[11px]">
            <ClipboardCheck className="h-3.5 w-3.5 text-warm-500" />
            <span className="font-medium">Closing checklist · v3</span>
            <span className="text-warm-400">SOP</span>
          </div>

          <div className="mt-3 flex items-center justify-between gap-3 border-t border-warm-100 pt-2.5">
            <div className="flex items-center gap-2">
              <AvatarStack names={CONFIRMERS.slice(0, confirmed)} size={20} max={4} />
              <span className="text-[11px] text-warm-500">
                <span className="font-semibold text-warm-950 tabular-nums">{confirmed}</span> of 14 confirmed
              </span>
            </div>
            <span className={cn('pv-swap rounded-full px-2.5 py-1 text-[10.5px] font-semibold', step >= 2 ? 'bg-ok-50 text-ok-700' : 'bg-warm-950 text-white')}>
              {step >= 2 ? 'Confirmed' : 'Confirm read'}
            </span>
          </div>

          <div className="mt-2 flex items-center gap-2 text-[11px] text-warm-500">
            <span data-on={step >= 3} className="pv-pop inline-flex items-center gap-1 rounded-full bg-warm-100 px-2 py-0.5">
              <ThumbsUp className="h-3 w-3" /> 6
            </span>
            <span data-on={step >= 3} className="pv-pop inline-flex items-center gap-1 rounded-full bg-warm-100 px-2 py-0.5" style={{ transitionDelay: '120ms' }}>
              <Heart className="h-3 w-3 text-bad-500" /> 3
            </span>
            <span data-on={step >= 4} className="pv-item ml-auto inline-flex items-center gap-1.5">
              <AvatarStack names={['Luis Ortega', 'Priya Nair', 'Sam Patel']} size={16} />
              <MessageCircle className="h-3 w-3" /> 3 replies
            </span>
          </div>
        </article>

        {/* Recognition */}
        <article data-on={step >= 5} className="pv-item rounded-xl border border-warm-200 bg-white p-3.5">
          <div className="flex items-center gap-2.5">
            <Initials name="Priya Nair" size={30} />
            <div className="min-w-0 flex-1 text-[12px]">
              <span className="font-semibold">Priya Nair</span> <span className="text-warm-500">recognized</span> <span className="font-semibold">Luis Ortega</span>
              <div className="text-[10px] text-warm-400">Yesterday · Main St</div>
            </div>
            <Pill tone="brand">
              <Star className="h-2.5 w-2.5 fill-current" /> Team player
            </Pill>
          </div>
          <p className="mt-2 text-[11.5px] leading-relaxed text-warm-600">Stayed late to help unload the truck and still closed on time. Thank you!</p>
          <div className="mt-2 flex items-center gap-2 text-[11px] text-warm-500">
            <span data-on={step >= 6} className="pv-pop inline-flex items-center gap-1 rounded-full bg-warm-100 px-2 py-0.5">
              🎉 9
            </span>
            <span data-on={step >= 6} className="pv-pop inline-flex items-center gap-1 rounded-full bg-warm-100 px-2 py-0.5" style={{ transitionDelay: '120ms' }}>
              <Heart className="h-3 w-3 text-bad-500" /> 5
            </span>
          </div>
        </article>
      </div>
    </div>
  )
}
