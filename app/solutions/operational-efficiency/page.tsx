import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, BarChart3, CheckCircle2, ClipboardCheck, Package, Thermometer, Timer, Trash2, Wrench } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Hero from '@/components/marketing/Hero'
import SectionHeading from '@/components/marketing/SectionHeading'
import CtaSection from '@/components/marketing/CtaSection'
import { ReportPreview, SopsPreview, Window } from '@/components/previews'
import { CTA_PRIMARY, REGISTER_URL } from '@/lib/site'

const description =
  'Run a tighter operation with SOPs for opening, closing, temperature and waste logs, stock counts that feed orders, and labor read against sales. Fork shows where the day leaks time and money.'

export const metadata: Metadata = {
  title: 'Restaurant Labor & Food Cost Control Software: SOPs, Stock Counts, Labor vs. Sales | Fork',
  description,
  alternates: { canonical: '/solutions/operational-efficiency' },
  openGraph: { title: 'Labor & Food Cost Control | Fork', description, url: 'https://forkhr.com/solutions/operational-efficiency', images: ['/og-image.png'], type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Labor & Food Cost Control | Fork', description, images: ['/og-image.png'] },
}

const stats = [
  { value: '25%', label: 'Less food waste', detail: 'Teams that log waste on every shift cut losses within the first month' },
  { value: '3×', label: 'Faster equipment fixes', detail: 'Issues raised from a routine get resolved faster than verbal reports' },
  { value: '40 min', label: 'Saved per manager per day', detail: 'Checklists, counts and orders on a phone replace walkthroughs and paper' },
]

const benefits = [
  {
    icon: <ClipboardCheck className="h-5 w-5" />,
    title: 'SOPs for every shift',
    desc: 'Opening and closing checklists that start when the shift does, with photos and counts where they matter. Managers see what was done, what was skipped and how late.',
  },
  {
    icon: <Thermometer className="h-5 w-5" />,
    title: 'Temperature and food safety logs',
    desc: 'Daily checks per fridge and freezer, started from a QR code on the door. Out of range fails the run, schedules a recheck and blocks completion until a corrective action is recorded.',
  },
  {
    icon: <Trash2 className="h-5 w-5" />,
    title: 'Waste logged in seconds',
    desc: 'Item, quantity, reason. Cost comes from the supply product, and the waste report shows where it goes by location, item and reason.',
  },
  {
    icon: <Wrench className="h-5 w-5" />,
    title: 'Equipment care routines',
    desc: 'Machines are items with a serial number and a photo. Daily cleans and weekly inspections run on a schedule; "out of service" raises an issue with the history attached.',
  },
  {
    icon: <Package className="h-5 w-5" />,
    title: 'Stock counts that become orders',
    desc: 'Count lists per storage area with par levels. Shortfalls turn into a suggested order for the right vendor, so nobody over-orders on a guess.',
  },
  {
    icon: <Timer className="h-5 w-5" />,
    title: 'Labor against the schedule and against sales',
    desc: 'Scheduled vs. actual hours catches early clock-ins and unplanned overtime. With Square connected, labor % by hour shows the shifts that lose money.',
  },
]

const savingsBreakdown = [
  { category: 'Waste reduction', annual: '$3,600', detail: '25% less food waste at an average location' },
  { category: 'Equipment care', annual: '$2,100', detail: 'Fewer emergency repairs, fewer repeat issues' },
  { category: 'Labor optimization', annual: '$5,400', detail: 'Fewer overtime hours, better-staffed slow hours' },
  { category: 'Manager time', annual: '$4,800', detail: '40 min a day × 250 working days' },
]

export default function OperationalEfficiencyPage() {
  return (
    <main className="pt-16">
      <Hero
        crumb={{ label: 'Solutions', href: '/solutions', current: 'Labor & food cost control' }}
        title="Cut labor and food costs without a spreadsheet"
        lede="Skipped checklists, unlogged waste, over-ordering and overtime cost more than they look. Fork puts procedures, counts and labor numbers on the phone of the person doing the work, so you see where the day leaks and fix it."
        secondaryHref="/sops"
        secondaryLabel="Explore SOPs"
        aside={
          <Window title="Fork · SOPs · Opening checklist">
            <SopsPreview />
          </Window>
        }
      />

      {/* Stats */}
      <section className="border-b border-warm-100 bg-warm-50">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <div className="grid items-center gap-12 md:grid-cols-[1.1fr_1fr] md:gap-20">
            <div>
              <div className="mb-4 text-6xl font-semibold leading-none tracking-tight text-warm-950 md:text-7xl">{stats[0].value}</div>
              <p className="max-w-md text-xl leading-relaxed text-warm-600">{stats[0].label}</p>
              <p className="mt-2 text-sm text-warm-400">{stats[0].detail}</p>
            </div>
            <div className="divide-y divide-warm-200/70">
              {stats.slice(1).map((stat) => (
                <div key={stat.label} className="flex items-baseline justify-between gap-6 py-5">
                  <div>
                    <p className="text-[15px] font-medium text-warm-950">{stat.label}</p>
                    <p className="mt-0.5 text-sm text-warm-500">{stat.detail}</p>
                  </div>
                  <div className="shrink-0 text-3xl font-semibold tracking-tight text-warm-950">{stat.value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="border-b border-warm-100">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid items-start gap-12 md:grid-cols-[1fr_1.5fr] md:gap-20">
            <div className="md:sticky md:top-28">
              <SectionHeading eyebrow="What you get" title="How Fork improves the day" lede="Every skipped step, warm fridge, wasted tray and idle hour is a cost. Fork records them where they happen and shows you the pattern." />
            </div>
            <div className="divide-y divide-warm-200/70">
              {benefits.map((b) => (
                <div key={b.title} className="flex items-start gap-5 py-6 first:pt-0 last:pb-0">
                  <div className="mt-0.5 shrink-0 text-forest-600">{b.icon}</div>
                  <div>
                    <h3 className="text-base font-semibold text-warm-950">{b.title}</h3>
                    <p className="mt-1 text-[15px] leading-relaxed text-warm-600">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Labor vs sales */}
      <section className="border-b border-warm-100 bg-warm-50">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1.25fr] lg:gap-16">
            <div>
              <SectionHeading eyebrow="Reports" title="See the hours that lose money" lede="Connect Square and Fork lines labor cost up against sales by hour, day and location. Sunday ran 34% labor? Now you know which two shifts to move." />
              <ul className="mt-6 space-y-2.5">
                {['Sales vs. labor with Square sales synced every 20 minutes', 'Scheduled vs. actual hours, hourly labor cost, employee hours', 'SOP reports: what was missed, waste, cash movement, expenses', 'Purchases and product usage by vendor and location'].map((b) => (
                  <li key={b} className="flex items-start gap-2.5">
                    <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-forest-500" />
                    <span className="text-[15px] text-warm-700">{b}</span>
                  </li>
                ))}
              </ul>
            </div>
            <Window title="Fork · Reports · Sales vs. labor">
              <ReportPreview />
            </Window>
          </div>
        </div>
      </section>

      {/* Savings */}
      <section className="border-b border-warm-100">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid items-start gap-12 md:grid-cols-[1fr_1.5fr] md:gap-20">
            <div className="md:sticky md:top-28">
              <SectionHeading eyebrow="ROI" title="Estimated annual savings per location" lede="Based on average improvements reported by teams using digital operations tools in food service, retail and hospitality." />
            </div>
            <div>
              <div className="divide-y divide-warm-200/70">
                {savingsBreakdown.map((row) => (
                  <div key={row.category} className="flex items-baseline justify-between gap-6 py-5 first:pt-0">
                    <div>
                      <p className="text-[15px] font-medium text-warm-950">{row.category}</p>
                      <p className="mt-0.5 text-sm text-warm-500">{row.detail}</p>
                    </div>
                    <div className="shrink-0 text-2xl font-semibold tracking-tight text-warm-950">
                      {row.annual}
                      <span className="text-sm font-normal text-warm-500">/year</span>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap items-center justify-between gap-4 border-t border-warm-950/20 pt-6">
                <div>
                  <div className="text-[13px] font-medium uppercase tracking-wider text-warm-400">Total estimated savings</div>
                  <div className="text-3xl font-semibold tracking-tight text-warm-950 md:text-4xl">
                    $15,900<span className="text-base font-normal text-warm-500">/year per location</span>
                  </div>
                </div>
                <Link href={REGISTER_URL} target="_blank">
                  <Button size="lg" className="h-11 px-6 text-base">
                    {CTA_PRIMARY}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Use cases */}
      <section className="border-b border-warm-100 bg-warm-50">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
          <div className="mb-8 flex items-center gap-3">
            <BarChart3 className="h-5 w-5 text-forest-600" />
            <h2 className="text-2xl font-semibold tracking-tight text-warm-950">Built for teams that run physical operations</h2>
          </div>
          <ul className="grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-4">
            {['Coffee shops & bakeries', 'Restaurants & cafés', 'Food distributors & commissaries', 'Retail stores', 'Hotels & hospitality', 'Gyms & studios', 'Grocery & markets', 'Franchises'].map((industry) => (
              <li key={industry} className="flex items-start gap-2.5">
                <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-forest-500" />
                <span className="text-[15px] text-warm-600">{industry}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <CtaSection title="Stop losing money to invisible costs" lede="Start on Free with your vendors and stock. Add SOPs and labor reports when you want the full picture." />
    </main>
  )
}
