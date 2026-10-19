// People & HR: Jordan works through the onboarding guide on a phone before the first shift.
// Labels are the app's: the contract wants a typed full name and a drawn signature and its
// button is "Sign and submit"; the guide shows "Progress" and a percent; an automatic task
// reads "Done" or "Ticks itself off once done"; contracts end "Signed", documents "Uploaded".
const { icon, avatar, pill, page } = require('../kit.cjs')

// A handwritten "Jordan Lee" stand-in: one continuous scribble.
const signature = `<svg width="236" height="86" viewBox="0 0 236 86" fill="none" stroke="#1D4ED8" stroke-width="3.4" stroke-linecap="round" stroke-linejoin="round">
  <path d="M34 18 C 40 30, 40 52, 30 62 C 22 70, 10 64, 14 54"/>
  <path d="M44 50 C 52 40, 62 44, 58 54 C 55 62, 45 60, 46 52 C 50 44, 60 48, 66 50 C 70 52, 72 44, 76 42 C 76 50, 78 56, 82 52"/>
  <path d="M82 52 C 88 44, 98 42, 96 54 C 95 62, 86 60, 90 50 C 94 40, 100 18, 102 20 C 100 34, 100 52, 104 58 C 108 62, 112 50, 118 46"/>
  <path d="M118 46 C 126 42, 128 54, 122 56 C 116 58, 116 46, 126 46 C 132 46, 132 56, 136 56 C 140 56, 140 46, 146 46 C 150 46, 150 56, 154 58"/>
  <path d="M164 22 C 164 38, 162 54, 166 62 C 172 66, 184 60, 190 58"/>
  <path d="M190 58 C 196 54, 204 48, 198 46 C 192 46, 192 58, 200 58 C 206 58, 210 50, 214 48 C 208 48, 206 58, 214 58 C 220 58, 224 52, 228 50"/>
</svg>`

const tasks = [
  { ic: 'file', name: 'Employment forms', meta: 'W-4, I-9 and direct deposit', status: pill('Done', 'ok', { sm: true }) },
  { ic: 'pen', name: 'Employment agreement', meta: 'Contract · signed on the phone', status: pill('Signed', 'ok', { sm: true }) },
  { ic: 'card', name: 'Food handler card', meta: 'Document · expires Mar 2027', status: pill('Uploaded', 'ok', { sm: true }) },
  { ic: 'calendar', name: 'Availability', meta: 'Ticks itself off once done', todo: true },
]

const body = `
<div class="phone" style="left:80px;top:62px;width:316px;height:664px">
  <div class="screen">
    <div class="island"></div>
    <div class="doc">
      <div class="d-eyebrow">Contract</div>
      <div class="d-title">Employment agreement</div>
      <div class="d-lines">
        <i style="width:92%"></i><i style="width:100%"></i><i style="width:84%"></i><i style="width:58%"></i>
      </div>
      <div class="f-label">Full name</div>
      <div class="f-input">Jordan Lee</div>
      <div class="sig">
        <div class="s-label">Signature</div>
        <div class="s-pad">${signature}</div>
        <div class="s-line"></div>
      </div>
      <div class="d-btn">Sign and submit</div>
    </div>
  </div>
</div>

<div class="abs idcard">
  <div class="id-band">FOOD HANDLER CARD</div>
  <div class="id-body">
    <div class="id-photo">${icon('user', { size: 34, stroke: 2, color: '#8F8981' })}</div>
    <div style="flex:1">
      <div class="id-l" style="width:78%"></div>
      <div class="id-l" style="width:56%"></div>
      <div class="id-exp">EXP 03/2027</div>
    </div>
  </div>
</div>
<div class="fab" style="left:566px;top:446px">${icon('upload', { size: 28, stroke: 2.4 })}</div>

<div class="card" style="left:640px;top:104px;width:702px;padding:34px 40px 30px">
  <div style="display:flex;align-items:center;gap:20px">
    ${avatar('Jordan Lee', 'green', 64)}
    <div style="flex:1">
      <div class="title">Jordan Lee</div>
      <div class="sub" style="margin-top:6px">Barista · Main St · onboarding</div>
    </div>
  </div>
  <div class="prog">
    <div class="p-top"><span>Progress</span><span><b>75%</b></span></div>
    <div class="p-bar"><i style="width:75%"></i></div>
  </div>
  <div class="rows" style="margin-top:20px">
    ${tasks
      .map(
        (t) =>
          `<div class="row" style="padding:14px 0"><span class="ic ${t.todo ? 'todo' : 'ok'}">${icon(t.ic, { size: 22, stroke: 2.2 })}</span><div class="grow"><div class="name">${t.name}</div><div class="meta">${t.meta}</div></div>${t.todo ? '<span class="ring-todo"></span>' : t.status}</div>`,
      )
      .join('')}
  </div>
</div>
`

const css = `
.doc { position:absolute; inset:0; padding:76px 24px 24px; display:flex; flex-direction:column; }
.d-eyebrow { font-size:14px; font-weight:600; color:var(--faint); letter-spacing:0.02em; }
.d-title { margin-top:4px; font-size:24px; font-weight:660; letter-spacing:-0.01em; }
.d-lines { margin-top:18px; display:flex; flex-direction:column; gap:10px; }
.d-lines i { display:block; height:9px; border-radius:99px; background:var(--warm-200); }
.f-label, .s-label { font-size:13px; font-weight:650; color:var(--faint); text-transform:uppercase; letter-spacing:0.08em; }
.f-label { margin-top:24px; }
.f-input { margin-top:6px; height:46px; border-radius:14px; border:1.5px solid var(--warm-200); display:flex; align-items:center; padding:0 14px; font-size:17px; font-weight:520; }
.sig { margin-top:16px; background:var(--warm-50); border:1.5px solid var(--warm-200); border-radius:18px; padding:14px 16px 16px; }
.s-pad { height:80px; margin-top:2px; display:flex; align-items:center; justify-content:center; }
.s-pad svg { width:220px; height:80px; }
.s-line { height:2px; background:#D4D1CC; margin:2px 4px 0; }
.d-btn { margin-top:auto; height:54px; border-radius:99px; background:var(--ink); color:#fff; font-size:19px; font-weight:650; display:flex; align-items:center; justify-content:center; gap:8px; }
.idcard { left:354px; top:476px; width:250px; height:156px; background:#fff; border-radius:16px; box-shadow:var(--shadow-lg); transform:rotate(-5deg); overflow:hidden; }
.id-band { height:38px; background:var(--ink-2); color:#fff; font-size:13px; font-weight:700; letter-spacing:0.12em; display:flex; align-items:center; padding:0 16px; }
.id-body { display:flex; gap:14px; padding:16px; align-items:center; }
.id-photo { width:66px; height:78px; border-radius:10px; background:var(--warm-100); display:flex; align-items:flex-end; justify-content:center; padding-bottom:8px; }
.id-l { height:9px; border-radius:99px; background:var(--warm-200); margin-bottom:10px; }
.id-exp { margin-top:4px; font-size:14px; font-weight:700; color:var(--ink-2); letter-spacing:0.04em; }
.prog { margin-top:26px; }
.p-top { display:flex; justify-content:space-between; font-size:18px; font-weight:500; color:var(--muted); }
.p-top span:first-child { font-weight:620; color:var(--ink); }
.p-top b { color:var(--ink); font-weight:650; }
.p-bar { margin-top:10px; height:12px; border-radius:99px; background:var(--warm-100); overflow:hidden; }
.p-bar i { display:block; height:100%; border-radius:99px; background:var(--blue); }
.ic { width:46px; height:46px; border-radius:14px; display:inline-flex; align-items:center; justify-content:center; flex-shrink:0; }
.ic.ok { background:var(--green-100); color:#059669; }
.ic.todo { background:var(--warm-100); color:#77726C; }
.ring-todo { width:30px; height:30px; border-radius:99px; border:2.5px solid #D4D1CC; margin-right:8px; }
`

module.exports = () => page('Paperwork before day one', body, css)
