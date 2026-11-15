// Locations → Links: the list of Juniper Coffee's links and what one of them was pressed for.
// The list is the web's (frontend/src/pages/link/LinksPage.jsx): "New link", rows with a tile (a
// link icon, a filled star for a link that opens the review form), the name over the short address,
// Location ("All locations" for a link that asks which shop), Opens ("The link page" / "The Google
// review form") and the counts. The second card is a link's sheet (LinkSheet.jsx): "Last 30 days",
// "Buttons pressed", one row per button with its count; nothing is kept about who.
const { page } = require('../kit.cjs')

const BRAND = '#1F6F5C'
const LINK = '<path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"/><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"/>'
const STAR = '<path d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z"/>'
const PLUS = '<path d="M12 5v14M5 12h14"/>'
const svgIcon = (paths, { size = 20, stroke = 2.2, fill = 'none' } = {}) =>
  `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="${fill}" stroke="currentColor" stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round">${paths}</svg>`

const ROWS = [
  { name: 'Counter stand', code: 'k7m2qpx', where: 'Main St', opens: 'The link page', n: 312, on: true },
  { name: 'Instagram bio', code: 'hb3wd9e', where: 'All locations', opens: 'The link page', n: 156 },
  { name: 'Window sticker', code: 'p2xs7ta', where: 'Harbor St', opens: 'The link page', n: 97 },
  { name: 'Receipt QR', code: 'r4vn8tq', where: 'Main St', opens: 'The Google review form', n: 88, review: true },
]

const PRESSES = [
  ['Wi-Fi', 120],
  ['Review us on Google', 64],
  ['Get directions', 38],
  ['We’re hiring', 9],
]

const body = `
<div class="card" style="left:57px;top:132px;width:800px;padding:32px 36px 22px">
  <div style="display:flex;align-items:center;justify-content:space-between">
    <div>
      <div class="title">Links</div>
      <div class="sub" style="font-size:18px">Juniper Coffee · 2 locations</div>
    </div>
    <span class="new">${svgIcon(PLUS, { size: 18, stroke: 2.6 })} New link</span>
  </div>
  <div class="thead"><span>Link</span><span>Location</span><span>Opens</span><span class="r">30 days</span></div>
  ${ROWS.map(
    (r) => `
  <div class="lrow${r.on ? ' on' : ''}">
    <div class="lname">
      <span class="tile">${r.review ? svgIcon(STAR, { size: 20, stroke: 1.6, fill: 'currentColor' }) : svgIcon(LINK, { size: 20 })}</span>
      <div style="min-width:0"><div class="nm">${r.name}</div><div class="ad">app.forkhr.com/l/${r.code}</div></div>
    </div>
    <span class="cell">${r.where}</span>
    <span class="cell">${r.opens}</span>
    <span class="num">${r.n}</span>
  </div>`,
  ).join('')}
</div>

<div class="card" style="left:900px;top:222px;width:442px;padding:30px 34px 28px">
  <div class="title" style="font-size:27px">Counter stand</div>
  <div class="sub" style="font-size:17px">Main St · last 30 days</div>
  <div class="figs"><div><b>312</b><span>opens</span></div><div><b>298</b><span>by QR code</span></div></div>
  <div class="pl">Buttons pressed</div>
  ${PRESSES.map(
    ([label, n]) => `
  <div class="press">
    <div class="pt"><span>${label}</span><b>${n}</b></div>
    <div class="track"><i style="width:${Math.round((n / 120) * 100)}%"></i></div>
  </div>`,
  ).join('')}
</div>
`

const css = `
.new { height:44px; padding:0 18px 0 14px; border-radius:99px; background:var(--ink); color:#fff; display:inline-flex; align-items:center; gap:8px; font-size:17px; font-weight:650; }
.thead { margin-top:22px; display:grid; grid-template-columns:minmax(0,1fr) 150px 196px 80px; gap:14px; padding:0 0 10px; border-bottom:1.5px solid var(--hair); font-size:15px; font-weight:600; color:var(--faint); }
.thead .r, .num { text-align:right; }
.lrow { display:grid; grid-template-columns:minmax(0,1fr) 150px 196px 80px; gap:14px; align-items:center; padding:16px 0; border-bottom:1.5px solid var(--hair); }
.lrow:last-child { border-bottom:0; }
.lrow.on { margin:0 -16px; padding:16px; border-radius:18px; background:#F4F2EF; border-bottom-color:transparent; }
.lname { display:flex; align-items:center; gap:14px; min-width:0; }
.tile { width:46px; height:46px; border-radius:14px; background:var(--warm-100); color:var(--ink-2); display:inline-flex; align-items:center; justify-content:center; flex-shrink:0; }
.lrow.on .tile { background:#fff; }
.nm { font-size:20px; font-weight:600; line-height:1.2; }
.ad { margin-top:2px; font-size:15px; color:var(--muted); white-space:nowrap; }
.cell { font-size:16px; color:var(--muted); font-weight:500; white-space:nowrap; }
.num { font-size:22px; font-weight:650; color:var(--ink-2); }
.figs { margin-top:18px; display:grid; grid-template-columns:1fr 1fr; gap:10px; }
.figs div { background:#F4F2EF; border-radius:16px; padding:12px 16px; }
.figs b { display:block; font-size:30px; font-weight:680; letter-spacing:-0.01em; line-height:1.1; }
.figs span { font-size:15.5px; color:var(--muted); font-weight:500; }
.pl { margin-top:20px; padding-top:16px; border-top:1.5px solid var(--hair); font-size:16px; font-weight:600; color:var(--muted); }
.press { margin-top:13px; }
.pt { display:flex; justify-content:space-between; align-items:baseline; font-size:18px; font-weight:560; }
.pt b { font-weight:650; color:var(--ink-2); }
.track { margin-top:7px; height:8px; border-radius:99px; background:var(--warm-100); overflow:hidden; }
.track i { display:block; height:100%; border-radius:99px; background:${BRAND}; }
`

module.exports = () => page('Every code, counted', body, css)
