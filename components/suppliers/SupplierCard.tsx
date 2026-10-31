import Link from 'next/link'
import { Package, Truck } from 'lucide-react'
import { itemsLabel, placeOf, supplierPath, type Supplier } from '@/lib/suppliers'
import { CategoryPills, SupplierCover, SupplierLogo } from './SupplierVisuals'

/** One supplier on the directory grid: cover, logo, name, place, categories, items and delivery. */
export default function SupplierCard({ supplier }: { supplier: Supplier }) {
  const place = placeOf(supplier)
  return (
    <Link href={supplierPath(supplier.slug)} className="surface surface-hover group flex min-w-0 flex-1 flex-col overflow-hidden">
      <SupplierCover supplier={supplier} className="aspect-[16/9] w-full" />
      <div className="flex flex-1 flex-col px-4 pb-4">
        <SupplierLogo supplier={supplier} size={52} className="-mt-6 mb-3 rounded-xl border-[3px] border-white shadow-sm" />
        <h3 className="text-[17px] font-semibold leading-snug tracking-tight text-warm-950 group-hover:underline">{supplier.name}</h3>
        {place && <p className="mt-0.5 text-[13px] text-warm-500">{place}</p>}
        <CategoryPills categories={supplier.categories} max={3} className="mt-3" />
        <div className="mt-auto flex flex-wrap items-center gap-x-3 gap-y-1 pt-4 text-[12.5px] text-warm-500">
          <span className="inline-flex items-center gap-1.5">
            <Package className="h-3.5 w-3.5 text-warm-400" />
            {itemsLabel(supplier.productCount)}
          </span>
          {supplier.delivery && (
            <span className="inline-flex min-w-0 max-w-full items-center gap-1.5">
              <Truck className="h-3.5 w-3.5 shrink-0 text-warm-400" />
              <span className="truncate">{supplier.delivery}</span>
            </span>
          )}
        </div>
      </div>
    </Link>
  )
}
