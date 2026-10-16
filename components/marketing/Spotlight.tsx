import type { ReactNode } from 'react'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Phone, Window } from '@/components/previews/bits'
import GradientStage, { type StageShape } from '@/components/visual/GradientStage'
import type { TierKey } from '@/lib/catalog'
import PlanBadge from './PlanBadge'

export type SpotlightPoint = { icon: ReactNode; title: string; desc: string }

/**
 * A product as its own selling point on the home page: the headline and lede, the product's
 * window and phone floating across a band of the moving gradient, four points, and the way in.
 * Performance, Supply & ordering and Service calls all use it, so they read as one family.
 */
export default function Spotlight({
  id,
  badge,
  eyebrow,
  plan,
  title,
  lede,
  windowTitle,
  preview,
  phone,
  points,
  href,
  hrefLabel,
  note,
  seed = 0,
  shape = 'band',
  flip = false,
  surface = 'white',
  accent = 'brand',
}: {
  id: string
  badge?: string
  eyebrow: string
  plan?: TierKey
  title: string
  lede: ReactNode
  windowTitle: string
  preview: ReactNode
  /** The phone beside the window, from lg up. */
  phone?: ReactNode
  points: SpotlightPoint[]
  href: string
  hrefLabel: string
  note?: string
  /** Offsets the gradient so neighbouring spotlights never look alike. */
  seed?: number
  /** The band's cut, so each spotlight on a page has its own shape. */
  shape?: StageShape
  /** Phone on the left, window on the right. */
  flip?: boolean
  surface?: 'white' | 'paper'
  accent?: 'brand' | 'plum'
}) {
  return (
    <section id={id} className={cn('relative scroll-mt-24 overflow-hidden border-b border-warm-100', surface === 'paper' && 'bg-warm-50')}>
      <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid gap-6 lg:grid-cols-[1.1fr_1fr] lg:items-end lg:gap-16">
          <div>
            <div className="flex flex-wrap items-center gap-3">
              {badge && <span className="rounded-full bg-warm-950 px-2.5 py-0.5 text-[12px] font-semibold text-white">{badge}</span>}
              <span className="eyebrow">{eyebrow}</span>
              {plan && <PlanBadge tier={plan} />}
            </div>
            <h2 className="mt-5 text-4xl font-semibold tracking-tight text-warm-950 md:text-5xl md:leading-[1.05]">{title}</h2>
          </div>
          <p className="text-lg leading-relaxed text-warm-600">{lede}</p>
        </div>

        {/* The product, floating across a band of the moving gradient */}
        <div className="on-gradient relative mt-14">
          <GradientStage variant={shape} seed={seed} />
          <div className={cn('relative grid items-start gap-10', phone && (flip ? 'lg:grid-cols-[300px_1fr]' : 'lg:grid-cols-[1fr_300px]'))}>
            <Window title={windowTitle} className={cn(flip && 'lg:order-2')}>
              {preview}
            </Window>
            {phone && (
              <div className={cn('hidden justify-center lg:mt-14 lg:flex', flip && 'lg:order-1')}>
                <Phone>{phone}</Phone>
              </div>
            )}
          </div>
        </div>

        <div className="mt-14 grid gap-x-8 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {points.map((p) => (
            <div key={p.title}>
              <span className={cn('inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white ring-1 ring-warm-200', accent === 'plum' ? 'text-plum-600' : 'text-forest-600')}>{p.icon}</span>
              <h3 className="mt-4 text-[16px] font-semibold text-warm-950">{p.title}</h3>
              <p className="mt-1 text-[14.5px] leading-relaxed text-warm-600">{p.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-warm-200 pt-8">
          <Link href={href} className="inline-flex items-center gap-1.5 rounded-full bg-warm-950 px-5 py-2.5 text-[15px] font-medium text-white transition-colors hover:bg-warm-800">
            {hrefLabel}
            <ArrowRight className="h-4 w-4" />
          </Link>
          {note && <span className="text-[14px] text-warm-500">{note}</span>}
        </div>
      </div>
    </section>
  )
}
