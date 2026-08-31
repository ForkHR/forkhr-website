import { Button } from '@/components/ui/button'
import {
  ArrowRight,
  ChevronRight,
  ClipboardList,
  Wrench,
  Trash2,
  Timer,
  BarChart3,
  CheckCircle2,
  PieChart,
} from 'lucide-react'
import Link from 'next/link'
import BlobBackground from '@/components/visual/BlobBackground'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Operational Efficiency — Fork | Cut Waste, Reduce Costs, Streamline Daily Ops',
  description:
    'Streamline daily operations with digital checklists, maintenance tracking, waste control, and real-time cost reporting. Fork helps you run a tighter, more profitable operation.',
  alternates: {
    canonical: '/solutions/operational-efficiency',
  },
  openGraph: {
    title: 'Operational Efficiency — Fork | Cut Waste, Reduce Costs, Streamline Daily Ops',
    description:
      'Streamline daily operations with digital checklists, maintenance tracking, waste control, and real-time cost reporting.',
    url: 'https://forkhr.com/solutions/operational-efficiency',
    images: ['/og-image.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Operational Efficiency — Fork | Cut Waste, Reduce Costs',
    description:
      'Streamline daily operations with digital checklists, maintenance tracking, waste control, and real-time cost reporting.',
    images: ['/og-image.png'],
  },
}

const stats = [
  { value: '25%', label: 'Reduction in food waste', detail: 'Teams that track waste daily cut losses within the first month' },
  { value: '3×', label: 'Faster maintenance resolution', detail: 'Logged issues get resolved faster when tracked digitally vs. verbal reports' },
  { value: '40 min', label: 'Saved per manager per day', detail: 'Digital checklists and forms replace manual walkthroughs and paper logs' },
]

const benefits = [
  {
    icon: <Trash2 className="w-5 h-5" />,
    title: 'Real-time waste tracking',
    desc: 'Employees log waste in seconds from their phone — item, quantity, reason, and cost calculated automatically. Spot trends before they become expensive habits.',
  },
  {
    icon: <Wrench className="w-5 h-5" />,
    title: 'Maintenance logs with cost tracking',
    desc: 'Log equipment issues with priority levels, photos, and vendor info. Track estimated vs. actual repair costs and maintain a full history of every piece of equipment.',
  },
  {
    icon: <ClipboardList className="w-5 h-5" />,
    title: 'Digital checklists for every shift',
    desc: 'Replace paper task lists with digital checklists that auto-assign to shifts. Managers see completion status in real time — no more end-of-day surprises.',
  },
  {
    icon: <BarChart3 className="w-5 h-5" />,
    title: 'Custom operational forms',
    desc: 'Build forms for any process — temperature logs, safety checks, inventory counts — using a drag-and-drop form builder. Submissions are recorded and reportable.',
  },
  {
    icon: <PieChart className="w-5 h-5" />,
    title: 'Waste & maintenance reports',
    desc: 'View waste by date, location, category, or reason. Compare maintenance costs across locations. Identify which sites need attention and act on data, not guesses.',
  },
  {
    icon: <Timer className="w-5 h-5" />,
    title: 'Scheduled vs. actual hours',
    desc: 'Compare planned labor against actual clock-in data to identify overstaffing, early clock-ins, and unauthorized overtime — all in one report.',
  },
]

const savingsBreakdown = [
  { category: 'Waste reduction', annual: '$3,600', detail: '25% less food waste at an avg. location' },
  { category: 'Maintenance efficiency', annual: '$2,100', detail: 'Faster repairs, fewer repeat issues' },
  { category: 'Labor optimization', annual: '$5,400', detail: 'Fewer overtime hours, better scheduling' },
  { category: 'Manager time savings', annual: '$4,800', detail: '40 min/day × 250 working days' },
]

export default function OperationalEfficiencyPage() {
  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-warm-100">
        <BlobBackground variant="circle" />
        <div className="relative max-w-6xl mx-auto px-6 pt-12 pb-16 md:pt-32 md:pb-24">
          <nav className="flex items-center gap-1.5 text-sm mb-8">
            <Link href="/products" className="text-warm-500 hover:text-warm-950 transition-colors">Solutions</Link>
            <ChevronRight className="w-3.5 h-3.5 text-warm-300" />
            <span className="font-medium text-warm-950">Operational Efficiency</span>
          </nav>
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight leading-[1.05] text-warm-950 max-w-3xl">
            Run a tighter operation, spend less doing it
          </h1>
          <p className="mt-6 text-lg md:text-xl text-warm-600 leading-relaxed max-w-2xl">
            Waste, untracked repairs, and paper checklists cost more than you think. Fork gives your team digital tools to track everything in real time — so you see where money is going and how to keep more of it.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href="https://app.forkhr.com/register" target="_blank">
              <Button size="lg" className="text-base px-6 h-11">
                Start free trial
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
            </Link>
            <Link href="/products#waste-control">
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
                How Fork improves daily operations
              </h2>
              <p className="mt-4 text-lg text-warm-600 leading-relaxed">
                Every wasted item, broken machine, and missed task is a cost. Fork puts the data in your hands so you can fix problems before they compound.
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

      {/* Savings breakdown */}
      <section className="bg-warm-50 border-b border-warm-100">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="grid md:grid-cols-[1fr_1.5fr] gap-12 md:gap-20 items-start">
            <div className="md:sticky md:top-28">
              <span className="eyebrow mb-4">ROI</span>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-warm-950">
                Estimated annual savings per location
              </h2>
              <p className="mt-4 text-lg text-warm-600 leading-relaxed">
                Based on average improvements reported by teams using digital operations tools in food service, retail, and hospitality.
              </p>
            </div>

            <div>
              <div className="divide-y divide-warm-200/70">
                {savingsBreakdown.map((row) => (
                  <div key={row.category} className="flex items-baseline justify-between gap-6 py-5 first:pt-0">
                    <div>
                      <p className="text-[15px] font-medium text-warm-950">{row.category}</p>
                      <p className="text-sm text-warm-500 mt-0.5">{row.detail}</p>
                    </div>
                    <div className="text-2xl font-semibold text-warm-950 tracking-tight shrink-0">{row.annual}<span className="text-sm font-normal text-warm-500">/year</span></div>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-warm-950/20 flex items-center justify-between flex-wrap gap-4">
                <div>
                  <div className="text-[13px] font-medium text-warm-400 uppercase tracking-wider">Total estimated savings</div>
                  <div className="text-3xl md:text-4xl font-semibold text-warm-950 tracking-tight">$15,900<span className="text-base font-normal text-warm-500">/year per location</span></div>
                </div>
                <Link href="https://app.forkhr.com/register" target="_blank">
                  <Button size="lg" className="text-base px-6 h-11">
                    Start saving
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="border-b border-warm-100">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-24">
          <div className="max-w-2xl mb-10">
            <span className="eyebrow mb-4">Use cases</span>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-warm-950">
              Built for teams that run physical operations
            </h2>
          </div>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3">
            {['Restaurants & cafés', 'Retail stores', 'Hotels & hospitality', 'Healthcare clinics', 'Fitness & gyms', 'Franchises'].map((industry) => (
              <li key={industry} className="flex items-start gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-forest-500 mt-0.5 shrink-0" />
                <span className="text-[15px] text-warm-600">{industry}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-warm-950">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-2xl">
            <span className="eyebrow text-lime-accent mb-4">Free 7-day trial</span>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-5">
              Stop losing money to invisible costs
            </h2>
            <p className="text-lg text-warm-400 mb-10 max-w-lg">
              Start your free 7-day trial and see exactly where your operation is leaking time and money.
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
