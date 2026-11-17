import type { Metadata } from 'next'
import { CalendarClock, Coffee, Users, AlarmClock } from 'lucide-react'
import Hero from '@/components/marketing/Hero'
import SectionHeading from '@/components/marketing/SectionHeading'
import FeatureRow from '@/components/marketing/FeatureRow'
import IllustrationFrame from '@/components/marketing/IllustrationFrame'
import CtaSection from '@/components/marketing/CtaSection'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { RemindersPreview, Window } from '@/components/previews'
import { APP_BLOCKER, REMINDERS } from '@/lib/illustrations'
import { registerUrl } from '@/lib/site'
import FeatureGrid from '@/components/marketing/FeatureGrid'

const description =
  'Reminders for hourly teams that read the schedule and the time clock: the evening before a shift, an hour before, a nudge to clock out, a break that is nearly over, and your own at any time, by push, email or an alarm that waits for an answer. A reminder can ask a question whose answer goes in your log.'

export const metadata: Metadata = {
  title: 'Reminders — Fork | Shift, clock-out and break reminders for hourly teams',
  description,
  alternates: { canonical: '/reminders' },
  openGraph: { title: 'Reminders on Fork', description, url: 'https://forkhr.com/reminders', images: ['/og-image.png'], type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Reminders on Fork', description, images: ['/og-image.png'] },
}

const [shift, alarm, question] = REMINDERS
const signUp = registerUrl({ use: 'workplace', plan: 'premium' })

// Operations → Reminders in the app (backend/utils/reminderRules.js, reminderEngine.js,
// reminderQuestions.js). The app blocker has its own page (app/app-blocker); the row here leads
// there. The starters go out on every plan that has shifts; changing them and writing your own is Premium. Not claimed: an alarm
// on a locked phone, buttons on the notification, Do Not Disturb (they need a store build of the
// phone app).
const triggers = [
  { icon: <CalendarClock className="h-4 w-4" />, title: 'Around a shift', desc: 'Before it starts, after it ends, or the evening before. Only if they have not clocked in, are still clocked in, or have had no break yet.' },
  { icon: <Coffee className="h-4 w-4" />, title: 'Around a break', desc: 'So long after a break starts on the time clock, and only if they are still on it.' },
  { icon: <AlarmClock className="h-4 w-4" />, title: 'At a set time', desc: "Days and a time on each shop's own clock, for whoever is on shift then or the people you pick." },
  { icon: <Users className="h-4 w-4" />, title: 'To the right people', desc: 'Narrow any reminder by location, by job or to people by name. Everyone reads their own shift in it.' },
]

const faqs = [
  { q: 'Which reminders come with every plan?', a: 'With Scheduling, on Essential and up, Fork sends Shift tomorrow, Shift in 1 hour and Time to clock out, exactly as written. On Premium you change them, switch them off, turn on the others and write your own.' },
  { q: 'Can employees change when they are reminded?', a: 'No, the company decides. A person can switch off only the reminders you mark as ones they may turn off.' },
  { q: 'Does the alarm ring on a locked phone?', a: 'Not yet. The alarm rings in Fork: open the app within 20 minutes and it is waiting. Send a push with it so the phone buzzes too.' },
  { q: 'What happens to the answer to a question?', a: "It is saved as an entry in the log or checklist the question came from, made by the person who answered and checked by that log's own rules." },
  { q: 'Who can set up reminders?', a: 'Owners, and the jobs you give Manage reminders. A manager of some locations writes reminders for those locations.' },
  { q: 'Is anyone reminded about a shift they called out of?', a: 'No. A shift marked sick, called out or no show gets nothing, and only published shifts are reminded at all.' },
]

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
}

export default function RemindersPage() {
  return (
    <main className="pt-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <Hero
        registerHref={signUp}
        crumb={{ label: 'Products', href: '/products', current: 'Reminders' }}
        plan="premium"
        title="Reminders that read the schedule and the clock"
        lede="Before a shift, after it and on a break, checking the time clock before nudging anyone. Write your own for any time, as a push, an email or an alarm that waits for an answer."
        secondaryHref="#shift-reminders"
        secondaryLabel="See a shift's reminders"
        note="Fork's shift and clock-out reminders come with Scheduling. Your own on Premium."
        aside={
          <Window title="Fork · Reminders">
            <RemindersPreview />
          </Window>
        }
      />

      <FeatureRow
        id="shift-reminders"
        badge="New"
        plan="essential"
        title="The evening before, and an hour before"
        lede="Three reminders go out from the day you publish a schedule: the shift tomorrow, the shift in an hour, and a nudge to clock out for anyone still on the clock. On Premium you change their words and times, or turn on clock-in, meal break and break reminders."
        bullets={['Only to whoever has the shift', 'Never for a shift marked sick, called out or no show', 'The clock-out nudge only if they are still clocked in']}
        preview={<IllustrationFrame illustration={shift} />}
        previewTitle={shift.title}
        frame="none"
      />

      <FeatureRow
        id="alarms"
        className="bg-warm-50"
        flip
        plan="premium"
        title="An alarm that waits for an answer"
        lede="Send a reminder as a push, an email, or an alarm that fills the screen in Fork and rings until someone answers. Every reminder keeps who it reached and what they pressed."
        bullets={['Clock out or Still working, right from the alarm', 'People switch off only the ones you allow', 'History day by day, for the last 60 days']}
        preview={<IllustrationFrame illustration={alarm} />}
        previewTitle={alarm.title}
        frame="none"
      />

      <FeatureRow
        id="questions"
        plan="premium"
        title="A question, answered into the log"
        lede="A reminder can ask one question from a log or a checklist, like Is the shop open? The first answer at a shop is saved as that log's entry, and the manager hears when nobody answers within 20 minutes."
        bullets={['One tap: Yes or No, or up to six answers', 'Whoever answers first answers for the shop', 'The entry follows the log’s own rules']}
        preview={<IllustrationFrame illustration={question} />}
        previewTitle={question.title}
        frame="none"
        href="/sops"
        hrefLabel="About logs and checklists"
      />

      <section id="when" className="scroll-mt-24 border-b border-warm-100 bg-warm-50">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <SectionHeading title="Around a shift, a break, or at a set time" lede="Up to forty of your own, each with its title, its message and the way it arrives. Blanks like the person's name and shift fill themselves in." />
          <FeatureGrid className="mt-12" columns={4} items={triggers} />
        </div>
      </section>

      <FeatureRow
        id="app-blocker"
        flip
        badge="New"
        plan="premium"
        title="Phones away on the floor"
        lede="Also in Operations: pick the kinds of apps, and they are blocked on your team's phones during shifts. Breaks are free, with a five-minute way out."
        bullets={['Phone, Messages, Maps, the camera and Fork are never blocked', 'Each person agrees to the notice on their own phone first']}
        preview={<IllustrationFrame illustration={APP_BLOCKER} />}
        previewTitle={APP_BLOCKER.title}
        frame="none"
        href="/app-blocker"
        hrefLabel="Explore the app blocker"
      />

      <section className="border-b border-warm-100 bg-warm-50">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid gap-12 md:grid-cols-[1fr_1.6fr] md:gap-16">
            <SectionHeading title="About reminders" lede="Anything else: support@forkhr.com" />
            <Accordion type="single" collapsible className="w-full border-t border-warm-100">
              {faqs.map((faq, i) => (
                <AccordionItem key={faq.q} value={`faq-${i}`} className="border-warm-100 last:border-b">
                  <AccordionTrigger className="py-5 text-left text-base font-medium text-warm-950 hover:text-warm-600 hover:no-underline">{faq.q}</AccordionTrigger>
                  <AccordionContent className="text-[15px] leading-relaxed text-warm-600">{faq.a}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      <CtaSection
        registerHref={signUp}
        title="Let Fork do the reminding"
        lede="Shift reminders come with Scheduling. Your own reminders, alarms and questions on Premium."
        secondaryHref="/pricing"
        secondaryLabel="Compare plans"
      />
    </main>
  )
}
