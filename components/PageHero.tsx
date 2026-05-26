interface PageHeroProps {
  kicker: string;
  title: string;
  subtitle?: string;
}

export default function PageHero({ kicker, title, subtitle }: PageHeroProps) {
  return (
    <section className="relative overflow-hidden border-b border-[#E2E8F0] bg-[linear-gradient(180deg,#F8FAFB_0%,#EAF8FC_58%,#F8FAFB_100%)] py-14 md:py-20">
      <div className="pointer-events-none absolute left-[-8%] top-[-18%] h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(0,180,216,0.16),rgba(0,180,216,0))] blur-3xl" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(rgba(0,180,216,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,105,0,0.035)_1px,transparent_1px)] bg-[size:44px_44px]" />

      <div className="section-shell relative z-10">
        <div className="rounded-[1.5rem] border border-[#E2E8F0] bg-white/90 p-5 shadow-[0_18px_48px_rgba(15,23,42,0.08)] sm:rounded-[2rem] sm:p-6 md:p-8">
          <div className="grid gap-5 md:grid-cols-[minmax(0,1fr)_minmax(0,0.72fr)] md:items-end">
            <div className="space-y-4">
              <p data-reveal className="text-[0.625rem] font-bold uppercase tracking-[0.18em] text-[#FF6900] sm:text-[11px] sm:tracking-[0.24em]">
                {kicker}
              </p>
              <h1 data-reveal className="max-w-4xl font-display text-[2rem] font-semibold leading-[1] text-[#10284a] sm:text-4xl sm:leading-[0.95] md:text-6xl">
                {title}
              </h1>
            </div>

            {subtitle ? (
              <p data-reveal className="max-w-3xl text-sm leading-7 text-[#435067] md:justify-self-end md:text-lg">
                {subtitle}
              </p>
            ) : (
              <div className="justify-self-start rounded-full border border-[#E2E8F0]/70 bg-[#F8FAFB] px-4 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#FF6900] md:justify-self-end">
                Financial Services
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

