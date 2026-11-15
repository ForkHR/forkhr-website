// App blocker: before it turns on, each person reads the notice and agrees on their own phone. The
// notice is the API's noticeOf (backend/utils/appBlockerRules.js) for Juniper Coffee's rule (during
// scheduled shifts, breaks free, social media, games and video, a 5-minute unlock): its title, the
// four rows When / What / Always open / What your manager sees, and the fine print. The card is the
// App blocker page's People table (frontend/src/pages/appBlocker/AppBlockerPage.jsx): Person, Their
// phone in deviceWords' words ("iPhone" / "On since Nov 2", "Not set up" / "Asked Nov 12"), and
// Right now in nowWords' ("Blocked until 10:00 PM", "On break until 6:40 PM", "Off shift").
const { avatar, page, appIcon } = require('../kit.cjs')

// Scene in its own 660 x 628 box (page x 57, y 80): the staff corner at Main St.
const locker = (x) => `
  <g transform="translate(${x} 240)">
    <rect width="96" height="276" rx="6" fill="#9DAFA4"/>
    <rect x="6" y="6" width="84" height="128" rx="4" fill="#AEBFB4"/>
    <rect x="6" y="142" width="84" height="128" rx="4" fill="#AEBFB4"/>
    ${[0, 1, 2, 3].map((k) => `<rect x="22" y="${22 + k * 10}" width="52" height="4" rx="2" fill="#8C9F93"/>`).join('')}
    ${[0, 1, 2, 3].map((k) => `<rect x="22" y="${158 + k * 10}" width="52" height="4" rx="2" fill="#8C9F93"/>`).join('')}
    <rect x="72" y="84" width="8" height="26" rx="4" fill="#6F8277"/>
    <rect x="72" y="220" width="8" height="26" rx="4" fill="#6F8277"/>
  </g>`

const scene = `
<svg viewBox="0 0 660 628" xmlns="http://www.w3.org/2000/svg">
  <rect width="660" height="628" fill="#EAE4DD"/>
  <rect y="480" width="660" height="10" fill="#DCD3C8"/>

  <!-- Cork board with the week's schedule and a note -->
  <rect x="40" y="52" width="230" height="160" rx="12" fill="#B98E62"/>
  <rect x="50" y="62" width="210" height="140" rx="8" fill="#CFA677"/>
  <g transform="rotate(-3 112 132)">
    <rect x="66" y="76" width="96" height="116" rx="4" fill="#FFFFFF"/>
    <rect x="76" y="88" width="56" height="7" rx="3" fill="#2D2926"/>
    ${[0, 1, 2, 3, 4, 5].map((k) => `<rect x="76" y="${104 + k * 13}" width="${[70, 52, 64, 46, 60, 40][k]}" height="5" rx="2.5" fill="#C9C2B8"/>`).join('')}
    <circle cx="114" cy="80" r="5" fill="#C2410C"/>
  </g>
  <g transform="rotate(4 214 120)">
    <rect x="182" y="88" width="64" height="62" rx="3" fill="#FCE7A6"/>
    <rect x="192" y="102" width="40" height="5" rx="2.5" fill="#C8A85A"/>
    <rect x="192" y="114" width="30" height="5" rx="2.5" fill="#C8A85A"/>
    <circle cx="214" cy="92" r="5" fill="#2563EB"/>
  </g>
  <rect x="190" y="164" width="52" height="30" rx="3" fill="#E9E2D8"/>
  <circle cx="216" cy="168" r="4" fill="#047857"/>

  <!-- Lockers -->
  ${locker(40)}
  ${locker(142)}
  ${locker(244)}

  <!-- Coat hook with a jacket -->
  <rect x="360" y="170" width="52" height="8" rx="4" fill="#8F8981"/>
  <path d="M386 178 v14" stroke="#8F8981" stroke-width="5" stroke-linecap="round"/>
  <path d="M362 200 q24 -18 48 0 l10 150 h-68 Z" fill="#C98F5B"/>
  <path d="M386 196 v154" stroke="#B57A47" stroke-width="3"/>

  <!-- Floor and a bench -->
  <rect y="516" width="660" height="112" fill="#D3C7B8"/>
  <rect y="516" width="660" height="6" fill="#DDD3C6"/>
  <rect x="40" y="540" width="330" height="20" rx="8" fill="#A9927A"/>
  <rect x="64" y="560" width="14" height="50" rx="5" fill="#8C755F"/>
  <rect x="332" y="560" width="14" height="50" rx="5" fill="#8C755F"/>
  <path d="M282 510 h30 l-3 30 h-24 Z" fill="#FFFFFF"/>
  <path d="M284 518 h26 l-1.6 12 h-22.8 Z" fill="#C9A47A"/>
  <rect x="279" y="505" width="36" height="8" rx="4" fill="#EDE7DF"/>
</svg>`

const rows = [
  ['When', 'During your scheduled shifts. Never on a break, never off work.'],
  ['What', 'Social media, Games and Video &amp; streaming.'],
  ['Always open', 'Phone, Messages, Maps, the camera and Fork. And 5 minutes of anything, if you need it.'],
  ['What your manager sees', 'That it is on, and each time a blocked app is opened at work. Nothing else about your phone.'],
]

const body = `
<div class="scene" style="left:57px;top:80px;width:660px;height:628px">${scene}</div>

<div class="phone" style="left:478px;top:62px;width:316px;height:664px">
  <div class="screen notice">
    <div class="island"></div>
    <div class="n-wrap">
      ${appIcon(44)}
      <div class="n-title">Juniper Coffee blocks some apps while you work</div>
      ${rows.map(([t, x]) => `<div class="n-row"><div class="n-h">${t}</div><div class="n-t">${x}</div></div>`).join('')}
      <div class="n-fine">You can turn it off in Settings at any time. Your manager is told when you do.</div>
    </div>
    <div class="n-foot"><div class="n-go">Turn it on</div></div>
  </div>
</div>

<div class="card" style="left:846px;top:118px;width:496px;padding:32px 34px 26px">
  <div class="title">App blocker · People</div>
  <div class="sub">Main St · at work now</div>
  <div class="heads"><span>Person</span><span>Right now</span></div>
  <div class="rows">
    <div class="row">
      ${avatar('Jordan Lee', 'green', 50)}
      <div class="grow"><div class="top"><span class="name">Jordan Lee</span><span class="pill brand sm">Blocked until 10:00 PM</span></div><div class="meta">iPhone · On since Nov 2</div></div>
    </div>
    <div class="row">
      ${avatar('Maya Chen', 'grey', 50)}
      <div class="grow"><div class="top"><span class="name">Maya Chen</span><span class="pill neutral sm">On break until 6:40 PM</span></div><div class="meta">Android · On since Nov 3</div></div>
    </div>
    <div class="row">
      ${avatar('Luis Ortega', 'red', 50)}
      <div class="grow"><div class="top"><span class="name">Luis Ortega</span><span class="off">Off shift</span></div><div class="meta warnt">Not set up · Asked Nov 12</div></div>
    </div>
  </div>
</div>
`

const css = `
.phone .screen.notice { background:#FFFFFF; font-family:-apple-system, 'SF Pro Text', 'Segoe UI', Helvetica, Arial, sans-serif; color:#111; }
.n-wrap { position:absolute; left:24px; right:24px; top:60px; bottom:92px; overflow:hidden; display:flex; flex-direction:column; align-items:flex-start;
  -webkit-mask-image:linear-gradient(to bottom, #000 90%, transparent); mask-image:linear-gradient(to bottom, #000 90%, transparent); }
.n-wrap > span:first-child { box-shadow:0 5px 14px rgba(0,0,0,0.14) !important; border-radius:13px !important; }
.n-title { margin-top:12px; font-size:19px; font-weight:700; letter-spacing:-0.01em; line-height:1.22; }
.n-row { margin-top:11px; }
.n-h { font-size:15px; font-weight:650; }
.n-t { margin-top:1px; font-size:15px; line-height:1.33; color:#4E4E53; }
.n-fine { margin-top:14px; font-size:14px; line-height:1.36; color:#77726C; }
.n-foot { position:absolute; left:0; right:0; bottom:0; padding:10px 22px 28px; background:#fff; }
.n-go { height:52px; border-radius:15px; background:#111; color:#fff; display:flex; align-items:center; justify-content:center; font-size:18px; font-weight:600; }
.heads { margin-top:22px; display:flex; justify-content:space-between; font-size:15px; font-weight:560; color:var(--faint); }
.rows { margin-top:10px; }
.row { gap:16px; padding:16px 0; }
.row .name { font-size:21px; }
.row .top { display:flex; align-items:center; justify-content:space-between; gap:12px; }
.row .top .name { white-space:nowrap; }
.row .top + .meta { margin-top:4px; }
.row .meta { font-size:17px; }
.row .meta.warnt { color:var(--amber-700); }
.row .pill.sm { height:32px; font-size:15px; }
.off { font-size:17px; color:var(--faint); font-weight:500; }
`

module.exports = () => page('Agreed to on their own phone', body, css)
