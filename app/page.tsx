import type { Metadata } from "next";
import Link from "next/link";
import { ImagePlaceholder } from "./components/image-placeholder";
import { SiteFooter } from "./components/site-footer";
import { canonical } from "./seo";
import { SiteHeader } from "./components/site-header";
import {
  business,
  faqs,
  layout,
  processSteps,
  serviceAreas,
  services,
  stats,
  trustCards,
} from "./site-content";

const GUTTER = "px-5 sm:px-8 lg:px-14";

export const metadata: Metadata = canonical("/");

export default function Home() {
  return (
    <div id="top" className="flex flex-1 flex-col bg-cream">
      <SiteHeader />
      <main className="flex-1">
        <Hero />
        {layout.showQuoteForm && <QuoteBar />}
        <TrustCards />
        <Services />
        <WhyUs />
        <Process />
        <Gallery />
        <ServiceAreas />
        <Faq />
        <FinalCta />
      </main>
      <SiteFooter />
    </div>
  );
}

function Hero() {
  return (
    <section
      className={`${GUTTER} grid items-center gap-10 pb-6 pt-10 lg:grid-cols-[minmax(0,560px)_minmax(0,1fr)] lg:gap-14 lg:pt-12`}
    >
      <div>
        <div className="mb-6 flex flex-wrap items-center gap-2.5">
          <span className="inline-flex items-center gap-2.5 rounded-full border border-rust-line bg-rust-tint py-[7px] pl-3 pr-[15px] text-[13px] font-medium text-rust-ink">
            <span className="h-2 w-2 animate-pulse-ring rounded-full bg-rust" />
            Crews on call now — 24/7
          </span>
          <span className="inline-flex items-center gap-2 rounded-full bg-sand px-[15px] py-[7px] text-[13px] text-[#46523f]">
            <span className="tracking-[1px] text-gold">★★★★★</span>
            <span className="font-semibold text-ink">4.9</span> · 214 reviews
          </span>
        </div>

        <h1 className="mb-5 text-[38px] leading-[1.04] font-bold tracking-[-0.038em] text-balance text-ink sm:text-[48px] lg:text-[62px] lg:leading-[1.02]">
          Tree Removal in Yuba City, CA
        </h1>

        <p className="mb-7 max-w-[500px] text-[17px] leading-[1.6] text-pretty text-[#4d5947] sm:text-[18.5px]">
          Removals, trimming, stump grinding, and storm response across Yuba City
          and the valley. A licensed arborist assesses the tree before a saw
          leaves the truck.
        </p>

        <div className="mb-7 flex flex-col gap-3 sm:flex-row">
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
            <ShieldIcon />
            Licensed &amp; insured
          </li>
          <li className="flex items-center gap-2">
            <ClockIcon />
            Under 1 hr storm response
          </li>
          <li className="flex items-center gap-2">
            <BadgeIcon />
            ISA Certified
          </li>
        </ul>
      </div>

      <div className="relative h-[340px] overflow-hidden rounded-[28px] sm:h-[440px] lg:h-[552px]">
        <ImagePlaceholder label="Hero photo — climber in a large tree, wide shot" />
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute left-[22px] top-[22px] inline-flex items-center gap-2.5 rounded-full bg-[rgba(28,38,26,.86)] px-[15px] py-2 text-[12.5px] font-medium text-cream">
            <span className="h-[7px] w-[7px] rounded-full bg-gold" />
            On-site arborist assessment
          </div>
          <div className="absolute left-[56%] top-[20%] hidden items-center gap-2.5 sm:flex">
            <span className="h-[13px] w-[13px] shrink-0 rounded-full border-[3px] border-cream bg-gold" />
            <span className="whitespace-nowrap rounded-[10px] bg-cream px-3 py-[7px] text-[12.5px] font-medium text-ink">
              Palm removal over a pool deck
            </span>
          </div>
          <div className="absolute left-[8%] top-[66%] hidden items-center gap-2.5 sm:flex">
            <span className="h-[13px] w-[13px] shrink-0 rounded-full border-[3px] border-cream bg-rust" />
            <span className="whitespace-nowrap rounded-[10px] bg-cream px-3 py-[7px] text-[12.5px] font-medium text-ink">
              Rigged and lowered — no drop zone
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

function QuoteBar() {
  const fieldClass =
    "w-full min-w-0 rounded-xl bg-cream px-4 py-3 text-[14.5px] text-ink placeholder:text-muted focus:outline-2 focus:outline-offset-2 focus:outline-forest";

  return (
    <div id="estimate" className={`${GUTTER} scroll-mt-6 pb-16 pt-6`}>
      {/* TODO: wire to a lead-capture endpoint — this form does not submit anywhere yet. */}
      <form className="grid items-center gap-3.5 rounded-[22px] bg-sand p-5 sm:p-[26px] lg:grid-cols-[auto_minmax(0,1fr)_minmax(0,1fr)_minmax(0,0.8fr)_auto]">
        <div className="lg:pr-2">
          <div className="text-[17px] font-bold tracking-[-0.02em] text-ink">
            Rather have it in writing?
          </div>
          <div className="text-[13px] text-moss-light">
            Free estimate, usually same day.
          </div>
        </div>
        <input
          name="name"
          type="text"
          aria-label="Your name"
          placeholder="Name"
          className={fieldClass}
        />
        <input
          name="phone"
          type="tel"
          aria-label="Your phone number"
          placeholder="Phone"
          className={fieldClass}
        />
        <select
          name="service"
          aria-label="Service needed"
          defaultValue=""
          className={`${fieldClass} appearance-none`}
        >
          <option value="" disabled>
            Service
          </option>
          {services.map((service) => (
            <option key={service.title} value={service.title}>
              {service.title}
            </option>
          ))}
        </select>
        <button
          type="submit"
          className="whitespace-nowrap rounded-full bg-gold px-7 py-3.5 text-[15px] font-bold text-[#241d0c] hover:bg-gold-dark"
        >
          Get my estimate
        </button>
      </form>
    </div>
  );
}

function TrustCards() {
  return (
    <div className={`${GUTTER} pb-20`}>
      <div className="grid gap-[18px] sm:grid-cols-2 lg:grid-cols-4">
        {trustCards.map((card) => (
          <div key={card.title} className="rounded-[18px] bg-sand p-[26px]">
            <div className="mb-1.5 text-[17px] font-bold text-ink">{card.title}</div>
            <div className="text-[13.5px] leading-[1.55] text-moss-light">
              {card.body}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Services() {
  return (
    <section id="services" className={`${GUTTER} scroll-mt-4 bg-white py-20 lg:py-22`}>
      <div className="mb-11 text-center">
        <div className="mb-3.5 text-[12.5px] uppercase tracking-[0.16em] text-sage-deep">
          Services
        </div>
        <h2 className="mx-auto max-w-[700px] text-[32px] leading-[1.1] font-bold tracking-[-0.03em] text-ink sm:text-[38px] lg:text-[44px]">
          Everything a tree needs, from one licensed crew
        </h2>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service) => {
          const card = (
            <>
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-forest text-[14px] font-semibold text-cream">
                {service.number}
              </div>
              <div className="mb-2.5 text-[20px] font-bold tracking-[-0.02em] text-ink">
                {service.title}
              </div>
              <p className="text-[15px] leading-[1.62] text-moss">
                {service.body}
              </p>
            </>
          );
          const className =
            "block rounded-[22px] bg-cream p-8 transition-colors hover:bg-sand";

          return service.href ? (
            <Link key={service.number} href={service.href} className={className}>
              {card}
            </Link>
          ) : (
            <div key={service.number} className={className}>
              {card}
            </div>
          );
        })}
      </div>
    </section>
  );
}

function WhyUs() {
  return (
    <section
      id="why-us"
      className={`${GUTTER} scroll-mt-4 bg-forest py-20 text-cream lg:py-22`}
    >
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-[72px]">
        <div className="h-[300px] overflow-hidden rounded-3xl sm:h-[380px] lg:h-[440px]">
          <ImagePlaceholder label="Arborist climbing — canopy shot" />
        </div>
        <div>
          <div className="mb-3.5 text-[12.5px] uppercase tracking-[0.16em] text-sage">
            Why us
          </div>
          <h2 className="mb-5 text-[32px] leading-[1.1] font-bold tracking-[-0.03em] sm:text-[38px] lg:text-[42px]">
            A certified arborist runs the job, not just the sales call
          </h2>
          <p className="mb-8 text-[16.5px] leading-[1.66] text-pretty text-sage-pale sm:text-[17.5px]">
            Plenty of outfits bid a removal from the curb. We put a credentialed
            arborist on site to read the tree, the target zone, and the rigging
            plan before a saw leaves the truck. That&apos;s how a 90-foot valley
            oak comes down over a pool deck without a scratch.
          </p>
          <div className="grid grid-cols-2 gap-6 lg:gap-x-10">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-[28px] font-bold text-gold sm:text-[34px]">
                  {stat.value}
                </div>
                <div className="text-[14.5px] text-sage">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function Process() {
  return (
    <section id="process" className={`${GUTTER} scroll-mt-4 py-20 lg:py-22`}>
      <div className="mb-11 text-center">
        <div className="mb-3.5 text-[12.5px] uppercase tracking-[0.16em] text-sage-deep">
          Process
        </div>
        <h2 className="text-[32px] leading-[1.1] font-bold tracking-[-0.03em] text-ink sm:text-[38px] lg:text-[42px]">
          Four steps from first call to a clean yard
        </h2>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {processSteps.map((item) => (
          <div key={item.step} className="rounded-[20px] bg-white p-[30px]">
            <div className="mb-3.5 text-[15px] font-bold text-gold">{item.step}</div>
            <div className="mb-2.5 text-[19px] font-bold tracking-[-0.02em] text-ink">
              {item.title}
            </div>
            <p className="text-[14.5px] leading-[1.6] text-moss">{item.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Gallery() {
  return (
    <section id="gallery" className={`${GUTTER} scroll-mt-4 pb-20 lg:pb-22`}>
      <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
        <h2 className="text-[28px] font-bold tracking-[-0.03em] text-ink sm:text-[36px]">
          Before and after, around town
        </h2>
        <a href="#" className="text-[15px] font-medium text-forest hover:underline">
          Full gallery →
        </a>
      </div>
      <div className="grid grid-cols-2 gap-[18px] lg:grid-cols-[1.4fr_1fr_1fr] lg:grid-rows-[200px_200px]">
        <div className="col-span-2 h-[220px] overflow-hidden rounded-[22px] lg:col-span-1 lg:row-span-2 lg:h-auto">
          <ImagePlaceholder label="Feature photo — crane removal" />
        </div>
        <div className="h-[150px] overflow-hidden rounded-[22px] lg:h-auto">
          <ImagePlaceholder label="Before — leaning oak" />
        </div>
        <div className="h-[150px] overflow-hidden rounded-[22px] lg:h-auto">
          <ImagePlaceholder label="After — cleared yard" />
        </div>
        <div className="h-[150px] overflow-hidden rounded-[22px] lg:h-auto">
          <ImagePlaceholder label="Storm damage cleanup" />
        </div>
        <div className="h-[150px] overflow-hidden rounded-[22px] lg:h-auto">
          <ImagePlaceholder label="Stump grinding finish" />
        </div>
      </div>
    </section>
  );
}

function ServiceAreas() {
  return (
    <section id="areas" className={`${GUTTER} scroll-mt-4 pb-20 lg:pb-22`}>
      <div className="grid items-center gap-10 rounded-[28px] bg-sand p-7 sm:p-10 lg:grid-cols-2 lg:gap-14 lg:p-13">
        <div>
          <div className="mb-3.5 text-[12.5px] uppercase tracking-[0.16em] text-sage-deep">
            Service area
          </div>
          <h2 className="mb-4 text-[28px] leading-[1.14] font-bold tracking-[-0.03em] text-ink sm:text-[36px]">
            Based in Yuba City, working the whole valley
          </h2>
          <p className="mb-6 text-[16px] leading-[1.64] text-moss">
            Free estimates within 30 miles. Emergency crews reach most Yuba and
            Sutter County addresses in under an hour.
          </p>
          <div className="flex flex-wrap gap-2">
            {serviceAreas.map((area) => (
              <span
                key={area}
                className="rounded-full bg-cream px-4 py-2 text-[14px] text-ink"
              >
                {area}
              </span>
            ))}
          </div>
          <Link
            href="/service-areas"
            className="mt-6 inline-block text-[15px] font-medium text-forest hover:underline"
          >
            See all service areas →
          </Link>
        </div>
        <div className="h-[260px] overflow-hidden rounded-[20px] lg:h-[340px]">
          <ImagePlaceholder label="Service area map — Yuba & Sutter County" />
        </div>
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section id="faq" className={`${GUTTER} scroll-mt-4 bg-white py-20 lg:py-22`}>
      <div className="mb-10 text-center">
        <div className="mb-3.5 text-[12.5px] uppercase tracking-[0.16em] text-sage-deep">
          FAQ
        </div>
        <h2 className="text-[32px] leading-[1.1] font-bold tracking-[-0.03em] text-ink sm:text-[38px] lg:text-[42px]">
          Straight answers before you book
        </h2>
      </div>
      <div className="mx-auto flex max-w-[900px] flex-col gap-3.5">
        {faqs.map((faq) => (
          <div
            key={faq.question}
            className="rounded-[18px] bg-cream px-6 py-[26px] sm:px-[30px]"
          >
            <h3 className="mb-2 text-[18px] font-bold tracking-[-0.02em] text-ink">
              {faq.question}
            </h3>
            <p className="text-[15.5px] leading-[1.64] text-moss">{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function FinalCta() {
  return (
    <section className={`${GUTTER} py-16 lg:py-18`}>
      <div className="rounded-[28px] bg-ink px-6 py-14 text-center text-cream sm:px-10 lg:px-15 lg:py-[62px]">
        <h2 className="mb-3.5 text-[32px] leading-[1.1] font-bold tracking-[-0.03em] sm:text-[38px] lg:text-[42px]">
          Got a tree you&apos;re worried about?
        </h2>
        <p className="mb-7 text-[17px] text-[#b8c7ae] sm:text-[18px]">
          Free estimate, same-day emergency dispatch, no pressure.
        </p>
        <div className="flex flex-col justify-center gap-3.5 sm:flex-row">
          <a
            href={business.phoneHref}
            className="rounded-full bg-gold px-8 py-4 text-[16.5px] font-bold text-[#241d0c] hover:bg-gold-dark"
          >
            Call {business.phone}
          </a>
          <Link
            href="/free-estimate"
            className="rounded-full border-[1.5px] border-[rgba(246,242,232,.4)] px-8 py-4 text-[16.5px] font-semibold text-cream hover:bg-[rgba(246,242,232,.1)]"
          >
            Request Estimate
          </Link>
        </div>
      </div>
    </section>
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
      aria-hidden
    >
      <path d="M12 3l7 3v6c0 4.6-3 7.7-7 9-4-1.3-7-4.4-7-9V6l7-3z" />
      <path d="M9.2 12.2l2 2 3.6-3.8" />
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
      aria-hidden
    >
      <circle cx="12" cy="9" r="5" />
      <path d="M8.4 13.3L7 21l5-2.4L17 21l-1.4-7.7" />
    </svg>
  );
}
