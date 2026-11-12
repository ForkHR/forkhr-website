// The site's two forms, sent from the visitor's browser to the app API (POST /public/leads/<kind>):
//
//   demo     /demo      "Request a demo": who they are, where, how many locations, what kind of business
//   vendor   /vendors   a supplier or service company asking to be on the marketplace
//
// The API stores the request and emails Fork's team; nothing is kept in the browser. The option
// lists below mirror the API's (backend/utils/leads.js and config/industries.js in the app repo):
// the API refuses a key it does not know, so change a list there first, then here.
import { API_URL, SUPPORT_EMAIL } from '@/lib/site'

export type LeadKind = 'demo' | 'vendor'

export type Option = { value: string; label: string }

/** "Primary state": the two-letter code is what is sent. */
export const US_STATES: Option[] = [
  ['AL', 'Alabama'], ['AK', 'Alaska'], ['AZ', 'Arizona'], ['AR', 'Arkansas'], ['CA', 'California'],
  ['CO', 'Colorado'], ['CT', 'Connecticut'], ['DE', 'Delaware'], ['DC', 'District of Columbia'], ['FL', 'Florida'],
  ['GA', 'Georgia'], ['HI', 'Hawaii'], ['ID', 'Idaho'], ['IL', 'Illinois'], ['IN', 'Indiana'],
  ['IA', 'Iowa'], ['KS', 'Kansas'], ['KY', 'Kentucky'], ['LA', 'Louisiana'], ['ME', 'Maine'],
  ['MD', 'Maryland'], ['MA', 'Massachusetts'], ['MI', 'Michigan'], ['MN', 'Minnesota'], ['MS', 'Mississippi'],
  ['MO', 'Missouri'], ['MT', 'Montana'], ['NE', 'Nebraska'], ['NV', 'Nevada'], ['NH', 'New Hampshire'],
  ['NJ', 'New Jersey'], ['NM', 'New Mexico'], ['NY', 'New York'], ['NC', 'North Carolina'], ['ND', 'North Dakota'],
  ['OH', 'Ohio'], ['OK', 'Oklahoma'], ['OR', 'Oregon'], ['PA', 'Pennsylvania'], ['RI', 'Rhode Island'],
  ['SC', 'South Carolina'], ['SD', 'South Dakota'], ['TN', 'Tennessee'], ['TX', 'Texas'], ['UT', 'Utah'],
  ['VT', 'Vermont'], ['VA', 'Virginia'], ['WA', 'Washington'], ['WV', 'West Virginia'], ['WI', 'Wisconsin'],
  ['WY', 'Wyoming'],
].map(([value, label]) => ({ value, label }))
/** A business outside the United States picks this, the list's last row. */
export const OUTSIDE_US: Option = { value: 'INTL', label: 'Outside the US' }
export const STATE_OPTIONS: Option[] = [...US_STATES, OUTSIDE_US]

/** "Total locations": plans are priced per location, so the ranges are finer than sign-up's. */
export const LOCATION_OPTIONS: Option[] = [
  { value: '1', label: '1 location' },
  { value: '2-5', label: '2–5 locations' },
  { value: '6-10', label: '6–10 locations' },
  { value: '11-25', label: '11–25 locations' },
  { value: '26-50', label: '26–50 locations' },
  { value: '51+', label: '51+ locations' },
]

/** "Business type": the app's sign-up industries, same keys and words. */
export const BUSINESS_TYPE_OPTIONS: Option[] = [
  { value: 'coffee-shop', label: 'Coffee shop' },
  { value: 'bakery', label: 'Bakery' },
  { value: 'restaurant', label: 'Restaurant' },
  { value: 'bar', label: 'Bar' },
  { value: 'retail', label: 'Retail store' },
  { value: 'hotel', label: 'Hotel' },
  { value: 'gym', label: 'Gym or studio' },
  { value: 'distributor', label: 'Food distributor' },
  { value: 'producer', label: 'Producer or roaster' },
  { value: 'service-provider', label: 'Service provider' },
  { value: 'other', label: 'Other' },
]

/**
 * "What do you supply?" on the vendor form: the marketplace's own category words for the goods
 * (the app's config/sellerCategories.js), services as one chip. Sent as written; the API keeps
 * up to twelve.
 */
export const SUPPLY_OPTIONS = [
  'Produce',
  'Dairy & eggs',
  'Meat & poultry',
  'Seafood',
  'Bakery',
  'Dry goods & pantry',
  'Frozen',
  'Beverages',
  'Coffee & tea',
  'Alcohol',
  'Packaging & disposables',
  'Cleaning & janitorial',
  'Kitchen equipment & smallwares',
  'Repairs & maintenance',
  'Other',
]

export type DemoValues = {
  email: string
  firstName: string
  lastName: string
  phone: string
  organization: string
  state: string
  locations: string
  businessType: string
}

export type VendorValues = {
  organization: string
  website: string
  firstName: string
  lastName: string
  email: string
  phone: string
  state: string
  categories: string[]
  deliveryArea: string
  note: string
}

export const EMPTY_DEMO: DemoValues = { email: '', firstName: '', lastName: '', phone: '', organization: '', state: '', locations: '', businessType: '' }
export const EMPTY_VENDOR: VendorValues = { organization: '', website: '', firstName: '', lastName: '', email: '', phone: '', state: '', categories: [], deliveryArea: '', note: '' }

export type LeadErrors = Record<string, string>

const EMAIL_SHAPE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const MIN_PHONE_DIGITS = 7

/** The fields both forms share, checked the way the API checks them, in the API's words. */
const contactErrors = (v: { email: string; firstName: string; lastName: string; phone: string; organization: string; state: string }, organizationMissing: string): LeadErrors => {
  const errors: LeadErrors = {}
  const email = v.email.trim()
  if (!email) errors.email = 'Enter your work email.'
  else if (!EMAIL_SHAPE.test(email)) errors.email = 'That email address does not look right.'
  if (!v.firstName.trim()) errors.firstName = 'Enter your first name.'
  if (!v.lastName.trim()) errors.lastName = 'Enter your last name.'
  if (!v.phone.trim()) errors.phone = 'Enter a phone number.'
  else if (v.phone.replace(/\D/g, '').length < MIN_PHONE_DIGITS) errors.phone = 'That phone number looks too short.'
  if (!v.organization.trim()) errors.organization = organizationMissing
  if (!v.state) errors.state = 'Pick a state.'
  return errors
}

export const demoErrors = (v: DemoValues): LeadErrors => {
  const errors = contactErrors(v, "Enter your organization's name.")
  if (!v.locations) errors.locations = 'Pick how many locations you have.'
  if (!v.businessType) errors.businessType = 'Pick a business type.'
  return errors
}

export const vendorErrors = (v: VendorValues): LeadErrors => {
  const errors = contactErrors(v, 'Enter your business name.')
  if (!v.categories.length) errors.categories = 'Pick at least one thing you supply.'
  return errors
}

/** Where the visitor came from, as the browser says it: another site's address and the page's utm tags. */
export const readSource = () => {
  if (typeof window === 'undefined') return {}
  const q = new URLSearchParams(window.location.search)
  let referrer = ''
  try {
    if (document.referrer && new URL(document.referrer).host !== window.location.host) referrer = document.referrer
  } catch {
    // an address the browser could not parse: leave it out
  }
  return {
    referrer: referrer.slice(0, 300),
    utmSource: (q.get('utm_source') || '').slice(0, 80),
    utmMedium: (q.get('utm_medium') || '').slice(0, 80),
    utmCampaign: (q.get('utm_campaign') || '').slice(0, 120),
  }
}

export type SendResult = { ok: true } | { ok: false; message: string; errors?: LeadErrors }

const TIMEOUT_MS = 15_000
export const SEND_FAILED = `We could not send this. Check your connection and try again, or email ${SUPPORT_EMAIL}.`

/**
 * Sends a form to the API. Never throws: a refusal comes back with the API's sentence (and its
 * sentence per field, when it names fields), anything else with SEND_FAILED.
 */
export const sendLead = async (kind: LeadKind, values: DemoValues | VendorValues, extra: Record<string, unknown> = {}): Promise<SendResult> => {
  try {
    const res = await fetch(`${API_URL}/public/leads/${kind}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ ...values, ...extra, source: readSource() }),
      signal: AbortSignal.timeout(TIMEOUT_MS),
    })
    if (res.ok) return { ok: true }
    const json = (await res.json().catch(() => null)) as { msg?: string; errors?: LeadErrors } | null
    // 400: a field is wrong; 429: too many from this address. Both carry a sentence worth showing.
    if ((res.status === 400 || res.status === 429) && json?.msg) return { ok: false, message: json.msg, errors: json.errors }
    return { ok: false, message: SEND_FAILED }
  } catch {
    return { ok: false, message: SEND_FAILED }
  }
}
