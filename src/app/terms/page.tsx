import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Terms of Service — Gearmonth',
  description: 'Gearmonth terms of service and conditions of use.',
};

export default function TermsPage() {
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
        <h1 className="text-3xl font-bold text-slate-900">Terms of Service</h1>
        <p className="mt-2 text-sm text-slate-500">Last updated: May 2026</p>

        <div className="mt-8 space-y-6 text-slate-600">
          <section>
            <h2 className="text-xl font-semibold text-slate-900">
              1. Acceptance of terms
            </h2>
            <p className="mt-2">
              By accessing or using Gearmonth you agree to be bound by these
              Terms of Service. If you do not agree, please do not use the
              service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">
              2. Use of the service
            </h2>
            <p className="mt-2">
              You may use Gearmonth for personal, non-commercial purposes. You
              must not attempt to scrape, reverse-engineer, or otherwise misuse
              the platform.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">
              3. User content
            </h2>
            <p className="mt-2">
              Reviews and other content you submit remain your property. By
              submitting content you grant Gearmonth a worldwide, royalty-free
              licence to display and distribute it as part of the service.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">
              4. Limitation of liability
            </h2>
            <p className="mt-2">
              Gearmonth is provided &quot;as is&quot; without warranties of any
              kind. To the fullest extent permitted by law, Gearmonth shall not
              be liable for any indirect, incidental, or consequential damages.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-slate-900">5. Contact</h2>
            <p className="mt-2">
              Questions? Email us at{' '}
              <span className="text-blue-600">legal@gearmonth.com</span>.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
