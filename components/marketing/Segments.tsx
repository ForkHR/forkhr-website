import Link from 'next/link'
import { SEGMENTS } from '@/lib/site'
import { SEGMENT_LINKS } from '@/lib/solutions'

/** "Built for teams in…" strip. Chips with a solution page link to it. Duplicated once so the marquee loops seamlessly. */
export default function Segments({ label = 'Built for hourly teams in' }: { label?: string }) {
  const items = [...SEGMENTS, ...SEGMENTS]
  const chip = 'whitespace-nowrap rounded-full border border-warm-200 bg-white px-3.5 py-1.5 text-[13px] font-medium text-warm-600'
  return (
    <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-8">
      <span className="shrink-0 text-[13px] font-medium text-warm-400">{label}</span>
      <div className="relative w-full overflow-hidden mask-[linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div className="marquee gap-3 pr-3">
          {items.map((s, i) => {
            const href = SEGMENT_LINKS[s]
            return href ? (
              <Link key={`${s}-${i}`} href={href} className={`${chip} transition-colors hover:border-warm-400 hover:text-warm-950`}>
                {s}
              </Link>
            ) : (
              <span key={`${s}-${i}`} className={chip}>
                {s}
              </span>
            )
          })}
        </div>
      </div>
    </div>
  )
}
