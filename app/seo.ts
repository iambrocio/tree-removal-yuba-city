import type { Metadata } from "next";
import { business } from "./site-content";

/**
 * Production origin, e.g. `https://treeremovalyubacity.com` — no trailing slash.
 *
 * Set `NEXT_PUBLIC_SITE_URL` in the deploy environment. It is read at build
 * time, so it must be present when `next build` runs, not just at runtime.
 */
const configured = process.env.NEXT_PUBLIC_SITE_URL?.trim().replace(/\/+$/, "");

export const siteUrl =
  configured ||
  (process.env.NODE_ENV === "development" ? "http://localhost:3000" : undefined);

/**
 * Self-referencing canonical for a page.
 *
 * When no site URL is configured this emits nothing. That is deliberate: a
 * canonical pointing at the wrong origin (localhost, a preview URL) actively
 * misdirects crawlers, whereas omitting the tag is merely neutral.
 *
 * @param path Root-relative path, e.g. `/services/tree-trimming`.
 */
export function canonical(path: string): Pick<Metadata, "alternates"> {
  if (!siteUrl) return {};
  return { alternates: { canonical: new URL(path, siteUrl).toString() } };
}

/**
 * The social card image, served by `app/opengraph-image.png`.
 *
 * Pages that declare their own `openGraph` have to name it: the file
 * convention only auto-populates a segment that leaves `openGraph` unset, so
 * without this a subpage ships a card with no image at all.
 */
const socialImage = {
  url: "/opengraph-image.png",
  width: 1200,
  height: 630,
  alt: `${business.name} logo`,
};

/** Open Graph fields that are the same on every page. */
export const openGraphBase: Metadata["openGraph"] = {
  type: "website",
  siteName: business.name,
  locale: "en_US",
  images: [socialImage],
};

/**
 * Canonical, title, description, and matching social card tags for one page.
 *
 * Pages must spell out their own `openGraph`: Next.js inherits the parent's
 * object wholesale when a page omits it, so a page that set only `title` would
 * still share the site-wide `og:title` on Facebook, LinkedIn, and iMessage.
 *
 * The card image itself comes from `app/opengraph-image.png`, which applies to
 * every nested route and needs no wiring here.
 */
export function pageMeta(
  path: string,
  title: string,
  description: string,
): Metadata {
  return {
    ...canonical(path),
    title,
    description,
    openGraph: {
      ...openGraphBase,
      title,
      description,
      ...(siteUrl ? { url: new URL(path, siteUrl).toString() } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [socialImage],
    },
  };
}
