import Link from 'next/link'
import { cn } from '@/lib/utils'
import { tierByKey, type TierKey } from '@/lib/catalog'

/** "Free" / "Essential and up" chip that links to pricing. */
export default function PlanBadge({ tier, className }: { tier: TierKey; className?: string }) {
  const t = tierByKey(tier)
  const label = tier === 'free' ? 'Free plan' : `${t.name} and up`
  return (
    <Link
      href="/pricing"
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-[12px] font-medium transition-colors',
        tier === 'free' ? 'border-ok-500/30 bg-ok-50 text-ok-700 hover:border-ok-500/60' : 'border-warm-200 bg-white text-warm-600 hover:border-warm-300 hover:text-warm-950',
        className,
      )}
    >
      <span className={cn('h-1.5 w-1.5 rounded-full', tier === 'free' ? 'bg-ok-500' : 'bg-warm-400')} />
      {label}
    </Link>
  )
}
