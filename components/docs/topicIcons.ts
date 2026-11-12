import type { ComponentType } from 'react'
import {
  Award, BotMessageSquare, Briefcase, CalendarDays, CalendarOff, ChartColumn, CircleHelp, ClipboardCheck, ClipboardList, Clock, Compass, CreditCard, FileSignature, FileText,
  GraduationCap, Library, LifeBuoy, ListChecks, Megaphone, MessageSquare, Package, PartyPopper, PieChart, Plug, Receipt, ScanBarcode, ScrollText, ShieldCheck, TrendingUp,
  TriangleAlert, UserMinus, Users, Wrench,
} from 'lucide-react'

type Icon = ComponentType<{ className?: string }>

// A glyph per topic of the Docs, by the topic's key in the app API's contents. A topic added
// there shows here at once with the plain page glyph until it gets its own.
const TOPIC_ICONS: Record<string, Icon> = {
  'getting-started': Compass,
  'ai-assistant': BotMessageSquare,
  troubleshooting: LifeBuoy,
  team: Users,
  hiring: Briefcase,
  onboarding: ClipboardList,
  'employment-forms': FileText,
  documents: FileSignature,
  performance: TrendingUp,
  violations: TriangleAlert,
  termination: UserMinus,
  scheduling: CalendarDays,
  timecards: Clock,
  'time-off': CalendarOff,
  communications: MessageSquare,
  updates: Megaphone,
  recognition: Award,
  surveys: ChartColumn,
  events: PartyPopper,
  policies: ScrollText,
  courses: GraduationCap,
  library: Library,
  faqs: CircleHelp,
  forms: ListChecks,
  sops: ClipboardCheck,
  equipment: Wrench,
  compliance: ShieldCheck,
  supply: Package,
  inventory: ScanBarcode,
  sales: Receipt,
  reports: PieChart,
  billing: CreditCard,
  integrations: Plug,
}

export const topicIcon = (key: string): Icon => TOPIC_ICONS[key] || FileText
