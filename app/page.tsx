import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Landmark, Mail, Monitor, Smartphone, Store } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Backdrop from '@/components/visual/Backdrop'
import FeatureRow from '@/components/marketing/FeatureRow'
import SectionHeading from '@/components/marketing/SectionHeading'
import Segments from '@/components/marketing/Segments'
import PricingTeaser from '@/components/marketing/PricingTeaser'
import CtaSection from '@/components/marketing/CtaSection'
import PlanBadge from '@/components/marketing/PlanBadge'
import { AiPreview, FeedPreview, InvoicePreview, ProductTour, SchedulePreview, SopsPreview, TimecardsPreview, VendorChatPreview } from '@/components/previews'
import { APP_STORE_URL, CTA_PRIMARY, GOOGLE_PLAY_URL, REGISTER_URL, SITE_DESCRIPTION } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Fork — Run the whole business from one app',
  description: SITE_DESCRIPTION,
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Fork — Run the whole business from one app',
    description: SITE_DESCRIPTION,
    url: 'https://forkhr.com',
    images: ['/og-image.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fork — Run the whole business from one app',
    description: SITE_DESCRIPTION,
    images: ['/og-image.png'],
  },
}

const sides = [
  { title: 'Your team', desc: 'Schedule, timecards, chat, hiring, HR.', href: '/products#schedule', preview: <TimecardsPreview /> },
  { title: 'Every shift, the same way', desc: 'Checklists, temp logs, a feed people confirm.', href: '/sops', preview: <SopsPreview /> },
  { title: 'Vendors and customers', desc: 'Order from vendors. Sell and get paid. Free.', href: '/sales', preview: <InvoicePreview /> },
]

const integrations = [
  { icon: <Store className="h-5 w-5" />, title: 'Square', desc: 'Sales synced every 20 minutes' },
  { icon: <Landmark className="h-5 w-5" />, title: 'Stripe', desc: 'Card and bank payments, paid out to you' },
  { icon: <Mail className="h-5 w-5" />, title: 'Email', desc: 'Vendors and customers reply from their inbox' },
  { icon: <Smartphone className="h-5 w-5" />, title: 'iOS & Android', desc: 'The team on their own phones' },
  { icon: <Monitor className="h-5 w-5" />, title: 'Web & kiosk', desc: 'Any browser. Any tablet as the clock' },
]

const steps = [
  { step: '01', title: 'Add locations, vendors, customers', description: 'Import from a spreadsheet. Ordering and selling are free from day one.' },
  { step: '02', title: 'Invite the team', description: 'They install the app. The first schedule lands on their phones.' },
  { step: '03', title: 'Turn on checklists and the feed', description: 'Start from templates. Add courses and policies when ready.' },
]

export default function Home() {
  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-warm-100">
        <Backdrop />
        <div className="relative mx-auto max-w-6xl px-6 pb-14 pt-12 md:pb-20 md:pt-20">
          <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.15fr] lg:gap-14">
            <div>
              <Link href="/sales" className="group inline-flex flex-wrap items-center gap-x-2.5 gap-y-1 text-sm">
                <span className="inline-flex items-center rounded-full bg-forest-50 px-2.5 py-0.5 text-[13px] font-semibold text-forest-600">New</span>
                <span className="font-medium text-warm-600 group-hover:text-warm-950">Sell through Fork and get paid online</span>
                <ArrowRight className="h-3.5 w-3.5 text-warm-400 transition-transform group-hover:translate-x-0.5" />
              </Link>

              <h1 className="mt-7 text-5xl font-semibold leading-[1.02] tracking-tight text-warm-950 md:text-6xl lg:text-[4.25rem]">Run the whole business from one app.</h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-warm-600 md:text-xl">
                Schedules and timecards for the team. Checklists that get done. Orders to vendors, invoices to customers.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link href={REGISTER_URL} target="_blank">
                  <Button size="lg" className="h-11 px-6 text-base">
                    {CTA_PRIMARY}
                    <ArrowRight className="ml-1.5 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/products">
                  <Button variant="outline" size="lg" className="h-11 px-6 text-base">
                    See the platform
                  </Button>
                </Link>
              </div>

              <p className="mt-5 text-sm text-warm-400">Free for ordering and selling · Team plans from $39 per location</p>

              <div className="mt-6 flex flex-wrap items-center gap-x-2.5 gap-y-1 text-[13px]">
                <span className="text-warm-400">Also on</span>
                <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className="font-medium text-warm-700 transition-colors hover:text-warm-950">
                  App Store
                </a>
                <span className="text-warm-300">·</span>
                <a href={GOOGLE_PLAY_URL} target="_blank" rel="noopener noreferrer" className="font-medium text-warm-700 transition-colors hover:text-warm-950">
                  Google Play
                </a>
              </div>
            </div>

            <ProductTour />
          </div>

          <div className="mt-16 border-t border-warm-100 pt-8">
            <Segments />
          </div>
        </div>
      </section>

      {/* Three sides */}
      <section className="border-b border-warm-100">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <SectionHeading eyebrow="One app" title="Three sides of the business. One app." lede="Team, operations and money, in one place." />
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {sides.map((s) => (
              <Link key={s.title} href={s.href} className="surface surface-hover group flex flex-col overflow-hidden">
                <div className="p-6 pb-0">
                  <h3 className="text-xl font-semibold tracking-tight text-warm-950">{s.title}</h3>
                  <p className="mt-2 text-[15px] leading-relaxed text-warm-600">{s.desc}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-forest-600">
                    Explore
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
                <div className="mt-6 flex-1 bg-warm-100/70 px-4 pt-4">
                  <div className="@container pointer-events-none h-[250px] overflow-hidden rounded-t-xl border border-b-0 border-warm-200 bg-white shadow-[0_20px_50px_-24px_rgba(9,9,11,0.3)] mask-[linear-gradient(to_bottom,black_75%,transparent)]" aria-hidden="true">
                    {s.preview}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Feature tour */}
      <FeatureRow
        id="schedule"
        eyebrow="Scheduling & timecards"
        plan="essential"
        title="Build the week. Publish once."
        lede="Every phone gets it. Open shifts get claimed, trades get approved, hours go to payroll."
        bullets={['Open shifts, trades, availability', 'Kiosk, phone or GPS clock-in', 'Labor cost live, against Square sales']}
        preview={<SchedulePreview />}
        previewTitle="Fork · Schedule · Main St"
        href="/products#schedule"
        hrefLabel="See scheduling"
      />

      <FeatureRow
        id="feed"
        flip
        eyebrow="Feed"
        plan="essential"
        title="Announcements people confirm they read"
        lede="Post once. See who confirmed, who reacted, who replied."
        bullets={['Confirmations and read receipts', 'Recognitions with badges', 'Surveys by location']}
        preview={<FeedPreview />}
        previewTitle="Fork · Feed"
        href="/products#feed"
        hrefLabel="See the feed"
      />

      <FeatureRow
        id="sops"
        eyebrow="Checklists & SOPs"
        plan="premium"
        title="Opening, closing and temp checks, done the same way"
        lede="Checklists start with the shift. Temps come from a QR code. A fail schedules a recheck."
        bullets={['Opening, closing, temperature and waste logs', 'Photos, signatures and readings kept', 'Reports: what was missed, where']}
        preview={<SopsPreview />}
        previewTitle="Fork · SOPs · Opening checklist"
        href="/sops"
        hrefLabel="Explore SOPs"
      />

      <FeatureRow
        id="supply"
        flip
        eyebrow="Supply"
        plan="free"
        title="Talk to vendors where the order lives"
        lede="One chat per vendor. Not on Fork? Your message goes out as email and their reply comes back as chat."
        bullets={['One-time and standing orders', 'Vendor replies land in the chat', 'Free, unlimited vendors']}
        preview={<VendorChatPreview />}
        previewTitle="Fork · Chat · Bluebird Dairy"
        href="/supply"
        hrefLabel="Explore supply"
      />

      <FeatureRow
        id="sales"
        eyebrow="Sales"
        plan="free"
        title="Sell, invoice, get paid. No account needed for your customers."
        lede="Invoice from the order. They pay by card or bank from the link or the QR code."
        bullets={['Price lists per customer', 'Card and bank payments through Stripe', 'Delivery routes with proof of delivery']}
        preview={<InvoicePreview />}
        previewTitle="Fork · Sales · Order S-2088"
        href="/sales"
        hrefLabel="Explore selling"
      />

      {/* AI */}
      <section className="relative overflow-hidden bg-warm-950">
        <Backdrop tone="dark" glow={false} />
        <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
            <div className="max-w-lg">
              <div className="flex flex-wrap items-center gap-3">
                <span className="eyebrow text-lime-accent">AI assistant</span>
                <PlanBadge tier="premium" className="border-warm-700 bg-transparent text-warm-300 hover:border-warm-500 hover:text-white" />
              </div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">Ask about your business in plain English</h2>
              <p className="mt-5 text-lg leading-relaxed text-warm-400">Answers come from your own policies, FAQs and schedule. Not the internet.</p>
              <dl className="mt-10 space-y-6">
                {[
                  { title: 'Trained on your content', desc: 'Publish a policy. The next answer knows it.' },
                  { title: 'Role-aware', desc: 'People only see what they are allowed to.' },
                  { title: 'Knows when to hand off', desc: 'A manager gets the question, with context.' },
                ].map((c) => (
                  <div key={c.title} className="border-l-2 border-warm-800 pl-5">
                    <dt className="text-[15px] font-semibold text-white">{c.title}</dt>
                    <dd className="mt-1 text-[15px] leading-relaxed text-warm-400">{c.desc}</dd>
                  </div>
                ))}
              </dl>
              <Link href="/ai-assistant" className="mt-10 inline-flex items-center gap-1.5 text-[15px] font-medium text-lime-accent transition-colors hover:text-white">
                About the assistant
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
            <div className="@container overflow-hidden rounded-xl border border-warm-800 bg-warm-900/60">
              <AiPreview dark />
            </div>
          </div>
        </div>
      </section>

      {/* Numbers */}
      <section className="border-b border-warm-100">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <div className="grid items-center gap-12 md:grid-cols-[1.1fr_1fr] md:gap-20">
            <div>
              <span className="eyebrow mb-4">By the numbers</span>
              <div className="mb-4 text-6xl font-semibold leading-none tracking-tight text-warm-950 md:text-7xl">
                10 hrs<span className="text-forest-500">/wk</span>
              </div>
              <p className="max-w-md text-xl leading-relaxed text-warm-600">Saved per manager, every week.</p>
              <p className="mt-6 text-xs text-warm-400">Average reported by teams on Fork for 90+ days.</p>
            </div>
            <div className="divide-y divide-warm-100">
              {[
                { metric: '90%', label: 'Faster onboarding' },
                { metric: '$4,800', label: 'Saved per location per year' },
                { metric: '70%', label: 'Fewer repeat questions' },
              ].map((m) => (
                <div key={m.label} className="flex items-baseline justify-between gap-6 py-5">
                  <p className="text-[15px] leading-relaxed text-warm-600">{m.label}</p>
                  <div className="shrink-0 text-3xl font-semibold tracking-tight text-warm-950">{m.metric}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Works with */}
      <section className="border-b border-warm-100 bg-warm-50">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <SectionHeading eyebrow="Fits what you have" title="No new hardware. Nobody forced to sign up." />
          <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-warm-200 bg-warm-200 sm:grid-cols-2 lg:grid-cols-5">
            {integrations.map((i) => (
              <div key={i.title} className="bg-white p-6">
                <div className="mb-3 text-forest-600">{i.icon}</div>
                <h3 className="text-[15px] font-semibold text-warm-950">{i.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-warm-500">{i.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-b border-warm-100">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <SectionHeading eyebrow="How it works" title="Up and running in an afternoon" />
          <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
            {steps.map((s) => (
              <div key={s.step} className="border-t-2 border-warm-950 pt-6">
                <span className="text-[13px] font-medium tabular-nums text-warm-400">{s.step}</span>
                <h3 className="mb-2 mt-2 text-lg font-semibold text-warm-950">{s.title}</h3>
                <p className="text-[15px] leading-relaxed text-warm-600">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <PricingTeaser />
      <CtaSection />
    </main>
  )
}
