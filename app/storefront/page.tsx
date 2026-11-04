import type { Metadata } from 'next'
import Link from 'next/link'
import { ShieldCheck } from 'lucide-react'
import Hero from '@/components/marketing/Hero'
import SectionHeading from '@/components/marketing/SectionHeading'
import CtaSection from '@/components/marketing/CtaSection'
import DayTimeline, { type DayStop } from '@/components/marketing/DayTimeline'
import StorefrontFeatures from '@/components/marketing/StorefrontFeatures'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { GuestCheckoutPreview, ProductPagePreview, StorefrontInsightsPreview, StorefrontPreview, Window } from '@/components/previews'
import { PLATFORM_FEE_BPS, registerUrl } from '@/lib/site'

const feePct = (PLATFORM_FEE_BPS / 100).toFixed(1).replace(/\.0$/, '')

const description =
  'Your wholesale catalog as an online store on a link you share: shelves by category, a page for every product, a cart that knows your minimum. Customers on Fork order in a few clicks; anyone else checks out as a guest and pays by card. Free to run.'

export const metadata: Metadata = {
  title: 'Online storefront for wholesale — Catalog, product pages and guest checkout',
  description,
  alternates: { canonical: '/storefront' },
  openGraph: { title: 'Your wholesale storefront on Fork', description, url: 'https://forkhr.com/storefront', images: ['/og-image.png'], type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Your wholesale storefront on Fork', description, images: ['/og-image.png'] },
}

const STORE_URL = 'app.forkhr.com/v/northside-roasters'

// Northside Roasters' first order from a stranger. The café orders Tuesday evening, after the 4 pm
// cutoff, so Thursday is the first date the checkout offers. Totals match the demos: two cases of
// oat milk, whole milk and half & half, $154.40 against the $150 minimum.
const story: DayStop[] = [
  { kind: 'moment', day: 'Tue', time: '7:02 PM', app: 'Storefront', where: 'Harbor Bistro', text: 'A café opening next month follows the link in Northside Roasters’ email signature.', tag: 'No account', tone: 'neutral' },
  {
    kind: 'feature',
    id: 'product-pages',
    day: 'Tue',
    time: '7:06 PM',
    eyebrow: 'Product pages',
    plan: 'free',
    title: 'Every answer before the first order',
    lede: 'A card opens the product’s own page: the pictures, the pack, what a piece works out to, and the details a buyer asks about.',
    bullets: ['Brand, origin, storage and specifications', 'Ingredients, allergens and a Nutrition Facts panel', 'A link of its own to share, similar items under it'],
    preview: <ProductPagePreview />,
    previewTitle: `${STORE_URL}/p/oat-milk`,
    frame: 'phone',
  },
  { kind: 'moment', day: 'Tue', time: '7:11 PM', app: 'Cart', where: 'Harbor Bistro', text: '$154.40 of milk and half & half. The $150 minimum is met.', tag: 'Minimum met', tone: 'ok' },
  {
    kind: 'feature',
    id: 'guest-checkout',
    day: 'Tue',
    time: '7:14 PM',
    eyebrow: 'Guest checkout',
    plan: 'free',
    title: 'Paid by card, no account needed',
    lede: 'A short form, one of your next delivery dates, and Stripe’s card page. The money lands in your Stripe account.',
    bullets: ['Only the dates your delivery days and cutoff allow', 'Your minimum, delivery fee and sales tax, priced before paying', 'The address checked against your delivery area'],
    preview: <GuestCheckoutPreview />,
    previewTitle: `${STORE_URL}/checkout`,
  },
  { kind: 'moment', day: 'Tue', time: '7:15 PM', app: 'Sales orders', where: 'Harbor Bistro', text: 'New order tagged Guest, paid by card at checkout. Nothing to invoice.', tag: 'Placed', tone: 'brand' },
  { kind: 'moment', day: 'Tue', time: '7:16 PM', app: 'Email', where: 'Harbor Bistro', text: 'The receipt, with a link to the order and a button to make a free Fork account.', tag: 'Sent', tone: 'neutral' },
  { kind: 'moment', day: 'Thu', time: '6:20 AM', app: 'Sales orders', where: 'Harbor Bistro', text: 'On the café’s doorstep at 6:20, marked delivered like any other order.', tag: 'Delivered', tone: 'ok' },
  {
    kind: 'feature',
    id: 'views',
    day: 'Mon',
    time: '8:00 AM',
    eyebrow: 'Storefront views',
    plan: 'free',
    title: 'See what buyers look for, and what they could not find',
    lede: 'Views against last week, the items that held a buyer’s eye, and the searches that came up empty. Counts only, never who.',
    bullets: ['Most viewed items, last 14 days', 'Searched but not found: add it, or fix a name', 'A Monday email with the week: views, orders, revenue'],
    preview: <StorefrontInsightsPreview />,
    previewTitle: 'Fork · Sales · Set up',
  },
]

const steps = [
  { n: '1', title: 'Add your items', desc: 'Type them, import a sheet, scan a price list or drop in photos named by item number.' },
  { n: '2', title: 'Get listed', desc: 'A logo, your categories, a delivery area and 10 items list you on the marketplace at once. No review.' },
  { n: '3', title: 'Pick your address', desc: 'app.forkhr.com/v/your-name. Show prices if you like, and switch on guest checkout once payouts are set up.' },
]

const faqs = [
  { q: 'Do my buyers need a Fork account?', a: 'No. With guest checkout on, anyone orders and pays by card; customers on Fork sign in and order on their own terms.' },
  { q: 'What does the storefront cost?', a: `Nothing to run. When a guest pays by card, Fork keeps ${feePct}% of the pre-tax amount and Stripe charges its processing fee.` },
  { q: 'Which prices does the page show?', a: 'Your base prices, or none if you switch prices off. A customer on Fork who signs in sees their own price.' },
  { q: 'Can a guest pay later or on terms?', a: 'No, guests pay by card at checkout. Customers on Fork order on the payment terms you set for them.' },
  { q: 'Where does a guest order go?', a: 'Into Sales orders, tagged Guest and already paid. You confirm, ship and deliver it like any other order.' },
  { q: 'Can I see who looked at my page?', a: 'No. You see views, the most viewed items and the searches that found nothing, as counts.' },
  { q: 'Can I refund a guest order?', a: 'Yes, from the order’s payment, like any card payment. Cancelling the order does not refund it by itself.' },
  { q: 'How do I take the page down?', a: 'Clear the page address, or switch off the public catalog. The link then shows nothing.' },
]

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
}

export default function StorefrontPage() {
  return (
    <main className="pt-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <Hero
        registerHref={registerUrl({ use: 'sales' })}
        crumb={{ label: 'Products', href: '/products', current: 'Online storefront' }}
        plan="free"
        title="Your wholesale catalog, as a store anyone can order from"
        lede="Shelves by category, a page for every product, a cart that knows your minimum. Buyers order on Fork, or check out as a guest and pay by card."
        secondaryHref="#story"
        secondaryLabel="See a first order"
        note={`Free. A ${feePct}% fee only when a guest pays by card.`}
        aside={
          <Window title={STORE_URL}>
            <StorefrontPreview />
          </Window>
        }
      />

      <section id="story" className="scroll-mt-24 border-b border-warm-100">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <SectionHeading
            eyebrow="A first order from a link"
            title="From an email signature to a paid order"
            lede="Northside Roasters put its storefront link everywhere it writes. Harbor Bistro had never heard of them on Tuesday."
          />
          <div className="mt-14 md:mt-16">
            <DayTimeline stops={story} rail="weeks" />
          </div>
        </div>
      </section>

      <StorefrontFeatures id="included" className="bg-warm-50" />

      <section id="setup" className="scroll-mt-24 border-b border-warm-100">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <SectionHeading eyebrow="Going live" title="Open in an afternoon" lede="Everything the page shows comes from what you already keep in Fork: items, terms and delivery area." />
          <ol className="mt-12 grid gap-5 md:grid-cols-3">
            {steps.map((s) => (
              <li key={s.n} className="surface p-6">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-warm-950 text-[14px] font-semibold text-white">{s.n}</span>
                <h3 className="mt-4 text-[17px] font-semibold tracking-tight text-warm-950">{s.title}</h3>
                <p className="mt-1.5 text-[15px] leading-relaxed text-warm-600">{s.desc}</p>
              </li>
            ))}
          </ol>
          <p className="mt-6 text-sm text-warm-500">
            Listed sellers with a public catalog also get a page in the{' '}
            <Link href="/suppliers" className="font-medium text-forest-600 hover:text-forest-700">
              Fork supplier directory
            </Link>
            .
          </p>
        </div>
      </section>

      <section id="pricing" className="scroll-mt-24 border-b border-warm-100 bg-warm-50">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <div className="grid items-start gap-12 md:grid-cols-[1fr_1.2fr] md:gap-16">
            <SectionHeading eyebrow="What it costs" title="Free to open. A small fee only when a guest pays by card." />
            <div className="surface divide-y divide-warm-100">
              {[
                { l: 'Storefront, product pages, search', v: '$0', d: 'Unlimited items and views' },
                { l: 'Orders from customers on Fork', v: '$0', d: 'Invoiced on their terms, as usual' },
                { l: 'Guest orders paid by card', v: `${feePct}%`, d: 'On the pre-tax amount, plus Stripe processing' },
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
                <ShieldCheck className="h-4 w-4 shrink-0 text-forest-600" /> Stripe takes the card. Fork never stores card details.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-warm-100">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid gap-12 md:grid-cols-[1fr_1.6fr] md:gap-16">
            <SectionHeading eyebrow="Questions" title="About the storefront" lede="Anything else: support@forkhr.com" />
            <Accordion type="single" collapsible className="w-full border-t border-warm-100">
              {faqs.map((faq, i) => (
                <AccordionItem key={faq.q} value={`faq-${i}`} className="border-warm-100 last:border-b">
                  <AccordionTrigger className="py-5 text-left text-base font-medium text-warm-950 hover:text-warm-600 hover:no-underline">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-[15px] leading-relaxed text-warm-600">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <CtaSection
        registerHref={registerUrl({ use: 'sales' })}
        eyebrow="Free plan"
        title="Open your storefront"
        lede="Add your items, pick your address, share the link. Selling on Fork is free."
        secondaryHref="/sales"
        secondaryLabel="Everything about selling"
      />
    </main>
  )
}
