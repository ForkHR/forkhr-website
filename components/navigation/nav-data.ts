import type { ComponentType } from 'react'
import {
  BookOpen,
  BotMessageSquare,
  Briefcase,
  CalendarDays,
  ClipboardCheck,
  Clock,
  FileSignature,
  Heart,
  Landmark,
  MapPin,
  Megaphone,
  MessageSquare,
  Package,
  PieChart,
  Receipt,
  Scale,
  ScanBarcode,
  Store,
  Truck,
  Umbrella,
  Users,
  Zap,
} from 'lucide-react'

export type NavItem = {
  name: string
  desc: string
  icon: ComponentType<{ className?: string }>
  href: string
  badge?: string
}

export type NavGroup = {
  label: string
  items: NavItem[]
}

/* Mirrors the areas of the app: Team · Operations · Supply · Sales */
export const productGroups: NavGroup[] = [
  {
    label: 'Team',
    items: [
      { name: 'Schedule', desc: 'Build the week, publish to every phone', icon: CalendarDays, href: '/products#schedule' },
      { name: 'Timecards', desc: 'Kiosk, phone or GPS clock-in', icon: Clock, href: '/products#timecards' },
      { name: 'Time off', desc: 'Requests, balances, on the schedule', icon: Umbrella, href: '/products#timecards' },
      { name: 'Chat', desc: 'Channels by location and job', icon: MessageSquare, href: '/products#chat' },
      { name: 'Hiring', desc: 'Public job board and pipeline', icon: Briefcase, href: '/hiring' },
      { name: 'People & HR', desc: 'Onboarding, forms, documents, contracts', icon: FileSignature, href: '/products#people' },
    ],
  },
  {
    label: 'Operations',
    items: [
      { name: 'SOPs & checklists', desc: 'Opening, closing, temps, waste, equipment', icon: ClipboardCheck, href: '/sops' },
      { name: 'Feed', desc: 'Announcements, recognitions, surveys', icon: Megaphone, href: '/products#feed' },
      { name: 'Learn', desc: 'Courses, policies, library, FAQs', icon: BookOpen, href: '/products#learn' },
      { name: 'AI assistant', desc: 'Answers from your own content', icon: BotMessageSquare, href: '/ai-assistant' },
      { name: 'Reports', desc: 'Labor, sales vs. labor, SOP reports', icon: PieChart, href: '/products#reports' },
    ],
  },
  {
    label: 'Supply',
    items: [
      { name: 'Order from vendors', desc: 'One-time and standing orders', icon: Package, href: '/supply', badge: 'Free' },
      { name: 'Vendor chat', desc: 'Email bridge for vendors not on Fork', icon: MessageSquare, href: '/supply#chat', badge: 'Free' },
      { name: 'Stock counts', desc: 'Par levels and reorder suggestions', icon: ScanBarcode, href: '/supply#inventory' },
      { name: 'Vendor market', desc: 'Find vendors that deliver to you', icon: Store, href: '/supply#market', badge: 'Free' },
    ],
  },
  {
    label: 'Sales',
    items: [
      { name: 'Sell through Fork', desc: 'Catalog, customers, orders', icon: Receipt, href: '/sales', badge: 'Free' },
      { name: 'Invoices & payments', desc: 'Card or bank, no account needed', icon: Landmark, href: '/sales#payments', badge: 'Free' },
      { name: 'Delivery routes', desc: 'Optimized stops, proof of delivery', icon: Truck, href: '/sales#routes', badge: 'Free' },
      { name: 'Customer chat', desc: 'Every customer, on Fork or not', icon: Users, href: '/sales#chat', badge: 'Free' },
    ],
  },
]

export const solutions: NavItem[] = [
  { name: 'Compliance & legal', desc: 'Signed forms, acknowledged policies, a paper trail for every case', icon: Scale, href: '/solutions/compliance' },
  { name: 'Operational efficiency', desc: 'SOPs, stock counts and labor against sales, every day', icon: Zap, href: '/solutions/operational-efficiency' },
  { name: 'Multi-location', desc: 'One plan, one login, every site side by side', icon: MapPin, href: '/solutions/multi-location' },
  { name: 'Employee retention', desc: 'Fair schedules, recognition, surveys and training', icon: Heart, href: '/solutions/employee-retention' },
  { name: 'Franchise & brand', desc: 'The same procedures and training at every location', icon: Store, href: '/solutions/franchise' },
]
