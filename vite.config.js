// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/wedding-invitation/',   // ← 注意这里必须和你的仓库一致
})
