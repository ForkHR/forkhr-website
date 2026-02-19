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
      <section>
        <div className="max-w-5xl mx-auto px-6 pt-4 pb-16 md:pt-28 md:pb-20">
          <nav className="inline-flex items-center gap-1.5 text-sm mb-5">
            <Link href="/products" className="text-slate-400 hover:text-primary transition-colors">Products</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
            <span className="inline-flex items-center gap-1.5 font-semibold text-primary bg-primary/6 rounded-full px-3 py-0.5">
              <BotMessageSquare className="w-3.5 h-3.5" />
              AI Assistant
            </span>
          </nav>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-slate-900 max-w-3xl">
            Your Company&apos;s Knowledge<span className="text-primary">.</span> Instantly Accessible<span className="text-primary">.</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl">
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
                See how it works
              </Button>
            </Link>
          </div>

          <div className="mt-6 inline-flex items-center gap-2 text-sm text-slate-400">
            <Crown className="w-4 h-4 text-primary" />
            Available on the Premium plan
          </div>
        </div>
      </section>

      {/* Problem section */}
      <section className="bg-slate-50/60">
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-2xl mb-14">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">The problem</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              Your team has questions. The answers exist — they&apos;re just hard to find.
            </h2>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              Every company has policies, procedures, and training materials. The problem is that employees can&apos;t find what they need — and managers spend hours repeating the same answers.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5">
            {painPoints.map((p) => (
              <div
                key={p.problem}
                className="rounded-2xl border border-slate-200/80 bg-white p-6"
              >
                <h3 className="text-base font-semibold text-slate-900 mb-2">{p.problem}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{p.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works">
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-2xl mb-16">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">How it works</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              Three steps to a smarter support experience
            </h2>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              No configuration. No prompt engineering. Just publish your content and the assistant handles the rest.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {steps.map((s) => (
              <div key={s.step}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="text-4xl font-bold text-primary/15">{s.step}</div>
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/8">
                    {s.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{s.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed mb-4">{s.description}</p>
                <ul className="space-y-1.5">
                  {s.sources.map((source) => (
                    <li key={source} className="flex items-center gap-2 text-sm text-slate-500">
                      <CheckCircle2 className="w-3.5 h-3.5 text-primary shrink-0" />
                      {source}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature highlights */}
      <section className="bg-slate-50/60">
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-2xl mb-14">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Features</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              Built for accuracy, not novelty
            </h2>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              Every design decision behind the AI assistant is about delivering correct, company-specific answers — not impressing with generic AI tricks.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((f) => (
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

      {/* Content sources */}
      <section>
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-2xl mb-14">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Content sources</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              Your assistant doesn&apos;t guess — it answers from your approved content
            </h2>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              Every answer is grounded in content you control. Publish it in Fork, and the assistant can reference it.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-5 max-w-3xl">
            {contentSources.map((source) => (
              <div
                key={source.title}
                className="group rounded-2xl border border-slate-200/80 bg-white p-6 hover:border-primary/20 hover:shadow-sm transition-all"
              >
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-primary/8 text-primary mb-4 group-hover:bg-primary/12 transition-colors">
                  {source.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{source.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{source.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="bg-slate-50/60">
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-2xl mb-14">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Use cases</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              Built for both sides of the org chart
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl">
            {/* Managers */}
            <div className="rounded-2xl border border-slate-200/80 bg-white p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/8">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900">For managers</h3>
              </div>
              <ul className="space-y-3">
                {managerUseCases.map((uc) => (
                  <li key={uc} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span className="text-sm text-slate-600">{uc}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Employees */}
            <div className="rounded-2xl border border-slate-200/80 bg-white p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/8">
                  <Users className="w-5 h-5 text-primary" />
                </div>
                <h3 className="text-xl font-semibold text-slate-900">For employees</h3>
              </div>
              <ul className="space-y-3">
                {employeeUseCases.map((uc) => (
                  <li key={uc} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span className="text-sm text-slate-600">{uc}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Integration / platform embed */}
      <section>
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-2xl mb-14">
            <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Platform integration</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              Embedded where your team already works
            </h2>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              No separate app. No browser extension. The AI assistant lives inside Fork — on both web and mobile.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {[
              { icon: <LayoutDashboard className="w-5 h-5 text-primary" />, title: 'Web dashboard', desc: 'Accessible from the assistant panel inside your Fork dashboard' },
              { icon: <Smartphone className="w-5 h-5 text-primary" />, title: 'Mobile app', desc: 'Available on iOS and Android from the You tab header' },
              { icon: <Lock className="w-5 h-5 text-primary" />, title: 'Company-isolated', desc: 'Your data is never shared across organizations' },
              { icon: <Zap className="w-5 h-5 text-primary" />, title: 'Retrieval-based AI', desc: 'Powered by intelligent retrieval, not generic generation' },
            ].map((item) => (
              <div key={item.title} className="rounded-xl border border-slate-200 bg-white p-5">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-primary/8 mb-3">
                  {item.icon}
                </div>
                <h3 className="text-sm font-semibold text-slate-900 mb-1">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900">
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-28 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/10 px-4 py-1.5 text-sm font-medium text-white/70 mb-6">
            <Crown className="w-4 h-4 text-primary" />
            Premium plan is required
          </div>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            Turn your company knowledge into a living assistant
          </h2>
          <p className="text-lg text-slate-400 mb-10 max-w-xl mx-auto">
            Stop answering the same questions. Let your AI assistant handle it — trained on the content you already have.
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
