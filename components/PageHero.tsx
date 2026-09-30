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
        className="pointer-events-none absolute -right-40 -top-40 -z-10 h-[28rem] w-[28rem] rounded-full bg-aqua/20 blur-[120px]"
      />
      <div className="section-shell grid gap-8 py-16 md:grid-cols-[minmax(0,1.35fr)_minmax(0,1fr)] md:items-end md:py-24">
        <div>
          {kicker ? <p className="eyebrow eyebrow-light">{kicker}</p> : null}
          <h1 className={`heading-xl max-w-3xl text-white ${kicker ? 'mt-5' : ''}`}>{title}</h1>
        </div>

        {subtitle ? (
          <p className="max-w-md border-l-2 border-accent pl-5 text-base leading-relaxed text-slate-300 md:justify-self-end md:text-lg">
            {subtitle}
          </p>
        ) : (
          <span className="inline-flex w-fit rounded-full border border-white/20 px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-aqua md:justify-self-end">
            Financial Services
          </span>
        )}
      </div>
      <div aria-hidden className="h-1 w-full bg-gradient-to-r from-aqua via-aqua-600 to-accent" />
    </section>
  );
}
