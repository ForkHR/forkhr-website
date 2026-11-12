'use client'

import type { HTMLInputTypeAttribute, ReactNode } from 'react'
import { Check, ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { Option } from '@/lib/leads'

// The form fields of the site's two forms (DemoRequestForm, VendorApplicationForm): a label over
// the control, the field's own sentence under it when it is wrong. 16px text on a phone, so iOS
// does not zoom the page when a field takes focus.
const control = 'w-full rounded-xl border bg-white px-3.5 text-base text-warm-950 outline-none transition-colors placeholder:text-warm-400 focus:ring-[3px] sm:text-[15px]'
const tone = (invalid: boolean) =>
  invalid ? 'border-bad-500 focus:border-bad-500 focus:ring-bad-500/15' : 'border-warm-200 hover:border-warm-300 focus:border-warm-400 focus:ring-warm-950/10'

const errorId = (id: string) => `${id}-error`

const Label = ({ htmlFor, optional, children }: { htmlFor?: string; optional?: boolean; children: ReactNode }) => (
  <label htmlFor={htmlFor} className="mb-1.5 flex items-baseline justify-between gap-2 text-[13px] font-medium text-warm-800">
    {children}
    {optional && <span className="text-[12px] font-normal text-warm-400">Optional</span>}
  </label>
)

const Problem = ({ id, children }: { id: string; children?: string }) =>
  children ? (
    <p id={errorId(id)} role="alert" className="mt-1.5 text-[12.5px] leading-snug text-bad-600">
      {children}
    </p>
  ) : null

type Common = { id: string; label: string; error?: string; optional?: boolean; className?: string }

export function TextField({
  id,
  label,
  error,
  optional,
  className,
  value,
  onChange,
  type = 'text',
  autoComplete,
  inputMode,
  placeholder,
  maxLength,
}: Common & {
  value: string
  onChange: (value: string) => void
  type?: HTMLInputTypeAttribute
  autoComplete?: string
  inputMode?: 'text' | 'email' | 'tel' | 'url'
  placeholder?: string
  maxLength?: number
}) {
  return (
    <div className={cn('min-w-0', className)}>
      <Label htmlFor={id} optional={optional}>
        {label}
      </Label>
      <input
        id={id}
        name={id}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        autoComplete={autoComplete}
        inputMode={inputMode}
        placeholder={placeholder}
        maxLength={maxLength}
        required={!optional}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId(id) : undefined}
        className={cn(control, 'h-11', tone(!!error))}
      />
      <Problem id={id}>{error}</Problem>
    </div>
  )
}

export function SelectField({
  id,
  label,
  error,
  optional,
  className,
  value,
  onChange,
  options,
  placeholder,
  autoComplete,
}: Common & { value: string; onChange: (value: string) => void; options: Option[]; placeholder: string; autoComplete?: string }) {
  return (
    <div className={cn('min-w-0', className)}>
      <Label htmlFor={id} optional={optional}>
        {label}
      </Label>
      <div className="relative">
        <select
          id={id}
          name={id}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          autoComplete={autoComplete}
          required={!optional}
          aria-invalid={error ? true : undefined}
          aria-describedby={error ? errorId(id) : undefined}
          className={cn(control, 'h-11 cursor-pointer appearance-none pr-10', !value && 'text-warm-400', tone(!!error))}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map((o) => (
            <option key={o.value} value={o.value} className="text-warm-950">
              {o.label}
            </option>
          ))}
        </select>
        <ChevronDown className="pointer-events-none absolute right-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-warm-400" aria-hidden="true" />
      </div>
      <Problem id={id}>{error}</Problem>
    </div>
  )
}

export function TextAreaField({
  id,
  label,
  error,
  optional,
  className,
  value,
  onChange,
  placeholder,
  maxLength,
  rows = 3,
}: Common & { value: string; onChange: (value: string) => void; placeholder?: string; maxLength?: number; rows?: number }) {
  return (
    <div className={cn('min-w-0', className)}>
      <Label htmlFor={id} optional={optional}>
        {label}
      </Label>
      <textarea
        id={id}
        name={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        maxLength={maxLength}
        rows={rows}
        required={!optional}
        aria-invalid={error ? true : undefined}
        aria-describedby={error ? errorId(id) : undefined}
        className={cn(control, 'block resize-y py-2.5 leading-relaxed', tone(!!error))}
      />
      <Problem id={id}>{error}</Problem>
    </div>
  )
}

/** Several answers at once: each chip is a toggle, the picked ones in ink with a tick. */
export function ChipsField({
  id,
  label,
  hint,
  error,
  className,
  value,
  onChange,
  options,
}: Omit<Common, 'optional'> & { hint?: string; value: string[]; onChange: (value: string[]) => void; options: string[] }) {
  const toggle = (option: string) => onChange(value.includes(option) ? value.filter((v) => v !== option) : [...value, option])
  return (
    <fieldset className={cn('min-w-0', className)} data-invalid={error ? 'true' : undefined} aria-describedby={error ? errorId(id) : undefined}>
      <legend className="mb-2 flex w-full items-baseline justify-between gap-2 text-[13px] font-medium text-warm-800">
        {label}
        {hint && <span className="text-[12px] font-normal text-warm-400">{hint}</span>}
      </legend>
      <div className="flex flex-wrap gap-2">
        {options.map((option) => {
          const on = value.includes(option)
          return (
            <button
              key={option}
              type="button"
              aria-pressed={on}
              onClick={() => toggle(option)}
              className={cn(
                'inline-flex min-h-9 items-center gap-1.5 rounded-full border px-3.5 py-1.5 text-[13.5px] font-medium outline-none transition-colors focus-visible:ring-[3px] focus-visible:ring-warm-950/15',
                on ? 'border-warm-950 bg-warm-950 text-white' : cn('bg-white text-warm-700 hover:text-warm-950', error ? 'border-bad-500/60' : 'border-warm-200 hover:border-warm-300'),
              )}
            >
              {on && <Check className="h-3.5 w-3.5" strokeWidth={3} aria-hidden="true" />}
              {option}
            </button>
          )
        })}
      </div>
      <Problem id={id}>{error}</Problem>
    </fieldset>
  )
}
