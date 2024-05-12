import { defineConfig } from "astro/config";

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://infinite-semantic-duration.netlify.app/",
  integrations: [preact()]
});