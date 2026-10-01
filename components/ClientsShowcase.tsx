'use client';

import { motion } from 'framer-motion';
import { useState, useEffect, useCallback } from 'react';
import { ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';

type Client = {
  id: string;
  short: string;
  name: string;
  imageSrcs: string[];
  initials: string;
  accent: string;
  color: string;
  description: string;
};

const clients: Client[] = [
  {
    id: 'indian-oil-corporation',
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
    id: 'national-cooperative-development-corporation',
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
    id: 'nhpc-limited',
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
    id: 'krishak-bharati-cooperative-limited',
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
    id: 'cement-corporation-of-india',
    short: 'CCI',
    name: 'Cement Corporation of India Limited',
    imageSrcs: [
      '/images/CCI.jpg',
    ],
    initials: 'CCI',
    accent: 'from-blue-50 to-blue-50',
    color: '#c0392b',
    description: 'Shows the breadth of DFS relationships across corporates, institutions, and debt market participants.'
  },
  {
    id: 'inspiring-agro-limited',
    short: 'Inspiring Agro',
    name: 'Inspiring Agro Limited',
    imageSrcs: [
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQReVWZc2SlWFJAjsY0g-dhnE3wohHPNO9SLw&s',
    ],
    initials: 'IAL',
    accent: 'from-green-50 to-white',
    color: '#2f7d32',
    description: 'Represents DFS client work across corporate advisory, capital market execution, and financial services mandates.'
  },
  {
    id: 'himalaya-food-international',
    short: 'Himalaya Food',
    name: 'Himalaya Food International Ltd',
    imageSrcs: [
      'https://static.wixstatic.com/media/42670e_a880e532f8ac40f29a8ec78892244978~mv2.jpeg',
    ],
    initials: 'HFIL',
    accent: 'from-blue-50 to-white',
    color: '#1f5f8b',
    description: 'Reflects DFS support for listed and corporate clients through disciplined advisory and execution-led services.'
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
        className="relative z-10 flex h-full w-full flex-col items-center justify-center gap-5"
        aria-label={name}
      >
        <div
          className="flex h-52 w-full max-w-[460px] items-center justify-center rounded-2xl font-display text-4xl font-semibold tracking-tight text-white shadow-lift"
          style={{ backgroundColor: color }}
        >
          {initials}
        </div>
        <p className="max-w-[280px] text-center text-sm font-semibold leading-snug text-slate-500">
          {name}
        </p>
      </div>
    );
  }

  return (
    <div
      className="relative z-10 flex h-full w-full flex-col items-center justify-center gap-5"
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
        className="h-52 w-full max-w-[460px] rounded-2xl bg-white object-contain p-8 shadow-lift ring-1 ring-line"
      />
      <p className="max-w-[280px] text-center text-sm font-semibold leading-snug text-slate-500">
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
      className="section overflow-hidden bg-paper"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="section-shell">

        {/* Header */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="eyebrow"
            >
              Client Network
            </motion.p>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="heading-lg mt-5"
            >
              Trusted Relationships. Proven Expertise.
            </motion.h2>
          </div>

          <div className="flex items-center gap-3">
            <div className="mr-2 text-sm font-bold tabular-nums tracking-[0.2em] text-navy">
              {String(activeIndex + 1).padStart(2, '0')} <span className="text-slate-300">/</span> {String(clients.length).padStart(2, '0')}
            </div>
            <button
              onClick={prevSlide}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-navy transition hover:border-navy hover:bg-navy hover:text-white"
              aria-label="Previous client"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextSlide}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-navy transition hover:border-navy hover:bg-navy hover:text-white"
              aria-label="Next client"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        <div className="card mt-10 grid overflow-hidden lg:grid-cols-2">
          <div className="flex flex-col justify-center gap-5 p-8 md:p-12">
            <motion.div
              key={`tag-${activeClient.id}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex w-fit rounded-full bg-aqua-50 px-3.5 py-1.5 text-[0.68rem] font-bold uppercase tracking-[0.2em] text-aqua-700"
            >
              Featured Identity
            </motion.div>

            <motion.h3
              key={`short-${activeClient.id}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-display text-4xl font-semibold leading-tight text-navy md:text-5xl"
            >
              {activeClient.short}
            </motion.h3>

            <motion.p
              key={`name-${activeClient.id}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.05 }}
              className="text-base font-semibold text-navy/80"
            >
              {activeClient.name}
            </motion.p>

            <motion.p
              key={`desc-${activeClient.id}`}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="max-w-lg body-copy"
            >
              {activeClient.description}
            </motion.p>

            <div className="flex flex-wrap gap-3 pt-2">
              <a href="/contact" className="btn-primary">
                Case Study
                <ExternalLink size={14} />
              </a>
              <button className="btn-secondary">
                Partnership Details
              </button>
            </div>
          </div>

          <div className="flex items-center justify-center border-t border-line bg-gradient-to-br from-navy-50 via-white to-aqua-50 p-8 md:p-12 lg:border-l lg:border-t-0">
            <div className="relative h-[280px] w-full max-w-[480px]">
              <ClientLogo
                key={activeClient.id}
                srcs={activeClient.imageSrcs}
                name={activeClient.name}
                initials={activeClient.initials}
                color={activeClient.color}
              />
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-2.5">
          {clients.map((client, idx) => (
            <button
              key={client.id}
              onClick={() => {
                setDirection(idx > activeIndex ? 1 : -1);
                setActiveIndex(idx);
              }}
              className={`h-2 rounded-full transition-all duration-300 ${
                idx === activeIndex ? 'w-10 bg-accent' : 'w-2 bg-navy/20 hover:bg-navy/40'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}



