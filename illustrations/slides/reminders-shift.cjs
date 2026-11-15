// Reminders: Fork's starters around Jordan's Tuesday shift at Main St (3:00 – 10:00 PM).
// Labels are the API's (backend/utils/reminderRules.js): the starters' names and messages
// ("Shift tomorrow" / "You work tomorrow, {start} – {end} at {location}.", "Shift in 1 hour" /
// "Your shift starts at {start} at {location}.", "Time to clock out", "Break is almost over"), and
// when each goes out in the list's own words (whenWords + CONDITION_WORDS): DEFAULT_EVENING is
// 19:00, so the evening reminder lands Monday at 7:00 PM. Break is almost over ships switched off.
// The phone's lock screen is drawn as team-schedule draws it.
const { icon, page, appIcon } = require('../kit.cjs')

// Windows on the buildings across the street catching the sky: [x, y] of each pane.
const lit = [
  [62, 228], [86, 252], [62, 276], [128, 206], [152, 206], [128, 254], [152, 278],
  [214, 240], [238, 264], [214, 288], [290, 196], [314, 220], [290, 268], [338, 244], [314, 292],
]

// Scene in its own 660 x 628 box (page x 57, y 80); the phone stands over its right edge.
const scene = `
<svg viewBox="0 0 660 628" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <clipPath id="pane"><rect x="44" y="52" width="352" height="330" rx="6"/></clipPath>
  </defs>
  <rect width="660" height="628" fill="#E9E1D7"/>
  <!-- Afternoon sun through the window, on the wall and the sideboard -->
  <path d="M250 414 L430 414 L620 628 L380 628 Z" fill="#F2EBE2"/>

  <!-- Window, early afternoon -->
  <rect x="30" y="38" width="380" height="358" rx="14" fill="#F8F4EE"/>
  <g clip-path="url(#pane)">
    <rect x="44" y="52" width="352" height="330" fill="#CFE1EC"/>
    <rect x="44" y="196" width="352" height="186" fill="#DCE8EE"/>
    <circle cx="112" cy="110" r="28" fill="#FFF3CF"/>
    <ellipse cx="300" cy="104" rx="46" ry="13" fill="#F3F7F9"/>
    <ellipse cx="328" cy="94" rx="28" ry="12" fill="#F3F7F9"/>
    <!-- Buildings across the street -->
    <rect x="44" y="214" width="66" height="168" fill="#D9C7B2"/>
    <rect x="114" y="190" width="58" height="192" fill="#C6AF97"/>
    <rect x="176" y="232" width="86" height="150" fill="#E2D3C0"/>
    <rect x="200" y="214" width="34" height="20" fill="#E2D3C0"/>
    <rect x="270" y="180" width="86" height="202" fill="#C9B39B"/>
    <rect x="360" y="226" width="36" height="156" fill="#D9C7B2"/>
    <g fill="#A8C1CE">${lit.map(([x, y]) => `<rect x="${x}" y="${y}" width="12" height="14" rx="2"/>`).join('')}</g>
    <g fill="#F4EEE6">${[[86, 228], [62, 252], [152, 230], [128, 278], [238, 240], [214, 264], [314, 196], [338, 268]].map(([x, y]) => `<rect x="${x}" y="${y}" width="12" height="14" rx="2"/>`).join('')}</g>
  </g>
  <!-- Mullions -->
  <rect x="216" y="52" width="10" height="330" fill="#F8F4EE"/>
  <rect x="44" y="212" width="352" height="10" fill="#F8F4EE"/>
  <!-- Sill -->
  <rect x="18" y="392" width="404" height="16" rx="5" fill="#F1EBE3"/>
  <rect x="24" y="406" width="392" height="8" rx="4" fill="#D9CFC3"/>

  <!-- Plant on the sill -->
  <g transform="translate(262 286)">
    <path d="M38 14 C20 0 8 20 2 44 C18 34 30 30 38 46 Z" fill="#7FA584"/>
    <path d="M44 10 C62 -6 80 14 84 40 C68 30 56 30 46 46 Z" fill="#6A9471"/>
    <path d="M40 0 C34 -26 52 -40 60 -44 C60 -20 54 -6 44 12 Z" fill="#8DB391"/>
    <path d="M24 46 h44 l-6 60 h-32 Z" fill="#D9A27E"/>
    <rect x="20" y="40" width="52" height="12" rx="4" fill="#C98C66"/>
  </g>

  <!-- Lamp, off in the daytime -->
  <path d="M70 410 C70 386 86 372 108 372 C130 372 146 386 146 410 Z" fill="#F1E2C8"/>
  <ellipse cx="108" cy="411" rx="38" ry="5" fill="#DDC9A8"/>
  <rect x="105" y="411" width="6" height="96" fill="#5B534B"/>
  <ellipse cx="108" cy="508" rx="30" ry="7" fill="#5B534B"/>

  <!-- Sideboard -->
  <rect y="508" width="660" height="20" fill="#C8B8A3"/>
  <rect y="508" width="660" height="5" fill="#D6C8B5"/>
  <rect y="528" width="660" height="100" fill="#B9A790"/>
  <g stroke="#AA977F" stroke-width="3">
    <path d="M220 540 V628"/><path d="M440 540 V628"/>
  </g>
  <circle cx="200" cy="580" r="5" fill="#8F7D67"/><circle cx="240" cy="580" r="5" fill="#8F7D67"/>

  <!-- Keys and a mug on the sideboard -->
  <g transform="translate(214 470)">
    <path d="M6 6 h44 v30 a10 10 0 0 1 -10 10 h-24 a10 10 0 0 1 -10 -10 Z" fill="#FFFFFF"/>
    <path d="M50 14 h6 a8 8 0 0 1 0 16 h-6" fill="none" stroke="#FFFFFF" stroke-width="5"/>
    <rect x="12" y="16" width="32" height="10" rx="3" fill="#E9DED0"/>
  </g>
  <g transform="translate(300 492)" fill="none" stroke="#8F8981" stroke-width="4" stroke-linecap="round">
    <circle cx="10" cy="8" r="7"/>
    <path d="M17 8 h22 M32 8 v6 M38 8 v5"/>
  </g>
</svg>`

const notif = (title, text, when) => `
  <div class="notif">
    ${appIcon(40)}
    <div style="flex:1;min-width:0">
      <div class="n-top"><span>Fork</span><span>${when}</span></div>
      <div class="n-title">${title}</div>
      <div class="n-body">${text}</div>
    </div>
  </div>`

const ROWS = [
  { ic: 'calendar', name: 'Shift tomorrow', line: '7:00 PM the evening before', on: true },
  { ic: 'clock', name: 'Shift in 1 hour', line: '1 hour before a shift starts', on: true },
  { ic: 'logout', name: 'Time to clock out', line: '10 min after a shift ends', cond: 'if still clocked in', on: true },
  { ic: 'coffee', name: 'Break is almost over', line: '25 min into a break', cond: 'if still on break', on: false },
]

const body = `
<div class="scene" style="left:57px;top:80px;width:660px;height:628px">${scene}</div>

<div class="phone" style="left:478px;top:62px;width:316px;height:664px">
  <div class="screen lock">
    <div class="island"></div>
    <div class="l-date">Tuesday, November 10</div>
    <div class="l-time">2:00</div>
    <div class="stack">
      ${notif('Shift in 1 hour', 'Your shift starts at 3:00 PM at Main St.', 'now')}
      ${notif('Shift tomorrow', 'You work tomorrow, 3:00 PM – 10:00 PM at Main St.', 'Mon 7:00 PM')}
    </div>
    <div class="l-btn" style="left:34px"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6c0 2-2 2-2 4v10a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V10c0-2-2-2-2-4V2h12z"/><path d="M6 6h12M12 12v1"/></svg></div>
    <div class="l-btn" style="right:34px"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/></svg></div>
  </div>
</div>

<div class="card" style="left:846px;top:104px;width:496px;padding:32px 34px 22px">
  <div class="title">Reminders</div>
  <div class="sub">Whoever has the shift · Main St</div>
  <div class="rows">
    ${ROWS.map(
      (r) => `
    <div class="row${r.on ? '' : ' off'}">
      <span class="ic">${icon(r.ic, { size: 23 })}</span>
      <div class="grow">
        <div class="name">${r.name}</div>
        <div class="meta">${r.line}${r.cond ? `<span class="cond">${r.cond}</span>` : ''}</div>
      </div>
      <span class="sw${r.on ? ' on' : ''}"><i></i></span>
    </div>`,
    ).join('')}
  </div>
</div>
`

const css = `
.phone .screen.lock { background:linear-gradient(170deg, #3B3631 0%, #57504A 55%, #7A6F64 100%); color:#fff; }
.l-date { position:absolute; top:92px; width:100%; text-align:center; font-size:19px; font-weight:560; opacity:0.85; }
.l-time { position:absolute; top:112px; width:100%; text-align:center; font-size:96px; font-weight:640; letter-spacing:-0.02em; line-height:1.1; }
.l-btn { position:absolute; bottom:44px; width:52px; height:52px; border-radius:99px; background:rgba(255,255,255,0.16); display:flex; align-items:center; justify-content:center; }
.stack { position:absolute; left:12px; right:12px; top:268px; display:flex; flex-direction:column; gap:10px; }
.notif { display:flex; gap:12px; align-items:flex-start; padding:14px 15px 16px; border-radius:24px; background:rgba(255,255,255,0.9); color:var(--ink); box-shadow:0 10px 30px -12px rgba(0,0,0,0.4); }
.notif + .notif { background:rgba(255,255,255,0.78); }
.n-top { display:flex; justify-content:space-between; gap:8px; font-size:14px; font-weight:600; color:var(--muted); white-space:nowrap; }
.n-title { margin-top:2px; font-size:18px; font-weight:650; }
.n-body { margin-top:2px; font-size:16px; line-height:1.3; color:#433F3B; }
.rows { margin-top:22px; }
.row { gap:16px; padding:16px 0; }
.row .name { font-size:21px; }
.row .meta { font-size:17px; line-height:1.3; }
.cond { display:block; color:var(--faint); font-size:16px; }
.row.off .name, .row.off .meta { color:var(--faint); }
.row.off .ic { color:var(--faint); }
.ic { width:46px; height:46px; border-radius:14px; background:var(--warm-100); color:var(--ink-2); display:inline-flex; align-items:center; justify-content:center; flex-shrink:0; }
.sw { width:54px; height:32px; border-radius:99px; background:var(--warm-200); position:relative; flex-shrink:0; }
.sw i { position:absolute; top:4px; left:4px; width:24px; height:24px; border-radius:99px; background:#fff; box-shadow:0 1px 3px rgba(0,0,0,0.18); }
.sw.on { background:var(--ink); }
.sw.on i { left:26px; }
`

module.exports = () => page('The evening before, and an hour before', body, css)
