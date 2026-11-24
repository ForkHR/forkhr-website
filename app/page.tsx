import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, LockKeyhole, Mail, Monitor, MousePointerClick, ShieldCheck, Smartphone, Store, Landmark, Users } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Backdrop from '@/components/visual/Backdrop'
import GradientStage from '@/components/visual/GradientStage'
import SectionHeading from '@/components/marketing/SectionHeading'
import Segments from '@/components/marketing/Segments'
import PricingTeaser from '@/components/marketing/PricingTeaser'
import CtaSection from '@/components/marketing/CtaSection'
import DayTimeline, { type DayStop } from '@/components/marketing/DayTimeline'
import ProductSuite from '@/components/marketing/ProductSuite'
import CalendarDay from '@/components/marketing/CalendarDay'
import SauceTasks from '@/components/marketing/SauceTasks'
import FeatureGrid from '@/components/marketing/FeatureGrid'
import StoreBadges from '@/components/marketing/StoreBadges'
import { Phone, SauceChatPreview, SchedulePreview, SopsPreview, VendorChatPreview } from '@/components/previews'
import { SauceMark } from '@/components/previews/sauceBits'
import { CTA_DEMO, CTA_PRIMARY, DEMO_PATH, REGISTER_URL } from '@/lib/site'

/*
 * The home page, for cafés, led by Sauce (2026-11-23, the owner picked hero "E" of the sketches on
 * https://claude.ai/artifact/XQqaJTdSdXuBKbepuVfMud and asked for the rest of the site to follow).
 * The story in order: you ask Sauce (the hero, then what it can do and why it is safe), it lands on
 * the calendar and the team hears in the chat, a day at a café, everything behind it, pricing.
 * Not here any more, on purpose: the wholesale and service-call spotlights (For suppliers has them),
 * the new-hire story (the Hiring page), the old assistant band, and the "10 hrs/wk" figures, which no
 * source backed.
 */
const TITLE = 'Fork — The café app you can talk to'
const DESCRIPTION =
  'Fork runs your café: schedules and timecards, checklists, vendor orders, the team chat and one calendar for all of it. Ask Sauce, its AI assistant, and it gets the shift, the order or the write-up ready for you to confirm.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/' },
  openGraph: { title: TITLE, description: DESCRIPTION, url: 'https://forkhr.com', images: ['/og-image.png'], type: 'website' },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION, images: ['/og-image.png'] },
}

// One Tuesday at a café, in the order it happens. Times match the demos (the 6:58 punch on the
// timecards demo, the 8:12 → 8:19 dairy thread).
const day: DayStop[] = [
  { kind: 'moment', time: '6:58 AM', app: 'Timecards', where: 'Main St', text: 'Maya Chen clocked in on the counter tablet.', tag: 'On time', tone: 'ok' },
  {
    kind: 'feature',
    time: '7:00 AM',
    plan: 'premium',
    title: 'The opening checklist starts with the shift',
    lede: "Alarm, walk-in temperature, a photo of the line, the float. On the opener's phone, the same way every morning.",
    bullets: ['Opening, closing, temperature and waste logs', 'A failed check schedules a recheck', 'Reports on what was missed, and where'],
    preview: <SopsPreview />,
    previewTitle: 'Fork · SOPs · Opening checklist',
    frame: 'phone',
    href: '/sops',
    hrefLabel: 'Explore SOPs',
  },
  {
    kind: 'feature',
    time: '8:12 AM',
    plan: 'free',
    title: 'Six more gallons of milk, sorted in seven minutes',
    lede: "One chat per vendor, next to its orders. Bluebird isn't on Fork, so the message went out as an email and their reply came back here.",
    bullets: ['One-time and standing orders', 'Receive, log issues, request credits', 'Free, with unlimited vendors'],
    preview: <VendorChatPreview />,
    previewTitle: 'Fork · Chat · Bluebird Dairy',
    href: '/supply',
    hrefLabel: 'Explore supply',
  },
  { kind: 'moment', time: '11:40 AM', app: 'Feed', where: 'All locations', text: '12 of 14 people confirmed they read the new closing procedure.', tag: '12 of 14', tone: 'brand' },
  { kind: 'moment', time: '12:30 PM', app: 'Sauce', where: 'Main St', text: 'Maya is sick tomorrow. One message to Sauce, one tap, and Luis has the opening shift.', tag: 'Saved', tone: 'ok' },
  { kind: 'moment', time: '2:00 PM', app: 'Reminders', where: 'Main St', text: 'Jordan Lee got Shift in 1 hour for the 3:00 PM close. Nobody had to text.', tag: 'Sent', tone: 'neutral' },
  { kind: 'moment', time: '3:05 PM', app: 'Schedule', where: 'Main St', text: "Luis traded Saturday's close with Priya. Approved in one tap.", tag: 'Approved', tone: 'ok' },
  {
    kind: 'feature',
    time: '4:10 PM',
    plan: 'essential',
    title: 'Next week, published before the dinner rush',
    lede: 'Drag shifts onto the week and watch labor cost as you go. Publish once and every phone gets it.',
    bullets: ['Open shifts, trades and availability', 'Kiosk, phone or GPS clock-in', 'Labor cost against Square sales'],
    preview: <SchedulePreview />,
    previewTitle: 'Fork · Schedule · Main St',
    href: '/products#schedule',
    hrefLabel: 'See scheduling',
  },
  { kind: 'moment', time: '5:12 PM', app: 'Surprise bags', where: 'Main St', text: 'Sam showed the code K7RT and took home the two pastry bags reserved at 2:18.', tag: 'Picked up', tone: 'ok' },
  { kind: 'moment', time: '10:12 PM', app: 'SOPs', where: 'Main St', text: 'Closing checklist done four minutes early. The till matches.', tag: 'Done', tone: 'ok' },
]

const trust = [
  { icon: <MousePointerClick className="h-5 w-5" />, title: 'Nothing happens until you confirm', desc: 'Sauce gets it ready on a card. Only your tap places the order or saves the shift.' },
  { icon: <Users className="h-5 w-5" />, title: 'It follows each person’s job', desc: 'A barista can ask for time off. Only a manager can move someone’s shift.' },
  { icon: <LockKeyhole className="h-5 w-5" />, title: 'Only your café’s data', desc: 'It reads what the person asking could open themselves, and nothing from anyone else.' },
  { icon: <ShieldCheck className="h-5 w-5" />, title: 'Drafts stay drafts', desc: 'Shifts, write-ups and policies it writes are drafts until you publish them.' },
]

const integrations = [
  { icon: <Store className="h-5 w-5" />, title: 'Square', desc: 'Sales synced every 20 minutes' },
  { icon: <Landmark className="h-5 w-5" />, title: 'Stripe', desc: 'Card and bank payments, paid out to you' },
  { icon: <Mail className="h-5 w-5" />, title: 'Email', desc: 'Vendors reply from their inbox' },
  { icon: <Smartphone className="h-5 w-5" />, title: 'iOS & Android', desc: 'The team on their own phones' },
  { icon: <Monitor className="h-5 w-5" />, title: 'Web & kiosk', desc: 'Any browser. Any tablet as the clock' },
]

const steps = [
  { step: '01', title: 'Add your shops and vendors', description: 'Import from a spreadsheet. Ordering from vendors is free from day one.' },
  { step: '02', title: 'Invite the team', description: 'They install the app. The first schedule lands on their phones.' },
  { step: '03', title: 'Start asking Sauce', description: 'Shifts, orders, write-ups, time off. Turn on checklists from templates when you are ready.' },
]

export default function Home() {
  return (
    <main className="pt-16">
      {/* Hero: a manager texting Sauce */}
      <section className="relative overflow-hidden border-b border-warm-100">
        <Backdrop />
        <div className="relative mx-auto max-w-6xl px-6 pb-14 pt-12 md:pb-20 md:pt-20">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_1fr] lg:gap-14">
            <div className="relative z-10">
              <Link href="/ai-assistant" className="group inline-flex items-center gap-2.5 rounded-full border border-warm-200 bg-white/80 py-1 pl-1 pr-3 text-sm shadow-[0_1px_2px_rgba(27,26,25,0.05)] transition-colors hover:border-warm-300">
                <SauceMark size={24} title={null} />
                <span className="font-medium text-warm-700 group-hover:text-warm-950">Meet Sauce, your café’s AI assistant</span>
                <ArrowRight className="h-3.5 w-3.5 text-warm-400 transition-transform group-hover:translate-x-0.5" />
              </Link>

              <h1 className="mt-7 text-5xl font-semibold leading-[1.02] tracking-[-0.02em] text-warm-950 md:text-6xl lg:text-[4.25rem]">The café app you can talk to.</h1>

              <p className="mt-6 max-w-xl text-lg leading-relaxed text-warm-600 md:text-xl">
                Tell Sauce what needs doing, the way you’d text a manager. It gets the shift, the order or the write-up ready, and you tap Confirm. Behind it, Fork runs your schedule, checklists, vendor orders and team chat.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-4">
                <Link href={REGISTER_URL} target="_blank">
                  <Button size="lg" className="h-11 px-6 text-base">
                    {CTA_PRIMARY}
                    <ArrowRight className="ml-1.5 h-4 w-4" />
                  </Button>
                </Link>
                <Link href={DEMO_PATH}>
                  <Button variant="outline" size="lg" className="h-11 px-6 text-base">
                    {CTA_DEMO}
                  </Button>
                </Link>
              </div>

              <p className="mt-5 text-sm text-warm-500">Sauce comes with Premium · Ordering from vendors is free · Team plans from $39 per location</p>

              <StoreBadges size="sm" className="mt-7" />
            </div>

            <div className="on-gradient relative lg:static">
              <GradientStage />
              <Phone className="relative">
                <SauceChatPreview />
              </Phone>
            </div>
          </div>

          <div className="mt-16 border-t border-warm-100 pt-8">
            <Segments label="Built for" />
          </div>
        </div>
      </section>

      {/* What to ask */}
      <section id="sauce" className="scroll-mt-24 border-b border-warm-100">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <SectionHeading title="One sentence instead of five screens" lede="Pick one. Sauce makes the card the app would make, with the right people, days and items already filled in." />
          <div className="mt-12 md:mt-14">
            <SauceTasks />
          </div>
          <p className="mt-8 text-[15px] leading-relaxed text-warm-500">
            Also: timecards, events, checklists and logs, new employees, sales orders, service calls, FAQs and policies. And questions, like who is working Saturday or what is low on stock.
          </p>
          <div className="mt-14 border-t border-warm-100 pt-12">
            <FeatureGrid columns={4} items={trust} />
          </div>
        </div>
      </section>

      {/* Where it lands: one day of the calendar, up close (sketch H, the owner's pick of 2026-11-23, after a week grid beside a chat window and then a week grid with a chat card were "crowded" and "so bad") */}
      <section id="calendar" className="scroll-mt-24 border-b border-warm-100 bg-warm-50">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 py-20 md:py-28 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-16">
          <SectionHeading title="It lands where everyone looks" lede="What Sauce makes goes on the calendar, next to the shifts, checklists and deliveries already there. The people it touches hear about it in the chat." />
          <CalendarDay />
        </div>
      </section>

      {/* A day on Fork */}
      <section id="day" className="scroll-mt-24 border-b border-warm-100">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <SectionHeading title="Everything between opening and closing" lede="One café, one Tuesday, from the first clock-in to the closing checklist. Every stop is a real screen in Fork." />
          <div className="mt-14 md:mt-16">
            <DayTimeline stops={day} />
          </div>
        </div>
      </section>

      <ProductSuite />

      {/* How it starts */}
      <section className="border-b border-warm-100">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-24">
          <SectionHeading title="Up and running in an afternoon" />
          <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
            {steps.map((s) => (
              <div key={s.step} className="border-t-2 border-warm-950 pt-6">
                <span className="text-[13px] font-medium tabular-nums text-warm-400">{s.step}</span>
                <h3 className="mb-2 mt-2 text-lg font-semibold text-warm-950">{s.title}</h3>
                <p className="text-[15px] leading-relaxed text-warm-600">{s.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-16 border-t border-warm-100 pt-12 md:mt-20">
            <SectionHeading title="No new hardware. Nobody forced to sign up." />
            <FeatureGrid className="mt-10" columns={5} items={integrations} />
          </div>
        </div>
      </section>

      <PricingTeaser />
      <CtaSection title="Tell Sauce what your café needs" lede="Ordering from vendors is free. Team plans from $39 per location, and Sauce comes with Premium." />
    </main>
  )
}
