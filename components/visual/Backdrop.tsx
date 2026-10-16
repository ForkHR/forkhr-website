import { cn } from '@/lib/utils'

/**
 * Hero backdrop: a dot grid that fades out towards the bottom. Purely decorative, sits behind
 * the hero content. Colour comes from the moving gradient (GradientStage) behind the product,
 * not from blurred glows.
 */
export default function Backdrop({ className, tone = 'light' }: { className?: string; tone?: 'light' | 'dark' }) {
  return (
    <div aria-hidden="true" className={cn('pointer-events-none absolute inset-0 z-0 overflow-hidden', className)}>
      <div
        className={cn(
          'absolute inset-0',
          tone === 'dark' ? 'bg-dot-grid-dark' : 'bg-dot-grid',
          'mask-[radial-gradient(ellipse_80%_70%_at_50%_0%,black_20%,transparent_75%)]',
        )}
      />
    </div>
  )
}
