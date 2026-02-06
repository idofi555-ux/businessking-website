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
    { label: 'Release Notes', href: '/release-notes' },
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
              <svg className="w-6 h-5 text-gold" viewBox="0 0 80 60" fill="none">
                <path d="M8 52L18 18L32 36L40 10L48 36L62 18L72 52" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M8 52H72" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
                <path d="M12 58H68" stroke="currentColor" strokeWidth="3" strokeLinecap="round"/>
              </svg>
              <span className="text-primary font-semibold text-[15px] tracking-[0.12em]">
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
          <div className="flex items-center gap-4">
            <p className="text-tertiary text-xs opacity-60">
              306 Victoria House, Victoria, Mahe, Seychelles
            </p>
            <Link
              href="/release-notes"
              className="text-tertiary text-xs hover:text-gold transition-colors duration-200"
            >
              v1.0.0
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
