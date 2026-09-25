// Plans and which tier unlocks which feature. Mirrors backend/config/entitlements.js in the
// app repo (the API's "catalog"). When a price or a tier changes there, change it here too.

export type TierKey = 'free' | 'essential' | 'pro' | 'premium'

export const TIER_RANK: Record<TierKey, number> = { free: 0, essential: 1, pro: 2, premium: 3 }

export type Tier = {
  key: TierKey
  name: string
  price: number
  tagline: string
  description: string
  bullets: string[]
  popular?: boolean
  cta: string
}

export const TIERS: Tier[] = [
  {
    key: 'free',
    name: 'Free',
    price: 0,
    tagline: 'Ordering & selling',
    description: 'Order from your vendors, sell to your customers and get paid. No card, no clock.',
    bullets: [
      'Order from unlimited vendors',
      'Standing orders & delivery schedules',
      'Sell & invoice your customers',
      'Get paid online by card or bank transfer',
      'Vendor & customer chat, with email bridge',
      'Delivery routes with proof of delivery',
      'Unlimited catalog items & locations',
    ],
    cta: 'Start for free',
  },
  {
    key: 'essential',
    name: 'Essential',
    price: 39,
    tagline: 'For small teams starting out',
    description: 'Schedules, timecards and chat for the team, on top of everything in Free.',
    bullets: [
      'Everything in Free',
      'Drag-and-drop scheduling',
      'Open shifts, trades & availability',
      'Time off requests',
      'Timecards with kiosk & GPS clock-in',
      'Team chat by location and job',
      'Announcements with read receipts',
      'Hiring & public job board',
      'Stock counts & par levels',
      'Labor reports & Square sales sync',
      'Unlimited employees, roles & permissions',
    ],
    cta: 'Start with Essential',
  },
  {
    key: 'pro',
    name: 'Pro',
    price: 79,
    tagline: 'For growing teams',
    description: 'Paperless HR and an engaged team: onboarding, documents, recognitions and surveys.',
    bullets: [
      'Everything in Essential',
      'Onboarding guides',
      'Employment forms (W-4, I-9)',
      'Employee documents & expiry alerts',
      'Custom forms',
      'Shared library',
      'Learn tab for the whole team',
      'Recognitions & badges',
      'Employee surveys',
    ],
    popular: true,
    cta: 'Start with Pro',
  },
  {
    key: 'premium',
    name: 'Premium',
    price: 129,
    tagline: 'Run every shift the same way',
    description: 'SOPs, training, policies, contracts and an AI assistant trained on your content.',
    bullets: [
      'Everything in Pro',
      'SOPs: boards, procedures & checklists',
      'Temperature, waste & cash logs',
      'Training courses',
      'Policies & handbook acknowledgements',
      'Company FAQs',
      'Contracts & e-signatures',
      'Violations & termination records',
      'Events with RSVPs',
      'AI assistant',
      'Advanced reports',
      'Priority support',
    ],
    cta: 'Start with Premium',
  },
]

export type Feature = {
  key: string
  label: string
  minTier: TierKey
  note?: string
}

export type FeatureGroup = {
  label: string
  features: Feature[]
}

// One row per product area, in the order the comparison table shows them.
export const FEATURE_GROUPS: FeatureGroup[] = [
  {
    label: 'Supply & sales',
    features: [
      { key: 'supply', label: 'Order from vendors', minTier: 'free' },
      { key: 'standing-orders', label: 'Standing orders', minTier: 'free' },
      { key: 'vendor', label: 'Sell & deliver to customers', minTier: 'free' },
      { key: 'invoices', label: 'Invoices & online payments', minTier: 'free', note: 'Card and US bank transfer' },
      { key: 'routes', label: 'Delivery routes & proof of delivery', minTier: 'free' },
      { key: 'external-chat', label: 'Vendor & customer chat (email bridge)', minTier: 'free' },
      { key: 'inventory', label: 'Stock counts & par levels', minTier: 'essential' },
    ],
  },
  {
    label: 'Team',
    features: [
      { key: 'schedule', label: 'Scheduling, open shifts & trades', minTier: 'essential' },
      { key: 'time-off-requests', label: 'Time off requests & balances', minTier: 'essential' },
      { key: 'timecards', label: 'Timecards, kiosk & GPS clock-in', minTier: 'essential' },
      { key: 'communications', label: 'Team chat', minTier: 'essential' },
      { key: 'updates', label: 'Announcements with read receipts', minTier: 'essential' },
      { key: 'hiring', label: 'Hiring & job board', minTier: 'essential' },
      { key: 'reports-essential', label: 'Labor & attendance reports', minTier: 'essential' },
      { key: 'pos_sales_labor', label: 'Sales vs. labor (Square sync)', minTier: 'essential' },
    ],
  },
  {
    label: 'People & HR',
    features: [
      { key: 'onboarding', label: 'Onboarding guides', minTier: 'pro' },
      { key: 'employment-forms', label: 'Employment forms (W-4, I-9)', minTier: 'pro' },
      { key: 'documents', label: 'Employee documents & expiry alerts', minTier: 'pro' },
      { key: 'forms', label: 'Custom forms', minTier: 'pro' },
      { key: 'contracts', label: 'Contracts & e-signatures', minTier: 'premium' },
      { key: 'violations', label: 'Violations', minTier: 'premium' },
      { key: 'termination-records', label: 'Termination records', minTier: 'premium' },
    ],
  },
  {
    label: 'Feed & learn',
    features: [
      { key: 'recognitions', label: 'Recognitions & badges', minTier: 'pro' },
      { key: 'surveys', label: 'Surveys', minTier: 'pro' },
      { key: 'library', label: 'Shared library', minTier: 'pro' },
      { key: 'learn', label: 'Learn tab', minTier: 'pro' },
      { key: 'courses', label: 'Training courses', minTier: 'premium' },
      { key: 'policies', label: 'Policies & acknowledgements', minTier: 'premium' },
      { key: 'faqs', label: 'Company FAQs', minTier: 'premium' },
      { key: 'events', label: 'Events & RSVPs', minTier: 'premium' },
      { key: 'ai', label: 'AI assistant', minTier: 'premium' },
    ],
  },
  {
    label: 'Operations',
    features: [
      { key: 'processes', label: 'SOPs: boards, procedures & runs', minTier: 'premium' },
      { key: 'check-lists', label: 'Checklists with photos & signatures', minTier: 'premium' },
      { key: 'logs', label: 'Temperature, waste & cash logs', minTier: 'premium' },
      { key: 'reports-premium', label: 'Advanced & SOP reports', minTier: 'premium' },
    ],
  },
]

export const tierIncludes = (tier: TierKey, feature: Feature) => TIER_RANK[tier] >= TIER_RANK[feature.minTier]

export const tierByKey = (key: TierKey) => TIERS.find((t) => t.key === key) as Tier
