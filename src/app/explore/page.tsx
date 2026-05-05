import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Explore — Gearmonth',
  description: 'Browse this month\'s top gear picks curated by Gearmonth.',
};

const FEATURED_ITEMS = [
  {
    id: '1',
    name: 'Trail Runner Pro 2024',
    category: 'Footwear',
    rating: 4.8,
    reviewCount: 312,
    description:
      'Lightweight trail shoe with superior grip and all-day comfort for technical terrain.',
  },
  {
    id: '2',
    name: 'HydroMax 2L Reservoir',
    category: 'Hydration',
    rating: 4.6,
    reviewCount: 187,
    description:
      'BPA-free hydration reservoir with magnetic bite valve and quick-release hanger.',
  },
  {
    id: '3',
    name: 'AlphaShell Jacket',
    category: 'Outerwear',
    rating: 4.9,
    reviewCount: 540,
    description:
      'Fully waterproof, breathable hardshell with helmet-compatible hood and pit-zips.',
  },
  {
    id: '4',
    name: 'Summit Trekking Poles',
    category: 'Accessories',
    rating: 4.5,
    reviewCount: 98,
    description:
      'Collapsible carbon-fiber poles with ergonomic grips and interchangeable baskets.',
  },
  {
    id: '5',
    name: 'Basecamp Sleeping Bag',
    category: 'Camping',
    rating: 4.7,
    reviewCount: 221,
    description:
      '15°F rated mummy bag with recycled down fill and a compression stuff sack.',
  },
  {
    id: '6',
    name: 'LumaTech Headlamp 500',
    category: 'Lighting',
    rating: 4.6,
    reviewCount: 405,
    description:
      '500-lumen rechargeable headlamp with red night-vision mode and tilt adjustment.',
  },
];

export default function ExplorePage() {
  return (
    <main className="flex min-h-screen flex-col">
      <header className="border-b border-slate-200 bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <Link href="/" className="text-xl font-bold text-blue-700">
            gearmonth
          </Link>
          <nav className="flex items-center gap-6 text-sm font-medium text-slate-600">
            <Link href="/explore" className="text-blue-700">
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

      <div className="mx-auto w-full max-w-6xl flex-1 px-6 py-12">
        <h1 className="text-3xl font-bold text-slate-900">
          May 2026 — Top Picks
        </h1>
        <p className="mt-2 text-slate-600">
          Hand-picked gear from our editorial team. Updated monthly.
        </p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURED_ITEMS.map((item) => (
            <article
              key={item.id}
              className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <span className="inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
                {item.category}
              </span>
              <h2 className="mt-3 text-lg font-semibold text-slate-900">
                {item.name}
              </h2>
              <p className="mt-2 text-sm text-slate-600">{item.description}</p>
              <div className="mt-4 flex items-center gap-2 text-sm text-slate-500">
                <span className="font-semibold text-amber-500">
                  {'★'.repeat(Math.round(item.rating))}
                </span>
                <span>
                  {item.rating} ({item.reviewCount} reviews)
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
