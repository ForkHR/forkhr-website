import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import Link from 'next/link'
import {
  ArrowRight,
  BookOpen,
  BotMessageSquare,
  Briefcase,
  CalendarDays,
  ClipboardCheck,
  Clock,
  FileSignature,
  Megaphone,
  MessageSquare,
  MessagesSquare,
  Package,
  PackageCheck,
  PieChart,
  Receipt,
  TrendingUp,
  Truck,
  Wrench,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import Backdrop from '@/components/visual/Backdrop'
import GradientCanvas from '@/components/visual/GradientCanvas'
import GradientStage from '@/components/visual/GradientStage'
import FeatureRow from '@/components/marketing/FeatureRow'
import ProductCard from '@/components/marketing/ProductCard'
import ProductsNav from '@/components/marketing/ProductsNav'
import CtaSection from '@/components/marketing/CtaSection'
import {
  AiPreview,
  ApplicantPreview,
  ChatPreview,
  FeedPreview,
  InvoicePreview,
  LearningPreview,
  PeoplePreview,
  PerformancePreview,
  ReceivingPreview,
  ReportPreview,
  RoutePreview,
  SchedulePreview,
  ServiceCallPreview,
  SopsPreview,
  SupplyPreview,
  TimecardsPreview,
  VendorChatPreview,
} from '@/components/previews'
import type { TierKey } from '@/lib/catalog'
import { CTA_PRIMARY, PLATFORM_FEE_BPS, REGISTER_URL } from '@/lib/site'
import { cn } from '@/lib/utils'

const description =
  'Every Fork product: scheduling, timecards, chat, performance reviews, people & HR, hiring, SOPs and checklists, the feed, learning, reports, the AI assistant, ordering from vendors, receiving, selling and invoicing customers, delivery routes and service calls.'

export const metadata: Metadata = {
  title: 'Products — Fork | Scheduling, Reviews, SOPs, Supply, Sales & More',
  description,
  alternates: { canonical: '/products' },
  openGraph: { title: 'Products — Fork | Scheduling, Reviews, SOPs, Supply, Sales & More', description, url: 'https://forkhr.com/products', images: ['/og-image.png'], type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Products — Fork | Scheduling, Reviews, SOPs, Supply, Sales & More', description, images: ['/og-image.png'] },
}

const feePct = (PLATFORM_FEE_BPS / 100).toFixed(1).replace(/\.0$/, '')

type Item = { id: string; label: string; tier: TierKey; Icon: typeof CalendarDays; badge?: string }
type Chapter = { id: string; number: string; label: string; title: string; pitch: string; note: string; items: Item[] }

// The page in order. Ids are the anchors the header menu and other pages link to
// (/products#schedule, #timecards, #chat, #people, #feed, #learn, #reports ...).
const chapters: Chapter[] = [
  {
    id: 'team',
    number: '01',
    label: 'Team & people',
    title: 'The people who run the shifts',
    pitch: 'Schedules that publish to every phone, timecards from the kiosk, chat by location, and reviews written from the record.',
    note: 'Essential from $39 per location · Performance and HR on Pro',
    items: [
      { id: 'schedule', label: 'Schedule', tier: 'essential', Icon: CalendarDays },
      { id: 'timecards', label: 'Timecards & time off', tier: 'essential', Icon: Clock },
      { id: 'chat', label: 'Chat', tier: 'essential', Icon: MessageSquare },
      { id: 'performance', label: 'Performance', tier: 'pro', Icon: TrendingUp, badge: 'New' },
      { id: 'people', label: 'People & HR', tier: 'pro', Icon: FileSignature },
      { id: 'hiring', label: 'Hiring', tier: 'essential', Icon: Briefcase },
    ],
  },
  {
    id: 'operations',
    number: '02',
    label: 'Operations',
    title: 'Every shift, done the same way',
    pitch: 'Checklists that start with the shift, a feed people confirm they read, training in one tab, and answers from your own content.',
    note: 'SOPs, courses and the AI assistant on Premium',
    items: [
      { id: 'sops', label: 'SOPs & checklists', tier: 'premium', Icon: ClipboardCheck },
      { id: 'feed', label: 'Feed', tier: 'essential', Icon: Megaphone },
      { id: 'learn', label: 'Learn', tier: 'pro', Icon: BookOpen },
      { id: 'reports', label: 'Reports', tier: 'essential', Icon: PieChart },
      { id: 'ai', label: 'AI assistant', tier: 'premium', Icon: BotMessageSquare },
    ],
  },
  {
    id: 'money',
    number: '03',
    label: 'Supply & sales',
    title: 'The money in and out',
    pitch: 'Order from vendors, sell to customers, run service calls and get paid online, whether or not they use Fork.',
    note: `Free · a ${feePct}% fee only when a customer pays online`,
    items: [
      { id: 'supply', label: 'Order from vendors', tier: 'free', Icon: Package },
      { id: 'receiving', label: 'Receiving & credits', tier: 'free', Icon: PackageCheck },
      { id: 'vendor-chat', label: 'Vendor & customer chat', tier: 'free', Icon: MessagesSquare },
      { id: 'sales', label: 'Sell & get paid', tier: 'free', Icon: Receipt },
      { id: 'routes', label: 'Delivery routes', tier: 'free', Icon: Truck },
      { id: 'services', label: 'Service calls', tier: 'free', Icon: Wrench },
    ],
  },
]

const TIER_LABEL: Record<TierKey, string> = { free: 'Free', essential: 'Essential', pro: 'Pro', premium: 'Premium' }

const TierChip = ({ tier }: { tier: TierKey }) => (
  <span className={tier === 'free' ? 'rounded-full bg-ok-50 px-2 py-0.5 text-[10.5px] font-semibold text-ok-700' : 'rounded-full bg-warm-100 px-2 py-0.5 text-[10.5px] font-semibold text-warm-600'}>{TIER_LABEL[tier]}</span>
)

/** Each chapter's gradient is cut differently on wide screens, so the openings don't repeat. */
const WEDGES: Record<string, string> = {
  team: 'lg:[clip-path:polygon(34%_0,100%_0,100%_100%,0_100%)]',
  operations: 'lg:[clip-path:polygon(0_0,100%_0,100%_100%,34%_100%)]',
  money: 'lg:[clip-path:ellipse(100%_66%_at_100%_50%)]',
}

/**
 * A chapter opens on a dark band: the side of the business and what it covers, with its number
 * on a cut of the moving gradient (a wedge on the right; a slanted strip across the top on phones).
 */
const ChapterHeader = ({ chapter, seed }: { chapter: Chapter; seed: number }) => (
  <section id={`chapter-${chapter.id}`} className="relative scroll-mt-32 overflow-hidden bg-warm-950">
    <div
      aria-hidden="true"
      className={cn(
        'pointer-events-none absolute inset-x-0 top-0 h-24 [clip-path:polygon(0_0,100%_0,100%_100%,0_58%)] lg:inset-x-auto lg:inset-y-0 lg:right-0 lg:h-auto lg:w-[40%]',
        WEDGES[chapter.id],
      )}
    >
      <GradientCanvas seed={seed} className="h-full w-full" />
    </div>
    <div className="relative mx-auto flex max-w-6xl items-end justify-between gap-10 px-6 pb-14 pt-32 md:pb-20 lg:pt-20">
      <div className="max-w-xl lg:max-w-[52%]">
        <span className="eyebrow text-lime-accent">{chapter.label}</span>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight text-white md:text-5xl">{chapter.title}</h2>
        <p className="mt-4 text-lg leading-relaxed text-warm-400">{chapter.pitch}</p>
        <p className="mt-4 text-[13px] text-warm-500">{chapter.note}</p>
      </div>
      <span
        aria-hidden="true"
        className="absolute right-6 top-4 text-[60px] font-semibold leading-[0.8] tracking-[-0.04em] text-white drop-shadow-[0_10px_30px_rgba(15,23,42,0.25)] lg:static lg:text-[150px]"
      >
        {chapter.number}
      </span>
    </div>
  </section>
)

/** Two ProductCards side by side. */
const CardRow = ({ children, paper = true }: { children: ReactNode; paper?: boolean }) => (
  <section className={paper ? 'border-b border-warm-100 bg-warm-50' : 'border-b border-warm-100'}>
    <div className="mx-auto grid max-w-6xl gap-6 px-6 py-14 md:py-20 lg:grid-cols-2">{children}</div>
  </section>
)

const navGroups = chapters.map((c) => ({
  id: `chapter-${c.id}`,
  label: c.label,
  items: c.items.map((i) => ({ id: i.id, label: i.label, icon: <i.Icon className="h-3.5 w-3.5 text-forest-600" /> })),
}))

export default function ProductsPage() {
  const [team, ops, money] = chapters
  return (
    <main className="pt-16">
      {/* Hero: the whole map of products, floating on the moving gradient */}
      <section className="relative overflow-hidden border-b border-warm-100">
        <Backdrop />
        <div className="relative mx-auto max-w-6xl px-6 pb-16 pt-12 md:pb-24 md:pt-20">
          <div className="grid items-end gap-6 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
            <div>
              <span className="eyebrow">Products</span>
              <h1 className="mt-4 text-4xl font-semibold leading-[1.05] tracking-[-0.02em] text-warm-950 sm:text-5xl md:text-6xl">Everything the shop runs on, in one app</h1>
            </div>
            <div className="lg:pb-1">
              <p className="text-lg leading-relaxed text-warm-600">Team, operations and money, with one login, one record and one bill. Jump to a part, or scroll through all of it.</p>
              <div className="mt-7 flex flex-wrap items-center gap-4">
                <Link href={REGISTER_URL} target="_blank">
                  <Button size="lg" className="h-11 px-6 text-base">
                    {CTA_PRIMARY}
                    <ArrowRight className="ml-1.5 h-4 w-4" />
                  </Button>
                </Link>
                <Link href="/pricing">
                  <Button variant="outline" size="lg" className="h-11 px-6 text-base">
                    Compare plans
                  </Button>
                </Link>
              </div>
              <p className="mt-4 text-sm text-warm-500">Supply and Sales are free. Team tools from $39 per location.</p>
            </div>
          </div>

          <div className="on-gradient relative mt-12 md:mt-16">
            <GradientStage variant="band" seed={3} />
            <div className="relative grid gap-5 lg:grid-cols-3">
              {chapters.map((c) => (
                <div key={c.id} className="rounded-2xl bg-white p-2 shadow-[0_30px_70px_-30px_rgba(15,23,42,0.45)] ring-1 ring-warm-200/70">
                  <a href={`#chapter-${c.id}`} className="group block rounded-xl bg-warm-50 px-4 py-3.5 transition-colors hover:bg-warm-100">
                    <div className="flex items-baseline gap-2">
                      <span className="text-[13px] font-semibold tabular-nums text-warm-400">{c.number}</span>
                      <span className="text-[17px] font-semibold tracking-tight text-warm-950">{c.label}</span>
                    </div>
                    <p className="mt-1 text-[13px] leading-snug text-warm-500">{c.title}</p>
                  </a>
                  <ul className="mt-1">
                    {c.items.map((i) => (
                      <li key={i.id}>
                        <a href={`#${i.id}`} className="group flex items-center gap-3 rounded-lg px-3 py-2.5 transition-colors hover:bg-warm-50">
                          <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-warm-100 text-warm-700 transition-colors group-hover:bg-forest-50 group-hover:text-forest-600">
                            <i.Icon className="h-4 w-4" />
                          </span>
                          <span className="flex min-w-0 flex-1 items-center gap-1.5 text-[14px] font-semibold text-warm-900">
                            <span className="truncate">{i.label}</span>
                            {i.badge && <span className="rounded-full bg-forest-50 px-1.5 py-px text-[9.5px] font-bold uppercase tracking-wider text-forest-600">{i.badge}</span>}
                          </span>
                          <TierChip tier={i.tier} />
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <ProductsNav groups={navGroups} />

      {/* ── 01 Team & people ─────────────────────────────── */}
      <ChapterHeader chapter={team} seed={11} />
      <FeatureRow
        id="schedule"
        className="scroll-mt-36"
        eyebrow="Schedule"
        plan="essential"
        title="Build the week. Publish once."
        lede="Drag shifts onto the week. Publish. Every phone gets a push."
        bullets={['Templates, copy last week', 'Open shifts and trades, approved in a tap', 'Conflicts caught before publishing']}
        preview={<SchedulePreview />}
        previewTitle="Fork · Schedule · Main St"
      />
      <CardRow>
        <ProductCard
          id="timecards"
          eyebrow="Timecards & time off"
          plan="essential"
          title="Any tablet is the clock"
          lede="Punches are checked against the schedule. The week goes to payroll in a tap."
          bullets={['Kiosk with PINs, phone, GPS', 'Late and missed-break flags', 'Time off approved onto the schedule']}
          preview={<TimecardsPreview />}
          previewTitle="Fork · Timecards · Today"
        />
        <ProductCard
          id="chat"
          eyebrow="Chat"
          plan="essential"
          title="One place to talk, by location and job"
          lede="Channels are created for you. Photos, mentions, read receipts."
          bullets={['Channels per location and job', 'Direct messages and files', 'Vendor and customer chats, same place']}
          preview={<ChatPreview />}
          previewTitle="Fork · Chat · #main-st"
        />
      </CardRow>
      <FeatureRow
        id="performance"
        className="scroll-mt-36"
        flip
        badge="New"
        eyebrow="Performance"
        plan="pro"
        title="Reviews written from the record"
        lede="Attendance, shift flags, tasks and training sit beside every question. Reviews start on their own."
        bullets={['90-day and anniversary reviews, self reviews on a phone', 'Raises approved and applied to the pay rate', 'Check-ins, goals, team feedback; improvement plans (Premium)']}
        preview={<PerformancePreview />}
        previewTitle="Fork · Performance · Maya Chen"
        href="/performance"
        hrefLabel="Explore performance"
      />
      <CardRow>
        <ProductCard
          id="people"
          eyebrow="People & HR"
          plan="pro"
          title="Paperless from first day to last"
          lede="Onboarding guides, forms and contracts signed on a phone, documents that never lapse quietly."
          bullets={['W-4, I-9 and custom forms', 'Documents with expiry reminders', 'Contracts, violations, records (Premium)']}
          preview={<PeoplePreview />}
          previewTitle="Fork · People · Jordan Lee"
        />
        <ProductCard
          id="hiring"
          eyebrow="Hiring"
          plan="essential"
          title="Your own job board"
          lede="Post, screen, interview, hire. The profile and the app invite come with the hire."
          bullets={['Public board at jobs.forkhr.com/you', 'Screening questions and scorecards', 'AI resume scan (Premium)']}
          preview={<ApplicantPreview />}
          previewTitle="Fork · Hiring · Jordan Lee"
          href="/hiring"
          hrefLabel="Explore hiring"
        />
      </CardRow>

      {/* ── 02 Operations ───────────────────────────────── */}
      <ChapterHeader chapter={ops} seed={17} />
      <FeatureRow
        id="sops"
        className="scroll-mt-36"
        eyebrow="SOPs & checklists"
        plan="premium"
        title="Procedures your team runs on a phone"
        lede="Checklists start with the shift or a QR scan. Temps, waste and cash are logs on the same engine."
        bullets={['Opening, closing, temperature, waste, cash', 'Photos, numbers in range, signatures, timers', 'Reports: what was missed, where']}
        preview={<SopsPreview />}
        previewTitle="Fork · SOPs · Opening checklist"
        href="/sops"
        hrefLabel="Explore SOPs"
      />
      <CardRow>
        <ProductCard
          id="feed"
          eyebrow="Feed"
          plan="essential"
          title="The home tab on every phone"
          lede="Announcements, recognitions and surveys. Everything gets reactions and comments."
          bullets={['Pinned announcements with confirmations', 'Recognitions with badges', 'Surveys by location (Pro)']}
          preview={<FeedPreview />}
          previewTitle="Fork · Feed"
        />
        <ProductCard
          id="learn"
          eyebrow="Learn"
          plan="pro"
          title="Courses, policies, library, FAQs. One tab."
          lede="Everything someone needs to learn the job, where they will actually look."
          bullets={['Library by job or location', 'Courses with quizzes and badges (Premium)', 'Policies people acknowledge (Premium)']}
          preview={<LearningPreview />}
          previewTitle="Fork · Learn · Jordan Lee"
        />
      </CardRow>
      <CardRow paper={false}>
        <ProductCard
          id="reports"
          eyebrow="Reports"
          plan="essential"
          title="The numbers behind the shift"
          lede="Labor, attendance, purchasing and SOP reports, by location."
          bullets={['Labor cost, scheduled vs. actual', 'Sales vs. labor with Square', 'SOP reports: missed, waste, cash (Premium)']}
          preview={<ReportPreview />}
          previewTitle="Fork · Reports · Sales vs. labor"
        />
        <ProductCard
          id="ai"
          eyebrow="AI assistant"
          plan="premium"
          title="Answers from your own content"
          lede="Ask about a policy, a procedure or the schedule. It answers from what you published."
          bullets={['Policies, FAQs, courses, schedule', 'Role-aware answers', 'Drafts messages and open shifts']}
          preview={<AiPreview />}
          previewTitle="Fork · Assistant"
          href="/ai-assistant"
          hrefLabel="About the assistant"
        />
      </CardRow>

      {/* ── 03 Supply & sales ───────────────────────────── */}
      <ChapterHeader chapter={money} seed={23} />
      <FeatureRow
        id="supply"
        className="scroll-mt-36"
        eyebrow="Order from vendors"
        plan="free"
        title="Every vendor order in one place"
        lede="Vendors on Fork or not. Orders go out as email, replies come back as chat."
        bullets={['One-time and standing orders', 'Delivery days, cutoffs and minimums per vendor', 'Stock counts with par levels (Essential)']}
        preview={<SupplyPreview />}
        previewTitle="Fork · Supply · Orders"
        href="/supply"
        hrefLabel="Explore supply"
      />
      <CardRow>
        <ProductCard
          id="receiving"
          eyebrow="Receiving & credits"
          plan="free"
          title="Check deliveries in on a phone"
          lede="Short, extra or damaged lines flagged with a photo and sent to the vendor in one message."
          bullets={['Credit, return, or keep it and pay', 'Emailed to vendors not on Fork']}
          preview={<ReceivingPreview />}
          previewTitle="Fork · Order #1042"
          href="/supply#receiving"
          hrefLabel="See a delivery checked in"
        />
        <ProductCard
          id="vendor-chat"
          eyebrow="Vendor & customer chat"
          plan="free"
          title="Talk where the order lives"
          lede="One chat per vendor or customer. Not on Fork? It goes out as email and the reply comes back as chat."
          bullets={['Shared by everyone who orders', 'Free on every plan']}
          preview={<VendorChatPreview />}
          previewTitle="Fork · Chat · Bluebird Dairy"
        />
      </CardRow>
      <FeatureRow
        id="sales"
        className="scroll-mt-36"
        flip
        eyebrow="Sell & get paid"
        plan="free"
        title="Sell and get paid online"
        lede="Invoice from the order. Customers pay from the link or the QR code. No account needed."
        bullets={['Price lists per customer', 'Card and bank payments through Stripe', 'Credits come off the invoice automatically']}
        preview={<InvoicePreview />}
        previewTitle="Fork · Sales · Order S-2088"
        href="/sales"
        hrefLabel="Explore selling"
      />
      <CardRow>
        <ProductCard
          id="routes"
          eyebrow="Delivery routes"
          plan="free"
          title="Deliver on the best route"
          lede="Pick the orders and Fork puts the stops in order. The driver works them from the app."
          bullets={['Stops ordered on real road distances', 'Photos and a signature as proof of delivery']}
          preview={<RoutePreview />}
          previewTitle="Fork · Routes · Fri, Sep 26"
          href="/sales#routes"
          hrefLabel="See a delivery day"
        />
        <ProductCard
          id="services"
          eyebrow="Service calls"
          plan="free"
          title="From the service call to paid"
          lede="Book a technician, capture the visit, bill from it."
          bullets={['Photos, parts and a signature on site', 'Maintenance contracts that book themselves', 'A month of calls on one invoice']}
          preview={<ServiceCallPreview />}
          previewTitle="Fork · Service calls · #SR-1042"
          href="/service-providers"
          hrefLabel="Fork for service providers"
        />
      </CardRow>

      <CtaSection title="See it with your own team" lede="Ordering and selling are free. Team tools from $39 per location." />
    </main>
  )
}
