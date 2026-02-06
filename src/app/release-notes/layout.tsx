import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Release Notes — Business King',
  description:
    'Version history and release notes for the Business King website. See what\u0027s new, improved, and changed.',
  openGraph: {
    title: 'Release Notes | Business King',
    description: 'Version history and changelog for Business King.',
    images: [{ url: '/api/og?title=Release+Notes', width: 1200, height: 630 }],
  },
};

export default function ReleaseNotesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
