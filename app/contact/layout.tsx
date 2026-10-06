import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';

// The contact page is a client component, so its metadata lives here.
export const metadata: Metadata = pageMetadata({
  title: 'Contact Us – Merchant Banking & Debt Advisory Enquiries',
  description:
    'Contact Dimension Financial Solutions for merchant banking, IPO, debt placement and stock broking enquiries. Email contact@dimensionfinancial.co.in or call 0120-4151349.',
  path: '/contact',
  keywords: ['contact merchant banker', 'merchant banking enquiry', 'debt placement enquiry', 'IPO consultation']
});

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
