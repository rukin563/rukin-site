# Project context for Claude

Rebuild of rukin563.com (artist portfolio, currently on Google Sites) as an Astro static site the artist fully owns. Artist is based in São Paulo, has basic coding skills, and wants to be guided while building.

## Decisions already made
- **Stack:** Astro (static), hosted on Cloudflare Pages, content in JSON files (no database, no CMS yet).
- **Languages:** Portuguese is the main language at `/`, English at `/en/...`. Each page has its own URL per language (SEO), and the PT/EN switch in `Base.astro` fetches the other page and swaps `#app` without a reload, updating the URL with pushState. The route map is in `src/i18n/ui.ts`.
- **All interface text** lives in `src/i18n/ui.ts`; artworks in `src/data/artworks.json`; bio, links and form endpoints in `src/data/site.json`.
- **CV:** PDFs hosted on the site at /cv/rukin-curriculo.pdf and /cv/rukin-cv-en.pdf (linked from Bio via site.json `cv`). Masters in git-ignored `cv-originals/`; published copies get a clean PDF title ("Rukin — Currículo" / "Rukin — Curriculum Vitae"). To update: replace the files in public/cv/ with the same names.
- **Images:** full-quality masters go in `image-originals/` (git-ignored, never published). `npm run images` writes compressed copies to `public/images/` (JPG, or WebP when transparent; max 1600px wide, banner 2400, btn_ 600; metadata stripped). Never put uncompressed photos straight into `public/images/`. File names: lowercase first letter, no spaces or accents (Cloudflare is case-sensitive).
- **Shop:** originals sold through individual Mercado Pago payment links (Pix matters for Brazilian buyers). Prints through Colab55 (print-on-demand, Brazil). Digital products later, probably via Hotmart. Nuvemshop is the upgrade path once order volume justifies it.
- **Forms:** Formspree for contact, Brevo or Buttondown for newsletter.
- **Design:** concrete-grey "gallery wall" background (#e4e5e1), all buttons dark grey (--button #5a5d62, hover --button-hover #8a8d91); no blue anywhere: links and text accents use --link (#5a5d62, lighter #b4b7bc in dark mode), hover --link-hover, Archivo variable font. Header is one row: menu left, the name (menu-sized, by Rukin's choice, Oct 2026) and the PT/EN switch right. The cover carries the visual weight instead: banner photo, picture buttons, statement. Dark mode supported.

## Business setup (confirmed by Rukin)
- Registered as **ME** (microempresa, not MEI) with CNPJ and state registration, working with an accountant.
- Issues a nota fiscal for every sale. CPF on the order form is optional: without it, the accountant has an alternative way to issue the invoice.

## Still to do
1. Replace placeholders (search for `SEU_`) with real links and IDs. Formspree is done (contact + calendar orders). Newsletter: **Brevo, live since 2026-10-21.** Domain rukin563.com authenticated in Brevo (DKIM brevo1/brevo2, DMARC p=none, brevo-code TXT; SPF stays a single Cloudflare record). Sender: Rukin <contato@rukin563.com>. Form "Site rukin563.com" → list "Newsletter site", double opt-in, redirect after confirming → rukin563.com. The footer form posts to `newsletterAction` (site.json) in the background (isAjax=1; Brevo allows rukin563.com and localhost) with fields EMAIL, email_address_check (spam trap), locale. Brevo template #2 (Double opt-in confirmation) is bilingual PT/EN in the site's greys, sender name "Rukin"; its button link {{ doubleoptin }} must never change. Template #1 (Unsubscription follow-up) is still Brevo's English default. The newsletter promises one letter every three months.
2. Add real artworks, photos and bio (PT and EN).
3. ~~Fill `public/_redirects`~~ Done: only `/capa` needed one. When moving the domain, also redirect `www.rukin563.com/*` to `rukin563.com/*` in Cloudflare (Google indexed the www version).
4. ~~Push to GitHub, connect Cloudflare Pages, move the domain~~ Done 2026-10-20. Live at https://rukin563.com.
   - Cloudflare Pages project `rukin563` (test URL rukin563.pages.dev) builds every push to `main` (~40 s). Node pinned in `.nvmrc`.
   - DNS is on Cloudflare (nameservers alberto/hadlee.ns.cloudflare.com, set at Namecheap; Namecheap DNS settings are no longer used). Change DNS only in Cloudflare.
   - Email: Cloudflare Email Routing forwards contato@rukin563.com to Rukin's Gmail.
   - Redirect rule: www.rukin563.com/* → rukin563.com/* (301). /capa → / in public/_redirects. Google verification TXT kept.
   - Old Google Site unpublished (2026-10-21). Keep the google-site-verification TXT: it belongs to Search Console.
   - Google Search Console: Domain property rukin563.com. sitemap.xml submitted 2026-10-21 (first status "Couldn't fetch", normal at first; recheck). "Request indexing" for / and /calendario-2027 failed on Google's side; retry later.
5. ~~Privacy policy~~ Done 2026-10-21: /privacidade and /en/privacy (text in src/data/privacy.json, company in site.json). Linked in every footer and in the calendar order form. Update it whenever a new service starts handling visitor data. Returns policy done too: /trocas-e-devolucoes and /en/returns (src/data/returns.json): 7-day withdrawal with full refund, seller pays return shipping; damaged calendar → new one, no return needed; replies within 3 business days; refunds via Mercado Pago. Linked in footer, Loja, calendar page and order form.
6. Later: marketing plan (email list first, Instagram/TikTok process content, Pinterest, São Paulo art fairs), digital products, legal pages (privacy policy under LGPD, returns policy), and Mercado Pago links (business account under review, Oct 2026).

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
