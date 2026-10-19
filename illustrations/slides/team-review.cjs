// Performance: Jordan's 90-day review, filled in from the record Fork already keeps.
const { icon, avatar, pill, page } = require('../kit.cjs')

const sources = [
  { tile: 'blue', ic: 'calendar', name: 'Attendance', rows: [['Shifts worked', '52 of 52'], ['On time', '98%']], top: 104 },
  { tile: 'gold', ic: 'star', name: 'On shift', rows: [['Great shifts', '3'], ['Shifts covered for others', '2']], top: 314 },
  { tile: 'green', ic: 'check', name: 'Training', rows: [['Courses completed', '2']], top: 524 },
]

const dots = (n) => Array.from({ length: 5 }, (_, i) => `<i class="${i < n ? 'on' : ''}"></i>`).join('')

const questions = [
  ['Knows the job', 4],
  ['Reliability', 5],
  ['Teamwork', 5],
  ['Guest and customer care', 4],
]

// Source cards are 440 wide at x 57 (the groups of the review's "Record for the period"); their
// right edge (497) curves into the review card.
const joinX = 702
const joinY = 394
const curves = sources
  .map((s) => {
    const y = s.top + 80
    return `<path d="M497 ${y} C 600 ${y}, 590 ${joinY}, ${joinX - 14} ${joinY}" fill="none" stroke="#9DC2F5" stroke-width="5" stroke-linecap="round"/>`
  })
  .join('')

const body = `
<svg class="abs" style="left:0;top:0" width="1400" height="788" viewBox="0 0 1400 788">${curves}
  <circle cx="${joinX - 14}" cy="${joinY}" r="11" fill="#2563EB"/>
</svg>

${sources
  .map(
    (s) => `
<div class="card src" style="left:57px;top:${s.top}px;width:440px">
  <span class="tile ${s.tile}">${icon(s.ic, { size: 30, stroke: 2.3, fill: s.ic === 'star' ? 'currentColor' : 'none' })}</span>
  <div style="flex:1;min-width:0"><div class="s-name">${s.name}</div>${s.rows.map(([l, v]) => `<div class="s-row"><span>${l}</span><b>${v}</b></div>`).join('')}</div>
</div>`,
  )
  .join('')}

<div class="card" style="left:${joinX}px;top:136px;width:640px;padding:34px 38px 32px">
  <div style="display:flex;align-items:center;gap:20px">
    ${avatar('Jordan Lee', 'green', 64)}
    <div style="flex:1">
      <div class="title">90-day review · Jordan Lee</div>
      <div class="sub" style="margin-top:6px">Barista · Main St · opened on its own on day 83</div>
    </div>
  </div>
  <div class="rows" style="margin-top:26px">
    ${questions
      .map(
        ([q, n]) => `<div class="row" style="padding:14px 0"><div class="grow name">${q}</div><span class="rating">${dots(n)}</span><span class="score">${n}</span></div>`,
      )
      .join('')}
  </div>
  <div class="raise">
    <div>
      <div class="r-label">Raise</div>
      <div class="r-val">$17.00 <span class="r-arrow">→</span> $18.00<span class="r-unit">/hr</span></div>
    </div>
    <div style="text-align:right">
      ${pill('Approved', 'ok', { icon: 'check' })}
      <div class="r-meta">Starts Jan 4</div>
    </div>
  </div>
</div>
`

const css = `
.src { display:flex; align-items:center; gap:22px; padding:24px 30px 24px 26px; height:160px; }
.tile { width:72px; height:72px; border-radius:20px; display:inline-flex; align-items:center; justify-content:center; flex-shrink:0; }
.tile.blue { background:var(--blue-100); color:var(--blue); }
.tile.gold { background:#FDF1C7; color:var(--gold); }
.tile.green { background:var(--green-100); color:#059669; }
.s-name { font-size:23px; font-weight:640; letter-spacing:-0.01em; line-height:1.2; margin-bottom:4px; }
.s-row { margin-top:6px; display:flex; justify-content:space-between; gap:12px; font-size:17px; font-weight:450; color:var(--muted); line-height:1.3; }
.s-row b { font-weight:640; color:var(--ink); white-space:nowrap; }
.rating { display:inline-flex; gap:8px; }
.rating i { width:16px; height:16px; border-radius:99px; background:var(--warm-200); display:block; }
.rating i.on { background:var(--ink); }
.score { width:24px; text-align:right; font-size:22px; font-weight:650; }
.raise { margin-top:10px; display:flex; align-items:center; justify-content:space-between; background:#F4F2EF; border-radius:20px; padding:20px 24px; }
.r-label { font-size:18px; color:var(--muted); font-weight:450; }
.r-val { margin-top:2px; font-size:34px; font-weight:680; letter-spacing:-0.01em; }
.r-arrow { color:var(--faint); font-weight:500; }
.r-unit { font-size:20px; font-weight:500; color:var(--muted); }
.r-meta { margin-top:10px; font-size:17px; color:var(--muted); font-weight:450; }
`

module.exports = () => page('Day 90, from the record', body, css)
