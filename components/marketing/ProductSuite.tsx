import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { productGroups } from '@/components/navigation/nav-data'
import SectionHeading from './SectionHeading'

/**
 * Everything Fork does, at a glance: the header's product menu laid out as three columns, one
 * per side of the business. Same data as the menu and the footer (nav-data).
 */
export default function ProductSuite() {
  return (
    <section className="border-b border-warm-100 bg-warm-50">
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <SectionHeading eyebrow="One app" title="Three sides of the business. One login." lede="Team, operations and money, on the web and on every phone. Each part knows about the others." />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {productGroups.map((g) => (
            <div key={g.label} className="surface flex flex-col p-2">
              <div className="rounded-xl bg-warm-50 px-4 pb-4 pt-4">
                <div className="flex items-center gap-2">
                  <h3 className="text-[17px] font-semibold tracking-tight text-warm-950">{g.label}</h3>
                  {g.free && <span className="rounded-full bg-ok-50 px-2 py-0.5 text-[11px] font-semibold text-ok-700">Free plan</span>}
                </div>
                <p className="mt-1.5 text-[14px] leading-relaxed text-warm-600">{g.pitch}</p>
              </div>
              <ul className="mt-1 flex-1">
                {g.items.map((item) => (
                  <li key={item.name}>
                    <Link href={item.href} className="group flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-warm-50">
                      <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-warm-100 text-warm-700 transition-colors group-hover:bg-forest-50 group-hover:text-forest-600">
                        <item.icon className="h-4 w-4" />
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="flex items-center gap-1.5 text-[14px] font-semibold text-warm-900">
                          {item.name}
                          {item.badge && <span className="rounded-full bg-forest-50 px-1.5 py-px text-[9.5px] font-bold uppercase tracking-wider text-forest-600">{item.badge}</span>}
                        </span>
                        <span className="hidden text-[12.5px] leading-snug text-warm-500 sm:block">{item.desc}</span>
                      </span>
                      <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-warm-300 transition-colors group-hover:text-warm-950" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
