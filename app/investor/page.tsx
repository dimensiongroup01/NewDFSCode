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
      <main id="main-content" tabIndex={-1} className="grid-overlay">

      <section className="section-shell py-16 md:py-24">
        <p className="chapter-label">Investor Landing Page</p>
        <h1 className="chapter-title">Structured Capital Advisory for Institutional Growth</h1>
        <p className="chapter-copy mt-4">SEBI-Registered Merchant Banking Expertise</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href="/contact" className="future-cta">
            Schedule Strategic Consultation
          </Link>
          <a href="/Documents/Dimension financial Presentation.pdf" target="_blank" rel="noreferrer" className="future-cta">
            Download Corporate Profile
          </a>
        </div>
      </section>

      <section className="section-shell py-12 md:py-16">
        <p className="chapter-label">Institutional Capabilities</p>
        <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
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
      </section>

      

      <section className="section-shell py-12 md:py-16">
        <p className="chapter-label">Compliance &amp; Governance</p>
        <div className="mt-5 grid gap-4 md:grid-cols-2">
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
      </section>

      <section className="section-shell py-12 md:py-16">
        <p className="chapter-label">Client Testimonials</p>
        <div className="mt-5 flex snap-x gap-4 overflow-x-auto pb-2">
          {testimonials.map((item) => (
            <div key={item.name} data-reveal className="flex">
              <QuoteCard quote={item.quote} name={item.name} />
            </div>
          ))}
        </div>
      </section>

      <section className="section-shell py-16 md:py-24">
        <p className="chapter-label">Final CTA</p>
        <h2 className="chapter-title">Partner With Institutional Discipline.</h2>
        <div className="mt-6">
          <Link href="/contact" className="future-cta">
            Begin Strategic Engagement
          </Link>
        </div>
      </section>

      <ScrollReveal />
      </main>
      <SiteFooter />
    </>
  );
}
