import path from "path"
import react from "@vitejs/plugin-react"
import svgr from 'vite-plugin-svgr'
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react(), svgr({
    svgrOptions: {
      // svgr options 
    },
  })],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  optimizeDeps: {
    include: ['react/jsx-runtime']
  }
})