// Hiring: Jordan scans the sign and applies on the job board from a phone.
// Strings are the board's (fork-jobs-next [companyPublicUrl]/[listingId]/listingPageClient.jsx):
// "Back to all listings", pay as "$17/h", "Part time", "Apply", "Apply for this job",
// "First Name *" ... "Resume/CV", "Submit application", "Thank you for applying!".
const { icon, page } = require('../kit.cjs')

const BRAND = '#3F6B4E'

const listing = `
  <div class="hero"></div>
  <div class="lp">
    <div class="back">${icon('arrow', { size: 14, stroke: 2.4, style: 'transform:rotate(180deg)' })} Back to all listings</div>
    <div class="job">Barista</div>
    <div class="facts"><span>$17/h</span><span>Part time</span></div>
    <div class="addr">${icon('pin', { size: 15, stroke: 2.2 })} 180 Main St</div>
    <div class="desc"><i style="width:100%"></i><i style="width:92%"></i><i style="width:97%"></i><i style="width:64%"></i></div>
    <div class="desc" style="margin-top:16px"><i style="width:88%"></i><i style="width:95%"></i><i style="width:52%"></i></div>
    <div class="apply">Apply</div>
  </div>`

const field = (label, value) => `<div class="f"><div class="f-l">${label}</div><div class="f-v">${value}</div></div>`

const form = `
  <div class="fp">
    <div class="f-h">Apply for this job</div>
    <div class="f-row">${field('First Name *', 'Jordan')}${field('Last Name *', 'Lee')}</div>
    ${field('Email *', 'jordan.lee@mail.com')}
    ${field('Phone *', '(555) 014-2290')}
    <div class="f"><div class="f-l">Resume/CV</div><div class="file"><span>PDF</span> jordan-lee-resume.pdf</div></div>
    <div class="f"><div class="f-l">Which shifts are you available to work? (Select all that apply) *</div>
      <div class="checks">
        <span class="on"><i></i>Early morning (5:00 AM - 11:00 AM)</span>
        <span><i></i>Mid-day (10:00 AM - 4:00 PM)</span>
        <span><i></i>Afternoon/Evening (2:00 PM - 8:00 PM)</span>
        <span class="on"><i></i>Weekends</span>
        <span><i></i>Holidays</span>
      </div></div>
    <div class="submit">Submit application</div>
  </div>`

const body = `
<div class="phone" style="left:96px;top:92px;width:300px;height:620px;transform:rotate(-4deg)">
  <div class="screen"><div class="island"></div>${listing}</div>
</div>

<div class="phone" style="left:470px;top:62px;width:316px;height:664px">
  <div class="screen"><div class="island"></div>${form}</div>
</div>

<svg class="abs" style="left:806px;top:378px" width="120" height="24" viewBox="0 0 120 24"><path d="M4 12 H104" stroke="#2563EB" stroke-width="4" stroke-linecap="round" stroke-dasharray="1 12"/><path d="M98 3 L110 12 L98 21" fill="none" stroke="#2563EB" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>

<div class="card thanks" style="left:930px;top:280px;width:412px">
  <span class="check" style="width:60px;height:60px">${icon('check', { size: 32, stroke: 3 })}</span>
  <div class="t-h">Thank you for applying!</div>
  <div class="t-sub">Barista · Main St</div>
</div>
`

const css = `
.hero { position:absolute; left:0; right:0; top:0; height:118px; background:${BRAND}; }
.lp { position:absolute; left:0; right:0; top:118px; bottom:0; padding:20px 22px; }
.back { display:flex; align-items:center; gap:6px; font-size:14px; font-weight:600; color:var(--muted); }
.job { margin-top:14px; font-size:28px; font-weight:680; letter-spacing:-0.01em; }
.facts { margin-top:10px; display:flex; gap:8px; }
.facts span { height:30px; padding:0 12px; border-radius:99px; background:var(--warm-100); display:inline-flex; align-items:center; font-size:14px; font-weight:620; color:#433F3B; }
.addr { margin-top:12px; display:flex; align-items:center; gap:6px; font-size:15px; font-weight:560; color:${BRAND}; text-decoration:underline; text-underline-offset:3px; }
.desc { margin-top:18px; display:flex; flex-direction:column; gap:9px; }
.desc i { display:block; height:8px; border-radius:99px; background:var(--warm-200); }
.apply { position:absolute; left:22px; right:22px; bottom:28px; height:50px; border-radius:14px; background:${BRAND}; color:#fff; font-size:18px; font-weight:650; display:flex; align-items:center; justify-content:center; }
.fp { position:absolute; inset:0; padding:64px 20px 20px; display:flex; flex-direction:column; }
.f-h { font-size:23px; font-weight:680; letter-spacing:-0.01em; margin-bottom:6px; }
.f-row { display:grid; grid-template-columns:1fr 1fr; gap:10px; }
.f { margin-top:9px; }
.f-l { font-size:12.5px; font-weight:650; color:var(--muted); }
.f-v { margin-top:4px; height:36px; border-radius:10px; border:1.5px solid var(--warm-200); display:flex; align-items:center; padding:0 12px; font-size:15px; font-weight:520; white-space:nowrap; overflow:hidden; }
.file { margin-top:4px; height:36px; border-radius:10px; background:var(--warm-50); border:1.5px dashed #D4D1CC; display:flex; align-items:center; gap:8px; padding:0 10px; font-size:14px; font-weight:560; color:#433F3B; }
.file span { background:#DC2626; color:#fff; font-size:11px; font-weight:700; border-radius:5px; padding:3px 6px; }
.checks { margin-top:6px; display:flex; flex-direction:column; gap:6px; }
.checks span { display:flex; align-items:center; gap:8px; font-size:13px; font-weight:500; color:#433F3B; }
.checks i { width:16px; height:16px; border-radius:4px; border:1.5px solid #BDB7AF; display:inline-block; flex-shrink:0; }
.checks span.on i { background:${BRAND}; border-color:${BRAND}; box-shadow:inset 0 0 0 3px #fff; }
.opts { margin-top:6px; display:flex; gap:8px; }
.opts span { height:34px; padding:0 18px; border-radius:99px; border:1.5px solid var(--warm-200); display:inline-flex; align-items:center; font-size:15px; font-weight:600; color:var(--muted); }
.opts span.on { background:${BRAND}; border-color:${BRAND}; color:#fff; }
.submit { margin-top:auto; height:50px; border-radius:14px; background:${BRAND}; color:#fff; font-size:17px; font-weight:650; display:flex; align-items:center; justify-content:center; }
.thanks { display:flex; flex-direction:column; align-items:center; text-align:center; padding:40px 36px 36px; }
.t-h { margin-top:18px; font-size:27px; font-weight:680; letter-spacing:-0.01em; }
.t-sub { margin-top:8px; font-size:19px; color:var(--muted); }
`

module.exports = () => page('Applied from a phone', body, css)
