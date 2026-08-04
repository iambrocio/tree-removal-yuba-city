import type { Metadata } from "next";
import { EstimateForm } from "../components/estimate-form";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";
import { business, estimatePage } from "../site-content";

const GUTTER = "px-5 sm:px-8 lg:px-14";

export const metadata: Metadata = {
  title: `Get a Free Estimate | ${business.name}`,
  description:
    "Request a free, no-obligation tree service estimate in Yuba City. A certified arborist reviews it and returns a written, fixed price the same day.",
};

export default function FreeEstimatePage() {
  return (
    <div className="flex flex-1 flex-col bg-cream">
      <SiteHeader
        bannerPrefix="Storm damage or a tree on a structure? Don't fill this out — call"
        bannerSuffix=" now."
        pulseBanner
      />

      <main
        className={`${GUTTER} grid flex-1 items-start gap-10 pb-16 pt-8 lg:grid-cols-[minmax(0,1fr)_380px] lg:gap-14 lg:pb-16 lg:pt-11`}
      >
        <div>
          <h1 className="mb-3.5 max-w-[640px] text-[36px] leading-[1.04] font-bold tracking-[-0.035em] text-balance text-ink sm:text-[44px] lg:text-[52px]">
            Get a free estimate
          </h1>
          <p className="mb-5 max-w-[560px] text-[17px] leading-[1.6] text-pretty text-[#4d5947] sm:text-[18px]">
            Takes about two minutes. A certified arborist reviews it and gets
            back to you the same day with a written, fixed price.
          </p>
          <ul className="mb-7 flex flex-wrap gap-x-6 gap-y-2.5 text-[14px] text-[#46523f]">
            {estimatePage.promises.map((promise) => (
              <li key={promise} className="flex items-center gap-2">
                <CheckIcon />
                {promise}
              </li>
            ))}
          </ul>

          <EstimateForm />
        </div>

        <aside className="flex flex-col gap-4.5 lg:sticky lg:top-8">
          <div className="rounded-[22px] bg-ink p-7 text-cream">
            <div className="mb-2.5 text-[12.5px] uppercase tracking-[0.14em] text-sage">
              Faster than the form
            </div>
            <div className="mb-1.5 text-[26px] font-bold tracking-[-0.02em]">
              {business.phone}
            </div>
            <p className="mb-4.5 text-[14.5px] leading-[1.6] text-[#b8c7ae]">
              Answered 24/7 by a real person in Yuba City. Emergencies are
              dispatched the same day.
            </p>
            <a
              href={business.phoneHref}
              className="block rounded-full bg-gold px-4 py-3.5 text-center text-[15px] font-bold text-[#241d0c] hover:bg-gold-dark"
            >
              Call now
            </a>
          </div>

          <div className="rounded-[22px] bg-sand p-7">
            <h2 className="mb-4.5 text-[18px] font-bold tracking-[-0.02em] text-ink">
              What happens next
            </h2>
            <ol className="flex flex-col gap-4">
              {estimatePage.nextSteps.map((step, index) => (
                <li key={step} className="flex gap-3">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-forest text-[12.5px] font-semibold text-cream">
                    {index + 1}
                  </span>
                  <span className="text-[14.5px] leading-[1.55] text-[#46523f]">
                    {step}
                  </span>
                </li>
              ))}
            </ol>
          </div>

          <figure className="m-0 rounded-[22px] bg-white px-7 py-6.5">
            <div className="mb-3 text-[14px] tracking-[2px] text-gold">
              ★★★★★
            </div>
            <blockquote className="m-0 text-[16px] leading-[1.55] font-medium text-pretty text-ink">
              &ldquo;{estimatePage.testimonial.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-3.5 text-[13.5px] text-[#7d8676]">
              {estimatePage.testimonial.author}
            </figcaption>
          </figure>

          <div className="flex flex-col gap-3.5 rounded-[22px] bg-sand px-7 py-6">
            <div className="flex items-center gap-2.5 text-[14px] text-[#46523f]">
              <ShieldIcon />
              {estimatePage.credentials[0]}
            </div>
            <div className="flex items-center gap-2.5 text-[14px] text-[#46523f]">
              <BadgeIcon />
              {estimatePage.credentials[1]}
            </div>
            <div className="flex items-center gap-2.5 text-[14px] text-[#46523f]">
              <span className="text-[13px] tracking-[1px] text-gold">★★★★★</span>
              {estimatePage.credentials[2]}
            </div>
          </div>
        </aside>
      </main>

      <SiteFooter />
    </div>
  );
}

function CheckIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#33452f"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M5 12.5l4.5 4.5L19 7.5" />
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#33452f"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0"
      aria-hidden
    >
      <path d="M12 3l7 3v6c0 4.6-3 7.7-7 9-4-1.3-7-4.4-7-9V6l7-3z" />
      <path d="M9.2 12.2l2 2 3.6-3.8" />
    </svg>
  );
}

function BadgeIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#33452f"
      strokeWidth="1.7"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0"
      aria-hidden
    >
      <circle cx="12" cy="9" r="5" />
      <path d="M8.4 13.3L7 21l5-2.4L17 21l-1.4-7.7" />
    </svg>
  );
}
