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
      <main id="main-content" tabIndex={-1} className="min-h-screen">
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

      <section className="section bg-paper">
        <div className="section-shell grid gap-10 lg:grid-cols-12 lg:gap-12">
          <div data-reveal className="lg:col-span-5">
            <Eyebrow>Why Join Dimension</Eyebrow>
            <h3 className="heading-lg mt-5">Build your next chapter with us</h3>
            <p className="lede mt-5">
              Work on live mandates in merchant banking and debt markets with a team focused on execution quality,
              compliance discipline, and measurable client outcomes.
            </p>
            <div className="mt-8 grid gap-4">
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
          </div>

          <article data-reveal className="card relative overflow-hidden p-6 md:p-10 lg:col-span-7 lg:self-start">
            <span aria-hidden className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-aqua via-aqua-600 to-accent" />
            <Eyebrow>Application Desk</Eyebrow>
            <h3 className="heading-lg mt-5">Apply Now</h3>
            <p className="body-copy mt-4 max-w-2xl">
              Send your profile to our HR team on WhatsApp or email. Share your latest resume and a short summary of
              your experience for faster review.
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              <Chip className="bg-paper">WhatsApp: +91 96507 99560</Chip>
              <Chip className="bg-paper">HR: hr@dimensiongrouo.co.in</Chip>
            </div>
            <CareerApplyWhatsAppForm />
          </article>
        </div>
      </section>


      <ScrollReveal />
      </main>
      <SiteFooter />
    </>
  );
}



