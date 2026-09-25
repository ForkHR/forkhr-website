// Solution pages, written the way people search: by the kind of business they run and by
// the job they need done. One config renders through components/marketing/SolutionPage.tsx.
// Existing hand-built pages (compliance, franchise, ...) are listed in the menu too.
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
    h1: 'The app that runs a coffee shop or bakery, from the 5 AM open to the wholesale invoice',
    lede: 'Barista schedules that publish to every phone, opening checklists and fridge temps on a QR code, orders to the roaster and the dairy in one place. And if you bake for other shops: standing orders and invoices they can pay without an account.',
    heroPreview: 'schedule',
    heroPreviewTitle: 'Fork · Schedule · Main St',
    pains: [
      { before: 'The schedule lives in a group chat and changes three times before Friday', after: 'One published schedule on every phone, with open shifts anyone eligible can claim' },
      { before: 'Fridge temps on a clipboard nobody checks until the inspector does', after: 'A QR code on each fridge starts the check. Out of range fails the run and schedules a recheck' },
      { before: 'Texting the dairy at 10 PM and hoping they saw it', after: 'Every vendor has a conversation next to its orders, emailed to them if they are not on Fork' },
      { before: 'Wholesale invoices in a spreadsheet and a folder of PDFs', after: 'Invoice from the order. The café pays by card or bank from the link, the payout lands in your bank' },
    ],
    features: [
      {
        eyebrow: 'Scheduling & timecards',
        plan: 'essential',
        title: 'Baristas set availability, you publish, nobody asks "am I on Saturday?"',
        lede: 'Build the week with availability and time off in view, publish once, and every phone gets a push. The tablet by the register is the clock, and tips are split from the same timecards.',
        bullets: [
          'Open shifts and trades, approved in a tap',
          'Kiosk clock-in on the register tablet, or GPS from a phone',
          'Late and missed-break flags against the scheduled shift',
          'Tip pool split by hours worked, kept as its own record',
        ],
        preview: 'timecards',
        previewTitle: 'Fork · Timecards · Today',
      },
      {
        eyebrow: 'SOPs',
        plan: 'premium',
        title: 'Opening, closing and espresso machine care, the same way every shift',
        lede: 'Checklists start when the shift does. Machines are items with a daily clean and a weekly backflush on a schedule. Fridges carry a QR code that starts their temperature check.',
        bullets: [
          'Opening and closing checklists triggered by the shift',
          'Daily clean and weekly inspection routines per machine',
          'Temperature checks from a QR code on the fridge door',
          'End-of-day pastry waste logged with its cost',
        ],
        preview: 'sops',
        previewTitle: 'Fork · SOPs · Opening checklist',
        href: '/sops',
        hrefLabel: 'Explore SOPs',
      },
      {
        eyebrow: 'Supply',
        plan: 'free',
        title: 'Beans, milk and cups from every vendor, in one order screen',
        lede: 'Standing orders to the dairy that create themselves. Vendor replies by email that land in the chat. Stock counts with par levels that turn shortfalls into an order.',
        bullets: [
          'A standing order every Monday, changed one week without touching the rest',
          'Vendor chat over email for vendors who are not on Fork',
          'Stock counts with par levels and reorder suggestions (Essential)',
          'Fork Warehouse for shared essentials where it delivers',
        ],
        preview: 'vendorChat',
        previewTitle: 'Fork · Chat · Bluebird Dairy',
        href: '/supply',
        hrefLabel: 'Explore supply',
      },
      {
        eyebrow: 'Wholesale',
        plan: 'free',
        title: 'Bake for other shops? Take their standing orders and get paid online',
        lede: 'Your catalog with a price list per café, standing orders generated ahead of time, a route for the van and an invoice with a pay link and QR code. Customers never need a Fork account.',
        bullets: [
          'Customer price lists and standing orders',
          'Invoice with a pay link, QR code on the PDF',
          'Card and US bank payments through Stripe, paid out to your bank',
          'Delivery route with proof of delivery at each café',
        ],
        preview: 'invoice',
        previewTitle: 'Fork · Sales · Order S-2088',
        href: '/sales',
        hrefLabel: 'Explore selling through Fork',
      },
    ],
    pricing: {
      free: ['Vendor orders and standing orders', 'Wholesale orders, invoices and online payments', 'Vendor and customer chat', 'Delivery routes with proof of delivery'],
      paidTier: 'essential',
      paid: ['Barista schedule with open shifts and trades', 'Kiosk and GPS clock-in, timecards, tip pool', 'Team chat and announcements', 'Stock counts with par levels'],
      note: 'SOPs, temperature logs and machine care routines are on Premium.',
    },
    faqs: [
      { q: 'Is there a free plan for a small coffee shop?', a: 'Yes. Ordering from your vendors, selling wholesale, invoicing and vendor chat are free with no card. Scheduling and timecards are on Essential, $39 per location per month with unlimited employees.' },
      { q: 'Can baristas swap shifts on their phone?', a: 'Yes. A barista offers a shift, a teammate with the right job takes it, and a manager approves in one tap. Availability and approved time off are on the schedule while you build it.' },
      { q: 'Does it work for a bakery that sells wholesale to cafés?', a: 'That is the Sales side of Fork. Add your catalog and customers, set standing orders, deliver on a route and invoice from the order. Customers pay from the emailed link or the QR code on the PDF and never need a Fork account.' },
      { q: 'Can I order from vendors that do not use Fork?', a: 'Yes. Add the vendor by name and email. Orders go out as an email with a PDF, your chat messages are emailed too, and their reply lands back in the thread.' },
      { q: 'Does Fork do fridge temperature logs?', a: 'Yes, as an SOP board on Premium. Each fridge gets a QR code; scanning it starts the check. A reading outside the range fails the run, schedules a recheck and blocks completion until a corrective action is recorded.' },
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
    h1: 'One app for the whole restaurant: schedule, line checks, vendor orders and labor against sales',
    lede: 'Publish the schedule to every phone, clock in from the tablet by the pass, run the line check and the walk-in temps from a QR code, order from every vendor in one screen, and see labor against sales by the hour.',
    heroPreview: 'timecards',
    heroPreviewTitle: 'Fork · Timecards · Today',
    pains: [
      { before: 'Labor % is a guess until payroll runs', after: 'Labor cost and labor % live, and against Square sales by the hour' },
      { before: 'Line checks and temp logs on paper, gone by Friday', after: 'Checklists run on a phone with temps, photos and signatures kept on the run' },
      { before: 'Vendor orders by text, phone and three portals', after: 'One order screen for every vendor, with their replies in the chat' },
      { before: 'Tip-out worked out on the back of a receipt', after: 'Tip pool split by hours worked, kept as its own record' },
    ],
    features: [
      {
        eyebrow: 'Scheduling & timecards',
        plan: 'essential',
        title: 'Schedule the week, clock in at the pass, split the tips',
        lede: 'Servers and cooks see their shifts on their phone and trade with approval. The tablet by the pass is the kiosk. Breaks, overtime and late flags are applied against the shift, and the tip pool is split from the same timecards.',
        bullets: [
          'Open shifts, trades and availability handled for you',
          'Kiosk clock-in with PINs on any tablet, GPS from a phone',
          'Breaks, overtime and late flags against the scheduled shift',
          'Tip pool split by hours, evenly or by hand, with a record of who got what',
        ],
        preview: 'schedule',
        previewTitle: 'Fork · Schedule · Main St',
      },
      {
        eyebrow: 'Line checks & food safety',
        plan: 'premium',
        title: 'Opening, closing, line checks and walk-in temps that get done',
        lede: 'Checklists start with the shift. Each cold unit carries a QR code that starts its temperature check; out of range fails the run and schedules a recheck. Waste and cash counts are boards on the same engine.',
        bullets: [
          'Opening, closing and line checks triggered by the shift',
          'Temperature checks from a QR code; a fail schedules a recheck and requires a corrective action',
          'Waste log with cost from the supply product, cash count with a photo of the drawer',
          'NYC restaurants see their DOHMH inspection results and grades in Reports',
        ],
        preview: 'sops',
        previewTitle: 'Fork · SOPs · Opening checklist',
        href: '/sops',
        hrefLabel: 'Explore SOPs',
      },
      {
        eyebrow: 'Labor against sales',
        plan: 'essential',
        title: 'See the hours that lose money',
        lede: 'Connect Square and Fork lines labor cost up against sales by hour, day and location. Scheduled vs. actual hours catches early clock-ins and unplanned overtime.',
        bullets: [
          'Square sales synced every 20 minutes',
          'Labor % by hour, day and location',
          'Scheduled vs. actual hours, employee hours, hourly labor cost',
          'On-time arrival and shift performance (Premium)',
        ],
        preview: 'report',
        previewTitle: 'Fork · Reports · Sales vs. labor',
      },
      {
        eyebrow: 'Supply',
        plan: 'free',
        title: 'Every vendor order in one place, whether or not the vendor is on Fork',
        lede: 'One-time and standing orders that go out as an email with a PDF. Receive and check in deliveries, log the short case, request the credit, and see the invoice next to the order.',
        bullets: [
          'One-time and standing orders, emailed to the vendor',
          'Receive and check in, log issues, request credits',
          'Vendor chat over email for vendors not on Fork',
          'Invoices payable next to the order they belong to',
        ],
        preview: 'supply',
        previewTitle: 'Fork · Supply · Orders',
        href: '/supply',
        hrefLabel: 'Explore supply',
      },
    ],
    pricing: {
      free: ['Vendor orders, standing orders and receiving', 'Vendor chat with email bridge', 'Invoices payable'],
      paidTier: 'essential',
      paid: ['Schedule, open shifts and trades', 'Kiosk and GPS time clock, tip pool', 'Team chat and announcements', 'Labor reports and Square sales sync'],
      note: 'Line checks, temperature logs and the AI assistant are on Premium.',
    },
    faqs: [
      { q: 'Does Fork connect to Square?', a: 'Yes. Square sales sync every 20 minutes for the sales vs. labor report, so you see labor % by hour, day and location. Included from Essential.' },
      { q: 'Can servers pick up open shifts?', a: 'Yes. Post an open shift and everyone with the right job gets it; the first to claim it gets it, or a manager picks. Trades between teammates are approved in a tap.' },
      { q: 'How does tip pooling work?', a: 'A manager distributes a pot for a date range across the timecards it covers, split by hours worked, evenly or by hand. Each distribution is kept as its own record, so it can be reviewed or undone later.' },
      { q: 'Can I log walk-in and line temperatures?', a: 'Yes, on Premium. Each unit gets a QR code that starts its check. A reading out of range fails the run, schedules a recheck and blocks completion until a corrective action is recorded. Readings, photos and signatures stay on the run.' },
      { q: 'Do my vendors need to be on Fork?', a: 'No. Add them by name and email. Orders and chat messages go out as email and their replies come back into the conversation. Vendor ordering is free.' },
      { q: 'What does it cost per location?', a: 'Vendor ordering is free. Essential is $39 per location per month for scheduling, timecards and chat; Pro $79 adds HR; Premium $129 adds SOPs, courses, policies and the assistant. Unlimited employees on every plan.' },
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
    h1: 'Take orders, run the route, invoice and get paid. Your customers never need an account.',
    lede: 'A catalog with a price list per customer, standing orders that create themselves, routes with the stops in the best order, invoices with a pay link and QR code, and payouts to your bank. Plus the schedule and timecards for drivers and the warehouse.',
    plan: 'free',
    heroPreview: 'invoice',
    heroPreviewTitle: 'Fork · Sales · Order S-2088',
    pains: [
      { before: 'Orders arrive by text, email and voicemail', after: 'One order list. Customers on Fork order in the app; the rest email or call and you enter it in seconds' },
      { before: 'Invoices chased for weeks', after: 'A pay link and QR code on every invoice, card or bank transfer, reminders handled by Stripe' },
      { before: 'Drivers working from a printed list', after: 'A Deliveries tab with the stops in order and a photo at each one' },
      { before: 'Every customer needs an account for your portal', after: 'No account needed. A customer can claim theirs later with the email on file' },
    ],
    features: [
      {
        eyebrow: 'Orders',
        plan: 'free',
        title: 'Standing orders that write themselves',
        lede: 'Every Monday, 24 sourdough. The order is generated ahead of time and emailed for confirmation. Change one week without touching the rest. A short case or a damaged crate becomes an issue on the order and a credit on the invoice.',
        bullets: [
          'Customer-specific catalogs and price lists',
          'Standing orders generated ahead and emailed for confirmation',
          'Import customers, items and open orders from a spreadsheet',
          'Issues and credits on the order, taken off the invoice automatically',
        ],
        preview: 'customerChat',
        previewTitle: 'Fork · Chat · Corner Café',
      },
      {
        eyebrow: 'Invoices & payments',
        plan: 'free',
        title: 'Invoices that get paid',
        lede: 'Turn a delivered order into an invoice. The customer gets an email with the PDF and a pay link; the PDF carries a QR code for the ones who print. They pay by card or US bank transfer and the payout lands in your bank.',
        bullets: [
          'Payment terms per customer: prepaid, COD, Net 7, 15, 30 or 60',
          'Card and US bank transfer through Stripe, paid out to your bank',
          'QR code on the PDF for customers who print',
          'Paid, failed and refunded states sync back to the order',
        ],
        preview: 'invoice',
        previewTitle: 'Fork · Sales · Invoice',
        href: '/sales#payments',
        hrefLabel: 'How you get paid',
      },
      {
        eyebrow: 'Routes',
        plan: 'free',
        title: 'Deliver on the best route',
        lede: "Pick the day's orders and Fork orders the stops on real road distances, with an ETA per stop. The driver gets a Deliveries tab on their phone and checks off each stop with a photo.",
        bullets: [
          'Stop order optimized on real road distances, ETAs per stop',
          'Driver checks off each stop with a photo as proof of delivery',
          'Orders move to Delivered as they are dropped',
          'Proof of delivery stays on the order for disputes',
        ],
        preview: 'route',
        previewTitle: 'Fork · Routes · Thu, Sep 25',
      },
      {
        eyebrow: 'Your team',
        plan: 'essential',
        title: 'Drivers, packers and bakers on one schedule',
        lede: 'The same app schedules the people behind the orders. Shifts by route and by station, clock-in from the phone with GPS or the warehouse kiosk, and production checklists and cold-chain temperature logs when you add Premium.',
        bullets: [
          'Shifts by route and by station, published to every phone',
          'GPS clock-in from the van, kiosk at the warehouse',
          'Team chat by depot, announcements with confirmations',
          'Production checklists and cold-chain temperature logs (Premium)',
        ],
        preview: 'schedule',
        previewTitle: 'Fork · Schedule · Warehouse',
      },
    ],
    pricing: {
      free: ['Catalog, customers, orders and standing orders', 'Invoices with card and bank payments', 'Delivery routes with proof of delivery', 'Customer chat with email bridge'],
      paidTier: 'essential',
      paid: ['Driver and warehouse schedule', 'GPS and kiosk time clock', 'Team chat and announcements', 'Stock counts with par levels'],
      note: `Online payments carry a ${feePct}% platform fee plus Stripe processing. Invoices settled outside Fork carry no fee.`,
    },
    faqs: [
      { q: 'Do my customers need a Fork account?', a: 'No. Customers receive the invoice by email with a pay link, and the PDF carries a QR code. They pay by card or US bank transfer without signing up. If they sign up later with the same email they can claim their account and order in the app.' },
      { q: 'What does it cost to sell through Fork?', a: `Nothing to start: catalog, customers, orders, routes and invoices are free with no card. When a customer pays online, Fork keeps a ${feePct}% platform fee on the pre-tax amount and Stripe charges its processing fee. Invoices settled outside Fork carry no fee.` },
      { q: 'How do I get paid?', a: 'Payments run through Stripe. Once your account is connected, card and bank payments on your invoices are paid out to your bank account. Paid, failed and refunded states sync back onto the order.' },
      { q: 'Can I import my customers and catalog?', a: 'Yes. Customers, catalog items and open orders can be imported from a spreadsheet, and you can link a customer\'s own item names to your SKUs.' },
      { q: 'Can I plan a route for several vans?', a: 'Yes. Each route takes the orders you pick and orders the stops on real road distances with ETAs. Assign it to a driver and it shows in their Deliveries tab.' },
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
    h1: 'Staff the floor, open and close the same way, and see labor against sales',
    lede: 'Schedules with availability and trades, a kiosk clock at the counter, opening and closing checklists with a cash count and a photo of the floor, announcements everyone confirms, and product training in the Learn tab.',
    heroPreview: 'schedule',
    heroPreviewTitle: 'Fork · Schedule · Downtown',
    pains: [
      { before: 'Coverage gaps found on Saturday morning', after: 'Open shifts posted to eligible staff, conflicts caught before publishing' },
      { before: 'Cash count on a notepad', after: 'A cash count step with the expected float, kept on the run with who counted and when' },
      { before: 'Head-office news nobody read', after: 'Announcements with confirmations and read receipts, per store or company-wide' },
      { before: 'New hires learning the product on the floor', after: 'Courses and a library by role, with completion tracked' },
    ],
    features: [
      {
        eyebrow: 'Scheduling & timecards',
        plan: 'essential',
        title: 'A week built in minutes, published to every phone',
        lede: 'Availability, time off and trades in view while you build. The counter tablet is the clock with a PIN per person. Late and early flags, breaks and overtime are applied for you.',
        bullets: [
          'Availability, time off and trades in view',
          'Kiosk clock-in with PINs on the counter tablet',
          'Late and early flags, breaks and overtime applied',
          'Labor cost and labor % live, and against Square sales if you connect it',
        ],
        preview: 'timecards',
        previewTitle: 'Fork · Timecards · Today',
      },
      {
        eyebrow: 'Store checklists',
        plan: 'premium',
        title: 'Open and close the same way in every store',
        lede: 'Opening and closing checklists start with the shift: cash count against the expected float, a photo of the floor, a merchandising check. A missed step is visible to the manager the same morning.',
        bullets: [
          'Opening and closing checklists triggered by the shift',
          'Cash counts with the expected float, photos of the floor and displays',
          'Equipment care routines for the things that break',
          'Reports per store: what was missed, and by whom',
        ],
        preview: 'sops',
        previewTitle: 'Fork · SOPs · Opening checklist',
        href: '/sops',
        hrefLabel: 'Explore SOPs',
      },
      {
        eyebrow: 'Feed & learn',
        plan: 'essential',
        title: 'Announcements people confirm, training people finish',
        lede: 'The feed is the home tab on every phone. Announcements can be pinned and require confirmation. Courses, policies and FAQs live in the Learn tab, so the product knowledge is one tap away on the floor.',
        bullets: [
          'Pinned announcements with confirmations and read receipts',
          'Recognitions and surveys (Pro)',
          'Product courses with quizzes, policies to acknowledge (Premium)',
          'FAQs that also answer through the assistant (Premium)',
        ],
        preview: 'feed',
        previewTitle: 'Fork · Feed',
      },
      {
        eyebrow: 'People & HR',
        plan: 'pro',
        title: 'Paperless onboarding for seasonal hiring',
        lede: 'Post to your own job board, move applicants through the pipeline, and hire into an onboarding guide with the forms and documents a new hire needs, filled and signed on a phone.',
        bullets: [
          'Public job board and applicant pipeline (Essential)',
          'W-4, I-9 and custom forms on a phone',
          'Documents with expiry reminders',
          'Contracts e-signed from templates (Premium)',
        ],
        preview: 'people',
        previewTitle: 'Fork · People · Jordan Lee',
      },
    ],
    pricing: {
      free: ['Ordering from suppliers and vendor chat'],
      paidTier: 'essential',
      paid: ['Schedule, trades and availability', 'Kiosk time clock and timecards', 'Announcements and team chat', 'Hiring and public job board'],
      note: 'Store checklists and courses are on Premium; onboarding, forms and documents on Pro.',
    },
    faqs: [
      { q: 'Is pricing per employee?', a: 'No. You pay per active store per month, and every employee at that store is included. Ten people or forty, the price is the same.' },
      { q: 'Can I use an iPad as a time clock?', a: 'Yes. Any tablet or computer becomes a kiosk with a PIN per person. Staff can also clock in from their phone, with a GPS fence around the store if you want one.' },
      { q: 'Can staff trade shifts?', a: 'Yes. A trade is offered to teammates with the right job and a manager approves it in a tap. Open shifts work the same way for coverage gaps.' },
      { q: 'Does it work for several stores?', a: 'Yes. One company-wide plan, one login, every store side by side. Schedules, checklists and reports are per store and comparable across them.' },
      { q: 'Can I track opening and closing tasks?', a: 'Yes, on Premium. Checklists start with the shift and keep photos, cash counts and timestamps on each run, so you can see what was done, when, and what was skipped.' },
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
    h1: 'Front desk, trainers and cleaners on one schedule, with the routines that keep the floor spotless',
    lede: 'Publish the desk and class-cover schedule to every phone, clock in from the front desk tablet, run cleaning and equipment routines with a photo at the end, and keep CPR and trainer certifications from lapsing quietly.',
    heroPreview: 'schedule',
    heroPreviewTitle: 'Fork · Schedule · Front desk',
    pains: [
      { before: 'Class cover arranged by text between trainers', after: 'Open shifts only people with the right job can claim, trades approved in a tap' },
      { before: 'A cleaning rota on a laminated sheet', after: 'Routines per machine and area on a schedule, with a photo when done' },
      { before: 'An expired CPR certificate found at audit time', after: 'Documents with expiry reminders and a renewal request sent in time' },
      { before: 'Front desk news passed on by word of mouth', after: 'Announcements with confirmations on every phone' },
    ],
    features: [
      {
        eyebrow: 'Scheduling & timecards',
        plan: 'essential',
        title: 'Desk, classes and floor coverage on one schedule',
        lede: 'Shifts by job, so class cover only goes to people who can teach it. The front desk tablet is the kiosk; trainers who work off-site clock in with GPS from their phone.',
        bullets: [
          'Open shifts for class cover, claimable only by the right job',
          'Kiosk clock-in at the desk, GPS for off-site sessions',
          'Late flags, breaks and overtime applied against the shift',
          'Timecards approved and exported for payroll',
        ],
        preview: 'schedule',
        previewTitle: 'Fork · Schedule · Front desk',
      },
      {
        eyebrow: 'Cleaning & equipment care',
        plan: 'premium',
        title: 'Every machine on a routine',
        lede: 'Machines are items with a serial number and a photo. A daily wipe-down and a weekly inspection run on a schedule; anything marked out of service raises an issue with the history attached. Locker rooms and studios get a cleaning rota per shift.',
        bullets: [
          'Daily and weekly routines per machine and area',
          'Photo when done, condition check with "out of service" raising an issue',
          'Locker room and studio cleaning rota per shift',
          'Reports on what was missed, where, and by whom',
        ],
        preview: 'sops',
        previewTitle: 'Fork · SOPs · Opening checklist',
        href: '/sops',
        hrefLabel: 'Explore SOPs',
      },
      {
        eyebrow: 'Certifications & HR',
        plan: 'pro',
        title: 'Certifications that never lapse quietly',
        lede: 'CPR, first aid and trainer certifications live on the employee record with an expiry date and a reminder before it. New front-desk hires get an onboarding guide with their forms and documents in order.',
        bullets: [
          'Certifications with expiry reminders and renewal requests',
          'Onboarding guides for new front-desk hires',
          'W-4, I-9 and custom forms signed on a phone',
          'Contracts e-signed from templates (Premium)',
        ],
        preview: 'peopleFitness',
        previewTitle: 'Fork · People · Jordan Lee',
      },
      {
        eyebrow: 'Feed & learn',
        plan: 'essential',
        title: 'Keep a part-time team in the loop',
        lede: 'Most of the team works a few shifts a week, so the feed is where they catch up: announcements with confirmations, recognitions for a great class, and courses for a new format or the sales script.',
        bullets: [
          'Announcements with confirmations and read receipts',
          'Recognitions for great classes (Pro)',
          'Courses for new class formats and front-desk scripts (Premium)',
          'FAQs: guest passes, freezes, refunds, opening hours (Premium)',
        ],
        preview: 'feed',
        previewTitle: 'Fork · Feed',
      },
    ],
    pricing: {
      free: ['Ordering supplies from vendors and vendor chat'],
      paidTier: 'essential',
      paid: ['Schedule with open shifts and trades', 'Kiosk and GPS time clock', 'Announcements and team chat', 'Hiring and public job board'],
      note: 'Certifications, onboarding and forms are on Pro; cleaning routines, equipment care and courses on Premium.',
    },
    faqs: [
      { q: 'Can only qualified trainers pick up a class?', a: 'Yes. Open shifts are tied to a job, so a spin class cover only goes to people in that job. Trades between teammates are approved by a manager.' },
      { q: 'Can I track CPR and trainer certifications?', a: 'Yes, on Pro. Each certification is a document on the employee with an expiry date. Fork reminds you before it lapses and can request the renewal from the employee.' },
      { q: 'Is there a cleaning checklist?', a: 'Yes, on Premium. Cleaning is a routine board: areas and machines as items, a schedule per routine, a photo when done, and a report of what was missed.' },
      { q: 'Do part-timers count toward pricing?', a: 'No. Pricing is per location per month with unlimited staff, so a roster of thirty part-timers costs the same as ten full-timers.' },
      { q: 'Can staff clock in at the front desk?', a: 'Yes. The desk tablet becomes a kiosk with a PIN per person. Trainers can also clock in from their phone, with a GPS fence if you want one.' },
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
    lede: 'Drag shifts onto the week with availability and time off in view, publish once, and every phone gets a push. Open shifts get claimed, trades get approved, timecards fill in from the kiosk, the app or GPS, and the week goes out to payroll.',
    plan: 'essential',
    heroPreview: 'schedule',
    heroPreviewTitle: 'Fork · Schedule · Main St',
    pains: [
      { before: 'A spreadsheet, photographed and posted to the group chat', after: 'One published schedule, always current on every phone' },
      { before: 'Someone forgot they asked for Saturday off', after: 'Availability and approved time off shown while you build; conflicts caught before publishing' },
      { before: 'Shift swaps by text you hear about later', after: 'Trades approved in a tap, only between people with the right job' },
      { before: 'Hours typed into payroll by hand', after: 'Timecards checked against the schedule, approved and exported' },
    ],
    features: [
      {
        eyebrow: 'Build the week',
        plan: 'essential',
        title: 'Templates, copy last week, drag to move',
        lede: 'Start from a template or last week, then drag. Availability, approved time off and hours totals stay in view, and the schedule flags overlaps, double bookings and time-off clashes before you publish.',
        bullets: [
          'Weekly templates and copy last week',
          'Availability, time off and hours totals in view',
          'Shift tasks, notes and colour keys',
          'Conflicts flagged: overlaps, double bookings, time off',
        ],
        preview: 'schedule',
        previewTitle: 'Fork · Schedule · Main St',
      },
      {
        eyebrow: 'Open shifts & trades',
        plan: 'essential',
        title: 'Coverage without the phone calls',
        lede: 'Post an open shift and everyone with the right job is notified. A trade is offered to teammates and approved by a manager in a tap. Time off requests come with balances and land on the schedule when approved.',
        bullets: [
          'Open shifts claimed by eligible people',
          'Trades approved by a manager in a tap',
          'Time off requests with balances, approved onto the schedule',
          'Push notification on every change, and a post in the team chat',
        ],
        preview: 'chat',
        previewTitle: 'Fork · Chat · #main-st',
      },
      {
        eyebrow: 'Timecards',
        plan: 'essential',
        title: 'From clock-in to payroll',
        lede: 'Any tablet becomes a kiosk with PINs, or people clock in from their phone inside a GPS fence. Punches are checked against the shift, breaks and overtime applied, and the week is approved and exported in a tap.',
        bullets: [
          'Kiosk with PINs on any tablet, phone clock-in, GPS fences',
          'Late, early and missed-break verdicts against the shift',
          'Breaks, overtime and rounding applied',
          'Approve the week, export for payroll, split the tip pool by hours',
        ],
        preview: 'timecards',
        previewTitle: 'Fork · Timecards · Today',
      },
      {
        eyebrow: 'Reports',
        plan: 'essential',
        title: 'Scheduled vs. actual, and labor against sales',
        lede: 'See where the plan and the punches diverge, what the hours cost, and, with Square connected, which hours lose money.',
        bullets: [
          'Scheduled vs. actual hours per person and location',
          'Labor cost and hourly labor cost',
          'Sales vs. labor with Square sales synced every 20 minutes',
          'On-time arrival and shift performance (Premium)',
        ],
        preview: 'report',
        previewTitle: 'Fork · Reports · Sales vs. labor',
      },
    ],
    pricing: {
      free: ['Ordering from vendors and selling to customers stay free on every plan'],
      paidTier: 'essential',
      paid: ['Scheduling, open shifts, trades and availability', 'Time off requests and balances', 'Timecards with kiosk and GPS clock-in', 'Team chat, announcements and hiring', 'Labor reports and Square sales sync'],
      note: 'One price per location, every employee included. 30-day money-back guarantee.',
    },
    faqs: [
      { q: 'How much does employee scheduling cost?', a: 'Essential is $39 per location per month and includes scheduling, time off, timecards, chat, announcements and hiring, with unlimited employees. There is a 30-day money-back guarantee on the first charge.' },
      { q: 'Is there a mobile app for staff?', a: 'Yes, on iOS and Android. Staff see their schedule, set availability, request time off, claim open shifts, trade, clock in and chat from their phone.' },
      { q: 'Can employees swap shifts?', a: 'Yes. A trade is offered to teammates with the right job and a manager approves it in a tap. Open shifts work the same way for uncovered hours.' },
      { q: 'Does it include a time clock?', a: 'Yes. Any tablet becomes a kiosk with PINs, or people clock in from their phone inside a GPS fence. Punches are checked against the scheduled shift.' },
      { q: 'Can I export hours to payroll?', a: 'Yes. Approve the week and export the timecards for your payroll provider. Tip pools can be split from the same timecards by hours worked.' },
      { q: 'Does it catch scheduling conflicts?', a: 'Yes. Overlaps, double bookings and shifts on approved time off are flagged while you build, before anything is published.' },
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
    h1: 'Opening, closing and temperature checks your team actually completes',
    lede: 'Checklists start when the shift does. Scan the QR on the fridge to log its temperature; out of range fails the run, schedules a recheck and blocks completion until a corrective action is recorded. Photos, signatures and timestamps stay on the run.',
    plan: 'premium',
    heroPreview: 'sops',
    heroPreviewTitle: 'Fork · SOPs · Opening checklist',
    pains: [
      { before: 'Paper logs filled in from memory at the end of the day', after: 'Timestamped steps on a phone, started by the shift or a QR scan' },
      { before: 'A warm fridge noticed the next morning', after: 'Out of range fails the run and schedules a recheck' },
      { before: 'Nobody knows who skipped what', after: 'Reports per board: what was missed, where, and by whom' },
      { before: 'The inspector asks for six months of logs', after: 'Every run kept with its readings, photos and signatures. Print or export as PDF' },
    ],
    features: [
      {
        eyebrow: 'Runs',
        plan: 'premium',
        title: 'A checklist that runs itself',
        lede: 'Opening, closing and line checks are triggered by the shift and assigned to a job or whoever is on. Steps can ask for a number in a range, a photo, a signature, a timer or a scan, and the manager sees what finished early, late or not at all.',
        bullets: [
          'Triggered by the shift, a schedule, another run or a QR scan',
          'Steps that ask for a number in range, a photo, a signature, a timer or a scan',
          'Assigned to a job or whoever is on shift, chased when late',
          'Completed early, late or skipped is visible to the manager',
        ],
        preview: 'sops',
        previewTitle: 'Fork · SOPs · Opening checklist',
        href: '/sops',
        hrefLabel: 'How SOPs work',
      },
      {
        eyebrow: 'Temperature logs',
        plan: 'premium',
        title: 'Fridges and hot-holds on a QR code',
        lede: 'Each unit prints a QR code. Scanning it starts that unit\'s check, so the reading is tied to the right fridge every time. Mark the step as a critical control point and a fail schedules a recheck and requires a corrective action before the run can close.',
        bullets: [
          'Each unit prints a QR; scanning starts its check',
          'Critical control points: a fail schedules a recheck and requires a corrective action',
          'Daily, weekly or every N days after the last check',
          'History per unit, on the phone and in reports',
        ],
        preview: 'sopsPhone',
        previewTitle: 'Fork · SOPs',
      },
      {
        eyebrow: 'Waste & cash logs',
        plan: 'premium',
        title: 'Waste and cash, logged in seconds',
        lede: 'Item, quantity and reason for waste, with the cost from the supply product. Cash counts with the expected float and a photo of the drawer. Both are boards on the same engine, so they share triggers, photos and reports with everything else.',
        bullets: [
          'Waste log with cost from the supply product',
          'Cash count with expected float and a photo of the drawer',
          'Voided entries need a note',
          'Waste and cash movement reports by location and period',
        ],
        preview: 'supply',
        previewTitle: 'Fork · Supply · Stock count',
      },
      {
        eyebrow: 'Reports & inspections',
        plan: 'premium',
        title: 'Ready for the inspector',
        lede: 'Seven SOP reports by location and period, printable and exportable as PDF. For NYC restaurants, DOHMH inspection results and grades are pulled into Reports next to your own logs.',
        bullets: [
          'SOP reports: overview, routines, waste, cash movement, projects, expenses, staff',
          'Print or export as PDF',
          'NYC DOHMH inspection results and grades in Reports',
          'Starter templates: shift routines, temperature checks, waste, cash log, cleaning',
        ],
        preview: 'report',
        previewTitle: 'Fork · Reports',
      },
    ],
    pricing: {
      free: ['Ordering from vendors and selling to customers stay free'],
      paidTier: 'premium',
      paid: ['SOPs: boards, procedures and runs', 'Temperature, waste and cash logs', 'Courses, policies, FAQs and contracts', 'AI assistant and advanced reports'],
      note: 'Premium is $129 per location per month with unlimited employees, and includes everything in Essential and Pro.',
    },
    faqs: [
      { q: 'Can I log fridge temperatures with a QR code?', a: 'Yes. Each fridge, freezer or hot-hold is an item with its own QR code. Scanning it starts that unit\'s temperature check, so readings are always tied to the right unit.' },
      { q: 'What happens when a temperature is out of range?', a: 'The step fails the run. When the step is a critical control point, Fork schedules a recheck and blocks completion until a corrective action is recorded. The fail, the recheck and the action all stay on the run.' },
      { q: 'Can I see which checklists were skipped?', a: 'Yes. The SOP overview and routines reports show, per location and period, what was completed, completed late and missed, and by whom.' },
      { q: 'Are photos and signatures kept?', a: 'Yes. Photos, signatures, readings and timestamps are stored on the run, and runs can be printed or exported as PDF.' },
      { q: 'Does Fork replace paper HACCP logs?', a: 'Fork keeps timestamped readings, corrective actions and signatures per unit, which is what a temperature log needs to show, and exports them as PDF. Check your local retention rules; runs are kept for as long as your account exists.' },
      { q: 'What does it cost?', a: 'SOPs are part of Premium, $129 per location per month with unlimited employees, together with courses, policies, contracts and the assistant. Vendor ordering stays free.' },
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
