import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Inbox, Landmark, Mail, Monitor, PackageCheck, Receipt, RefreshCw, Repeat, Smartphone, Store } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Backdrop from '@/components/visual/Backdrop'
import GradientStage from '@/components/visual/GradientStage'
import SectionHeading from '@/components/marketing/SectionHeading'
import Segments from '@/components/marketing/Segments'
import PricingTeaser from '@/components/marketing/PricingTeaser'
import CtaSection from '@/components/marketing/CtaSection'
import PlanBadge from '@/components/marketing/PlanBadge'
import DayTimeline, { type DayStop } from '@/components/marketing/DayTimeline'
import PerformanceSpotlight from '@/components/marketing/PerformanceSpotlight'
import ProductSuite from '@/components/marketing/ProductSuite'
import {
  AiPreview,
  ApplicantPreview,
  InvoicePreview,
  LearningPreview,
  PeoplePreview,
  ProductTour,
  ReceivingPreview,
  SchedulePreview,
  ServiceCallPreview,
  SopsPreview,
  SupplyPreview,
  TechnicianPreview,
  VendorChatPreview,
} from '@/components/previews'
import Spotlight from '@/components/marketing/Spotlight'
import StoreBadges from '@/components/marketing/StoreBadges'
import { CTA_PRIMARY, REGISTER_URL, SITE_DESCRIPTION } from '@/lib/site'

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

// One Tuesday at a café, in the order it happens. Times match the demos (the 6:58 punch on the
// timecards demo, the 8:12 → 8:19 dairy thread, Corner Café paying at 9:40 on Tuesday).
const day: DayStop[] = [
  { kind: 'moment', time: '6:58 AM', app: 'Timecards', where: 'Main St', text: 'Maya Chen clocked in on the counter tablet.', tag: 'On time', tone: 'ok' },
  {
    kind: 'feature',
    time: '7:00 AM',
    eyebrow: 'Checklists & SOPs',
    plan: 'premium',
    title: 'The opening checklist starts with the shift',
    lede: "Alarm, walk-in temperature, a photo of the line, the float. On the opener's phone, the same way every morning.",
    bullets: ['Opening, closing, temperature and waste logs', 'A failed check schedules a recheck', 'Reports on what was missed, and where'],
    preview: <SopsPreview />,
    previewTitle: 'Fork · SOPs · Opening checklist',
    frame: 'phone',
    href: '/sops',
    hrefLabel: 'Explore SOPs',
  },
  {
    kind: 'feature',
    time: '8:12 AM',
    eyebrow: 'Supply',
    plan: 'free',
    title: 'Six more gallons of milk, sorted in seven minutes',
    lede: "One chat per vendor, next to its orders. Bluebird isn't on Fork, so the message went out as an email and their reply came back here.",
    bullets: ['One-time and standing orders', 'Receive, log issues, request credits', 'Free, with unlimited vendors'],
    preview: <VendorChatPreview />,
    previewTitle: 'Fork · Chat · Bluebird Dairy',
    href: '/supply',
    hrefLabel: 'Explore supply',
  },
  {
    kind: 'feature',
    time: '9:40 AM',
    eyebrow: 'Sales',
    plan: 'free',
    title: "Corner Café pays yesterday's invoice",
    lede: 'Invoice from the order. They paid by bank transfer from the emailed link, with no account on their side.',
    bullets: ['Price lists per customer', 'Card and bank payments through Stripe', 'Delivery routes with proof of delivery'],
    preview: <InvoicePreview />,
    previewTitle: 'Fork · Sales · Order S-2088',
    href: '/sales',
    hrefLabel: 'Explore selling',
  },
  { kind: 'moment', time: '11:40 AM', app: 'Feed', where: 'All locations', text: '12 of 14 people confirmed they read the new closing procedure.', tag: '12 of 14', tone: 'brand' },
  { kind: 'moment', time: '3:05 PM', app: 'Schedule', where: 'Main St', text: "Luis traded Saturday's close with Priya. Approved in one tap.", tag: 'Approved', tone: 'ok' },
  {
    kind: 'feature',
    time: '4:10 PM',
    eyebrow: 'Scheduling & timecards',
    plan: 'essential',
    title: 'Next week, published before the dinner rush',
    lede: 'Drag shifts onto the week and watch labor cost as you go. Publish once and every phone gets it.',
    bullets: ['Open shifts, trades and availability', 'Kiosk, phone or GPS clock-in', 'Labor cost against Square sales'],
    preview: <SchedulePreview />,
    previewTitle: 'Fork · Schedule · Main St',
    href: '/products#schedule',
    hrefLabel: 'See scheduling',
  },
  { kind: 'moment', time: '10:12 PM', app: 'SOPs', where: 'Main St', text: 'Closing checklist done four minutes early. The till matches.', tag: 'Done', tone: 'ok' },
]

// A new hire's first weeks, in order. Jordan Lee is the same new barista as the people demo;
// every step is something the app does (hiringControllers hire → profile + invite, onboarding
// tasks that complete themselves, training shifts with a trainer, a 30-day automatic cycle).
const newHire: DayStop[] = [
  { kind: 'moment', day: 'Mon', time: '9:14 AM', app: 'Hiring', where: 'Main St', text: 'Jordan Lee applied to be a barista, from your job board.', tag: 'New', tone: 'brand' },
  {
    kind: 'feature',
    day: 'Mon',
    time: '9:20 AM',
    eyebrow: 'Hiring',
    plan: 'essential',
    title: 'The resume, read before you open it',
    lede: 'One tap and AI sums up the resume and the screening answers against the job: highlights, red flags and an honest fit.',
    bullets: ['Your own job board at jobs.forkhr.com', 'Interview invites the candidate accepts from the email', 'Hire, and the profile and app invite come with it'],
    preview: <ApplicantPreview />,
    previewTitle: 'Fork · Hiring · Jordan Lee',
    href: '/hiring',
    hrefLabel: 'Explore hiring',
  },
  { kind: 'moment', day: 'Tue', time: '10:02 AM', app: 'Hiring', where: 'Main St', text: "Jordan accepted Thursday's interview from the email.", tag: 'Accepted', tone: 'ok' },
  { kind: 'moment', day: 'Thu', time: '4:30 PM', app: 'Hiring', where: 'Main St', text: 'Hired at $17.00 an hour. Profile created, app invite sent.', tag: 'Hired', tone: 'ok' },
  {
    kind: 'feature',
    day: 'Fri',
    time: '11:20 AM',
    eyebrow: 'People & HR',
    plan: 'pro',
    title: 'The paperwork is done before day one',
    lede: 'W-4, I-9 and direct deposit filled in on a phone, the food handler card uploaded. The onboarding guide ticks itself off as they go.',
    bullets: ['Onboarding guides that track themselves', 'Documents with expiry reminders', 'Contracts and the handbook signed on a phone (Premium)'],
    preview: <PeoplePreview />,
    previewTitle: 'Fork · People · Jordan Lee',
    href: '/products#people',
    hrefLabel: 'See people & HR',
  },
  { kind: 'moment', day: 'Mon', time: '6:55 AM', app: 'Schedule', where: 'Main St', text: 'First shift: a training shift with Priya.', tag: 'Training', tone: 'brand' },
  { kind: 'moment', day: 'Mon', time: '1:30 PM', app: 'Learn', where: 'Courses', text: 'Jordan finished Food safety basics on the shift and earned its badge.', tag: 'Completed', tone: 'ok' },
  {
    kind: 'feature',
    day: 'Thu',
    time: '3:00 PM',
    eyebrow: 'Learn',
    plan: 'premium',
    title: 'Every course done, every policy acknowledged',
    lede: 'Short courses with quizzes on their phone, the handbook and policies acknowledged, the library and FAQs a tap away. You see who has finished what.',
    bullets: ['Courses with video, quizzes and badges', 'Courses assigned by job, in order', 'Policy acknowledgements, with reminders for the unsigned'],
    preview: <LearningPreview />,
    previewTitle: 'Fork · Learn · Jordan Lee',
    href: '/products#learn',
    hrefLabel: 'See Learn',
  },
  { kind: 'moment', day: 'Week 2', time: '9:00 AM', app: 'Learn', where: 'New hires', text: '3 of 4 new hires have finished their first-week courses.', tag: '3 of 4', tone: 'brand' },
  { kind: 'moment', day: 'Day 30', time: '9:00 AM', app: 'Performance', where: 'Main St', text: "Jordan's 30-day check-in opened on its own.", tag: 'Opened', tone: 'plum' },
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
  { step: '03', title: 'Turn on checklists and reviews', description: 'Start from templates. Add courses and policies when ready.' },
]

export default function Home() {
  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-warm-100">
        <Backdrop />
        <div className="relative mx-auto max-w-6xl px-6 pb-14 pt-12 md:pb-20 md:pt-20">
          <div className="grid items-center gap-12 lg:grid-cols-[0.95fr_1.15fr] lg:gap-14">
            <div className="relative z-10">
              <Link href="/performance" className="group inline-flex flex-wrap items-center gap-x-2.5 gap-y-1 rounded-full border border-warm-200 bg-white/80 py-1 pl-1 pr-3 text-sm shadow-[0_1px_2px_rgba(27,26,25,0.05)] transition-colors hover:border-warm-300">
                <span className="inline-flex items-center rounded-full bg-warm-950 px-2.5 py-0.5 text-[12px] font-semibold text-white">New</span>
                <span className="font-medium text-warm-700 group-hover:text-warm-950">
                  Performance reviews<span className="hidden sm:inline">, written from the record</span>
                </span>
                <ArrowRight className="h-3.5 w-3.5 text-warm-400 transition-transform group-hover:translate-x-0.5" />
              </Link>

              <h1 className="mt-7 text-5xl font-semibold leading-[1.02] tracking-[-0.02em] text-warm-950 md:text-6xl lg:text-[4.25rem]">Run the whole business from one app.</h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-warm-600 md:text-xl">
                Schedules and timecards for the team. Checklists that get done. Reviews with the facts already in. Orders to vendors, invoices to customers.
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

              <p className="mt-5 text-sm text-warm-500">Free for ordering and selling · Team plans from $39 per location</p>

              <StoreBadges size="sm" className="mt-7" />
            </div>

            {/* The tour on Fork's moving gradient (GradientStage explains the lg:static wrapper) */}
            <div className="on-gradient relative lg:static">
              <GradientStage />
              <ProductTour className="relative" />
            </div>
          </div>

          <div className="mt-16 border-t border-warm-100 pt-8">
            <Segments />
          </div>
        </div>
      </section>

      {/* A day on Fork */}
      <section id="day" className="scroll-mt-24 border-b border-warm-100">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <SectionHeading eyebrow="A day on Fork" title="Everything between opening and closing" lede="One café, one Tuesday, from the first clock-in to the closing checklist. Every stop is a real screen in Fork." />
          <div className="mt-14 md:mt-16">
            <DayTimeline stops={day} />
          </div>
        </div>
      </section>

      {/* A new hire on Fork */}
      <section id="new-hire" className="scroll-mt-24 border-b border-warm-100 bg-warm-50">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <SectionHeading
            eyebrow="A new hire on Fork"
            title="From applicant to first shift"
            lede="Jordan applies on Monday, signs everything on Friday and works a training shift the Monday after. Nobody chases a form."
          />
          <div className="mt-14 md:mt-16">
            <DayTimeline stops={newHire} rail="weeks" surface="paper" />
          </div>
        </div>
      </section>

      <PerformanceSpotlight />

      <Spotlight
        id="supply"
        eyebrow="Supply & ordering"
        plan="free"
        surface="paper"
        flip
        shape="band-reverse"
        seed={13}
        title="Every vendor, one place to order. Free."
        lede="Vendors who aren't on Fork get an email and reply into the chat. Deliveries are checked in on a phone, with every short, extra or damaged item flagged."
        windowTitle="Fork · Supply · Orders"
        preview={<SupplyPreview />}
        phone={<ReceivingPreview />}
        points={[
          { icon: <Mail className="h-4 w-4" />, title: 'Vendors on Fork or not', desc: 'Not on Fork? They get an email, and their reply lands in the chat.' },
          { icon: <RefreshCw className="h-4 w-4" />, title: 'One-time and standing orders', desc: 'Delivery days, cutoffs and minimums checked as you order.' },
          { icon: <PackageCheck className="h-4 w-4" />, title: 'Checked in on a phone', desc: 'Short, extra or damaged, flagged with a photo and sent in one message.' },
          { icon: <Receipt className="h-4 w-4" />, title: 'Credits that stick', desc: 'Every credit and invoice stays on the order it belongs to.' },
        ]}
        href="/supply"
        hrefLabel="Explore supply"
        note="Plus stock counts with par levels (Essential), vendor documents and purchasing reports."
      />

      <Spotlight
        id="service-calls"
        eyebrow="Service calls"
        plan="free"
        shape="wave"
        seed={21}
        title="Finish the job. The invoice is already written."
        lede="For repair and maintenance companies: book the visit, capture it on the technician's phone and bill from it. Customers pay from a link, no account needed."
        windowTitle="Fork · Service calls · #SR-1042"
        preview={<ServiceCallPreview />}
        phone={<TechnicianPreview />}
        points={[
          { icon: <Inbox className="h-4 w-4" />, title: 'Requests from your form', desc: "Or from the customer's Fork app, or a call you log yourself." },
          { icon: <Smartphone className="h-4 w-4" />, title: 'The visit on one phone', desc: 'Photos, parts, time on site and a signature.' },
          { icon: <Receipt className="h-4 w-4" />, title: 'One call or the whole month', desc: 'Bill either way. The work report rides along on the PDF.' },
          { icon: <Repeat className="h-4 w-4" />, title: 'Contracts that book themselves', desc: 'Quarterly visits are created ahead of time.' },
        ]}
        href="/service-providers"
        hrefLabel="Fork for service providers"
        note="Plus estimates, callbacks and credits, and a chat per customer."
      />

      <ProductSuite />

      {/* AI */}
      <section className="relative overflow-hidden bg-warm-950">
        <Backdrop tone="dark" />
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

      {/* Numbers + what it works with */}
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

          <div className="mt-16 border-t border-warm-100 pt-12 md:mt-20">
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
        </div>
      </section>

      {/* How it works */}
      <section className="border-b border-warm-100">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
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
