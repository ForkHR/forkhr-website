import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Backdrop from '@/components/visual/Backdrop'
import { DocsSearchTrigger } from '@/components/docs/DocsSearch'

// An article or topic address that leads nowhere: it was renamed, or never was
export default function DocsNotFound() {
  return (
    <main className="pt-16">
      <section className="relative overflow-hidden">
        <Backdrop />
        <div className="relative mx-auto max-w-6xl px-6 py-20 md:py-28">
          <div className="max-w-xl">
            <span className="eyebrow mb-4">Docs</span>
            <h1 className="text-4xl font-semibold leading-[1.05] tracking-[-0.02em] text-warm-950 sm:text-5xl">This article isn&apos;t here</h1>
            <p className="mt-5 text-lg leading-relaxed text-warm-600">It may have been renamed. Search the docs for it, or start from the topics.</p>
            <DocsSearchTrigger size="lg" className="mt-8" />
            <Button asChild variant="outline" size="lg" className="mt-5 h-11 px-6 text-base">
              <Link href="/docs">
                All topics
                <ArrowRight className="ml-1.5 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}
