'use client'

import { useState } from 'react'
import { List } from 'lucide-react'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import type { DocsNavSection } from '@/lib/docs'
import DocsNav from './DocsNav'
import { DocsSearchTrigger } from './DocsSearch'

/** Below the desktop width the contents step aside: a bar under the site header with a Contents button (the sidebar's list in a sheet) and the search. */
export default function DocsMobileBar({ sections }: { sections: DocsNavSection[] }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="sticky top-16 z-30 -mx-4 flex items-center gap-2 border-b border-warm-100 bg-white/90 px-4 py-2.5 backdrop-blur-md md:-mx-6 md:px-6 lg:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <button
            type="button"
            className="inline-flex h-10 shrink-0 items-center gap-2 rounded-full border border-warm-200 bg-white pl-3.5 pr-4 text-[14px] font-medium text-warm-700 outline-none transition-colors hover:border-warm-300 hover:text-warm-950 focus-visible:border-warm-400"
          >
            <List className="h-4 w-4" aria-hidden="true" />
            Contents
          </button>
        </SheetTrigger>
        <SheetContent
          side="left"
          className="flex w-[86vw] max-w-sm flex-col gap-0 p-0 outline-none"
          // The sheet itself takes the focus, not the first row's arrow
          onOpenAutoFocus={(e) => {
            e.preventDefault()
            ;(e.currentTarget as HTMLElement).focus()
          }}
        >
          <SheetHeader>
            <SheetTitle className="border-b border-warm-100 px-5 py-4 text-left text-base font-semibold text-warm-950">Fork Docs</SheetTitle>
          </SheetHeader>
          <div data-docs-nav-scroll className="min-h-0 flex-1 overflow-y-auto px-2.5 py-4">
            <DocsNav sections={sections} onNavigate={() => setOpen(false)} />
          </div>
        </SheetContent>
      </Sheet>
      <DocsSearchTrigger className="min-w-0 flex-1" />
    </div>
  )
}
