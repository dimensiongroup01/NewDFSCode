'use client';

import { useEffect } from 'react';

/**
 * Fade-up on scroll for every `[data-reveal]` element on the page.
 * - `data-reveal`            → fade + slide up
 * - `data-reveal="line"`     → horizontal line draws left → right
 * - `data-reveal="line-y"`   → vertical line draws top → bottom
 * - `style={{ '--reveal-delay': '120ms' }}` staggers an item
 *
 * Hidden states live in globals.css under `.reveal-ready`, which is only added
 * here — so without JS (or with reduced motion) everything simply renders.
 */
export default function ScrollReveal() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const root = document.documentElement;
    const items = Array.from(document.querySelectorAll<HTMLElement>('[data-reveal]'));
    if (!items.length) return;

    // Anything already on screen is revealed immediately, so it never flickers.
    const vh = window.innerHeight;
    items.forEach((el) => {
      const r = el.getBoundingClientRect();
      if (r.top < vh * 0.92 && r.bottom > 0) el.classList.add('is-revealed');
    });
    root.classList.add('reveal-ready');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.12 }
    );

    items.forEach((el) => {
      if (!el.classList.contains('is-revealed')) observer.observe(el);
    });

    return () => {
      observer.disconnect();
      root.classList.remove('reveal-ready');
    };
  }, []);

  return null;
}
