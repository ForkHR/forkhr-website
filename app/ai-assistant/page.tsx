import type { Metadata } from 'next'
import { ArrowUpRight, BookOpen, CalendarDays, CheckCircle2, FolderOpen, HelpCircle, LayoutDashboard, Lock, MessageSquare, RefreshCw, Search, ShieldCheck, Smartphone, Sparkles, UserCog, Zap } from 'lucide-react'
import Hero from '@/components/marketing/Hero'
import SectionHeading from '@/components/marketing/SectionHeading'
import CtaSection from '@/components/marketing/CtaSection'
import { AiPreview, Window } from '@/components/previews'

const description =
  "An assistant trained on your company's own content: policies, FAQs, courses, library and the schedule itself. Accurate, role-aware answers for managers and employees, drafts for messages and open shifts, and escalation to a manager when it should not decide. Premium plan."

export const metadata: Metadata = {
  title: 'AI Assistant — Fork | Answers from your own policies, FAQs and schedule',
  description,
  alternates: { canonical: '/ai-assistant' },
  openGraph: { title: 'AI Assistant — Fork', description, url: 'https://forkhr.com/ai-assistant', images: ['/og-image.png'], type: 'website' },
  twitter: { card: 'summary_large_image', title: 'AI Assistant — Fork', description, images: ['/og-image.png'] },
}

const painPoints = [
  { problem: 'Managers answering the same questions every week', detail: '"What\'s our PTO policy?" "How do I swap a shift?" "Where\'s the handbook?"' },
  { problem: 'Answers buried in documents nobody opens twice', detail: 'Policies, FAQs and training exist, but finding them takes longer than asking.' },
  { problem: 'Different managers, different answers', detail: 'The same policy question answered three ways across three locations.' },
  { problem: 'Nobody has the numbers at hand', detail: 'Who is off Friday? Who closed last night? Somebody has to go and look.' },
]

const steps = [
  {
    step: '01',
    icon: <BookOpen className="h-5 w-5 text-forest-600" />,
    title: 'You publish your content',
    description: 'FAQs, policies, courses and library files inside Fork. The assistant indexes what you publish, nothing else. Nothing to configure.',
    sources: ['Company FAQs', 'Policies and handbook', 'Courses', 'Library files'],
  },
  {
    step: '02',
    icon: <Search className="h-5 w-5 text-forest-600" />,
    title: 'It retrieves, then answers',
    description: 'A question searches your company content first and ranks it above Fork\'s own product documentation. If nothing matches, it says so instead of guessing.',
    sources: ['Your content ranked first', 'Live schedule and time off data', 'No made-up answers', 'Escalation when unsure'],
  },
  {
    step: '03',
    icon: <MessageSquare className="h-5 w-5 text-forest-600" />,
    title: 'People get an answer, or a draft',
    description: 'Step-by-step guidance, policy-specific answers, a summary of who is off, or a message ready to post to a channel. Matched to the person\'s role.',
    sources: ['Role-aware answers', 'Drafts for announcements and messages', 'Hand-off to a manager', 'On every screen, web and mobile'],
  },
]

const features = [
  { icon: <Sparkles className="h-5 w-5 text-forest-600" />, title: 'Company-aware', desc: 'Answers are sourced from what you published: FAQs, policies, courses and library. Not generic internet answers.' },
  { icon: <UserCog className="h-5 w-5 text-forest-600" />, title: 'Role-based', desc: 'Owners get billing and setup help, managers get team answers, employees get self-service steps. Permissions apply.' },
  { icon: <CalendarDays className="h-5 w-5 text-forest-600" />, title: 'Knows the schedule', desc: 'Who is working, who is off, who has not clocked in. Real data from your company, not a guess.' },
  { icon: <RefreshCw className="h-5 w-5 text-forest-600" />, title: 'Always current', desc: 'Publish an FAQ or update a policy and the next conversation knows it. No retraining step.' },
  { icon: <Lock className="h-5 w-5 text-forest-600" />, title: 'Company-isolated', desc: 'Your content is never shared across companies or used to train other models.' },
  { icon: <ArrowUpRight className="h-5 w-5 text-forest-600" />, title: 'Escalates', desc: 'When it cannot answer, it offers to hand off to your support or the employee\'s manager, context attached.' },
]

const sources = [
  { icon: <HelpCircle className="h-5 w-5 text-forest-600" />, title: 'Company FAQs', desc: 'Published question-and-answer pairs. The first place the assistant looks for policy questions.' },
  { icon: <ShieldCheck className="h-5 w-5 text-forest-600" />, title: 'Policies', desc: 'The current version of every published policy, including who has acknowledged it.' },
  { icon: <BookOpen className="h-5 w-5 text-forest-600" />, title: 'Courses', desc: 'Modules, sections and steps. Good for "how do I" questions about procedures.' },
  { icon: <FolderOpen className="h-5 w-5 text-forest-600" />, title: 'Library', desc: 'Handbooks, guides, recipes and other documents you share with the team.' },
]

const managerUseCases = ['Fewer repeat questions from the team', 'One answer to a policy question, at every location', 'A summary of who is off or late, without opening three screens', 'Drafts for announcements and cover requests', 'Support that scales without more managers']
const employeeUseCases = ['Instant answers to policy questions', 'Step-by-step help with the app', 'Schedule, time off and timecard questions', 'Help on the closing shift when nobody is around', 'Course and training information on demand']

export default function AIAssistantPage() {
  return (
    <main className="pt-16">
      <Hero
        crumb={{ label: 'Products', href: '/products', current: 'AI assistant' }}
        plan="premium"
        title={
          <>
            Your company&apos;s knowledge<span className="text-forest-500">.</span> One question away<span className="text-forest-500">.</span>
          </>
        }
        lede="An assistant trained on your policies, FAQs, courses and library, with the schedule in view. Accurate, role-aware answers for managers and employees, and a manager one tap away when it should not decide."
        secondaryHref="#how-it-works"
        secondaryLabel="How it works"
        aside={
          <Window title="Fork · Assistant">
            <AiPreview />
          </Window>
        }
      />

      {/* Problem */}
      <section className="border-b border-warm-100">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid items-start gap-12 md:grid-cols-[1fr_1.4fr] md:gap-16">
            <SectionHeading eyebrow="The problem" title="The answers exist. They are just hard to find." lede="Every company has policies, procedures and training. Employees cannot find them, and managers spend their day repeating them." />
            <div className="divide-y divide-warm-100 border-t border-warm-100 md:border-t-0">
              {painPoints.map((p, i) => (
                <div key={p.problem} className="flex gap-5 py-5">
                  <span className="w-8 shrink-0 pt-0.5 text-[13px] font-medium tabular-nums text-warm-400">{String(i + 1).padStart(2, '0')}</span>
                  <div>
                    <h3 className="mb-1 text-base font-semibold text-warm-950">{p.problem}</h3>
                    <p className="text-sm leading-relaxed text-warm-500">{p.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* How it works */}
      <section id="how-it-works" className="scroll-mt-24 border-b border-warm-100 bg-warm-50">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <SectionHeading eyebrow="How it works" title="Publish once, answer forever" lede="No configuration and no prompt engineering. Publish your content and the assistant does the rest." />
          <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
            {steps.map((s) => (
              <div key={s.step} className="border-t-2 border-warm-950 pt-6">
                <div className="flex items-center gap-3">
                  <span className="text-[13px] font-medium tabular-nums text-warm-400">{s.step}</span>
                  {s.icon}
                </div>
                <h3 className="mb-2 mt-3 text-lg font-semibold text-warm-950">{s.title}</h3>
                <p className="mb-5 text-[15px] leading-relaxed text-warm-600">{s.description}</p>
                <ul className="space-y-2.5">
                  {s.sources.map((source) => (
                    <li key={source} className="flex items-start gap-2.5">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-forest-500" />
                      <span className="text-[15px] text-warm-600">{source}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="border-b border-warm-100">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <SectionHeading eyebrow="Features" title="Built for accuracy, not novelty" lede="Every decision behind the assistant is about giving the right, company-specific answer." />
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-warm-200 bg-warm-200 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((f) => (
              <div key={f.title} className="bg-white p-7 transition-colors hover:bg-warm-50">
                <div className="mb-4">{f.icon}</div>
                <h3 className="mb-1.5 text-[15px] font-semibold text-warm-950">{f.title}</h3>
                <p className="text-sm leading-relaxed text-warm-500">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sources */}
      <section className="border-b border-warm-100 bg-warm-50">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <SectionHeading eyebrow="Content sources" title="It answers from your approved content, in this order" />
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-warm-200 bg-warm-200 sm:grid-cols-2 lg:grid-cols-4">
            {sources.map((s, i) => (
              <div key={s.title} className="bg-white p-7">
                <div className="mb-4 flex items-center justify-between">
                  {s.icon}
                  <span className="text-[12px] font-medium tabular-nums text-warm-400">Priority {i + 1}</span>
                </div>
                <h3 className="mb-1.5 text-[15px] font-semibold text-warm-950">{s.title}</h3>
                <p className="text-sm leading-relaxed text-warm-500">{s.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-6 text-sm text-warm-500">Fork&apos;s own product documentation comes last, for questions about the app itself. Live schedule, time off and timecard data is read from your company when the question needs it.</p>
        </div>
      </section>

      {/* Use cases */}
      <section className="border-b border-warm-100">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <SectionHeading eyebrow="Use cases" title="Built for both sides of the org chart" />
          <div className="mt-12 overflow-hidden rounded-2xl border border-warm-200 bg-white">
            <div className="grid grid-cols-2 border-b border-warm-200">
              <div className="flex items-center gap-3 border-r border-warm-200 px-6 py-5 md:px-8">
                <ShieldCheck className="h-5 w-5 text-forest-600" />
                <span className="text-base font-semibold text-warm-950">For managers</span>
              </div>
              <div className="flex items-center gap-3 px-6 py-5 md:px-8">
                <Smartphone className="h-5 w-5 text-forest-600" />
                <span className="text-base font-semibold text-warm-950">For employees</span>
              </div>
            </div>
            {managerUseCases.map((uc, i) => (
              <div key={uc} className="grid grid-cols-2 border-b border-warm-100 last:border-0">
                <div className="flex items-start gap-3 border-r border-warm-100 px-6 py-4 md:px-8">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-forest-500" />
                  <span className="text-[15px] text-warm-600">{uc}</span>
                </div>
                <div className="flex items-start gap-3 px-6 py-4 md:px-8">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-forest-500" />
                  <span className="text-[15px] text-warm-600">{employeeUseCases[i]}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Where */}
      <section className="border-b border-warm-100 bg-warm-50">
        <div className="mx-auto max-w-6xl px-6 py-14 md:py-16">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:gap-12">
            <div className="shrink-0 md:max-w-[280px]">
              <h2 className="text-2xl font-semibold tracking-tight text-warm-950">Where your team already is</h2>
            </div>
            <div className="grid flex-1 grid-cols-2 gap-x-8 gap-y-6 md:grid-cols-4 md:border-l md:border-warm-200 md:pl-12">
              {[
                { icon: <LayoutDashboard className="h-5 w-5 text-forest-600" />, title: 'Web app', desc: 'On every page' },
                { icon: <Smartphone className="h-5 w-5 text-forest-600" />, title: 'Mobile app', desc: 'iOS and Android' },
                { icon: <Lock className="h-5 w-5 text-forest-600" />, title: 'Company-isolated', desc: 'Never shared across companies' },
                { icon: <Zap className="h-5 w-5 text-forest-600" />, title: 'Retrieval first', desc: 'Your content, then the answer' },
              ].map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <div className="mt-0.5 shrink-0">{item.icon}</div>
                  <div>
                    <h3 className="text-sm font-semibold text-warm-950">{item.title}</h3>
                    <p className="text-xs text-warm-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaSection eyebrow="Premium" title="Turn your company knowledge into an assistant" lede="Stop answering the same questions. The assistant is part of Premium, together with SOPs, courses, policies and contracts." />
    </main>
  )
}
