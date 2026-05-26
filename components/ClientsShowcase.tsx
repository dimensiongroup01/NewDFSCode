'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

const clients = [
  {
    short: 'Indian Oil',
    name: 'Indian Oil Corporation Limited',
    imageSrcs: [
      '/images/Indian%20Oil.png',
    ],
    initials: 'IOC',
    accent: 'from-blue-50 to-blue-50',
    color: '#e87722',
    description: 'Representative client relationship from DFS institutional and debt market execution experience.'
  },
  {
    short: 'NCDC',
    name: 'National Cooperative Development Corporation',
    imageSrcs: [
      '/images/NCDC.png',
    ],
    initials: 'NCDC',
    accent: 'from-blue-50 to-white',
    color: '#1a7a4a',
    description: 'Illustrative of the institution-focused approach DFS follows across advisory and debt securities work.'
  },
  {
    short: 'NHPC',
    name: 'NHPC Limited',
    imageSrcs: [
      '/images/NHPC.png',
    ],
    initials: 'NHPC',
    accent: 'from-blue-50 to-blue-50',
    color: '#005baa',
    description: 'Part of the broader client network served through compliant, process-led market support.'
  },
  {
    short: 'KRIBHCO',
    name: 'Krishak Bharati Cooperative Limited',
    imageSrcs: [
      '/images/KRIBHCO.jpg',
    ],
    initials: 'KRIBHCO',
    accent: 'from-blue-50 to-blue-50',
    color: '#2d6a2d',
    description: 'Reflects DFS experience supporting organizations with disciplined financial market execution.'
  },
  {
    short: 'CCI',
    name: 'Cement Corporation of India Limited',
    imageSrcs: [
      '/images/CCI.jpg',
    ],
    initials: 'CCI',
    accent: 'from-blue-50 to-blue-50',
    color: '#c0392b',
    description: 'Shows the breadth of DFS relationships across corporates, institutions, and debt market participants.'
  }
];

// â”€â”€ ClientLogo â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€â”€
// Tries each src in order. If all fail, renders a styled initials fallback.
function ClientLogo({ srcs, name, initials, color }: {
  srcs: string[];
  name: string;
  initials: string;
  color: string;
}) {
  const [srcIndex, setSrcIndex] = useState(0);
  const [failed, setFailed] = useState(false);

  // Reset when the client changes (srcs array reference changes)
  useEffect(() => {
    setSrcIndex(0);
    setFailed(false);
  }, [srcs]);

  const handleError = () => {
    if (srcIndex + 1 < srcs.length) {
      setSrcIndex((i) => i + 1);
    } else {
      setFailed(true);
    }
  };

  if (failed || srcs.length === 0) {
    // Styled initials fallback â€” always looks intentional
    return (
      <div
        className="relative z-10 flex h-full w-full flex-col items-center justify-center gap-7"
        aria-label={name}
      >
        <div
          className="flex h-56 w-full max-w-[620px] items-center justify-center rounded-3xl shadow-2xl text-white font-black text-3xl tracking-tight"
          style={{ backgroundColor: color }}
        >
          {initials}
        </div>
        <p className="text-center text-base font-semibold text-[#10284a] max-w-[260px] leading-snug">
          {name}
        </p>
      </div>
    );
  }

  return (
    <div
      className="relative z-10 flex h-full w-full flex-col items-center justify-center gap-7"
      aria-label={name}
    >
      <img
        key={srcs[srcIndex]}
        src={srcs[srcIndex]}
        alt={name}
        onError={handleError}
        loading="lazy"
        decoding="async"
        referrerPolicy="no-referrer"
        className="h-56 w-full max-w-[620px] rounded-3xl bg-white object-contain p-6 shadow-2xl"
      />
      <p className="text-center text-base font-semibold text-[#10284a] max-w-[260px] leading-snug">
        {name}
      </p>
    </div>
  );
}

export default function ClientsShowcase() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setDirection(1);
    setActiveIndex((prev) => (prev + 1) % clients.length);
  }, []);

  const prevSlide = useCallback(() => {
    setDirection(-1);
    setActiveIndex((prev) => (prev - 1 + clients.length) % clients.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  const variants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.95
    })
  };

  const activeClient = clients[activeIndex];

  return (
    <section
      id="clients-slider"
      className="w-full bg-[#eef6ff] px-6 py-8 overflow-hidden"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-3">

        {/* Header */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-1 text-[0.58rem] font-bold uppercase tracking-[0.2em] text-[#274b7b]"
            >
              Client Network
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="font-display text-2xl font-bold leading-tight text-[#10284a] md:text-3xl"
            >
              Trusted Relationships. Proven Expertise.
            </motion.h2>
          </div>

          <div className="flex items-center gap-2.5">
            <button
              onClick={prevSlide}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#10284a] shadow-sm transition hover:bg-[#10284a] hover:text-white"
              aria-label="Previous client"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#10284a] shadow-sm transition hover:bg-[#10284a] hover:text-white"
              aria-label="Next client"
            >
              <ChevronRight size={20} />
            </button>
            <div className="font-mono text-xs font-semibold tracking-[0.28em] text-[#10284a]">
              {String(activeIndex + 1).padStart(2, '0')} / {String(clients.length).padStart(2, '0')}
            </div>
          </div>
        </div>

        <div className="relative overflow-hidden rounded-[2rem] bg-[#dce9ff] p-5 shadow-[0_26px_70px_rgba(13,47,132,0.08)] sm:p-6">
          <div className="absolute inset-x-0 top-0 h-44 bg-gradient-to-b from-white/90 to-transparent" />
          <div className="relative grid min-h-[300px] gap-5 lg:grid-cols-[minmax(320px,0.95fr)_minmax(360px,1.05fr)] items-center">
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex rounded-full bg-white/90 px-3 py-1.5 text-[0.6rem] font-semibold uppercase tracking-[0.24em] text-[#10284a] shadow-sm"
              >
                Featured Identity
              </motion.div>

              <motion.h3
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-display text-3xl font-black leading-tight text-[#10284a]"
              >
                {activeClient.short}
              </motion.h3>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.05 }}
                className="text-base font-semibold text-[#1f365d]"
              >
                {activeClient.name}
              </motion.p>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="max-w-xl text-sm leading-6 text-[#394d72]"
              >
                {activeClient.description}
              </motion.p>

              <div className="flex flex-wrap gap-3">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-[#10284a] px-5 py-2.5 text-xs font-semibold text-white transition hover:bg-[#0c2f65]"
                >
                  Case Study
                  <ExternalLink size={14} className="ml-2" />
                </a>
                <button className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-xs font-semibold text-[#10284a] transition hover:bg-[#f3f7ff]">
                  Partnership Details
                </button>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="relative h-[260px] w-full max-w-[520px]">
                <ClientLogo
                  srcs={activeClient.imageSrcs}
                  name={activeClient.name}
                  initials={activeClient.initials}
                  color={activeClient.color}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3">
          {clients.map((_, idx) => (
            <button
              key={idx}
              onClick={() => {
                setDirection(idx > activeIndex ? 1 : -1);
                setActiveIndex(idx);
              }}
              className={`h-3 rounded-full transition-all duration-300 ${
                idx === activeIndex ? 'w-10 bg-[#274b7b]' : 'w-3 bg-white shadow-sm'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}



