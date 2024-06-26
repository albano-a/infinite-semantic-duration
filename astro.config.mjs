import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: "https://infinite-semantic-duration.netlify.app/",
  integrations: [preact(), mdx(), sitemap()],
});
