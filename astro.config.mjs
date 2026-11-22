import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://niroj-pyakurel.github.io',
  integrations: [sitemap()],
});
