import { Button } from '@/components/ui/button'
import { ArrowRight, CalendarClock, ClockIcon, FileText, Users, BookOpen, Shield, CheckCircle2, Wrench, Trash2, BotMessageSquare, ClipboardCheck, Sparkles, Zap, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'
import BlobBackground from '@/components/visual/BlobBackground'

export const metadata: Metadata = {
  title: 'Fork — AI-Powered Restaurant Operations Platform',
  description:
    'The AI-powered operating system for restaurant teams. Scheduling, training, checklists, compliance, and an AI assistant trained on your company knowledge — one platform, every location.',
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Fork — AI-Powered Restaurant Operations Platform',
    description:
      'The AI-powered operating system for restaurant teams. Scheduling, training, checklists, compliance, and an AI assistant trained on your company knowledge — one platform, every location.',
    url: 'https://forkhr.com',
    images: ['/og-image.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fork — AI-Powered Restaurant Operations Platform',
    description:
      'The AI-powered operating system for restaurant teams. Scheduling, training, checklists, compliance, and an AI assistant trained on your company knowledge.',
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
    icon: <BotMessageSquare className="w-5 h-5 text-primary" />,
    title: 'AI that knows your business',
    items: ['Trained on your FAQs, courses & library', 'Role-aware responses for every position', 'Escalates to managers when needed', 'Gets smarter as you add content', 'Works on web and mobile'],
  },
  {
    icon: <CalendarClock className="w-5 h-5 text-primary" />,
    title: 'Build schedules in minutes',
    items: ['Drag-and-drop shift builder', 'Employee availability & shift swaps', 'Shift tasks, breaks & notes', 'One-click schedule publishing', 'Real-time timesheet tracking'],
  },
  {
    icon: <BookOpen className="w-5 h-5 text-primary" />,
    title: 'Train once, deploy everywhere',
    items: ['Courses with video, quizzes & certificates', 'Role-based training assignments', 'Completion tracking & prerequisites', 'Knowledge library for SOPs & policies', 'Content auto-indexed by AI'],
  },
  {
    icon: <Zap className="w-5 h-5 text-primary" />,
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
    <main>
      {/* Hero */}
      <div className="relative pt-20"
        style={{
          backgroundImage: "radial-gradient(circle,#dee3e8 1px,transparent 0)",
          backgroundSize: "20px 20px",
        }}
      >
        <BlobBackground/>
        <section className="relative overflow-hidden">
          <div className="max-w-5xl mx-auto px-6 pt-4 pb-12 md:pt-20 md:pb-24">
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
                Fork turns your SOPs, training materials, and company policies into an AI that supports every employee on every shift — combined with scheduling, timecards, checklists, and compliance in one platform.
              </p>

              <div className="mt-4 sm:mt-10 flex flex-row gap-3 sm:gap-4">
                <Link href="https://app.forkhr.com/register" target="_blank">
                  <Button size="lg" className="text-sm sm:text-base px-5 sm:px-8 h-10 sm:h-12">
                    Start free trial
                    <ArrowRight className="w-4 h-4 ml-1.5 sm:ml-2" />
                  </Button>
                </Link>
                <Link href="/ai-assistant">
                  <Button variant="outline" size="lg" className="text-sm sm:text-base px-5 sm:px-8 h-10 sm:h-12">
                    See the AI in action
                  </Button>
                </Link>
              </div>

              <p className="mt-4 text-sm text-slate-400">
                Free 7-day trial · Cancel anytime
              </p>
            </div>
          </div>
        </section>

        {/* Social proof bar — styled pills */}
        <section>
          <div className="max-w-5xl mx-auto px-6 py-12 md:py-16">
            <p className="text-sm font-medium text-slate-400 text-center mb-6">
              Built for teams in
            </p>
            <div className="flex flex-wrap justify-center gap-3">
              {segments.map((s) => (
                <span key={s} className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600 shadow-sm">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* AI Showcase — centered chat mockup */}
      <section className="bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[120px]" />

        <div className="max-w-5xl mx-auto px-6 py-20 md:py-28 relative">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/10 px-3.5 py-1.5 text-xs font-medium text-white/70 mx-auto mb-5">
              <Sparkles className="w-3.5 h-3.5 text-primary" />
              AI Assistant
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
              An AI that actually knows your restaurant
            </h2>
            <p className="mt-4 text-lg text-slate-400 leading-relaxed">
              Fork&apos;s AI is trained on your company&apos;s own content — FAQs, training courses, knowledge library, and policies. Not generic. Not hallucinating. Your knowledge, on demand.
            </p>
          </div>

          {/* Chat mockup */}
          <div className="max-w-2xl mx-auto mb-14">
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden">
              {/* Chat header */}
              <div className="flex items-center gap-3 px-5 py-3.5 border-b border-white/6">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20">
                  <BotMessageSquare className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">Fork AI</div>
                  <div className="text-xs text-slate-500">Trained on your company content</div>
                </div>
              </div>

              {/* Messages */}
              <div className="p-5 space-y-5">
                {aiExamples.map((ex) => (
                  <div key={ex.role} className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-slate-700 flex items-center justify-center shrink-0 mt-0.5">
                        <Users className="w-3 h-3 text-slate-400" />
                      </div>
                      <div>
                        <span className="text-[10px] font-medium text-slate-500 uppercase tracking-wider">{ex.role}</span>
                        <p className="text-sm text-slate-300 mt-0.5">{ex.question}</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3 pl-9">
                      <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center shrink-0 mt-0.5">
                        <Sparkles className="w-3 h-3 text-white" />
                      </div>
                      <p className="text-sm text-slate-400 leading-relaxed bg-white/3 rounded-xl px-4 py-3 border border-white/6">{ex.answer}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* AI capabilities — horizontal strip */}
          <div className="grid sm:grid-cols-3 gap-px bg-white/6 rounded-2xl overflow-hidden">
            {[
              { title: 'Trained on your content', desc: 'AI indexes your FAQs, courses, and library automatically. No prompt engineering needed.' },
              { title: 'Role-aware responses', desc: 'Owners, managers, and employees get answers matched to their role and permissions.' },
              { title: 'Smart escalation', desc: 'When AI can\'t answer, it escalates to the right manager with full context attached.' },
            ].map((c) => (
              <div key={c.title} className="bg-slate-900 p-6">
                <h4 className="text-sm font-semibold text-white mb-2">{c.title}</h4>
                <p className="text-sm text-slate-500 leading-relaxed">{c.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link href="/ai-assistant">
              <Button variant="outline" className="px-8 border-slate-700 text-slate-300 bg-slate-800 hover:bg-slate-900 hover:text-white">
                Learn more about the AI
                <ArrowUpRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Platform overview — bento grid */}
      <section className="bg-slate-50/60">
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="inline-flex items-center gap-2 rounded-full bg-primary/5 border border-primary/10 px-3.5 py-1.5 text-xs font-medium text-primary mx-auto mb-5">Platform</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              Everything your team needs, nothing it doesn&apos;t
            </h2>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              From AI-powered support to daily checklists — built to run consistently, compliantly, and efficiently.
            </p>
          </div>

          {/* Bento: 2 large hero cards */}
          <div className="grid md:grid-cols-2 gap-5 mb-5">
            {pillars.slice(0, 2).map((p) => (
              <div
                key={p.title}
                className="group rounded-2xl border border-slate-200/80 bg-white p-8 md:p-10 hover:border-primary/20 hover:shadow-sm transition-all"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/8 text-primary mb-5">
                  {p.icon}
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{p.title}</h3>
                <p className="text-base text-slate-600 leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>

          {/* Bento: 3 medium cards */}
          <div className="grid sm:grid-cols-3 gap-5 mb-5">
            {pillars.slice(2, 5).map((p) => (
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

          {/* Bento: 4 compact cards */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {pillars.slice(5).map((p) => (
              <div
                key={p.title}
                className="group rounded-2xl border border-slate-200/80 bg-white p-5 hover:border-primary/20 hover:shadow-sm transition-all"
              >
                <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary/8 text-primary mb-3">
                  {p.icon}
                </div>
                <h3 className="text-sm font-semibold text-slate-900 mb-1">{p.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{p.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link href="/products">
              <Button variant="outline" className="px-8">
                Explore all products
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Feature details — alternating rows with numbered accent */}
      <section>
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="inline-flex items-center gap-2 rounded-full bg-primary/5 border border-primary/10 px-3.5 py-1.5 text-xs font-medium text-primary mx-auto mb-5">Features</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              Built for how you actually work
            </h2>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              Every feature maps to a real operational need — from AI-powered answers to daily checklists.
            </p>
          </div>

          <div className="space-y-6">
            {features.map((f, i) => (
              <div key={f.title} className="rounded-2xl border border-slate-200/80 bg-white overflow-hidden">
                <div className={`grid md:grid-cols-[1fr_1.5fr] ${i % 2 === 1 ? 'md:direction-rtl' : ''}`}>
                  {/* Left — label area */}
                  <div className={`flex flex-col justify-center p-8 md:p-10 ${i % 2 === 1 ? 'md:order-2 md:direction-ltr' : ''}`}>
                    <div className="flex items-center gap-4 mb-4">
                      <span className="text-4xl font-bold text-primary/10 tabular-nums">{String(i + 1).padStart(2, '0')}</span>
                      <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/8">
                        {f.icon}
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold text-slate-900">{f.title}</h3>
                  </div>

                  {/* Right — checklist */}
                  <div className={`bg-slate-50/60 p-8 md:p-10 ${i % 2 === 1 ? 'md:order-1 md:direction-ltr' : ''}`}>
                    <ul className="space-y-3">
                      {f.items.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                          <span className="text-sm text-slate-600">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works — horizontal stepper with connecting line */}
      <section className="bg-slate-50/60">
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="inline-flex items-center gap-2 rounded-full bg-primary/5 border border-primary/10 px-3.5 py-1.5 text-xs font-medium text-primary mx-auto mb-5">How it works</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              Up and running in under an hour
            </h2>
          </div>

          <div className="relative">
            {/* Connecting line (desktop) */}
            <div className="hidden md:block absolute top-8 left-[calc(16.66%+20px)] right-[calc(16.66%+20px)] h-px bg-linear-to-r from-primary/10 via-primary/30 to-primary/10" />

            <div className="grid md:grid-cols-3 gap-12 md:gap-8">
              {steps.map((s) => (
                <div key={s.step} className="relative text-center">
                  {/* Step circle */}
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white border-2 border-primary/20 shadow-sm relative z-10 mb-6">
                    <span className="text-xl font-bold text-primary">{s.step}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">{s.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed max-w-[280px] mx-auto">{s.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Metrics — asymmetric hero stat layout */}
      <section className="bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/15 rounded-full blur-[120px]" />

        <div className="max-w-5xl mx-auto px-6 py-20 md:py-28 relative">
          <div className="grid md:grid-cols-[1.2fr_1fr] gap-12 md:gap-16 items-center">
            {/* Left — hero stat */}
            <div>
              <p className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/10 px-3.5 py-1.5 text-xs font-medium text-white/70 mb-6">
                By the numbers
              </p>
              <div className="text-6xl md:text-7xl lg:text-8xl font-bold text-white tracking-tight leading-none mb-4">
                10<span className="text-primary">hrs</span>
              </div>
              <p className="text-xl text-slate-400 leading-relaxed max-w-md">
                Saved per manager on scheduling and admin, every single week.
              </p>
              <p className="text-xs text-slate-600 mt-6">
                Based on average results reported by teams using Fork for 90+ days.
              </p>
            </div>

            {/* Right — supporting stats stacked */}
            <div className="space-y-4">
              {[
                { metric: '90%', label: 'Faster employee onboarding with digital forms and checklists', icon: <FileText className="w-5 h-5" /> },
                { metric: '$4,800', label: 'Average annual savings per location on operational costs', icon: <Shield className="w-5 h-5" /> },
                { metric: '70%', label: 'Fewer repetitive questions with AI-powered answers', icon: <BotMessageSquare className="w-5 h-5" /> },
              ].map((m) => (
                <div key={m.label} className="flex items-center gap-5 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 hover:border-primary/30 hover:bg-white/8 transition-all group">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/15 text-primary shrink-0 group-hover:bg-primary/25 transition-colors">
                    {m.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm text-slate-400 leading-relaxed">{m.label}</p>
                  </div>
                  <div className="text-2xl font-bold text-white shrink-0">{m.metric}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA — gradient-border card */}
      <section className="bg-slate-900">
        <div className="max-w-3xl mx-auto px-6 py-20 md:py-28">
          <div className="relative rounded-3xl p-px bg-linear-to-br from-primary/60 via-white/10 to-primary/30">
            <div className="rounded-[calc(1.5rem-1px)] bg-slate-900 px-8 py-14 md:px-14 md:py-20 text-center relative overflow-hidden">
              {/* Decorative glow */}
              <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-primary/20 rounded-full blur-[100px] pointer-events-none" />

              <p className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 border border-primary/20 px-3 py-1 text-xs font-medium text-primary mb-6 relative">
                <Sparkles className="w-3 h-3" />Free 7-day trial
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4 relative">
                Ready to give your business<br className="hidden md:block" /> an AI-powered brain?
              </h2>
              <p className="text-lg text-slate-400 mb-10 max-w-md mx-auto relative">
                Join operators who run smarter with Fork. Start your free trial today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center relative">
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
          </div>
        </div>
      </section>
    </main>
  )
}