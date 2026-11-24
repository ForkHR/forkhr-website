'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'
import { SAUCE_TASKS, SauceCard, SauceMark } from '@/components/previews/sauceBits'

/**
 * "One sentence instead of five screens": the requests on the left, and on the right the card
 * Sauce makes for the one picked, with its own button working (it only says it is done: nothing
 * leaves the page). The tasks and the button words are the app's, from sauceBits.
 */
export default function SauceTasks() {
  const [picked, setPicked] = useState(SAUCE_TASKS[0].key)
  const [state, setState] = useState<Record<string, 'ready' | 'done' | 'dismissed'>>({})
  const task = SAUCE_TASKS.find((t) => t.key === picked) ?? SAUCE_TASKS[0]
  const st = state[task.key] ?? 'ready'
  const set = (v: 'ready' | 'done' | 'dismissed') => setState((s) => ({ ...s, [task.key]: v }))

  return (
    <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-12">
      <div role="tablist" aria-label="Things to ask Sauce" className="flex flex-col gap-2">
        {SAUCE_TASKS.map((t) => {
          const on = t.key === picked
          return (
            <button
              key={t.key}
              type="button"
              role="tab"
              aria-selected={on}
              onClick={() => setPicked(t.key)}
              className={cn(
                'group flex items-center gap-3.5 rounded-2xl border px-4 py-3.5 text-left transition-colors',
                on ? 'border-warm-950 bg-warm-950 text-white' : 'border-warm-200 bg-white text-warm-900 hover:border-warm-300',
              )}
            >
              <span className={cn('inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl transition-colors', on ? 'bg-white/12 text-white' : 'bg-warm-100 text-warm-950')}>
                <t.icon className="h-4 w-4" strokeWidth={2} />
              </span>
              <span className="text-[15px] leading-snug">“{t.request}”</span>
            </button>
          )
        })}
      </div>

      <div role="tabpanel" className="relative overflow-hidden rounded-[32px] border border-warm-200 bg-warm-100/60 p-5 sm:p-8">
        <div aria-hidden="true" className="bg-dot-grid pointer-events-none absolute inset-0 opacity-60" />
        <div key={task.key} className="pv-fade-in relative flex flex-col gap-3">
          <div className="flex justify-end">
            <span className="max-w-[88%] rounded-2xl rounded-br-md bg-warm-950 px-4 py-2.5 text-[15px] leading-snug text-white">{task.request}</span>
          </div>
          <div className="flex items-end gap-2">
            <SauceMark size={30} title={null} />
            <span className="rounded-2xl rounded-bl-md border border-warm-200 bg-white px-4 py-2.5 text-[15px] leading-snug text-warm-900">
              {st === 'dismissed' ? 'No problem. Nothing was changed.' : task.reply}
            </span>
          </div>
          {st === 'dismissed' ? (
            <div className="pl-[38px]">
              <button type="button" onClick={() => set('ready')} className="rounded-full bg-white px-4 py-2 text-[14px] font-medium text-warm-950 ring-1 ring-warm-200 transition-colors hover:ring-warm-300">
                Show the card again
              </button>
            </div>
          ) : (
            <div className="sm:pl-[38px]">
              <SauceCard
                icon={task.icon}
                title={task.title}
                subject={task.subject}
                rows={task.rows}
                confirm={task.confirm}
                doneLabel={task.doneLabel}
                done={task.done}
                state={st === 'done' ? 'done' : 'ready'}
                footer={
                  <div className="flex justify-end gap-2">
                    <button type="button" onClick={() => set('dismissed')} className="inline-flex h-9 items-center rounded-full border border-warm-300 bg-white px-4 text-[13.5px] font-medium text-warm-950 transition-colors hover:border-warm-400">
                      Not now
                    </button>
                    <button type="button" onClick={() => set('done')} className="inline-flex h-9 items-center rounded-full bg-warm-950 px-4 text-[13.5px] font-medium text-white transition-colors hover:bg-warm-800">
                      {task.confirm}
                    </button>
                  </div>
                }
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
