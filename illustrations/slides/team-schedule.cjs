// Schedule: the week of Sep 28 at Main St goes out and lands on Jordan's lock screen.
// The push is the API's (utils/schedulePublish.js): "New schedule published" / "Your schedule
// has been published with N shifts (H hours total)." One per person with shifts; open shifts
// notify nobody. The phone's publish screen ends "N shifts published · N people notified".
const { avatar, pill, page, appIcon } = require('../kit.cjs')

const DAYS = [
  ['Mon', 28],
  ['Tue', 29],
  ['Wed', 30],
  ['Thu', 1],
  ['Fri', 2],
  ['Sat', 3],
  ['Sun', 4],
]

// 18 shifts, 140 h: Maya 40, Luis 40, Priya 32, Jordan 28 (4 × 7 h).
const ROWS = [
  { name: 'Open shifts', open: true, shifts: { Fri: '3p–10p' } },
  { name: 'Maya Chen', role: 'Barista', av: 'grey', tone: 'blue', shifts: { Mon: '7a–3p', Tue: '7a–3p', Thu: '7a–3p', Fri: '7a–3p', Sat: '8a–4p' } },
  { name: 'Luis Ortega', role: 'Cook', av: 'red', tone: 'green', shifts: { Mon: '9a–5p', Wed: '9a–5p', Thu: '9a–5p', Sat: '10a–6p', Sun: '10a–6p' } },
  { name: 'Priya Nair', role: 'Shift lead', av: 'amber', tone: 'violet', shifts: { Tue: '1p–9p', Wed: '1p–9p', Thu: '1p–9p', Sat: '1p–9p' } },
  { name: 'Jordan Lee', role: 'Barista', av: 'green', tone: 'amber', shifts: { Mon: '3p–10p', Tue: '3p–10p', Wed: '3p–10p', Sun: '3p–10p' } },
]

const grid = `
<div class="grid">
  <div class="g-head"></div>
  ${DAYS.map(([d, n]) => `<div class="g-head day"><span>${d}</span> ${n}</div>`).join('')}
  ${ROWS.map(
    (r) => `
    <div class="g-name">${
      r.open
        ? `<span class="open-dot"></span><div class="p-name">Open shifts</div>`
        : `${avatar(r.name, r.av, 38)}<div><div class="p-name">${r.name.split(' ')[0]}</div><div class="p-role">${r.role}</div></div>`
    }</div>
    ${DAYS.map(([d]) => {
      const s = r.shifts[d]
      return `<div class="g-cell">${s ? `<span class="chip ${r.open ? 'open' : r.tone}">${s}</span>` : ''}</div>`
    }).join('')}`,
  ).join('')}
</div>`

const body = `
<div class="card" style="left:57px;top:112px;width:752px;padding:30px 30px 26px">
  <div style="display:flex;align-items:center;justify-content:space-between">
    <div style="display:flex;align-items:center;gap:14px">
      <div class="title">Week of Sep 28</div>
      ${pill('Main St', 'neutral', { sm: true })}
    </div>
    ${pill('Published', 'ok', { icon: 'check' })}
  </div>
  ${grid}
</div>

<div class="abs connector" style="left:832px;top:372px">
  <span class="pill white">4 people notified</span>
  <svg width="120" height="24" viewBox="0 0 120 24"><path d="M4 12 H104" stroke="#2563EB" stroke-width="4" stroke-linecap="round" stroke-dasharray="1 12"/><path d="M98 3 L110 12 L98 21" fill="none" stroke="#2563EB" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>
</div>

<div class="phone" style="left:1030px;top:62px;width:316px;height:664px">
  <div class="screen lock">
    <div class="island"></div>
    <div class="l-date">Thursday, September 24</div>
    <div class="l-time">6:12</div>
    <div class="notif">
      ${appIcon(42)}
      <div style="flex:1;min-width:0">
        <div class="n-top"><span>Fork</span><span>now</span></div>
        <div class="n-title">New schedule published</div>
        <div class="n-body">Your schedule has been published with 4 shifts (28 hours total).</div>
      </div>
    </div>
    <div class="l-btn" style="left:34px"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6c0 2-2 2-2 4v10a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4V2h12z"/><path d="M6 6h12M12 12v1"/></svg></div>
    <div class="l-btn" style="right:34px"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg></div>
  </div>
</div>
`

const css = `
.grid { margin-top:22px; display:grid; grid-template-columns:158px repeat(7, 1fr); border-top:1.5px solid var(--hair); }
.g-head { height:46px; display:flex; align-items:center; justify-content:center; font-size:15px; font-weight:500; color:var(--faint); border-bottom:1.5px solid var(--hair); }
.g-head.day span { font-weight:650; color:var(--muted); margin-right:4px; }
.g-name { height:76px; display:flex; align-items:center; gap:12px; border-bottom:1.5px solid var(--hair); }
.p-name { font-size:18px; font-weight:620; line-height:1.15; }
.p-role { font-size:14px; color:var(--faint); font-weight:500; }
.open-dot { width:38px; height:38px; border-radius:99px; border:2.5px dashed #BDB7AF; flex-shrink:0; }
.g-cell { height:76px; display:flex; align-items:center; padding:0 4px; border-left:1.5px solid var(--hair); border-bottom:1.5px solid var(--hair); }
.grid > div:nth-last-child(-n+8) { border-bottom:0; }
.chip { width:100%; height:44px; border-radius:9px; display:flex; align-items:center; justify-content:center; font-size:15px; font-weight:600; white-space:nowrap; border-left:4px solid; }
.chip.blue { background:#EFF6FF; color:#1E40AF; border-color:#60A5FA; }
.chip.green { background:#ECFDF5; color:#047857; border-color:#10B981; }
.chip.violet { background:#F5F3FF; color:#6D28D9; border-color:#8B5CF6; }
.chip.amber { background:#FFFBEB; color:#B45309; border-color:#F59E0B; }
.chip.open { background:transparent; color:#77726C; border:2px dashed #BDB7AF; }
.connector { display:flex; flex-direction:column; align-items:center; gap:14px; width:190px; }
.connector .pill { height:38px; font-size:16px; padding:0 14px; }
.phone .screen.lock { background:linear-gradient(170deg, #3B3631 0%, #57504A 55%, #7A6F64 100%); color:#fff; }
.l-date { position:absolute; top:92px; width:100%; text-align:center; font-size:19px; font-weight:560; opacity:0.85; }
.l-time { position:absolute; top:112px; width:100%; text-align:center; font-size:96px; font-weight:640; letter-spacing:-0.02em; line-height:1.1; }
.l-btn { position:absolute; bottom:44px; width:52px; height:52px; border-radius:99px; background:rgba(255,255,255,0.16); display:flex; align-items:center; justify-content:center; }
.notif { position:absolute; left:14px; right:14px; top:300px; display:flex; gap:12px; align-items:flex-start; padding:16px 16px 18px; border-radius:24px; background:rgba(255,255,255,0.88); color:var(--ink); box-shadow:0 10px 30px -12px rgba(0,0,0,0.4); }
.n-top { display:flex; justify-content:space-between; font-size:14px; font-weight:600; color:var(--muted); }
.n-title { margin-top:2px; font-size:18px; font-weight:650; }
.n-body { margin-top:2px; font-size:16px; line-height:1.3; color:#433F3B; }
`

module.exports = () => page('The week lands on every phone', body, css)
