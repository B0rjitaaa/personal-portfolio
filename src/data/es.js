// ─────────────────────────────────────────────────────────────
// CONTENIDO EN ESPAÑOL. Se sirve en /es/.
// La versión inglesa (en.js) tiene exactamente la misma estructura:
// si añades algo aquí, añádelo allí.
// ─────────────────────────────────────────────────────────────

export default {
  lang: 'es',
  meta: {
    title: 'Borja Manuel Merchán — Project Manager y Senior Python/Django Engineer',
    description:
      'Project Manager e ingeniero senior de Python/Django en Sevilla. 10 años llevando plataformas web desde la primera conversación con el cliente hasta producción.',
  },

  nav: { about: "Sobre mí", experience: "Experiencia", work: "Proyectos", skills: "Stack", talks: "Charlas", contact: "Contacto", cta: "Hablemos" },
  hero: {
    eyebrow: "Project Manager · Senior Python / Django",
    h1: "Del alcance a producción.",
    lede: "Combino la dirección de proyecto con el desarrollo backend, sobre tecnología actual y con foco en la entrega.",
    primary: "Ver proyectos",
    secondary: "Contactar",
    facts: [
      { k: "Base", v: "Sevilla, España" },
      { k: "Ahora", v: "Bluumi App SL" },
      { k: "Experiencia", v: "10 años" },
      { k: "Foco", v: "Django · APIs · Kubernetes" }
    ]
  },
  about: {
    label: "Perfil",
    h2: "",
    lead: "Soy Project Manager e ingeniero senior de Python/Django.",
    blocks: [
      { intro: "Trabajo desde la primera conversación con el cliente hasta el despliegue:", items: [
        { t: "diseño de solución" }, { t: "arquitectura backend" }, { t: "APIs REST" },
        { t: "integraciones con terceros" }, { t: "procesamiento asíncrono" },
        { t: "puesta en producción de extremo a extremo en Kubernetes con flujo GitOps (ArgoCD)" }
      ]},
      { intro: "Lidero equipos pequeños de entrega y superviso técnicamente:", items: [
        { t: "decisiones de arquitectura" }, { t: "revisión de código" }, { t: "coordinación de releases" }
      ]}
    ],
    close: "Estoy acostumbrado a mantener alineadas la calidad técnica y las fechas de entrega."
  },
  exp: {
    h2: "Experiencia",
    sub: "",
    jobs: [
      {
        role: "Project Manager & Senior Python Engineer",
        company: "Bluumi App SL",
        meta: "Sevilla · 08/2024 — Actualidad",
        summary: "Responsable de entrega en tres equipos de producto: roadmap y estimación, diseño de solución, desarrollo backend y propiedad de las releases.",
        items: [
          { title: "Roadit — plataforma de transporte de vehículos (roadit.ai)", tech: "Django REST Framework · PostgreSQL · Celery · Redis · Angular · Google Maps Platform · Docker · Kubernetes · ArgoCD", lines: [
            { t: "Plataforma que coordina el transporte de vehículos desde la solicitud inicial hasta la entrega final, conectando concesionarios y flotas con una red de conductores independientes en toda España." },
            { t: "Lead de backend: diseño y construcción de las APIs REST de planificación, seguimiento, presupuestos, facturación y gestión de incidencias." },
            { t: "Integración de Google Maps Platform para rutas y geolocalización, más notificaciones y tareas asíncronas con Celery y Redis." },
            { t: "Propiedad del despliegue completo: servicios contenerizados publicados en clústeres de Kubernetes vía ArgoCD (GitOps), con promoción de entornos y rollbacks controlados." },
            { t: "Evolución del panel de administración en Angular que usa el equipo de operaciones a diario." }
          ]},
          { title: "Az3Oeno — plataforma cloud-native para producción de vino y gestión de barricas", tech: "Django · PostgreSQL · JavaScript · HTML/CSS · AWS EC2", lines: [
            { t: "Diseño de solución y desarrollo full-stack para instalaciones enológicas: gestión de fases de fermentación, inventario de barricas, trazabilidad de lotes, reporting y soporte multiidioma para bodegas internacionales." }
          ]},
          { title: "Attendis — gestión educativa para una red de colegios privados", tech: "Django · PostgreSQL · Celery · Redis · React", lines: [
            { t: "Lead técnico y arquitecto backend en un equipo de 5, para una red con presencia en varias regiones." },
            { t: "Seguimiento académico, expediente centralizado, informes a medida y generación segura de documentos (notas, asistencia, certificados)." },
            { t: "Diseño e implementación del panel de profesores: pasar lista, evaluar estudiantes, asignar tutorías con padres y seguimiento diario del aula." },
            { t: "Panel de Secretaría para las gestiones internas de cada colegio: rutas de autobús con recogida de alumnos por paradas, matriculación y promoción entre cursos y gestiones administrativas." }
          ]},
          { title: "Cliente y preventa", tech: "", lines: [
            { t: "Presente en las conversaciones iniciales con cliente: asesoramiento técnico, propuestas a medida, estimación de esfuerzo, definición de alcance y encaje del presupuesto con la capacidad interna de entrega." }
          ]}
        ]
      },
      {
        role: "Senior Python Engineer",
        company: "Version 1 SL",
        meta: "Málaga · 04/2022 — 08/2024",
        summary: "Backend y cloud sobre AWS en dos productos de negocio.",
        items: [
          { title: "NEPO Open Platform — e-procurement", tech: "Node.js · React · AWS Lambda", lines: [
            { t: "Desarrollo backend en Node.js y componentes React para una plataforma donde los proveedores se registran gratis y reciben avisos de oportunidades de negocio relevantes." },
            { t: "Funciones AWS Lambda que soportan los flujos de notificación y matching." }
          ]},
          { title: "Capital Markets — plataforma de rentabilidad de inversiones", tech: "Python · AWS · DynamoDB · SQL Server · Terraform", lines: [
            { t: "Plataforma web sobre componentes AWS para cuantificar la rentabilidad de las inversiones." },
            { t: "Scripts Python para obtener datos en bruto de varias fuentes (SQL Server, FTP, CSV) y sintetizarlos como dato final en DynamoDB." },
            { t: "Desarrollo y configuración de endpoints que disparan recursos AWS concretos; Terraform (IaC) para definir los componentes despegables." }
          ]}
        ]
      },
      {
        role: "Software Configuration Engineer",
        company: "DTN SL",
        meta: "Sevilla · 01/2019 — 04/2022",
        summary: "IoT, ETL y herramienta interna alrededor de ThingsBoard.",
        items: [
          { title: "Plataforma IoT y automatización", tech: "Python · Flask · ThingsBoard · SQL Server · Git", lines: [
            { t: "ThingsBoard: uso de la plataforma open-source para ETL sobre dispositivos IoT y construcción de dashboards para cliente final, extendida con una capa Flask dirigida por API." },
            { t: "Decodificadores en tiempo real, en Python, de la señal de sensores instalados en aeropuertos comerciales de varios países y en aeropuertos privados, y visor automatizado de documentos en Flask." },
            { t: "Scripts Python y procedimientos SQL para sincronizar datos entre varios servidores Windows/SQL Server." },
            { t: "Git maintainer del equipo y participación completa en el proceso Agile." }
          ]}
        ]
      },
      {
        role: "Analista / Programador",
        company: "Ayesa AT",
        meta: "Sevilla · 02/2018 — 01/2019",
        summary: "Proyectos Django y AWS para el grupo Repsol.",
        items: [
          { title: "Programa GDPR, Becas Fundación Repsol y Guía Repsol", tech: "Django · django-cms · PostgreSQL · Vue.js · AWS Lambda · Docker Compose", lines: [
            { t: "Programa GDPR para Repsol: campañas de mailing con AWS Lambda dirigidas a toda la base de clientes del grupo." },
            { t: "Becas Fundación Repsol: plataforma web Django para estudiantes en España, incluido el soporte de las actualizaciones anuales." },
            { t: "Guía Repsol: funcionalidades de Django CMS a partir de propuestas editoriales, management commands para actualizaciones masivas en PostgreSQL y soporte front con Vue.js." }
          ]}
        ]
      },
      {
        role: "IT Associate (Developer)",
        company: "Quintas Energy SL",
        meta: "Sevilla · 02/2016 — 02/2018",
        summary: "ETL de plantas solares y desarrollo sobre el ERP interno.",
        items: [
          { title: "Azure ETL y QEconnect", tech: "Azure · C# · SQL Server · Power BI · Django", lines: [
            { t: "Pipelines en Azure que recogen el dato bruto de plantas solares, procedimientos batch en C# para limpiarlo y almacenamiento en una base SQL de staging, expuesto en dashboards de Power BI." },
            { t: "QEconnect (ERP QuickBase): desarrollo dirigido por negocio y add-ons Django/Python para el ERP." },
            { t: "Premio Empleado del Mes (noviembre 2016)." }
          ]}
        ]
      }
    ]
  },
  work: {
    h2: "Proyectos destacados",
    sub: "Plataformas en producción, con usuarios reales detrás.",
    items: [
      { name: "Roadit", kind: "Logística", desc: "Transporte de vehículos de punta a punta: solicitud, planificación, seguimiento, presupuestos, facturación e incidencias. Lead de backend y responsable del despliegue.", tech: "Django REST · Celery · Kubernetes · ArgoCD · Angular" },
      { name: "Az3Oeno", kind: "Agro / Vino", desc: "Plataforma cloud-native para bodegas: fases de fermentación, inventario de barricas, trazabilidad de lotes y reporting multiidioma.", tech: "Django · PostgreSQL · AWS EC2" },
      { name: "Attendis", kind: "Educación", desc: "Gestión académica para una red de colegios: expediente centralizado, paneles de profesor y generación segura de documentos.", tech: "Django · Celery · Redis · PostgreSQL" },
      { name: "Capital Markets", kind: "Fintech", desc: "Cuantificación de la rentabilidad de inversiones sobre AWS, con ingesta de datos desde SQL Server, FTP y CSV hacia DynamoDB.", tech: "Python · AWS · DynamoDB · Terraform" },
      { name: "NEPO Open Platform", kind: "E-procurement", desc: "Registro gratuito de proveedores y avisos de oportunidades de negocio, con flujos de notificación y matching en Lambda.", tech: "Node.js · React · AWS Lambda" },
      { name: "Plataforma IoT (DTN)", kind: "IoT / Datos", desc: "ETL sobre dispositivos IoT y dashboards para cliente final, ampliados con una capa API en Flask y decodificadores de señal en tiempo real.", tech: "Python · Flask · ThingsBoard" }
    ]
  },
  diff: {
    h2: "Un solo interlocutor para el alcance, la arquitectura y el despliegue.",
    pillars: [
      { n: "01", title: "Entrega y equipo", body: "Roadmap, estimación de esfuerzo, definición de alcance, presupuesto y coordinación de releases. Supervisión técnica y revisión de código, en Agile/Scrum." },
      { n: "02", title: "Arquitectura backend", body: "Django y DRF, microservicios, diseño orientado a eventos, integraciones con terceros y procesamiento asíncrono con Celery y Redis." },
      { n: "03", title: "Producción real", body: "Contenedores, Kubernetes y ArgoCD con flujo GitOps: promoción de entornos, rollbacks controlados y despliegue de extremo a extremo." }
    ]
  },
  skills: {
    h2: "Stack",
    groups: [
      { name: "Liderazgo y entrega", items: "Gestión de proyecto, liderazgo técnico, supervisión de equipo y revisión de código, Agile/Scrum, estimación de esfuerzo, definición de alcance, presupuestos, relación con cliente" },
      { name: "Lenguajes", items: "Python (avanzado), JavaScript, SQL, C#, Node.js" },
      { name: "Backend", items: "Django, Django REST Framework, Flask, FastAPI" },
      { name: "Frontend", items: "Angular, React, Vue.js, jQuery, HTML5, CSS3" },
      { name: "Cloud y DevOps", items: "Kubernetes, ArgoCD (GitOps), Docker y Docker Compose, AWS (Lambda, EC2, DynamoDB), Azure, Terraform (IaC)" },
      { name: "Datos y asíncrono", items: "PostgreSQL, SQL Server, DynamoDB, Redis, Celery, pipelines ETL" },
      { name: "Arquitectura", items: "Microservicios, APIs REST, diseño orientado a eventos, integraciones (Google Maps Platform, APIs de terceros, feeds FTP/CSV)" },
      { name: "Prácticas y herramientas", items: "Git, GitLab, CI/CD, testing y depuración, seguridad de aplicaciones" }
    ]
  },
  talks: {
    h2: "Charlas y conferencias",
    sub: "Sesiones sobre hacking ético y herramientas para penetración en entornos empresariales.",
    items: [
      { title: "Kung Fu Python: Hacking with Python", where: "Taller · SecAdmin 2019, Sevilla" },
      { title: "Explota explótame exploí: Hacking with Empire", where: "BitUP 2019 (Univ. Alicante) · ETSII 2019 (Univ. Sevilla)" },
      { title: "A Gentle Intro to Social Engineering", where: "Ronda de Hacking · Meetup Hacking Sevilla, 11/2019" },
      { title: "Introducción a desarrollar tus propias herramientas de hacking", where: "SecAdmin 2018, Sevilla" }
    ]
  },
  edu: {
    h2: "Formación y certificaciones",
    langs: "Idiomas: español (nativo) · inglés (competencia profesional).",
    interests: "Intereses: gimnasio y pádel, juegos de mesa y cartas, música electrónica y festivales.",
    items: [
      { title: "Máster en Ciberseguridad", meta: "Universidad de Sevilla · 2017—2018" },
      { title: "Grado en Ingeniería del Software", meta: "Universidad de Sevilla · 2010—2014" },
      { title: "Scrum Master & ITIL v3", meta: "Ayesa AT / Axelos · 2017—2018" },
      { title: "Desarrollo y administración de Oracle Database", meta: "Universidad de Sevilla · 2011" },
      { title: "Grado Superior en Desarrollo de Sistemas Informáticos", meta: "Salesianos de San Pedro, Triana · 2008—2010" }
    ]
  },
  contact: {
    eyebrow: "Contacto",
    h2: "¿Tienes un proyecto o una vacante?",
    body: "Escríbeme y hablamos de alcance, plazos y cómo encajarlo. Respondo a propuestas freelance y a ofertas de PM o backend senior.",
    mail: "Escríbeme",
    foot: "Disponible para proyectos y conversaciones"
  }
};
