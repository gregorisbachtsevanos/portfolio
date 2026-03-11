import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { Toaster } from '@/components/ui/toaster';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Nikos Georgopoulos - Full-Stack Software Engineer',
  description: 'Freelance Full-Stack Software Engineer specializing in building scalable web applications, REST APIs, and modern React frontends. Based in Greece.',
  openGraph: {
    title: 'Nikos Georgopoulos - Full-Stack Software Engineer',
    description: 'Building scalable web applications and APIs for startups and businesses',
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nikos Georgopoulos - Full-Stack Software Engineer',
    description: 'Building scalable web applications and APIs for startups and businesses',
    images: [
      {
        url: 'https://bolt.new/static/og_default.png',
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <body className={inter.className}>
        {children}
        <Toaster />
      </body>
    </html>
  );
}
