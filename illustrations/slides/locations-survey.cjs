// Surveys → Anyone with the link: a customer answers Juniper Coffee's survey on the public page.
// The phone is the public page (frontend/src/pages/survey/PublicSurveyWalk.jsx): the business's
// colour as the accent, its mark and name at the top over a slim line of progress, one question at
// a time in large type, a 0 to 10 answer as eleven squares (six to a row on a phone) over "Not at
// all" / "Very much", and the button at the foot. The card is the survey's page on the web
// (SurveyDetailed + PublicSurveyShare): "Every shop" and a tab per shop. The banner is the
// manager's notification (backend/controllers/publicSurveyControllers.js): title "Low rating",
// message `${survey.title}: 3 out of 10 at Harbor St on "<question>"` (utils/publicSurveys.js).
const { page, appIcon } = require('../kit.cjs')

const BRAND = '#1F6F5C'
const Q = 'How likely are you to recommend us?'

const scene = `
<svg viewBox="0 0 720 628" xmlns="http://www.w3.org/2000/svg">
  <rect width="720" height="628" fill="#EAE4DD"/>
  <!-- The window: a street of brownstones outside -->
  <rect x="52" y="54" width="616" height="404" rx="10" fill="#5B4C40"/>
  <rect x="66" y="68" width="588" height="376" rx="4" fill="#DCE7EC"/>
  <g>
    <rect x="66" y="230" width="150" height="214" fill="#C9A58C"/>
    <rect x="216" y="196" width="170" height="248" fill="#B98F74"/>
    <rect x="386" y="244" width="130" height="200" fill="#CDB09A"/>
    <rect x="516" y="210" width="138" height="234" fill="#BE9479"/>
    <g fill="#EEF3F5" opacity="0.9">
      <rect x="86" y="256" width="34" height="46" rx="3"/><rect x="146" y="256" width="34" height="46" rx="3"/>
      <rect x="86" y="326" width="34" height="46" rx="3"/><rect x="146" y="326" width="34" height="46" rx="3"/>
      <rect x="538" y="236" width="34" height="46" rx="3"/><rect x="596" y="236" width="34" height="46" rx="3"/>
      <rect x="538" y="306" width="34" height="46" rx="3"/><rect x="596" y="306" width="34" height="46" rx="3"/>
    </g>
    <rect x="66" y="410" width="588" height="34" fill="#C7CED2"/>
    <!-- A street tree -->
    <rect x="606" y="300" width="10" height="112" fill="#6B5444"/>
    <circle cx="611" cy="282" r="44" fill="#8DB08F"/><circle cx="580" cy="300" r="30" fill="#7FA582"/>
  </g>
  <rect x="352" y="68" width="16" height="376" fill="#5B4C40"/>
  <!-- The ledge with a cup and a plant -->
  <rect x="30" y="456" width="660" height="26" rx="6" fill="#B79C7E"/>
  <rect x="30" y="482" width="660" height="146" fill="#D3C7B8"/>
  <g stroke="#C9BCAB" stroke-width="3">${Array.from({ length: 14 }, (_, k) => `<path d="M${40 + k * 50} 494 V628"/>`).join('')}</g>
  <g transform="translate(560 384)">
    <path d="M20 62 C8 46 4 28 12 12 C20 28 24 44 26 62 Z" fill="#5E8C6A"/>
    <path d="M28 62 C32 40 44 24 58 16 C56 36 44 50 30 64 Z" fill="#4C7A59"/>
    <path d="M24 64 C20 42 22 22 32 4 C36 24 34 44 30 64 Z" fill="#6F9E7A"/>
    <path d="M6 62 h50 l-6 12 h-38 Z" fill="#C96F4A"/>
  </g>
  <g transform="translate(96 418)">
    <path d="M0 0 h44 l-5 38 h-34 Z" fill="#FFFFFF"/>
    <path d="M44 8 h6 a8 8 0 0 1 0 16 h-8" fill="none" stroke="#FFFFFF" stroke-width="5"/>
  </g>
</svg>`

const squares = (from, to, picked) =>
  Array.from({ length: to - from + 1 }, (_, i) => from + i)
    .map((n) => `<span class="sq${n === picked ? ' on' : ''}">${n}</span>`)
    .join('')

// Answers this week at Harbor St, 0 to 10
const SPREAD = [0, 0, 0, 1, 0, 1, 2, 3, 7, 9, 6]

const body = `
<div class="scene" style="left:57px;top:80px;width:720px;height:628px">${scene}</div>

<div class="phone" style="left:259px;top:62px;width:316px;height:664px">
  <div class="screen ps">
    <div class="island"></div>
    <div class="ps-bar"><i style="width:40%"></i></div>
    <div class="ps-brand"><span class="ps-mark">J</span>Juniper Coffee</div>
    <div class="ps-q">${Q}</div>
    <div class="ps-grid">${squares(0, 5, 9)}</div>
    <div class="ps-grid" style="margin-top:8px">${squares(6, 10, 9)}</div>
    <div class="ps-ends"><span>Not at all</span><span>Very much</span></div>
    <div class="ps-go">Next</div>
  </div>
</div>

<div class="card" style="left:830px;top:84px;width:512px;padding:30px 34px 28px">
  <div class="title">Customer feedback</div>
  <div class="sub" style="font-size:18px">Anyone with the link · 2 shops</div>
  <div class="tabs"><span>Every shop</span><span>Main St</span><span class="on">Harbor St</span></div>
  <div class="figs">
    <div><b>29</b><span>answers this week</span></div>
    <div><b>8.4</b><span>average, out of 10</span></div>
  </div>
  <div class="q-label">${Q}</div>
  <div class="spread">${SPREAD.map((v, i) => `<div><i class="${i <= 4 ? 'low' : ''}" style="height:${6 + v * 9}px"></i><span>${i}</span></div>`).join('')}</div>
</div>

<div class="abs notif">
  ${appIcon(42)}
  <div style="flex:1;min-width:0">
    <div class="n-top"><span>Fork</span><span>now</span></div>
    <div class="n-title">Low rating</div>
    <div class="n-body">Customer feedback: 3 out of 10 at Harbor St on "${Q}"</div>
  </div>
</div>
`

const css = `
.screen.ps { background:#fff; padding:64px 22px 0; display:flex; flex-direction:column; }
.ps-bar { position:absolute; left:22px; right:22px; top:56px; height:4px; border-radius:99px; background:#E8EFEC; }
.ps-bar i { display:block; height:100%; border-radius:99px; background:${BRAND}; }
.ps-brand { margin-top:16px; display:flex; align-items:center; gap:9px; font-size:15px; font-weight:650; color:#2A2A2A; }
.ps-mark { width:28px; height:28px; border-radius:99px; background:${BRAND}; color:#fff; display:inline-flex; align-items:center; justify-content:center; font-size:14px; font-weight:700; }
.ps-q { margin-top:40px; font-size:30px; font-weight:680; line-height:1.12; letter-spacing:-0.02em; color:#141414; }
.ps-grid { margin-top:34px; display:grid; grid-template-columns:repeat(6, 1fr); gap:8px; }
.sq { height:44px; border-radius:11px; border:1.5px solid #DCE3E0; display:flex; align-items:center; justify-content:center; font-size:18px; font-weight:620; color:#1F2A27; }
.sq.on { background:${BRAND}; border-color:${BRAND}; color:#fff; box-shadow:0 8px 18px -8px rgba(31,111,92,0.7); }
.ps-ends { margin-top:12px; display:flex; justify-content:space-between; font-size:14.5px; font-weight:520; color:#6B706E; }
.ps-go { position:absolute; left:22px; right:22px; bottom:34px; height:52px; border-radius:99px; background:${BRAND}; color:#fff; font-size:18px; font-weight:650; display:flex; align-items:center; justify-content:center; }
.tabs { margin-top:18px; display:flex; gap:22px; border-bottom:1.5px solid var(--hair); }
.tabs span { padding:0 0 12px; font-size:17px; font-weight:600; color:var(--muted); border-bottom:3px solid transparent; margin-bottom:-1.5px; }
.tabs span.on { color:var(--ink); border-color:var(--ink); }
.figs { margin-top:18px; display:grid; grid-template-columns:1fr 1fr; gap:10px; }
.figs div { background:#F4F2EF; border-radius:16px; padding:12px 16px; }
.figs b { display:block; font-size:30px; font-weight:680; letter-spacing:-0.01em; line-height:1.1; }
.figs span { font-size:15.5px; color:var(--muted); font-weight:500; }
.q-label { margin-top:18px; font-size:17px; font-weight:600; color:#433F3B; }
.spread { margin-top:12px; height:120px; display:grid; grid-template-columns:repeat(11, 1fr); gap:6px; align-items:end; }
.spread div { display:flex; flex-direction:column; align-items:center; justify-content:flex-end; gap:6px; height:100%; }
.spread i { display:block; width:100%; border-radius:5px; background:${BRAND}; opacity:0.85; }
.spread i.low { background:#F59E0B; }
.spread span { font-size:14px; font-weight:560; color:var(--faint); }
.notif { left:858px; top:572px; width:480px; display:flex; gap:12px; align-items:flex-start; padding:16px 18px 18px; border-radius:24px; background:rgba(255,255,255,0.97); box-shadow:var(--shadow-lg); }
.n-top { display:flex; justify-content:space-between; font-size:14px; font-weight:600; color:var(--muted); }
.n-title { margin-top:2px; font-size:18px; font-weight:650; }
.n-body { margin-top:2px; font-size:16px; line-height:1.3; color:#433F3B; }
`

module.exports = () => page('Feedback from customers, by shop', body, css)
