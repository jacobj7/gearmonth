import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About — Gearmonth',
  description: 'Learn about the Gearmonth mission and team.',
};

export default function AboutPage() {
  return (
    <main className="flex min-h-screen flex-col">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-xl font-bold text-blue-700">
            gearmonth
          </Link>
          <nav className="flex items-center gap-6 text-sm font-medium text-slate-600">
            <Link href="/explore" className="hover:text-blue-700 transition-colors">
              Explore
            </Link>
            <Link href="/about" className="text-blue-700">
              About
            </Link>
            <Link
              href="/signup"
              className="rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition-colors"
            >
              Get Started
            </Link>
          </nav>
        </div>
      </header>

      <div className="mx-auto w-full max-w-3xl flex-1 px-6 py-16">
        <h1 className="text-4xl font-bold text-slate-900">About Gearmonth</h1>
        <p className="mt-6 text-lg text-slate-600">
          Gearmonth was founded by outdoor enthusiasts who were tired of
          spending hours researching gear only to end up with mediocre products.
          We believe that the right equipment transforms an experience — and
          that finding it shouldn&apos;t require a PhD in product reviews.
        </p>
        <p className="mt-4 text-lg text-slate-600">
          Every month, our editorial team tests gear across categories — hiking,
          camping, cycling, water sports, and more — and surfaces the very best
          for you. We partner with real-world athletes and weekend warriors
          alike, so our reviews reflect genuine use, not just spec sheets.
        </p>

        <h2 className="mt-12 text-2xl font-bold text-slate-900">Our values</h2>
        <ul className="mt-6 space-y-4 text-slate-600">
          <li className="flex gap-3">
            <span className="text-blue-600 font-bold">01.</span>
            <span>
              <strong className="text-slate-900">Honesty first.</strong> We
              never accept payment for placement. Every item earns its spot on
              merit.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-blue-600 font-bold">02.</span>
            <span>
              <strong className="text-slate-900">Community driven.</strong>{' '}
              User reviews carry as much weight as editorial picks. Real
              experience beats marketing copy.
            </span>
          </li>
          <li className="flex gap-3">
            <span className="text-blue-600 font-bold">03.</span>
            <span>
              <strong className="text-slate-900">Less noise.</strong> We curate
              ruthlessly so you don&apos;t have to scroll through hundreds of
              options to find what you need.
            </span>
          </li>
        </ul>

        <div className="mt-12 rounded-xl bg-blue-50 p-8 text-center">
          <h3 className="text-xl font-bold text-blue-900">
            Ready to find your next favourite piece of gear?
          </h3>
          <Link
            href="/explore"
            className="mt-4 inline-block rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition-colors"
          >
            Explore this month&apos;s picks
          </Link>
        </div>
      </div>
    </main>
  );
}
