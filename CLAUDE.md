# Project context for Claude

Rebuild of rukin563.com (artist portfolio, currently on Google Sites) as an Astro static site the artist fully owns. Artist is based in São Paulo, has basic coding skills, and wants to be guided while building.

## Decisions already made
- **Stack:** Astro (static), hosted on Cloudflare Pages, content in JSON files (no database, no CMS yet).
- **Languages:** Portuguese is the main language at `/`, English at `/en/...`. Each page has its own URL per language (SEO), and the PT/EN switch in `Base.astro` fetches the other page and swaps `#app` without a reload, updating the URL with pushState. The route map is in `src/i18n/ui.ts`.
- **All interface text** lives in `src/i18n/ui.ts`; artworks in `src/data/artworks.json`; bio, links and form endpoints in `src/data/site.json`.
- **Images:** full-quality masters go in `image-originals/` (git-ignored, never published). `npm run images` writes compressed copies to `public/images/` (JPG, or WebP when transparent; max 1600px wide, banner 2400, btn_ 600; metadata stripped). Never put uncompressed photos straight into `public/images/`. File names: lowercase first letter, no spaces or accents (Cloudflare is case-sensitive).
- **Shop:** originals sold through individual Mercado Pago payment links (Pix matters for Brazilian buyers). Prints through Colab55 (print-on-demand, Brazil). Digital products later, probably via Hotmart. Nuvemshop is the upgrade path once order volume justifies it.
- **Forms:** Formspree for contact, Brevo or Buttondown for newsletter.
- **Design:** concrete-grey "gallery wall" background, one cobalt accent, Archivo variable font. Header is one row: menu left, the name (menu-sized, by Rukin's choice, Oct 2026) and the PT/EN switch right. The cover carries the visual weight instead: banner photo, picture buttons, statement. Dark mode supported.

## Business setup (confirmed by Rukin)
- Registered as **ME** (microempresa, not MEI) with CNPJ and state registration, working with an accountant.
- Issues a nota fiscal for every sale. CPF on the order form is optional: without it, the accountant has an alternative way to issue the invoice.

## Still to do
1. Replace placeholders (search for `SEU_`) with real links and IDs.
2. Add real artworks, photos and bio (PT and EN).
3. ~~Fill `public/_redirects`~~ Done: only `/capa` needed one. When moving the domain, also redirect `www.rukin563.com/*` to `rukin563.com/*` in Cloudflare (Google indexed the www version).
4. ~~Push to GitHub~~ Done (github.com/rukin563/rukin-site). Next: connect Cloudflare Pages, then move the domain. Domain is registered at Namecheap, which also forwards `contato@rukin563.com` (Namecheap email forwarding, MX `eforward*.registrar-servers.com`). Moving DNS to Cloudflare breaks that: recreate it with Cloudflare Email Routing in the same step.
5. Later: marketing plan (email list first, Instagram/TikTok process content, Pinterest, São Paulo art fairs), digital products, legal pages (privacy policy under LGPD, returns policy), and Mercado Pago links (business account under review, Oct 2026).

## How the user wants advice
Direct and challenging, not agreeable. Lead with the uncomfortable truth, tag claims [Certain]/[Likely]/[Guessing], and hold positions unless given new information.

## About the artist (from Google's index of the current site, to be confirmed by Rukin)
- Independent visual artist, São Paulo. Instagram @rukin563.
- Theme: discard. "I work with what gets thrown away — objects and people alike." Commentary on consumption and on what society pushes out of view.
- Style: graphic design, pop art, cubism, dadaism, constructivism; formal rigor broken by deliberate errors. Spray paint and acrylic on walls, doors, fences; assemblages on wood.
- Graphic Design, FAAP, 1993. Lived and worked in factories in Japan 2004–2018, exhibited at Tokyo art fairs.
- Old site has English pages at /en/bio and /en/about (and is indexed by Google, so redirects matter).

## Open design question
The current clean concrete-grey/cobalt design was made before knowing the work. It is probably too polite for street materials, spray paint and constructivist/pop references. Revisit once real artwork photos are in: options are (a) keep the frame neutral so the work carries all the energy, or (b) give the frame a constructivist/poster voice (hard color blocks, stencil or condensed type, deliberate misalignment).
