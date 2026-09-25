import { Button } from '@/components/ui/button'
import {
  ArrowRight,
  ChevronRight,
  BookOpen,
  Shield,
  ClipboardCheck,
  FileText,
  Users,
  TrendingUp,
  CheckCircle2,
} from 'lucide-react'
import Link from 'next/link'
import Backdrop from '@/components/visual/Backdrop'
import CtaSection from '@/components/marketing/CtaSection'
import { CTA_PRIMARY, REGISTER_URL } from '@/lib/site'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Franchise Operations Software: Same Procedures, Training and Schedules at Every Unit | Fork',
  description:
    'Ensure every franchise location follows the same processes, training standards, and compliance requirements. Fork gives franchisors the tools to maintain brand consistency at scale.',
  alternates: {
    canonical: '/solutions/franchise',
  },
  openGraph: {
    title: 'Franchise Operations Software: Same Procedures, Training and Schedules at Every Unit | Fork',
    description:
      'Ensure every franchise location follows the same processes, training standards, and compliance requirements.',
    url: 'https://forkhr.com/solutions/franchise',
    images: ['/og-image.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Franchise Operations Software | Fork',
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
    icon: <BookOpen className="w-5 h-5" />,
    title: 'Standardized training programs',
    desc: 'Create training courses once, deploy them everywhere. Every new hire at every location gets the exact same onboarding experience — your brand standards, your way.',
  },
  {
    icon: <ClipboardCheck className="w-5 h-5" />,
    title: 'Brand-standard checklists',
    desc: 'Opening, closing, cleaning, prep — build checklists that enforce your operating procedures at every location. Track completion rates and flag outliers.',
  },
  {
    icon: <FileText className="w-5 h-5" />,
    title: 'Centralized document management',
    desc: 'Push policy updates, procedural changes, and new forms to all locations instantly. Know who has acknowledged and who still needs to review.',
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: 'Franchise compliance tracking',
    desc: 'Track whether each franchisee is meeting brand requirements — from labor law compliance to food safety to training completion. All in one compliance dashboard.',
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: 'Franchisor-level oversight',
    desc: 'Give franchisors read-only or full access across all locations. Separate data by franchise group, region, or individual operator — with the granularity you need.',
  },
  {
    icon: <TrendingUp className="w-5 h-5" />,
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
    items: ['Employees complete shift checklists', 'Managers review and approve timecards', 'Waste, temperatures and equipment care logged in SOPs', 'Pulse surveys run on schedule'],
  },
  {
    phase: 'Franchisor oversight',
    items: ['Review cross-location dashboards', 'Compare performance metrics', 'Audit compliance readiness', 'Push policy updates to all sites'],
  },
]

export default function FranchisePage() {
  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-warm-100">
        <Backdrop />
        <div className="relative max-w-6xl mx-auto px-6 pt-12 pb-16 md:pt-32 md:pb-24">
          <nav className="flex items-center gap-1.5 text-sm mb-8">
            <Link href="/solutions" className="text-warm-500 hover:text-warm-950 transition-colors">Solutions</Link>
            <ChevronRight className="w-3.5 h-3.5 text-warm-300" />
            <span className="font-medium text-warm-950">Franchises</span>
          </nav>
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight leading-[1.05] text-warm-950 max-w-3xl">
            Your brand, consistently executed at every location
          </h1>
          <p className="mt-6 text-lg md:text-xl text-warm-600 leading-relaxed max-w-2xl">
            A franchise is only as strong as its weakest location. Fork gives you the tools to standardize onboarding, training, checklists, and compliance — so every guest gets the same experience, everywhere.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link href={REGISTER_URL} target="_blank">
              <Button size="lg" className="text-base px-6 h-11">
                {CTA_PRIMARY}
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
            </Link>
            <Link href="/solutions/multi-location">
              <Button variant="outline" size="lg" className="text-base px-6 h-11">
                Learn more
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="border-b border-warm-100">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-24">
          <div className="grid md:grid-cols-[1.1fr_1fr] gap-12 md:gap-20 items-center">
            <div>
              <span className="eyebrow mb-4">By the numbers</span>
              <div className="text-6xl md:text-7xl font-semibold text-warm-950 tracking-tight leading-none mb-4">{stats[0].value}</div>
              <p className="text-xl text-warm-600 leading-relaxed max-w-md">{stats[0].label}</p>
              <p className="text-xs text-warm-400 mt-6">{stats[0].detail}</p>
            </div>

            <div className="divide-y divide-warm-100">
              {stats.slice(1).map((stat) => (
                <div key={stat.label} className="flex items-baseline justify-between gap-6 py-5">
                  <div>
                    <p className="text-[15px] text-warm-600 leading-relaxed">{stat.label}</p>
                    <p className="text-sm text-warm-400 mt-1">{stat.detail}</p>
                  </div>
                  <div className="text-3xl font-semibold text-warm-950 tracking-tight shrink-0">{stat.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="border-b border-warm-100">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="grid md:grid-cols-[1fr_1.5fr] gap-12 md:gap-20 items-start">
            <div className="md:sticky md:top-28">
              <span className="eyebrow mb-4">Brand consistency</span>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-warm-950">
                Tools to protect and scale your brand
              </h2>
              <p className="mt-4 text-lg text-warm-600 leading-relaxed">
                Fork replaces scattered spreadsheets, paper checklists, and inconsistent training with a single platform every franchise location uses the same way.
              </p>
            </div>

            <div className="divide-y divide-warm-200/70">
              {benefits.map((b) => (
                <div key={b.title} className="flex items-start gap-5 py-6 first:pt-0 last:pb-0">
                  <div className="mt-0.5 shrink-0 text-forest-600">{b.icon}</div>
                  <div>
                    <h3 className="text-base font-semibold text-warm-950">{b.title}</h3>
                    <p className="mt-1 text-[15px] text-warm-600 leading-relaxed">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Franchise playbook */}
      <section className="bg-warm-50 border-b border-warm-100">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-2xl mb-14">
            <span className="eyebrow mb-4">Playbook</span>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-warm-950">
              How a franchise rollout works with Fork
            </h2>
            <p className="mt-4 text-lg text-warm-600 leading-relaxed">
              From onboarding a new location to ongoing oversight — here&apos;s the playbook.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10 md:gap-8">
            {franchisePlaybook.map((phase, idx) => (
              <div key={phase.phase} className="border-t-2 border-warm-950 pt-6">
                <span className="text-[13px] font-medium text-warm-400 tabular-nums">{String(idx + 1).padStart(2, '0')}</span>
                <h3 className="mt-2 text-lg font-semibold text-warm-950 mb-4">{phase.phase}</h3>
                <ul className="space-y-2.5">
                  {phase.items.map((item) => (
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

      {/* Brand consistency */}
      <section className="border-b border-warm-100">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-2xl mb-14">
            <span className="eyebrow mb-4">Standardization</span>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-warm-950">
              What you standardize with Fork
            </h2>
          </div>

          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3">
            {[
              'Employee onboarding',
              'Training & certifications',
              'Opening/closing checklists',
              'Food safety procedures',
              'Customer service standards',
              'Waste and temperature logs',
              'Equipment care routines',
              'HR & compliance docs',
            ].map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-forest-500 mt-0.5 shrink-0" />
                <span className="text-[15px] text-warm-600">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaSection title="Scale your brand without losing control" lede="Every location on the same procedures, training and policies, with one plan for the whole company." />
    </main>
  )
}
