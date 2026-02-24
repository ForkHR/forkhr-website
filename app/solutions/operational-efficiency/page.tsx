import { Button } from '@/components/ui/button'
import BlobBackground from '@/components/visual/BlobBackground'
import {
  ArrowRight,
  ChevronRight,
  Zap,
  ClipboardList,
  Wrench,
  Trash2,
  Timer,
  BarChart3,
  DollarSign,
  CheckCircle2,
  PieChart,
  Sparkles,
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
      <section className="relative pt-20"
        style={{
          backgroundImage: "radial-gradient(circle,#dee3e8 1px,transparent 0)",
          backgroundSize: "20px 20px",
        }}
      >
        <BlobBackground variant="circle" />
        <div className="max-w-5xl mx-auto px-6 pt-12 pb-16 md:pt-28 md:pb-20">
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
                Learn more
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats — asymmetric hero stat + row cards */}
      <section className="bg-slate-50/60">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <div className="grid md:grid-cols-[1.2fr_1fr] gap-10 md:gap-16 items-center">
            <div>
              <div className="text-6xl md:text-7xl font-bold text-primary tracking-tight leading-none mb-3">{stats[0].value}</div>
              <div className="text-lg font-semibold text-slate-900 mb-1">{stats[0].label}</div>
              <div className="text-sm text-slate-500">{stats[0].detail}</div>
            </div>
            <div className="space-y-3">
              {stats.slice(1).map((stat) => (
                <div key={stat.label} className="flex items-center gap-5 rounded-2xl border border-slate-200/80 bg-white p-5">
                  <div className="text-3xl font-bold text-primary shrink-0">{stat.value}</div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-semibold text-slate-900">{stat.label}</div>
                    <div className="text-xs text-slate-500">{stat.detail}</div>
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
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              How Fork improves daily operations
            </h2>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              Every wasted item, broken machine, and missed task is a cost. Fork puts the data in your hands so you can fix problems before they compound.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-5 mb-5">
            {benefits.slice(0, 2).map((b) => (
              <div key={b.title} className="group rounded-2xl border border-slate-200/80 bg-white p-8 md:p-10 hover:border-primary/20 hover:shadow-sm transition-all">
                <div className="flex items-center justify-center w-12 h-12 rounded-2xl bg-primary/8 mb-5">{b.icon}</div>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{b.title}</h3>
                <p className="text-base text-slate-600 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {benefits.slice(2).map((b) => (
              <div key={b.title} className="group rounded-2xl border border-slate-200/80 bg-white p-5 hover:border-primary/20 hover:shadow-sm transition-all">
                <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary/8 mb-3">{b.icon}</div>
                <h3 className="text-sm font-semibold text-slate-900 mb-1">{b.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Savings breakdown — dark section with glass cards */}
      <section className="bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-28 relative">
          <div className="max-w-2xl mb-10">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/10 px-3.5 py-1.5 text-xs font-medium text-white/70 mb-4">ROI</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
              Estimated annual savings per location
            </h2>
            <p className="mt-4 text-lg text-slate-400 leading-relaxed">
              Based on average improvements reported by teams using digital operations tools in food service, retail, and hospitality.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {savingsBreakdown.map((row) => (
              <div key={row.category} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-5 flex items-start gap-4 hover:border-primary/30 transition-all">
                <div className="flex items-center justify-center w-10 h-10 rounded-lg bg-green-500/15 shrink-0">
                  <DollarSign className="w-5 h-5 text-green-400" />
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">{row.category}</div>
                  <div className="text-2xl font-bold text-green-400 mt-0.5">{row.annual}<span className="text-sm font-normal text-slate-500">/year</span></div>
                  <div className="text-sm text-slate-500 mt-1">{row.detail}</div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 rounded-2xl border border-primary/20 bg-primary/5 p-6 flex items-center justify-between flex-wrap gap-4">
            <div>
              <div className="text-sm font-semibold text-slate-400 uppercase tracking-wider">Total estimated savings</div>
              <div className="text-3xl md:text-4xl font-bold text-primary">$15,900<span className="text-base font-normal text-slate-500">/year per location</span></div>
            </div>
            <Link href="https://app.forkhr.com/register" target="_blank">
              <Button size="lg" className="text-base px-6 h-11 bg-white text-slate-900 hover:bg-slate-100">
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

      {/* CTA — gradient-border card */}
      <section className="bg-slate-900">
        <div className="max-w-3xl mx-auto px-6 py-20 md:py-28">
          <div className="relative rounded-3xl p-px bg-linear-to-br from-primary/60 via-white/10 to-primary/30">
            <div className="rounded-[calc(1.5rem-1px)] bg-slate-900 px-8 py-14 md:px-14 md:py-20 text-center relative overflow-hidden">
              <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[400px] h-[200px] bg-primary/20 rounded-full blur-[100px] pointer-events-none" />
              <p className="inline-flex items-center gap-1.5 rounded-full bg-white/10 border border-primary/20 px-3 py-1 text-xs font-medium text-white mb-6 relative">
                <Sparkles className="w-3 h-3" />Free 7-day trial
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4 relative">
                Stop losing money to invisible costs
              </h2>
              <p className="text-lg text-slate-400 mb-10 max-w-md mx-auto relative">
                Start your free 7-day trial and see exactly where your operation is leaking time and money.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center relative">
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
          </div>
        </div>
      </section>
    </main>
  )
}
