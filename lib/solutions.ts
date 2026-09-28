// Solution pages, written the way people search: by the kind of business they run and by
// the job they need done. One config renders through components/marketing/SolutionPage.tsx.
// Existing hand-built pages (compliance, franchise, ...) are listed in the menu too.
//
// Copy rules: one short sentence per lede, three bullets of a few words, answers of at most
// two sentences. People skim.
import type { TierKey } from './catalog'
import { PLATFORM_FEE_BPS } from './site'

export type PreviewKey =
  | 'schedule'
  | 'timecards'
  | 'chat'
  | 'feed'
  | 'sops'
  | 'sopsPhone'
  | 'learn'
  | 'people'
  | 'peopleFitness'
  | 'hiring'
  | 'supply'
  | 'vendorChat'
  | 'customerChat'
  | 'invoice'
  | 'route'
  | 'report'
  | 'ai'

export type SolutionFeature = {
  eyebrow: string
  title: string
  lede: string
  bullets: string[]
  preview: PreviewKey
  previewTitle: string
  plan: TierKey
  href?: string
  hrefLabel?: string
}

export type Solution = {
  slug: string
  kind: 'business' | 'need'
  menuLabel: string
  menuDesc: string
  menuPreview: PreviewKey
  name: string
  title: string
  description: string
  h1: string
  lede: string
  plan?: TierKey
  heroPreview: PreviewKey
  heroPreviewTitle: string
  pains: { before: string; after: string }[]
  features: SolutionFeature[]
  pricing: { free: string[]; paidTier: TierKey; paid: string[]; note: string }
  faqs: { q: string; a: string }[]
  related: string[]
  ctaTitle: string
}

const feePct = (PLATFORM_FEE_BPS / 100).toFixed(1).replace(/\.0$/, '')

export const SOLUTIONS: Solution[] = [
  // ── By business ─────────────────────────────────────────────────────────
  {
    slug: 'coffee-shops-bakeries',
    kind: 'business',
    menuLabel: 'Coffee shops & bakeries',
    menuDesc: 'From the 5 AM open to the wholesale invoice',
    menuPreview: 'schedule',
    name: 'Coffee shops and bakeries',
    title: 'Coffee Shop & Bakery Software: Scheduling, Checklists, Vendor Orders & Wholesale Invoicing',
    description:
      'Fork runs a coffee shop or bakery from the 5 AM open to the wholesale invoice: barista schedules and trades, opening checklists and fridge temperature logs, orders to the roaster and the dairy, and invoices to the cafés you deliver to. Ordering and selling are free.',
    h1: 'Runs a coffee shop or bakery, from the 5 AM open to the wholesale invoice',
    lede: 'Barista schedules. Opening checklists and fridge temps. Orders to the dairy. Invoices to the cafés you supply.',
    heroPreview: 'schedule',
    heroPreviewTitle: 'Fork · Schedule · Main St',
    pains: [
      { before: 'The schedule lives in a group chat', after: 'One schedule on every phone' },
      { before: 'Fridge temps on a clipboard', after: 'A QR code on each fridge starts the check' },
      { before: 'Texting the dairy at 10 PM', after: 'One chat per vendor, next to its orders' },
      { before: 'Wholesale invoices in a spreadsheet', after: 'Invoice from the order. Paid from a link' },
    ],
    features: [
      {
        eyebrow: 'Scheduling & timecards',
        plan: 'essential',
        title: 'Baristas set availability. You publish.',
        lede: 'Every phone gets the week. The register tablet is the clock.',
        bullets: ['Open shifts and trades', 'Kiosk or GPS clock-in', 'Tip pool split by hours'],
        preview: 'timecards',
        previewTitle: 'Fork · Timecards · Today',
      },
      {
        eyebrow: 'Checklists',
        plan: 'premium',
        title: 'Opening, closing and machine care, the same every shift',
        lede: 'Checklists start with the shift. Fridges carry a QR code.',
        bullets: ['Opening and closing checklists', 'Daily clean, weekly backflush per machine', 'Pastry waste logged with its cost'],
        preview: 'sops',
        previewTitle: 'Fork · SOPs · Opening checklist',
        href: '/sops',
        hrefLabel: 'Explore SOPs',
      },
      {
        eyebrow: 'Supply',
        plan: 'free',
        title: 'Beans, milk and cups, one order screen',
        lede: 'Standing orders to the dairy. Vendor replies land in the chat.',
        bullets: ['Standing orders every Monday', 'Vendor chat over email', 'Stock counts with par levels (Essential)'],
        preview: 'vendorChat',
        previewTitle: 'Fork · Chat · Bluebird Dairy',
        href: '/supply',
        hrefLabel: 'Explore supply',
      },
      {
        eyebrow: 'Wholesale',
        plan: 'free',
        title: 'Bake for other shops? Get paid online',
        lede: 'Standing orders from cafés, a route for the van, an invoice with a pay link.',
        bullets: ['Price list per café', 'Card and bank payments through Stripe', 'Route with proof of delivery'],
        preview: 'invoice',
        previewTitle: 'Fork · Sales · Order S-2088',
        href: '/sales',
        hrefLabel: 'Explore selling',
      },
    ],
    pricing: {
      free: ['Vendor orders and standing orders', 'Wholesale orders and invoices', 'Vendor and customer chat', 'Delivery routes'],
      paidTier: 'essential',
      paid: ['Barista schedule, open shifts, trades', 'Kiosk and GPS clock-in, tip pool', 'Team chat and announcements', 'Stock counts with par levels'],
      note: 'Checklists and temperature logs are on Premium.',
    },
    faqs: [
      { q: 'Is there a free plan for a small coffee shop?', a: 'Yes. Ordering, wholesale, invoicing and vendor chat are free. Scheduling and timecards are $39 per location per month, unlimited employees.' },
      { q: 'Can baristas swap shifts on their phone?', a: 'Yes. A teammate with the right job takes the shift and a manager approves in one tap.' },
      { q: 'Does it work for a bakery that sells wholesale?', a: 'Yes. Catalog, standing orders, routes and invoices. Customers pay from a link or QR code and never need an account.' },
      { q: 'Can I order from vendors that do not use Fork?', a: 'Yes. Add them by name and email. Orders and messages go out as email; replies land back in the chat.' },
      { q: 'Does Fork do fridge temperature logs?', a: 'Yes, on Premium. Scan the QR on the fridge to log it. Out of range fails the run and schedules a recheck.' },
    ],
    related: ['restaurants', 'food-distributors', 'employee-scheduling', 'food-safety-checklists'],
    ctaTitle: 'Run your coffee shop or bakery from one app',
  },
  {
    slug: 'restaurants',
    kind: 'business',
    menuLabel: 'Restaurants',
    menuDesc: 'Schedule, line checks, vendors, labor vs. sales',
    menuPreview: 'timecards',
    name: 'Restaurants',
    title: 'Restaurant Scheduling, Time Clock, Line Checks & Vendor Ordering Software',
    description:
      'Restaurant staff scheduling with open shifts and trades, a time clock with tip pooling, opening and closing line checks, temperature and waste logs from a QR code, vendor orders in one place and labor cost against Square sales. Vendor ordering is free.',
    h1: 'One app for the whole restaurant',
    lede: 'Schedule, line checks, vendor orders, and labor against sales by the hour.',
    heroPreview: 'timecards',
    heroPreviewTitle: 'Fork · Timecards · Today',
    pains: [
      { before: 'Labor % is a guess until payroll', after: 'Labor % live, against Square sales' },
      { before: 'Line checks on paper, gone by Friday', after: 'Checklists on a phone, kept forever' },
      { before: 'Vendor orders by text and three portals', after: 'One order screen for every vendor' },
      { before: 'Tip-out on the back of a receipt', after: 'Tip pool split by hours, on record' },
    ],
    features: [
      {
        eyebrow: 'Scheduling & timecards',
        plan: 'essential',
        title: 'Schedule the week, clock in at the pass, split the tips',
        lede: 'Trades with approval. The tablet by the pass is the kiosk.',
        bullets: ['Open shifts, trades, availability', 'Late and missed-break flags', 'Tip pool by hours, evenly, or by hand'],
        preview: 'schedule',
        previewTitle: 'Fork · Schedule · Main St',
      },
      {
        eyebrow: 'Line checks & food safety',
        plan: 'premium',
        title: 'Line checks and walk-in temps that get done',
        lede: 'Checklists start with the shift. Each cold unit carries a QR code.',
        bullets: ['Out of range fails the run, schedules a recheck', 'Waste log with cost, cash count with photo', 'NYC DOHMH inspection results in Reports'],
        preview: 'sops',
        previewTitle: 'Fork · SOPs · Opening checklist',
        href: '/sops',
        hrefLabel: 'Explore SOPs',
      },
      {
        eyebrow: 'Labor against sales',
        plan: 'essential',
        title: 'See the hours that lose money',
        lede: 'Connect Square. Labor % by hour, day and location.',
        bullets: ['Square sales synced every 20 minutes', 'Scheduled vs. actual hours', 'On-time arrival, shift performance (Premium)'],
        preview: 'report',
        previewTitle: 'Fork · Reports · Sales vs. labor',
      },
      {
        eyebrow: 'Supply',
        plan: 'free',
        title: 'Every vendor order in one place',
        lede: 'Orders go out as email. Replies come back as chat.',
        bullets: ['One-time and standing orders', 'Check in deliveries, request credits', 'Invoices payable next to the order'],
        preview: 'supply',
        previewTitle: 'Fork · Supply · Orders',
        href: '/supply',
        hrefLabel: 'Explore supply',
      },
    ],
    pricing: {
      free: ['Vendor orders and receiving', 'Vendor chat with email bridge', 'Invoices payable'],
      paidTier: 'essential',
      paid: ['Schedule, open shifts, trades', 'Kiosk and GPS time clock, tip pool', 'Team chat and announcements', 'Labor reports and Square sync'],
      note: 'Line checks, temperature logs and the assistant are on Premium.',
    },
    faqs: [
      { q: 'Does Fork connect to Square?', a: 'Yes. Sales sync every 20 minutes, so you see labor % by hour. Included from Essential.' },
      { q: 'Can servers pick up open shifts?', a: 'Yes. Everyone with the right job is notified; a manager approves trades in a tap.' },
      { q: 'How does tip pooling work?', a: 'A manager splits a pot across the timecards it covers, by hours, evenly or by hand. Each split is kept on record.' },
      { q: 'Can I log walk-in temperatures?', a: 'Yes, on Premium. Scan the QR on the unit. Out of range fails the run and schedules a recheck.' },
      { q: 'Do my vendors need to be on Fork?', a: 'No. Orders and messages go out as email and replies come back into the chat. Vendor ordering is free.' },
      { q: 'What does it cost per location?', a: 'Vendor ordering is free. Essential is $39, Pro $79, Premium $129 per location per month. Unlimited employees.' },
    ],
    related: ['coffee-shops-bakeries', 'food-safety-checklists', 'employee-scheduling', 'multi-location'],
    ctaTitle: 'Run your restaurant from one app',
  },
  {
    slug: 'food-distributors',
    kind: 'business',
    menuLabel: 'Food distributors & commissaries',
    menuDesc: 'Orders, routes, invoices, paid online',
    menuPreview: 'invoice',
    name: 'Food distributors and commissaries',
    title: 'Wholesale Order Management, Invoicing & Delivery Route Software for Food Distributors',
    description:
      'Take wholesale orders, plan the delivery route, invoice from the order and get paid by card or US bank transfer. Your customers never need an account. Free for unlimited customers and catalog items.',
    h1: 'Take orders, run the route, get paid. Your customers never need an account.',
    lede: 'Price lists per customer, standing orders, routes with ETAs, invoices with a pay link.',
    plan: 'free',
    heroPreview: 'invoice',
    heroPreviewTitle: 'Fork · Sales · Order S-2088',
    pains: [
      { before: 'Orders by text, email and voicemail', after: 'One order list' },
      { before: 'Invoices chased for weeks', after: 'Pay link and QR on every invoice' },
      { before: 'Drivers with a printed list', after: 'Stops in order, a photo at each one' },
      { before: 'Every customer needs a portal account', after: 'No account needed' },
    ],
    features: [
      {
        eyebrow: 'Orders',
        plan: 'free',
        title: 'Standing orders that write themselves',
        lede: 'Every Monday, 24 sourdough. Generated ahead, emailed for confirmation.',
        bullets: ['Price list per customer', 'Import from a spreadsheet', 'Credits taken off the invoice'],
        preview: 'customerChat',
        previewTitle: 'Fork · Chat · Corner Café',
      },
      {
        eyebrow: 'Invoices & payments',
        plan: 'free',
        title: 'Invoices that get paid',
        lede: 'Email with a pay link, QR code on the PDF, payout to your bank.',
        bullets: ['Terms per customer: prepaid, COD, Net 7 to 60', 'Card and US bank transfer', 'Paid, failed, refunded synced to the order'],
        preview: 'invoice',
        previewTitle: 'Fork · Sales · Invoice',
        href: '/sales#payments',
        hrefLabel: 'How you get paid',
      },
      {
        eyebrow: 'Routes',
        plan: 'free',
        title: 'Deliver on the best route',
        lede: 'Stops ordered on real roads. The driver checks each off with a photo.',
        bullets: ['ETA per stop', 'Proof of delivery on the order', 'Orders move to Delivered as dropped'],
        preview: 'route',
        previewTitle: 'Fork · Routes · Thu, Sep 25',
      },
      {
        eyebrow: 'Your team',
        plan: 'essential',
        title: 'Drivers, packers and bakers on one schedule',
        lede: 'Shifts by route and station. GPS from the van, kiosk at the warehouse.',
        bullets: ['Published to every phone', 'Team chat by depot', 'Production and cold-chain logs (Premium)'],
        preview: 'schedule',
        previewTitle: 'Fork · Schedule · Warehouse',
      },
    ],
    pricing: {
      free: ['Catalog, customers, orders', 'Invoices with card and bank payments', 'Delivery routes', 'Customer chat with email bridge'],
      paidTier: 'essential',
      paid: ['Driver and warehouse schedule', 'GPS and kiosk time clock', 'Team chat and announcements', 'Stock counts with par levels'],
      note: `${feePct}% platform fee plus Stripe processing on online payments. No fee on invoices settled outside Fork.`,
    },
    faqs: [
      { q: 'Do my customers need a Fork account?', a: 'No. They pay from the emailed link or the QR code on the PDF. They can claim an account later with the same email.' },
      { q: 'What does it cost to sell through Fork?', a: `Nothing to start. When a customer pays online, Fork keeps ${feePct}% and Stripe charges its processing fee.` },
      { q: 'How do I get paid?', a: 'Through Stripe, straight to your bank account. Paid, failed and refunded states sync onto the order.' },
      { q: 'Can I import my customers and catalog?', a: 'Yes, from a spreadsheet. Customer item names can be linked to your SKUs.' },
      { q: 'Can I plan routes for several vans?', a: 'Yes. Each route takes the orders you pick, orders the stops and shows in the driver\'s Deliveries tab.' },
    ],
    related: ['coffee-shops-bakeries', 'restaurants', 'employee-scheduling'],
    ctaTitle: 'Take your first order through Fork this week',
  },
  {
    slug: 'retail',
    kind: 'business',
    menuLabel: 'Retail stores',
    menuDesc: 'Floor schedule, kiosk clock, store checklists',
    menuPreview: 'schedule',
    name: 'Retail stores',
    title: 'Retail Store Employee Scheduling, Time Clock & Store Checklist Software',
    description:
      'Staff the floor with a schedule that publishes to every phone, clock in from a tablet at the counter, open and close the same way every day with a cash count and a photo, and see labor against sales. Unlimited employees per location.',
    h1: 'Staff the floor. Open and close the same way.',
    lede: 'Schedules with trades, a kiosk at the counter, checklists with a cash count and a photo.',
    heroPreview: 'schedule',
    heroPreviewTitle: 'Fork · Schedule · Downtown',
    pains: [
      { before: 'Coverage gaps found Saturday morning', after: 'Open shifts posted, conflicts caught first' },
      { before: 'Cash count on a notepad', after: 'A cash count step, with who and when' },
      { before: 'Head-office news nobody read', after: 'Announcements people confirm' },
      { before: 'New hires learning on the floor', after: 'Courses by role, completion tracked' },
    ],
    features: [
      {
        eyebrow: 'Scheduling & timecards',
        plan: 'essential',
        title: 'A week built in minutes',
        lede: 'Availability and trades in view. The counter tablet is the clock.',
        bullets: ['Kiosk clock-in with PINs', 'Late and early flags', 'Labor % live, against Square sales'],
        preview: 'timecards',
        previewTitle: 'Fork · Timecards · Today',
      },
      {
        eyebrow: 'Store checklists',
        plan: 'premium',
        title: 'Open and close the same way in every store',
        lede: 'Cash count against the float. A photo of the floor. Missed steps visible by morning.',
        bullets: ['Opening and closing checklists', 'Merchandising checks with photos', 'Reports per store'],
        preview: 'sops',
        previewTitle: 'Fork · SOPs · Opening checklist',
        href: '/sops',
        hrefLabel: 'Explore SOPs',
      },
      {
        eyebrow: 'Feed & learn',
        plan: 'essential',
        title: 'Announcements people confirm, training people finish',
        lede: 'The feed is the home tab. Product knowledge one tap away.',
        bullets: ['Pinned announcements with confirmations', 'Recognitions and surveys (Pro)', 'Product courses and FAQs (Premium)'],
        preview: 'feed',
        previewTitle: 'Fork · Feed',
      },
      {
        eyebrow: 'People & HR',
        plan: 'pro',
        title: 'Paperless onboarding for seasonal hiring',
        lede: 'Post the job, hire, and the forms arrive on their phone.',
        bullets: ['Public job board (Essential)', 'W-4, I-9 and custom forms', 'Documents with expiry reminders'],
        preview: 'people',
        previewTitle: 'Fork · People · Jordan Lee',
      },
    ],
    pricing: {
      free: ['Ordering from suppliers and vendor chat'],
      paidTier: 'essential',
      paid: ['Schedule, trades, availability', 'Kiosk time clock', 'Announcements and team chat', 'Hiring and job board'],
      note: 'Store checklists and courses are on Premium; onboarding and forms on Pro.',
    },
    faqs: [
      { q: 'Is pricing per employee?', a: 'No. Per store per month, every employee included.' },
      { q: 'Can I use an iPad as a time clock?', a: 'Yes. Any tablet becomes a kiosk with a PIN per person. Phones work too, with a GPS fence.' },
      { q: 'Can staff trade shifts?', a: 'Yes. Offered to teammates with the right job, approved by a manager in a tap.' },
      { q: 'Does it work for several stores?', a: 'Yes. One plan, one login, every store side by side.' },
      { q: 'Can I track opening and closing tasks?', a: 'Yes, on Premium. Checklists start with the shift and keep photos, counts and times.' },
    ],
    related: ['multi-location', 'franchise', 'employee-scheduling', 'compliance'],
    ctaTitle: 'Run your stores from one app',
  },
  {
    slug: 'gyms-studios',
    kind: 'business',
    menuLabel: 'Gyms & studios',
    menuDesc: 'Desk, trainers, cleaning routines, certs',
    menuPreview: 'sops',
    name: 'Gyms and fitness studios',
    title: 'Gym & Fitness Studio Staff Scheduling, Time Clock & Cleaning Checklist Software',
    description:
      'Front desk, trainers and cleaning crews on one schedule, kiosk clock-in at the desk, cleaning and equipment care routines with a photo when done, and CPR and trainer certifications with expiry reminders. Unlimited staff per location.',
    h1: 'Front desk, trainers and cleaners on one schedule',
    lede: 'Class cover with approval, a kiosk at the desk, cleaning routines with a photo, certs that never lapse.',
    heroPreview: 'schedule',
    heroPreviewTitle: 'Fork · Schedule · Front desk',
    pains: [
      { before: 'Class cover arranged by text', after: 'Open shifts only the right job can claim' },
      { before: 'Cleaning rota on a laminated sheet', after: 'Routines per machine, photo when done' },
      { before: 'Expired CPR cert found at audit', after: 'Expiry reminders and renewal requests' },
      { before: 'Front desk news by word of mouth', after: 'Announcements people confirm' },
    ],
    features: [
      {
        eyebrow: 'Scheduling & timecards',
        plan: 'essential',
        title: 'Desk, classes and floor on one schedule',
        lede: 'Shifts by job, so cover only goes to people who can teach it.',
        bullets: ['Kiosk at the desk, GPS off-site', 'Late flags, breaks, overtime', 'Timecards approved and exported'],
        preview: 'schedule',
        previewTitle: 'Fork · Schedule · Front desk',
      },
      {
        eyebrow: 'Cleaning & equipment care',
        plan: 'premium',
        title: 'Every machine on a routine',
        lede: 'Daily wipe-down, weekly inspection, photo when done. Out of service raises an issue.',
        bullets: ['Routines per machine and area', 'Locker room rota per shift', 'Reports on what was missed'],
        preview: 'sops',
        previewTitle: 'Fork · SOPs · Opening checklist',
        href: '/sops',
        hrefLabel: 'Explore SOPs',
      },
      {
        eyebrow: 'Certifications & HR',
        plan: 'pro',
        title: 'Certifications that never lapse quietly',
        lede: 'CPR, first aid and trainer certs on the employee, with a reminder before they expire.',
        bullets: ['Expiry reminders and renewal requests', 'Onboarding guides for new hires', 'Forms signed on a phone'],
        preview: 'peopleFitness',
        previewTitle: 'Fork · People · Jordan Lee',
      },
      {
        eyebrow: 'Feed & learn',
        plan: 'essential',
        title: 'Keep a part-time team in the loop',
        lede: 'Most of the team works a few shifts a week. The feed is where they catch up.',
        bullets: ['Announcements with confirmations', 'Recognitions for great classes (Pro)', 'Courses and FAQs (Premium)'],
        preview: 'feed',
        previewTitle: 'Fork · Feed',
      },
    ],
    pricing: {
      free: ['Ordering supplies and vendor chat'],
      paidTier: 'essential',
      paid: ['Schedule with open shifts and trades', 'Kiosk and GPS time clock', 'Announcements and team chat', 'Hiring and job board'],
      note: 'Certifications and onboarding on Pro; cleaning routines and courses on Premium.',
    },
    faqs: [
      { q: 'Can only qualified trainers pick up a class?', a: 'Yes. Open shifts are tied to a job. Trades are approved by a manager.' },
      { q: 'Can I track CPR and trainer certifications?', a: 'Yes, on Pro. Each cert has an expiry date, a reminder, and a renewal request.' },
      { q: 'Is there a cleaning checklist?', a: 'Yes, on Premium. Areas and machines as items, a schedule per routine, a photo when done.' },
      { q: 'Do part-timers count toward pricing?', a: 'No. Per location per month, unlimited staff.' },
      { q: 'Can staff clock in at the front desk?', a: 'Yes. The desk tablet becomes a kiosk with a PIN per person.' },
    ],
    related: ['retail', 'employee-scheduling', 'multi-location', 'employee-retention'],
    ctaTitle: 'Run your gym or studio from one app',
  },

  // ── By need ─────────────────────────────────────────────────────────────
  {
    slug: 'employee-scheduling',
    kind: 'need',
    menuLabel: 'Employee scheduling',
    menuDesc: 'Open shifts, trades, availability, time clock',
    menuPreview: 'schedule',
    name: 'Employee scheduling',
    title: 'Employee Scheduling App for Hourly Teams: Open Shifts, Trades, Availability & Time Clock',
    description:
      'Build the week in minutes, publish to every phone, let staff claim open shifts and trade with approval, and clock in from a kiosk or GPS. $39 per location per month with unlimited employees.',
    h1: 'Employee scheduling that publishes to every phone',
    lede: 'Build the week. Publish once. Open shifts get claimed, trades get approved, hours go to payroll.',
    plan: 'essential',
    heroPreview: 'schedule',
    heroPreviewTitle: 'Fork · Schedule · Main St',
    pains: [
      { before: 'A spreadsheet photographed into the group chat', after: 'One schedule, always current' },
      { before: 'Someone forgot they asked Saturday off', after: 'Time off in view, conflicts caught first' },
      { before: 'Swaps by text you hear about later', after: 'Trades approved in a tap' },
      { before: 'Hours typed into payroll by hand', after: 'Timecards approved and exported' },
    ],
    features: [
      {
        eyebrow: 'Build the week',
        plan: 'essential',
        title: 'Templates. Copy last week. Drag to move.',
        lede: 'Availability, time off and totals stay in view while you build.',
        bullets: ['Weekly templates', 'Shift tasks and notes', 'Overlaps and clashes flagged'],
        preview: 'schedule',
        previewTitle: 'Fork · Schedule · Main St',
      },
      {
        eyebrow: 'Open shifts & trades',
        plan: 'essential',
        title: 'Coverage without the phone calls',
        lede: 'Post an open shift. Everyone with the right job is notified.',
        bullets: ['Trades approved by a manager', 'Time off with balances', 'A post in the team chat on every change'],
        preview: 'chat',
        previewTitle: 'Fork · Chat · #main-st',
      },
      {
        eyebrow: 'Timecards',
        plan: 'essential',
        title: 'From clock-in to payroll',
        lede: 'Any tablet is a kiosk. Phones clock in inside a GPS fence.',
        bullets: ['Punches checked against the shift', 'Breaks and overtime applied', 'Approve the week, export, split tips'],
        preview: 'timecards',
        previewTitle: 'Fork · Timecards · Today',
      },
      {
        eyebrow: 'Reports',
        plan: 'essential',
        title: 'Scheduled vs. actual, labor vs. sales',
        lede: 'Where the plan and the punches diverge, and what it costs.',
        bullets: ['Scheduled vs. actual hours', 'Labor cost by hour', 'Sales vs. labor with Square'],
        preview: 'report',
        previewTitle: 'Fork · Reports · Sales vs. labor',
      },
    ],
    pricing: {
      free: ['Ordering and selling stay free'],
      paidTier: 'essential',
      paid: ['Scheduling, open shifts, trades', 'Time off requests', 'Timecards with kiosk and GPS', 'Team chat, announcements, hiring'],
      note: 'One price per location, every employee included.',
    },
    faqs: [
      { q: 'How much does employee scheduling cost?', a: 'Essential is $39 per location per month with unlimited employees. 30-day money-back guarantee.' },
      { q: 'Is there a mobile app for staff?', a: 'Yes, iOS and Android. Schedule, availability, time off, trades, clock-in and chat.' },
      { q: 'Can employees swap shifts?', a: 'Yes. Offered to teammates with the right job, approved by a manager in a tap.' },
      { q: 'Does it include a time clock?', a: 'Yes. Any tablet becomes a kiosk with PINs. Phones clock in inside a GPS fence.' },
      { q: 'Can I export hours to payroll?', a: 'Yes. Approve the week and export the timecards for your payroll provider.' },
      { q: 'Does it catch scheduling conflicts?', a: 'Yes. Overlaps, double bookings and shifts on approved time off are flagged before publishing.' },
    ],
    related: ['restaurants', 'retail', 'coffee-shops-bakeries', 'multi-location'],
    ctaTitle: "Publish next week's schedule from Fork",
  },
  {
    slug: 'food-safety-checklists',
    kind: 'need',
    menuLabel: 'Food safety & checklists',
    menuDesc: 'Opening, closing, temperature and waste logs',
    menuPreview: 'sops',
    name: 'Food safety and checklists',
    title: 'Restaurant Checklist & Food Safety Log App: Opening, Closing, Temperature Logs',
    description:
      'Opening and closing checklists, fridge and hot-hold temperature logs from a QR code, waste and cash logs, with photos and signatures kept on every run. A failed check schedules a recheck. Reports by location, printable for the inspector.',
    h1: 'Checklists and temperature logs your team actually completes',
    lede: 'Checklists start with the shift. Temps from a QR code. A fail schedules a recheck.',
    plan: 'premium',
    heroPreview: 'sops',
    heroPreviewTitle: 'Fork · SOPs · Opening checklist',
    pains: [
      { before: 'Paper logs filled in from memory', after: 'Timestamped steps on a phone' },
      { before: 'A warm fridge noticed next morning', after: 'Out of range fails the run, schedules a recheck' },
      { before: 'Nobody knows who skipped what', after: 'Reports: what was missed, by whom' },
      { before: 'The inspector asks for six months of logs', after: 'Every run kept. Print or PDF' },
    ],
    features: [
      {
        eyebrow: 'Runs',
        plan: 'premium',
        title: 'A checklist that runs itself',
        lede: 'Triggered by the shift, assigned to whoever is on, chased when late.',
        bullets: ['Numbers in range, photos, signatures, timers', 'Assigned to a job or the person on shift', 'Early, late or skipped, visible to the manager'],
        preview: 'sops',
        previewTitle: 'Fork · SOPs · Opening checklist',
        href: '/sops',
        hrefLabel: 'How SOPs work',
      },
      {
        eyebrow: 'Temperature logs',
        plan: 'premium',
        title: 'Fridges and hot-holds on a QR code',
        lede: 'Scan the unit to start its check. The reading is tied to the right fridge.',
        bullets: ['Critical control points with rechecks', 'Corrective action required to close', 'History per unit'],
        preview: 'sopsPhone',
        previewTitle: 'Fork · SOPs',
      },
      {
        eyebrow: 'Waste & cash logs',
        plan: 'premium',
        title: 'Waste and cash, logged in seconds',
        lede: 'Item, quantity, reason. Cost from the supply product.',
        bullets: ['Cash count with the expected float', 'Voided entries need a note', 'Waste and cash reports by location'],
        preview: 'supply',
        previewTitle: 'Fork · Supply · Stock count',
      },
      {
        eyebrow: 'Reports & inspections',
        plan: 'premium',
        title: 'Ready for the inspector',
        lede: 'Seven reports by location. Print or export as PDF.',
        bullets: ['Missed, waste, cash movement, staff', 'NYC DOHMH results and grades in Reports', 'Starter templates: shift routines, temps, waste, cash, cleaning'],
        preview: 'report',
        previewTitle: 'Fork · Reports',
      },
    ],
    pricing: {
      free: ['Ordering and selling stay free'],
      paidTier: 'premium',
      paid: ['SOPs: boards, procedures, runs', 'Temperature, waste and cash logs', 'Courses, policies, FAQs, contracts', 'AI assistant and advanced reports'],
      note: 'Premium includes everything in Essential and Pro.',
    },
    faqs: [
      { q: 'Can I log fridge temperatures with a QR code?', a: 'Yes. Each unit has its own code. Scanning it starts that unit\'s check.' },
      { q: 'What happens when a temperature is out of range?', a: 'The step fails the run. A critical control point schedules a recheck and blocks completion until a corrective action is recorded.' },
      { q: 'Can I see which checklists were skipped?', a: 'Yes. The overview and routines reports show completed, late and missed, by location and person.' },
      { q: 'Are photos and signatures kept?', a: 'Yes, on the run. Runs can be printed or exported as PDF.' },
      { q: 'Does Fork replace paper HACCP logs?', a: 'It keeps timestamped readings, corrective actions and signatures per unit, and exports them as PDF. Check your local retention rules.' },
      { q: 'What does it cost?', a: 'SOPs are part of Premium, $129 per location per month, unlimited employees.' },
    ],
    related: ['restaurants', 'coffee-shops-bakeries', 'compliance', 'multi-location'],
    ctaTitle: 'Make the next inspection boring',
  },
]

export const getSolution = (slug: string) => SOLUTIONS.find((s) => s.slug === slug)

export type SolutionLink = { label: string; desc: string; href: string; preview: PreviewKey }

/** Header and footer menus: the generated pages plus the hand-built ones. */
export const SOLUTION_MENU: { business: SolutionLink[]; need: SolutionLink[] } = {
  business: [
    ...SOLUTIONS.filter((s) => s.kind === 'business').map((s) => ({ label: s.menuLabel, desc: s.menuDesc, href: `/solutions/${s.slug}`, preview: s.menuPreview })),
    { label: 'Franchises', desc: 'Same procedures and training at every unit', href: '/solutions/franchise', preview: 'learn' },
  ],
  need: [
    ...SOLUTIONS.filter((s) => s.kind === 'need').map((s) => ({ label: s.menuLabel, desc: s.menuDesc, href: `/solutions/${s.slug}`, preview: s.menuPreview })),
    { label: 'Wholesale ordering & invoicing', desc: 'Sell, invoice and get paid online', href: '/sales', preview: 'invoice' },
    { label: 'Vendor ordering', desc: 'Every vendor order in one place, free', href: '/supply', preview: 'vendorChat' },
    { label: 'Compliance & HR records', desc: 'Signed forms, policies, a record for every case', href: '/solutions/compliance', preview: 'people' },
    { label: 'Labor & food cost control', desc: 'Labor against sales, waste against the menu', href: '/solutions/operational-efficiency', preview: 'report' },
    { label: 'Multi-location', desc: 'Every site side by side, one login', href: '/solutions/multi-location', preview: 'timecards' },
  ],
}

/** Footer list: everything, including the retention page that is not in the header. */
export const ALL_SOLUTION_LINKS: SolutionLink[] = [
  ...SOLUTION_MENU.business,
  ...SOLUTION_MENU.need.filter((l) => l.href.startsWith('/solutions/')),
  { label: 'Employee retention', desc: 'Fair schedules, recognition, surveys', href: '/solutions/employee-retention', preview: 'feed' },
]

/** Industry chips on the home page link to their page when one exists. */
export const SEGMENT_LINKS: Record<string, string> = {
  'Coffee shops': '/solutions/coffee-shops-bakeries',
  Bakeries: '/solutions/coffee-shops-bakeries',
  Restaurants: '/solutions/restaurants',
  'Food distributors': '/solutions/food-distributors',
  'Retail stores': '/solutions/retail',
  'Gyms & studios': '/solutions/gyms-studios',
  Franchises: '/solutions/franchise',
}

/** Resolve a related slug or href to a link for the "Also for" strip. */
export const relatedLink = (ref: string): SolutionLink | null => {
  const generated = getSolution(ref)
  if (generated) return { label: generated.menuLabel, desc: generated.menuDesc, href: `/solutions/${generated.slug}`, preview: generated.menuPreview }
  return ALL_SOLUTION_LINKS.find((l) => l.href === `/solutions/${ref}` || l.href === ref) || null
}
