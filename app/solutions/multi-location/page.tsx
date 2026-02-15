import { Button } from '@/components/ui/button'
import {
  ArrowRight,
  ChevronRight,
  MapPin,
  Store,
  BarChart3,
  Users,
  Clock,
  Shield,
  Eye,
  Globe2,
  CheckCircle2,
  Layers,
} from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Multi-Location Management — Fork | Run Every Location from One Dashboard',
  description:
    'Manage schedules, compliance, and performance across all your locations from one place. Fork gives multi-unit operators full visibility without the travel.',
  alternates: {
    canonical: '/solutions/multi-location',
  },
  openGraph: {
    title: 'Multi-Location Management — Fork | Run Every Location from One Dashboard',
    description:
      'Manage schedules, compliance, and performance across all your locations from one place.',
    url: 'https://forkhr.com/solutions/multi-location',
    images: ['/og-image.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Multi-Location Management — Fork',
    description:
      'Manage schedules, compliance, and performance across all your locations from one place.',
    images: ['/og-image.png'],
  },
}

const stats = [
  { value: '60%', label: 'Less time managing multiple sites', detail: 'Centralized dashboards eliminate redundant phone calls and emails' },
  { value: '100%', label: 'Cross-location visibility', detail: 'See every schedule, checklist, and report from any location in real time' },
  { value: '5 hrs', label: 'Saved per district manager per week', detail: 'Less travel, fewer surprise issues, faster decision-making' },
]

const benefits = [
  {
    icon: <Globe2 className="w-5 h-5 text-primary" />,
    title: 'One dashboard for all locations',
    desc: 'View and manage every location from a single login. Switch between sites instantly, compare performance, and push updates across your entire organization.',
  },
  {
    icon: <Clock className="w-5 h-5 text-primary" />,
    title: 'Unified scheduling',
    desc: 'Build and publish schedules for all locations. See labor costs side-by-side, move employees between sites if needed, and prevent scheduling conflicts across units.',
  },
  {
    icon: <Shield className="w-5 h-5 text-primary" />,
    title: 'Consistent compliance across sites',
    desc: 'Apply company-wide policies to every location automatically. Track which sites have completed required forms, training, and certifications — flag gaps before audits.',
  },
  {
    icon: <BarChart3 className="w-5 h-5 text-primary" />,
    title: 'Location comparison reports',
    desc: 'Compare labor costs, overtime, waste, checklist completion, and more across every location. Spot underperforming sites and share best practices from top performers.',
  },
  {
    icon: <Users className="w-5 h-5 text-primary" />,
    title: 'Role-based access controls',
    desc: 'Give GMs access to their location. Give district managers access to their region. Give owners access to everything. Fine-grained permissions by role and location.',
  },
  {
    icon: <Eye className="w-5 h-5 text-primary" />,
    title: 'Real-time activity feed',
    desc: 'See what is happening across your network in real time — new hires, completed checklists, submitted forms, clock-ins, maintenance requests, and more.',
  },
]

const challenges = [
  { before: 'Driving between locations to check on things', after: 'View any location\'s data from your phone' },
  { before: 'Calling each GM for weekly updates', after: 'Dashboard shows all KPIs in one place' },
  { before: 'Inconsistent processes at different sites', after: 'Standardized checklists and forms everywhere' },
  { before: 'Different scheduling systems per location', after: 'One scheduling tool for all locations' },
  { before: 'No idea which location is underperforming', after: 'Compare locations by labor cost, compliance, and more' },
]

export default function MultiLocationPage() {
  return (
    <main>
      {/* Hero */}
      <section>
        <div className="max-w-5xl mx-auto px-6 pt-4 pb-16 md:pt-28 md:pb-20">
          <nav className="inline-flex items-center gap-1.5 text-sm mb-5">
            <Link href="/products" className="text-slate-400 hover:text-primary transition-colors">Solutions</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
            <span className="inline-flex items-center gap-1.5 font-semibold text-primary bg-primary/6 rounded-full px-3 py-0.5">
              <MapPin className="w-3.5 h-3.5" />
              Multi-Location
            </span>
          </nav>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-slate-900 max-w-3xl">
            Manage every location without being at every location
          </h1>
          <p className="mt-6 text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl">
            Running 2 locations is twice the work. Running 10 shouldn&apos;t be 10×. Fork centralizes schedules, compliance, and performance data so you can oversee your entire operation from one screen.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="https://app.forkhr.com/register" target="_blank">
              <Button size="lg" className="text-base px-8 h-12">
                Start free trial
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="/products">
              <Button variant="outline" size="lg" className="text-base px-8 h-12">
                See all products
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
              Built for multi-unit operators
            </h2>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              Whether you run 3 restaurants or 300 retail stores, Fork scales with your business and keeps every location connected.
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

      {/* Before & After */}
      <section className="bg-slate-50/60">
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-2xl mb-10">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              Before Fork vs. after Fork
            </h2>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              Multi-location management doesn&apos;t have to mean more chaos. Here&apos;s how operators describe the difference.
            </p>
          </div>

          <div className="space-y-3 max-w-3xl">
            {challenges.map((c) => (
              <div key={c.before} className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="bg-red-50 rounded-xl px-5 py-4 border border-red-100">
                  <div className="text-xs font-semibold uppercase text-red-400 tracking-wider mb-1">Before</div>
                  <div className="text-sm text-slate-700">{c.before}</div>
                </div>
                <div className="bg-green-50 rounded-xl px-5 py-4 border border-green-100">
                  <div className="text-xs font-semibold uppercase text-green-500 tracking-wider mb-1">After</div>
                  <div className="text-sm text-slate-700">{c.after}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section>
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 mb-8 text-center">
            Trusted by multi-unit teams in
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {['Restaurant groups', 'Retail chains', 'Hotel networks', 'Healthcare systems', 'Fitness chains', 'Franchise networks'].map((ind) => (
              <div key={ind} className="flex items-center gap-2 text-sm text-slate-700 font-medium bg-white rounded-lg px-4 py-3 border border-slate-200">
                <Store className="w-4 h-4 text-primary shrink-0" />
                {ind}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900">
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-28 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            See all your locations in one place
          </h2>
          <p className="text-lg text-slate-400 mb-10 max-w-xl mx-auto">
            Start your free 7-day trial and connect all your locations in minutes.
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
