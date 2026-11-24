import { Check } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Face } from './sauceBits'

/*
 * The app's Calendar (one page for everything with a date, a row a layer) for one café's week,
 * in the layers' own colours: the house palette the app's calendarModel.js gives each layer.
 * Monday is today; Tuesday's opening shift is Luis's, the one Sauce moved in the hero, and
 * Thursday's Bluebird delivery is the oat milk order from the tasks below it.
 */

type Layer = { label: string; bg: string; bd: string; fg: string; tile: string }
const LAYERS: Record<string, Layer> = {
  shifts: { label: 'Shifts', bg: 'rgb(203,255,242)', bd: 'rgb(18,191,148)', fg: 'rgb(0,71,54)', tile: 'rgb(13,148,116)' },
  checklists: { label: 'Checklists', bg: 'rgb(238,255,240)', bd: 'rgb(25,128,42)', fg: 'rgb(0,68,23)', tile: 'rgb(25,128,42)' },
  deliveries: { label: 'Deliveries', bg: 'rgb(229,255,237)', bd: 'rgb(0,178,59)', fg: 'rgb(0,68,23)', tile: 'rgb(0,140,48)' },
  bags: { label: 'Surprise bags', bg: 'rgb(255,241,251)', bd: 'rgb(217,54,176)', fg: 'rgb(73,0,55)', tile: 'rgb(190,40,150)' },
}

type Chip = { t: string; n: string; face?: [string, string, boolean?]; st?: 'done' | 'planned' | 'new' }
const P = {
  maya: ['MC', '#6D28D9', true] as [string, string, boolean],
  jordan: ['JL', '#0369A1', true] as [string, string, boolean],
  luis: ['LR', '#C2410C', true] as [string, string, boolean],
  priya: ['PN', '#BE185D', true] as [string, string, boolean],
  rise: ['RB', '#9A3412'] as [string, string],
  bluebird: ['BD', '#0E7490'] as [string, string],
  northside: ['NR', '#78350F'] as [string, string],
}

const DAYS = ['Mon 23', 'Tue 24', 'Wed 25', 'Thu 26', 'Fri 27']
const ROWS: { layer: keyof typeof LAYERS; cells: Chip[][] }[] = [
  {
    layer: 'shifts',
    cells: [
      [{ t: '6:30a', n: 'Maya Chen', face: P.maya }, { t: '2p', n: 'Jordan Lee', face: P.jordan }],
      [{ t: '6:30a', n: 'Luis Romero', face: P.luis, st: 'new' }, { t: '2p', n: 'Priya Nair', face: P.priya }],
      [{ t: '6:30a', n: 'Maya Chen', face: P.maya }, { t: '2p', n: 'Jordan Lee', face: P.jordan }],
      [{ t: '6:30a', n: 'Maya Chen', face: P.maya }, { t: '3p', n: 'Luis Romero', face: P.luis }],
      [{ t: '6:30a', n: 'Luis Romero', face: P.luis }, { t: '3p', n: 'Priya Nair', face: P.priya }],
    ],
  },
  {
    layer: 'checklists',
    cells: [[{ t: '6:30a', n: 'Opening', st: 'done' }], [{ t: '6:30a', n: 'Opening', st: 'planned' }], [{ t: '6:30a', n: 'Opening', st: 'planned' }], [{ t: '6:30a', n: 'Opening', st: 'planned' }], [{ t: '6:30a', n: 'Opening', st: 'planned' }]],
  },
  {
    layer: 'deliveries',
    cells: [
      [{ t: '6:45a', n: 'Rise Bakery', face: P.rise, st: 'done' }, { t: '10:30a', n: 'Northside', face: P.northside }],
      [{ t: '6:45a', n: 'Rise Bakery', face: P.rise, st: 'planned' }],
      [],
      [{ t: '8:15a', n: 'Bluebird Dairy', face: P.bluebird, st: 'new' }],
      [{ t: '10:30a', n: 'Northside', face: P.northside, st: 'planned' }],
    ],
  },
  {
    layer: 'bags',
    cells: [[{ t: '5p', n: '4 of 6 left' }], [{ t: '5p', n: '6 bags', st: 'planned' }], [{ t: '5p', n: '6 bags', st: 'planned' }], [{ t: '5p', n: '6 bags', st: 'planned' }], [{ t: '5p', n: '6 bags', st: 'planned' }]],
  },
]

export default function CalendarPreview({ className }: { className?: string }) {
  return (
    <div className={cn('text-warm-950', className)}>
      <div className="flex items-center gap-2.5 border-b border-warm-100 px-4 py-2.5">
        <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-[#1F6F5C] text-[11px] font-bold text-white">J</span>
        <span className="text-[12.5px] font-semibold">Juniper Coffee · Main St</span>
        <span className="ml-auto text-[12px] font-semibold">Nov 23 – 27</span>
      </div>
      <div className="grid grid-cols-[72px_repeat(5,minmax(0,1fr))] border-b border-warm-200 text-[10.5px] text-warm-500">
        <span />
        {DAYS.map((d, i) => (
          <span key={d} className={cn('flex items-center gap-1 px-1.5 py-1.5', i === 0 && 'bg-warm-50')}>
            {d.split(' ')[0]}
            <span className={cn('inline-flex h-[18px] min-w-[18px] items-center justify-center rounded-full px-1 font-semibold', i === 0 ? 'bg-warm-950 text-white' : 'text-warm-950')}>{d.split(' ')[1]}</span>
          </span>
        ))}
      </div>
      {ROWS.map((row) => {
        const l = LAYERS[row.layer]
        return (
          <div key={row.layer} className="grid grid-cols-[72px_repeat(5,minmax(0,1fr))] border-b border-warm-100 last:border-b-0">
            <span className="flex items-start gap-1.5 px-2.5 pt-2.5 text-[10.5px] font-semibold leading-tight text-warm-700">
              <span className="mt-[3px] h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: l.bd }} />
              {l.label}
            </span>
            {row.cells.map((chips, i) => (
              <div key={i} className={cn('flex min-w-0 flex-col gap-1 px-[3px] py-1.5', i === 0 && 'bg-warm-50')}>
                {chips.map((c) => {
                  const done = c.st === 'done'
                  const planned = c.st === 'planned'
                  return (
                    <span
                      key={c.t + c.n}
                      className={cn('flex min-w-0 flex-col gap-0.5 rounded-md px-1.5 py-1', c.st === 'new' && 'ring-2 ring-warm-950')}
                      style={{
                        background: done ? '#F2F0ED' : planned ? '#FFFFFF' : l.bg,
                        color: done ? '#59554F' : l.fg,
                        border: planned ? `1px dashed ${l.bd}` : '1px solid transparent',
                      }}
                    >
                      <span className="flex items-center text-[9.5px] font-semibold leading-none">
                        {c.t}
                        {done && <Check className="ml-auto h-2.5 w-2.5" strokeWidth={3} />}
                      </span>
                      <span className="flex min-w-0 items-center gap-1">
                        {c.face ? <Face initials={c.face[0]} color={c.face[1]} round={c.face[2]} size={13} /> : <span className="h-[13px] w-[13px] shrink-0 rounded-[3px]" style={{ background: l.tile }} />}
                        <span className="truncate text-[10px] font-medium leading-tight">{c.n}</span>
                      </span>
                    </span>
                  )
                })}
              </div>
            ))}
          </div>
        )
      })}
    </div>
  )
}
