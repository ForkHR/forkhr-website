// App blocker: a break is free, and five minutes when it matters. Jordan is at work at Main St
// (Tue Nov 10, 3:00 PM – 10:00 PM) and asks for five minutes at 8:05 PM. The sheet's words are the
// block screen's link ("I need my phone for 5 minutes") and the API's UNLOCK_REASONS ('Family',
// 'A code from my bank', 'Work', 'Something else'; backend/utils/appBlockerRules.js), three unlocks a
// shift. The card is the person's day in the Activity's words (eventWords): "Blocked" with the
// app's name, "On break: apps open until 6:40 PM", "Unlocked for 5 minutes" with the reason, and
// "Right now" in the People table's words (nowWords): "Unlocked · 4 min left".
const { icon, page } = require('../kit.cjs')

const LOCK = '<rect width="18" height="11" x="3" y="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/>'
const UNLOCK = '<rect width="18" height="11" x="3" y="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 9.9-1"/>'
const own = (paths, size = 23) =>
  `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round">${paths}</svg>`

// Scene in its own 660 x 628 box (page x 57, y 80): the break corner by Main St's back door.
const scene = `
<svg viewBox="0 0 660 628" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <pattern id="brick" width="72" height="40" patternUnits="userSpaceOnUse">
      <rect width="72" height="40" fill="#DCCFC1"/>
      <rect x="2" y="2" width="68" height="16" rx="2" fill="#E6DCD0"/>
      <rect x="-34" y="22" width="68" height="16" rx="2" fill="#E6DCD0"/>
      <rect x="38" y="22" width="68" height="16" rx="2" fill="#E6DCD0"/>
    </pattern>
    <radialGradient id="glow" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#FFE7A0" stop-opacity="0.7"/>
      <stop offset="1" stop-color="#FFE7A0" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="660" height="628" fill="url(#brick)"/>

  <!-- Wall lamp -->
  <circle cx="300" cy="96" r="110" fill="url(#glow)"/>
  <rect x="284" y="70" width="32" height="10" rx="4" fill="#2D2926"/>
  <path d="M276 80 h48 l-8 30 h-32 Z" fill="#2D2926"/>
  <ellipse cx="300" cy="111" rx="12" ry="4" fill="#FFE7A0"/>

  <!-- Back door with a small window, propped open a crack -->
  <rect x="56" y="96" width="196" height="420" rx="8" fill="#B9AB9B"/>
  <rect x="68" y="108" width="172" height="408" rx="6" fill="#5E7C6B"/>
  <rect x="96" y="140" width="116" height="120" rx="8" fill="#2F3A44"/>
  <rect x="96" y="140" width="116" height="120" rx="8" fill="none" stroke="#4C6658" stroke-width="6"/>
  <circle cx="186" cy="176" r="4" fill="#F1F0EC" opacity="0.6"/>
  <circle cx="128" cy="210" r="3" fill="#F1F0EC" opacity="0.45"/>
  <rect x="96" y="300" width="116" height="160" rx="8" fill="none" stroke="#56725F" stroke-width="4"/>
  <rect x="210" y="318" width="10" height="44" rx="5" fill="#D9C9A6"/>

  <!-- Hook with an apron -->
  <rect x="300" y="168" width="40" height="8" rx="4" fill="#8F8981"/>
  <path d="M320 176 v14" stroke="#8F8981" stroke-width="5" stroke-linecap="round"/>
  <path d="M306 196 q14 -14 28 0 l10 22 h-48 Z" fill="#2F2B28"/>
  <path d="M290 218 h60 l-6 112 q-24 10 -48 0 Z" fill="#2F2B28"/>
  <rect x="306" y="262" width="28" height="22" rx="4" fill="#45403B"/>
  <path d="M296 226 q-22 30 -16 70" stroke="#2F2B28" stroke-width="6" fill="none" stroke-linecap="round"/>

  <!-- Floor -->
  <rect y="516" width="660" height="112" fill="#CDBFAE"/>
  <rect y="516" width="660" height="6" fill="#D9CCBC"/>

  <!-- Stool with a coffee on it -->
  <g transform="translate(-52 0)">
  <ellipse cx="382" cy="596" rx="70" ry="8" fill="#B8A894"/>
  <rect x="322" y="430" width="120" height="18" rx="9" fill="#7A6450"/>
  <path d="M338 448 l-14 146 M426 448 l14 146 M352 448 l-4 146 M412 448 l4 146" stroke="#6A5643" stroke-width="7" stroke-linecap="round"/>
  <path d="M332 528 h100" stroke="#6A5643" stroke-width="6" stroke-linecap="round"/>
  <path d="M366 396 h34 l-4 34 h-26 Z" fill="#FFFFFF"/>
  <path d="M368 408 h30 l-2 14 h-26 Z" fill="#C9A47A"/>
  <rect x="362" y="390" width="42" height="9" rx="4" fill="#EDE7DF"/>
  <path d="M376 380 q-6 -10 0 -18 M390 380 q-6 -10 0 -18" stroke="#FFFFFF" stroke-width="3" fill="none" stroke-linecap="round" opacity="0.8"/>
  </g>
</svg>`

const reasons = ['Family', 'A code from my bank', 'Work', 'Something else']

const body = `
<div class="scene" style="left:57px;top:80px;width:660px;height:628px">${scene}</div>

<div class="phone" style="left:478px;top:62px;width:316px;height:664px">
  <div class="screen dimmed">
    <div class="island"></div>
    <div class="behind">
      <div class="b-title">Instagram is blocked</div>
      <div class="b-text">Juniper Coffee blocks it while you are at work.</div>
    </div>
    <div class="sheet">
      <div class="grab"></div>
      <div class="sh-title">I need my phone for 5 minutes</div>
      <div class="sh-q">What is it for?</div>
      <div class="opts">
        ${reasons
          .map((r) => `<div class="opt${r === 'A code from my bank' ? ' on' : ''}"><span class="radio"></span>${r}</div>`)
          .join('')}
      </div>
      <div class="left">2 of 3 left this shift</div>
      <div class="go">Unlock</div>
    </div>
  </div>
</div>

<div class="card" style="left:846px;top:98px;width:496px;padding:32px 34px 28px">
  <div class="title">Jordan Lee · Today</div>
  <div class="sub">Main St · 3:00 PM – 10:00 PM</div>
  <div class="rows">
    <div class="row">
      <span class="ic">${own(LOCK)}</span>
      <div class="grow"><div class="name">Blocked</div><div class="meta">Instagram</div></div>
      <div class="val">5:20 PM</div>
    </div>
    <div class="row">
      <span class="ic ok">${icon('coffee', { size: 23 })}</span>
      <div class="grow"><div class="name">On break: apps open until 6:40 PM</div><div class="meta">Break on the time clock</div></div>
      <div class="val">6:10 PM</div>
    </div>
    <div class="row">
      <span class="ic warn">${own(UNLOCK)}</span>
      <div class="grow"><div class="name">Unlocked for 5 minutes</div><div class="meta">A code from my bank</div></div>
      <div class="val">8:05 PM</div>
    </div>
  </div>
  <div class="now">
    <span class="n-label">Right now</span>
    <span class="pill warn sm">Unlocked · 4 min left</span>
  </div>
</div>
`

const css = `
.phone .screen.dimmed { background:#F4F3F1; font-family:-apple-system, 'SF Pro Text', 'Segoe UI', Helvetica, Arial, sans-serif; color:#111; }
.behind { position:absolute; left:26px; right:26px; top:92px; text-align:center; }
.b-title { font-size:22px; font-weight:700; }
.b-text { margin-top:8px; font-size:15px; color:#5B5B60; line-height:1.35; }
.phone .screen.dimmed::after { content:''; position:absolute; inset:0; background:rgba(17,17,17,0.38); z-index:1; }
.sheet { position:absolute; left:0; right:0; bottom:0; top:178px; z-index:2; background:#fff; border-radius:28px 28px 0 0; padding:12px 22px 34px; display:flex; flex-direction:column; }
.grab { width:44px; height:5px; border-radius:99px; background:#D6D3CE; align-self:center; }
.sh-title { margin-top:16px; font-size:21px; font-weight:700; letter-spacing:-0.01em; line-height:1.2; }
.sh-q { margin-top:6px; font-size:16px; color:#5B5B60; }
.opts { margin-top:12px; display:flex; flex-direction:column; gap:7px; }
.opt { display:flex; align-items:center; gap:12px; height:44px; padding:0 14px; border-radius:14px; background:#F4F3F1; font-size:16.5px; font-weight:500; }
.opt .radio { width:20px; height:20px; border-radius:99px; border:2px solid #B9B5AF; background:#fff; flex-shrink:0; }
.opt.on { background:#111; color:#fff; }
.opt.on .radio { border:6px solid #fff; background:#111; }
.left { margin-top:12px; font-size:14.5px; color:#77726C; text-align:center; }
.go { margin-top:10px; height:52px; border-radius:15px; background:#111; color:#fff; display:flex; align-items:center; justify-content:center; font-size:18px; font-weight:600; }
.rows { margin-top:22px; }
.row { gap:16px; padding:16px 0; }
.row .name { font-size:20px; line-height:1.25; }
.row .meta { font-size:17px; }
.row .val { font-size:19px; color:var(--muted); font-weight:560; }
.ic { width:46px; height:46px; border-radius:14px; background:var(--warm-100); color:var(--ink-2); display:inline-flex; align-items:center; justify-content:center; flex-shrink:0; }
.ic.ok { background:var(--green-100); color:var(--green-700); }
.ic.warn { background:var(--amber-100); color:var(--amber-700); }
.now { margin-top:8px; display:flex; align-items:center; justify-content:space-between; background:#F4F2EF; border-radius:18px; padding:16px 20px; }
.n-label { font-size:18px; font-weight:560; color:#433F3B; }
.now .pill.sm { height:32px; font-size:15.5px; }
`

module.exports = () => page('A break is a break, and five minutes when it matters', body, css)
