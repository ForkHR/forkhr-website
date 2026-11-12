import { ArrowDown, Check, FileSpreadsheet, Mail, Repeat } from 'lucide-react'
import { cn } from '@/lib/utils'
import { Initials, Pill, money } from '@/components/previews/bits'
import { VerifiedTick } from '@/components/previews/storefrontBits'
import { BentoCard, BentoGrid, BentoHeading, Mini } from './Bento'

/*
 * "Also included" on /sales: a bento (./Bento) of what selling through Fork does around the order,
 * each card a small still of the real thing. Blue Door Bakery and Corner Café again, so it reads
 * as the business the page's story just followed: the three items at the prices on order S-2088
 * (sourdough $3.40, croissant $1.90, baguette $2.60), Net 7, the route's other stops as the other
 * customers, the 8:19 reply that added twelve baguettes. Decorative: the card's title and line say
 * what the still shows. The words on the stills are the app's: "Base price", "Own price", "Every
 * week", "Next run", "Credited", "On hand", "Low stock", "On Fork", "Via email".
 */

const short = (n: number) => `$${n.toLocaleString('en-US')}`
const label = 'text-[8.5px] font-bold uppercase tracking-wider text-warm-400'

// What Corner Café pays: the Cafés list, and an own price where one was agreed (a phone leaves the
// list's column out, so the item names keep their room)
const PRICES = [
  { name: 'Sourdough loaf', base: 3.8, list: 3.6, pays: 3.4, own: true },
  { name: 'Butter croissant', base: 2.1, list: 1.9, pays: 1.9, own: false },
  { name: 'Baguette', base: 2.9, list: 2.6, pays: 2.6, own: false },
]

const PricesVisual = () => (
  <div className="flex w-full max-w-[580px] items-center gap-4">
    <Mini className="min-w-0 flex-1 overflow-hidden">
      <div className={cn('grid grid-cols-[minmax(0,1fr)_58px_96px] sm:grid-cols-[minmax(0,1fr)_58px_52px_96px] items-center gap-2 border-b border-warm-100 px-3.5 py-2', label)}>
        <span>Item</span>
        <span className="text-right">Base price</span>
        <span className="hidden text-right sm:block">Cafés</span>
        <span className="text-right text-warm-950">Corner Café</span>
      </div>
      {PRICES.map((p) => (
        <div key={p.name} className="grid grid-cols-[minmax(0,1fr)_58px_96px] sm:grid-cols-[minmax(0,1fr)_58px_52px_96px] items-center gap-2 border-b border-warm-100 px-3.5 py-2.5 text-[11px] last:border-b-0">
          <span className="truncate font-medium">{p.name}</span>
          <span className="text-right tabular-nums text-warm-400">{money(p.base)}</span>
          <span className="hidden text-right tabular-nums text-warm-400 sm:block">{money(p.list)}</span>
          <span className="flex items-center justify-end gap-1.5">
            {p.own && <span className="rounded-full bg-forest-50 px-1.5 py-px text-[8.5px] font-semibold text-forest-700">Own price</span>}
            <span className="font-bold tabular-nums">{money(p.pays)}</span>
          </span>
        </div>
      ))}
    </Mini>
    <Mini className="hidden w-[150px] shrink-0 p-3 sm:block">
      <div className="flex items-center gap-2">
        <Initials name="Corner Café" size={24} />
        <span className="min-w-0 truncate text-[11px] font-semibold">Corner Café</span>
      </div>
      <div className={cn('mt-3', label)}>Price list</div>
      <div className="mt-1 flex items-center justify-between text-[10.5px] font-medium">
        Cafés <span className="text-[9px] font-normal text-warm-400">9 customers</span>
      </div>
      <div className={cn('mt-2.5', label)}>Own prices</div>
      <div className="mt-1 text-[10.5px] font-medium">1 item</div>
      <div className={cn('mt-2.5', label)}>Terms</div>
      <div className="mt-1 text-[10.5px] font-medium">Net 7</div>
    </Mini>
  </div>
)

const DAYS = ['M', 'T', 'W', 'T', 'F', 'S', 'S']
const RUN_DAYS = [0, 4]

const StandingVisual = () => (
  <Mini className="w-full max-w-[250px] overflow-hidden">
    <div className="flex items-center gap-2 border-b border-warm-100 px-3 py-2">
      <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-warm-100 text-warm-600">
        <Repeat className="h-3.5 w-3.5" />
      </span>
      <div className="min-w-0 flex-1 leading-tight">
        <div className="truncate text-[11px] font-semibold">Corner Café</div>
        <div className="text-[9px] text-warm-500">Every week</div>
      </div>
      <Pill tone="ok">Active</Pill>
    </div>
    <div className="flex gap-1 px-3 pt-2.5">
      {DAYS.map((d, i) => (
        <span key={i} className={cn('flex h-6 flex-1 items-center justify-center rounded-md text-[9.5px] font-semibold', RUN_DAYS.includes(i) ? 'bg-warm-950 text-white' : 'bg-warm-100 text-warm-400')}>
          {d}
        </span>
      ))}
    </div>
    <div className="space-y-1 px-3 py-2.5 text-[10.5px]">
      {[
        ['Sourdough loaf', 24],
        ['Butter croissant', 36],
      ].map(([name, qty]) => (
        <div key={name} className="flex items-center justify-between gap-2">
          <span className="truncate font-medium">{name}</span>
          <span className="tabular-nums text-warm-500">× {qty}</span>
        </div>
      ))}
    </div>
    <div className="flex items-center justify-between border-t border-warm-100 px-3 py-1.5 text-[9px] text-warm-500">
      <span>Next run</span>
      <span className="font-medium text-warm-950">Mon, Sep 29</span>
    </div>
  </Mini>
)

const Down = () => (
  <div className="flex justify-center text-warm-300">
    <ArrowDown className="h-3.5 w-3.5" />
  </div>
)

// Six croissants short at $1.90: $11.40 off the invoice
const IssuesVisual = () => (
  <div className="w-full max-w-[250px] space-y-1.5">
    <Mini className="px-3 py-2.5">
      <div className="flex items-center justify-between gap-2">
        <span className="truncate text-[11px] font-semibold">Butter croissant</span>
        <Pill tone="bad">6 short</Pill>
      </div>
      <div className="mt-0.5 text-[9.5px] text-warm-500">36 ordered · 30 delivered</div>
    </Mini>
    <Down />
    <Mini className="px-3 py-2.5">
      <div className="flex items-center justify-between text-[10px] text-warm-500">
        <span>Invoice · Northside Deli</span>
        <span className="tabular-nums">{money(187.2)}</span>
      </div>
      <div className="mt-1.5 flex items-center justify-between text-[10px]">
        <span className="flex items-center gap-1.5 text-warm-500">
          <Pill tone="ok">Credited</Pill> 6 × {money(1.9)}
        </span>
        <span className="font-semibold tabular-nums text-ok-700">−{money(11.4)}</span>
      </div>
      <div className="mt-2 flex items-center justify-between border-t border-warm-100 pt-2 text-[11px] font-semibold">
        <span>Total due</span>
        <span className="tabular-nums">{money(175.8)}</span>
      </div>
    </Mini>
  </div>
)

const STOCK = [
  { name: 'Sourdough loaf', bakery: 120, depot: 48, low: false },
  { name: 'Butter croissant', bakery: 96, depot: 12, low: true },
  { name: 'Baguette', bakery: 60, depot: 30, low: false },
]

const StockVisual = () => (
  <Mini className="w-full max-w-[260px] overflow-hidden">
    <div className={cn('grid grid-cols-[minmax(0,1fr)_50px_50px] items-center gap-2 border-b border-warm-100 px-3 py-2', label)}>
      <span>On hand</span>
      <span className="text-right">Bakery</span>
      <span className="text-right">Depot</span>
    </div>
    {STOCK.map((s) => (
      <div key={s.name} className="grid grid-cols-[minmax(0,1fr)_50px_50px] items-center gap-2 border-b border-warm-100 px-3 py-2 text-[11px] last:border-b-0">
        <span className="min-w-0">
          <span className="block truncate font-medium">{s.name}</span>
          {s.low && <span className="mt-0.5 inline-block rounded-full bg-warn-50 px-1.5 py-px text-[8.5px] font-semibold text-warn-700">Low stock</span>}
        </span>
        <span className="text-right font-semibold tabular-nums">{s.bakery}</span>
        <span className={cn('text-right font-semibold tabular-nums', s.low && 'text-warn-700')}>{s.depot}</span>
      </div>
    ))}
  </Mini>
)

// A month of Friday orders: Corner Café's eight at $228.00
const REVENUE = [
  { name: 'Corner Café', amount: 1824 },
  { name: 'Northside Deli', amount: 1410 },
  { name: 'Harbor Market', amount: 980 },
]

const ReportVisual = () => (
  <Mini className="w-full max-w-[260px] p-3">
    <div className="flex items-baseline justify-between">
      <span className="text-[10.5px] font-semibold">Revenue by customer</span>
      <span className="text-[9px] text-warm-400">September</span>
    </div>
    <div className="mt-2.5 space-y-2">
      {REVENUE.map((r) => (
        <div key={r.name}>
          <div className="flex items-baseline justify-between text-[9.5px]">
            <span className="truncate text-warm-600">{r.name}</span>
            <span className="font-semibold tabular-nums">{short(r.amount)}</span>
          </div>
          <div className="mt-1 h-1.5 rounded-full bg-warm-100">
            <div className="h-full rounded-full bg-warm-950" style={{ width: `${Math.round((r.amount / REVENUE[0].amount) * 100)}%` }} />
          </div>
        </div>
      ))}
    </div>
    <div className="mt-2.5 flex items-center justify-between border-t border-warm-100 pt-2 text-[9px] text-warm-500">
      <span>Top item</span>
      <span className="font-medium text-warm-950">Sourdough loaf · 412 sold</span>
    </div>
  </Mini>
)

const SHEET = [
  ['Corner Café', 'accounts@cornercafe.com', 'Net 7'],
  ['Northside Deli', 'orders@northsidedeli.com', 'COD'],
  ['Pine & Pour', 'hello@pineandpour.com', 'Net 15'],
]

const ImportVisual = () => (
  <Mini className="w-full max-w-[270px] overflow-hidden">
    <div className="flex items-center gap-2 border-b border-warm-100 px-3 py-2">
      <span className="inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-ok-50 text-ok-700">
        <FileSpreadsheet className="h-3.5 w-3.5" />
      </span>
      <span className="min-w-0 flex-1 truncate text-[10.5px] font-semibold">customers.xlsx</span>
      <span className="text-[9px] text-warm-400">42 rows</span>
    </div>
    <div className={cn('grid grid-cols-[84px_minmax(0,1fr)_46px] border-b border-warm-100 bg-warm-50', label)}>
      <span className="px-2 py-1.5">Name</span>
      <span className="border-l border-warm-100 px-2 py-1.5">Email</span>
      <span className="border-l border-warm-100 px-2 py-1.5">Terms</span>
    </div>
    {SHEET.map(([name, email, terms]) => (
      <div key={name} className="grid grid-cols-[84px_minmax(0,1fr)_46px] border-b border-warm-100 text-[9.5px]">
        <span className="truncate px-2 py-1.5 font-medium">{name}</span>
        <span className="truncate border-l border-warm-100 px-2 py-1.5 text-warm-500">{email}</span>
        <span className="border-l border-warm-100 px-2 py-1.5 text-warm-500">{terms}</span>
      </div>
    ))}
    <div className="flex items-center gap-1.5 px-3 py-2 text-[9.5px] font-medium text-ok-700">
      <Check className="h-3 w-3" strokeWidth={3} /> 42 customers ready to add
    </div>
  </Mini>
)

const ClaimVisual = () => (
  <div className="w-full max-w-[250px] space-y-1.5">
    <Mini className="flex items-center gap-2.5 px-3 py-2.5">
      <Initials name="Corner Café" size={28} />
      <div className="min-w-0 flex-1 leading-tight">
        <div className="truncate text-[11px] font-semibold">Corner Café</div>
        <div className="mt-0.5 truncate text-[9px] text-warm-500">Not on Fork · billed by email</div>
      </div>
      <Mail className="h-3.5 w-3.5 shrink-0 text-warm-300" />
    </Mini>
    <Down />
    <Mini className="flex items-center gap-2.5 px-3 py-2.5 ring-forest-200">
      <Initials name="Corner Café" size={28} />
      <div className="min-w-0 flex-1 leading-tight">
        <div className="flex items-center gap-1 text-[11px] font-semibold">
          <span className="truncate">Corner Café</span> <VerifiedTick size={11} />
        </div>
        <div className="mt-0.5 truncate text-[9px] text-warm-500">On Fork · orders in the app</div>
      </div>
      <Pill tone="brand">Claimed</Pill>
    </Mini>
  </div>
)

const THREADS = [
  { name: 'Corner Café', time: '8:19 AM', text: 'Can you add 12 baguettes?', email: true, unread: true },
  { name: 'Northside Deli', time: '7:52 AM', text: 'Same as last week, see you Friday.', email: false, unread: false },
  { name: 'Pine & Pour', time: 'Wed', text: 'Paid the invoice, thank you!', email: true, unread: false },
]

const ThreadsVisual = () => (
  <Mini className="w-full max-w-[290px] overflow-hidden">
    {THREADS.map((t) => (
      <div key={t.name} className="flex items-center gap-2.5 border-b border-warm-100 px-3 py-2 last:border-b-0">
        <Initials name={t.name} size={28} />
        <div className="min-w-0 flex-1 leading-tight">
          <div className="flex items-center gap-1 text-[11px] font-semibold">
            <span className="truncate">{t.name}</span>
            {!t.email && <VerifiedTick size={10} />}
            <span className="ml-auto shrink-0 pl-2 text-[9px] font-normal text-warm-400">{t.time}</span>
          </div>
          <div className="mt-0.5 flex items-center gap-1.5 text-[9.5px] text-warm-500">
            <span className={cn('min-w-0 truncate', t.unread && 'font-semibold text-warm-950')}>{t.text}</span>
            {t.email && (
              <span className="ml-auto inline-flex shrink-0 items-center gap-1 text-[8.5px] text-warm-400">
                <Mail className="h-2.5 w-2.5" /> Via email
              </span>
            )}
          </div>
        </div>
        {t.unread && <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-forest-600" />}
      </div>
    ))}
  </Mini>
)

export default function SalesFeatures({ id, className }: { id?: string; className?: string }) {
  return (
    <section id={id} className={cn('scroll-mt-24 border-b border-warm-100', className)}>
      <div className="mx-auto max-w-6xl px-6 py-20 md:py-28">
        <BentoHeading eyebrow="Also included" title="The rest of the wholesale side" lede="What sits around every order, kept in the same place as the order: prices, repeats, credits, stock and the conversation." />

        <BentoGrid>
          <BentoCard className="sm:col-span-2" title="Price lists per customer" desc="Each customer sees their items at their prices: a list for a group, an own price where one was agreed." visual={<PricesVisual />} />
          <BentoCard title="Standing orders" desc="24 sourdough every Monday and Friday. Made ahead, emailed for confirmation." visual={<StandingVisual />} />
          <BentoCard title="Issues and credits" desc="A short case becomes a credit on the invoice." visual={<IssuesVisual />} />
          <BentoCard title="Seller inventory" desc="What is on hand, per item and location." visual={<StockVisual />} />
          <BentoCard title="Sales reports" desc="Revenue by customer. Which items move." visual={<ReportVisual />} />
          <BentoCard title="Imports" desc="Customers, items and open orders from a spreadsheet." visual={<ImportVisual />} />
          <BentoCard title="Customers can claim their side" desc="They sign up later with the email on file and order in the app." visual={<ClaimVisual />} />
          <BentoCard className="sm:col-span-2 lg:col-span-1" title="A chat per customer" desc="On Fork or by email. Replies come back to the thread." visual={<ThreadsVisual />} />
        </BentoGrid>
      </div>
    </section>
  )
}
