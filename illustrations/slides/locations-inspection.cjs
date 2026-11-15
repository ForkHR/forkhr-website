// Locations → Health inspections: Main St's latest New York City inspection, as Fork shows it.
// The data is the city's published restaurant inspections (backend/utils/healthInspections.js):
// a letter grade A / B / C with its points (A is 0 to 13), the program and stage of the inspection,
// and each violation, critical or general, as the city words it (shortened here). The banner is
// the notification a new result sends: "New health inspection at Main St" / "Cycle Inspection ·
// Re-inspection on Oct 14, 2026 · Grade A". The placard in the window is drawn generic: no seal,
// no city name. New York City only for now.
const { icon, pill, page, appIcon } = require('../kit.cjs')

const BRAND = '#1F6F5C'

const bricks = (x, y, w, h) => {
  const rows = []
  for (let r = 0; r * 22 < h; r += 1) {
    const off = r % 2 ? 0 : -26
    for (let c = off; c < w; c += 52) rows.push(`<rect x="${x + c + 2}" y="${y + r * 22 + 2}" width="48" height="18" rx="2"/>`)
  }
  return `<g fill="#C58E6E">${rows.join('')}</g>`
}

const scene = `
<svg viewBox="0 0 720 628" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <clipPath id="wall"><rect width="720" height="548"/></clipPath>
  </defs>
  <rect width="720" height="628" fill="#B97F60"/>
  <g clip-path="url(#wall)">${bricks(0, 0, 720, 548)}</g>

  <!-- Sign band -->
  <rect x="40" y="30" width="640" height="70" rx="8" fill="#1E5E4E"/>
  <text x="360" y="76" text-anchor="middle" font-family="Bricolage" font-size="32" font-weight="700" letter-spacing="6" fill="#F4EFE6">JUNIPER COFFEE</text>

  <!-- Awning -->
  <path d="M40 116 H680 L700 176 H20 Z" fill="#F4EFE6"/>
  <g fill="${BRAND}">${Array.from({ length: 10 }, (_, k) => `<path d="M${40 + k * 64} 116 h32 l${k < 5 ? -4 : 4} 60 h-32 Z" transform="translate(${(k - 4.5) * -2} 0)"/>`).join('')}</g>
  <path d="M20 176 ${Array.from({ length: 17 }, (_, k) => `q20 22 40 0`).join(' ')} V176 Z" fill="#F4EFE6"/>
  <g fill="${BRAND}">${Array.from({ length: 17 }, (_, k) => (k % 2 ? '' : `<path d="M${20 + k * 40} 176 q20 22 40 0 Z"/>`)).join('')}</g>

  <!-- Shop window -->
  <rect x="58" y="206" width="380" height="306" rx="6" fill="#3E3A36"/>
  <rect x="70" y="218" width="356" height="282" rx="3" fill="#D6E0E4"/>
  <path d="M70 218 L190 218 L96 500 L70 500 Z" fill="#FFFFFF" opacity="0.28"/>
  <path d="M232 218 L262 218 L168 500 L138 500 Z" fill="#FFFFFF" opacity="0.2"/>
  <!-- inside: a lamp and the counter -->
  <rect x="246" y="218" width="2" height="40" fill="#5E5650"/>
  <path d="M228 274 C228 260 236 254 247 254 C258 254 266 260 266 274 Z" fill="#5E5650"/>
  <rect x="70" y="430" width="356" height="70" fill="#B8AFA3" opacity="0.7"/>
  <text x="190" y="330" text-anchor="middle" font-family="Bricolage" font-size="30" font-weight="700" fill="#FFFFFF">Juniper</text>
  <text x="190" y="354" text-anchor="middle" font-family="Bricolage" font-size="14" font-weight="600" letter-spacing="2.5" fill="#FFFFFF">COFFEE · MAIN ST</text>
  <!-- The letter grade in the window -->
  <g transform="translate(318 236) rotate(2)">
    <rect width="92" height="112" rx="8" fill="#FFFFFF" stroke="#E2DED8" stroke-width="2"/>
    <text x="46" y="84" text-anchor="middle" font-family="Bricolage" font-size="76" font-weight="800" fill="#2563EB">A</text>
  </g>
  <!-- Window box -->
  <rect x="52" y="512" width="392" height="34" rx="5" fill="#6B5444"/>
  <g fill="#6F9E7A"><circle cx="90" cy="508" r="16"/><circle cx="128" cy="502" r="18"/><circle cx="170" cy="508" r="15"/><circle cx="330" cy="506" r="16"/><circle cx="372" cy="502" r="18"/><circle cx="410" cy="508" r="15"/></g>
  <g fill="#F2C14E"><circle cx="112" cy="498" r="5"/><circle cx="150" cy="494" r="5"/><circle cx="352" cy="496" r="5"/><circle cx="392" cy="494" r="5"/></g>

  <!-- Door -->
  <rect x="484" y="206" width="176" height="342" rx="6" fill="${BRAND}"/>
  <rect x="502" y="224" width="140" height="190" rx="4" fill="#D6E0E4"/>
  <path d="M502 224 L572 224 L520 414 L502 414 Z" fill="#FFFFFF" opacity="0.28"/>
  <rect x="502" y="430" width="140" height="100" rx="4" fill="#185445"/>
  <rect x="620" y="352" width="10" height="64" rx="5" fill="#E6D3A3"/>
  <g transform="translate(528 262)">
    <path d="M44 -14 L22 0 M44 -14 L66 0" stroke="#3E3A36" stroke-width="2"/>
    <rect width="88" height="38" rx="6" fill="#FFFFFF"/>
    <text x="44" y="26" text-anchor="middle" font-family="Bricolage" font-size="18" font-weight="700" fill="#1B1A19">Open</text>
  </g>

  <!-- Sidewalk -->
  <rect y="548" width="720" height="80" fill="#CFCAC4"/>
  <rect y="548" width="720" height="8" fill="#BDB7AF"/>
  <g stroke="#BDB7AF" stroke-width="3">${Array.from({ length: 6 }, (_, k) => `<path d="M${60 + k * 130} 556 L${40 + k * 130} 628"/>`).join('')}</g>
  <!-- Planter by the door -->
  <g transform="translate(662 470)">
    <path d="M-4 0 h44 l-6 78 h-32 Z" fill="#8A7464"/>
    <circle cx="18" cy="-14" r="26" fill="#5E8C6A"/><circle cx="4" cy="-2" r="16" fill="#4C7A59"/>
  </g>
</svg>`

const body = `
<div class="scene" style="left:57px;top:80px;width:720px;height:628px">${scene}</div>

<div class="card" style="left:830px;top:96px;width:512px;padding:32px 36px 30px">
  <div class="title">Health inspections</div>
  <div class="sub">Main St · 214 Main St, Brooklyn</div>
  <div class="grade">
    <span class="g-tile">A</span>
    <div style="min-width:0">
      <div class="g-pts">11 points</div>
      <div class="g-meta">Cycle Inspection · Re-inspection</div>
      <div class="g-meta">Oct 14, 2026</div>
    </div>
  </div>
  <div class="v-label">Violations</div>
  <div class="rows" style="margin-top:8px">
    <div class="row">
      <div class="grow"><div class="name" style="font-size:20px">Cold food held above 41°F</div></div>
      ${pill('Critical', 'bad', { sm: true })}
    </div>
    <div class="row">
      <div class="grow"><div class="name" style="font-size:20px">Non-food contact surface not maintained</div></div>
      ${pill('General', 'neutral', { sm: true })}
    </div>
  </div>
</div>

<div class="abs push">
  ${appIcon(40)}
  <div style="flex:1;min-width:0">
    <div class="p-top"><span>Fork</span><span>now</span></div>
    <div class="p-title">New health inspection at Main St</div>
    <div class="p-body">Cycle Inspection · Re-inspection on Oct 14, 2026 · Grade A</div>
  </div>
</div>
`

const css = `
.grade { margin-top:22px; display:flex; align-items:center; gap:20px; padding:18px 20px; border-radius:20px; background:#F4F2EF; }
.g-tile { width:86px; height:86px; border-radius:22px; background:var(--blue-100); color:var(--blue-700); display:inline-flex; align-items:center; justify-content:center; font-size:56px; font-weight:780; flex-shrink:0; }
.g-pts { font-size:30px; font-weight:680; letter-spacing:-0.01em; line-height:1.1; }
.g-meta { margin-top:3px; font-size:17px; color:var(--muted); }
.v-label { margin-top:22px; font-size:16px; font-weight:600; color:var(--muted); }
.row .grow .name { line-height:1.25; }
.push { left:86px; top:598px; width:566px; display:flex; gap:12px; align-items:flex-start; padding:16px 18px 18px; border-radius:22px; background:rgba(255,255,255,0.97); box-shadow:var(--shadow-lg); }
.p-top { display:flex; justify-content:space-between; font-size:13.5px; font-weight:600; color:var(--muted); }
.p-title { margin-top:2px; font-size:17.5px; font-weight:650; }
.p-body { margin-top:2px; font-size:15.5px; line-height:1.3; color:#433F3B; }
`

module.exports = () => page('Every inspection, as the city posts it', body, css)
