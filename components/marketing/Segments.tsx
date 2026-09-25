import { SEGMENTS } from '@/lib/site'

/** "Built for teams in…" strip. Duplicated once so the marquee loops seamlessly. */
export default function Segments({ label = 'Built for hourly teams in' }: { label?: string }) {
  const items = [...SEGMENTS, ...SEGMENTS]
  return (
    <div className="flex flex-col items-center gap-3 sm:flex-row sm:gap-8">
      <span className="shrink-0 text-[13px] font-medium text-warm-400">{label}</span>
      <div className="relative w-full overflow-hidden mask-[linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
        <div className="marquee gap-3 pr-3">
          {items.map((s, i) => (
            <span key={`${s}-${i}`} className="whitespace-nowrap rounded-full border border-warm-200 bg-white px-3.5 py-1.5 text-[13px] font-medium text-warm-600">
              {s}
            </span>
          ))}
        </div>
      </div>
    </div>
  )
}
