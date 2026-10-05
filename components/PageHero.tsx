import { DimensionMark } from '@/components/brand/DimensionMark';

interface PageHeroProps {
  kicker: string;
  title: string;
  subtitle?: string;
}

export default function PageHero({ kicker, title, subtitle }: PageHeroProps) {
  return (
    <section className="band-navy">
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 -top-40 -z-10 h-[28rem] w-[28rem] rounded-full bg-accent/25 blur-[120px]"
      />
      <div className="section-shell grid gap-8 py-16 md:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] md:items-end md:py-24">
        <div className="animate-fade-up">
          {kicker ? <p className="eyebrow eyebrow-light">{kicker}</p> : null}
          <h1 className={`heading-xl max-w-3xl text-balance text-white ${kicker ? 'mt-5' : ''}`}>{title}</h1>
        </div>

        {subtitle ? (
          <p
            className="max-w-md animate-fade-up border-l-2 border-aqua pl-5 text-base leading-[1.75] text-slate-300 md:justify-self-end md:text-lg"
            style={{ animationDelay: '120ms' }}
          >
            {subtitle}
          </p>
        ) : (
          <span className="inline-flex w-fit items-center gap-3 rounded-full border border-white/20 px-4 py-2 font-display text-xs font-bold uppercase tracking-[0.18em] text-aqua md:justify-self-end">
            <DimensionMark variant="outline" className="h-4 w-4" />
            Financial Services
          </span>
        )}
      </div>

      {/* Dimension Line along the bottom edge */}
      <div className="section-shell pb-8">
        <div aria-hidden className="dimension-line">
          {[0, 1, 2, 3, 4].map((i) => (
            <span key={i} className="dimension-node !border-aqua !bg-navy" />
          ))}
        </div>
      </div>
    </section>
  );
}
