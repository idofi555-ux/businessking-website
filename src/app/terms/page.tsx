'use client';

import { motion } from 'framer-motion';

export default function TermsPage() {
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
            Terms & <span className="text-gold-gradient">Conditions</span>
          </h1>

          <div className="prose prose-invert prose-lg max-w-none space-y-8 text-gray-300">
            <p className="text-gray-400">
              Last updated: February 2025
            </p>

            <div className="glass-card rounded-2xl p-8 border border-gold-500/10 space-y-6">
              <h2 className="text-2xl font-bold text-white">1. Agreement to Terms</h2>
              <p>
                By accessing or using the website businesskingonline.com and the services provided by
                Business King Holdings Limited (&quot;Business King,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), you agree to
                be bound by these Terms and Conditions. If you do not agree to these terms, please do
                not use our services.
              </p>

              <h2 className="text-2xl font-bold text-white">2. Services</h2>
              <p>
                Business King provides digital marketing services including but not limited to Search
                Engine Optimization (SEO), Pay-Per-Click (PPC) advertising, affiliate marketing,
                content marketing, social media marketing, and strategic consulting. The specific
                scope of services will be defined in individual service agreements.
              </p>

              <h2 className="text-2xl font-bold text-white">3. Eligibility</h2>
              <p>
                You must be at least 18 years old and capable of forming a binding contract to use our
                services. By using our services, you represent and warrant that you meet these requirements.
              </p>

              <h2 className="text-2xl font-bold text-white">4. Client Obligations</h2>
              <p>As a client, you agree to:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Provide accurate and complete information as required</li>
                <li>Grant necessary access to accounts and platforms for service delivery</li>
                <li>Respond to communications in a timely manner</li>
                <li>Not use our services for any illegal or unauthorized purpose</li>
                <li>Comply with all applicable laws and regulations</li>
              </ul>

              <h2 className="text-2xl font-bold text-white">5. Intellectual Property</h2>
              <p>
                All content, materials, and intellectual property on our website — including text,
                graphics, logos, images, and software — are the property of Business King Holdings
                Limited and are protected by international copyright and trademark laws. You may not
                reproduce, distribute, or create derivative works without our express written permission.
              </p>

              <h2 className="text-2xl font-bold text-white">6. Payment Terms</h2>
              <p>
                Payment terms will be specified in individual service agreements. Unless otherwise
                stated:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Invoices are due within 30 days of issuance</li>
                <li>Late payments may incur interest at 1.5% per month</li>
                <li>All fees are non-refundable unless otherwise specified</li>
                <li>We reserve the right to suspend services for overdue accounts</li>
              </ul>

              <h2 className="text-2xl font-bold text-white">7. Confidentiality</h2>
              <p>
                Both parties agree to maintain the confidentiality of proprietary information shared
                during the course of the business relationship. This obligation survives the
                termination of any service agreement.
              </p>

              <h2 className="text-2xl font-bold text-white">8. Limitation of Liability</h2>
              <p>
                To the maximum extent permitted by law, Business King Holdings Limited shall not be
                liable for any indirect, incidental, special, consequential, or punitive damages
                arising from your use of our services, including but not limited to loss of profits,
                data, or business opportunities.
              </p>

              <h2 className="text-2xl font-bold text-white">9. Warranties and Disclaimers</h2>
              <p>
                Our services are provided &quot;as is&quot; and &quot;as available.&quot; While we strive to deliver
                excellent results, we do not guarantee specific outcomes such as search engine rankings,
                traffic volumes, or revenue increases. Digital marketing results depend on numerous
                factors beyond our control.
              </p>

              <h2 className="text-2xl font-bold text-white">10. Termination</h2>
              <p>
                Either party may terminate a service agreement with 30 days&apos; written notice. We
                reserve the right to immediately terminate services if you violate these terms.
                Upon termination, you remain responsible for any outstanding fees.
              </p>

              <h2 className="text-2xl font-bold text-white">11. Governing Law</h2>
              <p>
                These Terms and Conditions are governed by and construed in accordance with the laws
                of the Republic of Seychelles. Any disputes shall be subject to the exclusive
                jurisdiction of the courts of Seychelles.
              </p>

              <h2 className="text-2xl font-bold text-white">12. Changes to Terms</h2>
              <p>
                We reserve the right to modify these Terms and Conditions at any time. Changes become
                effective upon posting to our website. Continued use of our services after changes
                constitutes acceptance of the updated terms.
              </p>

              <h2 className="text-2xl font-bold text-white">13. Severability</h2>
              <p>
                If any provision of these terms is found to be unenforceable, the remaining provisions
                shall continue in full force and effect.
              </p>

              <h2 className="text-2xl font-bold text-white">14. Contact</h2>
              <p>
                For questions regarding these Terms and Conditions, please contact:
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
