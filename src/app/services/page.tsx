'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Search,
  BarChart3,
  Share2,
  Users,
  Target,
  Brain,
  Cpu,
  Check,
  ArrowRight,
  ArrowUpRight,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

const services: {
  id: string;
  icon: LucideIcon;
  title: string;
  shortTitle: string;
  description: string;
  features: { name: string; desc: string }[];
}[] = [
  {
    id: 'seo',
    icon: Search,
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
    icon: BarChart3,
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
    icon: Share2,
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
    icon: Users,
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
    icon: Target,
    title: 'PPC & Ads Arbitrage',
    shortTitle: 'PPC & Ads Arbitrage',
    description:
      'Acquire targeted traffic at lower cost and discover profitable niches through strategic ad arbitrage across Google Ads, Meta, native ad networks, and beyond.',
    features: [
      {
        name: 'Traffic Arbitrage',
        desc: 'Source high-quality traffic at lower cost through strategic arbitrage across multiple ad networks and platforms.',
      },
      {
        name: 'Ad Creatives & Copywriting',
        desc: 'Compelling ad copy and visuals that stop the scroll, capture attention, and drive clicks that convert.',
      },
      {
        name: 'Campaign Optimization & Scaling',
        desc: 'Continuous A/B testing, bid management, and scaling strategies that compound your advertising returns over time.',
      },
      {
        name: 'Niche Discovery',
        desc: 'Identify untapped profitable niches and verticals before the competition, giving you first-mover advantage.',
      },
    ],
  },
  {
    id: 'ai-marketing',
    icon: Brain,
    title: 'AI Marketing Solutions',
    shortTitle: 'AI Marketing',
    description:
      'Leverage artificial intelligence to supercharge your marketing. From predictive analytics to automated campaign optimization, AI gives you an unfair advantage.',
    features: [
      {
        name: 'Predictive Analytics',
        desc: 'AI models that forecast customer behavior, market trends, and campaign performance before you spend a dollar.',
      },
      {
        name: 'Smart Audience Targeting',
        desc: 'Machine learning algorithms that identify your ideal customers and optimize targeting in real-time across platforms.',
      },
      {
        name: 'AI Content Generation',
        desc: 'Generate high-converting ad copy, social content, and email campaigns at scale with brand-consistent AI.',
      },
      {
        name: 'Automated Optimization',
        desc: 'AI continuously monitors and adjusts bids, budgets, and targeting to maximize ROI — 24/7, no manual tweaks needed.',
      },
    ],
  },
  {
    id: 'ai-technology',
    icon: Cpu,
    title: 'AI Technology Solutions',
    shortTitle: 'AI Technology',
    description:
      'Custom AI agents, intelligent automation, and data intelligence solutions that transform how your business operates. Scalable, secure, and built to last.',
    features: [
      {
        name: 'Custom AI Agents',
        desc: 'Purpose-built AI assistants for your specific workflows — from customer service to sales enablement to internal operations.',
      },
      {
        name: 'Intelligent Automation',
        desc: 'Automate complex business processes with AI that understands context, handles exceptions, and learns from every interaction.',
      },
      {
        name: 'Data Intelligence',
        desc: 'Transform raw data into actionable insights with AI-powered analytics, pattern recognition, and predictive modeling.',
      },
      {
        name: 'AI Integration',
        desc: 'Seamlessly embed AI capabilities into your existing tech stack with APIs, webhooks, and custom integrations.',
      },
    ],
  },
];

export default function ServicesPage() {
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
              Our Services
            </span>
            <h1 className="text-4xl sm:text-5xl font-semibold text-primary mb-5">
              Our <span className="text-gold">Services</span>
            </h1>
            <p className="text-secondary text-base sm:text-lg max-w-2xl mx-auto">
              Comprehensive digital marketing and AI solutions engineered for businesses
              that demand excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services */}
      {services.map((service, idx) => (
        <section
          key={service.id}
          id={service.id}
          className={`py-24 sm:py-32 ${
            idx % 2 === 0 ? '' : 'border-y border-[rgba(255,255,255,0.06)]'
          }`}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Left: Info */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <service.icon size={24} strokeWidth={1.5} className="text-gold mb-5" />
                <h2 className="text-3xl sm:text-4xl font-semibold text-primary mb-4">
                  {service.title}
                </h2>
                <p className="text-secondary text-base leading-relaxed mb-8">
                  {service.description}
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 px-6 py-2.5 bg-gold text-background font-medium rounded-lg hover:bg-gold-600 transition-colors duration-200 text-sm"
                >
                  Get Started
                  <ArrowRight size={14} strokeWidth={2} />
                </Link>
              </motion.div>

              {/* Right: Features */}
              <div className="space-y-4">
                {service.features.map((feature, i) => (
                  <motion.div
                    key={feature.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-50px' }}
                    transition={{ duration: 0.5, delay: i * 0.06 }}
                    className="bg-surface border border-[rgba(255,255,255,0.06)] rounded-xl p-6 transition-all duration-200 hover:border-[rgba(255,255,255,0.12)]"
                  >
                    <div className="flex items-start gap-4">
                      <Check size={16} strokeWidth={2} className="text-gold mt-1 flex-shrink-0" />
                      <div>
                        <h3 className="text-primary font-medium mb-1 text-sm">{feature.name}</h3>
                        <p className="text-tertiary text-sm leading-relaxed">
                          {feature.desc}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="py-32 sm:py-40">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-semibold text-primary mb-5">
              Need a Custom <span className="text-gold">Solution?</span>
            </h2>
            <p className="text-secondary text-base sm:text-lg mb-8 max-w-xl mx-auto">
              Every business is unique. Let&apos;s discuss a tailored strategy that
              fits your exact needs and goals.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-gold text-background font-medium rounded-lg hover:bg-gold-600 transition-colors duration-200"
            >
              Let&apos;s Talk
              <ArrowUpRight size={16} strokeWidth={2} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
