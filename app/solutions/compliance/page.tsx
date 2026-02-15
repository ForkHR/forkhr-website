import { Button } from '@/components/ui/button'
import {
  ArrowRight,
  ChevronRight,
  Scale,
  FileSignature,
  FolderOpen,
  AlertTriangle,
  Shield,
  Clock,
  FileText,
  CheckCircle2,
  Users,
} from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Compliance & Legal — Fork | Stay Audit-Ready with Digital Workforce Records',
  description:
    'Eliminate compliance gaps with digital onboarding, e-signatures, incident reports, document expiry alerts, and a complete audit trail. Fork keeps your team compliant without the paperwork.',
  alternates: {
    canonical: '/solutions/compliance',
  },
  openGraph: {
    title: 'Compliance & Legal — Fork | Stay Audit-Ready with Digital Workforce Records',
    description:
      'Eliminate compliance gaps with digital onboarding, e-signatures, incident reports, document expiry alerts, and a complete audit trail.',
    url: 'https://forkhr.com/solutions/compliance',
    images: ['/og-image.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Compliance & Legal — Fork | Stay Audit-Ready',
    description:
      'Eliminate compliance gaps with digital onboarding, e-signatures, incident reports, document expiry alerts, and a complete audit trail.',
    images: ['/og-image.png'],
  },
}

const stats = [
  { value: '100%', label: 'Paperless compliance records', detail: 'Every document digitized, signed, and stored in one place' },
  { value: '80%', label: 'Less time chasing paperwork', detail: 'Automated reminders replace manual follow-ups' },
  { value: '0', label: 'Missing documents at audit time', detail: 'Expiry alerts ensure nothing lapses unnoticed' },
]

const benefits = [
  {
    icon: <FileSignature className="w-5 h-5 text-primary" />,
    title: 'Digital onboarding with e-signatures',
    desc: 'New hires complete W-4, I-9, and custom employment forms online before day one. Legally-binding e-signatures are captured and stored automatically.',
  },
  {
    icon: <FolderOpen className="w-5 h-5 text-primary" />,
    title: 'Document management with expiry tracking',
    desc: 'Upload, request, and organize certifications, licenses, and employee documents. Set expiration dates and get reminders before they lapse.',
  },
  {
    icon: <AlertTriangle className="w-5 h-5 text-primary" />,
    title: 'Structured incident reporting',
    desc: 'Document workplace incidents with structured forms, attach evidence, and maintain a tamper-proof timeline for every event.',
  },
  {
    icon: <Shield className="w-5 h-5 text-primary" />,
    title: 'Complete audit trail',
    desc: 'Every action — document upload, signature, status change — is logged with timestamps and user attribution. Always ready for inspection.',
  },
  {
    icon: <FileText className="w-5 h-5 text-primary" />,
    title: 'Termination & offboarding records',
    desc: 'Maintain final notices, exit checklists, and termination documentation in one secure, organized location.',
  },
  {
    icon: <Clock className="w-5 h-5 text-primary" />,
    title: 'Automated compliance reminders',
    desc: 'Fork notifies managers when documents expire, forms are incomplete, or onboarding steps are overdue — so nothing slips through.',
  },
]

const complianceAreas = [
  { icon: <CheckCircle2 className="w-4 h-4" />, label: 'I-9 verification' },
  { icon: <CheckCircle2 className="w-4 h-4" />, label: 'W-4 collection' },
  { icon: <CheckCircle2 className="w-4 h-4" />, label: 'Food handler permits' },
  { icon: <CheckCircle2 className="w-4 h-4" />, label: 'OSHA incident logs' },
  { icon: <CheckCircle2 className="w-4 h-4" />, label: 'Alcohol serving certs' },
  { icon: <CheckCircle2 className="w-4 h-4" />, label: 'Non-disclosure agreements' },
  { icon: <CheckCircle2 className="w-4 h-4" />, label: 'Employee handbooks' },
  { icon: <CheckCircle2 className="w-4 h-4" />, label: 'Safety training records' },
]

export default function CompliancePage() {
  return (
    <main>
      {/* Hero */}
      <section>
        <div className="max-w-5xl mx-auto px-6 pt-4 pb-16 md:pt-28 md:pb-20">
          <nav className="inline-flex items-center gap-1.5 text-sm mb-5">
            <Link href="/products" className="text-slate-400 hover:text-primary transition-colors">Solutions</Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-300" />
            <span className="inline-flex items-center gap-1.5 font-semibold text-primary bg-primary/6 rounded-full px-3 py-0.5">
              <Scale className="w-3.5 h-3.5" />
              Compliance & Legal
            </span>
          </nav>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-slate-900 max-w-3xl">
            Stay compliant without the filing cabinets
          </h1>
          <p className="mt-6 text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl">
            Audits, inspections, and legal requirements shouldn&apos;t keep you up at night. Fork digitizes every compliance workflow — from onboarding paperwork to incident reports — so you&apos;re always audit-ready.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="https://app.forkhr.com/register" target="_blank">
              <Button size="lg" className="text-base px-8 h-12">
                Start free trial
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="/products#hr-onboarding">
              <Button variant="outline" size="lg" className="text-base px-8 h-12">
                See HR products
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

      {/* What you get */}
      <section>
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-2xl mb-14">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              What Fork does for compliance
            </h2>
            <p className="mt-4 text-lg text-slate-600 leading-relaxed">
              Replace binders, spreadsheets, and paper forms with a system that tracks everything automatically and alerts you before deadlines.
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

      {/* Compliance areas */}
      <section className="bg-slate-50/60">
        <div className="max-w-5xl mx-auto px-6 py-16 md:py-20">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 mb-8 text-center">
            Compliance areas Fork covers
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {complianceAreas.map((area) => (
              <div key={area.label} className="flex items-center gap-2 text-sm text-slate-700 font-medium bg-white rounded-lg px-4 py-3 border border-slate-200">
                <span className="text-primary">{area.icon}</span>
                {area.label}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI callout */}
      <section>
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
          <div className="bg-primary/5 rounded-2xl p-8 md:p-12 flex flex-col md:flex-row items-start gap-8">
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-slate-900 mb-4">
                The cost of non-compliance
              </h2>
              <p className="text-slate-600 leading-relaxed mb-4">
                A single missing I-9 form can result in fines from <strong>$252 to $2,507 per employee</strong>. Repeat violations escalate to <strong>$6,000+</strong>. OSHA penalties for unrecorded workplace incidents start at <strong>$16,131</strong>.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Fork eliminates these risks by ensuring every document is collected, signed, and tracked — with automated reminders before anything expires.
              </p>
            </div>
            <div className="shrink-0 flex flex-col items-center justify-center bg-white rounded-xl p-6 border border-slate-200 min-w-[180px]">
              <Users className="w-8 h-8 text-primary mb-2" />
              <div className="text-sm text-slate-500">Average savings per location</div>
              <div className="text-3xl font-bold text-primary mt-1">$4,200</div>
              <div className="text-xs text-slate-400">per year in avoided penalties</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900">
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-28 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            Make compliance automatic
          </h2>
          <p className="text-lg text-slate-400 mb-10 max-w-xl mx-auto">
            Start your free 7-day trial and see how Fork keeps your workforce records organized, signed, and always audit-ready.
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
