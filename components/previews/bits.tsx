import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'

/*
 * Shared pieces for the product demos. Every demo is a read-only composition of these, so
 * the whole site reads as one product. Nothing here is interactive: frames swallow pointer
 * events and are hidden from assistive tech (the surrounding copy says what is shown).
 */

export function Window({
  title,
  children,
  className,
  mat = true,
  badge = 'Sample data',
  tone = 'light',
}: {
  title: string
  children: ReactNode
  className?: string
  mat?: boolean
  badge?: string | null
  tone?: 'light' | 'dark'
}) {
  return (
    <div
      className={cn(
        mat && (tone === 'dark' ? 'pv-mat rounded-2xl bg-white/4 p-3 sm:p-5 border border-white/10' : 'pv-mat rounded-2xl bg-warm-100/80 p-3 sm:p-5 border border-warm-200/70'),
        className,
      )}
    >
      {/* pv-mat / pv-window: restyled inside .on-gradient (globals.css) */}
      <div
        aria-hidden="true"
        className="pv-window @container pointer-events-none select-none overflow-hidden rounded-xl border border-warm-200 bg-white text-warm-950 shadow-[0_24px_60px_-28px_rgba(9,9,11,0.35)]"
      >
        <div className="flex items-center gap-2 border-b border-warm-100 bg-white px-3 py-2">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-warm-200" />
            <span className="h-2.5 w-2.5 rounded-full bg-warm-200" />
            <span className="h-2.5 w-2.5 rounded-full bg-warm-200" />
          </div>
          <div className="flex-1 truncate text-center text-[11px] font-medium text-warm-400">{title}</div>
          {badge ? (
            <span className="rounded bg-warm-100 px-1.5 py-0.5 text-[9px] font-semibold uppercase tracking-wider text-warm-400">{badge}</span>
          ) : (
            <span className="w-14" />
          )}
        </div>
        {children}
      </div>
    </div>
  )
}

/**
 * A phone for the mobile-first demos, drawn like a current iPhone: a metal edge with side
 * buttons, a thin black bezel, a screen of fixed phone proportions with the status bar around
 * a Dynamic Island, and the home indicator. The demo fills the screen below the status bar;
 * a shorter one leaves white space under it, as an app would, a longer one fades out.
 */
export function Phone({ children, className }: { children: ReactNode; className?: string }) {
  const side = 'absolute w-[3px] bg-linear-to-b from-warm-500 to-warm-700'
  return (
    <div aria-hidden="true" className={cn('pointer-events-none relative mx-auto w-[288px] select-none', className)}>
      {/* Side buttons: action and volume on the left, power on the right */}
      <span className={cn(side, '-left-0.5 top-[104px] h-7 rounded-l-xs')} />
      <span className={cn(side, '-left-0.5 top-[150px] h-12 rounded-l-xs')} />
      <span className={cn(side, '-left-0.5 top-[206px] h-12 rounded-l-xs')} />
      <span className={cn(side, '-right-0.5 top-[172px] h-[72px] rounded-r-xs')} />

      {/* Metal edge, then the bezel */}
      <div className="rounded-[50px] bg-linear-to-b from-warm-400 via-warm-600 to-warm-500 p-0.5 shadow-[0_40px_80px_-32px_rgba(15,23,42,0.55)]">
        <div className="rounded-[48px] bg-[#0b0b0c] p-[9px]">
          <div className="relative h-[560px] overflow-hidden rounded-[39px] bg-white">
            {/* Status bar: the time and the icons each centred beside the Dynamic Island, as on iOS */}
            <div className="grid h-[46px] grid-cols-[1fr_84px_1fr] items-center pt-1 text-[13px] font-semibold text-warm-950" style={{ fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
              <span className="justify-self-center tabular-nums">9:41</span>
              <span className="h-[26px] w-[84px] rounded-full bg-black" />
              <span className="flex items-center gap-1 justify-self-center">
                <svg viewBox="0 0 18 12" className="h-2.5 w-4 fill-current">
                  <rect x="0" y="8" width="3" height="4" rx="1" />
                  <rect x="5" y="5.5" width="3" height="6.5" rx="1" />
                  <rect x="10" y="3" width="3" height="9" rx="1" />
                  <rect x="15" y="0" width="3" height="12" rx="1" />
                </svg>
                <svg viewBox="0 0 16 12" className="h-2.5 w-3.5 fill-current">
                  <path d="M8 2.6c2.4 0 4.6.9 6.2 2.5l1.3-1.4A10.6 10.6 0 0 0 8 .7 10.6 10.6 0 0 0 .5 3.7l1.3 1.4A8.7 8.7 0 0 1 8 2.6Z" />
                  <path d="M8 6.2c1.5 0 2.8.6 3.8 1.5l1.3-1.4A7.3 7.3 0 0 0 8 4.3a7.3 7.3 0 0 0-5.1 2l1.3 1.4c1-.9 2.3-1.5 3.8-1.5Z" />
                  <path d="M8 9.6 9.9 7.7a2.8 2.8 0 0 0-3.8 0L8 9.6Z" />
                </svg>
                <span className="relative inline-flex h-[11px] w-[22px] items-center rounded-[3.5px] border border-current/40 p-[1.5px]">
                  <span className="h-full w-[78%] rounded-[1.5px] bg-current" />
                  <span className="absolute -right-[3px] top-1/2 h-1 w-[1.5px] -translate-y-1/2 rounded-r-sm bg-current/40" />
                </span>
              </span>
            </div>

            {/* The app */}
            <div className="@container h-[492px] overflow-hidden mask-[linear-gradient(to_bottom,black_93%,transparent)]">{children}</div>

            <span className="absolute bottom-2 left-1/2 h-[5px] w-[104px] -translate-x-1/2 rounded-full bg-warm-950" />
          </div>
        </div>
      </div>
    </div>
  )
}

const AVATAR_TONES = [
  'bg-forest-100 text-forest-700',
  'bg-ok-100 text-ok-700',
  'bg-warn-100 text-warn-700',
  'bg-plum-100 text-plum-600',
  'bg-bad-100 text-bad-700',
  'bg-warm-200 text-warm-700',
]

const hash = (s: string) => s.split('').reduce((a, c) => (a * 31 + c.charCodeAt(0)) >>> 0, 7)

export function Initials({ name, size = 28, className, ring }: { name: string; size?: number; className?: string; ring?: boolean }) {
  const label = name
    .split(' ')
    .map((p) => p.charAt(0))
    .join('')
    .slice(0, 2)
    .toUpperCase()
  const tone = AVATAR_TONES[hash(name) % AVATAR_TONES.length]
  return (
    <span
      className={cn('inline-flex shrink-0 items-center justify-center rounded-full font-semibold', tone, ring && 'ring-2 ring-white', className)}
      style={{ width: size, height: size, fontSize: Math.max(9, Math.round(size * 0.38)) }}
    >
      {label}
    </span>
  )
}

export function AvatarStack({ names, size = 22, max = 5 }: { names: string[]; size?: number; max?: number }) {
  const shown = names.slice(0, max)
  const rest = names.length - shown.length
  return (
    <span className="inline-flex items-center">
      {shown.map((n, i) => (
        <Initials key={n} name={n} size={size} ring className={i > 0 ? '-ml-1.5' : ''} />
      ))}
      {rest > 0 && (
        <span
          className="-ml-1.5 inline-flex items-center justify-center rounded-full bg-warm-100 font-semibold text-warm-600 ring-2 ring-white"
          style={{ width: size, height: size, fontSize: 9 }}
        >
          +{rest}
        </span>
      )}
    </span>
  )
}

export type PillTone = 'neutral' | 'ok' | 'warn' | 'bad' | 'brand' | 'plum' | 'dark'

const PILL_TONES: Record<PillTone, string> = {
  neutral: 'bg-warm-100 text-warm-600',
  ok: 'bg-ok-50 text-ok-700',
  warn: 'bg-warn-50 text-warn-700',
  bad: 'bg-bad-50 text-bad-700',
  brand: 'bg-forest-50 text-forest-700',
  plum: 'bg-plum-50 text-plum-700',
  dark: 'bg-warm-950 text-white',
}

export function Pill({ children, tone = 'neutral', className, dot }: { children: ReactNode; tone?: PillTone; className?: string; dot?: boolean }) {
  return (
    <span className={cn('pv-swap inline-flex items-center gap-1 whitespace-nowrap rounded-full px-2 py-0.5 text-[10px] font-semibold leading-4', PILL_TONES[tone], className)}>
      {dot && <span className="h-1.5 w-1.5 rounded-full bg-current" />}
      {children}
    </span>
  )
}

export function Row({
  left,
  title,
  subtitle,
  right,
  className,
  on = true,
}: {
  left?: ReactNode
  title: ReactNode
  subtitle?: ReactNode
  right?: ReactNode
  className?: string
  on?: boolean
}) {
  return (
    <div data-on={on} className={cn('pv-item flex items-center gap-3 border-b border-warm-100 px-4 py-2.5 last:border-b-0', className)}>
      {left}
      <div className="min-w-0 flex-1">
        <div className="truncate text-[12px] font-semibold text-warm-950">{title}</div>
        {subtitle && <div className="truncate text-[11px] text-warm-500">{subtitle}</div>}
      </div>
      {typeof right === 'string' ? <span className="text-[11px] font-semibold text-warm-500">{right}</span> : right}
    </div>
  )
}

export function SectionLabel({ children, right, className }: { children: ReactNode; right?: ReactNode; className?: string }) {
  return (
    <div className={cn('flex items-center justify-between px-4 pb-1.5 pt-3', className)}>
      <span className="text-[10px] font-bold uppercase tracking-wider text-warm-400">{children}</span>
      {right && <span className="text-[10px] text-warm-400">{right}</span>}
    </div>
  )
}

export function Progress({ value, className, tone = 'dark' }: { value: number; className?: string; tone?: 'dark' | 'ok' | 'brand' }) {
  const bar = tone === 'ok' ? 'bg-ok-500' : tone === 'brand' ? 'bg-forest-500' : 'bg-warm-950'
  return (
    <div className={cn('h-1.5 w-full overflow-hidden rounded-full bg-warm-100', className)}>
      <div className={cn('pv-fill h-full rounded-full', bar)} style={{ width: `${Math.max(0, Math.min(100, value))}%` }} />
    </div>
  )
}

export function Checkbox({ checked, className }: { checked: boolean; className?: string }) {
  return (
    <span
      className={cn(
        'pv-swap inline-flex h-4 w-4 shrink-0 items-center justify-center rounded-[5px] border',
        checked ? 'border-warm-950 bg-warm-950 text-white' : 'border-warm-300 bg-white text-transparent',
        className,
      )}
    >
      <svg viewBox="0 0 12 12" width="10" height="10" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M2.5 6.5 5 9l4.5-5.5" />
      </svg>
    </span>
  )
}

export function IconTile({ children, tone = 'neutral', size = 30, className }: { children: ReactNode; tone?: PillTone; size?: number; className?: string }) {
  return (
    <span
      className={cn('pv-swap inline-flex shrink-0 items-center justify-center rounded-lg [&>svg]:h-3.5 [&>svg]:w-3.5', PILL_TONES[tone], className)}
      style={{ width: size, height: size }}
    >
      {children}
    </span>
  )
}

/** A 1–5 rating as five dots, the way a review question reads in the app. */
export function RatingDots({ value, size = 7, className }: { value: number; size?: number; className?: string }) {
  return (
    <span className={cn('inline-flex items-center gap-[3px]', className)}>
      {[1, 2, 3, 4, 5].map((n) => (
        <span key={n} className={cn('pv-swap rounded-full', n <= value ? 'bg-warm-950' : 'bg-warm-200')} style={{ width: size, height: size }} />
      ))}
    </span>
  )
}

export function Typing({ className }: { className?: string }) {
  return (
    <span className={cn('pv-typing inline-flex items-center gap-[3px] px-1', className)}>
      <span />
      <span />
      <span />
    </span>
  )
}

export function Toast({ on, children, className }: { on: boolean; children: ReactNode; className?: string }) {
  return (
    <div
      data-on={on}
      className={cn(
        'pv-pop pointer-events-none absolute bottom-3 left-1/2 z-10 flex -translate-x-1/2 items-center gap-2 whitespace-nowrap rounded-full bg-warm-950 px-3 py-1.5 text-[11px] font-medium text-white shadow-lg',
        className,
      )}
    >
      {children}
    </div>
  )
}

/** A small deterministic "QR code" (decorative). */
export function FakeQr({ size = 56, className }: { size?: number; className?: string }) {
  const n = 13
  const cells: boolean[] = []
  let seed = 41
  for (let i = 0; i < n * n; i += 1) {
    seed = (seed * 1103515245 + 12345) & 0x7fffffff
    cells.push(seed % 5 < 2)
  }
  const cell = size / n
  const finder = (x: number, y: number) => (
    <g key={`${x}-${y}`}>
      <rect x={x * cell} y={y * cell} width={cell * 3} height={cell * 3} fill="#09090B" />
      <rect x={(x + 0.6) * cell} y={(y + 0.6) * cell} width={cell * 1.8} height={cell * 1.8} fill="#fff" />
      <rect x={(x + 1) * cell} y={(y + 1) * cell} width={cell} height={cell} fill="#09090B" />
    </g>
  )
  return (
    <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className={className} aria-hidden="true">
      <rect width={size} height={size} fill="#fff" />
      {cells.map((on, i) => {
        const x = i % n
        const y = Math.floor(i / n)
        const inFinder = (x < 4 && y < 4) || (x > n - 5 && y < 4) || (x < 4 && y > n - 5)
        if (!on || inFinder) return null
        return <rect key={i} x={x * cell} y={y * cell} width={cell} height={cell} fill="#09090B" />
      })}
      {finder(0, 0)}
      {finder(n - 3, 0)}
      {finder(0, n - 3)}
    </svg>
  )
}

export const money = (n: number) => `$${n.toLocaleString('en-US', { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`
