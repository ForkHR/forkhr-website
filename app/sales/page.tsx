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
  { icon: <Tags className="h-4 w-4" />, title: 'Catalog and customers', desc: 'Import from a spreadsheet. A price list per customer.' },
  { icon: <Receipt className="h-4 w-4" />, title: 'Orders come in', desc: 'In the app, by email, or standing orders that create themselves.' },
  { icon: <Truck className="h-4 w-4" />, title: 'Deliver on a route', desc: 'Stops in the best order. A photo at each one.' },
  { icon: <Landmark className="h-4 w-4" />, title: 'Invoice and get paid', desc: 'Pay link and QR code. Card or bank. Paid out to you.' },
]

const more = [
  { icon: <Tags className="h-5 w-5" />, title: 'Price lists per customer', desc: 'Each customer sees their items at their prices.' },
  { icon: <RefreshCw className="h-5 w-5" />, title: 'Standing orders', desc: 'Every Monday, 24 sourdough. Generated ahead, emailed for confirmation.' },
  { icon: <PackageCheck className="h-5 w-5" />, title: 'Issues and credits', desc: 'A short case becomes a credit on the invoice.' },
  { icon: <FileSpreadsheet className="h-5 w-5" />, title: 'Imports', desc: 'Customers, items and open orders from a spreadsheet.' },
  { icon: <UserCheck className="h-5 w-5" />, title: 'Customers can claim their side', desc: 'Sign up later with the email on file and order in the app.' },
  { icon: <Boxes className="h-5 w-5" />, title: 'Seller inventory', desc: 'Stock per item and location.' },
  { icon: <BarChart3 className="h-5 w-5" />, title: 'Sales reports', desc: 'Revenue by customer. Which items move.' },
  { icon: <Users className="h-5 w-5" />, title: 'A chat per customer', desc: 'On Fork or by email. Replies come back to the thread.' },
]

export default function SalesPage() {
  return (
    <main className="pt-16">
      <Hero
        crumb={{ label: 'Products', href: '/products', current: 'Sell through Fork' }}
        plan="free"
        title="Sell to your customers and get paid. No account needed on their side."
        lede="Catalog, orders, routes and invoices. Customers pay from a link or a QR code. Money lands in your bank."
        secondaryHref="#payments"
        secondaryLabel="How you get paid"
        note={`Free. A ${feePct}% fee only when a customer pays online.`}
        aside={
          <Window title="Fork · Sales · Order S-2088">
            <InvoicePreview />
          </Window>
        }
      />

      <section className="border-b border-warm-100">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <SectionHeading eyebrow="How selling works" title="From order to money in the bank" lede="For bakeries, roasters, farms, commissaries and distributors." />
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
        lede="The customer gets an email with a pay link. The PDF carries a QR code. Stripe moves the money to your bank."
        bullets={['Terms per customer: prepaid, COD, Net 7 to 60', 'Card and US bank transfer', 'Credits come off the invoice automatically']}
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
        lede="Pick the orders. Fork orders the stops. The driver checks each one off with a photo."
        bullets={['Stops ordered on real road distances', 'ETA per stop', 'Proof of delivery kept on the order']}
        preview={<RoutePreview />}
        previewTitle="Fork · Routes · Thu, Sep 25"
      />

      <FeatureRow
        id="chat"
        eyebrow="Customer chat"
        plan="free"
        title="Every customer gets a conversation"
        lede="On Fork, it is a chat. Not on Fork, it is an email that comes back as chat."
        bullets={['Confirmations and invoices from the same thread', 'Replies threaded back, attachments included', 'Email off? The address stays as contact info']}
        preview={<VendorChatPreview role="customer" />}
        previewTitle="Fork · Chat · Corner Café"
        className="bg-warm-50"
      />

      <section id="customers" className="scroll-mt-24 border-b border-warm-100">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <SectionHeading eyebrow="Also included" title="The rest of the wholesale side" />
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

      <section className="border-b border-warm-100 bg-warm-50">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <div className="grid items-start gap-12 md:grid-cols-[1fr_1.2fr] md:gap-16">
            <SectionHeading eyebrow="What it costs" title="Free to sell. A small fee only when money moves online." />
            <div className="surface divide-y divide-warm-100">
              {[
                { l: 'Catalog, customers, orders, routes, chat', v: '$0', d: 'Unlimited' },
                { l: 'Invoices settled outside Fork', v: '$0', d: 'Mark them paid' },
                { l: 'Invoices paid online', v: `${feePct}%`, d: 'On the pre-tax amount, plus Stripe processing' },
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
                <ShieldCheck className="h-4 w-4 text-forest-600" /> Stripe processes payments. Fork never stores card or bank details.
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaSection eyebrow="Free plan" title="Start selling through Fork" lede="Add your catalog and customers today. Invoice your first order this week." />
    </main>
  )
}
