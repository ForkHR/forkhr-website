// GET /llms.txt — a map of the site for AI agents (llmstxt.org). Points at the Markdown
// pricing page first, then the pages that describe the product, in plain language.
import { SOLUTIONS } from '@/lib/solutions'
import { GUARANTEE_DAYS, REGISTER_URL, SITE_DESCRIPTION, SUPPORT_EMAIL } from '@/lib/site'

export const dynamic = 'force-static'

const base = 'https://forkhr.com'

const body = () => `# Fork

> ${SITE_DESCRIPTION}

Fork is for hourly-staff businesses (coffee shops, bakeries, restaurants, food distributors, retail, gyms, franchises) and the vendors that supply them. Ordering from vendors and selling to customers are free. Team tools are priced per location with unlimited employees and a ${GUARANTEE_DAYS}-day money-back guarantee.

## Pricing

- [Pricing as Markdown](${base}/pricing.md): plans, prices, feature availability by plan, billing rules, fees, FAQ.
- [Pricing page](${base}/pricing)

## Products

- [Everything in one place](${base}/products): schedule, timecards, chat, feed, SOPs, learn, people & HR, hiring, supply, sales, reports, AI assistant.
- [SOPs & checklists](${base}/sops): boards, procedures and runs; opening and closing, temperature, waste and cash logs.
- [Sell through Fork](${base}/sales): catalog, customers, orders, delivery routes, invoices paid online by card or US bank transfer; customers need no account.
- [Supply](${base}/supply): order from vendors, standing orders, vendor chat with email bridge, stock counts.
- [Hiring](${base}/hiring): public job board, screening questions, AI resume scan, pipeline to onboarding.
- [AI assistant](${base}/ai-assistant): answers from the company's own policies, FAQs, courses and schedule.

## Solutions

- [All solutions](${base}/solutions): by kind of business and by job to be done.

## Solutions by business

${SOLUTIONS.filter((s) => s.kind === 'business')
  .map((s) => `- [${s.menuLabel}](${base}/solutions/${s.slug}): ${s.description}`)
  .join('\n')}
- [Franchises](${base}/solutions/franchise): the same procedures, training and schedules at every unit.

## Solutions by need

${SOLUTIONS.filter((s) => s.kind === 'need')
  .map((s) => `- [${s.menuLabel}](${base}/solutions/${s.slug}): ${s.description}`)
  .join('\n')}
- [Compliance & HR records](${base}/solutions/compliance): signed forms, acknowledged policies, contracts, violation and termination records.
- [Labor & food cost control](${base}/solutions/operational-efficiency): SOPs, stock counts and labor against sales.
- [Multi-location](${base}/solutions/multi-location): one plan, one login, every site side by side.
- [Employee retention](${base}/solutions/employee-retention): fair schedules, recognition, surveys and training.

## Company

- [About](${base}/about)
- [FAQ](${base}/faq)
- [Sign up](${REGISTER_URL})
- Support: ${SUPPORT_EMAIL}
- Apps: iOS and Android (links on every page footer)
`

export function GET() {
  return new Response(body(), {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'X-Content-Type-Options': 'nosniff',
      'Cache-Control': 'public, max-age=3600, s-maxage=86400',
    },
  })
}
