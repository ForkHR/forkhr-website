import type { Metadata } from 'next'
import { BarChart3, CalendarClock, ClipboardList, FileText, MapPin, PackageCheck, Receipt, RefreshCw, Store, Truck } from 'lucide-react'
import Hero from '@/components/marketing/Hero'
import FeatureRow from '@/components/marketing/FeatureRow'
import SectionHeading from '@/components/marketing/SectionHeading'
import CtaSection from '@/components/marketing/CtaSection'
import PlanBadge from '@/components/marketing/PlanBadge'
import { SupplyPreview, VendorChatPreview, Window } from '@/components/previews'

const description =
  'Order from every vendor in one place, whether or not they use Fork. One-time and standing orders, vendor chat with an email bridge, deliveries, issues and credits, stock counts with par levels, and a market of vendors that deliver to you. Free.'

export const metadata: Metadata = {
  title: 'Supply — Fork | Order from vendors, vendor chat, stock counts',
  description,
  alternates: { canonical: '/supply' },
  openGraph: { title: 'Supply — Fork', description, url: 'https://forkhr.com/supply', images: ['/og-image.png'], type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Supply — Fork', description, images: ['/og-image.png'] },
}

const included = [
  { icon: <Store className="h-5 w-5" />, title: 'Vendor market', desc: 'See who delivers to you. Connect in a click.' },
  { icon: <CalendarClock className="h-5 w-5" />, title: 'Terms per vendor', desc: 'Delivery days, cutoffs, minimums.' },
  { icon: <RefreshCw className="h-5 w-5" />, title: 'Standing orders', desc: 'Same order every week. Change one week only.' },
  { icon: <PackageCheck className="h-5 w-5" />, title: 'Receive and check in', desc: 'Log short items. Request a credit.' },
  { icon: <Receipt className="h-5 w-5" />, title: 'Invoices payable', desc: 'Next to the order they belong to.' },
  { icon: <FileText className="h-5 w-5" />, title: 'Vendor documents', desc: 'Certificates and price lists, on the vendor.' },
  { icon: <BarChart3 className="h-5 w-5" />, title: 'Purchasing reports', desc: 'Spend by vendor, product and period.' },
  { icon: <Truck className="h-5 w-5" />, title: 'Fork Warehouse', desc: 'Shared essentials, where it delivers.' },
]

export default function SupplyPage() {
  return (
    <main className="pt-16">
      <Hero
        crumb={{ label: 'Products', href: '/products', current: 'Supply' }}
        plan="free"
        title="Every vendor order in one place"
        lede="Vendors on Fork or not. Orders, chat, deliveries and stock counts. Free."
        secondaryHref="#chat"
        secondaryLabel="See vendor chat"
        aside={
          <Window title="Fork · Supply · Orders">
            <SupplyPreview />
          </Window>
        }
      />

      <FeatureRow
        eyebrow="Orders"
        plan="free"
        title="Orders that write themselves"
        lede="Build it from the catalog or from what is short. It goes out as email. The vendor confirms."
        bullets={['One-time and standing orders', 'Cutoffs and minimums enforced as you order', 'Issues and credits on the delivered order']}
        preview={<SupplyPreview />}
        previewTitle="Fork · Supply · Orders"
      />

      <FeatureRow
        id="chat"
        flip
        eyebrow="Vendor chat"
        plan="free"
        title="Talk to vendors where the order lives"
        lede="One chat per vendor. Not on Fork? Your message is emailed and the reply comes back as chat."
        bullets={['Shared by everyone who orders', 'Attachments kept on the thread', 'Free on every plan']}
        preview={<VendorChatPreview role="vendor" />}
        previewTitle="Fork · Chat · Bluebird Dairy"
        className="bg-warm-50"
      />

      <section id="inventory" className="scroll-mt-24 border-b border-warm-100">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid items-start gap-12 md:grid-cols-[1fr_1.2fr] md:gap-16">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="eyebrow">Stock counts</span>
                <PlanBadge tier="essential" />
              </div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-warm-950 md:text-4xl">Count on a phone, reorder in a tap</h2>
              <p className="mt-4 text-lg leading-relaxed text-warm-600">Par levels on every item. Shortfalls become an order.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { icon: <ClipboardList className="h-4 w-4" />, t: 'Count lists', d: 'Walk-in, dry storage, bar.' },
                { icon: <MapPin className="h-4 w-4" />, t: 'Per location', d: 'Each site, its own pars.' },
                { icon: <RefreshCw className="h-4 w-4" />, t: 'Straight into orders', d: 'What is short goes on the next order.' },
                { icon: <BarChart3 className="h-4 w-4" />, t: 'Usage over time', d: 'Per product, per week.' },
              ].map((c) => (
                <div key={c.t} className="surface p-5">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-forest-50 text-forest-600">{c.icon}</span>
                  <h3 className="mt-3 text-[15px] font-semibold text-warm-950">{c.t}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-warm-500">{c.d}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="market" className="scroll-mt-24 border-b border-warm-100 bg-warm-50">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <SectionHeading eyebrow="Also included" title="Everything around the order" />
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-warm-200 bg-warm-200 sm:grid-cols-2 lg:grid-cols-4">
            {included.map((m) => (
              <div key={m.title} className="bg-white p-6">
                <div className="mb-3 text-forest-600">{m.icon}</div>
                <h3 className="text-[15px] font-semibold text-warm-950">{m.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-warm-500">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaSection eyebrow="Free plan" title="Move your ordering to Fork this week" lede="Add your vendors by name and email. Place the next order from the app." />
    </main>
  )
}
