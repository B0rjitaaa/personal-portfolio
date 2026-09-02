// ─────────────────────────────────────────────────────────────
// CONTENIDO EN INGLÉS. La versión española está en es.js y tiene
// exactamente la misma estructura: si añades algo aquí, añádelo allí.
// ─────────────────────────────────────────────────────────────

export default {
  lang: 'en',

  meta: {
    title: 'Borja Manuel Merchán — Project Manager & Senior Python/Django Engineer',
    description:
      'Project Manager and Senior Python/Django engineer with 10 years of experience taking web platforms from the first client conversation to production.',
  },

  nav: {
    profile: 'Profile',
    skills: 'Skills',
    experience: 'Experience',
    education: 'Education',
    talks: 'Talks',
    contact: 'Contact',
  },

  hero: {
    role: 'Project Manager · Senior Python / Django Engineer',
    location: 'Seville, Spain',
    badge: 'Open to new opportunities',
  },

  profile: {
    heading: 'Profile',
    body: 'Project Manager and Senior Python/Django engineer with 10 years of experience taking web platforms from the first client conversation to production. I lead small delivery teams and stay hands-on: backend architecture, REST APIs, third-party integrations, async processing and end-to-end deployment on Kubernetes with a GitOps workflow (ArgoCD). Used to owning scope, estimates and budgets while keeping technical quality and delivery dates aligned.',
  },

  skills: {
    heading: 'Core skills',
    groups: [
      {
        label: 'Leadership & delivery',
        items: [
          'Project management',
          'Technical leadership',
          'Team supervision & code review',
          'Agile / Scrum',
          'Effort estimation',
          'Scope definition',
          'Budgeting',
          'Client engagement',
        ],
      },
      {
        label: 'Languages',
        items: ['Python (advanced)', 'JavaScript', 'SQL', 'C#', 'Node.js'],
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
        label: 'Cloud & DevOps',
        items: [
          'Kubernetes',
          'ArgoCD (GitOps)',
          'Docker & Docker Compose',
          'AWS (Lambda, EC2, DynamoDB)',
          'Azure',
          'Terraform (IaC)',
        ],
      },
      {
        label: 'Data & async',
        items: ['PostgreSQL', 'SQL Server', 'DynamoDB', 'Redis', 'Celery', 'ETL pipelines'],
      },
      {
        label: 'Architecture',
        items: [
          'Microservices',
          'REST APIs',
          'Event-driven design',
          'Google Maps Platform',
          'Third-party APIs',
          'FTP / CSV feeds',
        ],
      },
      {
        label: 'Practices & tools',
        items: ['Git', 'GitLab', 'CI/CD', 'Testing & debugging', 'Application security'],
      },
    ],
  },

  experience: {
    heading: 'Professional experience',
    jobs: [
      {
        role: 'Project Manager & Senior Python Engineer',
        company: 'Bluumi App SL',
        location: 'Seville, Spain',
        period: '08/2024 – Present',
        summary:
          'Delivery lead across three product teams: roadmap and estimation, solution design, hands-on backend development and release ownership.',
        projects: [
          {
            name: 'Roadit',
            note: 'vehicle transport platform (roadit.ai)',
            url: 'https://roadit.ai',
            bullets: [
              'Technology platform that coordinates vehicle transport from the initial request to final delivery, connecting dealerships and fleets with a network of independent drivers across Spain.',
              'Backend lead: designed and built the Django REST APIs for transport planning, tracking, quotes, invoicing and incident management.',
              'Integrated Google Maps Platform for routing and geolocation, plus notifications and asynchronous task processing with Celery and Redis.',
              'Owned the deployment of the whole platform: containerised services released to Kubernetes clusters through ArgoCD (GitOps), with environment promotion and controlled rollbacks.',
              'Evolved the Angular administration panel used for day-to-day operations by the operations team.',
              'Technical supervision of the development team: architecture decisions, code review and release coordination.',
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
            note: 'cloud-native platform for wine production and barrel management',
            bullets: [
              'Solution designer and full-stack developer for a platform used by oenological facilities: fermentation phase management, barrel inventory, batch traceability, reporting and multilingual support for international wineries.',
            ],
            tech: ['Django', 'PostgreSQL', 'JavaScript', 'HTML/CSS', 'AWS EC2'],
          },
          {
            name: 'Attendis',
            note: 'education management platform for a private school network',
            bullets: [
              'Technical lead and backend architect in a team of 5, for a network operating across several regions.',
              'Academic tracking, centralised student records, teacher dashboards, custom reporting and secure document generation (grades, attendance, certificates).',
            ],
            tech: ['Django', 'PostgreSQL', 'Celery', 'Redis', 'JavaScript (jQuery)', 'HTML/CSS'],
          },
          {
            name: 'Client & project engagement',
            bullets: [
              'Active in early-stage client discussions: technical guidance, tailored proposals, effort estimation, scope definition and alignment of project budgets with both client needs and internal delivery capacity.',
            ],
          },
        ],
      },
      {
        role: 'Senior Python Engineer',
        company: 'Version 1 SL',
        location: 'Málaga, Spain',
        period: '04/2022 – 08/2024',
        projects: [
          {
            name: 'NEPO Open Platform',
            note: 'e-procurement',
            bullets: [
              'Back-end development in Node.js and React component development for a platform where suppliers register free of charge to receive notifications of relevant business opportunities.',
              'Development of AWS Lambda functions supporting the notification and matching flows.',
            ],
            tech: ['Node.js', 'React', 'AWS Lambda'],
          },
          {
            name: 'Capital Markets',
            note: 'investment profitability platform',
            bullets: [
              'Web platform built on AWS components to quantify the profitability of investments.',
              'Python scripts to obtain raw data from several sources (SQL Server, FTP, CSV) and synthesise it as final data in DynamoDB.',
              'Endpoint development and configuration to trigger specific AWS resources; Terraform (IaC) to define deployable components.',
            ],
            tech: ['Python', 'AWS', 'DynamoDB', 'SQL Server', 'Terraform'],
          },
        ],
      },
      {
        role: 'Software Configuration Engineer',
        company: 'DTN SL',
        location: 'Seville, Spain',
        period: '01/2019 – 04/2022',
        bullets: [
          'ThingsBoard: use of the open-source platform for ETL over IoT devices to build dashboards for final customers, extended with an API-driven Flask layer to add functionality to the client software.',
          'Real-time sensor signal decoders written in Python and an automated document viewer built in Flask.',
          'Python scripts and SQL procedures to synchronise data across several Windows/SQL Servers.',
          'Git maintainer for the team; full participation in the Agile software development process.',
        ],
        tech: ['Python', 'Flask', 'ThingsBoard', 'SQL Server', 'Git'],
      },
      {
        role: 'Analyst / Programmer',
        company: 'Ayesa AT',
        location: 'Seville, Spain',
        period: '02/2018 – 01/2019',
        bullets: [
          'GDPR programme for Repsol: AWS Lambda mailing campaigns addressed to the whole customer base of the Repsol group.',
          'Becas Fundación Repsol: Django web platform for students in Spain, including customer support around the yearly updates.',
          'Guía Repsol: Django CMS features built from editorial proposals, Django management commands for batch updates on PostgreSQL and front-end support with Vue.js.',
          'GitLab and ServiceNow task planning; Docker & Docker Compose for daily local development (django-cms, PostgreSQL, Nginx, Redis).',
        ],
        tech: ['Django', 'django-cms', 'Vue.js', 'AWS Lambda', 'PostgreSQL', 'Docker'],
      },
      {
        role: 'IT Associate (Developer)',
        company: 'Quintas Energy SL',
        location: 'Seville, Spain',
        period: '02/2016 – 02/2018',
        bullets: [
          'Azure ETL: pipelines gathering raw data from solar plants, C# batch procedures to clean it and storage in a staging SQL database, surfaced as Power BI dashboards.',
          'QEconnect (QuickBase ERP): business-driven development and Django/Python add-ons for the ERP.',
          'Employee of the Month award (November 2016).',
        ],
        tech: ['Azure', 'C#', 'SQL Server', 'Power BI', 'Django'],
      },
    ],
  },

  education: {
    heading: 'Education & certifications',
    items: [
      { title: 'MSc in Cybersecurity', place: 'Universidad de Sevilla', period: '2017 – 2018' },
      { title: 'BSc in Software Engineering', place: 'Universidad de Sevilla', period: '2010 – 2014' },
      { title: 'Scrum Master & ITIL v3', place: 'Ayesa AT / Axelos', period: '2017 – 2018' },
      {
        title: 'Oracle Database development & management',
        place: 'Universidad de Sevilla',
        period: '2011',
      },
      {
        title: 'Higher Certification in Computer Systems Development',
        place: 'Salesianos de San Pedro, Triana',
        period: '2008 – 2010',
      },
    ],
  },

  talks: {
    heading: 'Conferences & talks',
    items: [
      { title: 'Kung Fu Python: Hacking with Python', note: 'Workshop · SecAdmin 2019, Seville' },
      {
        title: 'Explota explótame exploí: Hacking with Empire',
        note: 'BitUP 2019 (Univ. de Alicante) and ETSII 2019 (Univ. de Sevilla)',
      },
      {
        title: 'A Gentle Intro to Social Engineering',
        note: 'Ronda de Hacking, Meetup Hacking Sevilla · November 2019',
      },
      {
        title: 'Introduction to Developing Your Own Tools for Hacking',
        note: 'SecAdmin 2018, Seville',
      },
    ],
  },

  languagesSection: {
    heading: 'Languages & interests',
    languages: { label: 'Languages', value: 'Spanish (native) · English (professional working proficiency)' },
    interests: {
      label: 'Interests',
      value: 'Gym and padel, board and card games, electronic music and festivals.',
    },
  },

  contact: {
    heading: 'Contact',
    body: 'Happy to talk about backend architecture, delivery or a platform you want to get into production. I usually reply within 24 hours.',
  },

  footer: 'Built with Astro · Deployed on GitHub Pages',
  switchTo: 'Ver en español',
};
