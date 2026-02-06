'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/services', label: 'Services' },
  { href: '/mission', label: 'Our Mission' },
  { href: '/contact', label: 'Contact' },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/80 backdrop-blur-xl border-b border-[rgba(255,255,255,0.06)]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            {/* BK Monogram */}
            <div className="relative w-9 h-9 flex items-center justify-center">
              {/* Crown accent — 3 small peaks above the monogram */}
              <svg className="absolute -top-[5px] left-1/2 -translate-x-1/2 w-5 h-[6px] text-gold opacity-80 group-hover:opacity-100 transition-opacity" viewBox="0 0 20 6" fill="none">
                <path d="M1 5L4 1.5L7 4L10 1L13 4L16 1.5L19 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <div className="w-9 h-9 rounded-lg border border-gold/40 group-hover:border-gold/70 flex items-center justify-center transition-all duration-200">
                <span className="text-gold text-[13px] font-semibold tracking-tight">BK</span>
              </div>
            </div>
            {/* Text */}
            <div className="flex flex-col leading-none">
              <span className="text-primary text-[15px] font-semibold tracking-[0.08em]">
                BUSINESS <span className="text-gold">KING</span>
              </span>
              <span className="text-tertiary text-[9px] tracking-[0.25em] uppercase mt-0.5">
                The King of Connections
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 text-sm font-medium transition-colors duration-200 ${
                  pathname === link.href
                    ? 'text-gold'
                    : 'text-secondary hover:text-primary'
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="ml-6 px-5 py-2 text-sm font-medium text-gold border border-gold/30 rounded-lg hover:border-gold/60 transition-all duration-200"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative w-10 h-10 flex items-center justify-center"
            aria-label="Toggle menu"
          >
            <div className="relative w-5 h-4 flex flex-col justify-between">
              <span
                className={`block h-px bg-primary transition-all duration-300 origin-left ${
                  isOpen ? 'rotate-45 w-[22px]' : 'w-5'
                }`}
              />
              <span
                className={`block h-px bg-secondary transition-all duration-300 ${
                  isOpen ? 'opacity-0 translate-x-4' : 'w-3.5'
                }`}
              />
              <span
                className={`block h-px bg-primary transition-all duration-300 origin-left ${
                  isOpen ? '-rotate-45 w-[22px]' : 'w-5'
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden overflow-hidden bg-surface border-t border-[rgba(255,255,255,0.06)]"
          >
            <div className="px-4 py-6 space-y-1">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05 }}
                >
                  <Link
                    href={link.href}
                    className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors duration-200 ${
                      pathname === link.href
                        ? 'text-gold'
                        : 'text-secondary hover:text-primary'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navLinks.length * 0.05 }}
                className="pt-4"
              >
                <Link
                  href="/contact"
                  className="block w-full text-center px-5 py-3 text-gold border border-gold/30 font-medium rounded-lg"
                >
                  Get Started
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
