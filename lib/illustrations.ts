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
 * paid Tuesday 10:40 AM and paid out Thursday.
 */
export const SUPPLIER_DAY: Illustration[] = [
  {
    src: '/illustrations/supplier-route.webp',
    ...size,
    alt: 'Illustration of a delivery route on a city map: two stops done, the van heading to stop 3, and a card listing each stop with its ETA',
    time: '4:50 AM',
    title: 'Van 1 rolls out',
    text: "Stops in order on real roads, an ETA for each, and every café's delivery notes on its stop.",
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
    alt: 'Illustration of a split coffee bag reported at check-in with a photo, and the invoice with a $64 credit applied',
    time: '7:30 AM',
    title: 'A split bag becomes a credit',
    text: 'The café flags it with a photo when it checks the delivery in. Grant the credit and it comes off the invoice.',
  },
  {
    src: '/illustrations/supplier-orders.webp',
    ...size,
    alt: "Illustration of orders arriving from the Fork app, email replies and standing orders, merged into one list of Wednesday's orders",
    time: '8:12 AM',
    title: 'Every order in one list',
    text: 'Orders placed in Fork, replies to emailed confirmations and standing orders, side by side.',
  },
  {
    src: '/illustrations/supplier-paid.webp',
    ...size,
    alt: 'Illustration of an invoice with a QR code, a phone paying $228 by bank transfer, and the timeline from email to payout',
    time: '10:40 AM',
    title: 'Paid from a link',
    text: 'Card or US bank transfer, from the emailed link or the QR code on the PDF. No account to create. Stripe pays it out to your bank.',
  },
]

/** The same morning's service call: a steam wand that would not shut off, fixed, signed and billed. */
export const SERVICE_VISIT: Illustration = {
  src: '/illustrations/supplier-service-visit.webp',
  ...size,
  alt: 'Illustration of an espresso machine with a stuck steam wand, and a finished visit with before and after photos, parts and a $132 invoice',
  time: '9:50 AM',
  title: 'The visit writes the invoice',
  text: 'Before and after photos, parts, time on site and a signature. The charges come from the visit.',
}
