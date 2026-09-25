import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

export default function SectionHeading({
  eyebrow,
  title,
  lede,
  className,
  align = 'left',
  tone = 'light',
}: {
  eyebrow?: string
  title: ReactNode
  lede?: ReactNode
  className?: string
  align?: 'left' | 'center'
  tone?: 'light' | 'dark'
}) {
  return (
    <div className={cn('max-w-2xl', align === 'center' && 'mx-auto text-center', className)}>
      {eyebrow && <span className={cn('eyebrow mb-4', tone === 'dark' && 'text-lime-accent')}>{eyebrow}</span>}
      <h2 className={cn('text-3xl md:text-4xl font-semibold tracking-tight', tone === 'dark' ? 'text-white' : 'text-warm-950')}>{title}</h2>
      {lede && <p className={cn('mt-4 text-lg leading-relaxed', tone === 'dark' ? 'text-warm-400' : 'text-warm-600')}>{lede}</p>}
    </div>
  )
}
