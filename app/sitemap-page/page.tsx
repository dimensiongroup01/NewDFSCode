import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import { LinkRow } from '@/components/InfoKit';

type SitemapLink = { href: string; label: string; external?: boolean };

const groups: { title: string; links: SitemapLink[] }[] = [
  {
    title: 'Core Pages',
    links: [
      { href: '/home', label: 'Home' },
      { href: '/about-us', label: 'About Us' },
      { href: '/services', label: 'Services' },
      { href: '/merchant-banking', label: 'Merchant Banking' },
      { href: '/stock-broking', label: 'Stock Broking' }
    ]
  },
  {
    title: 'Investor & Careers',
    links: [
      { href: '/annual', label: 'Annual Reports (Investor)' },
      { href: '/investor', label: 'Investor Information' },
      { href: '/career', label: 'Careers' },
      { href: '/contact', label: 'Contact' }
    ]
  },
  {
    title: 'Policies & Legal',
    links: [
      {
        href: '/Documents/Policies/Investor Complaints Redressal Policy.pdf',
        label: 'Investor Complaints Policy',
        external: true
      },
      {
        href: '/Documents/Policies/Code of Conduct and Ethics Policy.pdf',
        label: 'Code of Conduct',
        external: true
      }
    ]
  }
];

export default function SitemapPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" tabIndex={-1} className="grid-overlay min-h-screen py-20 md:py-24">
        <div className="section-shell">
          <div className="relative overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white/85 p-8 shadow-[0_24px_60px_rgba(15,23,42,0.08)] backdrop-blur-xl md:p-12">
            <span
              aria-hidden
              className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#10284a] via-[#00B4D8] to-[#FF6900]"
            />
            <span
              aria-hidden
              className="pointer-events-none absolute -right-20 -top-24 h-64 w-64 rounded-full bg-[#00B4D8]/10 blur-3xl"
            />
            <h1 className="relative font-display text-4xl font-bold text-[#10284a] md:text-5xl">Sitemap</h1>
            <div className="relative mt-3 h-1 w-24 rounded-full bg-gradient-to-r from-[#10284a] to-[#00B4D8]" />
            <p className="relative mt-6 text-lg text-slate-600">Quick navigation to all pages on Dimension Financial Solutions.</p>

            <div className="relative mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
              {groups.map((group) => (
                <section
                  key={group.title}
                  className="group relative overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#00B4D8]/50 hover:shadow-[0_16px_38px_rgba(16,40,74,0.10)]"
                >
                  <span
                    aria-hidden
                    className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 bg-gradient-to-r from-[#0096B7] to-[#00B4D8] transition-transform duration-500 group-hover:scale-x-100"
                  />
                  <h2 className="font-display text-2xl font-bold text-[#10284a]">{group.title}</h2>
                  <ul className="mt-4 space-y-1.5">
                    {group.links.map((link, li) => (
                      <LinkRow
                        key={link.href}
                        href={link.href}
                        label={link.label}
                        index={li + 1}
                        external={link.external}
                      />
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  );
}
