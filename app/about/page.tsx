import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Backdrop from '@/components/visual/Backdrop'
import SectionHeading from '@/components/marketing/SectionHeading'
import { LogoMark } from '@/components/navigation/Logo'
import { CTA_PRIMARY, REGISTER_URL, SUPPORT_EMAIL } from '@/lib/site'

const description = 'Fork was built to give hourly teams one app for the team, the operations and the money. Learn about our mission and values.'

export const metadata: Metadata = {
  title: 'About — Fork | Our mission',
  description,
  alternates: { canonical: '/about' },
  openGraph: { title: 'About — Fork | Our mission', description, url: 'https://forkhr.com/about', images: ['/og-image.png'], type: 'website' },
  twitter: { card: 'summary_large_image', title: 'About — Fork | Our mission', description, images: ['/og-image.png'] },
}

const values = [
  {
    title: 'Simplicity first',
    description: 'Running a shop is complex. The tools should not be. We remove friction from every workflow before we add a feature to it.',
  },
  {
    title: 'Built for operators, by operators',
    description: 'We design for the people who run the day: shift leads, managers, owners and the driver on the route. Not for procurement teams.',
  },
  {
    title: 'Tools people want to open',
    description: 'Software that gets ignored solves nothing. Every feature is judged by whether the team uses it on a busy Friday.',
  },
  {
    title: 'Honest by default',
    description: 'Ordering and selling are free. Paid plans are one price per location with a money-back guarantee. We do not sell features we have not built.',
  },
]

export default function AboutPage() {
  return (
    <main className="pt-16">
      <section className="relative overflow-hidden border-b border-warm-100">
        <Backdrop />
        <div className="relative mx-auto max-w-6xl px-6 pb-16 pt-12 md:pb-24 md:pt-28">
          <div className="max-w-3xl">
            <span className="eyebrow mb-4">About</span>
            <h1 className="text-5xl font-semibold leading-[1.05] tracking-tight text-warm-950 md:text-6xl">One app for the whole shop.</h1>
            <p className="mt-6 max-w-2xl text-lg leading-relaxed text-warm-600 md:text-xl">
              We started Fork because we saw teams running on group chats, paper checklists and a shoebox of vendor invoices. There had to be one place for the team, the procedures and the money.
            </p>
          </div>
        </div>
      </section>

      <section className="border-b border-warm-100 bg-warm-50">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="grid items-center gap-16 md:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-semibold tracking-tight text-warm-950 md:text-4xl">Our mission</h2>
              <div className="space-y-4 text-lg leading-relaxed text-warm-600">
                <p>Fork exists to give hourly teams the tools large operators take for granted, without the complexity, the long contracts or the six-figure price tags.</p>
                <p>
                  We believe the schedule, the opening checklist, the order to the dairy and the invoice to the café down the street belong in one app, and that app should be simple enough to set up in an afternoon.
                </p>
                <p>Every feature starts with a real problem seen in a real business. If it does not save time, catch a mistake or bring money in faster, we do not ship it.</p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="flex aspect-square w-full max-w-sm items-center justify-center rounded-2xl border border-warm-200 bg-white">
                <LogoMark size={120} fill="#2563EB" className="opacity-80" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-warm-100">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
          <SectionHeading eyebrow="Values" title="What we stand for" className="mb-14" />
          <div className="grid gap-px overflow-hidden rounded-2xl border border-warm-200 bg-warm-200 sm:grid-cols-2">
            {values.map((v) => (
              <div key={v.title} className="bg-white p-7 transition-colors hover:bg-warm-50">
                <h3 className="mb-2 text-lg font-semibold text-warm-950">{v.title}</h3>
                <p className="text-[15px] leading-relaxed text-warm-600">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-warm-950">
        <Backdrop tone="dark" glow={false} />
        <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="max-w-2xl">
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">Questions? We would love to hear from you.</h2>
            <p className="mb-10 max-w-xl text-lg text-warm-400">Reach out for a demo, a partnership, or just to say hello.</p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href={`mailto:${SUPPORT_EMAIL}`}>
                <Button size="lg" className="h-12 bg-white px-8 text-base text-warm-950 hover:bg-warm-100">
                  Contact us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href={REGISTER_URL} target="_blank">
                <Button variant="outline" size="lg" className="h-12 border-warm-700 bg-transparent px-8 text-base text-warm-200 hover:bg-warm-900 hover:text-white">
                  {CTA_PRIMARY}
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
