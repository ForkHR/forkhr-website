import type { Metadata } from 'next'
import Link from 'next/link'
import { BookOpen, BotMessageSquare, Briefcase, CalendarDays, ClipboardCheck, Clock, FileSignature, Megaphone, MessageSquare, Package, PieChart, Receipt } from 'lucide-react'
import Hero from '@/components/marketing/Hero'
import FeatureRow from '@/components/marketing/FeatureRow'
import CtaSection from '@/components/marketing/CtaSection'
import { AiPreview, ChatPreview, FeedPreview, HiringPreview, InvoicePreview, LearnPreview, PeoplePreview, ReportPreview, SchedulePreview, SopsPreview, SupplyPreview, TimecardsPreview } from '@/components/previews'

const description =
  'Every Fork product: scheduling, timecards, chat, feed, SOPs and checklists, learning, people & HR, hiring, ordering from vendors, selling and invoicing customers, reports and the AI assistant.'

export const metadata: Metadata = {
  title: 'Products — Fork | Scheduling, SOPs, Feed, Supply, Sales & More',
  description,
  alternates: { canonical: '/products' },
  openGraph: { title: 'Products — Fork | Scheduling, SOPs, Feed, Supply, Sales & More', description, url: 'https://forkhr.com/products', images: ['/og-image.png'], type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Products — Fork | Scheduling, SOPs, Feed, Supply, Sales & More', description, images: ['/og-image.png'] },
}

const anchors = [
  { id: 'schedule', label: 'Schedule', icon: CalendarDays },
  { id: 'timecards', label: 'Timecards', icon: Clock },
  { id: 'chat', label: 'Chat', icon: MessageSquare },
  { id: 'feed', label: 'Feed', icon: Megaphone },
  { id: 'sops', label: 'SOPs', icon: ClipboardCheck },
  { id: 'learn', label: 'Learn', icon: BookOpen },
  { id: 'people', label: 'People & HR', icon: FileSignature },
  { id: 'hiring', label: 'Hiring', icon: Briefcase },
  { id: 'supply', label: 'Supply', icon: Package },
  { id: 'sales', label: 'Sales', icon: Receipt },
  { id: 'reports', label: 'Reports', icon: PieChart },
  { id: 'ai', label: 'Assistant', icon: BotMessageSquare },
]

export default function ProductsPage() {
  return (
    <main className="pt-16">
      <Hero title="Everything between opening and closing" lede="One app for the team, the shifts and the money." secondaryHref="/pricing" secondaryLabel="Compare plans" note="Supply and Sales are free. Team tools from $39 per location." />

      {/* Anchor nav */}
      <div className="sticky top-16 z-30 border-b border-warm-100 bg-white/90 backdrop-blur-md">
        <div className="mx-auto flex max-w-6xl gap-2 overflow-x-auto px-6 py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {anchors.map((a) => (
            <Link key={a.id} href={`#${a.id}`} className="inline-flex shrink-0 items-center gap-1.5 rounded-full border border-warm-200 bg-white px-3 py-1.5 text-[13px] font-medium text-warm-600 transition-colors hover:border-warm-300 hover:text-warm-950">
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
        title="Build the week. Publish once."
        lede="Drag shifts onto the week. Publish. Every phone gets a push."
        bullets={['Templates, copy last week', 'Open shifts and trades, approved in a tap', 'Conflicts caught before publishing']}
        preview={<SchedulePreview />}
        previewTitle="Fork · Schedule · Main St"
      />

      <FeatureRow
        id="timecards"
        flip
        eyebrow="Timecards & time off"
        plan="essential"
        title="Any tablet is the clock"
        lede="Punches are checked against the schedule. The week goes to payroll in a tap."
        bullets={['Kiosk with PINs, phone, GPS', 'Late and missed-break flags', 'Time off approved onto the schedule']}
        preview={<TimecardsPreview />}
        previewTitle="Fork · Timecards · Today"
      />

      <FeatureRow
        id="chat"
        eyebrow="Chat"
        plan="essential"
        title="One place to talk, by location and job"
        lede="Channels are created for you. Photos, mentions, read receipts."
        bullets={['Channels per location and job', 'Direct messages and files', 'Vendor and customer chats, same place']}
        preview={<ChatPreview />}
        previewTitle="Fork · Chat · #main-st"
      />

      <FeatureRow
        id="feed"
        flip
        eyebrow="Feed"
        plan="essential"
        title="The home tab on every phone"
        lede="Announcements, recognitions and surveys. Everything gets reactions and comments."
        bullets={['Pinned announcements with confirmations', 'Recognitions with badges', 'Surveys by location (Pro)']}
        preview={<FeedPreview />}
        previewTitle="Fork · Feed"
      />

      <FeatureRow
        id="sops"
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

      <FeatureRow
        id="learn"
        flip
        eyebrow="Learn"
        plan="pro"
        title="Courses, policies, library, FAQs. One tab."
        lede="Everything someone needs to learn the job, where they will actually look."
        bullets={['Library by job or location', 'Courses with video and quizzes (Premium)', 'Policies people sign (Premium)']}
        preview={<LearnPreview />}
        previewTitle="Fork · Learn"
      />

      <FeatureRow
        id="people"
        eyebrow="People & HR"
        plan="pro"
        title="Paperless from first day to last"
        lede="Onboarding guides, forms and contracts signed on a phone, documents that never lapse quietly."
        bullets={['W-4, I-9 and custom forms', 'Documents with expiry reminders', 'Contracts, violations, records (Premium)']}
        preview={<PeoplePreview />}
        previewTitle="Fork · People · Jordan Lee"
      />

      <FeatureRow
        id="hiring"
        flip
        eyebrow="Hiring"
        plan="essential"
        title="Your own job board"
        lede="Post, screen, interview, hire. The new hire lands in onboarding."
        bullets={['Public board at jobs.forkhr.com/you', 'Screening questions and scorecards', 'AI resume scan (Premium)']}
        preview={<HiringPreview />}
        previewTitle="Fork · Hiring · Line cook"
        href="/hiring"
        hrefLabel="Explore hiring"
      />

      <FeatureRow
        id="supply"
        eyebrow="Supply"
        plan="free"
        title="Every vendor order in one place"
        lede="Vendors on Fork or not. Orders go out as email, replies come back as chat."
        bullets={['One-time and standing orders', 'Receive, log issues, request credits', 'Stock counts with par levels (Essential)']}
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
        title="Sell and get paid online"
        lede="Invoice from the order. Customers pay from the link or the QR code. No account needed."
        bullets={['Price lists per customer', 'Card and bank payments through Stripe', 'Delivery routes with proof of delivery']}
        preview={<InvoicePreview />}
        previewTitle="Fork · Sales · Order S-2088"
        href="/sales"
        hrefLabel="Explore selling"
      />

      <FeatureRow
        id="reports"
        eyebrow="Reports"
        plan="essential"
        title="The numbers behind the shift"
        lede="Labor, attendance, purchasing and SOP reports, by location."
        bullets={['Labor cost, scheduled vs. actual', 'Sales vs. labor with Square', 'SOP reports: missed, waste, cash (Premium)']}
        preview={<ReportPreview />}
        previewTitle="Fork · Reports · Sales vs. labor"
      />

      <FeatureRow
        id="ai"
        flip
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

      <CtaSection title="See it with your own team" lede="Ordering and selling are free. Team tools from $39 per location." />
    </main>
  )
}
