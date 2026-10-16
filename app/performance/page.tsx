import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, Award, BadgeCheck, CalendarCheck, CalendarRange, ClipboardCheck, Flag, GraduationCap, Lock, Repeat, ShieldAlert, Users, Wallet } from 'lucide-react'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Hero from '@/components/marketing/Hero'
import SectionHeading from '@/components/marketing/SectionHeading'
import FeatureRow from '@/components/marketing/FeatureRow'
import CtaSection from '@/components/marketing/CtaSection'
import PlanBadge from '@/components/marketing/PlanBadge'
import { CheckInPreview, ManagerFeedbackPreview, PerformancePreview, Phone, PlanPreview, ReviewPhonePreview, Window } from '@/components/previews'
import { Pill, RatingDots, type PillTone } from '@/components/previews/bits'
import { tierByKey } from '@/lib/catalog'
import { registerUrl } from '@/lib/site'

// Performance reviews, sold on what only Fork can do: the review is written beside the record
// Fork already keeps (backend/utils/performanceSnapshot.js in the app repo). Rules and names
// follow backend/utils/performance.js and the knowledge base entry "performance".

const title = 'Performance Reviews — Fork | Reviews for hourly teams, written from the record'
const description =
  'Performance reviews for hourly teams: 90-day and anniversary reviews that start on their own, written with attendance, shifts, tasks and training beside every question. Self reviews on a phone, raises applied to pay rates, check-ins, goals, anonymous manager feedback and improvement plans.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/performance' },
  openGraph: { title, description, url: 'https://forkhr.com/performance', images: ['/og-image.png'], type: 'website' },
  twitter: { card: 'summary_large_image', title, description, images: ['/og-image.png'] },
}

const pro = tierByKey('pro')
const premium = tierByKey('premium')
const signUp = registerUrl({ use: 'workplace', plan: 'pro' })

const record = [
  { icon: <CalendarCheck className="h-4 w-4" />, name: 'Attendance', desc: 'Shifts worked, absences, on-time rate and missed clock-ins, from the schedule and the time clock.' },
  { icon: <Flag className="h-4 w-4" />, name: 'On shift', desc: 'Great shifts, shifts covered for others and shift tasks done.' },
  { icon: <ClipboardCheck className="h-4 w-4" />, name: 'SOPs', desc: 'Checklist runs completed, how many on time, how many passed.' },
  { icon: <GraduationCap className="h-4 w-4" />, name: 'Training', desc: 'Courses finished in the period, with dates.' },
  { icon: <Award className="h-4 w-4" />, name: 'Recognition', desc: 'Shout-outs and badges from the team.' },
  { icon: <ShieldAlert className="h-4 w-4" />, name: 'Conduct', desc: 'Violations, poor-shift flags and shift notes. Managers only.' },
]

const steps: { title: string; desc: string; status: string; tone: PillTone }[] = [
  { title: 'It opens on its own', desc: 'On day 83 of 90, or a week before a work anniversary. Or launch a cycle for a whole location.', status: 'In progress', tone: 'warn' },
  { title: 'A self review on their phone', desc: 'A few plain questions in the Fork app. Five minutes, on a break.', status: 'In progress', tone: 'warn' },
  { title: 'The manager writes it', desc: 'Ratings and answers, with the record, check-ins and goals beside them.', status: 'Raise to approve', tone: 'plum' },
  { title: 'The owner approves the raise', desc: 'Proposed with the review. Approved, it goes on the pay rate from its start date.', status: 'Ready to share', tone: 'brand' },
  { title: 'Shared and acknowledged', desc: 'They read it on their phone and acknowledge it. You see when.', status: 'Completed', tone: 'ok' },
]

const cycles = [
  { icon: <Repeat className="h-4 w-4" />, name: 'Automatic', desc: 'A review opens for each person at a milestone: days after hire, or every work anniversary.', example: '90-day review · opens on day 83' },
  { icon: <CalendarRange className="h-4 w-4" />, name: 'One time', desc: 'Everyone it matches, by location, position or tenure, with due dates and reminders.', example: 'Annual review · Main St · 6 months+' },
  { icon: <Users className="h-4 w-4" />, name: 'Manager feedback', desc: 'Each team answers about the person who manages them. Anonymously.', example: 'Results show from 3 answers' },
]

const starters = ['90-day review', 'Annual review', 'Shift lead review', '30-day check-in', 'Manager feedback']

const sampleQuestions: { text: string; kind: 'rating' | 'text' | 'yesno'; who?: string }[] = [
  { text: 'Knows the job: follows recipes, steps and standards without reminders', kind: 'rating' },
  { text: 'Reliability: on time, ready to work and stays for the whole shift', kind: 'rating' },
  { text: 'Teamwork: helps others and takes direction well', kind: 'rating' },
  { text: 'Guest and customer care', kind: 'rating' },
  { text: 'What would help you do your job better?', kind: 'text', who: 'Employee' },
  { text: 'Ready to come off probation?', kind: 'yesno', who: 'Manager' },
]

const reports = ['Ratings', 'Reviews on time', 'Raises & payroll', 'Check-ins held', 'Goals met']

const faqs = [
  {
    q: 'Which plan includes performance reviews?',
    a: `${pro.name} and ${premium.name}. Reviews, cycles, raises, check-ins, goals and feedback are on ${pro.name}; improvement plans are on ${premium.name}.`,
  },
  {
    q: 'What is "the record"?',
    a: 'What Fork already knows about the person for the review period: shifts worked, absences, on-time clock-ins, shift flags and tasks, SOP runs, courses, recognitions and write-ups. It is filled in for you and saved with the review.',
  },
  {
    q: 'Do employees see their own record?',
    a: 'They see their review, the approved raise and their record once you share it, and you can switch the record off in settings. Shift notes, poor-performance flags and violations always stay with managers.',
  },
  {
    q: 'Is manager feedback really anonymous?',
    a: 'Yes. Nobody, not HR and not the manager, sees who answered what. Results are averages and comments, and they only show once at least three people have answered.',
  },
  {
    q: 'Can we write our own questions?',
    a: 'Yes. Start from a template or a blank page: 1–5 ratings, written answers, multiple choice and yes or no, each for the employee, the manager or both.',
  },
  {
    q: 'How does a raise reach payroll?',
    a: "An approved raise is written to the person's pay rate on its start date. With your payroll connected, owners also get a reminder to update the rate there.",
  },
  {
    q: 'Does it work on phones?',
    a: 'Yes. Self reviews, teammate feedback and acknowledgements happen in the Fork app on iOS and Android, where people also see their check-ins and goals. Cycles and templates are set up on the web.',
  },
]

const kindChip = (q: (typeof sampleQuestions)[number]) => {
  if (q.kind === 'rating') return <RatingDots value={0} size={6} />
  return (
    <span className="rounded-full bg-warm-100 px-2 py-0.5 text-[11px] font-medium text-warm-600">{q.kind === 'text' ? 'Written' : 'Yes / no'}</span>
  )
}

export default function PerformancePage() {
  const jsonLd = [
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
    },
    {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: 'Products', item: 'https://forkhr.com/products' },
        { '@type': 'ListItem', position: 2, name: 'Performance', item: 'https://forkhr.com/performance' },
      ],
    },
  ]

  return (
    <main className="pt-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />

      <Hero
        crumb={{ label: 'Products', href: '/products', current: 'Performance' }}
        plan="pro"
        title="Reviews written from the record, not from memory"
        lede="Fork already knows who showed up on time, covered shifts and finished their training. Reviews start themselves, take minutes on a phone, and a raise lands on the pay rate."
        registerHref={signUp}
        secondaryHref="#record"
        secondaryLabel="How it works"
        note={`Part of ${pro.name}, $${pro.price} per location · unlimited employees · improvement plans on ${premium.name}`}
        aside={
          <Window title="Fork · Performance · Maya Chen">
            <PerformancePreview />
          </Window>
        }
      />

      {/* The record */}
      <section id="record" className="scroll-mt-24 border-b border-warm-100">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid items-end gap-6 md:grid-cols-[1.2fr_1fr]">
            <SectionHeading eyebrow="The record" title="Every answer sits next to the facts" lede="Reviews pull in what Fork already keeps for the period. Nobody types it in, and nobody has to remember March." />
            <p className="text-[15px] leading-relaxed text-warm-500 md:pb-1.5">
              Most review tools start from a blank page. Fork runs the schedule, the time clock, the checklists and the training, so the evidence is already there.
            </p>
          </div>
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-warm-200 bg-warm-200 sm:grid-cols-2 lg:grid-cols-3">
            {record.map((r) => (
              <div key={r.name} className="flex items-start gap-3.5 bg-white p-6">
                <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-forest-50 text-forest-600">{r.icon}</span>
                <div>
                  <h3 className="text-[15px] font-semibold text-warm-950">{r.name}</h3>
                  <p className="mt-1 text-[14px] leading-relaxed text-warm-500">{r.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="mt-6 flex items-start gap-2 text-sm text-warm-500">
            <Lock className="mt-0.5 h-3.5 w-3.5 shrink-0 text-warm-400" />
            Employees see their own record only once the review is shared. Conduct and shift notes stay with managers.
          </p>
        </div>
      </section>

      {/* How a review runs */}
      <section id="how" className="scroll-mt-24 border-b border-warm-100 bg-warm-50">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid items-center gap-14 lg:grid-cols-[1.25fr_1fr] lg:gap-20">
            <div>
              <SectionHeading eyebrow="How a review runs" title="Start to raise, without a single reminder from you" lede="Fork opens it, nudges whoever is late, and tells you when it is your turn." />
              <ol className="mt-10">
                {steps.map((s, i) => (
                  <li key={s.title} className="relative grid grid-cols-[32px_1fr] gap-4 pb-7 last:pb-0">
                    {i < steps.length - 1 && <span aria-hidden="true" className="absolute left-[15.5px] top-8 bottom-0 w-px bg-warm-200" />}
                    <span className="relative z-10 inline-flex h-8 w-8 items-center justify-center rounded-full border border-warm-200 bg-white text-[13px] font-semibold tabular-nums text-warm-950">{i + 1}</span>
                    <div className="pt-1">
                      <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                        <h3 className="text-[16px] font-semibold text-warm-950">{s.title}</h3>
                        <Pill tone={s.tone} className="text-[10.5px]">
                          {s.status}
                        </Pill>
                      </div>
                      <p className="mt-1 text-[15px] leading-relaxed text-warm-600">{s.desc}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
            <div className="flex justify-center">
              <Phone>
                <ReviewPhonePreview />
              </Phone>
            </div>
          </div>
        </div>
      </section>

      {/* Cycles and templates */}
      <section id="cycles" className="scroll-mt-24 border-b border-warm-100">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <SectionHeading eyebrow="Cycles & templates" title="Set it up once. Reviews keep coming." lede="Three kinds of cycle, and templates written for people who work shifts." />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {cycles.map((c) => (
              <div key={c.name} className="surface flex flex-col p-6">
                <div className="flex items-center gap-2.5">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-warm-100 text-warm-700">{c.icon}</span>
                  <h3 className="text-base font-semibold text-warm-950">{c.name}</h3>
                </div>
                <p className="mt-3 flex-1 text-[14px] leading-relaxed text-warm-600">{c.desc}</p>
                <div className="mt-5 rounded-lg bg-warm-50 px-3 py-2 text-[12.5px] font-medium text-warm-600 ring-1 ring-warm-100">{c.example}</div>
              </div>
            ))}
          </div>

          <div className="mt-16 grid items-start gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
            <div>
              <h3 className="text-2xl font-semibold tracking-tight text-warm-950">Questions a shift manager can answer</h3>
              <p className="mt-3 text-[15px] leading-relaxed text-warm-600">
                Start from Fork&apos;s templates and change anything. Each question is a rating, a written answer, a choice or a yes or no, for the employee, the manager or both.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {starters.map((t) => (
                  <span key={t} className="rounded-full border border-warm-200 bg-white px-3 py-1.5 text-[13px] font-medium text-warm-700">
                    {t}
                  </span>
                ))}
              </div>
            </div>
            <div className="surface overflow-hidden shadow-[0_24px_60px_-34px_rgba(27,26,25,0.35)]">
              <div className="flex items-center justify-between border-b border-warm-100 px-5 py-3.5">
                <div>
                  <div className="text-[14px] font-semibold text-warm-950">90-day review</div>
                  <div className="text-[12px] text-warm-500">Fork template · end of probation</div>
                </div>
                <span className="rounded-full bg-warm-100 px-2.5 py-1 text-[11px] font-semibold text-warm-600">8 questions</span>
              </div>
              <ul>
                {sampleQuestions.map((q) => (
                  <li key={q.text} className="flex items-center gap-4 border-b border-warm-100 px-5 py-3 last:border-b-0">
                    <span className="min-w-0 flex-1 text-[13.5px] leading-snug text-warm-800">{q.text}</span>
                    {q.who && <span className="hidden shrink-0 text-[11px] text-warm-400 sm:inline">{q.who}</span>}
                    <span className="shrink-0">{kindChip(q)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Feedback */}
      <section id="feedback" className="relative scroll-mt-24 overflow-hidden bg-warm-950">
        <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
            <div className="max-w-lg">
              <span className="eyebrow text-lime-accent">Feedback</span>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">Honest feedback, from people who are safe to give it</h2>
              <p className="mt-5 text-lg leading-relaxed text-warm-400">Small teams make anonymity hard. Fork builds the safeguards in.</p>
              <dl className="mt-10 space-y-6">
                {[
                  { title: 'The people who work beside them', desc: 'A reviewer can ask up to eight teammates. The person reviewed never sees who was asked or what they said.' },
                  { title: 'The team on its manager', desc: 'Everyone who reports to a manager answers about them. Nobody sees who answered what, not HR and not the manager.' },
                  { title: 'A floor before anything shows', desc: 'Results only appear once three people have answered, so no answer can be traced.' },
                ].map((c) => (
                  <div key={c.title} className="border-l-2 border-warm-800 pl-5">
                    <dt className="text-[15px] font-semibold text-white">{c.title}</dt>
                    <dd className="mt-1 text-[15px] leading-relaxed text-warm-400">{c.desc}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <Window title="Fork · Performance · Manager feedback" tone="dark">
              <ManagerFeedbackPreview />
            </Window>
          </div>
        </div>
      </section>

      <FeatureRow
        id="check-ins"
        eyebrow="Check-ins, goals & notes"
        plan="pro"
        title="The months between reviews count too"
        lede="Book 1:1s with talking points and action items. Set goals Fork measures for you."
        bullets={['Goals from the record: on-time clock-ins, shifts, tasks, SOP checks', 'Shared notes, and private ones for managers', 'All of it beside the next review']}
        preview={<CheckInPreview />}
        previewTitle="Fork · Performance · Check-in"
      />

      {/* Raises */}
      <section id="raises" className="scroll-mt-24 border-b border-warm-100 bg-warm-50">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="eyebrow">Raises</span>
                <PlanBadge tier="pro" />
              </div>
              <h2 className="mt-4 text-3xl font-semibold tracking-tight text-warm-950 md:text-4xl">From the review to the paycheck</h2>
              <p className="mt-4 text-lg leading-relaxed text-warm-600">No spreadsheet in between, no rate someone forgets to change.</p>
            </div>
            <ol className="grid gap-3 sm:grid-cols-3">
              {[
                { icon: <BadgeCheck className="h-4 w-4" />, t: 'Proposed', d: 'With the review, by the manager who wrote it.' },
                { icon: <Wallet className="h-4 w-4" />, t: 'Approved', d: 'By the owner, or anyone you let approve raises.' },
                { icon: <CalendarCheck className="h-4 w-4" />, t: 'On the pay rate', d: 'From its start date. With payroll connected, owners get a reminder.' },
              ].map((s, i) => (
                <li key={s.t} className="surface relative p-5">
                  <div className="flex items-center justify-between">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-ok-50 text-ok-700">{s.icon}</span>
                    <span className="text-[12px] font-medium tabular-nums text-warm-400">0{i + 1}</span>
                  </div>
                  <h3 className="mt-4 text-[15px] font-semibold text-warm-950">{s.t}</h3>
                  <p className="mt-1 text-[13.5px] leading-relaxed text-warm-500">{s.d}</p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <FeatureRow
        id="improvement-plans"
        flip
        eyebrow="Improvement plans"
        plan="premium"
        title="A fair, written chance to turn things around"
        lede="What is expected, how it is measured, the support on offer and the dates you will check in."
        bullets={['Read and acknowledged on their phone', 'Checkpoints with reminders', 'Linked to reviews, violations and termination records']}
        preview={<PlanPreview />}
        previewTitle="Fork · Performance · Improvement plan"
      />

      {/* Reports */}
      <section className="border-b border-warm-100">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:gap-12">
            <div className="shrink-0 md:max-w-[340px]">
              <div className="flex flex-wrap items-center gap-3">
                <span className="eyebrow">Reports</span>
                <PlanBadge tier="pro" />
              </div>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-warm-950">Who is growing, who is stuck, which reviews are late</h2>
              <p className="mt-2 text-sm leading-relaxed text-warm-500">By location, position or reviewer.</p>
            </div>
            <div className="flex flex-1 flex-wrap gap-2 md:border-l md:border-warm-200 md:pl-12">
              {reports.map((r) => (
                <span key={r} className="rounded-full border border-warm-200 bg-white px-3.5 py-1.5 text-[13px] font-medium text-warm-700">
                  {r}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-warm-100 bg-warm-50">
        <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
          <h2 className="mb-10 text-3xl font-semibold tracking-tight text-warm-950 md:text-4xl">Questions about performance</h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={faq.q} value={`faq-${i}`} className="border-warm-200">
                <AccordionTrigger className="py-5 text-left text-base font-medium text-warm-950 hover:text-warm-600 hover:no-underline">{faq.q}</AccordionTrigger>
                <AccordionContent className="text-[15px] leading-relaxed text-warm-600">{faq.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <Link href="/pricing" className="mt-8 inline-flex items-center gap-1.5 text-[15px] font-medium text-forest-600 hover:text-forest-700">
            Compare every plan
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <CtaSection
        eyebrow={pro.name}
        title="Review the team with the facts"
        lede={`Performance is part of ${pro.name}: $${pro.price} per location a month, unlimited employees.`}
        registerHref={signUp}
      />
    </main>
  )
}
