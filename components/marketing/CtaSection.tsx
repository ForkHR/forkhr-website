import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Backdrop from '@/components/visual/Backdrop'
import { CTA_PRIMARY, GUARANTEE_DAYS, REGISTER_URL } from '@/lib/site'

/** The closing dark band every page ends on. Same offer everywhere. */
export default function CtaSection({
  eyebrow = 'Get started',
  title = 'Run the whole business from one app',
  lede = 'Ordering and selling are free. Add your team when you are ready, from $39 per location per month.',
  secondaryHref = '/pricing',
  secondaryLabel = 'View pricing',
}: {
  eyebrow?: string
  title?: string
  lede?: string
  secondaryHref?: string
  secondaryLabel?: string
}) {
  return (
    <section className="relative overflow-hidden bg-warm-950">
      <Backdrop tone="dark" glow={false} />
      <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
        <div className="max-w-2xl">
          <span className="eyebrow mb-4 text-lime-accent">{eyebrow}</span>
          <h2 className="mb-5 text-3xl font-semibold tracking-tight text-white md:text-5xl">{title}</h2>
          <p className="mb-10 max-w-lg text-lg text-warm-400">{lede}</p>
          <div className="flex flex-col gap-4 sm:flex-row">
            <Link href={REGISTER_URL} target="_blank">
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
          <p className="mt-6 text-sm text-warm-500">No card needed for the Free plan · {GUARANTEE_DAYS}-day money-back guarantee on paid plans · Cancel anytime</p>
        </div>
      </div>
    </section>
  )
}
