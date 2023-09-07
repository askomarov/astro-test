import { defineConfig, squooshImageService } from "astro/config";

import mdx from "@astrojs/mdx";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx()],
  image: {
    remotePatterns: [{ protocol: "https://picsum.photos/" }],
    service: squooshImageService(),
  },
});
