// Hiring: Jordan's resume, summarized by the AI on the applicant page (Premium).
// Labels are the app's: "Summarize with AI", "AI Summary - Good fit", "✅ Highlights:",
// "❌ Red Flags:" (pages/hiring/HiringApplicantDetailed.jsx). The "Generated on … using {model}"
// line is left out: the model differs by deployment.
const { icon, page } = require('../kit.cjs')

const body = `
<div class="abs paper">
  <div class="fold"></div>
  <div class="r-name">Jordan Lee</div>
  <div class="r-role">Barista</div>
  <div class="r-lines"><i style="width:70%"></i></div>
  <div class="r-h">Experience</div>
  <div class="r-job">Barista · 3 years</div>
  <div class="r-lines"><i style="width:94%"></i><i style="width:88%"></i><i style="width:62%"></i></div>
  <div class="r-h">Certificates</div>
  <div class="r-job">Food handler card</div>
  <div class="r-lines"><i style="width:80%"></i></div>
  <div class="r-h">Availability</div>
  <div class="r-lines"><i style="width:90%"></i><i style="width:54%"></i></div>
  <div class="pdf"><span>PDF</span> jordan-lee-resume.pdf</div>
</div>

<div class="abs connector" style="left:474px;top:356px">
  <span class="pill white">${icon('sparkle', { size: 18, stroke: 2, color: '#2563EB' })} Summarize with AI</span>
  <svg width="140" height="24" viewBox="0 0 140 24"><path d="M4 12 H124" stroke="#2563EB" stroke-width="4" stroke-linecap="round" stroke-dasharray="1 12"/><path d="M118 3 L130 12 L118 21" fill="none" stroke="#2563EB" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>
</div>

<div class="card" style="left:690px;top:150px;width:652px;padding:34px 40px 34px">
  <div class="s-head">
    <span class="s-title">${icon('sparkle', { size: 24, stroke: 2, color: '#1D4ED8' })} AI Summary - Good fit</span>
  </div>
  <p class="s-text">Three years as a barista at a busy café, where Jordan opens on their own and trains new staff. Free on weekends.</p>
  <div class="s-label">✅ Highlights:</div>
  <ul class="s-list">
    <li>3 years at a busy café</li>
    <li>Food handler card</li>
    <li>Free weekends and early opens</li>
  </ul>
  <div class="s-label">❌ Red Flags:</div>
  <ul class="s-list">
    <li>No closing experience yet</li>
  </ul>
</div>
`

const css = `
.paper { left:80px; top:134px; width:360px; height:520px; background:#fff; border-radius:14px; box-shadow:var(--shadow-lg); padding:40px 36px; transform:rotate(-3deg); overflow:hidden; }
.fold { position:absolute; right:0; top:0; width:58px; height:58px; background:linear-gradient(225deg, #F1F0EC 50%, #E7E4E0 50%); border-bottom-left-radius:10px; }
.r-name { font-size:30px; font-weight:680; letter-spacing:-0.01em; }
.r-role { margin-top:2px; font-size:18px; color:var(--muted); font-weight:500; }
.r-h { margin-top:24px; font-size:13px; font-weight:700; letter-spacing:0.12em; text-transform:uppercase; color:#2563EB; }
.r-job { margin-top:6px; font-size:16px; font-weight:620; }
.r-lines { margin-top:10px; display:flex; flex-direction:column; gap:9px; }
.r-lines i { display:block; height:8px; border-radius:99px; background:var(--warm-200); }
.pdf { position:absolute; left:36px; bottom:34px; display:flex; align-items:center; gap:10px; font-size:15px; font-weight:560; color:#59554F; }
.pdf span { background:#DC2626; color:#fff; font-size:12px; font-weight:700; border-radius:6px; padding:4px 7px; letter-spacing:0.04em; }
.connector { display:flex; flex-direction:column; align-items:center; gap:14px; width:200px; }
.connector .pill { height:42px; font-size:17px; padding:0 16px; gap:8px; }
.s-head { display:flex; align-items:center; justify-content:space-between; }
.s-title { display:inline-flex; align-items:center; gap:10px; font-size:28px; font-weight:660; color:#1D4ED8; letter-spacing:-0.01em; }
.s-text { margin:18px 0 0; font-size:20px; line-height:1.45; color:#433F3B; }
.s-label { margin-top:22px; font-size:19px; font-weight:650; }
.s-list { margin:10px 0 0; padding:0; list-style:none; display:flex; flex-direction:column; gap:8px; }
.s-list li { position:relative; padding-left:22px; font-size:19px; color:#433F3B; }
.s-list li::before { content:''; position:absolute; left:4px; top:11px; width:8px; height:8px; border-radius:99px; background:#BDB7AF; }
.s-foot { margin-top:24px; padding-top:16px; border-top:1.5px solid var(--hair); font-size:16px; color:var(--faint); font-weight:500; }
`

module.exports = () => page('The resume, read for you', body, css)
