type StoryChapterProps = {
  label?: string;
  title: string;
  detail: string;
  extraDetail?: string;
};

export default function StoryChapter({ title, detail, extraDetail }: StoryChapterProps) {
  return (
    <section className="border-b border-line bg-white">
      <div
        data-reveal
        className="section-shell grid gap-6 py-14 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:gap-16 md:py-20"
      >
        <h2 className="heading-lg">
          <span aria-hidden className="mb-5 block h-1 w-12 rounded-full bg-accent" />
          {title}
        </h2>
        <div className="space-y-4 md:pt-9">
          <p className="lede">{detail}</p>
          {extraDetail ? <p className="lede">{extraDetail}</p> : null}
        </div>
      </div>
    </section>
  );
}
