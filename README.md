# Robin Mahato Portfolio

A frontend-only React/Vite portfolio foundation for IT and software roles. The design uses a polished vertical single-page flow where sections stay calm by default and light up on hover or focus.

## Tech stack

- React
- Vite
- CSS
- Vercel static deployment

## Features

- Sticky navbar with smooth section links
- Reusable `SectionWrapper` for dim-by-default section behaviour
- Responsive dark theme
- Project cards with local image placeholders
- Data-driven skills and projects
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

## Vercel deployment

Use these settings:

- Build Command: `npm run build`
- Output Directory: `dist`

No backend, paid APIs, or environment variables are required.