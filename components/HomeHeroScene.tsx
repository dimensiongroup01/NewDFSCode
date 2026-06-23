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

        // Reset trend paths stroke-dashoffset for animation trigger
        const trendPaths = root.querySelectorAll('.hero-svg-trend-path, .hero-svg-trend-glow');
        trendPaths.forEach((path) => {
          if (path instanceof SVGPathElement) {
            const length = path.getTotalLength() || 800;
            path.style.strokeDasharray = `${length}`;
            path.style.strokeDashoffset = `${length}`;
          }
        });

        // 1. Fade/Slide in the copy elements on the left
        gsap.from('.hero-copy > *', {
          opacity: 0,
          y: 25,
          stagger: 0.12,
          duration: 1,
          ease: 'power3.out',
        });

        // 2. Animate Grid lines drawing in
        gsap.fromTo(
          '.hero-svg-grid-line',
          { opacity: 0 },
          {
            opacity: 0.25,
            stagger: 0.02,
            duration: 0.8,
            ease: 'power1.out',
            delay: 0.2,
          }
        );

        // 3. Draw the Growth Trendline paths
        gsap.to('.hero-svg-trend-path, .hero-svg-trend-glow', {
          strokeDashoffset: 0,
          duration: 1.8,
          ease: 'power2.inOut',
          delay: 0.4,
        });

        // 4. Pop the nodes in on path nodes
        gsap.from('.hero-svg-node', {
          scale: 0,
          transformOrigin: 'center',
          stagger: 0.1,
          duration: 0.8,
          ease: 'back.out(1.7)',
          delay: 1.0,
        });

        // 5. Fade and lift the card overlays
        gsap.from('.hero-svg-card', {
          opacity: 0,
          scale: 0.92,
          y: 20,
          stagger: 0.15,
          duration: 1.2,
          ease: 'power3.out',
          delay: 1.2,
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
      <div className="absolute left-[-10%] top-[-10%] h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(0,180,216,0.14),rgba(0,180,216,0))] blur-3xl pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(rgba(0,180,216,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,105,0,0.025)_1px,transparent_1px)] bg-[size:44px_44px] pointer-events-none" />

      <div className="section-shell relative z-10 grid min-h-[calc(100svh-5rem)] items-center gap-12 py-12 sm:py-16 md:py-20 lg:grid-cols-12 lg:gap-8 xl:gap-12 lg:py-20">

        {/* LEFT SIDE CONTENT - Spans 7 columns on large screens */}
        <div className="hero-copy lg:col-span-7 w-full space-y-6 sm:space-y-8 self-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-primary-dark/95 sm:text-sm">
            Dimension Financial Solutions Private Limited
          </p>

          <div className="inline-block max-w-full">
            <h1 className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-[10px] font-bold uppercase leading-tight tracking-[0.12em] text-primary-dark shadow-[0_4px_12px_rgba(0,180,216,0.06)] sm:px-5 sm:py-2.5 sm:text-xs md:text-sm">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              SEBI Registered - Merchant Banker & Stock Broker
            </h1>
          </div>

          <h2 className="font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl md:text-5xl lg:text-[3.25rem] lg:leading-[1.12] xl:text-[4.25rem] xl:leading-[1.08] max-w-[20ch]">
            Merchant Banking Services & Debt Securities Market
          </h2>

          <p className="max-w-2xl text-base text-slate-600 sm:text-lg md:text-xl leading-relaxed">
            Delivering comprehensive financial advisory, merchant banking and debt securities services.
            We provide focused and customized solutions in the areas of Investment Banking and Debt advisory.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 pt-2">
            <Link
              href="/contact"
              className="btn-primary rounded-full px-6 py-3 sm:px-8 sm:py-3.5 text-sm sm:text-base font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-primary/20"
            >
              Start a Conversation
            </Link>

            <Link
              href="/about-us"
              className="rounded-full border border-border bg-white px-6 py-3 sm:px-8 sm:py-3.5 text-sm sm:text-base font-semibold text-text transition-all duration-300 hover:-translate-y-0.5 hover:bg-slate-50 hover:border-slate-300 shadow-sm"
            >
              Explore the Firm
            </Link>
          </div>
        </div>

        {/* RIGHT SIDE GRAPHIC - Spans 5 columns on large screens */}
        <div className="lg:col-span-5 w-full flex items-center justify-center self-center lg:justify-end">
          
          <div className="relative w-full max-w-[32rem] aspect-square flex items-center justify-center p-2">
            
            {/* SVG Graphic */}
            <svg
              viewBox="0 0 500 500"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-auto drop-shadow-[0_20px_50px_rgba(0,180,216,0.12)] relative z-10"
            >
              <style dangerouslySetInnerHTML={{ __html: `
                @keyframes svg-float-1 {
                  0%, 100% { transform: translateY(0px) rotate(0deg); }
                  50% { transform: translateY(-8px) rotate(0.5deg); }
                }
                @keyframes svg-float-2 {
                  0%, 100% { transform: translateY(0px) rotate(0deg); }
                  50% { transform: translateY(8px) rotate(-0.5deg); }
                }
                @keyframes svg-pulse-slow {
                  0%, 100% { opacity: 0.15; transform: scale(0.97); }
                  50% { opacity: 0.35; transform: scale(1.03); }
                }
                .svg-float-p1 {
                  animation: svg-float-1 5.5s ease-in-out infinite;
                  transform-origin: center;
                }
                .svg-float-p2 {
                  animation: svg-float-2 6.5s ease-in-out infinite;
                  transform-origin: center;
                }
                .svg-float-p3 {
                  animation: svg-float-1 7.5s ease-in-out infinite;
                  transform-origin: center;
                }
                .svg-pulse-bg {
                  animation: svg-pulse-slow 4.5s ease-in-out infinite;
                  transform-origin: center;
                }
              `}} />

              <defs>
                {/* Glow Radial Gradient */}
                <radialGradient id="svg-glow-grad" cx="50%" cy="50%" r="50%">
                  <stop offset="0%" stopColor="#00B4D8" stopOpacity="0.25" />
                  <stop offset="100%" stopColor="#00B4D8" stopOpacity="0" />
                </radialGradient>

                {/* Trendline Linear Gradient */}
                <linearGradient id="svg-trend-grad" x1="0%" y1="100%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#00B4D8" />
                  <stop offset="60%" stopColor="#007A96" />
                  <stop offset="100%" stopColor="#FF6900" />
                </linearGradient>

                {/* Soft Panel Shadows */}
                <filter id="panel-shadow" x="-20%" y="-20%" width="145%" height="145%">
                  <feDropShadow dx="0" dy="6" stdDeviation="6" floodColor="#0F172A" floodOpacity="0.06" />
                  <feDropShadow dx="0" dy="1.5" stdDeviation="2" floodColor="#0F172A" floodOpacity="0.03" />
                </filter>
              </defs>

              {/* Grid Background Lines (horizontal & vertical) */}
              <g opacity="0.2">
                {[50, 100, 150, 200, 250, 300, 350, 400, 450].map((coord, i) => (
                  <g key={`grid-${i}`}>
                    {/* Vertical line */}
                    <line
                      x1={coord}
                      y1="20"
                      x2={coord}
                      y2="480"
                      stroke="#E2E8F0"
                      strokeWidth="1"
                      strokeDasharray="4 4"
                      className="hero-svg-grid-line"
                    />
                    {/* Horizontal line */}
                    <line
                      x1="20"
                      y1={coord}
                      x2="480"
                      y2={coord}
                      stroke="#E2E8F0"
                      strokeWidth="1"
                      strokeDasharray="4 4"
                      className="hero-svg-grid-line"
                    />
                  </g>
                ))}
              </g>

              {/* Slow Spinning Concentric Dashed Rings */}
              <circle
                cx="250"
                cy="250"
                r="135"
                fill="none"
                stroke="#00B4D8"
                strokeWidth="1.2"
                strokeDasharray="6 8"
                className="opacity-25 origin-center animate-[spin_80s_linear_infinite]"
                style={{ transformOrigin: '250px 250px' }}
              />
              <circle
                cx="250"
                cy="250"
                r="185"
                fill="none"
                stroke="#FF6900"
                strokeWidth="1"
                strokeDasharray="10 14"
                className="opacity-20 origin-center animate-[spin_120s_linear_infinite_reverse]"
                style={{ transformOrigin: '250px 250px' }}
              />

              {/* Ambient Center Glow */}
              <circle
                cx="250"
                cy="250"
                r="170"
                fill="url(#svg-glow-grad)"
                className="svg-pulse-bg"
                style={{ transformOrigin: '250px 250px' }}
              />

              {/* Thin Connection Lines Between Floating Panels and Curve Nodes */}
              <line x1="120" y1="140" x2="170" y2="300" stroke="#00B4D8" strokeWidth="1" strokeDasharray="3 3" opacity="0.3" />
              <line x1="365" y1="310" x2="380" y2="180" stroke="#FF6900" strokeWidth="1" strokeDasharray="3 3" opacity="0.3" />

              {/* Growth Trendline (Paths) */}
              {/* Glow Path */}
              <path
                d="M 50 400 Q 120 370 170 300 T 280 240 T 380 180 T 450 120"
                fill="none"
                stroke="#00B4D8"
                strokeWidth="7"
                strokeLinecap="round"
                opacity="0.12"
                className="hero-svg-trend-glow"
              />
              {/* Sharp Foreground Path */}
              <path
                d="M 50 400 Q 120 370 170 300 T 280 240 T 380 180 T 450 120"
                fill="none"
                stroke="url(#svg-trend-grad)"
                strokeWidth="3.5"
                strokeLinecap="round"
                className="hero-svg-trend-path"
              />

              {/* Curve Intersections / Glowing Nodes */}
              {[
                { cx: 50, cy: 400, color: '#007A96' },
                { cx: 170, cy: 300, color: '#00B4D8' },
                { cx: 280, cy: 240, color: '#007A96' },
                { cx: 380, cy: 180, color: '#FF6900' },
                { cx: 450, cy: 120, color: '#FF6900', isAccent: true }
              ].map((node, i) => (
                <g key={`node-${i}`} className="hero-svg-node" style={{ transformOrigin: `${node.cx}px ${node.cy}px` }}>
                  {/* Ping effect circle */}
                  <circle
                    cx={node.cx}
                    cy={node.cy}
                    r="9"
                    fill="none"
                    stroke={node.isAccent ? '#FF6900' : '#00B4D8'}
                    strokeWidth="1.5"
                    className="animate-ping opacity-60"
                    style={{ animationDuration: node.isAccent ? '2.5s' : '3.5s', transformOrigin: `${node.cx}px ${node.cy}px` }}
                  />
                  {/* Outer hover halo */}
                  <circle
                    cx={node.cx}
                    cy={node.cy}
                    r="7"
                    fill={node.isAccent ? '#FF6900' : '#00B4D8'}
                    fillOpacity="0.2"
                  />
                  {/* Solid dot */}
                  <circle
                    cx={node.cx}
                    cy={node.cy}
                    r="4"
                    fill={node.color}
                    stroke="#ffffff"
                    strokeWidth="1.5"
                  />
                </g>
              ))}

              {/* FLOATING PANELS */}
              
              {/* Panel 1: Merchant Banking (Left Side Floating) */}
              <g className="hero-svg-card svg-float-p1" style={{ transformOrigin: '120px 120px' }}>
                <rect x="40" y="90" width="160" height="56" rx="12" fill="#ffffff" fillOpacity="0.9" stroke="#E2E8F0" strokeWidth="1" filter="url(#panel-shadow)" />
                
                {/* Icon Circle */}
                <circle cx="62" cy="118" r="9" fill="#10B981" fillOpacity="0.1" />
                <path d="M 59.5 118.5 L 61 120 L 65 116" stroke="#10B981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                
                {/* Text */}
                <text x="80" y="115" fill="#0F172A" fontSize="10.5" fontWeight="700" fontFamily="sans-serif">Merchant Banking</text>
                <text x="80" y="128" fill="#64748B" fontSize="8.5" fontWeight="600" fontFamily="sans-serif">SEBI Reg. Since 2025</text>
              </g>

              {/* Panel 2: Debt Syndication (Right Bottom Floating) */}
              <g className="hero-svg-card svg-float-p2" style={{ transformOrigin: '365px 340px' }}>
                <rect x="280" y="310" width="170" height="56" rx="12" fill="#ffffff" fillOpacity="0.9" stroke="#E2E8F0" strokeWidth="1" filter="url(#panel-shadow)" />
                
                {/* Icon Circle */}
                <circle cx="304" cy="338" r="9" fill="#00B4D8" fillOpacity="0.1" />
                <path d="M 301 341 L 301 337 M 304 341 L 304 333 M 307 341 L 307 335" stroke="#00B4D8" strokeWidth="1.5" strokeLinecap="round" fill="none" />
                
                {/* Text */}
                <text x="322" y="334" fill="#0F172A" fontSize="10.5" fontWeight="700" fontFamily="sans-serif">Debt Syndication</text>
                <text x="322" y="347" fill="#FF6900" fontSize="9.5" fontWeight="800" fontFamily="sans-serif">INR 1000 Cr+ AUM</text>
              </g>

              {/* Panel 3: Stock Broking / BSE (Right Top Floating - Dark theme) */}
              <g className="hero-svg-card svg-float-p3" style={{ transformOrigin: '350px 80px' }}>
                <rect x="265" y="50" width="175" height="56" rx="12" fill="#0A355D" fillOpacity="0.96" stroke="#1E293B" strokeWidth="1" filter="url(#panel-shadow)" />
                
                {/* Icon Circle */}
                <circle cx="289" cy="78" r="9" fill="#38BDF8" fillOpacity="0.15" />
                <path d="M 286 75.5 L 289 73.5 L 292 75.5 L 292 78 C 292 80.5 289 82.5 289 82.5 C 289 82.5 286 80.5 286 78 Z" stroke="#38BDF8" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                
                {/* Text */}
                <text x="306" y="74" fill="#ffffff" fontSize="10.5" fontWeight="700" fontFamily="sans-serif">BSE Trading Member</text>
                <text x="306" y="87" fill="#38BDF8" fontSize="8.5" fontWeight="600" fontFamily="sans-serif">Debt Segment & OBPP</text>
              </g>
            </svg>

            {/* Glowing Accent Underlay behind the SVG to give it an immersive dimensional glow */}
            <div className="absolute inset-10 rounded-full bg-[radial-gradient(circle,rgba(0,180,216,0.12),rgba(255,105,0,0.06))] blur-3xl z-0 pointer-events-none" />
          </div>
        </div>

      </div>
    </section>
  );
}


