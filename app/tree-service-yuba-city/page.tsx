import type { Metadata } from "next";
import { ContentSection } from "../components/content-section";
import { ServiceCards } from "../components/service-cards";
import { photos } from "../photos";
import { pageMeta } from "../seo";
import { ServiceHeroPage } from "../services/service-page-view";
import {
  treeServiceContent,
  treeServiceOfferings,
  treeServicePage,
} from "../services/services-data";

export const metadata: Metadata = pageMeta(
  "/tree-service-yuba-city",
  treeServicePage.metaTitle!,
  treeServicePage.intro,
);

export default function TreeServicePage() {
  return (
    <ServiceHeroPage service={treeServicePage}>
      <ServiceCards
        eyebrow="Services"
        heading="Tree Services We Offer"
        cards={treeServiceOfferings}
        learnMore
      />
      <ContentSection
        content={treeServiceContent}
        photo={photos.frontYardTrimmedOaks}
        aside={{
          heading: "Not sure what your tree needs?",
          body: "We'll look at the tree and tell you straight — free, with a fixed price for whatever it needs.",
        }}
        background="bg-cream"
        plainSubheadings
      />
    </ServiceHeroPage>
  );
}
