import type { Metadata } from 'next';

/**
 * SEO constants and helpers. Every page builds its metadata with `pageMetadata`
 * so titles, canonicals, Open Graph and Twitter cards stay consistent.
 */

export const SITE = {
  url: 'https://dimensionfinancial.co.in',
  name: 'Dimension Financial Solutions Private Limited',
  shortName: 'Dimension Financial Solutions',
  email: 'contact@dimensionfinancial.co.in',
  phone: '+91-120-4151349',
  foundingYear: '2009',
  sebiMerchantBanker: 'INM000013314',
  sebiStockBroker: 'INZ000313233',
  cin: 'U74140DL2009PTC186563',
  bseMemberId: '6824',
  address: {
    street: 'Dimension Tower, Plot No-10, 3rd Floor, Commercial Area',
    locality: 'Kaushambi',
    city: 'Ghaziabad',
    region: 'Uttar Pradesh',
    regionShort: 'U.P',
    postalCode: '201010',
    country: 'IN'
  }
} as const;

/** Office address as a single display line. */
export const ADDRESS_LINE =
  'Dimension Tower, Plot No-10, 3rd Floor, Commercial Area, Kaushambi, Ghaziabad, U.P-201010.';

/** 1200×630 social share card used for Open Graph / Twitter on every page. */
export const OG_IMAGE = {
  url: '/images/og-image.png',
  width: 1200,
  height: 630,
  alt: 'Dimension Financial Solutions — SEBI Registered Merchant Banker & Stock Broker'
};

/** Keywords shared by every page; pages add their own on top. */
export const BASE_KEYWORDS = [
  'Dimension Financial Solutions',
  'Dimension Financial Solutions Private Limited',
  'DFS merchant banker',
  'SEBI registered merchant banker',
  'merchant banker in India',
  'SEBI registered stock broker',
  'debt securities',
  'Bondsadda'
];

type PageSeo = {
  /** Page title; the root layout appends " | Dimension Financial Solutions". */
  title: string;
  description: string;
  /** Route path, e.g. '/about-us'. Used for the canonical URL and og:url. */
  path: string;
  keywords?: string[];
  /** Use the title as-is, without the site-name template. */
  absoluteTitle?: boolean;
  noIndex?: boolean;
};

export function pageMetadata({ title, description, path, keywords = [], absoluteTitle, noIndex }: PageSeo): Metadata {
  const fullTitle = absoluteTitle ? title : `${title} | ${SITE.shortName}`;
  return {
    title: absoluteTitle ? { absolute: title } : title,
    description,
    keywords: [...keywords, ...BASE_KEYWORDS],
    alternates: { canonical: path },
    openGraph: {
      type: 'website',
      locale: 'en_IN',
      siteName: SITE.name,
      url: path,
      title: fullTitle,
      description,
      images: [OG_IMAGE]
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: [OG_IMAGE.url]
    },
    ...(noIndex ? { robots: { index: false, follow: true } } : {})
  };
}
