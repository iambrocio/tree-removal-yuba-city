export const business = {
  name: "Tree Removal Yuba City",
  phone: "(530) 845-1134",
  phoneHref: "tel:+15308451134",
  license: "1043882",
  tagline: "Locally Owned Tree Care",
};

/** Layout toggles mirroring the design's `showEmergencyBar` prop. */
export const layout = {
  showEmergencyBar: true,
};

export type NavLink = { label: string; href: string };

/**
 * The header nav, shared by every page.
 *
 * The design's nav is Services / About / Contact. About and Contact have no
 * pages yet, so they are left out rather than shipped as dead links — add them
 * here once those routes exist. "Service Areas" stands in so the nav isn't a
 * single item; remove it if you'd rather match the design exactly.
 */
export const headerNavLinks: NavLink[] = [
  { label: "Services", href: "/#services" },
  { label: "Service Areas", href: "/service-areas" },
];

/**
 * Hero checkmarks. Each one has to be a promise the site already makes
 * elsewhere — these sit above the fold, so they are the claims a customer is
 * most likely to hold us to.
 */
export const heroProof = [
  "Same-day estimates, most cases",
  "Financing available",
  "Licensed & insured",
  "Locally owned",
];

export const trustCards = [
  {
    title: "Licensed & insured",
    body: "Fully licensed and insured for every job",
  },
  {
    title: "Free no obligation estimates",
    body: "Fixed price before any work begins",
  },
  {
    title: "Emergency tree removal",
    body: "Storm crews and insurance documentation",
  },
];

/**
 * Removal price ranges, shown on the per-city service area pages.
 *
 * These lived on the `/services/tree-removal` page until it was retired for
 * competing with the homepage; they are site-wide facts, not page copy, so
 * they sit here rather than in one page's data.
 */
export const removalPricingRows = [
  { label: "Small tree — under 30 ft", price: "$450 – $900" },
  { label: "Medium tree — 30 to 60 ft", price: "$900 – $1,800" },
  { label: "Large or crane-assisted — 60 ft+", price: "$1,800 – $4,500" },
  { label: "Stump grinding add-on", price: "from $95" },
];

export const services: {
  number: string;
  title: string;
  body: string;
  href?: string;
}[] = [
  {
    number: "01",
    title: "Tree Removal",
    body: "Crane and rigging removals in tight lots, over roofs, and near power lines. Debris hauled, site left clean.",
    // No href: removals are covered by the homepage, which is why the
    // dedicated page was retired.
  },
  {
    number: "02",
    title: "Trimming & Pruning",
    body: "Structural pruning, crown thinning, deadwooding, and clearance from roofs and utility lines.",
    href: "/services/tree-trimming",
  },
  {
    number: "03",
    title: "Stump Grinding",
    body: "Ground 8–12 inches below grade with roots chased, then backfilled and raked flat for replanting.",
    href: "/services/stump-grinding",
  },
  {
    number: "04",
    title: "Emergency Storm Response",
    body: "On call around the clock for wind-thrown trees and limbs on structures, with full insurance documentation.",
  },
];

export const stats = [
  { value: "100s", label: "Trees safely removed" },
  { value: "7 yrs", label: "Serving the valley" },
  { value: "5.0★", label: "Google reviews" },
  { value: "Fair", label: "Competitive pricing" },
];

export const processSteps = [
  {
    step: "Step 01",
    title: "Call or request a quote",
    body: "Tell us what you're looking at. Emergencies dispatch same day.",
  },
  {
    step: "Step 02",
    title: "On-site assessment",
    body: "An arborist walks the property, checks access, and writes a fixed price.",
  },
  {
    step: "Step 03",
    title: "Scheduled & permitted",
    body: "We pull city permits when required and confirm a window that works.",
  },
  {
    step: "Step 04",
    title: "Removal & cleanup",
    body: "Wood chipped or stacked, chips hauled, driveway blown clean.",
  },
];

export const serviceAreas = [
  "Yuba City",
  "Marysville",
  "Linda",
  "Olivehurst",
  "Plumas Lake",
  "Wheatland",
  "Live Oak",
  "Sutter",
  "Gridley",
  "Meridian",
  "Nicolaus",
  "Rio Oso",
  "Browns Valley",
  "Loma Rica",
  "Beale AFB",
];

export const faqs = [
  {
    question: "How much does tree removal cost in Yuba City?",
    answer:
      "Most residential removals run $650 to $2,400 depending on height, species, access, and what's underneath. Crane work and removals over structures cost more. Every estimate is written and fixed before we schedule.",
  },
  {
    question: "Do I need a permit to remove a tree?",
    answer:
      "Trees on private property generally don't require one, but street trees, heritage trees, and some HOA and county parcels do. We check the ordinance for your address and pull the permit if needed.",
  },
  {
    question: "Are you licensed and insured?",
    answer:
      "Yes — fully licensed and insured, including workers' compensation. Certificates go straight to your HOA, property manager, or insurer on request.",
  },
  {
    question: "Will you clean up the debris and stump?",
    answer:
      "Standard removals include chipping and hauling all brush and wood. Stump grinding is quoted separately — 8 to 12 inches below grade, site raked flat.",
  },
  {
    question: "How fast can you get here after a storm?",
    answer:
      "Emergency lines are answered 24/7. Trees on houses, vehicles, or blocking access are triaged first, usually within a few hours, and we document the damage for your claim at no charge.",
  },
];

export const estimatePage = {
  promises: [
    "Free, no obligation",
    "Average reply in 2 hours",
    "Price holds for 30 days",
  ],
  serviceOptions: [
    "Tree removal",
    "Trimming & pruning",
    "Stump grinding",
    "Storm damage",
    "Not sure",
  ],
  timingOptions: ["This week", "Next 30 days", "Just planning ahead"],
  activityNote: "7 estimates requested in Yuba City this week",
  nextSteps: [
    "An arborist reviews your photos and calls you back, usually within a few hours.",
    "We walk the property, check access and targets, and write a fixed price.",
    "You decide. The quote holds for 30 days, and we pull any permits needed.",
  ],
  testimonial: {
    quote:
      "Quoted Tuesday, oak down Thursday, and you couldn't tell they'd been in the yard. The price on the estimate was the price I paid.",
    author: "Dana R. — Plumas Lake",
  },
  credentials: [
    "Licensed & fully insured",
    "Locally owned and operated",
    "5.0 star Google reviews",
  ],
};

export const serviceAreasPage = {
  /** `tier` drives the proximity legend dot. */
  cities: [
    {
      name: "Yuba City",
      note: "Home base · 95991, 95993",
      arrival: "Our yard is here",
      tier: "fast" as const,
    },
    {
      name: "Marysville",
      note: "Across the Feather · 95901",
      arrival: "Just across the river",
      tier: "fast" as const,
    },
    {
      name: "Linda",
      note: "95901 · older valley oaks",
      arrival: "Close to home base",
      tier: "fast" as const,
    },
    {
      name: "Olivehurst",
      note: "95961 · large lots",
      arrival: "Close to home base",
      tier: "fast" as const,
    },
    {
      name: "Live Oak",
      note: "95953 · orchard removals",
      arrival: "Short drive north",
      tier: "standard" as const,
    },
    {
      name: "Plumas Lake",
      note: "95961 · newer subdivisions",
      arrival: "Short drive south",
      tier: "standard" as const,
    },
    {
      name: "Wheatland",
      note: "95692 · rural parcels",
      arrival: "Regular route stop",
      tier: "standard" as const,
    },
    {
      name: "Gridley",
      note: "95948 · walnut & almond",
      arrival: "Regular route stop",
      tier: "standard" as const,
    },
  ],
  alsoCovered: [
    "Sutter",
    "Meridian",
    "Nicolaus",
    "Rio Oso",
    "Browns Valley",
    "Loma Rica",
    "Beale AFB",
    "Yuba Foothills",
    "Robbins",
    "Knights Landing",
    "Biggs",
    "Pleasant Grove",
    "Tierra Buena",
    "South Yuba City",
  ],
  localKnowledge: [
    {
      species: "Valley oaks",
      body: "heavy horizontal limbs that shed in summer heat. Common on older Yuba City and Linda lots.",
    },
    {
      species: "Fan palms",
      body: "dead frond load and rot at the crown, right over pool decks in Plumas Lake and Olivehurst.",
    },
    {
      species: "Orchard walnut and almond",
      body: "end-of-life blocks in Live Oak and Gridley, removed and ground for replant.",
    },
    {
      species: "Feather River cottonwoods",
      body: "saturated root plates after high water, the first calls we get every storm season.",
    },
  ],
  faqs: [
    {
      question: "Do you charge a trip fee outside Yuba City?",
      answer:
        "No. Estimates are free anywhere in the coverage area, and travel is already built into the quoted price — there's no separate line item.",
    },
    {
      question: "How fast can you reach my address in a storm?",
      answer:
        "Most Yuba and Sutter County addresses see a crew inside an hour. Trees on houses, vehicles, or blocking access are triaged ahead of everything else.",
    },
    {
      question: "Do you work with property managers and HOAs?",
      answer:
        "Yes, across the whole coverage area. We handle multi-property scheduling, send certificates of insurance directly to the board, and provide written arborist reports for approvals.",
    },
    {
      question: "Are permit rules different by city?",
      answer:
        "They are. Yuba City, Marysville, and unincorporated county each handle street and heritage trees differently. We check the ordinance for your parcel and pull the permit when one applies.",
    },
  ],
};

