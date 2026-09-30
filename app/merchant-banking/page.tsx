import type { Metadata } from 'next';
import SiteFooter from '@/components/SiteFooter';
import SiteHeader from '@/components/SiteHeader';
import Link from 'next/link';
import {
  Briefcase, Building2, ChartColumn, ClipboardList, FileText, Handshake, Landmark, RefreshCw, Scale, ShieldCheck, Users,
  type LucideIcon,
} from 'lucide-react';

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


/// -- Service icon map ---------------------------------------------------------
const serviceIcons: Record<string, LucideIcon> = {
  '01': Landmark, '02': Scale, '03': RefreshCw, '04': ClipboardList,
  '05': Building2, '06': Handshake, '07': ChartColumn, '08': Users, '09': Briefcase,
};

// -- Page ---------------------------------------------------------------------

export default function MerchantBankingPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" tabIndex={-1} className="min-h-screen bg-paper">

        {/* ── SEBI Registration Banner ── */}
        <div className="border-b border-white/10 bg-navy-950 text-white">
          <div className="section-shell flex flex-wrap items-center justify-center gap-x-6 gap-y-1.5 py-2.5 text-center text-xs sm:text-sm">
            <span className="flex items-center gap-2">
              <ShieldCheck aria-hidden size={15} className="text-accent" />
              <span className="font-medium text-slate-300">SEBI Registered Merchant Banker</span>
            </span>
            <span className="hidden h-3.5 w-px bg-white/15 sm:block" />
            <span className="font-bold tracking-widest text-aqua">INM000013314</span>
            <span className="hidden h-3.5 w-px bg-white/15 sm:block" />
            <span className="flex items-center gap-2">
              <ShieldCheck aria-hidden size={15} className="text-accent" />
              <span className="font-medium text-slate-300">BSE Debt Segment · INZ000313233</span>
            </span>
          </div>
        </div>

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
                  <span className="hidden h-4 w-px bg-white/20 sm:block" />
                  <span className="hidden text-[0.68rem] font-bold uppercase tracking-[0.18em] text-slate-400 sm:inline">
                    Operating Since <span className="text-white">2009</span>
                  </span>
                </div>

                <h1 className="mt-8 max-w-4xl font-display text-4xl font-semibold leading-[1.05] tracking-tight text-white sm:text-5xl lg:text-[4.25rem]">
                  Full-Spectrum<br />
                  <span className="italic text-aqua">Merchant Banking</span>
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
                  <Link href="/about-us" className="btn-ghost-light">
                    Our Team
                  </Link>
                </div>
              </div>
            </div>

            {/* Credential strip */}
            <div className="mt-14 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 lg:grid-cols-4">
              {[
                { label: 'Registration', value: 'INM000013314', sub: 'SEBI Merchant Banker' },
                { label: 'Exchange', value: 'BSE Member', sub: 'Debt Segment' },
                { label: 'Broker Reg.', value: 'INZ000313233', sub: 'Stock Broker' },
                { label: 'Execution', value: '100%', sub: 'Compliance-Led' },
              ].map((s) => (
                <div key={s.label} className="bg-navy p-5 md:p-6">
                  <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-aqua">{s.label}</p>
                  <p className="mt-2 font-display text-lg font-semibold text-white md:text-xl">{s.value}</p>
                  <p className="mt-1 text-xs text-slate-400">{s.sub}</p>
                </div>
              ))}
            </div>
          </div>
          <div aria-hidden className="h-1 w-full bg-gradient-to-r from-aqua via-aqua-600 to-accent" />
        </section>

        {/* ── Who We Are ── */}
        <section className="section-shell py-16 md:py-24">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.35fr)_minmax(0,0.9fr)] lg:gap-16">
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

            {/* Regulatory credentials */}
            <div className="card self-start p-6 md:p-8">
              <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-slate-500">Regulatory Credentials</p>

              <div className="mt-5 rounded-xl bg-navy p-5 text-white">
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-aqua">SEBI Registration No.</p>
                <p className="mt-2 font-display text-2xl font-semibold tracking-wide md:text-3xl">INM000013314</p>
                <p className="mt-1 text-xs text-slate-400">Merchant Banker</p>
              </div>

              <dl className="mt-2 divide-y divide-line">
                {[
                  { label: 'BSE Member', value: 'Debt Segment' },
                  { label: 'Stock Broker Reg.', value: 'INZ000313233' },
                  { label: 'Operating Since', value: '2009' },
                ].map((item) => (
                  <div key={item.label} className="flex items-center justify-between gap-4 py-4">
                    <dt className="text-sm text-slate-500">{item.label}</dt>
                    <dd className="text-sm font-bold text-navy">{item.value}</dd>
                  </div>
                ))}
              </dl>
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
              <p className="mt-1 text-[0.95rem] leading-relaxed text-[#526071]">
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

            {/* Quick-jump service index */}
            <nav aria-label="Service index" className="mt-10 flex flex-wrap gap-2">
              {services.map((svc) => (
                <a
                  key={svc.id}
                  href={`#service-${svc.id}`}
                  className="inline-flex items-center gap-2 rounded-full border border-line bg-paper px-4 py-2 text-xs font-semibold text-slate-600 transition-colors hover:border-navy hover:bg-navy hover:text-white"
                >
                  <span className="font-bold tabular-nums text-accent">{svc.id}</span>
                  {svc.title}
                </a>
              ))}
            </nav>

            <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {services.map((svc) => {
                const Icon = serviceIcons[svc.id];
                return (
                  <article
                    key={svc.id}
                    id={`service-${svc.id}`}
                    className="group card card-hover flex scroll-mt-28 flex-col p-6 target:border-aqua md:p-7"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-white transition-colors duration-300 group-hover:bg-accent">
                        {Icon ? <Icon aria-hidden size={22} strokeWidth={1.75} /> : null}
                      </span>
                      <span className="font-display text-3xl font-semibold tabular-nums text-navy/10">{svc.id}</span>
                    </div>

                    <p className="mt-6 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-accent">Service {svc.id}</p>
                    <h3 className="mt-1.5 font-display text-xl font-semibold leading-snug text-navy">{svc.title}</h3>
                    <p className="mt-3 text-[0.925rem] leading-relaxed text-[#526071]">{svc.summary}</p>

                    <ul className="mt-5 space-y-2.5 border-t border-line pt-5">
                      {svc.points.map((pt, i) => (
                        <li key={`${svc.id}-${i}`} className="flex items-start gap-3 text-sm leading-relaxed text-ink">
                          <span aria-hidden className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-aqua" />
                          {pt}
                        </li>
                      ))}
                    </ul>

                    <Link
                      href="/contact"
                      className="mt-auto inline-flex items-center gap-1.5 pt-6 text-sm font-bold text-aqua-700 transition-colors hover:text-navy"
                    >
                      Discuss this service
                      <span aria-hidden className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                    </Link>
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
                  <p className="mt-2 text-[0.925rem] leading-relaxed text-[#526071]">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="section-shell pb-20 md:pb-28">
          <div className="band-navy rounded-[1.75rem] px-6 py-14 text-center md:px-16 md:py-20">
            <div aria-hidden className="pointer-events-none absolute left-1/2 top-0 -z-10 h-64 w-[36rem] -translate-x-1/2 rounded-full bg-aqua/25 blur-[100px]" />
            <p className="eyebrow">Ready to Begin?</p>
            <h2 className="mt-5 font-display text-3xl font-semibold leading-tight md:text-5xl">
              Discuss Your Mandate<br />
              <span className="italic text-aqua">with Our Team</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-[0.95rem] leading-relaxed text-slate-300 md:text-base">
              Whether you are planning an IPO, evaluating a merger, or structuring debt — our team is ready to assess your situation and provide a clear, compliance-aligned advisory path forward.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link href="/contact" className="btn-accent">
                Get in Touch →
              </Link>
              <Link href="/about-us" className="btn-ghost-light">
                Meet the Team
              </Link>
            </div>
            <div className="mt-10 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-5 py-2.5">
              <span className="h-2 w-2 rounded-full bg-aqua" />
              <span className="text-xs font-semibold text-slate-400">
                SEBI Reg. No. (Merchant Banker): <span className="text-aqua">INM000013314</span>
              </span>
            </div>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}
