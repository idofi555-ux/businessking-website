'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import AnimatedCard from '@/components/AnimatedCard';

const services = [
  {
    id: 'seo',
    icon: '🔍',
    title: 'Search Engine Optimization',
    shortTitle: 'SEO',
    description:
      'Dominate search engine rankings and drive organic traffic that converts. Our comprehensive SEO strategies are tailored to your industry and competitive landscape.',
    features: [
      {
        name: 'Technical Analysis',
        desc: 'Deep-dive into your site architecture, speed, crawlability, and technical health to build a rock-solid SEO foundation.',
      },
      {
        name: 'Keyword Research',
        desc: 'Identify high-value, intent-driven keywords that your ideal customers are searching for right now.',
      },
      {
        name: 'Link Building',
        desc: 'Strategic acquisition of high-authority backlinks that boost your domain authority and search rankings.',
      },
      {
        name: 'On-Page Optimization',
        desc: 'Optimize every element of your pages — from meta tags to content structure — for maximum search visibility.',
      },
      {
        name: 'Competitor Analysis',
        desc: 'Understand your competitors\' strategies, find gaps, and capitalize on opportunities they\'re missing.',
      },
      {
        name: 'Analysis & Reporting',
        desc: 'Transparent, data-rich reports that show exactly how your SEO investment is performing and where we\'re heading.',
      },
    ],
  },
  {
    id: 'strategy',
    icon: '📊',
    title: 'Marketing Strategy & Consulting',
    shortTitle: 'Strategy & Consulting',
    description:
      'Transform your business vision into a concrete, actionable marketing roadmap. We provide the strategic insight and expertise to make every marketing dollar count.',
    features: [
      {
        name: 'Market Research',
        desc: 'Comprehensive analysis of your market landscape, audience demographics, and industry trends to inform strategic decisions.',
      },
      {
        name: 'Individual Marketing Strategy',
        desc: 'Custom-built marketing plans aligned with your unique goals, budget, and competitive position.',
      },
      {
        name: 'Strategic Consulting',
        desc: 'On-demand access to senior marketing strategists who guide your team through complex marketing challenges.',
      },
    ],
  },
  {
    id: 'content',
    icon: '✍️',
    title: 'Content & Social Media Marketing',
    shortTitle: 'Content & Social',
    description:
      'Create compelling narratives that resonate with your audience across every platform. From blog posts to viral social campaigns, we craft content that converts.',
    features: [
      {
        name: 'SMM & Management',
        desc: 'Full-service social media management across all major platforms — strategy, posting, community engagement, and growth.',
      },
      {
        name: 'Content Creation',
        desc: 'Professional copywriting, graphic design, video production, and multimedia content that tells your brand story.',
      },
      {
        name: 'Content Promotion',
        desc: 'Strategic distribution and amplification of your content to reach the right audiences at the right time.',
      },
    ],
  },
  {
    id: 'affiliate',
    icon: '🤝',
    title: 'Affiliate Marketing',
    shortTitle: 'Affiliate Marketing',
    description:
      'Build a powerful network of partners who drive revenue for your business. Our affiliate programs are designed for scalability and sustainable growth.',
    features: [
      {
        name: 'Program Strategy & Setup',
        desc: 'Design and launch affiliate programs with optimized commission structures, tracking systems, and partner portals.',
      },
      {
        name: 'Partnership Development',
        desc: 'Recruit, vet, and onboard high-quality affiliates who align with your brand values and target audience.',
      },
      {
        name: 'Performance Tracking',
        desc: 'Real-time monitoring of affiliate performance with detailed analytics, fraud prevention, and ROI optimization.',
      },
    ],
  },
  {
    id: 'ppc',
    icon: '🎯',
    title: 'PPC Ads Arbitrage',
    shortTitle: 'PPC Arbitrage',
    description:
      'Maximize your advertising ROI with precision-targeted campaigns across Google Ads, Meta, and beyond. We turn ad spend into exponential revenue.',
    features: [
      {
        name: 'Keyword Research & Targeting',
        desc: 'Identify profitable keywords and audience segments with laser-focused targeting that minimizes waste and maximizes conversions.',
      },
      {
        name: 'Ad Creatives and Copywriting',
        desc: 'Compelling ad copy and visuals that stop the scroll, capture attention, and drive clicks that convert.',
      },
      {
        name: 'Campaign Optimization & Scaling',
        desc: 'Continuous A/B testing, bid management, and scaling strategies that compound your advertising returns over time.',
      },
    ],
  },
];

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 relative">
        <div className="absolute inset-0 bg-dark-gradient" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-radial-gold opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-gold-500 bg-gold-500/10 border border-gold-500/20 mb-6">
              Our Services
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              Royal <span className="text-gold-gradient">Services</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Comprehensive digital marketing solutions engineered for businesses
              that demand excellence. Every service, fit for a king.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      {services.map((service, idx) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-20 sm:py-28 relative ${
            idx % 2 === 0 ? '' : 'bg-dark-300/30'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Left: Info */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="text-5xl mb-6">{service.icon}</div>
                <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
                  {service.title}
                </h2>
                <p className="text-gray-400 text-lg leading-relaxed mb-8">
                  {service.description}
                </p>
                <Link
                  href="/contact"
                  className="inline-block px-6 py-3 bg-gold-gradient text-dark-500 font-semibold rounded-lg hover:shadow-lg hover:shadow-gold-500/25 transition-all duration-200 hover:scale-105"
                >
                  Get Started →
                </Link>
              </motion.div>

              {/* Right: Features */}
              <div className="space-y-4">
                {service.features.map((feature, i) => (
                  <AnimatedCard key={feature.name} delay={i * 0.1} className="!p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-lg bg-gold-500/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-gold-500 text-sm font-bold">
                          {String(i + 1).padStart(2, '0')}
                        </span>
                      </div>
                      <div>
                        <h3 className="text-white font-semibold mb-2">{feature.name}</h3>
                        <p className="text-gray-400 text-sm leading-relaxed">
                          {feature.desc}
                        </p>
                      </div>
                    </div>
                  </AnimatedCard>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-24 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center glass-card rounded-3xl p-12 sm:p-16 border border-gold-500/20"
          >
            <div className="text-5xl mb-6">👑</div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Need a Custom <span className="text-gold-gradient">Solution?</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
              Every business is unique. Let&apos;s discuss a tailored strategy that
              fits your exact needs and goals.
            </p>
            <Link
              href="/contact"
              className="inline-block px-10 py-4 bg-gold-gradient text-dark-500 font-semibold rounded-xl hover:shadow-xl hover:shadow-gold-500/25 transition-all duration-300 hover:scale-105 text-lg"
            >
              Let&apos;s Talk →
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
