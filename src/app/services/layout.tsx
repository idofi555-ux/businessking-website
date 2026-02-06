import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services — SEO, PPC, Affiliate Marketing & More',
  description:
    'Explore Business King\'s full suite of digital marketing services: SEO, Marketing Strategy, Content & Social Media Marketing, Affiliate Marketing, and PPC Ads Arbitrage.',
  openGraph: {
    title: 'Services | Business King',
    description:
      'Comprehensive digital marketing services designed to build your empire. SEO, PPC, affiliate marketing, and strategic consulting.',
    images: [{ url: '/api/og?title=Our+Services', width: 1200, height: 630 }],
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
