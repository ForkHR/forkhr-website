// Surprise bags → the shop's own page: Juniper Coffee's Main St front in the afternoon (2:16 PM,
// Tuesday, November 17), a sign in the window with a QR code (the café's own words: Fork draws no
// sign), and the public page it opens (frontend/src/pages/grabBags/public/GrabShopPage.jsx): the
// shop's mark and name, "Surprise bags", the lead ("Good food that didn't sell today, packed into a
// bag for less."), the location, then a bag's card: its picture with the "N left" badge, the name,
// the price with "worth about" beside it (softened, never struck through), "Pick up Today, 5–6 PM ·
// order by 5:45 PM", "Usually inside", the diet chip and "Reserve a bag" in the shop's colour. The
// page's colours are grab-shop.css's light set; the bag in the picture is GrabIllustrations.jsx's
// kraft bag with a croissant and a baguette looking out.
const { icon, page } = require('../kit.cjs')

const BRAND = '#1F6F5C'

// A small drawn QR code (decorative), 13 × 13 cells, as locations-counter draws it.
const qr = (x, y, size, ink = '#1B1A19') => {
  const n = 13
  const c = size / n
  let seed = 61
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

// The scene: the shop front in its own 863 x 628 box (page x 480, y 80).
const scene = `
<svg viewBox="0 0 863 628" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <pattern id="brick" width="56" height="28" patternUnits="userSpaceOnUse">
      <rect width="56" height="28" fill="#D7B9A0"/>
      <rect x="1.5" y="1.5" width="53" height="11" rx="2" fill="#E2C7AF"/>
      <rect x="-26.5" y="15.5" width="53" height="11" rx="2" fill="#E2C7AF"/>
      <rect x="29.5" y="15.5" width="53" height="11" rx="2" fill="#E2C7AF"/>
    </pattern>
    <pattern id="awning" width="60" height="60" patternUnits="userSpaceOnUse">
      <rect width="30" height="60" fill="${BRAND}"/>
      <rect x="30" width="30" height="60" fill="#F3EEE4"/>
    </pattern>
    <clipPath id="win"><rect x="64" y="214" width="452" height="250" rx="4"/></clipPath>
    <linearGradient id="inside" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#F6E7C9"/>
      <stop offset="1" stop-color="#E8D2AE"/>
    </linearGradient>
  </defs>
  <!-- Sky and the brick front -->
  <rect width="863" height="628" fill="#D9E6EC"/>
  <rect x="0" y="22" width="863" height="514" fill="url(#brick)"/>
  <!-- Afternoon sun across the front -->
  <path d="M0 22 H520 L230 536 H0 Z" fill="#FFF3DC" opacity="0.32"/>

  <!-- Name board -->
  <rect x="40" y="56" width="660" height="70" rx="8" fill="#163F35"/>
  <circle cx="98" cy="91" r="22" fill="#F3EEE4"/>
  <text x="98" y="99" text-anchor="middle" font-family="Bricolage" font-size="23" font-weight="700" fill="${BRAND}">J</text>
  <text x="134" y="102" font-family="Bricolage" font-size="31" font-weight="650" fill="#F3EEE4" letter-spacing="0.5">Juniper Coffee</text>
  <text x="680" y="100" text-anchor="end" font-family="Bricolage" font-size="17" font-weight="560" fill="#BFD8CF">214 Main St</text>

  <!-- Awning -->
  <path d="M36 144 H544 L564 196 H16 Z" fill="url(#awning)"/>
  <path d="M16 196 H564 v10 q-14.6 12 -29.2 0 q-14.6 12 -29.2 0 q-14.6 12 -29.2 0 q-14.6 12 -29.2 0 q-14.6 12 -29.2 0 q-14.6 12 -29.2 0 q-14.6 12 -29.2 0 q-14.6 12 -29.2 0 q-14.6 12 -29.2 0 q-14.6 12 -29.2 0 q-14.6 12 -29.2 0 q-14.6 12 -29.2 0 q-14.6 12 -29.2 0 q-14.6 12 -29.2 0 q-14.6 12 -29.2 0 q-14.6 12 -29.2 0 q-14.6 12 -29.2 0 q-14.6 12 -29.2 0 q-14.6 12 -29.2 0 Z" fill="${BRAND}"/>

  <!-- Window: frame, the warm shop inside, the glass -->
  <rect x="52" y="202" width="476" height="274" rx="10" fill="#22302B"/>
  <rect x="64" y="214" width="452" height="250" rx="4" fill="url(#inside)"/>
  <g clip-path="url(#win)">
    <!-- inside: pendant lamps, the back shelf and the counter -->
    <rect x="300" y="214" width="2" height="38" fill="#3A3531"/><path d="M284 266 C284 252 292 246 301 246 C310 246 318 252 318 266 Z" fill="${BRAND}"/>
    <rect x="420" y="214" width="2" height="30" fill="#3A3531"/><path d="M404 258 C404 244 412 238 421 238 C430 238 438 244 438 258 Z" fill="${BRAND}"/>
    <rect x="250" y="300" width="270" height="8" rx="3" fill="#B79C7E"/>
    <g fill="#C7A98A"><rect x="270" y="270" width="26" height="30" rx="4"/><rect x="304" y="276" width="22" height="24" rx="4"/><rect x="380" y="268" width="28" height="32" rx="4"/><rect x="416" y="274" width="22" height="26" rx="4"/></g>
    <rect x="240" y="384" width="290" height="90" fill="#C9B49B"/>
    <rect x="240" y="378" width="290" height="10" fill="#DCCAB3"/>
    <!-- pastries on the window ledge -->
    <rect x="64" y="440" width="452" height="24" fill="#B9A188"/>
    <g transform="translate(330 418)"><path d="M0 22 C1 8 12 0 25 0 C38 0 49 8 50 22 C50.3 25 47 25.5 46 23 C42 19 34 16 25 16 C16 16 8 19 4 23 C3 25.5 -0.3 25 0 22 Z" fill="#D9A55E"/></g>
    <g transform="translate(392 410)"><rect width="88" height="32" rx="16" fill="#C4843F"/><path d="M24 6 q5 10 2 20 M44 6 q5 10 2 20 M64 6 q5 10 2 20" fill="none" stroke="#9C6227" stroke-width="2.6" stroke-linecap="round"/></g>
    <!-- glass sheen -->
    <path d="M150 214 L80 464" stroke="#FFFFFF" stroke-width="22" opacity="0.18"/>
    <path d="M196 214 L126 464" stroke="#FFFFFF" stroke-width="7" opacity="0.16"/>
  </g>

  <!-- The café's sign, taped inside the glass -->
  <g transform="rotate(-2 166 330)">
    <rect x="92" y="236" width="150" height="196" rx="8" fill="#FFFFFF"/>
    <rect x="148" y="228" width="38" height="14" rx="2" fill="#EDE7DC" opacity="0.9"/>
    <text x="167" y="268" text-anchor="middle" font-family="Bricolage" font-size="19" font-weight="700" fill="#1B1A19">Surprise bags</text>
    <text x="167" y="290" text-anchor="middle" font-family="Bricolage" font-size="14" font-weight="560" fill="#5B5752">pick up 5–6 PM</text>
    ${qr(127, 300, 80)}
    <text x="167" y="407" text-anchor="middle" font-family="Bricolage" font-size="14" font-weight="650" fill="${BRAND}">Scan to reserve</text>
  </g>

  <!-- Door with its open sign -->
  <rect x="582" y="202" width="128" height="334" rx="8" fill="#22302B"/>
  <rect x="594" y="214" width="104" height="216" rx="4" fill="url(#inside)"/>
  <path d="M640 214 L600 430" stroke="#FFFFFF" stroke-width="12" opacity="0.16"/>
  <rect x="594" y="440" width="104" height="84" rx="4" fill="#2D3D37"/>
  <rect x="604" y="300" width="7" height="44" rx="3.5" fill="#D8C8A8"/>
  <path d="M624 236 L646 222 L668 236" fill="none" stroke="#3A3531" stroke-width="1.6"/>
  <rect x="616" y="236" width="60" height="26" rx="5" fill="#FFFFFF"/>
  <text x="646" y="254" text-anchor="middle" font-family="Bricolage" font-size="14" font-weight="700" fill="${BRAND}">OPEN</text>

  <!-- The next door along: a plain wall and a lamp -->
  <rect x="736" y="22" width="127" height="514" fill="#CFB39B" opacity="0.55"/>
  <rect x="760" y="210" width="80" height="200" rx="8" fill="#E8DCCD"/>
  <rect x="770" y="220" width="60" height="180" rx="4" fill="#D2E0E6"/>
  <path d="M770 220 L830 400" stroke="#FFFFFF" stroke-width="8" opacity="0.3"/>

  <!-- Sidewalk -->
  <rect y="536" width="863" height="92" fill="#C9C3BA"/>
  <rect y="536" width="863" height="7" fill="#B7B0A6"/>
  <g stroke="#B9B2A8" stroke-width="3">
    ${Array.from({ length: 8 }, (_, k) => `<path d="M${40 + k * 118} 543 L${10 + k * 118} 628"/>`).join('')}
  </g>
  <!-- Awning's shadow on the pavement, and a planter by the door -->
  <path d="M16 543 H564 L540 572 H40 Z" fill="#000" opacity="0.06"/>
  <g transform="translate(724 456)">
    <path d="M32 18 C14 4 4 26 0 48 C16 38 26 34 32 50 Z" fill="#7FA584"/>
    <path d="M40 14 C58 -2 74 18 78 44 C62 34 50 34 42 50 Z" fill="#6A9471"/>
    <path d="M36 4 C30 -22 48 -36 56 -40 C56 -16 50 -2 40 16 Z" fill="#8DB391"/>
    <rect x="10" y="44" width="58" height="40" rx="5" fill="#3C4A44"/>
  </g>
</svg>`

// The bag's picture on the card: the app's kraft bag, a croissant and a baguette looking out.
const bagPicture = `
<svg viewBox="0 0 260 120" width="100%" height="100%" preserveAspectRatio="xMidYMid meet">
  <ellipse cx="130" cy="112" rx="44" ry="4" fill="rgba(80,52,22,0.14)"/>
  <path d="M100 38 H160 L162 52 H98 Z" fill="#9A6D41"/>
  <g transform="rotate(24 148 40)"><rect x="140" y="2" width="15" height="74" rx="7.5" fill="#E3A052"/><rect x="149" y="6" width="5" height="66" rx="2.5" fill="#B97632"/><path d="M143 12 l8 -3 M143 22 l8 -3 M143 32 l8 -3" stroke="#B97632" stroke-width="1.8" stroke-linecap="round"/></g>
  <g transform="rotate(-8 116 38)"><path d="M94 46 C95 34 105 27 116 27 C127 27 137 34 138 46 C138.2 48.5 135.5 49 134.8 47 C131.5 43.5 124.5 41 116 41 C107.5 41 100.5 43.5 97.2 47 C96.5 49 93.8 48.5 94 46 Z" fill="#E3A052"/></g>
  <path d="M96 50 H164 L168 108 a4 4 0 0 1 -4 4 H96 a4 4 0 0 1 -4 -4 Z" fill="#D9B17E"/>
  <path d="M96 50 H164 L165 58 H95 Z" fill="#E9C998"/>
  <circle cx="130" cy="84" r="12" fill="${BRAND}"/>
  <text x="130" y="89" text-anchor="middle" font-family="Bricolage" font-size="13" font-weight="700" fill="#fff">J</text>
</svg>`

const body = `
<div class="scene" style="left:480px;top:80px;width:863px;height:628px">${scene}</div>

<div class="abs connector" style="left:412px;top:330px">
  <span class="pill white">${icon('qr', { size: 18, stroke: 2.2 })} Scan</span>
  <svg width="104" height="24" viewBox="0 0 104 24"><path d="M100 12 H16" stroke="#2563EB" stroke-width="4" stroke-linecap="round" stroke-dasharray="1 12"/><path d="M14 3 L2 12 L14 21" fill="none" stroke="#2563EB" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>
</div>

<div class="phone" style="left:96px;top:62px;width:316px;height:664px">
  <div class="screen gp">
    <div class="island"></div>
    <div class="top"><span class="mark">J</span><span class="shop">Juniper Coffee</span></div>
    <div class="h1">Surprise bags</div>
    <div class="lead">Good food that didn't sell today, packed into a bag for less.</div>
    <div class="where">${icon('pin', { size: 15, stroke: 2.4 })}<span><b>Main St</b> · 214 Main St</span></div>
    <div class="bagcard">
      <div class="pic">${bagPicture}<span class="badge">5 left</span></div>
      <div class="cb">
        <div class="row1"><span class="nm">Pastry bag</span><span class="pr"><b>$6.00</b><small>worth about $18.00</small></span></div>
        <div class="when">${icon('clock', { size: 15, stroke: 2.4 })}<span>Pick up Today, 5–6 PM<br><i>order by 5:45 PM</i></span></div>
        <div class="inside"><small>Usually inside</small>Croissants · Muffins ·<br>A loaf of the day</div>
        <span class="chip">Vegetarian</span>
        <div class="go">Reserve a bag</div>
      </div>
    </div>
  </div>
</div>
`

const css = `
.connector { display:flex; flex-direction:column; align-items:center; gap:12px; width:110px; }
.connector .pill { height:38px; font-size:16px; padding:0 15px; }
.connector .pill svg { width:18px; height:18px; }
.screen.gp { background:#FFFFFF; padding:54px 16px 0; color:#141413; }
.top { display:flex; align-items:center; gap:9px; }
.mark { width:30px; height:30px; border-radius:99px; background:${BRAND}; color:#fff; display:inline-flex; align-items:center; justify-content:center; font-size:15px; font-weight:700; flex-shrink:0; }
.shop { font-size:15.5px; font-weight:620; }
.h1 { margin-top:12px; font-size:29px; font-weight:680; letter-spacing:-0.02em; line-height:1.05; }
.lead { margin-top:6px; font-size:14px; line-height:1.35; color:#63605b; }
.where { margin-top:9px; display:flex; align-items:center; gap:6px; font-size:14px; color:#63605b; }
.where svg { color:${BRAND}; flex-shrink:0; }
.where b { color:#141413; font-weight:640; }
.bagcard { margin-top:11px; border-radius:20px; box-shadow:0 0 0 1.5px #e8e6e1; overflow:hidden; }
.pic { position:relative; height:112px; background:#F4F3F0; }
.badge { position:absolute; top:10px; left:10px; height:26px; padding:0 11px; border-radius:99px; background:#fff; color:#141413; font-size:13.5px; font-weight:650; display:inline-flex; align-items:center; box-shadow:0 2px 6px -2px rgba(0,0,0,0.18); }
.cb { padding:11px 14px 14px; }
.row1 { display:flex; align-items:flex-start; justify-content:space-between; gap:8px; }
.nm { font-size:19px; font-weight:660; letter-spacing:-0.01em; }
.pr { text-align:right; line-height:1.1; }
.pr b { display:block; font-size:19px; font-weight:680; }
.pr small { display:block; margin-top:2px; font-size:13px; color:#8f8b85; font-weight:500; white-space:nowrap; }
.when { margin-top:7px; display:flex; gap:6px; align-items:flex-start; font-size:14px; line-height:1.3; font-weight:560; }
.when svg { margin-top:2px; flex-shrink:0; color:#63605b; }
.when i { font-style:normal; color:#63605b; font-weight:500; }
.inside { margin-top:8px; font-size:14px; line-height:1.3; }
.inside small { display:block; font-size:13px; color:#8f8b85; font-weight:560; }
.chip { display:inline-flex; margin-top:8px; height:25px; padding:0 10px; border-radius:99px; background:#EAF3EF; color:${BRAND}; font-size:13px; font-weight:620; align-items:center; }
.go { margin-top:11px; height:44px; border-radius:99px; background:${BRAND}; color:#fff; display:flex; align-items:center; justify-content:center; font-size:16px; font-weight:650; }
`

module.exports = () => page('Found from the window, reserved on the page', body, css)
