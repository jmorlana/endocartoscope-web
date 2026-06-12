import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://endocartoscope.eu',
  vite: {
    server: {
      allowedHosts: ['.trycloudflare.com'],
    },
  },
});
