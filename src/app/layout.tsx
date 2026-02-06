import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  metadataBase: new URL('https://businesskingonline.com'),
  title: {
    default: 'Business King — The King of Connections | Digital Marketing Agency',
    template: '%s | Business King',
  },
  description:
    'Business King is a premier digital marketing agency specializing in SEO, PPC, affiliate marketing, content marketing, and strategic consulting. The King of Connections.',
  keywords: [
    'digital marketing',
    'SEO',
    'PPC',
    'affiliate marketing',
    'content marketing',
    'strategic consulting',
    'Business King',
    'marketing agency',
  ],
  authors: [{ name: 'Business King Holdings Limited' }],
  creator: 'Business King Holdings Limited',
  publisher: 'Business King Holdings Limited',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://businesskingonline.com',
    siteName: 'Business King',
    title: 'Business King — The King of Connections',
    description:
      'Premier digital marketing agency specializing in SEO, PPC, affiliate marketing, content marketing, and strategic consulting.',
    images: [
      {
        url: '/api/og',
        width: 1200,
        height: 630,
        alt: 'Business King — The King of Connections',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Business King — The King of Connections',
    description:
      'Premier digital marketing agency specializing in SEO, PPC, affiliate marketing, content marketing, and strategic consulting.',
    images: ['/api/og'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/favicon.svg',
    apple: '/favicon.svg',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Business King Holdings Limited',
              url: 'https://businesskingonline.com',
              logo: 'https://businesskingonline.com/favicon.svg',
              description:
                'Business King is a premier digital marketing agency specializing in SEO, PPC, affiliate marketing, content marketing, and strategic consulting.',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '306 Victoria House',
                addressLocality: 'Victoria',
                addressRegion: 'Mahe',
                addressCountry: 'SC',
              },
              contactPoint: {
                '@type': 'ContactPoint',
                email: 'contact@businesskingonline.com',
                contactType: 'customer service',
              },
              sameAs: [],
            }),
          }}
        />
      </head>
      <body className={`${inter.className} bg-dark-500 text-gray-200 antialiased`}>
        <Navigation />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
