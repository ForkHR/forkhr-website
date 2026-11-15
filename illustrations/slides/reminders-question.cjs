// Reminders: at 7:00 AM a reminder asks the morning crew one question from the Opening log.
// The alarm is the web's ReminderAlarm with a question (ink screen; the reminder's name small above
// the question as its kicker; the answers side by side; "Not now" under them). What happens to an
// answer is the CLAUDE.md rule "A reminder can ask a question, and the answer is a log's entry": the
// app files it as the log's entry, the first answer at a shop answers for everyone it rang for there
// (the History's "Yes · Maya C. answered"), and when nobody at a shop answers within 20 minutes its
// manager is told once. Outcomes read as backend/utils/reminderRules.js outcomeOf says them ("Yes",
// "No answer").
const { icon, avatar, pill, page, appIcon } = require('../kit.cjs')

// Scene in its own 660 x 628 box (page x 57, y 80): Juniper Coffee's Main St front at opening.
const stripes = Array.from({ length: 12 }, (_, k) => `<rect x="${k * 56}" y="150" width="28" height="70" fill="#F7F1E7"/>`).join('')

const scene = `
<svg viewBox="0 0 660 628" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="sun" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#FFE7B0" stop-opacity="0.9"/>
      <stop offset="1" stop-color="#FFE7B0" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="660" height="628" fill="#F4E6D2"/>
  <circle cx="90" cy="40" r="120" fill="url(#sun)"/>

  <!-- Facade -->
  <rect y="108" width="660" height="430" fill="#D9C3AB"/>
  <g stroke="#CDB59B" stroke-width="2">
    ${Array.from({ length: 13 }, (_, k) => `<path d="M0 ${118 + k * 32} H660"/>`).join('')}
  </g>
  <rect y="108" width="660" height="14" fill="#C9B095"/>

  <!-- Awning -->
  <rect y="150" width="660" height="70" fill="#7FA584"/>
  ${stripes}
  <path d="M0 220 ${Array.from({ length: 24 }, (_, k) => `Q${k * 28 + 14} 244 ${k * 28 + 28} 220`).join(' ')} V220 Z" fill="#6A9471"/>
  <rect y="132" width="660" height="22" rx="4" fill="#3F5F47"/>
  <text x="200" y="149" text-anchor="middle" font-family="Bricolage" font-size="14" font-weight="700" letter-spacing="4" fill="#F7F1E7">JUNIPER COFFEE</text>

  <!-- Window with the pastry case -->
  <rect x="26" y="268" width="216" height="200" rx="8" fill="#F2EBE1"/>
  <rect x="38" y="280" width="192" height="176" rx="4" fill="#E6EEF1"/>
  <path d="M38 280 L120 280 L60 456 L38 456 Z" fill="#F4F8FA" opacity="0.7"/>
  <rect x="38" y="390" width="192" height="8" fill="#C9B7A2"/>
  <g>
    <ellipse cx="72" cy="382" rx="18" ry="9" fill="#D9A46A"/>
    <ellipse cx="112" cy="382" rx="18" ry="9" fill="#C98F55"/>
    <ellipse cx="152" cy="382" rx="18" ry="9" fill="#D9A46A"/>
    <ellipse cx="192" cy="382" rx="18" ry="9" fill="#E3B57D"/>
    <path d="M60 350 h30 l-3 24 h-24 Z" fill="#FFFFFF"/>
    <path d="M100 350 h30 l-3 24 h-24 Z" fill="#FFFFFF"/>
  </g>
  <rect x="20" y="466" width="228" height="12" rx="4" fill="#C9B095"/>

  <!-- Door with the sign turned to OPEN -->
  <rect x="268" y="252" width="146" height="286" rx="6" fill="#3F5F47"/>
  <rect x="284" y="270" width="114" height="170" rx="4" fill="#E6EEF1"/>
  <path d="M284 270 L344 270 L300 440 L284 440 Z" fill="#F4F8FA" opacity="0.7"/>
  <path d="M318 290 L341 316 M364 290 L341 316" stroke="#8C7F72" stroke-width="2"/>
  <rect x="300" y="314" width="82" height="34" rx="6" fill="#FFFFFF"/>
  <text x="341" y="337" text-anchor="middle" font-family="Bricolage" font-size="16" font-weight="700" letter-spacing="2" fill="#047857">OPEN</text>
  <rect x="384" y="430" width="8" height="40" rx="4" fill="#E9D9B8"/>

  <!-- Planter by the door -->
  <g transform="translate(206 470)">
    <path d="M28 10 C14 -2 2 14 -2 34 C12 26 22 24 28 36 Z" fill="#7FA584"/>
    <path d="M34 6 C50 -8 66 10 70 32 C56 24 46 24 36 36 Z" fill="#6A9471"/>
    <path d="M8 34 h56 l-6 34 h-44 Z" fill="#B98A6A"/>
  </g>

  <!-- Sidewalk -->
  <rect y="538" width="660" height="90" fill="#CFC3B3"/>
  <rect y="538" width="660" height="8" fill="#BDB0A0"/>
  <g stroke="#BFB2A2" stroke-width="3">
    ${Array.from({ length: 6 }, (_, k) => `<path d="M${40 + k * 130} 546 L${10 + k * 130} 628"/>`).join('')}
  </g>
</svg>`

const body = `
<div class="scene" style="left:57px;top:80px;width:660px;height:628px">${scene}</div>

<div class="phone" style="left:478px;top:62px;width:316px;height:664px">
  <div class="screen alarm">
    <div class="island"></div>
    <div class="a-app">${appIcon(24)}<span>Fork · Reminder · 7:00 AM</span></div>
    <div class="a-bell"><i></i><i></i><span><svg width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.9" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="13" r="8"/><path d="M12 9v4l2.5 2M5 3 2.5 5.5M19 3l2.5 2.5"/></svg></span></div>
    <div class="a-kicker">Opening check</div>
    <div class="a-title">Is the shop open?</div>
    <div class="a-msg">Main St opens at 7:00 AM.</div>
    <div class="a-btns">
      <div class="a-answers"><div class="a-btn primary">Yes</div><div class="a-btn primary">No</div></div>
      <div class="a-btn secondary">Not now</div>
    </div>
  </div>
</div>

<div class="card" style="left:846px;top:96px;width:496px;padding:32px 34px 28px">
  <div class="title">Opening check</div>
  <div class="sub">Tue, Nov 10 · 7:00 AM</div>
  <div class="rows">
    <div class="row">
      ${avatar('Maya Chen', 'grey', 48)}
      <div class="grow"><div class="name">Maya Chen</div><div class="meta">Main St · 7:01 AM</div></div>
      ${pill('Yes', 'ok', { sm: true })}
    </div>
    <div class="row">
      ${avatar('Jordan Lee', 'green', 48)}
      <div class="grow"><div class="name">Jordan Lee</div><div class="meta">Yes · Maya C. answered</div></div>
      ${pill('Yes', 'neutral', { sm: true })}
    </div>
    <div class="row">
      ${avatar('Luis Ortega', 'red', 48)}
      <div class="grow"><div class="name">Luis Ortega</div><div class="meta">Harbor St<span class="cond">Priya Nair told at 7:20 AM</span></div></div>
      ${pill('No answer', 'warn', { sm: true })}
    </div>
  </div>
  <div class="entry">
    <span class="e-ic">${icon('file', { size: 22 })}</span>
    <div class="grow">
      <div class="e-label">Opening log · Main St</div>
      <div class="e-q">Is the shop open? <b>Yes</b></div>
    </div>
    <span class="e-ok">${icon('check', { size: 18, stroke: 3 })}</span>
  </div>
</div>
`

const css = `
.phone .screen.alarm { background:#141413; color:#fff; }
.a-app { position:absolute; top:70px; width:100%; display:flex; align-items:center; justify-content:center; gap:8px; font-size:15px; font-weight:600; opacity:0.75; }
.a-bell { position:absolute; top:112px; left:50%; transform:translateX(-50%); width:160px; height:160px; display:flex; align-items:center; justify-content:center; }
.a-bell i { position:absolute; inset:0; border-radius:50%; border:1.5px solid rgba(255,255,255,0.14); }
.a-bell i + i { inset:24px; border-color:rgba(255,255,255,0.28); }
.a-bell span { width:78px; height:78px; border-radius:50%; background:#fff; color:#141413; display:flex; align-items:center; justify-content:center; }
.a-kicker { position:absolute; top:294px; width:100%; text-align:center; font-size:16px; font-weight:600; opacity:0.6; }
.a-title { position:absolute; top:318px; left:20px; right:20px; text-align:center; font-size:31px; font-weight:700; letter-spacing:-0.02em; line-height:1.08; }
.a-msg { position:absolute; top:362px; left:26px; right:26px; text-align:center; font-size:16.5px; line-height:1.38; opacity:0.75; }
.a-btns { position:absolute; left:20px; right:20px; bottom:38px; display:flex; flex-direction:column; gap:10px; }
.a-answers { display:flex; gap:10px; }
.a-answers .a-btn { flex:1; height:64px; font-size:21px; }
.a-btn { height:56px; border-radius:26px; display:flex; align-items:center; justify-content:center; font-size:18px; font-weight:620; }
.a-btn.primary { background:#fff; color:#141413; }
.a-btn.secondary { background:#2A2A29; color:#fff; }
.rows { margin-top:20px; }
.row { padding:15px 0; }
.row .pill.sm { height:32px; font-size:15.5px; padding:0 13px; }
.cond { display:block; color:var(--faint); font-size:16px; }
.entry .grow { flex:1; min-width:0; }
.entry { margin-top:10px; display:flex; align-items:center; gap:14px; background:#F4F2EF; border-radius:20px; padding:16px 18px; }
.e-ic { width:44px; height:44px; border-radius:13px; background:#fff; color:var(--ink-2); display:inline-flex; align-items:center; justify-content:center; flex-shrink:0; }
.e-label { font-size:16px; font-weight:500; color:var(--muted); }
.e-q { margin-top:2px; font-size:19px; font-weight:560; color:var(--ink); }
.e-q b { font-weight:700; margin-left:4px; }
.e-ok { width:34px; height:34px; border-radius:99px; background:var(--green); color:#fff; display:inline-flex; align-items:center; justify-content:center; flex-shrink:0; }
`

module.exports = () => page('A question, answered into the log', body, css)
