import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import Backdrop from '@/components/visual/Backdrop'
import { Button } from '@/components/ui/button'
import SupplierDirectory from '@/components/suppliers/SupplierDirectory'
import { CLAIM_URL, SITE_URL, fetchSuppliers, supplierPath } from '@/lib/suppliers'

// Static with ISR: rebuilt in the background once an hour from the app API's directory
export const revalidate = 3600

const title = 'Supplier directory — Vendors you can order from on Fork'
const description =
  'Produce, dairy, seafood, coffee, packaging and repairs: every supplier listed here takes orders through Fork. Browse what they carry and where they deliver, then order from the app, free for buyers.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/suppliers' },
  openGraph: { title, description, url: `${SITE_URL}/suppliers`, images: ['/og-image.png'], type: 'website' },
  twitter: { card: 'summary_large_image', title, description, images: ['/og-image.png'] },
}

const JSON_LD_LIMIT = 100
// A seller's text goes through JSON.stringify; "<" is escaped too so no name can close the script tag
const jsonLd = (value: unknown) => JSON.stringify(value).replace(/</g, '\\u003c')

export default async function SuppliersPage() {
  const suppliers = await fetchSuppliers()
  const itemList = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name: 'Suppliers on Fork',
    numberOfItems: suppliers.length,
    itemListElement: suppliers.slice(0, JSON_LD_LIMIT).map((s, i) => ({ '@type': 'ListItem', position: i + 1, name: s.name, url: `${SITE_URL}${supplierPath(s.slug)}` })),
  }

  return (
    <main className="pt-16">
      <section className="relative overflow-hidden border-b border-warm-100">
        <Backdrop />
        <div className="relative mx-auto max-w-6xl px-4 pb-10 pt-12 md:px-6 md:pb-14 md:pt-24">
          <div className="max-w-3xl">
            <span className="eyebrow mb-4">Supplier directory</span>
            <h1 className="text-4xl font-semibold leading-[1.05] tracking-[-0.02em] text-warm-950 sm:text-5xl md:text-6xl">Suppliers you can order from on Fork</h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-warm-600 md:text-xl">
              Every business here has a storefront on Fork: browse what they carry and where they deliver, then place the order from the app. Free for buyers, no card needed.
            </p>
            {suppliers.length > 0 && (
              <p className="mt-5 text-sm text-warm-400">
                {suppliers.length} {suppliers.length === 1 ? 'supplier' : 'suppliers'} listed · Updated hourly
              </p>
            )}
          </div>
        </div>
      </section>

      <SupplierDirectory suppliers={suppliers} />

      <section className="border-t border-warm-100 bg-warm-50">
        <div className="mx-auto flex max-w-6xl flex-col gap-5 px-4 py-12 md:flex-row md:items-center md:justify-between md:px-6 md:py-16">
          <div className="max-w-xl">
            <h2 className="text-2xl font-semibold tracking-tight text-warm-950 md:text-3xl">Sell to the shops already on Fork</h2>
            <p className="mt-2 text-[15px] leading-relaxed text-warm-600">
              List your catalog, take orders and get paid online. A listed storefront gets its own page here.{' '}
              <Link href="/storefront" className="font-medium text-forest-600 hover:text-forest-700">
                How the storefront works
              </Link>
            </p>
          </div>
          <Button asChild size="lg" className="h-11 shrink-0 px-6 text-base">
            <a href={CLAIM_URL} target="_blank" rel="noopener noreferrer">
              List your business
              <ArrowUpRight className="ml-1.5 h-4 w-4" />
            </a>
          </Button>
        </div>
      </section>

      {suppliers.length > 0 && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(itemList) }} />}
    </main>
  )
}
