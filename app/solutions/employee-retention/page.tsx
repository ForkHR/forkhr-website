import { Button } from '@/components/ui/button'
import {
  ArrowRight,
  ChevronRight,
  Star,
  TrendingUp,
  BookOpen,
  MessagesSquare,
  Calendar,
  CheckCircle2,
  Smile,
} from 'lucide-react'
import Link from 'next/link'
import BlobBackground from '@/components/visual/BlobBackground'
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
    icon: <Star className="w-5 h-5" />,
    title: 'Employee recognition',
    desc: 'Let managers and peers send public recognition for great work. Celebrate milestones, work anniversaries, and performance — visible to the entire team.',
  },
  {
    icon: <MessagesSquare className="w-5 h-5" />,
    title: 'Pulse surveys',
    desc: 'Run quick anonymous surveys to measure morale, satisfaction, and sentiment. Spot issues early and track trends over time — before people start looking for other jobs.',
  },
  {
    icon: <BookOpen className="w-5 h-5" />,
    title: 'Training courses & library',
    desc: 'Create training courses with videos, quizzes, and step-by-step guides. Track completion rates and ensure every new hire gets a consistent learning experience.',
  },
  {
    icon: <Calendar className="w-5 h-5" />,
    title: 'Fair and flexible scheduling',
    desc: 'Give employees input on their availability. Let them swap shifts with approval. Fair scheduling is one of the top factors in retention for hourly workers.',
  },
  {
    icon: <TrendingUp className="w-5 h-5" />,
    title: 'Team updates & announcements',
    desc: 'Keep everyone informed with company-wide or location-specific updates. Employees who feel connected to their organization are 3× more likely to stay.',
  },
  {
    icon: <Smile className="w-5 h-5" />,
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
    <main className="pt-16">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-warm-100">
        <BlobBackground variant="circle" />
        <div className="relative max-w-6xl mx-auto px-6 pt-12 pb-16 md:pt-32 md:pb-24">
          <nav className="flex items-center gap-1.5 text-sm mb-8">
            <Link href="/products" className="text-warm-500 hover:text-warm-950 transition-colors">Solutions</Link>
            <ChevronRight className="w-3.5 h-3.5 text-warm-300" />
            <span className="font-medium text-warm-950">Employee Retention</span>
          </nav>
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight leading-[1.05] text-warm-950 max-w-3xl">
            Keep your best people — and stop paying to replace them
          </h1>
          <p className="mt-6 text-lg md:text-xl text-warm-600 leading-relaxed max-w-2xl">
            High turnover is expensive and disruptive. Fork gives you the tools to recognize, train, listen to, and fairly schedule your team — so they actually want to stay.
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link href="https://app.forkhr.com/register" target="_blank">
              <Button size="lg" className="text-base px-6 h-11">
                Start free trial
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
            </Link>
            <Link href="/products#team-engagement">
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
              <span className="eyebrow mb-4">Retention toolkit</span>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-warm-950">
                How Fork helps you keep your team
              </h2>
              <p className="mt-4 text-lg text-warm-600 leading-relaxed">
                Retention isn&apos;t about one big gesture — it&apos;s about consistently doing the small things right. Fork builds them into your daily workflow.
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

      {/* True cost of turnover */}
      <section className="bg-warm-50 border-b border-warm-100">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-2xl mb-14">
            <span className="eyebrow mb-4">The real numbers</span>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-warm-950">
              The true cost of turnover
            </h2>
            <p className="mt-4 text-lg text-warm-600 leading-relaxed">
              Every departure costs more than you think — recruiting fees, interviews, training, lost productivity, and the morale hit to everyone left behind.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-10 sm:gap-8">
            {turnoverCost.map((row) => (
              <div key={row.role} className="border-t border-warm-200 pt-6">
                <div className="text-sm font-medium text-warm-500 mb-2">{row.role}</div>
                <div className="text-3xl font-semibold text-warm-950 tracking-tight mb-2">{row.cost}</div>
                <div className="text-sm text-warm-500 leading-relaxed">{row.detail}</div>
              </div>
            ))}
          </div>

          <div className="mt-14 border-t border-warm-200 pt-8">
            <div className="text-sm text-warm-500 mb-1">
              For a 30-person team with 50% annual turnover (industry average)
            </div>
            <div className="text-2xl md:text-3xl font-semibold tracking-tight text-warm-950">
              $70,500+ <span className="text-base font-normal text-warm-500">lost per year to turnover</span>
            </div>
            <div className="text-sm text-warm-500 mt-2">
              Reducing turnover by even 10% saves over $7,000/year and hundreds of hours.
            </div>
          </div>
        </div>
      </section>

      {/* Retention drivers */}
      <section className="border-b border-warm-100">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="grid md:grid-cols-[1fr_1.5fr] gap-12 md:gap-20 items-start">
            <div className="md:sticky md:top-28">
              <span className="eyebrow mb-4">What works</span>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-warm-950">
                What actually drives retention
              </h2>
              <p className="mt-4 text-lg text-warm-600 leading-relaxed">
                Research-backed retention levers that Fork makes easy to implement — no HR department required.
              </p>
            </div>

            <div className="divide-y divide-warm-200/70">
              {retentionDrivers.map((d) => (
                <div key={d.driver} className="flex items-center justify-between gap-6 py-4 first:pt-0 last:pb-0">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <CheckCircle2 className="w-4 h-4 text-forest-500 shrink-0" />
                    <span className="text-[15px] text-warm-600">{d.driver}</span>
                  </div>
                  <span className="text-sm font-semibold text-forest-600 shrink-0 text-right">{d.impact}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-warm-950">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-2xl">
            <span className="eyebrow text-lime-accent mb-4">No credit card required</span>
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-5">
              Build a team that actually wants to stay
            </h2>
            <p className="text-lg text-warm-400 mb-10 max-w-lg">
              Start your free 7-day trial. See the difference in your first month.
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
