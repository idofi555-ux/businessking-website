'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  Users,
  Zap,
  Lightbulb,
  Rocket,
  Star,
  Shield,
  Microscope,
  Handshake,
  ArrowUpRight,
  Check,
} from 'lucide-react';
import SectionHeading from '@/components/SectionHeading';
import AnimatedCard from '@/components/AnimatedCard';

const connections = [
  {
    title: 'Connecting People',
    icon: Users,
    description:
      'At the heart of every successful business is a network of people who believe in a shared vision. We connect entrepreneurs with mentors, businesses with their ideal customers, and teams with the talent they need to thrive.',
    details: [
      'Building meaningful business relationships',
      'Connecting brands with target audiences',
      'Fostering communities around shared values',
      'Creating partnerships that drive mutual growth',
    ],
  },
  {
    title: 'Connecting Services',
    icon: Zap,
    description:
      'The right service at the right time can transform a business overnight. We bridge the gap between what businesses need and the solutions that exist, creating seamless integrations that amplify results.',
    details: [
      'Matching businesses with optimal solutions',
      'Integrating marketing channels for maximum impact',
      'Streamlining workflows and processes',
      'Creating synergies between service providers',
    ],
  },
  {
    title: 'Connecting Ideas',
    icon: Lightbulb,
    description:
      'Innovation happens at the intersection of ideas. We bring together diverse perspectives, creative strategies, and proven methodologies to spark breakthroughs that redefine what\'s possible.',
    details: [
      'Cross-industry innovation and strategy',
      'Creative problem-solving workshops',
      'Trend analysis and opportunity identification',
      'Collaborative ideation with industry leaders',
    ],
  },
  {
    title: 'Connecting to the Future',
    icon: Rocket,
    description:
      'The digital landscape is evolving at breakneck speed. We keep our clients ahead of the curve, connecting them with emerging technologies, trends, and opportunities before they become mainstream.',
    details: [
      'Early adoption of emerging technologies',
      'Future-proofing digital strategies',
      'AI and automation integration',
      'Predictive market analysis and positioning',
    ],
  },
];

const values = [
  { title: 'Excellence', desc: 'We settle for nothing less than extraordinary results.', icon: Star },
  { title: 'Integrity', desc: 'Transparency and honesty in every interaction.', icon: Shield },
  { title: 'Innovation', desc: 'Constantly pushing boundaries and exploring new frontiers.', icon: Microscope },
  { title: 'Partnership', desc: 'Your success is our success. We grow together.', icon: Handshake },
];

export default function MissionPage() {
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
              Our Mission
            </span>
            <h1 className="text-4xl sm:text-5xl font-semibold text-primary mb-5">
              The Power of <span className="text-gold">Connection</span>
            </h1>
            <p className="text-secondary text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
              We believe that the most powerful force in business is connection.
              Every relationship, every idea, every service — connected to create
              something greater than the sum of its parts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-surface border border-[rgba(255,255,255,0.06)] rounded-2xl p-10 sm:p-14 text-center"
          >
            <h2 className="text-2xl sm:text-3xl font-semibold text-primary mb-5">Our Mission</h2>
            <p className="text-secondary text-base sm:text-lg leading-relaxed">
              To be <span className="text-gold font-medium">The King of Connections</span> —
              bridging the gap between ambition and achievement by connecting businesses with the
              people, services, ideas, and technologies that transform potential into prosperity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Four Connections */}
      <section className="py-32 sm:py-40 border-t border-[rgba(255,255,255,0.06)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="The Four Pillars"
            title="How We"
            goldText="Connect"
            description="Four fundamental connections that drive everything we do."
          />

          <div className="space-y-20">
            {connections.map((conn, idx) => (
              <motion.div
                key={conn.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`grid lg:grid-cols-2 gap-16 items-start ${
                  idx % 2 === 1 ? '' : ''
                }`}
              >
                <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                  <conn.icon size={24} strokeWidth={1.5} className="text-gold mb-5" />
                  <h3 className="text-2xl sm:text-3xl font-semibold text-primary mb-4">
                    {conn.title}
                  </h3>
                  <p className="text-secondary text-base leading-relaxed mb-6">
                    {conn.description}
                  </p>
                  <ul className="space-y-3">
                    {conn.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-3">
                        <Check size={14} strokeWidth={2} className="text-gold mt-1.5 flex-shrink-0" />
                        <span className="text-tertiary text-sm">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={idx % 2 === 1 ? 'lg:order-1' : ''}>
                  <div className="aspect-square rounded-2xl bg-surface border border-[rgba(255,255,255,0.06)] flex items-center justify-center relative overflow-hidden">
                    {/* Minimal geometric pattern */}
                    <div className="absolute inset-10 border border-[rgba(255,255,255,0.04)] rounded-xl" />
                    <div className="absolute inset-20 border border-[rgba(255,255,255,0.03)] rounded-lg" />
                    <conn.icon size={48} strokeWidth={1} className="text-secondary/30 relative z-10" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-32 sm:py-40 border-t border-[rgba(255,255,255,0.06)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            label="Our Values"
            title="What"
            goldText="Drives Us"
            description="The principles that guide every decision we make."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <AnimatedCard key={value.title} delay={i * 0.06} className="!p-8">
                <value.icon size={24} strokeWidth={1.5} className="text-secondary mb-5" />
                <h3 className="text-base font-semibold text-primary mb-2">{value.title}</h3>
                <p className="text-tertiary text-sm leading-relaxed">{value.desc}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

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
              Join the <span className="text-gold">Kingdom</span>
            </h2>
            <p className="text-secondary text-base sm:text-lg mb-8 max-w-xl mx-auto">
              Let&apos;s connect and explore how we can build something extraordinary together.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-gold text-background font-medium rounded-lg hover:bg-gold-600 transition-colors duration-200"
            >
              Get Connected
              <ArrowUpRight size={16} strokeWidth={2} />
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
