'use client'

import { useEffect, useRef, useState } from 'react'

export default function BlobBackground() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const glowRef = useRef<HTMLDivElement | null>(null)
  const [mounted, setMounted] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const reduceMotion = useRef(true)

  useEffect(() => {
    reduceMotion.current =
      window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches ?? false
    const computeIsMobile = () => {
      const isTouch = window.matchMedia?.('(pointer: coarse)')?.matches ?? false
      const isNarrow = window.innerWidth < 768
      setIsMobile(isTouch || isNarrow)
    }

    computeIsMobile()
    window.addEventListener('resize', computeIsMobile, { passive: true })
    setMounted(true)
    return () => window.removeEventListener('resize', computeIsMobile)
  }, [])

  useEffect(() => {
    if (!mounted || reduceMotion.current) return
    const el = containerRef.current
    const glow = glowRef.current
    if (!el) return

    // Skip on touch devices / narrow screens
    const isTouch = window.matchMedia('(pointer: coarse)').matches
    const isNarrow = window.innerWidth < 768
    if (isTouch || isNarrow) return

    let rafId = 0

    // Cursor state
    let targetX = 0
    let targetY = 0
    let curX = 0
    let curY = 0
    let prevX = 0
    let prevY = 0
    let velocityMag = 0
    let initialized = false
    let hasPointer = false

    // Blob positions (parallax layers — each blob follows at different speed)
    const blobCount = 4
    const blobX = new Float64Array(blobCount)
    const blobY = new Float64Array(blobCount)
    const parallax = [0.06, 0.04, 0.03, 0.08]
    const ease = [0.035, 0.025, 0.018, 0.05]

    const onPointerMove = (e: PointerEvent) => {
      hasPointer = true
      targetX = e.clientX
      targetY = e.clientY
      if (!rafId) rafId = requestAnimationFrame(tick)
    }

    const onPointerLeave = () => { hasPointer = false }

    const tick = () => {
      rafId = 0

      if (!initialized) {
        curX = targetX
        curY = targetY
        initialized = true
      } else {
        prevX = curX
        prevY = curY
        curX += (targetX - curX) * 0.1
        curY += (targetY - curY) * 0.1
      }

      // Velocity for glow intensity
      const dx = curX - prevX
      const dy = curY - prevY
      const rawVel = Math.sqrt(dx * dx + dy * dy)
      velocityMag += (Math.min(rawVel, 40) / 40 - velocityMag) * 0.08

      // Move cursor glow (fixed positioned, viewport coords)
      if (glow) {
        glow.style.left = `${curX}px`
        glow.style.top = `${curY}px`
        glow.style.opacity = `${0.4 + velocityMag * 0.4}`
        glow.style.transform = `translate(-50%, -50%) scale(${1 + velocityMag * 0.25})`
      }

      // Move each blob with parallax
      for (let i = 0; i < blobCount; i++) {
        blobX[i] += (targetX * parallax[i] - blobX[i]) * ease[i]
        blobY[i] += (targetY * parallax[i] - blobY[i]) * ease[i]
        el.style.setProperty(`--bx${i}`, `${blobX[i]}px`)
        el.style.setProperty(`--by${i}`, `${blobY[i]}px`)
      }

      const dist = Math.abs(targetX - curX) + Math.abs(targetY - curY)
      if (dist > 0.3 || hasPointer || velocityMag > 0.005) {
        rafId = requestAnimationFrame(tick)
      }
    }

    window.addEventListener('pointermove', onPointerMove, { passive: true })
    window.addEventListener('pointerleave', onPointerLeave)
    window.addEventListener('blur', onPointerLeave)

    return () => {
      window.removeEventListener('pointermove', onPointerMove)
      window.removeEventListener('pointerleave', onPointerLeave)
      window.removeEventListener('blur', onPointerLeave)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [mounted])

  if (!mounted) return null

  const isAnimated = !reduceMotion.current

  return (
    <>
      {/* Decorative blobs — absolute, scroll with page */}
      <div
        ref={containerRef}
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
        style={{
          '--bx0': '0px', '--by0': '0px',
          '--bx1': '0px', '--by1': '0px',
          '--bx2': '0px', '--by2': '0px',
          '--bx3': '0px', '--by3': '0px',
        } as React.CSSProperties}
      >
        {/* Mobile: fewer + softer blobs */}
        {isMobile ? (
          <>
            <div
              className="absolute"
              style={{
                width: 360,
                height: 360,
                top: 220,
                left: '-35%',
                willChange: 'transform',
              }}
            >
              <div
                className="h-full w-full rounded-full blob blob-float-1"
                style={{
                  background:
                    'radial-gradient(circle at 35% 35%, rgba(99,102,241,0.55), rgba(79,70,229,0.22), transparent 65%)',
                  filter: 'blur(28px)',
                  opacity: 0.55,
                }}
              />
            </div>

            <div
              className="absolute"
              style={{
                width: 340,
                height: 340,
                top: -140,
                right: '-40%',
                willChange: 'transform',
              }}
            >
              <div
                className="h-full w-full rounded-full blob blob-float-2"
                style={{
                  background:
                    'radial-gradient(circle at 45% 40%, rgba(236,72,153,0.35), rgba(139,92,246,0.18), transparent 65%)',
                  filter: 'blur(28px)',
                  opacity: 0.45,
                }}
              />
            </div>
          </>
        ) : (
          <>
            {/* Blob 0 — primary indigo, top-left */}
            <div
              className="absolute"
              style={{
                width: 600,
                height: 600,
                top: 400,
                left: '-8%',
                transform: isAnimated
                  ? 'translate3d(var(--bx0), var(--by0), 0)'
                  : undefined,
                willChange: 'transform',
              }}
            >
              <div
                className="h-full w-full rounded-full blob blob-float-1"
                style={{
                  background:
                    'radial-gradient(circle at 35% 35%, rgba(99,102,241,0.7), rgba(79,70,229,0.3), transparent 65%)',
                }}
              />
            </div>

            {/* Blob 1 — pink/violet, top-right */}
            <div
              className="absolute"
              style={{
                width: 550,
                height: 550,
                top: -190,
                right: '-10%',
                transform: isAnimated
                  ? 'translate3d(var(--bx1), var(--by1), 0)'
                  : undefined,
                willChange: 'transform',
              }}
            >
              <div
                className="h-full w-full rounded-full blob blob-float-2"
                style={{
                  background:
                    'radial-gradient(circle at 45% 40%, rgba(236,72,153,0.55), rgba(139,92,246,0.3), transparent 65%)',
                }}
              />
            </div>

            {/* Blob 2 — cyan/teal, center-left, deeper */}
            <div
              className="absolute"
              style={{
                width: 700,
                height: 700,
                top: -220,
                left: '5%',
                transform: isAnimated
                  ? 'translate3d(var(--bx2), var(--by2), 0)'
                  : undefined,
                willChange: 'transform',
              }}
            >
              <div
                className="h-full w-full rounded-full blob blob-float-3"
                style={{
                  background:
                    'radial-gradient(circle at 40% 40%, rgba(34,211,238,0.25), rgba(99,102,241,0.2), transparent 60%)',
                }}
              />
            </div>

            {/* Blob 3 — accent warm, subtle, mid-right */}
            <div
              className="absolute"
              style={{
                width: 420,
                height: 420,
                top: 100,
                right: '5%',
                transform: isAnimated
                  ? 'translate3d(var(--bx3), var(--by3), 0)'
                  : undefined,
                willChange: 'transform',
              }}
            >
              <div
                className="h-full w-full rounded-full blob blob-float-1"
                style={{
                  background:
                    'radial-gradient(circle at 50% 50%, rgba(251,191,36,0.25), rgba(251,146,60,0.15), transparent 65%)',
                }}
              />
            </div>
          </>
        )}

        {/* Subtle grain texture */}
        <div className="absolute inset-0 opacity-[0.06] bg-grain" />

        {/* Vignette for readability */}
        <div className="absolute inset-0 bg-[radial-gradient(1400px_circle_at_50%_0%,transparent_25%,rgba(255,255,255,0.9)_80%)]" />
      </div>

      {/* Cursor glow — fixed, follows mouse globally, desktop only */}
      {isAnimated && (
        <div
          ref={glowRef}
          aria-hidden="true"
          className="pointer-events-none fixed z-1 hidden md:block rounded-full"
          style={{
            width: 150,
            height: 150,
            opacity: 0,
            transform: 'translate(-50%, -50%)',
            background:
              'radial-gradient(circle at center, rgba(255,255,255,0.7) 0%, rgba(99,102,241,0.2) 30%, rgba(139,92,246,0.08) 55%, transparent 70%)',
            filter: 'blur(5px)',
            willChange: 'left, top, opacity, transform',
          }}
        />
      )}
    </>
  )
}
