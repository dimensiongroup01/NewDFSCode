'use client';

import { useState } from 'react';
import { NumberChip, PointMatrix, StepCard } from '@/components/InfoKit';

type ServiceBlock = {
  id: string;
  label: string;
  title: string;
  description: string;
  deliverables: string[];
  process: { step: string; detail: string }[];
};

const blocks: ServiceBlock[] = [
  {
    id: 'merchant',
    label: 'Merchant Banking',
    title: 'Merchant Banking',
    description: 'SEBI-registered merchant banking support across issue management, capital restructuring, and execution readiness.',
    deliverables: [
      'IPO, FPO, and Rights Issue management',
      'Underwriting in public issues including SME IPOs',
      'QIP, buyback, delisting, and open offer support'
    ],
    process: [
      { step: 'Readiness', detail: 'Mandate scoping and requirement mapping.' },
      { step: 'Structuring', detail: 'Capital issue design and documentation.' },
      { step: 'Execution', detail: 'Regulatory and transaction implementation.' },
      { step: 'Closure', detail: 'Reporting and post-issue advisory support.' }
    ]
  },
  {
    id: 'stock',
    label: 'Stock Broking',
    title: 'Stock Broking',
    description: 'Debt segment stock broking and execution support for institutions, corporates, trusts, and treasury participants.',
    deliverables: [
      'BSE debt segment trading and execution support',
      'Placement support for bonds, debentures, and government securities',
      'Market-linked transaction facilitation for institutional clients'
    ],
    process: [
      { step: 'Onboard', detail: 'Compliance and account activation flow.' },
      { step: 'Assess', detail: 'Instrument suitability and mandate mapping.' },
      { step: 'Execute', detail: 'Trade and placement execution support.' },
      { step: 'Report', detail: 'Transaction reporting and service continuity.' }
    ]
  }
];

export default function ServicesTabs() {
  const [active, setActive] = useState(blocks[0].id);
  const current = blocks.find((block) => block.id === active) ?? blocks[0];

  return (
    <section className="section-shell py-14 md:py-20">
      <div className="flex flex-wrap gap-2" data-reveal role="tablist" aria-label="Service lines">
        {blocks.map((block, i) => (
          <button
            key={block.id}
            type="button"
            role="tab"
            aria-selected={active === block.id}
            onClick={() => setActive(block.id)}
            className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-all duration-300 ${
              active === block.id
                ? 'bg-gradient-to-r from-[#0096B7] to-[#10284a] text-white shadow-[0_10px_26px_rgba(0,150,183,0.22)]'
                : 'border border-[#E2E8F0]/70 bg-white text-[#10284a] hover:-translate-y-0.5 hover:border-[#00B4D8] hover:shadow-sm'
            }`}
          >
            <span
              className={`font-mono text-[10px] font-black ${
                active === block.id ? 'text-white/70' : 'text-[#0096B7]'
              }`}
            >
              {String(i + 1).padStart(2, '0')}
            </span>
            <span aria-hidden className={`h-3 w-px ${active === block.id ? 'bg-white/30' : 'bg-slate-200'}`} />
            {block.label}
          </button>
        ))}
      </div>

      <div className="mt-6 grid gap-5 md:grid-cols-2">
        <article
          data-reveal
          className="group relative overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#00B4D8]/50 hover:shadow-[0_18px_40px_rgba(16,40,74,0.10)]"
        >
          <span
            aria-hidden
            className="absolute inset-x-0 top-0 h-[3px] bg-gradient-to-r from-[#0096B7] to-[#00B4D8] opacity-80"
          />
          <span
            aria-hidden
            className="pointer-events-none absolute -right-14 -top-16 h-44 w-44 rounded-full bg-[#00B4D8]/10 blur-3xl"
          />
          <div className="relative flex items-center gap-3">
            <NumberChip value={blocks.findIndex((block) => block.id === current.id) + 1} size="lg" />
            <span aria-hidden className="h-px flex-1 bg-gradient-to-r from-[#00B4D8]/40 to-transparent" />
          </div>
          <h3 className="relative mt-3 font-display text-2xl text-[#10284a]">{current.title}</h3>
          <p className="relative mt-3 text-sm leading-relaxed text-slate-600">{current.description}</p>
        </article>

        <article
          data-reveal
          className="relative overflow-hidden rounded-3xl border border-[#E2E8F0] bg-white p-6 shadow-sm transition-all duration-300 hover:border-[#00B4D8]/50 hover:shadow-[0_18px_40px_rgba(16,40,74,0.10)]"
        >
          <h3 className="font-display text-2xl text-[#10284a]">Deliverables</h3>
          <PointMatrix points={current.deliverables} className="mt-4" />
        </article>
      </div>

      <div className="mt-5 grid gap-4 md:grid-cols-4">
        {current.process.map((phase, index) => (
          <div key={phase.step} data-reveal>
            <StepCard step={`0${index + 1}`} title={phase.step} text={phase.detail} />
          </div>
        ))}
      </div>
    </section>
  );
}




