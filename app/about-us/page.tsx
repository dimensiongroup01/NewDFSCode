import type { Metadata } from 'next';
import SiteFooter from '@/components/SiteFooter';
import SiteHeader from '@/components/SiteHeader';
import Image from 'next/image';

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
    image: '/images/vg.png',
    bio: 'Mr. Vivek Gautam has 33+ years of experience in Merchant Banking, handling public & rights issues, private placements, mergers, acquisitions, buybacks, delisting, and corporate restructuring. He held senior positions in PNB Capital, Bajaj Capital, SPA Capital & SMC Capitals.'
  },
  {
    name: 'Surpriya Sharma',
    role: 'Vice President - Stock Broking',
    image: '/images/ss.png',
    bio: 'Ms. Surpriya Sharma leads our stock broking operations with exceptional market insight and client service excellence. Her leadership ensures our clients receive top-tier brokerage services and strategic investment guidance.'
  },
];

const teamMembers = [
  { name: 'Pragya Srivastav',    image: '/images/Pragyanew.jpeg',  designation: 'Accounts & Finance Assistant Manager' },
  { name: 'Shlok Shah',          image: '/images/NEWSHLOK.jpeg',   designation: 'Software Developer' },
  { name: 'Utkarsh Bhatnagar',   image: '/images/ub new.jpeg',     designation: 'Debt Associate' },
  { name: 'Pratik Vishwakarma',  image: '/images/Pratik.jpg',      designation: 'Software Developer' },
  { name: 'Arjun Singh',         image: '/images/Arjun.jpeg',      designation: 'Accounts Executive' },
  { name: 'Mahima Suryan',      image: '/images/mahima.png',        designation: 'Company Secretary' },
  { name: 'Jaayminee Kondru',    image: '/images/jamuni.jpeg',     designation: 'Sales Executive' },
];

const highlights = [
  { label: 'Established', value: 'Since 2009' },
  { label: 'Merchant Banker', value: 'SEBI Registered Since September 2025', detail: 'INM000013314' },
  { label: 'Stock Broking Debt Segment', value: 'Since 2023', detail: 'INZ000313233' },
  { label: 'Debt Platform', value: 'Bondsadda Since 2023', detail: 'OBPPs at BSE' }
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

// -- TeamCard -----------------------------------------------------------------
// Compact professional card design optimized for headshots
function TeamCard({ member }: { member: { name: string; image: string; designation: string } }) {
  return (
    <div className="group flex flex-col overflow-hidden rounded-xl border border-blue-100/40 bg-white shadow-sm transition-all duration-500 hover:-translate-y-1 hover:border-aqua/50 hover:shadow-md">
      {/* Image - fixed responsive height keeps cards compact across viewports */}
      <div className="relative h-52 w-full overflow-hidden bg-gradient-to-br from-blue-50 to-blue-100/50 sm:h-56 lg:h-60">
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover object-center transition duration-700 group-hover:scale-105"
        />
        {/* Subtle bottom gradient fade */}
        <div className="absolute inset-x-0 bottom-0 h-12 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
      </div>

      {/* Name + Designation — compact and clean */}
      <div className="bg-white px-2.5 py-2 text-center sm:px-3 sm:py-2.5">
        <p className="truncate text-xs font-semibold text-[#10284a] sm:text-sm">
          {member.name}
        </p>
        <p className="mt-0.5 line-clamp-2 text-[10px] font-medium text-aqua sm:text-[11px]">
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
      <main id="main-content" tabIndex={-1} className="grid-overlay min-h-screen">

        {/* -- About Overview -- */}
        <section className="section-shell relative overflow-hidden bg-white py-16 md:py-20">
          <div className="absolute inset-x-0 top-0 h-56 bg-gradient-to-b from-[#EAF8FC] via-white to-transparent" />
          <div className="absolute left-[-8rem] top-10 h-80 w-80 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute right-[-8rem] top-24 h-80 w-80 rounded-full bg-[#FF6900]/8 blur-3xl" />

          <div className="relative rounded-[2rem] border border-[#DDEAF1] bg-white/88 p-5 shadow-[0_28px_80px_rgba(15,23,42,0.08)] backdrop-blur md:p-8 lg:p-10">
            <div className="grid gap-10 lg:grid-cols-[minmax(0,1.02fr)_minmax(0,0.98fr)] lg:items-start lg:gap-12">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.3em] text-primary-dark">
                  About Us
                </p>
                <p className="mt-6 max-w-3xl text-2xl font-semibold leading-snug text-[#0a355d] md:text-3xl md:leading-tight">
                  Dimension Financial Solutions is a SEBI Registered partner delivering merchant banking, debt securities,
                  and institutional financial advisory services.
                </p>
                <p className="mt-6 inline-block max-w-3xl rounded-full border border-primary/20 bg-[#EAF8FC] px-5 py-3 text-sm font-bold leading-6 text-[#0a355d] shadow-sm md:text-base">
                  Built on Governance, Market Insight, and a Client-First Execution Culture
                </p>

                <div className="mt-10 space-y-5 rounded-2xl border border-[#E2E8F0] bg-[#F8FAFB] p-5 text-slate-800 md:p-6">
                  <p className="text-sm leading-7 md:text-base">
                    Dimension Financial Solutions Private Limited was formed to deliver a comprehensive range of financial
                    services with strong governance and market discipline. We are a SEBI-registered stock broker and BSE
                    trading member on the debt segment, with active capability as an Online Bond Platform Provider (OBPP).
                  </p>
                  <p className="text-sm leading-7 md:text-base">
                    After registration as merchant banker with SEBI, we are also actively engaged in management of capital
                    issues, equity advisory services, framing of employee benefit schemes - ESOP&apos;S, ESOS, and valuation
                    of sales and business.
                  </p>
                </div>
              </div>

              <div>
                <div className="grid gap-4 sm:grid-cols-2">
                  {highlights.map((item) => (
                    <div
                      key={item.label}
                      className="group relative overflow-hidden rounded-2xl border border-[#DDEAF1] bg-gradient-to-b from-white to-[#F5FBFD] p-5 shadow-[0_16px_38px_rgba(15,23,42,0.07)] transition duration-300 hover:-translate-y-1 hover:border-primary/35 hover:shadow-[0_22px_46px_rgba(0,122,150,0.13)]"
                    >
                      <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#10284a] via-primary to-[#FF6900]" />
                      <p className="text-xs font-bold uppercase tracking-[0.18em] text-primary-dark">{item.label}</p>
                      <p className="mt-3 text-lg font-bold leading-snug text-slate-950 md:text-xl">{item.value}</p>
                      {'detail' in item ? (
                        <p className="mt-2 text-sm font-semibold uppercase tracking-[0.08em] text-slate-600">
                          {item.detail}
                        </p>
                      ) : null}
                    </div>
                  ))}
                </div>

                <div className="mt-8 space-y-5 rounded-[1.75rem] border border-[#DDEAF1] bg-white p-5 text-slate-800 shadow-[0_18px_46px_rgba(15,23,42,0.07)] md:p-6">
                  <h1 className="text-3xl font-bold leading-tight text-slate-950">What we do</h1>
                  <p className="text-sm leading-7 md:text-base">
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
                  <p className="border-t border-[#E2E8F0] pt-5 text-sm leading-7 md:text-base">
                    We maintain long-term relationships with clients who rely on us for recurring debt market requirements
                    and timely execution. Our operating approach combines domain expertise, risk awareness, and compliance-led
                    transaction support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* -- Strengths -- */}
        <section className="section-shell pb-14 md:pb-20">
          <div className="mb-8 text-center">
            <p className="text-xs uppercase tracking-[0.18em] text-aqua">Strengths</p>
            <h2 className="mt-2 font-display text-3xl md:text-4xl">Why Institutions Work With Us</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {strengths.map((item) => (
              <article
                key={item.title}
                className="group relative overflow-hidden rounded-[1.75rem] border border-blue-200/80 bg-white/95 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-[#10284a] via-blue-400 to-[#10284a] opacity-70" />
                <h3 className="text-xl font-semibold text-[#10284a]">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink md:text-base">{item.text}</p>
                <div className="mt-5 h-px w-full bg-gradient-to-r from-blue-100 via-blue-300 to-transparent transition duration-500 group-hover:via-blue-400" />
              </article>
            ))}
          </div>
        </section>

        {/* -- Leadership -- */}
        <section className="section-shell py-2 pb-16 md:pb-20">
          <div className="mb-8 text-center">
            <p className="text-xs uppercase tracking-[0.18em] text-aqua">People</p>
            <h2 className="mt-2 font-display text-3xl md:text-4xl">Management & Leadership</h2>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            {leadership.map((leader) => (
              <article
                key={leader.name}
                className="group card overflow-hidden p-0 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
              >
                {/* Mobile: stacked — image on top with aspect ratio so face never clips
                    Desktop: side-by-side — fixed 180px image column */}
                <div className="flex flex-col md:flex-row">

                  {/* -- Image -- */}
                  {/* Mobile uses aspect-[4/3] (landscape) so the full face is visible.
                      Desktop uses a fixed-width column; fill + object-center centres the face. */}
                  <div className="relative w-full shrink-0 overflow-hidden
                                  aspect-[3/4]
                                  md:aspect-auto md:w-[180px] md:min-h-full">
                    <Image
                      src={leader.image}
                      alt={leader.name}
                      fill
                      className="object-cover object-top transition duration-700 group-hover:scale-105"
                    />
                    {/* gradient only on desktop side-panel */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#072847]/50 via-transparent to-transparent md:bg-gradient-to-r" />
                  </div>

                  {/* -- Text -- */}
                  <div className="flex flex-col justify-center p-5 md:p-7">
                    <h3 className="text-xl font-bold text-[#10284a]">{leader.name}</h3>
                    <p className="mt-2 inline-block self-start rounded-full bg-blue-50 px-3 py-1 text-xs font-semibold text-[#10284a] md:text-sm">
                      {leader.role}
                    </p>
                    <p className="mt-4 text-sm leading-relaxed text-ink md:text-base">{leader.bio}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* -- Engagement Process -- */}
        <section className="section-shell pb-16 md:pb-20">
          <article className="rounded-3xl border border-blue-200/80 bg-white/90 p-6 shadow-sm md:p-8">
            <p className="text-xs uppercase tracking-[0.18em] text-aqua">Execution Model</p>
            <h2 className="mt-2 font-display text-3xl md:text-4xl">Our Engagement Process</h2>
            <div className="mt-6 grid gap-4 md:grid-cols-4">
              {process.map((item) => (
                <div
                  key={item.step}
                  className="group rounded-[1.5rem] border border-blue-100 bg-white p-4 transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg"
                >
                  <p className="text-xs font-semibold uppercase tracking-[0.16em] text-aqua">Step {item.step}</p>
                  <h3 className="mt-2 text-lg font-semibold text-[#10284a]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink">{item.text}</p>
                  <div className="mt-4 h-1.5 w-14 rounded-full bg-gradient-to-r from-[#10284a] to-blue-400 transition-all duration-500 group-hover:w-24" />
                </div>
              ))}
            </div>
          </article>
        </section>

        {/* -- Our Team -- */}
        <section className="section-shell pb-20 md:pb-28">
          <article className="space-y-10 md:space-y-12">
            {/* Section Header */}
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-aqua">Our Team</p>
              <h2 className="mt-3 font-display text-4xl font-semibold leading-tight text-[#10284a] md:text-5xl">
                A Multi-Disciplinary Team
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-7 text-slate-700 md:text-lg">
                The team at <span className="font-semibold text-[#10284a]">Dimension Financial Solutions</span> combines intellectual depth, market experience, and practical execution capability to design solutions around each client&apos;s financial goals.
              </p>
            </div>

            {/* Team Grid */}
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 md:gap-5 xl:grid-cols-7">
              {teamMembers.map((member) => (
                <TeamCard key={member.name} member={member} />
              ))}
            </div>
          </article>
        </section>

        {/* -- Policies & Contact -- */}
        <section className="section-shell pb-16 md:pb-20">
          <article className="rounded-3xl border border-blue-200/70 bg-gradient-to-r from-blue-50 to-blue-50 p-6 md:p-10">
            <div className="grid gap-6 md:grid-cols-[1.2fr_0.8fr] md:items-center">
              <div>
                <p className="text-xs uppercase tracking-[0.18em] text-aqua">Policies & Contact</p>
                <h2 className="mt-2 font-display text-2xl md:text-3xl">Need Compliance Documents or Advisory Support?</h2>
                <p className="mt-3 text-sm leading-relaxed text-ink md:text-base">
                  Reach our team for investor policies, service details, and debt market guidance.
                </p>
              </div>
              <div className="space-y-3 text-sm md:text-base">
                <a
                  href="/Documents/Policies/Investor Complaints Redressal Policy.pdf"
                  target="_blank"
                  className="block rounded-xl border border-blue-200 bg-white px-4 py-3 font-medium text-[#10284a] transition hover:border-blue-300"
                >
                  Investor Complaints Redressal Policy
                </a>
                <a
                  href="/Documents/Policies/Code of Conduct and Ethics Policy.pdf"
                  target="_blank"
                  className="block rounded-xl border border-blue-200 bg-white px-4 py-3 font-medium text-[#10284a] transition hover:border-blue-300"
                >
                  Code of Conduct and Ethics Policy
                </a>
                <a
                  href="mailto:contact@dimensionfinancial.co.in"
                  className="block rounded-xl border border-blue-200 bg-white px-4 py-3 font-medium text-[#10284a] transition hover:border-blue-300"
                >
                  contact@dimensionfinancial.co.in
                </a>
              </div>
            </div>
          </article>
        </section>

      </main>
      <SiteFooter />
    </>
  );
}
