import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'
import BlobBackground from '@/components/visual/BlobBackground'

export const metadata: Metadata = {
  title: 'FAQ — Fork | Frequently Asked Questions',
  description:
    'Find answers to common questions about Fork — pricing, features, scheduling, time tracking, HR onboarding, integrations, and more.',
  alternates: {
    canonical: '/faq',
  },
  openGraph: {
    title: 'FAQ — Fork | Frequently Asked Questions',
    description:
      'Find answers to common questions about Fork — pricing, features, scheduling, time tracking, HR onboarding, integrations, and more.',
    url: 'https://forkhr.com/faq',
    images: ['/og-image.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQ — Fork | Frequently Asked Questions',
    description:
      'Find answers to common questions about Fork — pricing, features, scheduling, time tracking, HR onboarding, integrations, and more.',
    images: ['/og-image.png'],
  },
}

const faqCategories = [
  {
    title: 'General',
    faqs: [
      {
        q: 'What is Fork?',
        a: 'Fork is an all-in-one workforce management platform that combines scheduling, time tracking, HR onboarding, team engagement, maintenance logs, and waste control into a single easy-to-use tool. It\'s built for hourly teams in restaurants, retail, hospitality, healthcare, fitness, and franchises.',
      },
      {
        q: 'Who is Fork built for?',
        a: 'Fork is designed for shift-based and hourly teams — including restaurants & cafés, retail stores, hotels & hospitality, healthcare clinics, fitness & gyms, and franchise organizations. Whether you manage 5 or 500 employees, Fork scales with your team.',
      },
      {
        q: 'Is Fork available on mobile?',
        a: 'Yes. Fork is available on iOS (App Store) and Android (Google Play). Employees can view schedules, clock in/out, access documents, and receive updates from their phones.',
      },
      {
        q: 'How do I get started?',
        a: 'Sign up for a free 7-day trial — no credit card required. Add your locations, invite your team, and you\'re up and running in minutes.',
      },
    ],
  },
  {
    title: 'Pricing & Billing',
    faqs: [
      {
        q: 'How much does Fork cost?',
        a: 'Fork pricing starts at $39/month per location on the Essential plan. The Pro plan is $79/month and Premium is $129/month. All plans include unlimited employees — no per-user fees.',
      },
      {
        q: 'Is there a free trial?',
        a: 'Yes. Every plan comes with a free 7-day trial. No credit card is required to start.',
      },
      {
        q: 'Can I switch plans later?',
        a: 'Yes — upgrade or downgrade anytime from your account settings. Changes take effect on your next billing cycle.',
      },
      {
        q: 'Are there per-user fees?',
        a: 'No. Pricing is per location, with unlimited employees on every plan.',
      },
      {
        q: 'What payment methods do you accept?',
        a: 'All major credit cards (Visa, Mastercard, Amex, Discover) and PayPal.',
      },
      {
        q: 'Can I cancel anytime?',
        a: 'Yes. There are no long-term contracts. You can cancel your subscription at any time from your account settings.',
      },
    ],
  },
  {
    title: 'Scheduling',
    faqs: [
      {
        q: 'How does scheduling work?',
        a: 'Fork provides a drag-and-drop schedule builder where you can create and publish weekly schedules. Employees get notified automatically and can view their shifts on the app.',
      },
      {
        q: 'Can employees request time off?',
        a: 'Yes. Employees can submit time-off requests through the app, and managers can approve or deny them directly from the dashboard.',
      },
      {
        q: 'Does Fork support shift swaps?',
        a: 'Yes. Employees can request shift swaps with coworkers, and managers can approve them with one click.',
      },
      {
        q: 'Can I set employee availability?',
        a: 'Yes. Employees can set their weekly availability, and Fork will flag scheduling conflicts automatically when you build the schedule.',
      },
    ],
  },
  {
    title: 'Time Tracking',
    faqs: [
      {
        q: 'How do employees clock in?',
        a: 'Employees can clock in via the mobile app, a shared terminal device, or GPS-enabled devices. Fork supports geo-fenced clock-in to ensure employees are on-site.',
      },
      {
        q: 'Can I export timesheets for payroll?',
        a: 'Yes. Fork generates payroll-ready timesheet exports that can be downloaded and imported into your payroll provider.',
      },
      {
        q: 'Does Fork track breaks?',
        a: 'Yes. Break tracking is built in. Managers can configure break rules and employees can clock in and out of breaks through the app.',
      },
    ],
  },
  {
    title: 'HR & Onboarding',
    faqs: [
      {
        q: 'What onboarding features are included?',
        a: 'Fork supports paperless onboarding with digital W-4 and I-9 forms, e-signatures, document storage, expiration tracking, onboarding checklists, and custom employment forms.',
      },
      {
        q: 'Can I store employee documents?',
        a: 'Yes. You can securely upload and organize employee documents like certifications, licenses, and signed forms. Fork also sends expiration alerts so nothing gets missed.',
      },
      {
        q: 'Does Fork handle hiring and job postings?',
        a: 'Yes. You can create job postings, track applicants, and manage the hiring pipeline directly within Fork.',
      },
    ],
  },
  {
    title: 'Engagement & Training',
    faqs: [
      {
        q: 'What engagement tools does Fork offer?',
        a: 'Fork includes company-wide announcements, employee surveys, peer recognition & kudos, a shared resource library, and training course assignments to keep your team connected and motivated.',
      },
      {
        q: 'Can I assign training courses?',
        a: 'Yes. Create or upload training courses and assign them to employees. Track completion progress from the dashboard.',
      },
      {
        q: 'How do employee surveys work?',
        a: 'Managers can create and publish surveys to collect team feedback. Responses are anonymous by default, and results are displayed in real-time.',
      },
    ],
  },
  {
    title: 'Operations',
    faqs: [
      {
        q: 'What are maintenance logs?',
        a: 'Maintenance logs let you track equipment issues from report to resolution. Log problems, assign priority levels, track repair costs, and keep a full audit trail.',
      },
      {
        q: 'What is waste control?',
        a: 'Fork\'s waste control feature lets you log waste in real time, track associated costs automatically, and generate reports to identify patterns and reduce losses.',
      },
      {
        q: 'Can I create custom forms and checklists?',
        a: 'Yes. Fork includes a drag-and-drop form builder for custom forms, plus daily task checklists that can be assigned to shifts or roles.',
      },
    ],
  },
  {
    title: 'Security & Support',
    faqs: [
      {
        q: 'Is my data secure?',
        a: 'Yes. Fork uses industry-standard encryption, secure cloud infrastructure, and role-based access controls to protect your data. We take security and privacy seriously.',
      },
      {
        q: 'How do I contact support?',
        a: 'You can reach our support team at support@forkhr.com. Premium plan customers receive priority support with faster response times.',
      },
      {
        q: 'Does Fork offer an API or integrations?',
        a: 'We are continuously expanding our integration options. Contact support@forkhr.com to discuss your specific integration needs.',
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
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  }

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      {/* Hero */}
      <section className="relative pt-[80px]"
        style={{
          backgroundImage: "radial-gradient(circle,#DDD8CA 1px,transparent 0)",
          backgroundSize: "20px 20px",
        }}
      >
        <BlobBackground variant="question" />
        <div className="max-w-5xl mx-auto px-6 pt-12 pb-0 md:py-20 md:text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-warm-900">
            FAQs<span className="text-primary">.</span>
          </h1>
          <p className="mt-4 text-lg text-warm-600 max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about Fork.<br/>Can&apos;t find an answer?{' '}
            <a href="mailto:support@forkhr.com" className="text-primary hover:underline font-semibold">
              Reach out to our team
            </a>.
          </p>
        </div>
      </section>

      {/* FAQ Categories */}
      <section>
        <div className="max-w-3xl mx-auto px-6 py-12 md:py-20">
          <div className="space-y-12">
            {faqCategories.map((category, catIdx) => (
              <div key={catIdx}>
                <h2 className="text-xl md:text-2xl font-bold tracking-tight text-warm-900 mb-4">
                  {category.title}
                </h2>
                <Accordion type="single" collapsible className="w-full">
                  {category.faqs.map((faq, i) => (
                    <AccordionItem key={i} value={`${catIdx}-${i}`}>
                      <AccordionTrigger className="text-left text-base font-medium">
                        {faq.q}
                      </AccordionTrigger>
                      <AccordionContent className="text-warm-600">
                        {faq.a}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-charcoal">
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            Still have questions?
          </h2>
          <p className="text-lg text-warm-400 mb-8 max-w-xl mx-auto">
            Start your free 7-day trial or reach out to our team — we&apos;re happy to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="https://app.forkhr.com/register" target="_blank">
              <Button size="lg" className="text-base px-8 h-12 bg-white text-warm-900 hover:bg-warm-100">
                Start free trial
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <a href="mailto:support@forkhr.com">
              <Button size="lg" variant="outline" className="text-base px-8 h-12 border-charcoal-600 text-warm-300 bg-transparent hover:bg-charcoal-800 hover:text-white">
                Contact support
              </Button>
            </a>
          </div>
        </div>
      </section>
    </main>
  )
}
