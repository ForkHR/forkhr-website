import { cn } from '@/lib/utils'
import GradientCanvas from './GradientCanvas'

export type StageShape = 'band' | 'band-reverse' | 'wave'

/**
 * The moving gradient as a stage for product visuals. Decorative only; the visual sits on top.
 *
 * - `hero`: behind a hero's visual. Its wrapper is `relative lg:static` inside the hero's
 *   `relative` px-6 container. Under lg it is a full-bleed band behind the visual; from lg it
 *   hangs from the top of the hero and runs off the right edge of the screen.
 * - `band` / `band-reverse` / `wave`: a full-bleed band across the middle of a block of visuals
 *   (wrapper `relative`), cut on a rising slant, a falling one, or with curved edges, so the
 *   spotlights on one page each have their own shape.
 */
const SHAPES: Record<'hero' | StageShape, string> = {
  hero: '-inset-x-6 -top-10 bottom-20 [clip-path:polygon(0_9%,100%_0,100%_91%,0_100%)] lg:inset-auto lg:left-[44%] lg:right-[min(0px,calc((1152px-100vw)/2))] lg:top-0 lg:h-[560px] lg:[clip-path:polygon(22%_0,100%_0,100%_100%,0_82%)]',
  band: 'left-1/2 top-[14%] bottom-[10%] w-screen -translate-x-1/2 [clip-path:polygon(0_18%,100%_0,100%_82%,0_100%)]',
  'band-reverse': 'left-1/2 top-[12%] bottom-[8%] w-screen -translate-x-1/2 [clip-path:polygon(0_0,100%_26%,100%_100%,0_74%)]',
  wave: 'stage-wave left-1/2 top-[10%] bottom-[6%] w-screen -translate-x-1/2',
}

export default function GradientStage({ variant = 'hero', seed = 0, className }: { variant?: 'hero' | StageShape; seed?: number; className?: string }) {
  return (
    <div aria-hidden="true" className={cn('pointer-events-none absolute', SHAPES[variant], className)}>
      <GradientCanvas seed={seed} className="h-full w-full" />
    </div>
  )
}
