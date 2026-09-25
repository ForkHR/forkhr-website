import type { Metadata } from 'next'
import {
  AlertTriangle,
  Calendar,
  Camera,
  CheckSquare,
  Clock,
  FileText,
  Flame,
  Hash,
  Link2,
  ListChecks,
  PenLine,
  Play,
  QrCode,
  Repeat,
  ScanLine,
  Target,
  Thermometer,
  Timer,
  Trash2,
  Workflow,
  Wrench,
} from 'lucide-react'
import Hero from '@/components/marketing/Hero'
import SectionHeading from '@/components/marketing/SectionHeading'
import CtaSection from '@/components/marketing/CtaSection'
import PlanBadge from '@/components/marketing/PlanBadge'
import { Phone, SopsPreview, Window } from '@/components/previews'

const description =
  'SOPs in Fork: boards, procedures and runs for opening and closing checklists, temperature checks, waste and cash logs, equipment care, incidents and production. Scheduled, triggered by shifts or started from a QR code, and reported by location.'

export const metadata: Metadata = {
  title: 'SOPs & Checklists — Fork | Opening, closing, temperature, waste and equipment logs',
  description,
  alternates: { canonical: '/sops' },
  openGraph: {
    title: 'SOPs & Checklists — Fork',
    description,
    url: 'https://forkhr.com/sops',
    images: ['/og-image.png'],
    type: 'website',
  },
  twitter: { card: 'summary_large_image', title: 'SOPs & Checklists — Fork', description, images: ['/og-image.png'] },
}

const pieces = [
  {
    title: 'Board',
    desc: 'Owns the status flow and, if you want, the things it is about: fridges, machines, products. Opening & closing, Fridges & freezers, Equipment, Incidents are boards.',
    icon: <ListChecks className="h-5 w-5" />,
  },
  {
    title: 'Procedure',
    desc: 'The SOP itself: ordered steps, who does it, when it starts, what counts as a fail and what happens then. Versioned, so old runs keep the steps they were done with.',
    icon: <FileText className="h-5 w-5" />,
  },
  {
    title: 'Run',
    desc: 'One execution on a phone: step results, photos, temperatures, signatures and timestamps, moving through the board\'s statuses until it is complete.',
    icon: <Play className="h-5 w-5" />,
  },
]

const kinds = [
  { icon: <Workflow className="h-4 w-4" />, name: 'Workflow', hint: 'Work that moves through statuses: production, requests, approvals, incidents.', views: 'Board · timeline · list · table · calendar' },
  { icon: <ListChecks className="h-4 w-4" />, name: 'Log', hint: 'Each run is a record, no progression: waste, closeouts, temperature checks.', views: 'Table' },
  { icon: <Repeat className="h-4 w-4" />, name: 'Routine', hint: 'Recurring scheduled checks: cleaning, equipment care, opening and closing.', views: 'Calendar · list · board' },
  { icon: <Target className="h-4 w-4" />, name: 'Project', hint: 'One-off work where the time each stage takes matters: tasks, policy reviews.', views: 'Board · timeline · list · table' },
]

const templates = ['Shift routines', 'Temperature checks', 'Waste', 'Cash log', 'Cleaning', 'Equipment care', 'Incident tracker', 'Batch production', 'Coffee bar', 'Menu items', 'Requests', 'Expenses', 'Projects']

const moved = [
  {
    icon: <Trash2 className="h-5 w-5" />,
    was: 'Waste control',
    now: 'Waste log board',
    desc: 'Log the item, quantity and reason in seconds. Cost comes from the supply product, and the SOP waste report shows it by location, reason and item.',
  },
  {
    icon: <Wrench className="h-5 w-5" />,
    was: 'Maintenance logs',
    now: 'Equipment care board',
    desc: 'Machines are items with a serial number and a photo. Daily cleans and weekly inspections run on a schedule; anything marked out of service raises an issue.',
  },
  {
    icon: <AlertTriangle className="h-5 w-5" />,
    was: 'Incident reports',
    now: 'Incident tracker board',
    desc: 'Report what happened with severity and photos, then move it through review to resolved. Every status change is on the run with who and when.',
  },
]

const stepTypes = [
  { icon: <CheckSquare className="h-4 w-4" />, name: 'Checkbox', desc: 'Done or not, optionally required' },
  { icon: <Hash className="h-4 w-4" />, name: 'Number with a range', desc: 'Temperature, weight, count. Out of range fails the run' },
  { icon: <ListChecks className="h-4 w-4" />, name: 'Choice', desc: 'Good / Needs attention / Out of service' },
  { icon: <Camera className="h-4 w-4" />, name: 'Photo', desc: 'One or several, with a minimum' },
  { icon: <PenLine className="h-4 w-4" />, name: 'Signature', desc: 'Drawn on the phone, kept on the run' },
  { icon: <Timer className="h-4 w-4" />, name: 'Timer', desc: 'A target time and the elapsed time' },
  { icon: <ScanLine className="h-4 w-4" />, name: 'Scan', desc: 'A QR or barcode, matched to the item' },
  { icon: <FileText className="h-4 w-4" />, name: 'Instruction', desc: 'How to do it, with formatting' },
  { icon: <Flame className="h-4 w-4" />, name: 'Critical control point', desc: 'A fail schedules a recheck and blocks completion until a corrective action is recorded' },
]

const triggers = [
  { icon: <Calendar className="h-4 w-4" />, name: 'On a schedule', desc: 'Daily, weekly or monthly at a time, or every N days after the last completion.' },
  { icon: <Clock className="h-4 w-4" />, name: 'When a shift starts or ends', desc: 'Per location, optionally per job, with an offset. The opener gets the opening checklist.' },
  { icon: <Link2 className="h-4 w-4" />, name: 'When another run finishes', desc: 'Morning bake done? Start "Restock pastry case".' },
  { icon: <Thermometer className="h-4 w-4" />, name: 'When a date is reached', desc: 'Use-by dates on items start the check before they lapse.' },
  { icon: <QrCode className="h-4 w-4" />, name: 'From a QR code', desc: 'Every item prints a code. Scan the fridge, start its temp check.' },
  { icon: <Play className="h-4 w-4" />, name: 'By hand', desc: 'From the board, the procedure or the item, when something comes up.' },
]

const reports = ['Overview', 'Routines', 'Waste', 'Cash movement', 'Projects', 'Expenses', 'Staff']

export default function SopsPage() {
  return (
    <main className="pt-16">
      <Hero
        crumb={{ label: 'Products', href: '/products', current: 'SOPs & checklists' }}
        plan="premium"
        title="Procedures your team actually follows"
        lede="Opening and closing, temperature checks, waste and cash logs, equipment care, incidents and production, run the same way on every shift and reported by location. Boards, procedures and runs, on a phone."
        secondaryHref="#how"
        secondaryLabel="How it works"
        aside={
          <Window title="Fork · SOPs · Opening checklist">
            <SopsPreview />
          </Window>
        }
      />

      {/* Pieces */}
      <section id="how" className="scroll-mt-24 border-b border-warm-100">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <SectionHeading eyebrow="How it fits together" title="Three pieces, one engine" lede="Clean the ice machine and bake a batch of sourdough are the same object with different steps and statuses. Nothing is hard-coded." />
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-warm-200 bg-warm-200 md:grid-cols-3">
            {pieces.map((p, i) => (
              <div key={p.title} className="bg-white p-7">
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-forest-50 text-forest-600">{p.icon}</span>
                  <span className="text-[13px] font-medium tabular-nums text-warm-400">0{i + 1}</span>
                </div>
                <h3 className="mt-4 text-lg font-semibold text-warm-950">{p.title}</h3>
                <p className="mt-1.5 text-[15px] leading-relaxed text-warm-600">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Board kinds */}
      <section id="boards" className="scroll-mt-24 border-b border-warm-100 bg-warm-50">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid items-start gap-12 md:grid-cols-[1fr_1.4fr] md:gap-16">
            <div className="md:sticky md:top-32">
              <SectionHeading eyebrow="Boards" title="Four kinds of board, every view you need" lede="Pick a kind and the right views come with it. Start from a template or build your own statuses, colours and rules." />
              <div className="mt-8 flex flex-wrap gap-2">
                {templates.map((t) => (
                  <span key={t} className="rounded-full border border-warm-200 bg-white px-3 py-1.5 text-[13px] font-medium text-warm-600">
                    {t}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-sm text-warm-400">Starter templates. Every step, status and schedule stays editable.</p>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              {kinds.map((k) => (
                <div key={k.name} className="surface surface-hover p-6">
                  <div className="flex items-center gap-2.5">
                    <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-warm-100 text-warm-700">{k.icon}</span>
                    <h3 className="text-base font-semibold text-warm-950">{k.name}</h3>
                  </div>
                  <p className="mt-3 text-[14px] leading-relaxed text-warm-600">{k.hint}</p>
                  <p className="mt-3 text-[12px] text-warm-400">{k.views}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Where the old products went */}
      <section id="logs" className="scroll-mt-24 border-b border-warm-100">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <SectionHeading
            eyebrow="Waste, maintenance and incidents"
            title="Now boards, not separate products"
            lede="Waste control, maintenance logs and incident reports used to be three apps. They are three boards now, so they share steps, triggers, photos and reports with everything else you run."
          />
          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {moved.map((m) => (
              <div key={m.was} className="surface p-6">
                <div className="flex items-center gap-2 text-[12px] font-medium text-warm-400">
                  <span className="line-through">{m.was}</span>
                  <span>→</span>
                  <span className="text-forest-600">{m.now}</span>
                </div>
                <div className="mt-4 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-warm-100 text-warm-700">{m.icon}</div>
                <h3 className="mt-3 text-base font-semibold text-warm-950">{m.now}</h3>
                <p className="mt-1.5 text-[14px] leading-relaxed text-warm-600">{m.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps */}
      <section className="border-b border-warm-100 bg-warm-50">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <SectionHeading eyebrow="Steps" title="What a step can ask for" lede="Steps can be required, conditional on an earlier answer, restricted to a job, or marked as evidence. A pre-check block can gate the rest of the run." />
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-warm-200 bg-warm-200 sm:grid-cols-2 lg:grid-cols-3">
            {stepTypes.map((s) => (
              <div key={s.name} className="flex items-start gap-3 bg-white p-5">
                <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-forest-50 text-forest-600">{s.icon}</span>
                <div>
                  <h3 className="text-[15px] font-semibold text-warm-950">{s.name}</h3>
                  <p className="mt-0.5 text-[13.5px] leading-relaxed text-warm-500">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Triggers + phone */}
      <section className="border-b border-warm-100">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
            <div>
              <SectionHeading eyebrow="Triggers" title="Runs start themselves" lede="You decide when a procedure is due. Fork creates the run, assigns it to a job or to whoever is on shift, and chases it when it is late." />
              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                {triggers.map((t) => (
                  <div key={t.name} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-warm-100 text-warm-700">{t.icon}</span>
                    <div>
                      <h3 className="text-[15px] font-semibold text-warm-950">{t.name}</h3>
                      <p className="mt-0.5 text-[14px] leading-relaxed text-warm-500">{t.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex justify-center">
              <Phone>
                <SopsPreview />
              </Phone>
            </div>
          </div>
        </div>
      </section>

      {/* Reports */}
      <section className="border-b border-warm-100 bg-warm-50">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:gap-12">
            <div className="shrink-0 md:max-w-[320px]">
              <div className="flex flex-wrap items-center gap-3">
                <span className="eyebrow">Reports</span>
                <PlanBadge tier="premium" />
              </div>
              <h2 className="mt-3 text-2xl font-semibold tracking-tight text-warm-950">What was missed, where, and what it cost</h2>
              <p className="mt-2 text-sm leading-relaxed text-warm-500">Seven SOP reports by location and period, printable and exportable as PDF, next to your labor and purchasing reports.</p>
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

      <CtaSection eyebrow="Premium" title="Run every shift the same way" lede="SOPs are part of Premium, together with courses, policies, contracts and the assistant. $129 per location per month, unlimited employees." />
    </main>
  )
}
