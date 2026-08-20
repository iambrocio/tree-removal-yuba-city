"use client";

import Script from "next/script";
import { useEffect, useRef } from "react";

const FORM_ID = "CRWb5uXff9WQemeZbi7G";
const EMBED_SCRIPT = "https://link.msgsndr.com/js/form_embed.js";

declare global {
  interface Window {
    /** iframe-resizer, exposed by LeadConnector's `form_embed.js`. */
    iFrameResize?: (options: object, target: Element | string) => void;
  }
}

/**
 * LeadConnector's hosted "Website Form", embedded as an iframe.
 *
 * `form_embed.js` sizes the iframe to its content, but only for iframes
 * present when it first runs — it initialises once off `DOMContentLoaded` and
 * then removes its own listener, so arriving here through a client-side
 * navigation leaves a later mount uninitialised. The effect below re-runs the
 * resizer in that case, and the explicit height keeps the form usable even if
 * the script never loads at all. The height here is a starting value only —
 * the resizer overwrites it, so no `min-height` may fight it.
 */
export function EstimateFormEmbed() {
  const frame = useRef<HTMLIFrameElement>(null);

  useEffect(() => {
    if (!frame.current || !window.iFrameResize) return;
    window.iFrameResize({ checkOrigin: false }, frame.current);
  }, []);

  return (
    <>
      <iframe
        ref={frame}
        src={`https://api.leadconnectorhq.com/widget/form/${FORM_ID}`}
        id={`inline-${FORM_ID}`}
        title="Website Form"
        style={{
          width: "100%",
          height: 532,
          border: "none",
          borderRadius: 20,
        }}
        data-layout="{'id':'INLINE'}"
        data-trigger-type="alwaysShow"
        data-trigger-value=""
        data-activation-type="alwaysActivated"
        data-activation-value=""
        data-deactivation-type="neverDeactivate"
        data-deactivation-value=""
        data-form-name="Website Form"
        data-height="532"
        data-layout-iframe-id={`inline-${FORM_ID}`}
        data-form-id={FORM_ID}
      />
      <Script src={EMBED_SCRIPT} />
    </>
  );
}
