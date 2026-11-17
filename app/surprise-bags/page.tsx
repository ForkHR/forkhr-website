import type { Metadata } from 'next'
import Link from 'next/link'
import { Ban, CalendarDays, Clock, EyeOff, Leaf, PackageOpen, ShieldCheck, ShoppingBasket, Store, Tag, Timer, Undo2 } from 'lucide-react'
import Hero from '@/components/marketing/Hero'
import SectionHeading from '@/components/marketing/SectionHeading'
import FeatureRow from '@/components/marketing/FeatureRow'
import IllustrationFrame from '@/components/marketing/IllustrationFrame'
import CtaSection from '@/components/marketing/CtaSection'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { SurpriseBagsPreview, Window } from '@/components/previews'
import { SURPRISE_BAGS } from '@/lib/illustrations'
import { registerUrl } from '@/lib/site'
import FeatureGrid from '@/components/marketing/FeatureGrid'

const description =
  'Sell what did not sell today in surprise bags from your own page. Customers reserve and pay by card, Apple Pay or Google Pay with no app or account and pick up before you close; whoever is on shift gets each order on their phone; the money goes straight to your own Stripe account. On every plan, Free included.'

export const metadata: Metadata = {
  title: 'Surprise bags — Fork | Sell end-of-day leftovers from your own page',
  description,
  alternates: { canonical: '/surprise-bags' },
  openGraph: { title: 'Surprise bags on Fork: sell what is left, before you close', description, url: 'https://forkhr.com/surprise-bags', images: ['/og-image.png'], type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Surprise bags on Fork: sell what is left, before you close', description, images: ['/og-image.png'] },
}

const [count, page, pay, push, pickup] = SURPRISE_BAGS
const signUp = registerUrl({ use: 'sales' })

// Business → Surprise bags in the app (docs/grab-bags-api.md, backend/utils/grabBagRules.js,
// grabBagPayments.js, grabBagNotify.js; the public pages frontend/src/pages/grabBags/public). One
// evening at Juniper Coffee's Main St, the same cast as /locations and /reminders: the Pastry bag
// at $6.00 (worth about $18.00), 8 a day, picked up 5–6 PM; Sam reserves two at 2:18 PM (code
// K7RT, $12.99 with the $0.99 service fee); Maya Chen is on shift then, Jordan Lee closes. The
// money: Fork's fee is 5% of the bags plus the customer's service fee, Stripe's processing is the
// shop's, refunds are whole and give Fork's fee back. Not claimed: a marketplace or consumer app
// (there is none), delivery, a bag on a locked phone's alarm, any city rule or licence.
const rules = [
  { icon: <PackageOpen className="h-4 w-4" />, title: 'What usually goes in', desc: 'Up to twelve things, said as Usually inside when it changes from day to day.' },
  { icon: <Leaf className="h-4 w-4" />, title: 'Diet and allergens', desc: 'Vegetarian, vegan, gluten free or dairy free, and the allergens in your own words.' },
  { icon: <Tag className="h-4 w-4" />, title: 'Price and worth', desc: 'What it costs, and what the food in it would cost on the shelf.' },
  { icon: <Store className="h-4 w-4" />, title: 'Where, and how many', desc: 'The shops that sell it and a number a day for each, up to 200.' },
  { icon: <CalendarDays className="h-4 w-4" />, title: 'Days and pickup window', desc: 'Every day, weekdays or the days you pick, picked up in a window the same day.' },
  { icon: <Clock className="h-4 w-4" />, title: 'When orders open and close', desc: 'Sales open at 7 AM and close 15 minutes before the window ends, or when you say.' },
  { icon: <ShoppingBasket className="h-4 w-4" />, title: 'Bags in one order', desc: 'Up to three by default, ten at most, so one customer does not take the lot.' },
  { icon: <Undo2 className="h-4 w-4" />, title: 'Free cancel until', desc: 'Customers cancel free until two hours before pickup, or the time you set, and the bags go back on sale.' },
]

const promises = [
  { icon: <Store className="h-4 w-4" />, title: 'Your page, your customers', desc: 'Fork lists your bags nowhere else. People reach them from your QR codes, your link page and your own posts.' },
  { icon: <Timer className="h-4 w-4" />, title: 'Held while they pay', desc: 'Bags in a checkout are held for 15 minutes, so the last one is never sold twice, and go back on sale if it is not paid.' },
  { icon: <Ban className="h-4 w-4" />, title: 'No account, no app', desc: 'Customers pay with a card, Apple Pay or Google Pay in their phone’s browser. The code and their order’s page come by email.' },
  { icon: <EyeOff className="h-4 w-4" />, title: 'Only what the order needs', desc: 'A name, an email and an optional phone, cleared from the order after two years.' },
]

const steps = [
  { n: '1', title: 'Connect Stripe', desc: 'The owner connects the company’s own Stripe account from the settings. It is the same account your invoices are paid into.' },
  { n: '2', title: 'Make a bag', desc: 'What usually goes in, the price, the shops and how many a day, the days and the pickup window.' },
  { n: '3', title: 'Share your page', desc: 'Each shop’s link page can carry a Get a surprise bag button. Put the link in your bio, or on a sign in the window.' },
]

const fees = [
  { l: 'Surprise bags, your page and the app', v: '$0', d: 'On every plan, Free included' },
  { l: 'Fork’s fee', v: '5%', d: 'Of the bags, paid back with any refund' },
  { l: 'Service fee', v: '$0.99', d: 'Paid by the customer, once per order' },
]

const faqs = [
  { q: 'What does it cost?', a: 'Nothing to set up, on every plan. On each order Fork keeps 5% of the bags and the customer pays a $0.99 service fee; Stripe charges your account its processing fee. Two bags at $6.00 come to $12.99 for the customer and $11.40 for you, before Stripe’s fee.' },
  { q: 'Do customers need an app or an account?', a: 'No. Your page opens in any phone’s browser. They pay by card, Apple Pay or Google Pay, and get their code and a link to their order by email.' },
  { q: 'Will Fork list our bags on a marketplace?', a: 'No. There is no Fork app for customers and no list of shops. Your bags are on your own page, which people reach from your QR codes, your link page and your posts.' },
  { q: 'Who gets the orders?', a: 'The people on shift at that shop whose job handles surprise bag orders, as a push and in the Fork app. With nobody on shift, the shop’s manager, then the owners. A reminder to pack comes half an hour before pickup.' },
  { q: 'What if we sell out or close early?', a: 'Change today’s count with a tap, mark a bag Sold out for today, or pause the shop for the rest of the day. An order you cannot fill is cancelled and refunded in full, with the reason the customer reads.' },
  { q: 'Can customers cancel?', a: 'Until two hours before the pickup window starts, or the time you set for the bag. They are refunded in full and the bags go back on sale.' },
  { q: 'What happens if someone does not come?', a: 'Half an hour after the window ends, the order reads Not picked up. It is not refunded unless you refund it, and Picked up still works if they come later.' },
  { q: 'Where does the money go?', a: 'Straight into your own Stripe account, less Fork’s fee, and Stripe pays it out to your bank on your schedule. Refunds come back out of the same account, Fork’s fee included.' },
  { q: 'Can we charge sales tax?', a: 'Yes. Mark a bag taxable and set each shop’s rate in the settings; the customer sees it before paying.' },
]

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
}

export default function SurpriseBagsPage() {
  return (
    <main className="pt-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <Hero
        registerHref={signUp}
        crumb={{ label: 'Products', href: '/products', current: 'Surprise bags' }}
        plan="free"
        title="Sell what's left, before you close"
        lede="Put the day's leftovers in bags on your own page. Customers reserve and pay with no app, whoever is on shift gets the order on their phone, and the money goes straight to your Stripe account."
        secondaryHref="#count"
        secondaryLabel="See an evening at Main St"
        note="Free on every plan. Fork keeps 5% of the bags; customers pay a $0.99 service fee."
        aside={
          <Window title="Fork · Surprise bags">
            <SurpriseBagsPreview />
          </Window>
        }
      />

      <FeatureRow
        id="count"
        badge="New"
        plan="free"
        title="Make a bag once, set today's count with a tap"
        lede="Say what usually goes in, the price, the shops and the pickup window. Each day the count follows the pastry case: more, fewer, or sold out for today."
        bullets={['A number a day for each shop', 'Sold, being paid for and left, at a glance', 'Pause a shop for the rest of the day']}
        preview={<IllustrationFrame illustration={count} />}
        previewTitle={count.title}
        frame="none"
      />

      <FeatureRow
        id="page"
        className="bg-warm-50"
        flip
        plan="free"
        title="Your own page, in your colours"
        lede="Every bag on one page with what usually goes in, the diet, the price and what it is worth. People find it from a sign in the window, your link page or your bio."
        bullets={['Only 3 left, said while there are only 3', 'Which shop, when there is more than one', 'Light or dark, as the phone is set']}
        preview={<IllustrationFrame illustration={page} />}
        previewTitle={page.title}
        frame="none"
        href="/locations"
        hrefLabel="About link pages and QR codes"
      />

      <FeatureRow
        id="checkout"
        plan="free"
        title="Paid in a tap, with no account"
        lede="A card, Apple Pay or Google Pay, and the bags are reserved. The code comes by email with a page of its own: the pickup window, directions and a way to cancel."
        bullets={['Held for 15 minutes while they pay', 'Free cancel until the cut-off you set', 'Refunds always in full']}
        preview={<IllustrationFrame illustration={pay} />}
        previewTitle={pay.title}
        frame="none"
      />

      <FeatureRow
        id="orders"
        className="bg-warm-50"
        flip
        plan="free"
        title="Whoever is on shift gets a push"
        lede="Each order goes to the people working at that shop whose job handles them. Got it tells the team it is in hand, and a reminder to pack comes half an hour before pickup."
        bullets={['On the Fork app, on the web, and as a push', 'The manager hears if nobody opens it in 15 minutes', 'Cancel and refund, with the reason the customer reads']}
        preview={<IllustrationFrame illustration={push} />}
        previewTitle={push.title}
        frame="none"
      />

      <FeatureRow
        id="pickup"
        plan="free"
        title="Handed over with the code"
        lede="The customer shows a four-character code at the counter and Picked up closes the order. The day's list says what is waiting, what went out, and who handed it over."
        bullets={['Find an order by the code or a name', 'Not picked up, said half an hour after the window', 'Every order kept with the shop’s sales']}
        preview={<IllustrationFrame illustration={pickup} />}
        previewTitle={pickup.title}
        frame="none"
      />

      <section id="bags" className="scroll-mt-24 border-b border-warm-100 bg-warm-50">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <SectionHeading title="Set up once, sold every day it runs" lede="Up to thirty bags, each with its own rules. Change one and today's page follows." />
          <FeatureGrid className="mt-12" columns={4} items={rules} />
        </div>
      </section>

      <section id="pricing" className="scroll-mt-24 border-b border-warm-100">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <div className="grid items-start gap-12 md:grid-cols-[1fr_1.2fr] md:gap-16">
            <div>
              <SectionHeading title="Nothing to set up. A small share of each order." lede="The money goes into your own Stripe account. Stripe charges its processing fee there." />
              <div className="mt-8 rounded-2xl border border-warm-200 bg-warm-50 p-5">
                <div className="text-[13px] font-semibold text-warm-500">Sam’s two pastry bags</div>
                <dl className="mt-3 space-y-1.5 text-[15px]">
                  <div className="flex justify-between gap-6 text-warm-600">
                    <dt>Pastry bag × 2</dt>
                    <dd className="tabular-nums">$12.00</dd>
                  </div>
                  <div className="flex justify-between gap-6 text-warm-600">
                    <dt>Service fee</dt>
                    <dd className="tabular-nums">$0.99</dd>
                  </div>
                  <div className="flex justify-between gap-6 border-t border-warm-200 pt-1.5 font-semibold text-warm-950">
                    <dt>Sam pays</dt>
                    <dd className="tabular-nums">$12.99</dd>
                  </div>
                  <div className="flex justify-between gap-6 text-warm-600">
                    <dt>Fork’s fee (5% of $12.00, and the service fee)</dt>
                    <dd className="shrink-0 tabular-nums">−$1.59</dd>
                  </div>
                  <div className="flex justify-between gap-6 border-t border-warm-200 pt-1.5 font-semibold text-warm-950">
                    <dt>Juniper Coffee receives, before Stripe’s fee</dt>
                    <dd className="shrink-0 tabular-nums">$11.40</dd>
                  </div>
                </dl>
              </div>
            </div>
            <div className="surface divide-y divide-warm-100">
              {fees.map((r) => (
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

      <section id="fair" className="scroll-mt-24 border-b border-warm-100 bg-warm-50">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <div className="grid items-start gap-12 md:grid-cols-[1fr_1.4fr] md:gap-16">
            <SectionHeading title="Simple for the customer, clear for the counter" lede="How every page and every order works, whichever shop it is." />
            <div className="grid gap-4 sm:grid-cols-2">
              {promises.map((p) => (
                <div key={p.title} className="surface flex items-start gap-4 p-5">
                  <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-forest-50 text-forest-600">{p.icon}</span>
                  <div>
                    <h3 className="text-[15px] font-semibold text-warm-950">{p.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-warm-500">{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="setup" className="scroll-mt-24 border-b border-warm-100">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <SectionHeading title="Selling by tonight" lede="Surprise bags are on for every company. Your page starts from your company's name, logo and colour." />
          <ol className="mt-12 grid gap-5 md:grid-cols-3">
            {steps.map((s) => (
              <li key={s.n} className="surface p-6">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-warm-950 text-[14px] font-semibold text-white">{s.n}</span>
                <h3 className="mt-4 text-[17px] font-semibold tracking-tight text-warm-950">{s.title}</h3>
                <p className="mt-1.5 text-[15px] leading-relaxed text-warm-600">{s.desc}</p>
              </li>
            ))}
          </ol>
          <p className="mt-6 flex items-center gap-2 text-sm text-warm-500">
            <ShieldCheck className="h-4 w-4 shrink-0 text-forest-600" /> Two job permissions: Handle surprise bag orders for the counter, Manage surprise bags for the bags and the settings.
          </p>
          <p className="mt-2 text-sm text-warm-500">
            Selling to other businesses instead?{' '}
            <Link href="/storefront" className="font-medium text-forest-600 hover:text-forest-700">
              See the online storefront
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="border-b border-warm-100 bg-warm-50">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid gap-12 md:grid-cols-[1fr_1.6fr] md:gap-16">
            <SectionHeading title="About surprise bags" lede="Anything else: support@forkhr.com" />
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
        registerHref={signUp}
        title="Put tonight's leftovers on sale"
        lede="Make a bag, connect Stripe, share your page. Surprise bags are on every plan."
        secondaryHref="/pricing"
        secondaryLabel="Compare plans"
      />
    </main>
  )
}
