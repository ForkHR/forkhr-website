// Locations → Links: a QR stand on the Main St counter opens Juniper Coffee's link page.
// The phone draws the public page as the API draws it (backend/utils/linkPageHtml.js): a round
// mark in the brand colour, the company name, the tagline, the location's name over its address
// with the hours pill ("Open today 7 AM – 6 PM", linkRules.hoursToday), then the buttons as pills,
// the first filled in the brand colour; the Wi-Fi card ("Wi-Fi", the network, "Password"); the
// footer "Made with Fork". Button words are linkRules.BUTTON_KINDS: "Review us on Google",
// "Get directions", "Call us", "We're hiring". The stand's own words are the café's.
const { icon, page } = require('../kit.cjs')

const BRAND = '#1F6F5C'

// A small drawn QR code (decorative), in SVG units, 13 × 13 cells.
const qr = (x, y, size, ink = '#1B1A19') => {
  const n = 13
  const c = size / n
  let seed = 23
  const cells = []
  for (let i = 0; i < n * n; i += 1) {
    seed = (seed * 1103515245 + 12345) & 0x7fffffff
    const cx = i % n
    const cy = Math.floor(i / n)
    const inFinder = (cx < 4 && cy < 4) || (cx > n - 5 && cy < 4) || (cx < 4 && cy > n - 5)
    if (seed % 5 < 2 && !inFinder) cells.push(`<rect x="${(cx * c).toFixed(2)}" y="${(cy * c).toFixed(2)}" width="${c.toFixed(2)}" height="${c.toFixed(2)}"/>`)
  }
  const finder = (fx, fy) => `<rect x="${fx * c}" y="${fy * c}" width="${c * 3}" height="${c * 3}"/><rect x="${(fx + 0.6) * c}" y="${(fy + 0.6) * c}" width="${c * 1.8}" height="${c * 1.8}" fill="#fff"/><rect x="${(fx + 1) * c}" y="${(fy + 1) * c}" width="${c}" height="${c}"/>`
  return `<g transform="translate(${x} ${y})" fill="${ink}"><rect width="${size}" height="${size}" fill="#fff"/>${cells.join('')}${finder(0, 0)}${finder(n - 3, 0)}${finder(0, n - 3)}</g>`
}

const bag = (x, y) => `
  <g transform="translate(${x} ${y})">
    <path d="M4 10 L10 0 H50 L56 10 V78 a4 4 0 0 1 -4 4 H8 a4 4 0 0 1 -4 -4 Z" fill="#C7B39A"/>
    <path d="M10 0 L14 10 H46 L50 0" fill="#B49E83"/>
    <rect x="12" y="30" width="36" height="30" rx="4" fill="#F7F2EA"/>
    <circle cx="30" cy="45" r="8" fill="${BRAND}"/>
  </g>`

const cup = (x, y) => `
  <g transform="translate(${x} ${y})">
    <path d="M0 0 h40 l-5 52 h-30 Z" fill="#FFFFFF"/>
    <path d="M2.5 18 h35 l-1.8 18 h-31.4 Z" fill="${BRAND}" opacity="0.85"/>
  </g>`

const scene = `
<svg viewBox="0 0 752 628" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <pattern id="tiles" width="48" height="24" patternUnits="userSpaceOnUse">
      <rect width="48" height="24" fill="#E3DCD2"/>
      <rect x="1.5" y="1.5" width="45" height="21" rx="2.5" fill="#F1ECE5"/>
    </pattern>
    <radialGradient id="glow" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#FFE7A0" stop-opacity="0.75"/>
      <stop offset="1" stop-color="#FFE7A0" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="752" height="628" fill="#EAE4DD"/>
  <rect y="210" width="752" height="236" fill="url(#tiles)"/>

  <!-- Shelf of coffee bags -->
  <rect x="56" y="186" width="300" height="10" rx="4" fill="#B79C7E"/>
  <rect x="80" y="196" width="8" height="18" fill="#9C8368"/><rect x="320" y="196" width="8" height="18" fill="#9C8368"/>
  ${bag(70, 104)}${bag(138, 104)}${bag(206, 104)}
  <g transform="translate(286 102)"><path d="M22 50 C10 36 4 22 10 8 C18 22 22 34 24 50 Z" fill="#5E8C6A"/><path d="M26 50 C30 30 40 16 52 10 C50 28 40 40 28 52 Z" fill="#4C7A59"/><path d="M24 52 C20 34 22 18 30 2 C34 20 32 36 28 52 Z" fill="#6F9E7A"/><path d="M6 50 h44 l-5 34 h-34 Z" fill="#C96F4A"/><rect x="3" y="48" width="50" height="9" rx="3" fill="#B5603D"/></g>

  <!-- Pendant lamps -->
  <circle cx="474" cy="100" r="120" fill="url(#glow)"/>
  <rect x="473" y="0" width="2.5" height="52" fill="#2D2926"/>
  <path d="M446 80 C446 60 458 50 474 50 C490 50 502 60 502 80 Z" fill="#2D2926"/>
  <ellipse cx="474" cy="82" rx="9" ry="5" fill="#FFE7A0"/>
  <circle cx="650" cy="80" r="90" fill="url(#glow)" opacity="0.7"/>
  <rect x="649" y="0" width="2.5" height="34" fill="#2D2926"/>
  <path d="M626 60 C626 42 636 32 650 32 C664 32 674 42 674 60 Z" fill="#2D2926"/>
  <ellipse cx="650" cy="62" rx="8" ry="4.5" fill="#FFE7A0"/>

  <!-- Register tablet on its stand -->
  <rect x="70" y="270" width="190" height="136" rx="14" fill="#2D2926"/>
  <rect x="80" y="280" width="170" height="116" rx="7" fill="#F7F5F2"/>
  <g fill="#E4E0DA">
    <rect x="92" y="292" width="68" height="40" rx="5"/><rect x="170" y="292" width="68" height="40" rx="5"/>
    <rect x="92" y="340" width="68" height="40" rx="5"/><rect x="170" y="340" width="68" height="40" rx="5"/>
  </g>
  <rect x="152" y="406" width="26" height="30" rx="5" fill="#3A3531"/>
  <ellipse cx="165" cy="440" rx="50" ry="6" fill="#C8BCAD"/>

  <!-- Cups, stacked -->
  ${cup(294, 384)}
  <path d="M290 380 h48 l-1.5 6 h-45 Z" fill="#EDE7DF"/>
  ${cup(346, 384)}
  <path d="M342 380 h48 l-1.5 6 h-45 Z" fill="#EDE7DF"/>

  <!-- Pastry dome -->
  <ellipse cx="636" cy="438" rx="78" ry="7" fill="#C8BCAD"/>
  <rect x="566" y="426" width="140" height="12" rx="6" fill="#A9A49E"/>
  <path d="M584 404 c8 -22 30 -22 38 0 Z" fill="#D9A55E"/><path d="M622 404 c8 -22 30 -22 38 0 Z" fill="#CF9A52"/><path d="M600 404 c10 -26 36 -26 46 0 Z" fill="#E0B06A"/>
  <rect x="580" y="404" width="112" height="22" rx="4" fill="#E8D7BC"/>
  <path d="M572 426 C572 344 700 344 700 426 Z" fill="#FFFFFF" opacity="0.38" stroke="#FFFFFF" stroke-width="3"/>
  <circle cx="636" cy="352" r="7" fill="#FFFFFF"/>

  <!-- QR stand: acrylic table tent on the counter -->
  <ellipse cx="490" cy="442" rx="84" ry="7" fill="#C8BCAD"/>
  <path d="M414 438 L428 236 H552 L566 438 Z" fill="#FFFFFF" opacity="0.5"/>
  <path d="M422 432 L434 244 H546 L558 432 Z" fill="#FFFFFF" stroke="#DAD3CA" stroke-width="2"/>
  <text x="490" y="282" text-anchor="middle" font-family="Bricolage" font-size="17" font-weight="680" fill="#1B1A19">Scan for Wi-Fi,</text>
  <text x="490" y="304" text-anchor="middle" font-family="Bricolage" font-size="17" font-weight="680" fill="#1B1A19">reviews &amp; more</text>
  ${qr(440, 318, 100)}
  <rect x="426" y="434" width="128" height="6" rx="3" fill="#E9E4DD"/>

  <!-- Counter -->
  <rect y="440" width="752" height="22" fill="#DDD4C9"/>
  <rect y="440" width="752" height="5" fill="#E8E1D7"/>
  <rect y="462" width="752" height="166" fill="#D3C7B8"/>
  <g stroke="#C9BCAB" stroke-width="3">
    ${Array.from({ length: 16 }, (_, k) => `<path d="M${22 + k * 48} 474 V628"/>`).join('')}
  </g>
</svg>`

const body = `
<div class="scene" style="left:57px;top:80px;width:752px;height:628px">${scene}</div>

<div class="abs connector" style="left:832px;top:372px">
  <span class="pill white">${icon('qr', { size: 18, stroke: 2.2 })} Scan</span>
  <svg width="120" height="24" viewBox="0 0 120 24"><path d="M4 12 H104" stroke="#2563EB" stroke-width="4" stroke-linecap="round" stroke-dasharray="1 12"/><path d="M98 3 L110 12 L98 21" fill="none" stroke="#2563EB" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>
</div>

<div class="phone" style="left:1030px;top:62px;width:316px;height:664px">
  <div class="screen lp">
    <div class="island"></div>
    <div class="mark">J</div>
    <div class="h1">Juniper Coffee</div>
    <div class="tag">Coffee roasted in Brooklyn</div>
    <div class="place"><b>Main St</b>214 Main St, Brooklyn, NY 11201<br><span class="hours">Open today 7 AM – 6 PM</span></div>
    <div class="btns">
      <span class="btn first">Review us on Google</span>
      <span class="btn">Get directions</span>
      <span class="btn">Call us</span>
      <span class="btn">We're hiring</span>
    </div>
    <div class="wifi"><small>Wi-Fi</small><b>Juniper Guest</b><small style="margin-top:8px">Password</small><code>flatwhite214</code></div>
    <div class="made">Made with Fork</div>
  </div>
</div>
`

const css = `
.connector { display:flex; flex-direction:column; align-items:center; gap:14px; width:190px; }
.connector .pill { height:38px; font-size:16px; padding:0 16px; }
.connector .pill svg { width:18px; height:18px; }
.screen.lp { background:#F6F6F7; display:flex; flex-direction:column; align-items:center; padding:58px 18px 0; }
.mark { width:62px; height:62px; border-radius:99px; background:${BRAND}; color:#fff; display:flex; align-items:center; justify-content:center; font-size:27px; font-weight:650; flex-shrink:0; }
.h1 { margin-top:11px; font-size:22px; font-weight:650; letter-spacing:-0.01em; }
.tag { margin-top:2px; font-size:15px; color:#6B6B70; }
.place { margin-top:11px; text-align:center; font-size:14.5px; color:#6B6B70; line-height:1.35; }
.place b { display:block; color:#111; font-size:16px; font-weight:650; }
.hours { display:inline-block; margin-top:7px; padding:3px 11px; border-radius:99px; background:#ECECEE; font-size:14px; color:#111; font-weight:520; }
.btns { width:100%; margin-top:16px; display:flex; flex-direction:column; gap:8px; }
.btn { height:44px; border-radius:99px; border:1.5px solid #E2E2E5; background:#fff; display:flex; align-items:center; justify-content:center; font-size:16px; font-weight:620; color:#111; }
.btn.first { background:${BRAND}; border-color:${BRAND}; color:#fff; }
.wifi { width:100%; margin-top:12px; padding:11px 16px 12px; border-radius:16px; border:1.5px solid #E2E2E5; background:#fff; }
.wifi small { display:block; font-size:13.5px; color:#6B6B70; }
.wifi b { display:block; font-size:15.5px; font-weight:650; }
.wifi code { display:block; font-family:ui-monospace, Consolas, monospace; font-size:15px; color:#111; }
.made { margin-top:12px; font-size:14px; color:#6B6B70; }
`

module.exports = () => page('A QR code on the counter', body, css)
