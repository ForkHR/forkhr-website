// Shared marketing constants. Keep copy about the commercial model here so every page says
// the same thing: there is no trial any more — ordering & selling are free, paid plans are
// per location with a money-back guarantee (mirrors backend/config/billingConfig.js).

export const APP_URL = 'https://app.forkhr.com'
/** The app's API: the supplier directory is read from it (lib/suppliers.ts) and the site's forms are sent to it (lib/leads.ts). */
export const API_URL = (process.env.NEXT_PUBLIC_API_URL || `${APP_URL}/api`).replace(/\/$/, '')
export const REGISTER_URL = `${APP_URL}/register`
export const LOGIN_URL = `${APP_URL}/login`
/**
 * The app's sign-up carrying what the page already knows: `use` preselects a use on its
 * "What will you use Fork for?" screen (workplace, purchasing, sales; several with commas),
 * `plan` the tier its plan screen opens on.
 */
export const registerUrl = ({ use, plan }: { use?: string; plan?: string } = {}) => {
  const q = new URLSearchParams()
  if (use) q.set('use', use)
  if (plan) q.set('plan', plan)
  const s = q.toString()
  return s ? `${REGISTER_URL}?${s}` : REGISTER_URL
}
export const JOBS_URL = 'https://jobs.forkhr.com/'
export const SUPPORT_EMAIL = 'support@forkhr.com'

export const APP_STORE_URL = 'https://apps.apple.com/us/app/fork-hr-scheduling/id6754656709'
export const GOOGLE_PLAY_URL = 'https://play.google.com/store/apps/details?id=com.forkhr.fork'

export const GUARANTEE_DAYS = 30
export const REFERRAL_REWARD_MONTHS = 1
/**
 * Platform fee on invoices paid online, in basis points: 1% (the owner's figure, 2026-11-11; the
 * site said 0.5% until then). Every page's fee line reads this. What a seller is actually charged
 * is the API's `PLATFORM_FEE_BPS_DEFAULT` (backend/config/paymentsConfig.js, whose default in code
 * is 50 unless the server's environment sets it): keep the two the same.
 */
export const PLATFORM_FEE_BPS = 100

export const CTA_PRIMARY = 'Get started free'
/** The link to /demo (the Request a demo form), worded the same in the header, the footer and on the pages. */
export const CTA_DEMO = 'Request a demo'
export const DEMO_PATH = '/demo'
/** The form for a supplier or service company that wants to be on the marketplace. */
export const VENDORS_PATH = '/vendors'
export const CTA_NOTE = `Free for ordering & selling · Paid plans from $39 per location · ${GUARANTEE_DAYS}-day money-back guarantee`

export const SEGMENTS = [
  'Coffee shops',
  'Bakeries',
  'Restaurants',
  'Food distributors',
  'Service providers',
  'Retail stores',
  'Hotels',
  'Gyms & studios',
  'Franchises',
]

export const SITE_TAGLINE = 'One app for the team, the shifts and the money. Free to order and sell.'

export const SITE_DESCRIPTION =
  'Fork runs the whole business from one app: schedules, timecards, chat and performance reviews for your team, SOPs and a feed that keep every shift consistent, orders to your vendors and invoices to your customers, even when they are not on Fork.'
