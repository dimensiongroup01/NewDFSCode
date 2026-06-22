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
  { name: 'Pragya Srivastav', image: '/images/Pragyanew.jpeg', designation: 'Accounts & Finance Assistant Manager' },
  { name: 'Ved Prakash', image: '/images/Ved Prakash.png', designation: 'Senior Sales Manager - Debt' },
  { name: 'S Ghosh', image: '/images/SGOSH.png', designation: 'Senior Sales Manager - Debt' },
  { name: 'Shlok Shah', image: '/images/NEWSHLOK.jpeg', designation: 'Software Developer' },
  { name: 'Utkarsh Bhatnagar', image: '/images/ub new.jpeg', designation: 'Debt Associate' },
  { name: 'Pratik Vishwakarma', image: '/images/Pratik.jpg', designation: 'Software Developer' },
  { name: 'Arjun Singh', image: '/images/Arjun.jpeg', designation: 'Accounts Executive' },
  { name: 'Mahima Suryan', image: '/images/mahima.png', designation: 'Company Secretary' },
  { name: 'Anushka Chandra', image: '/images/HRnew.jpeg', designation: 'HR' },
  { name: 'Jaayminee Kondru', image: '/images/jamuni.jpeg', designation: 'Sales Executive' },
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

// -- TeamCard -----------------------------------------------------------------
// Premium matrix card — tall photo with slide-up name overlay
function TeamCard({ member }: { member: { name: string; image: string; designation: string } }) {
  return (
    <div className="group relative flex flex-col overflow-hidden rounded-2xl shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
      {/* Photo area */}
      <div className="relative w-full overflow-hidden bg-gradient-to-br from-[#EAF8FC] to-[#d0eaf5]" style={{aspectRatio: '3/4'}}>
        <Image
          src={member.image}
          alt={member.name}
          fill
          className="object-cover object-top transition-transform duration-700 group-hover:scale-108"
        />
        {/* Dark gradient always visible at bottom for legibility */}
        <div className="absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-[#07203e]/90 via-[#07203e]/40 to-transparent" />

        {/* Name plate — slides up on hover */}
        <div className="absolute inset-x-0 bottom-0 translate-y-1 px-3 pb-4 transition-transform duration-400 group-hover:-translate-y-0">
          <p className="truncate text-sm font-bold leading-tight text-white drop-shadow">
            {member.name}
          </p>
          <p className="mt-1 line-clamp-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-cyan-300 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            {member.designation}
          </p>
        </div>
      </div>

      {/* Bottom strip — visible always on mobile, hidden on hover overlay */}
      <div className="border-t border-blue-100 bg-white px-3 py-2.5 text-center md:hidden">
        <p className="truncate text-xs font-semibold text-[#10284a]">{member.name}</p>
        <p className="mt-0.5 line-clamp-2 text-[10px] font-medium text-aqua">{member.designation}</p>
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
        <section className="relative overflow-hidden bg-gradient-to-b from-[#f0f7ff] via-white to-white pb-24 md:pb-32">
          {/* Decorative background blobs */}
          <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-[#0a355d]/8 blur-3xl" />
          <div className="pointer-events-none absolute -right-24 bottom-10 h-72 w-72 rounded-full bg-cyan-300/10 blur-3xl" />

          <div className="section-shell relative">
            {/* Section Header */}
            <div className="mb-12 flex flex-col items-center text-center md:mb-16">
              <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-[#EAF8FC] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.22em] text-[#007A96]">
                <svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0" /></svg>
                Our People
              </span>
              <h2 className="font-display text-4xl font-bold leading-tight text-[#10284a] md:text-5xl">
                Meet the Team
              </h2>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600 md:text-lg">
                A multi-disciplinary group combining intellectual depth, market experience, and hands-on execution capability — all working around your financial goals.
              </p>
            </div>

            {/* Team Matrix Grid — 4 columns */}
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5 md:gap-4 lg:gap-5">
              {teamMembers.map((member) => (
                <TeamCard key={member.name} member={member} />
              ))}
            </div>
          </div>
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
