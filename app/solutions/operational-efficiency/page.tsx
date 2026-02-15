import { Button } from '@/components/ui/button'
import {
  ArrowRight,
  ChevronRight,
  Zap,
  ClipboardList,
  Wrench,
  Trash2,
  TrendingDown,
  Timer,
  BarChart3,
  DollarSign,
  CheckCircle2,
  PieChart,
} from 'lucide-react'
import Link from 'next/link'
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
    icon: <Trash2 className="w-5 h-5 text-primary" />,
    title: 'Real-time waste tracking',
    desc: 'Employees log waste in seconds from their phone — item, quantity, reason, and cost calculated automatically. Spot trends before they become expensive habits.',
  },
  {
    icon: <Wrench className="w-5 h-5 text-primary" />,
    title: 'Maintenance logs with cost tracking',
    desc: 'Log equipment issues with priority levels, photos, and vendor info. Track estimated vs. actual repair costs and maintain a full history of every piece of equipment.',
  },
  {
    icon: <ClipboardList className="w-5 h-5 text-primary" />,
    title: 'Digital checklists for every shift',
    desc: 'Replace paper task lists with digital checklists that auto-assign to shifts. Managers see completion status in real time — no more end-of-day surprises.',
  },
  {
    icon: <BarChart3 className="w-5 h-5 text-primary" />,
    title: 'Custom operational forms',
    desc: 'Build forms for any process — temperature logs, safety checks, inventory counts — using a drag-and-drop form builder. Submissions are recorded and reportable.',
  },
  {
    icon: <PieChart className="w-5 h-5 text-primary" />,
    title: 'Waste & maintenance reports',
    desc: 'View waste by date, location, category, or reason. Compare maintenance costs across locations. Identify which sites need attention and act on data, not guesses.',
  },
  {
    icon: <Timer className="w-5 h-5 text-primary" />,
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
    <main>
      {/* Hero */}
      <section>
        <div className="max-w-5xl mx-auto px-6 pt-4 pb-16 md:pt-28 md:pb-20">
          <nav className="inline-flex items-center gap-1.5 text-sm mb-5">
            <Link href="/products" className="text-slate-400 hover:text-primary transition-colors">Solutions</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
            <span className="inline-flex items-center gap-1.5 font-semibold text-primary bg-primary/6 rounded-full px-3 py-0.5">
              <Zap className="w-3.5 h-3.5" />
              Operational Efficiency
            </span>
          </nav>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-slate-900 max-w-3xl">
            Run a tighter operation, spend less doing it
          </h1>
          <p className="mt-6 text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl">
            Waste, untracked repairs, and paper checklists cost more than you think. Fork gives your team digital tools to track everything in real time — so you see where money is going and how to keep more of it.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="https://app.forkhr.com/register" target="_blank">
              <Button size="lg" className="text-base px-8 h-12">
                Start free trial
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="/products#waste-control">
              <Button variant="outline" size="lg" className="text-base px-8 h-12">
                See operations products
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
              How Fork improves daily operations
            </h2>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              Every wasted item, broken machine, and missed task is a cost. Fork puts the data in your hands so you can fix problems before they compound.
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

      {/* Savings breakdown */}
      <section className="bg-slate-50/60">
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-2xl mb-10">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              Estimated annual savings per location
            </h2>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              Based on average improvements reported by teams using digital operations tools in food service, retail, and hospitality.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 max-w-3xl">
            {savingsBreakdown.map((row) => (
              <div key={row.category} className="bg-white rounded-xl border border-slate-200 p-5 flex items-start gap-4">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-green-50 shrink-0">
                  <DollarSign className="w-5 h-5 text-green-600" />
                </div>
                <div>
                  <div className="text-base font-semibold text-slate-900">{row.category}</div>
                  <div className="text-2xl font-bold text-green-600 mt-0.5">{row.annual}<span className="text-sm font-normal text-slate-400">/year</span></div>
                  <div className="text-sm text-slate-500 mt-1">{row.detail}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-primary/5 rounded-xl p-6 max-w-3xl flex items-center justify-between flex-wrap gap-4">
            <div>
              <div className="text-sm font-semibold text-slate-500 uppercase tracking-wider">Total estimated savings</div>
              <div className="text-3xl md:text-4xl font-bold text-primary">$15,900<span className="text-base font-normal text-slate-400">/year per location</span></div>
            </div>
            <Link href="https://app.forkhr.com/register" target="_blank">
              <Button size="lg" className="text-base px-6 h-11">
                Start saving
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section>
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 mb-8 text-center">
            Built for teams that run physical operations
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {['Restaurants & cafés', 'Retail stores', 'Hotels & hospitality', 'Healthcare clinics', 'Fitness & gyms', 'Franchises'].map((industry) => (
              <div key={industry} className="flex items-center gap-2 text-sm text-slate-700 font-medium bg-white rounded-lg px-4 py-3 border border-slate-200">
                <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                {industry}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900">
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-28 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            Stop losing money to invisible costs
          </h2>
          <p className="text-lg text-slate-400 mb-10 max-w-xl mx-auto">
            Start your free 7-day trial and see exactly where your operation is leaking time and money.
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
