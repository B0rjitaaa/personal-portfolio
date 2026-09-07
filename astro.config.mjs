// @ts-check
import { defineConfig } from 'astro/config';

// ─────────────────────────────────────────────────────────────
// CONFIGURACIÓN DE GITHUB PAGES
//
// Caso A (el actual) — dominio propio borja.merchan.me
//   El dominio se sirve desde la RAÍZ, así que NO lleva `base`.
//   El dominio también está en public/CNAME y en Settings → Pages.
//   site: 'https://borja.merchan.me'   ·  base: sin definir
//
// Caso B — sin dominio propio, repo de proyecto B0rjitaaa/personal-portfolio
//   site: 'https://b0rjitaaa.github.io'   ·  base: '/personal-portfolio'
//
// Caso C — sin dominio propio, repo llamado B0rjitaaa.github.io
//   site: 'https://b0rjitaaa.github.io'   ·  base: sin definir
// ─────────────────────────────────────────────────────────────

export default defineConfig({
  site: 'https://borja.merchan.me',
  // base: '/personal-portfolio',   // solo sin dominio propio (Caso B)
  build: { format: 'directory' },
  vite: {
    server: {
      // Necesario para que el hot-reload funcione a través del bind mount
      // de Docker en macOS.
      watch: { usePolling: true, interval: 300 },
    },
  },
});
