import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Served at the root of the custom domain gitadaily.org.
export default defineConfig({
  site: 'https://gitadaily.org',
  base: '/',
  trailingSlash: 'ignore',
  integrations: [sitemap()],
});
