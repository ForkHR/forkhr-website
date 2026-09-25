import type { ComponentType } from 'react'
import { BookOpen, BotMessageSquare, Briefcase, CalendarDays, ClipboardCheck, Clock, FileSignature, Landmark, Megaphone, MessageSquare, Package, PieChart, Receipt, ScanBarcode, Truck } from 'lucide-react'
import type { PreviewKey } from '@/lib/solutions'

export type NavItem = {
  name: string
  desc: string
  icon: ComponentType<{ className?: string }>
  href: string
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
    pitch: 'Schedules that publish to every phone, timecards from the kiosk, chat by location.',
    preview: 'schedule',
    previewTitle: 'Fork · Schedule',
    items: [
      { name: 'Schedule', desc: 'Open shifts, trades, availability', icon: CalendarDays, href: '/products#schedule' },
      { name: 'Timecards & time off', desc: 'Kiosk, phone or GPS clock-in', icon: Clock, href: '/products#timecards' },
      { name: 'Chat', desc: 'Channels by location and job', icon: MessageSquare, href: '/products#chat' },
      { name: 'People & HR', desc: 'Onboarding, forms, documents, contracts', icon: FileSignature, href: '/products#people' },
      { name: 'Hiring', desc: 'Public job board and pipeline', icon: Briefcase, href: '/hiring' },
    ],
  },
  {
    label: 'Operations',
    pitch: 'Every opening, closing and temp check done the same way, and a feed people confirm they read.',
    preview: 'sops',
    previewTitle: 'Fork · SOPs',
    items: [
      { name: 'SOPs & checklists', desc: 'Opening, closing, temps, waste, equipment', icon: ClipboardCheck, href: '/sops' },
      { name: 'Feed', desc: 'Announcements, recognitions, surveys', icon: Megaphone, href: '/products#feed' },
      { name: 'Learn', desc: 'Courses, policies, library, FAQs', icon: BookOpen, href: '/products#learn' },
      { name: 'AI assistant', desc: 'Answers from your own content', icon: BotMessageSquare, href: '/ai-assistant' },
      { name: 'Reports', desc: 'Labor, sales vs. labor, SOP reports', icon: PieChart, href: '/products#reports' },
    ],
  },
  {
    label: 'Supply & Sales',
    pitch: 'Order from vendors, sell to customers and get paid online. Free, whether or not they use Fork.',
    preview: 'invoice',
    previewTitle: 'Fork · Sales',
    free: true,
    items: [
      { name: 'Order from vendors', desc: 'One-time and standing orders', icon: Package, href: '/supply' },
      { name: 'Vendor & customer chat', desc: 'Email bridge for anyone not on Fork', icon: MessageSquare, href: '/supply#chat' },
      { name: 'Stock counts', desc: 'Par levels and reorder suggestions', icon: ScanBarcode, href: '/supply#inventory' },
      { name: 'Sell through Fork', desc: 'Catalog, customers, orders', icon: Receipt, href: '/sales' },
      { name: 'Invoices & payments', desc: 'Card or bank, no account needed', icon: Landmark, href: '/sales#payments' },
      { name: 'Delivery routes', desc: 'Optimized stops, proof of delivery', icon: Truck, href: '/sales#routes' },
    ],
  },
]
