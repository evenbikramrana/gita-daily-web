import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Deployed to GitHub Pages as a project site: https://<user>.github.io/<repo>/
// When you move to a custom domain later, set `site` to it and `base` to '/'.
export default defineConfig({
  site: 'https://evenbikramrana.github.io',
  base: '/gita-daily-web',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
});
