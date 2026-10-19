// A contact sheet of rendered slides, two to a row, to look at a set at once:
//   node illustrations/sheet.cjs team-cover team-review ...   → illustrations/.build/sheet.png
// Render the slides first (render.cjs, with --png if the WebPs should stay as they are).
const path = require('path')
const sharp = require('sharp')

const names = process.argv.slice(2)
const buildDir = path.join(__dirname, '.build')
const W = 1400
const H = 788
const GAP = 24

;(async () => {
  if (!names.length) throw new Error('Name the slides to put on the sheet')
  const cols = Math.min(2, names.length)
  const rows = Math.ceil(names.length / cols)
  const tiles = await Promise.all(
    names.map(async (n, i) => ({
      input: await sharp(path.join(buildDir, `${n}.png`)).resize(W, H).toBuffer(),
      left: (i % cols) * (W + GAP),
      top: Math.floor(i / cols) * (H + GAP),
    })),
  )
  const out = path.join(buildDir, 'sheet.png')
  await sharp({ create: { width: cols * W + (cols - 1) * GAP, height: rows * H + (rows - 1) * GAP, channels: 3, background: '#9A958E' } })
    .composite(tiles)
    .png()
    .toFile(out)
  console.log(out)
})().catch((e) => {
  console.error(e)
  process.exit(1)
})
