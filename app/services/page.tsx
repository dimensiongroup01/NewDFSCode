import type { Metadata } from 'next';
import { pageMetadata } from '@/lib/seo';
import PageHero from '@/components/PageHero';
import ScrollFusion3D from '@/components/ScrollFusion3D';
import ScrollReveal from '@/components/ScrollReveal';
import ServicesTabs from '@/components/ServicesTabs';
import StoryChapter from '@/components/StoryChapter';
import SiteFooter from '@/components/SiteFooter';
import SiteHeader from '@/components/SiteHeader';

export const metadata: Metadata = pageMetadata({
  title: 'Services – Merchant Banking, Debt Placement & Stock Broking',
  description:
    'Integrated services across merchant banking, debt placement, debt advisory and debt segment stock broking for corporates, institutions and trusts in India.',
  path: '/services',
  keywords: [
    'financial services India',
    'merchant banking',
    'debt placement',
    'debt advisory',
    'debt segment stock broking',
    'capital market advisory',
    'issue management',
    'underwriting public issues'
  ]
});

export default function ServicesPage() {
  return (
    <>
      <SiteHeader />
      <main id="main-content" tabIndex={-1} className="min-h-screen">
      <PageHero
        kicker="Core Services"
        title="Capital Market and Debt Advisory Services"
        subtitle="Integrated service lines across merchant banking, debt placement, debt advisory, and debt segment stock broking."
      />
      {/* <ScrollFusion3D variant="services" compact /> */}
      <StoryChapter
        label="Section 02"
        title="From Complexity to Clarity"
        detail="Our services are designed to move each mandate from structuring to compliant execution for corporates, institutions, and trusts."
      />
      <ServicesTabs />
      <ScrollReveal />
      </main>
      <SiteFooter />
    </>
  );
}
