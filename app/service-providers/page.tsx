import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, CalendarClock, CalendarRange, ClipboardList, FileCheck2, LifeBuoy, MapPin, MessageSquare, Receipt, Repeat, ShieldCheck, Store, Timer, Users } from 'lucide-react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Hero from '@/components/marketing/Hero'
import FeatureRow from '@/components/marketing/FeatureRow'
import SectionHeading from '@/components/marketing/SectionHeading'
import CtaSection from '@/components/marketing/CtaSection'
import PlanBadge from '@/components/marketing/PlanBadge'
import DayTimeline, { type DayStop } from '@/components/marketing/DayTimeline'
import { InvoicePreview, ServiceCallPreview, ServiceIssuePreview, TechnicianPreview, Window } from '@/components/previews'
import { PLATFORM_FEE_BPS, SUPPORT_EMAIL, registerUrl } from '@/lib/site'

const feePct = (PLATFORM_FEE_BPS / 100).toFixed(1).replace(/\.0$/, '')

const description =
  'Service calls, technician visits and invoicing for repair and maintenance companies: refrigeration, espresso machines, HVAC, pest control, handymen. Photos, parts, hours and a signature on site; customers pay by card or US bank transfer from a link, no account needed. Free.'

export const metadata: Metadata = {
  title: 'Service call & invoicing software for service providers — Fork',
  description,
  alternates: { canonical: '/service-providers' },
  openGraph: { title: 'Fork for service providers', description, url: 'https://forkhr.com/service-providers', images: ['/og-image.png'], type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Fork for service providers', description, images: ['/og-image.png'] },
}

const trades = [
  'Refrigeration & ice machines',
  'Espresso machines',
  'HVAC',
  'Kitchen equipment repair',
  'Hood & duct cleaning',
  'Pest control',
  'Plumbing & electrical',
  'Handymen',
  'Cleaning crews',
]

const pains = [
  { before: 'Jobs in texts, voicemails and on a whiteboard', after: 'One list of service calls, by status' },
  { before: 'Invoices typed up on Friday night', after: 'Written from the visit: hours, parts, photos' },
  { before: '"Did anyone actually come?"', after: 'Arrival time, photos and a signature on the call' },
  { before: 'Checks chased for 60 days', after: 'A pay link and QR code on every invoice' },
]

// One service call for a refrigeration company: Corner Café's walk-in cooler, #SR-1042, not on
// Fork. Times match the demos: booked for Thu 8–10 AM with Marco, on the way 8:12, arrived 8:31,
// finished 10:02 and signed by Dana, paid by card Fri 9:40 AM.
const call: DayStop[] = [
  { kind: 'moment', day: 'Wed', time: '4:52 PM', app: 'Service requests', where: 'Corner Café', text: 'New request from your form: the walk-in cooler is not holding temperature.', tag: 'New', tone: 'brand' },
  { kind: 'moment', day: 'Wed', time: '5:10 PM', app: 'Service calls', where: '#SR-1042', text: "Booked for Thursday, 8–10 AM, with Marco. It's already on Marco's phone.", tag: 'Scheduled', tone: 'brand' },
  { kind: 'moment', day: 'Thu', time: '8:12 AM', app: 'Technician', where: 'Marco Ruiz', text: 'Marco is on the way. Corner Café was told.', tag: 'On the way', tone: 'brand' },
  {
    kind: 'feature',
    id: 'visit',
    day: 'Thu',
    time: '8:31 AM',
    eyebrow: 'Technician app',
    plan: 'free',
    title: 'The whole visit on one phone',
    lede: 'Navigate and call the site from the job. Then photos, parts and time on site, and the manager signs on the screen.',
    bullets: ['On my way, Arrived, Finish', 'Before and after photos', 'The proof lands on the service call as it happens'],
    preview: <TechnicianPreview />,
    previewTitle: 'Fork · Service call',
    frame: 'phone',
  },
  { kind: 'moment', day: 'Thu', time: '10:02 AM', app: 'Service calls', where: 'Corner Café', text: 'Finished and signed by Dana. Two photos and a new evaporator fan motor on the work report.', tag: 'Completed', tone: 'ok' },
  { kind: 'moment', day: 'Thu', time: '10:05 AM', app: 'Invoices', where: 'Corner Café', text: 'Invoice emailed with a pay link and the work report.', tag: 'Invoiced', tone: 'brand' },
  { kind: 'moment', day: 'Fri', time: '9:40 AM', app: 'Payments', where: 'Corner Café', text: 'Paid by card from the link, on its way to your bank.', tag: 'Paid', tone: 'ok' },
  {
    kind: 'feature',
    id: 'callbacks',
    day: 'Mon',
    time: '9:12 AM',
    eyebrow: 'Callbacks',
    plan: 'free',
    title: "When it isn't fixed, it comes back to the same call",
    lede: 'Customers on Fork report a problem from their app, with a photo and what they want: another visit, a credit or a refund. The invoice waits until you answer.',
    bullets: ['Another visit, a credit or a refund', 'A credit comes off the next invoice', 'The customer is told in their app'],
    preview: <ServiceIssuePreview />,
    previewTitle: 'Fork · Service calls · #SR-1051',
  },
  { kind: 'moment', day: 'Tue', time: '9:05 AM', app: 'Service calls', where: 'Harbor Market', text: 'Revisit done. Fixed, signed for, nothing more to bill.', tag: 'Fixed', tone: 'ok' },
  { kind: 'moment', day: 'Dec 18', time: '8:00 AM', app: 'Maintenance contracts', where: 'Corner Café', text: 'The quarterly coil cleaning was booked a week ahead, from the contract.', tag: 'Booked', tone: 'neutral' },
]

const contracts = [
  { icon: <Repeat className="h-4 w-4" />, t: 'Weekly to yearly', d: 'Every two weeks, every three or six months.' },
  { icon: <CalendarClock className="h-4 w-4" />, t: 'Created ahead', d: 'Each call shows up days before the visit.' },
  { icon: <MapPin className="h-4 w-4" />, t: 'Per customer site', d: 'Each location on its own plan.' },
  { icon: <Receipt className="h-4 w-4" />, t: 'Billed like any call', d: 'One visit, or the month on one invoice.' },
]

const more = [
  { icon: <FileCheck2 className="h-5 w-5" />, title: 'Estimates', desc: 'Quote first. Customers on Fork approve in the app.' },
  { icon: <CalendarRange className="h-5 w-5" />, title: 'Visit schedule', desc: 'The week by technician. Who is where, when.' },
  { icon: <ClipboardList className="h-5 w-5" />, title: 'Your request form', desc: 'The questions you need answered, per service.' },
  { icon: <Timer className="h-5 w-5" />, title: 'By the visit or the hour', desc: 'A fixed call-out or hourly labor, from your price list.' },
  { icon: <LifeBuoy className="h-5 w-5" />, title: 'Callbacks and credits', desc: 'A problem after the visit becomes a revisit or a credit.' },
  { icon: <MessageSquare className="h-5 w-5" />, title: 'A chat per customer', desc: 'On Fork or by email. Replies come back to the thread.' },
  { icon: <Store className="h-5 w-5" />, title: 'Listed in the Fork market', desc: 'Restaurants and shops on Fork find you by trade.' },
  { icon: <Users className="h-5 w-5" />, title: 'The whole crew', desc: 'Add every technician. No per-user price.' },
]

const faqs = [
  { q: 'Do my customers need a Fork account?', a: 'No. Log the call yourself; they get the invoice by email and pay from the link or the QR code. Businesses already on Fork can request service from you in their app.' },
  { q: 'How do I get paid?', a: 'Through Stripe, straight to your bank account, by card or US bank transfer. Paid, failed and refunded show on the service call.' },
  { q: 'Can I bill by the hour?', a: 'Yes. Price each service per visit or per hour. Time on site fills the labor line, and parts go on the bill as they are logged.' },
  { q: 'What does a technician need?', a: 'The Fork app on an iPhone or Android phone. They see their visits, navigate, call the site and finish with photos and a signature.' },
  { q: 'Can I run maintenance contracts?', a: 'Yes. Pick the customer site and how often, weekly to yearly. Each service call is created ahead of its visit.' },
  { q: 'What does it cost?', a: `Service calls, invoices and the technician app are free. When a customer pays online, Fork keeps ${feePct}% and Stripe charges its processing fee.` },
]

const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  },
  {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Fork', item: 'https://forkhr.com' },
      { '@type': 'ListItem', position: 2, name: 'Solutions', item: 'https://forkhr.com/solutions' },
      { '@type': 'ListItem', position: 3, name: 'Service providers', item: 'https://forkhr.com/service-providers' },
    ],
  },
]

export default function ServiceProvidersPage() {
  return (
    <main className="pt-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Hero
        registerHref={registerUrl({ use: 'sales' })}
        crumb={{ label: 'Solutions', href: '/solutions', current: 'Service providers' }}
        plan="free"
        title="Finish the job. The invoice is already written."
        lede="Service calls, technician visits and invoices for repair and maintenance companies. The hours and parts from the visit become the bill."
        secondaryHref="#visit"
        secondaryLabel="See a visit"
        note={`Free. A ${feePct}% fee only when a customer pays online.`}
        aside={
          <Window title="Fork · Service calls · #SR-1042">
            <ServiceCallPreview />
          </Window>
        }
      />

      <section className="border-b border-warm-100">
        <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 py-8 md:flex-row md:items-center md:gap-8">
          <span className="shrink-0 text-[13px] font-medium text-warm-400">For the people who keep businesses running</span>
          <div className="flex flex-wrap gap-2">
            {trades.map((t) => (
              <span key={t} className="whitespace-nowrap rounded-full border border-warm-200 bg-white px-3.5 py-1.5 text-[13px] font-medium text-warm-600">
                {t}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-warm-100 bg-warm-50">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <SectionHeading eyebrow="Day one" title="What changes" />
          <div className="mt-10 overflow-hidden rounded-2xl border border-warm-200 bg-white">
            <div className="hidden grid-cols-[1fr_40px_1fr] border-b border-warm-200 bg-warm-50 px-6 py-3 text-[11px] font-bold uppercase tracking-wider text-warm-400 md:grid">
              <span>Today</span>
              <span />
              <span>With Fork</span>
            </div>
            {pains.map((p) => (
              <div key={p.before} className="grid gap-2 border-b border-warm-100 px-6 py-5 last:border-b-0 md:grid-cols-[1fr_40px_1fr] md:items-center md:gap-0">
                <p className="text-[15px] leading-relaxed text-warm-500">{p.before}</p>
                <span className="hidden justify-center text-warm-300 md:flex">
                  <ArrowRight className="h-4 w-4" />
                </span>
                <p className="text-[15px] font-medium leading-relaxed text-warm-950">{p.after}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="story" className="scroll-mt-24 border-b border-warm-100">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <SectionHeading
            eyebrow="A service call on Fork"
            title="From the request to money in the bank"
            lede="Corner Café's walk-in cooler stops holding temperature on Wednesday afternoon. It is fixed, signed for and paid by Friday. On Monday, a customer on Fork reports a leak came back."
          />
          <div className="mt-14 md:mt-16">
            <DayTimeline stops={call} rail="weeks" />
          </div>
        </div>
      </section>

      <FeatureRow
        id="invoicing"
        flip
        eyebrow="Invoices & payments"
        plan="free"
        title="Bill one call or the whole month"
        lede="Put a customer's finished calls on one invoice. The PDF carries the work report for each."
        bullets={['Pay link and QR code: card or US bank', 'Credits come off the invoice automatically', 'Your customer needs no account']}
        preview={<InvoicePreview variant="service" />}
        previewTitle="Fork · Service calls · Invoice"
      />

      <section id="contracts" className="scroll-mt-24 border-b border-warm-100 bg-warm-50">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid items-start gap-12 md:grid-cols-[1fr_1.2fr] md:gap-16">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="eyebrow">Maintenance contracts</span>
                <PlanBadge tier="free" />
              </div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-warm-950 md:text-4xl">Quarterly visits that book themselves</h2>
              <p className="mt-4 text-lg leading-relaxed text-warm-600">Set the cadence once. Each service call is created ahead, with its window and charges.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {contracts.map((c) => (
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

      <section className="border-b border-warm-100">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <SectionHeading eyebrow="Also included" title="The rest of running service calls" />
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

      <section id="pricing" className="scroll-mt-24 border-b border-warm-100 bg-warm-50">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <div className="grid items-start gap-12 md:grid-cols-[1fr_1.2fr] md:gap-16">
            <SectionHeading eyebrow="What it costs" title="Free to run. A small fee only when money moves online." />
            <div className="surface divide-y divide-warm-100">
              {[
                { l: 'Service calls, visits, technician app, chat', v: '$0', d: 'Unlimited technicians and customers' },
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
              <div className="px-6 py-4 text-sm text-warm-500">
                Want shifts and GPS timecards for the crew?{' '}
                <Link href="/pricing" className="font-medium text-forest-600 hover:text-forest-700">
                  Essential, $39 per location
                </Link>
              </div>
              <div className="flex items-center gap-2 px-6 py-4 text-sm text-warm-500">
                <ShieldCheck className="h-4 w-4 text-forest-600" /> Stripe processes payments. Fork never stores card or bank details.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-warm-100">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid gap-12 md:grid-cols-[1fr_1.6fr] md:gap-16">
            <SectionHeading eyebrow="Questions" title="Service providers ask us" lede={`Anything else: ${SUPPORT_EMAIL}`} />
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
        title="Invoice your next visit from the job"
        lede="Add your services and customers today. Book the next call from the app."
      />
    </main>
  )
}
