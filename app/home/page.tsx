import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import HomeLanding from '@/components/HomeLanding';

export const metadata: Metadata = pageMetadata({
  title: 'Dimension Financial Solutions | SEBI Registered Merchant Banker & Stock Broker',
  absoluteTitle: true,
  description:
    'SEBI-registered Merchant Banker and debt segment Stock Broker in India. IPO, FPO, QIP, rights issue, open offer, buyback, delisting and debt placement services.',
  path: '/',
  keywords: [
    'merchant banking services',
    'merchant banker for IPO',
    'SME IPO merchant banker',
    'QIP merchant banker',
    'debt placement services',
    'bond placement India',
    'financial advisory services India',
    'investment banking India'
  ]
});

export default function HomeRoutePage() {
  return <HomeLanding />;
}
