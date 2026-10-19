// Supply: Thursday 6:30 AM, Bluebird's delivery checked in at the Main St back door.
// Lines and issues match ReceivingPreview: 18/18 milk, butter 1 short (credit), cream 1 extra
// (keep and pay), eggs 1 damaged with a photo (credit).
const { icon, page } = require('../kit.cjs')

const crate = (x, y) => `
  <g transform="translate(${x} ${y})">
    ${[0, 1, 2].map((k) => `<g transform="translate(${10 + k * 44} -26)"><path d="M4 14 C4 8 10 6 14 5 V0 h12 v5 C30 6 36 8 36 14 V40 H4 Z" fill="#FBFCFD" stroke="#D5DCE3" stroke-width="2"/><rect x="13" y="-5" width="14" height="7" rx="2" fill="#2563EB"/></g>`).join('')}
    <rect width="150" height="64" rx="6" fill="#3B82F6"/>
    <g fill="#2F6FDB">${[0, 1, 2, 3, 4].map((k) => `<rect x="${12 + k * 27}" y="14" width="18" height="12" rx="3"/><rect x="${12 + k * 27}" y="36" width="18" height="12" rx="3"/>`).join('')}</g>
  </g>`

const scene = `
<svg viewBox="0 0 720 628" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="day" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0" stop-color="#FDF3D8"/>
      <stop offset="1" stop-color="#F6E3B4"/>
    </linearGradient>
  </defs>
  <rect width="720" height="628" fill="#E9E3DB"/>
  <rect y="400" width="720" height="160" fill="#E0D8CD"/>
  <rect y="394" width="720" height="8" fill="#D3C7B8"/>

  <!-- The open back door, morning outside -->
  <rect x="58" y="96" width="232" height="464" rx="6" fill="#2D2926"/>
  <rect x="72" y="110" width="204" height="450" fill="url(#day)"/>
  <rect x="72" y="400" width="204" height="160" fill="#E8D7AE"/>
  <path d="M72 470 L276 440 V560 H72 Z" fill="#DDC99B" opacity="0.6"/>
  <path d="M276 110 L352 136 V560 L276 560 Z" fill="#3A3531"/>
  <rect x="330" y="330" width="10" height="44" rx="5" fill="#D9D2C9"/>
  <rect x="104" y="52" width="140" height="32" rx="6" fill="#2D2926"/>
  <text x="174" y="74" text-anchor="middle" font-family="Bricolage" font-size="15" font-weight="700" letter-spacing="2.5" fill="#F1F0EC">DELIVERIES</text>

  <!-- Wall clock: 6:30 -->
  <circle cx="560" cy="170" r="54" fill="#FFFFFF" stroke="#2D2926" stroke-width="8"/>
  <g stroke="#BDB7AF" stroke-width="3" stroke-linecap="round">${[0,1,2,3,4,5,6,7,8,9,10,11].map((k) => { const a = (k * Math.PI) / 6; return `<path d="M${560 + Math.sin(a) * 38} ${170 - Math.cos(a) * 38} L${560 + Math.sin(a) * 44} ${170 - Math.cos(a) * 44}"/>` }).join('')}</g>
  <path d="M560 170 L553 195" stroke="#2D2926" stroke-width="6" stroke-linecap="round"/>
  <path d="M560 170 L560 208" stroke="#2D2926" stroke-width="4" stroke-linecap="round"/>
  <circle cx="560" cy="170" r="5" fill="#2563EB"/>

  <!-- Floor -->
  <rect y="560" width="720" height="68" fill="#D5CEC5"/>
  <path d="M0 560 H720" stroke="#CBC3B8" stroke-width="4"/>
  <path d="M72 560 L40 628 M276 560 L300 628" stroke="#CBC3B8" stroke-width="3"/>

  <!-- Hand truck with two milk crates -->
  <g>
    <path d="M410 250 V548" stroke="#2D2926" stroke-width="9" stroke-linecap="round"/>
    <path d="M400 250 C400 236 420 236 420 250" fill="none" stroke="#2D2926" stroke-width="8" stroke-linecap="round"/>
    <path d="M410 548 H592" stroke="#2D2926" stroke-width="10" stroke-linecap="round"/>
    ${crate(424, 470)}
    ${crate(424, 376)}
    <circle cx="430" cy="556" r="20" fill="#2D2926"/>
    <circle cx="430" cy="556" r="8" fill="#8F8981"/>
  </g>

  <!-- Eggs: the top case cracked -->
  <g transform="translate(598 452)">
    <rect width="108" height="52" rx="4" fill="#D8B88E"/>
    <rect y="0" width="108" height="12" rx="4" fill="#C9A47A"/>
    <rect x="16" y="22" width="76" height="20" rx="3" fill="#FFF8E6"/>
    <text x="54" y="36" text-anchor="middle" font-family="Bricolage" font-size="12" font-weight="700" letter-spacing="1" fill="#B45309">EGGS</text>
  </g>
  <g transform="translate(598 504)">
    <rect width="108" height="52" rx="4" fill="#D8B88E"/>
    <rect y="0" width="108" height="12" rx="4" fill="#C9A47A"/>
  </g>
  <g transform="translate(598 392)">
    <rect width="108" height="60" rx="4" fill="#D8B88E"/>
    <rect y="0" width="108" height="12" rx="4" fill="#C9A47A"/>
    <path d="M30 0 L40 14 L34 22 L46 34 L40 48 L50 60" fill="none" stroke="#8B6B47" stroke-width="3" stroke-linejoin="round"/>
    <path d="M45 60 C47 66 43 70 45 76 C49 70 51 66 50 60 Z" fill="#F2C76E"/>
    <rect x="56" y="26" width="44" height="18" rx="3" fill="#FFF8E6"/>
    <text x="78" y="39" text-anchor="middle" font-family="Bricolage" font-size="11" font-weight="700" letter-spacing="1" fill="#B45309">EGGS</text>
  </g>
</svg>`

// The phone's "Receive order" screen (account/supply/orders/receive/[id].jsx; its "Delivery proof"
// photo is the camera in the scene): a "Receiving: x / y" line per item (green when full, orange when not) with a "Flag"
// button, issues from the "Flag issue" sheet (type + what you ask for), then "n items flagged
// with issues", "Pending credit", the "Email {vendor} about the discrepancies" switch and
// "Submit receipt". Credits for a vendor not on Fork are typed in by the café.
const lines = [
  { name: 'Whole milk, gal', got: 18, of: 18 },
  { name: 'Butter, 36 lb case', got: 2, of: 3, issue: 'Short quantity · Credit' },
  { name: 'Heavy cream, qt', got: 13, of: 12, issue: 'Received additional quantity · Keep it — bill me' },
  { name: 'Eggs, 15 doz case', got: 2, of: 2, issue: 'Damaged · Credit' },
]

const body = `
<div class="scene" style="left:57px;top:80px;width:720px;height:628px">${scene}</div>
<div class="fab" style="left:626px;top:438px">${icon('camera', { size: 28, stroke: 2.2 })}</div>

<div class="card" style="left:812px;top:62px;width:530px;padding:28px 32px 24px">
  <div class="title" style="font-size:28px">Receive order</div>
  <div class="sub" style="margin-top:4px;font-size:17px">Bluebird Dairy · delivery Thu, Oct 1</div>
  <div class="rows" style="margin-top:16px">
    ${lines
      .map((l) => {
        // Green once the count reaches what was ordered, orange while it is short.
        const full = l.got >= l.of
        return `<div class="row" style="display:block;padding:11px 0">
          <div style="display:flex;align-items:center;gap:10px">
            <span class="name" style="flex:1;font-size:18.5px">${l.name}</span>
            ${l.issue ? '' : '<span class="flag">Flag</span>'}
          </div>
          <div class="recv ${full ? 'ok' : 'short'}">Receiving: ${l.got} / ${l.of}</div>
          ${l.issue ? `<div class="issue">${icon('shield', { size: 14, stroke: 2.4 })} ${l.issue}</div>` : ''}
        </div>`
      })
      .join('')}
  </div>
  <div class="sum"><span>3 items flagged with issues</span><span>Pending credit <b>-$136.50</b></span></div>
  <div class="mail"><div><div class="m-name">Email Bluebird Dairy about the discrepancies</div><div class="m-sub">To orders@bluebirddairy.com, as a reply to the order</div></div><span class="sw on"><i></i></span></div>
  <div class="submit">Submit receipt</div>
</div>
`

const css = `
.proof { margin-top:14px; display:flex; align-items:center; gap:12px; padding:10px 12px; border-radius:14px; background:var(--warm-50); border:1.5px solid var(--warm-200); }
.thumb { width:46px; height:46px; border-radius:10px; background:linear-gradient(135deg, #3B82F6 0 45%, #D8B88E 45% 100%); }
.pr-name { font-size:16px; font-weight:620; }
.pr-meta { font-size:14px; color:var(--muted); }
.flag { height:30px; padding:0 12px; border-radius:99px; border:1.5px solid var(--warm-200); display:inline-flex; align-items:center; font-size:14px; font-weight:600; color:var(--muted); }
.recv { margin-top:3px; font-size:15.5px; font-weight:600; }
.recv.ok { color:#059669; }
.recv.short { color:#D97706; }
.issue { margin-top:6px; display:inline-flex; align-items:center; gap:6px; padding:5px 10px; border-radius:10px; background:var(--amber-50); color:var(--amber-700); font-size:14px; font-weight:600; }
.sum { margin-top:8px; display:flex; justify-content:space-between; font-size:15.5px; color:var(--muted); }
.sum b { color:var(--ink); font-weight:680; }
.mail { margin-top:12px; display:flex; align-items:center; gap:12px; padding:12px 14px; border-radius:14px; background:#F4F2EF; }
.m-name { font-size:15.5px; font-weight:620; }
.m-sub { margin-top:2px; font-size:13.5px; color:var(--muted); }
.sw { width:42px; height:25px; border-radius:99px; background:#D4D1CC; position:relative; flex-shrink:0; }
.sw i { position:absolute; top:2.5px; left:2.5px; width:20px; height:20px; border-radius:99px; background:#fff; }
.sw.on { background:var(--green); }
.sw.on i { left:19.5px; }
.submit { margin-top:12px; height:50px; border-radius:99px; background:var(--ink); color:#fff; font-size:17px; font-weight:650; display:flex; align-items:center; justify-content:center; }
`

module.exports = () => page('Checked in at the back door', body, css)
