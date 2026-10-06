import type { Metadata, Viewport } from 'next';
import { Inter, Manrope } from 'next/font/google';
import './globals.css';
import SmoothScrollProvider from '@/components/SmoothScrollProvider';
import RouteFocusManager from '@/components/RouteFocusManager';
import RuntimeEventGuard from '@/components/RuntimeEventGuard';
import { BASE_KEYWORDS, OG_IMAGE, SITE } from '@/lib/seo';

const display = Manrope({
  subsets: ['latin'],
  weight: ['500', '600', '700', '800'],
  variable: '--font-display',
  display: 'swap'
});

const body = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-body',
  display: 'swap'
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: 'Dimension Financial Solutions | SEBI Registered Merchant Banker & Stock Broker',
    template: `%s | ${SITE.shortName}`
  },
  description:
    'Dimension Financial Solutions Private Limited is a SEBI-registered Merchant Banker and debt segment Stock Broker in India, offering IPO, QIP, takeover, buyback, delisting, debt placement and financial advisory services.',
  applicationName: SITE.name,
  keywords: BASE_KEYWORDS,
  authors: [{ name: SITE.name, url: SITE.url }],
  creator: SITE.name,
  publisher: SITE.name,
  category: 'finance',
  formatDetection: { telephone: true, email: true, address: false },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1
    }
  },
  icons: {
    icon: '/images/logo.svg',
    shortcut: '/images/logo.svg',
    apple: '/images/logo.svg'
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: SITE.url,
    siteName: SITE.name,
    title: 'Dimension Financial Solutions | SEBI Registered Merchant Banker & Stock Broker',
    description:
      'SEBI-registered merchant banking, debt placement, and debt segment stock broking services for corporates, institutions, trusts, and investors.',
    images: [OG_IMAGE]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dimension Financial Solutions | SEBI Registered Merchant Banker & Stock Broker',
    description:
      'SEBI-registered merchant banking, debt placement, and debt segment stock broking services for corporates, institutions, trusts, and investors.',
    images: [OG_IMAGE.url]
  }
  // To verify ownership in Google Search Console, add:
  // verification: { google: '<token from Search Console>' },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#063B70',
  viewportFit: 'cover'
};

// Organization + WebSite structured data (schema.org) for Google rich results.
const structuredData = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': ['FinancialService', 'Organization'],
      '@id': `${SITE.url}/#organization`,
      name: SITE.name,
      alternateName: [SITE.shortName, 'DFS', 'Dimension Financial'],
      url: SITE.url,
      logo: `${SITE.url}/images/logo.svg`,
      image: `${SITE.url}${OG_IMAGE.url}`,
      email: SITE.email,
      telephone: SITE.phone,
      foundingDate: SITE.foundingYear,
      address: {
        '@type': 'PostalAddress',
        streetAddress: SITE.address.street,
        addressLocality: `${SITE.address.locality}, ${SITE.address.city}`,
        addressRegion: SITE.address.region,
        postalCode: SITE.address.postalCode,
        addressCountry: SITE.address.country
      },
      areaServed: { '@type': 'Country', name: 'India' },
      description:
        'SEBI-registered Merchant Banker and debt segment Stock Broker offering merchant banking, debt placement, debt advisory and stock broking services.',
      identifier: [
        { '@type': 'PropertyValue', propertyID: 'SEBI Merchant Banker Registration', value: SITE.sebiMerchantBanker },
        { '@type': 'PropertyValue', propertyID: 'SEBI Stock Broker Registration', value: SITE.sebiStockBroker },
        { '@type': 'PropertyValue', propertyID: 'CIN', value: SITE.cin },
        { '@type': 'PropertyValue', propertyID: 'BSE Debt Segment Member ID', value: SITE.bseMemberId }
      ],
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        email: SITE.email,
        telephone: SITE.phone,
        areaServed: 'IN'
      },
      knowsAbout: [
        'Merchant Banking',
        'Initial Public Offering (IPO)',
        'Qualified Institutional Placement (QIP)',
        'Rights Issue',
        'Open Offer',
        'Share Buyback',
        'Delisting of Securities',
        'Debt Placement',
        'Debt Syndication',
        'Bonds and Debentures',
        'Debt Segment Stock Broking'
      ]
    },
    {
      '@type': 'WebSite',
      '@id': `${SITE.url}/#website`,
      url: SITE.url,
      name: SITE.shortName,
      publisher: { '@id': `${SITE.url}/#organization` },
      inLanguage: 'en-IN'
    }
  ]
};

export const fetchCache = 'force-no-store'; 
export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-IN" suppressHydrationWarning className={`${display.variable} ${body.variable}`}>
      <head suppressHydrationWarning>
        <link rel="icon" type="image/x-icon" href="/images/logo.svg" />
        <link rel="icon" type="image/svg+xml" href="/images/logo.svg" />
        <link rel="shortcut icon" href="/images/logo.svg" />
        <link rel="apple-touch-icon" href="/images/logo.svg" />
        <meta name="theme-color" content="#063B70" />
      </head>
      <body suppressHydrationWarning className="bg-paper font-body text-text antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <RuntimeEventGuard />
        <SmoothScrollProvider>
          <RouteFocusManager />
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
