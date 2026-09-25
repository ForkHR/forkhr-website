import type { ReactNode } from 'react'
import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Window } from '@/components/previews/bits'
import type { TierKey } from '@/lib/catalog'
import PlanBadge from './PlanBadge'

/**
 * One feature, told in one row: copy on one side, the live demo in a window on the other.
 * Rows alternate sides with `flip`. Used by the products page and the feature pages.
 */
export default function FeatureRow({
  id,
  eyebrow,
  title,
  lede,
  bullets = [],
  preview,
  previewTitle,
  flip = false,
  href,
  hrefLabel = 'Learn more',
  plan,
  className,
  children,
}: {
  id?: string
  eyebrow?: string
  title: ReactNode
  lede?: ReactNode
  bullets?: string[]
  preview: ReactNode
  previewTitle: string
  flip?: boolean
  href?: string
  hrefLabel?: string
  plan?: TierKey
  className?: string
  children?: ReactNode
}) {
  return (
    <section id={id} className={cn('scroll-mt-24 border-b border-warm-100', className)}>
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className={cn('grid items-center gap-10 lg:grid-cols-[1fr_1.25fr] lg:gap-16', flip && 'lg:grid-cols-[1.25fr_1fr]')}>
          <div className={cn(flip && 'lg:order-2')}>
            <div className="flex flex-wrap items-center gap-3">
              {eyebrow && <span className="eyebrow">{eyebrow}</span>}
              {plan && <PlanBadge tier={plan} />}
            </div>
            <h2 className="mt-4 text-3xl font-semibold tracking-tight text-warm-950 md:text-4xl">{title}</h2>
            {lede && <p className="mt-4 text-lg leading-relaxed text-warm-600">{lede}</p>}
            {bullets.length > 0 && (
              <ul className="mt-6 space-y-2.5">
                {bullets.map((b) => (
                  <li key={b} className="flex items-start gap-2.5">
                    <span className="mt-0.5 inline-flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full bg-forest-50 text-forest-600">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    <span className="text-[15px] text-warm-700">{b}</span>
                  </li>
                ))}
              </ul>
            )}
            {children}
            {href && (
              <Link href={href} className="mt-7 inline-flex items-center gap-1.5 text-[15px] font-medium text-forest-600 transition-colors hover:text-forest-700">
                {hrefLabel}
                <ArrowRight className="h-4 w-4" />
              </Link>
            )}
          </div>
          <div className={cn(flip && 'lg:order-1')}>
            <Window title={previewTitle}>{preview}</Window>
          </div>
        </div>
      </div>
    </section>
  )
}
