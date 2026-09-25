'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import { Button } from '../ui/button'
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { cn } from '@/lib/utils'
import { CTA_PRIMARY, GUARANTEE_DAYS, LOGIN_URL, REGISTER_URL } from '@/lib/site'
import Logo from './Logo'
import { productGroups, solutions } from './nav-data'

const Header = () => {
  const [open, setOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
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

  const navLink = 'text-[14px] font-medium text-warm-600 hover:text-warm-950 px-3 py-2 rounded-lg transition-colors'
  const panel = (name: string) =>
    cn(
      'absolute top-full pt-3 transition-all duration-200',
      activeDropdown === name ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none',
    )

  return (
    <header
      className={cn(
        'fixed top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b transition-colors duration-200',
        isScrolled ? 'border-warm-200' : 'border-transparent',
      )}
    >
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
                  <div className="w-[960px] rounded-2xl border border-warm-200 bg-white p-5 shadow-[0_24px_60px_-20px_rgba(9,9,11,0.25)]">
                    <div className="grid grid-cols-4 gap-6">
                      {productGroups.map((group) => (
                        <div key={group.label}>
                          <div className="mb-2 px-2 text-[11px] font-semibold uppercase tracking-wider text-warm-400">{group.label}</div>
                          <div className="space-y-0.5">
                            {group.items.map((item) => (
                              <Link
                                key={item.name}
                                href={item.href}
                                onClick={() => setActiveDropdown(null)}
                                className="group flex items-start gap-2.5 rounded-lg px-2 py-2 transition-colors hover:bg-warm-50"
                              >
                                <span className="mt-0.5 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-warm-100 text-warm-700 transition-colors group-hover:bg-forest-50 group-hover:text-forest-600">
                                  <item.icon className="h-3.5 w-3.5" />
                                </span>
                                <span className="min-w-0">
                                  <span className="flex items-center gap-1.5 text-[13px] font-semibold text-warm-800 group-hover:text-warm-950">
                                    {item.name}
                                    {item.badge && <span className="rounded-full bg-ok-50 px-1.5 py-px text-[9px] font-bold uppercase tracking-wider text-ok-700">{item.badge}</span>}
                                  </span>
                                  <span className="block text-[11.5px] leading-snug text-warm-500">{item.desc}</span>
                                </span>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 flex items-center justify-between border-t border-warm-100 pt-4">
                      <Link href="/products" onClick={() => setActiveDropdown(null)} className="inline-flex items-center gap-1.5 px-2 text-[13px] font-semibold text-warm-950 hover:underline">
                        See the whole platform
                        <ArrowRight className="h-3.5 w-3.5" />
                      </Link>
                      <span className="text-[12px] text-warm-500">Supply & Sales are free · team tools from $39 per location</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Solutions */}
              <div className="relative" onMouseEnter={() => enter('solutions')} onMouseLeave={leave}>
                <button type="button" className={cn(navLink, 'inline-flex items-center gap-1')}>
                  Solutions
                  <ChevronDown className={cn('h-3.5 w-3.5 transition-transform duration-200', activeDropdown === 'solutions' && 'rotate-180')} />
                </button>
                <div className={cn(panel('solutions'), 'left-1/2 -translate-x-1/2')}>
                  <div className="w-[420px] rounded-2xl border border-warm-200 bg-white p-3 shadow-[0_24px_60px_-20px_rgba(9,9,11,0.25)]">
                    {solutions.map((item) => (
                      <Link key={item.name} href={item.href} onClick={() => setActiveDropdown(null)} className="group flex items-start gap-3 rounded-lg px-2.5 py-2.5 transition-colors hover:bg-warm-50">
                        <span className="mt-0.5 inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-warm-100 text-warm-700 transition-colors group-hover:bg-forest-50 group-hover:text-forest-600">
                          <item.icon className="h-4 w-4" />
                        </span>
                        <span className="min-w-0">
                          <span className="block text-[13px] font-semibold text-warm-800">{item.name}</span>
                          <span className="block text-[12px] leading-snug text-warm-500">{item.desc}</span>
                        </span>
                      </Link>
                    ))}
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
                  <button
                    type="button"
                    onClick={() => setMobileExpanded(mobileExpanded === 'products' ? null : 'products')}
                    className="flex w-full items-center justify-between border-b border-warm-100 px-4 py-4 text-base font-medium text-warm-900"
                  >
                    Products
                    <ChevronDown className={cn('h-4 w-4 transition-transform', mobileExpanded === 'products' && 'rotate-180')} />
                  </button>
                  {mobileExpanded === 'products' && (
                    <div className="border-b border-warm-100 bg-warm-50">
                      {productGroups.map((group) => (
                        <div key={group.label} className="px-4 pb-1 pt-3">
                          <div className="mb-1 text-[11px] font-semibold uppercase tracking-wider text-warm-400">{group.label}</div>
                          {group.items.map((item) => (
                            <Link key={item.name} href={item.href} onClick={() => setOpen(false)} className="flex items-center gap-3 px-1 py-2.5 text-warm-700">
                              <item.icon className="h-4 w-4 shrink-0 text-forest-600" />
                              <div className="min-w-0">
                                <div className="flex items-center gap-1.5 text-sm font-medium">
                                  {item.name}
                                  {item.badge && <span className="rounded-full bg-ok-50 px-1.5 py-px text-[9px] font-bold uppercase tracking-wider text-ok-700">{item.badge}</span>}
                                </div>
                                <div className="text-xs text-warm-500">{item.desc}</div>
                              </div>
                            </Link>
                          ))}
                        </div>
                      ))}
                    </div>
                  )}

                  <button
                    type="button"
                    onClick={() => setMobileExpanded(mobileExpanded === 'solutions' ? null : 'solutions')}
                    className="flex w-full items-center justify-between border-b border-warm-100 px-4 py-4 text-base font-medium text-warm-900"
                  >
                    Solutions
                    <ChevronDown className={cn('h-4 w-4 transition-transform', mobileExpanded === 'solutions' && 'rotate-180')} />
                  </button>
                  {mobileExpanded === 'solutions' && (
                    <div className="border-b border-warm-100 bg-warm-50 px-4 py-2">
                      {solutions.map((item) => (
                        <Link key={item.name} href={item.href} onClick={() => setOpen(false)} className="flex items-center gap-3 px-1 py-2.5 text-warm-700">
                          <item.icon className="h-4 w-4 shrink-0 text-forest-600" />
                          <div>
                            <div className="text-sm font-medium">{item.name}</div>
                            <div className="text-xs text-warm-500">{item.desc}</div>
                          </div>
                        </Link>
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
