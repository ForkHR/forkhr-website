import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

// A section's heading: the title and one sentence. No label over the title: the small blue upper-case
// "eyebrow" every section carried was taken off the whole site on 2026-11-17 (the owner: "it gives like a
// cheap look, not like a premium website look"), so never add one back here or on a page.
export default function SectionHeading({
  title,
  lede,
  className,
  align = 'left',
  tone = 'light',
}: {
  title: ReactNode
  lede?: ReactNode
  className?: string
  align?: 'left' | 'center'
  tone?: 'light' | 'dark'
}) {
  return (
    <div className={cn('max-w-2xl', align === 'center' && 'mx-auto text-center', className)}>
      <h2 className={cn('text-3xl md:text-4xl font-semibold tracking-tight', tone === 'dark' ? 'text-white' : 'text-warm-950')}>{title}</h2>
      {lede && <p className={cn('mt-4 text-lg leading-relaxed', tone === 'dark' ? 'text-warm-400' : 'text-warm-600')}>{lede}</p>}
    </div>
  )
}
