import type { Metadata } from "next";
import { canonical } from "../seo";
import Link from "next/link";
import { SiteFooter } from "../components/site-footer";
import { SiteHeader } from "../components/site-header";
import { business, services } from "../site-content";
import { areaPages } from "../service-areas/areas-data";

const GUTTER = "px-5 sm:px-8 lg:px-14";

export const metadata: Metadata = {
  ...canonical("/sitemap"),
  title: "Sitemap",
  description: `Every page on the ${business.name} site.`,
};

type Section = { heading: string; links: { label: string; href: string }[] };

/**
 * Built from the real route data, so pages appear here as they are added
 * rather than needing a second list kept in sync by hand. Sections with no
 * live pages are omitted.
 */
function buildSections(): Section[] {
  const sections: Section[] = [
    {
      heading: "Main",
      links: [
        { label: "Home", href: "/" },
        { label: "Free Estimate", href: "/free-estimate" },
      ],
    },
    {
      heading: "Services",
      links: services
        .filter((service) => service.href)
        .map((service) => ({ label: service.title, href: service.href! })),
    },
    {
      heading: "Service Areas",
      links: [
        { label: "All Service Areas", href: "/service-areas" },
        ...Object.entries(areaPages).map(([slug, area]) => ({
          label: `Tree Removal ${area.city}`,
          href: `/service-areas/${slug}`,
        })),
      ],
    },
  ];

  return sections.filter((section) => section.links.length > 0);
}

export default function SitemapPage() {
  const sections = buildSections();

  return (
    <div className="flex flex-1 flex-col bg-cream">
      <SiteHeader />

      <main className={`${GUTTER} flex-1 pb-18 pt-6`}>
        <nav
          aria-label="Breadcrumb"
          className="mb-5 flex flex-wrap items-center gap-2 text-[13.5px] text-[#7d8676]"
        >
          <Link href="/" className="text-forest hover:underline">
            Home
          </Link>
          <span>/</span>
          <span className="text-ink">Sitemap</span>
        </nav>

        <h1 className="mb-8 text-[32px] font-bold tracking-[-0.035em] text-ink sm:text-[40px]">
          Sitemap
        </h1>

        <div className="grid items-start gap-10 sm:grid-cols-2 lg:grid-cols-[200px_240px_minmax(0,1fr)] lg:gap-12">
          {sections.map((section) => (
            <div key={section.heading}>
              <h2 className="mb-3 text-[15px] font-bold uppercase tracking-[0.1em] text-sage-deep">
                {section.heading}
              </h2>
              <ul
                className={`m-0 list-none p-0 text-[16px] ${
                  section.links.length > 6
                    ? "sm:columns-2 sm:gap-10 [&>li]:leading-8"
                    : "flex flex-col gap-2"
                }`}
              >
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-forest hover:underline">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
