'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { ArrowRight, Mail, Phone } from 'lucide-react';

const navLinks = [
  { href: '/home', label: 'Home' },
  { href: '/about-us', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/merchant-banking', label: 'Merchant Banking' },
  { href: '/stock-broking', label: 'Stock Broking' },
  { href: '/annual', label: 'Investor' },
  { href: '/contact', label: 'Contact' },
];

export default function SiteHeader() {
  const pathname = usePathname();
  // The menu is open only on the path it was opened from, so navigating closes it.
  const [menuOpenOn, setMenuOpenOn] = useState<string | null>(null);
  const isMenuOpen = menuOpenOn === pathname;
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (!isMenuOpen) return;
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setMenuOpenOn(null);
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [isMenuOpen]);

  const isActive = (href: string) => pathname === href || (href === '/home' && pathname === '/');

  return (
    <header
      className={`sticky top-0 z-40 w-full border-b border-line bg-white/95 backdrop-blur-xl transition-shadow duration-300 ${
        scrolled ? 'shadow-[0_8px_28px_rgba(6,59,112,0.08)]' : ''
      }`}
    >
      <div className="section-shell flex h-[4.5rem] items-center justify-between gap-6 md:h-20">
        {/* Logo */}
        <Link href="/home" prefetch={false} className="flex shrink-0 items-center rounded-lg" aria-label="Dimension Financial — Home">
          <Image
            src="/images/logo.svg"
            alt="Dimension Financial"
            width={340}
            height={86}
            priority
            className="h-11 w-auto object-contain md:h-[3.25rem]"
          />
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden h-full items-center gap-0.5 xl:flex">
          {navLinks.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                prefetch={false}
                aria-current={active ? 'page' : undefined}
                className={`group relative flex h-full items-center px-3.5 font-display text-[0.9rem] font-semibold transition-colors duration-150 ${
                  active ? 'text-navy' : 'text-muted hover:text-accent'
                }`}
              >
                {item.label}
                <span
                  aria-hidden
                  className={`absolute inset-x-3.5 bottom-0 h-[3px] rounded-t-full bg-accent transition-transform duration-300 ${
                    active ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-50'
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/contact" prefetch={false} className="btn-accent hidden !px-5 sm:inline-flex">
            Get in Touch
            <ArrowRight aria-hidden size={16} />
          </Link>

          {/* Menu button (below xl) */}
          <button
            type="button"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpenOn(isMenuOpen ? null : pathname)}
            className="flex h-11 w-11 flex-col items-center justify-center gap-[5px] rounded-[10px] border border-line bg-white transition-colors hover:border-accent xl:hidden"
          >
            <span
              className={`h-[2px] w-5 rounded-full bg-navy transition-all duration-300 ${
                isMenuOpen ? 'translate-y-[7px] rotate-45' : ''
              }`}
            />
            <span className={`h-[2px] w-5 rounded-full bg-navy transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
            <span
              className={`h-[2px] w-5 rounded-full bg-navy transition-all duration-300 ${
                isMenuOpen ? '-translate-y-[7px] -rotate-45' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile / tablet menu */}
      {isMenuOpen && (
        <div
          id="mobile-nav"
          className="h-[calc(100svh-4.5rem)] overflow-y-auto border-t border-line bg-white md:h-[calc(100svh-5rem)] xl:hidden"
        >
          <nav aria-label="Primary" className="section-shell flex flex-col py-4">
            {navLinks.map((item, i) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  prefetch={false}
                  aria-current={active ? 'page' : undefined}
                  className={`flex min-h-[56px] items-center justify-between border-b border-line font-display text-lg font-semibold transition-colors ${
                    active ? 'text-accent' : 'text-navy hover:text-accent'
                  }`}
                >
                  <span className="flex items-center gap-4">
                    <span
                      aria-hidden
                      className={`h-2.5 w-2.5 rounded-full border-2 ${active ? 'border-accent bg-accent' : 'border-line bg-white'}`}
                    />
                    {item.label}
                  </span>
                  <span className="text-xs font-bold tabular-nums text-muted">{String(i + 1).padStart(2, '0')}</span>
                </Link>
              );
            })}

            <Link href="/contact" prefetch={false} className="btn-accent mt-6 w-full !py-3.5">
              Get in Touch
              <ArrowRight aria-hidden size={16} />
            </Link>

            <div className="mt-6 grid gap-2 rounded-[14px] bg-paper p-4 text-sm">
              <a href="mailto:contact@dimensionfinancial.co.in" className="flex min-h-[44px] items-center gap-3 break-all text-navy">
                <Mail aria-hidden size={18} className="shrink-0 text-accent" strokeWidth={1.75} />
                contact@dimensionfinancial.co.in
              </a>
              <a href="tel:01204151349" className="flex min-h-[44px] items-center gap-3 text-navy">
                <Phone aria-hidden size={18} className="shrink-0 text-accent" strokeWidth={1.75} />
                0120-4151349
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
