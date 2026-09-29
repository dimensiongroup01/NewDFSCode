import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import ScrollFusion3D from '@/components/ScrollFusion3D';
import ScrollReveal from '@/components/ScrollReveal';
import StoryChapter from '@/components/StoryChapter';
import SiteFooter from '@/components/SiteFooter';
import SiteHeader from '@/components/SiteHeader';
import { Chip, InfoCard } from '@/components/InfoKit';

export const metadata: Metadata = {
  title: 'Stock Broking',
  description:
    'Debt segment stock broking, bond placement, and fixed-income platform access through Bondsadda for institutions, trusts, and investors.',
  alternates: {
    canonical: '/stock-broking'
  }
};

const items = [
  'Debt Securities Placement - Placement of Government securities, bonds, and debentures to PF trusts, superannuation trusts, corporates, institutions, and finance companies.',
  'Debt Segment Broking - SEBI-registered stock broker and active BSE Debt Segment trading support for compliant execution.',
  'Debt Advisory - Active in debt securities placement, debt advisory, and market-linked support across debt and equity requirements.',
  'Market Leadership - Recognized as a leading player in debt placement services in India.',
  'Execution Track Record - Placed Central and State Government securities, corporate bonds and debentures exceeding 700 crores in FY 2023-24.',
  'Private Placement & Product Support - Private placement of bonds/debentures and equity, including marketing of financial products and fixed deposits.'
];

export default function StockBrokingPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" tabIndex={-1} className="grid-overlay">
      <PageHero
        kicker=""
        title="Debt Segment Stock Broking"
        subtitle="Execution-focused debt market broking and advisory support for corporates, trusts, institutions, and investors."
      />
      {/* <ScrollFusion3D variant="stock" compact /> */}
      <StoryChapter
        label="Section 04"
        title="Execution Where Timing Matters"
        detail="Debt-segment broking is presented as a dynamic market flow where precision, liquidity access, and compliant execution define results."
      />

      <section className="section-shell py-14 md:py-20">
        <article
          data-reveal
          className="group relative overflow-hidden rounded-3xl border border-[#E2E8F0] bg-[linear-gradient(135deg,#ffffff,#EAF8FC)] p-6 shadow-sm transition-all duration-300 hover:border-[#00B4D8]/50 hover:shadow-[0_20px_46px_rgba(16,40,74,0.10)] md:p-8"
        >
          <span
            aria-hidden
            className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#10284a] via-[#0096B7] to-[#FF6900]"
          />
          <span
            aria-hidden
            className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#00B4D8]/10 blur-3xl"
          />
          <div className="relative mb-4 inline-flex rounded-2xl border border-[#E2E8F0] bg-white px-4 py-3 shadow-sm">
            <img
              src="https://bondsadda.com/img/logo.png"
              alt="Bondsadda"
              className="h-10 w-auto object-contain"
            />
          </div>
          <h2 className="relative mt-2 font-display text-3xl md:text-4xl">Bondsadda: Our Fixed-Income Investment Platform</h2>
          <p className="relative mt-4 max-w-4xl text-sm leading-relaxed text-ink md:text-base">
            Bondsadda is a digital marketplace powered by Dimension Financial Solutions, built to make bond and fixed-income investing simpler, transparent, and execution-ready for retail and institutional investors.
          </p>
          <div className="relative mt-4 flex flex-wrap gap-2">
            <Chip>SEBI-compliant fixed income desk</Chip>
            <Chip>Assisted KYC support</Chip>
            <Chip>RM-guided onboarding</Chip>
          </div>
          <div className="relative mt-5 grid gap-3 md:grid-cols-3">
            {[
              'Curated fixed deposits and premium bonds with transparent pricing.',
              'Entry-level investing from INR 10,000 with guided execution support.',
              'High-yield opportunities up to 14%+ shown across listed bond categories.'
            ].map((point, i) => (
              <div
                key={point}
                className="group/card relative overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white p-4 transition-all duration-300 hover:-translate-y-1 hover:border-[#00B4D8]/50 hover:shadow-[0_14px_32px_rgba(16,40,74,0.10)]"
              >
                <span
                  aria-hidden
                  className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-[#0096B7] to-[#00B4D8] transition-transform duration-500 group-hover/card:scale-x-100"
                />
                <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#EAF8FC] font-mono text-[10px] font-black text-[#007A96] ring-1 ring-[#00B4D8]/25 transition-colors duration-300 group-hover/card:bg-[#0096B7] group-hover/card:text-white">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <p className="mt-3 text-sm leading-relaxed text-ink">{point}</p>
              </div>
            ))}
          </div>
          <div className="relative mt-6 flex flex-wrap gap-3">
            <a
              href="https://bondsadda.com/"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg bg-[#0096B7] px-6 py-3 text-sm font-semibold text-white shadow-md shadow-[#0096B7]/25 transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#007A96] hover:shadow-lg"
            >
              Visit Bondsadda
            </a>
            <a
              href="https://bondsadda.com/OurCollections.aspx"
              target="_blank"
              rel="noreferrer"
              className="rounded-lg border border-[#E2E8F0]/70 bg-white px-6 py-3 text-sm font-semibold text-ink transition-all duration-300 hover:-translate-y-0.5 hover:border-[#00B4D8] hover:shadow-sm"
            >
              Explore Bond Opportunities
            </a>
          </div>
        </article>

        <div data-reveal className="mt-10">
          <h2 className="font-display text-3xl text-[#10284a] md:text-4xl">Our Services</h2>
          <div className="mt-3 h-1 w-20 rounded-full bg-gradient-to-r from-[#10284a] to-[#00B4D8]" />
        </div>
        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {items.map((item, i) => {
            const [title, detail] = item.split(' - ');
            return (
              <div key={title} data-reveal>
                <InfoCard
                  index={i + 1}
                  title={title}
                  text={detail}
                  accent={['#0096B7', '#10284a', '#FF6900'][i % 3]}
                  className="h-full"
                />
              </div>
            );
          })}
        </div>
      </section>

      <ScrollReveal />
      </main>
      <SiteFooter />
    </>
  );
}



