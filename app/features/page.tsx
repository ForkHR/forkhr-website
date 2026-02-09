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
  FileWarning,
} from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Features — Fork | Scheduling, Time Tracking, HR & Engagement',
  description:
    'Explore all Fork features: shift scheduling, time & attendance, paperless onboarding, document management, surveys, recognition, and training.',
  alternates: {
    canonical: '/features',
  },
  openGraph: {
    title: 'Features — Fork | Scheduling, Time Tracking, HR & Engagement',
    description:
      'Explore all Fork features: shift scheduling, time & attendance, paperless onboarding, document management, surveys, recognition, and training.',
    url: 'https://forkhr.com/features',
    images: ['/og-image.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Features — Fork | Scheduling, Time Tracking, HR & Engagement',
    description:
      'Explore all Fork features: shift scheduling, time & attendance, paperless onboarding, document management, surveys, recognition, and training.',
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
        icon: <Send className="w-5 h-5 text-primary" />,
        title: 'Instant schedule publishing',
        desc: 'Build your schedule, hit publish, and every team member gets notified immediately. No emails, no printouts.',
      },
      {
        icon: <CalendarClock className="w-5 h-5 text-primary" />,
        title: 'Always up to date',
        desc: 'Edits sync in real time. When you move a shift, your team sees the change instantly on their phone.',
      },
      {
        icon: <Timer className="w-5 h-5 text-primary" />,
        title: 'Weekly availability',
        desc: 'Employees set when they can work. You see availability at a glance while building the schedule.',
      },
      {
        icon: <CheckCircle2 className="w-5 h-5 text-primary" />,
        title: 'Shift tasks & notes',
        desc: 'Attach checklists and instructions to each shift so your team knows exactly what to do.',
      },
      {
        icon: <ArrowLeftRight className="w-5 h-5 text-primary" />,
        title: 'Open shifts & shift swaps',
        desc: 'Post open shifts for your team to claim. Approve swap requests with one tap.',
      },
      {
        icon: <Coffee className="w-5 h-5 text-primary" />,
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
        icon: <Smartphone className="w-5 h-5 text-primary" />,
        title: 'Clock-in from any device',
        desc: 'Use an iPad, Android tablet, or computer as a clock-in terminal. Assign PINs and go — no costly hardware.',
      },
      {
        icon: <Timer className="w-5 h-5 text-primary" />,
        title: 'Real-time timesheets',
        desc: 'Every clock-in and clock-out is recorded instantly. Managers can review and edit entries at any time.',
      },
      {
        icon: <MapPin className="w-5 h-5 text-primary" />,
        title: 'GPS clock-in',
        desc: 'Set up geo-fenced locations so employees can only clock in when they are on-site.',
      },
      {
        icon: <Users className="w-5 h-5 text-primary" />,
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
        icon: <UserPlus className="w-5 h-5 text-primary" />,
        title: 'Paperless onboarding',
        desc: 'New hires complete W-4, I-9, and custom forms online before their first day. No more chasing paperwork.',
      },
      {
        icon: <FolderOpen className="w-5 h-5 text-primary" />,
        title: 'Document management',
        desc: 'Upload, request, and organize employee documents. Set expiration reminders so certifications never lapse.',
      },
      {
        icon: <FileSignature className="w-5 h-5 text-primary" />,
        title: 'E-signatures',
        desc: 'Collect legally-binding signatures on any document — right from the app.',
      },
      {
        icon: <FileText className="w-5 h-5 text-primary" />,
        title: 'Custom forms',
        desc: 'Build forms for any HR process using a drag-and-drop form builder.',
      },
      {
        icon: <FileWarning className="w-5 h-5 text-primary" />,
        title: 'Incident reports',
        desc: 'Document workplace incidents with structured reports. Maintain a safe and compliant work environment.',
      },
      {
        icon: <FileText className="w-5 h-5 text-primary" />,
        title: 'Termination records',
        desc: 'Keep complete offboarding documentation, final notices, and exit checklists in one secure place.',
      },
      {
        icon: <Shield className="w-5 h-5 text-primary" />,
        title: 'Hiring & job postings',
        desc: 'Post openings, track applicants, and move candidates through your pipeline — all in one place.',
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
        icon: <BarChart3 className="w-5 h-5 text-primary" />,
        title: 'Employee surveys',
        desc: 'Create custom surveys or use templates to gather feedback on satisfaction, engagement, and working conditions.',
      },
      {
        icon: <Bell className="w-5 h-5 text-primary" />,
        title: 'Company updates',
        desc: 'Share news, policy changes, and events. Track who has read each update.',
      },
      {
        icon: <Star className="w-5 h-5 text-primary" />,
        title: 'Peer recognition',
        desc: 'Let team members give kudos to each other. Celebrate wins and boost morale across the team.',
      },
      {
        icon: <BookOpen className="w-5 h-5 text-primary" />,
        title: 'Training courses',
        desc: 'Assign courses, track completion, and make sure every team member has the skills they need.',
      },
      {
        icon: <FolderOpen className="w-5 h-5 text-primary" />,
        title: 'Shared resource library',
        desc: 'Centralize policies, handbooks, and how-to guides. Your team can access everything from the app.',
      },
    ],
  },
]

export default function FeaturesPage() {
  return (
    <main>
      {/* Hero */}
      <section>
        <div className="max-w-5xl mx-auto px-6 pt-4 pb-16 md:pt-28 md:pb-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-slate-900">
              Everything you need to run your team, in one place
            </h1>
            <p className="mt-6 text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl">
              Fork brings scheduling, time tracking, HR, and engagement together so you can stop switching between tools and start managing your team.
            </p>
          </div>

          {/* Anchor nav */}
          <div className="mt-12 flex flex-wrap gap-3">
            {sections.map((s) => (
              <a
                key={s.id}
                href={`#${s.id}`}
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:border-primary/30 hover:text-primary transition-colors"
              >
                {s.icon}
                {s.label}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Feature sections */}
      {sections.map((section, idx) => (
        <section
          key={section.id}
          id={section.id}
          className={idx % 2 === 0 ? 'bg-slate-50/60' : ''}
        >
          <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
            <div className="max-w-2xl mb-14">
              <div className="inline-flex items-center gap-2 text-sm font-semibold text-primary uppercase tracking-wider mb-3">
                {section.icon}
                {section.label}
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
                {section.headline}
              </h2>
              <p className="mt-4 text-lg text-slate-600 leading-relaxed">
                {section.description}
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {section.features.map((f) => (
                <div key={f.title} className="flex flex-col">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/8 mb-4">
                    {f.icon}
                  </div>
                  <h3 className="text-base font-semibold text-slate-900 mb-2">{f.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="bg-slate-900">
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-28 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            See Fork in action
          </h2>
          <p className="text-lg text-slate-400 mb-10 max-w-xl mx-auto">
            Start your free 7-day trial and experience every feature with your own team.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="https://app.forkhr.com/register" target="_blank">
              <Button size="lg" className="text-base px-8 h-12 bg-white text-slate-900 hover:bg-slate-100">
                Start free trial
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="/pricing">
              <Button variant="outline" size="lg" className="text-base px-8 h-12 border-slate-700 text-slate-300 bg-slate-800 hover:bg-slate-900 hover:text-white">
                View pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
