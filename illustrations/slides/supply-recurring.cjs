// Supply · Recurring: the Fork Warehouse order that comes every Monday.
const { page } = require('../kit.cjs')

const box = (x, y, w, h, label, tape = true) => `
  <g transform="translate(${x} ${y})">
    <rect width="${w}" height="${h}" rx="5" fill="#D8B88E"/>
    <rect width="${w}" height="10" rx="5" fill="#C9A47A"/>
    ${tape ? `<rect x="${w / 2 - 9}" width="18" height="${h}" fill="#2563EB" opacity="0.9"/>` : ''}
    <rect x="14" y="${h - 40}" width="${Math.min(w - 28, 110)}" height="26" rx="4" fill="#FFF8E6"/>
    <text x="${14 + Math.min(w - 28, 110) / 2}" y="${h - 22}" text-anchor="middle" font-family="Bricolage" font-size="12.5" font-weight="700" letter-spacing="0.8" fill="#59554F">${label}</text>
  </g>`

const MONTH = { name: 'October', start: 4, days: 31 } // Oct 1 2026 is a Thursday (index 4 with Mon = 1)

const calendar = () => {
  const cells = []
  for (let i = 0; i < MONTH.start - 1; i++) cells.push('')
  for (let d = 1; d <= MONTH.days; d++) cells.push(d)
  return cells
    .map((d, i) => {
      const col = i % 7
      const row = Math.floor(i / 7)
      const x = 22 + col * 34
      const y = 92 + row * 30
      if (!d) return ''
      const monday = col === 0
      return `${monday ? `<circle cx="${x}" cy="${y - 5}" r="13" fill="#2563EB"/>` : ''}<text x="${x}" y="${y}" text-anchor="middle" font-family="Bricolage" font-size="13" font-weight="${monday ? 700 : 500}" fill="${monday ? '#fff' : '#77726C'}">${d}</text>`
    })
    .join('')
}

const scene = `
<svg viewBox="0 0 720 628" xmlns="http://www.w3.org/2000/svg">
  <rect width="720" height="628" fill="#EAE4DD"/>
  <rect y="540" width="720" height="88" fill="#D8CFC4"/>
  <rect y="534" width="720" height="8" fill="#CDC3B6"/>

  <!-- Wall calendar, every Monday ringed -->
  <g transform="translate(70 60)">
    <rect x="-2" y="6" width="252" height="270" rx="12" fill="#2D2926" opacity="0.08"/>
    <rect width="248" height="268" rx="12" fill="#FFFFFF"/>
    <rect width="248" height="46" rx="12" fill="#2D2926"/>
    <rect y="34" width="248" height="12" fill="#2D2926"/>
    <text x="20" y="31" font-family="Bricolage" font-size="17" font-weight="700" fill="#FFFFFF">${MONTH.name}</text>
    ${['M', 'T', 'W', 'T', 'F', 'S', 'S'].map((d, i) => `<text x="${22 + i * 34}" y="66" text-anchor="middle" font-family="Bricolage" font-size="11" font-weight="700" fill="#A8A39D">${d}</text>`).join('')}
    ${calendar()}
    <circle cx="124" cy="-6" r="7" fill="#8F8981"/>
  </g>

  <!-- Monday's boxes, stacked inside the door -->
  ${box(372, 404, 150, 132, 'CUPS 16 OZ')}
  ${box(530, 404, 140, 132, 'LIDS 16 OZ')}
  ${box(392, 290, 130, 114, 'NAPKINS')}
  ${box(530, 316, 120, 88, 'STRAWS')}

</svg>`

// The phone's recurring plan screen (account/supply/standing-orders/[id].jsx): status "ACTIVE",
// "Weekly · Mon", "Next run" / "Per order", "Orders are created: As submitted", the day strip
// (a day's item count, "·" for none) and the "Upcoming" run cards ("Mon / 5 / Oct / 4 items").
const days = [
  ['Mon', '4'],
  ['Tue', '·'],
  ['Wed', '·'],
  ['Thu', '·'],
  ['Fri', '·'],
  ['Sat', '·'],
  ['Sun', '·'],
]
const runs = [5, 12, 19]

const body = `
<div class="scene" style="left:57px;top:80px;width:720px;height:628px">${scene}</div>

<div class="card" style="left:830px;top:88px;width:512px;padding:32px 36px 28px">
  <div style="display:flex;align-items:center;justify-content:space-between">
    <div class="title">Fork Warehouse</div>
    <span class="status">ACTIVE</span>
  </div>
  <div class="sub">Recurring · Weekly · Mon</div>
  <div class="stats">
    <div><div class="s-l">Next run</div><div class="s-v">Mon, Oct 5</div></div>
    <div><div class="s-l">Per order</div><div class="s-v">$208.00</div></div>
  </div>
  <div class="strip">${days.map(([d, n]) => `<span class="${n !== '·' ? 'on' : ''}"><b>${d}</b><em>${n}</em></span>`).join('')}</div>
  <div class="made">Orders are created: <b>As submitted</b></div>
  <div class="up-l">Upcoming</div>
  <div class="runs">${runs.map((d) => `<div class="run"><span>Mon</span><b>${d}</b><span>Oct</span><em>4 items</em></div>`).join('')}</div>
</div>
`

const css = `
.status { height:30px; padding:0 12px; border-radius:99px; background:var(--green-100); color:var(--green-700); display:inline-flex; align-items:center; font-size:13px; font-weight:750; letter-spacing:0.08em; }
.stats { margin-top:20px; display:grid; grid-template-columns:1fr 1fr; gap:10px; }
.stats > div { background:#F4F2EF; border-radius:16px; padding:12px 16px; }
.s-l { font-size:14px; color:var(--muted); }
.s-v { margin-top:2px; font-size:20px; font-weight:660; }
.strip { margin-top:16px; display:grid; grid-template-columns:repeat(7, 1fr); gap:6px; }
.strip span { height:54px; border-radius:12px; display:flex; flex-direction:column; align-items:center; justify-content:center; background:var(--warm-100); color:var(--faint); }
.strip span b { font-size:14px; font-weight:620; }
.strip span em { font-style:normal; font-size:14px; font-weight:700; }
.strip span.on { background:var(--ink); color:#fff; }
.made { margin-top:14px; font-size:16px; color:var(--muted); }
.made b { color:var(--ink); font-weight:620; }
.up-l { margin-top:16px; font-size:13px; font-weight:700; letter-spacing:0.1em; text-transform:uppercase; color:var(--faint); }
.runs { margin-top:8px; display:grid; grid-template-columns:repeat(3, 1fr); gap:10px; }
.run { border:1.5px solid var(--warm-200); border-radius:16px; padding:10px 8px; display:flex; flex-direction:column; align-items:center; }
.run span { font-size:13.5px; color:var(--muted); font-weight:560; }
.run b { font-size:28px; font-weight:700; line-height:1.1; }
.run em { margin-top:4px; font-style:normal; font-size:13.5px; font-weight:600; color:#433F3B; }
`

module.exports = () => page('Same order every Monday', body, css)
