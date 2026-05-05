import Link from 'next/link';

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <span className="text-xl font-bold text-blue-700">gearmonth</span>
          <nav className="flex items-center gap-6 text-sm font-medium text-slate-600">
            <Link href="/explore" className="hover:text-blue-700 transition-colors">
              Explore
            </Link>
            <Link href="/about" className="hover:text-blue-700 transition-colors">
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

      <section className="mx-auto flex max-w-6xl flex-1 flex-col items-center justify-center px-6 py-24 text-center">
        <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 text-balance">
          Discover the best gear,{' '}
          <span className="text-blue-600">every month</span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg text-slate-600 text-balance">
          Gearmonth curates the top-rated equipment, tools, and accessories so
          you never miss what matters. Trusted reviews, real users, one place.
        </p>
        <div className="mt-10 flex gap-4">
          <Link
            href="/explore"
            className="rounded-lg bg-blue-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors"
          >
            Browse this month
          </Link>
          <Link
            href="/about"
            className="rounded-lg border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-700 shadow-sm hover:bg-slate-50 transition-colors"
          >
            Learn more
          </Link>
        </div>
      </section>

      <section className="bg-white border-t border-slate-200">
        <div className="mx-auto max-w-6xl px-6 py-16">
          <h2 className="text-center text-2xl font-bold text-slate-900">
            Why Gearmonth?
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            <div className="rounded-xl border border-slate-200 p-6">
              <div className="mb-4 text-3xl">&#x1F50D;</div>
              <h3 className="text-lg font-semibold text-slate-900">
                Expert Curation
              </h3>
              <p className="mt-2 text-slate-600">
                Our team tests and reviews hundreds of products so you only see
                the ones worth your time.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 p-6">
              <div className="mb-4 text-3xl">&#x1F4C5;</div>
              <h3 className="text-lg font-semibold text-slate-900">
                Monthly Drops
              </h3>
              <p className="mt-2 text-slate-600">
                Fresh picks every month — stay up to date without drowning in
                noise.
              </p>
            </div>
            <div className="rounded-xl border border-slate-200 p-6">
              <div className="mb-4 text-3xl">&#x1F91D;</div>
              <h3 className="text-lg font-semibold text-slate-900">
                Community Reviews
              </h3>
              <p className="mt-2 text-slate-600">
                Real ratings from real users. No sponsored placements, no
                hidden agendas.
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-6 text-sm text-slate-500">
          <span>&copy; {new Date().getFullYear()} Gearmonth. All rights reserved.</span>
          <div className="flex gap-4">
            <Link href="/privacy" className="hover:text-slate-700 transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-slate-700 transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
