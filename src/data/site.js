// ─────────────────────────────────────────────────────────────
// Datos comunes a los dos idiomas y opciones del diseño.
// ─────────────────────────────────────────────────────────────

export const site = {
  name: 'Borja Manuel Merchán',
  shortName: 'Borja M. Merchán',
  email: 'bmcx12@gmail.com',
  photo: '/borja.jpg',
  github: 'https://github.com/B0rjitaaa',
  linkedin: 'https://linkedin.com/in/bmmerchan',
};

// Variante del hero que traía el diseño: 'A' (por defecto) o 'B'.
export const heroVariant = 'A';

// Mostrar u ocultar la sección de charlas.
export const showTalks = true;

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
