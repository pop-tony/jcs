import React from 'react'

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white px-4 py-24 text-zinc-900 dark:bg-black dark:text-white">
      <div className="mx-auto max-w-4xl">
        <h1 className="mb-2 text-5xl font-black">Privacy Policy</h1>
        <p className="mb-12 text-sm text-zinc-500 dark:text-zinc-400">Last updated: June 4, 2026</p>

        <div className="space-y-8 text-zinc-700 dark:text-zinc-300">
          <section>
            <h2 className="mb-3 text-2xl font-bold text-zinc-900 dark:text-white">1. Information We Collect</h2>
            <p className="mb-2">When you shop at JCS, we collect:</p>
            <ul className="ml-6 list-disc space-y-1">
              <li><span className="font-semibold">Personal Info:</span> Name, email, phone, shipping address</li>
              <li><span className="font-semibold">Payment Info:</span> Processed securely by Paystack. We do not store card details</li>
              <li><span className="font-semibold">Order History:</span> Products purchased, dates, amounts</li>
              <li><span className="font-semibold">Site Usage:</span> Pages visited, products viewed via cookies</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-bold text-zinc-900 dark:text-white">2. How We Use Your Information</h2>
            <ul className="ml-6 list-disc space-y-1">
              <li>Process and fulfill your orders</li>
              <li>Send order confirmations and shipping updates</li>
              <li>Provide customer support and handle returns</li>
              <li>Send marketing emails about new drops (only if you opt in)</li>
              <li>Improve our website and product selection</li>
              <li>Prevent fraud and comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-bold text-zinc-900 dark:text-white">3. Data Sharing</h2>
            <p className="mb-2">
              We never sell your data. We share information only when necessary:
            </p>
            <ul className="ml-6 list-disc space-y-1">
              <li><span className="font-semibold">Shipping Partners:</span> To deliver your order</li>
              <li><span className="font-semibold">Paystack:</span> To process payments securely</li>
              <li><span className="font-semibold">Analytics:</span> Anonymized data to improve our site</li>
              <li><span className="font-semibold">Legal:</span> If required by Ghanaian law</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-bold text-zinc-900 dark:text-white">4. Cookies</h2>
            <p>
              We use cookies to keep you logged in, remember your cart, and understand how customers use our site. 
              You can disable cookies in your browser, but some features may not work.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-bold text-zinc-900 dark:text-white">5. Data Security</h2>
            <p>
              We use industry-standard SSL encryption and secure servers. Payment data is handled by Paystack 
              and never touches our servers. However, no method of transmission over the internet is 100% secure.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-bold text-zinc-900 dark:text-white">6. Your Rights</h2>
            <p className="mb-2">You have the right to:</p>
            <ul className="ml-6 list-disc space-y-1">
              <li>Access the personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your data</li>
              <li>Unsubscribe from marketing emails anytime</li>
            </ul>
            <p className="mt-2">
              To exercise these rights, email <span className="font-semibold text-[#9F2B68]">privacy@jcsboutique.com</span>.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-bold text-zinc-900 dark:text-white">7. Data Retention</h2>
            <p>
              We retain order data for 7 years for accounting and legal purposes. Marketing data is kept 
              until you unsubscribe. You can request deletion anytime.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-bold text-zinc-900 dark:text-white">8. Children's Privacy</h2>
            <p>
              JCS does not knowingly collect data from anyone under 18. If you believe we have, 
              contact us immediately for deletion.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-bold text-zinc-900 dark:text-white">9. Changes to This Policy</h2>
            <p>
              We may update this policy. Changes will be posted with an updated date. 
              Continued use of our site constitutes acceptance.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-bold text-zinc-900 dark:text-white">10. Contact Us</h2>
            <p>
              For privacy questions: <br />
              <span className="font-semibold">Email:</span> <span className="text-[#9F2B68]">privacy@jcsboutique.com</span> <br />
              <span className="font-semibold">WhatsApp:</span> +233 59 822 7146 <br />
              <span className="font-semibold">Address:</span> Accra, Ghana
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
