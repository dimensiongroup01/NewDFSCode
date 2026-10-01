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
      <main id="main-content" tabIndex={-1} className="min-h-screen">
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

      <section className="section bg-paper">
        <div className="section-shell">
          <article
            data-reveal
            className="grid overflow-hidden rounded-[1.75rem] border border-line bg-white shadow-soft lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]"
          >
            <div className="p-8 md:p-12">
              <div className="inline-flex rounded-xl border border-line bg-white px-4 py-3">
                <img
                  src="https://bondsadda.com/img/logo.png"
                  alt="Bondsadda"
                  className="h-10 w-auto object-contain"
                />
              </div>
              <h2 className="heading-lg mt-8">Bondsadda: Our Fixed-Income Investment Platform</h2>
              <p className="lede mt-5">
                Bondsadda is a digital marketplace powered by Dimension Financial Solutions, built to make bond and fixed-income investing simpler, transparent, and execution-ready for retail and institutional investors.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                <Chip>SEBI-compliant fixed income desk</Chip>
                <Chip>Assisted KYC support</Chip>
                <Chip>RM-guided onboarding</Chip>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <a href="https://bondsadda.com/" target="_blank" rel="noreferrer" className="btn-accent">
                  Visit Bondsadda
                  <span aria-hidden>↗</span>
                </a>
                <a
                  href="https://bondsadda.com/OurCollections.aspx"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary"
                >
                  Explore Bond Opportunities
                </a>
              </div>
            </div>

            <ol className="band-navy flex flex-col justify-center divide-y divide-white/10 p-8 md:p-12">
              {[
                'Curated fixed deposits and premium bonds with transparent pricing.',
                'Entry-level investing from INR 10,000 with guided execution support.',
                'High-yield opportunities up to 14%+ shown across listed bond categories.'
              ].map((point, i) => (
                <li key={point} className="flex items-start gap-5 py-6 first:pt-0 last:pb-0">
                  <span className="font-display text-3xl font-semibold tabular-nums text-accent">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="pt-1.5 text-base leading-relaxed text-slate-200">{point}</p>
                </li>
              ))}
            </ol>
          </article>

          <div data-reveal className="mt-20 max-w-2xl">
            <span aria-hidden className="block h-1 w-12 rounded-full bg-accent" />
            <h2 className="heading-lg mt-5">Our Services</h2>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
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
        </div>
      </section>


      <ScrollReveal />
      </main>
      <SiteFooter />
    </>
  );
}



