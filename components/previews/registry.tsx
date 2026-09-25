import type { ReactNode } from 'react'
import type { PreviewKey } from '@/lib/solutions'
import SchedulePreview from './SchedulePreview'
import TimecardsPreview from './TimecardsPreview'
import ChatPreview from './ChatPreview'
import FeedPreview from './FeedPreview'
import SopsPreview from './SopsPreview'
import LearnPreview from './LearnPreview'
import PeoplePreview from './PeoplePreview'
import HiringPreview from './HiringPreview'
import SupplyPreview from './SupplyPreview'
import VendorChatPreview from './VendorChatPreview'
import InvoicePreview from './InvoicePreview'
import RoutePreview from './RoutePreview'
import ReportPreview from './ReportPreview'
import AiPreview from './AiPreview'

/** One place that turns a preview key from lib/solutions into a demo element. */
export const renderPreview = (key: PreviewKey): ReactNode => {
  switch (key) {
    case 'schedule':
      return <SchedulePreview />
    case 'timecards':
      return <TimecardsPreview />
    case 'chat':
      return <ChatPreview />
    case 'feed':
      return <FeedPreview />
    case 'sops':
    case 'sopsPhone':
      return <SopsPreview />
    case 'learn':
      return <LearnPreview />
    case 'people':
      return <PeoplePreview />
    case 'peopleFitness':
      return <PeoplePreview variant="fitness" />
    case 'hiring':
      return <HiringPreview />
    case 'supply':
      return <SupplyPreview />
    case 'vendorChat':
      return <VendorChatPreview role="vendor" />
    case 'customerChat':
      return <VendorChatPreview role="customer" />
    case 'invoice':
      return <InvoicePreview />
    case 'route':
      return <RoutePreview />
    case 'report':
      return <ReportPreview />
    case 'ai':
      return <AiPreview />
    default:
      return null
  }
}

/** Which frame a key wants: the phone for the mobile-first demos, a window otherwise. */
export const frameFor = (key: PreviewKey): 'window' | 'phone' => (key === 'sopsPhone' ? 'phone' : 'window')
