import { Button } from '@/components/ui/button'
import {
  ArrowRight,
  ChevronRight,
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
import Backdrop from '@/components/visual/Backdrop'
import CtaSection from '@/components/marketing/CtaSection'
import { CTA_PRIMARY, REGISTER_URL } from '@/lib/site'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'HR Compliance Software for Hourly Teams: Signed Forms, Acknowledged Policies, Records | Fork',
  description:
    'Eliminate compliance gaps with digital onboarding, e-signatures, acknowledged policies, contracts, violation records, document expiry alerts and a complete audit trail. Fork keeps your team compliant without the paperwork.',
  alternates: {
    canonical: '/solutions/compliance',
  },
  openGraph: {
    title: 'HR Compliance Software for Hourly Teams: Signed Forms, Acknowledged Policies, Records | Fork',
    description:
      'Eliminate compliance gaps with digital onboarding, e-signatures, acknowledged policies, contracts, document expiry alerts and a complete audit trail.',
    url: 'https://forkhr.com/solutions/compliance',
    images: ['/og-image.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HR Compliance Software for Hourly Teams | Fork',
    description:
      'Eliminate compliance gaps with digital onboarding, e-signatures, acknowledged policies, contracts, document expiry alerts and a complete audit trail.',
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
    icon: <FileSignature className="w-5 h-5" />,
    title: 'Digital onboarding with e-signatures',
    desc: 'New hires complete W-4, I-9, and custom employment forms online before day one. Legally-binding e-signatures are captured and stored automatically.',
  },
  {
    icon: <FolderOpen className="w-5 h-5" />,
    title: 'Document management with expiry tracking',
    desc: 'Upload, request, and organize certifications, licenses, and employee documents. Set expiration dates and get reminders before they lapse.',
  },
  {
    icon: <AlertTriangle className="w-5 h-5" />,
    title: 'Incident boards in SOPs',
    desc: 'Report what happened with severity and photos, move it through review to resolved, and keep every status change with who and when. An incident is a run on a board, next to your other procedures.',
  },
  {
    icon: <Shield className="w-5 h-5" />,
    title: 'Complete audit trail',
    desc: 'Every action — document upload, signature, status change — is logged with timestamps and user attribution. Always ready for inspection.',
  },
  {
    icon: <FileText className="w-5 h-5" />,
    title: 'Violations, terminations & contracts',
    desc: 'Record violations with employee acknowledgement, link them to disciplinary actions and termination records, and send contracts from templates for e-signature, all on one employee record.',
  },
  {
    icon: <Clock className="w-5 h-5" />,
    title: 'Automated compliance reminders',
    desc: 'Fork notifies managers when documents expire, forms are incomplete, or onboarding steps are overdue — so nothing slips through.',
  },
]

const complianceAreas = [
  { icon: <CheckCircle2 className="w-4 h-4" />, label: 'I-9 verification' },
  { icon: <CheckCircle2 className="w-4 h-4" />, label: 'W-4 collection' },
  { icon: <CheckCircle2 className="w-4 h-4" />, label: 'Food handler permits' },
  { icon: <CheckCircle2 className="w-4 h-4" />, label: 'OSHA incident logs' },
  { icon: <CheckCircle2 className="w-4 h-4" />, label: 'Employee violations' },
  { icon: <CheckCircle2 className="w-4 h-4" />, label: 'Alcohol serving certs' },
  { icon: <CheckCircle2 className="w-4 h-4" />, label: 'Non-disclosure agreements' },
  { icon: <CheckCircle2 className="w-4 h-4" />, label: 'Employee handbooks' },
  { icon: <CheckCircle2 className="w-4 h-4" />, label: 'Safety training records' },
]

export default function CompliancePage() {
  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-warm-100">
        <Backdrop />
        <div className="relative max-w-6xl mx-auto px-6 pt-12 pb-16 md:pt-32 md:pb-24">
          <nav className="flex items-center gap-1.5 text-sm mb-8">
            <Link href="/solutions" className="text-warm-500 hover:text-warm-950 transition-colors">Solutions</Link>
            <ChevronRight className="w-3.5 h-3.5 text-warm-300" />
            <span className="font-medium text-warm-950">Compliance & HR records</span>
          </nav>
          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight leading-[1.05] text-warm-950 max-w-3xl">
            Signed forms, acknowledged policies and a record for every case
          </h1>
          <p className="mt-6 text-lg md:text-xl text-warm-600 leading-relaxed max-w-2xl">
            Audits, inspections and legal requirements shouldn&apos;t keep you up at night. Fork digitizes every compliance workflow, from onboarding paperwork to policy acknowledgements and incident boards, so you&apos;re always audit-ready.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href={REGISTER_URL} target="_blank">
              <Button size="lg" className="text-base px-6 h-11">
                {CTA_PRIMARY}
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
            </Link>
            <Link href="/products#people">
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

      {/* What you get */}
      <section className="border-b border-warm-100">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="grid md:grid-cols-[1fr_1.5fr] gap-12 md:gap-20 items-start">
            <div className="md:sticky md:top-28">
              <span className="eyebrow mb-4">What you get</span>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-warm-950">
                What Fork does for compliance
              </h2>
              <p className="mt-4 text-lg text-warm-600 leading-relaxed">
                Replace binders, spreadsheets, and paper forms with a system that tracks everything automatically and alerts you before deadlines.
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

      {/* Compliance areas */}
      <section className="bg-warm-50 border-b border-warm-100">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-24">
          <div className="max-w-2xl mb-10">
            <span className="eyebrow mb-4">Coverage</span>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-warm-950">
              Compliance areas Fork covers
            </h2>
          </div>
          <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-3">
            {complianceAreas.map((area) => (
              <li key={area.label} className="flex items-start gap-2.5">
                <span className="text-forest-500 mt-0.5 shrink-0">{area.icon}</span>
                <span className="text-[15px] text-warm-600">{area.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ROI callout */}
      <section className="border-b border-warm-100">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="grid md:grid-cols-[1.5fr_1fr] gap-12 md:gap-20 items-start">
            <div>
              <span className="eyebrow mb-4">Why it matters</span>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-warm-950 mb-4">
                The cost of non-compliance
              </h2>
              <p className="text-warm-600 leading-relaxed mb-4">
                A single missing I-9 form can result in fines from <strong>$252 to $2,507 per employee</strong>. Repeat violations escalate to <strong>$6,000+</strong>. OSHA penalties for unrecorded workplace incidents start at <strong>$16,131</strong>.
              </p>
              <p className="text-warm-600 leading-relaxed">
                Fork eliminates these risks by ensuring every document is collected, signed, and tracked — with automated reminders before anything expires.
              </p>
            </div>
            <div className="md:border-l md:border-warm-200 md:pl-12 md:pt-2">
              <Users className="w-5 h-5 text-forest-600 mb-3" />
              <div className="text-sm text-warm-500">Average savings per location</div>
              <div className="text-3xl font-semibold text-warm-950 tracking-tight mt-1">$4,200</div>
              <div className="text-xs text-warm-400 mt-1">per year in avoided penalties</div>
            </div>
          </div>
        </div>
      </section>

      <CtaSection title="Make compliance automatic" lede="Signed forms, acknowledged policies, contracts and a documented trail for every violation, without the filing cabinets." />
    </main>
  )
}
