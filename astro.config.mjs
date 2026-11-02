// @ts-check
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "astro/config";

import netlify from "@astrojs/netlify";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    server: {
      allowedHosts: ["eli-robinson.dev"],
    },
  },

  adapter: netlify(),
  // pages load ahead of time on hover, so stepping into a block is instant
  prefetch: { prefetchAll: true, defaultStrategy: "hover" },
  // Neon Harbor became the homepage
  redirects: { "/city/neon": "/" },
  integrations: [react()],
});