import { Button } from '@/components/ui/button'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'

const NotFound = () => {
  return (
    <main className="fade-in-up z-10 relative">
      <div className="max-w-[800px] mx-auto md:px-8 px-4 min-h-[60vh] border-l border-r border-slate-200 border-dashed">
        <div className="py-12 md:py-24 text-center">
          <div className="text-8xl md:text-9xl font-bold text-primary mb-4">
            404
          </div>
          
          <h1 className="text-3xl md:text-5xl font-bold mb-6">
            Page not found<span className="text-primary">.</span>
          </h1>
          
          <p className="text-xl text-muted-foreground mb-8 max-w-md mx-auto">
            Sorry, we couldn&apos;t find the page you&apos;re looking for. 
            It might have been moved, deleted, or the URL might be incorrect.
          </p>
          
          <Link href="/">
            <Button size="lg" className="px-8">
              <ArrowLeft className="w-4 h-4 mr-2"/>
              Go back home
            </Button>
          </Link>
        </div>
      </div>
    </main>
  )
}

export default NotFound