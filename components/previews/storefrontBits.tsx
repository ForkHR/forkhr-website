import { Check, Minus, Plus } from 'lucide-react'
import { cn } from '@/lib/utils'

/*
 * Pieces the storefront demos share (StorefrontPreview, ProductPagePreview, GuestCheckoutPreview):
 * one seller, Northside Roasters (the supplier of the site's drawn stories), its catalog lines, and
 * the drawn product pictures the cards use in place of photos. The words on them are the app's
 * public page (/v/<slug>): price per pack with what a piece works out to, "case · 12 × 32 oz ·
 * #SKU" pack lines, the + that turns into a − n + counter.
 */

export const SELLER = {
  name: 'Northside Roasters',
  slug: 'northside-roasters',
  brand: '#4A2F22',
  minimum: 150,
}

export type ArtKind = 'carton' | 'jug' | 'bag' | 'cups' | 'box'

export type ShelfItem = { id: string; name: string; price: number; unit: string; per: string; pack: string; art: ArtKind; accent: string }

export const MILK: ShelfItem[] = [
  { id: 'oat', name: 'Oat milk, barista', price: 46.8, unit: 'case', per: '$3.90 / 32 oz', pack: 'case · 12 × 32 oz · #NR-204', art: 'carton', accent: '#C9A66B' },
  { id: 'whole', name: 'Whole milk', price: 22.4, unit: 'case', per: '$5.60 / 1 gal', pack: 'case · 4 × 1 gal · #NR-201', art: 'jug', accent: '#3B82F6' },
  { id: 'half', name: 'Half & half', price: 38.4, unit: 'case', per: '$3.20 / 1 qt', pack: 'case · 12 × 1 qt · #NR-202', art: 'carton', accent: '#93C5FD' },
  { id: 'almond', name: 'Almond milk, barista', price: 50.4, unit: 'case', per: '$4.20 / 32 oz', pack: 'case · 12 × 32 oz · #NR-205', art: 'carton', accent: '#86B98A' },
]

/** A product picture, drawn: a gable-top carton, a gallon jug, a coffee bag, a sleeve of cups, a shipping case. */
export function ProductArt({ kind, accent = '#C9A66B', className }: { kind: ArtKind; accent?: string; className?: string }) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true">
      <ellipse cx="32" cy="57.5" rx="15" ry="2.4" fill="#1B1A19" opacity="0.08" />
      {kind === 'carton' && (
        <g>
          <rect x="26" y="6" width="12" height="3.5" rx="0.8" fill="#E4DDD1" />
          <path d="M22 19 26 9.5h12L42 19Z" fill="#EEE8DE" />
          <rect x="22" y="19" width="20" height="38" rx="1.5" fill="#FBF8F2" />
          <rect x="22" y="29" width="20" height="15" fill={accent} />
          <circle cx="32" cy="36.5" r="4.2" fill="#fff" opacity="0.9" />
          <rect x="25.5" y="48" width="13" height="2" rx="1" fill="#E2DBCF" />
          <rect x="38.5" y="19" width="3.5" height="38" fill="#1B1A19" opacity="0.05" />
        </g>
      )}
      {kind === 'jug' && (
        <g>
          <rect x="27.5" y="7" width="9" height="5" rx="1.5" fill={accent} />
          <path d="M19 25c0-6 4-8 8-9l1-4h8l1 4c4 1 8 3 8 9v27c0 3-2 5-5 5H24c-3 0-5-2-5-5Z" fill="#F7F7F5" />
          <path d="M38 19c3 1 4.5 3 4.5 6v6" stroke="#E4E2DE" strokeWidth="2.6" fill="none" strokeLinecap="round" />
          <rect x="22.5" y="34" width="19" height="13" rx="2" fill={accent} />
          <rect x="25.5" y="38.5" width="13" height="2" rx="1" fill="#fff" opacity="0.85" />
        </g>
      )}
      {kind === 'bag' && (
        <g>
          <rect x="19" y="11" width="26" height="7" rx="1.2" fill="#A77A50" />
          <path d="M20 18h24l2 37c0 1.2-.8 2-2 2H20c-1.2 0-2-.8-2-2Z" fill="#BE8F62" />
          <circle cx="32" cy="22.5" r="1.7" fill="#7E5A3A" />
          <rect x="23" y="28" width="18" height="17" rx="1.6" fill="#F6EFE4" />
          <circle cx="32" cy="36.5" r="4.5" fill={accent} />
        </g>
      )}
      {kind === 'cups' && (
        <g>
          <rect x="20.5" y="6" width="23" height="4" rx="1.5" fill="#F4F2EE" />
          <rect x="20" y="11" width="24" height="4" rx="1.5" fill="#EEEBE6" />
          <rect x="19.5" y="16" width="25" height="4.5" rx="1.6" fill="#E7E4DF" />
          <path d="M21 20.5h22l-3 36H24Z" fill="#FFFFFF" />
          <path d="M22.4 31h19.2l-1.1 12.5H23.5Z" fill={accent} />
        </g>
      )}
      {kind === 'box' && (
        <g>
          <path d="M12 24 32 15l20 9-20 9Z" fill="#DDB884" />
          <path d="M12 24l20 9v23l-20-9Z" fill="#C99F66" />
          <path d="M52 24 32 33v23l20-9Z" fill="#B88D56" />
          <path d="M20 20.4 24 18.6l20 9-4 1.8Z" fill="#F1DDB8" opacity="0.85" />
          <path d="M36 38.2 48 32.8v7L36 45.2Z" fill="#fff" opacity="0.8" />
        </g>
      )}
    </svg>
  )
}

/** The add control on a card: a round + until something is picked, then − n + on the seller's colour. */
export function QtyControl({ qty, size = 'sm', className }: { qty: number; size?: 'sm' | 'md'; className?: string }) {
  const h = size === 'md' ? 26 : 20
  return (
    <span
      className={cn('inline-flex items-center justify-between overflow-hidden rounded-full text-white shadow-[0_4px_10px_-4px_rgba(27,26,25,0.45)] transition-[width] duration-300', className)}
      style={{ height: h, width: qty ? h * 2.9 : h, background: SELLER.brand }}
    >
      {qty ? (
        <>
          <Minus className="ml-1 h-2.5 w-2.5 shrink-0" strokeWidth={3} />
          <span className={cn('font-semibold tabular-nums', size === 'md' ? 'text-[12px]' : 'text-[10px]')}>{qty}</span>
          <Plus className="mr-1 h-2.5 w-2.5 shrink-0" strokeWidth={3} />
        </>
      ) : (
        <Plus className="mx-auto h-3 w-3" strokeWidth={3} />
      )}
    </span>
  )
}

/** The blue tick a seller that runs its own account carries after its name. */
export function VerifiedTick({ size = 12, className }: { size?: number; className?: string }) {
  return (
    <span className={cn('inline-flex shrink-0 items-center justify-center rounded-full bg-forest-600 text-white', className)} style={{ width: size, height: size }}>
      <Check style={{ width: size * 0.62, height: size * 0.62 }} strokeWidth={3.5} />
    </span>
  )
}

/** The seller's logo tile: initials on its brand colour. */
export function SellerLogo({ size = 36, className }: { size?: number; className?: string }) {
  return (
    <span
      className={cn('inline-flex shrink-0 items-center justify-center rounded-[28%] font-bold tracking-tight text-white', className)}
      style={{ width: size, height: size, background: SELLER.brand, fontSize: Math.round(size * 0.36) }}
    >
      NR
    </span>
  )
}
