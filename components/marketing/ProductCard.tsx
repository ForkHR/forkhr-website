import type { ReactNode } from 'react'
import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { TierKey } from '@/lib/catalog'
import PlanBadge from './PlanBadge'

/**
 * A product in half a row: what it does, two or three points, and its live demo cropped into
 * a window that stands on an oat mat. Two of these sit between the big FeatureRows on the
 * products page, so the page alternates big and small instead of repeating one row shape.
 */
export default function ProductCard({
  id,
  eyebrow,
  plan,
  badge,
  title,
  lede,
  bullets = [],
  preview,
  previewTitle,
  href,
  hrefLabel = 'Learn more',
  className,
}: {
  id: string
  eyebrow: string
  plan?: TierKey
  badge?: string
  title: string
  lede: string
  bullets?: string[]
  preview: ReactNode
  previewTitle: string
  href?: string
  hrefLabel?: string
  className?: string
}) {
  return (
    <article id={id} className={cn('surface flex scroll-mt-36 flex-col overflow-hidden', className)}>
      <div className="p-6 pb-0 md:p-7 md:pb-0">
        <div className="flex flex-wrap items-center gap-2.5">
          {badge && <span className="rounded-full bg-warm-950 px-2 py-0.5 text-[11px] font-semibold text-white">{badge}</span>}
          <span className="eyebrow">{eyebrow}</span>
          {plan && <PlanBadge tier={plan} />}
        </div>
        <h3 className="mt-3.5 text-2xl font-semibold tracking-tight text-warm-950">{title}</h3>
        <p className="mt-2.5 text-[15.5px] leading-relaxed text-warm-600">{lede}</p>
        {bullets.length > 0 && (
          <ul className="mt-4 space-y-2">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-2.5">
                <span className="mt-0.5 inline-flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full bg-forest-50 text-forest-600">
                  <Check className="h-3 w-3" strokeWidth={3} />
                </span>
                <span className="text-[14.5px] text-warm-700">{b}</span>
              </li>
            ))}
          </ul>
        )}
        {href && (
          <Link href={href} className="mt-5 inline-flex items-center gap-1.5 text-[15px] font-medium text-forest-600 transition-colors hover:text-forest-700">
            {hrefLabel}
            <ArrowRight className="h-4 w-4" />
          </Link>
        )}
      </div>

      <div className="mt-6 flex flex-1 flex-col bg-warm-100/70 px-4 pt-4 md:px-6 md:pt-6">
        <div aria-hidden="true" className="pointer-events-none flex flex-1 select-none flex-col overflow-hidden rounded-t-xl border border-b-0 border-warm-200 bg-white shadow-[0_20px_50px_-24px_rgba(27,26,25,0.3)]">
          <div className="flex items-center gap-2 border-b border-warm-100 px-3 py-2">
            <div className="flex gap-1.5">
              <span className="h-2 w-2 rounded-full bg-warm-200" />
              <span className="h-2 w-2 rounded-full bg-warm-200" />
              <span className="h-2 w-2 rounded-full bg-warm-200" />
            </div>
            <div className="flex-1 truncate text-center text-[10.5px] font-medium text-warm-400">{previewTitle}</div>
            <span className="w-9" />
          </div>
          {/* The demo is laid out absolutely so it never sizes the card: it fills what the copy leaves. */}
          <div className="relative min-h-[300px] flex-1">
            <div className="@container absolute inset-0 overflow-hidden text-warm-950 mask-[linear-gradient(to_bottom,black_78%,transparent)]">{preview}</div>
          </div>
        </div>
      </div>
    </article>
  )
}
