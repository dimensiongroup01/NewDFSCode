'use client';

import { useEffect, useRef } from 'react';
import Link from 'next/link';

export default function HomeHeroScene() {
  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return;

    let active = true;

    (async () => {
      const gsapModule = await import('gsap');
      const gsap = gsapModule.default;

      if (!active) return;

      gsap.from('.hero-copy > *', {
        opacity: 0,
        y: 30,
        stagger: 0.12,
        duration: 1,
        ease: 'power3.out',
      });

      gsap.from('.hero-image-card', {
        opacity: 0,
        y: 40,
        stagger: 0.15,
        duration: 1,
        ease: 'power3.out',
      });

      gsap.to('.floating-card', {
        y: -10,
        repeat: -1,
        yoyo: true,
        duration: 2.5,
        ease: 'power1.inOut',
      });
    })();

    return () => {
      active = false;
    };
  }, []);

  return (
    <section
      ref={rootRef}
      className="relative overflow-hidden border-b border-border bg-surface/95"
    >
      {/* Background Glow */}
      <div className="absolute left-[-10%] top-[-10%] h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(0,180,216,0.18),rgba(0,180,216,0))] blur-3xl" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,180,216,0.045)_1px,transparent_1px),linear-gradient(90deg,rgba(255,105,0,0.035)_1px,transparent_1px)] bg-[size:44px_44px]" />

      <div className="section-shell relative z-10 grid items-center gap-8 py-10 md:py-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(400px,1.08fr)] lg:gap-10 lg:py-14">
        
        {/* LEFT SIDE CONTENT */}
        <div className="hero-copy max-w-[34rem] self-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.34em] text-primary-dark">
            Dimension Financial Solutions
          </p>

          <div className="mt-4 inline-flex items-center rounded-full border border-primary/20 bg-white px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.24em] text-primary-dark shadow-[0_10px_24px_rgba(0,180,216,0.14)]">
            SEBI Registered Partners
          </div>

          <h1 className="mt-5 max-w-[14ch] font-display text-4xl font-semibold leading-[1.05] text-text sm:text-5xl lg:text-[3.25rem]">
            Merchant Banking & Debt Market Solutions
          </h1>

          <p className="mt-5 max-w-[33rem] text-sm leading-6 text-slate-700 sm:text-[0.92rem]">
            Delivering merchant banking, debt securities,
            and institutional financial advisory services
            with compliance excellence, strategic execution,
            and a stronger financial identity.
          </p>

          {/* Buttons */}
          <div className="mt-7 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="btn-primary rounded-full px-6 py-2.5 text-sm"
            >
              Start a Conversation
            </Link>

            <Link
              href="/about-us"
              className="rounded-full border border-border bg-white px-6 py-2.5 text-sm font-semibold text-text transition duration-300 hover:-translate-y-1 hover:bg-primary/10"
            >
              Explore the Firm
            </Link>
          </div>
        </div>

        {/* RIGHT SIDE IMAGES */}
        <div className="relative flex items-center justify-center self-center lg:justify-end">
          
          {/* Image Grid */}
          <div className="grid w-full max-w-[600px] grid-cols-2 gap-4">
            
            {/* Large Image */}
            <div className="hero-image-card col-span-2 overflow-hidden rounded-[2rem] border border-[#E2E8F0] bg-white shadow-[0_25px_60px_rgba(20,30,51,0.12)]">
              <img
                src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop"
                alt="Financial Services"
                className="h-[250px] w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>

            {/* Bottom Left */}
            <div className="hero-image-card overflow-hidden rounded-[1.8rem] border border-[#E2E8F0] bg-white shadow-[0_20px_50px_rgba(20,30,51,0.1)]">
              <img
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200&auto=format&fit=crop"
                alt="Merchant Banking"
                className="h-[180px] w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>

            {/* Bottom Right */}
            <div className="hero-image-card overflow-hidden rounded-[1.8rem] border border-[#E2E8F0] bg-white shadow-[0_20px_50px_rgba(20,30,51,0.1)]">
              <img
                src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1200&auto=format&fit=crop"
                alt="Debt Advisory"
                className="h-[180px] w-full object-cover transition duration-700 hover:scale-105"
              />
            </div>
          </div>

          {/* Floating Glass Card */}
          <div className="floating-card absolute bottom-[-12px] left-[-12px] max-w-[240px] rounded-[1.4rem] border border-border bg-white/90 p-4 backdrop-blur-xl shadow-[0_25px_60px_rgba(16,40,74,0.18)]">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-primary-dark">
              Trusted Financial Partner
            </p>

            <h3 className="mt-3 text-xl font-semibold text-text">
              Debt Market Expertise
            </h3>

            <p className="mt-3 text-xs leading-6 text-slate-700">
              Institutional-grade merchant banking and debt
              securities solutions tailored for modern
              financial markets.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

