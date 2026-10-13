import { defineConfig } from 'astro/config';

// Static site: every page is plain HTML, hosted free on Cloudflare Pages.
export default defineConfig({
  site: 'https://rukin563.com',
  trailingSlash: 'never',
  build: { format: 'file' },
});
