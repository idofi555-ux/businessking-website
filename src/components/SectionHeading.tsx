'use client';

import { motion } from 'framer-motion';

interface SectionHeadingProps {
  badge?: string;
  title: string;
  goldText?: string;
  description?: string;
  center?: boolean;
}

export default function SectionHeading({
  badge,
  title,
  goldText,
  description,
  center = true,
}: SectionHeadingProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.6 }}
      className={`mb-16 ${center ? 'text-center' : ''}`}
    >
      {badge && (
        <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-gold-500 bg-gold-500/10 border border-gold-500/20 mb-6">
          {badge}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
        {title}{' '}
        {goldText && <span className="text-gold-gradient">{goldText}</span>}
      </h2>
      {description && (
        <p className={`text-gray-400 text-lg leading-relaxed ${center ? 'max-w-2xl mx-auto' : 'max-w-2xl'}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
