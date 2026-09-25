import type { Metadata } from 'next'
import { BarChart3, Boxes, FileSpreadsheet, Landmark, PackageCheck, Receipt, RefreshCw, ShieldCheck, Tags, Truck, UserCheck, Users } from 'lucide-react'
import Hero from '@/components/marketing/Hero'
import FeatureRow from '@/components/marketing/FeatureRow'
import SectionHeading from '@/components/marketing/SectionHeading'
import CtaSection from '@/components/marketing/CtaSection'
import { InvoicePreview, RoutePreview, VendorChatPreview, Window } from '@/components/previews'
import { PLATFORM_FEE_BPS } from '@/lib/site'

const feePct = (PLATFORM_FEE_BPS / 100).toFixed(1).replace(/\.0$/, '')

const description =
  'Sell through Fork: catalog, customers, sales and standing orders, delivery routes and invoices. Customers pay by card or US bank transfer from an emailed link or the QR on the PDF, no Fork account needed. Free plan.'

export const metadata: Metadata = {
  title: 'Sell through Fork — Orders, invoices, online payments and delivery routes',
  description,
  alternates: { canonical: '/sales' },
  openGraph: { title: 'Sell through Fork', description, url: 'https://forkhr.com/sales', images: ['/og-image.png'], type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Sell through Fork', description, images: ['/og-image.png'] },
}

const flow = [
  { icon: <Tags className="h-4 w-4" />, title: 'Catalog and customers', desc: 'Import both from a spreadsheet. Give each customer their own price list and the items they buy.' },
  { icon: <Receipt className="h-4 w-4" />, title: 'Orders come in', desc: 'Customers on Fork order in the app. Others call or email and you enter it. Standing orders create themselves.' },
  { icon: <Truck className="h-4 w-4" />, title: 'Deliver on a route', desc: 'Stops in the best order with ETAs. The driver checks off each stop with a photo.' },
  { icon: <Landmark className="h-4 w-4" />, title: 'Invoice and get paid', desc: 'One tap turns the order into an invoice with a pay link and QR. Card or bank transfer, paid out to you.' },
]

const more = [
  { icon: <Tags className="h-5 w-5" />, title: 'Customer-specific catalogs', desc: 'Every customer sees their items at their prices. Link items so a customer\'s "baguette" is your SKU 1041.' },
  { icon: <RefreshCw className="h-5 w-5" />, title: 'Standing orders', desc: 'Every Monday, 24 sourdough. Orders are generated ahead of time and emailed for confirmation.' },
  { icon: <PackageCheck className="h-5 w-5" />, title: 'Issues and credits', desc: 'A short delivery or a damaged crate becomes an issue on the order. Approve a credit and it comes off the invoice.' },
  { icon: <FileSpreadsheet className="h-5 w-5" />, title: 'Imports', desc: 'Bring customers, catalog items and open orders in from a spreadsheet in one go.' },
  { icon: <UserCheck className="h-5 w-5" />, title: 'Customers can claim their side', desc: 'A customer who later signs up with the email on file takes over their account and orders in the app. Or keep it under your control.' },
  { icon: <Boxes className="h-5 w-5" />, title: 'Seller inventory', desc: 'Stock levels per item and location, moved by what you sell and receive.' },
  { icon: <BarChart3 className="h-5 w-5" />, title: 'Sales and catalog reports', desc: 'Revenue by customer and period, which items move and which do not.' },
  { icon: <Users className="h-5 w-5" />, title: 'A conversation per customer', desc: 'Chat with customers on Fork, email the rest from the same thread. Replies come back to the chat.' },
]

export default function SalesPage() {
  return (
    <main className="pt-16">
      <Hero
        crumb={{ label: 'Products', href: '/products', current: 'Sell through Fork' }}
        plan="free"
        title="Sell to your customers and get paid, even if they never sign up"
        lede="Catalog, customers, orders, routes and invoices in one place. Customers pay by card or US bank transfer from an emailed link or the QR code on the PDF, and the money lands in your bank."
        secondaryHref="#payments"
        secondaryLabel="See how you get paid"
        note={`Free, with unlimited customers and items. A ${feePct}% platform fee applies only when a customer pays online.`}
        aside={
          <Window title="Fork · Sales · Order S-2088">
            <InvoicePreview />
          </Window>
        }
      />

      {/* Flow */}
      <section className="border-b border-warm-100">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <SectionHeading eyebrow="How selling works" title="From order to money in the bank" lede="Built for bakeries, roasters, farms, commissaries and distributors that deliver to other businesses." />
          <div className="mt-12 grid gap-8 md:grid-cols-4 md:gap-6">
            {flow.map((f, i) => (
              <div key={f.title} className="border-t-2 border-warm-950 pt-5">
                <div className="flex items-center gap-2">
                  <span className="text-[13px] font-medium tabular-nums text-warm-400">0{i + 1}</span>
                  <span className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-forest-50 text-forest-600">{f.icon}</span>
                </div>
                <h3 className="mt-3 text-lg font-semibold text-warm-950">{f.title}</h3>
                <p className="mt-1.5 text-[15px] leading-relaxed text-warm-600">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <FeatureRow
        id="payments"
        eyebrow="Invoices & payments"
        plan="free"
        title="Invoices that get paid"
        lede="Turn a delivered order into an invoice. The customer gets an email with the PDF and a pay link; the PDF carries a QR code for the ones who print. They pay by card or US bank transfer, Stripe handles the money, and the payout lands in your bank."
        bullets={[
          'Payment terms per customer: prepaid, COD, Net 7, 15, 30 or 60',
          'Card and US bank transfer through Stripe, reminders included',
          'Approved credits from delivery issues come off the invoice automatically',
          'Paid, failed and refunded states sync back to the order, so nothing is chased twice',
          'Optional sales tax through Stripe Tax',
        ]}
        preview={<InvoicePreview />}
        previewTitle="Fork · Sales · Invoice"
        className="bg-warm-50"
      />

      <FeatureRow
        id="routes"
        flip
        eyebrow="Delivery routes"
        plan="free"
        title="Deliver on the best route"
        lede="Pick the day's orders and Fork orders the stops, with ETAs. Your driver gets a Deliveries tab on their phone: stop by stop, with a photo at each one as proof of delivery."
        bullets={[
          'Stop order optimized on real road distances',
          'ETAs per stop, service time included',
          'Proof-of-delivery photos kept on the order',
          'Orders move to Delivered as the driver checks them off',
        ]}
        preview={<RoutePreview />}
        previewTitle="Fork · Routes · Thu, Sep 25"
      />

      <FeatureRow
        id="chat"
        eyebrow="Customer chat"
        plan="free"
        title="Every customer gets a conversation"
        lede="One thread per customer, next to their orders. Customers on Fork chat in the app. Everyone else gets your message as an email and their reply shows up in the thread, attachments included."
        bullets={[
          'Order confirmations and invoices go out from the same conversation',
          'Replies by email are threaded back into the chat',
          'Photos and PDFs from either side are kept on the thread',
          'Turn email off for a customer and the address stays as contact info only',
        ]}
        preview={<VendorChatPreview role="customer" />}
        previewTitle="Fork · Chat · Corner Café"
        className="bg-warm-50"
      />

      {/* More */}
      <section id="customers" className="scroll-mt-24 border-b border-warm-100">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <SectionHeading eyebrow="Also included" title="The rest of running a wholesale side" />
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-warm-200 bg-warm-200 sm:grid-cols-2 lg:grid-cols-4">
            {more.map((m) => (
              <div key={m.title} className="bg-white p-6">
                <div className="mb-3 text-forest-600">{m.icon}</div>
                <h3 className="text-[15px] font-semibold text-warm-950">{m.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-warm-500">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fees */}
      <section className="border-b border-warm-100 bg-warm-50">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <div className="grid items-start gap-12 md:grid-cols-[1fr_1.2fr] md:gap-16">
            <SectionHeading eyebrow="What it costs" title="Free to sell. A small fee only when money moves online." lede="The business model is the subscription for team tools. Selling is free so your customers can be on Fork without anyone paying for them." />
            <div className="surface divide-y divide-warm-100">
              {[
                { l: 'Catalog, customers, orders, routes, chat', v: '$0', d: 'Unlimited, on the Free plan' },
                { l: 'Invoices settled outside Fork', v: '$0', d: 'Mark them paid, no fee' },
                { l: 'Invoices paid online', v: `${feePct}%`, d: 'Platform fee on the pre-tax amount, plus Stripe\'s processing fee' },
              ].map((r) => (
                <div key={r.l} className="flex items-center justify-between gap-6 px-6 py-5">
                  <div>
                    <div className="text-[15px] font-medium text-warm-950">{r.l}</div>
                    <div className="text-sm text-warm-500">{r.d}</div>
                  </div>
                  <div className="shrink-0 text-2xl font-semibold tracking-tight text-warm-950">{r.v}</div>
                </div>
              ))}
              <div className="flex items-center gap-2 px-6 py-4 text-sm text-warm-500">
                <ShieldCheck className="h-4 w-4 text-forest-600" /> Payments are processed by Stripe. Fork never stores card or bank details.
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaSection eyebrow="Free plan" title="Start selling through Fork" lede="Add your catalog and customers today. No card, no clock. Invoice your first order this week." />
    </main>
  )
}
