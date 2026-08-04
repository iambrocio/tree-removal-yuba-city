import type { Metadata } from "next";

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
 * @param path Root-relative path, e.g. `/services/tree-removal`.
 */
export function canonical(path: string): Pick<Metadata, "alternates"> {
  if (!siteUrl) return {};
  return { alternates: { canonical: new URL(path, siteUrl).toString() } };
}
