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
  { icon: <Store className="h-5 w-5" />, title: 'Vendor market', desc: 'Browse vendors by category, see who delivers to your address and connect in one click. Add any other vendor by name and email.' },
  { icon: <CalendarClock className="h-5 w-5" />, title: 'Terms per vendor and location', desc: 'Delivery days, order cutoff, lead time, minimum order and free-delivery threshold, so the order form only offers what is possible.' },
  { icon: <RefreshCw className="h-5 w-5" />, title: 'Standing orders', desc: 'The same order every week, created ahead of time and emailed to the vendor. Change one week without touching the rest.' },
  { icon: <PackageCheck className="h-5 w-5" />, title: 'Receive and check in', desc: 'Tick items off as the truck is unloaded, log short or damaged items as issues and request a credit from the vendor.' },
  { icon: <Receipt className="h-5 w-5" />, title: 'Invoices payable', desc: 'Vendor invoices next to the order they belong to, with what is due and when. Pay vendors on Fork in the app.' },
  { icon: <FileText className="h-5 w-5" />, title: 'Vendor documents', desc: 'Certificates, price lists and agreements kept on the vendor, where the person ordering can find them.' },
  { icon: <BarChart3 className="h-5 w-5" />, title: 'Purchasing reports', desc: 'Purchases summary, product spending, product usage and disputes, by vendor, location and period.' },
  { icon: <Truck className="h-5 w-5" />, title: 'Fork Warehouse', desc: 'Order shared essentials from Fork\'s own warehouse when it delivers in your area.' },
]

export default function SupplyPage() {
  return (
    <main className="pt-16">
      <Hero
        crumb={{ label: 'Products', href: '/products', current: 'Supply' }}
        plan="free"
        title="Every vendor order in one place, whether or not the vendor is on Fork"
        lede="Place one-time and standing orders, chat with vendors over email, receive deliveries, log issues and count stock. Free, with unlimited vendors and catalog items."
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
        lede="Build an order from the vendor's catalog, or from what your last count says is short. It goes out as an email with a PDF, the vendor confirms, and you check it in when the truck arrives."
        bullets={[
          'One-time orders in a few taps, standing orders on a schedule',
          'Vendor confirms by reply, in the app or by email, and the status updates',
          'Delivery days, cutoffs and minimums enforced as you order',
          'Issues and credits on the delivered order, reflected on the invoice',
        ]}
        preview={<SupplyPreview />}
        previewTitle="Fork · Supply · Orders"
      />

      <FeatureRow
        id="chat"
        flip
        eyebrow="Vendor chat"
        plan="free"
        title="Talk to vendors where the order lives"
        lede="Each vendor has one conversation next to its orders. If the vendor is on Fork, it is a chat. If not, your message is emailed from the thread and their reply is threaded back, attachments and all. No forwarding, no lost emails."
        bullets={[
          'One conversation per vendor, shared by everyone who orders',
          'Email bridge for vendors who are not on Fork',
          'Order updates and invoices attached where they were discussed',
          'Free on every plan',
        ]}
        preview={<VendorChatPreview role="vendor" />}
        previewTitle="Fork · Chat · Bluebird Dairy"
        className="bg-warm-50"
      />

      {/* Inventory */}
      <section id="inventory" className="scroll-mt-24 border-b border-warm-100">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid items-start gap-12 md:grid-cols-[1fr_1.2fr] md:gap-16">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="eyebrow">Stock counts</span>
                <PlanBadge tier="essential" />
              </div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-warm-950 md:text-4xl">Count on a phone, reorder in a tap</h2>
              <p className="mt-4 text-lg leading-relaxed text-warm-600">
                Count lists per location and storage area, with a par level on every item. Shortfalls turn into a suggested order for the right vendor, and counts feed the product usage report.
              </p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { icon: <ClipboardList className="h-4 w-4" />, t: 'Count lists', d: 'Walk-in, dry storage, bar. Assign a list to a job and a day.' },
                { icon: <MapPin className="h-4 w-4" />, t: 'Per location', d: 'Each site counts its own stock against its own pars.' },
                { icon: <RefreshCw className="h-4 w-4" />, t: 'Straight into orders', d: 'What is short goes onto the next order for that vendor.' },
                { icon: <BarChart3 className="h-4 w-4" />, t: 'Usage over time', d: 'Average purchase volume per day, week or month, per product.' },
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

      {/* Included */}
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

      <CtaSection eyebrow="Free plan" title="Move your ordering to Fork this week" lede="Add your vendors by name and email, place the next order from the app, and stop hunting through your inbox for confirmations." />
    </main>
  )
}
