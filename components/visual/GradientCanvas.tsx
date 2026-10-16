'use client'

import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'
import { usePrefersReducedMotion } from '@/components/previews/useSequence'

/*
 * Fork's moving gradient, in the spirit of stripe.com's: colours flowing through each other on
 * a WebGL canvas. Each colour is a layer of slow 3D simplex noise mixed over the one before it.
 *
 * - Renders at half resolution (a gradient has no detail to lose) with a little grain against
 *   banding, and only while on screen.
 * - People who asked for reduced motion get one still frame.
 * - The wrapper paints a CSS gradient of the same colours first, so there is never a blank box,
 *   and that is what stays if WebGL is unavailable.
 */

export const FORK_GRADIENT = ['#1D4ED8', '#3B82F6', '#7DD3FC', '#FDBA74', '#F9A8D4']

const VERT = 'attribute vec2 aPos; void main() { gl_Position = vec4(aPos, 0.0, 1.0); }'

// Simplex noise by Ian McEwan & Stefan Gustavson (Ashima Arts), MIT licence.
const SNOISE = `
vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
vec4 permute(vec4 x) { return mod289(((x * 34.0) + 1.0) * x); }
vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }
float snoise(vec3 v) {
  const vec2 C = vec2(1.0 / 6.0, 1.0 / 3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
  vec3 i = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);
  vec3 g = step(x0.yzx, x0.xyz);
  vec3 l = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy;
  vec3 x3 = x0 - D.yyy;
  i = mod289(i);
  vec4 p = permute(permute(permute(
    i.z + vec4(0.0, i1.z, i2.z, 1.0))
    + i.y + vec4(0.0, i1.y, i2.y, 1.0))
    + i.x + vec4(0.0, i1.x, i2.x, 1.0));
  float n_ = 0.142857142857;
  vec3 ns = n_ * D.wyz - D.xzx;
  vec4 j = p - 49.0 * floor(p * ns.z * ns.z);
  vec4 x_ = floor(j * ns.z);
  vec4 y_ = floor(j - 7.0 * x_);
  vec4 x = x_ * ns.x + ns.yyyy;
  vec4 y = y_ * ns.x + ns.yyyy;
  vec4 h = 1.0 - abs(x) - abs(y);
  vec4 b0 = vec4(x.xy, y.xy);
  vec4 b1 = vec4(x.zw, y.zw);
  vec4 s0 = floor(b0) * 2.0 + 1.0;
  vec4 s1 = floor(b1) * 2.0 + 1.0;
  vec4 sh = -step(h, vec4(0.0));
  vec4 a0 = b0.xzyw + s0.xzyw * sh.xxyy;
  vec4 a1 = b1.xzyw + s1.xzyw * sh.zzww;
  vec3 p0 = vec3(a0.xy, h.x);
  vec3 p1 = vec3(a0.zw, h.y);
  vec3 p2 = vec3(a1.xy, h.z);
  vec3 p3 = vec3(a1.zw, h.w);
  vec4 norm = taylorInvSqrt(vec4(dot(p0, p0), dot(p1, p1), dot(p2, p2), dot(p3, p3)));
  p0 *= norm.x; p1 *= norm.y; p2 *= norm.z; p3 *= norm.w;
  vec4 m = max(0.6 - vec4(dot(x0, x0), dot(x1, x1), dot(x2, x2), dot(x3, x3)), 0.0);
  m = m * m;
  return 42.0 * dot(m * m, vec4(dot(p0, x0), dot(p1, x1), dot(p2, x2), dot(p3, x3)));
}`

const FRAG = `
#ifdef GL_FRAGMENT_PRECISION_HIGH
precision highp float;
#else
precision mediump float;
#endif
uniform vec2 uRes;
uniform float uTime;
uniform vec3 uColors[5];
${SNOISE}
void main() {
  vec2 uv = gl_FragCoord.xy / uRes;
  // Aspect-correct, so wide and narrow canvases flow at the same scale.
  vec2 p = vec2(uv.x * uRes.x / uRes.y, uv.y);
  float t = uTime * 0.035;
  // Turn the field onto a diagonal and stretch it along that line: long ribbons, not blobs.
  float a = -0.5;
  p = mat2(cos(a), -sin(a), sin(a), cos(a)) * p;
  p *= vec2(0.5, 1.6);
  p.x += t * 0.8;
  // Domain warp: the ribbons bend and fold as they drift.
  vec2 w = vec2(snoise(vec3(p * 0.9, t)), snoise(vec3(p * 0.9 + 5.2, t + 3.1)));
  p += w * 0.5;
  vec3 col = uColors[0];
  col = mix(col, uColors[1], smoothstep(-0.30, 0.20, snoise(vec3(p + vec2(1.7, 9.2), t * 0.9))));
  col = mix(col, uColors[2], smoothstep(0.00, 0.40, snoise(vec3(p * 1.15 + vec2(-4.1, 2.3), t * 1.1 + 12.0))));
  // The warm colours are accents on a blue brand: they only win where the noise peaks.
  col = mix(col, uColors[3], smoothstep(0.24, 0.54, snoise(vec3(p * 0.9 + vec2(6.3, -3.7), t * 0.8 + 24.0))));
  col = mix(col, uColors[4], smoothstep(0.34, 0.64, snoise(vec3(p * 1.3 + vec2(-8.9, 5.1), t * 1.2 + 36.0))) * 0.85);
  float grain = fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453);
  col += (grain - 0.5) / 96.0;
  gl_FragColor = vec4(col, 1.0);
}`

const hexToRgb = (hex: string) => {
  const v = parseInt(hex.replace('#', ''), 16)
  return [((v >> 16) & 255) / 255, ((v >> 8) & 255) / 255, (v & 255) / 255]
}

export default function GradientCanvas({
  colors = FORK_GRADIENT,
  seed = 0,
  speed = 1,
  className,
}: {
  /** Five colours: the base, then each layer mixed over it. */
  colors?: string[]
  /** Offsets the noise in time, so two canvases on one page never look alike. */
  seed?: number
  speed?: number
  className?: string
}) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const reduced = usePrefersReducedMotion()
  const [painted, setPainted] = useState(false)
  const palette = colors.join(',')

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const gl = canvas.getContext('webgl', { alpha: false, antialias: false, depth: false, stencil: false, premultipliedAlpha: false, powerPreference: 'low-power' })
    if (!gl) return

    const compile = (type: number, src: string) => {
      const s = gl.createShader(type)
      if (!s) return null
      gl.shaderSource(s, src)
      gl.compileShader(s)
      return gl.getShaderParameter(s, gl.COMPILE_STATUS) ? s : null
    }
    const vs = compile(gl.VERTEX_SHADER, VERT)
    const fs = compile(gl.FRAGMENT_SHADER, FRAG)
    const prog = gl.createProgram()
    if (!vs || !fs || !prog) return
    gl.attachShader(prog, vs)
    gl.attachShader(prog, fs)
    gl.linkProgram(prog)
    if (!gl.getProgramParameter(prog, gl.LINK_STATUS)) return
    gl.useProgram(prog)

    // One triangle that covers the whole viewport.
    const buf = gl.createBuffer()
    gl.bindBuffer(gl.ARRAY_BUFFER, buf)
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([-1, -1, 3, -1, -1, 3]), gl.STATIC_DRAW)
    const aPos = gl.getAttribLocation(prog, 'aPos')
    gl.enableVertexAttribArray(aPos)
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0)

    const uRes = gl.getUniformLocation(prog, 'uRes')
    const uTime = gl.getUniformLocation(prog, 'uTime')
    gl.uniform3fv(gl.getUniformLocation(prog, 'uColors'), new Float32Array(palette.split(',').flatMap(hexToRgb)))

    const fit = () => {
      const scale = Math.min(window.devicePixelRatio || 1, 2) * 0.5
      const w = Math.max(1, Math.round(canvas.clientWidth * scale))
      const h = Math.max(1, Math.round(canvas.clientHeight * scale))
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w
        canvas.height = h
        gl.viewport(0, 0, w, h)
      }
      gl.uniform2f(uRes, w, h)
    }

    const startedAt = performance.now()
    let raf = 0
    let onScreen = false
    let first = true
    const draw = (now: number) => {
      fit()
      gl.uniform1f(uTime, seed + ((now - startedAt) / 1000) * speed)
      gl.drawArrays(gl.TRIANGLES, 0, 3)
      if (first) {
        first = false
        setPainted(true)
      }
    }
    const loop = (now: number) => {
      draw(now)
      raf = onScreen && !reduced ? requestAnimationFrame(loop) : 0
    }
    const kick = () => {
      if (!raf) raf = requestAnimationFrame(loop)
    }

    const io = new IntersectionObserver(([entry]) => {
      onScreen = entry.isIntersecting
      if (onScreen) kick()
    })
    io.observe(canvas)
    // A still frame still has to follow the box when it resizes.
    const ro = new ResizeObserver(() => {
      if (reduced || !onScreen) draw(performance.now())
    })
    ro.observe(canvas)
    draw(startedAt)

    // No loseContext() here: strict mode re-runs this effect on the same canvas, and a lost
    // context cannot be used again. The context goes with the canvas when it unmounts.
    return () => {
      cancelAnimationFrame(raf)
      io.disconnect()
      ro.disconnect()
      gl.deleteBuffer(buf)
      gl.deleteProgram(prog)
      gl.deleteShader(vs)
      gl.deleteShader(fs)
    }
  }, [palette, seed, speed, reduced])

  // The still version of the same palette, weighted to the blues like the shader.
  const at = [0, 38, 66, 86, 100]
  const stops = colors.map((c, i) => `${c} ${at[i] ?? Math.round((i / (colors.length - 1)) * 100)}%`).join(', ')
  return (
    <div aria-hidden="true" className={cn('relative overflow-hidden', className)} style={{ background: `linear-gradient(115deg, ${stops})` }}>
      <canvas ref={canvasRef} className={cn('absolute inset-0 h-full w-full transition-opacity duration-700', painted ? 'opacity-100' : 'opacity-0')} />
    </div>
  )
}
