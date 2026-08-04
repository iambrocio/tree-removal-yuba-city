import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // AVIF first, WebP as the fallback for browsers without AVIF support.
    // Roughly 20% smaller than WebP, at the cost of slower first-request
    // encoding — subsequent requests are served from the image cache.
    formats: ["image/avif", "image/webp"],
  },
  experimental: {
    // Inline the Tailwind stylesheet into <head> rather than emitting a
    // render-blocking <link>. Recommended for atomic CSS; trades
    // returning-visitor stylesheet caching for a faster first paint.
    inlineCss: true,
  },
};

export default nextConfig;
