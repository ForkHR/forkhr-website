import type { ComponentType } from 'react'
import { BookOpen, BotMessageSquare, Briefcase, CalendarDays, ClipboardCheck, Clock, FileSignature, Landmark, Megaphone, MessageSquare, Package, PieChart, Receipt, ScanBarcode, TrendingUp, Truck, Wrench } from 'lucide-react'
import type { PreviewKey } from '@/lib/solutions'

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
}

export type ProductGroup = {
  label: string
  pitch: string
  preview: PreviewKey
  previewTitle: string
  free?: boolean
  items: NavItem[]
}

/* Three columns, one per side of the business; the fourth column of the menu is the live demo. */
export const productGroups: ProductGroup[] = [
  {
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
  },
  {
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
  },
  {
    label: 'Supply & Sales',
    pitch: 'Order from vendors, sell to customers or run service calls, and get paid online. Free, whether or not they use Fork.',
    preview: 'invoice',
    previewTitle: 'Fork · Sales',
    free: true,
    items: [
      { name: 'Order from vendors', desc: 'One-time and standing orders', icon: Package, href: '/supply', preview: 'supply', previewTitle: 'Fork · Supply' },
      { name: 'Vendor & customer chat', desc: 'Email bridge for anyone not on Fork', icon: MessageSquare, href: '/supply#chat', preview: 'vendorChat', previewTitle: 'Fork · Chat · Bluebird Dairy' },
      { name: 'Stock counts', desc: 'Par levels and reorder suggestions', icon: ScanBarcode, href: '/supply#inventory', preview: 'supply', previewTitle: 'Fork · Supply' },
      { name: 'Sell through Fork', desc: 'Catalog, customers, orders', icon: Receipt, href: '/sales', preview: 'invoice', previewTitle: 'Fork · Sales' },
      { name: 'Service calls', desc: 'Technician visits, work reports, invoices', icon: Wrench, href: '/service-providers', preview: 'serviceCall', previewTitle: 'Fork · Service calls' },
      { name: 'Invoices & payments', desc: 'Card or bank, no account needed', icon: Landmark, href: '/sales#payments', preview: 'invoice', previewTitle: 'Fork · Sales' },
      { name: 'Delivery routes', desc: 'Optimized stops, proof of delivery', icon: Truck, href: '/sales#routes', preview: 'route', previewTitle: 'Fork · Routes' },
    ],
  },
]
