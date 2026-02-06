'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Globe, Check } from 'lucide-react';

const contactInfo = [
  {
    icon: MapPin,
    title: 'Address',
    lines: ['306 Victoria House', 'Victoria, Mahe', 'SEYCHELLES'],
  },
  {
    icon: Mail,
    title: 'Email',
    lines: ['contact@businesskingonline.com'],
  },
  {
    icon: Globe,
    title: 'Global Presence',
    lines: ['Serving clients worldwide', 'From the heart of Seychelles'],
  },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

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
              Contact Us
            </span>
            <h1 className="text-4xl sm:text-5xl font-semibold text-primary mb-5">
              Let&apos;s <span className="text-gold">Connect</span>
            </h1>
            <p className="text-secondary text-base sm:text-lg max-w-2xl mx-auto">
              Ready to elevate your business? Get in touch and let&apos;s discuss how
              we can help you reach your goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form + Info */}
      <section className="pb-32 sm:pb-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-16">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2 space-y-8"
            >
              <div>
                <h2 className="text-xl font-semibold text-primary mb-3">Get in Touch</h2>
                <p className="text-secondary text-base leading-relaxed">
                  Whether you&apos;re looking to dominate search rankings, build a powerful affiliate
                  network, or create a winning marketing strategy, we&apos;re here to help.
                </p>
              </div>

              <div className="space-y-6">
                {contactInfo.map((info) => (
                  <div key={info.title} className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-surface border border-[rgba(255,255,255,0.06)] flex items-center justify-center flex-shrink-0">
                      <info.icon size={18} strokeWidth={1.5} className="text-secondary" />
                    </div>
                    <div>
                      <h3 className="text-primary font-medium text-sm mb-1">{info.title}</h3>
                      {info.lines.map((line) => (
                        <p key={line} className="text-tertiary text-sm">
                          {line}
                        </p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Map placeholder */}
              <div className="rounded-2xl overflow-hidden border border-[rgba(255,255,255,0.06)] aspect-video bg-surface flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={24} strokeWidth={1.5} className="text-tertiary mx-auto mb-2" />
                  <div className="text-primary font-medium text-sm">Seychelles</div>
                  <div className="text-tertiary text-xs">Victoria, Mahe</div>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-3"
            >
              <div className="bg-surface border border-[rgba(255,255,255,0.06)] rounded-2xl p-8 sm:p-10">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-16"
                  >
                    <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-5">
                      <Check size={20} strokeWidth={2} className="text-gold" />
                    </div>
                    <h3 className="text-xl font-semibold text-primary mb-3">
                      Message Sent
                    </h3>
                    <p className="text-secondary text-base">
                      Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-xs font-medium uppercase tracking-[0.15em] text-secondary mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        className="w-full px-4 py-3 bg-elevated border border-[rgba(255,255,255,0.06)] rounded-lg text-primary placeholder-tertiary text-base focus:outline-none focus:border-gold/30 transition-colors"
                        placeholder="John Doe"
                      />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-xs font-medium uppercase tracking-[0.15em] text-secondary mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          id="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 bg-elevated border border-[rgba(255,255,255,0.06)] rounded-lg text-primary placeholder-tertiary text-base focus:outline-none focus:border-gold/30 transition-colors"
                          placeholder="john@example.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-xs font-medium uppercase tracking-[0.15em] text-secondary mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 bg-elevated border border-[rgba(255,255,255,0.06)] rounded-lg text-primary placeholder-tertiary text-base focus:outline-none focus:border-gold/30 transition-colors"
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-xs font-medium uppercase tracking-[0.15em] text-secondary mb-2">
                        Your Message *
                      </label>
                      <textarea
                        id="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 bg-elevated border border-[rgba(255,255,255,0.06)] rounded-lg text-primary placeholder-tertiary text-base focus:outline-none focus:border-gold/30 transition-colors resize-none"
                        placeholder="Tell us about your project and goals..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3.5 bg-gold text-background font-medium rounded-lg hover:bg-gold-600 transition-colors duration-200 text-base"
                    >
                      Send Message
                    </button>

                    <p className="text-center text-tertiary text-xs">
                      By sending a message, you agree to our{' '}
                      <a href="/privacy" className="text-gold hover:underline">
                        Privacy Policy
                      </a>
                      .
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
