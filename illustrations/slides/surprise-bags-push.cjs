// Surprise bags: Sam Ortiz reserves two Pastry bags at 2:18 PM and Maya Chen, on shift at Main St,
// gets the push. Labels are the app's: the push's title and body (backend/utils/grabBagNotify.js:
// "New surprise bag order" / "{first name} · {n} bags · pick up {pickup label}"), the order as the
// staff sheet shows it (frontend/src/pages/grabBags/GrabOrderSheet.jsx: the code as the order's
// name, the status word "New" in its tone (grabBagModel ORDER_TONES: new is amber), the lines,
// "Pickup", "Location", the total, and the "Got it" button). The lock screen is drawn as
// reminders-shift draws it.
const { icon, page, appIcon, pill } = require('../kit.cjs')

const BRAND = '#1F6F5C'

// A coffee bag on the back shelf, with the shop's round sticker.
const bag = (x, y) => `
  <g transform="translate(${x} ${y})">
    <path d="M4 10 L10 0 H46 L52 10 V72 a4 4 0 0 1 -4 4 H8 a4 4 0 0 1 -4 -4 Z" fill="#C7B39A"/>
    <path d="M10 0 L14 10 H42 L46 0" fill="#B49E83"/>
    <circle cx="28" cy="40" r="10" fill="${BRAND}"/>
    <text x="28" y="44.5" text-anchor="middle" font-family="Bricolage" font-size="13" font-weight="700" fill="#fff">J</text>
  </g>`

// A stack of cups, upside down on the machine's warming tray.
const cups = (x, y, n = 3) =>
  Array.from({ length: n }, (_, k) => `
  <g transform="translate(${x + k * 30} ${y})">
    <path d="M2 0 h22 l3 20 h-28 Z" fill="#FFFFFF"/>
    <rect x="-1" y="18" width="28" height="4" rx="2" fill="#E7E1D9"/>
  </g>`).join('')

const scene = `
<svg viewBox="0 0 660 628" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <pattern id="tiles" width="44" height="22" patternUnits="userSpaceOnUse">
      <rect width="44" height="22" fill="#DCE3DF"/>
      <rect x="1.5" y="1.5" width="41" height="19" rx="2.5" fill="#EDF1EE"/>
    </pattern>
    <radialGradient id="screenGlow" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#FFFFFF" stop-opacity="0.9"/>
      <stop offset="1" stop-color="#FFFFFF" stop-opacity="0"/>
    </radialGradient>
    <linearGradient id="steel" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#D9DDE1"/>
      <stop offset="1" stop-color="#B6BCC2"/>
    </linearGradient>
  </defs>
  <rect width="660" height="628" fill="#EAE4DD"/>
  <!-- Tiled splashback behind the back counter -->
  <rect y="176" width="660" height="214" fill="url(#tiles)"/>

  <!-- Open shelf: coffee bags and a menu card -->
  <rect x="24" y="132" width="400" height="10" rx="4" fill="#B79C7E"/>
  <rect x="48" y="142" width="8" height="16" fill="#9C8368"/><rect x="392" y="142" width="8" height="16" fill="#9C8368"/>
  ${bag(40, 56)}${bag(102, 56)}${bag(164, 56)}
  <g transform="translate(234 52)">
    <rect width="96" height="80" rx="6" fill="#2D2926"/>
    <rect x="12" y="14" width="56" height="7" rx="3.5" fill="#F1ECE5" opacity="0.9"/>
    <rect x="12" y="30" width="72" height="5" rx="2.5" fill="#F1ECE5" opacity="0.55"/>
    <rect x="12" y="42" width="64" height="5" rx="2.5" fill="#F1ECE5" opacity="0.55"/>
    <rect x="12" y="54" width="70" height="5" rx="2.5" fill="#F1ECE5" opacity="0.55"/>
  </g>
  <g transform="translate(340 60)"><path d="M22 50 C10 36 4 22 10 8 C18 22 22 34 24 50 Z" fill="#5E8C6A"/><path d="M26 50 C30 30 40 16 52 10 C50 28 40 40 28 52 Z" fill="#4C7A59"/><path d="M24 52 C20 34 22 18 30 2 C34 20 32 36 28 52 Z" fill="#6F9E7A"/><path d="M8 50 h40 l-5 22 h-30 Z" fill="#C96F4A"/></g>

  <!-- Espresso machine on the back counter -->
  <g transform="translate(30 214)">
    ${cups(22, 0, 4)}
    <rect x="0" y="22" width="276" height="128" rx="14" fill="url(#steel)"/>
    <rect x="0" y="22" width="276" height="30" rx="14" fill="#C7CCD1"/>
    <rect x="12" y="62" width="252" height="10" rx="5" fill="#A9AFB5"/>
    <!-- Gauges -->
    <circle cx="110" cy="36" r="9" fill="#F5F6F7" stroke="#8E959C" stroke-width="2"/><path d="M110 36 L115 31" stroke="#B91C1C" stroke-width="2" stroke-linecap="round"/>
    <circle cx="166" cy="36" r="9" fill="#F5F6F7" stroke="#8E959C" stroke-width="2"/><path d="M166 36 L161 31" stroke="#B91C1C" stroke-width="2" stroke-linecap="round"/>
    <!-- Group heads and portafilters -->
    <rect x="60" y="78" width="40" height="18" rx="5" fill="#8E959C"/>
    <rect x="176" y="78" width="40" height="18" rx="5" fill="#8E959C"/>
    <rect x="54" y="96" width="52" height="10" rx="5" fill="#5B534B"/><rect x="104" y="98" width="40" height="6" rx="3" fill="#2D2926"/>
    <rect x="170" y="96" width="52" height="10" rx="5" fill="#5B534B"/><rect x="220" y="98" width="40" height="6" rx="3" fill="#2D2926"/>
    <!-- A cup under the left group -->
    <path d="M66 120 h28 l-3 20 h-22 Z" fill="#FFFFFF"/>
    <!-- Steam wand -->
    <path d="M18 70 V120 q0 10 8 14" fill="none" stroke="#8E959C" stroke-width="6" stroke-linecap="round"/>
    <!-- Drip tray -->
    <rect x="34" y="138" width="208" height="12" rx="4" fill="#5B534B"/>
  </g>

  <!-- Grinder -->
  <g transform="translate(322 196)">
    <path d="M14 0 h44 l-8 52 h-28 Z" fill="#E9E1D7" opacity="0.9"/>
    <path d="M18 18 h36 l-5 32 h-26 Z" fill="#6B4A33"/>
    <rect x="10" y="52" width="52" height="96" rx="10" fill="#2D2926"/>
    <rect x="22" y="72" width="28" height="22" rx="4" fill="#3F3A35"/>
    <rect x="4" y="148" width="64" height="10" rx="4" fill="#3F3A35"/>
  </g>

  <!-- Back counter: a deep top seen from behind the bar, then the cabinets -->
  <path d="M0 372 H660 V470 H0 Z" fill="#E4DCD1"/>
  <path d="M0 372 H660 V380 H0 Z" fill="#D6CCBF"/>
  <rect y="470" width="660" height="20" fill="#CFC3B4"/>
  <rect y="490" width="660" height="138" fill="#C0B19F"/>
  <g stroke="#B1A18D" stroke-width="3"><path d="M220 502 V628"/><path d="M440 502 V628"/></g>
  <circle cx="200" cy="560" r="5" fill="#8F7D67"/><circle cx="240" cy="560" r="5" fill="#8F7D67"/>
  <circle cx="420" cy="560" r="5" fill="#8F7D67"/><circle cx="460" cy="560" r="5" fill="#8F7D67"/>

  <!-- A milk jug and a towel on the counter -->
  <g transform="translate(30 392)">
    <path d="M6 8 h38 l6 46 h-50 Z" fill="#D6DADE"/>
    <path d="M44 14 q16 4 12 22" fill="none" stroke="#B6BCC2" stroke-width="5" stroke-linecap="round"/>
    <path d="M6 8 l-8 -6 h20" fill="#C7CCD1"/>
  </g>
  <path d="M96 440 h82 l8 22 h-98 Z" fill="${BRAND}" opacity="0.85"/>
  <path d="M96 440 h82 l2 6 h-86 Z" fill="#185A4A"/>

  <!-- Maya's phone, face up on the counter, lighting up -->
  <ellipse cx="292" cy="420" rx="120" ry="44" fill="url(#screenGlow)"/>
  <g transform="translate(292 420) skewX(-24) translate(-60 -34)">
    <rect width="120" height="66" rx="12" fill="#1B1A19"/>
    <rect x="5" y="5" width="110" height="56" rx="8" fill="#5D554E"/>
    <rect x="12" y="20" width="96" height="22" rx="7" fill="#FFFFFF" opacity="0.92"/>
    <rect x="18" y="26" width="10" height="10" rx="3" fill="#1B1A19"/>
    <rect x="34" y="26" width="52" height="4" rx="2" fill="#2D2A27"/>
    <rect x="34" y="33" width="40" height="3" rx="1.5" fill="#77726C"/>
  </g>
  <!-- buzz -->
  <g fill="none" stroke="#2563EB" stroke-width="4" stroke-linecap="round" opacity="0.8">
    <path d="M212 396 q-12 22 0 44"/><path d="M196 388 q-18 30 0 60"/>
    <path d="M372 396 q12 22 0 44"/><path d="M388 388 q18 30 0 60"/>
  </g>
</svg>`

const body = `
<div class="scene" style="left:57px;top:80px;width:660px;height:628px">${scene}</div>

<div class="phone" style="left:470px;top:62px;width:316px;height:664px">
  <div class="screen lock">
    <div class="island"></div>
    <div class="l-date">Tuesday, November 17</div>
    <div class="l-time">2:18</div>
    <div class="stack">
      <div class="notif">
        ${appIcon(40)}
        <div style="flex:1;min-width:0">
          <div class="n-top"><span>Fork</span><span>now</span></div>
          <div class="n-title">New surprise bag order</div>
          <div class="n-body">Sam · 2 bags · pick up Today, 5–6 PM</div>
        </div>
      </div>
    </div>
    <div class="l-btn" style="left:34px"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6c0 2-2 2-2 4v10a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4V2h12z"/><path d="M6 6h12M12 12v1"/></svg></div>
    <div class="l-btn" style="right:34px"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg></div>
  </div>
</div>

<div class="card order" style="left:846px;top:118px;width:496px;padding:32px 34px 30px">
  <div class="o-head">
    <div class="title">Order K7RT</div>
    ${pill('New', 'warn')}
  </div>
  <div class="sub">Sam Ortiz · Main St</div>
  <div class="rows">
    <div class="row">
      <span class="thumb"><i></i></span>
      <div class="grow"><div class="name">Pastry bag</div><div class="meta">× 2</div></div>
      <span class="val">$12.00</span>
    </div>
    <div class="row kv"><span class="k">Pickup</span><span class="v">Today, 5–6 PM</span></div>
    <div class="row kv"><span class="k">Location</span><span class="v">Main St</span></div>
    <div class="row kv total"><span class="k">Total paid</span><span class="v">$12.99</span></div>
  </div>
  <div class="go">${icon('check', { size: 22, stroke: 2.6 })} Got it</div>
</div>
`

const css = `
.phone .screen.lock { background:linear-gradient(170deg, #2F3A36 0%, #485650 55%, #6E7A70 100%); color:#fff; }
.l-date { position:absolute; top:92px; width:100%; text-align:center; font-size:19px; font-weight:560; opacity:0.85; }
.l-time { position:absolute; top:112px; width:100%; text-align:center; font-size:96px; font-weight:640; letter-spacing:-0.02em; line-height:1.1; }
.l-btn { position:absolute; bottom:44px; width:52px; height:52px; border-radius:99px; background:rgba(255,255,255,0.16); display:flex; align-items:center; justify-content:center; }
.stack { position:absolute; left:12px; right:12px; top:268px; }
.notif { display:flex; gap:12px; align-items:flex-start; padding:14px 15px 16px; border-radius:24px; background:rgba(255,255,255,0.92); color:var(--ink); box-shadow:0 10px 30px -12px rgba(0,0,0,0.4); }
.n-top { display:flex; justify-content:space-between; gap:8px; font-size:14px; font-weight:600; color:var(--muted); white-space:nowrap; }
.n-title { margin-top:2px; font-size:18px; font-weight:650; }
.n-body { margin-top:2px; font-size:16px; line-height:1.3; color:#433F3B; }
.o-head { display:flex; align-items:center; justify-content:space-between; gap:16px; }
.order .rows { margin-top:22px; }
.order .row { padding:16px 0; }
.thumb { width:52px; height:52px; border-radius:14px; background:#EFE6D9; display:inline-flex; align-items:center; justify-content:center; flex-shrink:0; }
.thumb i { width:26px; height:32px; border-radius:3px 3px 5px 5px; background:#C7B39A; position:relative; display:block; }
.thumb i::after { content:''; position:absolute; left:8px; top:13px; width:10px; height:10px; border-radius:99px; background:${BRAND}; }
.kv { justify-content:space-between; }
.kv .k { font-size:19px; font-weight:480; color:var(--muted); }
.kv .v { font-size:21px; font-weight:580; color:var(--ink-2); }
.kv.total .k { color:var(--ink); font-weight:620; }
.kv.total .v { font-size:24px; font-weight:680; color:var(--ink); }
.go { margin-top:22px; height:58px; border-radius:999px; background:var(--ink); color:#fff; display:flex; align-items:center; justify-content:center; gap:10px; font-size:20px; font-weight:640; box-shadow:0 12px 26px -12px rgba(27,26,25,0.55); }
`

module.exports = () => page('Whoever is on shift gets a push', body, css)
