import { Button } from '@/components/ui/button'
import BlobBackground from '@/components/visual/BlobBackground'
import {
  ArrowRight,
  ChevronRight,
  Heart,
  Star,
  TrendingUp,
  BookOpen,
  MessagesSquare,
  Calendar,
  CheckCircle2,
  Smile,
  Sparkles,
} from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Employee Retention — Fork | Reduce Turnover, Keep Your Best People',
  description:
    'Reduce employee turnover with recognition programs, pulse surveys, training tools, and fair scheduling. Fork helps you build teams that stay.',
  alternates: {
    canonical: '/solutions/employee-retention',
  },
  openGraph: {
    title: 'Employee Retention — Fork | Reduce Turnover, Keep Your Best People',
    description:
      'Reduce employee turnover with recognition programs, pulse surveys, training tools, and fair scheduling.',
    url: 'https://forkhr.com/solutions/employee-retention',
    images: ['/og-image.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Employee Retention — Fork | Reduce Turnover',
    description:
      'Reduce employee turnover with recognition programs, pulse surveys, training tools, and fair scheduling.',
    images: ['/og-image.png'],
  },
}

const stats = [
  { value: '31%', label: 'Lower turnover rate', detail: 'Companies that invest in engagement see significantly fewer resignations' },
  { value: '$4,700', label: 'Cost of replacing one hourly worker', detail: 'Recruiting, training, and lost productivity add up fast' },
  { value: '2.5×', label: 'Faster new-hire onboarding', detail: 'Digital training and checklists cut time to productivity in half' },
]

const benefits = [
  {
    icon: <Star className="w-5 h-5 text-primary" />,
    title: 'Employee recognition',
    desc: 'Let managers and peers send public recognition for great work. Celebrate milestones, work anniversaries, and performance — visible to the entire team.',
  },
  {
    icon: <MessagesSquare className="w-5 h-5 text-primary" />,
    title: 'Pulse surveys',
    desc: 'Run quick anonymous surveys to measure morale, satisfaction, and sentiment. Spot issues early and track trends over time — before people start looking for other jobs.',
  },
  {
    icon: <BookOpen className="w-5 h-5 text-primary" />,
    title: 'Training courses & library',
    desc: 'Create training courses with videos, quizzes, and step-by-step guides. Track completion rates and ensure every new hire gets a consistent learning experience.',
  },
  {
    icon: <Calendar className="w-5 h-5 text-primary" />,
    title: 'Fair and flexible scheduling',
    desc: 'Give employees input on their availability. Let them swap shifts with approval. Fair scheduling is one of the top factors in retention for hourly workers.',
  },
  {
    icon: <TrendingUp className="w-5 h-5 text-primary" />,
    title: 'Team updates & announcements',
    desc: 'Keep everyone informed with company-wide or location-specific updates. Employees who feel connected to their organization are 3× more likely to stay.',
  },
  {
    icon: <Smile className="w-5 h-5 text-primary" />,
    title: 'Structured onboarding',
    desc: 'Guide new hires through their first days with automated onboarding checklists, required documents, and training material — so they feel supported from day one.',
  },
]

const turnoverCost = [
  { role: 'Hourly team member', cost: '$4,700', detail: '2-3 weeks to hire + 4-6 weeks to train' },
  { role: 'Shift supervisor', cost: '$7,500', detail: 'Higher recruiting costs + institutional knowledge loss' },
  { role: 'General manager', cost: '$15,000+', detail: 'Months to fill, significant revenue impact during gap' },
]

const retentionDrivers = [
  { driver: 'Fair scheduling', impact: '25% fewer voluntary departures' },
  { driver: 'Regular recognition', impact: '21% higher productivity' },
  { driver: 'Development opportunities', impact: '34% higher retention in first year' },
  { driver: 'Manager feedback loops', impact: '14% higher engagement scores' },
  { driver: 'Structured onboarding', impact: '50% higher new-hire retention' },
  { driver: 'Schedule flexibility', impact: '37% higher job satisfaction' },
]

export default function EmployeeRetentionPage() {
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
              <Heart className="w-3.5 h-3.5" />
              Employee Retention
            </span>
          </nav>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-slate-900 max-w-3xl">
            Keep your best people — and stop paying to replace them
          </h1>
          <p className="mt-6 text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl">
            High turnover is expensive and disruptive. Fork gives you the tools to recognize, train, listen to, and fairly schedule your team — so they actually want to stay.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="https://app.forkhr.com/register" target="_blank">
              <Button size="lg" className="text-base px-8 h-12">
                Start free trial
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="/products#team-engagement">
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
              How Fork helps you keep your team
            </h2>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              Retention isn&apos;t about one big gesture — it&apos;s about consistently doing the small things right. Fork builds them into your daily workflow.
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

      {/* True cost of turnover — dark section */}
      <section className="bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/10 rounded-full blur-[120px]" />
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-28 relative">
          <div className="max-w-2xl mb-10">
            <p className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/10 px-3.5 py-1.5 text-xs font-medium text-white/70 mb-4">The real numbers</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
              The true cost of turnover
            </h2>
            <p className="mt-4 text-lg text-slate-400 leading-relaxed">
              Every departure costs more than you think — recruiting fees, interviews, training, lost productivity, and the morale hit to everyone left behind.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mb-8">
            {turnoverCost.map((row) => (
              <div key={row.role} className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-5">
                <div className="text-sm font-semibold text-slate-400 mb-1">{row.role}</div>
                <div className="text-3xl font-bold text-red-400 mb-2">{row.cost}</div>
                <div className="text-sm text-slate-500">{row.detail}</div>
              </div>
            ))}
          </div>

          <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 max-w-3xl">
            <div className="text-sm text-slate-400 mb-1">
              For a 30-person team with 50% annual turnover (industry average)
            </div>
            <div className="text-2xl md:text-3xl font-bold text-primary">
              $70,500+ <span className="text-base font-normal text-slate-500">lost per year to turnover</span>
            </div>
            <div className="text-sm text-slate-500 mt-2">
              Reducing turnover by even 10% saves over $7,000/year and hundreds of hours.
            </div>
          </div>
        </div>
      </section>

      {/* Retention drivers */}
      <section>
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-2xl mb-10">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              What actually drives retention
            </h2>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              Research-backed retention levers that Fork makes easy to implement — no HR department required.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-3 max-w-3xl">
            {retentionDrivers.map((d) => (
              <div key={d.driver} className="flex items-center justify-between bg-white rounded-xl px-5 py-4 border border-slate-200">
                <div className="flex items-center gap-3">
                  <CheckCircle2 className="w-4 h-4 text-primary shrink-0" />
                  <span className="text-sm font-medium text-slate-700">{d.driver}</span>
                </div>
                <span className="text-sm font-semibold text-green-600 shrink-0">{d.impact}</span>
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
                <Sparkles className="w-3 h-3" /> No credit card required
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4 relative">
                Build a team that actually wants to stay
              </h2>
              <p className="text-lg text-slate-400 mb-10 max-w-md mx-auto relative">
                Start your free 7-day trial. See the difference in your first month.
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
