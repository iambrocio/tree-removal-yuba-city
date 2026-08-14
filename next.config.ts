import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // AVIF first, WebP as the fallback for browsers without AVIF support.
    // Roughly 20% smaller than WebP, at the cost of slower first-request
    // encoding — subsequent requests are served from the image cache.
    formats: ["image/avif", "image/webp"],
  },
  redirects() {
    return [
      {
        // Retired for competing with the homepage on "tree removal yuba city".
        // Permanent (308) so the URL's existing links and ranking consolidate
        // there rather than dying on a 404.
        source: "/services/tree-removal",
        destination: "/",
        permanent: true,
      },
    ];
  },
  experimental: {
    // Inline the Tailwind stylesheet into <head> rather than emitting a
    // render-blocking <link>. Recommended for atomic CSS; trades
    // returning-visitor stylesheet caching for a faster first paint.
    inlineCss: true,
  },
};

export default nextConfig;
