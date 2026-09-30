import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import dynamic from 'next/dynamic';
import HomeHeroScene from '@/components/HomeHeroScene';
import { Suspense } from 'react';
import { Eyebrow, PointMatrix } from '@/components/InfoKit';

const ClientsShowcase = dynamic(() => import('@/components/ClientsShowcase'), {
  loading: () => <section className="section-shell py-24"><p className="text-center text-slate-400">Loading clients...</p></section>,
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

const whyChooseUs = [
  'Team of Qualified Professionals with extensive experience in Merchant Banking and Debt Securities Markets',
  'Deep Market Insight and Industry Expertise',
  'Client-First Approach with Personalized Financial Solutions',
  'Proven Track Record in Capital Market Transactions',
  'Trusted Advisory for SMEs, Corporates, and Institutions'
];

export default function HomeLanding() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" tabIndex={-1} className="min-h-screen">

        {/* Hero */}
        <HomeHeroScene />

        {/* Credentials strip */}
        <section className="band-navy">
          <div className="section-shell grid grid-cols-2 divide-white/10 py-2 lg:grid-cols-4 lg:divide-x">
            {aboutCards.map((item, i) => (
              <div key={item.label} className={`px-1 py-7 sm:px-6 ${i % 2 === 1 ? 'pl-5 sm:pl-6' : ''} lg:px-8`}>
                <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-aqua">{item.label}</p>
                <p className="mt-2 font-display text-lg font-semibold leading-snug text-white md:text-xl">
                  {item.value.trim()}
                </p>
                {item.detail ? (
                  <p className="mt-1.5 text-xs font-semibold uppercase tracking-[0.1em] text-slate-400">{item.detail}</p>
                ) : null}
              </div>
            ))}
          </div>
        </section>

        {/* About Us — Why Choose Us */}
        <section className="section bg-paper">
          <div className="section-shell grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:gap-20">
            <div className="lg:sticky lg:top-32 lg:self-start">
              <p className="eyebrow">About Us</p>
              <h2 className="heading-lg mt-5 md:text-5xl">Why Choose Us?</h2>
              <span aria-hidden className="mt-8 block h-1 w-16 rounded-full bg-gradient-to-r from-accent to-aqua" />
            </div>

            <ul className="card divide-y divide-line px-6 md:px-8">
              {whyChooseUs.map((point, i) => (
                <li key={point} className="group flex items-start gap-5 py-6">
                  <span className="font-display text-2xl font-semibold tabular-nums text-navy/20 transition-colors duration-300 group-hover:text-accent">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="pt-1 text-base font-semibold leading-relaxed text-navy md:text-lg">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Who We Are / What We Do */}
        <section className="section-shell pb-16 md:pb-24">
          <div className="grid overflow-hidden rounded-[1.75rem] border border-line shadow-soft lg:grid-cols-2">
            <div className="bg-white p-8 md:p-12">
              <span aria-hidden className="block h-1 w-10 rounded-full bg-accent" />
              <h3 className="heading-lg mt-4">Who We Are</h3>
              <div className="mt-6 space-y-5 body-copy">
                <p>
                  Dimension Financial Solutions Private Limited was formed to deliver
                  a comprehensive range of financial services with strong governance
                  and market discipline.
                </p>
                <p>
We are a SEBI-registered Merchant Banker actively engaged in capital issue management, managing open offers, and providing advisory services for mergers and acquisitions (M&A), Employee Stock Ownership Plans (ESOPs), and comprehensive financial advisory solutions.
</p>
                <p>
                  We are a also SEBI-registered stock broker and BSE trading member on the
                  debt segment, with active capability as an Online Bond Platform
                  Provider (OBPP).
                </p>
              </div>
            </div>

            <div className="band-navy p-8 md:p-12">
              <span aria-hidden className="block h-1 w-10 rounded-full bg-aqua" />
              <h3 className="heading-lg mt-4">What We Do</h3>
              <div className="mt-6 space-y-5 text-[0.95rem] leading-7 text-slate-300">
                <p>
                  We deliver comprehensive financial advisory and capital market
                  services as a SEBI-registered Merchant Banker and debt market
                  Stock Broker.
                </p>
                <p>
                  Our tailored solutions help corporates, institutions, provident
                  fund trusts, emerging enterprises, and retail investors achieve
                  sustainable growth, operational efficiency, and capital
                  optimization.
                </p>
                <p>
                  With deep regulatory expertise and a client-centric culture, we
                  build enduring relationships while enabling access to capital
                  markets and investment opportunities.
                </p>
                <p>
                  Our approach combines market knowledge, risk awareness, and
                  compliance-led execution to support long-term financial success.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="section border-y border-line bg-white">
          <div className="section-shell grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div>
              <Eyebrow>Our Mission &amp; Vision</Eyebrow>
              <h2 data-reveal className="heading-lg mt-5">
                A clear purpose built on integrity, compliance, and long-term client trust.
              </h2>
              <p data-reveal className="lede mt-5">
                DFS is committed to client-centric financial services shaped by professional excellence, ethical
                conduct, and disciplined market execution.
              </p>
            </div>

            <PointMatrix points={missionPoints} className="lg:pt-10" />
          </div>
        </section>

        <Suspense fallback={<section className="section-shell py-24"><p className="text-center text-slate-400">Loading clients...</p></section>}>
          <ClientsShowcase />
        </Suspense>
        <ScrollReveal />
      </main>
      <SiteFooter />
    </>
  );
}
