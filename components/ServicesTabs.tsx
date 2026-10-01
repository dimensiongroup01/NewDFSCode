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
  const currentIndex = blocks.findIndex((block) => block.id === current.id);

  return (
    <section className="section bg-paper">
      <div className="section-shell">
        <div
          className="inline-flex w-full flex-wrap gap-1 rounded-full border border-line bg-white p-1.5 shadow-soft sm:w-auto"
          data-reveal
          role="tablist"
          aria-label="Service lines"
        >
          {blocks.map((block, i) => (
            <button
              key={block.id}
              type="button"
              role="tab"
              aria-selected={active === block.id}
              onClick={() => setActive(block.id)}
              className={`inline-flex flex-1 items-center justify-center gap-2.5 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200 sm:flex-none ${
                active === block.id ? 'bg-navy text-white shadow-soft' : 'text-slate-500 hover:text-navy'
              }`}
            >
              <span className={`text-xs font-bold tabular-nums ${active === block.id ? 'text-accent' : 'text-slate-400'}`}>
                {String(i + 1).padStart(2, '0')}
              </span>
              {block.label}
            </button>
          ))}
        </div>

        <div className="mt-8 grid overflow-hidden rounded-[1.75rem] border border-line shadow-soft lg:grid-cols-2">
          <article data-reveal className="band-navy p-8 md:p-12">
            <NumberChip value={currentIndex + 1} variant="accent" size="lg" />
            <h3 className="mt-6 font-display text-3xl font-semibold md:text-4xl">{current.title}</h3>
            <p className="mt-4 text-base leading-relaxed text-slate-300">{current.description}</p>
          </article>

          <article data-reveal className="bg-white p-8 md:p-12">
            <h3 className="heading-md">Deliverables</h3>
            <PointMatrix points={current.deliverables} className="mt-6" />
          </article>
        </div>

        <div className="mt-14 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {current.process.map((phase, index) => (
            <div key={phase.step} data-reveal>
              <StepCard step={`0${index + 1}`} title={phase.step} text={phase.detail} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
