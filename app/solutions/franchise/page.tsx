import { Button } from '@/components/ui/button'
import {
  ArrowRight,
  ChevronRight,
  Store,
  Layers,
  BookOpen,
  Shield,
  ClipboardCheck,
  FileText,
  Users,
  Repeat,
  TrendingUp,
  CheckCircle2,
  Zap,
  Award,
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
      <section>
        <div className="max-w-5xl mx-auto px-6 pt-4 pb-16 md:pt-28 md:pb-20">
          <nav className="inline-flex items-center gap-1.5 text-sm mb-5">
            <Link href="/products" className="text-slate-400 hover:text-primary transition-colors">Solutions</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
            <span className="inline-flex items-center gap-1.5 font-semibold text-primary bg-primary/6 rounded-full px-3 py-0.5">
              <Store className="w-3.5 h-3.5" />
              Franchise & Brand
            </span>
          </nav>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-slate-900 max-w-3xl">
            Your brand, consistently executed at every location
          </h1>
          <p className="mt-6 text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl">
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
                See multi-location solution
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-slate-50/60">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <div className="grid sm:grid-cols-3 gap-8">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-base font-semibold text-slate-900 mb-1">{stat.label}</div>
                <div className="text-sm text-slate-500">{stat.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section>
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-2xl mb-14">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              Tools to protect and scale your brand
            </h2>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              Fork replaces scattered spreadsheets, paper checklists, and inconsistent training with a single platform every franchise location uses the same way.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((b) => (
              <div key={b.title} className="flex flex-col">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/8 mb-4">
                  {b.icon}
                </div>
                <h3 className="text-base font-semibold text-slate-900 mb-2">{b.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Franchise playbook */}
      <section className="bg-slate-50/60">
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-2xl mb-10">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              How a franchise rollout works with Fork
            </h2>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              From onboarding a new location to ongoing oversight — here&apos;s the playbook.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 max-w-4xl">
            {franchisePlaybook.map((phase, idx) => (
              <div key={phase.phase} className="bg-white rounded-xl border border-slate-200 p-6">
                <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary text-sm font-bold mb-4">
                  {idx + 1}
                </div>
                <h3 className="text-base font-semibold text-slate-900 mb-3">{phase.phase}</h3>
                <ul className="space-y-2">
                  {phase.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-600">
                      <CheckCircle2 className="w-4 h-4 text-primary shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Brand consistency */}
      <section>
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-2xl mb-10">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
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
              <div key={item} className="flex items-center gap-2 text-sm text-slate-700 font-medium bg-white rounded-lg px-4 py-3 border border-slate-200">
                <Zap className="w-4 h-4 text-primary shrink-0" />
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900">
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-28 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            Scale your brand without losing control
          </h2>
          <p className="text-lg text-slate-400 mb-10 max-w-xl mx-auto">
            Start your free 7-day trial and get every location on the same page — literally.
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
