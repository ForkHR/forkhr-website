import type { Metadata } from 'next'
import Link from 'next/link'
import { CreditCard, Receipt, Store } from 'lucide-react'
import LeadPage, { type LeadPoint } from '@/components/leads/LeadPage'
import VendorApplicationForm from '@/components/leads/VendorApplicationForm'
import { CLAIM_URL } from '@/lib/suppliers'

const title = 'For vendors — Get listed on the Fork marketplace'
const description =
  'Suppliers and service companies: tell us what you supply and where, and we will be in touch about getting your storefront listed where shops on Fork look for vendors. Selling on Fork is free.'

export const metadata: Metadata = {
  title,
  description,
  alternates: { canonical: '/vendors' },
  openGraph: { title: 'Get your business on the Fork marketplace', description, url: 'https://forkhr.com/vendors', images: ['/og-image.png'], type: 'website' },
  twitter: { card: 'summary_large_image', title: 'Get your business on the Fork marketplace', description, images: ['/og-image.png'] },
}

// What a listed seller has, in the words of /storefront, /sales and the supplier directory
const points: LeadPoint[] = [
  { icon: Store, title: 'A page buyers find', text: 'A listed storefront gets its own page in the supplier directory and shows up in the marketplace inside the app.' },
  { icon: Receipt, title: 'Free to sell', text: 'Your catalog, orders, invoices and delivery routes are on the Free plan.' },
  { icon: CreditCard, title: 'Customers need no account', text: 'Shops on Fork order on their own terms. Anyone else checks out as a guest and pays by card.' },
]

export default function VendorsPage() {
  return (
    <LeadPage
      eyebrow="For vendors"
      title="Get your business on the Fork marketplace"
      lede="Suppliers and service companies: tell us what you supply and where. We will be in touch about getting your storefront listed where shops on Fork look for vendors."
      pointsTitle="What a listing gives you"
      points={points}
      aside={
        <>
          Ready to set up on your own?{' '}
          <a href={CLAIM_URL} target="_blank" rel="noopener noreferrer" className="font-medium text-forest-600 transition-colors hover:text-forest-700">
            Create your seller account
          </a>
          , or see who is already listed in the{' '}
          <Link href="/suppliers" className="font-medium text-forest-600 transition-colors hover:text-forest-700">
            supplier directory
          </Link>
          .
        </>
      }
    >
      <VendorApplicationForm />
    </LeadPage>
  )
}
