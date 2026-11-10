import { initOpenNextCloudflareForDev } from "@opennextjs/cloudflare";

/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
};

export default nextConfig;

// Gives `npm run dev` access to the local D1 database defined in wrangler.jsonc.
initOpenNextCloudflareForDev();
