import { Button } from '@/components/ui/button'
import {
  ArrowRight,
  ChevronRight,
  Globe,
  FileSearch,
  CheckCircle2,
  Users,
  Mail,
  CalendarCheck,
  Star,
  UserPlus,
  MessageSquareText,
  ScanSearch,
  Crown,
  BarChart3,
  Link2,
  Layers,
  Shield,
} from 'lucide-react'
import Link from 'next/link'
import Backdrop from '@/components/visual/Backdrop'
import { CTA_PRIMARY, REGISTER_URL } from '@/lib/site'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hiring — Fork | AI-Powered Job Board & Applicant Tracking',
  description:
    'Post jobs to a branded, SEO-friendly job board. Screen applicants with custom questions and AI resume scanning. Manage your full hiring pipeline — from application to offer — in one platform.',
  alternates: {
    canonical: '/hiring',
  },
  openGraph: {
    title: 'Hiring — Fork | AI-Powered Job Board & Applicant Tracking',
    description:
      'Post jobs to a branded job board with custom URL. AI-powered resume scanning, screening questions, and a full hiring pipeline built for restaurants and hourly teams.',
    url: 'https://forkhr.com/hiring',
    images: ['/og-image.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Hiring — Fork | AI-Powered Job Board & Applicant Tracking',
    description:
      'Branded job board, AI resume scanner, custom screening questions, and a full hiring pipeline — all inside Fork.',
    images: ['/og-image.png'],
  },
}

const pipelineStages = [
  { label: 'Applied', icon: <UserPlus className="w-4 h-4" />, desc: 'Applicant submits form + resume on your public board' },
  { label: 'Interview', icon: <CalendarCheck className="w-4 h-4" />, desc: 'Schedule in-person or virtual interviews with one click' },
  { label: 'Feedback', icon: <Star className="w-4 h-4" />, desc: 'Score candidates on custom scorecards with weighted criteria' },
  { label: 'Result', icon: <CheckCircle2 className="w-4 h-4" />, desc: 'Hire or reject — with auto-notifications and optional onboarding' },
]

const aiScanFields = [
  { label: 'Summary', example: '2-3 sentence candidate background based on their resume' },
  { label: 'Highlights', example: '3+ years line cook experience, ServSafe certified, bilingual' },
  { label: 'Red Flags', example: 'No food service experience, large employment gap' },
  { label: 'Overall Fit', example: 'Excellent · Good · Fair · Poor' },
]

const boardFeatures = [
  {
    icon: <Link2 className="w-5 h-5 text-forest-600" />,
    title: 'Custom URL slug',
    desc: 'Your board lives at jobs.forkhr.com/your-company — shareable, bookmarkable, and branded.',
  },
  {
    icon: <Globe className="w-5 h-5 text-forest-600" />,
    title: 'SEO-optimized listings',
    desc: 'Every posting is crawlable with structured metadata — title, location, pay range, employment type.',
  },
  {
    icon: <Layers className="w-5 h-5 text-forest-600" />,
    title: 'Branded experience',
    desc: 'Your logo, brand color, and company description front and center. No Fork branding in the way.',
  },
  {
    icon: <ScanSearch className="w-5 h-5 text-forest-600" />,
    title: 'Full-text job search',
    desc: 'Candidates can search across all your listings by keyword, location, category, or employment type.',
  },
]

const screeningTypes = [
  { type: 'Multiple choice', desc: 'Applicant selects one or more options from your list', example: 'Which shifts are you available? ○ Morning ○ Afternoon ○ Evening' },
  { type: 'Single choice', desc: 'Applicant picks exactly one answer', example: 'Do you have a valid food handler\'s permit? ○ Yes ○ No' },
  { type: 'Free text', desc: 'Open-ended response for detailed answers', example: 'Describe your experience with high-volume kitchen service.' },
]

const templates = [
  'Barista', 'Server', 'Bartender', 'Line Cook', 'Host / Hostess', 'Shift Manager',
  'Dishwasher', 'Prep Cook', 'Cashier', 'Delivery Driver',
]

export default function HiringPage() {
  return (
    <main className="pt-16">
      {/* Hero */}
      <section className="relative overflow-hidden border-b border-warm-100">
        <Backdrop />
        <div className="relative max-w-6xl mx-auto px-6 pt-12 pb-16 md:pt-32 md:pb-24">
          <nav className="inline-flex items-center gap-1.5 text-sm mb-8">
            <Link href="/products" className="text-warm-400 hover:text-warm-950 transition-colors">Products</Link>
            <ChevronRight className="w-3.5 h-3.5 text-warm-300" />
            <span className="font-medium text-warm-950">Hiring</span>
          </nav>

          <h1 className="text-5xl md:text-6xl font-semibold tracking-tight leading-[1.05] text-warm-950 max-w-4xl">
            Your own job board. AI&#8209;powered screening.
          </h1>

          <p className="mt-6 text-lg md:text-xl text-warm-600 leading-relaxed max-w-2xl">
            Post jobs to a branded, SEO-friendly board at <span className="font-medium text-warm-950">jobs.forkhr.com/your-company</span>. Screen applicants with custom questions, scan resumes with AI, and manage your full pipeline — from application to offer letter.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link href={REGISTER_URL} target="_blank">
              <Button size="lg" className="text-base px-6 h-11">
                Start hiring
                <ArrowRight className="w-4 h-4 ml-1.5" />
              </Button>
            </Link>
            <Link href="#pipeline">
              <Button variant="outline" size="lg" className="text-base px-6 h-11">
                Read more
              </Button>
            </Link>
          </div>

          <p className="mt-5 text-sm text-warm-400">
            Included from Essential · AI resume scanner on Premium
          </p>
        </div>
      </section>

      {/* Job Board showcase — side-by-side mockup + features */}
      <section className="border-b border-warm-100">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="grid md:grid-cols-[1.2fr_1fr] gap-12 md:gap-16 items-center">
            {/* Left — mock job board card */}
            <div>
              <div className="rounded-xl border border-warm-200 bg-white overflow-hidden">
                {/* Browser bar */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-warm-100">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-warm-200" />
                    <div className="w-2.5 h-2.5 rounded-full bg-warm-200" />
                    <div className="w-2.5 h-2.5 rounded-full bg-warm-200" />
                  </div>
                  <div className="flex-1 flex justify-center">
                    <div className="bg-warm-100 rounded-md px-4 py-1 text-xs text-warm-500 font-mono">
                      jobs.forkhr.com/your-company
                    </div>
                  </div>
                </div>

                {/* Mock listing cards */}
                <div className="p-5 space-y-3">
                  {[
                    { title: 'Line Cook', type: 'Full-time', pay: '$18 – $22/hr', loc: 'Downtown' },
                    { title: 'Server', type: 'Part-time', pay: '$15 – $18/hr + tips', loc: 'Midtown' },
                    { title: 'Shift Manager', type: 'Full-time', pay: '$52k – $58k/yr', loc: 'All locations' },
                  ].map((job) => (
                    <div key={job.title} className="rounded-lg border border-warm-200 bg-white p-4 flex items-center justify-between gap-4 hover:border-warm-300 transition-colors">
                      <div>
                        <div className="text-sm font-semibold text-warm-950">{job.title}</div>
                        <div className="text-xs text-warm-500 mt-0.5">{job.loc} · {job.type} · {job.pay}</div>
                      </div>
                      <div className="shrink-0 text-xs font-medium text-forest-600">
                        Apply
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — feature list */}
            <div>
              <span className="eyebrow mb-4">Public job board</span>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-warm-950 mb-4">
                A branded board your candidates actually want to use
              </h2>
              <p className="text-warm-600 leading-relaxed mb-8">
                Every listing is SEO-friendly with structured data. Your board is searchable, filterable, and looks like it belongs to your brand.
              </p>

              <div className="space-y-6">
                {boardFeatures.map((f) => (
                  <div key={f.title} className="flex gap-4">
                    <div className="shrink-0 mt-0.5">{f.icon}</div>
                    <div>
                      <h3 className="text-sm font-semibold text-warm-950 mb-0.5">{f.title}</h3>
                      <p className="text-sm text-warm-500 leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pipeline — numbered stages with detail cards */}
      <section id="pipeline" className="border-b border-warm-100">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-2xl mb-14">
            <span className="eyebrow mb-4">Hiring pipeline</span>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-warm-950">
              Four stages from application to offer
            </h2>
            <p className="mt-4 text-lg text-warm-600 leading-relaxed">
              Every applicant moves through a clear pipeline. You always know who&apos;s where.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-8">
            {pipelineStages.map((stage, i) => (
              <div key={stage.label} className="border-t-2 border-warm-950 pt-6">
                <span className="text-[13px] font-medium text-warm-400 tabular-nums">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="mt-2 text-lg font-semibold text-warm-950 mb-2">{stage.label}</h3>
                <p className="text-[15px] text-warm-600 leading-relaxed">{stage.desc}</p>
              </div>
            ))}
          </div>

          {/* Pipeline extras */}
          <div className="mt-16 grid sm:grid-cols-3 gap-5">
            {[
              { icon: <Mail className="w-5 h-5 text-forest-600" />, title: 'Auto-notifications', desc: 'Applicants and managers get emails at every stage — confirmations, interview invites, and results.' },
              { icon: <UserPlus className="w-5 h-5 text-forest-600" />, title: 'Hire → Onboard', desc: 'When you hire someone, Fork can auto-create their employee profile and send an app invite.' },
              { icon: <Users className="w-5 h-5 text-forest-600" />, title: 'Assign reviewers', desc: 'Route applicants to specific team members for review, scoring, and interview scheduling.' },
            ].map((item) => (
              <div key={item.title} className="bg-white border border-warm-200 rounded-xl p-7 hover:border-warm-300 transition-colors">
                <div className="mb-4">{item.icon}</div>
                <h4 className="text-[15px] font-semibold text-warm-950 mb-1.5">{item.title}</h4>
                <p className="text-sm text-warm-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Resume Scanner — dark section with mock output */}
      <section className="bg-warm-950">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="grid md:grid-cols-[1fr_1.3fr] gap-12 md:gap-16 items-start">
            {/* Left — explanation */}
            <div>
              <span className="eyebrow text-lime-accent mb-4">AI-powered · Premium</span>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">
                AI reads the resume so you don&apos;t have to
              </h2>
              <p className="text-warm-400 leading-relaxed mb-6">
                Upload a resume and Fork&apos;s AI scans it against the job description. In seconds, you get a structured summary — highlights, red flags, and an overall fit rating. No more skimming 50 PDFs.
              </p>

              <div className="space-y-3">
                {[
                  'Parses uploaded PDF resumes automatically',
                  'Compares resume content to your job description',
                  'Reviews screening question answers for context',
                  'Returns structured JSON — no vague chatbot responses',
                  'Powered by GPT-4o-mini with 0.1 temperature',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-lime-accent mt-0.5 shrink-0" />
                    <span className="text-sm text-warm-400">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — mock AI output */}
            <div className="rounded-xl border border-warm-800 bg-warm-900/60 p-6 md:p-8">
              <div className="flex items-center gap-2 mb-6">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-lime-accent/10">
                  <ScanSearch className="w-4 h-4 text-lime-accent" />
                </div>
                <span className="text-sm font-semibold text-white">AI Resume Scan</span>
                <span className="ml-auto text-xs text-warm-500 font-mono">gpt-4o-mini</span>
              </div>

              <div className="space-y-5">
                {aiScanFields.map((field) => (
                  <div key={field.label}>
                    <div className="text-xs font-medium text-warm-500 uppercase tracking-wider mb-1.5">{field.label}</div>
                    <div className="text-sm text-warm-300 leading-relaxed bg-warm-900 rounded-lg px-4 py-3 border border-warm-800">
                      {field.example}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-5 border-t border-warm-800 flex items-center justify-between">
                <span className="text-xs text-warm-500">Analysis complete</span>
                <span className="inline-flex items-center gap-1.5 text-xs font-medium text-lime-accent">
                  <CheckCircle2 className="w-3 h-3" />
                  Good fit
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Screening Questions */}
      <section className="bg-warm-50 border-b border-warm-100">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="grid md:grid-cols-[1fr_1.2fr] gap-12 md:gap-16 items-start">
            {/* Left — header */}
            <div>
              <span className="eyebrow mb-4">Screening questions</span>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-warm-950 mb-4">
                Filter before you interview
              </h2>
              <p className="text-warm-600 leading-relaxed mb-8">
                Add custom questions to any job listing. Applicants answer before submitting — so you know who&apos;s qualified before you even open the resume.
              </p>

              <div className="space-y-3">
                {[
                  'Required or optional per question',
                  'Answers attached to applicant profile',
                  'AI scanner reads answers for context',
                  'Unlimited questions per listing',
                ].map((item) => (
                  <div key={item} className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-forest-500 mt-0.5 shrink-0" />
                    <span className="text-[15px] text-warm-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — question type cards */}
            <div className="space-y-4">
              {screeningTypes.map((q, i) => (
                <div key={q.type} className="bg-white border border-warm-200 rounded-xl p-6 hover:border-warm-300 transition-colors">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-[13px] font-medium text-warm-400 tabular-nums">{String(i + 1).padStart(2, '0')}</span>
                    <span className="text-sm font-semibold text-warm-950">{q.type}</span>
                    <span className="text-xs text-warm-400">— {q.desc}</span>
                  </div>
                  <div className="rounded-lg bg-warm-50 px-4 py-3 text-sm text-warm-500 font-mono leading-relaxed">
                    {q.example}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Scorecards — inline feature strip */}
      <section className="border-b border-warm-100">
        <div className="max-w-6xl mx-auto px-6 py-14 md:py-16">
          <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12">
            <div className="shrink-0 md:max-w-[300px]">
              <h2 className="text-2xl font-semibold tracking-tight text-warm-950 mb-2">
                Weighted scorecards
              </h2>
              <p className="text-sm text-warm-500 leading-relaxed">
                Define evaluation criteria with custom weights. Reviewers score 1-5, and Fork calculates the weighted total automatically.
              </p>
            </div>
            <div className="flex-1 md:border-l md:border-warm-100 md:pl-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { name: 'Experience', weight: '35%' },
                  { name: 'Availability', weight: '25%' },
                  { name: 'Communication', weight: '20%' },
                  { name: 'Culture Fit', weight: '20%' },
                ].map((c) => (
                  <div key={c.name} className="text-center p-4 rounded-lg bg-white border border-warm-200">
                    <div className="text-2xl font-semibold text-warm-950 tracking-tight mb-1">{c.weight}</div>
                    <div className="text-xs font-medium text-warm-500">{c.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job templates */}
      <section className="border-b border-warm-100">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-2xl mb-12">
            <span className="eyebrow mb-4">Quick start</span>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-warm-950">
              Pre-built templates for common roles
            </h2>
            <p className="mt-4 text-lg text-warm-600 leading-relaxed">
              Don&apos;t start from scratch. Pick a template and customize — descriptions, screening questions, and scorecards included.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {templates.map((t) => (
              <div
                key={t}
                className="inline-flex items-center rounded-lg border border-warm-200 bg-white px-4 py-2 text-sm font-medium text-warm-600 hover:border-warm-300 hover:text-warm-950 transition-colors"
              >
                {t}
              </div>
            ))}
          </div>

          <p className="text-sm text-warm-400 mt-6">
            Each template includes a full job description, screening questions, and evaluation scorecard.
          </p>
        </div>
      </section>

      {/* Why Fork for hiring */}
      <section className="border-b border-warm-100">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-2xl mb-14">
            <span className="eyebrow mb-4">Why Fork</span>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-warm-950">
              Hiring that&apos;s connected to everything else
            </h2>
            <p className="mt-4 text-lg text-warm-600 leading-relaxed">
              Most ATS tools are standalone. Fork&apos;s hiring is built into the same platform your team already uses for scheduling, onboarding, and training.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-warm-200 border border-warm-200 rounded-xl overflow-hidden">
            {[
              { icon: <UserPlus className="w-5 h-5 text-forest-600" />, title: 'Hire → Employee', desc: 'Convert an applicant to an employee profile with one click. Auto-create their account and send an app invite.' },
              { icon: <Shield className="w-5 h-5 text-forest-600" />, title: 'Permission-controlled', desc: 'Control who can view listings vs. manage applicants with role-based permissions per position.' },
              { icon: <MessageSquareText className="w-5 h-5 text-forest-600" />, title: 'Comments & notes', desc: 'Leave internal notes on any applicant. Collaborate with your hiring team without leaving Fork.' },
              { icon: <BarChart3 className="w-5 h-5 text-forest-600" />, title: 'Applicant counts', desc: 'See how many applicants each listing has attracted at a glance from your dashboard.' },
              { icon: <Mail className="w-5 h-5 text-forest-600" />, title: 'Email automation', desc: 'Confirmation emails, interview invites with accept/decline links, offer letters, and rejection notices — all automated.' },
              { icon: <FileSearch className="w-5 h-5 text-forest-600" />, title: 'Resume storage', desc: 'Every resume is stored securely in the cloud and accessible from the applicant profile anytime.' },
            ].map((f) => (
              <div key={f.title} className="bg-white p-7 hover:bg-warm-50 transition-colors">
                <div className="mb-4">{f.icon}</div>
                <h3 className="text-[15px] font-semibold text-warm-950 mb-1.5">{f.title}</h3>
                <p className="text-sm text-warm-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-warm-50">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-warm-950 mb-4">
              Stop juggling spreadsheets and email chains
            </h2>
            <p className="text-lg text-warm-600 mb-10 max-w-xl">
              Post your first job listing in minutes. Start receiving applications today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link href={REGISTER_URL} target="_blank">
                <Button size="lg" className="text-base px-7 h-12">
                  {CTA_PRIMARY}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </Link>
              <Link href="/pricing">
                <Button variant="outline" size="lg" className="text-base px-7 h-12">
                  View pricing
                </Button>
              </Link>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-warm-500">
              <span>Included from $39 per location</span>
              <span className="w-1 h-1 rounded-full bg-warm-300" />
              <span>Unlimited postings and applicants</span>
              <span className="w-1 h-1 rounded-full bg-warm-300" />
              <span className="inline-flex items-center gap-1"><Crown className="w-3.5 h-3.5 text-forest-600" /> AI scanner on Premium</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
