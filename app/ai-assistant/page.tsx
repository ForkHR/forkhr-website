import type { Metadata } from 'next'
import { LockKeyhole, MousePointerClick, ShieldCheck, Users } from 'lucide-react'
import Hero from '@/components/marketing/Hero'
import SectionHeading from '@/components/marketing/SectionHeading'
import CtaSection from '@/components/marketing/CtaSection'
import FeatureGrid from '@/components/marketing/FeatureGrid'
import SauceAnswers from '@/components/marketing/SauceAnswers'
import SauceComposer from '@/components/marketing/SauceComposer'
import SauceTasks from '@/components/marketing/SauceTasks'
import { Phone, SauceChatPreview } from '@/components/previews'

/*
 * Sauce, Fork's AI assistant (the name since 2026-11-22; this page was "AI Assistant: your
 * company's knowledge, one question away" until the owner asked for it to follow, 2026-11-23).
 * The address stays /ai-assistant: it is indexed and linked from the app. The story in order: ask it
 * (answers, each saying what it reads), have it do the work (the cards, the same as the home page's),
 * talk to it like a coworker, why it is safe. Every claim is something the app does: the lookups, the
 * kinds of card and their button words, @ and / in the composer, files put on the record.
 */
const TITLE = 'Sauce, the AI assistant — Fork | Shifts, orders and answers in one sentence'
const DESCRIPTION =
  'Sauce is Fork’s AI assistant for cafés. Ask who is working tomorrow or what is low on stock, or tell it to move a shift, order from a vendor or write someone up. It gets it ready on a card, and nothing happens until you tap Confirm. Premium plan.'

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: '/ai-assistant' },
  openGraph: { title: TITLE, description: DESCRIPTION, url: 'https://forkhr.com/ai-assistant', images: ['/og-image.png'], type: 'website' },
  twitter: { card: 'summary_large_image', title: TITLE, description: DESCRIPTION, images: ['/og-image.png'] },
}

const trust = [
  { icon: <MousePointerClick className="h-5 w-5" />, title: 'Nothing happens until you confirm', desc: 'Sauce gets it ready on a card. Only your tap places the order or saves the shift. A typed “yes” is not enough.' },
  { icon: <Users className="h-5 w-5" />, title: 'It follows each person’s job', desc: 'A barista can ask for time off. Only a manager can move someone’s shift, and only in the plan you’re on.' },
  { icon: <LockKeyhole className="h-5 w-5" />, title: 'Only your café’s data', desc: 'It reads what the person asking could open themselves, never another company’s, and it is not used to train AI models.' },
  { icon: <ShieldCheck className="h-5 w-5" />, title: 'Drafts stay drafts', desc: 'Shifts, write-ups and policies it writes are drafts until you publish or submit them.' },
]

export default function SaucePage() {
  return (
    <main className="pt-16">
      <Hero
        crumb={{ label: 'Products', href: '/products', current: 'Sauce' }}
        plan="premium"
        title="Say what needs doing. Sauce gets it ready."
        lede="Sauce is Fork’s AI assistant. It answers from your schedule, stock and handbook, and gets the shift, the order or the write-up ready for you to check. Nothing happens until you tap Confirm."
        secondaryHref="#ask"
        secondaryLabel="What you can ask"
        note="On the web and in the Fork app for iOS and Android"
        aside={
          <Phone>
            <SauceChatPreview />
          </Phone>
        }
      />

      {/* Ask it */}
      <section id="ask" className="scroll-mt-24 border-b border-warm-100">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <SectionHeading align="center" title="Ask it about your café" lede="Answers from your own Fork, not the internet: the schedule, stock, timecards and the policies you wrote." />
          <div className="mt-10">
            <SauceAnswers />
          </div>
        </div>
      </section>

      {/* Have it do the work */}
      <section className="border-b border-warm-100 bg-warm-50">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <SectionHeading title="Or have it do the work" lede="Sauce makes the card the app would make, with the people, days and items filled in. Check it, then tap." />
          <div className="mt-12 md:mt-14">
            <SauceTasks />
          </div>
          <p className="mt-8 text-[15px] leading-relaxed text-warm-500">Also: timecards, events, checklists and log entries, new employees, terminations, FAQs, policies, sales orders and service requests.</p>
        </div>
      </section>

      {/* Like a coworker */}
      <section id="coworker" className="border-b border-warm-100">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <SectionHeading title="Talk to it like a coworker" lede="The same message box as a chat with your team." />
          <div className="mt-12">
            <SauceComposer />
          </div>
        </div>
      </section>

      {/* Safe */}
      <section id="safe" className="border-b border-warm-100 bg-warm-50">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <SectionHeading title="It can only do what you could" />
          <FeatureGrid className="mt-12" columns={4} items={trust} />
        </div>
      </section>

      <CtaSection title="Hand Sauce the busywork" lede="Sauce comes with Premium, with checklists, reminders and the app blocker." />
    </main>
  )
}
