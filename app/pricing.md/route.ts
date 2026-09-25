// GET /pricing.md — the pricing page as plain Markdown for AI agents and scripts.
// Built from the same data as /pricing (lib/catalog.ts, lib/pricing-faq.ts, lib/site.ts),
// so the two can never disagree. Prerendered at build time.
import { FEATURE_GROUPS, TIERS, tierIncludes } from '@/lib/catalog'
import { PRICING_FAQS, feePct } from '@/lib/pricing-faq'
import { APP_STORE_URL, GOOGLE_PLAY_URL, GUARANTEE_DAYS, REFERRAL_REWARD_MONTHS, REGISTER_URL, SUPPORT_EMAIL } from '@/lib/site'

export const dynamic = 'force-static'

const price = (n: number) => (n === 0 ? '$0/mo' : `$${n}/mo per location`)

/** Pads table cells so the raw text lines up, like a hand-written README. */
const table = (header: string[], rows: string[][]) => {
  const widths = header.map((h, i) => Math.max(h.length, ...rows.map((r) => r[i].length)))
  const line = (cells: string[]) => `| ${cells.map((c, i) => c.padEnd(widths[i])).join(' | ')} |`
  return [line(header), `| ${widths.map((w) => '-'.repeat(w)).join(' | ')} |`, ...rows.map(line)].join('\n')
}

const build = () => {
  const plans = table(
    ['Plan', 'Price', 'Billing', 'Summary'],
    TIERS.map((t) => [t.name, price(t.price), t.price === 0 ? 'Free forever, no card' : 'Monthly, per active location', t.tagline]),
  )

  const included = TIERS.map((t) => `### ${t.name} (${price(t.price)})\n\n${t.description}\n\n${t.bullets.map((b) => `- ${b}`).join('\n')}`).join('\n\n')

  const features = table(
    ['Category', 'Feature', ...TIERS.map((t) => t.name)],
    FEATURE_GROUPS.flatMap((g) => g.features.map((f) => [g.label, f.note ? `${f.label} (${f.note})` : f.label, ...TIERS.map((t) => (tierIncludes(t.key, f) ? 'Yes' : 'No'))])),
  )

  const faq = PRICING_FAQS.map((f) => `### ${f.q}\n\n${f.a}`).join('\n\n')

  return `# Fork Pricing

Fork is one app for running an hourly-staff business: schedules, timecards and chat for the team; SOPs, a feed and learning that keep every shift consistent; orders to vendors and invoices to customers, even when they are not on Fork.

Ordering and selling are free. Team tools are priced per location, with unlimited employees. Every paid plan comes with a ${GUARANTEE_DAYS}-day money-back guarantee. All prices are in USD.

## Plans

${plans}

- The subscription is company-wide: every active location is on the same plan, and you pay that plan's price once per active location per month.
- Every employee at a location is included. There are no per-user fees.
- Each plan includes everything in the plans before it.

## What each plan includes

${included}

## Feature availability by plan

${features}

Reports unlock one by one: labor and purchasing reports on Essential, attendance and SOP reports on Premium. Vendor and customer chat is free on every plan.

## Billing

- Paid plans are billed monthly by credit or debit card through Stripe. There are no annual plans; email ${SUPPORT_EMAIL} for annual invoicing.
- Money-back guarantee: cancel within ${GUARANTEE_DAYS} days of the first paid charge for a full refund. Once per company. Data is kept either way.
- Referrals: when a business you referred starts a paid plan, both companies receive ${REFERRAL_REWARD_MONTHS} month of that location's plan price as credit, for up to 10 locations per referral. The referrer's credit is granted once the referred location has been active for 30 days.
- Upgrades take effect immediately; downgrades at the end of the current billing period.
- Cancelling keeps paid features until the end of the paid period, then the company moves to the Free plan with all its data.

## Fees on payments you collect from customers

- Free plan sellers can invoice customers and accept card and US bank payments through Stripe.
- When a customer pays online, Fork keeps a ${feePct}% platform fee on the pre-tax amount, and Stripe charges its processing fee.
- Invoices settled outside Fork carry no fee.
- Customers do not need a Fork account to pay: they use the emailed link or the QR code on the PDF invoice.

## FAQ

${faq}

## Links

- Sign up: ${REGISTER_URL}
- Pricing page (HTML): https://forkhr.com/pricing
- Products: https://forkhr.com/products
- iOS app: ${APP_STORE_URL}
- Android app: ${GOOGLE_PLAY_URL}
- Support: ${SUPPORT_EMAIL}
`
}

export function GET() {
  return new Response(build(), {
    status: 200,
    headers: {
      'Content-Type': 'text/markdown; charset=utf-8',
      'X-Content-Type-Options': 'nosniff',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  })
}
