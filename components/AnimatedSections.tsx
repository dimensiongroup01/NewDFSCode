'use client';

import { useEffect, useRef } from 'react';

type RevealItem = { title: string; desc: string };

const defaultItems: RevealItem[] = [
  { title: 'Market Insight', desc: 'Data-driven recommendations tailored to your risk profile.' },
  { title: 'Compliance First', desc: 'SEBI-aligned execution with disciplined documentation.' },
  { title: 'Client-First', desc: 'Transparent communication and measurable outcomes.' },
];

export default function AnimatedSections({ items = defaultItems }: { items?: RevealItem[] }) {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    // Simple reveal fallback (no hard dependency on GSAP)
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduceMotion) {
      root.querySelectorAll('[data-reveal]').forEach((el) => {
        (el as HTMLElement).style.opacity = '1';
        (el as HTMLElement).style.transform = 'none';
      });
      return;
    }

    const elements = Array.from(root.querySelectorAll<HTMLElement>('[data-reveal]'));
    elements.forEach((el) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(12px)';
      el.style.transition = 'opacity 600ms ease, transform 600ms ease';
      el.style.willChange = 'opacity, transform';
    });

    const obs = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.style.opacity = '1';
            el.style.transform = 'translateY(0)';
            obs.unobserve(el);
          }
        }
      },
      { threshold: 0.12 }
    );

    elements.forEach((el) => obs.observe(el));

    return () => obs.disconnect();
  }, [items]);

  return (
    <section className="section-shell py-16 sm:py-20" ref={rootRef}>
      <div className="text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-aqua">Insights</p>
        <h2 className="mt-3 font-display text-2xl font-semibold sm:text-3xl md:text-4xl lg:text-5xl">
          What Drives Our Decisions
        </h2>
      </div>

      <div className="mt-10 grid gap-5 sm:mt-12 sm:gap-6 md:grid-cols-3">
        {items.map((it) => (
          <article
            key={it.title}
            data-reveal
            className="rounded-3xl border border-blue-100/90 bg-white/92 p-6 shadow-[0_18px_52px_rgba(15,23,42,0.05)]"
          >
            <h3 className="text-lg font-bold text-[#0a355d]">{it.title}</h3>
            <p className="mt-2 text-sm leading-6 text-slate-600">{it.desc}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

