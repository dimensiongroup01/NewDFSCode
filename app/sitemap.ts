import type { MetadataRoute } from 'next';
import { SITE } from '@/lib/seo';

const routes: { path: string; priority: number; changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'] }[] = [
  { path: '/', priority: 1, changeFrequency: 'weekly' },
  { path: '/merchant-banking', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/stock-broking', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/services', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/about-us', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/contact', priority: 0.7, changeFrequency: 'yearly' },
  { path: '/annual', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/investor', priority: 0.6, changeFrequency: 'monthly' },
  { path: '/career', priority: 0.5, changeFrequency: 'monthly' },
  { path: '/sitemap-page', priority: 0.3, changeFrequency: 'yearly' }
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map(({ path, priority, changeFrequency }) => ({
    url: `${SITE.url}${path === '/' ? '' : path}`,
    lastModified,
    changeFrequency,
    priority
  }));
}
