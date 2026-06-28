# Robin Mahato Portfolio

A recruiter-ready portfolio built with Next.js static generation. The core content is rendered into HTML at build time, so recruiters, crawlers, link previews, and ATS-style tools can see meaningful content before JavaScript runs.

## Tech stack

- Next.js app router
- React
- CSS
- Static export for Vercel-ready deployment

## Features

- Static HTML content for SEO and link previews
- Strong metadata, Open Graph, Twitter card, favicon, and OG image placeholder
- Dark/light mode with localStorage persistence and an early theme script to reduce reload flash
- Sticky responsive navbar with smooth section links
- Reusable `SectionWrapper` for calm-by-default and active-on-hover sections
- Featured project cards with honest scope and no broken empty links
- Contact form UI with client-side confirmation
- Real resume document served from `public/resume.docx`
- GitHub Actions build check

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

## Vercel deployment

Import this repository in Vercel. Vercel detects Next.js automatically.

- Build Command: `npm run build`
- Output Directory: `out`

No backend, paid APIs, or environment variables are required.