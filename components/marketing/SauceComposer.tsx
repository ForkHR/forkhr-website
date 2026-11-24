import { ArrowUp, AtSign, Paperclip, SquareSlash } from 'lucide-react'
import { Face, SauceMark } from '@/components/previews/sauceBits'

/*
 * "Talk to it like a coworker": Sauce's message box as the app draws it, mid-sentence, with the team
 * list open on "@Ma" (two Mayas, the reason tagging exists), beside the three things the box does.
 * The app: @ opens the people list and the question goes with the person's id, / lists the tasks
 * the person has, the paperclip puts a photo or a PDF on the record a card makes.
 */
const POINTS = [
  { icon: AtSign, title: 'Tag a person', desc: 'Type @ and pick from the team, so it never mixes up two people with one name.' },
  { icon: SquareSlash, title: 'Pick a task', desc: 'Type / for a shortcut like /shift or /order. On the web, each page opens it on that page’s task.' },
  { icon: Paperclip, title: 'Attach a photo or a PDF', desc: 'It goes on the record: a photo on the cooler log, a resignation letter on the termination.' },
]

const PEOPLE = [
  { initials: 'MC', color: '#6D28D9', name: 'Maya Chen', sub: 'Barista · Main St', on: true },
  { initials: 'MO', color: '#0F766E', name: 'Maya Ortiz', sub: 'Shift lead · 5th Ave' },
  { initials: 'MB', color: '#B45309', name: 'Marcus Bell', sub: 'Barista · Main St' },
]

export default function SauceComposer() {
  return (
    <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:gap-16">
      <ul className="flex flex-col gap-7">
        {POINTS.map((p) => (
          <li key={p.title} className="flex gap-4">
            <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-warm-200 bg-white text-warm-950">
              <p.icon className="h-5 w-5" />
            </span>
            <span>
              <span className="block text-[17px] font-semibold tracking-tight text-warm-950">{p.title}</span>
              <span className="mt-1 block max-w-md text-[15px] leading-relaxed text-warm-600">{p.desc}</span>
            </span>
          </li>
        ))}
      </ul>

      <div aria-hidden="true" className="relative rounded-3xl bg-warm-100/70 p-6 sm:p-10">
        {/* The people list, open over the box */}
        <div className="mb-3 ml-auto w-full max-w-[300px] rounded-2xl border border-warm-200 bg-white p-1.5 shadow-[0_18px_40px_-20px_rgba(27,26,25,0.35)] sm:mr-16">
          {PEOPLE.map((p) => (
            <div key={p.name} className={`flex items-center gap-2.5 rounded-xl px-2.5 py-2 ${p.on ? 'bg-warm-100' : ''}`}>
              <Face initials={p.initials} color={p.color} round size={28} />
              <span className="min-w-0">
                <span className="block text-[13.5px] font-semibold text-warm-950">{p.name}</span>
                <span className="block text-[12px] text-warm-500">{p.sub}</span>
              </span>
            </div>
          ))}
        </div>
        {/* The box */}
        <div className="rounded-2xl border border-warm-200 bg-white p-3 shadow-[0_1px_2px_rgba(27,26,25,0.05)]">
          <div className="flex items-center gap-2 px-1 pb-2 text-[12.5px] text-warm-500">
            <SauceMark size={20} title={null} />
            Ask Sauce
          </div>
          <p className="px-1 text-[16px] leading-relaxed text-warm-950">
            Give <span className="rounded-md bg-forest-50 px-1 py-0.5 font-medium text-forest-700">@Jordan Lee</span>’s Saturday close to <span className="text-forest-700">@Ma</span>
            <span className="pv-caret" />
          </p>
          <div className="mt-3 flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full text-warm-500">
              <Paperclip className="h-4 w-4" />
            </span>
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full text-warm-500">
              <SquareSlash className="h-4 w-4" />
            </span>
            <span className="ml-auto inline-flex h-8 w-8 items-center justify-center rounded-full bg-warm-950 text-white">
              <ArrowUp className="h-4 w-4" />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}
