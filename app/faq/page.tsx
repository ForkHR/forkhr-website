import type { Metadata } from 'next'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import Backdrop from '@/components/visual/Backdrop'
import CtaSection from '@/components/marketing/CtaSection'
import { GUARANTEE_DAYS, PLATFORM_FEE_BPS, SUPPORT_EMAIL } from '@/lib/site'

const description = 'Answers to common questions about Fork: plans and pricing, scheduling, timecards, SOPs, the feed, ordering from vendors, selling and invoicing, payments, security and support.'

export const metadata: Metadata = {
  title: 'FAQ — Fork | Frequently asked questions',
  description,
  alternates: { canonical: '/faq' },
  openGraph: { title: 'FAQ — Fork', description, url: 'https://forkhr.com/faq', images: ['/og-image.png'], type: 'website' },
  twitter: { card: 'summary_large_image', title: 'FAQ — Fork', description, images: ['/og-image.png'] },
}

const feePct = (PLATFORM_FEE_BPS / 100).toFixed(1).replace(/\.0$/, '')

const faqCategories = [
  {
    title: 'General',
    faqs: [
      {
        q: 'What is Fork?',
        a: 'Fork is one app for running an hourly-staff business: schedules, timecards and chat for the team; SOPs, a feed and learning that keep every shift consistent; and orders to your vendors and invoices to your customers, even when they are not on Fork. It is used by coffee shops, bakeries, restaurants, food distributors, retail, gyms and franchises.',
      },
      {
        q: 'Who is Fork built for?',
        a: 'Shift-based and hourly teams, and the businesses that supply them. Whether you run one café, a bakery that delivers to twenty shops, or a franchise with fifty locations, the same app fits.',
      },
      {
        q: 'Is Fork available on mobile?',
        a: 'Yes. Fork is on iOS and Android. Employees see their schedule, clock in, run checklists, read the feed and chat from their phone. Managers can do almost everything from the phone too; reports open in the app from the web.',
      },
      {
        q: 'How do I get started?',
        a: 'Sign up, add your locations, vendors and customers, and invite the team. Ordering and selling are free from day one; team tools start when you pick a plan.',
      },
    ],
  },
  {
    title: 'Plans & billing',
    faqs: [
      {
        q: 'How much does Fork cost?',
        a: 'Ordering from vendors, selling to customers, invoicing and vendor chat are free. Team tools are priced per location: Essential $39, Pro $79 and Premium $129 per location per month, with unlimited employees on every plan.',
      },
      {
        q: 'Is there a free trial?',
        a: `There is no time-limited trial. Use the Free plan as long as you like. When you move to a paid plan you get a ${GUARANTEE_DAYS}-day money-back guarantee from the first charge.`,
      },
      {
        q: 'Are there per-user fees?',
        a: 'No. You pay per active location. Every employee at that location is included.',
      },
      {
        q: 'Can I switch plans or cancel?',
        a: 'Yes. Upgrade or downgrade anytime from billing settings. There are no long-term contracts. If you cancel, your company moves to the Free plan at the end of the paid period and keeps all its data.',
      },
      {
        q: 'Is there a referral program?',
        a: 'Yes. Share your code. When a business you refer starts a paid plan, you both receive a month of that location\'s plan price as credit, for up to ten locations per referral.',
      },
    ],
  },
  {
    title: 'Scheduling & timecards',
    faqs: [
      {
        q: 'How does scheduling work?',
        a: 'Build the week by dragging shifts, with availability and approved time off visible as you go. Publish once and everyone gets a push notification. Open shifts can be claimed by eligible people, and trades are approved by a manager.',
      },
      {
        q: 'How do employees clock in?',
        a: 'From their phone, from a tablet set up as a kiosk with PINs, or with GPS fences per location. Punches are checked against the scheduled shift and flagged when late or when a break is missed.',
      },
      {
        q: 'Can I export timesheets for payroll?',
        a: 'Yes. Approve the week and export it for your payroll provider. Labor cost and labor % are shown live, and against sales if you connect Square.',
      },
      {
        q: 'Can employees request time off?',
        a: 'Yes. Requests land in the manager\'s inbox with a one-tap approve. Balances are tracked per employee and approved time off shows on the schedule automatically.',
      },
    ],
  },
  {
    title: 'SOPs, feed & learning',
    faqs: [
      {
        q: 'What are SOPs in Fork?',
        a: 'Boards, procedures and runs. A board holds a status flow and, optionally, the things it is about (fridges, machines, products). A procedure is the checklist or log with its steps and triggers. A run is one execution on a phone, with photos, temperatures, signatures and timestamps.',
      },
      {
        q: 'Where did waste control, maintenance logs and incident reports go?',
        a: 'They are SOP boards now: a waste log, an equipment care board and an incident tracker. They share steps, triggers, photos and reports with every other procedure. Old links redirect to the SOPs page.',
      },
      {
        q: 'What is the feed?',
        a: 'The home tab on every phone. Announcements with confirmations and read receipts, recognitions with badges, and surveys, all with reactions and comments. You can attach files, links, an SOP or a shift to a post.',
      },
      {
        q: 'Can I assign training courses and policies?',
        a: 'Yes. Courses with video and quizzes, versioned policies that need a signed acknowledgement, a shared library and FAQs all live in the Learn tab. Completion and acknowledgements are tracked per employee.',
      },
    ],
  },
  {
    title: 'Supply & sales',
    faqs: [
      {
        q: 'Do my vendors need to be on Fork?',
        a: 'No. Add a vendor by name and email. Orders go out as an email with a PDF, and your chat messages to that vendor are emailed too. Their reply lands back in the conversation. If they join Fork later, it becomes an in-app chat.',
      },
      {
        q: 'Do my customers need a Fork account to be invoiced?',
        a: 'No. Customers get the invoice by email with a pay link, and the PDF carries a QR code. They pay by card or US bank transfer without signing up. If they do sign up later with the same email, they can claim their account and order in the app.',
      },
      {
        q: 'How do I get paid?',
        a: 'Payments run through Stripe. Once your account is set up, card and bank payments on your invoices are paid out to your bank. Paid, failed and refunded states sync back onto the order.',
      },
      {
        q: 'What does selling cost?',
        a: `Selling is free. When a customer pays online, Fork keeps a ${feePct}% platform fee on the pre-tax amount and Stripe charges its processing fee. Invoices settled outside Fork carry no fee.`,
      },
      {
        q: 'What about stock counts?',
        a: 'Count lists per location with a par level on each item. Shortfalls become a suggested order for the right vendor. Stock counts are part of Essential and up.',
      },
    ],
  },
  {
    title: 'Security & support',
    faqs: [
      {
        q: 'Is my data secure?',
        a: 'Yes. Fork uses encrypted connections, secure cloud infrastructure and role-based permissions. Payments are processed by Stripe; Fork never stores card or bank details. Assistant content is isolated per company and never used to train other models.',
      },
      {
        q: 'How do I contact support?',
        a: `Email ${SUPPORT_EMAIL}. Premium customers get priority support.`,
      },
      {
        q: 'Does Fork integrate with my POS?',
        a: `Square today: sales sync every 20 minutes for the sales vs. labor report. Email ${SUPPORT_EMAIL} about other systems.`,
      },
    ],
  },
]

export default function FAQPage() {
  const allFaqs = faqCategories.flatMap((cat) => cat.faqs)
  const jsonLdFaq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: allFaqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: { '@type': 'Answer', text: faq.a },
    })),
  }

  return (
    <main className="pt-16">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }} />

      <section className="relative overflow-hidden border-b border-warm-100">
        <Backdrop />
        <div className="relative mx-auto max-w-6xl px-6 pb-16 pt-12 md:pb-24 md:pt-28">
          <div className="max-w-2xl">
            <span className="eyebrow mb-4">Support</span>
            <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight text-warm-950 md:text-6xl">Questions, answered.</h1>
            <p className="mt-4 text-lg leading-relaxed text-warm-600">
              Everything you need to know about Fork. Can&apos;t find it?{' '}
              <a href={`mailto:${SUPPORT_EMAIL}`} className="font-medium text-forest-600 transition-colors hover:text-forest-700">
                Ask our team
              </a>
              .
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-warm-100">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid gap-12 lg:grid-cols-[220px_1fr] lg:gap-16">
            <nav className="hidden lg:block">
              <ul className="sticky top-28 space-y-1">
                {faqCategories.map((c) => (
                  <li key={c.title}>
                    <a href={`#${c.title.toLowerCase().replace(/[^a-z]+/g, '-')}`} className="block rounded-lg px-3 py-2 text-[14px] font-medium text-warm-600 transition-colors hover:bg-warm-50 hover:text-warm-950">
                      {c.title}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="max-w-3xl space-y-14">
              {faqCategories.map((category) => (
                <div key={category.title} id={category.title.toLowerCase().replace(/[^a-z]+/g, '-')} className="scroll-mt-28">
                  <h2 className="mb-4 text-xl font-semibold tracking-tight text-warm-950 md:text-2xl">{category.title}</h2>
                  <Accordion type="single" collapsible className="w-full border-t border-warm-100">
                    {category.faqs.map((faq, i) => (
                      <AccordionItem key={i} value={`${category.title}-${i}`} className="border-warm-100 last:border-b">
                        <AccordionTrigger className="py-5 text-left text-base font-medium text-warm-950 hover:text-warm-600 hover:no-underline">{faq.q}</AccordionTrigger>
                        <AccordionContent className="text-[15px] leading-relaxed text-warm-600">{faq.a}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CtaSection eyebrow="Still have questions?" title="Try it, or ask us" lede="Start on the Free plan and see the app with your own vendors and customers, or email support and a person will answer." secondaryHref={`mailto:${SUPPORT_EMAIL}`} secondaryLabel="Contact support" />
    </main>
  )
}
