import type { ReactNode } from 'react';

/**
 * InfoKit — shared, dependency-free presentation pieces used across all pages.
 * Plain server components (no hooks) so they work from server and client pages.
 * Palette: navy #10284a, aqua #00B4D8, deep aqua #0096B7, orange #FF6900.
 */

type Tone = 'accent' | 'primary' | 'navy';

const toneText: Record<Tone, string> = {
  accent: 'text-accent',
  primary: 'text-aqua-700',
  navy: 'text-navy'
};

const pad = (n: number | string, width = 2) => (typeof n === 'number' ? String(n).padStart(width, '0') : n);

/* ── Eyebrow ─────────────────────────────────────────────────────────────── */
export function Eyebrow({
  children,
  center = false,
  variant = 'accent'
}: {
  children: ReactNode;
  center?: boolean;
  variant?: Tone;
}) {
  return <p className={`eyebrow ${toneText[variant]} ${center ? 'justify-center' : ''}`}>{children}</p>;
}

/* ── Frame — the standard white content card ─────────────────────────────── */
export function Frame({ children, className = '' }: { children: ReactNode; className?: string }) {
  return <div className={`card relative overflow-hidden p-6 md:p-10 ${className}`}>{children}</div>;
}

/* ── NumberChip — numbered badge ─────────────────────────────────────────── */
export function NumberChip({
  value,
  variant = 'navy',
  size = 'md',
  decimals = 2
}: {
  value: number | string;
  variant?: Tone;
  size?: 'sm' | 'md' | 'lg';
  decimals?: number;
}) {
  const box = size === 'lg' ? 'h-12 w-12 text-sm' : size === 'sm' ? 'h-7 w-7 text-[10px]' : 'h-10 w-10 text-xs';
  const bg = variant === 'accent' ? 'bg-accent' : variant === 'primary' ? 'bg-aqua-600' : 'bg-navy';
  return (
    <span className={`flex shrink-0 items-center justify-center rounded-full font-bold tabular-nums text-white ${bg} ${box}`}>
      {pad(value, decimals)}
    </span>
  );
}

/* ── SectionHeading ──────────────────────────────────────────────────────── */
export function SectionHeading({
  eyebrow,
  title,
  intro,
  center = true,
  variant = 'accent',
  className = ''
}: {
  eyebrow?: string;
  title: string;
  intro?: string;
  center?: boolean;
  variant?: Tone;
  className?: string;
}) {
  return (
    <div className={`${center ? 'text-center' : ''} ${className}`}>
      {eyebrow ? (
        <Eyebrow center={center} variant={variant}>
          {eyebrow}
        </Eyebrow>
      ) : null}
      <h2 className="heading-lg mt-4">{title}</h2>
      {intro ? <p className={`lede mt-4 ${center ? 'mx-auto max-w-2xl' : 'max-w-2xl'}`}>{intro}</p> : null}
    </div>
  );
}

/* ── InfoCard — numbered/icon card ───────────────────────────────────────── */
export function InfoCard({
  index,
  icon,
  eyebrow,
  title,
  text,
  accent = '#0096B7',
  children,
  className = ''
}: {
  index?: number;
  icon?: ReactNode;
  eyebrow?: string;
  title: string;
  text?: string;
  accent?: string;
  variant?: Tone;
  children?: ReactNode;
  className?: string;
}) {
  return (
    <article className={`card card-hover group relative flex flex-col p-6 ${className}`}>
      <div className="flex items-center justify-between gap-3">
        {typeof index === 'number' ? (
          <span className="font-display text-3xl font-semibold tabular-nums text-navy/15 transition-colors duration-300 group-hover:text-accent">
            {pad(index)}
          </span>
        ) : null}
        {icon ? (
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-aqua-50 text-xl text-aqua-700">{icon}</span>
        ) : null}
        <span aria-hidden className="h-2 w-2 rounded-full" style={{ backgroundColor: accent }} />
      </div>

      {eyebrow ? (
        <p className="mt-5 text-[0.7rem] font-bold uppercase tracking-[0.18em] text-accent">{eyebrow}</p>
      ) : null}
      <h3 className={`font-body text-[1.05rem] font-bold leading-snug text-navy ${eyebrow ? 'mt-1.5' : 'mt-5'}`}>
        {title}
      </h3>
      {text ? <p className="mt-2.5 text-[0.925rem] leading-relaxed text-[#526071]">{text}</p> : null}
      {children}
    </article>
  );
}

/* ── PointMatrix — checklist panel for bullet points ─────────────────────── */
export function PointMatrix({
  points,
  columns = 1,
  className = ''
}: {
  points: readonly string[];
  columns?: 1 | 2;
  className?: string;
}) {
  return (
    <ul
      className={`${columns === 2 ? 'grid gap-x-8 sm:grid-cols-2' : ''} divide-y divide-line ${className}`}
    >
      {points.map((point, i) => (
        <li key={`${i}-${point}`} className="flex items-start gap-4 py-3.5 first:pt-0 last:pb-0">
          <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-aqua-50 text-[0.7rem] font-bold tabular-nums text-aqua-700">
            {pad(i + 1)}
          </span>
          <span className="text-[0.95rem] leading-relaxed text-ink">{point}</span>
        </li>
      ))}
    </ul>
  );
}

/* ── StatCard — metric / credential tile ─────────────────────────────────── */
export function StatCard({
  label,
  value,
  detail,
  accent = '#0096B7',
  className = ''
}: {
  label: string;
  value: string;
  detail?: string;
  accent?: string;
  className?: string;
}) {
  return (
    <div className={`card relative overflow-hidden p-6 ${className}`}>
      <span aria-hidden className="absolute inset-y-0 left-0 w-1" style={{ backgroundColor: accent }} />
      <p className="text-[0.7rem] font-bold uppercase tracking-[0.18em] text-slate-500">{label}</p>
      <p className="mt-3 font-display text-xl font-semibold leading-snug text-navy md:text-2xl">{value}</p>
      {detail ? <p className="mt-2 text-xs font-bold uppercase tracking-[0.12em] text-aqua-700">{detail}</p> : null}
    </div>
  );
}

/* ── StepCard — process / timeline step ──────────────────────────────────── */
export function StepCard({
  step,
  label,
  title,
  text
}: {
  step: string;
  label?: string;
  title: string;
  text: string;
  showConnector?: boolean;
}) {
  return (
    <div className="group relative h-full border-t-2 border-line pt-6 transition-colors duration-300 hover:border-accent">
      <span className="absolute -top-[0.45rem] left-0 h-3 w-3 rounded-full border-2 border-white bg-navy ring-1 ring-line transition-colors group-hover:bg-accent" />
      <div className="flex items-baseline gap-3">
        <span className="font-display text-2xl font-semibold tabular-nums text-accent">{step}</span>
        {label ? <span className="text-[0.7rem] font-bold uppercase tracking-[0.18em] text-slate-400">{label}</span> : null}
      </div>
      <h3 className="mt-3 font-body text-[1.05rem] font-bold text-navy">{title}</h3>
      <p className="mt-2 text-[0.925rem] leading-relaxed text-[#526071]">{text}</p>
    </div>
  );
}

/* ── QuoteCard — testimonial ─────────────────────────────────────────────── */
export function QuoteCard({ quote, name }: { quote: string; name: string }) {
  return (
    <figure className="card flex h-full min-w-[18rem] snap-start flex-col justify-between p-7 md:min-w-0">
      <div>
        <span aria-hidden className="block font-display text-5xl leading-none text-accent">
          &ldquo;
        </span>
        <blockquote className="mt-2 font-display text-lg leading-relaxed text-navy">{quote}</blockquote>
      </div>
      <figcaption className="mt-6 border-t border-line pt-4 text-xs font-bold uppercase tracking-[0.14em] text-aqua-700">
        {name}
      </figcaption>
    </figure>
  );
}

/* ── Chip ────────────────────────────────────────────────────────────────── */
export function Chip({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-line bg-white px-3.5 py-1.5 text-xs font-semibold text-navy ${className}`}
    >
      <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-aqua" />
      {children}
    </span>
  );
}

/* ── LinkRow — sitemap style navigation row ──────────────────────────────── */
export function LinkRow({
  href,
  label,
  index,
  external = false
}: {
  href: string;
  label: string;
  index: number;
  external?: boolean;
}) {
  return (
    <li>
      <a
        href={href}
        {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
        className="group flex items-center gap-4 border-b border-line py-3.5 text-[0.95rem] font-semibold text-navy transition-colors hover:text-aqua-700"
      >
        <span className="text-xs font-bold tabular-nums text-accent">{pad(index)}</span>
        <span className="flex-1">{label}</span>
        <span aria-hidden className="text-slate-300 transition-all duration-200 group-hover:translate-x-1 group-hover:text-aqua-700">
          →
        </span>
      </a>
    </li>
  );
}
