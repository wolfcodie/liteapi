import type { Metadata } from 'next';
import './globals.css';
import { Footer, Navbar } from '@/components';

export const metadata: Metadata = {
  title: 'liteAPI | The fastest way to build travel apps',
  description: 'liteAPI | The fastest way to build travel apps',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <link rel='icon' href='/favicon.png' type='image/png' />

      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
