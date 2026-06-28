import './globals.css';
import ThemeProvider from '../components/layout/ThemeProvider';
import { defaultMetadata } from '../lib/seo';

export const metadata = defaultMetadata;

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
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}