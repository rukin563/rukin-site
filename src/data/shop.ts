// Everything the shop sells, originals and products, as one list.
// Each item gets its own page at /loja/<slug> and /en/shop/<slug>.
// To change an item, edit artworks.json or products.json, not this file.
import artworks from './artworks.json';
import products from './products.json';
import { routes, type Lang } from '../i18n/ui';

type Text = { pt: string; en: string };

export interface ShopItem {
  kind: 'original' | 'product';
  slug: string;
  title: Text;
  description: Text;
  // First photo is the main one; the rest are details. All of them become thumbnails.
  photos: string[];
  specs: { pt: string[]; en: string[] };
  price: number | null;
  status: string; // available | sold | coming_soon
  buyLink: string | null;
}

// Originals that are for sale or already sold get a page.
// Sold ones keep theirs so links shared on social media don't break.
const originals: ShopItem[] = artworks
  .filter((a) => a.status === 'available' || a.status === 'sold')
  .map((a) => ({
    kind: 'original',
    slug: a.slug,
    title: a.title,
    description: a.description,
    photos: [a.image, ...(a.photos ?? [])],
    specs: {
      pt: [a.medium.pt, a.size, String(a.year)],
      en: [a.medium.en, a.size, String(a.year)],
    },
    price: a.price,
    status: a.status,
    buyLink: a.paymentLink,
  }));

const goods: ShopItem[] = products.map((p) => ({
  kind: 'product',
  slug: p.slug,
  title: p.title,
  description: p.description,
  photos: [p.image, ...(p.photos ?? [])],
  specs: p.specs ?? { pt: [], en: [] },
  price: p.price,
  status: p.status,
  buyLink: p.paymentLink,
}));

export const shopItems = [...originals, ...goods];

// Two items with the same slug would fight over one URL, so stop the build instead.
const seen = new Set<string>();
for (const item of shopItems) {
  if (seen.has(item.slug)) throw new Error(`Duplicate slug in artworks/products: "${item.slug}"`);
  seen.add(item.slug);
}

export function hasItemPage(slug: string) {
  return seen.has(slug);
}

export function itemPaths(slug: string): Record<Lang, string> {
  return { pt: `${routes.shop.pt}/${slug}`, en: `${routes.shop.en}/${slug}` };
}
