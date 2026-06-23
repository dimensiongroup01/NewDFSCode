import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import dynamic from 'next/dynamic';
import HomeHeroScene from '@/components/HomeHeroScene';
import { Suspense } from 'react';

const ClientsShowcase = dynamic(() => import('@/components/ClientsShowcase'), {
  loading: () => <section className="section-shell pb-24"><p className="text-center text-slate-400">Loading clients...</p></section>,
  ssr: true
});

const ScrollReveal = dynamic(() => import('@/components/ScrollReveal'), {
  loading: () => null,
  ssr: true
});

const missionPoints = [
  'Build a merchant banking institution of repute, driven by integrity and professional excellence.',
  'Uphold the highest standards of integrity so every action reflects our core business principles.',
  'Provide secure, efficient, and compliant services that minimize risk while supporting positive returns.',
  "Offer financial products and solutions tailored to our clients' needs.",
];

const stats = [
  { label: 'Deals Executed', value: '50+' },
  { label: 'AUM Managed', value: 'INR 1000 Cr+' },
  { label: 'Active Clients', value: '100+' }
];



const aboutCards = [
  { label: 'Established', value: ' 2009' },
  { label: 'Merchant Banker', value: 'SEBI Registered  September 2025', detail: 'INM000013314' },
  { label: 'Stock Broking Debt Segment', value: ' 2023', detail: 'INZ000313233' },
  { label: 'Debt Platform', value: 'Bondsadda  2023', detail: 'OBPPs at BSE' }
];

export default function HomeLanding() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" tabIndex={-1} className="grid-overlay min-h-screen">

        {/* Hero */}
        <HomeHeroScene />

        {/* About Us */}
        <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-sky-50 py-20">
          <div className="section-shell">
            {/* Header */}
            <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.35em] text-primary-dark">
                  About Us
                </p>

                <h2 className="mt-6 max-w-4xl font-display text-4xl font-bold leading-tight text-slate-950 md:text-5xl">
                  Why Choose Us?
                </h2>

                <ul className="mt-6 space-y-4 text-lg md:text-xl text-slate-700">
                  <li>✓ Team of Qualified Professionals with extensive experience in Merchant Banking and Debt Securities Markets</li>
                  <li>✓ Deep Market Insight and Industry Expertise</li>
                  <li>✓ Client-First Approach with Personalized Financial Solutions</li>
                  <li>✓ Proven Track Record in Capital Market Transactions</li>
                  <li>✓ Trusted Advisory for SMEs, Corporates, and Institutions</li>
                </ul>

                <div className="mt-8 h-1 w-24 rounded-full bg-primary-dark" />
              </div>

              {/* Stats */}
              <div className="grid gap-5 sm:grid-cols-2">
                {aboutCards.map((item) => (
                  <div
                    key={item.label}
                    className="group rounded-2xl border border-slate-200 bg-white/80 p-6 backdrop-blur transition-all duration-300 hover:-translate-y-1 hover:border-primary-dark/30 hover:shadow-xl"
                  >
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary-dark">
                      {item.label}
                    </p>

                    <p className="mt-4 text-2xl font-bold text-slate-950">
                      {item.value}
                    </p>

                    {item.detail && (
                      <p className="mt-2 text-sm font-medium text-slate-500">
                        {item.detail}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="mt-20 grid gap-10 lg:grid-cols-2">
              {/* About */}
              <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm lg:p-10">
                <div className="mb-6 flex items-center gap-4">
                  <div className="h-10 w-1 rounded-full bg-primary-dark" />
                  <h3 className="font-display text-3xl font-bold text-slate-950">
                    Who We Are
                  </h3>
                </div>

                <div className="space-y-6 text-base leading-8 text-slate-600">
                  <p>
                    Dimension Financial Solutions Private Limited was formed to deliver
                    a comprehensive range of financial services with strong governance
                    and market discipline.
                  </p>

                  <p>
                    We are a SEBI-registered stock broker and BSE trading member on the
                    debt segment, with active capability as an Online Bond Platform
                    Provider (OBPP).
                  </p>

                  <p>
                    As a SEBI-registered Merchant Banker, we actively support capital
                    issue management, equity advisory, ESOP/ESOS structuring, and
                    business valuation services.
                  </p>
                </div>
              </div>

              {/* What We Do */}
              <div className="relative overflow-hidden rounded-3xl bg-[#0A355D] p-8 text-white shadow-xl lg:p-10">
                <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-white/10 blur-3xl" />
                <div className="absolute bottom-0 left-0 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl" />

                <div className="relative">
                  <h3 className="font-display text-3xl font-bold md:text-4xl text-white">
                    What We Do
                  </h3>

                  <div className="mt-6 space-y-6 text-slate-200 leading-8">
                    <p className="text-white">
                      We deliver comprehensive financial advisory and capital market
                      services as a SEBI-registered Merchant Banker and debt market
                      Stock Broker.
                    </p>

                    <p className="text-white">
                      Our tailored solutions help corporates, institutions, provident
                      fund trusts, emerging enterprises, and retail investors achieve
                      sustainable growth, operational efficiency, and capital
                      optimization.
                    </p>

                    <p className="text-white">
                      With deep regulatory expertise and a client-centric culture, we
                      build enduring relationships while enabling access to capital
                      markets and investment opportunities.
                    </p>

                    <p className="text-white">
                      Our approach combines market knowledge, risk awareness, and
                      compliance-led execution to support long-term financial success.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="section-shell py-10 sm:py-12 md:py-16">
          <div className="rounded-2xl border border-white/90 bg-gradient-to-b from-white to-[#f5faff] p-5 shadow-[0_18px_52px_rgba(15,23,42,0.08)] sm:rounded-[2rem] sm:p-6 md:p-8 lg:p-10">

            <div className="grid gap-8 md:grid-cols-2 md:gap-10 lg:gap-14">

              {/* Mission points */}
              <div className="flex flex-col">
                <p data-reveal className="text-xs uppercase tracking-[0.2em] text-aqua">
                  Our Mission & Vision
                </p>
                <h2
                  data-reveal
                  className="mt-2 font-display text-2xl font-semibold leading-tight sm:text-3xl md:text-4xl lg:text-5xl"
                >
                  A clear purpose built on integrity, compliance, and long-term client trust.
                </h2>
                <p data-reveal className="mt-3 text-sm leading-7 text-ink sm:mt-4 md:text-base">
                  DFS is committed to client-centric financial services shaped by professional excellence, ethical
                  conduct, and disciplined market execution.
                </p>

                <ol data-reveal className="mt-6 flex flex-col gap-3 sm:mt-8 sm:gap-4">
                  {missionPoints.map((point, index) => (
                    <li
                      key={point}
                      className="rounded-xl border border-blue-100/90 bg-white/92 p-4 shadow-[0_8px_24px_rgba(15,23,42,0.05)] sm:rounded-[1.5rem] sm:p-5"
                    >
                      <div className="flex items-start gap-3 sm:gap-4">
                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-[#fff7ed] to-white text-sm font-bold text-[#0a355d] shadow-[0_6px_14px_rgba(47,155,255,0.12)] sm:h-10 sm:w-10">
                          {index + 1}
                        </span>
                        <p className="text-sm leading-6 text-slate-700 sm:leading-7 md:text-base">{point}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Vision and stats */}
              <div className="flex flex-col gap-4 sm:gap-5">

                {/* Vision card */}
                <div
                  data-reveal
                  className="rounded-xl border border-[#E2E8F0] bg-gradient-to-b from-[#EAF8FC] to-white p-5 shadow-[0_16px_42px_rgba(47,155,255,0.08)] sm:rounded-[1.75rem] sm:p-6 md:p-7"
                >
                  <p className="text-xs uppercase tracking-[0.2em] text-aqua">Vision Statement</p>

                  <p className="mt-3 text-sm leading-6 text-slate-700 sm:mt-4 sm:leading-7 md:text-base">
                    We envision establishing ourselves as a trusted name in merchant banking by upholding the highest
                    standards of ethical conduct, transparency, and client-centric service. Through unwavering integrity
                    and a commitment to excellence, we aim to deliver innovative financial solutions that foster long-term
                    value and sustainable growth.
                  </p>
                </div>

                {/* Stats row */}
                <div data-reveal className="grid grid-cols-1 gap-3 sm:grid-cols-3 sm:gap-4">
                  {stats.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-xl border border-blue-100/90 bg-white/92 p-3 shadow-[0_8px_24px_rgba(15,23,42,0.05)] sm:rounded-[1.35rem] sm:p-5"
                    >
                      {/* Value shrinks gracefully on small screens */}
                      <p className="text-xl font-bold text-[#0a355d] sm:text-2xl md:text-3xl">{item.value}</p>
                      <p className="mt-1 text-[10px] uppercase tracking-[0.12em] text-slate-500 sm:mt-2 sm:text-xs sm:tracking-[0.16em]">
                        {item.label}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>



        <Suspense fallback={<section className="section-shell pb-24"><p className="text-center text-slate-400">Loading clients...</p></section>}>
          <ClientsShowcase />
        </Suspense>
        <ScrollReveal />
      </main>
      <SiteFooter />
    </>
  );
}


