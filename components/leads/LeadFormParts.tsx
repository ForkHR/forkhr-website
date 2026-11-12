'use client'

import { useEffect, useRef, type ReactNode, type RefObject } from 'react'
import Link from 'next/link'
import { ArrowRight, Check, CircleAlert, LoaderCircle } from 'lucide-react'
import { Button } from '@/components/ui/button'

// The pieces both forms share (DemoRequestForm, VendorApplicationForm): the card they stand in,
// the hidden field for scripts, the button with what went wrong over it, and what the card
// becomes once the form is sent.

export const FormCard = ({ children }: { children: ReactNode }) => (
  <div className="rounded-3xl border border-warm-200 bg-white p-5 shadow-[0_28px_64px_-32px_rgba(27,26,25,0.28)] sm:p-8">{children}</div>
)

export const FormHeading = ({ title, note }: { title: string; note: string }) => (
  <div className="mb-6">
    <h2 className="text-xl font-semibold tracking-tight text-warm-950">{title}</h2>
    <p className="mt-1 text-[13.5px] text-warm-500">{note}</p>
  </div>
)

/**
 * A field no person sees or reaches (off screen, out of the tab order, hidden from screen
 * readers). A script that fills every input fills it, and the API drops what carries it. Its
 * name says nothing a browser's autofill knows, so a real visitor's browser leaves it alone.
 */
export const Trap = ({ inputRef }: { inputRef: RefObject<HTMLInputElement | null> }) => (
  <div aria-hidden="true" className="absolute -left-[9999px] top-auto h-px w-px overflow-hidden">
    <label htmlFor="lead-extra">Leave this field empty</label>
    <input ref={inputRef} id="lead-extra" name="lead-extra" type="text" tabIndex={-1} autoComplete="off" defaultValue="" />
  </div>
)

export const SubmitRow = ({ label, sending, failure, note }: { label: string; sending: boolean; failure: string; note: ReactNode }) => (
  <div className="mt-6">
    {failure && (
      <p role="alert" className="mb-4 flex items-start gap-2 rounded-xl border border-bad-100 bg-bad-50 px-3.5 py-3 text-[13.5px] leading-snug text-bad-700">
        <CircleAlert className="mt-px h-4 w-4 shrink-0" aria-hidden="true" />
        <span>{failure}</span>
      </p>
    )}
    <Button type="submit" size="lg" disabled={sending} className="h-12 w-full text-base disabled:opacity-70">
      {sending ? (
        <>
          <LoaderCircle className="mr-2 h-4 w-4 animate-spin" aria-hidden="true" />
          Sending…
        </>
      ) : (
        <>
          {label}
          <ArrowRight className="ml-2 h-4 w-4" aria-hidden="true" />
        </>
      )}
    </Button>
    <p className="mt-3 text-center text-[12.5px] leading-relaxed text-warm-400">{note}</p>
  </div>
)

export const PrivacyNote = ({ lead }: { lead: string }) => (
  <>
    {lead}{' '}
    <Link href="/privacy-policy" className="underline decoration-warm-300 underline-offset-2 transition-colors hover:text-warm-600">
      Privacy policy
    </Link>
  </>
)

/** The card once the form went: what happens next and where to go meanwhile. Takes the focus, so a screen reader says it and a phone scrolls to it. */
export const Sent = ({ title, text, links }: { title: string; text: ReactNode; links: { label: string; href: string; external?: boolean }[] }) => {
  const heading = useRef<HTMLHeadingElement>(null)
  useEffect(() => {
    heading.current?.focus()
  }, [])
  return (
    <div className="flex flex-col items-start py-4 sm:py-8">
      <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-ok-50 text-ok-600">
        <Check className="h-5 w-5" strokeWidth={3} aria-hidden="true" />
      </span>
      <h2 ref={heading} tabIndex={-1} className="mt-5 scroll-mt-28 text-2xl font-semibold tracking-tight text-warm-950 outline-none">
        {title}
      </h2>
      <p className="mt-2 max-w-md text-[15px] leading-relaxed text-warm-600">{text}</p>
      <ul className="mt-7 flex w-full flex-col divide-y divide-warm-100 border-y border-warm-100">
        {links.map((l) => (
          <li key={l.href}>
            <Link
              href={l.href}
              {...(l.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              className="group flex items-center justify-between gap-3 py-3.5 text-[15px] font-medium text-warm-950 transition-colors hover:text-forest-600"
            >
              {l.label}
              <ArrowRight className="h-4 w-4 text-warm-300 transition-colors group-hover:text-forest-600" aria-hidden="true" />
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
