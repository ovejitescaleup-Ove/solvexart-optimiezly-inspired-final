import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://solvexart.com'),
  title: 'Solvexart — Digital Marketing Agency',
  description: 'Strategy, advertising, search and data for measurable growth.',
  applicationName: 'Solvexart',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon-48.png', sizes: '48x48', type: 'image/png' },
    ],
    apple: [{ url: '/icon-192.png', sizes: '192x192', type: 'image/png' }],
  },
  openGraph: {
    title: 'Solvexart — Digital Marketing Agency',
    description: 'Strategy, advertising, search and data for measurable growth.',
    url: 'https://solvexart.com',
    siteName: 'Solvexart',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
