// Runs after `vite build` + the SSR build: writes static HTML for every route in ROUTE_META,
// with its own <title>, description, canonical and og:* tags, so crawlers and link previews
// see real content instead of an empty #root.
import fs from 'node:fs'
import { render, ROUTE_META, SITE_URL } from '../dist-ssr/entry-server.js'

const template = fs.readFileSync('dist/index.html', 'utf8')
const attr = s => s.replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

for (const [route, { title, description }] of Object.entries(ROUTE_META)) {
  const url = SITE_URL + route
  const html = template
    .replace(/<title>[^<]*<\/title>/, () => `<title>${attr(title)}</title>`)
    .replace(/(<meta name="description"\s+content=")[^"]*/, (_, p) => p + attr(description))
    .replace(/(<meta property="og:description"\s+content=")[^"]*/, (_, p) => p + attr(description))
    .replace(/(<meta property="og:title" content=")[^"]*/, (_, p) => p + attr(title))
    .replace(/(<meta property="og:url" content=")[^"]*/, (_, p) => p + url)
    .replace(/(<link rel="canonical" href=")[^"]*/, (_, p) => p + url)
    .replace(/<div id="root"([^>]*)><\/div>/, (_, a) => `<div id="root"${a} data-route="${route}">${render(route)}</div>`)

  const file = `dist${route === '/' ? '' : route}/index.html`
  fs.mkdirSync(file.slice(0, file.lastIndexOf('/')), { recursive: true })
  fs.writeFileSync(file, html)
  console.log(`prerendered ${route} -> ${file}`)
}
