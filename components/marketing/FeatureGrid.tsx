import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

/*
 * A list of short points ("Also included", "Each bag", "What you see", a page's values): open
 * columns with no boxes and no rules. Each point's glyph sits on a white disc ringed in the brand
 * gradient (the colours of the moving gradient behind the heroes, `.fg-ring` in globals.css); the
 * ring turns and the disc lifts while the point is pointed at. Then the title and one line. On a
 * phone the glyph sits beside the words, so a long list stays short.
 *
 * History, so it is not undone: the hairline-joined grid of white cells with flat blue tiles was
 * called "very ugly" (the owner, 2026-11-17); its first replacement had a hairline over each point
 * with a blue stretch that ran across on hover, and the owner did not see why some points had "a
 * long blue border". No lines, no blue bars. Restyle this one file, never a page's own copy.
 */
export type FeaturePoint = {
  icon?: ReactNode
  title: ReactNode
  desc: ReactNode
  /** A small word at the end of the glyph's line: "01", "Priority 1". */
  meta?: ReactNode
}

const COLUMNS = {
  2: 'sm:grid-cols-2',
  3: 'sm:grid-cols-2 lg:grid-cols-3',
  4: 'sm:grid-cols-2 lg:grid-cols-4',
  5: 'sm:grid-cols-2 lg:grid-cols-5',
} as const

export default function FeatureGrid({
  items,
  columns = 4,
  tone = 'light',
  size = 'md',
  className,
}: {
  items: FeaturePoint[]
  /** How many across on a desktop (two on a tablet, one on a phone). */
  columns?: keyof typeof COLUMNS
  /** 'dark' on the closing band. */
  tone?: 'light' | 'dark'
  /** 'sm' for a long list of small points (a step's kinds), 'lg' for a few that carry a paragraph. */
  size?: 'sm' | 'md' | 'lg'
  className?: string
}) {
  const dark = tone === 'dark'
  const gaps = columns >= 5 ? 'gap-x-8 sm:gap-y-12' : size === 'sm' ? 'gap-x-10 sm:gap-y-10' : 'gap-x-12 sm:gap-y-14'
  const metaClass = cn('text-[12px] font-medium tabular-nums', dark ? 'text-warm-500' : 'text-warm-400')
  const disc = size === 'sm' ? 'h-10 w-10' : 'h-12 w-12'
  return (
    <ul className={cn('grid gap-y-9', COLUMNS[columns], gaps, className)}>
      {items.map((item, i) => (
        <li key={i} className="group">
          <div className="flex items-start gap-4 sm:block">
            {(item.icon || item.meta) && (
              <div className={cn('flex shrink-0 items-center justify-between gap-3', !item.icon && 'hidden sm:flex', size === 'sm' ? 'sm:mb-4' : 'sm:mb-5')}>
                {item.icon ? (
                  <span
                    className={cn(
                      'relative inline-flex shrink-0 items-center justify-center rounded-full transition-transform duration-500 ease-out group-hover:-translate-y-0.5 motion-reduce:transition-none',
                      disc,
                    )}
                  >
                    {/* The ring: the brand gradient, turned half a turn while pointed at */}
                    <span
                      aria-hidden="true"
                      className={cn(
                        'fg-ring absolute inset-0 rounded-full transition-[transform,opacity] duration-700 ease-out group-hover:rotate-180 motion-reduce:transition-none',
                        dark ? 'opacity-70 group-hover:opacity-100' : 'opacity-80 group-hover:opacity-100',
                      )}
                    />
                    <span
                      className={cn(
                        'relative inline-flex items-center justify-center rounded-full',
                        size === 'sm' ? 'h-[37px] w-[37px] [&>svg]:h-4 [&>svg]:w-4' : 'h-[45px] w-[45px] [&>svg]:h-[19px] [&>svg]:w-[19px]',
                        dark
                          ? 'bg-warm-950 text-white [&>svg]:text-white'
                          : 'bg-white text-warm-950 shadow-[inset_0_-6px_12px_-8px_rgba(27,26,25,0.18)] [&>svg]:text-warm-950',
                      )}
                    >
                      {item.icon}
                    </span>
                  </span>
                ) : (
                  <span />
                )}
                {item.meta ? <span className={cn(metaClass, 'hidden sm:inline')}>{item.meta}</span> : null}
              </div>
            )}
            <div className="min-w-0">
              {item.meta ? <div className={cn(metaClass, 'mb-1 sm:hidden')}>{item.meta}</div> : null}
              <h3
                className={cn(
                  'font-semibold tracking-tight',
                  dark ? 'text-white' : 'text-warm-950',
                  size === 'lg' ? 'text-lg' : size === 'sm' ? 'text-[15px]' : 'text-[16.5px]',
                  item.icon && (size === 'sm' ? 'pt-2 sm:pt-0' : 'pt-3 sm:pt-0'),
                )}
              >
                {item.title}
              </h3>
              <p
                className={cn(
                  'leading-relaxed',
                  dark ? 'text-warm-400' : 'text-warm-500',
                  size === 'lg' ? 'mt-2 text-[15.5px]' : size === 'sm' ? 'mt-1.5 text-[14px]' : 'mt-2 text-[15px]',
                )}
              >
                {item.desc}
              </p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  )
}
