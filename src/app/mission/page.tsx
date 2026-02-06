'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import SectionHeading from '@/components/SectionHeading';
import AnimatedCard from '@/components/AnimatedCard';

const connections = [
  {
    title: 'Connecting People',
    icon: '👥',
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
    icon: '⚡',
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
    icon: '💡',
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
    icon: '🚀',
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
  { title: 'Excellence', desc: 'We settle for nothing less than extraordinary results.', icon: '⭐' },
  { title: 'Integrity', desc: 'Transparency and honesty in every interaction.', icon: '🛡️' },
  { title: 'Innovation', desc: 'Constantly pushing boundaries and exploring new frontiers.', icon: '🔬' },
  { title: 'Partnership', desc: 'Your success is our success. We grow together.', icon: '🤝' },
];

export default function MissionPage() {
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
              Our Mission
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
              The Power of <span className="text-gold-gradient">Connection</span>
            </h1>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
              We believe that the most powerful force in business is connection.
              Every relationship, every idea, every service — connected to create
              something greater than the sum of its parts.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement */}
      <section className="py-20 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-3xl p-10 sm:p-14 border border-gold-500/20 text-center"
          >
            <div className="text-6xl mb-6">👑</div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Our Mission</h2>
            <p className="text-gray-300 text-lg sm:text-xl leading-relaxed">
              To be <span className="text-gold-500 font-semibold">The King of Connections</span> —
              bridging the gap between ambition and achievement by connecting businesses with the
              people, services, ideas, and technologies that transform potential into prosperity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Four Connections */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="The Four Pillars"
            title="How We"
            goldText="Connect"
            description="Four fundamental connections that drive everything we do."
          />

          <div className="space-y-16">
            {connections.map((conn, idx) => (
              <motion.div
                key={conn.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  idx % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="text-5xl mb-6">{conn.icon}</div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                    {conn.title}
                  </h3>
                  <p className="text-gray-400 text-lg leading-relaxed mb-6">
                    {conn.description}
                  </p>
                  <ul className="space-y-3">
                    {conn.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-3">
                        <span className="w-2 h-2 rounded-full bg-gold-500 mt-2 flex-shrink-0" />
                        <span className="text-gray-300">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={`${idx % 2 === 1 ? 'lg:order-1' : ''}`}>
                  <div className="aspect-square rounded-3xl bg-gradient-to-br from-dark-300 to-dark-400 border border-gold-500/10 flex items-center justify-center relative overflow-hidden">
                    <div className="absolute inset-0 bg-radial-gold opacity-20" />
                    <div className="absolute inset-8 border border-gold-500/10 rounded-2xl" />
                    <div className="text-8xl relative z-10">{conn.icon}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 sm:py-28 bg-dark-300/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Our Values"
            title="What"
            goldText="Drives Us"
            description="The principles that guide every decision we make."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <AnimatedCard key={value.title} delay={i * 0.1}>
                <div className="text-3xl mb-4">{value.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{value.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{value.desc}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Join the <span className="text-gold-gradient">Kingdom</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
              Let&apos;s connect and explore how we can build something extraordinary together.
            </p>
            <Link
              href="/contact"
              className="inline-block px-10 py-4 bg-gold-gradient text-dark-500 font-semibold rounded-xl hover:shadow-xl hover:shadow-gold-500/25 transition-all duration-300 hover:scale-105 text-lg"
            >
              Get Connected →
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
