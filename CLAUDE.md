# Project context for Claude

Rebuild of rukin563.com (artist portfolio, currently on Google Sites) as an Astro static site the artist fully owns. Artist is based in São Paulo, has basic coding skills, and wants to be guided while building.

## Decisions already made
- **Stack:** Astro (static), hosted on Cloudflare Pages, content in JSON files (no database, no CMS yet).
- **Languages:** Portuguese is the main language at `/`, English at `/en/...`. Each page has its own URL per language (SEO), and the PT/EN switch in `Base.astro` fetches the other page and swaps `#app` without a reload, updating the URL with pushState. The route map is in `src/i18n/ui.ts`.
- **All interface text** lives in `src/i18n/ui.ts`; artworks in `src/data/artworks.json`; bio, links and form endpoints in `src/data/site.json`.
- **Shop:** originals sold through individual Mercado Pago payment links (Pix matters for Brazilian buyers). Prints through Colab55 (print-on-demand, Brazil). Digital products later, probably via Hotmart. Nuvemshop is the upgrade path once order volume justifies it.
- **Forms:** Formspree for contact, Brevo or Buttondown for newsletter.
- **Design:** concrete-grey "gallery wall" background, one cobalt accent, Archivo variable font with the artist name set huge and compressed (wdth 62) as the single bold element. Dark mode supported.

## Still to do
1. Replace placeholders (search for `SEU_`) with real links and IDs.
2. Add real artworks, photos and bio (PT and EN).
3. Fill `public/_redirects` with the old Google Sites paths.
4. Push to GitHub, connect Cloudflare Pages, then move the domain.
5. Later: marketing plan (email list first, Instagram/TikTok process content, Pinterest, São Paulo art fairs), digital products, legal pages (privacy policy under LGPD, returns policy), and an accountant consultation about MEI and invoices.

## How the user wants advice
Direct and challenging, not agreeable. Lead with the uncomfortable truth, tag claims [Certain]/[Likely]/[Guessing], and hold positions unless given new information.
