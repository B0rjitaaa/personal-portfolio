// @ts-check
import { defineConfig } from 'astro/config';

// ─────────────────────────────────────────────────────────────
// CONFIGURACIÓN DE GITHUB PAGES
//
// Caso A (recomendado) — repo llamado  TU-USUARIO.github.io
//   site: 'https://TU-USUARIO.github.io'   ·  base: sin definir
//
// Caso B — repo de proyecto, p.ej. PersonalPortfolio
//   site: 'https://TU-USUARIO.github.io'   ·  base: '/PersonalPortfolio'
//
// Caso C — dominio propio (con public/CNAME)
//   site: 'https://TU-DOMINIO.com'              ·  base: sin definir
// ─────────────────────────────────────────────────────────────

export default defineConfig({
  site: 'https://TU-USUARIO.github.io',
  // base: '/PersonalPortfolio',
  build: { format: 'directory' },
  vite: {
    server: {
      // Necesario para que el hot-reload funcione a través del bind mount
      // de Docker en macOS.
      watch: { usePolling: true, interval: 300 },
    },
  },
});
