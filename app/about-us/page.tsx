import type { Metadata } from 'next';
import SiteFooter from '@/components/SiteFooter';
import SiteHeader from '@/components/SiteHeader';
import Image from 'next/image';
import { Eyebrow, InfoCard, StepCard } from '@/components/InfoKit';

export const metadata: Metadata = {
  title: 'About Us',
  description:
    'Learn about Dimension Financial Solutions Private Limited, our leadership team, regulatory credentials, and institutional debt advisory experience since 2009.',
  alternates: {
    canonical: '/about-us'
  }
};

const leadership = [
  {
    name: 'Ravi Kant Mathur',
    role: 'Whole Time Director - Merchant Banking / Stock Broking',
    image: '/images/Ravi sir Image.png',
    bio: 'Mr. Ravi Kant Mathur has 24+ years of experience in financial services, merchant banking & debt securities market. He worked with Bajaj Capital Ltd, SPA Merchant Bankers, and has rich expertise in merchant banking, public issues, private placements, and distribution of financial products.'
  },
  {
    name: 'Prachi Chopra',
    role: 'Whole Time Director - Stock Broking',
    image: '/images/pc.png',
    bio: 'Ms. Prachi Chopra has 23+ years of experience in insurance & HR management. She worked with Bajaj Capital, Aviva Life Insurance, and ICICI Prudential as Area Manager - Sales Training, bringing strong expertise in corporate insurance and people management.'
  },
  {
    name: 'Vivek Gautam',
    role: 'Whole Time Director - Merchant Banking / Stock Broking',
    image: '/images/Vivek sir new.jpeg',
    bio: 'Mr. Vivek Gautam has 35+ years of experience in Merchant Banking, handling public & rights issues, private placements, mergers, acquisitions, buybacks, delisting, and corporate restructuring. He held senior positions in PNB Capital, Bajaj Capital, SPA Capital & SMC Capitals.'
  },
  {
    name: 'Surpriya Sharma',
    role: 'Vice President - Stock Broking',
    image: '/images/ss.png',
    bio: 'Ms. Surpriya Sharma leads our stock broking operations with exceptional market insight and client service excellence. Her leadership ensures our clients receive top-tier brokerage services and strategic investment guidance.'
  },
];

const teamMembers = [
  { name: 'CA Pragya Srivastav', image: '/images/Pragyanew.jpeg', designation: 'Accounts & Finance ' },
 
  { name: 'Shlok Shah', image: '/images/NEWSHLOK.jpeg', designation: 'Software Developer' },
  { name: 'Utkarsh Bhatnagar', image: '/images/ub new.jpeg', designation: 'Debt Associate' },
  { name: 'Pratik Vishwakarma', image: '/images/Pratik.jpg', designation: 'Software Developer' },
  { name: 'Dhruv Chawla', image: '/images/Dhruv .jpeg', designation: 'Accounts & Finance' },
  { name: 'Arjun Singh', image: '/images/Arjun.jpeg', designation: 'Accounts & Finance' },
  { name: 'Mahima Suryan', image: '/images/mahima.png', designation: 'Company Secretary' },
  { name: 'Anushka Chandra', image: '/images/HRAnushkha.jpg', designation: 'Human Resources' },
  
  
   { name: 'Ved Prakash', image: '/images/Ved Prakash.png', designation: 'Debt Market' },
  { name: 'S Ghosh', image: '/images/SGOSH.png', designation: 'Debt Market' },
  { name: 'Jaayminee Kondru', image: '/images/jamuni.jpeg', designation: 'Debt Market' },
];

const highlights = [
  { label: 'Established', value: ' 2009' },
  { label: 'Merchant Banker', value: 'SEBI Registered  September 2025', detail: 'INM000013314' },
  { label: 'Stock Broking Debt Segment', value: ' 2023', detail: 'INZ000313233' },
  { label: 'Debt Platform', value: 'Bondsadda  2023', detail: 'OBPPs at BSE' }
];

const strengths = [
  {
    title: 'Institutional Debt Placement',
    text: 'Targeted placement across bonds, debentures, and debt instruments for trusts, institutions, and corporates.'
  },
  {
    title: 'Capital Raising Expertise',
    text: 'Execution support for IPO and rights issue mandates with disciplined process and market alignment.'
  },
  {
    title: 'Compliance-First Execution',
    text: 'Every engagement is structured around regulatory alignment, documentation clarity, and operational rigor.'
  },
  {
    title: 'Financial Advisory Services',
    text: 'Advisory for acquisition of company, managing open offers, M&A transactions, employee benefit schemes, and valuations. Advisory in respect of investment to institutions including PF and gratuity trusts, corporates, and individual investors.'
  }
];

const process = [
  {
    step: '01',
    title: 'Discovery',
    text: 'Understand funding objectives, risk profile, and market constraints.'
  },
  {
    step: '02',
    title: 'Structuring',
    text: 'Design instrument strategy and execution path aligned with regulations.'
  },
  {
    step: '03',
    title: 'Placement',
    text: 'Coordinate with institutions and investors for timely transaction closure.'
  },
  {
    step: '04',
    title: 'Ongoing Support',
    text: 'Continue advisory support for portfolio and recurring market requirements.'
  }
];

/// -- TeamCard -----------------------------------------------------------------
// Photo with an always-visible name plate (no hover-only content, so it works
// identically on touch devices).
function TeamCard({ member }: { member: { name: string; image: string; designation: string } }) {
  return (
    <div className="group card overflow-hidden transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
      <div className="relative w-full overflow-hidden bg-navy-50" style={{ aspectRatio: '4/5' }}>
        <Image
          src={member.image}
          alt={member.name}
          fill
          sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 50vw"
          className="object-cover object-top transition duration-500 group-hover:scale-[1.04]"
        />
      </div>
      <div className="border-t border-line px-4 py-3.5">
        <p className="truncate text-sm font-bold leading-tight text-navy">{member.name}</p>
        <p className="mt-1 line-clamp-2 text-[0.68rem] font-bold uppercase tracking-[0.1em] text-aqua-700">
          {member.designation}
        </p>
      </div>
    </div>
  );
}

export default function AboutPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" tabIndex={-1} className="min-h-screen">

        {/* -- About Overview -- */}
        <section className="band-navy">
          <div aria-hidden className="pointer-events-none absolute -left-40 top-0 -z-10 h-[28rem] w-[28rem] rounded-full bg-aqua/20 blur-[120px]" />
          <div className="section-shell grid gap-12 py-16 md:py-24 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-center lg:gap-16">
            <div>
              <p className="eyebrow eyebrow-light">About Us</p>
              <p className="mt-6 max-w-3xl font-display text-3xl font-semibold leading-tight text-white md:text-[2.6rem] md:leading-[1.12]">
                Dimension Financial Solutions is a SEBI Registered partner delivering merchant banking, debt securities,
                and institutional financial advisory services.
              </p>
              <p className="mt-8 inline-flex max-w-3xl items-center gap-3 rounded-full border border-white/15 bg-white/5 px-5 py-3 text-sm font-semibold leading-6 text-slate-200">
                <span aria-hidden className="h-2 w-2 shrink-0 rounded-full bg-accent" />
                Built on Governance, Market Insight, and a Client-First Execution Culture
              </p>
            </div>

            <div className="grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2">
              {highlights.map((item) => (
                <div key={item.label} className="bg-navy p-6">
                  <p className="text-[0.68rem] font-bold uppercase tracking-[0.18em] text-aqua">{item.label}</p>
                  <p className="mt-3 font-display text-xl font-semibold leading-snug text-white">{item.value}</p>
                  {'detail' in item ? (
                    <p className="mt-2 text-xs font-semibold uppercase tracking-[0.1em] text-slate-400">{item.detail}</p>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
          <div aria-hidden className="h-1 w-full bg-gradient-to-r from-aqua via-aqua-600 to-accent" />
        </section>

        {/* -- Story / What we do -- */}
        <section className="section bg-white">
          <div className="section-shell grid gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="space-y-6">
              <span aria-hidden className="block h-1 w-12 rounded-full bg-accent" />
              <p className="lede text-ink">
                Dimension Financial Solutions Private Limited was formed to deliver a comprehensive range of financial
                services with strong governance and market discipline. We are a SEBI-registered stock broker and BSE
                trading member on the debt segment, with active capability as an Online Bond Platform Provider (OBPP).
              </p>
              <p className="lede text-ink">
               Upon registration as merchant banker with SEBI, we are also actively engaged in management of capital
                issues, equity advisory services, framing of employee benefit schemes - ESOP&apos;S, ESOS, and valuation
                of sales and business.
              </p>
            </div>

            <div className="rounded-2xl bg-paper p-7 md:p-10">
              <h1 className="heading-lg">What we do</h1>
              <p className="body-copy mt-5">
                Dimension Financial Solutions Private Limited is a SEBI-registered Merchant Banker and Stock Broker
                (debt market). We are committed to deliver comprehensive financial advisory and capital market services.
                As a trusted partner in financial Industry, we also provide tailored solutions that drives sustainable
                growth, operational efficiency, and capital optimization. Our commitment to excellence, deep regulatory
                understanding, and client-centric approach position us as the partner of choice for corporates,
                institutions, provident fund Trusts, upcoming enterprises and retail investors for their financial
                requirements including those related to capital market and as well in respect of investments. We believe
                in building enduring relationships, empowering growth, and shaping a prosperous financial future for all
                our stakeholders.
              </p>
              <p className="body-copy mt-5 border-t border-line pt-5">
                We maintain long-term relationships with clients who rely on us for recurring debt market requirements
                and timely execution. Our operating approach combines domain expertise, risk awareness, and compliance-led
                transaction support.
              </p>
            </div>
          </div>
        </section>

        {/* -- Strengths -- */}
        <section className="section border-t border-line bg-paper">
          <div className="section-shell">
            <div className="mb-12 max-w-2xl">
              <Eyebrow>Strengths</Eyebrow>
              <h2 className="heading-lg mt-5">Why Institutions Work With Us</h2>
            </div>
            <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              {strengths.map((item, i) => (
                <InfoCard
                  key={item.title}
                  index={i + 1}
                  title={item.title}
                  text={item.text}
                  accent={['#0096B7', '#10284a', '#FF6900', '#00B4D8'][i % 4]}
                  className="h-full"
                />
              ))}
            </div>
          </div>
        </section>

        {/* -- Leadership -- */}
        <section className="section bg-white">
          <div className="section-shell">
            <div className="mb-12 max-w-2xl">
              <Eyebrow>People</Eyebrow>
              <h2 className="heading-lg mt-5">Management & Leadership</h2>
            </div>

            <div className="grid gap-6 lg:grid-cols-2">
              {leadership.map((leader) => (
                <article
                  key={leader.name}
                  className="group card card-hover grid overflow-hidden sm:grid-cols-[200px_minmax(0,1fr)]"
                >
                  <div className="relative aspect-[4/5] w-full overflow-hidden bg-navy-50 sm:aspect-auto sm:min-h-full">
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      fill
                      sizes="(min-width: 640px) 200px, 100vw"
                      className="object-cover object-top transition duration-700 group-hover:scale-[1.04]"
                    />
                  </div>

                  <div className="flex flex-col p-6 md:p-8">
                    <h3 className="font-display text-2xl font-semibold text-navy">{leader.name}</h3>
                    <p className="mt-2 text-xs font-bold uppercase leading-relaxed tracking-[0.12em] text-accent">
                      {leader.role}
                    </p>
                    <p className="mt-4 border-t border-line pt-4 text-[0.925rem] leading-relaxed text-[#526071]">{leader.bio}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* -- Engagement Process -- */}
        <section className="section border-y border-line bg-paper">
          <div className="section-shell">
            <div className="mb-14 max-w-2xl">
              <Eyebrow>Execution Model</Eyebrow>
              <h2 className="heading-lg mt-5">Our Engagement Process</h2>
            </div>
            <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
              {process.map((item) => (
                <StepCard
                  key={item.step}
                  step={item.step}
                  label={`Step ${item.step}`}
                  title={item.title}
                  text={item.text}
                />
              ))}
            </div>
          </div>
        </section>

        {/* -- Our Team -- */}
        <section className="section bg-white">
          <div className="section-shell">
            <div className="mb-12 grid gap-6 lg:grid-cols-2 lg:items-end">
              <div>
                <Eyebrow>Our People</Eyebrow>
                <h2 className="heading-lg mt-5 md:text-5xl">Meet the Team</h2>
              </div>
              <p className="lede lg:justify-self-end lg:text-right">
                A multi-disciplinary group combining intellectual depth, market experience, and hands-on execution capability — all working around your financial goals.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-5 lg:grid-cols-5">
              {teamMembers.map((member) => (
                <TeamCard key={member.name} member={member} />
              ))}
            </div>
          </div>
        </section>

        {/* -- Policies & Contact -- */}
        <section className="section-shell pb-16 md:pb-24">
          <div className="band-navy grid gap-8 rounded-[1.75rem] p-8 md:grid-cols-[1.3fr_0.7fr] md:items-center md:p-12">
            <div>
              <p className="eyebrow eyebrow-light">Policies &amp; Contact</p>
              <h2 className="heading-md mt-4 md:text-3xl">Need Compliance Documents or Advisory Support?</h2>
              <p className="mt-3 text-[0.95rem] leading-relaxed text-slate-300">
                Reach our team for investor policies, service details, and debt market guidance.
              </p>
            </div>
            <a
              href="mailto:contact@dimensionfinancial.co.in"
              className="btn-accent w-full break-all !rounded-2xl !py-4 text-center md:justify-self-end"
            >
              contact@dimensionfinancial.co.in
            </a>
          </div>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}
