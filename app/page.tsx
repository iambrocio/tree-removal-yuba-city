import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import ownerPhoto from "../public/tree-boss-owner.webp";
import stormDamagePhoto from "../public/1.png";
import bucketTruckPhoto from "../public/3.png";
import trimmingPhoto from "../public/7.png";
import stumpGrindingPhoto from "../public/stump-grinding.png";
import serviceAreaMap from "../public/service-area-map.png";
import { ImagePlaceholder } from "./components/image-placeholder";
import { SiteFooter } from "./components/site-footer";
import { canonical } from "./seo";
import { SiteHeader } from "./components/site-header";
import {
  business,
  faqs,
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
            <BadgeIcon />
            Locally owned
          </li>
        </ul>
      </div>

      <div className="relative h-[340px] overflow-hidden rounded-[28px] sm:h-[440px] lg:h-[552px]">
        <Image
          src={ownerPhoto}
          alt="Tree Boss owner on site in Yuba City"
          fill
          priority
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
    </section>
  );
}

function TrustCards() {
  return (
    <div className={`${GUTTER} pb-20 pt-10`}>
      <div className="grid gap-[18px] sm:grid-cols-2 lg:grid-cols-3">
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
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
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
          Recent work around town
        </h2>
        <a href="#" className="text-[15px] font-medium text-forest hover:underline">
          Full gallery →
        </a>
      </div>
      <div className="grid grid-cols-2 gap-[18px] lg:grid-cols-[1.4fr_1fr_1fr] lg:grid-rows-[200px_200px]">
        <div className="relative col-span-2 h-[220px] overflow-hidden rounded-[22px] lg:col-span-1 lg:row-span-2 lg:h-auto">
          <Image
            src={bucketTruckPhoto}
            alt="Tree Boss bucket truck beside a pine cut into rounds"
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover"
          />
        </div>
        <div className="relative h-[150px] overflow-hidden rounded-[22px] lg:h-auto">
          <Image
            src={stormDamagePhoto}
            alt="Wind-thrown tree resting on a backyard shed, root plate lifted out of the ground"
            fill
            sizes="(min-width: 1024px) 22vw, 50vw"
            className="object-cover"
          />
        </div>
        <div className="relative h-[150px] overflow-hidden rounded-[22px] lg:h-auto">
          <Image
            src={trimmingPhoto}
            alt="Front-yard tree cut back to its main leaders during a heavy reduction"
            fill
            sizes="(min-width: 1024px) 22vw, 50vw"
            className="object-cover"
          />
        </div>
        <div className="relative col-span-2 h-[150px] overflow-hidden rounded-[22px] lg:col-span-2 lg:h-auto">
          <Image
            src={stumpGrindingPhoto}
            alt="Stump ground flush in a side yard with the chips raked out"
            fill
            sizes="(min-width: 1024px) 44vw, 100vw"
            className="object-cover"
          />
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
            Serving Yuba City and Surrounding Areas
          </h2>
          <p className="mb-6 text-[16px] leading-[1.64] text-moss">
            Free estimates across Yuba and Sutter County and the towns around
            them.
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
        <div className="relative h-[260px] overflow-hidden rounded-[20px] bg-cream lg:h-[340px]">
          <Image
            src={serviceAreaMap}
            alt="Map of the service area around Yuba City, covering Yuba, Sutter, and neighboring counties"
            fill
            sizes="(min-width: 1024px) 45vw, 100vw"
            className="object-contain"
          />
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
