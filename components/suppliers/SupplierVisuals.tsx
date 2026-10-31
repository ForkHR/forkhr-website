import { cn } from '@/lib/utils'
import { initialsOf, type Supplier } from '@/lib/suppliers'

/* The two images a supplier brings: its cover (else a band in its brand color) and its logo
   (else an initials tile). Plain <img>: the hosts vary per seller (the public bucket, or whatever
   absolute URL a seller stored) and the site runs no image loader, so next/image has nothing to
   add here beyond lazy loading, which the attribute gives. */

const INK = '#2D2A27'

export function SupplierCover({ supplier, className, priority = false }: { supplier: Pick<Supplier, 'name' | 'coverImage' | 'brandColor'>; className?: string; priority?: boolean }) {
  const tone = supplier.brandColor || INK
  return (
    <div className={cn('relative overflow-hidden', className)} style={{ backgroundColor: tone }}>
      {supplier.coverImage ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={supplier.coverImage} alt="" className="absolute inset-0 h-full w-full object-cover" loading={priority ? 'eager' : 'lazy'} decoding="async" />
      ) : (
        <div aria-hidden="true" className="absolute inset-0">
          <div className="absolute inset-0 bg-dot-grid-dark opacity-60" />
          <div className="absolute inset-0" style={{ background: `linear-gradient(135deg, ${tone} 10%, rgba(255,255,255,0.22) 100%)` }} />
        </div>
      )}
    </div>
  )
}

export function SupplierLogo({ supplier, size = 56, className }: { supplier: Pick<Supplier, 'name' | 'logo' | 'brandColor'>; size?: number; className?: string }) {
  const tone = supplier.brandColor || '#1B1A19'
  return (
    <div className={cn('relative flex shrink-0 items-center justify-center overflow-hidden bg-white', className)} style={{ width: size, height: size }}>
      {supplier.logo ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={supplier.logo} alt={`${supplier.name} logo`} className="h-full w-full object-cover" loading="lazy" decoding="async" />
      ) : (
        <span className="flex h-full w-full items-center justify-center font-semibold tracking-tight text-white" style={{ backgroundColor: tone, fontSize: Math.round(size * 0.38) }} aria-hidden="true">
          {initialsOf(supplier.name)}
        </span>
      )}
    </div>
  )
}

/** The small category pills under a name, on the cards and the detail hero. */
export function CategoryPills({ categories, max, tone = 'light', className }: { categories: string[]; max?: number; tone?: 'light' | 'dark'; className?: string }) {
  const shown = max ? categories.slice(0, max) : categories
  const more = categories.length - shown.length
  if (!shown.length) return null
  const pill = tone === 'dark' ? 'bg-white/15 text-white backdrop-blur-sm' : 'bg-warm-100 text-warm-700'
  return (
    <ul className={cn('flex flex-wrap gap-1.5', className)}>
      {shown.map((c) => (
        <li key={c} className={cn('rounded-full px-2.5 py-0.5 text-[12px] font-medium', pill)}>
          {c}
        </li>
      ))}
      {more > 0 && <li className={cn('rounded-full px-1.5 py-0.5 text-[12px]', tone === 'dark' ? 'text-white/70' : 'text-warm-400')}>+{more}</li>}
    </ul>
  )
}
