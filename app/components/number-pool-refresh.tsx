"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

declare global {
  interface Window {
    /** Defined by LeadConnector's `number_pool.js`. */
    initNumberPool?: () => void;
  }
}

/**
 * Re-runs LeadConnector's number swap after a client-side navigation.
 *
 * `number_pool.js` only calls `initNumberPool()` once, off `DOMContentLoaded`
 * (or immediately if the document is already parsed), and installs no
 * MutationObserver. App Router navigations never fire that event, so every page
 * after the first rendered the real number and the tracking number was lost.
 *
 * `initNumberPool()` walks `document.body` looking for the forwarding number in
 * any common format, so calling it again is safe: on a page with nothing to
 * swap it simply matches nothing. Add `class="noswap"` to any element that
 * should keep the real number.
 */
export function NumberPoolRefresh() {
  const pathname = usePathname();
  // The script swaps the first page itself; re-running it here would only
  // duplicate that work and its network call.
  const isFirstRender = useRef(true);

  useEffect(() => {
    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }
    // Undefined if the user navigates before the script finishes loading — in
    // that case it runs on load anyway and the current page is already correct.
    window.initNumberPool?.();
  }, [pathname]);

  return null;
}
