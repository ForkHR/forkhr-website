'use client'

import { useEffect, useRef, useState } from 'react'

/** Is the element on screen? Starts a demo only once someone can see it. */
export function useInView<T extends HTMLElement>(threshold = 0.25) {
  const ref = useRef<T | null>(null)
  const [inView, setInView] = useState(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (typeof IntersectionObserver === 'undefined') {
      setInView(true)
      return
    }
    const io = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) setInView(entry.isIntersecting)
      },
      { threshold },
    )
    io.observe(el)
    return () => io.disconnect()
  }, [threshold])

  return { ref, inView }
}

export function usePrefersReducedMotion() {
  const [reduced, setReduced] = useState(false)
  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const update = () => setReduced(mq.matches)
    update()
    mq.addEventListener?.('change', update)
    return () => mq.removeEventListener?.('change', update)
  }, [])
  return reduced
}

type SequenceOptions = {
  inView: boolean
  /** Delay before each step (one number for all, or one per step). */
  ms?: number | number[]
  /** How long the finished state stays before the loop restarts. */
  holdMs?: number
  /** Delay before the first step once in view. */
  startDelay?: number
  loop?: boolean
}

/**
 * A tiny state machine for the product demos: returns the current step, 0..steps.
 * Advances while in view, holds at the end, restarts from 0. People who asked for reduced
 * motion get the finished state straight away.
 */
export function useSequence(steps: number, { inView, ms = 900, holdMs = 2600, startDelay = 500, loop = true }: SequenceOptions) {
  const reduced = usePrefersReducedMotion()
  const [step, setStep] = useState(0)
  const delaysRef = useRef<number | number[]>(ms)
  delaysRef.current = ms

  useEffect(() => {
    if (reduced) {
      setStep(steps)
      return
    }
    if (!inView) return

    let cancelled = false
    let timer: ReturnType<typeof setTimeout> | undefined
    let current = 0
    setStep(0)

    const delayFor = (next: number) => {
      const d = delaysRef.current
      if (Array.isArray(d)) return d[Math.min(next - 1, d.length - 1)] ?? 900
      return d
    }
    const schedule = (delay: number, fn: () => void) => {
      timer = setTimeout(() => {
        if (!cancelled) fn()
      }, delay)
    }
    const advance = () => {
      current += 1
      setStep(current)
      if (current < steps) schedule(delayFor(current + 1), advance)
      else if (loop)
        schedule(holdMs, () => {
          current = 0
          setStep(0)
          schedule(startDelay, advance)
        })
    }
    schedule(startDelay, advance)

    return () => {
      cancelled = true
      if (timer) clearTimeout(timer)
    }
  }, [inView, reduced, steps, holdMs, startDelay, loop])

  return step
}
