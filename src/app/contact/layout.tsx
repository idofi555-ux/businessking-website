import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact Us — Get in Touch',
  description:
    'Contact Business King Holdings Limited. Located at 306 Victoria House, Victoria, Mahe, Seychelles. Email: contact@businesskingonline.com',
  openGraph: {
    title: 'Contact Us | Business King',
    description: 'Get in touch with Business King. Let\'s discuss how we can help your business grow.',
    images: [{ url: '/api/og?title=Contact+Us', width: 1200, height: 630 }],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
