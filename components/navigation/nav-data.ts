import type { ComponentType } from 'react'
import { BadgeCheck, BookOpen, BotMessageSquare, Briefcase, CalendarDays, ClipboardCheck, Clock, FileSignature, Landmark, Megaphone, MessageSquare, Package, PieChart, Receipt, ScanBarcode, ShoppingBag, Store, TrendingUp, Truck, Wrench } from 'lucide-react'
import type { PreviewKey } from '@/lib/solutions'
import { VENDORS_PATH } from '@/lib/site'

export type NavItem = {
  name: string
  desc: string
  icon: ComponentType<{ className?: string }>
  href: string
  /** A short chip after the name, e.g. "New" for a product that just shipped. */
  badge?: string
  /** The demo the menu plays while this item is under the pointer (else the group's). */
  preview?: PreviewKey
  previewTitle?: string
  /** Its name where Supply and Sales are drawn as one side (productSides): "Vendor chat" is "Vendor & customer chat" there. */
  joinedName?: string
  /** The demo panel's link while this item is under the pointer, where "Explore <name>" would not read ("Explore Get listed"). */
  cta?: string
  /** A way in, not a product: in the header's menu only, left out of productSides (the footer has its own link, the home page lists products). */
  menuOnly?: boolean
}

export type ProductGroup = {
  label: string
  pitch: string
  preview: PreviewKey
  previewTitle: string
  free?: boolean
  items: NavItem[]
}

// The header's Products menu: four columns of links (the live demo is its fifth, on a wide
// screen). Supply and Sales are a column each since 2026-11-11 (one column of nine links until
// then): a shop that buys reads the first, a vendor or a service company the second, and neither
// reads the other's. The home page's suite and the footer still count three sides of the
// business and draw the two as one: productSides, below.
const team: ProductGroup = {
  label: 'Team',
  pitch: 'Schedules that publish to every phone, timecards from the kiosk, reviews written from the record.',
  preview: 'schedule',
  previewTitle: 'Fork · Schedule',
  items: [
    { name: 'Schedule', desc: 'Open shifts, trades, availability', icon: CalendarDays, href: '/products#schedule', preview: 'schedule', previewTitle: 'Fork · Schedule' },
    { name: 'Timecards & time off', desc: 'Kiosk, phone or GPS clock-in', icon: Clock, href: '/products#timecards', preview: 'timecards', previewTitle: 'Fork · Timecards' },
    { name: 'Chat', desc: 'Channels by location and job', icon: MessageSquare, href: '/products#chat', preview: 'chat', previewTitle: 'Fork · Chat' },
    { name: 'People & HR', desc: 'Onboarding, forms, documents, contracts', icon: FileSignature, href: '/products#people', preview: 'people', previewTitle: 'Fork · People' },
    { name: 'Performance', desc: 'Reviews, check-ins, goals and raises', icon: TrendingUp, href: '/performance', badge: 'New', preview: 'performance', previewTitle: 'Fork · Performance' },
    { name: 'Hiring', desc: 'Public job board and pipeline', icon: Briefcase, href: '/hiring', preview: 'hiring', previewTitle: 'Fork · Hiring' },
  ],
}

const operations: ProductGroup = {
  label: 'Operations',
  pitch: 'Every opening, closing and temp check done the same way, and a feed people confirm they read.',
  preview: 'sops',
  previewTitle: 'Fork · SOPs',
  items: [
    { name: 'SOPs & checklists', desc: 'Opening, closing, temps, waste, equipment', icon: ClipboardCheck, href: '/sops', preview: 'sops', previewTitle: 'Fork · SOPs' },
    { name: 'Feed', desc: 'Announcements, recognitions, surveys', icon: Megaphone, href: '/products#feed', preview: 'feed', previewTitle: 'Fork · Feed' },
    { name: 'Learn', desc: 'Courses, policies, library, FAQs', icon: BookOpen, href: '/products#learn', preview: 'learn', previewTitle: 'Fork · Learn' },
    { name: 'AI assistant', desc: 'Answers from your own content', icon: BotMessageSquare, href: '/ai-assistant', preview: 'ai', previewTitle: 'Fork · Assistant' },
    { name: 'Reports', desc: 'Labor, sales vs. labor, SOP reports', icon: PieChart, href: '/products#reports', preview: 'report', previewTitle: 'Fork · Reports' },
  ],
}

const supply: ProductGroup = {
  label: 'Supply',
  pitch: 'Order from your vendors, count stock against par and keep a thread with each one. Free, whether or not they use Fork.',
  preview: 'supply',
  previewTitle: 'Fork · Supply',
  free: true,
  items: [
    { name: 'Order from vendors', desc: 'One-time and standing orders', icon: Package, href: '/supply', preview: 'supply', previewTitle: 'Fork · Supply' },
    { name: 'Suppliers', desc: 'Directory of vendors on Fork', icon: Store, href: '/suppliers', preview: 'supply', previewTitle: 'Fork · Supply' },
    { name: 'Vendor chat', joinedName: 'Vendor & customer chat', desc: 'Email bridge for anyone not on Fork', icon: MessageSquare, href: '/supply#chat', preview: 'vendorChat', previewTitle: 'Fork · Chat · Bluebird Dairy' },
    { name: 'Stock counts', desc: 'Par levels and reorder suggestions', icon: ScanBarcode, href: '/supply#inventory', preview: 'supply', previewTitle: 'Fork · Supply' },
  ],
}

const sales: ProductGroup = {
  label: 'Sales',
  pitch: 'Sell to your customers or run service calls, deliver on a route and get paid online. Free, whether or not they use Fork.',
  preview: 'invoice',
  previewTitle: 'Fork · Sales',
  free: true,
  items: [
    { name: 'Sell through Fork', desc: 'Catalog, customers, orders', icon: Receipt, href: '/sales', preview: 'invoice', previewTitle: 'Fork · Sales' },
    { name: 'Online storefront', desc: 'Your catalog on a link, guest checkout', icon: ShoppingBag, href: '/storefront', badge: 'New', preview: 'storefront', previewTitle: 'app.forkhr.com/v/northside-roasters' },
    { name: 'Service calls', desc: 'Technician visits, work reports, invoices', icon: Wrench, href: '/service-providers', preview: 'serviceCall', previewTitle: 'Fork · Service calls' },
    { name: 'Invoices & payments', desc: 'Card or bank, no account needed', icon: Landmark, href: '/sales#payments', preview: 'invoice', previewTitle: 'Fork · Sales' },
    { name: 'Delivery routes', desc: 'Optimized stops, proof of delivery', icon: Truck, href: '/sales#routes', preview: 'route', previewTitle: 'Fork · Routes' },
    // The form for a vendor that wants to be on the marketplace (app/vendors)
    { name: 'Get listed', desc: 'Ask to be on the marketplace', icon: BadgeCheck, href: VENDORS_PATH, menuOnly: true, cta: 'Tell us about your business', preview: 'storefront', previewTitle: 'app.forkhr.com/v/northside-roasters' },
  ],
}

export const productGroups: ProductGroup[] = [team, operations, supply, sales]

/**
 * The three sides of the business, for the home page's suite ("Team, operations and money") and
 * the footer's columns: Supply and Sales under one head, their products only.
 */
export const productSides: ProductGroup[] = [
  team,
  operations,
  {
    label: 'Supply & Sales',
    pitch: 'Order from vendors, sell to customers or run service calls, and get paid online. Free, whether or not they use Fork.',
    preview: 'invoice',
    previewTitle: 'Fork · Sales',
    free: true,
    items: [...supply.items, ...sales.items].filter((i) => !i.menuOnly).map((i) => (i.joinedName ? { ...i, name: i.joinedName } : i)),
  },
]
