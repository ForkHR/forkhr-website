// Locations → Links: a link that skips the page and opens the shop's Google review form.
// The card is the web's link sheet (frontend/src/pages/link/LinkSheet.jsx): "What it opens" is
// "The Google review form" for a review link (a filled star in the list), "Share it" holds the QR
// code, the short address, "Copy link" and "Download QR code"; "Last 30 days" counts opens, "by QR
// code" and "by the link", a count a day and nothing about who. The receipt's words are the
// café's own, the same for every customer (Google's rules: never ask only happy customers).
// No Google screen, logo or colours are drawn.
const { icon, page } = require('../kit.cjs')

const BRAND = '#1F6F5C'
const STAR = '<path d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z"/>'
const COPY = '<rect width="14" height="14" x="8" y="8" rx="2"/><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"/>'
const DOWNLOAD = '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m7 10 5 5 5-5"/><path d="M12 15V3"/>'
const svgIcon = (paths, { size = 18, stroke = 2.2, fill = 'none', color = 'currentColor' } = {}) =>
  `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="${fill}" stroke="${color}" stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round">${paths}</svg>`

// A drawn QR code (decorative): 17 × 17 cells, fill = ink.
const qrCells = (size, seedStart, ink = '#1B1A19') => {
  const n = 17
  const c = size / n
  let seed = seedStart
  const out = []
  for (let i = 0; i < n * n; i += 1) {
    seed = (seed * 1103515245 + 12345) & 0x7fffffff
    const x = i % n
    const y = Math.floor(i / n)
    const inFinder = (x < 8 && y < 8) || (x > n - 9 && y < 8) || (x < 8 && y > n - 9)
    if (seed % 5 < 2 && !inFinder) out.push(`<rect x="${(x * c).toFixed(2)}" y="${(y * c).toFixed(2)}" width="${c.toFixed(2)}" height="${c.toFixed(2)}"/>`)
  }
  const finder = (fx, fy) => `<rect x="${fx * c}" y="${fy * c}" width="${c * 7}" height="${c * 7}"/><rect x="${(fx + 1) * c}" y="${(fy + 1) * c}" width="${c * 5}" height="${c * 5}" fill="#fff"/><rect x="${(fx + 2) * c}" y="${(fy + 2) * c}" width="${c * 3}" height="${c * 3}"/>`
  return `<g fill="${ink}"><rect width="${size}" height="${size}" fill="#fff"/>${out.join('')}${finder(0, 0)}${finder(n - 7, 0)}${finder(0, n - 7)}</g>`
}

// Seen from above: the café's floor, a round table, a flat white, a croissant and the receipt.
const scene = `
<svg viewBox="0 0 720 628" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <pattern id="floor" width="72" height="72" patternUnits="userSpaceOnUse">
      <rect width="72" height="72" fill="#E4DCD1"/>
      <rect width="36" height="36" fill="#EDE7DE"/>
      <rect x="36" y="36" width="36" height="36" fill="#EDE7DE"/>
    </pattern>
  </defs>
  <rect width="720" height="628" fill="url(#floor)"/>

  <!-- Chair seats peeking out -->
  <circle cx="96" cy="120" r="70" fill="#B98E64"/>
  <circle cx="96" cy="120" r="56" fill="#C79D72"/>
  <circle cx="640" cy="560" r="74" fill="#B98E64"/>
  <circle cx="640" cy="560" r="60" fill="#C79D72"/>

  <!-- Table -->
  <circle cx="368" cy="322" r="262" fill="#CFC5B8"/>
  <circle cx="360" cy="314" r="262" fill="#F4EFE8"/>
  <circle cx="360" cy="314" r="262" fill="none" stroke="#E3DACF" stroke-width="6"/>

  <!-- Flat white, from above -->
  <circle cx="226" cy="214" r="78" fill="#FFFFFF" stroke="#E6E0D8" stroke-width="3"/>
  <circle cx="226" cy="214" r="54" fill="#FFFFFF" stroke="#E6E0D8" stroke-width="3"/>
  <path d="M276 196 h34 a10 10 0 0 1 0 20 h-34" fill="#FFFFFF" stroke="#E6E0D8" stroke-width="3"/>
  <circle cx="226" cy="214" r="44" fill="#B98A5E"/>
  <path d="M226 186 c-18 6 -22 24 -12 36 c6 8 18 8 24 0 c10 -12 6 -30 -12 -36 Z" fill="#F3E3CF"/>
  <path d="M226 196 c-8 4 -10 14 -4 20 M226 196 c8 4 10 14 4 20" stroke="#B98A5E" stroke-width="3" fill="none"/>
  <path d="M226 230 v18" stroke="#F3E3CF" stroke-width="5" stroke-linecap="round"/>

  <!-- Croissant on a plate -->
  <circle cx="232" cy="426" r="74" fill="#FFFFFF" stroke="#E6E0D8" stroke-width="3"/>
  <g transform="translate(232 430) rotate(-14)">
    <path d="M-58 14 C-62 -2 -50 -10 -40 -6 L-30 4 Z" fill="#C98E4A"/>
    <path d="M58 14 C62 -2 50 -10 40 -6 L30 4 Z" fill="#C98E4A"/>
    <path d="M-46 -2 C-46 -22 -26 -30 -16 -26 L-8 8 C-24 12 -38 10 -46 -2 Z" fill="#D9A55E"/>
    <path d="M46 -2 C46 -22 26 -30 16 -26 L8 8 C24 12 38 10 46 -2 Z" fill="#D9A55E"/>
    <path d="M-20 -28 C-12 -40 12 -40 20 -28 L12 10 C4 13 -4 13 -12 10 Z" fill="#E3B36D"/>
    <path d="M-14 -22 C-6 -28 6 -28 14 -22 M-40 -6 C-34 -14 -26 -18 -20 -18 M40 -6 C34 -14 26 -18 20 -18" fill="none" stroke="#C58A45" stroke-width="3" stroke-linecap="round"/>
  </g>

  <!-- The receipt, lying on the table -->
  <g transform="translate(372 96) rotate(5)">
    <path d="M0 0 H232 V380 l-11.6 10 l-11.6 -10 l-11.6 10 l-11.6 -10 l-11.6 10 l-11.6 -10 l-11.6 10 l-11.6 -10 l-11.6 10 l-11.6 -10 l-11.6 10 l-11.6 -10 l-11.6 10 l-11.6 -10 l-11.6 10 l-11.6 -10 l-11.6 10 l-11.6 -10 l-11.6 10 l-11.6 -10 l-11.6 10 Z" fill="#00000010" transform="translate(6 6)"/>
    <path d="M0 0 H232 V380 l-11.6 10 l-11.6 -10 l-11.6 10 l-11.6 -10 l-11.6 10 l-11.6 -10 l-11.6 10 l-11.6 -10 l-11.6 10 l-11.6 -10 l-11.6 10 l-11.6 -10 l-11.6 10 l-11.6 -10 l-11.6 10 l-11.6 -10 l-11.6 10 l-11.6 -10 l-11.6 10 l-11.6 -10 l-11.6 10 Z" fill="#FFFFFF"/>
    <g font-family="Bricolage" fill="#1B1A19">
      <text x="116" y="38" text-anchor="middle" font-size="19" font-weight="700">Juniper Coffee</text>
      <text x="116" y="60" text-anchor="middle" font-size="14.5" font-weight="500" fill="#77726C">Main St · Nov 12, 8:41 AM</text>
      <path d="M18 76 H214" stroke="#D4D1CC" stroke-width="2" stroke-dasharray="4 5"/>
      <g font-size="15.5" font-weight="500">
        <text x="18" y="102">Flat white</text><text x="214" y="102" text-anchor="end">4.25</text>
        <text x="18" y="126">Croissant</text><text x="214" y="126" text-anchor="end">3.75</text>
      </g>
      <text x="18" y="156" font-size="16" font-weight="700">Total</text><text x="214" y="156" text-anchor="end" font-size="16" font-weight="700">$8.00</text>
      <path d="M18 172 H214" stroke="#D4D1CC" stroke-width="2" stroke-dasharray="4 5"/>
      <text x="116" y="200" text-anchor="middle" font-size="16" font-weight="680">How was your visit?</text>
      <text x="116" y="220" text-anchor="middle" font-size="15" font-weight="500" fill="#433F3B">Leave us a review</text>
      <g transform="translate(56 236)">${qrCells(120, 61)}</g>
    </g>
  </g>
</svg>`

const DAYS = [1, 3, 2, 4, 2, 3, 5, 2, 1, 4, 3, 2, 3, 6, 4, 2, 3, 1, 4, 3, 2, 5, 3, 2, 4, 3, 2, 5, 4, 3]

const body = `
<div class="scene" style="left:57px;top:80px;width:720px;height:628px">${scene}</div>

<div class="card" style="left:830px;top:84px;width:512px;padding:32px 36px 30px">
  <div style="display:flex;align-items:center;gap:16px">
    <span class="mark">${svgIcon(STAR, { size: 24, stroke: 1.6, fill: 'currentColor' })}</span>
    <div style="min-width:0">
      <div class="title" style="font-size:29px">Receipt QR</div>
      <div class="sub" style="margin-top:4px;font-size:18px">Main St · Opens the Google review form</div>
    </div>
  </div>

  <div class="sec">Share it</div>
  <div class="share">
    <span class="qr"><svg width="124" height="124" viewBox="0 0 124 124">${qrCells(124, 61)}</svg></span>
    <div style="flex:1;min-width:0">
      <div class="url">app.forkhr.com/l/r4vn8tq</div>
      <div class="hint">The address and the QR code open the same thing and are counted apart.</div>
      <div class="btns">
        <span class="ob">${svgIcon(COPY, { size: 17 })} Copy link</span>
        <span class="ob">${svgIcon(DOWNLOAD, { size: 17 })} Download QR code</span>
      </div>
    </div>
  </div>

  <div class="sec">Last 30 days</div>
  <div class="figs">
    <div><b>88</b><span>opens</span></div>
    <div><b>81</b><span>by QR code</span></div>
    <div><b>7</b><span>by the link</span></div>
  </div>
  <div class="days">${DAYS.map((d) => `<i style="height:${8 + d * 7}px"></i>`).join('')}</div>
</div>
`

const css = `
.mark { width:52px; height:52px; border-radius:15px; background:var(--warm-100); color:var(--ink-2); display:inline-flex; align-items:center; justify-content:center; flex-shrink:0; }
.sec { margin-top:22px; padding-top:18px; border-top:1.5px solid var(--hair); font-size:19px; font-weight:650; }
.share { margin-top:12px; display:flex; gap:20px; align-items:center; }
.qr { display:inline-flex; padding:8px; border-radius:16px; border:1.5px solid var(--warm-200); background:#fff; flex-shrink:0; }
.url { font-size:18px; font-weight:600; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
.hint { margin-top:4px; font-size:15px; line-height:1.3; color:var(--muted); }
.btns { margin-top:12px; display:flex; flex-wrap:wrap; gap:8px; }
.ob { height:36px; padding:0 13px; border-radius:99px; border:1.5px solid var(--warm-200); display:inline-flex; align-items:center; gap:7px; font-size:15px; font-weight:600; color:var(--ink-2); white-space:nowrap; }
.figs { margin-top:12px; display:grid; grid-template-columns:repeat(3, 1fr); gap:10px; }
.figs div { background:#F4F2EF; border-radius:16px; padding:12px 16px; }
.figs b { display:block; font-size:30px; font-weight:680; letter-spacing:-0.01em; line-height:1.1; }
.figs span { font-size:15.5px; color:var(--muted); font-weight:500; }
.days { margin-top:14px; height:52px; display:flex; align-items:flex-end; gap:4px; }
.days i { flex:1; border-radius:3px; background:${BRAND}; opacity:0.85; display:block; }
`

module.exports = () => page('Straight to your Google review form', body, css)
