'use client'

import { usePathname } from 'next/navigation'

type Variant = 'square' | 'triangle' | 'circle' | 'rounded' | 'diamond' | 'hexagon' | 'question' | 'sparkle'

export default function BlobBackground({ variant = 'square' }: { variant?: Variant }) {
  const pathname = usePathname()

  if (pathname === '/privacy-policy' || pathname === '/terms-of-service') return null

  const variantClass: Record<Variant, string> = {
    square:   'shapes-bg shapes-square',
    triangle: 'shapes-bg shapes-triangle',
    circle:   'shapes-bg shapes-circle',
    rounded:  'shapes-bg shapes-rounded',
    diamond:  'shapes-bg shapes-diamond',
    hexagon:  'shapes-bg shapes-hexagon',
    question: 'shapes-bg shapes-question',
    sparkle:  'shapes-bg shapes-sparkle',
  }

  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      <ul className={variantClass[variant]}>
        <li /><li /><li /><li /><li />
        <li /><li /><li /><li /><li />
      </ul>
    </div>
  )
}
