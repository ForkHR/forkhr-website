// Reminders: "Time to clock out" rings as an alarm at 10:10 PM, ten minutes after Jordan's shift
// at Main St ended. The alarm is drawn as the web's ReminderAlarm draws it (ink screen, "Fork ·
// Reminder · {time}", the ringing bell, the title, the message, a white primary and a dark
// secondary button); its words are the API's (backend/utils/reminderRules.js): the starter's
// message, ALARM_PRIMARY.clock.stillClockedIn "Clock out" and snoozeWords "Still working". The
// History reads each person's answer in the words of the button pressed (outcomeOf): "Clock out",
// "Still working", and "Sent" for a push, which asks for no answer. How it arrives is three
// switches: Push, Email, Alarm.
const { icon, avatar, pill, page, appIcon } = require('../kit.cjs')

// Scene in its own 660 x 628 box (page x 57, y 80): Main St after closing, chairs up.
const chairUp = (x, y) => `
  <g transform="translate(${x} ${y})">
    <rect x="0" y="0" width="64" height="9" rx="4" fill="#8A7A68"/>
    <rect x="6" y="-44" width="6" height="44" rx="3" fill="#8A7A68"/>
    <rect x="52" y="-44" width="6" height="44" rx="3" fill="#8A7A68"/>
    <rect x="4" y="-52" width="56" height="10" rx="4" fill="#9C8B77"/>
  </g>`

const table = (x, y) => `
  <g transform="translate(${x} ${y})">
    <rect x="0" y="0" width="150" height="12" rx="5" fill="#7A6A59"/>
    <rect x="70" y="12" width="10" height="112" fill="#5F5245"/>
    <rect x="44" y="120" width="62" height="8" rx="4" fill="#5F5245"/>
    ${chairUp(14, 0)}
    ${chairUp(78, 0)}
  </g>`

const scene = `
<svg viewBox="0 0 660 628" xmlns="http://www.w3.org/2000/svg">
  <rect width="660" height="628" fill="#B9AE9F"/>
  <rect y="430" width="660" height="198" fill="#A89A88"/>
  <g stroke="#9C8E7C" stroke-width="2.5">
    ${Array.from({ length: 12 }, (_, k) => `<path d="M${-40 + k * 64} 628 L${30 + k * 58} 430"/>`).join('')}
  </g>

  <!-- Night windows -->
  <rect x="40" y="70" width="230" height="270" rx="10" fill="#E2DAD0"/>
  <rect x="52" y="82" width="206" height="246" rx="6" fill="#2E3443"/>
  <rect x="152" y="82" width="8" height="246" fill="#E2DAD0"/>
  <g fill="#F2D38E" opacity="0.85">
    <circle cx="96" cy="250" r="5"/><circle cx="214" cy="236" r="4"/><circle cx="236" cy="262" r="3"/>
  </g>
  <g fill="#3E4558">
    <rect x="52" y="270" width="100" height="58"/><rect x="160" y="282" width="98" height="46"/>
  </g>
  <rect x="30" y="338" width="250" height="12" rx="5" fill="#D5CBBE"/>
  <!-- The door sign, turned -->
  <path d="M78 96 L104 128 M130 96 L104 128" stroke="#CFC5B8" stroke-width="2"/>
  <rect x="60" y="126" width="88" height="36" rx="6" fill="#F7F3EE"/>
  <text x="104" y="150" text-anchor="middle" font-family="Bricolage" font-size="16" font-weight="700" letter-spacing="2" fill="#2D2926">CLOSED</text>

  <!-- Wall clock at 10:10 -->
  <circle cx="336" cy="150" r="62" fill="#F7F3EE"/>
  <circle cx="336" cy="150" r="62" fill="none" stroke="#5F5245" stroke-width="8"/>
  <g stroke="#B9AFA3" stroke-width="4" stroke-linecap="round">
    ${Array.from({ length: 12 }, (_, k) => {
      const a = (k * Math.PI) / 6
      return `<path d="M${(336 + Math.sin(a) * 44).toFixed(1)} ${(150 - Math.cos(a) * 44).toFixed(1)} L${(336 + Math.sin(a) * 50).toFixed(1)} ${(150 - Math.cos(a) * 50).toFixed(1)}"/>`
    }).join('')}
  </g>
  <g stroke="#2D2926" stroke-linecap="round">
    <path d="M336 150 L${(336 + Math.sin((-50 * Math.PI) / 180) * 28).toFixed(1)} ${(150 - Math.cos((-50 * Math.PI) / 180) * 28).toFixed(1)}" stroke-width="7"/>
    <path d="M336 150 L${(336 + Math.sin((60 * Math.PI) / 180) * 42).toFixed(1)} ${(150 - Math.cos((60 * Math.PI) / 180) * 42).toFixed(1)}" stroke-width="5"/>
  </g>
  <circle cx="336" cy="150" r="6" fill="#2D2926"/>

  <!-- Tables with the chairs up -->
  ${table(48, 418)}
  ${table(262, 446)}
</svg>`

const body = `
<div class="scene" style="left:57px;top:80px;width:660px;height:628px">${scene}</div>

<div class="phone" style="left:478px;top:62px;width:316px;height:664px">
  <div class="screen alarm">
    <div class="island"></div>
    <div class="a-app">${appIcon(24)}<span>Fork · Reminder · 10:10 PM</span></div>
    <div class="a-bell"><i></i><i></i><span><svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="13" r="8"/><path d="M12 9v4l2.5 2M5 3 2.5 5.5M19 3l2.5 2.5"/></svg></span></div>
    <div class="a-title">Time to clock out</div>
    <div class="a-msg">Your shift at Main St ended at 10:00 PM and you are still clocked in.</div>
    <div class="a-btns">
      <div class="a-btn primary">Clock out</div>
      <div class="a-btn secondary">Still working</div>
    </div>
  </div>
</div>

<div class="card" style="left:846px;top:110px;width:496px;padding:32px 34px 28px">
  <div class="title">History</div>
  <div class="sub">Time to clock out · Tue, Nov 10</div>
  <div class="rows">
    <div class="row">
      ${avatar('Jordan Lee', 'green', 48)}
      <div class="grow"><div class="name">Jordan Lee</div><div class="meta">Alarm · 10:10 PM</div></div>
      ${pill('Clock out', 'ok', { sm: true })}
    </div>
    <div class="row">
      ${avatar('Luis Ortega', 'red', 48)}
      <div class="grow"><div class="name">Luis Ortega</div><div class="meta">Push · 5:10 PM</div></div>
      ${pill('Sent', 'neutral', { sm: true })}
    </div>
    <div class="row">
      ${avatar('Maya Chen', 'grey', 48)}
      <div class="grow"><div class="name">Maya Chen</div><div class="meta">Alarm · 3:10 PM</div></div>
      ${pill('Still working', 'warn', { sm: true })}
    </div>
  </div>
  <div class="arrive">
    <div class="ar-label">How it arrives</div>
    <div class="ar-row">
      <span class="ar"><span class="sw on"><i></i></span>Push</span>
      <span class="ar off"><span class="sw"><i></i></span>Email</span>
      <span class="ar"><span class="sw on"><i></i></span>Alarm</span>
    </div>
  </div>
</div>
`

const css = `
.phone .screen.alarm { background:#141413; color:#fff; }
.a-app { position:absolute; top:70px; width:100%; display:flex; align-items:center; justify-content:center; gap:8px; font-size:15px; font-weight:600; opacity:0.75; }
.a-bell { position:absolute; top:118px; left:50%; transform:translateX(-50%); width:168px; height:168px; display:flex; align-items:center; justify-content:center; }
.a-bell i { position:absolute; inset:0; border-radius:50%; border:1.5px solid rgba(255,255,255,0.14); }
.a-bell i + i { inset:26px; border-color:rgba(255,255,255,0.28); }
.a-bell span { width:80px; height:80px; border-radius:50%; background:#fff; color:#141413; display:flex; align-items:center; justify-content:center; }
.a-title { position:absolute; top:306px; left:22px; right:22px; text-align:center; font-size:31px; font-weight:700; letter-spacing:-0.02em; line-height:1.08; }
.a-msg { position:absolute; top:352px; left:26px; right:26px; text-align:center; font-size:16.5px; line-height:1.38; opacity:0.75; }
.a-btns { position:absolute; left:20px; right:20px; bottom:38px; display:flex; flex-direction:column; gap:10px; }
.a-btn { height:56px; border-radius:26px; display:flex; align-items:center; justify-content:center; font-size:18px; font-weight:620; }
.a-btn.primary { background:#fff; color:#141413; }
.a-btn.secondary { background:#2A2A29; color:#fff; }
.rows { margin-top:20px; }
.row { padding:15px 0; }
.row .pill.sm { height:32px; font-size:15.5px; padding:0 13px; }
.arrive { margin-top:10px; background:#F4F2EF; border-radius:20px; padding:16px 20px 18px; }
.ar-label { font-size:16px; font-weight:500; color:var(--muted); }
.ar-row { margin-top:10px; display:flex; gap:22px; }
.ar { display:inline-flex; align-items:center; gap:9px; font-size:18px; font-weight:600; color:var(--ink-2); }
.ar.off { color:var(--faint); }
.sw { width:44px; height:26px; border-radius:99px; background:var(--warm-200); position:relative; flex-shrink:0; }
.sw i { position:absolute; top:3px; left:3px; width:20px; height:20px; border-radius:99px; background:#fff; box-shadow:0 1px 3px rgba(0,0,0,0.18); }
.sw.on { background:var(--ink); }
.sw.on i { left:21px; }
`

module.exports = () => page('An alarm that waits for an answer', body, css)
