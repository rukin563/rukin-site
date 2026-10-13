# rukin563.com

Portfolio and shop for Rukin, built with [Astro](https://astro.build). Portuguese is the main language (`/`), English lives under `/en`. The PT/EN switch swaps the page instantly without a reload, and each language still has its own URL so Google indexes both.

## Run it on your computer

1. Install [Node.js](https://nodejs.org) (version 22 or newer).
2. In this folder, run:

```bash
npm install
npm run dev
```

3. Open http://localhost:4321. Edits show up as you save.

## Where everything lives

| What you want to change | File |
|---|---|
| Your artworks (title, year, price, image, buy links) | `src/data/artworks.json` |
| Bio, email, Instagram, Colab55 link, form addresses | `src/data/site.json` |
| Any interface text (menus, buttons, shop text), both languages | `src/i18n/ui.ts` |
| Artwork images | `public/images/` |
| Colors and fonts | the `:root` block in `src/layouts/Base.astro` |
| Old Google Sites URLs to redirect | `public/_redirects` |

### Adding an artwork

Copy one block in `artworks.json` and change it. `status` is one of:

- `available`: shows the price and a **Comprar original** button (needs `paymentLink`)
- `sold`: shows "Vendida"
- `private`: shows "Acervo pessoal" (not for sale)

`printLink` is optional. When set, a **Comprar print** button appears and the work is listed under Prints in the shop.

Images: export as JPG or WebP, about 1600px on the longest side, under 400 KB. Name files without spaces or accents (`noite-azul-2026.jpg`).

## Before launch: replace every placeholder

Search the project for `SEU_` to find them all:

1. **Mercado Pago:** for each original, create a payment link (Mercado Pago app → Cobrar → Link de pagamento) and paste it into `paymentLink`.
2. **Colab55:** create your artist store and put its address in `site.json` and on each artwork's `printLink`.
3. **Contact form:** create a free form at [formspree.io](https://formspree.io) and paste its address into `contactFormAction`.
4. **Newsletter:** create a free account at Brevo or Buttondown, copy its form "action" URL into `newsletterAction`.
5. **Bio:** write both versions in `site.json`.
6. **Redirects:** list your current Google Sites paths in `public/_redirects`.

## Publish (free) on Cloudflare Pages

1. Put this folder on GitHub (a free private repository is fine).
2. In the Cloudflare dashboard: Workers & Pages → Create → Pages → connect the GitHub repository.
3. Build command `npm run build`, output folder `dist`.
4. Every time you push a change to GitHub, the site rebuilds by itself.
5. Custom domain: add `rukin563.com` in the Pages project. Only switch the domain away from Google Sites once the new site looks right on its temporary `.pages.dev` address.
