import type { MetadataRoute } from 'next';
import { SITE_URL, sitePaths } from '../lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  return sitePaths.map((path) => ({
    url: path === '/' ? SITE_URL : `${SITE_URL}${path}`,
    lastModified,
    changeFrequency: path === '/news' ? 'weekly' : 'monthly',
    priority: path === '/' ? 1 : 0.8,
  }));
}
