import './globals.css';
import { defaultMetadata } from '../lib/seo';

export const metadata = defaultMetadata;

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
