# Robin Mahato Portfolio

A responsive developer portfolio built with Next.js, TinaCMS and a static Vercel deployment. Verified portfolio content can be maintained through a private editor without changing React code.

## Technology stack

- Next.js App Router and React
- JavaScript with data-driven content modules
- Tailwind CSS tooling and custom CSS design tokens
- Static HTML export for Vercel
- TinaCMS with GitHub-backed JSON content and repository media
- GitHub Actions for lint, tests and production builds

## Local setup

Requirements: Node.js 20 or later and npm.

```bash
npm ci
npm run dev
```

Open `http://localhost:3000` while the development server is running.
The local content editor is available at `http://localhost:3000/admin/index.html`.

## Commands

```bash
npm run lint
npm test
npm run build
```

The production build is statically exported to `out/`.

## Content editor

- `content/portfolio.json`: the source of truth for editable portfolio content
- `tina/config.js`: editor fields, collections and repository media configuration
- `public/uploads/`: certificate images, PDFs and proof documents uploaded by Tina
- `src/lib/seo.js`: canonical URL and social metadata
- `public/resume.pdf`: downloadable resume

The editor supports projects, proof highlights, experience, skill groups, education, certifications, PDFs/images, custom topic sections and contact copy. Omit details that cannot be supported by the resume or project source.

For production editing, create a TinaCloud project connected to `robin-mahato112/Portfolio` and configure these Vercel environment variables:

```text
NEXT_PUBLIC_TINA_CLIENT_ID
TINA_TOKEN
```

Then rebuild the deployment. The editor is available at `https://robinm.online/admin/index.html`; publishing commits the updated JSON and uploaded media to GitHub, triggering Vercel.

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

The public site remains static. TinaCloud credentials are build-time variables used by the private editor and content API.
