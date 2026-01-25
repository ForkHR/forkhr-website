'use client'

import { useEffect, useMemo, useRef, useState } from 'react'

function prefersReducedMotion(): boolean {
  if (typeof window === 'undefined') return true
  return window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false
}

export default function BlobBackground() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [mounted, setMounted] = useState(false)

  const reduceMotion = useMemo(() => {
    if (typeof window === 'undefined') return true
    return prefersReducedMotion()
  }, [])

  useEffect(() => {
    setMounted(true)
  }, [])

  useEffect(() => {
    if (reduceMotion) return
    const el = containerRef.current
    if (!el) return

    let rafId = 0
    let targetX = 0
    let targetY = 0
    let currentX = 0
    let currentY = 0
    let hasPointer = false
    let hasLastClient = false
    let lastClientX = 0
    let lastClientY = 0
    let initialized = false

    const updateTargetFromLastClient = () => {
      if (!hasLastClient) return
      const rect = el.getBoundingClientRect()
      targetX = lastClientX - rect.left
      targetY = lastClientY - rect.top
      if (!rafId) rafId = requestAnimationFrame(tick)
    }

    const onPointerMove = (e: PointerEvent) => {
      hasPointer = true
      hasLastClient = true
      lastClientX = e.clientX
      lastClientY = e.clientY
      updateTargetFromLastClient()
    }

    const onPointerLeave = () => {
      hasPointer = false
    }

    const onVisibilityChange = () => {
      // When returning to the tab, rects can shift; resync to last pointer.
      if (document.visibilityState === 'visible') updateTargetFromLastClient()
    }

    const tick = () => {
      rafId = 0

      if (!initialized) {
        currentX = targetX
        currentY = targetY
        initialized = true
      } else {
        // smooth follow
        currentX += (targetX - currentX) * 0.14
        currentY += (targetY - currentY) * 0.14
      }

      el.style.setProperty('--cursor-x', `${currentX}px`)
      el.style.setProperty('--cursor-y', `${currentY}px`)

      const dx = Math.abs(targetX - currentX)
      const dy = Math.abs(targetY - currentY)
      // Keep animating while we're converging, or while the pointer is active.
      if (dx + dy > 0.5 || hasPointer) rafId = requestAnimationFrame(tick)
    }

    window.addEventListener('pointermove', onPointerMove, { passive: true })
    window.addEventListener('pointerleave', onPointerLeave)
    window.addEventListener('blur', onPointerLeave)
    window.addEventListener('scroll', updateTargetFromLastClient, { passive: true })
    window.addEventListener('resize', updateTargetFromLastClient)
    document.addEventListener('visibilitychange', onVisibilityChange)
    return () => {
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('pointerleave', onPointerLeave)
      window.removeEventListener('blur', onPointerLeave)
      window.removeEventListener('scroll', updateTargetFromLastClient)
      window.removeEventListener('resize', updateTargetFromLastClient)
      document.removeEventListener('visibilitychange', onVisibilityChange)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [reduceMotion])

  // Avoid hydration mismatch from matchMedia-driven motion preferences.
  if (!mounted) return null

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      style={
        {
          // default center for cursor glow (if no pointer yet)
          ['--cursor-x' as never]: '50%',
          ['--cursor-y' as never]: '25%',
        } as React.CSSProperties
      }
    >
      {/* Ambient gradient blobs */}
      <div className="absolute -top-50 left-[-10%] lg:h-[520px] lg:w-[520px] blob blob-float-1 rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(99,102,241,0.85),rgba(34,211,238,0.35),transparent_65%)]" />
      <div className="absolute top-156 right-[-12%] lg:h-[560px] lg:w-[560px] blob blob-float-2 rounded-full bg-[radial-gradient(circle_at_40%_40%,rgba(236,72,153,0.70),rgba(99,102,241,0.35),transparent_65%)]" />
      <div className="absolute top-164 left-[10%] lg:h-[640px] lg:w-[640px] blob blob-float-3 rounded-full bg-[radial-gradient(circle_at_35%_35%,rgba(34,211,238,0.60),rgba(99,102,241,0.25),transparent_65%)]" />

      {/* Cursor-follow glow (subtle, satisfying) */}
      {!reduceMotion && (
        <div
          className="absolute h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 blob opacity-60"
          style={{
            left: 'var(--cursor-x)',
            top: 'var(--cursor-y)',
            background:
              'radial-gradient(circle at 40% 40%, rgba(255,255,255,0.65), rgba(99,102,241,0.18), rgba(34,211,238,0.10), transparent 60%)',
          }}
        />
      )}

      {/* Very light grain/noise layer for “glass” vibes */}
      <div className="absolute inset-0 opacity-[0.08] bg-grain" />

      {/* Soft vignette to keep content readable */}
      <div className="absolute inset-0 bg-[radial-gradient(1200px_circle_at_50%_0%,transparent_30%,rgba(255,255,255,0.85)_85%)]" />
    </div>
  )
}
