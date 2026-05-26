import Link from 'next/link';

const footerYear = '2026';

export default function SiteFooter() {
  return (
    <footer className="relative -mt-px overflow-hidden bg-[#eef6ff] pt-1 before:absolute before:inset-x-0 before:top-0 before:h-1 before:bg-[#eef6ff] before:content-['']">
      <div className="section-shell relative z-10">
        <div className="rounded-[2rem] border border-[#E2E8F0] bg-white/92 p-6 shadow-[0_18px_46px_rgba(20,30,51,0.07)] md:p-8">
          <div className="grid gap-8 border-b border-slate-200 pb-8 md:grid-cols-[minmax(0,1.1fr)_auto] md:items-end">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#007A96]">Dimension Financial Solutions</p>
              <h3 className="mt-3 max-w-xl font-display text-2xl font-semibold leading-tight text-[#10284a] md:text-3xl">
                Merchant banking and debt securities services with a client-first, compliance-led approach.
              </h3>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-[#556274] md:text-base">
                DFS works with institutions, trusts, corporates, and investors through disciplined market execution,
                advisory support, and long-term financial relationships.
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-lg bg-[#0096B7] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#007A96]"
              >
                Talk to DFS
              </Link>
              <Link
                href="/about-us"
                className="rounded-lg border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-[#10284a] transition hover:border-[#00B4D8]"
              >
                Explore the Firm
              </Link>
            </div>
          </div>

          <div className="grid gap-8 pt-8 md:grid-cols-2 xl:grid-cols-[minmax(0,1fr)_repeat(3,minmax(0,0.62fr))]">
            <div className="rounded-[1.5rem] border border-slate-200 bg-white/72 p-5">
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#007A96]">Core Focus</p>
              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-[#10284a]">
                  Merchant Banking
                </span>
                <span className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-[#10284a]">
                  Debt Securities
                </span>
                <span className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-[#10284a]">
                  Stock Broking
                </span>
              </div>
            </div>

            <div className="min-w-0">
              <h4 className="font-display text-lg text-[#10284a]">Services</h4>
              <div className="mt-4 space-y-3 text-sm font-medium text-[#556274]">
                <p><Link href="/merchant-banking" className="transition hover:text-[#007A96]">Merchant Banking</Link></p>
                <p><Link href="/services" className="transition hover:text-[#007A96]">Debt Securities</Link></p>
                <p><Link href="/stock-broking" className="transition hover:text-[#007A96]">Stock Broking</Link></p>
                <p><Link href="/sitemap-page" className="transition hover:text-[#007A96]">Sitemap</Link></p>
              </div>
            </div>

            <div className="min-w-0">
              <h4 className="font-display text-lg text-[#10284a]">Investor</h4>
              <div className="mt-4 space-y-3 text-sm font-medium text-[#556274]">
                <p><Link href="/annual" className="transition hover:text-[#007A96]">Investor Corner</Link></p>
                <p><Link href="/investor" className="transition hover:text-[#007A96]">Investor Information</Link></p>
                <p><Link href="/career" className="transition hover:text-[#007A96]">Careers</Link></p>
              </div>
            </div>

            <div className="min-w-0">
              <h4 className="font-display text-lg text-[#10284a]">Contact</h4>
              <div className="mt-4 space-y-3 text-sm font-medium text-[#556274]">
                <p>
                  <a
                    href="mailto:contact@dimensionfinancial.co.in"
                    className="break-all transition hover:text-[#007A96]"
                  >
                    contact@dimensionfinancial.co.in
                  </a>
                </p>
                <p><a href="tel:01204151349" className="transition hover:text-[#007A96]">0120-4151349</a></p>
                <p>
                  <a
                    href="/Documents/Policies/Investor%20Complaints%20Redressal%20Policy.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="break-words transition hover:text-[#007A96]"
                  >
                    Investor Policy
                  </a>
                </p>
                <p>
                  <a
                    href="/Documents/Policies/Code%20of%20Conduct%20and%20Ethics%20Policy.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="break-words transition hover:text-[#007A96]"
                  >
                    Code of Conduct
                  </a>
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 border-t border-slate-200 pt-5 text-sm text-[#6b7280] md:flex-row md:items-center md:justify-between">
            <p>{footerYear} Dimension Financial Solutions Pvt. Ltd.</p>
            <div className="flex flex-wrap gap-4">
              <p>Client-centric financial advisory with a compliance-led operating model.</p>
              <Link href="/sitemap-page" className="transition hover:text-[#007A96]">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

