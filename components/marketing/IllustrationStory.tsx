'use client'

import { useCallback, useEffect, useRef, useState, type ReactNode } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { Illustration } from '@/lib/illustrations'
import IllustrationFrame from './IllustrationFrame'
import SectionHeading from './SectionHeading'

/**
 * A story told in drawings: the heading, then one drawing at a time in a row that scrolls
 * sideways (swipe on a phone, the arrows on a desktop). Each drawing carries a title and one
 * sentence. The next drawing peeks in from the right so the row reads as more to see.
 */
export default function IllustrationStory({
  id,
  eyebrow,
  title,
  lede,
  slides,
  className,
}: {
  id?: string
  eyebrow?: string
  title: ReactNode
  lede?: ReactNode
  slides: Illustration[]
  className?: string
}) {
  const track = useRef<HTMLOListElement>(null)
  const [index, setIndex] = useState(0)

  // Distance between two slides' left edges (slide width + gap), read off the layout.
  const step = useCallback(() => {
    const el = track.current
    if (!el || el.children.length < 2) return el?.clientWidth || 1
    const [a, b] = Array.from(el.children) as HTMLElement[]
    return b.offsetLeft - a.offsetLeft || 1
  }, [])

  const sync = useCallback(() => {
    const el = track.current
    if (!el) return
    const atEnd = el.scrollLeft >= el.scrollWidth - el.clientWidth - 2
    const next = atEnd ? slides.length - 1 : Math.round(el.scrollLeft / step())
    setIndex(Math.max(0, Math.min(slides.length - 1, next)))
  }, [slides.length, step])

  useEffect(() => {
    const el = track.current
    if (!el) return
    let frame = 0
    const onScroll = () => {
      cancelAnimationFrame(frame)
      frame = requestAnimationFrame(sync)
    }
    el.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      cancelAnimationFrame(frame)
      el.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [sync])

  const go = (i: number) => {
    const el = track.current
    if (!el) return
    const target = Math.max(0, Math.min(slides.length - 1, i))
    el.scrollTo({ left: Math.min(target * step(), el.scrollWidth - el.clientWidth), behavior: 'smooth' })
  }

  const label = typeof title === 'string' ? title : eyebrow

  return (
    <section id={id} aria-roledescription="carousel" aria-label={label} className={cn('scroll-mt-24 border-b border-warm-100', className)}>
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading eyebrow={eyebrow} title={title} lede={lede} />
          <div className="hidden items-center gap-3 md:flex">
            <span className="text-sm tabular-nums text-warm-500" aria-live="polite">
              {index + 1} / {slides.length}
            </span>
            <button
              type="button"
              onClick={() => go(index - 1)}
              disabled={index === 0}
              aria-label="Previous drawing"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-warm-200 bg-white text-warm-950 transition-colors hover:border-warm-300 disabled:cursor-default disabled:opacity-40"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => go(index + 1)}
              disabled={index === slides.length - 1}
              aria-label="Next drawing"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-warm-200 bg-white text-warm-950 transition-colors hover:border-warm-300 disabled:cursor-default disabled:opacity-40"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        <ol
          ref={track}
          className="mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] md:mt-14 [&::-webkit-scrollbar]:hidden"
        >
          {slides.map((s, i) => (
            <li
              key={s.src}
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${slides.length}: ${s.title}`}
              className="w-[88%] shrink-0 snap-start sm:w-[80%] lg:w-[860px]"
            >
              <figure>
                <IllustrationFrame illustration={s} sizes="(min-width: 1024px) 860px, 88vw" />
                <figcaption className="mt-5 max-w-xl">
                  <h3 className="text-lg font-semibold tracking-tight text-warm-950">{s.title}</h3>
                  <p className="mt-1 text-[15px] leading-relaxed text-warm-600">{s.text}</p>
                </figcaption>
              </figure>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
