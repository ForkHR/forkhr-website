import type { Metadata } from 'next'
import { Activity, BarChart3, BellRing, Users } from 'lucide-react'
import Hero from '@/components/marketing/Hero'
import SectionHeading from '@/components/marketing/SectionHeading'
import FeatureRow from '@/components/marketing/FeatureRow'
import IllustrationFrame from '@/components/marketing/IllustrationFrame'
import CtaSection from '@/components/marketing/CtaSection'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { AppBlockerPreview, Window } from '@/components/previews'
import { APP_BLOCKER, APP_BLOCKER_BREAK, APP_BLOCKER_NOTICE } from '@/lib/illustrations'
import { registerUrl } from '@/lib/site'

const description =
  'Block social media, games and video on your team’s phones during shifts or while clocked in. Breaks are free, there is a five-minute way out, each person agrees to the notice first, and you see who has it on and each blocked app opened at work. On Fork Premium.'

export const metadata: Metadata = {
  title: 'App blocker — Fork | Block distracting apps on staff phones during shifts',
  description,
  alternates: { canonical: '/app-blocker' },
  openGraph: { title: 'App blocker on Fork: phones away during shifts', description, url: 'https://forkhr.com/app-blocker', images: ['/og-image.png'], type: 'website' },
  twitter: { card: 'summary_large_image', title: 'App blocker on Fork: phones away during shifts', description, images: ['/og-image.png'] },
}

const signUp = registerUrl({ use: 'workplace', plan: 'premium' })

// Operations → App blocker in the app. Every rule and word is the API's
// (backend/utils/appBlockerRules.js): when it blocks (a scheduled shift, the time clock or both),
// the kinds of apps, NEVER_BLOCKED, breaks free and when blocking resumes, "Unlock for 5 minutes"
// three times a shift with a reason, the notice each person agrees to, the People and Activity tabs.
const seen = [
  { icon: <Users className="h-4 w-4" />, title: 'People', desc: 'Who is covered, whose phone is set up, and where each one stands right now: blocked, on a break or unlocked.' },
  { icon: <Activity className="h-4 w-4" />, title: 'Activity', desc: 'Each blocked app opened at work, every unlock with its reason, and anyone who turns it off, as it happens.' },
  { icon: <BarChart3 className="h-4 w-4" />, title: 'Last 7 days', desc: 'The week by person and by app, so you know whether it is a habit or a one-off.' },
  { icon: <BellRing className="h-4 w-4" />, title: 'Remind them', desc: 'One tap asks everyone whose phone is not set up yet to turn it on.' },
]

const faqs = [
  { q: 'What does it cost?', a: 'The app blocker is part of Premium. Nothing extra per phone or per person.' },
  { q: 'Which apps can I block?', a: 'Kinds of apps: social media, games, video and streaming, shopping and news. A kind covers new apps too. You can also name apps one by one.' },
  { q: 'Does it ever block calls or texts?', a: 'No. Phone, Messages, Maps, the camera and Fork always stay open.' },
  { q: 'What does each person do?', a: 'Turns it on in the Fork app and agrees to the notice on their own phone. Until they do, the App blocker page shows them as not set up, and you can remind them.' },
  { q: 'What can managers see?', a: 'That it is on, and each time a blocked app is opened at work: when, where and, where the phone can tell, which app. Nothing off shift or on a break, and nothing else about the phone.' },
  { q: 'Can someone turn it off?', a: 'Yes, it is their phone. You are told, and their row says it is off.' },
  { q: 'Who can change the rule?', a: 'Owners, and jobs with Manage app blocker that manage every location. A manager of some locations sees their own people and their activity.' },
  { q: 'Do I have to tell my team?', a: 'Fork shows each person the notice and keeps the date they agreed. Some states, New York among them, require written notice of monitoring at work, so ask your lawyer what applies to you.' },
]

const faqJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
}

export default function AppBlockerPage() {
  return (
    <main className="pt-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }} />

      <Hero
        registerHref={signUp}
        crumb={{ label: 'Products', href: '/products', current: 'App blocker' }}
        plan="premium"
        title="Phones away on the floor"
        lede="Pick the kinds of apps, and they are blocked on your team's phones during shifts. Breaks are free, there is a five-minute way out, and you see who has it on."
        secondaryHref="#rule"
        secondaryLabel="See how it works"
        note="Phone, Messages, Maps, the camera and Fork are never blocked."
        aside={
          <Window title="Fork · App blocker">
            <AppBlockerPreview />
          </Window>
        }
      />

      <FeatureRow
        id="rule"
        badge="New"
        eyebrow="One rule"
        plan="premium"
        title="Pick the apps once, for every shop"
        lede="Block social media, games, video, shopping or news, or apps by name, during a scheduled shift, while clocked in, or both. The block screen says why, with your name on it and when the app opens again."
        bullets={['Phone, Messages, Maps, the camera and Fork stay open', 'Owners and managers left out, unless you include them', 'Narrow it to people, jobs or locations']}
        preview={<IllustrationFrame illustration={APP_BLOCKER} />}
        previewTitle={APP_BLOCKER.title}
        frame="none"
      />

      <FeatureRow
        id="breaks"
        className="bg-warm-50"
        flip
        eyebrow="Breaks & unlocks"
        plan="premium"
        title="A break is a break"
        lede="Apps open on a break and block again when its time is up, or only once they clock back in, as you choose. Anyone who needs their phone opens it for five minutes, three times a shift, and says why."
        bullets={["The break's length from the shift, else 30 minutes", 'A reason with every unlock: family, a code from the bank, work', 'Pair it with a reminder when the break is nearly over']}
        preview={<IllustrationFrame illustration={APP_BLOCKER_BREAK} />}
        previewTitle={APP_BLOCKER_BREAK.title}
        frame="none"
        href="/reminders"
        hrefLabel="About break reminders"
      />

      <FeatureRow
        id="notice"
        eyebrow="The notice"
        plan="premium"
        title="Agreed to on their own phone"
        lede="Before it turns on, each person reads what is blocked, when, and what you can see, and agrees. The date is kept."
        bullets={['You see that it is on, and each blocked app opened at work', 'Nothing off shift, on a break, or about anything else on the phone', 'They can turn it off, and you are told']}
        preview={<IllustrationFrame illustration={APP_BLOCKER_NOTICE} />}
        previewTitle={APP_BLOCKER_NOTICE.title}
        frame="none"
      />

      <section id="seen" className="scroll-mt-24 border-b border-warm-100 bg-warm-50">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <SectionHeading eyebrow="What you see" title="Who is blocked, right now" lede="The App blocker page under Operations, live as phones report in." />
          <div className="mt-12 grid gap-px overflow-hidden rounded-2xl border border-warm-200 bg-warm-200 sm:grid-cols-2 lg:grid-cols-4">
            {seen.map((s) => (
              <div key={s.title} className="bg-white p-6">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-forest-50 text-forest-600">{s.icon}</span>
                <h3 className="mt-3 text-[15px] font-semibold text-warm-950">{s.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-warm-500">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-b border-warm-100">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid gap-12 md:grid-cols-[1fr_1.6fr] md:gap-16">
            <SectionHeading eyebrow="Questions" title="About the app blocker" lede="Anything else: support@forkhr.com" />
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
        eyebrow="Premium"
        title="Keep the floor about the customer"
        lede="The app blocker, reminders, checklists and the rest of Operations, on Premium."
        secondaryHref="/pricing"
        secondaryLabel="Compare plans"
      />
    </main>
  )
}
