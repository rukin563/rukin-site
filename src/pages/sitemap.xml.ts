// Sitemap for search engines: every page, with its other-language version linked
// (hreflang), built from the same route map the site uses. It updates itself when
// pages are added to ui.ts, artworks.json, products.json or calendar.json.
import type { APIRoute } from 'astro';
import { routes, type Lang } from '../i18n/ui';
import { shopItems, itemPaths } from '../data/shop';
import calendar from '../data/calendar.json';

const hreflang: Record<Lang, string> = { pt: 'pt-BR', en: 'en' };

export const GET: APIRoute = ({ site }) => {
  const pages: Record<Lang, string>[] = [
    ...Object.values(routes),
    calendar.paths,
    ...shopItems.map((item) => itemPaths(item.slug)),
  ];
  const url = (path: string) => new URL(path, site).href;

  const entries = pages.flatMap((paths) =>
    (Object.keys(paths) as Lang[]).map(
      (lang) => `  <url>
    <loc>${url(paths[lang])}</loc>
${(Object.keys(paths) as Lang[])
  .map((l) => `    <xhtml:link rel="alternate" hreflang="${hreflang[l]}" href="${url(paths[l])}"/>`)
  .join('\n')}
    <xhtml:link rel="alternate" hreflang="x-default" href="${url(paths.pt)}"/>
  </url>`
    )
  );

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">
${entries.join('\n')}
</urlset>
`;
  return new Response(xml, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
