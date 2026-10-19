// Hiring: Dana hires Jordan from the phone. The phone's hire sheet (app/(protected)/hiring/
// applicant/[id]/index.jsx): "Hire Jordan", "Email", "Full time" / "Part time", "Pay rate ($/hr)",
// "Hourly" / "Salary", switches "Create their employee profile" and "Email them an invite to
// Fork", "Back" / "Hire"; then the toast "Jordan hired", the "Hired" tag and the "Offer" card
// ("Hired on" / "Employment" / "Pay"). The invite email ends with the temporary password and
// "Get Started" (components/EmailInvitation.js).
const { icon, avatar, pill, page, appIcon } = require('../kit.cjs')

const sw = (on) => `<span class="sw ${on ? 'on' : ''}"><i></i></span>`
const radio = (a, b, first) => `<div class="seg"><span class="${first ? 'on' : ''}">${a}</span><span class="${first ? '' : 'on'}">${b}</span></div>`

const body = `
<div class="phone" style="left:80px;top:62px;width:316px;height:664px">
  <div class="screen">
    <div class="island"></div>
    <div class="behind">
      <div style="display:flex;align-items:center;gap:12px">${avatar('Jordan Lee', 'green', 44)}<div><div class="b-name">Jordan Lee</div><div class="b-sub">Barista · Main St</div></div></div>
    </div>
    <div class="dim"></div>
    <div class="sheet">
      <div class="grab"></div>
      <div class="sh-title">Hire Jordan</div>
      <div class="lbl">Email</div>
      <div class="inp">jordan.lee@mail.com</div>
      ${radio('Full time', 'Part time', false)}
      <div class="lbl">Pay rate ($/hr)</div>
      <div class="inp">17.00</div>
      ${radio('Hourly', 'Salary', true)}
      <div class="tog"><span>Create their employee profile</span>${sw(true)}</div>
      <div class="tog"><span>Email them an invite to Fork</span>${sw(true)}</div>
      <div class="btns"><span>Back</span><span class="primary">Hire</span></div>
    </div>
  </div>
</div>

<div class="abs pill white toast" style="left:150px;top:690px">${icon('check', { size: 18, stroke: 3, color: '#10B981' })} Jordan hired</div>

<div class="card" style="left:470px;top:150px;width:430px;padding:30px 32px 28px">
  <div style="display:flex;align-items:center;gap:14px">
    ${avatar('Jordan Lee', 'green', 54)}
    <div style="flex:1"><div class="title" style="font-size:27px">Jordan Lee</div><div class="sub" style="margin-top:2px;font-size:17px">Barista · Main St</div></div>
    ${pill('Hired', 'ok')}
  </div>
  <div class="o-h">Offer</div>
  <div class="rows" style="margin-top:8px">
    <div class="row" style="padding:14px 0"><span class="grow name" style="font-size:19px;font-weight:480;color:var(--muted)">Hired on</span><span class="val" style="font-size:19px">Sep 18</span></div>
    <div class="row" style="padding:14px 0"><span class="grow name" style="font-size:19px;font-weight:480;color:var(--muted)">Employment</span><span class="val" style="font-size:19px">Part time</span></div>
    <div class="row" style="padding:14px 0"><span class="grow name" style="font-size:19px;font-weight:480;color:var(--muted)">Pay</span><span class="val" style="font-size:19px">$17.00/hr</span></div>
  </div>
</div>

<svg class="abs" style="left:912px;top:372px" width="70" height="24" viewBox="0 0 70 24"><path d="M4 12 H54" stroke="#2563EB" stroke-width="4" stroke-linecap="round" stroke-dasharray="1 12"/><path d="M48 3 L60 12 L48 21" fill="none" stroke="#2563EB" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>

<div class="card mail" style="left:992px;top:196px;width:350px;padding:0">
  <div class="m-top">${appIcon(36)}<div><div class="m-from">Fork</div><div class="m-to">to Jordan Lee</div></div></div>
  <div class="m-body">
    <div class="m-lines"><i style="width:96%"></i><i style="width:88%"></i><i style="width:70%"></i></div>
    <div class="m-lbl">Your temporary password:</div>
    <div class="m-pw">••••••••••</div>
    <div class="m-btn">Get Started</div>
  </div>
</div>
`

const css = `
.behind { position:absolute; left:0; right:0; top:64px; padding:16px 20px; }
.b-name { font-size:19px; font-weight:650; }
.b-sub { font-size:14px; color:var(--muted); }
.dim { position:absolute; inset:0; background:rgba(27,26,25,0.32); }
.sheet { position:absolute; left:0; right:0; bottom:0; top:150px; background:#fff; border-radius:26px 26px 0 0; padding:12px 20px 22px; display:flex; flex-direction:column; }
.grab { width:40px; height:5px; border-radius:99px; background:#D4D1CC; margin:0 auto 10px; }
.sh-title { font-size:22px; font-weight:680; letter-spacing:-0.01em; }
.lbl { margin-top:12px; font-size:12.5px; font-weight:650; color:var(--muted); }
.inp { margin-top:5px; height:38px; border-radius:10px; border:1.5px solid var(--warm-200); display:flex; align-items:center; padding:0 12px; font-size:15px; font-weight:520; }
.seg { margin-top:10px; display:grid; grid-template-columns:1fr 1fr; background:var(--warm-100); border-radius:10px; padding:3px; }
.seg span { height:32px; border-radius:8px; display:flex; align-items:center; justify-content:center; font-size:14px; font-weight:600; color:var(--muted); }
.seg span.on { background:#fff; color:var(--ink); box-shadow:0 1px 3px rgba(0,0,0,0.12); }
.tog { margin-top:12px; display:flex; align-items:center; justify-content:space-between; gap:10px; font-size:14px; font-weight:560; }
.sw { width:42px; height:25px; border-radius:99px; background:#D4D1CC; position:relative; flex-shrink:0; }
.sw i { position:absolute; top:2.5px; left:2.5px; width:20px; height:20px; border-radius:99px; background:#fff; }
.sw.on { background:var(--green); }
.sw.on i { left:19.5px; }
.btns { margin-top:auto; display:grid; grid-template-columns:1fr 1fr; gap:10px; }
.btns span { height:46px; border-radius:99px; display:flex; align-items:center; justify-content:center; font-size:16px; font-weight:650; background:var(--warm-100); color:var(--ink-2); }
.btns span.primary { background:var(--ink); color:#fff; }
.toast { height:46px; padding:0 18px; font-size:17px; gap:8px; }
.o-h { margin-top:22px; font-size:14px; font-weight:650; letter-spacing:0.08em; text-transform:uppercase; color:var(--faint); }
.mail { overflow:hidden; }
.m-top { display:flex; align-items:center; gap:12px; padding:20px 22px; border-bottom:1.5px solid var(--hair); }
.m-from { font-size:17px; font-weight:650; }
.m-to { font-size:14px; color:var(--muted); }
.m-body { padding:20px 22px 24px; }
.m-lines { display:flex; flex-direction:column; gap:9px; }
.m-lines i { display:block; height:8px; border-radius:99px; background:var(--warm-200); }
.m-lbl { margin-top:20px; font-size:15px; font-weight:560; color:#433F3B; }
.m-pw { margin-top:6px; font-size:22px; letter-spacing:0.12em; font-weight:700; color:var(--ink-2); }
.m-btn { margin-top:18px; height:46px; border-radius:12px; background:var(--ink); color:#fff; font-size:16px; font-weight:650; display:flex; align-items:center; justify-content:center; }
`

module.exports = () => page('Hired, with a profile and an invite', body, css)
