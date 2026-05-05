import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Privacy Policy — Gearmonth',
  description: 'Gearmonth privacy policy and data handling practices.',
};

export default function PrivacyPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-xl font-bold text-blue-700">
            gearmonth
          </Link>
        </div>
      </header>

      <div className="mx-auto w-full max-w-3xl flex-1 px-6 py-16">
        <h1 className="text-3xl font-bold text-slate-900">Privacy Policy</h1>
        <p className="mt-2 text-sm text-slate-500">Last updated: May 2026</p>

        <div className="mt-8 space-y-6 text-slate-600">
          <section>
            <h2 className="text-xl font-semibold text-slate-900">
              1. Information we collect
            </h2>
            <p className="mt-2">
              We collect information you provide directly (name, email address,
              password), as well as usage data such as pages visited, gear items
              viewed, and review interactions. We do not sell your personal data.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">
              2. How we use your information
            </h2>
            <p className="mt-2">
              Your information is used to operate and improve the Gearmonth
              service, personalise gear recommendations, send transactional
              emails (password reset, new picks notifications), and comply with
              legal obligations.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">
              3. Data retention
            </h2>
            <p className="mt-2">
              We retain your account data for as long as your account remains
              active. You may request deletion at any time by contacting
              privacy@gearmonth.com.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">
              4. Contact
            </h2>
            <p className="mt-2">
              Questions? Email us at{' '}
              <span className="text-blue-600">privacy@gearmonth.com</span>.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
