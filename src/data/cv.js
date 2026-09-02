// ─────────────────────────────────────────────────────────────
// TODO EL CONTENIDO DE LA WEB ESTÁ AQUÍ.
// Edita este fichero y el sitio se regenera solo. No hace falta
// tocar HTML ni CSS para actualizar experiencia o proyectos.
// ─────────────────────────────────────────────────────────────

export const profile = {
  name: 'Daniel Rodríguez Montes',
  shortName: 'Dani',
  role: 'Full-Stack Developer',
  location: 'Sevilla, España',
  tagline:
    'Más de 10 años construyendo productos web y móviles. Backend sólido en PHP/Laravel, front en Angular y apps con Ionic y Flutter. Freelance y disponible para proyectos.',
  email: 'danirdev96@gmail.com',
  availability: 'Disponible para proyectos freelance',
  links: [
    { label: 'GitHub', url: 'https://github.com/TU-USUARIO', icon: 'github' },
    { label: 'LinkedIn', url: 'https://linkedin.com/in/TU-PERFIL', icon: 'linkedin' },
    { label: 'Malt', url: 'https://www.malt.es/profile/danir', icon: 'link' },
    { label: 'Email', url: 'mailto:danirdev96@gmail.com', icon: 'mail' },
  ],
};

export const about = [
  'Desarrollador full-stack freelance en Sevilla. Trabajo sobre todo en el backend —Laravel, Filament, Symfony— pero me muevo con soltura en el front (Angular, React) y en móvil con Ionic/Capacitor y Flutter.',
  'Colaboro habitualmente con Bluumi y Synclabs en proyectos de cliente y producto propio: desde CRMs y paneles de administración hasta apps publicadas en App Store y Google Play, pasando por infraestructura, despliegues y respuesta a incidentes en servidores de producción.',
  'Me interesa el trabajo que se nota: producto que se usa, código que se mantiene y entregas que llegan a tiempo.',
];

export const experience = [
  {
    role: 'Desarrollador Full-Stack Freelance',
    company: 'Autónomo',
    period: '2020 — Actualidad',
    location: 'Sevilla / Remoto',
    bullets: [
      'Desarrollo de aplicaciones web a medida con Laravel + Filament y Symfony.',
      'Apps móviles híbridas con Ionic/Capacitor y Flutter, publicadas en App Store y Google Play.',
      'Administración de VPS: Nginx, MariaDB, Redis, despliegues y monitorización.',
    ],
    tags: ['Laravel', 'Filament', 'Angular', 'Ionic', 'Flutter'],
  },
  {
    role: 'Desarrollador Full-Stack',
    company: 'Bluumi / Synclabs',
    period: '2018 — Actualidad',
    location: 'Sevilla',
    bullets: [
      'Producto interno y proyectos de cliente bajo el paraguas de ambas compañías.',
      'Diseño de APIs, modelado de datos y paneles de administración.',
      'Respuesta a incidentes en producción y endurecimiento de servidores.',
    ],
    tags: ['PHP', 'Node.js', 'MySQL', 'Nginx'],
  },
];

export const projects = [
  {
    name: 'Presu CRM',
    description:
      'CRM y sistema de presupuestos con Laravel y Filament, con doble panel (admin y super-admin) y facturación adaptada a Verifactu.',
    tags: ['Laravel', 'Filament', 'MySQL'],
    url: null,
  },
  {
    name: 'Attendis Familias',
    description:
      'App móvil para centros educativos: comunicación entre colegio y familias, publicada en App Store y Google Play.',
    tags: ['Ionic', 'Capacitor', 'iOS', 'Android'],
    url: null,
  },
  {
    name: 'Emotiments',
    description:
      'Aplicación React + Vite centrada en el registro y análisis de estados emocionales.',
    tags: ['React', 'Vite', 'TypeScript'],
    url: null,
  },
];

export const stack = [
  { group: 'Backend', items: ['PHP 8', 'Laravel', 'Filament', 'Symfony', 'CodeIgniter', 'Node.js'] },
  { group: 'Frontend', items: ['Angular', 'React', 'TypeScript', 'Astro', 'Tailwind'] },
  { group: 'Móvil', items: ['Ionic', 'Capacitor', 'Flutter'] },
  { group: 'Infra & datos', items: ['MariaDB / MySQL', 'Redis', 'Nginx', 'Docker', 'Linux', 'Git'] },
];
