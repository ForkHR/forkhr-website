'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import { Button } from '../ui/button'
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { cn } from '@/lib/utils'
import { CTA_PRIMARY, GUARANTEE_DAYS, LOGIN_URL, REGISTER_URL } from '@/lib/site'
import { SOLUTION_MENU, type PreviewKey, type SolutionLink } from '@/lib/solutions'
import { renderPreview } from '@/components/previews/registry'
import Logo from './Logo'
import { productGroups } from './nav-data'

/**
 * The live demo panel in a menu: whatever the pointer is on, shown in a small window frame.
 * Only rendered while the menu is open, so the demos do not run in the background.
 */
const MenuDemo = ({ preview, title, pitch, href, hrefLabel }: { preview: PreviewKey; title: string; pitch: string; href: string; hrefLabel: string }) => (
  <div className="flex h-full flex-col rounded-xl bg-warm-100/80 p-3">
    <div className="@container pointer-events-none relative h-[220px] overflow-hidden rounded-lg border border-warm-200 bg-white shadow-[0_18px_40px_-24px_rgba(9,9,11,0.35)] mask-[linear-gradient(to_bottom,black_72%,transparent)]" aria-hidden="true">
      <div className="flex items-center gap-1.5 border-b border-warm-100 px-2.5 py-1.5">
        <span className="h-2 w-2 rounded-full bg-warm-200" />
        <span className="h-2 w-2 rounded-full bg-warm-200" />
        <span className="h-2 w-2 rounded-full bg-warm-200" />
        <span className="flex-1 truncate text-center text-[10px] font-medium text-warm-400">{title}</span>
      </div>
      <div key={preview} className="pv-fade-in">
        {renderPreview(preview)}
      </div>
    </div>
    <p className="mt-3 flex-1 text-[12.5px] leading-snug text-warm-600">{pitch}</p>
    <Link href={href} className="mt-3 inline-flex items-center gap-1 text-[13px] font-semibold text-warm-950 hover:underline">
      {hrefLabel}
      <ArrowRight className="h-3.5 w-3.5" />
    </Link>
  </div>
)

const Header = () => {
  const [open, setOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [productFocus, setProductFocus] = useState(0)
  const [solutionFocus, setSolutionFocus] = useState<SolutionLink>(SOLUTION_MENU.business[0])
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null)
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const enter = (name: string) => {
    if (dropdownTimeout.current) clearTimeout(dropdownTimeout.current)
    setActiveDropdown(name)
  }
  const leave = () => {
    dropdownTimeout.current = setTimeout(() => setActiveDropdown(null), 150)
  }
  const close = () => setActiveDropdown(null)

  const navLink = 'text-[14px] font-medium text-warm-600 hover:text-warm-950 px-3 py-2 rounded-lg transition-colors'
  const panel = (name: string) =>
    cn('absolute top-full pt-3 transition-all duration-200', activeDropdown === name ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none')
  const focusedGroup = productGroups[productFocus]

  const itemRow = (item: { name: string; desc: string; href: string; icon?: React.ComponentType<{ className?: string }> }, onFocus?: () => void) => (
    <Link
      key={item.href + item.name}
      href={item.href}
      onClick={close}
      onMouseEnter={onFocus}
      onFocus={onFocus}
      className="group flex items-start gap-2.5 rounded-lg px-2 py-2 transition-colors hover:bg-warm-50"
    >
      {item.icon && (
        <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-warm-100 text-warm-700 transition-colors group-hover:bg-forest-50 group-hover:text-forest-600">
          <item.icon className="h-3.5 w-3.5" />
        </span>
      )}
      <span className="min-w-0">
        <span className="block text-[13px] font-semibold text-warm-800 group-hover:text-warm-950">{item.name}</span>
        <span className="block text-[11.5px] leading-snug text-warm-500">{item.desc}</span>
      </span>
    </Link>
  )

  return (
    <header className={cn('fixed top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b transition-colors duration-200', isScrolled ? 'border-warm-200' : 'border-transparent')}>
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex h-16 items-center">
          <Link href="/" className="mr-8 flex items-center text-warm-950" aria-label="Fork home">
            <Logo height={28} />
          </Link>

          {/* Desktop */}
          <div className="hidden flex-1 items-center justify-between md:flex">
            <nav className="flex items-center gap-1">
              {/* Products */}
              <div className="relative" onMouseEnter={() => enter('products')} onMouseLeave={leave}>
                <Link href="/products" className={cn(navLink, 'inline-flex items-center gap-1')}>
                  Products
                  <ChevronDown className={cn('h-3.5 w-3.5 transition-transform duration-200', activeDropdown === 'products' && 'rotate-180')} />
                </Link>
                <div className={cn(panel('products'), 'left-0')}>
                  <div className="w-[920px] rounded-2xl border border-warm-200 bg-white p-4 shadow-[0_24px_60px_-20px_rgba(9,9,11,0.25)]">
                    <div className="grid grid-cols-[1fr_1fr_1.15fr_300px] gap-4">
                      {productGroups.map((group, gi) => (
                        <div key={group.label} onMouseEnter={() => setProductFocus(gi)} className={cn('rounded-xl p-1 transition-colors', productFocus === gi && 'bg-warm-50/70')}>
                          <div className="mb-1.5 flex items-center gap-2 px-2 pt-1 text-[11px] font-semibold uppercase tracking-wider text-warm-400">
                            {group.label}
                            {group.free && <span className="rounded-full bg-ok-50 px-1.5 py-px text-[9px] font-bold tracking-wider text-ok-700">Free plan</span>}
                          </div>
                          <div className="space-y-0.5">{group.items.map((item) => itemRow(item, () => setProductFocus(gi)))}</div>
                        </div>
                      ))}
                      {activeDropdown === 'products' && (
                        <MenuDemo preview={focusedGroup.preview} title={focusedGroup.previewTitle} pitch={focusedGroup.pitch} href={focusedGroup.items[0].href} hrefLabel={`Explore ${focusedGroup.label}`} />
                      )}
                    </div>
                    <div className="mt-3 flex items-center justify-between border-t border-warm-100 px-2 pt-3">
                      <Link href="/products" onClick={close} className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-warm-950 hover:underline">
                        See the whole platform
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                      <span className="text-[12px] text-warm-500">Supply & Sales are free · team tools from $39 per location · {GUARANTEE_DAYS}-day money-back guarantee</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Solutions */}
              <div className="relative" onMouseEnter={() => enter('solutions')} onMouseLeave={leave}>
                <Link href="/solutions" className={cn(navLink, 'inline-flex items-center gap-1')}>
                  Solutions
                  <ChevronDown className={cn('h-3.5 w-3.5 transition-transform duration-200', activeDropdown === 'solutions' && 'rotate-180')} />
                </Link>
                <div className={cn(panel('solutions'), 'left-0')}>
                  <div className="w-[820px] rounded-2xl border border-warm-200 bg-white p-4 shadow-[0_24px_60px_-20px_rgba(9,9,11,0.25)]">
                    <div className="grid grid-cols-[1fr_1.1fr_300px] gap-4">
                      <div className="rounded-xl p-1">
                        <div className="mb-1.5 px-2 pt-1 text-[11px] font-semibold uppercase tracking-wider text-warm-400">By business</div>
                        <div className="space-y-0.5">{SOLUTION_MENU.business.map((l) => itemRow({ name: l.label, desc: l.desc, href: l.href }, () => setSolutionFocus(l)))}</div>
                      </div>
                      <div className="rounded-xl p-1">
                        <div className="mb-1.5 px-2 pt-1 text-[11px] font-semibold uppercase tracking-wider text-warm-400">By need</div>
                        <div className="space-y-0.5">{SOLUTION_MENU.need.map((l) => itemRow({ name: l.label, desc: l.desc, href: l.href }, () => setSolutionFocus(l)))}</div>
                      </div>
                      {activeDropdown === 'solutions' && <MenuDemo preview={solutionFocus.preview} title={`Fork · ${solutionFocus.label}`} pitch={solutionFocus.desc} href={solutionFocus.href} hrefLabel={`Fork for ${solutionFocus.label.toLowerCase()}`} />}
                    </div>
                  </div>
                </div>
              </div>

              <Link href="/pricing" className={navLink}>
                Pricing
              </Link>
              <Link href="/about" className={navLink}>
                About
              </Link>
              <Link href="/faq" className={navLink}>
                FAQ
              </Link>
            </nav>

            <div className="flex items-center gap-2">
              <Link href={LOGIN_URL} target="_blank">
                <Button variant="ghost" className="text-[14px] font-medium text-warm-600 hover:bg-transparent hover:text-warm-950">
                  Sign in
                  <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </Link>
              <Link href={REGISTER_URL} target="_blank">
                <Button className="text-[14px]">{CTA_PRIMARY}</Button>
              </Link>
            </div>
          </div>

          {/* Mobile */}
          <div className="flex min-w-0 flex-1 items-center justify-end gap-2 md:hidden">
            <Link href={LOGIN_URL} target="_blank" className="min-w-0">
              <Button variant="ghost" className="max-w-[55vw] text-[14px] font-medium text-warm-600 hover:bg-transparent hover:text-warm-950">
                <span className="min-w-0 flex-1 truncate">Sign in</span>
                <ArrowRight className="ml-1 h-4 w-4 shrink-0" />
              </Button>
            </Link>
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="secondary" className="text-[14px]" size="icon" aria-label="Open menu">
                  <HamburgerMenuIcon className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent className="flex w-full flex-col overflow-y-auto bg-white p-0">
                <SheetHeader>
                  <SheetTitle className="sr-only">Navigation menu</SheetTitle>
                  <div className="flex items-center border-b border-warm-100 p-4 text-warm-950">
                    <Logo height={26} />
                  </div>
                </SheetHeader>
                <div className="flex-1 overflow-y-auto">
                  <button type="button" onClick={() => setMobileExpanded(mobileExpanded === 'products' ? null : 'products')} className="flex w-full items-center justify-between border-b border-warm-100 px-4 py-4 text-base font-medium text-warm-900">
                    Products
                    <ChevronDown className={cn('h-4 w-4 transition-transform', mobileExpanded === 'products' && 'rotate-180')} />
                  </button>
                  {mobileExpanded === 'products' && (
                    <div className="border-b border-warm-100 bg-warm-50">
                      {productGroups.map((group) => (
                        <div key={group.label} className="px-4 pb-1 pt-3">
                          <div className="mb-1 flex items-center gap-2 text-[11px] font-semibold uppercase tracking-wider text-warm-400">
                            {group.label}
                            {group.free && <span className="rounded-full bg-ok-50 px-1.5 py-px text-[9px] font-bold tracking-wider text-ok-700">Free plan</span>}
                          </div>
                          {group.items.map((item) => (
                            <Link key={item.name} href={item.href} onClick={() => setOpen(false)} className="flex items-center gap-3 px-1 py-2.5 text-warm-700">
                              <item.icon className="h-4 w-4 shrink-0 text-forest-600" />
                              <div className="min-w-0">
                                <div className="text-sm font-medium">{item.name}</div>
                                <div className="text-xs text-warm-500">{item.desc}</div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}

                  <button type="button" onClick={() => setMobileExpanded(mobileExpanded === 'solutions' ? null : 'solutions')} className="flex w-full items-center justify-between border-b border-warm-100 px-4 py-4 text-base font-medium text-warm-900">
                    Solutions
                    <ChevronDown className={cn('h-4 w-4 transition-transform', mobileExpanded === 'solutions' && 'rotate-180')} />
                  </button>
                  {mobileExpanded === 'solutions' && (
                    <div className="border-b border-warm-100 bg-warm-50">
                      {[
                        ['By business', SOLUTION_MENU.business],
                        ['By need', SOLUTION_MENU.need],
                      ].map(([label, links]) => (
                        <div key={label as string} className="px-4 pb-1 pt-3">
                          <div className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-warm-400">{label as string}</div>
                          {(links as SolutionLink[]).map((l) => (
                            <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="flex items-center justify-between gap-3 px-1 py-2.5 text-warm-700">
                              <div className="min-w-0">
                                <div className="text-sm font-medium">{l.label}</div>
                                <div className="text-xs text-warm-500">{l.desc}</div>
                              </div>
                              <ArrowRight className="h-3.5 w-3.5 shrink-0 text-warm-300" />
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}

                  {[
                    { href: '/pricing', label: 'Pricing' },
                    { href: '/about', label: 'About' },
                    { href: '/faq', label: 'FAQ' },
                  ].map((l) => (
                    <Link key={l.href} href={l.href} onClick={() => setOpen(false)} className="flex items-center border-b border-warm-100 px-4 py-4 text-base font-medium text-warm-900">
                      {l.label}
                    </Link>
                  ))}
                </div>
                <SheetFooter className="flex-col gap-2 p-3">
                  <div className="flex flex-1 gap-3">
                    <Link href={LOGIN_URL} target="_blank" className="flex-1">
                      <Button variant="secondary" className="w-full text-[14px]">
                        Sign in
                      </Button>
                    </Link>
                    <Link href={REGISTER_URL} target="_blank" className="flex-1">
                      <Button className="w-full text-[14px]">{CTA_PRIMARY}</Button>
                    </Link>
                  </div>
                  <p className="px-1 text-center text-[11px] text-warm-400">Free for ordering & selling · {GUARANTEE_DAYS}-day money-back guarantee on paid plans</p>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Header
