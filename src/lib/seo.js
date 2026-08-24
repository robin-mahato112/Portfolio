export const siteUrl = 'https://robinm.online';

export const siteTitle = 'Robin Mahato | Full-Stack Developer';

export const siteDescription =
  'Portfolio of Robin Mahato, a Bachelor of Information Technology student and full-stack developer building web, AI and systems projects with React, Node.js, TypeScript, Java and PostgreSQL.';

export const defaultMetadata = {
  metadataBase: new URL(siteUrl),
  title: siteTitle,
  description: siteDescription,
  alternates: {
    canonical: siteUrl,
  },
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
