'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ArrowRight, ChevronDown } from 'lucide-react'
import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import { Button } from '../ui/button'
import { Sheet, SheetContent, SheetFooter, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { cn } from '@/lib/utils'
import { CTA_DEMO, CTA_PRIMARY, DEMO_PATH, GUARANTEE_DAYS, LOGIN_URL, REGISTER_URL } from '@/lib/site'
import SauceCardPreview from '@/components/previews/SauceCardPreview'
import { SauceMark } from '@/components/previews/sauceBits'
import Logo from './Logo'
import { productGroups, sauceAsks, sauceItem, solutionGroups, type NavItem, type ProductGroup } from './nav-data'

/*
 * Each menu is a rail of groups at the left and the pointed group's tools at the right, each tool an
 * icon and a name; a tool's line is said at the menu's foot while it is pointed at (the owner's pick of
 * 2026-11-23: the rail of sketch B with the rows of sketch A). Products opens on Sauce.
 */

const SAUCE = 'sauce'

const FreeChip = () => <span className="rounded-full bg-ok-50 px-1.5 py-px text-[11px] font-semibold text-ok-700">Free</span>
const PremiumChip = () => <span className="rounded-full bg-warm-100 px-1.5 py-px text-[11px] font-semibold text-warm-700">Premium</span>
const NewChip = ({ children }: { children: string }) => <span className="shrink-0 rounded-full bg-forest-50 px-1.5 py-px text-[11px] font-semibold text-forest-700">{children}</span>

type RailRow = { key: string; label: string; sub: string; href: string; free?: boolean; premium?: boolean; icon?: ProductGroup['icon'] }

/** The menu's left side: one row a group, the pointed one raised. Hover or focus shows its tools; a click opens its page. */
function MenuRail({ rows, active, onPick, onClose, foot }: { rows: RailRow[]; active: string; onPick: (key: string) => void; onClose: () => void; foot: { label: string; href: string } }) {
  return (
    <div className="flex flex-col gap-1 border-r border-warm-100 bg-warm-50 p-2">
      {rows.map((row) => {
        const on = row.key === active
        return (
          <Link
            key={row.key}
            href={row.href}
            onClick={onClose}
            onMouseEnter={() => onPick(row.key)}
            onFocus={() => onPick(row.key)}
            aria-current={on ? 'true' : undefined}
            className={cn(
              'flex items-center gap-3 rounded-xl border px-2.5 py-2 transition-colors',
              on ? 'border-warm-200 bg-white shadow-[0_1px_2px_rgba(27,26,25,0.06)]' : 'border-transparent hover:bg-warm-100/70',
            )}
          >
            {row.icon ? (
              <span className={cn('inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] border border-warm-200 text-warm-800', on ? 'bg-warm-50' : 'bg-white')}>
                <row.icon className="h-[17px] w-[17px]" />
              </span>
            ) : (
              <SauceMark size={36} title={null} className="shrink-0" />
            )}
            <span className="min-w-0">
              <span className="flex items-center gap-1.5 text-[14px] font-semibold text-warm-950">
                {row.label}
                {row.free && <FreeChip />}
                {row.premium && <PremiumChip />}
              </span>
              <span className="block truncate text-[12.5px] text-warm-500">{row.sub}</span>
            </span>
          </Link>
        )
      })}
      <Link href={foot.href} onClick={onClose} className="mt-auto inline-flex items-center gap-1.5 px-3 pb-2 pt-3 text-[13px] font-semibold text-warm-950 hover:underline">
        {foot.label}
        <ArrowRight className="h-3.5 w-3.5" />
      </Link>
    </div>
  )
}

/** The menu's right side for a group: its name and pitch, its tools as icons and names, and a foot that says the pointed tool's line. */
function GroupTools({ group, note, onClose }: { group: ProductGroup; note: string; onClose: () => void }) {
  const [pointed, setPointed] = useState<NavItem | null>(null)
  return (
    <div className="flex h-full flex-col">
      <div className="px-6 pt-5">
        <div className="flex items-center gap-2 text-[16px] font-semibold tracking-tight text-warm-950">
          {group.label}
          {group.free && <FreeChip />}
        </div>
        <p className="mt-1 max-w-[540px] text-[13px] leading-relaxed text-warm-600">{group.pitch}</p>
      </div>
      <div className="grid grid-cols-2 gap-x-2 gap-y-0.5 px-4 pb-4 pt-3" onMouseLeave={() => setPointed(null)}>
        {group.items.map((item) => (
          <Link
            key={item.href + item.name}
            href={item.href}
            onClick={onClose}
            onMouseEnter={() => setPointed(item)}
            onFocus={() => setPointed(item)}
            onBlur={() => setPointed(null)}
            className="group flex h-9 min-w-0 items-center gap-2.5 rounded-lg px-2.5 transition-colors hover:bg-warm-50"
          >
            <item.icon className="h-4 w-4 shrink-0 text-warm-500 transition-colors group-hover:text-warm-950" />
            <span className="truncate text-[14px] font-medium text-warm-900">{item.name}</span>
            {item.badge && <NewChip>{item.badge}</NewChip>}
          </Link>
        ))}
      </div>
      <div className="mt-auto flex min-h-[48px] items-center border-t border-warm-100 bg-warm-50/60 px-6 py-2.5 text-[12.5px] text-warm-600" aria-live="polite">
        {pointed ? (
          <span className="min-w-0">
            <span className="font-semibold text-warm-950">{pointed.name}</span> · {pointed.desc}
          </span>
        ) : (
          <span>{note}</span>
        )}
      </div>
    </div>
  )
}

/** Products' right side for Sauce: what it is, a working example, a few more things to ask. Drawn only while the menu is open. */
function SauceView({ onClose }: { onClose: () => void }) {
  return (
    <div className="flex h-full flex-col px-6 pb-4 pt-5">
      <div className="flex items-center gap-2 text-[16px] font-semibold tracking-tight text-warm-950">
        Sauce
        <PremiumChip />
      </div>
      {/* The demo keeps one height while it plays (its last step is its tallest), so the menu never moves */}
      <div className="mt-3 grid grid-cols-[minmax(0,1fr)_200px] gap-5">
        <div className="pointer-events-none h-[326px] overflow-hidden rounded-xl border border-warm-200" aria-hidden="true">
          <SauceCardPreview task="swap" className="h-full" />
        </div>
        <div className="flex flex-col gap-2.5">
          <p className="text-[13px] leading-relaxed text-warm-600">Tell it what needs doing, the way you’d text a manager. It gets it ready, and you tap Confirm.</p>
          <span className="mt-2 text-[12.5px] text-warm-500">Also ask it</span>
          {sauceAsks.map((q) => (
            <span key={q} className="text-[13.5px] leading-snug text-warm-800">
              “{q}”
            </span>
          ))}
          <Link href={sauceItem.href} onClick={onClose} className="mt-auto inline-flex items-center gap-1.5 text-[13px] font-semibold text-warm-950 hover:underline">
            Meet Sauce
            <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
      </div>
    </div>
  )
}

const PRODUCT_RAIL: RailRow[] = [
  { key: SAUCE, label: sauceItem.name, sub: 'Ask for it in a sentence', href: sauceItem.href, premium: true },
  ...productGroups.map((g) => ({ key: g.key, label: g.label, sub: g.sub, href: g.href, free: g.free, icon: g.icon })),
]
const SOLUTION_RAIL: RailRow[] = solutionGroups.map((g) => ({ key: g.key, label: g.label, sub: g.sub, href: g.href, free: g.free, icon: g.icon }))
const PRODUCTS_NOTE = `Ordering from vendors is free · team tools from $39 per location · ${GUARANTEE_DAYS}-day money-back guarantee`
const SOLUTIONS_NOTE = 'Every business runs on the same app · ordering from vendors and selling to cafés are free'

const Header = () => {
  // The Docs run the full width of the screen, so the header's logo and links line up with them
  const fullWidth = (usePathname() || '').startsWith('/docs')
  const [open, setOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [productKey, setProductKey] = useState(SAUCE)
  const [solutionKey, setSolutionKey] = useState(solutionGroups[0].key)
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
    // Products opens on Sauce each time
    if (name === 'products' && activeDropdown !== 'products') setProductKey(SAUCE)
    setActiveDropdown(name)
  }
  const leave = () => {
    dropdownTimeout.current = setTimeout(() => setActiveDropdown(null), 150)
  }
  const close = () => setActiveDropdown(null)
  // Tabbing through: a menu opens as focus enters it and closes once focus has left it
  const blurOut = (e: React.FocusEvent<HTMLDivElement>) => {
    if (!e.currentTarget.contains(e.relatedTarget as Node | null)) leave()
  }

  const navLink = 'text-[14px] font-medium text-warm-600 hover:text-warm-950 px-3 py-2 rounded-lg transition-colors'
  // Menus hang from the header itself (the nearest positioned box), centred and never wider than
  // the viewport. They start right under the nav links; the top padding bridges the pointer.
  const panel = (name: string) =>
    cn(
      'absolute left-1/2 top-[50px] -translate-x-1/2 pt-4 transition-all duration-200',
      activeDropdown === name ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none invisible',
    )
  const box = 'grid grid-cols-[256px_minmax(0,1fr)] overflow-hidden rounded-2xl border border-warm-200 bg-white shadow-[0_24px_60px_-20px_rgba(27,26,25,0.25)]'
  const productGroup = productGroups.find((g) => g.key === productKey)
  const solutionGroup = solutionGroups.find((g) => g.key === solutionKey) ?? solutionGroups[0]

  const mobileHead = (label: string, free?: boolean) => (
    <div className="mb-1 flex items-center gap-2 text-[13px] font-medium text-warm-500">
      {label}
      {free && <FreeChip />}
    </div>
  )
  const mobileRow = (item: NavItem) => (
    <Link key={item.href + item.name} href={item.href} onClick={() => setOpen(false)} className="flex items-center gap-3 px-1 py-2.5 text-warm-800">
      <item.icon className="h-4 w-4 shrink-0 text-warm-500" />
      <span className="text-sm font-medium">{item.name}</span>
      {item.badge && <NewChip>{item.badge}</NewChip>}
    </Link>
  )

  return (
    <header className={cn('fixed top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b transition-colors duration-200', isScrolled ? 'border-warm-200' : 'border-transparent')}>
      <div className={cn('mx-auto px-4 md:px-6', fullWidth ? 'lg:px-8' : 'max-w-6xl')}>
        <div className="flex h-16 items-center">
          <Link href="/" className="mr-8 flex items-center text-warm-950" aria-label="Fork home">
            <Logo height={28} />
          </Link>

          {/* Desktop */}
          <div className="hidden flex-1 items-center justify-between md:flex">
            <nav className="flex items-center gap-1">
              {/* Products */}
              <div onMouseEnter={() => enter('products')} onMouseLeave={leave} onFocus={() => enter('products')} onBlur={blurOut}>
                <Link href="/products" className={cn(navLink, 'inline-flex items-center gap-1')}>
                  Products
                  <ChevronDown className={cn('h-3.5 w-3.5 transition-transform duration-200', activeDropdown === 'products' && 'rotate-180')} />
                </Link>
                <div className={panel('products')}>
                  <div className={cn(box, 'h-[402px] w-[min(920px,calc(100vw-2rem))]')}>
                    <MenuRail rows={PRODUCT_RAIL} active={productKey} onPick={setProductKey} onClose={close} foot={{ label: 'See the whole platform', href: '/products' }} />
                    <div className="min-w-0">
                      {productGroup ? <GroupTools key={productGroup.key} group={productGroup} note={PRODUCTS_NOTE} onClose={close} /> : activeDropdown === 'products' && <SauceView onClose={close} />}
                    </div>
                  </div>
                </div>
              </div>

              {/* Solutions */}
              <div onMouseEnter={() => enter('solutions')} onMouseLeave={leave} onFocus={() => enter('solutions')} onBlur={blurOut}>
                <Link href="/solutions" className={cn(navLink, 'inline-flex items-center gap-1')}>
                  Solutions
                  <ChevronDown className={cn('h-3.5 w-3.5 transition-transform duration-200', activeDropdown === 'solutions' && 'rotate-180')} />
                </Link>
                <div className={panel('solutions')}>
                  <div className={cn(box, 'h-[320px] w-[min(860px,calc(100vw-2rem))]')}>
                    <MenuRail rows={SOLUTION_RAIL} active={solutionKey} onPick={setSolutionKey} onClose={close} foot={{ label: 'All solutions', href: '/solutions' }} />
                    <div className="min-w-0">
                      <GroupTools key={solutionGroup.key} group={solutionGroup} note={SOLUTIONS_NOTE} onClose={close} />
                    </div>
                  </div>
                </div>
              </div>

              <Link href="/pricing" className={navLink}>
                Pricing
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
                    <div className="border-b border-warm-100 bg-warm-50 pb-2">
                      <Link href={sauceItem.href} onClick={() => setOpen(false)} className="flex items-center gap-3 px-4 pb-1 pt-4 text-warm-800">
                        <SauceMark size={28} title={null} className="shrink-0" />
                        <span className="min-w-0">
                          <span className="flex items-center gap-1.5 text-sm font-semibold">
                            {sauceItem.name}
                            <PremiumChip />
                          </span>
                          <span className="block text-xs text-warm-500">{sauceItem.desc}</span>
                        </span>
                      </Link>
                      {productGroups.map((group) => (
                        <div key={group.key} className="px-4 pb-1 pt-3">
                          {mobileHead(group.label, group.free)}
                          {group.items.map(mobileRow)}
                        </div>
                      ))}
                    </div>
                  )}

                  <button type="button" onClick={() => setMobileExpanded(mobileExpanded === 'solutions' ? null : 'solutions')} className="flex w-full items-center justify-between border-b border-warm-100 px-4 py-4 text-base font-medium text-warm-900">
                    Solutions
                    <ChevronDown className={cn('h-4 w-4 transition-transform', mobileExpanded === 'solutions' && 'rotate-180')} />
                  </button>
                  {mobileExpanded === 'solutions' && (
                    <div className="border-b border-warm-100 bg-warm-50 pb-2">
                      {solutionGroups.map((group) => (
                        <div key={group.key} className="px-4 pb-1 pt-3">
                          {mobileHead(group.label, group.free)}
                          {group.items.map(mobileRow)}
                        </div>
                      ))}
                    </div>
                  )}

                  {[
                    { href: '/pricing', label: 'Pricing' },
                    { href: '/about', label: 'About' },
                    { href: '/faq', label: 'FAQ' },
                    { href: '/docs', label: 'Docs' },
                    { href: DEMO_PATH, label: CTA_DEMO },
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
