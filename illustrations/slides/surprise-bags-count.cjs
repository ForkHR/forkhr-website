// Surprise bags → Availability: Main St's pastry case after lunch (1:30 PM, Tuesday, November 17),
// and today's count set from the counter. The card is the web app's Availability page
// (frontend/src/pages/grabBags/GrabAvailabilityPage.jsx): the row's buttons Orders · Availability ·
// Bags, the locations as a switch each with what it has left ("Main St · 9 left"), the open one a
// card headed by the switch "Taking orders today", a row a bag with its picture, its pickup, a bar
// of sold and left, and the stepper "− N +" with "left of M" under it. The bags on the counter are
// the café's own, with its round J sticker.
const { page } = require('../kit.cjs')

const BRAND = '#1F6F5C'

// A croissant lying on a tray, 54 wide.
const croissant = (x, y, r = 0) => `
  <g transform="translate(${x} ${y}) rotate(${r} 27 14)">
    <path d="M0 24 C1 9 13 0 27 0 C41 0 53 9 54 24 C54.3 27 50.5 27.5 49.5 25 C45 20 37 17 27 17 C17 17 9 20 4.5 25 C3.5 27.5 -0.3 27 0 24 Z" fill="#D9A55E"/>
    <path d="M7.5 10 Q11.5 15 10.5 21" fill="none" stroke="#B9823D" stroke-width="2.2" stroke-linecap="round"/>
    <path d="M17 3 Q21 10 19.5 18" fill="none" stroke="#B9823D" stroke-width="2.2" stroke-linecap="round"/>
    <path d="M37 3 Q33 10 34.5 18" fill="none" stroke="#B9823D" stroke-width="2.2" stroke-linecap="round"/>
    <path d="M46.5 10 Q42.5 15 43.5 21" fill="none" stroke="#B9823D" stroke-width="2.2" stroke-linecap="round"/>
  </g>`

// A muffin in its paper case, 44 wide.
const muffin = (x, y, top = '#B9773F') => `
  <g transform="translate(${x} ${y})">
    <path d="M6 22 h32 l-4 24 h-24 Z" fill="#EFE3D3"/>
    <g stroke="#DCCBB5" stroke-width="2"><path d="M14 23 l1.5 22"/><path d="M22 23 v22"/><path d="M30 23 l-1.5 22"/></g>
    <path d="M1 24 C1 8 11 0 22 0 C33 0 43 8 43 24 Z" fill="${top}"/>
    <circle cx="14" cy="12" r="2.6" fill="#4A3A6B"/><circle cx="27" cy="8" r="2.6" fill="#4A3A6B"/><circle cx="31" cy="17" r="2.6" fill="#4A3A6B"/><circle cx="19" cy="19" r="2.2" fill="#4A3A6B"/>
  </g>`

// A loaf of the day, 104 wide.
const loaf = (x, y) => `
  <g transform="translate(${x} ${y})">
    <rect width="104" height="46" rx="23" fill="#C4843F"/>
    <rect x="8" y="5" width="88" height="16" rx="8" fill="#D59A55" opacity="0.7"/>
    <g fill="none" stroke="#9C6227" stroke-width="3" stroke-linecap="round">
      <path d="M26 10 q6 12 2 26"/><path d="M48 9 q6 12 2 28"/><path d="M70 10 q6 12 2 26"/>
    </g>
  </g>`

// A flat kraft bag, folded, seen from above at an angle.
const flatBag = (x, y, w = 150) => `
  <g transform="translate(${x} ${y})">
    <rect width="${w}" height="16" rx="3" fill="#C7B39A"/>
    <rect width="${w}" height="5" rx="2" fill="#D6C4AC"/>
    <path d="M${w - 30} 0 v16" stroke="#B49E83" stroke-width="2"/>
  </g>`

const scene = `
<svg viewBox="0 0 660 628" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <pattern id="tiles" width="44" height="22" patternUnits="userSpaceOnUse">
      <rect width="44" height="22" fill="#DCE3DC"/>
      <rect x="1.5" y="1.5" width="41" height="19" rx="2.5" fill="#EEF2EC"/>
    </pattern>
    <linearGradient id="glass" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#FFFFFF" stop-opacity="0.55"/>
      <stop offset="0.5" stop-color="#FFFFFF" stop-opacity="0.12"/>
      <stop offset="1" stop-color="#FFFFFF" stop-opacity="0.35"/>
    </linearGradient>
    <radialGradient id="glow" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#FFE7A0" stop-opacity="0.7"/>
      <stop offset="1" stop-color="#FFE7A0" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="660" height="628" fill="#E8E2D9"/>
  <rect y="150" width="660" height="240" fill="url(#tiles)"/>

  <!-- Wall clock: half past one -->
  <circle cx="112" cy="84" r="46" fill="#FFFFFF" stroke="#2D2926" stroke-width="6"/>
  <g fill="#2D2926">
    <rect x="110" y="44" width="4" height="9" rx="1.5"/><rect x="110" y="115" width="4" height="9" rx="1.5"/>
    <rect x="72" y="82" width="9" height="4" rx="1.5"/><rect x="143" y="82" width="9" height="4" rx="1.5"/>
  </g>
  <path d="M112 84 L124 66" stroke="#2D2926" stroke-width="5" stroke-linecap="round"/>
  <path d="M112 84 L112 118" stroke="#2D2926" stroke-width="3.5" stroke-linecap="round"/>
  <circle cx="112" cy="84" r="4.5" fill="${BRAND}"/>

  <!-- Pendant lamp over the case -->
  <circle cx="236" cy="86" r="120" fill="url(#glow)"/>
  <rect x="235" y="0" width="2.5" height="44" fill="#2D2926"/>
  <path d="M206 74 C206 54 219 44 236 44 C253 44 266 54 266 74 Z" fill="${BRAND}"/>
  <ellipse cx="236" cy="76" rx="10" ry="5" fill="#FFE7A0"/>

  <!-- Menu board -->
  <rect x="452" y="40" width="112" height="128" rx="10" fill="#2D2926"/>
  <g fill="#E9E4DD" opacity="0.85">
    <rect x="468" y="58" width="56" height="7" rx="3.5"/>
    <rect x="468" y="80" width="80" height="5" rx="2.5"/><rect x="468" y="94" width="66" height="5" rx="2.5"/>
    <rect x="468" y="108" width="74" height="5" rx="2.5"/><rect x="468" y="122" width="58" height="5" rx="2.5"/>
    <rect x="468" y="136" width="70" height="5" rx="2.5"/>
  </g>

  <!-- Pastry case: frame, two glass shelves, the trays -->
  <rect x="30" y="196" width="384" height="252" rx="16" fill="#2D2926"/>
  <rect x="42" y="208" width="360" height="228" rx="8" fill="#F5F1EA"/>
  <!-- upper shelf -->
  <rect x="52" y="306" width="340" height="6" rx="3" fill="#D8D0C4"/>
  <rect x="62" y="296" width="152" height="10" rx="4" fill="#BFB4A6"/>
  ${croissant(70, 270, -6)}${croissant(140, 272, 8)}
  <rect x="230" y="296" width="152" height="10" rx="4" fill="#BFB4A6"/>
  ${muffin(244, 252)}${muffin(300, 252)}
  <!-- lower shelf -->
  <rect x="52" y="414" width="340" height="6" rx="3" fill="#D8D0C4"/>
  <rect x="62" y="404" width="152" height="10" rx="4" fill="#BFB4A6"/>
  ${loaf(86, 358)}
  <rect x="230" y="404" width="152" height="10" rx="4" fill="#BFB4A6"/>
  ${croissant(250, 378, 4)}
  <!-- empty tray spots, with crumbs -->
  <g fill="#D9C2A0"><circle cx="346" cy="400" r="2.4"/><circle cx="358" cy="397" r="1.8"/><circle cx="336" cy="396" r="1.6"/><circle cx="364" cy="292" r="2"/><circle cx="374" cy="294" r="1.6"/></g>
  <!-- the glass -->
  <path d="M42 208 H402 V436 H42 Z" fill="url(#glass)"/>
  <path d="M110 208 L70 436" stroke="#FFFFFF" stroke-width="10" opacity="0.35"/>
  <path d="M140 208 L102 436" stroke="#FFFFFF" stroke-width="4" opacity="0.3"/>
  <!-- price tags -->
  <g font-family="Bricolage" font-size="13" font-weight="650" fill="#1B1A19">
    <rect x="98" y="314" width="56" height="20" rx="4" fill="#FFFFFF"/><text x="126" y="328" text-anchor="middle">$4.25</text>
    <rect x="266" y="314" width="56" height="20" rx="4" fill="#FFFFFF"/><text x="294" y="328" text-anchor="middle">$3.75</text>
  </g>

  <!-- Counter -->
  <rect y="448" width="660" height="22" fill="#DDD4C9"/>
  <rect y="448" width="660" height="5" fill="#E8E1D7"/>
  <rect y="470" width="660" height="158" fill="#D3C7B8"/>
  <g stroke="#C9BCAB" stroke-width="3">
    ${Array.from({ length: 14 }, (_, k) => `<path d="M${24 + k * 48} 482 V628"/>`).join('')}
  </g>

  <!-- The café's own bags: a folded stack and one standing open, with the J sticker -->
  <ellipse cx="508" cy="452" rx="88" ry="6" fill="#C8BCAD"/>
  ${flatBag(436, 430)}${flatBag(442, 416)}${flatBag(434, 402)}
  <g transform="translate(470 283)">
    <path d="M6 14 L14 0 H86 L94 14 V114 a5 5 0 0 1 -5 5 H11 a5 5 0 0 1 -5 -5 Z" fill="#C7B39A"/>
    <path d="M14 0 L20 14 H80 L86 0" fill="#B49E83"/>
    <path d="M6 14 H94" stroke="#B49E83" stroke-width="3"/>
    <circle cx="50" cy="64" r="20" fill="${BRAND}"/>
    <text x="50" y="72" text-anchor="middle" font-family="Bricolage" font-size="22" font-weight="700" fill="#fff">J</text>
  </g>
</svg>`

// A small picture of each bag for its row: a kraft bag with what looks out of it.
const pastryPic = `
<svg viewBox="0 0 60 60" width="60" height="60">
  <rect width="60" height="60" rx="14" fill="#F2EDE5"/>
  <g transform="rotate(-10 26 18)"><path d="M12 22 C12.5 14 18.5 9 26 9 C33.5 9 39.5 14 40 22 C40.2 24 38 24.3 37.5 22.8 C35 20 31 18.5 26 18.5 C21 18.5 17 20 14.5 22.8 C14 24.3 11.8 24 12 22 Z" fill="#D9A55E"/></g>
  <path d="M15 24 L18 20 H42 L45 24 V50 a2 2 0 0 1 -2 2 H17 a2 2 0 0 1 -2 -2 Z" fill="#C7B39A"/>
  <path d="M15 24 H45" stroke="#B49E83" stroke-width="2"/>
  <circle cx="30" cy="38" r="6" fill="${BRAND}"/>
</svg>`

const breadPic = `
<svg viewBox="0 0 60 60" width="60" height="60">
  <rect width="60" height="60" rx="14" fill="#F2EDE5"/>
  <g transform="rotate(22 38 20)"><rect x="33" y="4" width="10" height="34" rx="5" fill="#C98B47"/><path d="M35 11 l6 -2 M35 18 l6 -2 M35 25 l6 -2" stroke="#9C6227" stroke-width="1.8" stroke-linecap="round"/></g>
  <path d="M15 24 L18 20 H42 L45 24 V50 a2 2 0 0 1 -2 2 H17 a2 2 0 0 1 -2 -2 Z" fill="#C7B39A"/>
  <path d="M15 24 H45" stroke="#B49E83" stroke-width="2"/>
  <circle cx="30" cy="38" r="6" fill="${BRAND}"/>
</svg>`

const bagRow = ({ pic, name, sold, left, of }) => `
  <div class="bag">
    ${pic}
    <div class="grow">
      <div class="b-name">${name}</div>
      <div class="b-meta">Pick up 5–6 PM</div>
      <div class="bar">${sold ? `<i class="sold" style="width:${(sold / of) * 100}%"></i>` : ''}<i class="left" style="width:${(left / of) * 100}%"></i></div>
      <div class="legend">${sold ? `<span><b class="d sold"></b>${sold} sold</span>` : ''}<span><b class="d left"></b>${left} left</span></div>
    </div>
    <div class="step">
      <div class="stepper"><span class="sb">−</span><b>${left}</b><span class="sb">+</span></div>
      <div class="of">left of ${of}</div>
    </div>
  </div>`

const body = `
<div class="scene" style="left:57px;top:80px;width:660px;height:628px">${scene}</div>

<div class="card avail" style="left:668px;top:118px;width:676px">
  <div class="subnav"><span>Orders</span><span class="on">Availability</span><span>Bags</span></div>
  <div class="title" style="margin-top:18px">Availability</div>
  <div class="tabs"><span class="on">Main St · 9 left</span><span>Harbor St · 5 left</span></div>
  <div class="inner">
    <div class="head"><span class="sw on"><i></i></span><span class="h-label">Taking orders today</span><span class="h-day">Tue, Nov 17</span></div>
    ${bagRow({ pic: pastryPic, name: 'Pastry bag', sold: 3, left: 5, of: 8 })}
    ${bagRow({ pic: breadPic, name: 'Bread bag', sold: 0, left: 4, of: 4 })}
  </div>
</div>
`

const css = `
.avail { padding:26px 32px 30px; }
.subnav { display:flex; gap:6px; }
.subnav span { height:38px; padding:0 18px; border-radius:99px; display:inline-flex; align-items:center; font-size:17px; font-weight:600; color:var(--muted); }
.subnav span.on { background:var(--warm-100); color:var(--ink); }
.tabs { margin-top:18px; display:inline-flex; gap:4px; padding:4px; border-radius:99px; background:var(--warm-100); }
.tabs span { height:40px; padding:0 20px; border-radius:99px; display:inline-flex; align-items:center; font-size:17px; font-weight:600; color:var(--muted); white-space:nowrap; }
.tabs span.on { background:#fff; color:var(--ink); box-shadow:0 2px 8px -3px rgba(45,38,30,0.25); }
.inner { margin-top:18px; border:1.5px solid var(--warm-200); border-radius:22px; overflow:hidden; }
.head { display:flex; align-items:center; gap:14px; padding:16px 22px; background:var(--warm-50); border-bottom:1.5px solid var(--hair); }
.h-label { font-size:20px; font-weight:620; flex:1; }
.h-day { font-size:16px; color:var(--muted); font-weight:500; }
.sw { width:54px; height:32px; border-radius:99px; background:var(--warm-200); position:relative; flex-shrink:0; }
.sw i { position:absolute; top:4px; left:4px; width:24px; height:24px; border-radius:99px; background:#fff; box-shadow:0 1px 3px rgba(0,0,0,0.18); }
.sw.on { background:var(--ink); }
.sw.on i { left:26px; }
.bag { display:flex; align-items:center; gap:18px; padding:18px 22px; }
.bag + .bag { border-top:1.5px solid var(--hair); }
.bag svg { flex-shrink:0; }
.grow { flex:1; min-width:0; }
.b-name { font-size:21px; font-weight:600; line-height:1.2; }
.b-meta { margin-top:2px; font-size:16px; color:var(--muted); }
.bar { margin-top:10px; height:10px; border-radius:99px; background:var(--warm-100); display:flex; overflow:hidden; }
.bar i { display:block; height:100%; }
.bar i.sold { background:var(--ink-2); }
.bar i.left { background:var(--green); }
.legend { margin-top:7px; display:flex; gap:16px; font-size:15px; color:var(--muted); font-weight:500; }
.legend span { display:inline-flex; align-items:center; gap:6px; }
.d { width:9px; height:9px; border-radius:99px; display:inline-block; }
.d.sold { background:var(--ink-2); }
.d.left { background:var(--green); }
.step { display:flex; flex-direction:column; align-items:center; gap:6px; flex-shrink:0; }
.stepper { display:flex; align-items:center; gap:4px; height:48px; padding:0 5px; border:1.5px solid var(--warm-200); border-radius:99px; }
.stepper b { width:42px; text-align:center; font-size:22px; font-weight:650; }
.sb { width:36px; height:36px; border-radius:99px; background:var(--warm-100); display:inline-flex; align-items:center; justify-content:center; font-size:22px; font-weight:600; color:var(--ink-2); }
.of { font-size:15px; color:var(--muted); font-weight:500; }
`

module.exports = () => page("Today's count, set at the counter", body, css)
