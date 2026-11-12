'use client'

import { Fragment, createContext, useCallback, useContext, useEffect, useId, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import * as Dialog from '@radix-ui/react-dialog'
import { CornerDownLeft, Search, SearchX } from 'lucide-react'
import { cn } from '@/lib/utils'
import { DOCS_API_URL, docPath } from '@/lib/docs'
import { topicIcon } from './topicIcons'

// The Docs search: one palette over the page, wherever it is opened from. The pills that open it
// (the Docs home's big one, the sidebar's, the phone bar's) are DocsSearchTrigger; "/" and
// Cmd/Ctrl K open it from anywhere on a Docs page. As the visitor types, the app API's own search
// (the one the app's Docs page uses) answers from their browser with the best articles and a
// line of each around the words; before a word is typed it offers where people usually start.

type Result = { id: string; title: string; topic: string; topicLabel: string; snippet?: string }
type Found = { q: string; terms: string[]; results: Result[] }
export type DocsSuggestion = { id: string; title: string; topic: string; topicLabel: string }

const DEBOUNCE_MS = 180
const MIN_LENGTH = 2

const SearchContext = createContext<(() => void) | null>(null)

// A snippet cut from the top of an article starts with the section's name; the line reads better without it
const lineOf = (snippet: string) => snippet.replace(/^What it is:\s*/, '')

const escapeRe = (text: string) => text.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')

/** A snippet with the searched words in ink. The API's words are stemmed ("order" for "orders"), so a match runs to the end of its word. */
const Marked = ({ text, terms }: { text: string; terms: string[] }) => {
  const words = terms.filter((t) => t.length > 1).map(escapeRe)
  if (!words.length) return <>{text}</>
  const parts = text.split(new RegExp(`\\b((?:${words.join('|')})\\w*)`, 'gi'))
  return (
    <>
      {parts.map((part, i) =>
        i % 2 ? (
          <mark key={i} className="bg-transparent font-semibold text-warm-950">
            {part}
          </mark>
        ) : (
          <Fragment key={i}>{part}</Fragment>
        ),
      )}
    </>
  )
}

const Key = ({ children }: { children: React.ReactNode }) => (
  <kbd className="inline-flex h-5 min-w-5 items-center justify-center rounded-md border border-warm-200 bg-white px-1 font-mono text-[11px] leading-none text-warm-500">{children}</kbd>
)

/** What is inside the palette. Mounted while it is open, so every opening starts clean. */
function SearchPanel({ popular, onClose }: { popular: DocsSuggestion[]; onClose: () => void }) {
  const router = useRouter()
  const listId = useId()
  const [q, setQ] = useState('')
  const [found, setFound] = useState<Found | null>(null)
  const [failed, setFailed] = useState(false)
  const [active, setActive] = useState(0)

  const words = q.trim()
  const asking = words.length >= MIN_LENGTH

  useEffect(() => {
    if (words.length < MIN_LENGTH) return undefined
    const ctrl = new AbortController()
    const timer = setTimeout(async () => {
      try {
        const res = await fetch(`${DOCS_API_URL}/public/help/search?q=${encodeURIComponent(words)}`, { signal: ctrl.signal, headers: { Accept: 'application/json' } })
        if (!res.ok) throw new Error(String(res.status))
        const json = (await res.json()) as { data?: { terms?: string[]; results?: Result[] } }
        setFound({ q: words, terms: json.data?.terms || [], results: json.data?.results || [] })
        setFailed(false)
        setActive(0)
      } catch {
        if (!ctrl.signal.aborted) setFailed(true)
      }
    }, DEBOUNCE_MS)
    return () => {
      clearTimeout(timer)
      ctrl.abort()
    }
  }, [words])

  // Before a word is typed: where people usually start. After: the last answer, dimmed while a newer one is on its way.
  const settled = found?.q === words
  const rows: Result[] = asking ? found?.results || [] : popular
  const terms = asking ? found?.terms || [] : []
  const searching = asking && !failed && !rows.length && !settled
  const nothing = asking && !failed && settled && !rows.length
  const at = Math.min(active, Math.max(0, rows.length - 1))

  const move = (to: number) => {
    setActive(to)
    document.getElementById(`${listId}-${to}`)?.scrollIntoView({ block: 'nearest' })
  }
  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (!rows.length || failed) return
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      move((at + 1) % rows.length)
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      move((at - 1 + rows.length) % rows.length)
    } else if (e.key === 'Enter') {
      e.preventDefault()
      onClose()
      router.push(docPath(rows[at].id))
    }
  }

  return (
    <>
      <div className="flex shrink-0 items-center gap-3 border-b border-warm-100 pl-5 pr-4">
        <Search className="h-5 w-5 shrink-0 text-warm-400" aria-hidden="true" />
        <input
          autoFocus
          type="text"
          inputMode="search"
          enterKeyHint="search"
          autoComplete="off"
          spellCheck={false}
          value={q}
          onChange={(e) => {
            setQ(e.target.value)
            setFailed(false)
            setActive(0)
          }}
          onKeyDown={onKeyDown}
          placeholder="Search the docs"
          aria-label="Search the docs"
          role="combobox"
          aria-expanded={rows.length > 0}
          aria-controls={listId}
          aria-autocomplete="list"
          aria-activedescendant={rows.length ? `${listId}-${at}` : undefined}
          className="h-[60px] min-w-0 flex-1 bg-transparent text-[17px] text-warm-950 outline-none placeholder:text-warm-400"
        />
        <Dialog.Close className="shrink-0 rounded-full border border-warm-200 px-2.5 py-1 text-[12px] font-medium text-warm-500 outline-none transition-colors hover:border-warm-300 hover:text-warm-950 focus-visible:border-warm-400">
          Esc
        </Dialog.Close>
      </div>

      <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain p-2">
        {failed ? (
          <p className="px-4 py-8 text-center text-[14.5px] leading-relaxed text-warm-600">Search is not answering right now. The topics on the Docs home lead to every article.</p>
        ) : searching ? (
          <p className="px-4 py-8 text-center text-[14.5px] text-warm-500">Searching…</p>
        ) : nothing ? (
          <div className="flex flex-col items-center px-6 py-10 text-center">
            <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-warm-100 text-warm-500">
              <SearchX className="h-5 w-5" />
            </span>
            <p className="mt-4 text-[15px] font-semibold text-warm-950">Nothing matches “{words}”</p>
            <p className="mt-1 max-w-xs text-[13.5px] leading-relaxed text-warm-500">Try fewer or other words: the name of a page, a button, or what you are trying to do.</p>
          </div>
        ) : (
          <>
            <div className="px-3 pb-1.5 pt-2 text-[11px] font-semibold uppercase tracking-wider text-warm-400">{asking ? `${rows.length} ${rows.length === 1 ? 'article' : 'articles'}` : 'Popular'}</div>
            <ul id={listId} role="listbox" aria-label="Articles" className={cn('transition-opacity', asking && !settled && 'opacity-60')}>
              {rows.map((r, i) => {
                const Icon = topicIcon(r.topic)
                const on = i === at
                return (
                  <li key={r.id} id={`${listId}-${i}`} role="option" aria-selected={on} className="scroll-my-2">
                    <Link href={docPath(r.id)} onClick={onClose} onMouseMove={() => !on && setActive(i)} tabIndex={-1} className={cn('flex items-start gap-3 rounded-2xl px-3 py-2.5 transition-colors', on && 'bg-warm-100/80')}>
                      <span className={cn('mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-colors', on ? 'bg-white text-forest-600 shadow-[0_1px_2px_rgba(27,26,25,0.12)]' : 'bg-warm-100 text-warm-600')}>
                        <Icon className="h-4 w-4" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block text-[14.5px] font-semibold leading-snug text-warm-950">{r.title}</span>
                        <span className="mt-0.5 line-clamp-2 text-[13px] leading-snug text-warm-500 sm:line-clamp-3">{r.snippet ? <Marked text={lineOf(r.snippet)} terms={terms} /> : r.topicLabel}</span>
                      </span>
                      {r.snippet ? <span className="mt-0.5 hidden shrink-0 text-[11.5px] font-medium text-warm-400 sm:block">{r.topicLabel}</span> : null}
                      <CornerDownLeft aria-hidden="true" className={cn('mt-1 hidden h-3.5 w-3.5 shrink-0 text-warm-400 sm:block', !on && 'invisible')} />
                    </Link>
                  </li>
                )
              })}
            </ul>
          </>
        )}
      </div>

      <div className="hidden shrink-0 items-center gap-5 border-t border-warm-100 bg-warm-50/70 px-5 py-2.5 text-[12px] text-warm-500 sm:flex">
        <span className="inline-flex items-center gap-1.5">
          <Key>↑</Key>
          <Key>↓</Key>
          to move
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Key>↵</Key>
          to open
        </span>
        <span className="ml-auto">The articles Fork Support answers from</span>
      </div>
    </>
  )
}

/**
 * Around every Docs page (app/docs/layout.tsx): holds the palette and the keys that open it.
 *   popular: where a new reader usually starts, offered before a word is typed
 */
export function DocsSearchProvider({ popular, children }: { popular: DocsSuggestion[]; children: React.ReactNode }) {
  const [open, setOpen] = useState(false)
  const show = useCallback(() => setOpen(true), [])
  const close = useCallback(() => setOpen(false), [])

  // "/" jumps to the search, as on most docs sites, and so does Cmd/Ctrl K
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && !e.altKey && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setOpen((was) => !was)
        return
      }
      if (e.key !== '/' || e.metaKey || e.ctrlKey || e.altKey) return
      const el = document.activeElement as HTMLElement | null
      if (el && (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA' || el.tagName === 'SELECT' || el.isContentEditable)) return
      e.preventDefault()
      setOpen(true)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <SearchContext.Provider value={show}>
      {children}
      <Dialog.Root open={open} onOpenChange={setOpen}>
        <Dialog.Portal>
          <Dialog.Overlay className="animate-in fade-in-0 fixed inset-0 z-[60] bg-warm-950/30 backdrop-blur-[3px]" />
          <Dialog.Content
            aria-describedby={undefined}
            className="animate-in zoom-in-95 fixed left-1/2 top-3 z-[60] flex max-h-[min(calc(100dvh-1.5rem),38rem)] w-[min(40rem,calc(100vw-1.5rem))] -translate-x-1/2 flex-col overflow-hidden rounded-[28px] border border-warm-200 bg-white shadow-[0_40px_90px_-30px_rgba(27,26,25,0.5)] outline-none sm:top-[12vh] sm:max-h-[min(76vh,38rem)]"
          >
            <Dialog.Title className="sr-only">Search the docs</Dialog.Title>
            <SearchPanel popular={popular} onClose={close} />
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </SearchContext.Provider>
  )
}

/**
 * A search field to look at, a button to use: it opens the palette.
 *   size: 'lg' is the Docs home's, with its own Search button drawn in it; 'md' the sidebar's and the phone bar's
 */
export function DocsSearchTrigger({ size = 'md', className }: { size?: 'md' | 'lg'; className?: string }) {
  const show = useContext(SearchContext)
  const lg = size === 'lg'
  return (
    <button
      type="button"
      onClick={() => show?.()}
      aria-label="Search the docs"
      aria-haspopup="dialog"
      className={cn(
        'group flex w-full items-center rounded-full border border-warm-200 bg-white text-left text-warm-400 outline-none transition-[border-color,box-shadow] hover:border-warm-300 focus-visible:border-warm-400 focus-visible:ring-[3px] focus-visible:ring-warm-950/10',
        lg ? 'h-[60px] gap-3 pl-6 pr-2 text-[17px] shadow-[0_18px_40px_-24px_rgba(27,26,25,0.35)] hover:shadow-[0_22px_48px_-24px_rgba(27,26,25,0.45)]' : 'h-10 gap-2.5 pl-3.5 pr-2 text-[14px]',
        className,
      )}
    >
      <Search className={cn('shrink-0', lg ? 'h-5 w-5' : 'h-4 w-4')} aria-hidden="true" />
      <span className="min-w-0 flex-1 truncate">Search the docs</span>
      {lg ? (
        <span className="inline-flex h-11 shrink-0 items-center rounded-full bg-warm-950 px-5 text-[15px] font-medium text-white transition-colors group-hover:bg-warm-800">Search</span>
      ) : (
        <kbd aria-hidden="true" className="hidden h-6 min-w-6 shrink-0 items-center justify-center rounded-full border border-warm-200 bg-warm-50 px-1.5 font-mono text-[11px] leading-none text-warm-500 lg:inline-flex">
          /
        </kbd>
      )}
    </button>
  )
}
