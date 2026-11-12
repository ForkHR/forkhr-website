import type { Metadata } from 'next'
import { CalendarDays, ClipboardCheck, Package, Tag } from 'lucide-react'
import LeadPage, { type LeadPoint } from '@/components/leads/LeadPage'
import DemoRequestForm from '@/components/leads/DemoRequestForm'
import { CTA_PRIMARY, REGISTER_URL } from '@/lib/site'

const title = 'Request a demo'
const description =
  'See Fork with a person from the team: schedules and timecards, checklists and training, orders to your vendors and invoices to your customers. Tell us about your business and we will set up a time.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/demo' },
  openGraph: { title: 'Request a demo of Fork', description, url: 'https://forkhr.com/demo', images: ['/og-image.png'], type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Request a demo of Fork', description, images: ['/og-image.png'] },
}

// What a demo walks through: the three sides of the product (the header's menu groups), then the price.
const points: LeadPoint[] = [
  { icon: CalendarDays, title: 'Your team’s week', text: 'Schedules, timecards and time off, on the phones your staff already carry.' },
  { icon: ClipboardCheck, title: 'How every shift runs', text: 'Opening and closing checklists, logs, training and the feed people confirm they read.' },
  { icon: Package, title: 'Orders and invoices', text: 'Ordering from your vendors and selling to your customers, which stay free.' },
  { icon: Tag, title: 'What it would cost you', text: 'One price per location, however many people work there.' },
]

export default function DemoPage() {
  return (
    <LeadPage
      eyebrow="Request a demo"
      title="See Fork with your own business in mind"
      lede="Tell us a little about your business and someone from Fork will walk you through it, around your questions."
      pointsTitle="What we will go through"
      points={points}
      aside={
        <>
          Rather look around yourself? Ordering and selling are free.{' '}
          <a href={REGISTER_URL} target="_blank" rel="noopener noreferrer" className="font-medium text-forest-600 transition-colors hover:text-forest-700">
            {CTA_PRIMARY}
          </a>
        </>
      }
    >
      <DemoRequestForm />
    </LeadPage>
  )
}
