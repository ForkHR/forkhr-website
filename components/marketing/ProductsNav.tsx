'use client'

import { Fragment, useEffect, useRef, useState, type ReactNode } from 'react'
import { cn } from '@/lib/utils'

/** `id` is the chapter's own section; its label links there and lights while you read it. */
export type ProductsNavGroup = { id: string; label: string; items: { id: string; label: string; icon: ReactNode }[] }

type Lit = { group: string; items: string[] }

/**
 * The products page's sticky bar: one chip per product, grouped by chapter. What you are reading
 * is lit: the first product section, in page order, crossing the band just under the sticky bars,
 * plus any section level with it (two cards side by side light both chips), and its chapter's
 * label. A clicked chip stays lit until the smooth scroll lands. The bar scrolls sideways to keep
 * the lit chip in view.
 */
export default function ProductsNav({ groups }: { groups: ProductsNavGroup[] }) {
  const [lit, setLit] = useState<Lit>({ group: '', items: [] })
  const barRef = useRef<HTMLDivElement | null>(null)
  const holding = useRef(false)

  useEffect(() => {
    const groupOf = new Map<string, string>()
    const order: string[] = []
    for (const g of groups) {
      order.push(g.id)
      groupOf.set(g.id, g.id)
      for (const i of g.items) {
        order.push(i.id)
        groupOf.set(i.id, g.id)
      }
    }
    const els = order.map((id) => document.getElementById(id)).filter((el): el is HTMLElement => !!el)
    if (!els.length || typeof IntersectionObserver === 'undefined') return
    const visible = new Set<string>()
    const isChapter = (id: string) => groupOf.get(id) === id
    const top = (id: string) => document.getElementById(id)?.getBoundingClientRect().top ?? 0
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) visible.add(e.target.id)
          else visible.delete(e.target.id)
        }
        if (holding.current) return
        const items = order.filter((id) => visible.has(id) && !isChapter(id))
        if (items.length) {
          const y = top(items[0])
          setLit({ group: groupOf.get(items[0]) ?? '', items: items.filter((id) => Math.abs(top(id) - y) < 8) })
        } else {
          setLit({ group: order.find((id) => visible.has(id) && isChapter(id)) ?? '', items: [] })
        }
      },
      { rootMargin: '-150px 0px -55% 0px' },
    )
    els.forEach((el) => io.observe(el))
    return () => io.disconnect()
  }, [groups])

  const focus = lit.items[0] ?? lit.group
  useEffect(() => {
    const bar = barRef.current
    const el = focus ? bar?.querySelector<HTMLElement>(`[data-id="${focus}"]`) : null
    if (!bar || !el) return
    const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    bar.scrollTo({ left: el.offsetLeft - bar.clientWidth / 2 + el.clientWidth / 2, behavior: still ? 'auto' : 'smooth' })
  }, [focus])

  // Light what was clicked and ignore the sections the smooth scroll passes on the way.
  const hold = (next: Lit) => {
    setLit(next)
    holding.current = true
    const release = () => {
      holding.current = false
      window.removeEventListener('scrollend', release)
    }
    window.addEventListener('scrollend', release)
    window.setTimeout(release, 1500)
  }

  return (
    <nav aria-label="Products on this page" className="sticky top-16 z-30 border-b border-warm-100 bg-white/90 backdrop-blur-md">
      <div
        ref={barRef}
        className="relative mx-auto flex max-w-6xl items-center gap-2 overflow-x-auto px-6 py-3 [scrollbar-width:none] mask-[linear-gradient(to_right,transparent,black_1.5rem,black_calc(100%-1.5rem),transparent)] [&::-webkit-scrollbar]:hidden"
      >
        {groups.map((g, gi) => (
          <Fragment key={g.id}>
            {gi > 0 && <span aria-hidden="true" className="mx-1.5 h-5 w-px shrink-0 bg-warm-200" />}
            <a
              href={`#${g.id}`}
              data-id={g.id}
              onClick={() => hold({ group: g.id, items: [] })}
              className={cn('shrink-0 pr-0.5 text-[11px] font-semibold uppercase tracking-wider transition-colors hover:text-warm-950', lit.group === g.id ? 'text-warm-950' : 'text-warm-400')}
            >
              {g.label}
            </a>
            {g.items.map((i) => {
              const on = lit.items.includes(i.id)
              return (
                <a
                  key={i.id}
                  href={`#${i.id}`}
                  data-id={i.id}
                  aria-current={on ? 'true' : undefined}
                  onClick={() => hold({ group: g.id, items: [i.id] })}
                  className={cn(
                    'inline-flex shrink-0 items-center gap-1.5 rounded-full border px-3 py-1.5 text-[13px] font-medium transition-colors',
                    on ? 'border-warm-950 bg-warm-950 text-white [&_svg]:text-white' : 'border-warm-200 bg-white text-warm-600 hover:border-warm-300 hover:text-warm-950',
                  )}
                >
                  {i.icon}
                  {i.label}
                </a>
              )
            })}
          </Fragment>
        ))}
      </div>
    </nav>
  )
}
