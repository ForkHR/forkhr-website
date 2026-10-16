import type { ReactNode } from 'react'
import Link from 'next/link'
import { ArrowRight, Check } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Phone, Pill, Window, type PillTone } from '@/components/previews/bits'
import { LogoMark } from '@/components/navigation/Logo'
import type { TierKey } from '@/lib/catalog'
import PlanBadge from './PlanBadge'

/**
 * A stop with a live demo, or a moment: one line of activity at that time. `day` names the
 * day when a story runs over several ("Mon", "Day 30"); it shows under the time.
 */
export type DayStop = { time: string; day?: string; /** An anchor, e.g. "routes" for /sales#routes. */ id?: string } & (
  | {
      kind: 'feature'
      eyebrow: string
      plan?: TierKey
      title: string
      lede: string
      bullets?: string[]
      preview: ReactNode
      previewTitle: string
      frame?: 'window' | 'phone'
      href?: string
      hrefLabel?: string
    }
  | { kind: 'moment'; app: string; where?: string; text: ReactNode; tag?: string; tone?: PillTone }
)

// The rail only hints at time passing: dawn to night for one day, blue to warm for weeks.
const RAILS = {
  day: 'linear-gradient(to bottom, #F2C48D 0%, #93C5FD 40%, #A78BFA 78%, #1B1A19 100%)',
  weeks: 'linear-gradient(to bottom, #93C5FD 0%, #5EEAD4 55%, #FDBA74 100%)',
}

const Clock = ({ time, day, strong, inline }: { time: string; day?: string; strong?: boolean; inline?: boolean }) => {
  const [clock, ampm] = time.split(' ')
  return (
    <span className={cn('whitespace-nowrap tabular-nums', inline ? 'inline' : 'inline-flex flex-col', !inline && 'items-end')}>
      <span className={cn(strong ? 'text-[15px] font-semibold text-warm-950' : 'text-[13px] font-medium text-warm-500')}>
        {inline && day && <span className="mr-1">{day}</span>}
        {clock}
        {ampm && <span className={cn('ml-1 font-medium', strong ? 'text-[11px] text-warm-500' : 'text-[10.5px] text-warm-400')}>{ampm}</span>}
      </span>
      {!inline && day && <span className="text-[10.5px] font-semibold uppercase tracking-wider text-warm-400">{day}</span>}
    </span>
  )
}

/**
 * A story told as a timeline: one day at a café on the home page, or a new hire's first weeks.
 * Times sit in a gutter on the left like a calendar's day view; each stop is a real screen.
 */
export default function DayTimeline({
  stops,
  rail = 'day',
  surface = 'white',
}: {
  stops: DayStop[]
  rail?: keyof typeof RAILS
  /** The section's background, so a moment's dot can cut the rail cleanly. */
  surface?: 'white' | 'paper'
}) {
  return (
    <ol className="relative">
      <span aria-hidden="true" className="absolute bottom-6 left-[5px] top-2 w-0.5 rounded-full opacity-70 md:left-[103px]" style={{ background: RAILS[rail] }} />
      {stops.map((s) =>
        s.kind === 'feature' ? (
          <li key={`${s.day ?? ''} ${s.time}`} id={s.id} className="relative scroll-mt-24 pb-12 pl-9 md:grid md:grid-cols-[104px_1fr] md:pb-24 md:pl-0">
            <div className="hidden pr-7 pt-0.5 text-right md:block">
              <Clock time={s.time} day={s.day} strong />
            </div>
            <span aria-hidden="true" className="absolute left-0 top-[5px] h-3 w-3 rounded-full bg-white ring-[3px] ring-warm-950 md:left-[98px]" />
            <div className="grid items-start gap-10 md:pl-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-14">
              <div>
                <div className="mb-3 md:hidden">
                  <Clock time={s.time} day={s.day} strong inline />
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <span className="eyebrow">{s.eyebrow}</span>
                  {s.plan && <PlanBadge tier={s.plan} />}
                </div>
                <h3 className="mt-4 text-2xl font-semibold tracking-tight text-warm-950 md:text-[2rem] md:leading-[1.15]">{s.title}</h3>
                <p className="mt-4 text-[17px] leading-relaxed text-warm-600">{s.lede}</p>
                {s.bullets && s.bullets.length > 0 && (
                  <ul className="mt-6 hidden space-y-2.5 sm:block">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex items-start gap-2.5">
                        <span className="mt-0.5 inline-flex h-4.5 w-4.5 shrink-0 items-center justify-center rounded-full bg-forest-50 text-forest-600">
                          <Check className="h-3 w-3" strokeWidth={3} />
                        </span>
                        <span className="text-[15px] text-warm-700">{b}</span>
                      </li>
                    ))}
                  </ul>
                )}
                {s.href && (
                  <Link href={s.href} className="mt-7 inline-flex items-center gap-1.5 text-[15px] font-medium text-forest-600 transition-colors hover:text-forest-700">
                    {s.hrefLabel || 'Learn more'}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                )}
              </div>
              <div className="min-w-0">
                {s.frame === 'phone' ? (
                  <div className="flex justify-center rounded-2xl border border-warm-200/70 bg-warm-100/80 px-3 py-8 sm:py-10">
                    <Phone>{s.preview}</Phone>
                  </div>
                ) : (
                  <Window title={s.previewTitle}>{s.preview}</Window>
                )}
              </div>
            </div>
          </li>
        ) : (
          <li key={`${s.day ?? ''} ${s.time}`} id={s.id} className="scroll-mt-24 pb-8 pl-9 md:pb-14 md:pl-0">
            {/* The dot is centred on the card, so it sits in a wrapper the card's height */}
            <div className="relative md:grid md:grid-cols-[104px_1fr] md:items-center">
              <div className="hidden pr-7 text-right md:block">
                <Clock time={s.time} day={s.day} />
              </div>
              <span
                aria-hidden="true"
                className={cn('absolute -left-[35px] top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-warm-300 ring-4 md:left-[99px]', surface === 'paper' ? 'ring-warm-50' : 'ring-white')}
              />
              <div className="md:pl-12">
                <div className="flex max-w-xl items-center gap-3 rounded-2xl border border-warm-200 bg-white/90 px-3.5 py-3 shadow-[0_10px_30px_-18px_rgba(27,26,25,0.28)] backdrop-blur">
                  <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-[9px] bg-warm-950 text-white">
                    <LogoMark size={16} />
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex flex-wrap items-center gap-x-1.5 text-[11.5px] text-warm-400">
                      <span className="font-semibold text-warm-600">{s.app}</span>
                      {s.where && <span>· {s.where}</span>}
                      <span className="md:hidden">
                        · <Clock time={s.time} day={s.day} inline />
                      </span>
                    </div>
                    <div className="text-[14px] leading-snug text-warm-800">{s.text}</div>
                  </div>
                  {s.tag && (
                    <Pill tone={s.tone || 'neutral'} className="hidden text-[11px] sm:inline-flex">
                      {s.tag}
                    </Pill>
                  )}
                </div>
              </div>
            </div>
          </li>
        ),
      )}
    </ol>
  )
}
