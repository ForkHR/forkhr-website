import { cn } from '@/lib/utils'

/**
 * Hero backdrop: a dot grid that fades out towards the bottom and a soft accent glow.
 * Purely decorative, sits behind the hero content.
 */
export default function Backdrop({ className, glow = true, tone = 'light' }: { className?: string; glow?: boolean; tone?: 'light' | 'dark' }) {
  return (
    <div aria-hidden="true" className={cn('pointer-events-none absolute inset-0 z-0 overflow-hidden', className)}>
      <div
        className={cn(
          'absolute inset-0',
          tone === 'dark' ? 'bg-dot-grid-dark' : 'bg-dot-grid',
          'mask-[radial-gradient(ellipse_80%_70%_at_50%_0%,black_20%,transparent_75%)]',
        )}
      />
      {glow && (
        <>
          <div className="absolute -top-32 right-[-8%] h-[440px] w-[640px] rounded-full bg-forest-500/12 blur-3xl" />
          <div className="absolute top-40 left-[-10%] h-[320px] w-[420px] rounded-full bg-forest-300/10 blur-3xl" />
        </>
      )}
    </div>
  )
}
