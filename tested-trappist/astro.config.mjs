// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://my-astro-site.com',
    server: {
        port: 3000,
        host: 'localhost',
        open: true,
    }
});
