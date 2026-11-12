import type { ComponentType, ReactNode } from 'react'
import Backdrop from '@/components/visual/Backdrop'

export type LeadPoint = { icon: ComponentType<{ className?: string }>; title: string; text: string }

/**
 * The page a form stands on (/demo, /vendors): what the visitor gets on the left, the form on the
 * right, the form first under the headline on a phone. One screen with no closing band: the form
 * is the page's one action.
 */
export default function LeadPage({
  eyebrow,
  title,
  lede,
  pointsTitle,
  points,
  aside,
  children,
}: {
  eyebrow: string
  title: ReactNode
  lede: ReactNode
  pointsTitle: string
  points: LeadPoint[]
  /** A quiet line under the points: the other way in (sign up now, browse the directory). */
  aside?: ReactNode
  children: ReactNode
}) {
  return (
    <main className="pt-16">
      <section className="relative overflow-hidden">
        <Backdrop />
        <div className="relative mx-auto grid max-w-6xl gap-x-16 gap-y-10 px-4 pb-16 pt-10 md:px-6 md:pb-24 md:pt-20 lg:grid-cols-[minmax(0,1fr)_minmax(0,520px)] lg:grid-rows-[auto_1fr] lg:items-start">
          <div className="lg:pt-6">
            <span className="eyebrow mb-4">{eyebrow}</span>
            <h1 className="text-4xl font-semibold leading-[1.05] tracking-[-0.02em] text-warm-950 sm:text-5xl">{title}</h1>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-warm-600">{lede}</p>
          </div>

          <div className="lg:col-start-2 lg:row-span-2 lg:row-start-1">{children}</div>

          <div className="lg:col-start-1">
            <h2 className="text-[13px] font-semibold text-warm-950">{pointsTitle}</h2>
            <ul className="mt-4 space-y-5">
              {points.map((p) => (
                <li key={p.title} className="flex gap-3.5">
                  <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-warm-100 text-warm-700">
                    <p.icon className="h-4 w-4" />
                  </span>
                  <div className="min-w-0">
                    <div className="text-[15px] font-semibold text-warm-950">{p.title}</div>
                    <p className="mt-0.5 text-[14px] leading-relaxed text-warm-600">{p.text}</p>
                  </div>
                </li>
              ))}
            </ul>
            {aside && <p className="mt-8 border-t border-warm-100 pt-6 text-[14px] leading-relaxed text-warm-500">{aside}</p>}
          </div>
        </div>
      </section>
    </main>
  )
}
