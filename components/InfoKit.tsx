import type { ReactNode } from 'react';

/**
 * InfoKit — shared, dependency-free presentation pieces used across all pages.
 * Plain server components (no hooks) so they work from server and client pages.
 * Palette: navy #10284a, aqua #00B4D8, deep aqua #0096B7, orange #FF6900.
 */

type Tone = 'accent' | 'primary' | 'navy';

const toneStyles: Record<Tone, { text: string; bar: string; chip: string }> = {
  accent: { text: 'text-[#FF6900]', bar: 'bg-[#FF6900]/60', chip: 'from-[#FF6900] to-[#00B4D8]' },
  primary: { text: 'text-[#0096B7]', bar: 'bg-[#0096B7]/60', chip: 'from-[#0096B7] to-[#00B4D8]' },
  navy: { text: 'text-[#10284a]', bar: 'bg-[#10284a]/40', chip: 'from-[#10284a] to-[#00B4D8]' }
};

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
  const styles = toneStyles[variant];
  return (
    <p
      className={`flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] ${styles.text} ${
        center ? 'justify-center' : ''
      }`}
    >
      <span aria-hidden className={`h-px w-5 ${styles.bar}`} />
      {children}
    </p>
  );
}

/* ── Frame — the standard white content card ─────────────────────────────── */
export function Frame({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`relative overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white p-6 shadow-sm md:p-10 ${className}`}
    >
      {children}
    </div>
  );
}

/* ── NumberChip — gradient mono number badge ─────────────────────────────── */
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
  const label = typeof value === 'number' ? String(value).padStart(decimals, '0') : value;
  const box = size === 'lg' ? 'h-11 w-11 text-[13px]' : size === 'sm' ? 'h-7 w-7 text-[10px]' : 'h-9 w-9 text-[11px]';
  return (
    <span
      className={`flex shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${toneStyles[variant].chip} font-mono font-black text-white shadow-md shadow-[#10284a]/15 transition-transform duration-300 group-hover:scale-105 ${box}`}
    >
      {label}
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
      <h2 className="mt-2 text-2xl font-bold text-[#10284a] md:text-3xl">{title}</h2>
      {intro ? (
        <p
          className={`mt-3 text-sm leading-relaxed text-slate-500 md:text-base ${
            center ? 'mx-auto max-w-2xl' : 'max-w-2xl'
          }`}
        >
          {intro}
        </p>
      ) : null}
    </div>
  );
}


/* ── InfoCard — numbered/icon infographic card ───────────────────────────── */
export function InfoCard({
  index,
  icon,
  eyebrow,
  title,
  text,
  accent = '#0096B7',
  variant = 'navy',
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
    <article
      className={`group relative overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#00B4D8]/60 hover:shadow-[0_16px_38px_rgba(16,40,74,0.10)] ${className}`}
    >
      {/* Top accent bar that wipes in on hover */}
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 h-[3px] origin-left scale-x-0 transition-transform duration-500 group-hover:scale-x-100"
        style={{ background: `linear-gradient(90deg, ${accent}, #00B4D8)` }}
      />
      {/* Ghost index watermark */}
      {typeof index === 'number' ? (
        <span
          aria-hidden
          className="pointer-events-none absolute -bottom-5 right-2 font-mono text-[58px] font-black leading-none text-[#10284a]/5 transition-colors duration-500 group-hover:text-[#0096B7]/10"
        >
          {String(index).padStart(2, '0')}
        </span>
      ) : null}

      <div className="relative">
        <div className="flex items-center gap-3">
          {typeof index === 'number' ? <NumberChip value={index} variant={variant} /> : null}
          {icon ? (
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-[#F0F7FF] to-white text-xl ring-1 ring-[#00B4D8]/25 transition-transform duration-300 group-hover:scale-105">
              {icon}
            </span>
          ) : null}
          {typeof index === 'number' && icon ? (
            <span aria-hidden className="h-px flex-1 bg-gradient-to-r from-[#00B4D8]/40 to-transparent" />
          ) : null}
        </div>

        {eyebrow ? (
          <p className="mt-3 font-mono text-[10px] font-bold uppercase tracking-[0.2em] text-[#FF6900]">{eyebrow}</p>
        ) : null}
        <h3 className={`text-base font-bold text-[#10284a] ${eyebrow ? 'mt-1' : 'mt-3'}`}>{title}</h3>
        {text ? <p className="mt-2 text-sm leading-relaxed text-slate-500">{text}</p> : null}
        {children}
      </div>
    </article>
  );
}

/* ── PointMatrix — infographic checklist panel for bullet points ─────────── */
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
      className={`group/matrix relative rounded-2xl border border-[#EDF2F7] bg-[#F8FAFC] p-3.5 transition-colors duration-300 hover:border-[#00B4D8]/30 hover:bg-[#F4FAFD] ${
        columns === 2 ? 'grid gap-x-5 gap-y-2.5 sm:grid-cols-2' : 'space-y-2'
      } ${className}`}
    >
      {points.map((point, i) => (
        <li key={`${i}-${point}`} className="flex items-start gap-3">
          <span
            className="mt-px flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-white font-mono text-[10px] font-black text-[#0096B7] ring-1 ring-inset ring-[#00B4D8]/30 transition-all duration-300 group-hover/matrix:bg-[#0096B7] group-hover/matrix:text-white group-hover/matrix:ring-[#0096B7]"
            style={{ transitionDelay: `${i * 45}ms` }}
          >
            {String(i + 1).padStart(2, '0')}
          </span>
          <span className="text-sm leading-relaxed text-slate-600">{point}</span>
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
    <div
      className={`group relative overflow-hidden rounded-2xl border border-[#E2E8F0] bg-gradient-to-b from-white to-[#F5FBFD] p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#00B4D8]/50 hover:shadow-[0_18px_40px_rgba(16,40,74,0.12)] ${className}`}
    >
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 h-1 opacity-70 transition-opacity duration-300 group-hover:opacity-100"
        style={{ background: `linear-gradient(90deg, ${accent}, #00B4D8, ${accent})` }}
      />
      <p className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-[#007A96]">
        <span aria-hidden className="h-1 w-1 rounded-full" style={{ backgroundColor: accent }} />
        {label}
      </p>
      <p className="mt-3 font-mono text-lg font-black leading-snug text-[#10284a] md:text-xl">{value}</p>
      {detail ? (
        <p className="mt-2 text-xs font-semibold uppercase tracking-[0.08em] text-slate-500">{detail}</p>
      ) : null}
    </div>
  );
}

/* ── StepCard — process / timeline step ──────────────────────────────────── */
export function StepCard({
  step,
  label,
  title,
  text,
  showConnector = false
}: {
  step: string;
  label?: string;
  title: string;
  text: string;
  showConnector?: boolean;
}) {
  return (
    <div className="group relative">
      {showConnector ? (
        <span
          aria-hidden
          className="pointer-events-none absolute left-[1.35rem] top-12 hidden h-[calc(100%-2rem)] w-px bg-gradient-to-b from-[#00B4D8]/50 to-transparent lg:block"
        />
      ) : null}
      <div className="relative overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:border-[#00B4D8]/50 hover:shadow-[0_16px_36px_rgba(16,40,74,0.10)]">
        <span
          aria-hidden
          className="absolute left-0 top-0 h-full w-[3px] origin-top scale-y-0 bg-gradient-to-b from-[#00B4D8] to-[#10284a] transition-transform duration-500 group-hover:scale-y-100"
        />
        <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-[#10284a] to-[#0d1f3c] font-mono text-[11px] font-black text-white shadow-md shadow-[#10284a]/20 transition-transform duration-300 group-hover:scale-105">
          {step}
        </span>
        {label ? (
          <p className="mt-3 text-xs font-semibold uppercase tracking-[0.16em] text-[#0096B7]">{label}</p>
        ) : null}
        <h3 className={`text-base font-bold text-[#10284a] ${label ? 'mt-1' : 'mt-3'}`}>{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-500">{text}</p>
        <div className="mt-4 h-1.5 w-14 rounded-full bg-gradient-to-r from-[#10284a] to-[#00B4D8] transition-all duration-500 group-hover:w-24" />
      </div>
    </div>
  );
}

/* ── QuoteCard — testimonial ─────────────────────────────────────────────── */
export function QuoteCard({ quote, name }: { quote: string; name: string }) {
  return (
    <article className="group relative flex min-w-[18rem] snap-start flex-col overflow-hidden rounded-2xl border border-[#E2E8F0] bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#00B4D8]/50 hover:shadow-[0_16px_38px_rgba(16,40,74,0.10)] md:min-w-[24rem]">
      <span
        aria-hidden
        className="pointer-events-none absolute -right-2 -top-6 font-display text-[80px] font-black leading-none text-[#00B4D8]/10"
      >
        &ldquo;
      </span>
      <div className="relative">
        <p className="text-sm leading-relaxed text-slate-600">{quote}</p>
        <div className="mt-4 flex items-center gap-3 border-t border-dashed border-slate-200 pt-4">
          <span aria-hidden className="h-8 w-1 rounded-full bg-gradient-to-b from-[#00B4D8] to-[#10284a]" />
          <p className="text-xs font-bold uppercase tracking-[0.12em] text-[#10284a]">{name}</p>
        </div>
      </div>
    </article>
  );
}

/* ── Chip ────────────────────────────────────────────────────────────────── */
export function Chip({ children, className = '' }: { children: ReactNode; className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full border border-[#E2E8F0] bg-white px-3.5 py-1.5 text-xs font-semibold text-[#10284a] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#00B4D8] hover:shadow-sm ${className}`}
    >
      <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-[#00B4D8]" />
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
        className="group flex items-center gap-3 rounded-xl border border-transparent px-3 py-2.5 text-sm font-semibold text-[#10284a] transition-all duration-200 hover:border-[#00B4D8]/40 hover:bg-white hover:shadow-[0_10px_26px_rgba(16,40,74,0.07)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#00B4D8]"
      >
        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-[#EAF8FC] font-mono text-[10px] font-black text-[#007A96] transition-colors group-hover:bg-[#0096B7] group-hover:text-white">
          {String(index).padStart(2, '0')}
        </span>
        <span className="flex-1">{label}</span>
        <span
          aria-hidden
          className="text-[#00B4D8] opacity-0 transition-all duration-300 group-hover:translate-x-0.5 group-hover:opacity-100"
        >
          →
        </span>
      </a>
    </li>
  );
}

