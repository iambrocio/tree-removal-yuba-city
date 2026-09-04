import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SitePhoto } from "../../components/site-photo";
import { SiteFooter } from "../../components/site-footer";
import { SiteHeader } from "../../components/site-header";
import { pageMeta } from "../../seo";
import { business } from "../../site-content";
import { servicePages, type ServicePage } from "../services-data";

const GUTTER = "px-5 sm:px-8 lg:px-14";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return Object.keys(servicePages).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const service = servicePages[slug];
  if (!service) return {};

  return pageMeta(
    `/services/${slug}`,
    service.metaTitle ?? `${service.name} in Yuba City | ${business.name}`,
    service.intro,
  );
}

export default async function ServicePageRoute({ params }: PageProps) {
  const { slug } = await params;
  const service = servicePages[slug];
  if (!service) notFound();

  return (
    <div className="flex flex-1 flex-col bg-cream">
      <SiteHeader
        bannerPrefix={service.bannerPrefix}
        bannerSuffix=", answered 24/7."
        activeLabel="Services"
      />

      <main className="flex-1">
        <Hero service={service} />
        <Triage service={service} />
        <Inclusions service={service} />
        <Timeline service={service} />
        <Gallery service={service} />
        <Faq service={service} />
        <FinalCta service={service} />
      </main>

      <SiteFooter />
    </div>
  );
}

function Hero({ service }: { service: ServicePage }) {
  return (
    <section
      className={`${GUTTER} grid items-center gap-10 pb-6 pt-8 lg:grid-cols-[minmax(0,560px)_minmax(0,1fr)] lg:gap-14`}
    >
      <div>
        <nav
          aria-label="Breadcrumb"
          className="mb-5 flex flex-wrap items-center gap-2 text-[13.5px] text-[#7d8676]"
        >
          <Link href="/" className="hover:text-ink">
            Home
          </Link>
          <span>/</span>
          <Link href="/#services" className="hover:text-ink">
            Services
          </Link>
          <span>/</span>
          <span className="text-ink">{service.name}</span>
        </nav>

        <h1 className="mb-4 text-[38px] leading-[1.04] font-bold tracking-[-0.038em] text-balance text-ink sm:text-[46px] lg:text-[58px] lg:leading-[1.02]">
          {service.title}
        </h1>
        <p className="mb-6 max-w-[510px] text-[17px] leading-[1.6] text-pretty text-[#4d5947] sm:text-[18.5px]">
          {service.intro}
        </p>

        {service.priceBand && (
          <div className="mb-6 inline-flex flex-wrap items-baseline gap-2.5 rounded-[14px] bg-sand px-4.5 py-3">
            <span className="text-[13.5px] text-moss-light">
              {service.priceBand.prefix}
            </span>
            <span className="text-[20px] font-bold tracking-[-0.02em] text-ink">
              {service.priceBand.range}
            </span>
            <span className="text-[13.5px] text-moss-light">
              {service.priceBand.suffix}
            </span>
          </div>
        )}

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
          {service.trust.map((item) => (
            <li key={item.label} className="flex items-center gap-2">
              <TrustIcon icon={item.icon} />
              {item.label}
            </li>
          ))}
        </ul>
      </div>

      <div className="relative h-[340px] overflow-hidden rounded-[28px] sm:h-[440px] lg:h-[560px]">
        <SitePhoto
          photo={service.heroPhoto}
          sizes="(min-width: 1024px) 50vw, 100vw"
          priority
        />
      </div>
    </section>
  );
}

function Triage({ service }: { service: ServicePage }) {
  return (
    <section className={`${GUTTER} bg-white py-18 lg:py-21`}>
      <div
        className={`grid items-start gap-10 lg:gap-[72px] ${
          service.pricing ? "lg:grid-cols-2" : ""
        }`}
      >
        <div className={service.pricing ? "" : "max-w-[760px]"}>
          <div className="mb-3.5 text-[12.5px] uppercase tracking-[0.16em] text-sage-deep">
            {service.triage.eyebrow}
          </div>
          <h2 className="mb-5 text-[30px] leading-[1.1] font-bold tracking-[-0.03em] text-ink sm:text-[36px] lg:text-[40px]">
            {service.triage.heading}
          </h2>
          <p className="mb-7 text-[16.5px] leading-[1.64] text-moss">
            {service.triage.intro}
          </p>
          <ul className="flex flex-col gap-3.5">
            {service.triage.bullets.map((bullet) => (
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

        {service.pricing && (
          <div className="rounded-3xl bg-cream p-7 sm:p-9">
            <h3 className="mb-2 text-[24px] font-bold tracking-[-0.025em] text-ink sm:text-[26px]">
              {service.pricing.heading}
            </h3>
            <p className="mb-6 text-[15px] leading-[1.6] text-moss">
              {service.pricing.intro}
            </p>
            <dl className="flex flex-col">
              {service.pricing.rows.map((row, index) => (
                <div
                  key={row.label}
                  className={`flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1 py-4 ${
                    index < service.pricing!.rows.length - 1
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
        )}
      </div>
    </section>
  );
}

function Inclusions({ service }: { service: ServicePage }) {
  return (
    <section className={`${GUTTER} py-18 lg:py-21`}>
      <div className="mb-3.5 text-[12.5px] uppercase tracking-[0.16em] text-sage-deep">
        {service.inclusions.eyebrow}
      </div>
      <h2 className="mb-9 max-w-[620px] text-[30px] leading-[1.1] font-bold tracking-[-0.03em] text-ink sm:text-[36px] lg:text-[40px]">
        {service.inclusions.heading}
      </h2>
      <div className="grid gap-[18px] sm:grid-cols-2 lg:grid-cols-4">
        {service.inclusions.items.map((item) => (
          <div key={item.title} className="rounded-[20px] bg-white p-7">
            <h3 className="mb-2.5 text-[18px] font-bold tracking-[-0.02em] text-ink">
              {item.title}
            </h3>
            <p className="text-[14.5px] leading-[1.6] text-moss">{item.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Timeline({ service }: { service: ServicePage }) {
  return (
    <section className={`${GUTTER} bg-forest py-18 text-cream lg:py-21`}>
      <div className="mb-3.5 text-[12.5px] uppercase tracking-[0.16em] text-sage">
        {service.timeline.eyebrow}
      </div>
      <h2 className="mb-10 max-w-[620px] text-[30px] leading-[1.1] font-bold tracking-[-0.03em] sm:text-[36px] lg:text-[40px]">
        {service.timeline.heading}
      </h2>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {service.timeline.steps.map((item) => (
          <div
            key={item.time}
            className="border-t-2 border-[rgba(246,242,232,.25)] pt-5"
          >
            <div className="mb-3 text-[14px] font-bold text-gold">
              {item.time}
            </div>
            <h3 className="mb-2 text-[18px] font-bold tracking-[-0.02em]">
              {item.title}
            </h3>
            <p className="text-[14.5px] leading-[1.6] text-sage-pale">
              {item.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

function Gallery({ service }: { service: ServicePage }) {
  return (
    <section className={`${GUTTER} py-18 lg:py-21`}>
      <div className="mb-7 flex flex-wrap items-end justify-between gap-4">
        <h2 className="text-[28px] font-bold tracking-[-0.03em] text-ink sm:text-[36px]">
          {service.gallery.heading}
        </h2>
        <Link
          href="/#gallery"
          className="text-[15px] font-medium text-forest hover:underline"
        >
          Full gallery →
        </Link>
      </div>
      <div className="grid gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
        {service.gallery.photos.map((photo, index) => (
          <div
            key={photo.src.src}
            className={`relative aspect-[4/3] overflow-hidden rounded-[22px] sm:aspect-auto sm:h-[260px] ${
              index === 2 ? "sm:col-span-2 lg:col-span-1" : ""
            }`}
          >
            <SitePhoto
              photo={photo}
              sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

function Faq({ service }: { service: ServicePage }) {
  return (
    <section className={`${GUTTER} bg-white py-18 lg:py-21`}>
      <div className="grid gap-10 lg:grid-cols-[360px_minmax(0,1fr)] lg:gap-16">
        <div>
          <div className="mb-3.5 text-[12.5px] uppercase tracking-[0.16em] text-sage-deep">
            {service.name} FAQ
          </div>
          <h2 className="mb-4 text-[30px] leading-[1.12] font-bold tracking-[-0.03em] text-ink sm:text-[36px]">
            The questions we get on every call
          </h2>
          <a
            href={business.phoneHref}
            className="text-[18px] font-bold text-forest hover:underline"
          >
            {business.phone}
          </a>
        </div>
        <div className="flex flex-col gap-3.5">
          {service.faqs.map((faq) => (
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

function FinalCta({ service }: { service: ServicePage }) {
  return (
    <section className={`${GUTTER} py-16 lg:py-18`}>
      <div className="flex flex-col items-start justify-between gap-8 rounded-[28px] bg-ink px-7 py-12 text-cream sm:px-10 lg:flex-row lg:items-center lg:px-14 lg:py-14">
        <div>
          <h2 className="mb-2.5 text-[30px] leading-[1.1] font-bold tracking-[-0.03em] sm:text-[38px]">
            {service.cta.heading}
          </h2>
          <p className="text-[16.5px] text-[#b8c7ae] sm:text-[17.5px]">
            {service.cta.body}
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

function TrustIcon({ icon }: { icon: "shield" | "clock" | "badge" | "stars" }) {
  if (icon === "stars") {
    return <span className="text-[13px] tracking-[1px] text-gold">★★★★★</span>;
  }

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
      {icon === "shield" ? (
        <>
          <path d="M12 3l7 3v6c0 4.6-3 7.7-7 9-4-1.3-7-4.4-7-9V6l7-3z" />
          <path d="M9.2 12.2l2 2 3.6-3.8" />
        </>
      ) : icon === "badge" ? (
        <>
          <circle cx="12" cy="9" r="5" />
          <path d="M8.4 13.3L7 21l5-2.4L17 21l-1.4-7.7" />
        </>
      ) : (
        <>
          <circle cx="12" cy="12" r="8.5" />
          <path d="M12 7.2V12l3 1.9" />
        </>
      )}
    </svg>
  );
}
