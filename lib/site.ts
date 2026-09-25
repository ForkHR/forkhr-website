// Shared marketing constants. Keep copy about the commercial model here so every page says
// the same thing: there is no trial any more — ordering & selling are free, paid plans are
// per location with a money-back guarantee (mirrors backend/config/billingConfig.js).

export const APP_URL = 'https://app.forkhr.com'
export const REGISTER_URL = `${APP_URL}/register`
export const LOGIN_URL = `${APP_URL}/login`
export const JOBS_URL = 'https://jobs.forkhr.com/'
export const SUPPORT_EMAIL = 'support@forkhr.com'

export const APP_STORE_URL = 'https://apps.apple.com/us/app/fork-hr-scheduling/id6754656709'
export const GOOGLE_PLAY_URL = 'https://play.google.com/store/apps/details?id=com.forkhr.fork'

export const GUARANTEE_DAYS = 30
export const REFERRAL_REWARD_MONTHS = 1
/** Platform fee on invoices paid online, in basis points (backend/config/paymentsConfig.js). */
export const PLATFORM_FEE_BPS = 50

export const CTA_PRIMARY = 'Get started free'
export const CTA_NOTE = `Free for ordering & selling · Paid plans from $39 per location · ${GUARANTEE_DAYS}-day money-back guarantee`

export const SEGMENTS = [
  'Coffee shops',
  'Bakeries',
  'Restaurants',
  'Food distributors',
  'Retail stores',
  'Hotels',
  'Gyms & studios',
  'Franchises',
]

export const SITE_DESCRIPTION =
  'Fork runs the whole business from one app: schedules, timecards and chat for your team, SOPs and a feed that keep every shift consistent, orders to your vendors and invoices to your customers, even when they are not on Fork.'
