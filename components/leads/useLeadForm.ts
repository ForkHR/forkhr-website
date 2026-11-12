'use client'

import { useRef, useState, type FormEvent } from 'react'
import { sendLead, type DemoValues, type LeadErrors, type LeadKind, type VendorValues } from '@/lib/leads'

/**
 * What both of the site's forms do with their fields: hold them, check them on Send (each wrong
 * field gets its sentence and the first one the focus), send them to the API once, and say what
 * the API said when it refuses. `trap` is the hidden field a person never sees (LeadFormParts
 * `Trap`): whatever a script typed into it rides along and the API drops the request.
 */
export function useLeadForm<V extends DemoValues | VendorValues>(kind: LeadKind, empty: V, check: (values: V) => LeadErrors) {
  const [values, setValues] = useState<V>(empty)
  const [errors, setErrors] = useState<LeadErrors>({})
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle')
  const [failure, setFailure] = useState('')
  const trap = useRef<HTMLInputElement>(null)

  const set = <K extends keyof V>(field: K, value: V[K]) => {
    setValues((prev) => ({ ...prev, [field]: value }))
    // A field being fixed loses its sentence at once; the rest keep theirs until the next Send
    setErrors((prev) => {
      if (!prev[field as string]) return prev
      const next = { ...prev }
      delete next[field as string]
      return next
    })
  }

  // After the errors are drawn: the first wrong field in the order the form shows them
  const focusFirstProblem = (form: HTMLFormElement) => {
    requestAnimationFrame(() => {
      form.querySelector<HTMLElement>('[aria-invalid="true"], [data-invalid="true"] button')?.focus()
    })
  }

  const submit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (status !== 'idle') return
    const form = e.currentTarget
    const found = check(values)
    setErrors(found)
    setFailure('')
    if (Object.keys(found).length) {
      focusFirstProblem(form)
      return
    }
    setStatus('sending')
    const result = await sendLead(kind, values, { fax: trap.current?.value || '' })
    if (result.ok) {
      setStatus('sent')
      return
    }
    setStatus('idle')
    setFailure(result.message)
    if (result.errors && Object.keys(result.errors).length) {
      setErrors(result.errors)
      focusFirstProblem(form)
    }
  }

  return { values, set, errors, status, failure, submit, trap }
}
