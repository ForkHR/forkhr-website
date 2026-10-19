// Draws the illustrations in public/illustrations from the HTML + SVG in slides/. Each slide is a
// module returning a page of HTML; headless Chrome screenshots it at 1400x788 @2x and sharp writes
// the WebP the site serves (2800x1576, quality 82).
//
//   node illustrations/render.cjs                      every slide
//   node illustrations/render.cjs team-cover ...       just these
//   node illustrations/render.cjs --png team-cover     PNG in illustrations/.build only, no WebP
//   node illustrations/sheet.cjs team-cover ...        the PNGs side by side, to look at a set
//
// Needs Google Chrome (CHROME=/path/to/chrome to use another). Bricolage Grotesque, the site's
// typeface, is fetched from Google Fonts into illustrations/fonts on the first run.
// Labels in the drawings are the app's own strings; each slide says where they come from.
const { execFileSync } = require('child_process')
const fs = require('fs')
const path = require('path')
const sharp = require('sharp')

const CHROME = process.env.CHROME || '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
const dir = __dirname
const slidesDir = path.join(dir, 'slides')
const buildDir = path.join(dir, '.build')
const publicDir = path.join(dir, '..', 'public', 'illustrations')
const fontFile = path.join(dir, 'fonts', 'bricolage-latin.woff2')

const args = process.argv.slice(2)
const pngOnly = args.includes('--png')
const asked = args.filter((a) => !a.startsWith('--'))
const names = asked.length ? asked : fs.readdirSync(slidesDir).filter((f) => f.endsWith('.cjs')).map((f) => f.replace(/\.cjs$/, ''))

// The latin subset of the variable font (weight and optical size axes), as the site loads it.
const ensureFont = async () => {
  if (fs.existsSync(fontFile)) return
  const css = await fetch('https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&display=swap', {
    headers: { 'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124 Safari/537.36' },
  }).then((r) => r.text())
  const latin = css.split('/* latin */')[1]
  const url = latin && latin.match(/url\((https:[^)]+\.woff2)\)/)?.[1]
  if (!url) throw new Error('Could not find the Bricolage Grotesque latin font in the Google Fonts CSS')
  fs.mkdirSync(path.dirname(fontFile), { recursive: true })
  fs.writeFileSync(fontFile, Buffer.from(await fetch(url).then((r) => r.arrayBuffer())))
}

;(async () => {
  await ensureFont()
  fs.mkdirSync(buildDir, { recursive: true })
  for (const name of names) {
    const slide = path.join(slidesDir, `${name}.cjs`)
    if (!fs.existsSync(slide)) throw new Error(`No slide called ${name} in illustrations/slides`)
    delete require.cache[require.resolve(slide)]
    delete require.cache[require.resolve('./kit.cjs')]
    const html = path.join(buildDir, `${name}.html`)
    const png = path.join(buildDir, `${name}.png`)
    fs.writeFileSync(html, require(slide)())
    execFileSync(
      CHROME,
      [
        '--headless=new',
        '--disable-gpu',
        '--hide-scrollbars',
        '--allow-file-access-from-files',
        '--force-device-scale-factor=2',
        '--window-size=1400,788',
        '--virtual-time-budget=4000',
        `--screenshot=${png}`,
        `file://${html}`,
      ],
      { stdio: 'ignore' },
    )
    const { width, height } = await sharp(png).metadata()
    let line = `${name}: ${width}x${height}`
    if (!pngOnly) {
      const webp = path.join(publicDir, `${name}.webp`)
      await sharp(png).webp({ quality: 82, effort: 6, smartSubsample: true }).toFile(webp)
      line += ` → public/illustrations/${name}.webp (${(fs.statSync(webp).size / 1024).toFixed(0)} KB)`
    }
    console.log(line)
  }
})().catch((e) => {
  console.error(e)
  process.exit(1)
})
