import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export default function NotFound() {
  return (
    <main className="max-w-5xl mx-auto px-4 md:px-6 py-32 text-center">
      <p className="text-7xl font-bold text-primary mb-4">404</p>
      <h1 className="text-2xl font-semibold text-slate-900 mb-3">Page not found</h1>
      <p className="text-slate-500 mb-8 max-w-md mx-auto">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link href="/">
        <Button>
          Back to home
          <ArrowRight className="w-4 h-4 ml-1" />
        </Button>
      </Link>
    </main>
  )
}
