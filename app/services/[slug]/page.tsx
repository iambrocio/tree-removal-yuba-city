import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { pageMeta } from "../../seo";
import { business } from "../../site-content";
import { ServicePageView } from "../service-page-view";
import { servicePages } from "../services-data";

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

  return <ServicePageView service={service} />;
}
