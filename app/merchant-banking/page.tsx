import type { Metadata } from 'next';
import SiteFooter from '@/components/SiteFooter';
import SiteHeader from '@/components/SiteHeader';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Merchant Banking',
  description:
    'SEBI-registered merchant banking services covering IPO/FPO support, SME listings, rights issues, QIP, M&A advisory, valuation, buybacks, delisting, ESOP, and debt placement with compliance-led execution.',
  alternates: {
    canonical: '/merchant-banking'
  }
};

// -- Data ---------------------------------------------------------------------

const services = [
  {
    id: '01',
    title: 'IPO, FPO & Rights Issues',
    accent: '#10284a',
    summary: 'Complete management of public equity offerings including book-built IPOs, further public offers, and rights issue mandates.',
    points: [
      "Management of IPO's, FPO's and Rights Issues",
      "Underwriting in Public Issues including SME IPO's",
      'Qualified Institutional Placements (QIP)',
      'Private placement of equity ',

    ],
  },
  {
    id: '02',
    title: 'Takeover & Open Offer',
    accent: '#10284a',
    summary: 'Advisory and execution support for acquirers and target companies navigating SEBI Takeover Code obligations.',
    points: [
      'Open offer structuring and regulatory coordination',
      'Manager to Open Offer under SEBI Takeover Code',
      'Strategic planning for acquirer and target',
      'Offer document preparation and SEBI filing',
      
    ],
  },
  {
    id: '03',
    title: 'Share Buyback',
    accent: '#7a3e00',
    summary: 'End-to-end management of share buyback programs for listed companies under SEBI Buyback Regulations.',
    points: [
      'Buyback structuring — tender offer or open market',
      'Manager to Buyback — SEBI and exchange filings',
      'Strategic planning and pricing determination',
      'Regulatory compliance and shareholder communication',
      'Execution management and post-buyback reporting',
    ],
  },
  {
    id: '04',
    title: 'Delisting of Securities',
    accent: '#10284a',
    summary: 'Advisory support for voluntary delisting of shares in compliance with SEBI Delisting Regulations 2021.',
    points: [
      'Manager to Delisting — process design and coordination',
      'Reverse book building mechanism management',
      'SEBI and stock exchange regulatory filings',
      'Promoter and public shareholder communication',
      'Post-delisting compliance and settlement support',
    ],
  },
  {
    id: '05',
    title: 'Capital Restructuring',
    accent: '#10284a',
    summary: 'Strategic advisory for capital structure optimization, including equity restructuring and corporate reorganization.',
    points: [
      'Capital restructuring strategy and design',
      'Reduction of capital and reserve restructuring',
      'Scheme documentation and NCLT filing support',
      'Debt-equity conversion advisory',
      'Regulatory and shareholder approval coordination',
    ],
  },
  {
    id: '06',
    title: 'Mergers, Acquisitions & Demergers',
    accent: '#10284a',
    summary: 'Strategic M&A advisory across the full transaction lifecycle — from target identification through structured closure.',
    points: [
      'Advisory on Merger, Demerger, and Amalgamation',
      
      'Due diligence coordination and transaction structuring',
      'Capital restructuring and scheme documentation',
      'NCLT filing support and regulatory coordination',
    ],
  },
  {
    id: '07',
    title: 'Valuation & ESOP Advisory',
    accent: '#10284a',
    summary: 'Independent, regulation-aligned valuation services for businesses, assets, and financial instruments across transaction contexts.',
    points: [
      'Business and enterprise valuation',

      'Equity share valuation for M&A and compliance',
      'ESOP scheme framing and Certification',
      
      'Grant, vesting, and exercise schedule structuring',
      'Tax and accounting impact advisory',
      'Board and shareholder resolution support',

    ],
  },

  {
    id: '08',
    title: 'Debt Placement & Advisory',
    accent: '#10284a',
    summary: 'Institutional debt placement and syndication advisory for bonds, debentures, and fixed deposit programs.',
    points: [
      'Private placement of bonds and debentures with institutions and trusts',
      'Management of public issues of debt securities',
      'Debt syndication advisory and financial structuring',
      'Marketing of corporate fixed deposits',
      'Adherence to SEBI Regulations and Companies Act 2013',
    ],
  },
];

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


// -- Service icon map ---------------------------------------------------------
const serviceIcons: Record<string, string> = {
  '01': '🏛️', '02': '⚖️', '03': '🔄', '04': '📋',
  '05': '🏗️', '06': '🤝', '07': '📊', '08': '👥', '09': '💼',
};

// -- Page ---------------------------------------------------------------------

export default function MerchantBankingPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" tabIndex={-1} className="min-h-screen bg-[#F6F8FA]">

        {/* ── SEBI Registration Banner ── */}
        <div className="bg-[#10284a] text-white">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-2.5 flex flex-wrap items-center justify-center gap-x-6 gap-y-1.5 text-center text-xs sm:text-sm">
            <span className="flex items-center gap-2">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#FF6900] text-[9px] font-black text-white">✓</span>
              <span className="font-medium text-slate-300">SEBI Registered Merchant Banker</span>
            </span>
            <span className="hidden sm:block h-3.5 w-px bg-slate-600" />
            <span className="font-bold tracking-widest text-[#00D4FF]">INM000013314</span>
            <span className="hidden sm:block h-3.5 w-px bg-slate-600" />
            <span className="flex items-center gap-2">
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#FF6900] text-[9px] font-black text-white">✓</span>
              <span className="font-medium text-slate-300">BSE Debt Segment · INZ000313233</span>
            </span>
          </div>
        </div>

        {/* ── Hero ── */}
        <section className="relative overflow-hidden bg-[#10284a] pb-28 pt-16 md:pt-24">
          {/* Decorative grid lines */}
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage: 'linear-gradient(#00B4D8 1px,transparent 1px),linear-gradient(90deg,#00B4D8 1px,transparent 1px)',
              backgroundSize: '60px 60px',
            }}
          />
          {/* Ambient glows */}
          <div className="absolute -left-32 top-0 h-[500px] w-[500px] rounded-full bg-[#0096B7]/20 blur-[100px]" />
          <div className="absolute -right-32 bottom-0 h-[400px] w-[400px] rounded-full bg-[#FF6900]/15 blur-[90px]" />

          <div className="section-shell relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {/* SEBI badge — prominent */}
            <div className="inline-flex items-center gap-3 rounded-2xl border border-[#00D4FF]/30 bg-[#00D4FF]/10 px-5 py-3 backdrop-blur-sm">
              <div className="flex flex-col">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#00D4FF]/70">SEBI Registered Merchant Banker</span>
                <span className="mt-0.5 font-mono text-base font-black tracking-[0.15em] text-[#00D4FF] md:text-lg">INM000013314</span>
              </div>
              <div className="h-10 w-px bg-[#00D4FF]/20" />
              <div className="flex flex-col">
                <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">Operating Since</span>
                <span className="mt-0.5 font-bold text-white">2009</span>
              </div>
            </div>

            <h1 className="mt-8 max-w-4xl text-4xl font-black leading-[1.08] tracking-tight text-white md:text-6xl lg:text-7xl">
              Full-Spectrum<br />
              <span className="bg-gradient-to-r from-[#00D4FF] to-[#00B4D8] bg-clip-text text-transparent">
                Merchant Banking
              </span>
              <br />Investment Banking Services
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
              Dimension Financial Solutions delivers execution-focused merchant banking across equity capital markets, M&A advisory, debt placement, and corporate restructuring — with compliance precision at every stage.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="rounded-xl bg-[#FF6900] px-7 py-3.5 text-sm font-bold text-white shadow-lg shadow-[#FF6900]/30 transition hover:bg-[#e05c00] hover:shadow-xl"
              >
                Discuss a Mandate →
              </Link>
              <Link
                href="/about-us"
                className="rounded-xl border border-white/20 bg-white/10 px-7 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
              >
                Our Team
              </Link>
            </div>

            {/* Credential strip */}
            <div className="mt-14 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {[
                { label: 'Registration', value: 'INM000013314', sub: 'SEBI Merchant Banker' },
                { label: 'Exchange', value: 'BSE Member', sub: 'Debt Segment' },
                { label: 'Broker Reg.', value: 'INZ000313233', sub: 'Stock Broker' },
                { label: 'Execution', value: '100%', sub: 'Compliance-Led' },
              ].map((s) => (
                <div
                  key={s.label}
                  className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm"
                >
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#00D4FF]/60">{s.label}</p>
                  <p className="mt-1 font-mono text-base font-black text-white md:text-lg">{s.value}</p>
                  <p className="mt-0.5 text-[11px] text-slate-400">{s.sub}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Wave divider */}
          <div className="absolute bottom-0 left-0 right-0 h-10 overflow-hidden">
            <svg viewBox="0 0 1440 40" preserveAspectRatio="none" className="h-full w-full" fill="#F6F8FA">
              <path d="M0,40 L0,20 Q360,0 720,20 Q1080,40 1440,20 L1440,40 Z" />
            </svg>
          </div>
        </section>

        {/* ── Who We Are ── */}
        <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
          <div className="overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white shadow-sm">
            <div className="grid md:grid-cols-[1.3fr_0.7fr]">
              <div className="p-8 md:p-12">
                <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#FF6900]">Who We Are</p>
                <h2 className="mt-3 text-2xl font-bold text-[#10284a] md:text-3xl">
                  A Compliance-First, Execution-Driven<br />Merchant Banking Platform
                </h2>
                <p className="mt-5 text-sm leading-relaxed text-slate-600 md:text-base">
                  Dimension Financial Solutions Private Limited is a SEBI-registered Merchant Banker, since September 2025 and backed by over 17 years of capital market expertise. We partner with corporates, promoter groups, institutions, and trusts to execute complex financial mandates, including SME listings, IPOs, M&A transactions, buybacks, and institutional debt placements.
                </p>
                <p className="mt-4 text-sm leading-relaxed text-slate-600 md:text-base">
                  Our operating philosophy positions us as a value center inside each transaction — not merely an execution agent. We invest in understanding each mandate deeply, structure solutions with regulatory precision, and maintain full transparency with all stakeholders through to closure.
                </p>
              </div>

              {/* SEBI Card — visually prominent */}
              <div className="flex flex-col gap-3 bg-gradient-to-br from-[#10284a] to-[#0d1f3c] p-8 md:p-10">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#00D4FF]/70">Regulatory Credentials</p>

                <div className="mt-2 rounded-2xl border border-[#00D4FF]/20 bg-[#00D4FF]/10 p-5">
                  <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#00D4FF]/60">SEBI Registration No.</p>
                  <p className="mt-1 font-mono text-xl font-black tracking-widest text-[#00D4FF] md:text-2xl">INM000013314</p>
                  <p className="mt-1 text-xs text-slate-400">Merchant Banker</p>
                </div>

                {[
                  { label: 'BSE Member', value: 'Debt Segment' },
                  { label: 'Stock Broker Reg.', value: 'INZ000313233' },
                  { label: 'Operating Since', value: '2009' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3">
                    <p className="text-xs text-slate-400">{item.label}</p>
                    <p className="font-mono text-sm font-bold text-white">{item.value}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Services Grid ── */}
        <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
          <div className="mb-10 text-center">
            <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#FF6900]">Our Services</p>
            <h2 className="mt-2 text-3xl font-bold text-[#10284a] md:text-4xl">
              Comprehensive Merchant Banking Services
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm leading-relaxed text-slate-500 md:text-base">
              From first public offerings to complex restructuring mandates, our service suite covers the full spectrum of capital market and corporate finance requirements.
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {services.map((svc) => (
              <article
                key={svc.id}
                className="group relative overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#00B4D8] hover:shadow-lg"
              >
                {/* Top accent bar */}
                <div
                  className="absolute inset-x-0 top-0 h-0.5"
                  style={{ background: `linear-gradient(90deg, ${svc.accent}, transparent 70%)` }}
                />

                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#F0F7FF] text-xl shadow-inner">
                    {serviceIcons[svc.id]}
                  </span>
                  <div>
                    <p className="font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#FF6900]">
                      Service {svc.id}
                    </p>
                    <h3 className="mt-0.5 text-base font-bold leading-snug text-[#10284a]">
                      {svc.title}
                    </h3>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-relaxed text-slate-500">{svc.summary}</p>

                <ul className="mt-4 space-y-1.5">
                  {svc.points.map((pt) => (
                    <li key={pt} className="flex items-start gap-2.5 text-sm text-slate-600">
                      <span
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full"
                        style={{ backgroundColor: svc.accent }}
                      />
                      {pt}
                    </li>
                  ))}
                </ul>

                <Link
                  href="/contact"
                  className="mt-5 inline-flex items-center gap-1 text-xs font-semibold text-[#0096B7] opacity-0 transition-all duration-300 group-hover:opacity-100"
                >
                  Discuss this service <span>→</span>
                </Link>
              </article>
            ))}
          </div>
        </section>

        {/* ── Why Choose Us ── */}
        <section className="mx-auto max-w-7xl px-4 pb-16 sm:px-6 lg:px-8">
          <div className="rounded-3xl border border-[#E2E8F0] bg-white p-8 shadow-sm md:p-12">
            <div className="mb-8">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#FF6900]">Why Dimension</p>
              <h2 className="mt-2 text-2xl font-bold text-[#10284a] md:text-3xl">
                Why Clients Choose Us for Critical Transactions
              </h2>
              <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-500 md:text-base">
                A focused emerging merchant banker with high governance standards — built around six core operating principles experienced at every stage of a mandate.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {differentiators.map((item, i) => (
                <div
                  key={item.title}
                  className="group rounded-2xl border border-[#E2E8F0] p-5 transition duration-300 hover:-translate-y-1 hover:border-[#00B4D8] hover:shadow-md"
                >
                  <div className="mb-3 flex items-center gap-3">
                    <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#10284a] font-mono text-[11px] font-black text-white">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-[#10284a]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Engagement Process ── */}
      



        {/* ── CTA ── */}
        <section className="mx-auto max-w-7xl px-4 pb-24 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#10284a] to-[#0d1f3c] p-10 text-center shadow-2xl md:p-16">
            <div className="pointer-events-none absolute inset-0 opacity-[0.06]"
              style={{
                backgroundImage: 'radial-gradient(#00D4FF 1px,transparent 1px)',
                backgroundSize: '24px 24px',
              }}
            />
            <div className="absolute left-1/2 top-0 h-64 w-96 -translate-x-1/2 rounded-full bg-[#0096B7]/30 blur-3xl" />

            <div className="relative z-10">
              <p className="text-xs font-bold uppercase tracking-[0.22em] text-[#FF6900]">Ready to Begin?</p>
              <h2 className="mt-3 text-3xl font-black text-white md:text-5xl">
                Discuss Your Mandate<br />
                <span className="bg-gradient-to-r from-[#00D4FF] to-[#00B4D8] bg-clip-text text-transparent">
                  with Our Team
                </span>
              </h2>
              <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-slate-400 md:text-base">
                Whether you are planning an IPO, evaluating a merger, or structuring debt — our team is ready to assess your situation and provide a clear, compliance-aligned advisory path forward.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="rounded-xl bg-[#FF6900] px-8 py-4 text-sm font-bold text-white shadow-lg shadow-[#FF6900]/30 transition hover:bg-[#e05c00] hover:shadow-xl"
                >
                  Get in Touch →
                </Link>
                <Link
                  href="/about-us"
                  className="rounded-xl border border-white/20 bg-white/10 px-8 py-4 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/20"
                >
                  Meet the Team
                </Link>
              </div>
              {/* SEBI footnote */}
              <div className="mt-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5">
                <span className="h-2 w-2 rounded-full bg-[#00D4FF]" />
                <span className="font-mono text-xs font-semibold text-slate-400">
                  SEBI Reg. No. (Merchant Banker): <span className="text-[#00D4FF]">INM000013314</span>
                </span>
              </div>
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}