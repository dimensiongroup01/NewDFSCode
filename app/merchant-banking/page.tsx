import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import SiteFooter from '@/components/SiteFooter';
import SiteHeader from '@/components/SiteHeader';
import Link from 'next/link';
import { FileText } from 'lucide-react';
import { merchantBankingServices as services } from '@/lib/content';

export const metadata: Metadata = pageMetadata({
  title: 'Merchant Banking Services – IPO, QIP, Buyback & Delisting',
  description:
    'SEBI-registered merchant banker for IPO, FPO, rights issue & QIP, open offers (SEBI SAST), share buyback, delisting, ESOP, fairness opinion and debt syndication.',
  path: '/merchant-banking',
  keywords: [
    'merchant banking services India',
    'IPO lead manager',
    'book running lead manager',
    'SME IPO',
    'FPO',
    'rights issue merchant banker',
    'QIP',
    'open offer SEBI SAST',
    'manager to open offer',
    'share buyback merchant banker',
    'delisting of securities',
    'ESOP implementation SEBI',
    'fairness opinion',
    'AIF placement memorandum',
    'debt syndication',
    'private placement of equity and debt'
  ]
});

// -- Data ---------------------------------------------------------------------

const differentiators = [
  {
    title: 'Value-Center Thinking',
    text: 'We function as a value center inside your transaction — not just an execution desk following instructions.',
  },
  {
    title: 'Regulatory & Commercial Balance',
    text: 'Our solutions blend regulatory precision, industry understanding, and practical commercial judgment at every stage.',
  },
  {
    title: 'Independent & Ethical Advisory',
    text: 'We deliver professional and transparent advice with implementation discipline and governance integrity built in.',
  },
  {
    title: 'Partner-Level Oversight',
    text: 'Critical decisions and transaction transitions are reviewed at partner level before execution proceeds.',
  },
  {
    title: 'Structured Delivery Benchmarks',
    text: 'Each mandate follows defined performance benchmarks to maintain quality, pace, and full accountability.',
  },
  {
    title: 'Explicit Value-Risk Communication',
    text: 'We surface value levers and risk factors early so every stakeholder can take fully informed decisions.',
  },
];


// -- Page ---------------------------------------------------------------------

export default function MerchantBankingPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" tabIndex={-1} className="min-h-screen bg-paper">

        {/* ── Hero ── */}
        <section className="band-navy">
          <div aria-hidden className="pointer-events-none absolute -left-40 top-0 -z-10 h-[30rem] w-[30rem] rounded-full bg-aqua/20 blur-[120px]" />
          <div aria-hidden className="pointer-events-none absolute -right-40 bottom-0 -z-10 h-[24rem] w-[24rem] rounded-full bg-accent/15 blur-[120px]" />

          <div className="section-shell py-16 md:py-24">
            <div className="grid gap-12 lg:grid-cols-[minmax(0,1.5fr)_minmax(0,1fr)] lg:items-end">
              <div>
                {/* SEBI badge */}
                <div className="inline-flex items-center gap-4 rounded-full border border-white/15 bg-white/5 py-2 pl-3 pr-5">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-aqua/60" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-aqua" />
                  </span>
                  <span className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-slate-300">
                    SEBI Registered Merchant Banker
                  </span>
                  <span className="h-4 w-px bg-white/20" />
                  <span className="font-bold tracking-[0.12em] text-aqua">INM000013314</span>
                </div>

                <h1 className="mt-8 max-w-4xl font-display text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[4.25rem]">
                  Full-Spectrum<br />
                  <span className="text-aqua">Merchant Banking</span>
                  <br />Investment Banking Services
                </h1>
              </div>

              <div>
                <p className="border-l-2 border-accent pl-5 text-base leading-relaxed text-slate-300 md:text-lg">
                  Dimension Financial Solutions delivers execution-focused merchant banking across equity capital markets, M&A advisory, debt placement, and corporate restructuring — with compliance precision at every stage.
                </p>
                <div className="mt-8 flex flex-wrap gap-3">
                  <Link href="/contact" className="btn-accent">
                    Discuss a Mandate →
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div aria-hidden className="h-1 w-full bg-gradient-to-r from-aqua via-aqua-600 to-accent" />
        </section>

        {/* ── Who We Are ── */}
        <section className="section-shell py-16 md:py-24">
          <div className="max-w-4xl">
            <div>
              <p className="eyebrow">Who We Are</p>
              <h2 className="heading-lg mt-5">
                A Compliance-First, Execution-Driven<br className="hidden md:block" /> Merchant Banking Platform
              </h2>
              <p className="lede mt-6">
                Dimension Financial Solutions Private Limited is a SEBI-registered Merchant Banker, since September 2025 and backed by over 17 years of capital market expertise. We partner with corporates, promoter groups, institutions, and trusts to execute complex financial mandates, including SME listings, IPOs, M&A transactions, buybacks, and institutional debt placements.
              </p>
              <p className="body-copy mt-5">
                Our operating philosophy positions us as a value center inside each transaction — not merely an execution agent. We invest in understanding each mandate deeply, structure solutions with regulatory precision, and maintain full transparency with all stakeholders through to closure.
              </p>
            </div>
          </div>
        </section>

        {/* ── Disclaimer — Non-SEBI Regulated Activities ── */}
        <section className="section-shell pb-16 md:pb-24">
          <div className="card flex flex-col gap-5 border-l-4 border-l-accent p-6 sm:flex-row sm:items-center md:px-8">
            <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent-50 text-accent">
              <FileText aria-hidden size={22} />
            </span>
            <div>
              <p className="text-[0.68rem] font-bold uppercase tracking-[0.2em] text-accent">Disclaimer</p>
              <p className="mt-1 text-[0.95rem] leading-relaxed text-muted">
                Click on the link to download{' '}
                <a
                  href="/images/non-sebi-disclaimer.pdf"
                  download="Disclaimer-for-Non-SEBI-Regulated-Activities.pdf"
                  className="font-semibold text-navy underline decoration-accent decoration-2 underline-offset-4 transition-colors hover:text-accent"
                >
                  Disclaimer for Non-SEBI Regulated Activities
                </a>
              </p>
            </div>
          </div>
        </section>

        {/* ── Services Grid ── */}
        <section className="border-y border-line bg-white py-16 md:py-24">
          <div className="section-shell">
            <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
              <div>
                <p className="eyebrow">Our Services</p>
                <h2 className="heading-lg mt-5 md:text-5xl">
                  Comprehensive Merchant Banking Services
                </h2>
              </div>
              <p className="lede lg:justify-self-end">
                From first public offerings to complex restructuring mandates, our service suite covers the full spectrum of capital market and corporate finance requirements.
              </p>
            </div>

            <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {services.map((svc) => {
                return (
                  <article
                    key={svc.id}
                    id={`service-${svc.id}`}
                    className="group card card-hover flex scroll-mt-28 flex-col p-6 target:border-aqua md:p-7"
                  >
                    <h3 className="font-display text-xl font-semibold leading-snug text-navy">{svc.title}</h3>

                    <ul className="mt-5 space-y-2.5 border-t border-line pt-5">
                      {svc.points.map((pt, i) => (
                        <li key={`${svc.id}-${i}`} className="flex items-start gap-3 text-sm leading-relaxed text-ink">
                          <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-aqua" />
                          {pt}
                        </li>
                      ))}
                    </ul>

                  </article>
                );
              })}
            </div>
          </div>
        </section>

        {/* ── Why Choose Us ── */}
        <section className="section-shell py-16 md:py-24">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-16">
            <div className="lg:sticky lg:top-32 lg:self-start">
              <p className="eyebrow">Why Dimension</p>
              <h2 className="heading-lg mt-5">
                Why Clients Choose Us for Critical Transactions
              </h2>
              <p className="lede mt-5">
                A focused emerging merchant banker with high governance standards — built around six core operating principles experienced at every stage of a mandate.
              </p>
            </div>

            <div className="grid gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2">
              {differentiators.map((item, i) => (
                <div key={item.title} className="group bg-white p-6 transition-colors hover:bg-navy-50 md:p-7">
                  <span className="font-display text-2xl font-semibold tabular-nums text-accent">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-3 font-body text-base font-bold text-navy">{item.title}</h3>
                  <p className="mt-2 text-[0.925rem] leading-relaxed text-muted">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter cta={false} />
    </>
  );
}
