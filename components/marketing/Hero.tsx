import type { ReactNode } from 'react'
import Link from 'next/link'
import { ArrowRight, ChevronRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Backdrop from '@/components/visual/Backdrop'
import { CTA_PRIMARY, REGISTER_URL } from '@/lib/site'
import { cn } from '@/lib/utils'
import type { TierKey } from '@/lib/catalog'
import PlanBadge from './PlanBadge'

/**
 * Page hero for feature and solution pages: breadcrumb, headline, lede, the two buttons and
 * an optional demo on the right. The home page has its own hero.
 */
export default function Hero({
  crumb,
  title,
  lede,
  plan,
  note,
  aside,
  primaryLabel = CTA_PRIMARY,
  secondaryHref,
  secondaryLabel = 'See how it works',
  className,
}: {
  crumb?: { label: string; href: string; current: string }
  title: ReactNode
  lede: ReactNode
  plan?: TierKey
  note?: ReactNode
  aside?: ReactNode
  primaryLabel?: string
  secondaryHref?: string
  secondaryLabel?: string
  className?: string
}) {
  return (
    <section className={cn('relative overflow-hidden border-b border-warm-100', className)}>
      <Backdrop />
      <div className="relative mx-auto max-w-6xl px-6 pb-16 pt-12 md:pb-24 md:pt-28">
        <div className={cn('grid items-center gap-12', aside && 'lg:grid-cols-[0.9fr_1.1fr]')}>
          <div className={cn(!aside && 'max-w-3xl')}>
            {crumb && (
              <nav className="mb-6 inline-flex items-center gap-1.5 text-sm">
                <Link href={crumb.href} className="text-warm-500 transition-colors hover:text-warm-950">
                  {crumb.label}
                </Link>
                <ChevronRight className="h-3.5 w-3.5 text-warm-300" />
                <span className="font-medium text-warm-950">{crumb.current}</span>
              </nav>
            )}
            {plan && (
              <div className="mb-5">
                <PlanBadge tier={plan} />
              </div>
            )}
            <h1 className="text-4xl font-semibold leading-[1.05] tracking-tight text-warm-950 sm:text-5xl md:text-6xl">{title}</h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-warm-600 md:text-xl">{lede}</p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link href={REGISTER_URL} target="_blank">
                <Button size="lg" className="h-11 px-6 text-base">
                  {primaryLabel}
                  <ArrowRight className="ml-1.5 h-4 w-4" />
                </Button>
              </Link>
              {secondaryHref && (
                <Link href={secondaryHref}>
                  <Button variant="outline" size="lg" className="h-11 px-6 text-base">
                    {secondaryLabel}
                  </Button>
                </Link>
              )}
            </div>
            {note && <p className="mt-5 text-sm text-warm-400">{note}</p>}
          </div>
          {aside && <div className="min-w-0">{aside}</div>}
        </div>
      </div>
    </section>
  )
}
