import { Button } from '@/components/ui/button'
import {
  ArrowRight,
  ChevronRight,
  Briefcase,
  Globe,
  FileSearch,
  ListChecks,
  Sparkles,
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
  Zap,
} from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'
import BlobBackground from '@/components/visual/BlobBackground'

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
    icon: <Link2 className="w-5 h-5 text-primary" />,
    title: 'Custom URL slug',
    desc: 'Your board lives at jobs.forkhr.com/your-company — shareable, bookmarkable, and branded.',
  },
  {
    icon: <Globe className="w-5 h-5 text-primary" />,
    title: 'SEO-optimized listings',
    desc: 'Every posting is crawlable with structured metadata — title, location, pay range, employment type.',
  },
  {
    icon: <Layers className="w-5 h-5 text-primary" />,
    title: 'Branded experience',
    desc: 'Your logo, brand color, and company description front and center. No Fork branding in the way.',
  },
  {
    icon: <ScanSearch className="w-5 h-5 text-primary" />,
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
    <main>
      {/* Hero */}
      <section className="relative pt-20"
        style={{
          backgroundImage: "radial-gradient(circle,#DDD8CA 1px,transparent 0)",
          backgroundSize: "20px 20px",
        }}
      >
        <BlobBackground variant="diamond" />
        <div className="max-w-5xl mx-auto px-6 pt-12 pb-16 md:pt-28 md:pb-20">
          <nav className="inline-flex items-center gap-1.5 text-sm mb-5">
            <Link href="/products" className="text-warm-400 hover:text-primary transition-colors">Products</Link>
            <ChevronRight className="w-3.5 h-3.5 text-warm-300" />
            <span className="inline-flex items-center gap-1.5 font-semibold text-primary bg-primary/6 rounded-full px-3 py-0.5">
              <Briefcase className="w-3.5 h-3.5" />
              Hiring
            </span>
          </nav>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-warm-900 max-w-4xl">
            Your own job board<span className="text-primary">.</span> AI&#8209;powered screening<span className="text-primary">.</span>
          </h1>

          <p className="mt-6 text-lg md:text-xl text-warm-600 leading-relaxed max-w-2xl">
            Post jobs to a branded, SEO-friendly board at <span className="font-medium text-warm-900">jobs.forkhr.com/your-company</span>. Screen applicants with custom questions, scan resumes with AI, and manage your full pipeline — from application to offer letter.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link href="https://app.forkhr.com/register" target="_blank">
              <Button size="lg" className="text-base px-8 h-12">
                Start hiring
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="#pipeline">
              <Button variant="outline" size="lg" className="text-base px-8 h-12">
                Read more
              </Button>
            </Link>
          </div>

          <p className="mt-5 text-sm text-warm-400">
            Available on all plans · AI resume scanner on Premium
          </p>
        </div>
      </section>

      {/* Job Board showcase — side-by-side mockup + features */}
      <section className="bg-plum relative overflow-hidden">
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-lavender/10 rounded-full blur-[120px]" />

        <div className="max-w-5xl mx-auto px-6 py-20 md:py-28 relative">
          <div className="grid md:grid-cols-[1.2fr_1fr] gap-12 md:gap-16 items-center">
            {/* Left — mock job board card */}
            <div>
              <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm overflow-hidden">
                {/* Browser bar */}
                <div className="flex items-center gap-2 px-4 py-3 border-b border-white/6">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                    <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                    <div className="w-2.5 h-2.5 rounded-full bg-white/10" />
                  </div>
                  <div className="flex-1 flex justify-center">
                    <div className="bg-white/6 rounded-md px-4 py-1 text-xs text-warm-400 font-mono">
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
                    <div key={job.title} className="rounded-xl border border-white/6 bg-white/3 p-4 flex items-center justify-between gap-4">
                      <div>
                        <div className="text-sm font-semibold text-white">{job.title}</div>
                        <div className="text-xs text-warm-500 mt-0.5">{job.loc} · {job.type} · {job.pay}</div>
                      </div>
                      <div className="shrink-0 text-xs font-medium text-lavender bg-lavender/10 rounded-full px-3 py-1">
                        Apply
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right — feature list */}
            <div>
              <p className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/10 px-3.5 py-1.5 text-xs font-medium text-white/70 mb-5">
                <Globe className="w-3.5 h-3.5 text-lavender" />
                Public job board
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
                A branded board your candidates actually want to use
              </h2>
              <p className="text-warm-400 leading-relaxed mb-8">
                Every listing is SEO-friendly with structured data. Your board is searchable, filterable, and looks like it belongs to your brand.
              </p>

              <div className="space-y-5">
                {boardFeatures.map((f) => (
                  <div key={f.title} className="flex gap-4">
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/6 shrink-0">
                      {f.icon}
                    </div>
                    <div>
                      <h3 className="text-sm font-semibold text-white mb-0.5">{f.title}</h3>
                      <p className="text-sm text-warm-500 leading-relaxed">{f.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pipeline — horizontal stepper with detail cards */}
      <section id="pipeline">
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="inline-flex items-center gap-2 rounded-full bg-primary/5 border border-primary/10 px-3.5 py-1.5 text-xs font-medium text-primary mb-5">Hiring pipeline</p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-warm-900">
              Four stages from application to offer
            </h2>
            <p className="mt-4 text-lg text-warm-600 leading-relaxed">
              Every applicant moves through a clear pipeline. You always know who&apos;s where.
            </p>
          </div>

          {/* Pipeline Flow */}
          <div className="relative">
            {/* Connecting line (desktop) */}
            <div className="hidden md:block absolute top-[52px] left-[12.5%] right-[12.5%] h-0.5 bg-linear-to-r from-primary/10 via-primary/30 to-primary/10" />

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-4">
              {pipelineStages.map((stage, i) => (
                <div key={stage.label} className="relative flex flex-col items-center text-center">
                  {/* Stage circle */}
                  <div className="relative z-10 flex items-center justify-center w-[72px] h-[72px] rounded-full bg-white border-2 border-primary/20 shadow-sm mb-5">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-primary/10 text-primary">
                      {stage.icon}
                    </div>
                    <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-primary text-white text-[10px] font-bold flex items-center justify-center">
                      {i + 1}
                    </div>
                  </div>

                  <h3 className="text-base font-semibold text-warm-900 mb-1.5">{stage.label}</h3>
                  <p className="text-sm text-warm-500 leading-relaxed max-w-[200px]">{stage.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Pipeline extras */}
          <div className="mt-16 grid sm:grid-cols-3 gap-5">
            {[
              { icon: <Mail className="w-4 h-4 text-primary" />, title: 'Auto-notifications', desc: 'Applicants and managers get emails at every stage — confirmations, interview invites, and results.' },
              { icon: <UserPlus className="w-4 h-4 text-primary" />, title: 'Hire → Onboard', desc: 'When you hire someone, Fork can auto-create their employee profile and send an app invite.' },
              { icon: <Users className="w-4 h-4 text-primary" />, title: 'Assign reviewers', desc: 'Route applicants to specific team members for review, scoring, and interview scheduling.' },
            ].map((item) => (
              <div key={item.title} className="flex gap-3 p-5 rounded-xl border border-warm-200/80 bg-white">
                <div className="flex items-center justify-center w-9 h-9 rounded-lg bg-primary/8 shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-warm-900 mb-1">{item.title}</h4>
                  <p className="text-sm text-warm-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Resume Scanner — dark accent section with mock output */}
      <section className="bg-charcoal relative overflow-hidden">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-amber/8 rounded-full blur-[100px]" />

        <div className="max-w-5xl mx-auto px-6 py-20 md:py-28 relative">
          <div className="grid md:grid-cols-[1fr_1.3fr] gap-12 md:gap-16 items-start">
            {/* Left — explanation */}
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-amber/10 border border-amber/20 px-3.5 py-1.5 text-xs font-medium text-amber mb-5">
                <Sparkles className="w-3.5 h-3.5" />
                AI-powered · Premium
              </div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
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
                    <CheckCircle2 className="w-4 h-4 text-amber mt-0.5 shrink-0" />
                    <span className="text-sm text-warm-400">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — mock AI output */}
            <div className="rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm p-6 md:p-8">
              <div className="flex items-center gap-2 mb-6">
                <div className="flex items-center justify-center w-8 h-8 rounded-lg bg-amber/15">
                  <ScanSearch className="w-4 h-4 text-amber" />
                </div>
                <span className="text-sm font-semibold text-white">AI Resume Scan</span>
                <span className="ml-auto text-xs text-warm-500 font-mono">gpt-4o-mini</span>
              </div>

              <div className="space-y-5">
                {aiScanFields.map((field) => (
                  <div key={field.label}>
                    <div className="text-xs font-medium text-warm-400 uppercase tracking-wider mb-1.5">{field.label}</div>
                    <div className="text-sm text-warm-300 leading-relaxed bg-white/3 rounded-lg px-4 py-3 border border-white/6">
                      {field.example}
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-5 border-t border-white/6 flex items-center justify-between">
                <span className="text-xs text-warm-500">Analysis complete</span>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-400 bg-emerald-400/10 rounded-full px-3 py-1">
                  <CheckCircle2 className="w-3 h-3" />
                  Good fit
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Screening Questions — tabbed showcase */}
      <section className="bg-warm-100/60">
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
          <div className="grid md:grid-cols-[1fr_1.2fr] gap-12 md:gap-16 items-start">
            {/* Left — header */}
            <div>
              <p className="inline-flex items-center gap-2 rounded-full bg-primary/5 border border-primary/10 px-3.5 py-1.5 text-xs font-medium text-primary mb-5">
                <ListChecks className="w-3.5 h-3.5" />
                Screening questions
              </p>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-warm-900 mb-4">
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
                  <div key={item} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                    <span className="text-sm text-warm-600">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — question type cards */}
            <div className="space-y-4">
              {screeningTypes.map((q, i) => (
                <div key={q.type} className="rounded-2xl border border-warm-200/80 bg-white p-6 relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-1 h-full bg-primary/40 rounded-l-2xl" />
                  <div className="flex items-center gap-3 mb-3 pl-3">
                    <span className="text-xs font-bold text-primary/40 tabular-nums">{String(i + 1).padStart(2, '0')}</span>
                    <span className="text-sm font-semibold text-warm-900">{q.type}</span>
                    <span className="text-xs text-warm-400">— {q.desc}</span>
                  </div>
                  <div className="ml-3 rounded-lg bg-warm-50 px-4 py-3 text-sm text-warm-500 font-mono leading-relaxed">
                    {q.example}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Scorecards — inline feature strip */}
      <section className="border-y border-warm-200/80">
        <div className="max-w-5xl mx-auto px-6 py-14 md:py-16">
          <div className="flex flex-col md:flex-row md:items-center gap-8 md:gap-12">
            <div className="shrink-0 md:max-w-[300px]">
              <h2 className="text-2xl font-bold tracking-tight text-warm-900 mb-2">
                Weighted scorecards
              </h2>
              <p className="text-sm text-warm-500 leading-relaxed">
                Define evaluation criteria with custom weights. Reviewers score 1-5, and Fork calculates the weighted total automatically.
              </p>
            </div>
            <div className="flex-1 md:border-l md:border-warm-200/80 md:pl-12">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { name: 'Experience', weight: '35%' },
                  { name: 'Availability', weight: '25%' },
                  { name: 'Communication', weight: '20%' },
                  { name: 'Culture Fit', weight: '20%' },
                ].map((c) => (
                  <div key={c.name} className="text-center p-4 rounded-xl bg-warm-50 border border-warm-100">
                    <div className="text-2xl font-bold text-primary mb-1">{c.weight}</div>
                    <div className="text-xs font-medium text-warm-600">{c.name}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Job templates — scrollable pills */}
      <section>
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="inline-flex items-center gap-2 rounded-full bg-primary/5 border border-primary/10 px-3.5 py-1.5 text-xs font-medium text-primary mb-5">
              <Zap className="w-3.5 h-3.5" />
              Quick start
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-warm-900">
              Pre-built templates for common roles
            </h2>
            <p className="mt-4 text-lg text-warm-600 leading-relaxed">
              Don&apos;t start from scratch. Pick a template and customize — descriptions, screening questions, and scorecards included.
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {templates.map((t) => (
              <div
                key={t}
                className="inline-flex items-center gap-2 rounded-full border border-warm-200 bg-white px-5 py-2.5 text-sm font-medium text-warm-700 hover:border-primary/30 hover:text-primary transition-colors"
              >
                <Briefcase className="w-3.5 h-3.5 text-warm-400" />
                {t}
              </div>
            ))}
          </div>

          <p className="text-center text-sm text-warm-400 mt-6">
            Each template includes a full job description, screening questions, and evaluation scorecard.
          </p>
        </div>
      </section>

      {/* Why Fork for hiring — comparison strip */}
      <section className="bg-warm-100/60">
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-28">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-warm-900">
              Hiring that&apos;s connected to everything else
            </h2>
            <p className="mt-4 text-lg text-warm-600 leading-relaxed">
              Most ATS tools are standalone. Fork&apos;s hiring is built into the same platform your team already uses for scheduling, onboarding, and training.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { icon: <UserPlus className="w-5 h-5 text-primary" />, title: 'Hire → Employee', desc: 'Convert an applicant to an employee profile with one click. Auto-create their account and send an app invite.' },
              { icon: <Shield className="w-5 h-5 text-primary" />, title: 'Permission-controlled', desc: 'Control who can view listings vs. manage applicants with role-based permissions per position.' },
              { icon: <MessageSquareText className="w-5 h-5 text-primary" />, title: 'Comments & notes', desc: 'Leave internal notes on any applicant. Collaborate with your hiring team without leaving Fork.' },
              { icon: <BarChart3 className="w-5 h-5 text-primary" />, title: 'Applicant counts', desc: 'See how many applicants each listing has attracted at a glance from your dashboard.' },
              { icon: <Mail className="w-5 h-5 text-primary" />, title: 'Email automation', desc: 'Confirmation emails, interview invites with accept/decline links, offer letters, and rejection notices — all automated.' },
              { icon: <FileSearch className="w-5 h-5 text-primary" />, title: 'Resume storage', desc: 'Every resume is stored securely in the cloud and accessible from the applicant profile anytime.' },
            ].map((f) => (
              <div key={f.title} className="rounded-2xl border border-warm-200/80 bg-white p-6 hover:border-primary/20 hover:shadow-sm transition-all group">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/8 text-primary mb-4 group-hover:bg-primary/15 transition-colors">
                  {f.icon}
                </div>
                <h3 className="text-base font-semibold text-warm-900 mb-2">{f.title}</h3>
                <p className="text-sm text-warm-500 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-forest-700">
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-28 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            Stop juggling spreadsheets and email chains
          </h2>
          <p className="text-lg text-warm-400 mb-10 max-w-xl mx-auto">
            Post your first job listing in minutes. Start receiving applications today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="https://app.forkhr.com/register" target="_blank">
              <Button size="lg" className="text-base px-8 h-12 bg-white text-warm-900 hover:bg-warm-100">
                Start free trial
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="/pricing">
              <Button variant="outline" size="lg" className="text-base px-8 h-12 border-forest-600 text-warm-300 bg-forest-800 hover:bg-forest-700 hover:text-white">
                View pricing
              </Button>
            </Link>
          </div>
          <div className="mt-6 flex items-center justify-center gap-4 text-sm text-warm-500">
            <span>Free 7-day trial</span>
            <span className="w-1 h-1 rounded-full bg-warm-600" />
            <span>All plans include hiring</span>
            <span className="w-1 h-1 rounded-full bg-warm-600" />
            <span className="inline-flex items-center gap-1"><Crown className="w-3.5 h-3.5 text-lime-accent" /> AI scanner on Premium</span>
          </div>
        </div>
      </section>
    </main>
  )
}
