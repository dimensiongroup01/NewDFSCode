import type { Metadata } from 'next';
import Link from 'next/link';

import ScrollReveal from '@/components/ScrollReveal';
import SiteFooter from '@/components/SiteFooter';
import SiteHeader from '@/components/SiteHeader';
import { InfoCard, QuoteCard } from '@/components/InfoKit';

export const metadata: Metadata = {
  title: 'Investor Advisory',
  description:
    'Investor-focused advisory solutions including ECM support, private placements, debt structuring, M&A, and valuation guidance.',
  alternates: {
    canonical: '/investor'
  }
};

const capabilities = [
  'IPO & ECM Advisory',
  'Private Placements',
  'Debt Structuring',
  'M&A Transactions',
  'Valuation & Due Diligence'
];

const governance = [
  {
    title: 'SEBI Registration',
    text: 'SEBI-aligned merchant banking and debt segment execution framework.'
  },
  {
    title: 'Due Diligence Process',
    text: 'Structured process controls from mandate onboarding to final closure reporting.'
  },
  {
    title: 'Risk Framework',
    text: 'Transaction risk calibration and scenario planning integrated across assignments.'
  },
  {
    title: 'Ethical Standards',
    text: 'Governance-first execution standards with transparent client communication.'
  }
];

const testimonials = [
  {
    quote: 'Dimension team aligned structuring and execution with exceptional discipline.',
    name: 'CFO, Mid-Cap Infrastructure Group'
  },
  {
    quote: 'Fast debt placement support with strong compliance depth and institutional communication.',
    name: 'Treasury Head, Financial Institution'
  },
  {
    quote: 'Clear advisory process from pre-mandate planning to transaction closure.',
    name: 'Promoter Group, Manufacturing Company'
  }
];

export default function InvestorPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" tabIndex={-1} className="min-h-screen">

      <section className="band-navy">
        <div aria-hidden className="pointer-events-none absolute -right-40 -top-40 -z-10 h-[28rem] w-[28rem] rounded-full bg-aqua/20 blur-[120px]" />
        <div className="section-shell py-16 md:py-24">
          <p className="eyebrow eyebrow-light">Investor Landing Page</p>
          <h1 className="heading-xl mt-5 max-w-4xl text-white">Structured Capital Advisory for Institutional Growth</h1>
          <p className="mt-6 border-l-2 border-accent pl-5 text-lg text-slate-300">SEBI-Registered Merchant Banking Expertise</p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-accent">
              Schedule Strategic Consultation
            </Link>
            <a href="/Documents/Dimension financial Presentation.pdf" target="_blank" rel="noreferrer" className="btn-ghost-light">
              Download Corporate Profile
            </a>
          </div>
        </div>
        <div aria-hidden className="h-1 w-full bg-gradient-to-r from-aqua via-aqua-600 to-accent" />
      </section>

      <section className="section bg-paper">
        <div className="section-shell">
          <p className="eyebrow">Institutional Capabilities</p>
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {capabilities.map((item, i) => (
              <div key={item} data-reveal>
                <InfoCard
                  index={i + 1}
                  title={item}
                  accent={['#0096B7', '#10284a', '#FF6900'][i % 3]}
                  className="h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section border-y border-line bg-white">
        <div className="section-shell">
          <p className="eyebrow">Compliance &amp; Governance</p>
          <div className="mt-8 grid gap-5 md:grid-cols-2">
            {governance.map((item, i) => (
              <div key={item.title} data-reveal>
                <InfoCard
                  index={i + 1}
                  title={item.title}
                  text={item.text}
                  accent={['#0096B7', '#10284a', '#FF6900', '#00B4D8'][i % 4]}
                  className="h-full"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-paper">
        <div className="section-shell">
          <p className="eyebrow">Client Testimonials</p>
          <div className="mt-8 flex snap-x gap-5 overflow-x-auto pb-2 md:grid md:grid-cols-3 md:overflow-visible">
            {testimonials.map((item) => (
              <div key={item.name} data-reveal className="flex">
                <QuoteCard quote={item.quote} name={item.name} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-shell pb-20 md:pb-28">
        <div className="band-navy rounded-[1.75rem] px-6 py-14 text-center md:py-20">
          <p className="eyebrow">Final CTA</p>
          <h2 className="mt-5 font-display text-3xl font-semibold md:text-5xl">Partner With Institutional Discipline.</h2>
          <div className="mt-8">
            <Link href="/contact" className="btn-accent">
              Begin Strategic Engagement
            </Link>
          </div>
        </div>
      </section>

      <ScrollReveal />
      </main>
      <SiteFooter />
    </>
  );
}
