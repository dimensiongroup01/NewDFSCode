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
      <main id="main-content" tabIndex={-1} className="min-h-screen">
        <section className="band-navy">
          <div className="section-shell py-16 md:py-20">
            <h1 className="heading-xl text-white">Sitemap</h1>
            <p className="mt-5 max-w-xl border-l-2 border-accent pl-5 text-lg text-slate-300">
              Quick navigation to all pages on Dimension Financial Solutions.
            </p>
          </div>
          <div aria-hidden className="h-1 w-full bg-gradient-to-r from-aqua via-aqua-600 to-accent" />
        </section>

        <section className="section bg-paper">
          <div className="section-shell grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {groups.map((group) => (
              <section key={group.title} className="card p-6 md:p-8">
                <h2 className="heading-md">{group.title}</h2>
                <ul className="mt-5">
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
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
