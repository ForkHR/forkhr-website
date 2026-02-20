import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import type { Metadata } from 'next'
import BlobBackground from '@/components/visual/BlobBackground'

export const metadata: Metadata = {
  title: 'About — Fork | Our Mission & Team',
  description:
    'Fork was built to simplify workforce management for hourly teams. Learn about our mission, values, and the team behind the platform.',
  alternates: {
    canonical: '/about',
  },
  openGraph: {
    title: 'About — Fork | Our Mission & Team',
    description:
      'Fork was built to simplify workforce management for hourly teams. Learn about our mission, values, and the team behind the platform.',
    url: 'https://forkhr.com/about',
    images: ['/og-image.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About — Fork | Our Mission & Team',
    description:
      'Fork was built to simplify workforce management for hourly teams. Learn about our mission, values, and the team behind the platform.',
    images: ['/og-image.png'],
  },
}

const values = [
  {
    title: 'Simplicity first',
    description:
      'Workforce management is complex. The tools you use to manage it shouldn\'t be. We obsess over removing friction from every workflow.',
  },
  {
    title: 'Built for operators by operators',
    description:
      'We design for the people who actually run the day-to-day — shift managers, HR leads, and small business owners — not enterprise procurement teams.',
  },
  {
    title: 'Tools people want to use',
    description:
      'Software that gets ignored doesn\'t solve problems. Every feature we ship is tested for adoption, not just functionality.',
  },
  {
    title: 'Honest by default',
    description:
      'Transparent pricing, no lock-in contracts, and a product that earns your trust every month. We don\'t sell features we haven\'t built.',
  },
]

export default function AboutPage() {
  return (
    <main>
      {/* Hero */}
      <section className="relative pt-[80px]"
        style={{
          backgroundImage: "radial-gradient(circle,#dee3e8 1px,transparent 0)",
          backgroundSize: "20px 20px",
        }}
      >
        <BlobBackground
          variant="hexagon"
        />
        <div className="max-w-5xl mx-auto px-6 pt-4 pb-4 md:pt-28 md:pb-20">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-slate-900">
              Workforce management shouldn&apos;t be this hard
            </h1>
            <p className="mt-6 text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl">
              We started Fork because we saw teams drowning in spreadsheets, group texts, and paper timesheets — and we knew there was a better way.
            </p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="bg-slate-50/60">
        <div className="max-w-5xl mx-auto px-6 py-12 md:py-28">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-6">
                Our mission
              </h2>
              <div className="space-y-4 text-lg text-slate-600 leading-relaxed">
                <p>
                  Fork exists to give every hourly team the same quality of workforce tools that large enterprises take for granted — without the complexity, the long contracts, or the six-figure price tags.
                </p>
                <p>
                  We believe that scheduling, time tracking, onboarding, and team engagement should work together in one platform — and that platform should be simple enough for anyone to set up in an afternoon.
                </p>
                <p>
                  Every feature we build starts with a real problem we&apos;ve seen in real businesses. If it doesn&apos;t save time, reduce errors, or keep employees more engaged, we don&apos;t ship it.
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center">
              <div className="w-full max-w-sm aspect-square rounded-3xl bg-linear-to-br from-primary/10 via-primary/5 to-transparent flex items-center justify-center">
                <svg height="120px" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16.6804 24.7935C25.1158 33.3781 26.7618 35.1141 27.4968 36.2671C28.5781 37.9754 29.501 40.1521 29.9812 42.0952C30.3943 43.8518 30.308 48.8409 29.8259 52.479C29.2741 56.5249 29.622 59.5304 31.0417 63.0698C32.5569 66.8241 31.518 65.6662 50.8064 84.9546L63.8953 98.0425C59.4837 99.3162 54.8215 100 49.9998 100C22.3858 100 1.9778e-05 77.6144 -0.000244141 50.0005C-0.000244141 38.2337 4.06616 27.4171 10.8679 18.8765L16.6804 24.7935ZM51.3572 42.811C54.4939 41.6186 57.2677 41.4657 60.199 42.3667C63.2595 43.3075 62.1995 42.3672 79.7322 59.6909L93.9792 73.8042C92.2747 76.9468 90.2424 79.8851 87.9294 82.5757L74.7937 69.3716C58.8251 53.3288 59.2553 53.735 57.5759 53.4888C56.5977 53.3507 55.4501 53.6606 54.6111 54.3042C53.1833 55.397 52.9642 58.045 54.1453 59.7944C54.5646 60.4114 58.9782 64.874 69.2849 75.1313L82.3445 88.1245C79.6744 90.3921 76.7647 92.3854 73.656 94.0581L59.157 79.4214C44.4096 64.5247 43.3545 63.41 42.8748 62.4526C41.5765 59.7213 41.2659 56.4247 42.0281 53.1265C42.9747 48.9678 47.0474 44.4723 51.3572 42.811ZM49.9998 -0.000488281C77.614 -0.000488281 99.9998 22.3863 99.9998 50.0005C99.9997 54.9766 99.2722 59.7827 97.9187 64.3188C95.4518 61.8014 91.541 57.8615 85.3015 51.5864C74.2575 40.4827 68.1545 34.4687 67.1902 33.7134C64.3697 31.49 60.8565 30.1563 57.0671 29.8599C56.0259 29.774 53.4995 29.9055 51.4343 30.1392C46.9829 30.6737 44.1271 30.6549 41.6492 30.1177C39.6322 29.6831 37.1841 28.6081 35.5935 27.4653C34.9246 27.0054 30.9483 23.1483 25.1443 17.3442C22.7473 14.9472 20.4915 12.7135 18.7322 10.9839C27.2951 4.11265 38.1666 -0.000431741 49.9998 -0.000488281Z" fill="hsl(248 98% 61%)" fillOpacity="0.15" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section>
        <div className="max-w-5xl mx-auto px-6 py-12 md:py-28">
          <div className="max-w-2xl mb-16">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
              What we stand for
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 gap-10">
            {values.map((v) => (
              <div key={v.title}>
                <h3 className="text-xl font-semibold text-slate-900 mb-3">{v.title}</h3>
                <p className="text-slate-600 leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / CTA */}
      <section className="bg-slate-900">
        <div className="max-w-5xl mx-auto px-6 py-20 md:py-28 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-4">
            Questions? We&apos;d love to hear from you.
          </h2>
          <p className="text-lg text-slate-400 mb-10 max-w-xl mx-auto">
            Reach out to our team for a demo, partnership inquiries, or just to say hello.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="mailto:support@forkhr.com">
              <Button size="lg" className="text-base px-8 h-12 bg-white text-slate-900 hover:bg-slate-100">
                Contact us
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="https://app.forkhr.com/register" target="_blank">
              <Button variant="outline" size="lg" className="text-base px-8 h-12 border-slate-700 text-slate-300 bg-slate-800 hover:bg-slate-900 hover:text-white">
                Start free trial
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}
