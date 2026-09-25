// Pricing questions, shared by the pricing page and its machine-readable twin at /pricing.md.
import { GUARANTEE_DAYS, PLATFORM_FEE_BPS, REFERRAL_REWARD_MONTHS, SUPPORT_EMAIL } from './site'

/** "0.5" for 50 basis points. */
export const feePct = (PLATFORM_FEE_BPS / 100).toFixed(1).replace(/\.0$/, '')

export const PRICING_FAQS: { q: string; a: string }[] = [
  {
    q: 'Is there a free plan?',
    a: 'Yes. Ordering from vendors, selling to your customers, invoicing, online payments, vendor and customer chat and delivery routes are free, with unlimited vendors, customers, catalog items and locations. No card is needed to start.',
  },
  {
    q: 'How does per-location pricing work?',
    a: "Your company is on one plan. You pay that plan's price for each active location, every month, and every employee at those locations is included. Ten people or a hundred, the price is the same.",
  },
  {
    q: 'Is there a free trial?',
    a: `There is no time-limited trial. Start on the Free plan for as long as you like, and when you move to a paid plan you are covered by a ${GUARANTEE_DAYS}-day money-back guarantee from your first charge: not for you, cancel within ${GUARANTEE_DAYS} days for a full refund and keep your data either way.`,
  },
  {
    q: 'Can I switch plans later?',
    a: 'Yes. Upgrade or downgrade anytime from your billing settings. Upgrades take effect right away; downgrades take effect at the end of the current billing period. Nothing you created is deleted when you move down.',
  },
  {
    q: 'How does the referral program work?',
    a: `Share your referral code. When a business you referred starts a paid plan, you both receive ${REFERRAL_REWARD_MONTHS} month of that location's plan price as credit, for up to 10 locations per referral. Your credit is granted once their location has been active for 30 days.`,
  },
  {
    q: 'Are there fees on payments I collect from customers?',
    a: `Only when a customer pays online. Fork keeps a ${feePct}% platform fee on the pre-tax amount and Stripe charges its card or bank processing fee. Invoices you settle outside Fork carry no fee at all.`,
  },
  {
    q: 'What payment methods do you accept for the subscription?',
    a: `All major credit and debit cards, processed by Stripe. Billing is monthly. Email ${SUPPORT_EMAIL} if you need annual invoicing.`,
  },
  {
    q: 'What happens if I cancel?',
    a: 'Your paid features stay on until the end of the period you paid for, then your company moves to the Free plan. Ordering and selling keep working and everything you set up is still there.',
  },
]
