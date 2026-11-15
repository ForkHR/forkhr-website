// App blocker: the rule is on (the setup window's band, "App blocker is on"), so the card wears an On pill.
// The block screen is the web's BlockScreen (frontend/src/pages/appBlocker/appBlockerParts.jsx):
// Fork's icon, the title, the message, an "OK" button and the "I need my phone for 5 minutes" link;
// its words are the API's defaults (backend/utils/appBlockerRules.js DEFAULT_SCREEN: "{app} is
// blocked" / "{company} blocks it while you are at work. It opens again on your break, or at
// {end}."). The card is the rule as the setup window says it: "During a scheduled shift" with the
// window's line, the kinds "Social media", "Games", "Video & streaming", breaks resuming "When the
// break's time is up", "Unlock for 5 minutes", and NEVER_BLOCKED.
const { icon, pill, page, appIcon } = require('../kit.cjs')

// Scene in its own 660 x 628 box (page x 57, y 80): behind the counter at Main St.
const cup = (x, y, h = 30) => `<path d="M${x} ${y} h30 l-3 ${h} h-24 Z" fill="#FFFFFF"/>`
const jar = (x, y, fill) => `
  <g transform="translate(${x} ${y})">
    <rect x="0" y="8" width="44" height="54" rx="9" fill="#F4F0EA" opacity="0.9"/>
    <rect x="4" y="26" width="36" height="32" rx="6" fill="${fill}"/>
    <rect x="6" y="0" width="32" height="10" rx="3" fill="#8F8981"/>
  </g>`

const scene = `
<svg viewBox="0 0 660 628" xmlns="http://www.w3.org/2000/svg">
  <rect width="660" height="628" fill="#E7E0D7"/>
  <!-- Back wall tiles -->
  <g fill="#EFEAE3">
    ${Array.from({ length: 5 }, (_, r) => Array.from({ length: 10 }, (_, c) => `<rect x="${c * 70 + (r % 2 ? -35 : 0) + 3}" y="${186 + r * 34}" width="64" height="28" rx="3"/>`).join('')).join('')}
  </g>

  <!-- Shelf with jars and cups -->
  <rect x="34" y="138" width="380" height="12" rx="4" fill="#A9927A"/>
  <path d="M60 150 l12 22 M390 150 l-12 22" stroke="#A9927A" stroke-width="6" stroke-linecap="round"/>
  ${jar(56, 76, '#6F4E37')}
  ${jar(112, 76, '#A47551')}
  ${jar(168, 76, '#D9C3A0')}
  ${cup(236, 108)}${cup(270, 108)}${cup(304, 108)}
  <rect x="346" y="94" width="44" height="44" rx="6" fill="#7FA584"/>
  <path d="M352 94 c4 -22 26 -26 32 -12 c-10 -2 -18 4 -20 12 Z" fill="#6A9471"/>

  <!-- Espresso machine -->
  <rect x="60" y="320" width="226" height="13" rx="6" fill="#A9A49E"/>
  ${cup(92, 296, 24)}${cup(130, 296, 24)}
  <rect x="68" y="333" width="210" height="140" rx="22" fill="#CFCAC4"/>
  <rect x="84" y="348" width="178" height="44" rx="11" fill="#E4E1DC"/>
  <circle cx="106" cy="370" r="6" fill="#2D2926"/><circle cx="126" cy="370" r="6" fill="#2D2926"/>
  <circle cx="221" cy="370" r="6" fill="#2D2926"/><circle cx="241" cy="370" r="6" fill="#2D2926"/>
  <circle cx="173" cy="370" r="16" fill="#FFFFFF" stroke="#A9A49E" stroke-width="3"/>
  <path d="M173 370 L182 362" stroke="#C2410C" stroke-width="3" stroke-linecap="round"/>
  <rect x="100" y="404" width="48" height="16" rx="6" fill="#7A736C"/>
  <rect x="94" y="418" width="60" height="12" rx="6" fill="#2D2926"/>
  <rect x="198" y="404" width="48" height="16" rx="6" fill="#7A736C"/>
  <rect x="192" y="418" width="60" height="12" rx="6" fill="#2D2926"/>
  <rect x="80" y="462" width="186" height="12" rx="6" fill="#A9A49E"/>

  <!-- Grinder -->
  <path d="M318 356 h64 l-10 -44 h-44 Z" fill="#6F4E37" opacity="0.85"/>
  <rect x="312" y="356" width="76" height="96" rx="14" fill="#3A3531"/>
  <rect x="330" y="452" width="40" height="20" rx="5" fill="#3A3531"/>

  <!-- Counter -->
  <rect y="472" width="660" height="22" fill="#DDD4C9"/>
  <rect y="472" width="660" height="5" fill="#E8E1D7"/>
  <rect y="494" width="660" height="134" fill="#D3C7B8"/>
  <g stroke="#C9BCAB" stroke-width="3">
    ${Array.from({ length: 14 }, (_, k) => `<path d="M${24 + k * 48} 506 V628"/>`).join('')}
  </g>
</svg>`

const body = `
<div class="scene" style="left:57px;top:80px;width:660px;height:628px">${scene}</div>

<div class="phone" style="left:478px;top:62px;width:316px;height:664px">
  <div class="screen shield">
    <div class="island"></div>
    <div class="s-wrap">
      ${appIcon(72)}
      <div class="s-title">Instagram is blocked</div>
      <div class="s-text">Juniper Coffee blocks it while you are at work. It opens again on your break, or at 10:00 PM.</div>
      <div class="s-btn">OK</div>
      <div class="s-link">I need my phone for 5 minutes</div>
    </div>
  </div>
</div>

<div class="card" style="left:846px;top:100px;width:496px;padding:32px 34px 28px">
  <div style="display:flex;align-items:flex-start;justify-content:space-between;gap:12px">
    <div>
      <div class="title">App blocker</div>
      <div class="sub">Juniper Coffee · all locations</div>
    </div>
    ${pill('On', 'ok', { icon: 'check', sm: true })}
  </div>
  <div class="rows">
    <div class="row">
      <span class="ic">${icon('calendar', { size: 23 })}</span>
      <div class="grow"><div class="name">During a scheduled shift</div><div class="meta">From the shift's start to its end</div></div>
    </div>
    <div class="row kinds">
      <span class="ic">${icon('phone', { size: 23 })}</span>
      <div class="grow">
        <div class="name">What it blocks</div>
        <div class="chips">${pill('Social media', 'neutral', { sm: true })}${pill('Games', 'neutral', { sm: true })}${pill('Video & streaming', 'neutral', { sm: true })}</div>
      </div>
    </div>
    <div class="row">
      <span class="ic">${icon('coffee', { size: 23 })}</span>
      <div class="grow"><div class="name">Free on breaks</div><div class="meta">Blocks again when the break's time is up</div></div>
    </div>
    <div class="row">
      <span class="ic">${icon('clock', { size: 23 })}</span>
      <div class="grow"><div class="name">Unlock for 5 minutes</div><div class="meta">3 times a shift</div></div>
    </div>
  </div>
  <div class="foot">${icon('shield', { size: 20 })} Never blocked: Phone, Messages, Maps, the camera and Fork</div>
</div>
`

const css = `
.phone .screen.shield { background:#F4F3F1; }
.s-wrap { position:absolute; left:26px; right:26px; top:150px; display:flex; flex-direction:column; align-items:center; text-align:center; font-family:-apple-system, 'SF Pro Text', 'Segoe UI', Helvetica, Arial, sans-serif; color:#111; }
.s-wrap > span:first-child { box-shadow:0 6px 18px rgba(0,0,0,0.14) !important; border-radius:17px !important; }
.s-title { margin-top:24px; font-size:25px; font-weight:700; letter-spacing:-0.01em; }
.s-text { margin-top:10px; font-size:16.5px; line-height:1.4; color:#5B5B60; }
.s-btn { margin-top:34px; width:100%; height:54px; border-radius:15px; background:#111; color:#fff; display:flex; align-items:center; justify-content:center; font-size:18px; font-weight:600; }
.s-link { margin-top:18px; font-size:16px; font-weight:500; color:#111; }
.rows { margin-top:20px; }
.row { gap:16px; padding:14px 0; }
.row .name { font-size:21px; }
.row .meta { font-size:17px; }
.ic { width:46px; height:46px; border-radius:14px; background:var(--warm-100); color:var(--ink-2); display:inline-flex; align-items:center; justify-content:center; flex-shrink:0; }
.row.kinds { align-items:flex-start; }
.chips { margin-top:8px; display:flex; flex-wrap:wrap; gap:7px; }
.chips .pill.sm { height:30px; font-size:15px; }
.pill.dark.sm { height:30px; font-size:15px; margin-top:4px; }
.foot { margin-top:6px; display:flex; align-items:flex-start; gap:10px; font-size:17px; line-height:1.35; font-weight:480; color:var(--muted); }
.foot svg { flex-shrink:0; margin-top:1px; color:#8B867F; }
`

module.exports = () => page('Phones away on the floor', body, css)
