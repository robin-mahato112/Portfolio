export const projects = [
  {
    title: 'BudgetBrain',
    badge: 'Featured full-stack project',
    built:
      'A full-stack financial behaviour and payday-planning application that turns simulated balances, income and protected costs into safe-to-spend guidance and money-pressure analysis.',
    scope: [
      'Deterministic safe-to-spend, protected-money and recovery-gap calculations',
      'JWT authentication, bcrypt password hashing and Zod validation',
      'CSV transaction import, affordability checks and recovery scenarios',
      'Groq AI explains backend results without calculating financial truth',
    ],
    tech: ['React 18', 'Vite', 'Node.js', 'Express', 'PostgreSQL', 'Prisma', 'Vitest', 'Supertest'],
    status: 'Simulated financial scenarios; no real bank integration.',
    links: [{ label: 'GitHub', href: 'https://github.com/robin-mahato112/budgetbrain' }],
  },
  {
    title: 'DirectSend',
    badge: 'Peer-to-peer CLI',
    built:
      'A TypeScript and Node.js command-line tool that streams files directly between peers over WebRTC DataChannels while a small WebSocket server relays connection metadata.',
    scope: [
      'Streaming transfers with progress reporting and bounded backpressure',
      'SHA-256 integrity verification and local filename sanitisation',
      'Token-based rooms with expiry, duplicate-room and peer-limit handling',
      'Two-workspace monorepo with automated Node tests',
    ],
    tech: ['TypeScript', 'Node.js', 'WebRTC', 'WebSockets', 'SHA-256', 'Node test runner'],
    status: 'No identity management, transfer resumption or bundled TURN credentials.',
    links: [{ label: 'GitHub', href: 'https://github.com/robin-mahato112/Secured-P2P-file-transfer-CLI' }],
  },
  {
    title: 'FleetWise',
    badge: 'First place - Innovate for Impact',
    built:
      'An AI-assisted fleet-management prototype created for HealthWISE during NGM Group\'s two-day Innovate for Impact Hackathon on 12-13 May 2026.',
    scope: [
      'Collaborated within a six-person team under a fixed event deadline',
      'Centralised fragmented vehicle booking and record-keeping workflows',
      'Helped shape and present a practical solution for a regional not-for-profit',
      'Achieved first place in an event involving more than 200 technology participants',
    ],
    tech: ['Applied AI', 'Rapid prototyping', 'Team delivery', 'Product presentation'],
    status: 'Hackathon prototype built for HealthWISE; first-place team result.',
    links: [
      {
        label: 'Event article',
        href: 'https://hunterheadline.com.au/article/ngm-group-hackathon-delivers-digital-solutions-for-regional-charities',
      },
    ],
  },
  {
    title: 'UniX Course Enrolment System',
    badge: 'University project',
    built:
      'A server-rendered Java course-enrolment system covering authentication, semester selection and enrolment workflows with clear server-side validation.',
    scope: [
      'MVC and DAO structure with connection pooling',
      'Prepared statements and bcrypt password hashing',
      'Prerequisite, capacity and study-load business rules',
      'Authenticated sessions, HTTPS and server-side validation',
    ],
    tech: ['Java', 'Servlets', 'JSP', 'MySQL', 'MVC', 'DAO'],
    status: 'Private university project; no public repository.',
    links: [],
  },
];
