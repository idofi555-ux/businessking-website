'use client';

import { motion } from 'framer-motion';
import { Check, Crown } from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';

const releases = [
  {
    version: 'v1.0.0',
    date: 'February 6, 2026',
    title: 'Initial Launch',
    highlights: [
      'Dark green theme with gold crown branding',
      '7 service pages (SEO, Marketing Strategy, Content & Social Media, Affiliate Marketing, PPC & Ads Arbitrage, AI Marketing Solutions, AI Technology)',
      'Full SEO optimization (meta tags, Open Graph, sitemap, JSON-LD)',
      'Mobile responsive design',
      'Contact form',
      'Security headers (CSP, HSTS, X-Frame-Options)',
    ],
  },
];

export default function ReleaseNotesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-secondary mb-5">
              Changelog
            </span>
            <h1 className="text-4xl sm:text-5xl font-semibold text-primary mb-5">
              Release <span className="text-gold">Notes</span>
            </h1>
            <p className="text-secondary text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              A record of every update, improvement, and new feature added to the
              Business King platform.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Releases */}
      <section className="py-20 sm:py-32 border-t border-[rgba(255,255,255,0.06)]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Version History"
            title="What's"
            goldText="New"
            description="Every milestone on the road to digital royalty."
          />

          <div className="space-y-12">
            {releases.map((release, idx) => (
              <motion.div
                key={release.version}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="bg-surface border border-[rgba(255,255,255,0.06)] rounded-2xl p-8 sm:p-10"
              >
                {/* Version header */}
                <div className="flex items-center gap-3 mb-2">
                  <Crown size={18} strokeWidth={1.5} className="text-gold" />
                  <span className="text-gold font-semibold text-lg">{release.version}</span>
                </div>
                <p className="text-tertiary text-sm mb-1">
                  {release.date}
                </p>
                <h3 className="text-xl sm:text-2xl font-semibold text-primary mb-6">
                  {release.title}
                </h3>

                {/* Highlights */}
                <ul className="space-y-3">
                  {release.highlights.map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <Check
                        size={14}
                        strokeWidth={2}
                        className="text-gold mt-1.5 flex-shrink-0"
                      />
                      <span className="text-secondary text-sm leading-relaxed">
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
