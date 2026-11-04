'use client'

import { ChevronLeft, Heart, Link2 } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Toast, money } from './bits'
import { MILK, ProductArt, QtyControl, SELLER } from './storefrontBits'
import { useInView, useSequence } from './useSequence'

// A product's own page on the storefront (app.forkhr.com/v/<slug>/p/<id>), opened on a phone from
// a card or a shared link: the gallery, the price per case and per piece, the pack line, the
// counter, then what the seller filled on the product's "Product page" section (brand, origin,
// storage, ingredients and allergens, a Nutrition Facts panel) and similar items under it.
// "Copy link" answers "Link copied", as the app's button does.
const OAT = MILK[0]
const DETAILS = [
  ['Brand', 'Meadow Oat'],
  ['Origin', 'Vermont, USA'],
  ['Storage', 'Cool and dry; refrigerate after opening'],
  ['Item number', 'NR-204'],
]
const FACTS = [
  ['Total Fat 7g', '9%'],
  ['Sodium 100mg', '4%'],
  ['Total Carbohydrate 16g', '6%'],
  ['Protein 3g', ''],
]

export default function ProductPagePreview({ className }: { className?: string }) {
  const { ref, inView } = useInView<HTMLDivElement>()
  // 1 second picture · 2–3 add two · 4 scroll to the details · 5 copy the link
  const step = useSequence(5, { inView, ms: [1000, 900, 700, 1100, 1100], holdMs: 3000 })
  const qty = step >= 3 ? 2 : step >= 2 ? 1 : 0

  return (
    <div ref={ref} className={cn('relative h-full overflow-hidden text-warm-950', className)}>
      <div className="transition-transform duration-700 ease-out" style={{ transform: step >= 4 ? 'translateY(-268px)' : 'none' }}>
        <div className="flex items-center justify-between px-3 pb-2 pt-1">
          <span className="flex items-center gap-0.5 text-[11px] font-semibold text-warm-600">
            <ChevronLeft className="h-3.5 w-3.5" /> {SELLER.name}
          </span>
          <span className={cn('pv-swap inline-flex h-6 w-6 items-center justify-center rounded-full ring-1', step >= 5 ? 'bg-warm-950 text-white ring-warm-950' : 'ring-warm-200')}>
            <Link2 className="h-3 w-3" />
          </span>
        </div>

        {/* Gallery: the thumbnail and the gallery pictures, a dot each */}
        <div className="relative mx-3 h-[180px] overflow-hidden rounded-2xl bg-warm-100">
          <ProductArt kind="carton" accent={OAT.accent} className={cn('absolute inset-[10%] transition-opacity duration-500', step >= 1 ? 'opacity-0' : 'opacity-100')} />
          <ProductArt kind="box" className={cn('absolute inset-[10%] transition-opacity duration-500', step >= 1 ? 'opacity-100' : 'opacity-0')} />
          <span className="absolute right-2 top-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-white shadow-sm">
            <Heart className="h-3 w-3" />
          </span>
          <div className="absolute inset-x-0 bottom-2 flex justify-center gap-1">
            {[0, 1, 2].map((i) => (
              <span key={i} className={cn('pv-swap h-1.5 rounded-full', (step >= 1 ? 1 : 0) === i ? 'w-3 bg-warm-950' : 'w-1.5 bg-warm-300')} />
            ))}
          </div>
        </div>

        <div className="px-3 pt-3">
          <div className="text-[17px] leading-tight">
            <span className="font-bold tabular-nums">{money(OAT.price)}</span> <span className="text-[11px] text-warm-400">/ {OAT.unit}</span>
          </div>
          <div className="text-[10.5px] tabular-nums text-warm-400">{OAT.per}</div>
          <div className="mt-1 text-[15px] font-semibold leading-snug">{OAT.name}</div>
          <div className="text-[10.5px] text-warm-500">{OAT.pack}</div>

          <div className="mt-3 flex items-center gap-2.5">
            <QtyControl qty={qty} size="md" />
            <span className="text-[11px] tabular-nums text-warm-500">{qty ? `In your cart · ${money(OAT.price * qty)}` : 'Add to cart'}</span>
          </div>

          <div className="mt-4 text-[12px] font-bold">Details</div>
          <div className="mt-1">
            {DETAILS.map(([label, value]) => (
              <div key={label} className="border-b border-warm-100 py-1.5">
                <div className="text-[9.5px] text-warm-400">{label}</div>
                <div className="text-[11px] font-medium">{value}</div>
              </div>
            ))}
          </div>

          <div className="mt-3 text-[12px] font-bold">Ingredients</div>
          <p className="mt-0.5 text-[10.5px] leading-snug text-warm-600">Oat base (water, oats), sunflower oil, sea salt, calcium carbonate.</p>
          <p className="mt-1 text-[10.5px] leading-snug text-warm-600">
            <span className="font-semibold text-warm-950">Allergens:</span> made where tree nuts are handled.
          </p>

          {/* The label panel, drawn the way packaging prints it */}
          <div className="mt-3 border-2 border-warm-950 px-2 py-1.5">
            <div className="text-[15px] font-black leading-none tracking-tight">Nutrition Facts</div>
            <div className="mt-1 border-b border-warm-950 pb-1 text-[9.5px]">12 servings per container</div>
            <div className="flex justify-between border-b-[5px] border-warm-950 py-0.5 text-[10px] font-bold">
              <span>Serving size</span>
              <span>1 cup (240mL)</span>
            </div>
            <div className="flex items-end justify-between border-b-[3px] border-warm-950 py-0.5">
              <span className="text-[12px] font-black">Calories</span>
              <span className="text-[17px] font-black leading-none">140</span>
            </div>
            {FACTS.map(([fact, dv]) => (
              <div key={fact} className="flex justify-between border-b border-warm-300 py-[3px] text-[9.5px] last:border-b-0">
                <span className="font-semibold">{fact}</span>
                <span className="font-bold">{dv}</span>
              </div>
            ))}
          </div>

          <div className="mt-4 text-[12px] font-bold">Similar items</div>
          <div className="mt-1.5 flex gap-2 pb-6">
            {MILK.slice(2).map((item) => (
              <div key={item.id} className="w-[96px] shrink-0">
                <div className="relative aspect-square rounded-lg bg-warm-100">
                  <ProductArt kind={item.art} accent={item.accent} className="absolute inset-[14%]" />
                </div>
                <div className="mt-1 text-[10px] font-bold tabular-nums">{money(item.price)}</div>
                <div className="truncate text-[9.5px]">{item.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Toast on={step >= 5}>Link copied</Toast>
    </div>
  )
}
