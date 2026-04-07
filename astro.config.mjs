import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [
    tailwind(),
  ],
  site: 'https://ustcer-jun.github.io',
  base: '/YjZhang_homepage',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
    routing: {
      prefixDefaultLocale: false,
    },
    fallback: {
      zh: 'en',
    },
  },
});