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
import BlobBackground from '@/components/visual/BlobBackground'
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
    icon: <BookOpen className="w-5 h-5 text-forest-600" />,
    title: 'You build your content',
    description: 'Add your company FAQs, training courses, and text library resources inside Fork. The AI assistant automatically indexes everything you publish.',
    sources: ['Company FAQs', 'Training courses', 'Text library', 'Product documentation'],
  },
  {
    step: '02',
    icon: <Search className="w-5 h-5 text-forest-600" />,
    title: 'Smart retrieval — not guessing',
    description: 'When someone asks a question, the assistant searches your company-specific content first. It prioritizes your FAQs, library, and courses — and falls back to product documentation only when needed.',
    sources: ['Keyword-based retrieval', 'Priority-ranked sources', 'No hallucinations', 'Escalation when unsure'],
  },
  {
    step: '03',
    icon: <MessageSquare className="w-5 h-5 text-forest-600" />,
    title: 'Instant, accurate answers',
    description: 'Employees and managers get step-by-step guidance, policy-specific answers, and role-aware responses — in seconds. If the AI can\'t answer, it escalates to your support team or manager.',
    sources: ['Policy-specific answers', 'Role-aware responses', 'Human escalation built-in', '24/7 availability'],
  },
]

const features = [
  {
    icon: <Sparkles className="w-5 h-5 text-forest-600" />,
    title: 'Company-aware AI',
    desc: 'Answers are sourced from your published content — FAQs, library, courses, and documentation. Not generic internet answers.',
  },
  {
    icon: <UserCog className="w-5 h-5 text-forest-600" />,
    title: 'Role-based intelligence',
    desc: 'The assistant adapts responses based on the user\'s role. Owners get billing guidance. Managers get team management help. Employees get self-service instructions.',
  },
  {
    icon: <Crown className="w-5 h-5 text-forest-600" />,
    title: 'Plan-aware responses',
    desc: 'If a user asks about a feature restricted to a higher plan, the assistant clearly explains which plan is required — no confusion.',
  },
  {
    icon: <RefreshCw className="w-5 h-5 text-forest-600" />,
    title: 'Real-time knowledge sync',
    desc: 'Publish a new FAQ or update a training course — the assistant picks it up on the next conversation. No manual retraining.',
  },
  {
    icon: <Lock className="w-5 h-5 text-forest-600" />,
    title: 'Secure company isolation',
    desc: 'Each company\'s content is strictly isolated. Your data is never shared across organizations or used to train other models.',
  },
  {
    icon: <ArrowUpRight className="w-5 h-5 text-forest-600" />,
    title: 'Escalation to human support',
    desc: 'When the AI can\'t find the answer, it offers to escalate — either to your support team or directly to the employee\'s manager via email.',
  },
]

const contentSources = [
  {
    icon: <HelpCircle className="w-5 h-5 text-forest-600" />,
    title: 'Company FAQs',
    desc: 'Published FAQ collections with question-answer pairs. The assistant prioritizes these for policy questions.',
  },
  {
    icon: <BookOpen className="w-5 h-5 text-forest-600" />,
    title: 'Training courses',
    desc: 'Course modules with sections, steps, and descriptions. Great for procedure and process questions.',
  },
  {
    icon: <Library className="w-5 h-5 text-forest-600" />,
    title: 'Text library',
    desc: 'Company-published documents and text resources — handbooks, policies, guides, and more.',
  },
  {
    icon: <FileText className="w-5 h-5 text-forest-600" />,
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
    <main className="pt-16">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-warm-100">
        <BlobBackground variant="sparkle" />
        <div className="relative max-w-6xl mx-auto px-6 pt-12 pb-16 md:pt-32 md:pb-24">
          <nav className="inline-flex items-center gap-1.5 text-sm mb-8">
            <Link href="/products" className="text-warm-500 hover:text-warm-950 transition-colors">Products</Link>
            <ChevronRight className="w-3.5 h-3.5 text-warm-300" />
            <span className="inline-flex items-center gap-1.5 font-medium text-warm-950">
              <BotMessageSquare className="w-3.5 h-3.5 text-forest-600" />
              AI Assistant
            </span>
          </nav>

          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight leading-[1.05] text-warm-950 max-w-3xl">
            Your Company&apos;s Knowledge<span className="text-forest-500">.</span> Instantly Accessible<span className="text-forest-500">.</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-warm-600 leading-relaxed max-w-2xl">
            An AI assistant trained on your company&apos;s internal content — delivering accurate, policy-aware answers to managers and employees in seconds. No generic responses. No hallucinations. Just your knowledge, on demand.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="https://app.forkhr.com/register" target="_blank">
              <Button size="lg" className="text-base px-6 h-11">
                Get started
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
            </Link>
            <Link href="#how-it-works">
              <Button variant="outline" size="lg" className="text-base px-6 h-11">
                Read more
              </Button>
            </Link>
          </div>

          <div className="mt-6 inline-flex items-center gap-2 text-sm text-warm-400">
            <Crown className="w-4 h-4 text-forest-600" />
            Available on the Premium plan
          </div>
        </div>
      </section>

      {/* Problem section — numbered pain points */}
      <section className="border-b border-warm-100">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="grid md:grid-cols-[1fr_1.4fr] gap-12 md:gap-16 items-start">
            <div>
              <span className="eyebrow mb-4">The problem</span>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-warm-950">
                Your team has questions. The answers exist — they&apos;re just hard to find.
              </h2>
              <p className="mt-4 text-lg text-warm-600 leading-relaxed">
                Every company has policies, procedures, and training materials. The problem is that employees can&apos;t find what they need — and managers spend hours repeating the same answers.
              </p>
            </div>
            <div className="divide-y divide-warm-100 border-t border-warm-100 md:border-t-0">
              {painPoints.map((p, i) => (
                <div key={p.problem} className="flex gap-5 py-5">
                  <span className="text-[13px] font-medium text-warm-400 tabular-nums shrink-0 w-8 pt-0.5">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <h3 className="text-base font-semibold text-warm-950 mb-1">{p.problem}</h3>
                    <p className="text-sm text-warm-500 leading-relaxed">{p.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="border-b border-warm-100">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-2xl mb-14">
            <span className="eyebrow mb-4">How it works</span>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-warm-950">
              Three steps to a smarter support experience
            </h2>
            <p className="mt-4 text-lg text-warm-600 leading-relaxed">
              No configuration. No prompt engineering. Just publish your content and the assistant handles the rest.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10 md:gap-8">
            {steps.map((s) => (
              <div key={s.step} className="border-t-2 border-warm-950 pt-6">
                <span className="text-[13px] font-medium text-warm-400 tabular-nums">{s.step}</span>
                <h3 className="mt-2 text-lg font-semibold text-warm-950 mb-2">{s.title}</h3>
                <p className="text-[15px] text-warm-600 leading-relaxed mb-5">{s.description}</p>
                <ul className="space-y-2.5">
                  {s.sources.map((source) => (
                    <li key={source} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-forest-500 mt-0.5 shrink-0" />
                      <span className="text-[15px] text-warm-600">{source}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature highlights */}
      <section className="border-b border-warm-100">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-2xl mb-14">
            <span className="eyebrow mb-4">Features</span>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-warm-950">
              Built for accuracy, not novelty
            </h2>
            <p className="mt-4 text-lg text-warm-600 leading-relaxed">
              Every design decision behind the AI assistant is about delivering correct, company-specific answers — not impressing with generic AI tricks.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-warm-200 border border-warm-200 rounded-xl overflow-hidden">
            {features.map((f) => (
              <div key={f.title} className="bg-white p-7 hover:bg-warm-50 transition-colors">
                <div className="mb-4">{f.icon}</div>
                <h3 className="text-[15px] font-semibold text-warm-950 mb-1.5">{f.title}</h3>
                <p className="text-sm text-warm-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content sources */}
      <section className="border-b border-warm-100">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-2xl mb-14">
            <span className="eyebrow mb-4">Content sources</span>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-warm-950">
              Your assistant doesn&apos;t guess — it answers from your approved content
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-warm-200 border border-warm-200 rounded-xl overflow-hidden">
            {contentSources.map((source) => (
              <div key={source.title} className="bg-white p-7 hover:bg-warm-50 transition-colors">
                <div className="mb-4">{source.icon}</div>
                <h3 className="text-[15px] font-semibold text-warm-950 mb-1.5">{source.title}</h3>
                <p className="text-sm text-warm-500 leading-relaxed">{source.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-col md:flex-row md:items-center gap-x-8 gap-y-4 border border-warm-200 rounded-xl p-7">
            <div className="flex items-center gap-3 shrink-0">
              <Sparkles className="w-5 h-5 text-forest-600" />
              <div>
                <div className="text-[15px] font-semibold text-warm-950">Fork AI Assistant</div>
                <div className="text-sm text-warm-500">Retrieves, ranks, and responds</div>
              </div>
            </div>
            <ArrowRight className="hidden md:block w-4 h-4 text-warm-400 shrink-0" />
            <div className="flex items-center gap-3">
              <MessageSquare className="w-4 h-4 text-forest-600 shrink-0" />
              <span className="text-[15px] text-warm-600">Accurate, policy-specific answers in seconds</span>
            </div>
          </div>
        </div>
      </section>

      {/* Use cases — side-by-side comparison table */}
      <section className="bg-warm-50 border-b border-warm-100">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-2xl mb-14">
            <span className="eyebrow mb-4">Use cases</span>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-warm-950">
              Built for both sides of the org chart
            </h2>
          </div>

          <div className="rounded-xl border border-warm-200 bg-white overflow-hidden">
            {/* Table header */}
            <div className="grid grid-cols-2 border-b border-warm-200">
              <div className="flex items-center gap-3 px-6 md:px-8 py-5 border-r border-warm-200">
                <Shield className="w-5 h-5 text-forest-600" />
                <span className="text-base font-semibold text-warm-950">For managers</span>
              </div>
              <div className="flex items-center gap-3 px-6 md:px-8 py-5">
                <Users className="w-5 h-5 text-forest-600" />
                <span className="text-base font-semibold text-warm-950">For employees</span>
              </div>
            </div>
            {/* Table rows */}
            {managerUseCases.map((uc, i) => (
              <div key={i} className="grid grid-cols-2 border-b border-warm-100 last:border-0">
                <div className="flex items-start gap-3 px-6 md:px-8 py-4 border-r border-warm-100">
                  <CheckCircle2 className="w-4 h-4 text-forest-500 mt-0.5 shrink-0" />
                  <span className="text-[15px] text-warm-600">{uc}</span>
                </div>
                <div className="flex items-start gap-3 px-6 md:px-8 py-4">
                  <CheckCircle2 className="w-4 h-4 text-forest-500 mt-0.5 shrink-0" />
                  <span className="text-[15px] text-warm-600">{employeeUseCases[i] || ''}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform integration — horizontal inline strip */}
      <section className="border-b border-warm-100">
        <div className="max-w-6xl mx-auto px-6 py-14 md:py-16">
          <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12">
            <div className="shrink-0 md:max-w-[280px]">
              <h2 className="text-2xl font-semibold tracking-tight text-warm-950">
                Embedded where your team already works
              </h2>
            </div>
            <div className="flex-1 grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-6 md:border-l md:border-warm-100 md:pl-12">
              {[
                { icon: <LayoutDashboard className="w-5 h-5 text-forest-600" />, title: 'Web dashboard', desc: 'Inside your Fork dashboard' },
                { icon: <Smartphone className="w-5 h-5 text-forest-600" />, title: 'Mobile app', desc: 'iOS & Android' },
                { icon: <Lock className="w-5 h-5 text-forest-600" />, title: 'Company-isolated', desc: 'Never shared across orgs' },
                { icon: <Zap className="w-5 h-5 text-forest-600" />, title: 'Retrieval-based', desc: 'Not generic generation' },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <div className="shrink-0 mt-0.5">{item.icon}</div>
                  <div>
                    <h3 className="text-sm font-semibold text-warm-950">{item.title}</h3>
                    <p className="text-xs text-warm-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-warm-950">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-2xl">
            <span className="eyebrow text-lime-accent mb-4">Premium plan is required</span>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-5">
              Turn your company knowledge into a living assistant
            </h2>
            <p className="text-lg text-warm-400 mb-10 max-w-lg">
              Stop answering the same questions. Let your AI assistant handle it — trained on the content you already have.
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
