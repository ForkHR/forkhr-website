// Supply: Tuesday's closing count in the Main St walk-in. Milk is at 4 of 12.
const { icon, page, appIcon } = require('../kit.cjs')

const jug = (x, y) => `
  <g transform="translate(${x} ${y})">
    <path d="M6 22 C6 14 12 10 18 8 L18 2 h16 v6 C42 10 46 14 46 22 V74 a8 8 0 0 1 -8 8 H14 a8 8 0 0 1 -8 -8 Z" fill="#FBFCFD" stroke="#D5DCE3" stroke-width="2"/>
    <rect x="17" y="-4" width="18" height="9" rx="3" fill="#2563EB"/>
    <path d="M36 22 h6 v18 h-6" fill="none" stroke="#D5DCE3" stroke-width="2.5"/>
    <rect x="10" y="40" width="32" height="18" rx="3" fill="#DBEAFE"/>
    <rect x="15" y="46" width="22" height="3" rx="1.5" fill="#2563EB" opacity="0.6"/>
  </g>`

const carton = (x, y, label = 'OAT') => `
  <g transform="translate(${x} ${y})">
    <path d="M0 14 L8 0 H38 L46 14 V80 H0 Z" fill="#F5F0E8"/>
    <path d="M0 14 H46" stroke="#E2D9CB" stroke-width="2"/>
    <rect x="7" y="34" width="32" height="16" rx="3" fill="#FFFFFF"/>
    <text x="23" y="46" text-anchor="middle" font-family="Bricolage" font-size="11" font-weight="700" fill="#1D4ED8">${label}</text>
  </g>`

const box = (x, y, w, h, label) => `
  <g transform="translate(${x} ${y})">
    <rect width="${w}" height="${h}" rx="4" fill="#D8B88E"/>
    <rect x="${w / 2 - 6}" width="12" height="${h}" fill="#C9A47A"/>
    <rect x="12" y="${h / 2 - 11}" width="${w - 24}" height="22" rx="3" fill="#FFF8E6"/>
    <text x="${w / 2}" y="${h / 2 + 5}" text-anchor="middle" font-family="Bricolage" font-size="12" font-weight="700" letter-spacing="1" fill="#B45309">${label}</text>
  </g>`

const eggCase = (x, y) => `
  <g transform="translate(${x} ${y})">
    <rect width="120" height="64" rx="4" fill="#D8B88E"/>
    <rect y="0" width="120" height="14" rx="4" fill="#C9A47A"/>
    ${Array.from({ length: 5 }, (_, k) => `<ellipse cx="${18 + k * 21}" cy="7" rx="8" ry="6" fill="#F6EBDD"/>`).join('')}
    <rect x="22" y="28" width="76" height="20" rx="3" fill="#FFF8E6"/>
    <text x="60" y="42" text-anchor="middle" font-family="Bricolage" font-size="12" font-weight="700" letter-spacing="1" fill="#B45309">EGGS</text>
  </g>`

const quart = (x, y) => `
  <g transform="translate(${x} ${y})">
    <path d="M0 10 L6 0 H24 L30 10 V52 H0 Z" fill="#FFFFFF" stroke="#E2DED8" stroke-width="1.5"/>
    <rect x="4" y="22" width="22" height="12" rx="2" fill="#E0F2EA"/>
  </g>`

// A wire shelf: the board, then the wires under it.
const shelf = (y) => `
  <rect x="58" y="${y}" width="604" height="10" rx="3" fill="#9AA3AC"/>
  <g stroke="#B6BDC5" stroke-width="2">${Array.from({ length: 30 }, (_, k) => `<path d="M${66 + k * 20} ${y + 10} v8"/>`).join('')}</g>`

const scene = `
<svg viewBox="0 0 720 628" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="cold" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#E7EDF2"/>
      <stop offset="1" stop-color="#D9E1E8"/>
    </linearGradient>
    <radialGradient id="tube" cx="0.5" cy="0" r="0.8">
      <stop offset="0" stop-color="#FFFFFF" stop-opacity="0.9"/>
      <stop offset="1" stop-color="#FFFFFF" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="720" height="628" fill="url(#cold)"/>
  <g stroke="#CDD6DE" stroke-width="3">${Array.from({ length: 6 }, (_, k) => `<path d="M${120 * k + 60} 0 V560"/>`).join('')}</g>
  <ellipse cx="360" cy="0" rx="360" ry="150" fill="url(#tube)"/>
  <rect x="250" y="14" width="220" height="12" rx="6" fill="#F7FAFC"/>
  <rect y="560" width="720" height="68" fill="#C6CFD8"/>
  <g stroke="#B7C1CB" stroke-width="2">${Array.from({ length: 12 }, (_, k) => `<path d="M${k * 64} 560 l40 68"/>`).join('')}</g>

  <!-- Shelving uprights -->
  <rect x="52" y="70" width="12" height="490" rx="4" fill="#8A939C"/>
  <rect x="656" y="70" width="12" height="490" rx="4" fill="#8A939C"/>

  <!-- Top shelf: butter and cream -->
  ${box(84, 104, 132, 82, 'BUTTER')}
  ${box(226, 120, 110, 66, 'BUTTER')}
  ${[0, 1, 2, 3, 4, 5].map((k) => quart(372 + k * 40, 134)).join('')}
  ${shelf(186)}

  <!-- Milk: four jugs where twelve go -->
  ${[0, 1, 2, 3].map((k) => jug(86 + k * 58, 228)).join('')}
  <rect x="330" y="290" width="306" height="22" rx="4" fill="none" stroke="#B6BDC5" stroke-width="2" stroke-dasharray="6 6"/>
  ${shelf(312)}
  <g transform="translate(118 330)">
    <rect width="176" height="30" rx="6" fill="#FFFFFF"/>
    <text x="14" y="20" font-family="Bricolage" font-size="14" font-weight="600" fill="#433F3B">Whole milk · par 12</text>
  </g>

  <!-- Eggs and oat milk -->
  ${eggCase(86, 380)}
  ${[0, 1, 2, 3].map((k) => carton(240 + k * 54, 364)).join('')}
  ${shelf(444)}

  <!-- Bottom shelf: produce crate -->
  <g transform="translate(90 480)">
    <rect width="150" height="70" rx="6" fill="#2D6A4F" opacity="0.85"/>
    <g fill="#C8E6C9">${[0, 1, 2, 3, 4].map((k) => `<circle cx="${22 + k * 27}" cy="8" r="12"/>`).join('')}</g>
    <g stroke="#245A43" stroke-width="3">${[0, 1, 2, 3].map((k) => `<path d="M${30 + k * 30} 22 v40"/>`).join('')}</g>
  </g>
  ${box(270, 486, 140, 64, 'CREAM')}
  ${shelf(550)}
</svg>`

// The phone's count screen (account/supply/inventory/count/[id].jsx): "Inventory count", the
// location pill, "Last counted here … by …", rows with the last count and a quantity box with the
// unit, "n of N counted" and "Review". Count rows carry no par; the par shows up in the low-stock
// push the count sets off (utils/inventoryService.js: "Low stock: {item}" / "{item} is at 4 gal;
// par is 12.").
const rows = [
  { item: 'Whole milk', last: '11 gal', qty: 4, unit: 'gal' },
  { item: 'Butter', last: '12 lb', qty: 9, unit: 'lb' },
  { item: 'Eggs', last: '5 doz', qty: 2, unit: 'doz' },
  { item: 'Heavy cream', last: '14 qt', qty: 12, unit: 'qt' },
]

const body = `
<div class="scene" style="left:57px;top:80px;width:720px;height:628px">${scene}</div>

<div class="abs push">
  ${appIcon(40)}
  <div style="flex:1;min-width:0">
    <div class="p-top"><span>Fork</span><span>now</span></div>
    <div class="p-title">Low stock: Whole milk</div>
    <div class="p-body">Whole milk is at 4 gal; par is 12.</div>
  </div>
</div>

<div class="card" style="left:830px;top:96px;width:512px;padding:32px 36px 26px">
  <div class="title">Inventory count</div>
  <div class="loc">${icon('pin', { size: 16, stroke: 2.2 })} Main St</div>
  <div class="sub" style="margin-top:12px;font-size:17px">Last counted here 2 days ago by Priya Nair</div>
  <div class="rows" style="margin-top:16px">
    ${rows
      .map(
        (r) => `<div class="row" style="padding:13px 0">
          <div class="grow"><div class="name" style="font-size:20px">${r.item}</div><div class="meta" style="font-size:15.5px">Last count ${r.last}, 2 days ago</div></div>
          <div class="qty"><b>${r.qty}</b><span>${r.unit}</span></div>
        </div>`,
      )
      .join('')}
  </div>
  <div class="foot"><span>4 of 12 counted</span><span class="review">Review</span></div>
</div>
`

const css = `
.loc { margin-top:12px; display:inline-flex; align-items:center; gap:6px; height:34px; padding:0 14px; border-radius:99px; background:var(--warm-100); font-size:16px; font-weight:600; color:#433F3B; }
.qty { display:flex; align-items:center; gap:8px; height:46px; min-width:108px; padding:0 14px; border-radius:12px; border:1.5px solid var(--warm-200); }
.qty b { flex:1; font-size:21px; font-weight:680; }
.qty span { font-size:15px; font-weight:560; color:var(--faint); }
.foot { margin-top:10px; display:flex; align-items:center; justify-content:space-between; font-size:17px; font-weight:560; color:var(--muted); }
.review { height:44px; padding:0 22px; border-radius:99px; background:var(--ink); color:#fff; display:inline-flex; align-items:center; font-size:17px; font-weight:650; }
.push { left:412px; top:104px; width:392px; display:flex; gap:12px; align-items:flex-start; padding:16px 18px 18px; border-radius:22px; background:rgba(255,255,255,0.96); box-shadow:var(--shadow-lg); }
.p-top { display:flex; justify-content:space-between; font-size:13.5px; font-weight:600; color:var(--muted); }
.p-title { margin-top:2px; font-size:17.5px; font-weight:650; }
.p-body { margin-top:2px; font-size:15.5px; line-height:1.3; color:#433F3B; }
`

module.exports = () => page('Counted in the walk-in', body, css)
