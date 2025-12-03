import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  site: 'https://philippebrel.fr',
  integrations: [mdx()],
  // Pour le développement local avec Decap CMS
  vite: {
    server: {
      watch: {
        ignored: ['**/public/admin/**']
      }
    }
  }
});

