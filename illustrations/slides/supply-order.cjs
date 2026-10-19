// Supply: what the count found short goes on Bluebird's order, and the order goes out as an email.
// Strings are the phone's: the order screen's "Actions" sheet ("Par refill" · "2 items below par",
// then the toast "2 items topped up to par at Main St"), the success screen ("Order placed!",
// "Delivering to Main St", "4 items · $486.20", "Delivering Oct 1"), and the vendor thread of a
// vendor not on Fork (header "Emails {address}", the order's bubble green, status "Emailed").
const { icon, page } = require('../kit.cjs')

const actions = [
  { name: 'Par refill', sub: '2 items below par', on: true },
  { name: 'Reorder last order' },
  { name: "Replace what's been used" },
  { name: 'Hold par to next delivery' },
  { name: 'Fill to max capacity' },
]

const body = `
<div class="phone" style="left:80px;top:62px;width:316px;height:664px">
  <div class="screen">
    <div class="island"></div>
    <div class="behind">
      <div class="v-pill"><span class="logo">BD</span> Bluebird Dairy <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round"><path d="m6 9 6 6 6-6"/></svg></div>
      <div class="b-row"><i style="width:60%"></i><i style="width:30%"></i></div>
      <div class="b-row"><i style="width:50%"></i><i style="width:36%"></i></div>
    </div>
    <div class="dim"></div>
    <div class="sheet">
      <div class="grab"></div>
      <div class="sh-title">Actions</div>
      ${actions
        .map(
          (a) => `<div class="act ${a.on ? 'on' : ''}"><div><div class="a-name">${a.name}</div>${a.sub ? `<div class="a-sub">${a.sub}</div>` : ''}</div>${a.on ? icon('arrow', { size: 18, stroke: 2.4 }) : ''}</div>`,
        )
        .join('')}
    </div>
  </div>
</div>

<div class="abs connector" style="left:418px;top:350px">
  <span class="pill white">2 items topped up to par at Main St</span>
  <svg width="120" height="24" viewBox="0 0 120 24"><path d="M4 12 H104" stroke="#2563EB" stroke-width="4" stroke-linecap="round" stroke-dasharray="1 12"/><path d="M98 3 L110 12 L98 21" fill="none" stroke="#2563EB" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>
</div>

<div class="card placed" style="left:770px;top:70px;width:572px">
  <span class="check" style="width:56px;height:56px">${icon('check', { size: 30, stroke: 3 })}</span>
  <div>
    <div class="title" style="font-size:30px">Order placed!</div>
    <div class="sub" style="margin-top:6px">Delivering to Main St</div>
    <div class="facts"><span>4 items · $486.20</span><span>Delivering Oct 1</span></div>
  </div>
</div>

<div class="card thread" style="left:770px;top:330px;width:572px;padding:0">
  <div class="t-head"><span class="logo lg">BD</span><div><div class="t-name">Bluebird Dairy</div><div class="t-sub">Emails orders@bluebirddairy.com</div></div></div>
  <div class="t-body">
    <div class="bubble">
      <div class="o-card">
        <div class="o-top">${icon('file', { size: 18, stroke: 2.2 })} Order #ORD-260929-K7F3Q</div>
        <div class="o-lines"><span>Vendor</span><b>Bluebird Dairy</b></div>
        <div class="o-lines"><span>Items</span><b>4</b></div>
        <div class="o-lines"><span>Total</span><b>$486.20</b></div>
        <div class="o-total"><span>Submitted</span><b>View Order</b></div>
      </div>
    </div>
    <div class="status">Emailed</div>
  </div>
</div>
`

const css = `
.behind { position:absolute; left:0; right:0; top:62px; padding:12px 18px; }
.v-pill { display:inline-flex; align-items:center; gap:8px; height:40px; padding:0 12px 0 6px; border-radius:99px; background:var(--warm-100); font-size:16px; font-weight:650; }
.logo { width:30px; height:30px; border-radius:99px; background:#E0F2FE; color:#0369A1; display:inline-flex; align-items:center; justify-content:center; font-size:12px; font-weight:750; }
.logo.lg { width:46px; height:46px; font-size:16px; }
.b-row { margin-top:18px; display:flex; justify-content:space-between; }
.b-row i { display:block; height:10px; border-radius:99px; background:var(--warm-200); }
.dim { position:absolute; inset:0; background:rgba(27,26,25,0.32); }
.sheet { position:absolute; left:0; right:0; bottom:0; top:206px; background:#fff; border-radius:26px 26px 0 0; padding:12px 16px 20px; }
.grab { width:40px; height:5px; border-radius:99px; background:#D4D1CC; margin:0 auto 10px; }
.sh-title { font-size:21px; font-weight:680; padding:0 6px 8px; }
.act { display:flex; align-items:center; justify-content:space-between; gap:10px; padding:13px 12px; border-radius:14px; }
.act.on { background:var(--blue-50); color:var(--blue-700); }
.a-name { font-size:16.5px; font-weight:620; }
.a-sub { margin-top:2px; font-size:14px; font-weight:500; color:#2563EB; }
.connector { display:flex; flex-direction:column; align-items:center; gap:14px; width:330px; }
.connector .pill { height:42px; font-size:16px; padding:0 16px; }
.placed { display:flex; align-items:center; gap:22px; padding:30px 34px; }
.facts { margin-top:14px; display:flex; gap:8px; }
.facts span { height:34px; padding:0 14px; border-radius:99px; background:var(--warm-100); display:inline-flex; align-items:center; font-size:15.5px; font-weight:620; color:#433F3B; }
.thread { overflow:hidden; }
.t-head { display:flex; align-items:center; gap:14px; padding:18px 24px; border-bottom:1.5px solid var(--hair); }
.t-name { font-size:20px; font-weight:650; }
.t-sub { margin-top:2px; font-size:15px; color:var(--muted); }
.t-body { padding:20px 24px 18px; background:var(--warm-50); display:flex; flex-direction:column; align-items:flex-end; }
.bubble { width:340px; background:#34C759; border-radius:22px; border-bottom-right-radius:8px; padding:10px; }
.o-card { background:rgba(255,255,255,0.14); border-radius:14px; padding:12px 14px; color:#fff; }
.o-top { display:flex; align-items:center; gap:8px; font-size:15.5px; font-weight:650; margin-bottom:6px; }
.o-lines, .o-total { display:flex; justify-content:space-between; font-size:14.5px; padding:4px 0; border-top:1px solid rgba(255,255,255,0.22); }
.o-total { font-weight:650; }
.status { margin-top:6px; margin-right:6px; font-size:13.5px; font-weight:560; color:var(--faint); }
`

module.exports = () => page('The order goes out by email', body, css)
