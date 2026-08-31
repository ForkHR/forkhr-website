import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function NotFound() {
  return (
    <main className="pt-16">
      <div className="max-w-6xl mx-auto px-6 py-24 md:py-32 text-center">
        <p className="text-7xl font-semibold tracking-tight text-warm-950 mb-4">404</p>
        <h1 className="text-2xl font-semibold tracking-tight text-warm-950 mb-3">Page not found</h1>
        <p className="text-warm-500 mb-8 max-w-md mx-auto">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <Link href="/">
          <Button>
            Back to home
            <ArrowRight className="w-4 h-4 ml-1" />
          </Button>
        </Link>
      </div>
    </main>
  )
}
