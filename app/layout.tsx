import type { Metadata, Viewport } from 'next';
import './globals.css';
import SmoothScrollProvider from '@/components/SmoothScrollProvider';
import RouteFocusManager from '@/components/RouteFocusManager';
import RuntimeEventGuard from '@/components/RuntimeEventGuard';

export const metadata: Metadata = {

  metadataBase: new URL('https://dimensionfinancial.co.in'),
  title: {
    default: 'Dimension Financial Solution Private Limited | SEBI-Registered Merchant Banker & Stock Broker',
    template: '%s | Dimension Financial Services'
  },
  description:
    'Dimension Financial Solutions Private Limited is a SEBI-registered Merchant Banker and Stock Broker offering merchant banking, debt placement, and debt segment stock broking services in India.',
  applicationName: 'Dimension Financial Solutions Private Limited',
  keywords: [
    'Merchant Banker India',
    'SEBI registered merchant banker',
    'Debt placement services',
    'Stock broking debt segment',
    'BSE New Debt Segment',
    'Dimension Financial Solutions'
  ],
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
    // Use public/ root paths; avoids broken icons if /images folder isn't wired.
    icon: '/images/logo.svg',
    shortcut: '/images/logo.svg',
    apple: '/images/logo.svg',
    other: [
      {
        rel: 'apple-touch-icon',
        url: '/images/logo.svg'
      },
      {
        rel: 'icon',
        url: '/images/logo.svg'
      }
    ]
  },
  openGraph: {
    title: 'Dimension Financial Solutions | Merchant Banking and Debt Advisory',
    description:
      'SEBI-registered merchant banking, debt placement, and debt segment stock broking services for corporates, institutions, and investors.',
    url: 'https://dimensionfinancial.co.in',
    siteName: 'Dimension Financial Solutions Private Limited',
    locale: 'en_US',
    type: 'website',
images: [
      {
        url: '/images/logo.svg',
        width: 1200,
        height: 630,
        alt: 'Dimension Financial Solutions Private Limited'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Dimension Financial Solutions | Merchant Banking and Debt Advisory',
    description:
      'SEBI-registered Merchant Banker and Stock Broker offering merchant banking, debt placement, and debt segment stock broking services.',
images: ['/images/logo.svg']
  },
  alternates: {
    canonical: '/'
  }
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1.0,
  userScalable: true,
  themeColor: '#00B4D8',
  viewportFit: 'cover'
};

export const fetchCache = 'force-no-store'; 
export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head suppressHydrationWarning>
        <link rel="icon" type="image/x-icon" href="/images/logo.svg" />
        <link rel="icon" type="image/svg+xml" href="/images/logo.svg" />
        <link rel="shortcut icon" href="/images/logo.svg" />
        <link rel="apple-touch-icon" href="/images/logo.svg" />
        <meta name="theme-color" content="#00B4D8" />
      </head>
      <body suppressHydrationWarning className="bg-surface text-text font-[var(--font-body)] antialiased">
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
