import { Check, Copy, Link2, Search, Wrench } from 'lucide-react'
import { cn } from '@/lib/utils'
import { money } from '@/components/previews/bits'
import { MILK, ProductArt, SELLER, SellerLogo, VerifiedTick } from '@/components/previews/storefrontBits'
import { BentoCard, BentoGrid, BentoHeading, Mini } from './Bento'

/*
 * "Also on the page" on /storefront: a bento (./Bento: the card, the floating pieces, the heading)
 * of what the public page does besides shelves and checkout, each card a small still of the real
 * thing over a dotted ground (Northside Roasters again, so it reads as the page the story just
 * walked through). Decorative: the card's title and line say what the still shows. The words on the stills are the app's: "Ordering for", "Your
 * price", "Create your buyer account", "Sign in for prices", "?cat=" and "?tab=services" links.
 */

const COVER = `linear-gradient(120deg, ${SELLER.brand} 0%, #7A4A2E 55%, #B7794A 100%)`
const SWATCHES = [SELLER.brand, '#1F3D2B', '#1D4ED8', '#9F1239', '#1B1A19']

const LookVisual = () => (
  <div className="flex w-full max-w-[540px] items-center gap-4">
    <Mini className="min-w-0 flex-1 overflow-hidden">
      <div className="relative h-[86px] overflow-hidden px-3.5 pt-3 text-white" style={{ background: COVER }}>
        <div className="text-[13px] font-bold leading-tight">The harvest blend is back</div>
        <div className="mt-0.5 text-[9.5px] text-white/75">Roasted Monday, on your doorstep Tuesday.</div>
        <span className="mt-2 inline-block rounded-full bg-white px-2.5 py-0.5 text-[9px] font-semibold" style={{ color: SELLER.brand }}>
          Shop coffee
        </span>
        <ProductArt kind="bag" accent="#E8B04B" className="absolute -bottom-2 right-3 h-[78px] w-[78px]" />
        <ProductArt kind="cups" accent="#E8B04B" className="absolute -bottom-1 right-[74px] h-[56px] w-[56px] opacity-90" />
      </div>
      <div className="flex items-end gap-2.5 px-3.5 pb-3">
        <SellerLogo size={34} className="-mt-4 shadow-sm ring-[3px] ring-white" />
        <div className="min-w-0 pb-0.5">
          <div className="flex items-center gap-1 text-[12px] font-bold">
            <span className="truncate">{SELLER.name}</span> <VerifiedTick size={11} />
          </div>
          <div className="truncate text-[9.5px] text-warm-500">Delivers Mon–Sat · order by 4 pm · $150 minimum</div>
        </div>
      </div>
    </Mini>
    <Mini className="hidden w-[148px] shrink-0 p-3 sm:block">
      <div className="text-[8.5px] font-bold uppercase tracking-wider text-warm-400">Brand color</div>
      <div className="mt-2 flex gap-1.5">
        {SWATCHES.map((c, i) => (
          <span key={c} className={cn('h-[18px] w-[18px] rounded-full', i === 0 && 'ring-2 ring-white outline-2 outline-warm-950')} style={{ background: c }} />
        ))}
      </div>
      <div className="mt-3 text-[8.5px] font-bold uppercase tracking-wider text-warm-400">Cover photo</div>
      <div className="mt-1.5 flex items-center gap-2">
        <span className="h-7 w-12 rounded-md" style={{ background: COVER }} />
        <span className="text-[10px] font-semibold text-warm-700">Replace</span>
      </div>
      <div className="mt-3 text-[8.5px] font-bold uppercase tracking-wider text-warm-400">Banner button</div>
      <div className="mt-1.5 truncate rounded-md border border-warm-200 px-2 py-1 text-[10px]">Shop coffee</div>
    </Mini>
  </div>
)

const WebVisual = () => (
  <div className="w-full max-w-[240px] space-y-2">
    <div className="ml-auto w-fit rounded-2xl rounded-br-md bg-forest-600 px-3 py-1.5 text-[10.5px] font-medium text-white">Order from us here</div>
    <Mini className="overflow-hidden">
      <div className="relative h-[58px] overflow-hidden" style={{ background: COVER }}>
        <ProductArt kind="bag" accent="#E8B04B" className="absolute -bottom-1.5 right-3 h-[56px] w-[56px]" />
      </div>
      <div className="px-3 py-2.5">
        <div className="text-[8.5px] uppercase tracking-wider text-warm-400">app.forkhr.com</div>
        <div className="mt-0.5 text-[11.5px] font-semibold">{SELLER.name}</div>
        <div className="mt-0.5 line-clamp-2 text-[9.5px] leading-snug text-warm-500">Coffee, milk, cups and syrups for cafés across Brooklyn, Monday to Saturday.</div>
      </div>
    </Mini>
  </div>
)

const CustomerVisual = () => (
  <Mini className="w-full max-w-[240px] overflow-hidden">
    <div className="flex items-center gap-2 border-b border-warm-100 px-3 py-2">
      <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-warm-950 text-[8.5px] font-bold text-white">HB</span>
      <div className="leading-tight">
        <div className="text-[8px] font-semibold uppercase tracking-wider text-warm-400">Ordering for</div>
        <div className="text-[11px] font-semibold">Harbor Bistro</div>
      </div>
    </div>
    <div className="flex items-center gap-2.5 px-3 py-2.5">
      <span className="relative h-12 w-12 shrink-0 rounded-lg bg-warm-100">
        <ProductArt kind="carton" accent={MILK[0].accent} className="absolute inset-[12%]" />
      </span>
      <div className="min-w-0">
        <div className="truncate text-[11px] font-semibold">{MILK[0].name}</div>
        <div className="mt-0.5 flex items-center gap-1.5">
          <span className="text-[13px] font-bold tabular-nums">{money(44.2)}</span>
          <span className="rounded-full bg-forest-50 px-1.5 py-px text-[8.5px] font-semibold text-forest-700">Your price</span>
        </div>
        <div className="text-[9px] text-warm-400">case · 12 × 32 oz</div>
      </div>
    </div>
    <div className="flex items-center gap-1.5 border-t border-warm-100 px-3 py-2">
      <span className="rounded-full bg-warm-100 px-2 py-0.5 text-[9px] font-semibold text-warm-600">Net 15</span>
      <span className="rounded-full bg-warm-100 px-2 py-0.5 text-[9px] font-semibold text-warm-600">Thu 9</span>
      <span className="ml-auto rounded-full px-2.5 py-1 text-[9px] font-semibold text-white" style={{ background: SELLER.brand }}>
        Place order
      </span>
    </div>
  </Mini>
)

const SearchVisual = () => (
  <div className="w-full max-w-[240px] space-y-2">
    <Mini className="flex items-center gap-2 rounded-full px-3 py-2">
      <Search className="h-3.5 w-3.5 text-warm-400" />
      <span className="text-[11.5px] font-medium">oat</span>
      <span className="-ml-1.5 h-3.5 w-px bg-warm-950 motion-safe:animate-pulse" />
    </Mini>
    <Mini className="overflow-hidden">
      {[MILK[0], { ...MILK[3], name: 'Oat milk, original', price: 42, accent: '#D9C08F' }].map((item) => (
        <div key={item.name} className="flex items-center gap-2.5 border-b border-warm-100 px-3 py-2">
          <span className="relative h-8 w-8 shrink-0 rounded-md bg-warm-100">
            <ProductArt kind="carton" accent={item.accent} className="absolute inset-[10%]" />
          </span>
          <span className="min-w-0 flex-1 truncate text-[10.5px] font-medium">{item.name}</span>
          <span className="text-[10.5px] font-semibold tabular-nums">{money(item.price)}</span>
        </div>
      ))}
      <div className="px-3 py-1.5 text-[9px] text-warm-400">2 results · Milk & alt milk</div>
    </Mini>
  </div>
)

const JoinVisual = () => (
  <Mini className="w-full max-w-[220px] p-3.5">
    <div className="flex items-center justify-between">
      <span className="text-[9px] font-semibold text-warm-400">Step 2 of 2</span>
      <span className="flex gap-1">
        <span className="h-1 w-5 rounded-full bg-warm-950" />
        <span className="h-1 w-5 rounded-full bg-warm-950" />
      </span>
    </div>
    <div className="mt-1.5 text-[12.5px] font-bold">Create your buyer account</div>
    <div className="mt-2.5 space-y-1.5">
      <div className="rounded-md border border-warm-200 px-2 py-1 text-[10px]">Harbor Bistro</div>
      <div className="rounded-md border border-warm-200 px-2 py-1 text-[10px] tracking-[0.2em] text-warm-500">••••••••••</div>
    </div>
    <div className="mt-2.5 rounded-lg bg-warm-950 py-1.5 text-center text-[10px] font-semibold text-white">Create account</div>
    <div className="mt-2 flex items-center justify-center gap-1 text-[9px] font-medium text-ok-700">
      <Check className="h-3 w-3" strokeWidth={3} /> Connected to {SELLER.name}
    </div>
  </Mini>
)

const ServiceVisual = () => (
  <Mini className="w-full max-w-[240px] p-3.5">
    <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-warm-100 text-warm-600">
      <Wrench className="h-4 w-4" />
    </span>
    <div className="mt-2.5 text-[12px] font-semibold">Espresso machine service</div>
    <div className="mt-0.5 text-[9.5px] leading-snug text-warm-500">Descaling, gaskets and a pressure check, with a written report.</div>
    <div className="mt-3 flex items-center justify-between">
      <span className="text-[10px] text-warm-500">
        <span className="text-[12px] font-bold text-warm-950">{money(125)}</span> / visit
      </span>
      <span className="rounded-full px-2.5 py-0.5 text-[9.5px] font-semibold ring-1 ring-warm-300">Request</span>
    </div>
  </Mini>
)

const LINKS: { path: string; label: string; copied?: boolean }[] = [
  { path: '', label: 'Page' },
  { path: '?cat=coffee', label: 'Category' },
  { path: '?tab=services', label: 'Services' },
  { path: '/p/68f2c1a9', label: 'Product', copied: true },
]

const LinksVisual = () => (
  <div className="w-full max-w-[260px] space-y-1.5">
    {LINKS.map((l) => (
      <Mini key={l.label} className={cn('flex items-center gap-2 px-2.5 py-1.5', l.copied && 'ring-forest-200')}>
        <Link2 className="h-3 w-3 shrink-0 text-warm-400" />
        <span className="min-w-0 flex-1 truncate text-[9.5px] text-warm-500">
          /v/{SELLER.slug}
          <span className="font-semibold text-warm-950">{l.path}</span>
        </span>
        {l.copied ? (
          <span className="shrink-0 rounded-full bg-forest-50 px-1.5 py-px text-[8.5px] font-semibold text-forest-700">Copied</span>
        ) : (
          <Copy className="h-3 w-3 shrink-0 text-warm-300" />
        )}
      </Mini>
    ))}
  </div>
)

const Switch = ({ on }: { on: boolean }) => (
  <span className={cn('relative inline-flex h-3.5 w-6 shrink-0 rounded-full', on ? 'bg-ok-500' : 'bg-warm-300')}>
    <span className={cn('absolute top-0.5 h-2.5 w-2.5 rounded-full bg-white', on ? 'right-0.5' : 'left-0.5')} />
  </span>
)

const PricesVisual = () => (
  <div className="grid w-full max-w-[280px] grid-cols-2 gap-2.5">
    {[true, false].map((on) => (
      <Mini key={String(on)} className="p-2.5">
        <div className="flex items-center justify-between gap-1.5">
          <span className="text-[9px] font-semibold text-warm-600">Show prices</span>
          <Switch on={on} />
        </div>
        <div className="relative mt-2 h-[84px] rounded-lg bg-warm-100">
          <ProductArt kind="bag" accent="#C2410C" className="absolute inset-y-[10%] left-1/2 aspect-square -translate-x-1/2" />
        </div>
        <div className="mt-1.5 truncate text-[10px]">
          {on ? (
            <>
              <span className="font-bold tabular-nums">{money(62)}</span> <span className="text-warm-400">/ bag</span>
            </>
          ) : (
            <span className="text-warm-500">Sign in for prices</span>
          )}
        </div>
        <div className="truncate text-[9.5px] font-medium">Espresso blend</div>
      </Mini>
    ))}
  </div>
)

export default function StorefrontFeatures({ id, className }: { id?: string; className?: string }) {
  return (
    <section id={id} className={cn('scroll-mt-24 border-b border-warm-100', className)}>
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <BentoHeading eyebrow="Also on the page" title="Built like the stores buyers already shop" lede="What buyers expect from a good online store, made from the items, prices and terms you already keep in Fork." />

        <BentoGrid>
          <BentoCard className="sm:col-span-2" title="Your look" desc="Logo, brand color and a cover photo, with your headline and a button over it." visual={<LookVisual />} />
          <BentoCard title="Found on the web" desc="Link previews with your cover, on search engines and in the Fork supplier directory." visual={<WebVisual />} />
          <BentoCard title="Customers on Fork" desc="Signed in, they see their own prices and order on their terms in a few clicks." visual={<CustomerVisual />} />
          <BentoCard title="One search, every item" desc="Across every category at once. View all opens a shelf as a grid." visual={<SearchVisual />} />
          <BentoCard title="Become a customer" desc="Two short screens make a free buyer account, connected to you." visual={<JoinVisual />} />
          <BentoCard title="Services too" desc="Repairs or consultations as cards. Customers on Fork press Request." visual={<ServiceVisual />} />
          <BentoCard title="A link for everything" desc="The whole page, one category, the services or a single product." visual={<LinksVisual />} />
          <BentoCard className="sm:col-span-2 lg:col-span-1" title="Prices on or off" desc="Off, visitors sign in to see what they would pay." visual={<PricesVisual />} />
        </BentoGrid>
      </div>
    </section>
  )
}
