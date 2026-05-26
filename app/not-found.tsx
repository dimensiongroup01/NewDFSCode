import Link from 'next/link';
import SiteFooter from '@/components/SiteFooter';
import SiteHeader from '@/components/SiteHeader';

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="grid-overlay min-h-screen bg-surface py-24">
        <section className="section-shell">
          <div className="card-premium mx-auto max-w-2xl p-8 text-center md:p-10">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#007A96]">
              Page Not Found
            </p>
            <h1 className="mt-3 font-display text-3xl text-[#10284a] md:text-4xl">
              This page is not available.
            </h1>
            <p className="mx-auto mt-4 max-w-xl text-sm text-slate-600">
              The link may be outdated or the page may have moved.
            </p>
            <Link
              href="/home"
              className="btn-primary mt-6 inline-flex items-center justify-center"
            >
              Back to Home
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
