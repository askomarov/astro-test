import { defineConfig, squooshImageService  } from 'astro/config';

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx()],
  experimental: { assets: true },
  image: {
    remotePatterns: [{ protocol: "https://picsum.photos/" }],
    service: squooshImageService(),
  }
});
