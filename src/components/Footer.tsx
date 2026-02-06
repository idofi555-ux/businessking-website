import Link from 'next/link';

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
    <footer className="relative bg-dark-500 border-t border-gold-500/10">
      {/* Gold accent line */}
      <div className="h-px bg-gradient-to-r from-transparent via-gold-500/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-gold-gradient flex items-center justify-center">
                <span className="text-dark-500 font-black text-lg">BK</span>
              </div>
              <div className="flex flex-col">
                <span className="text-white font-bold text-lg leading-tight">
                  BUSINESS <span className="text-gold-500">KING</span>
                </span>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              The King of Connections. Premier digital marketing agency specializing in
              SEO, PPC, affiliate marketing, and strategic consulting.
            </p>
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <svg className="w-4 h-4 text-gold-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              contact@businesskingonline.com
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-4">
                {title}
              </h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-gray-400 text-sm hover:text-gold-500 transition-colors duration-200"
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
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Business King Holdings Limited. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">
            306 Victoria House, Victoria, Mahe, Seychelles
          </p>
        </div>
      </div>
    </footer>
  );
}
