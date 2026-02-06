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
  Crown,
  Globe,
  Zap,
  ArrowRight,
  ArrowUpRight,
} from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import AnimatedCard from '@/components/AnimatedCard';

const kingFeatures = [
  {
    title: 'King of Possibilities',
    description:
      'We open doors that others cannot see. Through innovative strategies and creative solutions, we transform potential into reality for every business we touch.',
    icon: Crown,
  },
  {
    title: 'King of Prospects',
    description:
      'We identify, nurture, and convert the highest-quality leads into loyal customers. Our data-driven approach ensures no opportunity goes unnoticed.',
    icon: Target,
  },
  {
    title: 'King of Networking',
    description:
      'We build bridges between businesses, people, and ideas. Our vast network of connections amplifies your reach and accelerates your growth.',
    icon: Globe,
  },
];

const services = [
  {
    title: 'SEO',
    description: 'Dominate search rankings with technical excellence and strategic optimization.',
    features: ['Technical Analysis', 'Keyword Research', 'Link Building'],
    icon: Search,
  },
  {
    title: 'Marketing Strategy',
    description: 'Data-driven strategies tailored to your unique business objectives.',
    features: ['Market Research', 'Strategy Development', 'Consulting'],
    icon: BarChart3,
  },
  {
    title: 'Content & Social Media',
    description: 'Engaging content that captivates audiences and drives conversions.',
    features: ['Content Creation', 'Social Management', 'Promotion'],
    icon: Share2,
  },
  {
    title: 'Affiliate Marketing',
    description: 'Build profitable partnerships that scale your revenue streams.',
    features: ['Program Setup', 'Partner Development', 'Tracking'],
    icon: Users,
  },
  {
    title: 'PPC & Ads Arbitrage',
    description: 'Acquire targeted traffic at lower cost and discover profitable niches through strategic ad arbitrage.',
    features: ['Traffic Arbitrage', 'Campaign Scaling', 'ROI Optimization'],
    icon: Target,
  },
  {
    title: 'AI Marketing Solutions',
    description: 'Leverage artificial intelligence for predictive analytics, smart targeting, and automated campaign optimization.',
    features: ['AI Analytics', 'Smart Targeting', 'Automation'],
    icon: Brain,
  },
  {
    title: 'AI Technology',
    description: 'Custom AI agents, intelligent automation, and data intelligence solutions to transform your operations.',
    features: ['Custom AI Agents', 'Process Automation', 'Data Intelligence'],
    icon: Cpu,
  },
];

const stats = [
  { value: '200+', label: 'Clients Served' },
  { value: '95%', label: 'Retention Rate' },
  { value: '50M+', label: 'Revenue Generated' },
  { value: '15+', label: 'Countries Reached' },
];

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        {/* Subtle gradient background */}
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-surface/30" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20">
          {/* Hero Crown */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center mb-8"
          >
            <svg className="w-20 h-16 sm:w-24 sm:h-20 text-gold" viewBox="0 0 80 60" fill="none">
              <path d="M8 52L18 18L32 36L40 10L48 36L62 18L72 52" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 52H72" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
              <path d="M12 58H68" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round"/>
            </svg>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-secondary mb-8">
              The King of Connections
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.5 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-primary leading-[1.1] mb-6"
          >
            Elevate Your Business
            <br />
            <span className="text-gold">to the Top</span>
          </motion.h1>

          <motion.p
            {...fadeUp}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-lg text-secondary max-w-xl mx-auto mb-10"
          >
            We connect people, services, and ideas to build empires. Premier digital
            marketing that transforms businesses into market leaders.
          </motion.p>

          <motion.div
            {...fadeUp}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/contact"
              className="group px-8 py-3.5 bg-gold text-background font-medium rounded-lg hover:bg-gold-600 transition-colors duration-200 text-base flex items-center gap-2"
            >
              Start Your Journey
              <ArrowRight size={16} strokeWidth={2} className="group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              href="/services"
              className="px-8 py-3.5 border border-[rgba(255,255,255,0.1)] text-secondary font-medium rounded-lg hover:text-primary hover:border-[rgba(255,255,255,0.2)] transition-all duration-200 text-base"
            >
              Explore Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-16 border-y border-[rgba(255,255,255,0.06)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06, duration: 0.5 }}
                className={`text-center ${i < 3 ? 'md:border-r md:border-[rgba(255,255,255,0.06)]' : ''}`}
              >
                <div className="text-3xl sm:text-4xl font-semibold text-primary mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-tertiary">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-32 sm:py-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Why Choose Us"
            title="The King's"
            goldText="Advantage"
            description="Three pillars of excellence that set Business King apart from ordinary agencies."
          />

          <div className="grid md:grid-cols-3 gap-8">
            {kingFeatures.map((feature, i) => (
              <AnimatedCard key={feature.title} delay={i * 0.06}>
                <feature.icon size={24} strokeWidth={1.5} className="text-secondary mb-6" />
                <h3 className="text-lg font-semibold text-primary mb-3">{feature.title}</h3>
                <p className="text-secondary text-base leading-relaxed">{feature.description}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-32 sm:py-40 border-t border-[rgba(255,255,255,0.06)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our Services"
            title="Our"
            goldText="Services"
            description="Comprehensive digital marketing and AI solutions designed to accelerate your growth."
          />

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, i) => (
              <AnimatedCard key={service.title} delay={i * 0.06} className="!p-8 sm:!p-10">
                <service.icon size={24} strokeWidth={1.5} className="text-secondary mb-5" />
                <h3 className="text-lg font-semibold text-primary mb-2">{service.title}</h3>
                <p className="text-secondary text-sm mb-5 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-tertiary">
                      <div className="w-1 h-1 rounded-full bg-gold flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </AnimatedCard>
            ))}

            {/* CTA Card */}
            <AnimatedCard delay={0.5} className="flex flex-col items-center justify-center text-center !p-8 sm:!p-10">
              <Zap size={24} strokeWidth={1.5} className="text-gold mb-5" />
              <h3 className="text-lg font-semibold text-primary mb-2">Need Something Custom?</h3>
              <p className="text-secondary text-sm mb-6">
                We tailor solutions to fit your exact business needs.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-2.5 bg-gold text-background font-medium rounded-lg hover:bg-gold-600 transition-colors duration-200 text-sm"
              >
                Get in Touch
                <ArrowRight size={14} strokeWidth={2} />
              </Link>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-32 sm:py-40 border-t border-[rgba(255,255,255,0.06)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-secondary mb-5">
                About Us
              </span>
              <h2 className="text-3xl sm:text-4xl font-semibold text-primary mb-6 leading-tight">
                Building <span className="text-gold">Digital Empires</span>
              </h2>
              <p className="text-secondary text-base leading-relaxed mb-5">
                Business King Holdings Limited is more than a digital marketing agency — we are
                architects of success. Based in the heart of the Seychelles, we operate globally
                to connect businesses with their ideal audiences.
              </p>
              <p className="text-secondary text-base leading-relaxed mb-8">
                Our team of experts combines cutting-edge technology with proven strategies to
                deliver measurable results. We don&apos;t just market your business — we build your legacy.
              </p>
              <div className="flex flex-wrap gap-4">
                {['Global Reach', 'Data-Driven', 'Premium Results'].map((tag) => (
                  <div key={tag} className="px-5 py-3 rounded-xl bg-surface border border-[rgba(255,255,255,0.06)]">
                    <span className="text-sm text-secondary">{tag}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="relative"
            >
              {/* Abstract CSS pattern */}
              <div className="aspect-square rounded-3xl bg-surface border border-[rgba(255,255,255,0.06)] relative overflow-hidden">
                {/* Geometric shapes */}
                <div className="absolute top-12 right-12 w-32 h-32 border border-[rgba(255,255,255,0.04)] rounded-2xl rotate-12" />
                <div className="absolute top-24 right-24 w-24 h-24 border border-[rgba(255,255,255,0.06)] rounded-xl rotate-6" />
                <div className="absolute bottom-16 left-12 w-28 h-28 border border-[rgba(255,255,255,0.04)] rounded-2xl -rotate-6" />
                <div className="absolute bottom-28 left-24 w-20 h-20 border border-[rgba(255,255,255,0.06)] rounded-xl -rotate-12" />
                {/* Subtle gold circle */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 rounded-full border border-gold/10" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 rounded-full border border-gold/5" />
                {/* Center content */}
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-2xl font-semibold text-primary tracking-wide">
                    BUSINESS <span className="text-gold">KING</span>
                  </span>
                  <span className="text-xs text-tertiary tracking-[0.2em] mt-2 uppercase">
                    Est. Seychelles
                  </span>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
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
              Ready to <span className="text-gold">Dominate?</span>
            </h2>
            <p className="text-secondary text-base sm:text-lg mb-8 max-w-xl mx-auto">
              Join the ranks of businesses that have elevated their digital presence with
              Business King. Your empire awaits.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-gold text-background font-medium rounded-lg hover:bg-gold-600 transition-colors duration-200"
            >
              Contact Us Today
              <ArrowUpRight size={16} strokeWidth={2} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
