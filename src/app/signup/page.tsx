import type { Metadata } from 'next';
import Link from 'next/link';
import SignupForm from './SignupForm';

export const metadata: Metadata = {
  title: 'Sign Up — Gearmonth',
  description: 'Create your Gearmonth account and start discovering great gear.',
};

export default function SignupPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-slate-50 px-4 py-12">
      <Link href="/" className="mb-8 text-2xl font-bold text-blue-700">
        gearmonth
      </Link>

      <div className="w-full max-w-md rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
        <h1 className="text-2xl font-bold text-slate-900">Create an account</h1>
        <p className="mt-1 text-sm text-slate-500">
          Already have one?{' '}
          <Link href="/login" className="text-blue-600 hover:underline">
            Sign in
          </Link>
        </p>

        <SignupForm />
      </div>
    </main>
  );
}
