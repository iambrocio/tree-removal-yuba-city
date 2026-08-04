import type { Metadata } from "next";
import { canonical } from "../seo";
import Link from "next/link";
import { ImagePlaceholder } from "../components/image-placeholder";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";
import { business, serviceAreasPage } from "../site-content";
import { slugForCity } from "./areas-data";

const GUTTER = "px-5 sm:px-8 lg:px-14";

export const metadata: Metadata = {
  ...canonical("/service-areas"),
  title: `Service Areas | ${business.name}`,
  description:
    "Tree service across Yuba and Sutter County — Yuba City, Marysville, Linda, Olivehurst, Live Oak, Plumas Lake, Wheatland, and Gridley. Free estimates within 30 miles.",
};

export default function ServiceAreasPage() {
  return (
    <div className="flex flex-1 flex-col bg-cream">
      <SiteHeader
        bannerPrefix="Storm crews are staged in Yuba City and Marysville right now — call"
        bannerSuffix=", answered 24/7."
        pulseBanner
        activeLabel="Service Areas"
      />

      <main className="flex-1">
        <Hero />
        <CoverageCheck />
        <PrimaryCoverage />
        <AlsoCovered />
        <LocalKnowledge />
        <Faq />
        <FinalCta />
      </main>

      <SiteFooter />
    </div>
  );
}

function Hero() {
  return (
    <section className={`${GUTTER} pb-10 pt-8`}>
      <nav
        aria-label="Breadcrumb"
        className="mb-5 flex flex-wrap items-center gap-2 text-[13.5px] text-[#7d8676]"
      >
        <Link href="/" className="hover:text-ink">
          Home
        </Link>
        <span>/</span>
        <span className="text-ink">Service Areas</span>
      </nav>

      <div className="grid items-end gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:gap-16">
        <div>
          <h1 className="mb-4 max-w-[780px] text-[38px] leading-[1.04] font-bold tracking-[-0.038em] text-balance text-ink sm:text-[48px] lg:text-[60px] lg:leading-[1.02]">
            Where we work, and how fast we get there
          </h1>
          <p className="mb-7 max-w-[560px] text-[17px] leading-[1.6] text-pretty text-[#4d5947] sm:text-[18.5px]">
            Yards, trucks, and crews based in Yuba City. Free estimates anywhere
            inside the 30-mile ring, and emergency dispatch across Yuba and
            Sutter County.
          </p>

          <div className="mb-6 flex flex-col gap-3 sm:flex-row">
            <a
              href={business.phoneHref}
              className="flex flex-col gap-px rounded-full bg-forest px-8 py-3.5 text-center text-cream hover:bg-ink sm:text-left"
            >
              <span className="text-[11.5px] uppercase tracking-[0.1em] text-sage">
                Fastest answer
              </span>
              <span className="text-[19px] font-bold tracking-[-0.01em]">
                Call {business.phone}
              </span>
            </a>
            <Link
              href="/free-estimate"
              className="flex items-center justify-center rounded-full border-[1.5px] border-line-strong bg-cream px-8 py-3.5 text-[16px] font-semibold text-ink hover:bg-sand"
            >
              Free estimate
            </Link>
          </div>

          <ul className="flex flex-wrap gap-x-6 gap-y-3 text-[13.5px] text-[#46523f]">
            <li className="flex items-center gap-2">
              <PinIcon />
              22 cities covered
            </li>
            <li className="flex items-center gap-2">
              <ClockIcon />
              Under 1 hr storm response
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[13px] tracking-[1px] text-gold">★★★★★</span>
              4.9 · 214 reviews
            </li>
          </ul>
        </div>

        <div className="grid shrink-0 grid-cols-2 gap-3.5 sm:grid-cols-3">
          {serviceAreasPage.stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-[20px] bg-sand px-7 py-6 sm:min-w-[150px]"
            >
              <div className="text-[30px] font-bold tracking-[-0.03em] text-ink sm:text-[34px]">
                {stat.value}
              </div>
              <div className="mt-1 text-[13.5px] text-moss-light">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CoverageCheck() {
  const fieldClass =
    "w-full min-w-0 rounded-xl bg-cream px-4 py-3 text-[14.5px] text-ink placeholder:text-muted focus:outline-2 focus:outline-offset-2 focus:outline-forest";

  return (
    <section className={`${GUTTER} pb-18`}>
      {/* TODO: wire to a coverage-lookup endpoint — this form does not submit anywhere yet. */}
      <form className="grid items-center gap-3.5 rounded-[22px] bg-sand p-5 sm:p-[26px] lg:grid-cols-[auto_minmax(0,1fr)_minmax(0,1fr)_minmax(0,0.9fr)_auto]">
        <div className="lg:pr-2">
          <div className="text-[17px] font-bold tracking-[-0.02em] text-ink">
            Check coverage for your address
          </div>
          <div className="text-[13px] text-moss-light">
            We&apos;ll confirm the crew and a window, free.
          </div>
        </div>
        <input
          name="address"
          type="text"
          aria-label="Street address"
          autoComplete="street-address"
          placeholder="Street address"
          className={fieldClass}
        />
        <input
          name="city"
          type="text"
          aria-label="City or ZIP"
          autoComplete="postal-code"
          placeholder="City or ZIP"
          className={fieldClass}
        />
        <input
          name="phone"
          type="tel"
          aria-label="Phone number"
          autoComplete="tel"
          placeholder="Phone"
          className={fieldClass}
        />
        <button
          type="submit"
          className="whitespace-nowrap rounded-full bg-gold px-7 py-3.5 text-[15px] font-bold text-[#241d0c] hover:bg-gold-dark"
        >
          Check my address
        </button>
      </form>
    </section>
  );
}

function PrimaryCoverage() {
  return (
    <section className={`${GUTTER} bg-white py-18 lg:py-21`}>
      <div className="mb-9 flex flex-wrap items-end justify-between gap-6">
        <div>
          <div className="mb-3.5 text-[12.5px] uppercase tracking-[0.16em] text-sage-deep">
            Primary coverage
          </div>
          <h2 className="max-w-[620px] text-[30px] leading-[1.1] font-bold tracking-[-0.03em] text-ink sm:text-[36px] lg:text-[40px]">
            Cities we run in every week
          </h2>
        </div>
        <div className="flex gap-4.5 text-[13px] text-moss">
          <span className="inline-flex items-center gap-2">
            <span className="h-[9px] w-[9px] rounded-full bg-gold" />
            Under 30 min
          </span>
          <span className="inline-flex items-center gap-2">
            <span className="h-[9px] w-[9px] rounded-full bg-sage-deep" />
            30 – 60 min
          </span>
        </div>
      </div>

      <div className="grid gap-[18px] sm:grid-cols-2 lg:grid-cols-4">
        {serviceAreasPage.cities.map((city) => {
          const slug = slugForCity(city.name);
          return (
          <Link
            key={city.name}
            href={slug ? `/service-areas/${slug}` : "/services/tree-removal"}
            className="flex flex-col gap-2.5 rounded-[20px] bg-cream p-[26px] transition-colors hover:bg-sand"
          >
            <span className="flex items-center justify-between gap-3">
              <span className="text-[20px] font-bold tracking-[-0.02em] text-ink">
                {city.name}
              </span>
              <span
                className={`h-[9px] w-[9px] shrink-0 rounded-full ${
                  city.tier === "fast" ? "bg-gold" : "bg-sage-deep"
                }`}
              />
            </span>
            <span className="text-[13.5px] text-moss-light">{city.note}</span>
            <span className="text-[13.5px] text-[#46523f]">{city.arrival}</span>
            <span className="text-[13.5px] font-medium text-forest">
              Tree removal in {city.name} →
            </span>
          </Link>
          );
        })}
      </div>
    </section>
  );
}

function AlsoCovered() {
  return (
    <section className={`${GUTTER} py-18 lg:py-21`}>
      <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_400px] lg:gap-16">
        <div>
          <div className="mb-3.5 text-[12.5px] uppercase tracking-[0.16em] text-sage-deep">
            Also covered
          </div>
          <h2 className="mb-4 max-w-[560px] text-[28px] leading-[1.12] font-bold tracking-[-0.03em] text-ink sm:text-[36px]">
            Smaller towns and unincorporated county
          </h2>
          <p className="mb-6 max-w-[560px] text-[16px] leading-[1.64] text-moss">
            Same crews, same pricing. Estimates outside the 30-mile ring are
            still free, we just batch them with other work in that direction.
          </p>
          <ul className="flex flex-wrap gap-2.5">
            {serviceAreasPage.alsoCovered.map((place) => (
              <li
                key={place}
                className="rounded-full bg-sand px-4 py-2.5 text-[14px] text-[#46523f]"
              >
                {place}
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl bg-ink p-8 text-cream">
          <div className="mb-3 text-[12.5px] uppercase tracking-[0.14em] text-sage">
            Not on the list?
          </div>
          <h3 className="mb-2.5 text-[24px] leading-[1.2] font-bold tracking-[-0.025em]">
            Call and ask. We travel for the right job.
          </h3>
          <p className="mb-5.5 text-[15px] leading-[1.6] text-[#b8c7ae]">
            Orchard removals, lot clearing, and multi-tree contracts pull us well
            past the usual radius. One call tells you either way.
          </p>
          <a
            href={business.phoneHref}
            className="mb-2.5 block rounded-full bg-gold px-4 py-4 text-center text-[16px] font-bold text-[#241d0c] hover:bg-gold-dark"
          >
            Call {business.phone}
          </a>
          <Link
            href="/free-estimate"
            className="block rounded-full border-[1.5px] border-[rgba(246,242,232,.4)] px-4 py-4 text-center text-[16px] font-semibold text-cream hover:bg-[rgba(246,242,232,.1)]"
          >
            Send my address
          </Link>
        </div>
      </div>
    </section>
  );
}

function LocalKnowledge() {
  return (
    <section className={`${GUTTER} bg-forest py-18 text-cream lg:py-21`}>
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-[72px]">
        <div>
          <div className="mb-3.5 text-[12.5px] uppercase tracking-[0.16em] text-sage">
            Local knowledge
          </div>
          <h2 className="mb-5 text-[30px] leading-[1.1] font-bold tracking-[-0.03em] sm:text-[36px] lg:text-[40px]">
            We know what grows here and how it fails
          </h2>
          <p className="mb-7 text-[16.5px] leading-[1.66] text-pretty text-sage-pale sm:text-[17.5px]">
            Eighteen years in the same valley means we&apos;ve seen the same
            species fail the same ways. That shows up in faster diagnosis and
            fewer surprises on the invoice.
          </p>
          <ul className="flex flex-col gap-4.5">
            {serviceAreasPage.localKnowledge.map((item) => (
              <li key={item.species} className="flex items-start gap-3.5">
                <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-gold" />
                <span className="text-[15.5px] leading-[1.55] text-[#dfe6da]">
                  <strong className="text-cream">{item.species}</strong> —{" "}
                  {item.body}
                </span>
              </li>
            ))}
          </ul>
        </div>
        <div className="h-[300px] overflow-hidden rounded-3xl sm:h-[380px] lg:h-[460px]">
          <ImagePlaceholder label="Local job photo — crew working a valley property" />
        </div>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section className={`${GUTTER} bg-white py-18 lg:py-21`}>
      <div className="grid gap-10 lg:grid-cols-[360px_minmax(0,1fr)] lg:gap-16">
        <div>
          <div className="mb-3.5 text-[12.5px] uppercase tracking-[0.16em] text-sage-deep">
            Coverage FAQ
          </div>
          <h2 className="mb-4 text-[28px] leading-[1.12] font-bold tracking-[-0.03em] text-ink sm:text-[36px]">
            Before you check coverage twice
          </h2>
          <a
            href={business.phoneHref}
            className="text-[18px] font-bold text-forest hover:underline"
          >
            {business.phone}
          </a>
        </div>
        <div className="flex flex-col gap-3.5">
          {serviceAreasPage.faqs.map((faq) => (
            <div
              key={faq.question}
              className="rounded-[18px] bg-cream px-6 py-[26px] sm:px-[30px]"
            >
              <h3 className="mb-2 text-[18px] font-bold tracking-[-0.02em] text-ink">
                {faq.question}
              </h3>
              <p className="text-[15.5px] leading-[1.64] text-moss">
                {faq.answer}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className={`${GUTTER} py-16 lg:py-18`}>
      <div className="flex flex-col items-start justify-between gap-8 rounded-[28px] bg-ink px-7 py-12 text-cream sm:px-10 lg:flex-row lg:items-center lg:px-14 lg:py-14">
        <div>
          <h2 className="mb-2.5 text-[30px] leading-[1.1] font-bold tracking-[-0.03em] sm:text-[38px]">
            Find your city on the list?
          </h2>
          <p className="text-[16.5px] text-[#b8c7ae] sm:text-[17.5px]">
            Free written estimate, same day in most cases. Emergencies dispatch
            immediately.
          </p>
        </div>
        <div className="flex shrink-0 flex-col gap-3.5 sm:flex-row">
          <a
            href={business.phoneHref}
            className="rounded-full bg-gold px-8 py-4 text-center text-[16.5px] font-bold text-[#241d0c] hover:bg-gold-dark"
          >
            Call {business.phone}
          </a>
          <Link
            href="/free-estimate"
            className="rounded-full border-[1.5px] border-[rgba(246,242,232,.4)] px-8 py-4 text-center text-[16.5px] font-semibold text-cream hover:bg-[rgba(246,242,232,.1)]"
          >
            Free estimate
          </Link>
        </div>
      </div>
    </section>
  );
}

function PinIcon() {
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
      aria-hidden
    >
      <path d="M12 21s7-5.5 7-11a7 7 0 10-14 0c0 5.5 7 11 7 11z" />
      <circle cx="12" cy="10" r="2.6" />
    </svg>
  );
}

function ClockIcon() {
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
      aria-hidden
    >
      <circle cx="12" cy="12" r="8.5" />
      <path d="M12 7.2V12l3 1.9" />
    </svg>
  );
}
