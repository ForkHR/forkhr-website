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

/**
 * The Locations page's drawings: Juniper Coffee (Main St and Harbor St, Brooklyn) from the outside.
 * Labels are the app's: the link page as the server draws it (backend/utils/linkPageHtml.js: the
 * round mark, the place with "Open today 7 AM – 6 PM", the pill buttons "Review us on Google",
 * "Get directions", "Call us", "We're hiring", the Wi-Fi card, "Made with Fork"), a link's sheet
 * ("Share it", "Last 30 days": opens, by QR code, by the link, "Buttons pressed"), the Links list
 * (Opens: "The link page" / "The Google review form"), the public survey ("Which shop did you
 * visit?", 0 to 10, the "Low rating" notification to the author and the shop's manager) and the
 * health inspection notice ("New health inspection at Main St"). Fork never reads the reviews
 * themselves and never asks only happy customers: everyone gets the same link.
 */
export const LOCATIONS: Illustration[] = [
  {
    src: '/illustrations/locations-counter.webp',
    ...size,
    alt: "Illustration of a café counter with a QR stand reading Scan for Wi-Fi, reviews & more, beside a phone showing Juniper Coffee's Main St link page with Review us on Google, Get directions, Call us, We're hiring and the Wi-Fi network and password",
    title: 'A QR code on the counter',
    text: "The code opens the shop's own page: review, directions, call, Wi-Fi and hiring, filled in from the location.",
  },
  {
    src: '/illustrations/locations-review.webp',
    ...size,
    alt: "Illustration of a café table with a flat white, a croissant and a receipt printed with a QR code and How was your visit? Leave us a review, beside the sheet for the Receipt QR link that opens the Google review form, with 88 opens in the last 30 days",
    title: 'Straight to your Google review form',
    text: "A link can skip the page and open the shop's Google review form. Print it on a receipt or a table card; everyone gets the same link.",
  },
  {
    src: '/illustrations/locations-survey.webp',
    ...size,
    alt: "Illustration of a phone in front of a café window answering Juniper Coffee's survey, How likely are you to recommend us?, with 9 picked on a 0 to 10 scale, beside the answers for Harbor St and a Low rating notification for a 3 out of 10 there",
    title: 'Feedback from customers, by shop',
    text: "Tell us how we did opens a survey anyone can answer without an account. Answers sort by shop, and a low rating tells the shop's manager.",
  },
  {
    src: '/illustrations/locations-links.webp',
    ...size,
    alt: "Illustration of Juniper Coffee's Links list, four links with their location, what each opens and its opens in the last 30 days, beside the Counter stand link's 312 opens and the buttons people pressed",
    title: 'Every code, counted',
    text: 'Each link knows whether it was scanned or clicked, and the page counts which buttons people press. Nothing is kept about who.',
  },
  {
    src: '/illustrations/locations-inspection.webp',
    ...size,
    alt: "Illustration of Juniper Coffee's Main St shop front with a letter grade A in the window, beside its latest health inspection, Grade A with 11 points and one critical and one general violation, and the New health inspection notification",
    title: 'Every inspection, as the city posts it',
    text: "Fork matches each New York City shop to the city's inspection records and tells you when a new result is out. New York City only for now.",
  },
]

/**
 * The Reminders page's drawings: one Tuesday shift at Main St (Jordan Lee, 3:00 PM – 10:00 PM, Nov 10).
 * Labels are the app's: Fork's starters with their own titles and messages and the list's words
 * for when they go (backend/utils/reminderRules.js: "7:00 PM the evening before", "1 hour before a
 * shift starts", "10 min after a shift ends" if still clocked in, "25 min into a break" if still
 * on break), the alarm's "Clock out" / "Still working", a question answered into a log ("Is the
 * shop open?", the manager told when nobody answers in 20 minutes) and the app blocker's block
 * screen ("{app} is blocked", "I need my phone for 5 minutes").
 */
export const REMINDERS: Illustration[] = [
  {
    src: '/illustrations/reminders-shift.webp',
    ...size,
    alt: 'Illustration of a phone lock screen at 2:00 PM by a sunny window with the Shift in 1 hour and Shift tomorrow reminders, beside the Reminders list with three switched on and Break is almost over switched off',
    title: 'The evening before, and an hour before',
    text: 'Fork sends three reminders on every plan with Scheduling: the evening before, an hour before, and a nudge to clock out. On Premium you change them and write your own.',
  },
  {
    src: '/illustrations/reminders-alarm.webp',
    ...size,
    alt: "Illustration of a café closed for the night with a wall clock at 10:10, a phone ringing the Time to clock out alarm with Clock out and Still working, and the reminder's history of who answered what",
    title: 'An alarm that waits for an answer',
    text: 'Send it as a push, an email or an alarm in Fork that rings until someone answers. Each reminder keeps who got it and what they said.',
  },
  {
    src: '/illustrations/reminders-question.webp',
    ...size,
    alt: "Illustration of a shop front with the sign turned to Open, a phone alarm asking Is the shop open? with Yes and No, and the answers: Maya Chen said Yes for Main St, nobody answered at Harbor St and its manager was told, the answer filed in the Opening log",
    title: 'A question, answered into the log',
    text: "A reminder can ask one question from a log. The first answer at a shop goes in as the log's entry, and if nobody answers in 20 minutes the manager hears.",
  },
]

/** The app blocker: the block screen on a phone and the company's rule. */
export const APP_BLOCKER: Illustration = {
  src: '/illustrations/app-blocker.webp',
  ...size,
  alt: 'Illustration of the counter at Main St and a phone showing Instagram is blocked with an OK button and I need my phone for 5 minutes, beside the app blocker rule switched on: during a scheduled shift, social media, games and video blocked, free on breaks',
  title: 'Phones away on the floor',
  text: 'Pick the kinds of apps, and they are blocked during shifts. Breaks are free, there is a five-minute way out, and each person agrees to the notice first.',
}

/** The app blocker's page, beside the block screen: breaks and the five-minute way out, then the notice. */
export const APP_BLOCKER_BREAK: Illustration = {
  src: '/illustrations/app-blocker-break.webp',
  ...size,
  alt: "Illustration of a break corner behind Main St and a phone asking what five minutes of phone are for, with A code from my bank picked and 2 of 3 left this shift, beside Jordan Lee's day: a blocked app, a break with apps open and a five-minute unlock",
  title: 'A break is a break, and five minutes when it matters',
  text: 'Apps open on a break and block again when its time is up. Someone who needs their phone opens it for five minutes, three times a shift, and says why.',
}

/**
 * The Surprise bags page's drawings: one Tuesday (November 17) at Juniper Coffee's Main St, the same
 * cast and numbers as the hero demo and the home page's 5:12 PM moment: the Pastry bag at $6.00
 * (worth about $18.00), 8 a day, picked up 5–6 PM with orders closing at 5:45 PM; Sam Ortiz reserves
 * two at 2:18 PM (code K7RT, $13.49 with the $1.49 service fee, free cancel until 3 PM); Maya Chen
 * is on shift then, Jordan Lee closes. Labels are the app's (docs/grab-bags-api.md): Availability's
 * "Taking orders today" and "left of 8", the public page's "N left", "worth about", "Usually inside"
 * and "Reserve a bag", the order page's "Your code" and "Show this code at the counter", the push
 * "New surprise bag order", and the statuses New, Got it and Picked up in the app's tones.
 */
export const SURPRISE_BAGS: Illustration[] = [
  {
    src: '/illustrations/surprise-bags-count.webp',
    ...size,
    alt: "Illustration of Main St's pastry case after lunch, with a few croissants, muffins and a loaf left and the café's kraft bags with a J sticker on the counter, beside the Availability page: Main St · 9 left and Harbor St · 5 left, Taking orders today switched on, the Pastry bag at 3 sold · 5 left with a stepper reading 5, left of 8, and the Bread bag at 4 left of 4",
    title: "Today's count, set at the counter",
    text: 'Make a bag once. Each day the count follows the case: more, fewer, or sold out for today.',
  },
  {
    src: '/illustrations/surprise-bags-page.webp',
    ...size,
    alt: "Illustration of Juniper Coffee's shop front on Main St with a Surprise bags sign and QR code in the window reading Scan to reserve, beside a phone showing the shop's Surprise bags page: the Pastry bag at $6.00, worth about $18.00, 5 left, Pick up Today, 5–6 PM, order by 5:45 PM, usually croissants, muffins and a loaf of the day, Vegetarian, and a Reserve a bag button",
    title: 'Found from the window, reserved on the page',
    text: 'Your own page in your colours, with what usually goes in, the price and what is left today.',
  },
  {
    src: '/illustrations/surprise-bags-pay.webp',
    ...size,
    alt: 'Illustration of a desk by an office window with the checkout Pay for your bags (Pastry bag × 2 $12.00, service fee $1.49, total $13.49, a Pay button, bags held for 14:52), the confirmation email Your surprise bag order at Juniper Coffee: K7RT, and a phone showing Your bags are reserved with the code K7RT, Pick up Today, 5–6 PM at Main St, Directions and Free cancel until 3 PM',
    title: 'Paid in a tap, with no account',
    text: 'A card, Apple Pay or Google Pay. The code comes by email with a page of its own.',
  },
  {
    src: '/illustrations/surprise-bags-push.webp',
    ...size,
    alt: "Illustration of the counter behind the bar at Main St, with an espresso machine, a grinder and Maya's phone buzzing face up, beside the lock screen at 2:18 on Tuesday, November 17 showing New surprise bag order, Sam · 2 bags · pick up Today, 5–6 PM, and the order K7RT marked New: Sam Ortiz, two Pastry bags for $12.00, pickup Today, 5–6 PM at Main St, $13.49 paid, and a Got it button",
    title: 'Whoever is on shift gets a push',
    text: 'The order goes to the people working at that shop who handle orders. Got it tells the team it is in hand.',
  },
  {
    src: '/illustrations/surprise-bags-pickup.webp',
    ...size,
    alt: "Illustration of the Main St counter at dusk, warm lamps lit and a blue city outside the window, a hand passing a kraft bag with a green J sticker across the counter beside a phone showing the code K7RT, next to Today's orders at Main St: 5 orders, 2 waiting, 3 picked up, with K7RT for Sam O. just picked up by Jordan Lee at 5:12 PM",
    title: 'Handed over with the code',
    text: 'The customer shows the four-character code, and Picked up closes the order.',
  },
]

export const APP_BLOCKER_NOTICE: Illustration = {
  src: '/illustrations/app-blocker-notice.webp',
  ...size,
  alt: "Illustration of a staff corner with lockers and a phone showing the notice Juniper Coffee blocks some apps while you work, with a Turn it on button, beside the People list: one person blocked until 10:00 PM, one on break, one not set up yet",
  title: 'Agreed to on their own phone',
  text: 'Before it turns on, each person reads what is blocked, when, and what you can see, and agrees on their own phone. The date is kept.',
}
