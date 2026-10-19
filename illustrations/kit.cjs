// Shared pieces for the drawings in slides/: the page shell, icons, avatars, pills.
const ICONS = {
  check: '<path d="M20 6 9 17l-5-5"/>',
  tablet: '<rect width="16" height="20" x="4" y="2" rx="2"/><path d="M12 18h.01"/>',
  phone: '<rect width="14" height="20" x="5" y="2" rx="2"/><path d="M12 18h.01"/>',
  clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
  coffee: '<path d="M10 2v2M14 2v2M6 2v2"/><path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"/>',
  login: '<path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><path d="m10 17 5-5-5-5"/><path d="M15 12H3"/>',
  logout: '<path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><path d="m16 17 5-5-5-5"/><path d="M21 12H9"/>',
  camera: '<path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/>',
  bell: '<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>',
  calendar: '<rect width="18" height="18" x="3" y="4" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
  sparkle: '<path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9z"/><path d="M19 15l.7 1.8 1.8.7-1.8.7-.7 1.8-.7-1.8-1.8-.7 1.8-.7z"/>',
  pin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
  shield: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"/><path d="m9 12 2 2 4-4"/>',
  file: '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/><path d="M10 13H8M16 17H8M16 13h-2"/>',
  pen: '<path d="M12 20h9"/><path d="M16.4 3.6a2.1 2.1 0 1 1 3 3L7 19l-4 1 1-4Z"/>',
  card: '<rect width="20" height="14" x="2" y="5" rx="2"/><path d="M2 10h20"/>',
  arrow: '<path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>',
  repeat: '<path d="m17 2 4 4-4 4"/><path d="M3 11v-1a4 4 0 0 1 4-4h14"/><path d="m7 22-4-4 4-4"/><path d="M21 13v1a4 4 0 0 1-4 4H3"/>',
  star: '<path d="M12 2l3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z"/>',
  hash: '<path d="M4 9h16M4 15h16M10 3 8 21M16 3l-2 18"/>',
  send: '<path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/>',
  trend: '<path d="m22 7-8.5 8.5-5-5L2 17"/><path d="M16 7h6v6"/>',
  user: '<circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/>',
  qr: '<rect width="5" height="5" x="3" y="3" rx="1"/><rect width="5" height="5" x="16" y="3" rx="1"/><rect width="5" height="5" x="3" y="16" rx="1"/><path d="M21 16h-3a2 2 0 0 0-2 2v3M21 21v.01M12 7v3a2 2 0 0 1-2 2H7M3 12h.01M12 3h.01M12 16v.01M16 12h1M21 12v.01M12 21v-1"/>',
  upload: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><path d="m17 8-5-5-5 5"/><path d="M12 3v12"/>',
  wrench: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',
  briefcase: '<path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/><rect width="20" height="14" x="2" y="6" rx="2"/>',
}

const icon = (name, { size = 24, stroke = 2.2, color = 'currentColor', fill = 'none', style = '' } = {}) =>
  `<svg width="${size}" height="${size}" viewBox="0 0 24 24" fill="${fill}" stroke="${color}" stroke-width="${stroke}" stroke-linecap="round" stroke-linejoin="round" style="${style}">${ICONS[name]}</svg>`

const initials = (name) => name.split(' ').map((p) => p[0]).join('').slice(0, 2).toUpperCase()

const avatar = (name, tone, size = 52, extra = '') =>
  `<span class="avatar ${tone}" style="width:${size}px;height:${size}px;font-size:${Math.round(size * 0.36)}px;${extra}">${initials(name)}</span>`

const pill = (text, tone = 'ok', { icon: ic, sm } = {}) =>
  `<span class="pill ${tone}${sm ? ' sm' : ''}">${ic ? icon(ic, { size: sm ? 14 : 16, stroke: 3 }) : ''}${text}</span>`

// The Fork mark (the app icon's circle), from the site's favicon.
const FORK_MARK =
  'M16.6804 24.7935C25.1158 33.3781 26.7618 35.1141 27.4968 36.2671C28.5781 37.9754 29.501 40.1521 29.9812 42.0952C30.3943 43.8518 30.308 48.8409 29.8259 52.479C29.2741 56.5249 29.622 59.5304 31.0417 63.0698C32.5569 66.8241 31.518 65.6662 50.8064 84.9546L63.8953 98.0425C59.4837 99.3162 54.8215 100 49.9998 100C22.3858 100 1.9778e-05 77.6144 -0.000244141 50.0005C-0.000244141 38.2337 4.06616 27.4171 10.8679 18.8765L16.6804 24.7935ZM51.3572 42.811C54.4939 41.6186 57.2677 41.4657 60.199 42.3667C63.2595 43.3075 62.1995 42.3672 79.7322 59.6909L93.9792 73.8042C92.2747 76.9468 90.2424 79.8851 87.9294 82.5757L74.7937 69.3716C58.8251 53.3288 59.2553 53.735 57.5759 53.4888C56.5977 53.3507 55.4501 53.6606 54.6111 54.3042C53.1833 55.397 52.9642 58.045 54.1453 59.7944C54.5646 60.4114 58.9782 64.874 69.2849 75.1313L82.3445 88.1245C79.6744 90.3921 76.7647 92.3854 73.656 94.0581L59.157 79.4214C44.4096 64.5247 43.3545 63.41 42.8748 62.4526C41.5765 59.7213 41.2659 56.4247 42.0281 53.1265C42.9747 48.9678 47.0474 44.4723 51.3572 42.811ZM49.9998 -0.000488281C77.614 -0.000488281 99.9998 22.3863 99.9998 50.0005C99.9997 54.9766 99.2722 59.7827 97.9187 64.3188C95.4518 61.8014 91.541 57.8615 85.3015 51.5864C74.2575 40.4827 68.1545 34.4687 67.1902 33.7134C64.3697 31.49 60.8565 30.1563 57.0671 29.8599C56.0259 29.774 53.4995 29.9055 51.4343 30.1392C46.9829 30.6737 44.1271 30.6549 41.6492 30.1177C39.6322 29.6831 37.1841 28.6081 35.5935 27.4653C34.9246 27.0054 30.9483 23.1483 25.1443 17.3442C22.7473 14.9472 20.4915 12.7135 18.7322 10.9839C27.2951 4.11265 38.1666 -0.000431741 49.9998 -0.000488281Z'

// The app icon as iOS shows it: a white rounded square with the black mark.
const appIcon = (size = 44) =>
  `<span style="display:inline-flex;align-items:center;justify-content:center;width:${size}px;height:${size}px;border-radius:${Math.round(size * 0.24)}px;background:#fff;box-shadow:inset 0 0 0 1px rgba(0,0,0,0.06);flex-shrink:0"><svg width="${Math.round(size * 0.72)}" height="${Math.round(size * 0.72)}" viewBox="0 0 100 100"><path d="${FORK_MARK}" fill="#111"/></svg></span>`

// The HTML is written to .build/, so the stylesheet is one level up.
const page = (title, body, css = '') => `<!doctype html>
<html><head><meta charset="utf-8"><title>${title}</title>
<link rel="stylesheet" href="../base.css">
<style>${css}</style></head>
<body>${body}</body></html>`

module.exports = { icon, avatar, pill, page, initials, appIcon, FORK_MARK }
