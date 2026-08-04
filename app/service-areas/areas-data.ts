/**
 * Content for the per-city service area template at
 * `/service-areas/<slug>`.
 *
 * To add a city: copy the Marysville entry, keep every field, and replace the
 * copy with facts that are true for that city. Everything here is claim-bearing
 * marketing copy (response times, job counts, review counts, testimonials,
 * permit rules) — it must be verified per city, not extrapolated from a
 * neighbouring one. A slug with no entry 404s rather than rendering
 * half-generic filler.
 */

export type AreaBullet = {
  /** Tailwind background class for the leading dot. */
  dot: string;
  label: string;
  body: string;
};

export type AreaService = {
  title: string;
  body: string;
  /** Omit until the matching service page exists. */
  href?: string;
};

export type AreaPage = {
  city: string;
  state: string;
  zip: string;
  /** Banner copy before the phone number. */
  bannerPrefix: string;
  /** Pill above the h1. */
  responseBadge: string;
  intro: string;
  reviewNote: string;
  heroPhoto: string;
  stats: { value: string; label: string }[];
  local: {
    eyebrow: string;
    heading: string;
    intro: string;
    bullets: AreaBullet[];
  };
  pricingIntro: string;
  services: AreaService[];
  permits: {
    heading: string;
    intro: string;
    bullets: Omit<AreaBullet, "dot">[];
  };
  neighborhoods: string[];
  testimonial: { quote: string; author: string };
  gallery: string[];
  faqs: { question: string; answer: string }[];
  ctaHeading: string;
  /** City names; linked when that city has its own entry below. */
  nearby: string[];
};

export const areaPages: Record<string, AreaPage> = {
  "tree-removal-marysville-ca": {
    city: "Marysville",
    state: "CA",
    zip: "95901",
    bannerPrefix: "Tree down in Marysville? Call",
    responseBadge: "Serving Marysville · 95901",
    intro:
      "We're just across the Feather River from downtown. Certified arborists for hazard removals, storm damage, and the mature valley oaks and cottonwoods that dominate older Marysville lots.",
    reviewNote: "5.0 star reviews",
    heroPhoto: "Marysville job photo — crew working a mature tree",
    stats: [
      { value: "Local", label: "Crews from our yard" },
      { value: "340+", label: "Marysville jobs" },
      { value: "$650+", label: "Typical, fixed" },
    ],
    local: {
      eyebrow: "What we see in Marysville",
      heading: "Old trees, tight lots, and a levee full of cottonwoods",
      intro:
        "Marysville's housing stock predates most of the valley, which means big trees planted close to structures and narrow side yards no lift fits through. Most of our work here is climbed and rigged by hand.",
      bullets: [
        {
          dot: "bg-rust",
          label: "Feather River cottonwoods",
          body: "saturated root plates after high water. First calls every storm season.",
        },
        {
          dot: "bg-gold",
          label: "Historic district valley oaks",
          body: "heavy horizontal limbs over roofs and detached garages.",
        },
        {
          dot: "bg-sage-deep",
          label: "Street-tree elms and sycamores",
          body: "city-owned in most cases, which changes who permits and pays.",
        },
      ],
    },
    pricingIntro:
      "Real ranges from jobs in 95901. Your written estimate is fixed once we've walked the property.",
    services: [
      {
        title: "Tree removal",
        body: "Climbed and rigged takedowns for tight lots, over roofs, and near service drops.",
        href: "/services/tree-removal",
      },
      {
        title: "Trimming & pruning",
        body: "Structural pruning and roof clearance on mature oaks in the historic district.",
        href: "/services/tree-trimming",
      },
      {
        title: "Stump grinding",
        body: "Ground 8 to 12 inches below grade, backfilled and raked flat for replanting.",
        href: "/services/stump-grinding",
      },
      {
        title: "Emergency storm response",
        body: "24/7 dispatch for trees on structures, with full documentation for your claim.",
      },
    ],
    permits: {
      heading: "We handle the city paperwork",
      intro:
        "Marysville treats street trees and trees in the historic district differently from the rest of your yard. We check the parcel before quoting, so nothing stalls on the day of the job.",
      bullets: [
        {
          label: "Private-yard trees",
          body: "generally no permit required. We can usually schedule within the week.",
        },
        {
          label: "Street trees",
          body: "city-owned between sidewalk and curb. We file the request and coordinate with Public Works.",
        },
        {
          label: "Emergency removals",
          body: "hazards get cleared first and documented after. Safety doesn't wait on a form.",
        },
      ],
    },
    neighborhoods: [
      "Historic Downtown",
      "Ellis Lake",
      "Bizz Johnson",
      "D Street corridor",
      "Covillaud",
      "North Beale",
      "Linda border",
      "Yuba levee",
    ],
    testimonial: {
      quote:
        "Two cottonwoods off the levee side, no room for a truck. They climbed both, roped everything down, and my fence never got touched.",
      author: "Marcus T. — Marysville, 95901",
    },
    gallery: [
      "Before — cottonwood near the levee",
      "Climbed removal, historic district",
      "After — cleared and raked",
    ],
    faqs: [
      {
        question: "How fast can you get to Marysville?",
        answer:
          "Fifteen to twenty-five minutes from our Yuba City yard on a normal day. Storm emergencies in 95901 are triaged with our closest coverage, usually inside the hour.",
      },
      {
        question:
          "Who is responsible for the tree between my sidewalk and the curb?",
        answer:
          "In most of Marysville that's a city street tree, so removal goes through Public Works rather than you. We identify it during the estimate and tell you which side of the line it falls on.",
      },
      {
        question: "Can you get equipment into a downtown side yard?",
        answer:
          "Often not, and we plan for it. Most historic-district work is climbed and rigged by hand, or lifted out by crane from the street with a short traffic-control permit.",
      },
      {
        question: "Do you charge extra to come to Marysville?",
        answer:
          "No. Estimates are free and travel is built into the quoted price. Marysville is inside our primary coverage ring, not a trip-fee zone.",
      },
    ],
    ctaHeading: "Tree to deal with in Marysville?",
    nearby: [
      "Yuba City",
      "Linda",
      "Olivehurst",
      "Plumas Lake",
      "Live Oak",
      "Wheatland",
    ],
  },
};

/** Slug for a city name, when that city has an area page. */
export function slugForCity(city: string): string | undefined {
  return Object.keys(areaPages).find((slug) => areaPages[slug].city === city);
}
