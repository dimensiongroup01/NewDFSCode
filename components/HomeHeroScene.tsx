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
      try {
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
      } catch {
        // Animation loading can fail during dev refresh; content should still render.
      }
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

      <div className="section-shell relative z-10 grid min-h-[calc(100svh-5rem)] items-center gap-10 py-16 md:py-20 lg:grid-cols-[minmax(0,7fr)_minmax(320px,3fr)] lg:gap-12 lg:py-20">
        
        {/* LEFT SIDE CONTENT */}
        <div className="hero-copy w-full max-w-[72rem] self-center space-y-8">
          <p className="max-w-[56rem] text-base font-semibold uppercase tracking-[0.32em] text-primary-dark sm:text-lg">
            Dimension Financial Solutions Private Limited 
          </p>

          <h1 className="inline-block max-w-none whitespace-nowrap rounded-full border border-primary/25 bg-white px-4 py-3 text-xs font-bold uppercase leading-tight tracking-[0.12em] text-primary-dark shadow-[0_16px_34px_rgba(0,180,216,0.18)] sm:px-6 sm:py-4 sm:text-base md:text-lg lg:text-xl xl:text-2xl">
            SEBI Registered - Merchant Banker & Stock Broker
          </h1>

          <h2 className="max-w-[18ch] font-display text-5xl font-semibold leading-[1.02] text-text sm:text-6xl md:text-7xl lg:text-[5.8rem] xl:text-[6.5rem]">
            Merchant Banking & Debt Market Solutions
          </h2>

          <p className="max-w-[56rem] text-xl leading-9 text-slate-700 sm:text-2xl sm:leading-10">
            Delivering comprehensive financial advisory, merchant banking and debt securities services.
            We provide focused and customized solutions in the areas of Investment Banking and Debt advisory.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="btn-primary rounded-full px-8 py-3.5 text-base"
            >
              Start a Conversation
            </Link>

            <Link
              href="/about-us"
              className="rounded-full border border-border bg-white px-8 py-3.5 text-base font-semibold text-text transition duration-300 hover:-translate-y-1 hover:bg-primary/10"
            >
              Explore the Firm
            </Link>
          </div>
        </div>

        {/* RIGHT SIDE IMAGES */}
        <div className="relative flex w-full items-center justify-center self-center lg:justify-end">
          
          {/* Image Grid */}
          <div className="grid w-full max-w-[36rem] grid-cols-2 gap-4">
            
            {/* Large Image */}
            <div className="hero-image-card col-span-2 overflow-hidden rounded-[2rem] border border-[#E2E8F0] bg-white shadow-[0_25px_60px_rgba(20,30,51,0.12)]">
              <img
                src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&w=1600&auto=format&fit=crop"
                alt="Financial Services"
                className="h-[240px] w-full object-cover transition duration-700 hover:scale-105 lg:h-[260px]"
              />
            </div>

            {/* Bottom Left */}
            <div className="hero-image-card overflow-hidden rounded-[1.8rem] border border-[#E2E8F0] bg-white shadow-[0_20px_50px_rgba(20,30,51,0.1)]">
              <img
                src="https://images.unsplash.com/photo-1554224155-6726b3ff858f?q=80&w=1200&auto=format&fit=crop"
                alt="Merchant Banking"
                className="h-[170px] w-full object-cover transition duration-700 hover:scale-105 lg:h-[190px]"
              />
            </div>

            {/* Bottom Right */}
            <div className="hero-image-card overflow-hidden rounded-[1.8rem] border border-[#E2E8F0] bg-white shadow-[0_20px_50px_rgba(20,30,51,0.1)]">
              <img
                src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1200&auto=format&fit=crop"
                alt="Debt Advisory"
                className="h-[170px] w-full object-cover transition duration-700 hover:scale-105 lg:h-[190px]"
              />
            </div>
          </div>

          
        </div>
      </div>
    </section>
  );
}

