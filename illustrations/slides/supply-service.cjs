// Supply · Services: Main St's steam wand won't shut off; Northside Roasters sends a technician.
// The request screen's strings (account/supply/services/[id].jsx, components/supply/ServiceVisitCard
// .jsx): status "Completed", the visit's "Arrived … · Finished … · 40 min on site", "Result: Fixed ·
// done", "Parts: 1 × …", Before / After, "Signed by …", then "Your action is required" and
// "Accept work" (it accepts itself after 7 days).
const { icon, pill, page } = require('../kit.cjs')


const puffs = [
  [578, 300, 30],
  [604, 262, 24],
  [592, 226, 18],
  [622, 330, 20],
  [560, 336, 16],
]

const scene = `
<svg viewBox="0 0 720 628" xmlns="http://www.w3.org/2000/svg">
  <rect width="720" height="628" fill="#ECE5DD"/>
  <rect y="470" width="720" height="22" fill="#DDD4C9"/>
  <rect y="470" width="720" height="5" fill="#E8E1D7"/>
  <rect y="492" width="720" height="136" fill="#D3C7B8"/>
  <g stroke="#C9BCAB" stroke-width="3">${Array.from({ length: 15 }, (_, k) => `<path d="M${24 + k * 48} 504 V628"/>`).join('')}</g>

  <!-- Espresso machine, front and centre -->
  <rect x="120" y="186" width="380" height="18" rx="8" fill="#A9A49E"/>
  <path d="M168 150 h44 l-4 36 h-36 Z" fill="#FFFFFF" stroke="#E2DDD6" stroke-width="2"/>
  <path d="M224 150 h44 l-4 36 h-36 Z" fill="#FFFFFF" stroke="#E2DDD6" stroke-width="2"/>
  <rect x="132" y="204" width="356" height="258" rx="34" fill="#CFCAC4"/>
  <rect x="158" y="228" width="304" height="78" rx="16" fill="#E4E1DC"/>
  <circle cx="194" cy="267" r="9" fill="#2D2926"/><circle cx="224" cy="267" r="9" fill="#2D2926"/>
  <circle cx="396" cy="267" r="9" fill="#2D2926"/><circle cx="426" cy="267" r="9" fill="#2D2926"/>
  <circle cx="310" cy="267" r="28" fill="#FFFFFF" stroke="#A9A49E" stroke-width="4"/>
  <path d="M310 267 L326 252" stroke="#C2410C" stroke-width="4" stroke-linecap="round"/>
  <circle cx="310" cy="267" r="4" fill="#2D2926"/>
  <rect x="186" y="326" width="80" height="24" rx="8" fill="#7A736C"/>
  <rect x="176" y="348" width="100" height="18" rx="9" fill="#2D2926"/>
  <rect x="354" y="326" width="80" height="24" rx="8" fill="#7A736C"/>
  <rect x="344" y="348" width="100" height="18" rx="9" fill="#2D2926"/>
  <path d="M200 400 h52 l-5 38 h-42 Z" fill="#FFFFFF"/>
  <path d="M368 400 h52 l-5 38 h-42 Z" fill="#FFFFFF"/>
  <rect x="152" y="440" width="316" height="18" rx="9" fill="#A9A49E"/>
  <g stroke="#8F8981" stroke-width="3" stroke-linecap="round">${Array.from({ length: 14 }, (_, k) => `<path d="M${176 + k * 20} 444 v10"/>`).join('')}</g>

  <!-- The stuck steam wand -->
  <path d="M500 270 C 532 276 540 318 534 378" fill="none" stroke="#8F8981" stroke-width="10" stroke-linecap="round"/>
  <circle cx="500" cy="270" r="11" fill="#7A736C"/>
  ${puffs.map(([x, y, r]) => `<circle cx="${x}" cy="${y}" r="${r}" fill="#FFFFFF" opacity="0.85"/>`).join('')}
  <circle cx="548" cy="370" r="22" fill="#FFFFFF" opacity="0.9"/>
  <circle cx="570" cy="392" r="16" fill="#FFFFFF" opacity="0.8"/>
</svg>`

const body = `
<div class="scene" style="left:57px;top:80px;width:720px;height:628px">${scene}</div>
<div class="fab" style="left:88px;top:110px">${icon('wrench', { size: 28, stroke: 2.2 })}</div>
<div class="abs chip">Steam wand won't shut off</div>

<div class="card" style="left:812px;top:50px;width:530px;padding:28px 32px 26px">
  <div style="display:flex;align-items:center;justify-content:space-between">
    <div class="title" style="font-size:28px">Repair · espresso machine</div>
    ${pill('Completed', 'brand', { sm: true })}
  </div>
  <div class="sub" style="margin-top:4px;font-size:17px">Northside Roasters · Main St</div>
  <div class="visit">
    <div class="v-line">Arrived 2:04 PM · Finished 2:44 PM · 40 min on site</div>
    <div class="v-res">Result: Fixed · done</div>
    <div class="v-sum">Replaced the steam valve seal. The wand shuts off cleanly.</div>
    <div class="v-parts">Parts: 1 × Steam valve seal kit</div>
    <div class="v-photos"><span class="ph before"><em>Before</em></span><span class="ph after"><em>After</em></span></div>
    <div class="v-sign">Signed by Priya Nair</div>
  </div>
  <div class="act">
    <div class="a-h">Your action is required</div>
    <div class="a-t">Northside Roasters finished the work. Review the report below and accept it so they can send the invoice.</div>
    <div class="a-btn">Accept work</div>
  </div>
</div>
`

const css = `
.chip { left:168px; top:120px; height:44px; padding:0 18px; border-radius:12px; background:#FEF3C7; color:#B45309; font-size:19px; font-weight:620; display:flex; align-items:center; }
.visit { margin-top:16px; border:1.5px solid var(--warm-200); border-radius:18px; padding:14px 16px; }
.v-line { font-size:14.5px; color:var(--muted); font-weight:500; }
.v-res { margin-top:6px; font-size:17px; font-weight:650; color:#059669; }
.v-sum { margin-top:4px; font-size:15.5px; line-height:1.35; color:#433F3B; }
.v-parts { margin-top:6px; font-size:15px; font-weight:560; }
.v-photos { margin-top:10px; display:grid; grid-template-columns:1fr 1fr; gap:8px; }
.ph { position:relative; height:74px; border-radius:12px; overflow:hidden; background:#E4E1DC; }
.ph::before { content:''; position:absolute; left:16%; right:16%; top:22%; bottom:0; border-radius:10px 10px 0 0; background:#CFCAC4; }
.ph.before::after { content:''; position:absolute; right:10%; top:18%; width:26px; height:26px; border-radius:99px; background:#fff; box-shadow:10px -8px 0 -4px #fff, -6px -12px 0 -6px #fff; }
.ph em { position:absolute; left:8px; bottom:6px; font-style:normal; background:#fff; border-radius:99px; padding:2px 8px; font-size:12px; font-weight:650; }
.v-sign { margin-top:8px; font-size:14px; color:var(--muted); font-style:italic; }
.act { margin-top:12px; background:var(--blue-50); border-radius:18px; padding:14px 16px 16px; }
.a-h { font-size:16.5px; font-weight:680; color:var(--blue-700); }
.a-t { margin-top:4px; font-size:14.5px; line-height:1.4; color:#433F3B; }
.a-btn { margin-top:10px; height:44px; border-radius:99px; background:var(--ink); color:#fff; font-size:16px; font-weight:650; display:flex; align-items:center; justify-content:center; }
`

module.exports = () => page('A technician for the espresso machine', body, css)
