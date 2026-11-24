import type { ComponentType } from 'react'
import {
  BadgeCheck,
  BellRing,
  BookOpen,
  Briefcase,
  Building2,
  CalendarDays,
  CalendarRange,
  ClipboardCheck,
  ClipboardList,
  Clock,
  Coffee,
  Croissant,
  Dumbbell,
  FileSignature,
  HeartHandshake,
  Landmark,
  MapPin,
  Megaphone,
  MessagesSquare,
  Package,
  PieChart,
  QrCode,
  Receipt,
  Route,
  ScanBarcode,
  ShieldBan,
  ShieldCheck,
  ShoppingBag,
  ShoppingBasket,
  Sparkles,
  Store,
  Thermometer,
  TrendingUp,
  Truck,
  Users,
  UtensilsCrossed,
  Wrench,
} from 'lucide-react'
import { ALL_SOLUTION_LINKS, SOLUTION_MENU } from '@/lib/solutions'
import { VENDORS_PATH } from '@/lib/site'

type Icon = ComponentType<{ className?: string }>

export type NavItem = {
  name: string
  desc: string
  icon: Icon
  href: string
  /** A short chip after the name, e.g. "New" for a product that just shipped. */
  badge?: string
  /** A way in, not a product: in the header's menu only, left out of the footer and the home page. */
  menuOnly?: boolean
}

export type ProductGroup = {
  key: string
  label: string
  /** A few words under the group's name in the menu's rail. */
  sub: string
  icon: Icon
  /** Where the rail's row leads when it is clicked. */
  href: string
  pitch: string
  free?: boolean
  items: NavItem[]
}

/*
 * The site is a café's (2026-11-23, the owner on the Sauce-led home page: "what about main page and other
 * products/solutions etc. how should that be?"). Its products are sorted by who each one is for, the
 * way the home page's suite reads: your team, your shop, your vendors, your customers. The Calendar
 * and the Chat, which every tool lands in, are rows of the team's and the shop's groups.
 *
 * The header is Products · Solutions · Pricing (the owner: the busier one was "very busy", and Sauce beside
 * Products was "not a good spot"). Each menu is a rail of groups with one group's tools beside it, each
 * tool an icon and a name, its line said at the menu's foot while it is pointed at (the owner, of three
 * sketches the same day: "I think I like B but I do like simple icon and title in A"). Sauce is the
 * Products rail's first row and what the menu opens on. Selling to cafés (orders, storefront, routes,
 * service calls) is the other side of the market: the Solutions rail's "You sell to cafés".
 *
 * "Your vendors", not "Your suppliers": the buying side, so it cannot be read as the selling side's
 * "For suppliers".
 */

/** Sauce: the Products rail's first row, and its row in the phone menu. */
export const sauceItem: NavItem = { name: 'Sauce', desc: 'Ask it to make shifts, orders, write-ups and more', icon: Sparkles, href: '/ai-assistant' }

/** What the Products menu's Sauce view offers to ask, beside its working example. Each is a thing Sauce does in the app. */
export const sauceAsks = ['Who’s working tomorrow?', 'Order oat milk from Bluebird for Thursday', 'What’s low on stock?', 'Write up Jordan for Saturday']

const team: ProductGroup = {
  key: 'team',
  label: 'Your team',
  sub: 'Schedules, time clock, hiring',
  icon: Users,
  href: '/products',
  pitch: 'Who works when, and everything they need: schedules on every phone, a clock on any tablet, hiring through reviews.',
  items: [
    { name: 'Schedule', desc: 'Open shifts, trades, availability', icon: CalendarDays, href: '/products#schedule' },
    { name: 'Chat', desc: 'Your team and your vendors in one list', icon: MessagesSquare, href: '/products#chat' },
    { name: 'Timecards & time off', desc: 'Kiosk, phone or GPS clock-in', icon: Clock, href: '/products#timecards' },
    { name: 'Hiring', desc: 'Your job board and the pipeline', icon: Briefcase, href: '/hiring' },
    { name: 'People & HR', desc: 'Onboarding, forms, documents, contracts', icon: FileSignature, href: '/products#people' },
    { name: 'Performance', desc: 'Reviews, check-ins, goals and raises', icon: TrendingUp, href: '/performance' },
    { name: 'Training', desc: 'Courses, policies, library, FAQs', icon: BookOpen, href: '/products#learn' },
  ],
}

const shop: ProductGroup = {
  key: 'shop',
  label: 'Your shop',
  sub: 'Calendar, checklists, reports',
  icon: ClipboardCheck,
  href: '/products',
  pitch: 'Every opening, closing and temp check done the same way, reminders at the right moment, and a feed people confirm they read.',
  items: [
    { name: 'Calendar', desc: 'Everything with a date on one page', icon: CalendarRange, href: '/#calendar' },
    { name: 'Checklists & logs', desc: 'Opening, closing, temps, waste, equipment', icon: ClipboardCheck, href: '/sops' },
    { name: 'Reminders', desc: 'Shift, clock-out and break reminders', icon: BellRing, href: '/reminders' },
    { name: 'App blocker', desc: 'Phones away during shifts', icon: ShieldBan, href: '/app-blocker' },
    { name: 'Feed', desc: 'Updates, recognitions, surveys', icon: Megaphone, href: '/products#feed' },
    { name: 'Reports', desc: 'Labor, sales vs. labor, checklists', icon: PieChart, href: '/products#reports' },
  ],
}

const vendors: ProductGroup = {
  key: 'vendors',
  label: 'Your vendors',
  sub: 'Orders and stock counts',
  icon: Package,
  href: '/supply',
  pitch: 'Order from every vendor, count stock against par and keep a thread with each one. Free, whether or not they use Fork.',
  free: true,
  items: [
    { name: 'Order from vendors', desc: 'One-time and standing orders', icon: Package, href: '/supply' },
    { name: 'Stock counts', desc: 'Par levels and what to reorder', icon: ScanBarcode, href: '/supply#inventory' },
    { name: 'Vendor chat', desc: 'Email for the ones not on Fork', icon: MessagesSquare, href: '/supply#chat' },
    { name: 'Suppliers', desc: 'Vendors already on Fork', icon: Store, href: '/suppliers' },
  ],
}

const customers: ProductGroup = {
  key: 'customers',
  label: 'Your customers',
  sub: 'Your page and QR codes',
  icon: QrCode,
  href: '/locations',
  pitch: 'What people see when they walk in or look you up: your page behind a QR code, your Google review link, surveys and surprise bags.',
  items: [
    { name: 'Location page & QR codes', desc: 'Hours, Wi-Fi, menu links, reviews', icon: QrCode, href: '/locations' },
    { name: 'Surprise bags', desc: 'Sell what is left today from your page', icon: Croissant, href: '/surprise-bags', badge: 'New' },
    { name: 'Customer surveys', desc: 'Feedback from a link or a QR code', icon: MessagesSquare, href: '/locations#feedback' },
    { name: 'Health inspections', desc: 'Your NYC grade and history', icon: ClipboardCheck, href: '/locations#inspections' },
  ],
}

/** Selling to cafés: distributors, roasters, bakeries, repair companies. */
export const sellingGroup: ProductGroup = {
  key: 'selling',
  label: 'For suppliers',
  sub: 'Distributors, roasters, repair',
  icon: Truck,
  href: '/sales',
  pitch: 'Sell to cafés and restaurants or run their service calls, deliver on a route and get paid online. Free, whether or not your customers use Fork.',
  free: true,
  items: [
    { name: 'Sell through Fork', desc: 'Catalog, customers, orders', icon: Receipt, href: '/sales' },
    { name: 'Online storefront', desc: 'Your catalog on a link, guest checkout', icon: ShoppingBag, href: '/storefront' },
    { name: 'Invoices & payments', desc: 'Card or bank, no account needed', icon: Landmark, href: '/sales#payments' },
    { name: 'Delivery routes', desc: 'Planned stops, proof of delivery', icon: Route, href: '/sales#routes' },
    { name: 'Service calls', desc: 'Technician visits, work reports, invoices', icon: Wrench, href: '/service-providers' },
    // The form for a vendor that wants to be on the marketplace (app/vendors)
    { name: 'Get listed', desc: 'Ask to be on the marketplace', icon: BadgeCheck, href: VENDORS_PATH, menuOnly: true },
  ],
}

/** The café's four groups: the Products menu, the home page's suite. */
export const productGroups: ProductGroup[] = [team, shop, vendors, customers]

/**
 * The footer's product columns: the team, the shop, vendors and customers together (they are short),
 * and selling, its products only.
 */
export const productSides: ProductGroup[] = [
  team,
  shop,
  { ...vendors, label: 'Vendors & customers', items: [...vendors.items, ...customers.items] },
  { ...sellingGroup, items: sellingGroup.items.filter((i) => !i.menuOnly) },
]

// ---------- Solutions ----------

const SOLUTION_LINKS = [...SOLUTION_MENU.business, ...SOLUTION_MENU.need, ...ALL_SOLUTION_LINKS]

/** A solution page as a menu row: its name and line from lib/solutions, so the two never drift. */
const solutionItem = (href: string, icon: Icon): NavItem => {
  const link = SOLUTION_LINKS.find((l) => l.href === href)
  if (!link) throw new Error(`nav-data: no solution page at ${href}`)
  return { name: link.label, desc: link.desc, href, icon }
}

/** The Solutions menu: who you are, what you came for, and the other side of the market. */
export const solutionGroups: ProductGroup[] = [
  {
    key: 'business',
    label: 'Your business',
    sub: 'Cafés, restaurants, retail',
    icon: Coffee,
    href: '/solutions',
    pitch: 'The same app, told the way your days go.',
    items: [
      solutionItem('/solutions/coffee-shops-bakeries', Coffee),
      solutionItem('/solutions/restaurants', UtensilsCrossed),
      solutionItem('/solutions/retail', ShoppingBasket),
      solutionItem('/solutions/gyms-studios', Dumbbell),
      solutionItem('/solutions/franchise', Building2),
    ],
  },
  {
    key: 'need',
    label: 'What you need',
    sub: 'Scheduling, food safety, HR',
    icon: ClipboardList,
    href: '/solutions',
    pitch: 'Start from the one job you came for.',
    items: [
      solutionItem('/solutions/employee-scheduling', CalendarDays),
      solutionItem('/solutions/food-safety-checklists', Thermometer),
      solutionItem('/supply', Package),
      solutionItem('/solutions/compliance', ShieldCheck),
      solutionItem('/solutions/operational-efficiency', PieChart),
      solutionItem('/solutions/multi-location', MapPin),
      solutionItem('/solutions/employee-retention', HeartHandshake),
    ],
  },
  {
    key: 'sell',
    label: 'You sell to cafés',
    sub: 'Distributors, roasters, repair',
    icon: Truck,
    href: '/sales',
    pitch: sellingGroup.pitch,
    free: true,
    items: [solutionItem('/solutions/food-distributors', Truck), ...sellingGroup.items],
  },
]
