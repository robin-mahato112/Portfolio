# Robin Mahato Portfolio

Enterprise-grade personal developer portfolio for Robin Mahato, built as a recruiter-ready static Next.js site.

## Tech stack

- Next.js app router
- React
- Tailwind CSS tooling plus custom CSS design tokens
- JavaScript
- Vercel deployment
- GitHub Actions CI

## Features

- Static/server-rendered content visible before JavaScript executes
- SEO metadata, Open Graph, Twitter card, favicon, robots, sitemap, and OG image placeholder
- Dark/light mode with localStorage persistence and early theme application
- Enterprise-style vertical section flow with reusable `SectionShell`
- Featured project case studies with honest scope and no broken empty buttons
- Data-driven profile, links, projects, skills, journey, build process, and achievements
- Accessible semantic layout, keyboard focus states, safe external links, and responsive mobile nav

## Local setup

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

The static export is written to `out/`.

## Deployment notes

Deploy on Vercel with the default Next.js settings.

- Build Command: `npm run build`
- Output Directory: `out`

No backend, paid APIs, secrets, or environment variables are required.

## CI/CD notes

GitHub Actions runs:

- `npm ci`
- `npm run lint --if-present`
- `npm run build`

## SEO notes

Core content is statically rendered into HTML for recruiters, crawlers, ATS-style tools, and link previews. Replace the fallback `siteUrl` in `src/lib/seo.js` with the final production domain when deployed.