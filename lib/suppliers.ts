// The public supplier directory, forkhr.com/suppliers: one page per vendor with an open storefront
// on Fork, read from the app API's directory (no login, nothing internal: never a price, a cost or
// the seller's delivery polygon). The pages are static with ISR (REVALIDATE_SECONDS) and
// `generateStaticParams` comes from this list. An API that is unreachable at build time leaves an
// empty directory ("Suppliers are being added") and no detail pages, never a failed build.
// The storefront itself (ordering) stays in the app: app.forkhr.com/v/<slug>.
import { API_URL, APP_URL, registerUrl } from '@/lib/site'

export const SITE_URL = 'https://forkhr.com'
export const REVALIDATE_SECONDS = 3600

const PAGE_SIZE = 100
const MAX_PAGES = 20
const TIMEOUT_MS = 10_000
const SLUG_RE = /^[a-z0-9]+(?:-[a-z0-9]+)*$/
const DESCRIPTION_LENGTH = 160

export type Supplier = {
  slug: string
  name: string
  /** Full URLs (the public bucket), '' when the seller has none. */
  logo: string
  coverImage: string
  /** '#rrggbb', or '' when the seller kept the default. */
  brandColor: string
  intro: string
  city: string
  state: string
  categories: string[]
  /** One line: "Delivers around Brooklyn, NY", "Delivers within 25 miles of …", "Based in …" or ''. */
  delivery: string
  productCount: number
  customersOnFork: number
  updatedAt: string | null
}

export type SupplierCategory = { name: string; count: number; sample: string[] }

export type SupplierEntry = { seller: Supplier; categories: SupplierCategory[]; services: string[] }

/** GET the API's `data`, or null for any failure (network, timeout, 404, 429, 5xx, bad JSON). */
const getData = async <T,>(path: string): Promise<T | null> => {
  try {
    const res = await fetch(`${API_URL}${path}`, {
      next: { revalidate: REVALIDATE_SECONDS },
      signal: AbortSignal.timeout(TIMEOUT_MS),
      headers: { Accept: 'application/json' },
    })
    if (!res.ok) return null
    const json = (await res.json()) as { data?: T }
    return json?.data ?? null
  } catch {
    return null
  }
}

/** Every listed supplier, by name. Empty when the API cannot be reached. */
export const fetchSuppliers = async (): Promise<Supplier[]> => {
  const out: Supplier[] = []
  for (let page = 1; page <= MAX_PAGES; page += 1) {
    const data = await getData<{ sellers: Supplier[]; total: number }>(`/public/sellers?page=${page}&limit=${PAGE_SIZE}`)
    if (!data || !Array.isArray(data.sellers)) break
    out.push(...data.sellers.filter((s) => s && SLUG_RE.test(String(s.slug))))
    if (data.sellers.length < PAGE_SIZE || out.length >= (Number(data.total) || 0)) break
  }
  return out
}

/** One supplier with its catalog by category, or null when the slug is not an open storefront. */
export const fetchSupplier = async (slug: string): Promise<SupplierEntry | null> => {
  if (!SLUG_RE.test(slug)) return null
  const data = await getData<SupplierEntry>(`/public/sellers/directory/${encodeURIComponent(slug)}`)
  if (!data?.seller?.slug) return null
  return { seller: data.seller, categories: Array.isArray(data.categories) ? data.categories : [], services: Array.isArray(data.services) ? data.services : [] }
}

/** The app's storefront, where orders are placed. */
export const storefrontUrl = (slug: string) => `${APP_URL}/v/${encodeURIComponent(slug)}`
/** The sign-up a supplier takes to claim its page (the app's "What will you use Fork for?" set to selling). */
export const CLAIM_URL = registerUrl({ use: 'sales' })

export const supplierPath = (slug: string) => `/suppliers/${encodeURIComponent(slug)}`
export const placeOf = (s: Pick<Supplier, 'city' | 'state'>) => [s.city, s.state].filter(Boolean).join(', ')
export const itemsLabel = (n: number) => `${n} ${n === 1 ? 'item' : 'items'}`
export const initialsOf = (name: string) =>
  name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join('') || 'F'

/** "<Name> · <City> supplier on Fork" (no city: "<Name> · supplier on Fork"). */
export const supplierTitle = (s: Pick<Supplier, 'name' | 'city'>) => `${s.name} · ${s.city ? `${s.city} ` : ''}supplier on Fork`

/** The meta description: the intro, else the name, place, categories and delivery line. */
export const supplierDescription = (s: Supplier) => {
  const intro = (s.intro || '').replace(/\s+/g, ' ').trim()
  if (intro) return intro.length <= DESCRIPTION_LENGTH ? intro : `${intro.slice(0, DESCRIPTION_LENGTH - 1).trimEnd()}…`
  const place = placeOf(s)
  const categories = (s.categories || []).slice(0, 4).join(', ')
  return `${s.name}${place ? `, ${place}` : ''}${categories ? `: ${categories}` : ''}. ${s.delivery ? `${s.delivery}. ` : ''}Browse what they carry and order on Fork.`
}
