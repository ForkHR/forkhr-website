import { Button } from '@/components/ui/button'
import {
  ArrowRight,
  CalendarClock,
  ClockIcon,
  FileText,
  Users,
  BookOpen,
  Shield,
  CheckCircle2,
  MapPin,
  Smartphone,
  Send,
  ArrowLeftRight,
  Coffee,
  Timer,
  FolderOpen,
  FileSignature,
  UserPlus,
  BarChart3,
  Bell,
  Star,
  Wrench,
  ClipboardList,
  AlertTriangle,
  DollarSign,
  History,
  Camera,
  Trash2,
  Package,
  TrendingDown,
  PieChart,
  Tag,
  HelpCircle,
  ListOrdered,
  Eye,
  MessageSquare,
  Bot,
  PenLine,
  ShieldAlert,
  Scale,
  Gavel,
  UserX,
  Search,
  Brain,
  FileCheck,
} from 'lucide-react'
import Link from 'next/link'
import BlobBackground from '@/components/visual/BlobBackground'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Products — Fork | Scheduling, Time Tracking, HR, Incidents, Violations & More',
  description:
    'Explore all Fork products: shift scheduling, time & attendance, paperless onboarding, document management, incidents & violations, surveys, recognition, training, company FAQs, maintenance logs, and waste control.',
  alternates: {
    canonical: '/products',
  },
  openGraph: {
    title: 'Products — Fork | Scheduling, Time Tracking, HR, Incidents, Violations & More',
    description:
      'Explore all Fork products: shift scheduling, time & attendance, paperless onboarding, document management, incidents & violations, surveys, recognition, training, company FAQs, maintenance logs, and waste control.',
    url: 'https://forkhr.com/products',
    images: ['/og-image.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Products — Fork | Scheduling, Time Tracking, HR, FAQs, Maintenance & Waste Control',
    description:
      'Explore all Fork products: shift scheduling, time & attendance, paperless onboarding, document management, surveys, recognition, training, company FAQs, maintenance logs, and waste control.',
    images: ['/og-image.png'],
  },
}

const sections = [
  {
    id: 'scheduling',
    label: 'Scheduling',
    icon: <CalendarClock className="w-5 h-5" />,
    headline: 'Build and share schedules your team can rely on',
    description:
      'Create weekly schedules in minutes with drag-and-drop. Your team sees updates instantly on web or mobile — no more texting schedules or printing spreadsheets.',
    features: [
      {
        icon: <Send className="w-5 h-5 text-forest-600" />,
        title: 'Instant schedule publishing',
        desc: 'Build your schedule, hit publish, and every team member gets notified immediately. No emails, no printouts.',
      },
      {
        icon: <CalendarClock className="w-5 h-5 text-forest-600" />,
        title: 'Always up to date',
        desc: 'Edits sync in real time. When you move a shift, your team sees the change instantly on their phone.',
      },
      {
        icon: <Timer className="w-5 h-5 text-forest-600" />,
        title: 'Weekly availability',
        desc: 'Employees set when they can work. You see availability at a glance while building the schedule.',
      },
      {
        icon: <CheckCircle2 className="w-5 h-5 text-forest-600" />,
        title: 'Shift tasks & notes',
        desc: 'Attach checklists and instructions to each shift so your team knows exactly what to do.',
      },
      {
        icon: <ArrowLeftRight className="w-5 h-5 text-forest-600" />,
        title: 'Open shifts & shift swaps',
        desc: 'Post open shifts for your team to claim. Approve swap requests with one tap.',
      },
      {
        icon: <Coffee className="w-5 h-5 text-forest-600" />,
        title: 'Time-off requests',
        desc: 'Employees request time off in the app. You approve or decline — and the schedule updates automatically.',
      },
    ],
  },
  {
    id: 'time-tracking',
    label: 'Time & Attendance',
    icon: <ClockIcon className="w-5 h-5" />,
    headline: 'Accurate time tracking without expensive hardware',
    description:
      'Turn any tablet, phone, or computer into a clock-in terminal. Timesheets are filled automatically and ready for payroll.',
    features: [
      {
        icon: <Smartphone className="w-5 h-5 text-forest-600" />,
        title: 'Clock-in from any device',
        desc: 'Use an iPad, Android tablet, or computer as a clock-in terminal. Assign PINs and go — no costly hardware.',
      },
      {
        icon: <Timer className="w-5 h-5 text-forest-600" />,
        title: 'Real-time timesheets',
        desc: 'Every clock-in and clock-out is recorded instantly. Managers can review and edit entries at any time.',
      },
      {
        icon: <MapPin className="w-5 h-5 text-forest-600" />,
        title: 'GPS clock-in',
        desc: 'Set up geo-fenced locations so employees can only clock in when they are on-site.',
      },
      {
        icon: <Users className="w-5 h-5 text-forest-600" />,
        title: 'Live team status',
        desc: 'See who is clocked in, on break, or clocked out — in real time across all your locations.',
      },
    ],
  },
  {
    id: 'hr-onboarding',
    label: 'HR & Onboarding',
    icon: <FileText className="w-5 h-5" />,
    headline: 'Paperless HR that keeps you compliant',
    description:
      'Digitize onboarding, manage documents, and handle employment forms — so nothing falls through the cracks.',
    features: [
      {
        icon: <UserPlus className="w-5 h-5 text-forest-600" />,
        title: 'Paperless onboarding',
        desc: 'New hires complete W-4, I-9, and custom forms online before their first day. No more chasing paperwork.',
      },
      {
        icon: <FolderOpen className="w-5 h-5 text-forest-600" />,
        title: 'Document management',
        desc: 'Upload, request, and organize employee documents. Set expiration reminders so certifications never lapse.',
      },
      {
        icon: <FileSignature className="w-5 h-5 text-forest-600" />,
        title: 'E-signatures',
        desc: 'Collect legally-binding signatures on any document — right from the app.',
      },
      {
        icon: <FileText className="w-5 h-5 text-forest-600" />,
        title: 'Custom forms',
        desc: 'Build forms for any HR process using a drag-and-drop form builder.',
      },
      {
        icon: <Shield className="w-5 h-5 text-forest-600" />,
        title: 'Hiring & job postings',
        desc: 'Post openings, track applicants, and move candidates through your pipeline — all in one place.',
      },
    ],
  },
  {
    id: 'incidents',
    label: 'Incidents',
    icon: <ShieldAlert className="w-5 h-5" />,
    headline: 'Document workplace incidents with structured reports and AI insights',
    description:
      'Give managers a structured way to report workplace injuries, safety events, and other incidents. Attach evidence, assign witnesses, and let AI analyze every report so nothing gets overlooked.',
    features: [
      {
        icon: <AlertTriangle className="w-5 h-5 text-forest-600" />,
        title: 'Structured incident reports',
        desc: 'Document injuries, safety events, and workplace incidents with structured forms. Classify each report by type and severity.',
      },
      {
        icon: <Brain className="w-5 h-5 text-forest-600" />,
        title: 'AI-powered analysis',
        desc: 'Fork\'s AI summarizes every incident, flags severity, identifies potential legal risk, and recommends follow-up actions automatically.',
      },
      {
        icon: <Search className="w-5 h-5 text-forest-600" />,
        title: 'Review & resolution workflow',
        desc: 'Move incidents through draft → in-review → under-investigation → resolved. Track who reviewed each report and when it was closed.',
      },
      {
        icon: <Camera className="w-5 h-5 text-forest-600" />,
        title: 'Evidence & documentation',
        desc: 'Attach photos, files, and links to any report. Upload supporting documents during creation or add them later as the investigation progresses.',
      },
      {
        icon: <History className="w-5 h-5 text-forest-600" />,
        title: 'Full audit trail',
        desc: 'Every status change, review, and update is logged with timestamps and user attribution — giving you a tamper-proof history for audits and legal protection.',
      },
      {
        icon: <FileCheck className="w-5 h-5 text-forest-600" />,
        title: 'PDF report generation',
        desc: 'Generate professional incident reports as PDFs — ready for legal review, insurance claims, or internal records.',
      },
    ],
  },
  {
    id: 'violations-terminations',
    label: 'Violations & Terminations',
    icon: <Gavel className="w-5 h-5" />,
    headline: 'Track employee violations and manage terminations in one place',
    description:
      'Record policy violations, issue disciplinary actions, and build a documented trail that leads to fair, compliant terminations when needed. AI analyzes every case to flag risk and recommend next steps.',
    features: [
      {
        icon: <Gavel className="w-5 h-5 text-forest-600" />,
        title: 'Employee violation tracking',
        desc: 'Record policy violations with the employee involved, violated policy, witnesses, and source. Keep a compliant paper trail for every event.',
      },
      {
        icon: <Scale className="w-5 h-5 text-forest-600" />,
        title: 'Disciplinary action management',
        desc: 'Record verbal warnings, written notices, suspensions, and more. Link disciplinary actions directly to the violation with effective dates.',
      },
      {
        icon: <UserX className="w-5 h-5 text-forest-600" />,
        title: 'Termination records',
        desc: 'When violations lead to termination, create structured termination records with related violations, approval workflows, and offboarding details.',
      },
      {
        icon: <Brain className="w-5 h-5 text-forest-600" />,
        title: 'AI-powered analysis',
        desc: 'Fork\'s AI summarizes every violation and termination, flags severity and legal risk, identifies policies involved, and recommends actions.',
      },
      {
        icon: <History className="w-5 h-5 text-forest-600" />,
        title: 'Full audit trail',
        desc: 'Every status change, review, and disciplinary action is logged with timestamps and user attribution — tamper-proof records for legal protection.',
      },
      {
        icon: <FileCheck className="w-5 h-5 text-forest-600" />,
        title: 'PDF report generation',
        desc: 'Generate professional violation and termination reports as PDFs — ready for legal review or HR records.',
      },
    ],
  },
  {
    id: 'team-engagement',
    label: 'Team Engagement',
    icon: <Users className="w-5 h-5" />,
    headline: 'Keep your team connected, informed, and motivated',
    description:
      'Surveys, announcements, recognition, and training tools that reduce turnover and build a stronger workplace culture.',
    features: [
      {
        icon: <BarChart3 className="w-5 h-5 text-forest-600" />,
        title: 'Employee surveys',
        desc: 'Create custom surveys or use templates to gather feedback on satisfaction, engagement, and working conditions.',
      },
      {
        icon: <Bell className="w-5 h-5 text-forest-600" />,
        title: 'Company updates',
        desc: 'Share news, policy changes, and events. Track who has read each update.',
      },
      {
        icon: <Star className="w-5 h-5 text-forest-600" />,
        title: 'Peer recognition',
        desc: 'Let team members give kudos to each other. Celebrate wins and boost morale across the team.',
      },
      {
        icon: <BookOpen className="w-5 h-5 text-forest-600" />,
        title: 'Training courses',
        desc: 'Assign courses, track completion, and make sure every team member has the skills they need.',
      },
      {
        icon: <FolderOpen className="w-5 h-5 text-forest-600" />,
        title: 'Shared resource library',
        desc: 'Centralize policies, handbooks, and how-to guides. Your team can access everything from the app.',
      },
    ],
  },  {
    id: 'maintenance-logs',
    label: 'Maintenance Logs',
    icon: <Wrench className="w-5 h-5" />,
    headline: 'Track equipment issues before they become costly problems',
    description:
      'Log maintenance requests, track repairs from report to resolution, and keep a complete history of every piece of equipment across all your locations.',
    features: [
      {
        icon: <ClipboardList className="w-5 h-5 text-forest-600" />,
        title: 'Structured logging',
        desc: 'Log issues with category, item, priority, and description. Assign to locations and track status from draft to completed.',
      },
      {
        icon: <AlertTriangle className="w-5 h-5 text-forest-600" />,
        title: 'Priority levels',
        desc: 'Flag issues as low, medium, high, or urgent so your team knows what to fix first.',
      },
      {
        icon: <DollarSign className="w-5 h-5 text-forest-600" />,
        title: 'Cost tracking',
        desc: 'Record estimated and actual repair costs. Build a clear picture of maintenance spend over time.',
      },
      {
        icon: <Camera className="w-5 h-5 text-forest-600" />,
        title: 'Photo documentation',
        desc: 'Attach photos to the issue report and the resolution. Visual proof makes handoffs effortless.',
      },
      {
        icon: <History className="w-5 h-5 text-forest-600" />,
        title: 'Full audit trail',
        desc: 'Every status change is logged with who made it and when — giving you a complete history of every repair.',
      },
      {
        icon: <Wrench className="w-5 h-5 text-forest-600" />,
        title: 'Vendor management',
        desc: 'Record vendor names on each log so you always know who handled the repair.',
      },
    ],
  },
  {
    id: 'company-faqs',
    label: 'Company FAQs',
    icon: <HelpCircle className="w-5 h-5" />,
    headline: 'Give your team instant answers to common questions',
    description:
      'Create, organize, and publish FAQs for your company. Employees find answers on their own — and your AI assistant uses them to respond smarter.',
    features: [
      {
        icon: <PenLine className="w-5 h-5 text-forest-600" />,
        title: 'Create & manage FAQs',
        desc: 'Build FAQ collections with a simple editor. Add questions, write answers, and organize them into groups.',
      },
      {
        icon: <ListOrdered className="w-5 h-5 text-forest-600" />,
        title: 'Organized by topic',
        desc: 'Group FAQs by title and description so employees can quickly find what they need.',
      },
      {
        icon: <Eye className="w-5 h-5 text-forest-600" />,
        title: 'Draft & publish workflow',
        desc: 'Keep FAQs in draft until they\'re ready. Publish when you want your team to see them — unpublish anytime.',
      },
      {
        icon: <MessageSquare className="w-5 h-5 text-forest-600" />,
        title: 'Employee self-service',
        desc: 'Published FAQs are visible to all employees so they can find answers without messaging a manager.',
      },
      {
        icon: <Bot className="w-5 h-5 text-forest-600" />,
        title: 'AI-powered answers',
        desc: 'Your published FAQs feed directly into Fork\'s AI assistant, so it gives accurate, company-specific responses.',
      },
      {
        icon: <Shield className="w-5 h-5 text-forest-600" />,
        title: 'Manager controls',
        desc: 'Only managers with the right permissions can create, edit, or delete FAQs — keeping your knowledge base consistent.',
      },
    ],
  },
  {
    id: 'waste-control',
    label: 'Waste Control',
    icon: <Trash2 className="w-5 h-5" />,
    headline: 'Reduce waste, track costs, and improve operations',
    description:
      'Give your team a fast way to log waste as it happens. Track every item, reason, and cost — then use reports to find patterns and cut losses.',
    features: [
      {
        icon: <Trash2 className="w-5 h-5 text-forest-600" />,
        title: 'Quick waste logging',
        desc: 'Employees log waste in seconds from their phone — select the item, enter a quantity, pick a reason, and submit.',
      },
      {
        icon: <Package className="w-5 h-5 text-forest-600" />,
        title: 'Item catalog',
        desc: 'Manage a catalog of trackable items with categories, SKUs, and cost-per-unit. Assign items to specific locations.',
      },
      {
        icon: <Tag className="w-5 h-5 text-forest-600" />,
        title: 'Reason tracking',
        desc: 'Categorize every waste event — expired, damaged, mistake, end-of-day, burned, or custom reasons — to pinpoint root causes.',
      },
      {
        icon: <DollarSign className="w-5 h-5 text-forest-600" />,
        title: 'Automatic cost calculation',
        desc: 'Total waste cost is calculated automatically from item cost and quantity — no manual math required.',
      },
      {
        icon: <TrendingDown className="w-5 h-5 text-forest-600" />,
        title: 'Waste reports',
        desc: 'View waste by date, location, category, or reason. Spot trends and take action to reduce losses.',
      },
      {
        icon: <PieChart className="w-5 h-5 text-forest-600" />,
        title: 'Location comparison',
        desc: 'Compare waste across locations to identify which sites need attention and share best practices.',
      },
    ],
  },]

export default function FeaturesPage() {
  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-warm-100">
        <BlobBackground variant="triangle" />
        <div className="relative max-w-6xl mx-auto px-6 pt-12 pb-16 md:pt-32 md:pb-24">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-6xl font-semibold tracking-tight leading-[1.05] text-warm-950">
              Everything you need to run your team, in one place
            </h1>
            <p className="mt-6 text-lg md:text-xl text-warm-600 leading-relaxed max-w-2xl">
              Fork brings scheduling, time tracking, HR, and engagement together so you can stop switching between tools and start managing your team.
            </p>
          </div>

          {/* Anchor nav */}
          <div className="mt-12 flex flex-wrap gap-3">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="inline-flex items-center gap-2 rounded-lg border border-warm-200 bg-white px-3.5 py-2 text-sm font-medium text-warm-600 hover:border-warm-300 hover:text-warm-950 transition-colors"
              >
                {s.icon}
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Product sections */}
      {sections.map((section, idx) => (
        <section
          key={section.id}
          id={section.id}
          className={`scroll-mt-16 border-b border-warm-100 ${idx % 2 === 1 ? 'bg-warm-50' : ''}`}
        >
          <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
            <div className="grid md:grid-cols-[1fr_1.5fr] gap-12 md:gap-20 items-start">
              {/* Section header — sticky on desktop */}
              <div className="md:sticky md:top-28">
                <span className="eyebrow mb-4">{section.label}</span>
                <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-warm-950">
                  {section.headline}
                </h2>
                <p className="mt-4 text-lg text-warm-600 leading-relaxed">
                  {section.description}
                </p>
              </div>

              {/* Features — editorial rows, no boxes */}
              <div className="divide-y divide-warm-200/70">
                {section.features.map((f) => (
                  <div key={f.title} className="flex items-start gap-5 py-6 first:pt-0 last:pb-0">
                    <div className="mt-0.5 shrink-0">{f.icon}</div>
                    <div>
                      <h3 className="text-base font-semibold text-warm-950">{f.title}</h3>
                      <p className="mt-1 text-[15px] text-warm-600 leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* Final CTA */}
      <section className="bg-warm-950">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-2xl">
            <span className="eyebrow text-lime-accent mb-4">Free 7-day trial</span>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-5">
              See Fork in action
            </h2>
            <p className="text-lg text-warm-400 mb-10 max-w-lg">
              Start your free trial and experience every feature with your own team.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href="https://app.forkhr.com/register" target="_blank">
                <Button size="lg" className="text-base px-7 h-12 bg-white text-warm-950 hover:bg-warm-100">
                  Start free trial
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/pricing">
                <Button variant="outline" size="lg" className="text-base px-7 h-12 border-warm-700 bg-transparent text-warm-200 hover:bg-warm-900 hover:text-white">
                  View pricing
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
