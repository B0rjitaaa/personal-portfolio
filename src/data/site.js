// ─────────────────────────────────────────────────────────────
// Datos comunes a los dos idiomas (no se traducen).
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'Borja Manuel Merchán',
  shortName: 'Borja M. Merchán',
  initials: 'BM',
  email: 'bmcx12@gmail.com',
  // Deja `avatar` a null para mostrar las iniciales.
  // Para usar una foto: ponla en public/avatar.jpg y escribe '/avatar.jpg'.
  avatar: null,
  links: [
    { label: 'GitHub', url: 'https://github.com/B0rjitaaa', icon: 'github' },
    { label: 'LinkedIn', url: 'https://linkedin.com/in/bmmerchan', icon: 'linkedin' },
    { label: 'Email', url: 'mailto:bmcx12@gmail.com', icon: 'mail' },
  ],
};

// Idioma por defecto (el que se sirve en la raíz "/").
// Para invertirlo: cambia esta constante e intercambia el contenido de
// src/pages/index.astro y src/pages/es/index.astro.
export const defaultLang = 'en';

// Antepone el `base` de astro.config.mjs a una ruta interna, para que los
// enlaces sigan funcionando si el sitio cuelga de un subdirectorio.
export function withBase(path) {
  const base = import.meta.env.BASE_URL.replace(/\/$/, '');
  return `${base}${path}`;
}

export const languages = {
  en: { label: 'EN', name: 'English', path: '/' },
  es: { label: 'ES', name: 'Español', path: '/es/' },
};
