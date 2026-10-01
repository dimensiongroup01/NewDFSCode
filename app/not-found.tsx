import Link from 'next/link';
import SiteFooter from '@/components/SiteFooter';
import SiteHeader from '@/components/SiteHeader';

export default function NotFound() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" tabIndex={-1} className="band-navy flex min-h-[70vh] items-center">
        <section className="section-shell py-24 text-center">
          <p className="eyebrow eyebrow-light justify-center">Page Not Found</p>
          <h1 className="heading-xl mt-6 text-white">This page is not available.</h1>
          <p className="mx-auto mt-4 max-w-xl text-slate-300">
            The link may be outdated or the page may have moved.
          </p>
          <Link href="/home" className="btn-accent mt-8">
            Back to Home
            <span aria-hidden>→</span>
          </Link>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
