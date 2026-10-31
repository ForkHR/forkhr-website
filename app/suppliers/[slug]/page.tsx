import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { ArrowRight, ArrowUpRight, ChevronRight, MapPin, Package, Store, Truck, Users, Wrench } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { CategoryPills, SupplierCover, SupplierLogo } from '@/components/suppliers/SupplierVisuals'
import { CLAIM_URL, SITE_URL, fetchSupplier, fetchSuppliers, itemsLabel, placeOf, storefrontUrl, supplierDescription, supplierPath, supplierTitle, type SupplierCategory } from '@/lib/suppliers'

// Static with ISR: every listed slug is built, an unknown one is tried on request, and each page
// is rebuilt in the background once an hour from the app API's directory
export const revalidate = 3600
export const dynamicParams = true

type Params = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  const suppliers = await fetchSuppliers()
  return suppliers.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params
  const entry = await fetchSupplier(slug)
  if (!entry) return { title: 'Supplier not found', robots: { index: false, follow: false } }
  const s = entry.seller
  const title = supplierTitle(s)
  const description = supplierDescription(s)
  const image = s.coverImage || s.logo || '/og-image.png'
  const url = `${SITE_URL}${supplierPath(s.slug)}`
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: supplierPath(s.slug) },
    openGraph: { title, description, url, images: [image], type: 'website', siteName: 'Fork' },
    twitter: { card: s.coverImage ? 'summary_large_image' : 'summary', title, description, images: [image] },
  }
}

// A seller's text goes through JSON.stringify; "<" is escaped too so no name can close the script tag
const jsonLd = (value: unknown) => JSON.stringify(value).replace(/</g, '\\u003c')

const CategoryBlock = ({ category }: { category: SupplierCategory }) => {
  const more = category.count - category.sample.length
  return (
    <li className="surface flex min-w-0 flex-col p-5">
      <div className="flex items-baseline justify-between gap-3">
        <h3 className="min-w-0 truncate text-[16px] font-semibold tracking-tight text-warm-950">{category.name}</h3>
        <span className="shrink-0 rounded-full bg-warm-100 px-2 py-0.5 text-[12px] font-medium text-warm-600">{itemsLabel(category.count)}</span>
      </div>
      <ul className="mt-3 space-y-1.5">
        {category.sample.map((name) => (
          <li key={name} className="flex items-start gap-2 text-[14.5px] leading-snug text-warm-700">
            <span aria-hidden="true" className="mt-[9px] h-1 w-1 shrink-0 rounded-full bg-warm-300" />
            <span className="min-w-0 wrap-break-word">{name}</span>
          </li>
        ))}
      </ul>
      {more > 0 && <p className="mt-3 text-[13px] text-warm-400">+{more} more on Fork</p>}
    </li>
  )
}

export default async function SupplierPage({ params }: Params) {
  const { slug } = await params
  const entry = await fetchSupplier(slug)
  if (!entry) notFound()
  const { seller: s, categories, services } = entry
  const place = placeOf(s)
  const pageUrl = `${SITE_URL}${supplierPath(s.slug)}`
  const orderUrl = storefrontUrl(s.slug)
  const usState = /^[A-Z]{2}$/.test(s.state || '')

  const business = {
    '@context': 'https://schema.org',
    '@type': place ? 'LocalBusiness' : 'Organization',
    name: s.name,
    description: supplierDescription(s),
    url: pageUrl,
    sameAs: [orderUrl],
    image: s.coverImage || s.logo || undefined,
    logo: s.logo || undefined,
    address: place ? { '@type': 'PostalAddress', addressLocality: s.city || undefined, addressRegion: s.state || undefined, addressCountry: usState ? 'US' : undefined } : undefined,
    areaServed: s.delivery || undefined,
    knowsAbout: s.categories.length ? s.categories : undefined,
  }
  const breadcrumbs = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Suppliers', item: `${SITE_URL}/suppliers` },
      { '@type': 'ListItem', position: 2, name: s.name, item: pageUrl },
    ],
  }

  return (
    <main className="pt-16">
      <section className="border-b border-warm-100 bg-warm-50">
        <div className="mx-auto max-w-6xl px-4 pt-6 md:px-6 md:pt-10">
          <nav aria-label="Breadcrumb" className="mb-4 inline-flex min-w-0 max-w-full items-center gap-1.5 text-sm">
            <Link href="/suppliers" className="shrink-0 text-warm-500 transition-colors hover:text-warm-950">
              Suppliers
            </Link>
            <ChevronRight className="h-3.5 w-3.5 shrink-0 text-warm-300" />
            <span className="min-w-0 truncate font-medium text-warm-950">{s.name}</span>
          </nav>

          <SupplierCover supplier={s} priority className="h-44 rounded-2xl border border-warm-200 sm:h-60 md:h-72" />

          {/* Only the logo rides up over the cover; the name starts under the cover's edge */}
          <div className="relative z-10 flex flex-col gap-4 px-3 pb-8 sm:px-6 md:flex-row md:items-start md:gap-6 md:px-8 md:pb-10">
            <SupplierLogo supplier={s} size={96} className="-mt-9 rounded-2xl border-4 border-white shadow-md md:-mt-12" />
            <div className="min-w-0 flex-1 md:pt-2">
              <h1 className="wrap-break-word text-3xl font-semibold leading-[1.1] tracking-tight text-warm-950 sm:text-4xl md:text-5xl">{s.name}</h1>
              <p className="mt-2 flex flex-wrap items-center gap-x-4 gap-y-1 text-[15px] text-warm-600">
                {place && (
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin className="h-4 w-4 text-warm-400" />
                    {place}
                  </span>
                )}
                {s.delivery && (
                  <span className="inline-flex items-center gap-1.5">
                    <Truck className="h-4 w-4 text-warm-400" />
                    {s.delivery}
                  </span>
                )}
              </p>
              <CategoryPills categories={s.categories} className="mt-3" />
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-10 md:px-6 md:py-14">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_340px] lg:gap-12">
          <div className="order-2 min-w-0 lg:order-1">
            {s.intro && (
              <section aria-labelledby="about-heading">
                <h2 id="about-heading" className="text-xl font-semibold tracking-tight text-warm-950 md:text-2xl">
                  About {s.name}
                </h2>
                <p className="mt-3 whitespace-pre-line text-[16px] leading-relaxed text-warm-600">{s.intro}</p>
              </section>
            )}

            <section aria-labelledby="carry-heading" className={s.intro ? 'mt-10' : ''}>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h2 id="carry-heading" className="text-xl font-semibold tracking-tight text-warm-950 md:text-2xl">
                  What they carry
                </h2>
                <span className="text-[13.5px] text-warm-500">{itemsLabel(s.productCount)} on Fork</span>
              </div>
              {categories.length ? (
                <ul className="mt-5 grid gap-4 sm:grid-cols-2">
                  {categories.map((c) => (
                    <CategoryBlock key={c.name} category={c} />
                  ))}
                </ul>
              ) : (
                <div className="mt-5 flex items-start gap-4 rounded-2xl border border-dashed border-warm-200 px-5 py-6">
                  <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-warm-100 text-warm-600">
                    <Store className="h-4.5 w-4.5" />
                  </span>
                  <div>
                    <p className="text-[15px] font-semibold text-warm-950">The catalog is on Fork</p>
                    <p className="mt-1 text-[14px] text-warm-500">{services.length ? `${s.name} lists services rather than products. ` : ''}Open the storefront to see everything they offer.</p>
                  </div>
                </div>
              )}
            </section>

            {services.length > 0 && (
              <section aria-labelledby="services-heading" className="mt-10">
                <h2 id="services-heading" className="text-xl font-semibold tracking-tight text-warm-950 md:text-2xl">
                  Services
                </h2>
                <ul className="mt-4 grid gap-2.5 sm:grid-cols-2">
                  {services.map((name) => (
                    <li key={name} className="surface flex items-center gap-3 px-4 py-3 text-[15px] text-warm-800">
                      <Wrench className="h-4 w-4 shrink-0 text-forest-600" />
                      <span className="min-w-0 wrap-break-word">{name}</span>
                    </li>
                  ))}
                </ul>
              </section>
            )}
          </div>

          <aside className="order-1 lg:order-2">
            <div className="surface p-5 lg:sticky lg:top-24">
              <p className="text-[12px] font-semibold uppercase tracking-wider text-warm-400">Order on Fork</p>
              <p className="mt-2 text-[15px] leading-relaxed text-warm-600">Browse the full catalog and place orders with {s.name} through Fork. Free for buyers, no card needed.</p>
              <Button asChild size="lg" className="mt-4 h-11 w-full text-base">
                <a href={orderUrl} target="_blank" rel="noopener noreferrer">
                  Order on Fork
                  <ArrowUpRight className="ml-1.5 h-4 w-4" />
                </a>
              </Button>

              <dl className="mt-5 space-y-3 border-t border-warm-100 pt-5">
                <div className="flex items-start gap-3">
                  <Truck className="mt-0.5 h-4 w-4 shrink-0 text-warm-400" />
                  <div className="min-w-0">
                    <dt className="text-[12.5px] text-warm-500">Delivery</dt>
                    <dd className="text-[14.5px] text-warm-800">{s.delivery || 'Ask the supplier'}</dd>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Package className="mt-0.5 h-4 w-4 shrink-0 text-warm-400" />
                  <div className="min-w-0">
                    <dt className="text-[12.5px] text-warm-500">Catalog</dt>
                    <dd className="text-[14.5px] text-warm-800">
                      {itemsLabel(s.productCount)}
                      {categories.length ? ` in ${categories.length} ${categories.length === 1 ? 'category' : 'categories'}` : ''}
                    </dd>
                  </div>
                </div>
                {s.customersOnFork > 0 && (
                  <div className="flex items-start gap-3">
                    <Users className="mt-0.5 h-4 w-4 shrink-0 text-warm-400" />
                    <div className="min-w-0">
                      <dt className="text-[12.5px] text-warm-500">On Fork</dt>
                      <dd className="text-[14.5px] text-warm-800">
                        {s.customersOnFork} {s.customersOnFork === 1 ? 'business orders' : 'businesses order'} from {s.name}
                      </dd>
                    </div>
                  </div>
                )}
              </dl>

              <div className="mt-5 border-t border-warm-100 pt-5">
                <a href={CLAIM_URL} target="_blank" rel="noopener noreferrer" className="group inline-flex flex-wrap items-center gap-x-1.5 text-[14px] text-warm-600">
                  <span>Are you {s.name}?</span>
                  <span className="inline-flex items-center gap-1 font-semibold text-warm-950 group-hover:underline">
                    Claim your page
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </a>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <section className="border-t border-warm-100 bg-warm-50">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-4 py-10 sm:flex-row sm:items-center sm:justify-between md:px-6">
          <p className="text-[15px] text-warm-600">Looking for something else? Every supplier with a storefront on Fork is in the directory.</p>
          <Button asChild variant="outline" className="shrink-0">
            <Link href="/suppliers">
              Browse all suppliers
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(business) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(breadcrumbs) }} />
    </main>
  )
}
