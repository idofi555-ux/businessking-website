'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import SectionHeading from '@/components/SectionHeading';
import AnimatedCard from '@/components/AnimatedCard';

const kingFeatures = [
  {
    title: 'King of Possibilities',
    description:
      'We open doors that others cannot see. Through innovative strategies and creative solutions, we transform potential into reality for every business we touch.',
    icon: '♛',
  },
  {
    title: 'King of Prospects',
    description:
      'We identify, nurture, and convert the highest-quality leads into loyal customers. Our data-driven approach ensures no opportunity goes unnoticed.',
    icon: '♚',
  },
  {
    title: 'King of Networking',
    description:
      'We build bridges between businesses, people, and ideas. Our vast network of connections amplifies your reach and accelerates your growth.',
    icon: '♜',
  },
];

const services = [
  {
    title: 'SEO',
    description: 'Dominate search rankings with technical excellence and strategic optimization.',
    features: ['Technical Analysis', 'Keyword Research', 'Link Building'],
    icon: '🔍',
  },
  {
    title: 'Marketing Strategy',
    description: 'Data-driven strategies tailored to your unique business objectives.',
    features: ['Market Research', 'Strategy Development', 'Consulting'],
    icon: '📊',
  },
  {
    title: 'Content & Social Media',
    description: 'Engaging content that captivates audiences and drives conversions.',
    features: ['Content Creation', 'Social Management', 'Promotion'],
    icon: '✍️',
  },
  {
    title: 'Affiliate Marketing',
    description: 'Build profitable partnerships that scale your revenue streams.',
    features: ['Program Setup', 'Partner Development', 'Tracking'],
    icon: '🤝',
  },
  {
    title: 'PPC Ads Arbitrage',
    description: 'Maximize ROI with precision-targeted advertising campaigns.',
    features: ['Keyword Targeting', 'Ad Creatives', 'Optimization'],
    icon: '🎯',
  },
];

const stats = [
  { value: '200+', label: 'Clients Served' },
  { value: '95%', label: 'Retention Rate' },
  { value: '50M+', label: 'Revenue Generated' },
  { value: '15+', label: 'Countries Reached' },
];

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-dark-gradient" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-radial-gold opacity-30" />
        <div className="absolute top-20 right-20 w-72 h-72 bg-gold-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gold-500/3 rounded-full blur-3xl" />

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-[0.02]" style={{
          backgroundImage: 'linear-gradient(rgba(252,181,54,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(252,181,54,0.3) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }} />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Crown icon */}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', stiffness: 200, damping: 15, delay: 0.2 }}
              className="inline-block mb-8"
            >
              <div className="w-20 h-20 mx-auto rounded-2xl bg-gold-gradient flex items-center justify-center shadow-lg shadow-gold-500/20">
                <span className="text-dark-500 text-4xl font-black">BK</span>
              </div>
            </motion.div>

            {/* Badge */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <span className="inline-block px-5 py-2 rounded-full text-xs font-semibold uppercase tracking-[0.25em] text-gold-500 bg-gold-500/10 border border-gold-500/20 mb-8">
                The King of Connections
              </span>
            </motion.div>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-8"
            >
              Elevate Your Business
              <br />
              <span className="text-gold-gradient">to Royalty</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
              className="text-lg sm:text-xl text-gray-400 max-w-2xl mx-auto mb-12 leading-relaxed"
            >
              We connect people, services, and ideas to build empires. Premier digital
              marketing that transforms businesses into market leaders.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link
                href="/contact"
                className="group px-8 py-4 bg-gold-gradient text-dark-500 font-semibold rounded-xl hover:shadow-xl hover:shadow-gold-500/25 transition-all duration-300 hover:scale-105 text-lg"
              >
                Start Your Journey
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">
                  →
                </span>
              </Link>
              <Link
                href="/services"
                className="px-8 py-4 border border-gold-500/30 text-gold-500 font-medium rounded-xl hover:bg-gold-500/10 transition-all duration-300 text-lg"
              >
                Explore Services
              </Link>
            </motion.div>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ repeat: Infinity, duration: 2 }}
              className="w-6 h-10 rounded-full border-2 border-gold-500/30 flex justify-center pt-2"
            >
              <div className="w-1 h-2 rounded-full bg-gold-500" />
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="relative py-12 border-y border-gold-500/10 bg-dark-300/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="text-3xl sm:text-4xl font-bold text-gold-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* King Features */}
      <section className="py-24 sm:py-32 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-radial-gold opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <SectionHeading
            badge="Why Choose Us"
            title="The Royal"
            goldText="Advantage"
            description="Three pillars of excellence that set Business King apart from ordinary agencies."
          />

          <div className="grid md:grid-cols-3 gap-8">
            {kingFeatures.map((feature, i) => (
              <AnimatedCard key={feature.title} delay={i * 0.15}>
                <div className="text-5xl mb-6">{feature.icon}</div>
                <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                <p className="text-gray-400 leading-relaxed">{feature.description}</p>
              </AnimatedCard>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-24 sm:py-32 relative bg-dark-300/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Our Services"
            title="Royal"
            goldText="Services"
            description="Comprehensive digital marketing solutions designed to build your empire."
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, i) => (
              <AnimatedCard key={service.title} delay={i * 0.1}>
                <div className="text-3xl mb-4">{service.icon}</div>
                <h3 className="text-lg font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-gray-300">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold-500 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </AnimatedCard>
            ))}

            {/* CTA Card */}
            <AnimatedCard delay={0.5} className="flex flex-col items-center justify-center text-center bg-gradient-to-br from-gold-500/10 to-gold-500/5">
              <div className="text-4xl mb-4">👑</div>
              <h3 className="text-xl font-bold text-white mb-3">Ready to Rule?</h3>
              <p className="text-gray-400 text-sm mb-6">
                Discover how our full suite of services can transform your business.
              </p>
              <Link
                href="/services"
                className="px-6 py-3 bg-gold-gradient text-dark-500 font-semibold rounded-lg hover:shadow-lg hover:shadow-gold-500/25 transition-all duration-200"
              >
                View All Services →
              </Link>
            </AnimatedCard>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 sm:py-32 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-gold-500 bg-gold-500/10 border border-gold-500/20 mb-6">
                About Us
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
                Building <span className="text-gold-gradient">Digital Empires</span>
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed mb-6">
                Business King Holdings Limited is more than a digital marketing agency — we are
                architects of success. Based in the heart of the Seychelles, we operate globally
                to connect businesses with their ideal audiences.
              </p>
              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Our team of experts combines cutting-edge technology with proven strategies to
                deliver measurable results. We don&apos;t just market your business — we build your legacy.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="px-5 py-3 rounded-xl bg-dark-300 border border-gold-500/10">
                  <div className="text-gold-500 font-bold text-lg">Global</div>
                  <div className="text-gray-400 text-sm">Reach</div>
                </div>
                <div className="px-5 py-3 rounded-xl bg-dark-300 border border-gold-500/10">
                  <div className="text-gold-500 font-bold text-lg">Data-Driven</div>
                  <div className="text-gray-400 text-sm">Approach</div>
                </div>
                <div className="px-5 py-3 rounded-xl bg-dark-300 border border-gold-500/10">
                  <div className="text-gold-500 font-bold text-lg">Premium</div>
                  <div className="text-gray-400 text-sm">Results</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-dark-300 to-dark-400 border border-gold-500/10 flex items-center justify-center relative overflow-hidden">
                {/* Abstract design */}
                <div className="absolute inset-0 bg-radial-gold opacity-30" />
                <div className="absolute top-8 right-8 w-32 h-32 border border-gold-500/20 rounded-2xl rotate-12" />
                <div className="absolute bottom-12 left-8 w-24 h-24 border border-gold-500/10 rounded-xl -rotate-6" />
                <div className="relative text-center">
                  <div className="text-8xl mb-4">👑</div>
                  <div className="text-2xl font-bold text-white">
                    BUSINESS <span className="text-gold-500">KING</span>
                  </div>
                  <div className="text-sm text-gold-500/70 tracking-[0.2em] mt-2">
                    EST. SEYCHELLES
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 sm:py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-dark-500 via-dark-300/50 to-dark-500" />
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center glass-card rounded-3xl p-12 sm:p-16 border border-gold-500/20"
          >
            <div className="text-5xl mb-6">👑</div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Ready to Claim Your <span className="text-gold-gradient">Throne?</span>
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
              Join the ranks of businesses that have elevated their digital presence with
              Business King. Your empire awaits.
            </p>
            <Link
              href="/contact"
              className="inline-block px-10 py-4 bg-gold-gradient text-dark-500 font-semibold rounded-xl hover:shadow-xl hover:shadow-gold-500/25 transition-all duration-300 hover:scale-105 text-lg"
            >
              Contact Us Today →
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
}
