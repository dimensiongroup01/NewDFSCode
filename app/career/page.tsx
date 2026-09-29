import type { Metadata } from 'next';
import PageHero from '@/components/PageHero';
import ScrollFusion3D from '@/components/ScrollFusion3D';
import ScrollReveal from '@/components/ScrollReveal';
import StoryChapter from '@/components/StoryChapter';
import SiteFooter from '@/components/SiteFooter';
import SiteHeader from '@/components/SiteHeader';
import CareerApplyWhatsAppForm from '@/components/CareerApplyWhatsAppForm';
import { Chip, Eyebrow, InfoCard } from '@/components/InfoKit';

export const metadata: Metadata = {
  title: 'Careers',
  description:
    'Explore career opportunities at Dimension Financial Services in merchant banking, debt advisory, and institutional transaction execution.',
  alternates: {
    canonical: '/career'
  }
};

const benefits = [
  {
    title: 'Capital Market Exposure',
    text: 'Hands-on involvement in IPO, debt placement, and advisory transactions.'
  },
  {
    title: 'Structured Career Growth',
    text: 'Performance-led learning path with strong mentorship and execution feedback.'
  },
  {
    title: 'Compliance-First Culture',
    text: 'Develop deep understanding of regulations while delivering institutional-grade work.'
  }
];

export default function CareerPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" tabIndex={-1} className="grid-overlay">
      <PageHero
        kicker="Careers"
        title="Grow with Dimension"
        subtitle="Join a high-integrity team delivering institutional-grade financial advisory and transaction execution."
      />
        {/* <ScrollFusion3D variant="career" compact /> */}
      <StoryChapter
        label="Section 08"
        title="Build a Career in Capital Markets"
        detail="The careers journey reflects our execution culture: learning through live mandates, strong compliance grounding, and long-term growth."
      />

      <section className="section-shell grid gap-5 py-14 md:grid-cols-12 md:py-20">
        <article data-reveal className="card p-6 md:col-span-5 md:p-8">
          <Eyebrow>Why Join Dimension</Eyebrow>
          <h3 className="mt-2 font-display text-3xl leading-tight text-ink">Build your next chapter with us</h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-700">
            Work on live mandates in merchant banking and debt markets with a team focused on execution quality,
            compliance discipline, and measurable client outcomes.
          </p>
          <div className="mt-4 grid gap-3">
            {benefits.map((benefit, i) => (
              <InfoCard
                key={benefit.title}
                index={i + 1}
                title={benefit.title}
                text={benefit.text}
                accent={['#0096B7', '#10284a', '#FF6900'][i % 3]}
                className="h-full"
              />
            ))}
          </div>
        </article>

        <article
          data-reveal
          className="card relative overflow-hidden p-6 before:absolute before:-right-16 before:-top-16 before:h-44 before:w-44 before:rounded-full before:bg-[#00B4D8]/12 before:content-[''] md:col-span-7 md:p-8"
        >
          <Eyebrow>Application Desk</Eyebrow>
          <h3 className="mt-2 font-display text-3xl leading-tight text-ink">Apply Now</h3>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-slate-700">
            Send your profile to our HR team on WhatsApp or email. Share your latest resume and a short summary of
            your experience for faster review.
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            <Chip className="bg-[#F8FAFB]">WhatsApp: +91 96507 99560</Chip>
            <Chip className="bg-[#F8FAFB]">HR: hr@dimensiongrouo.co.in</Chip>
          </div>
          <CareerApplyWhatsAppForm />
        </article>
      </section>

      <ScrollReveal />
      </main>
      <SiteFooter />
    </>
  );
}



