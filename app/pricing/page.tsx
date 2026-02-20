import { Button } from '@/components/ui/button'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'
import { ArrowRight, CheckCircle2 } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'
import BlobBackground from '@/components/visual/BlobBackground'

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
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLdFaq) }}
      />
      {/* Hero */}
      <section className="relative pt-[80px]"
        style={{
          backgroundImage: "radial-gradient(circle,#dee3e8 1px,transparent 0)",
          backgroundSize: "20px 20px",
        }}
      >
        <BlobBackground
          variant="rounded"
        />
        <div className="max-w-5xl mx-auto px-6 pt-4 pb-0 md:pt-20 md:text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-slate-900">
            One price per location.<br/>Unlimited team members.
          </h1>
          <p className="mt-4 text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
            No per-user fees, no hidden costs. Pick the plan that matches how you manage your team today.
          </p>
          <p className="mt-2 text-sm text-slate-400">
            All plans include a free 7-day trial · Cancel anytime
          </p>
        </div>

        {/* Pricing grid */}
        <section>
          <div className="max-w-5xl mx-auto px-6 py-12 md:py-16">
            <div className="grid md:grid-cols-3 gap-6">
              {tiers.map((tier) => (
                <div
                  key={tier.value}
                  className={`rounded-2xl p-6 flex flex-col border ${
                    tier.highlighted
                      ? 'border-primary border-3 shadow-md ring-1 ring-primary/10'
                      : 'border-slate-200'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-slate-900">{tier.name}</h3>
                    {tier.highlighted && (
                      <span className="bg-primary text-white text-xs font-semibold px-2.5 py-1 rounded-full">
                        Most popular
                      </span>
                    )}
                  </div>

                  <div className="flex items-end gap-1 mb-2">
                    <span className="text-5xl font-bold text-slate-900">${tier.price}</span>
                    <span className="text-sm text-slate-500 mb-1.5">/mo per location</span>
                  </div>

                  <p className="text-sm text-slate-600 mb-6">{tier.description}</p>

                  <Link href="https://app.forkhr.com/register" target="_blank" className="mb-6">
                    <Button
                      className="w-full"
                      variant={tier.highlighted ? 'default' : 'outline'}
                    >
                      {tier.cta}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>

                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-3">
                    What&apos;s included
                  </div>
                  <ul className="space-y-2.5 flex-1">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5">
                        <CheckCircle2 className="w-4 h-4 text-primary mt-0.5 shrink-0" />
                        <span className="text-sm text-slate-700">{f}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>
      </section>

      {/* FAQ */}
      <section className="bg-slate-50/60">
        <div className="max-w-3xl mx-auto px-6 py-20 md:py-28">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-10">
            Frequently asked questions
          </h2>
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`}>
                <AccordionTrigger className="text-left text-base font-medium">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-slate-600">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-slate-900">
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-24 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            Try Fork free for 7 days
          </h2>
          <p className="text-lg text-slate-400 mb-8 max-w-xl mx-auto">
            No credit card required. Set up your first location in minutes.
          </p>
          <Link href="https://app.forkhr.com/register" target="_blank">
            <Button size="lg" className="text-base px-8 h-12 bg-white text-slate-900 hover:bg-slate-100">
              Start free trial
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
