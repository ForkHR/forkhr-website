export type Illustration = {
  src: string
  width: number
  height: number
  alt: string
  /** When it happens in the story, e.g. "5:40 AM". */
  time: string
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
    time: '4:50 AM',
    title: 'Van 1 rolls out',
    text: 'Stops in order, an ETA for each, and the delivery notes for every stop.',
  },
  {
    src: '/illustrations/supplier-proof-of-delivery.webp',
    ...size,
    alt: "Illustration of coffee bags and boxes left at a café's back door, with a proof-of-delivery card showing the photo and Delivered at 5:42 AM",
    time: '5:40 AM',
    title: 'Delivered before anyone is in',
    text: "A photo at the back door goes on the order as proof of delivery. When someone is there, they sign on the driver's phone.",
  },
  {
    src: '/illustrations/supplier-credit.webp',
    ...size,
    alt: 'Illustration of a split coffee bag reported with a photo, and the invoice with a $64 credit applied',
    time: '7:30 AM',
    title: 'A split bag becomes a credit',
    text: 'The café reports it with a photo and asks for a credit. Grant it and it comes off the invoice.',
  },
  {
    src: '/illustrations/supplier-orders.webp',
    ...size,
    alt: "Illustration of orders placed in the Fork app, standing orders and a change made after an email reply, together in one list of Wednesday's orders",
    time: '8:12 AM',
    title: 'Every order in one list',
    text: "Orders placed in Fork and standing orders side by side, with each customer's email replies in their chat.",
  },
  {
    src: '/illustrations/supplier-paid.webp',
    ...size,
    alt: 'Illustration of an invoice with a QR code, a phone paying $228 by card, and the steps from the emailed invoice to the Stripe payout',
    time: '10:40 AM',
    title: 'Paid from a link',
    text: 'Card or US bank transfer, from the emailed link or the QR code on the PDF. No account to create. Stripe pays it out to your bank.',
  },
]

/** The same morning's service call: a steam wand that would not shut off, fixed and signed for. */
export const SERVICE_VISIT: Illustration = {
  src: '/illustrations/supplier-service-visit.webp',
  ...size,
  alt: 'Illustration of an espresso machine with a stuck steam wand, and a finished visit with before and after photos, parts and $132 in charges',
  time: '9:50 AM',
  title: 'Before and after, on the call',
  text: 'Before and after photos, parts, time on site and a signature, all on the call.',
}
