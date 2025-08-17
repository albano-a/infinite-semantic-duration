import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";

import preact from "@astrojs/preact";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  site: "https://infinite-semantic-duration.netlify.app/",
  integrations: [preact(), mdx(), sitemap(), svelte()],

  vite: {
    plugins: [tailwindcss()],
  },
});
