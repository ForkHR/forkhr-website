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
    description: 'Order from your vendors, sell to your customers and get paid. No charge, no clock.',
    bullets: [
      'Order from unlimited vendors',
      'Standing orders & delivery schedules',
      'Sell & invoice your customers',
      'Online storefront with guest checkout',
      'Surprise bags of what is left today',
      'Service calls with technician visits',
      'Get paid online by card or bank transfer',
      'Vendor & customer chat, with email bridge',
      'Delivery routes with proof of delivery',
      'Unlimited catalog items & locations',
      'Link page & QR codes for every location',
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
      'NYC health inspection results',
      'Unlimited employees, roles & permissions',
    ],
    cta: 'Start with Essential',
  },
  {
    key: 'pro',
    name: 'Pro',
    price: 79,
    tagline: 'For growing teams',
    description: 'Paperless HR and a team that grows: onboarding, documents, performance reviews, recognitions and surveys.',
    bullets: [
      'Everything in Essential',
      'Performance reviews & raises',
      'Check-ins, goals & team feedback',
      'Onboarding guides',
      'Employment forms (W-4, I-9)',
      'Employee documents & expiry alerts',
      'Custom forms',
      'Shared library',
      'Learn tab for the whole team',
      'Recognitions & badges',
      'Surveys for your team and your customers',
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
      'Improvement plans',
      'Violations & termination records',
      'Events with RSVPs',
      'Reminders with alarms and questions',
      'App blocker for shifts',
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
      { key: 'storefront', label: 'Online storefront & guest checkout', minTier: 'free', note: 'Guest card payments carry the online payment fee' },
      { key: 'grabBags', label: 'Surprise bags: sell what is left today from your own page', minTier: 'free', note: 'Fork keeps 5% of the bags; customers pay a $1.49 service fee' },
      { key: 'service-calls', label: 'Service calls, technician visits & work reports', minTier: 'free' },
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
    label: 'Performance',
    features: [
      { key: 'performance', label: 'Performance reviews, written from the record', minTier: 'pro', note: 'Attendance, shifts, tasks, training and recognition beside every question' },
      { key: 'performance-cycles', label: 'Automatic 90-day & anniversary reviews', minTier: 'pro' },
      { key: 'performance-raises', label: 'Raises approved and applied to pay rates', minTier: 'pro' },
      { key: 'performance-feedback', label: 'Teammate & anonymous manager feedback', minTier: 'pro' },
      { key: 'performance-checkins', label: 'Check-ins, goals & notes', minTier: 'pro' },
      { key: 'improvement_plans', label: 'Improvement plans', minTier: 'premium' },
    ],
  },
  {
    label: 'Feed & learn',
    features: [
      { key: 'recognitions', label: 'Recognitions & badges', minTier: 'pro' },
      { key: 'surveys', label: 'Surveys', minTier: 'pro', note: 'For the team, or by a public link for customers' },
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
      { key: 'reminders', label: 'Reminders: your own, with alarms, questions and history', minTier: 'premium', note: "Fork's shift and clock-out reminders go out on every plan with Scheduling" },
      { key: 'appBlocker', label: 'App blocker during shifts', minTier: 'premium', note: 'Free on breaks, with a five-minute way out' },
    ],
  },
  {
    label: 'Locations',
    features: [
      { key: 'links', label: 'A link page for each location', minTier: 'free', note: 'Review, directions, call, Wi-Fi, hiring and your own buttons' },
      { key: 'link-codes', label: 'Links & QR codes, with scans and presses counted', minTier: 'free' },
      { key: 'review-links', label: 'Links that open your Google review form', minTier: 'free' },
      { key: 'public-surveys', label: 'Customer surveys by link, with low-rating alerts', minTier: 'pro' },
      { key: 'healthInspections', label: 'Health inspection results', minTier: 'essential', note: 'New York City only for now' },
    ],
  },
]

export const tierIncludes = (tier: TierKey, feature: Feature) => TIER_RANK[tier] >= TIER_RANK[feature.minTier]

export const tierByKey = (key: TierKey) => TIERS.find((t) => t.key === key) as Tier
