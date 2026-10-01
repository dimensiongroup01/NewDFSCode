'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

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

  const isActive = (href: string) => pathname === href || (href === '/home' && pathname === '/');

  return (
    <header
      className={`sticky top-0 z-40 w-full border-b bg-white/90 backdrop-blur-xl transition-shadow duration-300 ${
        scrolled ? 'border-line shadow-[0_6px_24px_rgba(16,40,74,0.07)]' : 'border-transparent'
      }`}
    >
      <div className="section-shell flex h-[4.5rem] items-center justify-between gap-6 md:h-20">
        {/* Logo */}
        <Link href="/home" prefetch={false} className="flex shrink-0 items-center rounded-lg">
          <Image
            src="/images/logo.svg"
            alt="Dimension Financial"
            width={340}
            height={86}
            priority
            className="h-12 w-auto object-contain md:h-14"
          />
        </Link>

        {/* Desktop nav */}
        <nav aria-label="Primary" className="hidden items-center gap-1 xl:flex">
          {navLinks.map((item) => {
            const active = isActive(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                prefetch={false}
                aria-current={active ? 'page' : undefined}
                className={`relative rounded-full px-3.5 py-2 text-[0.875rem] font-semibold transition-colors duration-150 ${
                  active ? 'text-navy' : 'text-slate-500 hover:bg-navy-50 hover:text-navy'
                }`}
              >
                {item.label}
                <span
                  aria-hidden
                  className={`absolute inset-x-3.5 -bottom-[1.375rem] h-[2px] rounded-full bg-accent transition-opacity ${
                    active ? 'opacity-100' : 'opacity-0'
                  }`}
                />
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/contact" prefetch={false} className="btn-primary hidden !px-5 !py-2.5 sm:inline-flex">
            Get in Touch
          </Link>

          {/* Menu button (below xl) */}
          <button
            type="button"
            aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
            onClick={() => setMenuOpenOn(isMenuOpen ? null : pathname)}
            className="flex h-11 w-11 flex-col items-center justify-center gap-[5px] rounded-full border border-line bg-white transition-colors hover:border-navy xl:hidden"
          >
            <span
              className={`h-[1.5px] w-5 rounded-full bg-navy transition-all duration-300 ${
                isMenuOpen ? 'translate-y-[6.5px] rotate-45' : ''
              }`}
            />
            <span className={`h-[1.5px] w-5 rounded-full bg-navy transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
            <span
              className={`h-[1.5px] w-5 rounded-full bg-navy transition-all duration-300 ${
                isMenuOpen ? '-translate-y-[6.5px] -rotate-45' : ''
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile / tablet menu */}
      {isMenuOpen && (
        <div id="mobile-nav" className="h-[calc(100svh-4.5rem)] overflow-y-auto border-t border-line bg-white xl:hidden">
          <nav aria-label="Primary" className="section-shell flex flex-col py-4">
            {navLinks.map((item, i) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  prefetch={false}
                  aria-current={active ? 'page' : undefined}
                  className={`flex items-center justify-between border-b border-line py-4 font-display text-xl transition-colors ${
                    active ? 'text-navy' : 'text-slate-500 hover:text-navy'
                  }`}
                >
                  <span className="flex items-center gap-4">
                    <span className="font-body text-xs font-bold tabular-nums text-accent">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    {item.label}
                  </span>
                  <span aria-hidden className={active ? 'text-accent' : 'text-slate-300'}>
                    →
                  </span>
                </Link>
              );
            })}

            <Link href="/contact" prefetch={false} className="btn-primary mt-6 w-full !py-3.5">
              Get in Touch
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
