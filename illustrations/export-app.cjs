// Exports the drawings for the Fork web app: each slide in light and dark, as a wide 16:9 frame
// (1600 px) and a 4:3 "spot" crop around its focal card (960 px), written to
// ../../forkhr/frontend/public/illustrations (override with --out <dir>).
//
//   node illustrations/export-app.cjs                      every slide that has a focus box
//   node illustrations/export-app.cjs team-schedule ...    just these
//   node illustrations/export-app.cjs --light-only
//
// Needs Google Chrome (CHROME=/path to use another) and the font cached by render.cjs.
const { execFileSync } = require('child_process')
const fs = require('fs')
const path = require('path')
const sharp = require('sharp')

const CHROME = process.env.CHROME || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
const dir = __dirname
const slidesDir = path.join(dir, 'slides')
const buildDir = path.join(dir, '.build', 'app')
const args = process.argv.slice(2)
const lightOnly = args.includes('--light-only')
const outIdx = args.indexOf('--out')
const outDir = outIdx >= 0 ? path.resolve(args[outIdx + 1]) : path.resolve(dir, '..', '..', 'forkhr', 'frontend', 'public', 'illustrations')
const asked = args.filter((a, i) => !a.startsWith('--') && args[i - 1] !== '--out')

// The focal card of each scene, in the 1400 x 788 frame, as a 4:3 box (w = 4/3 h).
const FOCUS = {
  'team-schedule': { x: 24, y: 70, w: 820, h: 615 },
  'team-clock-in': { x: 790, y: 56, w: 600, h: 450 },
  'team-hiring': { x: 790, y: 56, w: 600, h: 450 },
  'team-onboarding': { x: 628, y: 72, w: 752, h: 564 },
  'team-cover': { x: 460, y: 72, w: 920, h: 690 },
  'team-review': { x: 400, y: 60, w: 960, h: 720 },
  'supply-order': { x: 740, y: 40, w: 640, h: 480 },
  'supply-count': { x: 790, y: 56, w: 600, h: 450 },
  'supply-receive': { x: 772, y: 30, w: 616, h: 462 },
  'supply-recurring': { x: 790, y: 48, w: 600, h: 450 },
  'supply-service': { x: 772, y: 20, w: 616, h: 462 },
  'hiring-apply': { x: 430, y: 30, w: 960, h: 720 },
  'hiring-hired': { x: 630, y: 180, w: 700, h: 525 },
  'hiring-interview': { x: 400, y: 60, w: 960, h: 720 },
  'hiring-resume': { x: 400, y: 60, w: 960, h: 720 },
}

const names = asked.length ? asked : fs.readdirSync(slidesDir).filter((f) => f.endsWith('.cjs')).map((f) => f.replace(/\.cjs$/, '')).filter((n) => FOCUS[n])

const shoot = (html, png) => {
  execFileSync(CHROME, [
    '--headless=new', '--disable-gpu', '--hide-scrollbars', '--allow-file-access-from-files',
    '--force-device-scale-factor=2', '--window-size=1400,788', '--virtual-time-budget=4000',
    `--screenshot=${png}`, `file://${html}`,
  ], { stdio: 'ignore' })
}

const clamp = (v, lo, hi) => Math.max(lo, Math.min(hi, v))

;(async () => {
  fs.mkdirSync(buildDir, { recursive: true })
  fs.mkdirSync(outDir, { recursive: true })
  for (const name of names) {
    const slide = path.join(slidesDir, `${name}.cjs`)
    if (!fs.existsSync(slide)) throw new Error(`No slide called ${name}`)
    delete require.cache[require.resolve(slide)]
    delete require.cache[require.resolve('./kit.cjs')]
    const htmlLight = require(slide)()
    // The build dir sits one level deeper than render.cjs's, so the stylesheet is two up.
    const fix = (h) => h.replace('href="../base.css"', 'href="../../base.css"')
    const themes = lightOnly ? ['light'] : ['light', 'dark']
    for (const theme of themes) {
      const html = path.join(buildDir, `${name}-${theme}.html`)
      const png = path.join(buildDir, `${name}-${theme}.png`)
      const markup = theme === 'dark' ? fix(htmlLight).replace('<html>', '<html data-theme="dark">') : fix(htmlLight)
      fs.writeFileSync(html, markup)
      shoot(html, png)
      const suffix = theme === 'dark' ? '-dark' : ''
      const wide = path.join(outDir, `${name}${suffix}.webp`)
      await sharp(png).resize({ width: 1600 }).webp({ quality: 82, effort: 6, smartSubsample: true }).toFile(wide)
      const f = FOCUS[name]
      let line = `${name} ${theme}: wide ${(fs.statSync(wide).size / 1024).toFixed(0)} KB`
      if (f) {
        const spot = path.join(outDir, `${name}-spot${suffix}.webp`)
        const left = clamp(Math.round(f.x * 2), 0, 2800), top = clamp(Math.round(f.y * 2), 0, 1576)
        const width = clamp(Math.round(f.w * 2), 1, 2800 - left), height = clamp(Math.round(f.h * 2), 1, 1576 - top)
        await sharp(png).extract({ left, top, width, height }).resize({ width: 960 }).webp({ quality: 82, effort: 6, smartSubsample: true }).toFile(spot)
        line += `, spot ${(fs.statSync(spot).size / 1024).toFixed(0)} KB`
      }
      console.log(line)
    }
  }
})().catch((e) => { console.error(e); process.exit(1) })
