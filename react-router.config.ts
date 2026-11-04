import type { Config } from "@react-router/dev/config";

export default {
  // No runtime server: render as a static SPA and prerender routes to HTML at build time.
  ssr: false,
  prerender: true,
} satisfies Config;
