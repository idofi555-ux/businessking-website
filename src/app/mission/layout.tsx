import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Our Mission — The King of Connections',
  description:
    'Discover the mission of Business King: Connecting People, Services, Ideas, and the Future. We bridge the gap between ambition and achievement.',
  openGraph: {
    title: 'Our Mission | Business King',
    description: 'Connecting People, Services, Ideas, and the Future.',
    images: [{ url: '/api/og?title=Our+Mission', width: 1200, height: 630 }],
  },
};

export default function MissionLayout({ children }: { children: React.ReactNode }) {
  return children;
}
