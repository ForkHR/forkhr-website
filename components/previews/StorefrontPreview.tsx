'use client'

import { ChevronRight, Heart, Info, Search, ShoppingBag, Store, Wrench } from 'lucide-react'
import { cn } from '@/lib/utils'
import { LogoMark } from '@/components/navigation/Logo'
import { money } from './bits'
import { MILK, ProductArt, QtyControl, SELLER, SellerLogo, VerifiedTick, type ArtKind } from './storefrontBits'
import { useInView, useSequence } from './useSequence'

// A seller's public page, app.forkhr.com/v/<slug>, as a visitor without an account sees it: the
// top bar (Fork, the search, Sign in, the cart), the seller and its terms down the side with the
// categories under "Browse", the cover with its headline, the category tiles, then one shelf of
// cards per category. Picks fill the cart bar at the bottom ("View cart · $X before tax · $Y to
// the minimum"), which replaces the "Order from … on Fork" banner, until the minimum is met and
// the visitor presses "Checkout as guest".
const TILES: { label: string; count: number; art: ArtKind | 'service'; accent: string }[] = [
  { label: 'Coffee', count: 8, art: 'bag', accent: '#C2410C' },
  { label: 'Milk & alt milk', count: 6, art: 'carton', accent: '#C9A66B' },
  { label: 'Cups & lids', count: 9, art: 'cups', accent: '#B45309' },
  { label: 'Syrups', count: 5, art: 'jug', accent: '#A16207' },
  { label: 'Services', count: 2, art: 'service', accent: '#77726C' },
]

export default function StorefrontPreview({ className }: { className?: string }) {
  const { ref, inView } = useInView<HTMLDivElement>()
  // 1 shelf in · 2–3 oat milk ×2 · 4 whole milk · 5 half & half (minimum met) · 6 Checkout as guest
  const step = useSequence(6, { inView, ms: [500, 1100, 800, 900, 900, 1000], holdMs: 3200 })
  const qty: Record<string, number> = { oat: step >= 3 ? 2 : step >= 2 ? 1 : 0, whole: step >= 4 ? 1 : 0, half: step >= 5 ? 1 : 0 }
  const count = Object.values(qty).reduce((n, q) => n + q, 0)
  const total = MILK.reduce((s, item) => s + item.price * (qty[item.id] || 0), 0)
  const short = Math.max(0, SELLER.minimum - total)

  return (
    <div ref={ref} className={cn('relative text-warm-950', className)}>
      {/* Top bar */}
      <div className="flex items-center gap-2 border-b border-warm-100 px-3 py-2">
        <LogoMark size={15} className="shrink-0 text-warm-950" />
        <div className="flex min-w-0 flex-1 items-center gap-1.5 rounded-full bg-warm-100 px-2.5 py-1 text-[10px] text-warm-400">
          <Search className="h-3 w-3 shrink-0" />
          <span className="truncate">Search {SELLER.name}</span>
        </div>
        <span className="hidden rounded-full bg-warm-100 px-2 py-0.5 text-[9.5px] font-semibold @sm:inline">Sign in</span>
        <span className="relative inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full ring-1 ring-warm-200">
          <ShoppingBag className="h-3 w-3" />
          <span
            data-on={count > 0}
            className="pv-pop absolute -right-1 -top-1 inline-flex h-3.5 min-w-3.5 items-center justify-center rounded-full px-0.5 text-[8px] font-bold tabular-nums text-white"
            style={{ background: SELLER.brand }}
          >
            {count || ''}
          </span>
        </span>
      </div>

      <div className="grid @lg:grid-cols-[132px_minmax(0,1fr)]">
        {/* The seller, its terms, the pages and the categories */}
        <aside className="hidden border-r border-warm-100 px-3 pb-3 pt-3.5 @lg:block">
          <div className="flex flex-col items-center text-center">
            <SellerLogo size={38} />
            <div className="mt-1.5 flex items-center gap-1 text-[11px] font-bold leading-tight">
              {SELLER.name} <VerifiedTick size={10} />
            </div>
            <div className="mt-1 space-y-0.5 text-[8.5px] leading-snug text-warm-500">
              <div>Delivers Mon–Sat, order by 4 pm</div>
              <div>18 businesses order on Fork</div>
            </div>
            <span className="mt-2 rounded-full bg-warm-950 px-2.5 py-0.5 text-[8.5px] font-semibold text-white">+ Connect</span>
          </div>
          <div className="mt-2.5 space-y-0.5 border-t border-warm-100 pt-2.5 text-[9.5px] font-semibold">
            {[
              { label: 'Shop', icon: <ShoppingBag className="h-2.5 w-2.5" />, on: true },
              { label: 'Services', icon: <Wrench className="h-2.5 w-2.5" /> },
              { label: 'About', icon: <Info className="h-2.5 w-2.5" /> },
            ].map((p) => (
              <div key={p.label} className={cn('flex items-center gap-1.5 rounded-full px-2 py-[3px]', p.on ? 'bg-warm-950 text-white' : 'bg-warm-100 text-warm-700')}>
                {p.icon}
                {p.label}
              </div>
            ))}
          </div>
          <div className="mt-2.5 border-t border-warm-100 pt-2">
            <div className="text-[10px] font-bold">Browse</div>
            {TILES.filter((t) => t.art !== 'service').map((t) => (
              <div key={t.label} className="flex items-center justify-between py-[3px] text-[9.5px] text-warm-700">
                <span className="truncate">{t.label}</span>
                <span className="text-warm-400">{t.count}</span>
              </div>
            ))}
          </div>
        </aside>

        <div className="min-w-0 px-3 pb-14 pt-3">
          {/* Without the side column the seller heads the page, as on a phone */}
          <div className="mb-2.5 flex items-center gap-2 @lg:hidden">
            <SellerLogo size={30} />
            <div className="min-w-0">
              <div className="flex items-center gap-1 text-[12px] font-bold leading-tight">
                <span className="truncate">{SELLER.name}</span> <VerifiedTick size={10} />
              </div>
              <div className="truncate text-[9.5px] text-warm-500">Delivers Mon–Sat · order by 4 pm · $150 minimum</div>
            </div>
          </div>

          {/* The cover, with the seller's headline and button over it */}
          <div className="relative flex h-[66px] items-end overflow-hidden rounded-lg px-3 pb-2.5 text-white" style={{ background: `linear-gradient(120deg, ${SELLER.brand} 0%, #7A4A2E 55%, #B7794A 100%)` }}>
            <ProductArt kind="bag" accent="#E8B04B" className="absolute -bottom-2 right-3 h-[74px] w-[74px] opacity-95" />
            <ProductArt kind="cups" accent="#E8B04B" className="absolute -bottom-1 right-16 hidden h-[54px] w-[54px] opacity-90 @sm:block" />
            <div className="relative">
              <div className="text-[12px] font-bold leading-tight">The harvest blend is back</div>
              <div className="mt-0.5 text-[9px] text-white/75">Roasted Monday, on your doorstep Tuesday.</div>
            </div>
          </div>

          {/* Category tiles */}
          <div className="mt-2.5 flex gap-2 overflow-hidden">
            {TILES.map((t) => (
              <div key={t.label} className="w-[50px] shrink-0 text-center">
                <div className="flex h-[42px] items-center justify-center rounded-lg bg-warm-100">
                  {t.art === 'service' ? <Wrench className="h-4 w-4 text-warm-500" /> : <ProductArt kind={t.art} accent={t.accent} className="h-9 w-9" />}
                </div>
                <div className="mt-1 truncate text-[8.5px] font-semibold">{t.label}</div>
                <div className="text-[7.5px] text-warm-400">{t.count} items</div>
              </div>
            ))}
          </div>

          {/* One shelf: the cards scroll sideways, View all opens the category as a grid */}
          <div className="mt-3 flex items-center justify-between">
            <span className="text-[12px] font-bold">Milk & alt milk</span>
            <span className="flex items-center text-[9.5px] font-semibold text-warm-600">
              View all <ChevronRight className="h-3 w-3" />
            </span>
          </div>
          <div className="mt-1.5 flex gap-2 overflow-hidden">
            {MILK.map((item, i) => (
              <div key={item.id} data-on={step >= 1} className="pv-item w-[104px] shrink-0" style={{ transitionDelay: `${i * 70}ms` }}>
                <div className="relative aspect-square rounded-lg bg-warm-100">
                  <ProductArt kind={item.art} accent={item.accent} className="absolute inset-[13%]" />
                  <span className="absolute right-1.5 top-1.5 inline-flex h-4 w-4 items-center justify-center rounded-full bg-white shadow-sm">
                    <Heart className="h-2.5 w-2.5" />
                  </span>
                  <QtyControl qty={qty[item.id] || 0} className="absolute bottom-1.5 right-1.5" />
                </div>
                <div className="mt-1.5 text-[11px] leading-tight">
                  <span className="font-bold tabular-nums">{money(item.price)}</span> <span className="text-[9px] text-warm-400">/ {item.unit}</span>
                </div>
                <div className="text-[8.5px] tabular-nums text-warm-400">{item.per}</div>
                <div className="truncate text-[10px] font-semibold leading-snug">{item.name}</div>
                <div className="truncate text-[8.5px] text-warm-400">{item.pack}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom: the banner for a visitor with nothing picked, then the cart bar */}
      <div data-on={count === 0} className="pv-item absolute inset-x-2 bottom-2 flex items-center gap-2 rounded-xl border border-warm-200 bg-white px-3 py-2 shadow-[0_10px_30px_-14px_rgba(27,26,25,0.35)]">
        <Store className="h-3.5 w-3.5 shrink-0 text-warm-400" />
        <span className="min-w-0 flex-1 truncate text-[9.5px] text-warm-600">
          <span className="font-semibold text-warm-950">Order from {SELLER.name} on Fork.</span> Free for buyers.
        </span>
        <span className="shrink-0 rounded-full px-2 py-1 text-[9px] font-semibold text-white" style={{ background: SELLER.brand }}>
          Become a customer
        </span>
      </div>
      <div data-on={count > 0} className="pv-item absolute inset-x-2 bottom-2 flex items-center gap-2 rounded-xl border border-warm-200 bg-white px-2.5 py-1.5 shadow-[0_10px_30px_-14px_rgba(27,26,25,0.35)]">
        <span className="inline-flex h-5 min-w-5 shrink-0 items-center justify-center rounded-full bg-warm-950 px-1 text-[9.5px] font-bold tabular-nums text-white">{count}</span>
        <div className="min-w-0 flex-1 leading-tight">
          <div className="text-[10.5px] font-semibold">View cart</div>
          <div className="truncate text-[9px] tabular-nums text-warm-500">
            {money(total)} before tax{short > 0 ? ` · ${money(short)} to the minimum` : ''}
          </div>
        </div>
        <span
          className={cn('shrink-0 rounded-full px-2.5 py-1.5 text-[9.5px] font-semibold text-white transition-transform duration-200', step >= 6 && 'scale-95 opacity-90')}
          style={{ background: SELLER.brand }}
        >
          Checkout as guest
        </span>
      </div>
    </div>
  )
}
