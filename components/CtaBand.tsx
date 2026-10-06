import Link from 'next/link';
import type { ReactNode } from 'react';
import { ArrowRight } from 'lucide-react';

type Action = { href: string; label: string };

/**
 * Full-width deep-navy call to action with the logo's geometric D and a slow,
 * animated line pattern in the background.
 */
export default function CtaBand({
  eyebrow,
  title,
  text,
  primary,
  secondary,
  children
}: {
  eyebrow?: string;
  title: ReactNode;
  text?: string;
  primary: Action;
  secondary?: Action;
  children?: ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-navy text-white">
      {/* Animated line pattern */}
      <svg
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 h-full w-full"
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 1440 520"
        fill="none"
      >
        {[0, 1, 2, 3, 4, 5].map((i) => (
          <path
            key={i}
            d={`M-40 ${420 - i * 46} C 320 ${360 - i * 46}, 620 ${470 - i * 52}, 960 ${330 - i * 50} S 1400 ${250 - i * 40}, 1500 ${
              200 - i * 36
            }`}
            stroke="#35A9E0"
            strokeOpacity={0.1 + i * 0.02}
            strokeWidth="1"
            strokeDasharray="6 10"
            className="animate-line-flow"
            style={{ animationDuration: `${16 + i * 3}s` }}
          />
        ))}
        {/* Geometric D echoes */}
        <g transform="translate(1040 40)" stroke="#35A9E0">
          <path d="M40 0h150a220 220 0 0 1 0 440H40z" strokeOpacity="0.16" />
          <path d="M80 60h110a160 160 0 0 1 0 320H80z" strokeOpacity="0.12" />
          <path d="M120 120h70a100 100 0 0 1 0 200h-70z" strokeOpacity="0.1" />
        </g>
      </svg>
      <div aria-hidden className="absolute -left-40 top-1/2 -z-10 h-80 w-80 -translate-y-1/2 rounded-full bg-accent/25 blur-[120px]" />

      <div className="section-shell grid gap-10 py-20 md:py-24 lg:grid-cols-[minmax(0,1.5fr)_auto] lg:items-end">
        <div data-reveal>
          {eyebrow ? <p className="eyebrow eyebrow-light">{eyebrow}</p> : null}
          <h2 className="mt-5 max-w-3xl font-display text-[1.9rem] font-extrabold leading-[1.15] tracking-[-0.025em] text-white text-balance md:text-[2.6rem]">
            {title}
          </h2>
          {text ? <p className="mt-5 max-w-2xl text-base leading-[1.75] text-slate-300 md:text-lg">{text}</p> : null}
          {children}
        </div>

        <div data-reveal className="flex flex-wrap gap-3" style={{ ['--reveal-delay' as string]: '120ms' }}>
          <Link href={primary.href} className="btn-accent !px-7 !py-3.5">
            {primary.label}
            <ArrowRight aria-hidden size={16} />
          </Link>
          {secondary ? (
            <Link href={secondary.href} className="btn-ghost-light !px-7 !py-3.5">
              {secondary.label}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
