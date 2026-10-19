// Hiring: Thursday 3:00 PM, a café table, the interview guide open on a tablet.
const { icon, avatar, page } = require('../kit.cjs')

// The Barista guide (frontend/src/assets/interviewGuideTemplates.js): 33 questions, 14 core,
// round 3 "The rush" (~5 min), its core question and Listen-for note, and the gut check.
const Q = {
  core: 14,
  full: 33,
  asked: '06',
  round: 'Round 3 · ~5 min',
  roundTitle: 'The rush',
  question: "Line's out the door, eight mobile orders queued, and your bar partner just went on break. First move?",
  listen: 'Triage and talk: call it out, pull the partner back, sequence tickets. “I\'d just work faster” is not a plan.',
  said: 'Call it out, get my partner back, then work the tickets in order.',
  gut: 'Would you put them on bar on a Saturday at 9am?',
}

const chairBack = (x, flip) => `
  <g transform="translate(${x} 0) ${flip ? 'scale(-1 1)' : ''}">
    <path d="M0 470 V368 C0 326 30 304 80 304 C130 304 160 326 160 368 V470" fill="none" stroke="#3A3531" stroke-width="12" stroke-linecap="round"/>
    <path d="M24 470 V380 C24 352 46 336 80 336 C114 336 136 352 136 380 V470" fill="none" stroke="#3A3531" stroke-width="6" stroke-linecap="round" opacity="0.9"/>
    <path d="M10 420 H150" stroke="#3A3531" stroke-width="7" stroke-linecap="round"/>
  </g>`

const mug = (x, y) => `
  <g transform="translate(${x} ${y})">
    <ellipse cx="44" cy="58" rx="58" ry="12" fill="#FFFFFF"/>
    <ellipse cx="44" cy="56" rx="46" ry="8" fill="#EDE8E1"/>
    <path d="M10 6 H78 V40 C78 52 66 58 44 58 C22 58 10 52 10 40 Z" fill="#FFFFFF"/>
    <path d="M78 14 C96 14 96 38 78 38" fill="none" stroke="#FFFFFF" stroke-width="8"/>
    <ellipse cx="44" cy="7" rx="34" ry="7" fill="#C9A47A"/>
    <path d="M36 6 C40 2 48 2 52 6 C48 9 40 9 36 6 Z" fill="#F4E6D3"/>
  </g>`

const scene = `
<svg viewBox="10 0 700 628" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="lampglow" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#FFE7A0" stop-opacity="0.7"/>
      <stop offset="1" stop-color="#FFE7A0" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <rect width="720" height="628" fill="#EAE4DD"/>
  <rect y="330" width="720" height="230" fill="#E0D8CD"/>
  <rect y="322" width="720" height="10" fill="#D3C7B8"/>
  <g stroke="#D6CDC1" stroke-width="3">${Array.from({ length: 12 }, (_, k) => `<path d="M${30 + k * 60} 340 V560"/>`).join('')}</g>

  <!-- Framed print -->
  <rect x="78" y="70" width="170" height="200" rx="8" fill="#2D2926"/>
  <rect x="90" y="82" width="146" height="176" rx="4" fill="#F4EEE5"/>
  <circle cx="163" cy="146" r="30" fill="#F2C76E"/>
  <path d="M90 258 L140 190 L178 232 L206 204 L236 238 V258 Z" fill="#2563EB" opacity="0.85"/>

  <!-- Pendant lamp -->
  <circle cx="470" cy="110" r="130" fill="url(#lampglow)"/>
  <rect x="469" y="0" width="2.5" height="64" fill="#2D2926"/>
  <path d="M438 96 C438 74 452 62 470 62 C488 62 502 74 502 96 Z" fill="#2D2926"/>
  <ellipse cx="470" cy="98" rx="10" ry="5" fill="#FFE7A0"/>

  <!-- Plant on a ledge -->
  <rect x="600" y="230" width="70" height="56" rx="8" fill="#C96F4A"/>
  <ellipse cx="620" cy="214" rx="22" ry="40" fill="#5E9E73" transform="rotate(-22 620 214)"/>
  <ellipse cx="652" cy="208" rx="20" ry="44" fill="#6FAE84" transform="rotate(18 652 208)"/>
  <ellipse cx="636" cy="200" rx="16" ry="46" fill="#7FB98F"/>

  <rect y="560" width="720" height="68" fill="#D8CFC4"/>

  ${chairBack(40, false)}
  ${chairBack(680, true)}

  <!-- Table -->
  <rect x="348" y="470" width="24" height="96" fill="#2D2926"/>
  <ellipse cx="360" cy="572" rx="92" ry="14" fill="#2D2926"/>
  <ellipse cx="360" cy="474" rx="262" ry="50" fill="#E2DBD1"/>
  <ellipse cx="360" cy="466" rx="262" ry="50" fill="#F7F4EF"/>

  <!-- Tablet on its stand -->
  <path d="M352 404 L344 468 H376 L368 404 Z" fill="#3A3531"/>
  <rect x="244" y="250" width="232" height="168" rx="18" fill="#2D2926" transform="rotate(-3 360 334)"/>
  <rect x="256" y="262" width="208" height="144" rx="10" fill="#FFFFFF" transform="rotate(-3 360 334)"/>
  <g transform="rotate(-3 360 334)" font-family="Bricolage">
    <rect x="270" y="276" width="80" height="18" rx="9" fill="#1B1A19"/>
    <text x="310" y="289" text-anchor="middle" font-size="10.5" font-weight="700" fill="#fff">Core ${Q.core}</text>
    <text x="362" y="289" font-size="10.5" font-weight="600" fill="#A8A39D">Full ${Q.full}</text>
    <rect x="270" y="304" width="180" height="8" rx="4" fill="#E7E4E0"/>
    <rect x="270" y="318" width="150" height="8" rx="4" fill="#E7E4E0"/>
    <rect x="270" y="340" width="86" height="24" rx="12" fill="#D1FAE5"/>
    <text x="313" y="356" text-anchor="middle" font-size="11" font-weight="700" fill="#047857">Strong</text>
    <rect x="364" y="340" width="86" height="24" rx="12" fill="#F2F0ED"/>
    <text x="407" y="356" text-anchor="middle" font-size="11" font-weight="600" fill="#77726C">Concern</text>
    <rect x="270" y="378" width="120" height="8" rx="4" fill="#E7E4E0"/>
  </g>

  ${mug(150, 424)}
  ${mug(484, 430)}
</svg>`

const body = `
<div class="scene" style="left:57px;top:80px;width:700px;height:628px">${scene}</div>

<div class="card" style="left:800px;top:62px;width:542px;padding:30px 34px 26px">
  <div style="display:flex;align-items:center;gap:16px">
    ${avatar('Jordan Lee', 'green', 50)}
    <div style="flex:1">
      <div class="title" style="font-size:27px">Interview notes</div>
      <div class="sub" style="margin-top:3px;font-size:17px">Jordan Lee · Barista · Thu 3:00 PM</div>
    </div>
    <span class="saved">Saved</span>
  </div>
  <div class="tabs"><span class="on">Core ${Q.core}</span><span>Full ${Q.full}</span><em>${Q.asked}/${Q.core} asked</em></div>
  <div class="round">${Q.round}</div>
  <div class="q">
    <div class="q-top"><span class="tick">${icon('check', { size: 14, stroke: 3.4 })}</span><div class="q-text">${Q.question} <span class="core">Core</span></div></div>
    <div class="q-listen"><b>Listen for:</b> ${Q.listen}</div>
    <div class="q-said">${Q.said}</div>
    <div class="q-btns"><span class="strong">${icon('check', { size: 16, stroke: 3 })} Strong</span><span>Concern</span></div>
  </div>
  <div class="gut">
    <div class="g-label">Gut check</div>
    <div class="g-q">${Q.gut}</div>
    <div class="g-opts"><span class="on">Yes</span><span>With support first</span><span>No</span></div>
  </div>
</div>
`

const css = `
.saved { font-size:15px; font-weight:560; color:var(--faint); }
.round { margin-top:16px; font-size:13px; font-weight:700; letter-spacing:0.1em; text-transform:uppercase; color:var(--faint); }
.q-top { display:flex; gap:12px; align-items:flex-start; }
.tick { width:24px; height:24px; border-radius:7px; background:var(--ink); color:#fff; display:inline-flex; align-items:center; justify-content:center; flex-shrink:0; margin-top:2px; }
.core { display:inline-flex; vertical-align:2px; margin-left:4px; height:22px; padding:0 8px; border-radius:6px; background:var(--blue-100); color:var(--blue-700); font-size:12px; font-weight:700; align-items:center; }
.q-said { margin-top:10px; border:1.5px solid var(--warm-200); border-radius:12px; padding:10px 12px; font-size:15.5px; line-height:1.35; color:#433F3B; }
.tabs { margin-top:20px; display:flex; align-items:center; gap:8px; }
.tabs span { height:36px; padding:0 16px; border-radius:99px; display:inline-flex; align-items:center; font-size:16px; font-weight:620; background:var(--warm-100); color:var(--muted); }
.tabs span.on { background:var(--ink); color:#fff; }
.tabs em { margin-left:auto; font-style:normal; font-size:16px; font-weight:560; color:var(--muted); }
.q { margin-top:8px; border:1.5px solid var(--warm-200); border-radius:20px; padding:16px 18px; }
.q-text { font-size:18px; font-weight:620; line-height:1.32; }
.q-listen { margin-top:8px; padding-left:36px; font-size:15px; line-height:1.4; color:var(--muted); }
.q-said, .q-btns { margin-left:36px; }
.q-listen b { color:var(--ink-2); font-weight:620; }
.q-btns { margin-top:12px; display:flex; gap:10px; }
.q-btns span { height:38px; padding:0 16px; border-radius:99px; display:inline-flex; align-items:center; gap:6px; font-size:16px; font-weight:620; background:var(--warm-100); color:var(--muted); }
.q-btns span.strong { background:var(--green-100); color:var(--green-700); }
.gut { margin-top:12px; background:#F4F2EF; border-radius:20px; padding:14px 18px 16px; }
.g-label { font-size:14px; font-weight:650; letter-spacing:0.08em; text-transform:uppercase; color:var(--faint); }
.g-q { margin-top:4px; font-size:17px; font-weight:600; line-height:1.3; }
.g-opts { margin-top:12px; display:flex; gap:8px; }
.g-opts span { height:34px; padding:0 14px; border-radius:99px; display:inline-flex; align-items:center; font-size:15px; font-weight:600; background:#fff; color:var(--muted); border:1.5px solid var(--warm-200); }
.g-opts span.on { background:var(--ink); color:#fff; border-color:var(--ink); }
`

module.exports = () => page('An interview with the guide open', body, css)
