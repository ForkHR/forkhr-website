import { Button } from '@/components/ui/button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'
import BlobBackground from '@/components/visual/BlobBackground'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Pricing — Fork | Simple Per-Location Pricing',
  description:
    'Transparent pricing for workforce management. Unlimited employees, no per-user fees. Start with a free 7-day trial.',
  alternates: {
    canonical: '/pricing',
  },
  openGraph: {
    title: 'Pricing — Fork | Simple Per-Location Pricing',
    description:
      'Transparent pricing for workforce management. Unlimited employees, no per-user fees. Start with a free 7-day trial.',
    url: 'https://forkhr.com/pricing',
    images: ['/og-image.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Pricing — Fork | Simple Per-Location Pricing',
    description:
      'Transparent pricing for workforce management. Unlimited employees, no per-user fees. Start with a free 7-day trial.',
    images: ['/og-image.png'],
  },
}

const tiers = [
  {
    name: 'Essential',
    value: 'essential',
    price: 39,
    description: 'Core scheduling & time tracking for small teams.',
    features: [
      'Drag-and-drop scheduling',
      'Open shifts & shift swaps',
      'Shift tasks & notes',
      'Employee availability',
      'Time-off requests',
      'Clock-in / clock-out tracking',
      'Company updates',
      'Hiring & job postings',
      'Unlimited employees & locations',
      'Roles & permissions',
    ],
    cta: 'Start with Essential',
    highlighted: false,
  },
  {
    name: 'Pro',
    value: 'pro',
    price: 79,
    description: 'Add HR, onboarding & engagement tools for growing teams.',
    features: [
      'Everything in Essential',
      'Paperless onboarding (W-4, I-9)',
      'Employee document storage',
      'E-signatures & expiration alerts',
      'Custom forms',
      'Employee surveys',
      'Peer recognition & kudos',
      'Shared resource library',
    ],
    cta: 'Start with Pro',
    highlighted: true,
  },
  {
    name: 'Premium',
    value: 'premium',
    price: 129,
    description: 'Full platform with AI, training, compliance & priority support.',
    features: [
      'Everything in Pro',
      'AI assistant',
      'Training courses',
      'Incident reports',
      'Waste cost tracking',
      'Maintenance logs',
      'Termination records',
      'Advanced analytics & reports',
      'Priority support',
    ],
    cta: 'Start with Premium',
    highlighted: false,
  },
]

const faqs = [
  {
    q: 'Can I switch plans later?',
    a: "Yes — upgrade or downgrade anytime from your account settings. Changes take effect on your next billing cycle.",
  },
  {
    q: 'When does billing start?',
    a: "After your 7-day free trial ends. You can cancel anytime before that and you won't be charged.",
  },
  {
    q: 'Do I need a credit card to start?',
    a: 'No. Start your trial without entering payment information.',
  },
  {
    q: 'Is there annual billing?',
    a: 'We currently offer monthly billing. Contact support@forkhr.com if you need annual invoicing.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'All major credit cards (Visa, Mastercard, Amex, Discover) and PayPal.',
  },
  {
    q: 'Are there per-user fees?',
    a: 'No. Pricing is per location, with unlimited employees on every plan.',
  },
]

export default function PricingPage() {
  const jsonLdFaq = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.q,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.a,
      },
    })),
  }

  return (
    <main className="pt-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />

      {/* Hero + pricing grid */}
      <section className="relative overflow-hidden border-b border-warm-100">
        <BlobBackground variant="rounded" />
        <div className="relative max-w-6xl mx-auto px-6 pt-12 pb-16 md:pt-32 md:pb-24">
          <div className="max-w-2xl">
            <span className="eyebrow mb-4">Pricing</span>
            <h1 className="text-5xl md:text-6xl font-semibold tracking-tight leading-[1.05] text-warm-950">
              Simple pricing.
            </h1>
            <p className="mt-4 text-lg text-warm-600 leading-relaxed">
              No per-user fees, no hidden costs. Pick the plan that matches how you manage your team today.
            </p>
            <p className="mt-2 text-sm text-warm-400">
              All plans include a free 7-day trial · Cancel anytime
            </p>
          </div>

          {/* Pricing grid */}
          <div className="mt-14 grid md:grid-cols-3 gap-6">
            {tiers.map((tier) => (
              <div
                key={tier.value}
                className={`bg-white rounded-xl p-7 flex flex-col ${
                  tier.highlighted
                    ? 'border-2 border-warm-950'
                    : 'border border-warm-200'
                }`}
              >
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-xl font-semibold text-warm-950">{tier.name}</h3>
                  {tier.highlighted && (
                    <span className="text-xs font-medium text-warm-600 border border-warm-200 rounded-md px-2 py-0.5">
                      Most popular
                    </span>
                  )}
                </div>

                <div className="flex items-end gap-1 mb-2">
                  <span className="text-5xl font-semibold tracking-tight text-warm-950">${tier.price}</span>
                  <span className="text-sm text-warm-500 mb-1.5">/mo per location</span>
                </div>

                <p className="text-sm text-warm-600 mb-6">{tier.description}</p>

                <Link href="https://app.forkhr.com/register" target="_blank" className="mb-6">
                  <Button
                    className="w-full"
                    variant={tier.highlighted ? 'default' : 'outline'}
                  >
                    {tier.cta}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </Link>

                <div className="text-xs font-semibold text-warm-500 uppercase tracking-wider mb-3">
                  What&apos;s included
                </div>
                <ul className="space-y-2.5 flex-1">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-forest-500 mt-0.5 shrink-0" />
                      <span className="text-[15px] text-warm-600">{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="border-b border-warm-100">
        <div className="max-w-3xl mx-auto px-6 py-20 md:py-28">
          <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-warm-950 mb-10">
            Frequently asked questions
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-warm-100">
                <AccordionTrigger className="text-left text-base font-medium text-warm-950 hover:no-underline hover:text-warm-600 py-5">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-[15px] text-warm-600 leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-warm-950">
        <div className="max-w-6xl mx-auto px-6 py-20 md:py-28">
          <div className="max-w-2xl">
            <h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-5">
              Try Fork free for 7 days
            </h2>
            <p className="text-lg text-warm-400 mb-10 max-w-lg">
              No credit card required. Set up your first location in minutes.
            </p>
            <Link href="https://app.forkhr.com/register" target="_blank">
              <Button size="lg" className="text-base px-7 h-12 bg-white text-warm-950 hover:bg-warm-100">
                Start free trial
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
