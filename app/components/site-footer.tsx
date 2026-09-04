import Image from "next/image";
import Link from "next/link";
import logoMarkCream from "../../public/logo-mark-cream.png";
import { areaPages } from "../service-areas/areas-data";
import { business, services } from "../site-content";

type FooterColumn = { heading: string; links: { label: string; href: string }[] };

/**
 * Link columns are derived from the live routes, so a column appears only once
 * it has somewhere real to point. New service pages and city pages show up here
 * automatically. Columns that would be empty are dropped rather than rendered
 * with dead links.
 */
function buildColumns(): FooterColumn[] {
  const columns: FooterColumn[] = [
    {
      heading: "Services",
      links: services
        .filter((service) => service.href)
        .map((service) => ({ label: service.title, href: service.href! })),
    },
    {
      heading: "Service Area",
      links: [
        { label: "All Service Areas", href: "/service-areas" },
        ...Object.entries(areaPages).map(([slug, area]) => ({
          label: area.city,
          href: `/service-areas/${slug}`,
        })),
      ],
    },
  ];

  return columns.filter((column) => column.links.length > 0);
}

export function SiteFooter() {
  const columns = buildColumns();

  return (
    <footer className="bg-ink px-5 pb-8 pt-16 text-[#b8c7ae] sm:px-8 lg:px-14">
      <div className="grid gap-10 border-b border-[rgba(246,242,232,.14)] pb-11 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr] lg:gap-14">
        <div>
          <Link href="/" className="mb-4.5 flex items-center gap-3">
            <Image src={logoMarkCream} alt="" className="h-10 w-auto" />
            <span className="text-[18px] font-bold tracking-[-0.02em] text-cream">
              {business.name}
            </span>
          </Link>

          <p className="mb-5.5 max-w-[300px] text-[14.5px] leading-[1.66]">
            Locally owned, serving Yuba and Sutter County since 2019. Licensed
            and fully insured.
          </p>

          <a
            href={business.phoneHref}
            className="mb-1.5 block text-[24px] font-bold tracking-[-0.02em] text-cream hover:underline"
          >
            {business.phone}
          </a>
          <div className="mb-5.5 text-[13.5px]">
            Answered 24/7 for emergencies
          </div>

          <Link
            href="/free-estimate"
            className="inline-block rounded-full bg-gold px-7 py-3.5 text-[15px] font-bold text-[#241d0c] hover:bg-gold-dark"
          >
            Get a free estimate
          </Link>
        </div>

        {columns.map((column) => (
          <div key={column.heading}>
            <h2 className="mb-4.5 text-[15px] font-bold text-cream">
              {column.heading}
            </h2>
            <ul className="flex flex-col gap-3 text-[15px]">
              {column.links.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="hover:text-cream hover:underline">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="flex flex-col gap-3 pt-6 text-[13px] text-[#8ea183] sm:flex-row sm:items-center sm:justify-between">
        <span>© 2026 {business.name}. All rights reserved.</span>
        <span className="flex flex-wrap gap-6">
          <a href="#" className="hover:text-cream hover:underline">
            Privacy
          </a>
          <a href="#" className="hover:text-cream hover:underline">
            Terms
          </a>
          <Link href="/sitemap" className="hover:text-cream hover:underline">
            Sitemap
          </Link>
          <span>License #{business.license}</span>
        </span>
      </div>
    </footer>
  );
}
