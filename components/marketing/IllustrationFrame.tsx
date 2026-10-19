import Image from 'next/image'
import { cn } from '@/lib/utils'
import type { Illustration } from '@/lib/illustrations'

/**
 * One drawing on the warm card it was drawn on. Drawings carry their own cards and labels, so
 * they sit unframed (no app window or phone around them), only rounded and hairlined like a
 * `surface`.
 */
export default function IllustrationFrame({
  illustration,
  sizes = '(min-width: 1024px) 640px, 100vw',
  priority = false,
  className,
}: {
  illustration: Illustration
  sizes?: string
  priority?: boolean
  className?: string
}) {
  return (
    <div className={cn('overflow-hidden rounded-2xl border border-warm-200 bg-warm-100', className)}>
      <Image
        src={illustration.src}
        width={illustration.width}
        height={illustration.height}
        alt={illustration.alt}
        sizes={sizes}
        priority={priority}
        className="block h-auto w-full"
      />
    </div>
  )
}
