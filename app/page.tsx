import { Button } from '@/components/ui/button'
import { ArrowRight, CalendarClock, ClockIcon, FileText, Users, BookOpen, Shield, CheckCircle2, Wrench, Trash2, BotMessageSquare, ClipboardCheck, Sparkles, Zap } from 'lucide-react'
import Link from 'next/link'
import BlobBackground from '@/components/visual/BlobBackground'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Fork — All-in-One AI-Powered Workforce Management & Operations Platform',
  description:
    'The AI-powered operating system for multi-location frontline businesses — from cafés and gyms to retail and grocery. Scheduling, training, checklists, compliance, and an AI assistant trained on your company knowledge, all in one platform.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Fork — All-in-One AI-Powered Workforce Management & Operations Platform',
    description:
      'The AI-powered operating system for multi-location frontline businesses — from cafés and gyms to retail and grocery. Scheduling, training, checklists, compliance, and an AI assistant trained on your company knowledge, all in one platform.',
    url: 'https://forkhr.com',
    images: ['/og-image.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fork — All-in-One AI-Powered Workforce Management & Operations Platform',
    description:
      'The AI-powered operating system for multi-location frontline businesses — from cafés and gyms to retail and grocery. Scheduling, training, checklists, compliance, and an AI assistant trained on your company knowledge, all in one platform.',
    images: ['/og-image.png'],
  },
}

const pillars = [
  {
    icon: <BotMessageSquare className="w-5 h-5" />,
    title: 'AI Assistant',
    description: 'An AI trained on your SOPs, FAQs, training, and policies. Instant, role-aware answers for every employee, on every shift.',
  },
  {
    icon: <CalendarClock className="w-5 h-5" />,
    title: 'Scheduling',
    description: 'Drag-and-drop shift builder with availability, open shifts, shift swaps, and one-click publishing.',
  },
  {
    icon: <ClockIcon className="w-5 h-5" />,
    title: 'Time & Attendance',
    description: 'Terminal, mobile, and GPS clock-in. Real-time timesheets and payroll-ready exports.',
  },
  {
    icon: <BookOpen className="w-5 h-5" />,
    title: 'Training & Courses',
    description: 'Full LMS with video, quizzes, certificates, and prerequisites. Train once, deploy to every location.',
  },
  {
    icon: <ClipboardCheck className="w-5 h-5" />,
    title: 'Checklists & SOPs',
    description: 'Opening, closing, cleaning, and prep checklists — assigned by location, tracked by shift.',
  },
  {
    icon: <FileText className="w-5 h-5" />,
    title: 'HR & Onboarding',
    description: 'Paperless onboarding with W-4, I-9, e-signatures, document storage, and expiration tracking.',
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: 'Incidents & Compliance',
    description: 'AI-assisted workplace incident reports, structured forms, evidence tracking, and secure records to reduce legal risk.',
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: 'Violations & Terminations',
    description: 'Track employee policy violations, issue disciplinary actions, and manage terminations with a complete audit trail.',
  },
  {
    icon: <Wrench className="w-5 h-5" />,
    title: 'Maintenance Logs',
    description: 'Track equipment issues from report to resolution with priority levels, cost tracking, and audit trails.',
  },
  {
    icon: <Trash2 className="w-5 h-5" />,
    title: 'Waste Control',
    description: 'Log waste in real time, track costs automatically, and use reports to find patterns and cut losses.',
  },
]

const aiExamples = [
  {
    role: 'New hire',
    question: 'Where do I find the opening checklist?',
    answer: 'Your opening checklist is pinned in the Checklists section. It covers: unlock doors, check equipment temps, verify prep list, and stock front-of-house.',
  },
  {
    role: 'Kitchen staff',
    question: 'What temp should chicken reach?',
    answer: 'Per your Food Safety Training: internal temperature must reach 165°F (74°C). Always verify with a calibrated thermometer before serving.',
  },
  {
    role: 'Manager',
    question: 'What\'s our protocol for a no-show?',
    answer: 'Per company policy: 1. Attempt contact within 15 min. 2. Cover shift from available staff. 3. Log incident if unreachable after 1 hour. 4. Follow up next business day.',
  },
]

const features = [
  {
    title: 'AI that knows your business',
    items: ['Trained on your FAQs, courses & library', 'Role-aware responses for every position', 'Escalates to managers when needed', 'Gets smarter as you add content', 'Works on web and mobile'],
  },
  {
    title: 'Build schedules in minutes',
    items: ['Drag-and-drop shift builder', 'Employee availability & shift swaps', 'Shift tasks, breaks & notes', 'One-click schedule publishing', 'Real-time timesheet tracking'],
  },
  {
    title: 'Train once, deploy everywhere',
    items: ['Courses with video, quizzes & certificates', 'Role-based training assignments', 'Completion tracking & prerequisites', 'Knowledge library for SOPs & policies', 'Content auto-indexed by AI'],
  },
  {
    title: 'Run tighter daily operations',
    items: ['Recurring checklists per location', 'Maintenance tracking with cost logging', 'Waste control with item catalogs', 'Incident reports & violation tracking with AI', 'Violation-to-termination workflow'],
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

const segments = [
  'Coffee Shops',
  'Restaurants & Cafés',
  'Retail Stores',
  'Hotels & Hospitality',
  'Fitness & Gyms',
  'Franchises',
]

export default function Home() {
  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-warm-100">
        <BlobBackground />
        <div className="relative max-w-6xl mx-auto px-6 pt-12 pb-16 md:pt-32 md:pb-24">
          <div className="max-w-3xl">
            <div className="inline-flex flex-wrap items-center gap-x-2.5 gap-y-1 mb-8 text-sm">
              <span className="inline-flex items-center rounded-full bg-forest-50 px-2.5 py-0.5 text-[13px] font-semibold text-forest-600">
                New
              </span>
              <span className="font-medium text-warm-600">Fork is now on iOS &amp; Android</span>
              <span className="hidden sm:block w-px h-3.5 bg-warm-200" />
              <span className="inline-flex items-center gap-2.5">
                <a
                  href="https://apps.apple.com/us/app/fork-hr-scheduling/id6754656709"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-forest-600 hover:text-forest-700 transition-colors"
                >
                  App Store
                </a>
                <span className="text-warm-300">·</span>
                <a
                  href="https://play.google.com/store/apps/details?id=com.forkhr.fork"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-medium text-forest-600 hover:text-forest-700 transition-colors"
                >
                  Google Play
                </a>
              </span>
            </div>

            <h1 className="text-5xl md:text-6xl font-semibold tracking-tight leading-[1.05] text-warm-950">
              Stop running your business from group chats and spreadsheets
            </h1>

            <p className="mt-6 text-lg md:text-xl text-warm-600 max-w-2xl leading-relaxed">
              Schedules, checklists, training, maintenance, waste, and HR — every part of the day in one app, so nothing slips and nobody has to chase you for answers.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <Link href="https://app.forkhr.com/register" target="_blank">
                <Button size="lg" className="text-base px-6 h-11">
                  Start free trial
                  <ArrowRight className="w-4 h-4 ml-1.5" />
                </Button>
              </Link>
              <Link href="/products">
                <Button variant="outline" size="lg" className="text-base px-6 h-11">
                  Explore the platform
                </Button>
              </Link>
            </div>

            <p className="mt-5 text-sm text-warm-400">
              Free 7-day trial · No credit card required · Cancel anytime
            </p>
          </div>

          {/* Segments */}
          <div className="mt-20 pt-8 border-t border-warm-100">
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
              <span className="text-[13px] font-medium text-warm-400">Built for teams in</span>
              {segments.map((s) => (
                <span key={s} className="text-[13px] font-medium text-warm-600">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* AI Showcase */}
      <section className="bg-warm-950">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-start">
            <div className="max-w-lg">
              <span className="eyebrow text-lime-accent mb-4">AI Assistant</span>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white">
                An AI that actually knows your business
              </h2>
              <p className="mt-5 text-lg text-warm-400 leading-relaxed">
                Fork&apos;s AI is trained on your company&apos;s own content — FAQs, training courses, knowledge library, and policies. Not generic. Not hallucinating. Your knowledge, on demand.
              </p>

              <dl className="mt-10 space-y-7">
                {[
                  { title: 'Trained on your content', desc: 'AI indexes your FAQs, courses, and library automatically. No prompt engineering needed.' },
                  { title: 'Role-aware responses', desc: 'Owners, managers, and employees get answers matched to their role and permissions.' },
                  { title: 'Smart escalation', desc: 'When AI can\'t answer, it escalates to the right manager with full context attached.' },
                ].map((c) => (
                  <div key={c.title} className="border-l-2 border-warm-800 pl-5">
                    <dt className="text-[15px] font-semibold text-white">{c.title}</dt>
                    <dd className="mt-1 text-[15px] text-warm-400 leading-relaxed">{c.desc}</dd>
                  </div>
                ))}
              </dl>

              <Link
                href="/ai-assistant"
                className="mt-10 inline-flex items-center gap-1.5 text-[15px] font-medium text-lime-accent hover:text-white transition-colors"
              >
                Learn more about the AI
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            {/* Chat mockup */}
            <div className="rounded-xl border border-warm-800 bg-warm-900/60 overflow-hidden">
              <div className="flex items-center gap-3 px-5 py-3.5 border-b border-warm-800">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-lime-accent/10">
                  <BotMessageSquare className="w-4 h-4 text-lime-accent" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">Fork AI</div>
                  <div className="text-xs text-warm-500">Trained on your company content</div>
                </div>
              </div>

              <div className="p-5 space-y-5">
                {aiExamples.map((ex) => (
                  <div key={ex.role} className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-warm-800 flex items-center justify-center shrink-0 mt-0.5">
                        <Users className="w-3 h-3 text-warm-400" />
                      </div>
                      <div>
                        <span className="text-[10px] font-medium text-warm-500 uppercase tracking-wider">{ex.role}</span>
                        <p className="text-sm text-warm-300 mt-0.5">{ex.question}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 pl-9">
                      <div className="w-6 h-6 rounded-full bg-lime-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Sparkles className="w-3 h-3 text-lime-accent" />
                      </div>
                      <p className="text-sm text-warm-400 leading-relaxed bg-warm-900 rounded-lg px-4 py-3 border border-warm-800">{ex.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Platform overview */}
      <section className="border-b border-warm-100">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-2xl mb-14">
            <span className="eyebrow mb-4">Platform</span>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-warm-950">
              Everything your team needs, nothing it doesn&apos;t
            </h2>
            <p className="mt-4 text-lg text-warm-600 leading-relaxed">
              From AI-powered support to daily checklists — built to run consistently, compliantly, and efficiently.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-warm-200 border border-warm-200 rounded-xl overflow-hidden">
            {pillars.map((p) => (
              <div key={p.title} className="bg-white p-7 hover:bg-warm-50 transition-colors">
                <div className="text-forest-600 mb-4">{p.icon}</div>
                <h3 className="text-[15px] font-semibold text-warm-950 mb-1.5">{p.title}</h3>
                <p className="text-sm text-warm-500 leading-relaxed">{p.description}</p>
              </div>
            ))}
            {/* Filler cell keeps the grid rectangular */}
            <div className="bg-white p-7 flex items-end sm:col-span-2 lg:col-span-2">
              <Link
                href="/products"
                className="inline-flex items-center gap-1.5 text-[15px] font-medium text-forest-600 hover:text-forest-700 transition-colors"
              >
                Explore all products
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Metrics */}
      <section className="border-b border-warm-100">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-24">
          <div className="grid md:grid-cols-[1.1fr_1fr] gap-12 md:gap-20 items-center">
            <div>
              <span className="eyebrow mb-4">By the numbers</span>
              <div className="text-6xl md:text-7xl font-semibold text-warm-950 tracking-tight leading-none mb-4">
                10 hrs<span className="text-forest-500">/wk</span>
              </div>
              <p className="text-xl text-warm-600 leading-relaxed max-w-md">
                Saved per manager on scheduling and admin, every single week.
              </p>
              <p className="text-xs text-warm-400 mt-6">
                Based on average results reported by teams using Fork for 90+ days.
              </p>
            </div>

            <div className="divide-y divide-warm-100">
              {[
                { metric: '90%', label: 'Faster employee onboarding with digital forms and checklists' },
                { metric: '$4,800', label: 'Average annual savings per location on operational costs' },
                { metric: '70%', label: 'Fewer repetitive questions with AI-powered answers' },
              ].map((m) => (
                <div key={m.label} className="flex items-baseline justify-between gap-6 py-5">
                  <p className="text-[15px] text-warm-600 leading-relaxed">{m.label}</p>
                  <div className="text-3xl font-semibold text-warm-950 tracking-tight shrink-0">{m.metric}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Feature details */}
      <section className="border-b border-warm-100">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-2xl mb-14">
            <span className="eyebrow mb-4">Features</span>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-warm-950">
              Built for how you actually work
            </h2>
            <p className="mt-4 text-lg text-warm-600 leading-relaxed">
              Every feature maps to a real operational need — from AI-powered answers to daily checklists.
            </p>
          </div>

          <div className="divide-y divide-warm-100 border-t border-warm-100">
            {features.map((f, i) => (
              <div key={f.title} className="grid md:grid-cols-[1fr_1.5fr] gap-6 md:gap-12 py-10">
                <div>
                  <span className="text-[13px] font-medium text-warm-400 tabular-nums">{String(i + 1).padStart(2, '0')}</span>
                  <h3 className="mt-2 text-xl font-semibold text-warm-950">{f.title}</h3>
                </div>
                <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-3">
                  {f.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-forest-500 mt-0.5 shrink-0" />
                      <span className="text-[15px] text-warm-600">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="border-b border-warm-100">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-2xl mb-14">
            <span className="eyebrow mb-4">How it works</span>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-warm-950">
              Up and running in under an hour
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10 md:gap-8">
            {steps.map((s) => (
              <div key={s.step} className="border-t-2 border-warm-950 pt-6">
                <span className="text-[13px] font-medium text-warm-400 tabular-nums">{s.step}</span>
                <h3 className="mt-2 text-lg font-semibold text-warm-950 mb-2">{s.title}</h3>
                <p className="text-[15px] text-warm-600 leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-warm-950">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-5">
              Ready to run your operations on Fork?
            </h2>
            <p className="text-lg text-warm-400 mb-10 max-w-lg">
              Join operators who run smarter with Fork. Start your free 7-day trial today — no credit card required.
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
