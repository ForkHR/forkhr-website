// Timecards: Jordan clocks in on the time clock tablet at the Main St counter.
// The tablet is the web app's terminal mode ("Terminal time clock"): a 4-digit PIN, prompt
// "Enter your 4 digit pin", breaks on the same screen. Timecards carry "Approved" / "Pending",
// no per-card verdict; the week goes out through "Export to payroll" (a CSV).
const { icon, pill, page } = require('../kit.cjs')

// Scene in its own 720 x 628 box (page x 57, y 80).
const scene = `
<svg viewBox="0 0 720 628" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <pattern id="tiles" width="64" height="56" patternUnits="userSpaceOnUse">
      <rect width="64" height="56" fill="#E1D9CF"/>
      <rect x="2" y="2" width="60" height="24" rx="3" fill="#EFEAE3"/>
      <rect x="-30" y="30" width="60" height="24" rx="3" fill="#EFEAE3"/>
      <rect x="34" y="30" width="60" height="24" rx="3" fill="#EFEAE3"/>
    </pattern>
    <radialGradient id="glow" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#FFE7A0" stop-opacity="0.75"/>
      <stop offset="1" stop-color="#FFE7A0" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="720" height="628" fill="#EAE4DD"/>
  <rect y="246" width="720" height="200" fill="url(#tiles)"/>

  <!-- Menu board -->
  <rect x="48" y="44" width="262" height="168" rx="16" fill="#2F2B28"/>
  <rect x="58" y="54" width="242" height="148" rx="10" fill="none" stroke="#45403B" stroke-width="2"/>
  <g font-family="Bricolage" fill="#F1F0EC">
    <text x="80" y="92" font-size="15" font-weight="700" letter-spacing="3" opacity="0.92">COFFEE</text>
    <g font-size="17" font-weight="500" opacity="0.78">
      <text x="80" y="126">Latte</text><text x="278" y="126" text-anchor="end">4.50</text>
      <text x="80" y="154">Flat white</text><text x="278" y="154" text-anchor="end">4.25</text>
      <text x="80" y="182">Cold brew</text><text x="278" y="182" text-anchor="end">4.75</text>
    </g>
    <g fill="#F1F0EC" opacity="0.32">
      ${[126, 154, 182].map((y, i) => Array.from({ length: [12, 7, 8][i] }, (_, k) => `<circle cx="${236 - k * 9}" cy="${y - 5}" r="1.4"/>`).join('')).join('')}
    </g>
  </g>

  <!-- Pendant lamp -->
  <circle cx="372" cy="92" r="120" fill="url(#glow)"/>
  <rect x="371" y="0" width="2.5" height="44" fill="#2D2926"/>
  <path d="M344 72 C344 52 356 42 372 42 C388 42 400 52 400 72 Z" fill="#2D2926"/>
  <ellipse cx="372" cy="74" rx="9" ry="5" fill="#FFE7A0"/>

  <!-- Espresso machine -->
  <rect x="64" y="252" width="226" height="13" rx="6" fill="#A9A49E"/>
  <path d="M92 228 h30 l-3 24 h-24 Z" fill="#FFFFFF" stroke="#E2DDD6" stroke-width="2"/>
  <path d="M130 228 h30 l-3 24 h-24 Z" fill="#FFFFFF" stroke="#E2DDD6" stroke-width="2"/>
  <rect x="72" y="265" width="210" height="152" rx="22" fill="#CFCAC4"/>
  <rect x="88" y="280" width="178" height="48" rx="11" fill="#E4E1DC"/>
  <circle cx="110" cy="304" r="6" fill="#2D2926"/><circle cx="130" cy="304" r="6" fill="#2D2926"/>
  <circle cx="225" cy="304" r="6" fill="#2D2926"/><circle cx="245" cy="304" r="6" fill="#2D2926"/>
  <circle cx="177" cy="304" r="17" fill="#FFFFFF" stroke="#A9A49E" stroke-width="3"/>
  <path d="M177 304 L187 296" stroke="#C2410C" stroke-width="3" stroke-linecap="round"/>
  <circle cx="177" cy="304" r="2.6" fill="#2D2926"/>
  <rect x="104" y="340" width="48" height="16" rx="6" fill="#7A736C"/>
  <rect x="98" y="354" width="60" height="12" rx="6" fill="#2D2926"/>
  <rect x="202" y="340" width="48" height="16" rx="6" fill="#7A736C"/>
  <rect x="196" y="354" width="60" height="12" rx="6" fill="#2D2926"/>
  <path d="M112 386 h32 l-3 22 h-26 Z" fill="#FFFFFF"/>
  <path d="M210 386 h32 l-3 22 h-26 Z" fill="#FFFFFF"/>
  <rect x="84" y="408" width="186" height="12" rx="6" fill="#A9A49E"/>
  <g stroke="#8F8981" stroke-width="2.5" stroke-linecap="round">
    ${Array.from({ length: 9 }, (_, k) => `<path d="M${102 + k * 19} 411 v6"/>`).join('')}
  </g>
  <path d="M282 300 C 300 304 304 330 300 372" fill="none" stroke="#8F8981" stroke-width="7" stroke-linecap="round"/>
  <circle cx="282" cy="300" r="7" fill="#7A736C"/>

  <!-- To-go cup -->
  <path d="M335 368 h50 l-6 72 h-38 Z" fill="#FFFFFF"/>
  <path d="M338 392 h44 l-2.6 26 h-38.8 Z" fill="#C9A47A"/>
  <rect x="331" y="360" width="58" height="11" rx="5" fill="#EDE7DF"/>

  <!-- Kiosk tablet on its stand -->
  <ellipse cx="548" cy="442" rx="58" ry="7" fill="#C8BCAD"/>
  <rect x="536" y="404" width="24" height="38" rx="6" fill="#3A3531"/>
  <rect x="490" y="434" width="116" height="10" rx="5" fill="#2D2926"/>
  <rect x="428" y="96" width="240" height="318" rx="26" fill="#2D2926"/>

  <!-- Counter -->
  <rect y="440" width="720" height="22" fill="#DDD4C9"/>
  <rect y="440" width="720" height="5" fill="#E8E1D7"/>
  <rect y="462" width="720" height="166" fill="#D3C7B8"/>
  <g stroke="#C9BCAB" stroke-width="3">
    ${Array.from({ length: 15 }, (_, k) => `<path d="M${24 + k * 48} 474 V628"/>`).join('')}
  </g>
</svg>`

// The tablet's screen, drawn in HTML over the scene (page coords: tablet at 57+428, 80+96).
const screenX = 57 + 440
const screenY = 80 + 108
const keypad = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '', '0', '⌫']

const body = `
<div class="scene" style="left:57px;top:80px;width:720px;height:628px">${scene}</div>

<div class="abs kiosk" style="left:${screenX}px;top:${screenY}px;width:216px;height:294px">
  <div class="k-title">Enter your 4 digit pin</div>
  <div class="k-dots"><i></i><i></i><i></i><i></i></div>
  <div class="k-pad">${keypad.map((k) => `<span class="${k ? '' : 'blank'}">${k}</span>`).join('')}</div>
</div>

<div class="card" style="left:830px;top:96px;width:512px;padding:34px 38px 30px">
  <div class="title">Jordan Lee · Monday</div>
  <div class="sub">Main St · shift today 3pm - 10pm</div>
  <div class="rows">
    <div class="row">
      <span class="ic">${icon('login', { size: 24 })}</span>
      <div class="grow"><div class="name">Clocked in</div><div class="meta">Time clock at the counter</div></div>
      <div class="val">2:56 PM</div>
    </div>
    <div class="row">
      <span class="ic">${icon('coffee', { size: 24 })}</span>
      <div class="grow"><div class="name">Break</div><div class="meta">Unpaid · 6:10 – 6:40 PM</div></div>
      <div class="val">30 min</div>
    </div>
    <div class="row">
      <span class="ic">${icon('logout', { size: 24 })}</span>
      <div class="grow"><div class="name">Clocked out</div><div class="meta">Time clock at the counter</div></div>
      <div class="val">10:04 PM</div>
    </div>
  </div>
  <div class="total">
    <div><div class="t-label">Total time</div><div class="t-val">6h 38m</div></div>
    ${pill('Approved', 'ok', { icon: 'check' })}
  </div>
  <div class="foot">${icon('file', { size: 20, stroke: 2.2 })} Exported to payroll as a CSV</div>
</div>
`

const css = `
.kiosk { background:#fff; border-radius:16px; padding:14px 16px; display:flex; flex-direction:column; align-items:center; }
.k-top { width:100%; display:flex; justify-content:space-between; font-size:13px; font-weight:600; color:var(--muted); }
.k-top span:last-child { color:var(--ink); }
.k-title { margin-top:18px; font-size:18px; font-weight:650; }
.k-dots { margin-top:12px; display:flex; gap:12px; }
.k-dots i { width:13px; height:13px; border-radius:99px; background:var(--ink); display:block; }
.k-pad { margin-top:16px; display:grid; grid-template-columns:repeat(3,48px); gap:9px 16px; }
.k-pad span { width:48px; height:40px; border-radius:12px; background:var(--warm-100); display:flex; align-items:center; justify-content:center; font-size:19px; font-weight:600; color:var(--ink-2); }
.k-pad span.blank { background:transparent; }
.ic { width:46px; height:46px; border-radius:14px; background:var(--warm-100); color:var(--ink-2); display:inline-flex; align-items:center; justify-content:center; flex-shrink:0; }
.total { margin-top:8px; display:flex; align-items:center; justify-content:space-between; background:#F4F2EF; border-radius:20px; padding:20px 22px; }
.t-label { font-size:18px; font-weight:450; color:var(--muted); }
.t-val { margin-top:2px; font-size:34px; font-weight:680; letter-spacing:-0.01em; }
.foot { margin-top:20px; display:flex; align-items:center; gap:10px; font-size:19px; font-weight:480; color:#433F3B; }
.foot svg { color:#59554F; }
`

module.exports = () => page('Clocked in at the counter', body, css)
