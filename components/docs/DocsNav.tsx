'use client'

import { useEffect, useMemo, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronRight, LayoutGrid } from 'lucide-react'
import { cn } from '@/lib/utils'
import { docPath, topicPath, type DocsNavSection } from '@/lib/docs'

/**
 * The contents of the Docs, beside a topic or an article: the areas as small headings, each
 * topic a row that folds open to its articles down a hairline, the page on screen marked on that
 * line. The topic of the page on screen is open by itself; the arrow opens or shuts any other.
 *   onNavigate: called when a link is followed (the phone's sheet closes on it)
 */
export default function DocsNav({ sections, onNavigate }: { sections: DocsNavSection[]; onNavigate?: () => void }) {
  const pathname = usePathname() || ''
  const parts = pathname.split('/').filter(Boolean) // ['docs', id] | ['docs', 'topics', key]
  const topicKey = parts[1] === 'topics' ? decodeURIComponent(parts[2] || '') : null
  const articleId = parts[1] && parts[1] !== 'topics' ? decodeURIComponent(parts[1]) : null

  const activeTopic = useMemo(() => {
    if (topicKey) return topicKey
    if (!articleId) return null
    for (const section of sections) for (const topic of section.topics) if (topic.articles.some((a) => a.id === articleId)) return topic.key
    return null
  }, [sections, topicKey, articleId])

  // What the reader opened or shut by hand; a topic they never touched is open only while it holds the page on screen
  const [toggled, setToggled] = useState<Record<string, boolean>>({})
  const isOpen = (key: string) => toggled[key] ?? key === activeTopic
  const toggle = (key: string) => setToggled((prev) => ({ ...prev, [key]: !(prev[key] ?? key === activeTopic) }))

  // Keep the open page in view in a long contents: only when it is out of sight, and only the
  // contents' own scroll, never the page's
  const activeRef = useRef<HTMLAnchorElement>(null)
  useEffect(() => {
    const el = activeRef.current
    const box = el?.closest<HTMLElement>('[data-docs-nav-scroll]')
    if (!el || !box) return
    const r = el.getBoundingClientRect()
    const b = box.getBoundingClientRect()
    if (r.top < b.top + 24 || r.bottom > b.bottom - 40) box.scrollTop += r.top - b.top - b.height / 2 + r.height / 2
  }, [pathname])

  return (
    <nav aria-label="Docs contents">
      <Link href="/docs" onClick={onNavigate} className="flex items-center gap-2.5 rounded-full px-3 py-2 text-[14px] font-medium text-warm-700 transition-colors hover:bg-warm-100 hover:text-warm-950">
        <LayoutGrid className="h-4 w-4 text-warm-400" aria-hidden="true" />
        All topics
      </Link>
      {sections.map((section) => (
        <div key={section.key} className="mt-6">
          <div className="mb-1.5 px-3 text-[11px] font-semibold uppercase tracking-wider text-warm-400">{section.label}</div>
          <ul>
            {section.topics.map((topic) => {
              const open = isOpen(topic.key)
              const here = topicKey === topic.key
              const within = activeTopic === topic.key
              return (
                <li key={topic.key}>
                  <div className={cn('group flex items-center rounded-full transition-colors', here ? 'bg-warm-100' : 'hover:bg-warm-100/70')}>
                    <Link
                      href={topicPath(topic.key)}
                      onClick={onNavigate}
                      ref={here ? activeRef : undefined}
                      aria-current={here ? 'page' : undefined}
                      className={cn('min-w-0 flex-1 truncate py-[7px] pl-3 text-[14px] leading-snug transition-colors', within ? 'font-semibold text-warm-950' : 'text-warm-600 group-hover:text-warm-950')}
                    >
                      {topic.label}
                    </Link>
                    <button
                      type="button"
                      onClick={() => toggle(topic.key)}
                      aria-expanded={open}
                      aria-label={`${open ? 'Hide' : 'Show'} the ${topic.label} articles`}
                      className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-warm-400 outline-none transition-colors hover:text-warm-950 focus-visible:text-warm-950"
                    >
                      <ChevronRight className={cn('h-3.5 w-3.5 transition-transform duration-200', open && 'rotate-90')} />
                    </button>
                  </div>
                  {open && (
                    <ul className="mb-2 ml-[18px] mt-1 border-l border-warm-200">
                      {topic.articles.map((a) => {
                        const current = articleId === a.id
                        return (
                          <li key={a.id}>
                            <Link
                              href={docPath(a.id)}
                              onClick={onNavigate}
                              ref={current ? activeRef : undefined}
                              aria-current={current ? 'page' : undefined}
                              className={cn(
                                '-ml-px block border-l py-[5px] pl-3.5 pr-2 text-[13px] leading-snug transition-colors',
                                current ? 'border-warm-950 font-medium text-warm-950' : 'border-transparent text-warm-500 hover:border-warm-400 hover:text-warm-950',
                              )}
                            >
                              {a.title}
                            </Link>
                          </li>
                        )
                      })}
                    </ul>
                  )}
                </li>
              )
            })}
          </ul>
        </div>
      ))}
    </nav>
  )
}
