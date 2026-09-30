import Link from 'next/link';

const footerYear = '2026';

const linkClass = 'text-slate-300 transition-colors hover:text-white';

export default function SiteFooter() {
  return (
    <footer className="band-navy mt-auto">
      <div className="section-shell pb-10 pt-16 md:pt-20">
        {/* Statement + actions */}
        <div className="grid gap-10 border-b border-white/10 pb-12 lg:grid-cols-[minmax(0,1.4fr)_auto] lg:items-end">
          <div>
            <p className="eyebrow eyebrow-light">Dimension Financial Solutions</p>
            <h3 className="mt-5 max-w-2xl font-display text-3xl font-semibold leading-tight text-white md:text-4xl">
              Merchant banking and debt securities services with a client-first, compliance-led approach.
            </h3>
            <p className="mt-5 max-w-2xl text-[0.95rem] leading-7 text-slate-300">
              DFS works with institutions, trusts, corporates, and investors through disciplined market execution,
              advisory support, and long-term financial relationships.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <Link href="/contact" className="btn-accent">
              Talk to DFS
            </Link>
            <Link href="/about-us" className="btn-ghost-light">
              Explore the Firm
            </Link>
          </div>
        </div>

        {/* Link columns */}
        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[minmax(0,1.2fr)_repeat(3,minmax(0,1fr))]">
          <div>
            <h4 className="font-body text-xs font-bold uppercase tracking-[0.18em] text-aqua">Core Focus</h4>
            <div className="mt-5 flex flex-wrap gap-2">
              {['Merchant Banking', 'Debt Securities', 'Stock Broking'].map((item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/15 bg-white/5 px-3.5 py-1.5 text-xs font-semibold text-white"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-body text-xs font-bold uppercase tracking-[0.18em] text-aqua">Services</h4>
            <ul className="mt-5 space-y-3 text-sm font-medium">
              <li><Link href="/merchant-banking" className={linkClass}>Merchant Banking</Link></li>
              <li><Link href="/services" className={linkClass}>Debt Securities</Link></li>
              <li><Link href="/stock-broking" className={linkClass}>Stock Broking</Link></li>
              <li><Link href="/sitemap-page" className={linkClass}>Sitemap</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-body text-xs font-bold uppercase tracking-[0.18em] text-aqua">Investor</h4>
            <ul className="mt-5 space-y-3 text-sm font-medium">
              <li><Link href="/annual" className={linkClass}>Investor Corner</Link></li>
              <li><Link href="/career" className={linkClass}>Careers</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="font-body text-xs font-bold uppercase tracking-[0.18em] text-aqua">Contact</h4>
            <ul className="mt-5 space-y-3 text-sm font-medium">
              <li>
                <a href="mailto:contact@dimensionfinancial.co.in" className={`${linkClass} break-all`}>
                  contact@dimensionfinancial.co.in
                </a>
              </li>
              <li><a href="tel:01204151349" className={linkClass}>0120-4151349</a></li>
              <li>
                <a href="/images/icp.pdf" target="_blank" rel="noreferrer" className={linkClass}>
                  Investor Policy
                </a>
              </li>
              <li>
                <a href="/images/coe.pdf" target="_blank" rel="noreferrer" className={linkClass}>
                  Code of Conduct
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
          <p>{footerYear} Dimension Financial Solutions Pvt. Ltd.</p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
            <p>Client-centric financial advisory with a compliance-led operating model.</p>
            <Link href="/sitemap-page" className="transition-colors hover:text-white">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
