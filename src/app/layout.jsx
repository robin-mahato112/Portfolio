import './globals.css';

const siteUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : 'https://robin-mahato112.github.io/Portfolio';

const title = 'Robin Mahato | Bachelor of IT Student | Full-Stack Developer | AI Hackathon Winner';
const description =
  'Portfolio of Robin Mahato, a Bachelor of Information Technology student building full-stack, AI, and cloud-ready projects including BudgetBrain AI and hackathon-winning solutions.';

export const metadata = {
  metadataBase: new URL(siteUrl),
  title,
  description,
  icons: {
    icon: '/favicon.svg',
  },
  openGraph: {
    title,
    description,
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
    title,
    description,
    images: ['/og-image.svg'],
  },
};

const themeScript = `
(function () {
  try {
    var saved = localStorage.getItem('portfolio-theme');
    var preferred = window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
    document.documentElement.dataset.theme = saved || preferred;
  } catch (error) {
    document.documentElement.dataset.theme = 'dark';
  }
})();
`;

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}