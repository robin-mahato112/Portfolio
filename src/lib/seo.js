export const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : 'https://robin-mahato112.github.io/Portfolio';

export const siteTitle = 'Robin Mahato | Full-Stack Developer & AI Hackathon Winner';

export const siteDescription =
  'Portfolio of Robin Mahato, a Bachelor of Information Technology student building full-stack, AI, and cloud-ready projects including BudgetBrain AI and hackathon-winning solutions.';

export const defaultMetadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    type: 'website',
    url: siteUrl,
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'Robin Mahato developer portfolio preview',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: siteTitle,
    description: siteDescription,
    images: ['/og-image.svg'],
  },
  robots: {
    index: true,
    follow: true,
  },
};