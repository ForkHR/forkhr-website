import { Button } from '@/components/ui/button'
import {
  ArrowRight,
  ChevronRight,
  BarChart3,
  Users,
  Clock,
  Shield,
  Eye,
  Globe2,
  CheckCircle2,
} from 'lucide-react'
import Link from 'next/link'
import Backdrop from '@/components/visual/Backdrop'
import CtaSection from '@/components/marketing/CtaSection'
import { CTA_PRIMARY, REGISTER_URL } from '@/lib/site'
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
    icon: <Globe2 className="w-5 h-5" />,
    title: 'One dashboard for all locations',
    desc: 'View and manage every location from a single login. Switch between sites instantly, compare performance, and push updates across your entire organization.',
  },
  {
    icon: <Clock className="w-5 h-5" />,
    title: 'Unified scheduling',
    desc: 'Build and publish schedules for all locations. See labor costs side-by-side, move employees between sites if needed, and prevent scheduling conflicts across units.',
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: 'Consistent compliance across sites',
    desc: 'Apply company-wide policies to every location automatically. Track which sites have completed required forms, training, and certifications — flag gaps before audits.',
  },
  {
    icon: <BarChart3 className="w-5 h-5" />,
    title: 'Location comparison reports',
    desc: 'Compare labor cost, overtime, waste, SOP completion and purchasing across every location. Spot underperforming sites and share best practices from top performers.',
  },
  {
    icon: <Users className="w-5 h-5" />,
    title: 'Role-based access controls',
    desc: 'Give GMs access to their location. Give district managers access to their region. Give owners access to everything. Fine-grained permissions by role and location.',
  },
  {
    icon: <Eye className="w-5 h-5" />,
    title: 'Real-time activity feed',
    desc: 'See what is happening across your network in real time — new hires, completed SOP runs, submitted forms, clock-ins, vendor orders and more.',
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
    <main className="pt-16">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-warm-100">
        <Backdrop />
        <div className="relative max-w-6xl mx-auto px-6 pt-12 pb-16 md:pt-32 md:pb-24">
          <nav className="flex items-center gap-1.5 text-sm mb-8">
            <Link href="/products" className="text-warm-500 hover:text-warm-950 transition-colors">Solutions</Link>
            <ChevronRight className="w-3.5 h-3.5 text-warm-300" />
            <span className="font-medium text-warm-950">Multi-Location</span>
          </nav>
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight leading-[1.05] text-warm-950 max-w-3xl">
            Manage every location without being at every location
          </h1>
          <p className="mt-6 text-lg md:text-xl text-warm-600 leading-relaxed max-w-2xl">
            Running 2 locations is twice the work. Running 10 shouldn&apos;t be 10×. Fork centralizes schedules, compliance, and performance data so you can oversee your entire operation from one screen.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href={REGISTER_URL} target="_blank">
              <Button size="lg" className="text-base px-6 h-11">
                {CTA_PRIMARY}
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
            </Link>
            <Link href="/products">
              <Button variant="outline" size="lg" className="text-base px-6 h-11">
                Learn more
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-warm-50 border-b border-warm-100">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-24">
          <div className="grid md:grid-cols-[1.1fr_1fr] gap-12 md:gap-20 items-center">
            <div>
              <div className="text-6xl md:text-7xl font-semibold text-warm-950 tracking-tight leading-none mb-4">{stats[0].value}</div>
              <p className="text-xl text-warm-600 leading-relaxed max-w-md">{stats[0].label}</p>
              <p className="text-sm text-warm-400 mt-2">{stats[0].detail}</p>
            </div>
            <div className="divide-y divide-warm-200/70">
              {stats.slice(1).map((stat) => (
                <div key={stat.label} className="flex items-baseline justify-between gap-6 py-5">
                  <div>
                    <p className="text-[15px] font-medium text-warm-950">{stat.label}</p>
                    <p className="text-sm text-warm-500 mt-0.5">{stat.detail}</p>
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
              <span className="eyebrow mb-4">What you get</span>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-warm-950">
                Built for multi-unit operators
              </h2>
              <p className="mt-4 text-lg text-warm-600 leading-relaxed">
                Whether you run 3 restaurants or 300 retail stores, Fork scales with your business and keeps every location connected.
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

      {/* Before & After */}
      <section className="bg-warm-50 border-b border-warm-100">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-2xl mb-14">
            <span className="eyebrow mb-4">Before & After</span>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-warm-950">
              Before Fork vs. after Fork
            </h2>
            <p className="mt-4 text-lg text-warm-600 leading-relaxed">
              Multi-location management doesn&apos;t have to mean more chaos. Here&apos;s how operators describe the difference.
            </p>
          </div>

          <div className="divide-y divide-warm-200/70">
            {challenges.map((c) => (
              <div key={c.before} className="grid grid-cols-1 sm:grid-cols-2 gap-x-12 gap-y-4 py-6 first:pt-0 last:pb-0">
                <div>
                  <div className="text-[11px] font-medium uppercase tracking-wider text-warm-400 mb-1.5">Before</div>
                  <div className="text-[15px] text-warm-600 leading-relaxed">{c.before}</div>
                </div>
                <div>
                  <div className="text-[11px] font-medium uppercase tracking-wider text-forest-600 mb-1.5">After</div>
                  <div className="text-[15px] text-warm-600 leading-relaxed">{c.after}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="border-b border-warm-100">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-24">
          <div className="max-w-2xl mb-10">
            <span className="eyebrow mb-4">Industries</span>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-warm-950">
              Trusted by multi-unit teams in
            </h2>
          </div>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3">
            {['Restaurant groups', 'Retail chains', 'Hotel networks', 'Healthcare systems', 'Fitness chains', 'Franchise networks'].map((ind) => (
              <li key={ind} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-forest-500 mt-0.5 shrink-0" />
                <span className="text-[15px] text-warm-600">{ind}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaSection title="Every location, one login" lede="One company-wide plan, one schedule tool, one set of SOPs. Compare sites side by side from your phone." />
    </main>
  )
}
