'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'

// A section counts as the one being read once its heading is this far from the top (the site
// header is 64px, and a heading a link jumps to stops at 96px)
const READING_LINE = 140

/** "On this page": an article's sections, the one being read in ink as the page scrolls. Plain anchors, so it works before any script runs. */
export default function DocsToc({ items }: { items: { id: string; label: string }[] }) {
  const [active, setActive] = useState(items[0]?.id)
  const ids = items.map((item) => item.id).join('|')

  useEffect(() => {
    const list = ids ? ids.split('|') : []
    if (!list.length) return undefined
    let frame = 0
    const measure = () => {
      frame = 0
      let current = list[0]
      for (const id of list) {
        const el = document.getElementById(id)
        if (el && el.getBoundingClientRect().top <= READING_LINE) current = id
      }
      setActive(current)
    }
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(measure)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.removeEventListener('scroll', onScroll)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [ids])

  if (items.length < 2) return null
  return (
    <nav aria-label="On this page">
      <div className="mb-2.5 text-[11px] font-semibold uppercase tracking-wider text-warm-400">On this page</div>
      <ul className="border-l border-warm-200">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              aria-current={active === item.id ? 'location' : undefined}
              className={cn(
                '-ml-px block border-l py-1 pl-3 text-[13px] leading-snug transition-colors',
                active === item.id ? 'border-warm-950 font-medium text-warm-950' : 'border-transparent text-warm-500 hover:text-warm-950',
              )}
            >
              {item.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
