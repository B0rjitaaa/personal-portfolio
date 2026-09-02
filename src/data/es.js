// ─────────────────────────────────────────────────────────────
// CONTENIDO EN ESPAÑOL. La versión inglesa está en en.js y tiene
// exactamente la misma estructura: si añades algo aquí, añádelo allí.
// ─────────────────────────────────────────────────────────────

export default {
  lang: 'es',

  meta: {
    title: 'Borja Manuel Merchán — Project Manager e Ingeniero Senior Python/Django',
    description:
      'Project Manager e ingeniero senior de Python/Django con 10 años de experiencia llevando plataformas web desde la primera conversación con el cliente hasta producción.',
  },

  nav: {
    profile: 'Perfil',
    skills: 'Competencias',
    experience: 'Experiencia',
    education: 'Formación',
    talks: 'Charlas',
    contact: 'Contacto',
  },

  hero: {
    role: 'Project Manager · Ingeniero Senior Python / Django',
    location: 'Sevilla, España',
    badge: 'Abierto a nuevas oportunidades',
  },

  profile: {
    heading: 'Perfil',
    body: 'Project Manager e ingeniero senior de Python/Django con 10 años de experiencia llevando plataformas web desde la primera conversación con el cliente hasta producción. Dirijo equipos pequeños de entrega sin dejar de estar en el código: arquitectura de backend, APIs REST, integraciones con terceros, procesamiento asíncrono y despliegue de principio a fin en Kubernetes con flujo GitOps (ArgoCD). Acostumbrado a hacerme cargo del alcance, las estimaciones y el presupuesto manteniendo alineadas la calidad técnica y las fechas de entrega.',
  },

  skills: {
    heading: 'Competencias',
    groups: [
      {
        label: 'Liderazgo y entrega',
        items: [
          'Gestión de proyectos',
          'Liderazgo técnico',
          'Supervisión de equipo y code review',
          'Agile / Scrum',
          'Estimación de esfuerzo',
          'Definición de alcance',
          'Presupuestos',
          'Trato con cliente',
        ],
      },
      {
        label: 'Lenguajes',
        items: ['Python (avanzado)', 'JavaScript', 'SQL', 'C#', 'Node.js'],
      },
      {
        label: 'Backend',
        items: ['Django', 'Django REST Framework', 'Flask', 'FastAPI'],
      },
      {
        label: 'Frontend',
        items: ['Angular', 'React', 'Vue.js', 'jQuery', 'HTML5', 'CSS3'],
      },
      {
        label: 'Cloud y DevOps',
        items: [
          'Kubernetes',
          'ArgoCD (GitOps)',
          'Docker y Docker Compose',
          'AWS (Lambda, EC2, DynamoDB)',
          'Azure',
          'Terraform (IaC)',
        ],
      },
      {
        label: 'Datos y asincronía',
        items: ['PostgreSQL', 'SQL Server', 'DynamoDB', 'Redis', 'Celery', 'Pipelines ETL'],
      },
      {
        label: 'Arquitectura',
        items: [
          'Microservicios',
          'APIs REST',
          'Diseño orientado a eventos',
          'Google Maps Platform',
          'APIs de terceros',
          'Feeds FTP / CSV',
        ],
      },
      {
        label: 'Prácticas y herramientas',
        items: ['Git', 'GitLab', 'CI/CD', 'Testing y depuración', 'Seguridad de aplicaciones'],
      },
    ],
  },

  experience: {
    heading: 'Experiencia profesional',
    jobs: [
      {
        role: 'Project Manager e Ingeniero Senior Python',
        company: 'Bluumi App SL',
        location: 'Sevilla, España',
        period: '08/2024 – Actualidad',
        summary:
          'Responsable de entrega de tres equipos de producto: roadmap y estimación, diseño de solución, desarrollo de backend en primera persona y responsabilidad sobre las releases.',
        projects: [
          {
            name: 'Roadit',
            note: 'plataforma de transporte de vehículos (roadit.ai)',
            url: 'https://roadit.ai',
            bullets: [
              'Plataforma tecnológica que coordina el transporte de vehículos desde la solicitud inicial hasta la entrega final, conectando concesionarios y flotas con una red de transportistas independientes por toda España.',
              'Responsable de backend: diseño y desarrollo de las APIs REST en Django para planificación de transportes, seguimiento, presupuestos, facturación y gestión de incidencias.',
              'Integración de Google Maps Platform para rutas y geolocalización, además de notificaciones y procesamiento asíncrono de tareas con Celery y Redis.',
              'Responsable del despliegue de toda la plataforma: servicios contenerizados publicados en clústeres de Kubernetes mediante ArgoCD (GitOps), con promoción entre entornos y rollbacks controlados.',
              'Evolución del panel de administración en Angular que usa a diario el equipo de operaciones.',
              'Supervisión técnica del equipo de desarrollo: decisiones de arquitectura, code review y coordinación de releases.',
            ],
            tech: [
              'Django REST Framework',
              'PostgreSQL',
              'Celery',
              'Redis',
              'Angular',
              'Google Maps Platform',
              'Docker',
              'Kubernetes',
              'ArgoCD',
            ],
          },
          {
            name: 'Az3Oeno',
            note: 'plataforma cloud-native para producción de vino y gestión de barricas',
            bullets: [
              'Diseño de la solución y desarrollo full-stack de una plataforma usada por instalaciones enológicas: gestión de fases de fermentación, inventario de barricas, trazabilidad de lotes, informes y soporte multiidioma para bodegas internacionales.',
            ],
            tech: ['Django', 'PostgreSQL', 'JavaScript', 'HTML/CSS', 'AWS EC2'],
          },
          {
            name: 'Attendis',
            note: 'plataforma de gestión educativa para una red de colegios privados',
            bullets: [
              'Responsable técnico y arquitecto de backend en un equipo de 5, para una red con presencia en varias regiones.',
              'Seguimiento académico, expedientes centralizados, paneles para el profesorado, informes a medida y generación segura de documentos (notas, asistencia, certificados).',
            ],
            tech: ['Django', 'PostgreSQL', 'Celery', 'Redis', 'JavaScript (jQuery)', 'HTML/CSS'],
          },
          {
            name: 'Preventa y relación con cliente',
            bullets: [
              'Participación activa en las conversaciones iniciales con cliente: asesoramiento técnico, propuestas a medida, estimación de esfuerzo, definición de alcance y encaje del presupuesto con las necesidades del cliente y la capacidad real del equipo.',
            ],
          },
        ],
      },
      {
        role: 'Ingeniero Senior Python',
        company: 'Version 1 SL',
        location: 'Málaga, España',
        period: '04/2022 – 08/2024',
        projects: [
          {
            name: 'NEPO Open Platform',
            note: 'contratación electrónica',
            bullets: [
              'Desarrollo de backend en Node.js y de componentes React para una plataforma donde los proveedores se registran gratuitamente para recibir avisos de oportunidades de negocio relevantes.',
              'Desarrollo de funciones AWS Lambda que dan soporte a los flujos de notificación y emparejamiento.',
            ],
            tech: ['Node.js', 'React', 'AWS Lambda'],
          },
          {
            name: 'Capital Markets',
            note: 'plataforma de rentabilidad de inversiones',
            bullets: [
              'Plataforma web construida sobre componentes de AWS para cuantificar la rentabilidad de las inversiones.',
              'Scripts en Python para obtener datos en bruto de varias fuentes (SQL Server, FTP, CSV) y sintetizarlos como dato final en DynamoDB.',
              'Desarrollo y configuración de endpoints para disparar recursos concretos de AWS; Terraform (IaC) para definir los componentes desplegables.',
            ],
            tech: ['Python', 'AWS', 'DynamoDB', 'SQL Server', 'Terraform'],
          },
        ],
      },
      {
        role: 'Ingeniero de Configuración de Software',
        company: 'DTN SL',
        location: 'Sevilla, España',
        period: '01/2019 – 04/2022',
        bullets: [
          'ThingsBoard: uso de la plataforma open source para ETL sobre dispositivos IoT y construcción de cuadros de mando para cliente final, ampliada con una capa Flask orientada a API para añadir funcionalidad al software del cliente.',
          'Decodificadores en tiempo real de señales de sensores escritos en Python y visor automatizado de documentos construido en Flask.',
          'Scripts en Python y procedimientos SQL para sincronizar datos entre varios servidores Windows/SQL Server.',
          'Mantenedor del repositorio Git del equipo; participación completa en el proceso Agile de desarrollo.',
        ],
        tech: ['Python', 'Flask', 'ThingsBoard', 'SQL Server', 'Git'],
      },
      {
        role: 'Analista / Programador',
        company: 'Ayesa AT',
        location: 'Sevilla, España',
        period: '02/2018 – 01/2019',
        bullets: [
          'Programa RGPD para Repsol: campañas de mailing con AWS Lambda dirigidas a toda la base de clientes del grupo Repsol.',
          'Becas Fundación Repsol: plataforma web en Django para estudiantes en España, incluyendo el soporte durante las actualizaciones anuales.',
          'Guía Repsol: funcionalidades de CMS en Django a partir de propuestas de redacción, comandos de gestión de Django para actualizaciones masivas en PostgreSQL y soporte de front con Vue.js.',
          'Planificación de tareas en GitLab y ServiceNow; Docker y Docker Compose para el desarrollo local diario (django-cms, PostgreSQL, Nginx, Redis).',
        ],
        tech: ['Django', 'django-cms', 'Vue.js', 'AWS Lambda', 'PostgreSQL', 'Docker'],
      },
      {
        role: 'IT Associate (Desarrollador)',
        company: 'Quintas Energy SL',
        location: 'Sevilla, España',
        period: '02/2016 – 02/2018',
        bullets: [
          'ETL en Azure: pipelines que recogían datos en bruto de plantas solares, procedimientos batch en C# para limpiarlos y almacenarlos en una base de datos SQL de staging, expuestos como cuadros de mando de Power BI.',
          'QEconnect (ERP QuickBase): desarrollo orientado a negocio y complementos en Django/Python para el ERP.',
          'Premio Empleado del Mes (noviembre de 2016).',
        ],
        tech: ['Azure', 'C#', 'SQL Server', 'Power BI', 'Django'],
      },
    ],
  },

  education: {
    heading: 'Formación y certificaciones',
    items: [
      { title: 'Máster en Ciberseguridad', place: 'Universidad de Sevilla', period: '2017 – 2018' },
      {
        title: 'Grado en Ingeniería del Software',
        place: 'Universidad de Sevilla',
        period: '2010 – 2014',
      },
      { title: 'Scrum Master e ITIL v3', place: 'Ayesa AT / Axelos', period: '2017 – 2018' },
      {
        title: 'Desarrollo y administración con Oracle Database',
        place: 'Universidad de Sevilla',
        period: '2011',
      },
      {
        title: 'Ciclo Superior de Desarrollo de Aplicaciones Informáticas',
        place: 'Salesianos de San Pedro, Triana',
        period: '2008 – 2010',
      },
    ],
  },

  talks: {
    heading: 'Charlas y congresos',
    items: [
      { title: 'Kung Fu Python: Hacking with Python', note: 'Taller · SecAdmin 2019, Sevilla' },
      {
        title: 'Explota explótame exploí: Hacking with Empire',
        note: 'BitUP 2019 (Univ. de Alicante) y ETSII 2019 (Univ. de Sevilla)',
      },
      {
        title: 'A Gentle Intro to Social Engineering',
        note: 'Ronda de Hacking, Meetup Hacking Sevilla · noviembre de 2019',
      },
      {
        title: 'Introducción al desarrollo de tus propias herramientas de hacking',
        note: 'SecAdmin 2018, Sevilla',
      },
    ],
  },

  languagesSection: {
    heading: 'Idiomas e intereses',
    languages: { label: 'Idiomas', value: 'Español (nativo) · Inglés (nivel profesional)' },
    interests: {
      label: 'Intereses',
      value: 'Gimnasio y pádel, juegos de mesa y de cartas, música electrónica y festivales.',
    },
  },

  contact: {
    heading: 'Contacto',
    body: 'Encantado de hablar de arquitectura backend, de entrega de proyectos o de esa plataforma que quieres poner en producción. Suelo responder en menos de 24 horas.',
  },

  footer: 'Hecho con Astro · Publicado en GitHub Pages',
  switchTo: 'View in English',
};
