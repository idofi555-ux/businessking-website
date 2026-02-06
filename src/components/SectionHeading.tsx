'use client';

import { motion } from 'framer-motion';

interface SectionHeadingProps {
  label?: string;
  title: string;
  goldText?: string;
  description?: string;
  center?: boolean;
}

export default function SectionHeading({
  label,
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
      transition={{ duration: 0.5 }}
      className={`mb-16 ${center ? 'text-center' : ''}`}
    >
      {label && (
        <span className="inline-block text-xs font-medium uppercase tracking-[0.2em] text-secondary mb-5">
          {label}
        </span>
      )}
      <h2 className="text-3xl sm:text-4xl font-semibold text-primary mb-5 leading-tight">
        {title}{' '}
        {goldText && <span className="text-gold">{goldText}</span>}
      </h2>
      {description && (
        <p className={`text-secondary text-base sm:text-lg leading-relaxed ${center ? 'max-w-2xl mx-auto' : 'max-w-2xl'}`}>
          {description}
        </p>
      )}
    </motion.div>
  );
}
