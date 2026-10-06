/**
 * Shared site content — single source of truth for text that appears on more
 * than one page (homepage + inner pages). Edit here, not in the pages.
 */

// -- Merchant banking service lines ---------------------------------------------
export type MerchantBankingService = {
  id: string;
  title: string;
  points: string[];
};

export const merchantBankingServices: MerchantBankingService[] = [
  {
    id: '01',
    title: 'Public Issues, Rights Issues and QIP',
    points: [
      'Public Issues of Equity and Debt securities through IPO, FPO and Rights Issue.',
      'Qualified Institutional Placements (QIP)',
      'Provides services as Book-running Lead Manager, Lead Manager, Co-Manager and advisor to the issue.',
      'Underwriting in Public Issues of Equity and Debt securities.',
      'Advisory or consulting services incidental to IPO, FPO, QIP and Rights issue.',
      'Private placement of listed or proposed to be listed securities on a stock exchange.',
    ],
  },
  {
    id: '02',
    title: 'Acquisition and Takeover',
    points: [
      'Manager to Open Offer under SEBI (SAST) Regulations, including preparation of documents.',
      'Transaction Strategy and Advisory for Acquirers and Target Companies',
      'Open offer structuring and regulatory coordination',
    ],
  },
  {
    id: '03',
    title: 'Buyback of Shares of Listed Companies',
    points: [
      'Buy-back structuring and advisory – Tender Offer and Open Market route',
      'Merchant Banker services and regulatory coordination under SEBI Buyback Regulations',
      'Regulatory compliance and shareholder communication',
      'Execution support, closure and post-buy-back compliances',
    ],
  },
  {
    id: '04',
    title: 'Delisting of Securities',
    points: [
      'Advisory and transaction management support for delisting of equity shares in accordance with the SEBI (Delisting of Equity Shares) Regulations, 2021.',
      'Manager to delisting offer',
      'Regulatory filings with SEBI and Stock Exchanges',
      'Post-delisting compliances and settlement/exit offers.',
    ],
  },
  {
    id: '05',
    title: 'Other SEBI-regulated activities',
    points: [
      'Implementation of ESOP and/or other Employee benefit Scheme under SEBI (Share based employee benefits & Sweat Equity) Regulations, 2021.',
      'Filing of Placement Memorandum of an Alternative Investment Fund',
      'Issuance of Fairness Opinion',
      'Managing of international offering of securities and advisory or consulting services.',
      'Advisory and compliance services in respect of Scheme of arrangement under SEBI LODR Regulations',
    ],
  },
  {
    id: '06',
    title: 'Non-SEBI regulated activities',
    points: [
      'Private Placements of Equity & Debt securities',
      'Debt Advisory and Debt Syndication services',
      'Advisory services to PSU & PF trusts, super-annuation trust etc.',
      'Valuation services under Foreign Exchange Management Act, 1999 and Income Tax Act',
      'Advisory on Mergers and Acquisitions',
      'Financial and Corporate Advisory',
      'Fund-raising and Restructuring Advisory to Corporates.',
    ],
  },
];


// -- Engagement process (About → "Our Engagement Process") ----------------------
export const engagementProcess = [
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

// -- Credentials (Home + About) ---------------------------------------------------
export const credentials: { label: string; value: string; detail?: string }[] = [
  { label: 'Established', value: '2009' },
  { label: 'Merchant Banker', value: 'SEBI Registered September 2025', detail: 'INM000013314' },
  { label: 'Stock Broking Debt Segment', value: '2023', detail: 'INZ000313233' },
  { label: 'Debt Platform', value: 'Bondsadda 2023', detail: 'OBPPs at BSE' }
];
