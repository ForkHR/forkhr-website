import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Backdrop from '@/components/visual/Backdrop'
import StoreBadges from './StoreBadges'
import { CTA_PRIMARY, GUARANTEE_DAYS, REGISTER_URL } from '@/lib/site'

/** The promises every page closes on, beside the offer. Same everywhere, so they stay true. */
const PROMISES = [
  { title: 'Free plan, no card', desc: 'Ordering, selling, invoices and routes, free for good.' },
  { title: 'Unlimited employees', desc: 'One price per location. Everyone who works there is included.' },
  { title: `${GUARANTEE_DAYS}-day money-back guarantee`, desc: 'On every paid plan. Cancel anytime, your data stays.' },
  { title: 'On every phone', desc: 'iOS and Android for the team, the web and a kiosk for the shop.' },
]

/** The closing dark band every page ends on. Same offer everywhere. */
export default function CtaSection({
  eyebrow = 'Get started',
  title = 'Run the whole business from one app',
  lede = 'Free to order and sell. Team plans from $39 per location.',
  secondaryHref = '/pricing',
  secondaryLabel = 'View pricing',
  registerHref = REGISTER_URL,
}: {
  eyebrow?: string
  title?: string
  lede?: string
  secondaryHref?: string
  secondaryLabel?: string
  /** The sign-up link with what the page knows (registerUrl in lib/site: a use, a plan). */
  registerHref?: string
}) {
  return (
    <section className="relative overflow-hidden bg-warm-950">
      <Backdrop tone="dark" />
      <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
          <div>
            <span className="eyebrow mb-4 text-lime-accent">{eyebrow}</span>
            <h2 className="mb-5 text-4xl font-semibold tracking-tight text-white md:text-5xl">{title}</h2>
            <p className="mb-10 max-w-lg text-lg text-warm-400">{lede}</p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Link href={registerHref} target="_blank">
                <Button size="lg" className="h-12 bg-white px-7 text-base text-warm-950 hover:bg-warm-100">
                  {CTA_PRIMARY}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href={secondaryHref}>
                <Button variant="outline" size="lg" className="h-12 border-warm-700 bg-transparent px-7 text-base text-warm-200 hover:bg-warm-900 hover:text-white">
                  {secondaryLabel}
                </Button>
              </Link>
            </div>
            <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-3">
              <span className="text-[13px] text-warm-500">The team gets the app</span>
              <StoreBadges size="sm" />
            </div>
          </div>

          <ul className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2">
            {PROMISES.map((p) => (
              <li key={p.title} className="bg-warm-950 p-5">
                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-lime-accent/15 text-lime-accent">
                  <Check className="h-3.5 w-3.5" strokeWidth={3} />
                </span>
                <div className="mt-3 text-[15px] font-semibold text-white">{p.title}</div>
                <p className="mt-1 text-[13.5px] leading-relaxed text-warm-400">{p.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
