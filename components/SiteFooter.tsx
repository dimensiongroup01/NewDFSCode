import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, ArrowUpRight, Mail, MapPin, Phone } from 'lucide-react';
import { ADDRESS_LINE } from '@/lib/seo';
import CtaBand from '@/components/CtaBand';

const footerYear = '2026';

// Statutory line shown at the very bottom of every page, split as two lines.
const legalLines = [
  [
    'Dimension Financial Solutions Private Limited',
    'CIN: U74140DL2009PTC186563',
    'Member: BSE Debt Segment (OBPP): Member ID- 6824, SEBI Registration Number- INZ000313233'
  ],
  [
    'Merchant Banker, SEBI Registration Number- INM000013314',
    'Registered Address: 302, Dakha Chamber, 38/2068, Naiwala, Karol Bagh, New Delhi, 110005, India'
  ]
];

const linkClass =
  'inline-flex min-h-[32px] items-center text-[0.925rem] text-slate-300 transition-colors hover:text-white';
const headClass = 'font-display text-[0.72rem] font-bold uppercase tracking-[0.2em] text-aqua';

const serviceLinks = [
  { href: '/merchant-banking', label: 'Merchant Banking' },
  { href: '/services', label: 'Debt Securities' },
  { href: '/stock-broking', label: 'Stock Broking' }
];

const importantLinks = [
  { href: '/annual', label: 'Investor Corner' },
  { href: '/career', label: 'Careers' },
  { href: '/images/icp.pdf', label: 'Investor Policy', external: true },
  { href: '/images/coe.pdf', label: 'Code of Conduct', external: true },
  { href: '/sitemap-page', label: 'Sitemap' }
];

/**
 * Site footer. `cta` renders the full-width navy call-to-action band above it;
 * pages that already end with their own CTA pass `cta={false}`.
 */
export default function SiteFooter({ cta = true }: { cta?: boolean }) {
  return (
    <>
      {cta ? (
        <CtaBand
          eyebrow="Dimension Financial Solutions"
          title="Merchant banking and debt securities services with a client-first, compliance-led approach."
          text="DFS works with institutions, trusts, corporates, and investors through disciplined market execution, advisory support, and long-term financial relationships."
          primary={{ href: '/contact', label: 'Talk to DFS' }}
          secondary={{ href: '/about-us', label: 'Explore the Firm' }}
        />
      ) : null}

      <footer className="relative mt-auto bg-navy-900 text-white">
        <div aria-hidden className="h-[3px] w-full bg-gradient-to-r from-navy-900 via-accent to-navy-900" />

        <div className="section-shell pb-10 pt-16 md:pt-20">
          <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[minmax(0,1.5fr)_repeat(3,minmax(0,1fr))] lg:gap-10">
            {/* Company */}
            <div className="sm:col-span-2 lg:col-span-1">
              <Link href="/home" className="inline-flex rounded-xl bg-white px-4 py-2.5" aria-label="Dimension Financial — Home">
                <Image src="/images/logo.svg" alt="Dimension Financial" width={340} height={86} className="h-11 w-auto" />
              </Link>
              <p className="mt-6 max-w-sm text-[0.95rem] leading-7 text-slate-300">
                Merchant banking and debt securities services with a client-first, compliance-led approach.
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {['Merchant Banking', 'Debt Securities', 'Stock Broking'].map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/15 px-3 py-1 text-xs font-semibold text-slate-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            {/* Services */}
            <div>
              <h2 className={headClass}>Services</h2>
              <ul className="mt-5 space-y-2">
                {serviceLinks.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className={linkClass}>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Important links */}
            <div>
              <h2 className={headClass}>Important Links</h2>
              <ul className="mt-5 space-y-2">
                {importantLinks.map((l) => (
                  <li key={l.href}>
                    {l.external ? (
                      <a href={l.href} target="_blank" rel="noreferrer" className={`${linkClass} gap-1`}>
                        {l.label}
                        <ArrowUpRight aria-hidden size={14} className="opacity-60" />
                      </a>
                    ) : (
                      <Link href={l.href} className={linkClass}>
                        {l.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h2 className={headClass}>Contact</h2>
              <ul className="mt-5 space-y-3">
                <li className="flex items-start gap-3 text-[0.925rem] leading-relaxed text-slate-300">
                  <MapPin aria-hidden size={18} strokeWidth={1.75} className="mt-0.5 shrink-0 text-aqua" />
                  <address className="not-italic">{ADDRESS_LINE}</address>
                </li>
                <li>
                  <a href="mailto:contact@dimensionfinancial.co.in" className={`${linkClass} items-start gap-3 break-all`}>
                    <Mail aria-hidden size={18} strokeWidth={1.75} className="mt-0.5 shrink-0 text-aqua" />
                    contact@dimensionfinancial.co.in
                  </a>
                </li>
                <li>
                  <a href="tel:01204151349" className={`${linkClass} gap-3`}>
                    <Phone aria-hidden size={18} strokeWidth={1.75} className="shrink-0 text-aqua" />
                    0120-4151349
                  </a>
                </li>
              </ul>
              <Link
                href="/contact"
                className="mt-6 inline-flex min-h-[44px] items-center gap-2 font-display text-sm font-bold text-aqua transition-colors hover:text-white"
              >
                Send a message
                <ArrowRight aria-hidden size={16} />
              </Link>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="mt-14 flex flex-col gap-3 border-t border-accent/30 pt-6 text-sm text-slate-400 md:flex-row md:items-center md:justify-between">
            <p>&copy; {footerYear} Dimension Financial Solutions Pvt. Ltd.</p>
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
              <p>Client-centric financial advisory with a compliance-led operating model.</p>
              <Link href="/sitemap-page" className="transition-colors hover:text-white">
                Sitemap
              </Link>
            </div>
          </div>
        </div>

        {/* Statutory details strip */}
        <div className="border-t border-white/10 bg-navy-950">
          <div className="section-shell py-5 text-center text-[0.8rem] leading-6 text-slate-300 md:text-[0.85rem]">
            {legalLines.map((line) => (
              <p key={line[0]}>
                {line.map((item, i) => (
                  <span key={item}>
                    {i > 0 ? (
                      <span aria-hidden className="mx-2 text-white/30">
                        |
                      </span>
                    ) : null}
                    {item}
                  </span>
                ))}
              </p>
            ))}
          </div>
        </div>
      </footer>
    </>
  );
}
