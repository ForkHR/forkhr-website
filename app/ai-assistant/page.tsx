import { Button } from '@/components/ui/button'
import {
  ArrowRight,
  ChevronRight,
  BotMessageSquare,
  BookOpen,
  Library,
  HelpCircle,
  FileText,
  Shield,
  Users,
  Sparkles,
  CheckCircle2,
  MessageSquare,
  Search,
  ArrowUpRight,
  Lock,
  Smartphone,
  LayoutDashboard,
  RefreshCw,
  UserCog,
  Crown,
  Zap,
} from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'
import BlobBackground from '@/components/visual/BlobBackground'

export const metadata: Metadata = {
  title: 'AI Assistant — Fork | Company-Trained AI for Workforce Management',
  description:
    'An AI assistant trained on your company\'s internal content — FAQs, training courses, text library, and policies. Delivers accurate, role-aware answers to managers and employees instantly. Available on Fork Premium.',
  alternates: {
    canonical: '/ai-assistant',
  },
  openGraph: {
    title: 'AI Assistant — Fork | Company-Trained AI for Workforce Management',
    description:
      'An AI assistant trained on your company\'s internal content — FAQs, training courses, text library, and policies. Delivers accurate, role-aware answers instantly.',
    url: 'https://forkhr.com/ai-assistant',
    images: ['/og-image.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AI Assistant — Fork | Company-Trained AI for Workforce Management',
    description:
      'An AI assistant trained on your company\'s internal content — delivering accurate, policy-aware answers in seconds.',
    images: ['/og-image.png'],
  },
}

const painPoints = [
  {
    problem: 'Managers answering the same questions every week',
    detail: '"What\'s our PTO policy?" "How do I request time off?" "Where\'s the employee handbook?"',
  },
  {
    problem: 'Employees unsure about company policies',
    detail: 'Important information buried in documents, handbooks, and training materials that nobody reads twice.',
  },
  {
    problem: 'Knowledge scattered across tools',
    detail: 'Policies in one place, FAQs in another, training materials somewhere else. No single source of truth.',
  },
  {
    problem: 'Inconsistent answers across locations',
    detail: 'Different managers giving different answers to the same policy question. No standardization.',
  },
]

const steps = [
  {
    step: '01',
    icon: <BookOpen className="w-5 h-5 text-primary" />,
    title: 'You build your content',
    description: 'Add your company FAQs, training courses, and text library resources inside Fork. The AI assistant automatically indexes everything you publish.',
    sources: ['Company FAQs', 'Training courses', 'Text library', 'Product documentation'],
  },
  {
    step: '02',
    icon: <Search className="w-5 h-5 text-primary" />,
    title: 'Smart retrieval — not guessing',
    description: 'When someone asks a question, the assistant searches your company-specific content first. It prioritizes your FAQs, library, and courses — and falls back to product documentation only when needed.',
    sources: ['Keyword-based retrieval', 'Priority-ranked sources', 'No hallucinations', 'Escalation when unsure'],
  },
  {
    step: '03',
    icon: <MessageSquare className="w-5 h-5 text-primary" />,
    title: 'Instant, accurate answers',
    description: 'Employees and managers get step-by-step guidance, policy-specific answers, and role-aware responses — in seconds. If the AI can\'t answer, it escalates to your support team or manager.',
    sources: ['Policy-specific answers', 'Role-aware responses', 'Human escalation built-in', '24/7 availability'],
  },
]

const features = [
  {
    icon: <Sparkles className="w-5 h-5 text-primary" />,
    title: 'Company-aware AI',
    desc: 'Answers are sourced from your published content — FAQs, library, courses, and documentation. Not generic internet answers.',
  },
  {
    icon: <UserCog className="w-5 h-5 text-primary" />,
    title: 'Role-based intelligence',
    desc: 'The assistant adapts responses based on the user\'s role. Owners get billing guidance. Managers get team management help. Employees get self-service instructions.',
  },
  {
    icon: <Crown className="w-5 h-5 text-primary" />,
    title: 'Plan-aware responses',
    desc: 'If a user asks about a feature restricted to a higher plan, the assistant clearly explains which plan is required — no confusion.',
  },
  {
    icon: <RefreshCw className="w-5 h-5 text-primary" />,
    title: 'Real-time knowledge sync',
    desc: 'Publish a new FAQ or update a training course — the assistant picks it up on the next conversation. No manual retraining.',
  },
  {
    icon: <Lock className="w-5 h-5 text-primary" />,
    title: 'Secure company isolation',
    desc: 'Each company\'s content is strictly isolated. Your data is never shared across organizations or used to train other models.',
  },
  {
    icon: <ArrowUpRight className="w-5 h-5 text-primary" />,
    title: 'Escalation to human support',
    desc: 'When the AI can\'t find the answer, it offers to escalate — either to your support team or directly to the employee\'s manager via email.',
  },
]

const contentSources = [
  {
    icon: <HelpCircle className="w-6 h-6 text-primary" />,
    title: 'Company FAQs',
    desc: 'Published FAQ collections with question-answer pairs. The assistant prioritizes these for policy questions.',
  },
  {
    icon: <BookOpen className="w-6 h-6 text-primary" />,
    title: 'Training courses',
    desc: 'Course modules with sections, steps, and descriptions. Great for procedure and process questions.',
  },
  {
    icon: <Library className="w-6 h-6 text-primary" />,
    title: 'Text library',
    desc: 'Company-published documents and text resources — handbooks, policies, guides, and more.',
  },
  {
    icon: <FileText className="w-6 h-6 text-primary" />,
    title: 'Product documentation',
    desc: 'Built-in Fork platform knowledge for app navigation, feature usage, and permissions.',
  },
]

const managerUseCases = [
  'Reduce repetitive employee questions',
  'Standardize policy answers across locations',
  'Improve operational clarity for your team',
  'Scale support without adding headcount',
  'Get real-time employee data summaries',
]

const employeeUseCases = [
  'Instant answers to policy questions',
  'Clear step-by-step guidance',
  'Schedule, time-off, and timecard help',
  '24/7 support — no waiting for a manager',
  'Training and course information on demand',
]

export default function AIAssistantPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative pt-[80px]"
        style={{
          backgroundImage: "radial-gradient(circle,#DDD8CA 1px,transparent 0)",
          backgroundSize: "20px 20px",
        }}
      >
        <BlobBackground variant="sparkle"/>
        <div className="max-w-5xl mx-auto px-6 pt-12 pb-16 md:pt-28 md:pb-20">
          <nav className="inline-flex items-center gap-1.5 text-sm mb-5">
            <Link href="/products" className="text-warm-400 hover:text-primary transition-colors">Products</Link>
            <ChevronRight className="w-3.5 h-3.5 text-warm-300" />
            <span className="inline-flex items-center gap-1.5 font-semibold text-primary bg-primary/6 rounded-full px-3 py-0.5">
              <BotMessageSquare className="w-3.5 h-3.5" />
              AI Assistant
            </span>
          </nav>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-warm-900 max-w-3xl">
            Your Company&apos;s Knowledge<span className="text-primary">.</span> Instantly Accessible<span className="text-primary">.</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-warm-600 leading-relaxed max-w-2xl">
            An AI assistant trained on your company&apos;s internal content — delivering accurate, policy-aware answers to managers and employees in seconds. No generic responses. No hallucinations. Just your knowledge, on demand.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="https://app.forkhr.com/register" target="_blank">
              <Button size="lg" className="text-base px-8 h-12">
                Get started
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="#how-it-works">
              <Button variant="outline" size="lg" className="text-base px-8 h-12">
                Read more
              </Button>
            </Link>
          </div>

          <div className="mt-6 inline-flex items-center gap-2 text-sm text-warm-400">
            <Crown className="w-4 h-4 text-primary" />
            Available on the Premium plan
          </div>
        </div>
      </section>

      {/* Problem section — dark with numbered pain points */}
      <section className="bg-charcoal relative overflow-hidden">
        <div className="absolute -top-20 -right-40 w-[500px] h-[500px] bg-red-500/5 rounded-full blur-[100px]" />
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-28 relative">
          <div className="grid md:grid-cols-[1fr_1.4fr] gap-12 md:gap-16 items-start">
            <div>
              <p className="inline-flex items-center gap-2 rounded-full bg-red-500/10 border border-red-500/20 px-3.5 py-1.5 text-xs font-medium text-red-400 mb-5">
                The problem
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
                Your team has questions. The answers exist — they&apos;re just hard to find.
              </h2>
              <p className="mt-4 text-lg text-warm-400 leading-relaxed">
                Every company has policies, procedures, and training materials. The problem is that employees can&apos;t find what they need — and managers spend hours repeating the same answers.
              </p>
            </div>
            <div className="space-y-0">
              {painPoints.map((p, i) => (
                <div key={p.problem} className="flex gap-5 py-5 border-b border-white/6 last:border-0">
                  <span className="text-2xl font-bold text-red-500/30 shrink-0 w-8 tabular-nums">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <h3 className="text-base font-semibold text-white mb-1">{p.problem}</h3>
                    <p className="text-sm text-warm-500 leading-relaxed">{p.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How it works — horizontal stepper with connecting line */}
      <section id="how-it-works">
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="inline-flex items-center gap-2 rounded-full bg-primary/5 border border-primary/10 px-3.5 py-1.5 text-xs font-medium text-primary mb-5">How it works</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-warm-900">
              Three steps to a smarter support experience
            </h2>
            <p className="mt-4 text-lg text-warm-600 leading-relaxed">
              No configuration. No prompt engineering. Just publish your content and the assistant handles the rest.
            </p>
          </div>

          {/* Stepper */}
          <div className="relative">
            {/* Connecting line (desktop) */}
            <div className="hidden md:block absolute top-8 left-[calc(16.66%+20px)] right-[calc(16.66%+20px)] h-px bg-linear-to-r from-primary/20 via-primary/40 to-primary/20" />

            <div className="grid md:grid-cols-3 gap-12 md:gap-8">
              {steps.map((s, i) => (
                <div key={s.step} className="relative text-center">
                  {/* Step circle */}
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white border-2 border-primary/20 shadow-sm relative z-10 mb-6">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10">
                      {s.icon}
                    </div>
                  </div>
                  {/* Arrow between steps (mobile) */}
                  {i < steps.length - 1 && (
                    <div className="md:hidden flex justify-center -mt-3 mb-3">
                      <div className="w-px h-8 bg-primary/20" />
                    </div>
                  )}
                  <h3 className="text-lg font-semibold text-warm-900 mb-2">{s.title}</h3>
                  <p className="text-sm text-warm-600 leading-relaxed mb-4">{s.description}</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {s.sources.map((source) => (
                      <span key={source} className="inline-flex items-center gap-1.5 text-xs bg-warm-100 text-warm-500 rounded-full px-2.5 py-1">
                        <CheckCircle2 className="w-3 h-3 text-primary shrink-0" />
                        {source}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Feature highlights — bento grid with varying sizes */}
      <section className="bg-warm-100/60">
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="inline-flex items-center gap-2 rounded-full bg-primary/5 border border-primary/10 px-3.5 py-1.5 text-xs font-medium text-primary mb-5">Features</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-warm-900">
              Built for accuracy, not novelty
            </h2>
            <p className="mt-4 text-lg text-warm-600 leading-relaxed">
              Every design decision behind the AI assistant is about delivering correct, company-specific answers — not impressing with generic AI tricks.
            </p>
          </div>

          {/* Bento grid — 2 large + 4 small */}
          <div className="grid md:grid-cols-2 gap-5 mb-5">
            {features.slice(0, 2).map((f) => (
              <div key={f.title} className="rounded-2xl border border-warm-200/80 bg-white p-8 md:p-10">
                <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/8 mb-5">
                  {f.icon}
                </div>
                <h3 className="text-xl font-semibold text-warm-900 mb-3">{f.title}</h3>
                <p className="text-base text-warm-600 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {features.slice(2).map((f) => (
              <div key={f.title} className="rounded-2xl border border-warm-200/80 bg-white p-6">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/8 mb-4">
                  {f.icon}
                </div>
                <h3 className="text-sm font-semibold text-warm-900 mb-1.5">{f.title}</h3>
                <p className="text-sm text-warm-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content sources — visual pipeline flow */}
      <section>
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="inline-flex items-center gap-2 rounded-full bg-primary/5 border border-primary/10 px-3.5 py-1.5 text-xs font-medium text-primary mb-5">Content sources</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-warm-900">
              Your assistant doesn&apos;t guess — it answers from your approved content
            </h2>
          </div>

          {/* Pipeline visualization */}
          <div className="relative max-w-4xl mx-auto">
            {/* Source nodes */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {contentSources.map((source) => (
                <div key={source.title} className="relative text-center rounded-2xl border border-warm-200/80 bg-white p-5">
                  <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-primary/8 text-primary mx-auto mb-3">
                    {source.icon}
                  </div>
                  <h3 className="text-sm font-semibold text-warm-900 mb-1">{source.title}</h3>
                  <p className="text-xs text-warm-500 leading-relaxed">{source.desc}</p>
                </div>
              ))}
            </div>

            {/* Converging arrows */}
            <div className="flex justify-center mb-8">
              <div className="flex flex-col items-center gap-2">
                <div className="flex gap-8 md:gap-20">
                  <div className="w-px h-6 bg-primary/20" />
                  <div className="w-px h-6 bg-primary/20" />
                  <div className="w-px h-6 bg-primary/20" />
                  <div className="w-px h-6 bg-primary/20" />
                </div>
                <div className="w-[200px] md:w-[400px] h-px bg-linear-to-r from-primary/5 via-primary/30 to-primary/5" />
                <div className="w-px h-6 bg-primary/30" />
              </div>
            </div>

            {/* AI core */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center gap-3 rounded-2xl bg-primary/5 border-2 border-primary/20 px-8 py-5">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary text-white">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div className="text-left">
                  <div className="text-base font-semibold text-warm-900">Fork AI Assistant</div>
                  <div className="text-sm text-warm-500">Retrieves, ranks, and responds</div>
                </div>
              </div>
            </div>

            {/* Output arrow */}
            <div className="flex justify-center mb-8">
              <div className="w-px h-6 bg-primary/30" />
            </div>

            {/* Output */}
            <div className="flex justify-center">
              <div className="inline-flex items-center gap-3 rounded-full bg-charcoal text-white px-6 py-3">
                <MessageSquare className="w-4 h-4 text-lavender" />
                <span className="text-sm font-medium">Accurate, policy-specific answers in seconds</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use cases — side-by-side comparison table */}
      <section className="bg-warm-100/60">
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="inline-flex items-center gap-2 rounded-full bg-primary/5 border border-primary/10 px-3.5 py-1.5 text-xs font-medium text-primary mb-5">Use cases</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-warm-900">
              Built for both sides of the org chart
            </h2>
          </div>

          <div className="max-w-4xl mx-auto rounded-2xl border border-warm-200/80 bg-white overflow-hidden">
            {/* Table header */}
            <div className="grid grid-cols-2 border-b border-warm-100">
              <div className="flex items-center gap-3 px-6 md:px-8 py-5 border-r border-warm-100">
                <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary/8">
                  <Shield className="w-4 h-4 text-primary" />
                </div>
                <span className="text-base font-semibold text-warm-900">For managers</span>
              </div>
              <div className="flex items-center gap-3 px-6 md:px-8 py-5">
                <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary/8">
                  <Users className="w-4 h-4 text-primary" />
                </div>
                <span className="text-base font-semibold text-warm-900">For employees</span>
              </div>
            </div>
            {/* Table rows */}
            {managerUseCases.map((uc, i) => (
              <div key={i} className="grid grid-cols-2 border-b border-warm-50 last:border-0">
                <div className="flex items-start gap-3 px-6 md:px-8 py-4 border-r border-warm-50">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm text-warm-600">{uc}</span>
                </div>
                <div className="flex items-start gap-3 px-6 md:px-8 py-4">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                  <span className="text-sm text-warm-600">{employeeUseCases[i] || ''}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform integration — horizontal inline strip */}
      <section className="border-y border-warm-200/80">
        <div className="max-w-5xl mx-auto px-6 py-14 md:py-16">
          <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12">
            <div className="shrink-0 md:max-w-[280px]">
              <h2 className="text-2xl font-bold tracking-tight text-warm-900">
                Embedded where your team already works
              </h2>
            </div>
            <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-6 md:border-l md:border-warm-200/80 md:pl-12">
              {[
                { icon: <LayoutDashboard className="w-4 h-4 text-primary" />, title: 'Web dashboard', desc: 'Inside your Fork dashboard' },
                { icon: <Smartphone className="w-4 h-4 text-primary" />, title: 'Mobile app', desc: 'iOS & Android' },
                { icon: <Lock className="w-4 h-4 text-primary" />, title: 'Company-isolated', desc: 'Never shared across orgs' },
                { icon: <Zap className="w-4 h-4 text-primary" />, title: 'Retrieval-based', desc: 'Not generic generation' },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/8 shrink-0 mt-0.5">
                    {item.icon}
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-warm-900">{item.title}</h3>
                    <p className="text-xs text-warm-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-plum">
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-28 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/10 px-4 py-1.5 text-sm font-medium text-white/70 mb-6">
            <Crown className="w-4 h-4 text-lavender" />
            Premium plan is required
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            Turn your company knowledge into a living assistant
          </h2>
          <p className="text-lg text-warm-400 mb-10 max-w-xl mx-auto">
            Stop answering the same questions. Let your AI assistant handle it — trained on the content you already have.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="https://app.forkhr.com/register" target="_blank">
              <Button size="lg" className="text-base px-8 h-12 bg-white text-warm-900 hover:bg-warm-100">
                Start free trial
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="/pricing">
              <Button variant="outline" size="lg" className="text-base px-8 h-12 border-plum-600 text-warm-300 bg-plum-800 hover:bg-plum hover:text-white">
                View pricing
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
