import Link from 'next/link';
import SiteFooter from '@/components/SiteFooter';
import SiteHeader from '@/components/SiteHeader';

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main className="grid-overlay min-h-screen bg-surface py-24">
        <section className="section-shell">
          <div className="relative mx-auto max-w-2xl overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white p-8 text-center shadow-[0_24px_60px_rgba(15,23,42,0.10)] md:p-12">
            <span
              aria-hidden
              className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#10284a] via-[#00B4D8] to-[#FF6900]"
            />
            <span
              aria-hidden
              className="pointer-events-none absolute -right-16 -top-20 h-56 w-56 rounded-full bg-[#00B4D8]/10 blur-3xl"
            />

            <p className="relative flex items-center justify-center gap-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#007A96]">
              <span aria-hidden className="h-px w-5 bg-[#007A96]/50" />
              Page Not Found
            </p>
            <h1 className="relative mt-3 font-display text-3xl text-[#10284a] md:text-4xl">
              This page is not available.
            </h1>
            <p className="relative mx-auto mt-4 max-w-xl text-sm text-slate-600">
              The link may be outdated or the page may have moved.
            </p>
            <div className="relative mx-auto mt-5 h-1 w-20 rounded-full bg-gradient-to-r from-[#10284a] to-[#00B4D8]" />
            <Link
              href="/home"
              className="btn-primary relative mt-7 inline-flex items-center justify-center gap-2 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg"
            >
              Back to Home
              <span aria-hidden>→</span>
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
