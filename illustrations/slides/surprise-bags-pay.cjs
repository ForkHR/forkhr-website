// Surprise bags → paying, away from the shop (2:18 PM, Tuesday, November 17): Sam Ortiz pays for
// two Pastry bags at a desk and the order page opens. The checkout card is the public page's
// (frontend/src/pages/grabBags/public/GrabCheckout.jsx): "Pay for your bags", the lines, "Service fee",
// "Total", the wallet button and the hold ("Your bags are held for 14:52"; the hold is 15 minutes). The
// phone is the order page (GrabOrderPage.jsx): "Your bags are reserved", "Your code" over the code,
// "Show this code at the counter", "Pick up" with the window, the location and "Directions", and
// "Free cancel until 3 PM" (cancelMinutes 120 before a 5 PM pickup). The email is the confirmation
// (backend/utils/grabBagNotify.js): "Your surprise bag order at Juniper Coffee: K7RT", "Your order is
// in", "Show this code when you pick up". No sales tax line: these bags are not taxable.
const { icon, page } = require('../kit.cjs')

const BRAND = '#1F6F5C'

const WALLET = '<path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"/><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"/>'
const MAIL = '<rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>'
const MAP = '<path d="M14.1 6.1 9.9 3.9a2 2 0 0 0-1.8 0L3.6 6.1A1 1 0 0 0 3 7v12.4a1 1 0 0 0 1.4.9l3.7-1.9a2 2 0 0 1 1.8 0l4.2 2.1a2 2 0 0 0 1.8 0l4.5-2.2a1 1 0 0 0 .6-.9V5a1 1 0 0 0-1.4-.9l-3.7 1.9a2 2 0 0 1-1.8 0z"/><path d="M15 5.8v15M9 3.2v15"/>'
const glyph = (paths, size = 18, stroke = 2.2) =>
  `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round">${paths}</svg>`

// The scene: a desk by an office window in its own 643 x 628 box (page x 700, y 80).
const scene = `
<svg viewBox="0 0 643 628" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <clipPath id="pane"><rect x="150" y="46" width="452" height="310" rx="6"/></clipPath>
  </defs>
  <rect width="643" height="628" fill="#E6E2DA"/>
  <!-- the afternoon light falling on the wall and the desk -->
  <path d="M360 356 L600 356 L643 470 L420 470 Z" fill="#F1ECE3"/>

  <!-- Window over the street -->
  <rect x="136" y="32" width="480" height="338" rx="14" fill="#F7F4EF"/>
  <g clip-path="url(#pane)">
    <rect x="150" y="46" width="452" height="310" fill="#D3E3EC"/>
    <circle cx="520" cy="104" r="30" fill="#FFF3CF"/>
    <ellipse cx="300" cy="96" rx="52" ry="13" fill="#F2F6F8"/>
    <ellipse cx="330" cy="86" rx="30" ry="12" fill="#F2F6F8"/>
    <rect x="150" y="200" width="76" height="156" fill="#C7B39D"/>
    <rect x="232" y="168" width="96" height="188" fill="#D8C9B6"/>
    <rect x="336" y="214" width="70" height="142" fill="#BFA78F"/>
    <rect x="412" y="182" width="104" height="174" fill="#D3C2AD"/>
    <rect x="522" y="226" width="80" height="130" fill="#C7B39D"/>
    <g fill="#A9C2CF">
      ${[[248, 186], [276, 186], [304, 186], [248, 220], [304, 220], [276, 254], [430, 200], [460, 200], [490, 200], [430, 236], [490, 236], [460, 272], [166, 220], [196, 250], [352, 232], [380, 262], [540, 246], [570, 276]].map(([x, y]) => `<rect x="${x}" y="${y}" width="14" height="18" rx="2"/>`).join('')}
    </g>
    <!-- a tree across the street -->
    <rect x="356" y="292" width="8" height="64" fill="#7C6A58"/>
    <circle cx="360" cy="282" r="34" fill="#9CB89A"/>
    <circle cx="384" cy="296" r="24" fill="#89A887"/>
  </g>
  <rect x="370" y="46" width="10" height="310" fill="#F7F4EF"/>
  <rect x="124" y="364" width="504" height="14" rx="5" fill="#ECE6DD"/>

  <!-- Desk -->
  <rect y="470" width="643" height="22" fill="#B99A78"/>
  <rect y="470" width="643" height="5" fill="#C9AC8A"/>
  <rect y="492" width="643" height="136" fill="#A88A69"/>
  <rect x="560" y="492" width="16" height="136" fill="#957756"/>

  <!-- Laptop, open, with a quiet screen -->
  <path d="M250 300 h230 a10 10 0 0 1 10 10 v150 h-250 v-150 a10 10 0 0 1 10 -10 Z" fill="#2D2926"/>
  <rect x="254" y="306" width="232" height="148" rx="5" fill="#EEF1F2"/>
  <rect x="270" y="324" width="96" height="10" rx="5" fill="#C9D2D6"/>
  <rect x="270" y="344" width="196" height="8" rx="4" fill="#DCE2E5"/><rect x="270" y="360" width="176" height="8" rx="4" fill="#DCE2E5"/><rect x="270" y="376" width="186" height="8" rx="4" fill="#DCE2E5"/>
  <rect x="270" y="400" width="80" height="34" rx="6" fill="#DCE2E5"/><rect x="358" y="400" width="80" height="34" rx="6" fill="#DCE2E5"/>
  <path d="M222 460 h296 l-10 12 h-276 Z" fill="#8F8981"/>

  <!-- Mug and a notebook -->
  <g transform="translate(536 412)">
    <path d="M4 4 h46 v42 a12 12 0 0 1 -12 12 h-22 a12 12 0 0 1 -12 -12 Z" fill="#FFFFFF"/>
    <path d="M50 14 h7 a10 10 0 0 1 0 20 h-7" fill="none" stroke="#FFFFFF" stroke-width="6"/>
    <rect x="10" y="20" width="34" height="12" rx="4" fill="${BRAND}" opacity="0.85"/>
  </g>
  <g transform="translate(36 448) rotate(-6)">
    <rect width="140" height="22" rx="4" fill="#E9DFD0"/>
    <rect width="140" height="6" rx="3" fill="#C96F4A"/>
  </g>
  <!-- A plant on the sill -->
  <g transform="translate(508 286)">
    <path d="M30 16 C12 2 2 22 -2 44 C14 34 24 30 30 46 Z" fill="#7FA584"/>
    <path d="M38 12 C56 -4 72 16 76 42 C60 32 48 32 40 48 Z" fill="#6A9471"/>
    <path d="M18 44 h40 l-5 32 h-30 Z" fill="#D9A27E"/>
    <rect x="14" y="40" width="48" height="10" rx="4" fill="#C98C66"/>
  </g>
</svg>`

const body = `
<div class="scene" style="left:700px;top:80px;width:643px;height:628px">${scene}</div>

<div class="card pay" style="left:60px;top:88px;width:424px">
  <div class="title">Pay for your bags</div>
  <div class="sub">Juniper Coffee · Main St</div>
  <div class="lines">
    <div class="ln"><span>Pastry bag × 2</span><b>$12.00</b></div>
    <div class="ln"><span>Service fee</span><b>$1.49</b></div>
    <div class="ln tot"><span>Total</span><b>$13.49</b></div>
  </div>
  <div class="wallet">${glyph(WALLET, 22, 2.2)}<span>Pay</span></div>
  <div class="hold">${icon('clock', { size: 18, stroke: 2.4 })}<span>Your bags are held for <b>14:52</b></span></div>
</div>

<div class="card mail" style="left:60px;top:548px;width:424px">
  <div class="m-top"><span class="m-ic">${glyph(MAIL, 20, 2.2)}</span><span class="m-from">Juniper Coffee</span><span class="m-when">2:18 PM</span></div>
  <div class="m-subj">Your surprise bag order at Juniper Coffee: K7RT</div>
  <div class="m-body">Your order is in · Show this code when you pick up</div>
</div>

<div class="abs connector" style="left:488px;top:312px">
  <span class="pill ok sm">${icon('check', { size: 14, stroke: 3 })} Paid</span>
  <svg width="80" height="24" viewBox="0 0 80 24"><path d="M4 12 H62" stroke="#2563EB" stroke-width="4" stroke-linecap="round" stroke-dasharray="1 12"/><path d="M58 3 L70 12 L58 21" fill="none" stroke="#2563EB" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>
</div>

<div class="phone" style="left:574px;top:62px;width:316px;height:664px">
  <div class="screen op">
    <div class="island"></div>
    <div class="top"><span class="mark">J</span><span class="shop">Juniper Coffee</span></div>
    <div class="h1">Your bags are reserved</div>
    <div class="code-card">
      <small>Your code</small>
      <div class="code">K7RT</div>
      <div class="help">Show this code at the counter</div>
    </div>
    <div class="h3">Pick up</div>
    <div class="when">Today, 5–6 PM</div>
    <div class="place"><b>Main St</b>214 Main St, Brooklyn</div>
    <span class="dir">${glyph(MAP, 15, 2.3)}Directions</span>
    <div class="cancel">Free cancel until 3 PM</div>
  </div>
</div>
`

const css = `
.pay { padding:30px 32px 26px; }
.lines { margin-top:20px; border-top:1.5px solid var(--hair); }
.ln { display:flex; justify-content:space-between; align-items:center; padding:13px 0; border-bottom:1.5px solid var(--hair); font-size:19px; color:#433F3B; }
.ln b { font-weight:600; color:var(--ink-2); }
.ln.tot { border-bottom:0; font-size:22px; color:var(--ink); font-weight:650; }
.ln.tot b { font-weight:700; color:var(--ink); }
.wallet { margin-top:8px; height:54px; border-radius:99px; background:#0F0F0F; color:#fff; display:flex; align-items:center; justify-content:center; gap:10px; font-size:20px; font-weight:650; }
.hold { margin-top:16px; display:flex; align-items:center; justify-content:center; gap:8px; font-size:17px; color:var(--muted); font-weight:500; }
.hold b { color:var(--ink); font-weight:650; }
.mail { padding:20px 24px 20px; }
.m-top { display:flex; align-items:center; gap:10px; }
.m-ic { width:36px; height:36px; border-radius:11px; background:var(--warm-100); color:var(--ink-2); display:inline-flex; align-items:center; justify-content:center; }
.m-from { font-size:17px; font-weight:640; flex:1; }
.m-when { font-size:15px; color:var(--muted); }
.m-subj { margin-top:10px; font-size:17px; font-weight:600; line-height:1.3; }
.m-body { margin-top:3px; font-size:15.5px; color:var(--muted); }
.connector { display:flex; flex-direction:column; align-items:center; gap:10px; width:84px; }
.screen.op { background:#FFFFFF; padding:54px 18px 0; color:#141413; }
.top { display:flex; align-items:center; gap:9px; }
.mark { width:30px; height:30px; border-radius:99px; background:${BRAND}; color:#fff; display:inline-flex; align-items:center; justify-content:center; font-size:15px; font-weight:700; flex-shrink:0; }
.shop { font-size:15.5px; font-weight:620; }
.h1 { margin-top:14px; font-size:27px; font-weight:680; letter-spacing:-0.02em; line-height:1.1; }
.code-card { margin-top:16px; padding:16px 14px 16px; border-radius:20px; background:#EAF3EF; text-align:center; }
.code-card small { display:block; font-size:13.5px; font-weight:620; color:${BRAND}; }
.code { margin-top:4px; font-size:50px; font-weight:720; letter-spacing:0.16em; line-height:1.05; padding-left:0.16em; color:#141413; }
.help { margin-top:6px; font-size:14px; color:#3F4A46; font-weight:520; }
.h3 { margin-top:18px; font-size:14px; font-weight:650; color:#8f8b85; }
.when { margin-top:2px; font-size:23px; font-weight:680; letter-spacing:-0.01em; }
.place { margin-top:6px; font-size:14.5px; color:#63605b; line-height:1.35; }
.place b { display:block; color:#141413; font-size:15.5px; font-weight:640; }
.dir { margin-top:10px; display:inline-flex; align-items:center; gap:7px; height:36px; padding:0 15px; border-radius:99px; border:1.5px solid #e1ded8; font-size:15px; font-weight:620; }
.cancel { margin-top:16px; padding-top:13px; border-top:1.5px solid #e8e6e1; font-size:14.5px; color:#63605b; font-weight:520; }
`

module.exports = () => page('Paid in a tap, with no account', body, css)
