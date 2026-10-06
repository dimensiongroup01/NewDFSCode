type StoryChapterProps = {
  label?: string;
  title: string;
  detail: string;
  extraDetail?: string;
};

export default function StoryChapter({ title, detail, extraDetail }: StoryChapterProps) {
  return (
    <section className="border-b border-line bg-white">
      <div className="section-shell grid gap-8 py-16 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:gap-16 md:py-24">
        <h2 data-reveal className="heading-lg text-balance">
          {title}
        </h2>
        <div
          data-reveal
          style={{ ['--reveal-delay' as string]: '120ms' }}
          className="relative space-y-4 border-l-2 border-accent/70 pl-6 md:pl-8"
        >
          <span aria-hidden className="absolute -left-[7px] top-0 h-3 w-3 rounded-full border-2 border-accent bg-white" />
          <p className="lede">{detail}</p>
          {extraDetail ? <p className="lede">{extraDetail}</p> : null}
        </div>
      </div>
    </section>
  );
}
