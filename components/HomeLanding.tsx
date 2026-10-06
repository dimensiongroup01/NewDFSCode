import type { CSSProperties } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import {
  ArrowRight,
  ArrowUpRight,
  BadgeCheck,
  BookOpen,
  Compass,
  FileCheck2,
  FileText,
  Layers,
  LifeBuoy,
  LineChart,
  Route,
  ScrollText,
  Target,
  Users
} from 'lucide-react';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import ScrollReveal from '@/components/ScrollReveal';
import HeroVisual from '@/components/brand/HeroVisual';
import { DimensionMark } from '@/components/brand/DimensionMark';
import { credentials, engagementProcess } from '@/lib/content';

const ClientsShowcase = dynamic(() => import('@/components/ClientsShowcase'), {
  loading: () => <section className="section-shell py-24" aria-busy="true" />,
  ssr: true
});

// -- Existing homepage content ----------------------------------------------------

const missionPoints = [
  'Build a merchant banking institution of repute, driven by integrity and professional excellence.',
  'Uphold the highest standards of integrity so every action reflects our core business principles.',
  'Provide secure, efficient, and compliant services that minimize risk while supporting positive returns.',
  "Offer financial products and solutions tailored to our clients' needs."
];

const whyChooseUs = [
  'Team of Qualified Professionals with extensive experience in Merchant Banking and Debt Securities Markets',
  'Deep Market Insight and Industry Expertise',
  'Client-First Approach with Personalized Financial Solutions',
  'Proven Track Record in Capital Market Transactions',
  'Trusted Advisory for SMEs, Corporates, and Institutions'
];

const credentialIcons = [BadgeCheck, FileCheck2, LineChart, Layers];
// Cell dividers for a 1 → 2 → 4 column grid.
const credentialBorders = [
  '',
  'border-t sm:border-l sm:border-t-0',
  'border-t lg:border-l lg:border-t-0',
  'border-t sm:border-l lg:border-t-0'
];
const processIcons = [Compass, Route, Target, LifeBuoy];

const resources = [
  { href: '/annual', label: 'Annual Reports (Investor)', icon: BookOpen, external: false },
  { href: '/investor', label: 'Investor Information', icon: Users, external: false },
  { href: '/images/icp.pdf', label: 'Investor Policy', icon: FileText, external: true },
  { href: '/images/coe.pdf', label: 'Code of Conduct', icon: ScrollText, external: true }
];

const delay = (ms: number) => ({ ['--reveal-delay' as string]: `${ms}ms` }) as CSSProperties;
const heroDelay = (ms: number) => ({ animationDelay: `${ms}ms` }) as CSSProperties;

export default function HomeLanding() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" tabIndex={-1} className="min-h-screen">
        {/* ── 1. Hero ─────────────────────────────────────────────────────── */}
        <section className="relative overflow-hidden bg-white">
          <div aria-hidden className="absolute inset-y-0 right-0 hidden w-[44%] bg-paper lg:block" />
          <div
            aria-hidden
            className="absolute inset-0 bg-[linear-gradient(rgba(22,135,201,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(22,135,201,0.05)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:linear-gradient(180deg,#000,transparent_75%)]"
          />

          <div className="section-shell relative grid items-center gap-12 pb-28 pt-12 md:pb-36 md:pt-16 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)] lg:gap-10 lg:pb-40 lg:pt-20">
            <div className="max-w-2xl">
              <p className="eyebrow animate-fade-up" style={heroDelay(0)}>
                Dimension Financial Solutions Private Limited
              </p>

              <p
                className="mt-6 inline-flex max-w-full items-center gap-2.5 rounded-full border border-line bg-navy-50 px-4 py-2 font-display text-[0.72rem] font-bold uppercase leading-tight tracking-[0.12em] text-navy animate-fade-up sm:text-xs"
                style={heroDelay(80)}
              >
                <span aria-hidden className="relative flex h-2 w-2 shrink-0">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent/50" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
                </span>
                SEBI Registered - Merchant Banker &amp; Stock Broker
              </p>

              <h1
                className="mt-6 font-display text-[2.6rem] font-extrabold leading-[1.05] tracking-[-0.035em] text-navy animate-fade-up text-balance sm:text-[3.25rem] lg:text-[3.6rem] xl:text-[4.25rem]"
                style={heroDelay(160)}
              >
                <span className="text-accent">Merchant Banking</span> Services &amp;{' '}
                <span className="text-accent">Debt Securities</span> Market
              </h1>

              <p className="mt-6 max-w-xl text-base leading-[1.75] text-muted animate-fade-up md:text-lg" style={heroDelay(240)}>
                Delivering comprehensive financial advisory, merchant banking and debt securities services. We provide
                focused and customized solutions in the areas of Investment Banking and Debt advisory.
              </p>

              <div className="mt-9 flex flex-wrap gap-3 animate-fade-up" style={heroDelay(320)}>
                <Link href="/contact" className="btn-accent !px-7 !py-3.5">
                  Start a Conversation
                  <ArrowRight aria-hidden size={16} />
                </Link>
                <Link href="/about-us" className="btn-secondary !px-7 !py-3.5">
                  Explore the Firm
                </Link>
              </div>

              {/* Core focus on the Dimension Line */}
              <div className="mt-12 max-w-lg animate-fade-up" style={heroDelay(420)}>
                <div className="dimension-line">
                  <span className="dimension-node" />
                  <span className="dimension-node" />
                  <span className="dimension-node" />
                </div>
                <div className="mt-3 flex justify-between gap-3 font-display text-[0.72rem] font-bold uppercase tracking-[0.14em] text-navy sm:text-xs">
                  <span>Merchant Banking</span>
                  <span className="text-center">Debt Securities</span>
                  <span className="text-right">Stock Broking</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <HeroVisual />
            </div>
          </div>
        </section>

        {/* ── 2. Credentials (overlapping the hero) ──────────────────────── */}
        <section aria-label="Credentials" className="relative z-10 -mt-20 md:-mt-24">
          <div className="section-shell">
            <div className="card relative overflow-hidden">
              <div aria-hidden className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-aqua via-accent to-navy" />
              <dl className="grid sm:grid-cols-2 lg:grid-cols-4">
                {credentials.map((item, i) => {
                  const Icon = credentialIcons[i];
                  return (
                    <div
                      key={item.label}
                      data-reveal
                      style={delay(i * 90)}
                      className={`flex gap-4 border-line p-6 md:p-7 ${credentialBorders[i]}`}
                    >
                      <span className="icon-tile !h-11 !w-11 bg-navy-50">
                        <Icon aria-hidden size={20} strokeWidth={1.75} />
                      </span>
                      <div className="min-w-0">
                        <dt className="font-display text-[0.7rem] font-bold uppercase tracking-[0.16em] text-muted">
                          {item.label}
                        </dt>
                        <dd className="mt-1.5 font-display text-lg font-bold leading-snug text-navy md:text-xl">{item.value}</dd>
                        {item.detail ? (
                          <dd className="mt-1 font-display text-xs font-bold uppercase tracking-[0.1em] text-aqua-700">
                            {item.detail}
                          </dd>
                        ) : null}
                      </div>
                    </div>
                  );
                })}
              </dl>
            </div>
          </div>
        </section>

        {/* ── 3. About Us — Why Choose Us ───────────────────────────────── */}
        <section className="section border-t border-line">
          <div className="section-shell grid gap-12 lg:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] lg:gap-20">
            <div data-reveal className="lg:sticky lg:top-32 lg:self-start">
              <p className="eyebrow">About Us</p>
              <h2 className="heading-lg mt-5 md:text-5xl">Why Choose Us?</h2>
              <div className="dimension-line mt-8 max-w-[10rem]">
                <span className="dimension-node" />
                <span className="dimension-node" />
                <span className="dimension-node" />
              </div>
            </div>

            <ul data-reveal className="card divide-y divide-line px-6 md:px-8">
              {whyChooseUs.map((point, i) => (
                <li key={point} className="group flex items-start gap-5 py-6 md:gap-6">
                  <span className="font-display text-2xl font-extrabold tabular-nums text-navy/20 transition-colors duration-300 group-hover:text-accent">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <span className="pt-0.5 font-display text-base font-semibold leading-relaxed text-navy md:text-lg">
                    {point}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* ── 4. Introduction — Who We Are ───────────────────────────────── */}
        <section className="section">
          <div className="section-shell grid gap-12 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:gap-20">
            <div data-reveal className="relative">
              <p className="eyebrow">Who We Are</p>
              <h2 className="heading-lg mt-6 text-balance md:text-[2.75rem]">
                Dimension Financial Solutions is a SEBI Registered partner delivering merchant banking, debt securities,
                and institutional financial advisory services.
              </h2>
              <DimensionMark variant="outline" className="mt-10 hidden h-28 w-28 text-accent/30 lg:block" />
            </div>

            <div data-reveal style={delay(120)} className="relative border-l-2 border-accent/70 pl-6 md:pl-10">
              <span aria-hidden className="absolute -left-[7px] top-0 h-3 w-3 rounded-full border-2 border-accent bg-white" />
              <span aria-hidden className="absolute -left-[7px] bottom-0 h-3 w-3 rounded-full border-2 border-accent bg-white" />
              <div className="space-y-5 text-base leading-[1.8] text-ink md:text-[1.075rem]">
                <p>
                  Dimension Financial Solutions Private Limited was formed to deliver a comprehensive range of financial
                  services with strong governance and market discipline.
                </p>
                <p>
                  We are a SEBI-registered Merchant Banker actively engaged in capital issue management, managing open
                  offers, and providing advisory services for mergers and acquisitions (M&amp;A), Employee Stock Ownership
                  Plans (ESOPs), and comprehensive financial advisory solutions.
                </p>
                <p>
                  We are also a SEBI-registered stock broker and BSE trading member on the debt segment, with active
                  capability as an Online Bond Platform Provider (OBPP).
                </p>
              </div>
              <Link
                href="/about-us"
                className="group mt-8 inline-flex min-h-[44px] items-center gap-2 font-display text-sm font-bold text-accent"
              >
                About Dimension
                <ArrowRight aria-hidden size={16} className="transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </section>

        {/* ── 5. Process — the signature Dimension Line ──────────────────── */}
        <section className="section relative overflow-hidden">
          <div className="section-shell">
            <div data-reveal className="mx-auto max-w-2xl text-center">
              <p className="eyebrow justify-center">Execution Model</p>
              <h2 className="heading-lg mt-5">Our Engagement Process</h2>
            </div>

            <ol className="relative mt-16 grid gap-10 md:grid-cols-4 md:gap-6">
              {/* Connecting line — horizontal on desktop, vertical on mobile */}
              <span
                aria-hidden
                data-reveal="line"
                className="absolute left-[12.5%] right-[12.5%] top-8 hidden h-[2px] bg-gradient-to-r from-aqua via-accent to-navy md:block"
              />
              <span
                aria-hidden
                data-reveal="line-y"
                className="absolute bottom-8 left-8 top-8 w-[2px] bg-gradient-to-b from-aqua via-accent to-navy md:hidden"
              />

              {engagementProcess.map((item, i) => {
                const Icon = processIcons[i];
                return (
                  <li
                    key={item.step}
                    data-reveal
                    style={delay(200 + i * 140)}
                    className="relative flex gap-6 md:flex-col md:items-center md:gap-0 md:text-center"
                  >
                    <span className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full border-2 border-accent bg-white text-accent shadow-[0_0_0_8px_#F5F9FC]">
                      <Icon aria-hidden size={24} strokeWidth={1.75} />
                      <span className="absolute -right-1 -top-1 flex h-6 w-6 items-center justify-center rounded-full bg-navy font-display text-[0.65rem] font-bold text-white">
                        {item.step}
                      </span>
                    </span>
                    <div className="pt-2 md:mt-6 md:max-w-[15rem] md:pt-0">
                      <p className="font-display text-[0.7rem] font-bold uppercase tracking-[0.18em] text-aqua-700">
                        Step {item.step}
                      </p>
                      <h3 className="mt-1.5 font-display text-xl font-bold text-navy">{item.title}</h3>
                      <p className="mt-2 text-[0.95rem] leading-relaxed text-muted">{item.text}</p>
                    </div>
                  </li>
                );
              })}
            </ol>
          </div>
        </section>

        {/* ── 6. What We Do ─────────────────────────────────────────────── */}
        <section className="section bg-white">
          <div className="section-shell grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <div data-reveal className="relative mx-auto w-full max-w-md lg:max-w-none">
              {/* D watermark */}
              <DimensionMark
                variant="outline"
                className="pointer-events-none absolute -left-10 -top-10 h-[115%] w-[115%] text-accent/15"
              />
              <div className="relative overflow-hidden rounded-[20px] shadow-lift">
                <Image
                  src="/images/dfs-images-1.png"
                  alt="Dimension Financial team at work"
                  width={1333}
                  height={2000}
                  sizes="(min-width: 1024px) 40vw, 90vw"
                  className="aspect-[4/5] w-full object-cover"
                />
                <div aria-hidden className="absolute inset-0 bg-gradient-to-t from-navy/50 via-transparent to-transparent" />
              </div>
              <div className="absolute -bottom-6 right-4 flex items-center gap-3 rounded-[14px] border border-line bg-white px-5 py-4 shadow-lift sm:right-[-1.5rem]">
                <DimensionMark className="h-10 w-10" />
                <div className="leading-tight">
                  <p className="font-display text-[0.7rem] font-bold uppercase tracking-[0.16em] text-muted">Established</p>
                  <p className="font-display text-xl font-extrabold text-navy">2009</p>
                </div>
              </div>
            </div>

            <div data-reveal style={delay(120)}>
              <p className="eyebrow">What We Do</p>
              <h2 className="heading-lg mt-5 text-balance">
                Comprehensive financial advisory and capital market services.
              </h2>
              <div className="mt-6 space-y-4 body-copy">
                <p>
                  We deliver comprehensive financial advisory and capital market services as a SEBI-registered Merchant
                  Banker and debt market Stock Broker.
                </p>
                <p>
                  Our tailored solutions help corporates, institutions, provident fund trusts, emerging enterprises, and
                  retail investors achieve sustainable growth, operational efficiency, and capital optimization.
                </p>
                <p>
                  With deep regulatory expertise and a client-centric culture, we build enduring relationships while
                  enabling access to capital markets and investment opportunities.
                </p>
                <p className="border-l-2 border-accent pl-4 font-medium text-navy">
                  Our approach combines market knowledge, risk awareness, and compliance-led execution to support
                  long-term financial success.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/about-us" className="btn-primary">
                  Explore the Firm
                  <ArrowRight aria-hidden size={16} />
                </Link>
                <Link href="/services" className="btn-secondary">
                  Our Services
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ── 7. Mission & Vision ────────────────────────────────────────── */}
        <section className="band-navy">
          <div className="section-shell grid gap-12 py-20 md:py-28 lg:grid-cols-2 lg:gap-20">
            <div data-reveal>
              <p className="eyebrow eyebrow-light">Our Mission &amp; Vision</p>
              <h2 className="heading-lg mt-5 text-balance">
                A clear purpose built on integrity, compliance, and long-term client trust.
              </h2>
              <p className="mt-5 text-base leading-[1.75] text-slate-300 md:text-lg">
                DFS is committed to client-centric financial services shaped by professional excellence, ethical conduct,
                and disciplined market execution.
              </p>
            </div>

            <ol className="grid gap-4 sm:grid-cols-2">
              {missionPoints.map((point, i) => (
                <li
                  key={point}
                  data-reveal
                  style={delay(i * 90)}
                  className="rounded-[16px] border border-white/10 bg-white/[0.04] p-6 transition-colors hover:border-aqua/50 hover:bg-white/[0.07]"
                >
                  <span className="flex h-9 w-9 items-center justify-center rounded-full border border-aqua/60 font-display text-xs font-bold text-aqua">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <p className="mt-4 text-[0.975rem] leading-relaxed text-slate-200">{point}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* ── 8. Clients ─────────────────────────────────────────────────── */}
        <ClientsShowcase />

        {/* ── 9. Investor resources ─────────────────────────────────────── */}
        <section className="section border-t border-line bg-white">
          <div className="section-shell">
            <div className="grid gap-6 lg:grid-cols-2 lg:items-end">
              <div data-reveal>
                <p className="eyebrow">Investor Corner</p>
                <h2 className="heading-lg mt-5">Policies &amp; Investor Information</h2>
              </div>
              <p data-reveal style={delay(100)} className="lede lg:justify-self-end">
                Reach our team for investor policies, service details, and debt market guidance.
              </p>
            </div>

            <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {resources.map(({ href, label, icon: Icon, external }, i) => {
                const inner = (
                  <>
                    <span className="icon-tile group-hover:bg-navy-50">
                      <Icon aria-hidden size={22} strokeWidth={1.75} />
                    </span>
                    <span className="mt-6 flex items-end justify-between gap-3">
                      <span className="font-display text-base font-bold leading-snug text-navy">{label}</span>
                      <ArrowUpRight
                        aria-hidden
                        size={18}
                        className="shrink-0 text-muted transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent"
                      />
                    </span>
                    <span className="mt-1 text-xs font-semibold uppercase tracking-[0.12em] text-muted">
                      {external ? 'PDF document' : 'View page'}
                    </span>
                  </>
                );
                const cls = 'group card card-hover flex h-full flex-col p-6';
                return (
                  <li key={href} data-reveal style={delay(i * 80)}>
                    {external ? (
                      <a href={href} target="_blank" rel="noreferrer" className={cls}>
                        {inner}
                      </a>
                    ) : (
                      <Link href={href} className={cls}>
                        {inner}
                      </Link>
                    )}
                  </li>
                );
              })}
            </ul>
          </div>
        </section>

        <ScrollReveal />
      </main>
      <SiteFooter />
    </>
  );
}
