import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ImagePlaceholder } from "../../components/image-placeholder";
import { SiteFooter } from "../../components/site-footer";
import { SiteHeader } from "../../components/site-header";
import { business } from "../../site-content";
import { servicePages } from "../../services/services-data";
import { areaPages, slugForCity, type AreaPage } from "../areas-data";

const GUTTER = "px-5 sm:px-8 lg:px-14";

const removalPricing = servicePages["tree-removal"].pricing!.rows;

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return Object.keys(areaPages).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const area = areaPages[slug];
  if (!area) return {};

  return {
    title: `Tree Removal in ${area.city}, ${area.state} | ${business.name}`,
    description: area.intro,
  };
}

export default async function AreaPageRoute({ params }: PageProps) {
  const { slug } = await params;
  const area = areaPages[slug];
  if (!area) notFound();

  return (
    <div className="flex flex-1 flex-col bg-cream">
      <SiteHeader
        bannerPrefix={area.bannerPrefix}
        bannerSuffix=", answered 24/7."
        pulseBanner
        activeLabel="Service Areas"
      />

      <main className="flex-1">
        <Hero area={area} />
        <LocalConditions area={area} />
        <Services area={area} />
        <Permits area={area} />
        <Gallery area={area} />
        <Faq area={area} />
        <FinalCta area={area} />
        <NearbyAreas area={area} />
      </main>

      <SiteFooter />
    </div>
  );
}

function Hero({ area }: { area: AreaPage }) {
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
        <Link href="/service-areas" className="hover:text-ink">
          Service Areas
        </Link>
        <span>/</span>
        <span className="text-ink">{area.city}</span>
      </nav>

      <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_520px] lg:gap-14">
        <div>
          <div className="mb-5 inline-flex items-center gap-2.5 rounded-full bg-sand px-4 py-2 text-[13px] text-[#46523f]">
            <span className="h-2 w-2 shrink-0 rounded-full bg-gold" />
            {area.responseBadge}
          </div>

          <h1 className="mb-4 text-[36px] leading-[1.04] font-bold tracking-[-0.038em] text-balance text-ink sm:text-[46px] lg:text-[56px] lg:leading-[1.02]">
            Tree removal in {area.city}, {area.state}
          </h1>
          <p className="mb-7 max-w-[520px] text-[17px] leading-[1.6] text-pretty text-[#4d5947] sm:text-[18px]">
            {area.intro}
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
              <ShieldIcon />
              Licensed &amp; insured
            </li>
            <li className="flex items-center gap-2">
              <BadgeIcon />
              ISA Certified
            </li>
            <li className="flex items-center gap-2">
              <span className="text-[13px] tracking-[1px] text-gold">★★★★★</span>
              {area.reviewNote}
            </li>
          </ul>
        </div>

        <div className="flex flex-col gap-3.5">
          <div className="h-[280px] overflow-hidden rounded-3xl bg-sand sm:h-[360px] lg:h-[400px]">
            <ImagePlaceholder label={area.heroPhoto} />
          </div>
          <div className="grid grid-cols-3 gap-3.5">
            {area.stats.map((stat) => (
              <div key={stat.label} className="rounded-[18px] bg-sand px-5 py-4.5">
                <div className="text-[22px] font-bold tracking-[-0.03em] text-ink sm:text-[26px]">
                  {stat.value}
                </div>
                <div className="mt-1 text-[12.5px] text-moss-light">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function LocalConditions({ area }: { area: AreaPage }) {
  return (
    <section className={`${GUTTER} bg-white py-18 lg:py-21`}>
      <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-[72px]">
        <div>
          <div className="mb-3.5 text-[12.5px] uppercase tracking-[0.16em] text-sage-deep">
            {area.local.eyebrow}
          </div>
          <h2 className="mb-5 text-[30px] leading-[1.1] font-bold tracking-[-0.03em] text-ink sm:text-[36px] lg:text-[40px]">
            {area.local.heading}
          </h2>
          <p className="mb-7 text-[16.5px] leading-[1.64] text-moss">
            {area.local.intro}
          </p>
          <ul className="flex flex-col gap-3.5">
            {area.local.bullets.map((bullet) => (
              <li key={bullet.label} className="flex items-start gap-3">
                <span
                  className={`mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full ${bullet.dot}`}
                />
                <span className="text-[15.5px] leading-[1.55] text-[#46523f]">
                  <strong className="text-ink">{bullet.label}</strong> —{" "}
                  {bullet.body}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl bg-cream p-7 sm:p-9">
          <h2 className="mb-2 text-[24px] font-bold tracking-[-0.025em] text-ink sm:text-[26px]">
            {area.city} pricing
          </h2>
          <p className="mb-6 text-[15px] leading-[1.6] text-moss">
            {area.pricingIntro}
          </p>
          <dl className="flex flex-col">
            {removalPricing.map((row, index) => (
              <div
                key={row.label}
                className={`flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 py-4 ${
                  index < removalPricing.length - 1
                    ? "border-b border-line"
                    : ""
                }`}
              >
                <dt className="text-[15.5px] text-[#46523f]">{row.label}</dt>
                <dd className="text-[17px] font-bold text-ink">{row.price}</dd>
              </div>
            ))}
          </dl>
          <Link
            href="/free-estimate"
            className="mt-5.5 block rounded-full bg-forest px-6 py-4 text-center text-[16px] font-semibold text-cream hover:bg-ink"
          >
            Price my tree
          </Link>
        </div>
      </div>
    </section>
  );
}

function Services({ area }: { area: AreaPage }) {
  const cardClass = "rounded-[20px] bg-white p-7";

  return (
    <section className={`${GUTTER} py-18 lg:py-21`}>
      <div className="mb-3.5 text-[12.5px] uppercase tracking-[0.16em] text-sage-deep">
        Services in {area.city}
      </div>
      <h2 className="mb-9 max-w-[620px] text-[30px] leading-[1.1] font-bold tracking-[-0.03em] text-ink sm:text-[36px] lg:text-[40px]">
        Same crews, same pricing as Yuba City
      </h2>
      <div className="grid gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
        {area.services.map((service) => {
          const body = (
            <>
              <h3 className="mb-2.5 text-[19px] font-bold tracking-[-0.02em] text-ink">
                {service.title}
              </h3>
              <p className="text-[14.5px] leading-[1.6] text-moss">
                {service.body}
              </p>
            </>
          );

          return service.href ? (
            <Link
              key={service.title}
              href={service.href}
              className={`${cardClass} block transition-colors hover:bg-sand`}
            >
              {body}
              <span className="mt-3 inline-block text-[13.5px] font-medium text-forest">
                See details →
              </span>
            </Link>
          ) : (
            <div key={service.title} className={cardClass}>
              {body}
            </div>
          );
        })}
      </div>
    </section>
  );
}

function Permits({ area }: { area: AreaPage }) {
  return (
    <section className={`${GUTTER} bg-forest py-18 text-cream lg:py-21`}>
      <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-[72px]">
        <div>
          <div className="mb-3.5 text-[12.5px] uppercase tracking-[0.16em] text-sage">
            Permits in {area.city}
          </div>
          <h2 className="mb-5 text-[30px] leading-[1.1] font-bold tracking-[-0.03em] sm:text-[36px] lg:text-[40px]">
            {area.permits.heading}
          </h2>
          <p className="mb-7 text-[16.5px] leading-[1.66] text-pretty text-sage-pale sm:text-[17.5px]">
            {area.permits.intro}
          </p>
          <ul className="flex flex-col gap-4.5">
            {area.permits.bullets.map((bullet) => (
              <li key={bullet.label} className="flex items-start gap-3.5">
                <span className="mt-1.5 h-2.5 w-2.5 shrink-0 rounded-full bg-gold" />
                <span className="text-[15.5px] leading-[1.55] text-[#dfe6da]">
                  <strong className="text-cream">{bullet.label}</strong> —{" "}
                  {bullet.body}
                </span>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-3xl bg-[rgba(246,242,232,.08)] p-7 sm:p-9">
          <div className="mb-4 text-[12.5px] uppercase tracking-[0.14em] text-sage">
            Neighborhoods we work
          </div>
          <ul className="mb-7 flex flex-wrap gap-2.5">
            {area.neighborhoods.map((hood) => (
              <li
                key={hood}
                className="rounded-full bg-[rgba(246,242,232,.12)] px-4 py-2.5 text-[14px] text-[#dfe6da]"
              >
                {hood}
              </li>
            ))}
          </ul>
          <figure className="m-0 border-t border-[rgba(246,242,232,.2)] pt-6">
            <div className="mb-3 text-[14px] tracking-[2px] text-gold">
              ★★★★★
            </div>
            <blockquote className="m-0 text-[16px] leading-[1.55] font-medium text-pretty">
              &ldquo;{area.testimonial.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-3 text-[13.5px] text-sage">
              {area.testimonial.author}
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}

function Gallery({ area }: { area: AreaPage }) {
  return (
    <section className={`${GUTTER} py-18 lg:py-21`}>
      <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
        <h2 className="text-[28px] font-bold tracking-[-0.03em] text-ink sm:text-[36px]">
          Recent {area.city} jobs
        </h2>
        <Link
          href="/#gallery"
          className="text-[15px] font-medium text-forest hover:underline"
        >
          Full gallery →
        </Link>
      </div>
      <div className="grid gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
        {area.gallery.map((label, index) => (
          <div
            key={label}
            className={`h-[220px] overflow-hidden rounded-[22px] sm:h-[260px] ${
              index === 2 ? "sm:col-span-2 lg:col-span-1" : ""
            }`}
          >
            <ImagePlaceholder label={label} />
          </div>
        ))}
      </div>
    </section>
  );
}

function Faq({ area }: { area: AreaPage }) {
  return (
    <section className={`${GUTTER} bg-white py-18 lg:py-21`}>
      <div className="grid gap-10 lg:grid-cols-[360px_minmax(0,1fr)] lg:gap-16">
        <div>
          <div className="mb-3.5 text-[12.5px] uppercase tracking-[0.16em] text-sage-deep">
            {area.city} FAQ
          </div>
          <h2 className="mb-4 text-[28px] leading-[1.12] font-bold tracking-[-0.03em] text-ink sm:text-[36px]">
            Local questions, local answers
          </h2>
          <a
            href={business.phoneHref}
            className="text-[18px] font-bold text-forest hover:underline"
          >
            {business.phone}
          </a>
        </div>
        <div className="flex flex-col gap-3.5">
          {area.faqs.map((faq) => (
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

function FinalCta({ area }: { area: AreaPage }) {
  return (
    <section className={`${GUTTER} py-16 lg:py-18`}>
      <div className="flex flex-col items-start justify-between gap-8 rounded-[28px] bg-ink px-7 py-12 text-cream sm:px-10 lg:flex-row lg:items-center lg:px-14 lg:py-14">
        <div>
          <h2 className="mb-2.5 text-[30px] leading-[1.1] font-bold tracking-[-0.03em] sm:text-[38px]">
            {area.ctaHeading}
          </h2>
          <p className="text-[16.5px] text-[#b8c7ae] sm:text-[17.5px]">
            Free written estimate, usually same day. Emergencies dispatch
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

function NearbyAreas({ area }: { area: AreaPage }) {
  return (
    <section className={`${GUTTER} pb-14`}>
      <div className="mb-4 text-[12.5px] uppercase tracking-[0.16em] text-sage-deep">
        Nearby areas
      </div>
      <ul className="flex flex-wrap gap-2.5">
        {area.nearby.map((city) => {
          const slug = slugForCity(city);
          return (
            <li key={city}>
              {slug ? (
                <Link
                  href={`/service-areas/${slug}`}
                  className="block rounded-full bg-sand px-4 py-2.5 text-[14px] text-[#46523f] hover:bg-line"
                >
                  {city}
                </Link>
              ) : (
                <span className="block rounded-full bg-sand px-4 py-2.5 text-[14px] text-[#46523f]">
                  {city}
                </span>
              )}
            </li>
          );
        })}
        <li>
          <Link
            href="/service-areas"
            className="block rounded-full bg-forest px-4 py-2.5 text-[14px] font-medium text-cream hover:bg-ink"
          >
            All service areas →
          </Link>
        </li>
      </ul>
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
