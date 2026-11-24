'use client'

import { cn } from '@/lib/utils'
import { Typing } from './bits'
import { SAUCE_TASKS, SauceCard, SauceMark } from './sauceBits'
import { useInView, useSequence } from './useSequence'

/** A window-sized Sauce: one request, the card it makes, the tap that carries it out. For menus and cards. */
export default function SauceCardPreview({ className, task = 'order' }: { className?: string; task?: string }) {
  const { ref, inView } = useInView<HTMLDivElement>()
  const step = useSequence(5, { inView, ms: [500, 800, 1100, 1500, 350], holdMs: 3200 })
  const t = SAUCE_TASKS.find((x) => x.key === task) ?? SAUCE_TASKS[0]

  return (
    <div ref={ref} className={cn('flex flex-col gap-2 bg-warm-50 p-3', className)}>
      <div data-on={step >= 1} className="pv-item flex justify-end">
        <span className="max-w-[86%] rounded-2xl rounded-br-md bg-warm-950 px-3 py-1.5 text-[11.5px] leading-snug text-white">{t.request}</span>
      </div>
      <div className="flex items-end gap-1.5">
        <SauceMark size={20} title={null} />
        {step === 2 ? (
          <span className="rounded-2xl rounded-bl-md border border-warm-200 bg-white px-2 py-1.5">
            <Typing />
          </span>
        ) : (
          <span data-on={step >= 3} className="pv-item rounded-2xl rounded-bl-md border border-warm-200 bg-white px-3 py-1.5 text-[11.5px] leading-snug text-warm-900">
            {t.reply}
          </span>
        )}
      </div>
      <div data-on={step >= 3} className="pv-item pl-[26px]">
        <SauceCard size="sm" icon={t.icon} title={t.title} subject={t.subject} rows={t.rows} confirm={t.confirm} doneLabel={t.doneLabel} done={t.done} pressed={step === 4} state={step >= 5 ? 'done' : 'ready'} />
      </div>
    </div>
  )
}
