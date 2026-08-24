# Robin Mahato Portfolio

A responsive developer portfolio built with Next.js and deployed as a static site. It presents verified experience, education, projects and contact information in a terminal-inspired interface.

## Technology stack

- Next.js App Router and React
- JavaScript with data-driven content modules
- Tailwind CSS tooling and custom CSS design tokens
- Static HTML export for Vercel
- GitHub Actions for lint, tests and production builds

## Local setup

Requirements: Node.js 20 or later and npm.

```bash
npm ci
npm run dev
```

Open `http://localhost:3000` while the development server is running.

## Commands

```bash
npm run lint
npm test
npm run build
```

The production build is statically exported to `out/`.

## Content structure

- `src/data/profile.js`: name, positioning and profile links
- `src/data/resumeData.js`: verified experience and education
- `src/data/projects.js`: project descriptions, scope, technology and links
- `src/data/skills.js`: concise skill groups
- `src/lib/seo.js`: canonical URL and social metadata
- `public/resume.pdf`: downloadable resume

Update data modules rather than embedding new claims directly in presentation components. Omit details that cannot be supported by the resume or project source.

## Accessibility

- Semantic headings and stable section IDs
- Keyboard-operable navigation with Escape-to-close on mobile
- Visible focus indicators and accessible names for compact controls
- Decorative elements hidden from assistive technology
- Reduced-motion support
- Dark and light themes with local preference persistence

## Deployment

The site is connected to Vercel at `https://robinm.online`.

- Build command: `npm run build`
- Output directory: `out`
- Framework: Next.js

Pushes to `main` run GitHub Actions. A production deployment can also be created from the repository directory with:

```bash
npx vercel --prod
```

No backend, database, secrets or runtime environment variables are required for this portfolio.
