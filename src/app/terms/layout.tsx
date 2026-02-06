import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'Business King Holdings Limited Terms and Conditions. Read our terms of service before using our website and services.',
  openGraph: {
    title: 'Terms & Conditions | Business King',
    description: 'Read the terms and conditions for using Business King services.',
  },
};

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
