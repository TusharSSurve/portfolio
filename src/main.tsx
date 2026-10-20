import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import App from './App.tsx'
// @ts-expect-error CSS is handled by the bundler, not TypeScript.
import './index.css'

const root = document.getElementById('root')!
const app = (
  <StrictMode>
    <App />
  </StrictMode>
)

// scripts/prerender.js marks pre-rendered HTML with data-route. Hydrate only when it
// matches this URL exactly: unknown paths (served the home HTML by the vercel.json
// fallback) and query params like ?tech=Python render fresh instead.
const path = location.pathname.replace(/\/$/, '') || '/'
if (root.dataset.route === path && !location.search) {
  hydrateRoot(root, app)
} else {
  createRoot(root).render(app)
}
