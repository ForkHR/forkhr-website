export type Illustration = {
  src: string
  width: number
  height: number
  alt: string
  title: string
  text: string
}

const size = { width: 2800, height: 1576 }

/**
 * Drawings, not screenshots: Northside Roasters, a small roaster that delivers beans, oat milk
 * and cups to cafés and services their espresso machines, through one Tuesday morning. Same
 * names, times and totals as the "other side of the counter" story: Van 1's eight stops, the
 * 5:42 drop at Corner Café, Main St's split bag credited $64.00, invoice N-1047 for $228.00
 * paid by card Tuesday 10:40 AM. Labels were checked against the app: no invoice "opened"
 * step, no payout date, and the visit's charges wait for the customer's sign-off.
 */
export const SUPPLIER_DAY: Illustration[] = [
  {
    src: '/illustrations/supplier-route.webp',
    ...size,
    alt: 'Illustration of a delivery route on a city map: two stops done, the van heading to stop 3, and a card listing each stop with its ETA',
    title: 'Van 1 rolls out',
    text: 'Stops in order, an ETA for each, and the delivery notes for every stop.',
  },
  {
    src: '/illustrations/supplier-proof-of-delivery.webp',
    ...size,
    alt: "Illustration of coffee bags and boxes left at a café's back door, with a proof-of-delivery card showing the photo and Delivered at 5:42 AM",
    title: 'Delivered before anyone is in',
    text: "A photo at the back door goes on the order as proof of delivery. When someone is there, they sign on the driver's phone.",
  },
  {
    src: '/illustrations/supplier-credit.webp',
    ...size,
    alt: 'Illustration of a split coffee bag reported with a photo, and the invoice with a $64 credit applied',
    title: 'A split bag becomes a credit',
    text: 'The café reports it with a photo and asks for a credit. Grant it and it comes off the invoice.',
  },
  {
    src: '/illustrations/supplier-orders.webp',
    ...size,
    alt: "Illustration of orders placed in the Fork app, standing orders and a change made after an email reply, together in one list of Wednesday's orders",
    title: 'Every order in one list',
    text: "Orders placed in Fork and standing orders side by side, with each customer's email replies in their chat.",
  },
  {
    src: '/illustrations/supplier-paid.webp',
    ...size,
    alt: 'Illustration of an invoice with a QR code, a phone paying $228 by card, and the steps from the emailed invoice to the Stripe payout',
    title: 'Paid from a link',
    text: 'Card or US bank transfer, from the emailed link or the QR code on the PDF. No account to create. Stripe pays it out to your bank.',
  },
]

/**
 * The team side, one drawing per team product: Jordan Lee, the barista from the hiring and
 * people demos, from the sign in the Main St window to the 90-day raise (fall 2026 calendar:
 * first week Sep 28, Friday's close Oct 2, day 90 Dec 26). Labels were checked against the app:
 * the QR code opens the whole job board (its default caption is "Scan to view job listings"),
 * stages are Applied / Interview, the contract wants a typed name and a drawn signature, the
 * publish push is "New schedule published" with the person's own shifts and hours (open shifts
 * notify nobody), the time clock is the web app's PIN terminal, timecards carry Approved / Pending
 * (no per-card verdict) and leave as a CSV, groups show "Delivered" (no "Read by N"), the pool's
 * button is "Interested" and the pick-up sets the Covered shift flag on its own.
 */
export const NEW_HIRE: Illustration[] = [
  {
    src: '/illustrations/team-hiring.webp',
    ...size,
    alt: "Illustration of a café window with a striped awning and a Now hiring sign for a barista with a QR code, beside the listing's applicants and an interview accepted for Thursday at 3:00 PM",
    title: 'A sign in the window',
    text: 'The sign carries the QR code for your job board. Jordan applies from a phone and accepts the interview straight from the email.',
  },
  {
    src: '/illustrations/team-onboarding.webp',
    ...size,
    alt: "Illustration of a phone signing an employment agreement with a typed name and a drawn signature, a food handler card being uploaded, and Jordan's onboarding guide at 75%",
    title: 'Paperwork done on the phone',
    text: 'The onboarding guide walks Jordan through it before the first shift: employment forms, the contract signed with a finger, the food handler card on file.',
  },
  {
    src: '/illustrations/team-schedule.webp',
    ...size,
    alt: "Illustration of the Main St schedule for the week of Sep 28, published with an open Friday close, and a phone lock screen showing the New schedule published notification",
    title: 'The week lands on every phone',
    text: 'Publish once and everyone on the schedule gets a push with their own shifts and hours. The open Friday close waits in the shift pool.',
  },
  {
    src: '/illustrations/team-clock-in.webp',
    ...size,
    alt: "Illustration of a café counter with an espresso machine and a tablet time clock asking for a 4-digit PIN, beside Jordan's approved timecard for Monday",
    title: 'Clocked in at the counter',
    text: 'Any tablet becomes the time clock. Jordan clocks in and out with a 4-digit PIN, and the approved hours go to payroll as a CSV.',
  },
  {
    src: '/illustrations/team-cover.webp',
    ...size,
    alt: "Illustration of the Main St team chat asking who can close Friday, and the open shift picked up by Jordan, approved, and marked Covering on the schedule",
    title: "Friday's close, covered",
    text: 'Dana asks the Main St group. Jordan taps Interested in the shift pool, Dana approves, and the shift lands on the schedule marked Covering.',
  },
  {
    src: '/illustrations/team-review.webp',
    ...size,
    alt: "Illustration of Jordan's attendance, shift and training record flowing into a 90-day review with four ratings and an approved raise from $17.00 to $18.00 an hour",
    title: 'Day 90, written from the record',
    text: 'The review opens on its own with attendance, shift flags and training beside the questions. Once approved, the raise goes on the pay rate the day it starts.',
  },
]

/**
 * The hiring page's story: the same hire told closer up, from the sign to the invite. Labels are
 * the product's: the job board's form and "Submit application" / "Thank you for applying!", the
 * web's "Summarize with AI" (Premium; the model line is left out), the Barista interview guide
 * (round 3 "The rush", its core question and Listen-for note, the Saturday 9am gut check), and
 * the phone's hire sheet, "Jordan hired" toast and Offer card.
 */
export const HIRING: Illustration[] = [
  {
    ...NEW_HIRE[0],
    text: "Fork gives your job board a QR code to print on any sign. It opens every job you're hiring for.",
  },
  {
    src: '/illustrations/hiring-apply.webp',
    ...size,
    alt: "Illustration of the barista listing on a phone, the Apply for this job form with a PDF resume and the shifts question, and a Thank you for applying message",
    title: 'Applied from a phone',
    text: 'Name, a PDF resume and the screening questions, then Submit application. Jordan gets a confirmation email and Dana gets the application.',
  },
  {
    src: '/illustrations/hiring-resume.webp',
    ...size,
    alt: "Illustration of Jordan's resume turned into an AI summary marked Good fit, with highlights and one red flag",
    title: 'The resume, read for you',
    text: 'Summarize with AI reads the resume and the answers against the job and rates the fit. On Premium.',
  },
  {
    src: '/illustrations/hiring-interview.webp',
    ...size,
    alt: 'Illustration of a café table with two coffees and a tablet, beside the interview notes open on a core question with its Listen for note, a Strong rating and the gut check',
    title: 'An interview with the guide open',
    text: 'Jordan accepts the invite from the email. Dana asks the core questions, notes what was said, rates each answer and makes the gut call.',
  },
  {
    src: '/illustrations/hiring-hired.webp',
    ...size,
    alt: "Illustration of the Hire Jordan sheet on a phone with the profile and invite switches on, the offer at $17.00 an hour, and the invite email with a temporary password",
    title: 'Hired from the phone',
    text: 'One sheet sets the pay and creates the employee profile. The invite to Fork goes out by email with a temporary password.',
  },
]

/**
 * The supply page's story: Main St's side of the counter for one week (fall 2026 calendar:
 * counted Tue Sep 29, delivered Thu Oct 1, recurring Mondays from Oct 5). Labels are the phone
 * app's: "Inventory count" rows carry no par (the par is in the "Low stock" push), "Par refill"
 * on the order screen and its toast, "Order placed!", the vendor thread's "Emails {address}" and
 * "Emailed", "Receive order" with "Receiving: x / y", issue types and asks, "Submit receipt",
 * the recurring plan's day strip and "Upcoming" runs, and a service visit's report with
 * "Accept work". Order numbers are the product's ORD- format, not "#1042".
 */
export const CAFE_WEEK: Illustration[] = [
  {
    src: '/illustrations/supply-count.webp',
    ...size,
    alt: 'Illustration of a walk-in cooler with four milk jugs where twelve go, the inventory count on a phone, and a Low stock push for whole milk',
    title: 'Counted in the walk-in',
    text: 'The closing count goes in on a phone, item by item. Whole milk lands under par and the low-stock push goes out.',
  },
  {
    src: '/illustrations/supply-order.webp',
    ...size,
    alt: "Illustration of the order screen's Actions sheet with Par refill, the Order placed confirmation, and the order card in Bluebird Dairy's thread marked Emailed",
    title: 'Topped up to par, sent by email',
    text: "Par refill puts what's short in the cart. Bluebird isn't on Fork, so the order goes out as an email and lands in their thread too.",
  },
  {
    src: '/illustrations/supply-receive.webp',
    ...size,
    alt: "Illustration of milk crates and a cracked egg case inside the back door at 6:30, beside the Receive order screen with three flagged lines and a pending credit",
    title: 'Checked in at the back door',
    text: "Count what came off the truck and flag what's wrong: short, extra or damaged, and what you want for it. One switch emails Bluebird the lot.",
  },
  {
    src: '/illustrations/supply-recurring.webp',
    ...size,
    alt: 'Illustration of a wall calendar with every Monday ringed and a stack of boxes, beside the recurring Fork Warehouse order with its next three runs',
    title: 'Same order every Monday',
    text: 'A recurring order for Fork Warehouse. Each Monday’s order is created on its own, and holidays go in as skip dates.',
  },
  {
    src: '/illustrations/supply-service.webp',
    ...size,
    alt: "Illustration of an espresso machine with a steam wand that won't shut off, beside the finished visit report with parts, before and after photos and an Accept work button",
    title: 'A technician for the espresso machine',
    text: 'Request a service with photos of the problem. The report comes back with times, parts and before and after photos, and you accept the work before the invoice.',
  },
]

/** The same morning's service call: a steam wand that would not shut off, fixed and signed for. */
export const SERVICE_VISIT: Illustration = {
  src: '/illustrations/supplier-service-visit.webp',
  ...size,
  alt: 'Illustration of an espresso machine with a stuck steam wand, and a finished visit with before and after photos, parts and $132 in charges',
  title: 'Before and after, on the call',
  text: 'Before and after photos, parts, time on site and a signature, all on the call.',
}
