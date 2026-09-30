import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import ScrollFusion3D from '@/components/ScrollFusion3D';
import ScrollReveal from '@/components/ScrollReveal';
import StoryChapter from '@/components/StoryChapter';
import SiteFooter from '@/components/SiteFooter';
import SiteHeader from '@/components/SiteHeader';

export const metadata: Metadata = {
  title: 'Investor Corner',
  description:
    'Access annual returns, investor disclosures, and statutory documents published by Dimension Financial Solutions.',
  alternates: {
    canonical: '/annual'
  }
};

const docs = [
  { year: '2024-25', name: 'Annual Return DFSPL', href: '/Documents/Annual report/MGT-7_21_10_2025_signed.pdf' },
  { year: '2023-24', name: 'Annual Return DFSPL', href: '/Documents/Annual report/Form MGT-17_annual Return2024.pdf' },
  { year: '2022-23', name: 'Annual Return DFSPL', href: '/Documents/Annual report/Form MGT-17_annual Return2023.pdf' },
  { year: '2021-22', name: 'Annual Return DFSPL', href: '/Documents/Annual report/MGT 7 DFS PDF 2021-22.pdf' },
  { year: '2020-21', name: 'Annual Return DFSPL', href: '/Documents/Annual report/MGT 7 2020-21.pdf' }
];

export default function AnnualPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" tabIndex={-1} className="min-h-screen">
      <PageHero kicker="Investor Resources" title="Investor Corner" />
      {/* <ScrollFusion3D variant="annual" compact /> */}
      <StoryChapter
        label="Section 07"
        title="Transparency as a Strategic Standard"
        detail="Investor documentation is presented as a clean disclosure timeline, reinforcing governance quality and institutional trust."
      />

      <section className="section bg-paper">
        <div className="section-shell">
          <p data-reveal className="mb-3 text-xs text-slate-500 md:hidden">Swipe horizontally to view the full table.</p>
          <div data-reveal className="card overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[560px] text-left">
                <thead className="bg-navy text-white">
                  <tr>
                    <th className="px-6 py-4 font-body text-[0.7rem] font-bold uppercase tracking-[0.18em]">Year</th>
                    <th className="px-6 py-4 font-body text-[0.7rem] font-bold uppercase tracking-[0.18em]">Document</th>
                    <th className="px-6 py-4 text-right font-body text-[0.7rem] font-bold uppercase tracking-[0.18em]">View</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-line">
                  {docs.map((doc) => (
                    <tr key={doc.href} className="group transition-colors hover:bg-navy-50/60">
                      <td className="px-6 py-5">
                        <span className="font-display text-xl font-semibold tabular-nums text-navy">{doc.year}</span>
                      </td>
                      <td className="px-6 py-5 text-[0.95rem] font-semibold text-ink">{doc.name}</td>
                      <td className="px-6 py-5 text-right">
                        <a
                          href={doc.href}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-xs font-bold text-navy transition-colors hover:border-navy hover:bg-navy hover:text-white"
                        >
                          Open PDF
                          <span aria-hidden>↗</span>
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>


      <ScrollReveal />
      </main>
      <SiteFooter />
    </>
  );
}




