'use client';

import { motion } from 'framer-motion';

export default function PrivacyPage() {
  return (
    <section className="pt-32 pb-20 relative">
      <div className="absolute inset-0 bg-dark-gradient opacity-50" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest text-gold-500 bg-gold-500/10 border border-gold-500/20 mb-6">
            Legal
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-8">
            Privacy <span className="text-gold-gradient">Policy</span>
          </h1>

          <div className="prose prose-invert prose-lg max-w-none space-y-8 text-gray-300">
            <p className="text-gray-400">
              Last updated: February 2025
            </p>

            <div className="glass-card rounded-2xl p-8 border border-gold-500/10 space-y-6">
              <h2 className="text-2xl font-bold text-white">1. Introduction</h2>
              <p>
                Business King Holdings Limited (&quot;Business King,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) is committed to
                protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and
                safeguard your information when you visit our website businesskingonline.com or engage
                with our services.
              </p>

              <h2 className="text-2xl font-bold text-white">2. Information We Collect</h2>
              <h3 className="text-xl font-semibold text-white">2.1 Personal Information</h3>
              <p>We may collect personal information that you voluntarily provide, including:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Name and contact information (email address, phone number)</li>
                <li>Business information (company name, job title)</li>
                <li>Communication data (messages sent through our contact form)</li>
                <li>Account credentials if you create an account</li>
              </ul>

              <h3 className="text-xl font-semibold text-white">2.2 Automatically Collected Information</h3>
              <p>When you visit our website, we may automatically collect:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>IP address and browser type</li>
                <li>Device information and operating system</li>
                <li>Pages visited and time spent on each page</li>
                <li>Referring website addresses</li>
                <li>Cookies and similar tracking technologies</li>
              </ul>

              <h2 className="text-2xl font-bold text-white">3. How We Use Your Information</h2>
              <p>We use the collected information for:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Providing and improving our services</li>
                <li>Responding to your inquiries and requests</li>
                <li>Sending marketing communications (with your consent)</li>
                <li>Analyzing website usage and optimizing user experience</li>
                <li>Complying with legal obligations</li>
                <li>Preventing fraud and ensuring security</li>
              </ul>

              <h2 className="text-2xl font-bold text-white">4. Data Sharing and Disclosure</h2>
              <p>
                We do not sell your personal information. We may share your data with:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Service providers who assist in our operations</li>
                <li>Professional advisors (lawyers, accountants)</li>
                <li>Law enforcement when required by law</li>
                <li>Business partners with your explicit consent</li>
              </ul>

              <h2 className="text-2xl font-bold text-white">5. Data Security</h2>
              <p>
                We implement appropriate technical and organizational measures to protect your personal
                information against unauthorized access, alteration, disclosure, or destruction. However,
                no method of transmission over the Internet is 100% secure.
              </p>

              <h2 className="text-2xl font-bold text-white">6. Cookies</h2>
              <p>
                We use cookies and similar technologies to enhance your browsing experience, analyze
                website traffic, and personalize content. You can control cookie preferences through
                your browser settings.
              </p>

              <h2 className="text-2xl font-bold text-white">7. Your Rights</h2>
              <p>Depending on your jurisdiction, you may have the right to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Access the personal data we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to or restrict processing</li>
                <li>Data portability</li>
                <li>Withdraw consent at any time</li>
              </ul>

              <h2 className="text-2xl font-bold text-white">8. Third-Party Links</h2>
              <p>
                Our website may contain links to third-party websites. We are not responsible for the
                privacy practices of these external sites and encourage you to review their privacy policies.
              </p>

              <h2 className="text-2xl font-bold text-white">9. Children&apos;s Privacy</h2>
              <p>
                Our services are not directed to individuals under the age of 18. We do not knowingly
                collect personal information from children.
              </p>

              <h2 className="text-2xl font-bold text-white">10. Changes to This Policy</h2>
              <p>
                We may update this Privacy Policy from time to time. We will notify you of any material
                changes by posting the updated policy on our website with a revised effective date.
              </p>

              <h2 className="text-2xl font-bold text-white">11. Contact Us</h2>
              <p>
                If you have questions about this Privacy Policy, please contact us at:
              </p>
              <p>
                <strong className="text-white">Business King Holdings Limited</strong>
                <br />
                306 Victoria House, Victoria, Mahe, Seychelles
                <br />
                Email: contact@businesskingonline.com
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
