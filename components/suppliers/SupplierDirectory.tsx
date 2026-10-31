'use client'

import { useMemo, useState } from 'react'
import { ArrowUpRight, Search, SearchX, Store } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { CLAIM_URL, type Supplier } from '@/lib/suppliers'
import SupplierCard from './SupplierCard'

const MAX_CHIPS = 14

const countLabel = (n: number) => `${n} ${n === 1 ? 'supplier' : 'suppliers'}`

const Chip = ({ active, onClick, children }: { active: boolean; onClick: () => void; children: React.ReactNode }) => (
  <button
    type="button"
    onClick={onClick}
    aria-pressed={active}
    className={cn(
      'shrink-0 rounded-full border px-3.5 py-1.5 text-[13px] font-medium transition-colors',
      active ? 'border-warm-950 bg-warm-950 text-white' : 'border-warm-200 bg-white text-warm-600 hover:border-warm-300 hover:text-warm-950',
    )}
  >
    {children}
  </button>
)

/** The directory with nothing in it: the API had no open storefront to list (or could not be reached when the page was built). */
const EmptyDirectory = () => (
  <section className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-24">
    <div className="mx-auto flex max-w-md flex-col items-start gap-4">
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-warm-100 text-warm-700">
        <Store className="h-5 w-5" />
      </span>
      <h2 className="text-2xl font-semibold tracking-tight text-warm-950">Suppliers are being added</h2>
      <p className="text-[15px] leading-relaxed text-warm-600">Vendors with a public storefront on Fork appear here as they list. Check back soon, or put your own business on the list.</p>
      <Button asChild variant="outline" size="lg" className="h-11 px-6 text-base">
        <a href={CLAIM_URL} target="_blank" rel="noopener noreferrer">
          List your business
          <ArrowUpRight className="ml-1 h-4 w-4" />
        </a>
      </Button>
    </div>
  </section>
)

/**
 * The searchable grid: a search box (name, category, city), category chips and the cards. The
 * list arrives from the server component; filtering is on the client, nothing is fetched here.
 */
export default function SupplierDirectory({ suppliers }: { suppliers: Supplier[] }) {
  const [q, setQ] = useState('')
  const [category, setCategory] = useState<string | null>(null)

  // The most-used categories first, ties alphabetical
  const chips = useMemo(() => {
    const counts = new Map<string, number>()
    suppliers.forEach((s) => (s.categories || []).forEach((c) => {
      const key = String(c || '').trim()
      if (key) counts.set(key, (counts.get(key) || 0) + 1)
    }))
    return [...counts.entries()]
      .sort((a, b) => b[1] - a[1] || a[0].localeCompare(b[0]))
      .slice(0, MAX_CHIPS)
      .map(([name]) => name)
  }, [suppliers])

  const needle = q.trim().toLowerCase()
  const shown = useMemo(
    () =>
      suppliers.filter((s) => {
        if (category && !(s.categories || []).some((c) => c.toLowerCase() === category.toLowerCase())) return false
        if (!needle) return true
        return [s.name, s.city, s.state, ...(s.categories || [])].join(' ').toLowerCase().includes(needle)
      }),
    [suppliers, category, needle],
  )

  if (!suppliers.length) return <EmptyDirectory />

  const clear = () => {
    setQ('')
    setCategory(null)
  }

  return (
    <section className="mx-auto max-w-6xl px-4 py-8 md:px-6 md:py-12" aria-labelledby="directory-heading">
      <h2 id="directory-heading" className="sr-only">
        All suppliers
      </h2>
      <div className="flex flex-col gap-4">
        <label className="relative block w-full max-w-xl">
          <span className="sr-only">Search suppliers</span>
          <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-warm-400" />
          <input
            type="search"
            value={q}
            onChange={(e) => setQ(e.target.value)}
            placeholder="Search by name, category or city"
            autoComplete="off"
            className="h-12 w-full rounded-full border border-warm-200 bg-white pl-11 pr-4 text-[15px] text-warm-950 outline-none transition-colors placeholder:text-warm-400 focus:border-warm-400 focus:ring-[3px] focus:ring-warm-950/10"
          />
        </label>
        {chips.length > 0 && (
          <div className="-mx-4 flex gap-2 overflow-x-auto px-4 pb-1 [scrollbar-width:none] md:mx-0 md:flex-wrap md:px-0 [&::-webkit-scrollbar]:hidden" role="group" aria-label="Filter by category">
            <Chip active={!category} onClick={() => setCategory(null)}>
              All
            </Chip>
            {chips.map((c) => (
              <Chip key={c} active={category === c} onClick={() => setCategory(category === c ? null : c)}>
                {c}
              </Chip>
            ))}
          </div>
        )}
      </div>

      <p className="mt-6 text-[13px] text-warm-500" aria-live="polite">
        {shown.length === suppliers.length ? countLabel(suppliers.length) : `${shown.length} of ${countLabel(suppliers.length)}`}
        {category ? ` in ${category}` : ''}
        {needle ? ` matching “${q.trim()}”` : ''}
      </p>

      {shown.length ? (
        <ul className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {shown.map((s) => (
            <li key={s.slug} className="flex min-w-0">
              <SupplierCard supplier={s} />
            </li>
          ))}
        </ul>
      ) : (
        <div className="mt-4 flex flex-col items-start gap-3 rounded-2xl border border-dashed border-warm-200 px-6 py-12">
          <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl bg-warm-100 text-warm-600">
            <SearchX className="h-5 w-5" />
          </span>
          <p className="text-lg font-semibold text-warm-950">No suppliers match</p>
          <p className="text-[14px] text-warm-500">Try another name or city, or clear the filters.</p>
          <Button variant="outline" size="sm" onClick={clear} className="mt-1">
            Clear filters
          </Button>
        </div>
      )}
    </section>
  )
}
