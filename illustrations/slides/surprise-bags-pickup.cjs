// Surprise bags: at 5:12 PM Sam shows the code K7RT at the Main St counter and Jordan Lee, who
// closes, hands over the two Pastry bags. Labels are the app's: the Orders list (frontend/src/pages/
// grabBags/GrabOrdersPage.jsx: a row per order with its 4-character code, the customer, the bags and
// the pickup window, the status word in its tone from grabBagModel ORDER_TONES: New amber, Got it
// blue, Picked up green; the figures "waiting" and "picked up" are the list's own quick views) and
// the customer's order page (frontend/src/pages/grabBags/public/GrabOrderPage.jsx: "Your code",
// "Show this code at the counter", "Pick up Today, 5–6 PM"). Codes use only the code alphabet
// ACDEFHJKMNPRTUVWXY3479 (backend/utils/grabBagRules.js).
const { icon, page, pill } = require('../kit.cjs')

const BRAND = '#1F6F5C'

// Lit windows across the street at dusk: [x, y].
const lit = [[96, 222], [120, 246], [96, 270], [178, 210], [202, 234], [178, 282], [272, 230], [296, 254], [272, 278], [356, 214], [380, 262]]

const scene = `
<svg viewBox="0 0 743 628" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="dusk" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#3E5A86"/>
      <stop offset="0.55" stop-color="#7F98BC"/>
      <stop offset="1" stop-color="#E6B48C"/>
    </linearGradient>
    <radialGradient id="lamp" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#FFD98A" stop-opacity="0.85"/>
      <stop offset="1" stop-color="#FFD98A" stop-opacity="0"/>
    </radialGradient>
    <clipPath id="pane"><rect x="58" y="70" width="388" height="250" rx="6"/></clipPath>
    <linearGradient id="kraft" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="#C9B08F"/>
      <stop offset="1" stop-color="#BEA381"/>
    </linearGradient>
  </defs>
  <!-- Back wall in lamplight -->
  <rect width="743" height="628" fill="#E3D6C6"/>

  <!-- Window going blue -->
  <rect x="44" y="56" width="416" height="278" rx="14" fill="#F3ECE3"/>
  <g clip-path="url(#pane)">
    <rect x="58" y="70" width="388" height="250" fill="url(#dusk)"/>
    <circle cx="380" cy="118" r="3" fill="#FFFFFF" opacity="0.8"/><circle cx="150" cy="96" r="2" fill="#FFFFFF" opacity="0.7"/>
    <rect x="58" y="200" width="64" height="120" fill="#4B5368"/>
    <rect x="160" y="186" width="70" height="134" fill="#3F465A"/>
    <rect x="256" y="206" width="72" height="114" fill="#4B5368"/>
    <rect x="344" y="190" width="60" height="130" fill="#3F465A"/>
    <rect x="408" y="214" width="38" height="106" fill="#4B5368"/>
    <g fill="#FFD27A">${lit.map(([x, y]) => `<rect x="${x}" y="${y}" width="11" height="13" rx="2"/>`).join('')}</g>
    <!-- Street lamp -->
    <rect x="132" y="150" width="4" height="170" fill="#2E3446"/>
    <circle cx="134" cy="150" r="20" fill="#FFE4A3" opacity="0.35"/><circle cx="134" cy="150" r="6" fill="#FFE9B5"/>
  </g>
  <rect x="246" y="70" width="10" height="250" fill="#F3ECE3"/>
  <rect x="30" y="334" width="444" height="14" rx="5" fill="#EDE4D9"/>

  <!-- Pendant lamps, on -->
  <circle cx="560" cy="120" r="150" fill="url(#lamp)"/>
  <circle cx="680" cy="96" r="110" fill="url(#lamp)" opacity="0.8"/>
  <rect x="559" y="0" width="2.5" height="72" fill="#2D2926"/>
  <path d="M530 100 C530 80 543 70 560 70 C577 70 590 80 590 100 Z" fill="#2D2926"/>
  <ellipse cx="560" cy="102" rx="11" ry="6" fill="#FFE7A0"/>
  <rect x="679" y="0" width="2.5" height="48" fill="#2D2926"/>
  <path d="M656 74 C656 58 666 48 680 48 C694 48 704 58 704 74 Z" fill="#2D2926"/>
  <ellipse cx="680" cy="76" rx="9" ry="5" fill="#FFE7A0"/>

  <!-- Shelf with a plant, right of the window -->
  <rect x="498" y="250" width="214" height="9" rx="4" fill="#B79C7E"/>
  <g transform="translate(520 186)"><path d="M22 50 C10 36 4 22 10 8 C18 22 22 34 24 50 Z" fill="#5E8C6A"/><path d="M26 50 C30 30 40 16 52 10 C50 28 40 40 28 52 Z" fill="#4C7A59"/><path d="M24 52 C20 34 22 18 30 2 C34 20 32 36 28 52 Z" fill="#6F9E7A"/><path d="M8 50 h40 l-5 14 h-30 Z" fill="#C96F4A"/></g>
  <g transform="translate(600 206)"><rect width="40" height="44" rx="4" fill="#F5F0E9"/><rect x="46" y="10" width="34" height="34" rx="4" fill="#E9DDCC"/></g>

  <!-- Counter top, deep enough to set things on -->
  <path d="M0 352 H743 V538 H0 Z" fill="#EAE2D7"/>
  <path d="M0 352 H743 V360 H0 Z" fill="#D9CEC0"/>
  <path d="M0 530 H743 V542 H0 Z" fill="#DCD2C6"/>
  <!-- Counter front -->
  <rect y="542" width="743" height="86" fill="#C9B9A5"/>
  <g stroke="#BBA993" stroke-width="3">${Array.from({ length: 16 }, (_, k) => `<path d="M${24 + k * 48} 552 V628"/>`).join('')}</g>

  <!-- Sam's phone on the counter, the code on its screen -->
  <ellipse cx="196" cy="530" rx="84" ry="9" fill="#C9BCAB" opacity="0.7"/>
  <g transform="translate(196 446) rotate(-9) scale(0.84) translate(-74 -128)">
    <rect width="148" height="256" rx="24" fill="#1B1A19"/>
    <rect x="7" y="7" width="134" height="242" rx="18" fill="#FFFFFF"/>
    <rect x="52" y="14" width="44" height="12" rx="6" fill="#1B1A19"/>
    <circle cx="74" cy="56" r="13" fill="${BRAND}"/>
    <text x="74" y="61" text-anchor="middle" font-family="Bricolage" font-size="14" font-weight="700" fill="#fff">J</text>
    <text x="74" y="94" text-anchor="middle" font-family="Bricolage" font-size="11.5" font-weight="600" fill="#77726C">Your code</text>
    <text x="74" y="132" text-anchor="middle" font-family="Bricolage" font-size="34" font-weight="750" letter-spacing="5" fill="#1B1A19">K7RT</text>
    <text x="74" y="154" text-anchor="middle" font-family="Bricolage" font-size="11" font-weight="500" fill="#77726C">Show this code</text>
    <text x="74" y="168" text-anchor="middle" font-family="Bricolage" font-size="11" font-weight="500" fill="#77726C">at the counter</text>
    <rect x="18" y="180" width="112" height="1.5" fill="#EEECE8"/>
    <text x="20" y="201" font-family="Bricolage" font-size="11" font-weight="600" fill="#1B1A19">Pastry bag × 2</text>
    <text x="20" y="219" font-family="Bricolage" font-size="10.5" font-weight="500" fill="#77726C">Pick up Today, 5–6 PM</text>
  </g>

  <!-- The bag, handed across the counter from behind it -->
  <ellipse cx="478" cy="528" rx="88" ry="9" fill="#C9BCAB" opacity="0.55"/>
  <g transform="translate(410 252)">
    <!-- side gusset and front -->
    <path d="M118 38 L146 50 V236 L118 248 Z" fill="#AD9271"/>
    <rect x="0" y="38" width="118" height="210" rx="4" fill="url(#kraft)"/>
    <!-- rolled top -->
    <rect x="-4" y="28" width="126" height="22" rx="6" fill="#B79B78"/>
    <rect x="-4" y="44" width="126" height="5" rx="2.5" fill="#A98D6A" opacity="0.6"/>
    <!-- sticker -->
    <circle cx="59" cy="140" r="27" fill="${BRAND}"/>
    <circle cx="59" cy="140" r="22" fill="none" stroke="#FFFFFF" stroke-width="1.5" opacity="0.5"/>
    <text x="59" y="149" text-anchor="middle" font-family="Bricolage" font-size="26" font-weight="700" fill="#FFFFFF">J</text>
    <rect x="16" y="196" width="86" height="7" rx="3.5" fill="#B49674" opacity="0.7"/>
  </g>
  <!-- the hand holding the rolled top, its sleeve coming from behind the counter -->
  <g transform="translate(0 16)"><path d="M743 210 L620 238 Q596 244 588 262 L606 290 Q626 280 650 276 L743 262 Z" fill="#2E4F45"/>
  <path d="M600 248 Q572 246 548 258 Q530 266 528 280 Q540 288 556 284 L600 282 Q616 278 616 264 Q614 252 600 248 Z" fill="#E7B48F"/>
  <path d="M548 258 Q536 272 540 290 Q550 296 560 288 Q556 274 562 262" fill="#DDA57F"/>
  <rect x="582" y="252" width="30" height="34" rx="12" fill="#E7B48F"/></g>

</svg>`

const ROWS = [
  { code: 'K7RT', who: 'Sam O.', bags: 2, status: ['Picked up', 'ok'], note: 'Picked up by Jordan Lee · 5:12 PM', hi: true },
  { code: 'J4XW', who: 'Rosa B.', bags: 2, status: ['New', 'warn'] },
  { code: 'R9KD', who: 'Omar K.', bags: 1, status: ['Got it', 'brand'] },
  { code: 'M3TA', who: 'Leah P.', bags: 1, status: ['Picked up', 'ok'] },
  { code: 'C7HF', who: 'Kenji T.', bags: 1, status: ['Picked up', 'ok'] },
]

const body = `
<div class="card list" style="left:57px;top:80px;width:522px;height:628px;padding:32px 32px 18px">
  <div class="title">Orders</div>
  <div class="sub">Today · Main St</div>
  <div class="figs">
    <div><b>5</b><span>orders</span></div>
    <div><b>2</b><span>waiting</span></div>
    <div><b>3</b><span>picked up</span></div>
  </div>
  <div class="rows">
    ${ROWS.map(
      (r) => `
    <div class="row${r.hi ? ' hi' : ''}">
      <span class="code">${r.code}</span>
      <div class="grow">
        <div class="name">${r.who}</div>
        <div class="meta">${r.bags} ${r.bags === 1 ? 'bag' : 'bags'} · 5–6 PM</div>
        ${r.note ? `<div class="note">${icon('check', { size: 15, stroke: 3 })}${r.note}</div>` : ''}
      </div>
      ${pill(r.status[0], r.status[1], { sm: true })}
    </div>`,
    ).join('')}
  </div>
</div>

<div class="scene" style="left:600px;top:80px;width:743px;height:628px">${scene}</div>
`

const css = `
.list .figs { margin-top:20px; display:flex; gap:10px; }
.list .figs div { flex:1; padding:12px 14px; border-radius:16px; background:var(--warm-50); border:1.5px solid var(--hair); }
.list .figs b { display:block; font-size:28px; font-weight:680; line-height:1.1; }
.list .figs span { display:block; margin-top:2px; font-size:16px; font-weight:500; color:var(--muted); }
.list .rows { margin-top:16px; }
.list .row { gap:14px; padding:12px 0; }
.list .row .name { font-size:20px; }
.list .row .meta { font-size:16px; margin-top:1px; }
.list .row.hi { margin:0 -14px; padding:12px 14px; border-radius:16px; background:var(--green-50); border-bottom-color:transparent; }
.code { width:76px; height:40px; border-radius:11px; background:var(--warm-100); display:inline-flex; align-items:center; justify-content:center; flex-shrink:0; font-size:18px; font-weight:700; letter-spacing:0.08em; color:var(--ink-2); }
.row.hi .code { background:#fff; }
.note { margin-top:4px; display:flex; align-items:center; gap:5px; font-size:14.5px; font-weight:560; color:var(--green-700); }
`

module.exports = () => page('Handed over with the code', body, css)
