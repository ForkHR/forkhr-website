import type { Metadata } from 'next'
import { BarChart3, CalendarClock, ClipboardList, FileText, MapPin, PackageCheck, Receipt, RefreshCw, Store, Truck } from 'lucide-react'
import Hero from '@/components/marketing/Hero'
import SectionHeading from '@/components/marketing/SectionHeading'
import DayTimeline, { type DayStop } from '@/components/marketing/DayTimeline'
import CtaSection from '@/components/marketing/CtaSection'
import PlanBadge from '@/components/marketing/PlanBadge'
import { ReceivingPreview, SupplyPreview, VendorChatPreview, Window } from '@/components/previews'
import { registerUrl } from '@/lib/site'

const description =
  'Order from every vendor in one place, whether or not they use Fork. One-time and standing orders, vendor chat with an email bridge, deliveries, issues and credits, stock counts with par levels, and a market of vendors that deliver to you. Free.'

export const metadata: Metadata = {
  title: 'Supply — Fork | Order from vendors, vendor chat, stock counts',
  description,
  alternates: { canonical: '/supply' },
  openGraph: { title: 'Supply — Fork', description, url: 'https://forkhr.com/supply', images: ['/og-image.png'], type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Supply — Fork', description, images: ['/og-image.png'] },
}

// A week of one café's ordering. Bluebird Dairy is not on Fork. Names and times match the demos:
// order #1042 for Thursday 6:30 AM, the 8:12 → 8:19 thread that takes it to 18 gallons, the
// check-in that flags a short, an extra and a damaged case. For a vendor not on Fork the café
// records the credit they agreed (orderControllers resolveLineIssue).
const order: DayStop[] = [
  { kind: 'moment', day: 'Tue', time: '9:30 PM', app: 'Stock counts', where: 'Main St', text: 'Closing count: whole milk at 4 gallons. Par is 12.', tag: 'Below par', tone: 'warn' },
  { kind: 'moment', day: 'Tue', time: '9:34 PM', app: 'Supply', where: 'Bluebird Dairy', text: "What was short went on Thursday's order, #1042, and out as an email.", tag: 'Sent', tone: 'brand' },
  {
    kind: 'feature',
    id: 'chat',
    day: 'Wed',
    time: '8:12 AM',
    eyebrow: 'Vendor chat',
    plan: 'free',
    title: 'Six more gallons, without a phone call',
    lede: "One chat per vendor, next to its orders. Bluebird isn't on Fork, so your message went out as an email and their reply came back here.",
    bullets: ['Shared by everyone who orders', 'Attachments kept on the thread', 'Free on every plan'],
    preview: <VendorChatPreview role="vendor" />,
    previewTitle: 'Fork · Chat · Bluebird Dairy',
  },
  {
    kind: 'feature',
    id: 'receiving',
    day: 'Thu',
    time: '6:30 AM',
    eyebrow: 'Receiving',
    plan: 'free',
    title: 'Checked in at the back door, line by line',
    lede: 'Count what came off the truck on a phone. Short, extra or damaged? Flag it with a photo and say what you want: a credit, a return, or to keep it and pay.',
    bullets: ['Short, extra, damaged, spoiled or wrong item', 'Every issue goes to the vendor in one message', 'Not on Fork? They get it by email'],
    preview: <ReceivingPreview />,
    previewTitle: 'Fork · Order #1042',
    frame: 'phone',
  },
  { kind: 'moment', day: 'Fri', time: '10:15 AM', app: 'Chat', where: 'Bluebird Dairy', text: 'Bluebird replied by email: the butter and the eggs come off the next invoice. Credit recorded on #1042.', tag: 'Credit recorded', tone: 'ok' },
  { kind: 'moment', day: 'Mon', time: '6:00 AM', app: 'Standing orders', where: 'Fork Warehouse', text: "This week's standing order is ready, the same as every Monday.", tag: 'Standing', tone: 'neutral' },
]

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
      <Hero registerHref={registerUrl({ use: 'purchasing' })}
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

      <section id="story" className="scroll-mt-24 border-b border-warm-100 bg-warm-50">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <SectionHeading
            eyebrow="An order on Fork"
            title="From a low count to the next delivery"
            lede="One week at a café's walk-in. Bluebird Dairy isn't on Fork, and nobody had to pick up the phone."
          />
          <div className="mt-14 md:mt-16">
            <DayTimeline stops={order} rail="weeks" surface="paper" />
          </div>
        </div>
      </section>

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

      <CtaSection registerHref={registerUrl({ use: 'purchasing' })} eyebrow="Free plan" title="Move your ordering to Fork this week" lede="Add your vendors by name and email. Place the next order from the app." />
    </main>
  )
}
