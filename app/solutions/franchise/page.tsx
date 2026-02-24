import { Button } from '@/components/ui/button'
import BlobBackground from '@/components/visual/BlobBackground'
import {
  ArrowRight,
  ChevronRight,
  Store,
  BookOpen,
  Shield,
  ClipboardCheck,
  FileText,
  Users,
  TrendingUp,
  CheckCircle2,
  Zap,
  Sparkles,
} from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Franchise & Brand Consistency — Fork | Standardize Operations Across Every Franchise',
  description:
    'Ensure every franchise location follows the same processes, training standards, and compliance requirements. Fork gives franchisors the tools to maintain brand consistency at scale.',
  alternates: {
    canonical: '/solutions/franchise',
  },
  openGraph: {
    title: 'Franchise & Brand Consistency — Fork | Standardize Operations Across Every Franchise',
    description:
      'Ensure every franchise location follows the same processes, training standards, and compliance requirements.',
    url: 'https://forkhr.com/solutions/franchise',
    images: ['/og-image.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Franchise & Brand Consistency — Fork',
    description:
      'Ensure every franchise location follows the same processes, training standards, and compliance requirements.',
    images: ['/og-image.png'],
  },
}

const stats = [
  { value: '95%', label: 'Process consistency across locations', detail: 'Standardized checklists and training ensure every location operates the same way' },
  { value: '70%', label: 'Faster franchisee onboarding', detail: 'Digital playbooks get new franchise owners operational in days, not weeks' },
  { value: '3×', label: 'Faster compliance audits', detail: 'All records are digital, organized, and accessible — no binder-flipping' },
]

const benefits = [
  {
    icon: <BookOpen className="w-5 h-5 text-primary" />,
    title: 'Standardized training programs',
    desc: 'Create training courses once, deploy them everywhere. Every new hire at every location gets the exact same onboarding experience — your brand standards, your way.',
  },
  {
    icon: <ClipboardCheck className="w-5 h-5 text-primary" />,
    title: 'Brand-standard checklists',
    desc: 'Opening, closing, cleaning, prep — build checklists that enforce your operating procedures at every location. Track completion rates and flag outliers.',
  },
  {
    icon: <FileText className="w-5 h-5 text-primary" />,
    title: 'Centralized document management',
    desc: 'Push policy updates, procedural changes, and new forms to all locations instantly. Know who has acknowledged and who still needs to review.',
  },
  {
    icon: <Shield className="w-5 h-5 text-primary" />,
    title: 'Franchise compliance tracking',
    desc: 'Track whether each franchisee is meeting brand requirements — from labor law compliance to food safety to training completion. All in one compliance dashboard.',
  },
  {
    icon: <Users className="w-5 h-5 text-primary" />,
    title: 'Franchisor-level oversight',
    desc: 'Give franchisors read-only or full access across all locations. Separate data by franchise group, region, or individual operator — with the granularity you need.',
  },
  {
    icon: <TrendingUp className="w-5 h-5 text-primary" />,
    title: 'Performance benchmarking',
    desc: 'Compare franchise locations on labor efficiency, checklist compliance, training completion, and more. Identify top performers and share what works.',
  },
]

const franchisePlaybook = [
  {
    phase: 'New location setup',
    items: ['Create location in Fork', 'Invite franchisee as admin', 'Auto-deploy standard checklists', 'Push required training courses', 'Import compliance templates'],
  },
  {
    phase: 'Daily operations',
    items: ['Employees complete shift checklists', 'Managers review and approve timecards', 'Waste and maintenance logged in real time', 'Pulse surveys run on schedule'],
  },
  {
    phase: 'Franchisor oversight',
    items: ['Review cross-location dashboards', 'Compare performance metrics', 'Audit compliance readiness', 'Push policy updates to all sites'],
  },
]

export default function FranchisePage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative pt-20"
        style={{
          backgroundImage: "radial-gradient(circle,#DDD8CA 1px,transparent 0)",
          backgroundSize: "20px 20px",
        }}
      >
        <BlobBackground variant="circle" />
        <div className="max-w-5xl mx-auto px-6 pt-12 pb-16 md:pt-28 md:pb-20">
          <nav className="inline-flex items-center gap-1.5 text-sm mb-5">
            <Link href="/products" className="text-warm-400 hover:text-primary transition-colors">Solutions</Link>
            <ChevronRight className="w-3.5 h-3.5 text-warm-300" />
            <span className="inline-flex items-center gap-1.5 font-semibold text-primary bg-primary/6 rounded-full px-3 py-0.5">
              <Store className="w-3.5 h-3.5" />
              Franchise & Brand
            </span>
          </nav>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-warm-900 max-w-3xl">
            Your brand, consistently executed at every location
          </h1>
          <p className="mt-6 text-lg md:text-xl text-warm-600 leading-relaxed max-w-2xl">
            A franchise is only as strong as its weakest location. Fork gives you the tools to standardize onboarding, training, checklists, and compliance — so every guest gets the same experience, everywhere.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="https://app.forkhr.com/register" target="_blank">
              <Button size="lg" className="text-base px-8 h-12">
                Start free trial
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="/solutions/multi-location">
              <Button variant="outline" size="lg" className="text-base px-8 h-12">
                Learn more
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats — asymmetric hero stat + row cards */}
      <section className="bg-warm-100/60">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <div className="grid md:grid-cols-[1.2fr_1fr] gap-10 md:gap-16 items-center">
            <div>
              <div className="text-6xl md:text-7xl font-bold text-primary tracking-tight leading-none mb-3">{stats[0].value}</div>
              <div className="text-lg font-semibold text-warm-900 mb-1">{stats[0].label}</div>
              <div className="text-sm text-warm-500">{stats[0].detail}</div>
            </div>
            <div className="space-y-3">
              {stats.slice(1).map((stat) => (
                <div key={stat.label} className="flex items-center gap-5 rounded-2xl border border-warm-200/80 bg-white p-5">
                  <div className="text-3xl font-bold text-primary shrink-0">{stat.value}</div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-semibold text-warm-900">{stat.label}</div>
                    <div className="text-xs text-warm-500">{stat.detail}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits — bento grid */}
      <section>
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-2xl mb-14">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-warm-900">
              Tools to protect and scale your brand
            </h2>
            <p className="mt-4 text-lg text-warm-600 leading-relaxed">
              Fork replaces scattered spreadsheets, paper checklists, and inconsistent training with a single platform every franchise location uses the same way.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5 mb-5">
            {benefits.slice(0, 2).map((b) => (
              <div key={b.title} className="group rounded-2xl border border-warm-200/80 bg-white p-8 md:p-10 hover:border-primary/20 hover:shadow-sm transition-all">
                <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/8 mb-5">{b.icon}</div>
                <h3 className="text-xl font-semibold text-warm-900 mb-3">{b.title}</h3>
                <p className="text-base text-warm-600 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {benefits.slice(2).map((b) => (
              <div key={b.title} className="group rounded-2xl border border-warm-200/80 bg-white p-5 hover:border-primary/20 hover:shadow-sm transition-all">
                <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary/8 mb-3">{b.icon}</div>
                <h3 className="text-sm font-semibold text-warm-900 mb-1">{b.title}</h3>
                <p className="text-xs text-warm-500 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Franchise playbook — horizontal stepper with connecting line */}
      <section className="bg-warm-100/60">
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-2xl mb-14">
            <p className="inline-flex items-center gap-2 rounded-full bg-primary/5 border border-primary/10 px-3.5 py-1.5 text-xs font-medium text-primary mb-4">Playbook</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-warm-900">
              How a franchise rollout works with Fork
            </h2>
            <p className="mt-4 text-lg text-warm-600 leading-relaxed">
              From onboarding a new location to ongoing oversight — here&apos;s the playbook.
            </p>
          </div>

          <div className="relative">
            {/* Connecting line (desktop) */}
            <div className="hidden md:block absolute top-8 left-[calc(16.66%+20px)] right-[calc(16.66%+20px)] h-px bg-linear-to-r from-primary/10 via-primary/30 to-primary/10" />

            <div className="grid md:grid-cols-3 gap-10 md:gap-8">
              {franchisePlaybook.map((phase, idx) => (
                <div key={phase.phase} className="relative text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-white border-2 border-primary/20 shadow-sm relative z-10 mb-6">
                    <span className="text-xl font-bold text-primary">{String(idx + 1).padStart(2, '0')}</span>
                  </div>
                  <h3 className="text-lg font-semibold text-warm-900 mb-4">{phase.phase}</h3>
                  <ul className="space-y-2 text-left inline-block">
                    {phase.items.map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-warm-600">
                        <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Brand consistency */}
      <section>
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-2xl mb-10">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-warm-900">
              What you standardize with Fork
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-4xl">
            {[
              'Employee onboarding',
              'Training & certifications',
              'Opening/closing checklists',
              'Food safety procedures',
              'Customer service standards',
              'Waste tracking protocols',
              'Maintenance reporting',
              'HR & compliance docs',
            ].map((item) => (
              <div key={item} className="flex items-center gap-2 text-sm text-warm-700 font-medium bg-white rounded-lg px-4 py-3 border border-warm-200">
                <Zap className="w-4 h-4 text-primary shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA — gradient-border card */}
      <section className="bg-charcoal">
        <div className="max-w-3xl mx-auto px-6 py-20 md:py-28">
          <div className="relative rounded-3xl p-px bg-linear-to-br from-amber/40 via-white/10 to-amber/20">
            <div className="rounded-[calc(1.5rem-1px)] bg-charcoal px-8 py-14 md:px-14 md:py-20 text-center relative overflow-hidden">
              <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-amber/15 rounded-full blur-[100px] pointer-events-none" />
              <p className="inline-flex items-center gap-1.5 rounded-full bg-white/10 border border-amber/20 px-3 py-1 text-xs font-medium text-white mb-6 relative">
                <Sparkles className="w-3 h-3" /> No credit card required
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4 relative">
                Scale your brand without losing control
              </h2>
              <p className="text-lg text-warm-400 mb-10 max-w-md mx-auto relative">
                Start your free 7-day trial and get every location on the same page — literally.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center relative">
                <Link href="https://app.forkhr.com/register" target="_blank">
                  <Button size="lg" className="text-base px-8 h-12 bg-white text-warm-900 hover:bg-warm-100">
                    Start free trial
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
                <Link href="/pricing">
                  <Button variant="outline" size="lg" className="text-base px-8 h-12 border-charcoal-600 text-warm-300 bg-charcoal-800 hover:bg-charcoal hover:text-white">
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
