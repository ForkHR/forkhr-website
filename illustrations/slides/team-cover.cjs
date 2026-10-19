// Chat + shift pool: Dana asks the Main St group about Friday's close; Jordan picks the open
// shift up from the pool. What the app does: groups have typed names and no subtitle in the
// phone header; a group shows "Delivered" under your latest message (never "Read by N"); the
// pool's button is "Interested", the manager taps "Approve", the tags read "Open shift" and
// "Pending" / "Accepted"; picking up an open shift sets the Covered shift flag on its own,
// which the schedule draws as the dashed green ring and the ghosted COVERING stamp.
const { icon, avatar, pill, page } = require('../kit.cjs')

const body = `
<div class="phone" style="left:80px;top:62px;width:330px;height:664px">
  <div class="screen chat">
    <div class="island"></div>
    <div class="c-head">
      <span class="c-av">${icon('hash', { size: 18, stroke: 2.4 })}</span>
      <div class="c-name">Main St team</div>
    </div>
    <div class="c-body">
      <div class="msg">
        ${avatar('Dana W.', 'violet', 34)}
        <div>
          <div class="who">Dana W.</div>
          <div class="bubble in">Anyone free to close Friday, 3–10 PM? It's in the shift pool.</div>
        </div>
      </div>
      <div class="msg">
        ${avatar('Priya Nair', 'amber', 34)}
        <div>
          <div class="who">Priya Nair</div>
          <div class="bubble in">Can't this week, sorry!</div>
        </div>
      </div>
      <div class="own">
        <div class="bubble out">I'm in, just tapped Interested.</div>
        <div class="status">Delivered</div>
      </div>
    </div>
    <div class="c-compose"><span>Message</span></div>
  </div>
</div>

<div class="card" style="left:500px;top:112px;width:842px;padding:32px 40px 30px">
  <div style="display:flex;align-items:center;justify-content:space-between">
    ${pill('Open shift', 'neutral', { sm: true })}
    ${pill('Accepted', 'ok', { icon: 'check' })}
  </div>
  <div class="title" style="margin-top:14px">Fri, Oct 2 · 3:00 – 10:00 PM</div>
  <div class="sub">Main St · Barista</div>
  <div class="steps">
    <div class="step"><span class="dot done">${icon('check', { size: 16, stroke: 3.4 })}</span><div><div class="s-name">In the shift pool</div><div class="s-meta">Posted by Dana W.</div></div></div>
    <div class="step"><span class="dot done">${icon('check', { size: 16, stroke: 3.4 })}</span><div><div class="s-name">Jordan is interested</div><div class="s-meta">Tapped Interested · 11:09 AM</div></div></div>
    <div class="step"><span class="dot done">${icon('check', { size: 16, stroke: 3.4 })}</span><div><div class="s-name">Approved by Dana W.</div><div class="s-meta">11:15 AM</div></div></div>
  </div>
  <div class="shiftrow">
    <span class="ring">${avatar('Jordan Lee', 'green', 54)}</span>
    <span class="bar"></span>
    <div style="flex:1">
      <div class="sr-name">Jordan Lee</div>
      <div class="sr-meta">3:00 – 10:00 PM · Main St</div>
    </div>
    <span class="stamp">COVERING</span>
  </div>
</div>
`

const css = `
.c-head { position:absolute; top:62px; left:0; right:0; padding:10px 20px 14px; border-bottom:1.5px solid var(--hair); background:#fff; display:flex; align-items:center; gap:12px; }
.c-av { width:38px; height:38px; border-radius:99px; background:var(--warm-100); color:#77726C; display:inline-flex; align-items:center; justify-content:center; }
.c-name { font-size:21px; font-weight:650; }
.c-body { position:absolute; top:126px; left:0; right:0; bottom:76px; padding:22px 16px; display:flex; flex-direction:column; gap:16px; background:var(--warm-50); }
.msg { display:flex; gap:10px; align-items:flex-end; }
.who { margin:0 0 4px 6px; font-size:13px; font-weight:620; color:var(--muted); }
.bubble { max-width:230px; padding:11px 15px; border-radius:22px; font-size:17px; line-height:1.32; }
.bubble.in { background:#fff; border:1.5px solid var(--warm-200); border-bottom-left-radius:8px; }
.own { display:flex; flex-direction:column; align-items:flex-end; margin-top:4px; }
.bubble.out { background:#3A83F7; color:#fff; border-bottom-right-radius:8px; }
.status { margin-top:5px; margin-right:6px; font-size:13px; color:var(--faint); font-weight:560; }
.c-compose { position:absolute; left:16px; right:16px; bottom:22px; height:46px; border-radius:99px; border:1.5px solid var(--warm-200); background:#fff; display:flex; align-items:center; padding:0 18px; font-size:16px; color:var(--faint); }
.steps { margin-top:22px; border-top:1.5px solid var(--hair); padding-top:6px; }
.step { display:flex; gap:16px; align-items:flex-start; padding:13px 0; position:relative; }
.step:not(:last-child)::after { content:''; position:absolute; left:14px; top:45px; bottom:-13px; width:2.5px; background:var(--green-100); }
.dot { width:30px; height:30px; border-radius:99px; display:inline-flex; align-items:center; justify-content:center; flex-shrink:0; margin-top:2px; }
.dot.done { background:var(--green); color:#fff; }
.s-name { font-size:21px; font-weight:600; }
.s-meta { margin-top:2px; font-size:17px; color:var(--muted); }
.shiftrow { position:relative; overflow:hidden; margin-top:12px; display:flex; align-items:center; gap:16px; padding:18px 22px; border-radius:20px; background:#F4F2EF; }
.ring { position:relative; display:inline-flex; }
.ring::before { content:''; position:absolute; inset:-6px; border-radius:99px; border:3px dashed var(--green); }
.bar { width:5px; height:52px; border-radius:99px; background:#F59E0B; }
.sr-name { font-size:21px; font-weight:620; }
.sr-meta { margin-top:2px; font-size:17px; color:var(--muted); }
.stamp { position:absolute; right:-10px; top:50%; transform:translateY(-50%) rotate(-7deg); font-size:54px; font-weight:800; letter-spacing:2px; color:rgba(16,185,129,0.16); white-space:nowrap; }
`

module.exports = () => page("Friday's close, covered", body, css)
