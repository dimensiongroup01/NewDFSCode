'use client';

import { useEffect, useState } from 'react';

const nonSebiActivities = [
  'Advisory on Mergers and Acquisitions',
  'Private Placements of Equity & Debt securities',
  'Debt Advisory and Debt Syndication Services',
  'Non-debt Financial Advisory',
  'Valuation services under Foreign Exchange Management Act, 1999 and Income Tax Act.'
];

export default function DisclaimerModal() {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    if (!open) {
      return;
    }
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previousOverflow;
    };
  }, [open]);

  if (!open) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/55 p-4 backdrop-blur-sm">
      <div className="max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-2xl border border-amber-200 bg-white shadow-2xl">
        <div className="border-b border-amber-200 bg-amber-50 px-6 py-4">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-amber-800">Important Disclosure</p>
        </div>

        <div className="space-y-4 px-6 py-5 text-sm leading-relaxed text-slate-800 md:text-base">
          <p>
            Dimension Financial Solutions Private Limited is registered with SEBI as Category I Merchant Banker
            (Registration No. INM000013314) and Stock Broker in Debt Segment (Registration No. INZ000313233).
          </p>
          <p>
            In addition to the permitted activities under SEBI (Merchant Bankers) Regulations, 1992, as amended
            from time to time, carried out by it as a SEBI registered Merchant-banker, also undertakes certain
            fee-based and non-fund based advisory activities that do not fall under the regulatory purview of SEBI
            or any other Financial Sector Regulator (&ldquo;Non SEBI Regulated Activities&rdquo;).
          </p>
          <p>
            The Business activities undertaken by the Company which are not regulated by SEBI, inter-alia include
            the following:
          </p>
          <ol className="list-decimal space-y-1.5 pl-5">
            {nonSebiActivities.map((activity) => (
              <li key={activity}>{activity}</li>
            ))}
          </ol>
          <p className="text-slate-600">
            Note: None of the SEBI Investor Protection mechanism will be available for any grievances or disputes
            arising out of or pertaining to the Non-SEBI regulated activities mentioned below.
          </p>
        </div>

        <div className="flex justify-end gap-3 border-t border-slate-200 px-6 py-4">
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="rounded-lg bg-[#1687C9] px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-[#0F6FA8]"
          >
            I Understand
          </button>
        </div>
      </div>
    </div>
  );
}
