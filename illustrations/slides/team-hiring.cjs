// Hiring: a "Now hiring" sign in the Main St window, and the applicants it brought in.
const { icon, avatar, pill, page } = require('../kit.cjs')

// A QR-like grid for the sign (decorative, seeded so it is stable between renders).
const qr = (x, y, cell, n = 21) => {
  let seed = 7
  const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647)
  const finder = (fx, fy) => `
    <rect x="${x + fx * cell}" y="${y + fy * cell}" width="${cell * 7}" height="${cell * 7}" rx="${cell}" fill="#1B1A19"/>
    <rect x="${x + (fx + 1) * cell}" y="${y + (fy + 1) * cell}" width="${cell * 5}" height="${cell * 5}" rx="${cell * 0.6}" fill="#FFFDF9"/>
    <rect x="${x + (fx + 2) * cell}" y="${y + (fy + 2) * cell}" width="${cell * 3}" height="${cell * 3}" rx="${cell * 0.4}" fill="#1B1A19"/>`
  const inFinder = (i, j) => (i < 8 && j < 8) || (i > n - 9 && j < 8) || (i < 8 && j > n - 9)
  let cells = ''
  for (let i = 0; i < n; i++)
    for (let j = 0; j < n; j++) if (!inFinder(i, j) && rnd() > 0.52) cells += `<rect x="${x + i * cell}" y="${y + j * cell}" width="${cell}" height="${cell}" fill="#1B1A19"/>`
  return cells + finder(0, 0) + finder(n - 7, 0) + finder(0, n - 7)
}

const stripes = Array.from({ length: 16 }, (_, k) => `<rect x="${k * 48}" y="0" width="24" height="96" fill="#2563EB"/>`).join('')
const scallops = Array.from({ length: 31 }, (_, k) => `<circle cx="${12 + k * 24}" cy="96" r="12" fill="${Math.floor(k / 1) % 2 === 0 ? '#2563EB' : '#F7F4EF'}"/>`).join('')

const scene = `
<svg viewBox="0 0 720 628" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <clipPath id="glass"><rect x="58" y="176" width="452" height="330" rx="6"/></clipPath>
    <radialGradient id="lamp" cx="0.5" cy="0.5" r="0.5">
      <stop offset="0" stop-color="#FFE7A0" stop-opacity="0.85"/>
      <stop offset="1" stop-color="#FFE7A0" stop-opacity="0"/>
    </radialGradient>
  </defs>
  <!-- Facade -->
  <rect width="720" height="628" fill="#E7DFD4"/>
  <!-- Awning -->
  <g>
    <rect x="0" y="96" width="720" height="30" fill="#D9CFC2" opacity="0.55"/><rect x="0" y="0" width="720" height="96" fill="#F7F4EF"/>
    ${stripes}
    ${scallops}
    
  </g>

  <!-- Window -->
  <rect x="44" y="162" width="480" height="358" rx="14" fill="#2D2926"/>
  <g clip-path="url(#glass)">
    <rect x="58" y="176" width="452" height="330" fill="#CAD6EB"/>
    <circle cx="170" cy="236" r="70" fill="url(#lamp)"/>
    <circle cx="400" cy="236" r="70" fill="url(#lamp)"/>
    <rect x="169" y="176" width="2" height="34" fill="#9AABC8"/>
    <path d="M150 226 C150 212 158 206 170 206 C182 206 190 212 190 226 Z" fill="#8FA2C2"/>
    <rect x="399" y="176" width="2" height="34" fill="#9AABC8"/>
    <path d="M380 226 C380 212 388 206 400 206 C412 206 420 212 420 226 Z" fill="#8FA2C2"/>
    <rect x="58" y="420" width="452" height="86" fill="#B9C7DF"/>
    <rect x="58" y="414" width="452" height="10" fill="#A9B9D5"/>
    <path d="M70 506 L210 176 L250 176 L110 506 Z" fill="#FFFFFF" opacity="0.22"/>
    <path d="M128 506 L268 176 L284 176 L144 506 Z" fill="#FFFFFF" opacity="0.18"/>
  </g>

  <!-- The sign, taped inside the glass -->
  <g transform="rotate(-2.5 284 330)">
    <rect x="180" y="210" width="208" height="262" rx="8" fill="#FFFDF9"/>
    <rect x="180" y="210" width="208" height="262" rx="8" fill="none" stroke="#EDE7DD" stroke-width="2"/>
    <rect x="252" y="202" width="64" height="22" rx="3" fill="#F2E3B3" opacity="0.92"/>
    <text x="284" y="256" text-anchor="middle" font-family="Bricolage" font-size="14" font-weight="700" letter-spacing="2.4" fill="#2563EB">NOW HIRING</text>
    <text x="284" y="294" text-anchor="middle" font-family="Bricolage" font-size="34" font-weight="700" fill="#1B1A19">Barista</text>
    <text x="284" y="318" text-anchor="middle" font-family="Bricolage" font-size="13.5" font-weight="500" fill="#77726C">Part time · weekends</text>
    ${qr(242, 330, 5.4)}
    <text x="284" y="456" text-anchor="middle" font-family="Bricolage" font-size="12" font-weight="600" fill="#59554F">Scan to view job listings</text>
  </g>

  <!-- Door -->
  <rect x="556" y="162" width="136" height="398" rx="10" fill="#2D2926"/>
  <rect x="574" y="182" width="100" height="168" rx="6" fill="#CAD6EB"/>
  <path d="M590 350 L640 182 L656 182 L606 350 Z" fill="#FFFFFF" opacity="0.22"/>
  <rect x="574" y="372" width="100" height="150" rx="6" fill="none" stroke="#45403B" stroke-width="3"/>
  <rect x="580" y="396" width="8" height="54" rx="4" fill="#D9D2C9"/>
  <path d="M600 214 L624 196 L648 214" fill="none" stroke="#2D2926" stroke-width="2"/>
  <rect x="592" y="214" width="64" height="30" rx="6" fill="#FFFDF9"/>
  <text x="624" y="235" text-anchor="middle" font-family="Bricolage" font-size="14" font-weight="700" letter-spacing="1.6" fill="#059669">OPEN</text>

  <!-- Planter -->
  <g>
    <ellipse cx="110" cy="512" rx="42" ry="26" fill="#6FAE84"/>
    <ellipse cx="170" cy="506" rx="38" ry="30" fill="#5E9E73"/>
    <ellipse cx="232" cy="514" rx="40" ry="24" fill="#7FB98F"/>
    <ellipse cx="300" cy="508" rx="44" ry="30" fill="#6FAE84"/>
    <ellipse cx="368" cy="514" rx="38" ry="24" fill="#5E9E73"/>
    <ellipse cx="430" cy="508" rx="42" ry="30" fill="#7FB98F"/>
    <ellipse cx="486" cy="514" rx="32" ry="22" fill="#6FAE84"/>
    <rect x="40" y="520" width="488" height="40" rx="6" fill="#C9A47A"/>
    <rect x="40" y="520" width="488" height="8" rx="4" fill="#B8915F"/>
  </g>

  <!-- Sidewalk -->
  <rect y="560" width="720" height="68" fill="#D8CFC4"/>
  <rect y="560" width="720" height="6" fill="#CDC3B6"/>
  <g stroke="#CBC0B2" stroke-width="3">${Array.from({ length: 6 }, (_, k) => `<path d="M${60 + k * 128} 566 L${40 + k * 128} 628"/>`).join('')}</g>
</svg>`

const applicants = [
  { name: 'Jordan Lee', tone: 'green', meta: 'Good fit · applied Mon 9:14 AM', right: pill('Interview', 'warn', { sm: true }) },
  { name: 'Riley Brooks', tone: 'blue', meta: 'Applied Sun 6:40 PM', right: pill('Applied', 'neutral', { sm: true }) },
  { name: 'Mateo Silva', tone: 'violet', meta: 'Applied Sat 11:02 AM', right: pill('Applied', 'neutral', { sm: true }) },
]

const body = `
<div class="scene" style="left:57px;top:80px;width:720px;height:628px">${scene}</div>

<div class="card" style="left:830px;top:96px;width:512px;padding:34px 38px 30px">
  <div class="title">Barista · Main St</div>
  <div class="sub">Part time · on your job board</div>
  <div class="rows">
    ${applicants
      .map(
        (a) => `<div class="row">${avatar(a.name, a.tone, 50)}<div class="grow"><div class="name">${a.name}</div><div class="meta">${a.meta}</div></div>${a.right}</div>`,
      )
      .join('')}
  </div>
  <div class="next">
    ${icon('calendar', { size: 26, stroke: 2.2, color: '#2563EB' })}
    <div style="flex:1"><div class="n-name">Interview · Thu 3:00 PM</div><div class="n-meta">Accepted from the email</div></div>
    <span class="check" style="width:38px;height:38px">${icon('check', { size: 20, stroke: 3.2 })}</span>
  </div>
</div>
`

const css = `
.next { margin-top:10px; display:flex; align-items:center; gap:16px; background:var(--blue-50); border-radius:20px; padding:18px 20px; }
.n-name { font-size:21px; font-weight:620; }
.n-meta { margin-top:2px; font-size:17px; color:var(--muted); }
`

module.exports = () => page('A sign in the window', body, css)
