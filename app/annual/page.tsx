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
      <main id="main-content" tabIndex={-1} className="grid-overlay">
      <PageHero kicker="Investor Resources" title="Investor Corner" />
      {/* <ScrollFusion3D variant="annual" compact /> */}
      <StoryChapter
        label="Section 07"
        title="Transparency as a Strategic Standard"
        detail="Investor documentation is presented as a clean disclosure timeline, reinforcing governance quality and institutional trust."
      />

      <section className="section-shell py-14 md:py-20">
        <p data-reveal className="mb-2 text-xs text-slate-600 md:hidden">Swipe horizontally to view the full table.</p>
        <div
          data-reveal
          className="relative overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white p-2 shadow-sm md:p-4"
        >
          <span
            aria-hidden
            className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#10284a] via-[#00B4D8] to-[#FF6900]"
          />
          <div className="overflow-x-auto">
            <table className="w-full min-w-[560px] text-left text-sm">
              <thead>
                <tr className="text-[#10284a]">
                  <th className="px-4 py-3.5 text-[11px] font-bold uppercase tracking-[0.14em]">Year</th>
                  <th className="px-4 py-3.5 text-[11px] font-bold uppercase tracking-[0.14em]">Document</th>
                  <th className="px-4 py-3.5 text-[11px] font-bold uppercase tracking-[0.14em]">View</th>
                </tr>
              </thead>
              <tbody>
                {docs.map((doc, i) => (
                  <tr
                    key={doc.href}
                    className={`border-t border-[#E2E8F0] transition-colors duration-200 hover:bg-[#F4FAFD] ${
                      i % 2 === 1 ? 'bg-[#F8FAFC]' : 'bg-white'
                    }`}
                  >
                    <td className="px-4 py-4">
                      <span className="inline-flex items-center rounded-lg bg-[#EAF8FC] px-3 py-1 font-mono text-xs font-black text-[#007A96] ring-1 ring-[#00B4D8]/25">
                        {doc.year}
                      </span>
                    </td>
                    <td className="px-4 py-4 font-semibold text-[#10284a]">{doc.name}</td>
                    <td className="px-4 py-4">
                      <a
                        href={doc.href}
                        target="_blank"
                        rel="noreferrer"
                        className="group inline-flex items-center gap-2 rounded-full border border-[#00B4D8]/40 bg-white px-4 py-2 text-xs font-bold text-[#007A96] transition-all duration-300 hover:-translate-y-0.5 hover:border-[#0096B7] hover:bg-[#0096B7] hover:text-white hover:shadow-md"
                      >
                        Open PDF
                        <span
                          aria-hidden
                          className="transition-transform duration-300 group-hover:translate-x-0.5"
                        >
                          ↗
                        </span>
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <ScrollReveal />
      </main>
      <SiteFooter />
    </>
  );
}




