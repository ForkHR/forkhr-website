import { CalendarCheck, Repeat, Users, Wallet } from 'lucide-react'
import PerformancePreview from '@/components/previews/PerformancePreview'
import ReviewPhonePreview from '@/components/previews/ReviewPhonePreview'
import Spotlight from './Spotlight'

/**
 * Performance as its own selling point on the home page: what only Fork can do, because the
 * shifts, the clock and the checklists are already in it. Full story on /performance.
 */
export default function PerformanceSpotlight({ id = 'performance' }: { id?: string }) {
  return (
    <Spotlight
      id={id}
      badge="New"
      eyebrow="Performance"
      plan="pro"
      accent="plum"
      seed={7}
      title="Ninety days of shifts. One fair review."
      lede="Every clock-in, covered shift, checklist and course lands on the person's record. When Maya's 90-day review opens itself, the facts are already beside the questions."
      windowTitle="Fork · Performance · Maya Chen"
      preview={<PerformancePreview />}
      phone={<ReviewPhonePreview />}
      points={[
        { icon: <Repeat className="h-4 w-4" />, title: 'Starts on its own', desc: '90-day and anniversary reviews open themselves and chase whoever is late.' },
        { icon: <CalendarCheck className="h-4 w-4" />, title: 'Written from the record', desc: 'Attendance, shift flags, tasks, SOPs and training beside every question.' },
        { icon: <Wallet className="h-4 w-4" />, title: 'From review to paycheck', desc: 'An approved raise lands on the pay rate from its start date.' },
        { icon: <Users className="h-4 w-4" />, title: 'Feedback that is safe to give', desc: 'Up to eight teammates, and anonymous feedback on managers.' },
      ]}
      href="/performance"
      hrefLabel="Explore performance"
      note="Plus check-ins, goals, notes and improvement plans."
    />
  )
}
