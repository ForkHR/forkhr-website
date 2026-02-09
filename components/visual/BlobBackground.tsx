'use client'

import { usePathname } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'

export default function BlobBackground() {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [mounted, setMounted] = useState(false)
  const [isMobile, setIsMobile] = useState(false)
  const reduceMotion = useRef(true)

  const pathname = usePathname()

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

  // Smooth mouse parallax — desktop only
  useEffect(() => {
    if (!mounted || reduceMotion.current) return
    const el = containerRef.current
    if (!el) return

    const isTouch = window.matchMedia('(pointer: coarse)').matches
    if (isTouch) return

    let rafId = 0
    let mx = 0
    let my = 0
    let sx = 0
    let sy = 0

    const onPointerMove = (e: PointerEvent) => {
      mx = (e.clientX / window.innerWidth - 0.5) * 2
      my = (e.clientY / window.innerHeight - 0.5) * 2
      if (!rafId) rafId = requestAnimationFrame(tick)
    }

    const tick = () => {
      rafId = 0
      sx += (mx - sx) * 0.025
      sy += (my - sy) * 0.025

      el.style.setProperty('--mx', `${sx * 30}px`)
      el.style.setProperty('--my', `${sy * 20}px`)

      if (Math.abs(mx - sx) > 0.001 || Math.abs(my - sy) > 0.001) {
        rafId = requestAnimationFrame(tick)
      }
    }

    window.addEventListener('pointermove', onPointerMove, { passive: true })
    return () => {
      window.removeEventListener('pointermove', onPointerMove)
      if (rafId) cancelAnimationFrame(rafId)
    }
  }, [mounted])

  if (!mounted) return null

  const isAnimated = !reduceMotion.current

  return (
    pathname === '/privacy-policy' || pathname === '/terms-of-service' ? null :
    <div
      ref={containerRef}
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
      style={{
        '--mx': '0px',
        '--my': '0px',
      } as React.CSSProperties}
    >
      {isMobile ? (
        <>
          {/* Mobile — two soft washes, CSS animation only */}
          <div
            className="absolute rounded-full gradient-drift-1"
            style={{
              width: 420,
              height: 420,
              top: 120,
              left: '-30%',
              background:
                'radial-gradient(circle at 40% 40%, rgba(99,102,241,0.4), rgba(79,70,229,0.15), transparent 70%)',
              filter: 'blur(60px)',
            }}
          />
          <div
            className="absolute rounded-full gradient-drift-2"
            style={{
              width: 380,
              height: 380,
              top: -100,
              right: '-25%',
              background:
                'radial-gradient(circle at 50% 45%, rgba(139,92,246,0.3), rgba(124,58,237,0.1), transparent 70%)',
              filter: 'blur(60px)',
            }}
          />
        </>
      ) : (
        <>
          {/* Blob 0 — indigo, top-left area */}
          <div
            className="absolute rounded-full gradient-drift-1"
            style={{
              width: 650,
              height: 650,
              top: 200,
              left: '-5%',
              background:
                'radial-gradient(circle at 35% 35%, rgba(99,102,241,0.45), rgba(79,70,229,0.18), transparent 70%)',
              filter: 'blur(60px)',
              transform: isAnimated
                ? 'translate3d(var(--mx), var(--my), 0)'
                : undefined,
              willChange: 'transform',
            }}
          />

          {/* Blob 1 — violet/purple, top-right */}
          <div
            className="absolute rounded-full gradient-drift-2"
            style={{
              width: 580,
              height: 580,
              top: -150,
              right: '-8%',
              background:
                'radial-gradient(circle at 50% 40%, rgba(139,92,246,0.35), rgba(124,58,237,0.12), transparent 70%)',
              filter: 'blur(70px)',
              transform: isAnimated
                ? 'translate3d(calc(var(--mx) * -0.7), calc(var(--my) * -0.5), 0)'
                : undefined,
              willChange: 'transform',
            }}
          />

          {/* Blob 2 — blue, mid-center, softer */}
          <div
            className="absolute rounded-full gradient-drift-3"
            style={{
              width: 750,
              height: 750,
              top: -180,
              left: '10%',
              background:
                'radial-gradient(circle at 45% 45%, rgba(59,130,246,0.18), rgba(99,102,241,0.1), transparent 65%)',
              filter: 'blur(80px)',
              transform: isAnimated
                ? 'translate3d(calc(var(--mx) * 0.5), calc(var(--my) * 0.6), 0)'
                : undefined,
              willChange: 'transform',
            }}
          />

          {/* Blob 3 — warm pink accent, subtle */}
          <div
            className="absolute rounded-full gradient-drift-1"
            style={{
              width: 400,
              height: 400,
              top: 60,
              right: '8%',
              background:
                'radial-gradient(circle at 50% 50%, rgba(244,114,182,0.18), rgba(251,146,60,0.08), transparent 70%)',
              filter: 'blur(70px)',
              transform: isAnimated
                ? 'translate3d(calc(var(--mx) * -0.4), calc(var(--my) * 0.5), 0)'
                : undefined,
              willChange: 'transform',
            }}
          />
        </>
      )}

      {/* Grain */}
      <div className="absolute inset-0 opacity-[0.04] bg-grain" />

      {/* Soft vignette for readability */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_1200px_900px_at_50%_0%,transparent_30%,rgba(255,255,255,0.85)_80%)]" />
    </div>
  )
}
