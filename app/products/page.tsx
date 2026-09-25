import type { Metadata } from 'next'
import Link from 'next/link'
import {
  BookOpen,
  BotMessageSquare,
  Briefcase,
  CalendarDays,
  ClipboardCheck,
  Clock,
  FileSignature,
  Megaphone,
  MessageSquare,
  Package,
  PieChart,
  Receipt,
} from 'lucide-react'
import Hero from '@/components/marketing/Hero'
import FeatureRow from '@/components/marketing/FeatureRow'
import CtaSection from '@/components/marketing/CtaSection'
import {
  AiPreview,
  ChatPreview,
  FeedPreview,
  HiringPreview,
  InvoicePreview,
  LearnPreview,
  PeoplePreview,
  ReportPreview,
  SchedulePreview,
  SopsPreview,
  SupplyPreview,
  TimecardsPreview,
} from '@/components/previews'

const description =
  'Every Fork product: scheduling, timecards, chat, feed, SOPs and checklists, learning, people & HR, hiring, ordering from vendors, selling and invoicing customers, reports and the AI assistant.'

export const metadata: Metadata = {
  title: 'Products — Fork | Scheduling, SOPs, Feed, Supply, Sales & More',
  description,
  alternates: { canonical: '/products' },
  openGraph: {
    title: 'Products — Fork | Scheduling, SOPs, Feed, Supply, Sales & More',
    description,
    url: 'https://forkhr.com/products',
    images: ['/og-image.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Products — Fork | Scheduling, SOPs, Feed, Supply, Sales & More',
    description,
    images: ['/og-image.png'],
  },
}

const anchors = [
  { id: 'schedule', label: 'Schedule', icon: CalendarDays },
  { id: 'timecards', label: 'Timecards & time off', icon: Clock },
  { id: 'chat', label: 'Chat', icon: MessageSquare },
  { id: 'feed', label: 'Feed', icon: Megaphone },
  { id: 'sops', label: 'SOPs', icon: ClipboardCheck },
  { id: 'learn', label: 'Learn', icon: BookOpen },
  { id: 'people', label: 'People & HR', icon: FileSignature },
  { id: 'hiring', label: 'Hiring', icon: Briefcase },
  { id: 'supply', label: 'Supply', icon: Package },
  { id: 'sales', label: 'Sales', icon: Receipt },
  { id: 'reports', label: 'Reports', icon: PieChart },
  { id: 'ai', label: 'AI assistant', icon: BotMessageSquare },
]

export default function ProductsPage() {
  return (
    <main className="pt-16">
      <Hero
        title="Everything between opening and closing, in one app"
        lede="One app for the team, the operations and the money: schedules, timecards and chat; SOPs, feed and learning; orders to your vendors and invoices to your customers."
        secondaryHref="/pricing"
        secondaryLabel="Compare plans"
        note="Supply and Sales are free. Team tools are one price per location, unlimited employees."
      />

      {/* Anchor nav */}
      <div className="sticky top-16 z-30 border-b border-warm-100 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl gap-2 overflow-x-auto px-6 py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {anchors.map((a) => (
            <Link
              key={a.id}
              href={`#${a.id}`}
              className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-warm-200 bg-white px-3 py-1.5 text-[13px] font-medium text-warm-600 transition-colors hover:border-warm-300 hover:text-warm-950"
            >
              <a.icon className="h-3.5 w-3.5 text-forest-600" />
              {a.label}
            </Link>
          ))}
        </div>
      </div>

      <FeatureRow
        id="schedule"
        eyebrow="Schedule"
        plan="essential"
        title="Build and share schedules your team can rely on"
        lede="Drag shifts onto the week, see availability and approved time off while you do, and publish. Everyone gets a push notification, and the schedule on their phone is always the current one."
        bullets={[
          'Weekly templates, copy last week, drag-and-drop edits',
          'Open shifts anyone eligible can claim, trades a manager approves in a tap',
          'Availability and approved time off shown while you build',
          'Shift tasks, notes and flags for late, covering or great work',
          'Conflicts caught before publishing: overlaps, double-bookings, time off',
        ]}
        preview={<SchedulePreview />}
        previewTitle="Fork · Schedule · Main St"
      />

      <FeatureRow
        id="timecards"
        flip
        eyebrow="Timecards & time off"
        plan="essential"
        title="Accurate hours without expensive hardware"
        lede="Turn any tablet into a clock-in kiosk, or let people clock in from their phone with GPS. Punches are checked against the schedule, breaks and overtime are applied, and the week is one tap from payroll."
        bullets={[
          'Kiosk with PINs, phone clock-in, GPS fences per location',
          'Late, early and missed-break verdicts against the scheduled shift',
          'Time off requests with balances, approved straight onto the schedule',
          'Approve the week, export for payroll, see labor cost and labor % live',
        ]}
        preview={<TimecardsPreview />}
        previewTitle="Fork · Timecards · Today"
      />

      <FeatureRow
        id="chat"
        eyebrow="Chat"
        plan="essential"
        title="One place to talk, by location and by job"
        lede="Company, location and job channels are created for you. Direct messages, photos, mentions and read receipts, plus system posts when a schedule is published or an order changes."
        bullets={[
          'Channels per location and job, created and kept in sync automatically',
          'Direct messages, photos, files and read receipts',
          'Share a shift, an SOP run or an order into a conversation',
          'Vendor and customer conversations live here too, with the email bridge',
        ]}
        preview={<ChatPreview />}
        previewTitle="Fork · Chat · #main-st"
      />

      <FeatureRow
        id="feed"
        flip
        eyebrow="Feed"
        plan="essential"
        title="Announcements, recognitions and surveys in one feed"
        lede="The feed is the home tab on every phone. Announcements can be pinned and require confirmation. Recognitions carry badges. Surveys collect answers by location. Everything gets reactions and comments."
        bullets={[
          'Announcements to a location or the whole company, with confirmations and read receipts',
          'Recognitions with badges, tied to shift performance flags',
          'Surveys, anonymous or named, with results by location and job (Pro)',
          'Files, links, SOPs and shifts as attachments',
        ]}
        preview={<FeedPreview />}
        previewTitle="Fork · Feed"
      />

      <FeatureRow
        id="sops"
        eyebrow="SOPs & checklists"
        plan="premium"
        title="Turn procedures into runs your team completes on a phone"
        lede="Boards hold the status flow. Procedures hold the steps. Runs are what people do: scheduled, triggered by a shift, or started from a QR code on the fridge. Temperature, waste, cash and equipment logs are boards like any other."
        bullets={[
          'Opening and closing checklists, temperature checks, waste and cash logs',
          'Equipment care routines, incident boards, production batches',
          'Steps that ask for photos, numbers with a range, signatures, timers or a scan',
          'Reports per board: what was missed, where, and what it cost',
        ]}
        preview={<SopsPreview />}
        previewTitle="Fork · SOPs · Opening checklist"
        href="/sops"
        hrefLabel="Explore SOPs in depth"
      />

      <FeatureRow
        id="learn"
        flip
        eyebrow="Learn"
        plan="pro"
        title="Courses, policies, library and FAQs in one tab"
        lede="Everything someone needs to learn the job, in the tab they actually open. Courses with video and quizzes, policies that need a signature, a library of files by job or location, and FAQs that also feed the assistant."
        bullets={[
          'Shared library with folders by job or location, read tracking (Pro)',
          'Training courses with modules, video, quizzes and certificates (Premium)',
          'Versioned policies with signed acknowledgements and reminders (Premium)',
          'Company FAQs, searchable from the app and used by the assistant (Premium)',
        ]}
        preview={<LearnPreview />}
        previewTitle="Fork · Learn"
      />

      <FeatureRow
        id="people"
        eyebrow="People & HR"
        plan="pro"
        title="Paperless HR from first day to last"
        lede="Onboarding guides with the forms, documents and courses a new hire needs, in order. Contracts from templates, e-signed on a phone. Documents with expiry reminders. And when things go wrong, violations and termination records with a fair, documented trail."
        bullets={[
          'Onboarding guides with progress per employee',
          'W-4, I-9 and custom forms filled and signed on a phone',
          'Documents with expiry reminders and owner-only access',
          'Contracts and e-signatures from templates (Premium)',
          'Violations with employee acknowledgement and termination records (Premium)',
        ]}
        preview={<PeoplePreview />}
        previewTitle="Fork · People · Jordan Lee"
      />

      <FeatureRow
        id="hiring"
        flip
        eyebrow="Hiring"
        plan="essential"
        title="Your own job board and a pipeline that ends in onboarding"
        lede="Post to a branded board at jobs.forkhr.com/your-company. Screen with custom questions, scan resumes with AI, interview, score and hire. The new hire lands in onboarding with their app invite sent."
        bullets={[
          'Public, SEO-friendly job board with your branding',
          'Screening questions and weighted scorecards',
          'Applied → Interview → Feedback → Result, with automatic emails',
          'AI resume scan with highlights, red flags and fit (Premium)',
        ]}
        preview={<HiringPreview />}
        previewTitle="Fork · Hiring · Line cook"
        href="/hiring"
        hrefLabel="Explore hiring"
      />

      <FeatureRow
        id="supply"
        eyebrow="Supply"
        plan="free"
        title="Order from every vendor in one place"
        lede="Orders to any vendor, whether or not they use Fork. Standing orders that create themselves. Stock counts that suggest what to reorder. And a conversation per vendor that works over email when they are not on Fork."
        bullets={[
          'One-time and standing orders, emailed to the vendor with a PDF',
          'Receive and check in deliveries, log issues, request credits',
          'Stock counts with par levels and reorder suggestions (Essential)',
          'Vendor market to find suppliers that deliver to you',
        ]}
        preview={<SupplyPreview />}
        previewTitle="Fork · Supply · Orders"
        href="/supply"
        hrefLabel="Explore supply"
      />

      <FeatureRow
        id="sales"
        flip
        eyebrow="Sales"
        plan="free"
        title="Sell to your customers and get paid online"
        lede="Your catalog, your customers, your orders. Invoice from an order and get paid by card or US bank transfer, from the emailed link or the QR code on the PDF. Customers do not need a Fork account, though they can claim one later."
        bullets={[
          'Catalog with images, customer-specific price lists',
          'Sales orders, standing orders and imports from a spreadsheet',
          'Invoices with pay link and QR, paid through Stripe, paid out to your bank',
          'Delivery routes with optimized stops and proof of delivery',
        ]}
        preview={<InvoicePreview />}
        previewTitle="Fork · Sales · Order S-2088"
        href="/sales"
        hrefLabel="Explore selling through Fork"
      />

      <FeatureRow
        id="reports"
        eyebrow="Reports"
        plan="essential"
        title="The numbers behind the shift"
        lede="Labor, attendance, purchasing, sales and SOP reports, by location and by period. Connect Square and see labor against sales by the hour."
        bullets={[
          'Labor cost, hourly labor cost, employee hours, scheduled vs. actual',
          'On-time arrival and shift performance (Premium)',
          'Sales vs. labor with Square sales synced every 20 minutes',
          'Purchases, product spending, disputes, sales and catalog performance',
          'SOP reports: overview, routines, waste, cash movement, expenses, staff (Premium)',
        ]}
        preview={<ReportPreview />}
        previewTitle="Fork · Reports · Sales vs. labor"
      />

      <FeatureRow
        id="ai"
        flip
        eyebrow="AI assistant"
        plan="premium"
        title="An assistant that answers from your own content"
        lede="Ask about the schedule, a policy or a procedure and get an answer sourced from what you published, matched to the person's role. It drafts messages and escalates to a manager when it should."
        bullets={[
          'Answers from your policies, FAQs, courses, library and schedule',
          'Role-aware: owners, managers and employees see what they should',
          'Drafts announcements, messages and open shifts',
          'Company-isolated, never used to train other models',
        ]}
        preview={<AiPreview />}
        previewTitle="Fork · Assistant"
        href="/ai-assistant"
        hrefLabel="Learn more about the assistant"
      />

      <CtaSection title="See it with your own team" lede="Ordering and selling are free. Add scheduling, SOPs and the rest when you are ready, from $39 per location per month." />
    </main>
  )
}
