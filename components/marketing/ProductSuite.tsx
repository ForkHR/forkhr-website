import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { productGroups, sellingGroup } from '@/components/navigation/nav-data'
import SectionHeading from './SectionHeading'

/**
 * Everything a café runs on, at a glance: four plain columns, one per who it is for (your team,
 * your shop, your vendors, your customers), each tool an icon and its name, as the header's menu
 * draws them (nav-data). It was four cards of pitches and two-line rows until the owner called it
 * crowded (2026-11-23). Selling to cafés is a line under them that leads to For suppliers.
 */
export default function ProductSuite({
  title = 'Everything a café runs on, in one app',
  lede = 'Sauce can do the work because it is all in one place: the team, the shop, what you buy and what your customers see.',
}: {
  title?: string
  lede?: string
}) {
  return (
    <section id="suite" className="border-b border-warm-100 bg-warm-50">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <SectionHeading title={title} lede={lede} />
        <div className="mt-12 grid gap-x-8 gap-y-10 sm:grid-cols-2 lg:grid-cols-4">
          {productGroups.map((g) => (
            <div key={g.key} className="border-t border-warm-200 pt-5">
              <div className="flex items-center gap-2">
                <h3 className="text-[17px] font-semibold tracking-tight text-warm-950">{g.label}</h3>
                {g.free && <span className="rounded-full bg-ok-50 px-2 py-0.5 text-[11px] font-semibold text-ok-700">Free</span>}
              </div>
              <ul className="-mx-2 mt-3">
                {g.items.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="group flex items-center gap-3 rounded-lg px-2 py-2 transition-colors hover:bg-white">
                      <item.icon className="h-4 w-4 shrink-0 text-warm-500 transition-colors group-hover:text-warm-950" />
                      <span className="text-[15px] font-medium text-warm-800 group-hover:text-warm-950">{item.name}</span>
                      {item.badge && <span className="rounded-full bg-forest-50 px-1.5 py-px text-[11px] font-semibold text-forest-700">{item.badge}</span>}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap items-center justify-between gap-3 text-[15px] text-warm-600">
          <span>Selling to cafés and restaurants? Orders, a storefront, routes and invoices, free.</span>
          <Link href={sellingGroup.items[0].href} className="inline-flex items-center gap-1.5 font-medium text-warm-950 hover:underline">
            Fork for suppliers
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
