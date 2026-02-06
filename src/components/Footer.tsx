import Link from 'next/link';
import { Mail } from 'lucide-react';

const footerLinks = {
  Services: [
    { label: 'SEO', href: '/services#seo' },
    { label: 'Marketing Strategy', href: '/services#strategy' },
    { label: 'Content & Social Media', href: '/services#content' },
    { label: 'Affiliate Marketing', href: '/services#affiliate' },
    { label: 'PPC & Ads Arbitrage', href: '/services#ppc' },
    { label: 'AI Marketing', href: '/services#ai-marketing' },
    { label: 'AI Technology', href: '/services#ai-technology' },
  ],
  Company: [
    { label: 'Home', href: '/' },
    { label: 'Our Mission', href: '/mission' },
    { label: 'Services', href: '/services' },
    { label: 'Contact', href: '/contact' },
  ],
  Legal: [
    { label: 'Privacy Policy', href: '/privacy' },
    { label: 'Terms & Conditions', href: '/terms' },
  ],
};

export default function Footer() {
  return (
    <footer className="border-t border-[rgba(255,255,255,0.06)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-3 mb-5">
              <div className="relative w-8 h-8 flex items-center justify-center">
                <svg className="absolute -top-[4px] left-1/2 -translate-x-1/2 w-4 h-[5px] text-gold opacity-70" viewBox="0 0 20 6" fill="none">
                  <path d="M1 5L4 1.5L7 4L10 1L13 4L16 1.5L19 5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <div className="w-8 h-8 rounded-lg border border-gold/30 flex items-center justify-center">
                  <span className="text-gold text-[12px] font-semibold tracking-tight">BK</span>
                </div>
              </div>
              <span className="text-primary font-semibold text-[15px] tracking-[0.08em]">
                BUSINESS <span className="text-gold">KING</span>
              </span>
            </Link>
            <p className="text-tertiary text-sm leading-relaxed mb-5">
              The King of Connections. Premier digital marketing agency specializing in
              SEO, PPC, affiliate marketing, and strategic consulting.
            </p>
            <div className="flex items-center gap-2 text-sm text-tertiary">
              <Mail size={14} strokeWidth={1.5} className="text-secondary" />
              contact@businesskingonline.com
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-xs font-medium uppercase tracking-[0.2em] text-secondary mb-4">
                {title}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-tertiary text-sm hover:text-primary transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-[rgba(255,255,255,0.06)] flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-tertiary text-xs">
            © {new Date().getFullYear()} Business King Holdings Limited. All rights reserved.
          </p>
          <p className="text-tertiary text-xs opacity-60">
            306 Victoria House, Victoria, Mahe, Seychelles
          </p>
        </div>
      </div>
    </footer>
  );
}
