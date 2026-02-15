import { Button } from '@/components/ui/button'
import {
  ArrowRight,
  ChevronRight,
  Heart,
  Star,
  TrendingUp,
  BookOpen,
  MessagesSquare,
  Calendar,
  Award,
  BarChart3,
  DollarSign,
  Users,
  CheckCircle2,
  Smile,
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
      <section>
        <div className="max-w-5xl mx-auto px-6 pt-4 pb-16 md:pt-28 md:pb-20">
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
                See engagement products
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
              How Fork helps you keep your team
            </h2>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              Retention isn&apos;t about one big gesture — it&apos;s about consistently doing the small things right. Fork builds them into your daily workflow.
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

      {/* True cost of turnover */}
      <section className="bg-slate-50/60">
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-2xl mb-10">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              The true cost of turnover
            </h2>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              Every departure costs more than you think — recruiting fees, interviews, training, lost productivity, and the morale hit to everyone left behind.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-4 max-w-3xl">
            {turnoverCost.map((row) => (
              <div key={row.role} className="bg-white rounded-xl border border-slate-200 p-5">
                <div className="text-sm font-semibold text-slate-500 mb-1">{row.role}</div>
                <div className="text-3xl font-bold text-red-500 mb-2">{row.cost}</div>
                <div className="text-sm text-slate-500">{row.detail}</div>
              </div>
            ))}
          </div>

          <div className="mt-8 bg-primary/5 rounded-xl p-6 max-w-3xl">
            <div className="text-sm text-slate-500 mb-1">
              For a 30-person team with 50% annual turnover (industry average)
            </div>
            <div className="text-2xl md:text-3xl font-bold text-primary">
              $70,500+ <span className="text-base font-normal text-slate-400">lost per year to turnover</span>
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

      {/* CTA */}
      <section className="bg-slate-900">
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-28 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            Build a team that actually wants to stay
          </h2>
          <p className="text-lg text-slate-400 mb-10 max-w-xl mx-auto">
            Start your free 7-day trial. No credit card required.
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
