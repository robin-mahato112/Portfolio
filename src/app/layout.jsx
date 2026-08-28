import './globals.css';
import { defaultMetadata } from '../lib/seo';

export const metadata = defaultMetadata;

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('portfolio-theme');if(t!=='light'&&t!=='dark'){t='dark'}document.documentElement.dataset.theme=t}catch(e){document.documentElement.dataset.theme='dark'}})()`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
