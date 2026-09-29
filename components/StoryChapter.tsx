'use client';

type StoryChapterProps = {
  label?: string;
  title: string;
  detail: string;
  extraDetail?: string;
};

export default function StoryChapter({ title, detail, extraDetail }: StoryChapterProps) {
  return (
    <section className="section-shell py-10 md:py-14">
      <article data-reveal className="story-chapter group relative overflow-hidden">
        <span
          aria-hidden
          className="absolute inset-y-0 left-0 w-[3px] bg-gradient-to-b from-[#10284a] via-[#00B4D8] to-[#FF6900]"
        />
        <span
          aria-hidden
          className="pointer-events-none absolute -right-12 -top-12 h-44 w-44 rounded-full bg-[#00B4D8]/8 blur-2xl"
        />
        <div className="relative">
          <h2 className="story-title">{title}</h2>
          <p className="story-detail">{detail}</p>
          {extraDetail ? <p className="story-detail">{extraDetail}</p> : null}
        </div>
      </article>
    </section>
  );
}
