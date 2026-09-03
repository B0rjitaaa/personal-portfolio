// ─────────────────────────────────────────────────────────────
// CONTENIDO EN INGLÉS. Se sirve en la raíz "/".
// La versión española (es.js) tiene exactamente la misma estructura:
// si añades algo aquí, añádelo allí.
// ─────────────────────────────────────────────────────────────

export default {
  lang: 'en',
  meta: {
    title: 'Borja Manuel Merchán — Project Manager & Senior Python/Django Engineer',
    description:
      'Project Manager and senior Python/Django engineer based in Seville. 10 years taking web platforms from the first client conversation to production.',
  },

  nav: { about: "About", experience: "Experience", work: "Work", skills: "Stack", talks: "Talks", contact: "Contact", cta: "Get in touch" },
  hero: {
    eyebrow: "Project Manager · Senior Python / Django",
    h1: "From scope to production.",
    lede: "I combine project leadership with hands-on backend development, on current technology and with a focus on delivery.",
    primary: "See work",
    secondary: "Contact me",
    facts: [
      { k: "Based in", v: "Seville, Spain" },
      { k: "Now", v: "Bluumi App SL" },
      { k: "Experience", v: "10 years" },
      { k: "Focus", v: "Django · APIs · Kubernetes" }
    ]
  },
  about: {
    label: "Profile",
    h2: "",
    lead: "I'm a Project Manager and senior Python/Django engineer.",
    blocks: [
      { intro: "I work from the first client conversation through to deployment:", items: [
        { t: "solution design" }, { t: "backend architecture" }, { t: "REST APIs" },
        { t: "third-party integrations" }, { t: "async processing" },
        { t: "end-to-end release on Kubernetes with a GitOps workflow (ArgoCD)" }
      ]},
      { intro: "I lead small delivery teams and supervise them technically:", items: [
        { t: "architecture decisions" }, { t: "code review" }, { t: "release coordination" }
      ]}
    ],
    close: "I'm used to keeping technical quality and delivery dates aligned."
  },
  exp: {
    h2: "Experience",
    sub: "",
    jobs: [
      {
        role: "Project Manager & Senior Python Engineer",
        company: "Bluumi App SL",
        meta: "Seville · 08/2024 — Present",
        summary: "Delivery lead across three product teams: roadmap and estimation, solution design, hands-on backend development and release ownership.",
        items: [
          { title: "Roadit — vehicle transport platform (roadit.ai)", tech: "Django REST Framework · PostgreSQL · Celery · Redis · Angular · Google Maps Platform · Docker · Kubernetes · ArgoCD", lines: [
            { t: "Technology platform that coordinates vehicle transport from the initial request to final delivery, connecting dealerships and fleets with a network of independent drivers across Spain." },
            { t: "Backend lead: designed and built the Django REST APIs for transport planning, tracking, quotes, invoicing and incident management." },
            { t: "Integrated Google Maps Platform for routing and geolocation, plus notifications and asynchronous task processing with Celery and Redis." },
            { t: "Owned the deployment of the whole platform: containerised services released to Kubernetes clusters through ArgoCD (GitOps), with environment promotion and controlled rollbacks." },
            { t: "Evolved the Angular administration panel used day to day by the operations team." }
          ]},
          { title: "Az3Oeno — cloud-native platform for wine production and barrel management", tech: "Django · PostgreSQL · JavaScript · HTML/CSS · AWS EC2", lines: [
            { t: "Solution designer and full-stack developer for oenological facilities: fermentation phase management, barrel inventory, batch traceability, reporting and multilingual support for international wineries." }
          ]},
          { title: "Attendis — education management for a private school network", tech: "Django · PostgreSQL · Celery · Redis · React", lines: [
            { t: "Technical lead and backend architect in a team of 5, for a network operating across several regions." },
            { t: "Academic tracking, centralised student records, custom reporting and secure document generation (grades, attendance, certificates)." },
            { t: "Designed and implemented the teacher dashboard: attendance, student assessment, parent tutoring appointments and day-to-day classroom tracking." },
            { t: "Secretariat dashboard for each school's internal operations: bus routes with student pickup by stop, enrolment and promotion between school years, and administrative paperwork." }
          ]},
          { title: "Client & project engagement", tech: "", lines: [
            { t: "Active in early-stage client discussions: technical guidance, tailored proposals, effort estimation, scope definition and alignment of project budgets with internal delivery capacity." }
          ]}
        ]
      },
      {
        role: "Senior Python Engineer",
        company: "Version 1 SL",
        meta: "Málaga · 04/2022 — 08/2024",
        summary: "Backend and cloud work on AWS across two business products.",
        items: [
          { title: "NEPO Open Platform — e-procurement", tech: "Node.js · React · AWS Lambda", lines: [
            { t: "Back-end development in Node.js and React components for a platform where suppliers register free of charge to receive notifications of relevant business opportunities." },
            { t: "AWS Lambda functions supporting the notification and matching flows." }
          ]},
          { title: "Capital Markets — investment profitability platform", tech: "Python · AWS · DynamoDB · SQL Server · Terraform", lines: [
            { t: "Web platform built on AWS components to quantify the profitability of investments." },
            { t: "Python scripts to obtain raw data from several sources (SQL Server, FTP, CSV) and synthesise it as final data in DynamoDB." },
            { t: "Endpoint development and configuration to trigger specific AWS resources; Terraform (IaC) to define deployable components." }
          ]}
        ]
      },
      {
        role: "Software Configuration Engineer",
        company: "DTN SL",
        meta: "Seville · 01/2019 — 04/2022",
        summary: "IoT, ETL and internal tooling around ThingsBoard.",
        items: [
          { title: "IoT platform and automation", tech: "Python · Flask · ThingsBoard · SQL Server · Git", lines: [
            { t: "ThingsBoard: used the open-source platform for ETL over IoT devices to build dashboards for final customers, extended with an API-driven Flask layer." },
            { t: "Real-time Python decoders for the signal of sensors installed in commercial airports across several countries and in private airports, plus an automated document viewer built in Flask." },
            { t: "Python scripts and SQL procedures to synchronise data across several Windows/SQL Servers." },
            { t: "Git maintainer for the team; full participation in the Agile process." }
          ]}
        ]
      },
      {
        role: "Analyst / Programmer",
        company: "Ayesa AT",
        meta: "Seville · 02/2018 — 01/2019",
        summary: "Django and AWS projects for the Repsol group.",
        items: [
          { title: "GDPR programme, Becas Fundación Repsol and Guía Repsol", tech: "Django · django-cms · PostgreSQL · Vue.js · AWS Lambda · Docker Compose", lines: [
            { t: "GDPR programme for Repsol: AWS Lambda mailing campaigns addressed to the whole customer base of the group." },
            { t: "Becas Fundación Repsol: Django web platform for students in Spain, including support around the yearly updates." },
            { t: "Guía Repsol: Django CMS features built from editorial proposals, management commands for batch updates on PostgreSQL and front-end support with Vue.js." }
          ]}
        ]
      },
      {
        role: "IT Associate (Developer)",
        company: "Quintas Energy SL",
        meta: "Seville · 02/2016 — 02/2018",
        summary: "Solar plant ETL and development on the internal ERP.",
        items: [
          { title: "Azure ETL and QEconnect", tech: "Azure · C# · SQL Server · Power BI · Django", lines: [
            { t: "Azure pipelines gathering raw data from solar plants, C# batch procedures to clean it and storage in a staging SQL database, surfaced as Power BI dashboards." },
            { t: "QEconnect (QuickBase ERP): business-driven development and Django/Python add-ons for the ERP." },
            { t: "Employee of the Month award (November 2016)." }
          ]}
        ]
      }
    ]
  },
  work: {
    h2: "Selected work",
    sub: "Platforms in production, with real users behind them.",
    items: [
      { name: "Roadit", kind: "Logistics", desc: "End-to-end vehicle transport: request, planning, tracking, quotes, invoicing and incidents. Backend lead and owner of the deployment.", tech: "Django REST · Celery · Kubernetes · ArgoCD · Angular" },
      { name: "Az3Oeno", kind: "Agri / Wine", desc: "Cloud-native platform for wineries: fermentation phases, barrel inventory, batch traceability and multilingual reporting.", tech: "Django · PostgreSQL · AWS EC2" },
      { name: "Attendis", kind: "Education", desc: "Academic management for a school network: centralised records, teacher dashboards and secure document generation.", tech: "Django · Celery · Redis · PostgreSQL" },
      { name: "Capital Markets", kind: "Fintech", desc: "Quantifying investment profitability on AWS, ingesting data from SQL Server, FTP and CSV into DynamoDB.", tech: "Python · AWS · DynamoDB · Terraform" },
      { name: "NEPO Open Platform", kind: "E-procurement", desc: "Free supplier registration and business-opportunity notifications, with notification and matching flows on Lambda.", tech: "Node.js · React · AWS Lambda" },
      { name: "IoT platform (DTN)", kind: "IoT / Data", desc: "ETL over IoT devices and customer-facing dashboards, extended with a Flask API layer and real-time signal decoders.", tech: "Python · Flask · ThingsBoard" }
    ]
  },
  diff: {
    h2: "One person across scope, architecture and deployment.",
    pillars: [
      { n: "01", title: "Delivery & team", body: "Roadmap, effort estimation, scope definition, budgeting and release coordination. Technical supervision and code review, in Agile/Scrum." },
      { n: "02", title: "Backend architecture", body: "Django and DRF, microservices, event-driven design, third-party integrations and async processing with Celery and Redis." },
      { n: "03", title: "Real production", body: "Containers, Kubernetes and ArgoCD on a GitOps workflow: environment promotion, controlled rollbacks and end-to-end deployment." }
    ]
  },
  skills: {
    h2: "Stack",
    groups: [
      { name: "Leadership & delivery", items: "Project management, technical leadership, team supervision and code review, Agile/Scrum, effort estimation, scope definition, budgeting, client engagement" },
      { name: "Languages", items: "Python (advanced), JavaScript, SQL, C#, Node.js" },
      { name: "Backend", items: "Django, Django REST Framework, Flask, FastAPI" },
      { name: "Frontend", items: "Angular, React, Vue.js, jQuery, HTML5, CSS3" },
      { name: "Cloud & DevOps", items: "Kubernetes, ArgoCD (GitOps), Docker & Docker Compose, AWS (Lambda, EC2, DynamoDB), Azure, Terraform (IaC)" },
      { name: "Data & async", items: "PostgreSQL, SQL Server, DynamoDB, Redis, Celery, ETL pipelines" },
      { name: "Architecture", items: "Microservices, REST APIs, event-driven design, integrations (Google Maps Platform, third-party APIs, FTP/CSV feeds)" },
      { name: "Practices & tools", items: "Git, GitLab, CI/CD, testing and debugging, application security" }
    ]
  },
  talks: {
    h2: "Conferences & talks",
    sub: "Sessions on ethical hacking and tooling for penetration testing in enterprise environments.",
    items: [
      { title: "Kung Fu Python: Hacking with Python", where: "Workshop · SecAdmin 2019, Seville" },
      { title: "Explota explótame exploí: Hacking with Empire", where: "BitUP 2019 (Univ. Alicante) · ETSII 2019 (Univ. Seville)" },
      { title: "A Gentle Intro to Social Engineering", where: "Ronda de Hacking · Meetup Hacking Sevilla, 11/2019" },
      { title: "Introduction to Developing Your Own Tools for Hacking", where: "SecAdmin 2018, Seville" }
    ]
  },
  edu: {
    h2: "Education & certifications",
    langs: "Languages: Spanish (native) · English (professional working proficiency).",
    interests: "Interests: gym and padel, board and card games, electronic music and festivals.",
    items: [
      { title: "MSc in Cybersecurity", meta: "Universidad de Sevilla · 2017—2018" },
      { title: "BSc in Software Engineering", meta: "Universidad de Sevilla · 2010—2014" },
      { title: "Scrum Master & ITIL v3", meta: "Ayesa AT / Axelos · 2017—2018" },
      { title: "Oracle Database development & management", meta: "Universidad de Sevilla · 2011" },
      { title: "Higher Certification in Computer Systems Development", meta: "Salesianos de San Pedro, Triana · 2008—2010" }
    ]
  },
  contact: {
    eyebrow: "Contact",
    h2: "Got a project or a role in mind?",
    body: "Open to freelance proposals, PM, and Senior Backend roles. Reach out to discuss your project's scope, timeline, and goals to see how we can work together.",
    mail: "Write to me",
    foot: "Available for projects and conversations"
  }
};
