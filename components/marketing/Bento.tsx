import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

/*
 * The bento a product page closes its tour on ("Also on the page" on /storefront, "Also included"
 * on /sales): a grid of cards, each a small still of the real thing over a dotted ground with a
 * title and one line under it. The stills are decorative (built from the demos' primitives, never
 * a screenshot, never moving: the page's demos move, these stand): the card's title and line say
 * what the still shows. A page builds its own stills from `Mini` pieces and hands each card one.
 */

/** A floating piece of the product: white, a hairline ring and a soft shadow under it. */
export const Mini = ({ className, children }: { className?: string; children: ReactNode }) => (
  <div className={cn('rounded-xl bg-white shadow-[0_16px_36px_-20px_rgba(27,26,25,0.4)] ring-1 ring-warm-200/80', className)}>{children}</div>
)

export const BentoCard = ({ title, desc, visual, className }: { title: string; desc: string; visual: ReactNode; className?: string }) => (
  <div className={cn('group flex flex-col overflow-hidden rounded-2xl border border-warm-200 bg-white transition-shadow duration-300 hover:shadow-[0_24px_50px_-30px_rgba(27,26,25,0.35)]', className)}>
    <div aria-hidden="true" className="pointer-events-none relative h-[228px] select-none overflow-hidden border-b border-warm-100 bg-warm-100/50">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: 'radial-gradient(var(--color-warm-300) 1px, transparent 1px)',
          backgroundSize: '16px 16px',
          maskImage: 'radial-gradient(ellipse at center, black 30%, transparent 80%)',
          opacity: 0.55,
        }}
      />
      <div className="relative flex h-full items-center justify-center px-5 py-4 transition-transform duration-500 ease-out group-hover:-translate-y-1">{visual}</div>
    </div>
    <div className="flex-1 px-6 py-5">
      <h3 className="text-[16px] font-semibold tracking-tight text-warm-950">{title}</h3>
      <p className="mt-1.5 text-[14.5px] leading-relaxed text-warm-500">{desc}</p>
    </div>
  </div>
)

/** The bento's heading: what the section is at the left, one sentence about it at the right. */
export const BentoHeading = ({ eyebrow, title, lede }: { eyebrow: string; title: string; lede: string }) => (
  <div className="grid items-end gap-6 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
    <div>
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="mt-4 text-3xl font-semibold tracking-tight text-warm-950 md:text-4xl">{title}</h2>
    </div>
    <p className="text-lg leading-relaxed text-warm-600 lg:pb-1">{lede}</p>
  </div>
)

/** Three across on a desktop, two on a tablet, one on a phone; a card widens with `sm:col-span-2`. */
export const BentoGrid = ({ children }: { children: ReactNode }) => <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-5">{children}</div>
