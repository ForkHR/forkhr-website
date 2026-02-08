import { Button } from '@/components/ui/button'
import { ArrowRight, CalendarClock, ClockIcon, FileText, Users, BookOpen, Shield, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'

const pillars = [
  {
    icon: <CalendarClock className="w-5 h-5" />,
    title: 'Scheduling',
    description: 'Drag-and-drop shift scheduling with availability, open shifts, shift swaps, and time-off requests.',
  },
  {
    icon: <ClockIcon className="w-5 h-5" />,
    title: 'Time & Attendance',
    description: 'Terminal, mobile, and GPS clock-in. Real-time timesheets ready for payroll export.',
  },
  {
    icon: <FileText className="w-5 h-5" />,
    title: 'HR & Onboarding',
    description: 'Paperless onboarding with W-4, I-9, e-signatures, document storage, and expiration tracking.',
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: 'Team Engagement',
    description: 'Surveys, company updates, peer recognition, and training courses to keep your team connected.',
  },
  {
    icon: <BookOpen className="w-5 h-5" />,
    title: 'Training & Resources',
    description: 'Assign courses, share policies, and track completion — so every team member is set up to succeed.',
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: 'Compliance & Documents',
    description: 'Incident reports, employment forms, and secure document management to stay compliant.',
  },
]

const features = [
  {
    icon: <CalendarClock className="w-5 h-5 text-primary" />,
    title: 'Build schedules in minutes',
    items: ['Drag-and-drop shift builder', 'Weekly employee availability', 'Open shifts & shift swaps', 'Shift tasks, breaks & notes', 'One-click schedule publishing'],
  },
  {
    icon: <ClockIcon className="w-5 h-5 text-primary" />,
    title: 'Track every hour accurately',
    items: ['Terminal, mobile & GPS clock-in', 'Real-time timesheet updates', 'Geo-fenced locations', 'Break tracking', 'Payroll-ready exports'],
  },
  {
    icon: <FileText className="w-5 h-5 text-primary" />,
    title: 'Onboard without the paperwork',
    items: ['Digital W-4, I-9 & custom forms', 'E-signatures & expiration alerts', 'Secure document storage', 'Onboarding checklists', 'Hiring & job postings'],
  },
  {
    icon: <Users className="w-5 h-5 text-primary" />,
    title: 'Keep your team engaged',
    items: ['Employee surveys & feedback', 'Company-wide announcements', 'Peer recognition & kudos', 'Training course assignments', 'Shared resource library'],
  },
]

const steps = [
  {
    step: '01',
    title: 'Set up your team',
    description: 'Add your locations, invite team members, and configure roles and permissions. Takes about 10 minutes.',
  },
  {
    step: '02',
    title: 'Build your first schedule',
    description: 'Drag and drop shifts, set availability windows, and publish — your team gets notified instantly.',
  },
  {
    step: '03',
    title: 'Run your operations',
    description: 'Track time, manage documents, send updates, and keep your whole team in sync from one dashboard.',
  },
]

const useCases = [
  'Restaurants & Cafés',
  'Retail Stores',
  'Hotels & Hospitality',
  'Healthcare Clinics',
  'Fitness & Gyms',
  'Franchises',
]

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-6 pt-4 pb-24 md:pt-32 md:pb-36">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/5 border border-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
              </span>
              Now available on iOS &amp; Android
            </div>

            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.08] text-slate-900">
                All-in-One<br/>Workforce<br/>Management<span className="text-primary">.</span>
            </h1>

            <p className="md:mt-6 mt-4 text-md md:text-xl text-slate-600 max-w-2xl leading-relaxed">
              Fork replaces spreadsheets, paper timesheets, and scattered tools with a single workforce management platform — built for restaurants, retail, and hourly teams.
            </p>

            <div className="mt-4 sm:mt-10 flex flex-row gap-3 sm:gap-4">
              <Link href="https://app.forkhr.com/register" target="_blank">
                <Button size="lg" className="text-sm sm:text-base px-5 sm:px-8 h-10 sm:h-12">
                  Start free trial
                  <ArrowRight className="w-4 h-4 ml-1.5 sm:ml-2" />
                </Button>
              </Link>
              <Link href="/features">
                <Button variant="outline" size="lg" className="text-sm sm:text-base px-5 sm:px-8 h-10 sm:h-12">
                  See all features
                </Button>
              </Link>
            </div>

            <p className="mt-4 text-sm text-slate-400">
              Free 7-day trial · No credit card required · Cancel anytime
            </p>
          </div>
        </div>
      </section>

      {/* Social proof bar */}
      <section className="border-t border-slate-100">
        <div className="max-w-5xl mx-auto px-6 py-12 md:py-16">
          <p className="text-sm font-medium text-slate-400 uppercase tracking-wider text-center mb-8">
            Built for teams in
          </p>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
            {useCases.map((uc) => (
              <span key={uc} className="text-sm font-medium text-slate-500">
                {uc}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Platform overview — 6 pillars */}
      <section className="bg-slate-50/60">
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-2xl mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Platform</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              Everything your team needs, nothing it doesn&apos;t
            </h2>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              Six core modules that cover scheduling, time tracking, HR, onboarding, engagement, and compliance — so you can stop juggling tools.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {pillars.map((p) => (
              <div
                key={p.title}
                className="group rounded-2xl border border-slate-200/80 bg-white p-6 hover:border-primary/20 hover:shadow-sm transition-all"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/8 text-primary mb-4">
                  {p.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{p.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/features">
              <Button variant="outline" className="px-8">
                Explore all features
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Feature details */}
      <section>
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-2xl mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Features</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              Built for how you actually work
            </h2>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              Every feature maps to a real operational need — no fluff, no bloat.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-10">
            {features.map((f) => (
              <div key={f.title} className="flex flex-col">
                <div className="flex items-center gap-3 mb-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/8">
                    {f.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">{f.title}</h3>
                </div>
                <ul className="space-y-2.5">
                  {f.items.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                      <span className="text-sm text-slate-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="bg-slate-50/60">
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-2xl mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">How it works</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              Up and running in under an hour
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {steps.map((s) => (
              <div key={s.step}>
                <div className="text-5xl font-bold text-primary/15 mb-4">{s.step}</div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{s.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="bg-slate-900 relative overflow-hidden">
        {/* Decorative glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/15 rounded-full blur-[120px]" />

        <div className="max-w-5xl mx-auto px-6 py-20 md:py-28 relative">
          <div className="text-center mb-16">
            <p className="text-sm font-semibold text-white uppercase tracking-wider mb-3">By the numbers</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
              Save time, cut costs, keep your team
            </h2>
            <p className="mt-4 text-slate-400 text-lg max-w-xl mx-auto">
              Teams using Fork spend less time on admin and more time on what matters.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4 md:gap-5">
            {[
              { metric: '10 hrs', label: 'Saved on scheduling per manager, every week', icon: <CalendarClock className="w-5 h-5" /> },
              { metric: '$4,800', label: 'Average annual savings per location on admin costs', icon: <Shield className="w-5 h-5" /> },
              { metric: '90%', label: 'Faster employee onboarding with digital forms', icon: <FileText className="w-5 h-5" /> },
              { metric: '2x', label: 'More employee engagement with built-in communication', icon: <Users className="w-5 h-5" /> },
            ].map((m) => (
              <div key={m.label} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 md:p-8 text-center hover:border-primary/30 hover:bg-white/10 transition-all group">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-primary/15 text-primary mb-4 group-hover:bg-primary/25 transition-colors">
                  {m.icon}
                </div>
                <div className="text-3xl md:text-4xl font-bold text-white mb-2">{m.metric}</div>
                <p className="text-sm text-slate-400 leading-relaxed">{m.label}</p>
              </div>
            ))}
          </div>

          <p className="text-center text-xs text-slate-500 mt-10">
            Based on average results reported by teams using Fork for 90+ days.
          </p>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-slate-900">
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-28 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            Ready to simplify your workforce management?
          </h2>
          <p className="text-lg text-slate-400 mb-10 max-w-xl mx-auto">
            Join teams that run their operations on Fork. Start your free trial today — no credit card required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="https://app.forkhr.com/register" target="_blank">
              <Button size="lg" className="text-base px-8 h-12 bg-white text-slate-900 hover:bg-slate-100">
                Start free trial
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="/pricing">
              <Button variant="outline" size="lg" className="text-base px-8 h-12 border-slate-700 text-slate-300 hover:bg-slate-800 hover:text-white">
                View pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}