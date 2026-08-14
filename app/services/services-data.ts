/**
 * Content for the service template at `/services/<slug>`.
 *
 * To add a service: copy an entry and replace the copy. Anything claim-bearing
 * (price ranges, response times, review counts) must be real for that service —
 * `pricing` is optional precisely so a page can ship before those numbers are
 * confirmed rather than shipping invented ones.
 */

export type ServiceBullet = { dot: string; label: string; body: string };

export type ServicePage = {
  /** Breadcrumb leaf and nav label. */
  name: string;
  /** The page h1. */
  title: string;
  /**
   * `<title>` when it should differ from the default
   * `<name> in Yuba City | <business>`. Set per the SEO title sheet.
   */
  metaTitle?: string;
  intro: string;
  heroPhoto: string;
  /** Headline price band above the CTAs. Omit when ranges aren't confirmed. */
  priceBand?: { prefix: string; range: string; suffix: string };
  trust: { icon: "shield" | "clock" | "badge" | "stars"; label: string }[];
  triage: {
    eyebrow: string;
    heading: string;
    intro: string;
    bullets: ServiceBullet[];
  };
  /** Omit to hide the pricing card entirely. */
  pricing?: {
    heading: string;
    intro: string;
    rows: { label: string; price: string }[];
  };
  inclusions: {
    eyebrow: string;
    heading: string;
    items: { title: string; body: string }[];
  };
  timeline: {
    eyebrow: string;
    heading: string;
    steps: { time: string; title: string; body: string }[];
  };
  gallery: { heading: string; photos: string[] };
  faqs: { question: string; answer: string }[];
  cta: { heading: string; body: string };
  bannerPrefix: string;
};

export const servicePages: Record<string, ServicePage> = {
  "tree-trimming": {
    name: "Tree Trimming",
    title: "Tree Trimming & Cutting - Free Estimates",
    metaTitle: "Tree Trimming in Yuba City, CA - Free Estimates",
    intro:
      "Structural pruning, crown thinning, deadwooding, and clearance from roofs and utility lines. Every cut is made to a growth point, so the tree closes the wound instead of responding with weak regrowth.",
    heroPhoto: "Hero photo — arborist pruning a mature canopy",
    // priceBand and pricing intentionally omitted — see the note in the summary.
    trust: [
      { icon: "shield", label: "Licensed & insured" },
      { icon: "badge", label: "Locally owned" },
      { icon: "stars", label: "5.0 star reviews" },
    ],
    triage: {
      eyebrow: "When to prune, and when not to",
      heading: "Good pruning takes less off the tree than you'd think",
      intro:
        "The most common damage we're called to fix is over-pruning — topping and lion-tailing done by crews paid to remove volume. A healthy tree rarely needs more than a quarter of its live crown touched in one season.",
      bullets: [
        {
          dot: "bg-rust",
          label: "Prune now",
          body: "limbs contacting the roof or service drop, storm-broken and hanging branches, split or included leaders that need a support cable.",
        },
        {
          dot: "bg-gold",
          label: "Prune in season",
          body: "structural shaping on young trees, crown thinning for light and wind, deadwood removal, clearance over the driveway.",
        },
        {
          dot: "bg-sage-deep",
          label: "Leave it alone",
          body: "topping a healthy tree, stripping interior growth, or heavy summer cuts on oaks — all of these invite decay and weak regrowth.",
        },
      ],
    },
    inclusions: {
      eyebrow: "Every trim includes",
      heading: "Cuts made to the standard, not to the clock",
      items: [
        {
          title: "Proper cuts",
          body: "Every cut placed at the branch collar or a lateral that can take over — no stubs, no topping, no lion-tailing.",
        },
        {
          title: "Climbed, not spiked",
          body: "Spikes wound a tree you intend to keep. We climb on rope and saddle, or work from a lift where access allows.",
        },
        {
          title: "Full cleanup",
          body: "Brush chipped as we go, cuttings raked out of beds and off the roof, driveway and gutters blown clean.",
        },
        {
          title: "Written care notes",
          body: "What we took, why, and when the tree should next be looked at — so the next visit isn't a guess.",
        },
      ],
    },
    timeline: {
      eyebrow: "The day of",
      heading: "What a trim actually looks like",
      steps: [
        {
          time: "Arrival",
          title: "Walk and set objectives",
          body: "Arborist walks the tree with you and agrees what the pruning is meant to achieve before anything is cut.",
        },
        {
          time: "First hour",
          title: "Deadwood and hazards",
          body: "Dead, broken, and rubbing limbs come out first — the cuts that do the most for safety.",
        },
        {
          time: "Midday",
          title: "Shape and clearance",
          body: "Selective thinning and clearance cuts, stepping back regularly to read the canopy from the ground.",
        },
        {
          time: "Before we leave",
          title: "Cleanup and walkthrough",
          body: "Site cleared and blown, then we walk the finished canopy with you and leave the care notes.",
        },
      ],
    },
    gallery: {
      heading: "Trimming around Yuba City",
      photos: [
        "Before — overgrown canopy on a roof",
        "Climber thinning a valley oak",
        "After — lifted and cleared",
      ],
    },
    faqs: [
      {
        question: "When is the best time to prune in the valley?",
        answer:
          "Most species do best in late winter dormancy, when the structure is visible and wound closure is fastest. Deadwood and storm damage can come out any time. We avoid heavy summer cuts on oaks, which invites disease.",
      },
      {
        question: "Can you top my tree to make it shorter?",
        answer:
          "We don't top trees. Topping removes the crown's food supply and forces weak, densely attached regrowth that fails in wind — it makes a tree more dangerous, not less. Where height is a genuine problem we'll discuss crown reduction to lateral limbs, or removal.",
      },
      {
        question: "How much can be taken off at once?",
        answer:
          "As a rule, no more than a quarter of the live crown in a season, and less on a mature or stressed tree. If someone quotes you a much heavier cut, ask what the cuts are meant to achieve.",
      },
      {
        question: "Can you clear limbs off my roof and power line?",
        answer:
          "Roof, chimney, and driveway clearance is routine work. For the service drop running to your house we can usually clear it; anything on the primary utility lines belongs to the utility, and we'll tell you who to call.",
      },
    ],
    cta: {
      heading: "Canopy getting away from you?",
      body: "Free written estimate, same day in most cases. An arborist tells you what actually needs cutting.",
    },
    bannerPrefix: "Storm-broken limb hanging over the house? Call",
  },

  "stump-grinding": {
    name: "Stump Grinding",
    title: "Professional Stump Grinding in Yuba City, CA",
    metaTitle: "Stump Grinding in Yuba City, CA - Free Estimates",
    intro:
      "Ground 8 to 12 inches below grade with surface roots chased, then backfilled and raked flat so you can replant, re-sod, or pour over it. We grind stumps we removed and stumps someone else left behind.",
    heroPhoto: "Hero photo — grinder working a large stump",
    priceBand: {
      prefix: "Stump grinding",
      range: "from $95",
      suffix: "quoted per stump",
    },
    trust: [
      { icon: "shield", label: "Licensed & insured" },
      { icon: "clock", label: "Most stumps done in a day" },
      { icon: "stars", label: "5.0 star reviews" },
    ],
    triage: {
      eyebrow: "How deep you actually need to go",
      heading: "Grinding depth depends on what goes there next",
      intro:
        "There's no single right depth. What you plan to put over the stump decides how far down we grind and how much of the root flare we chase — so that's the first thing we ask.",
      bullets: [
        {
          dot: "bg-rust",
          label: "Replanting in the same spot",
          body: "the deepest grind, 12 inches or more, with major roots chased out and grindings removed so you can bring in clean soil.",
        },
        {
          dot: "bg-gold",
          label: "Lawn, sod, or beds",
          body: "8 to 12 inches below grade, backfilled with grindings and topsoil, raked level and ready to seed once it settles.",
        },
        {
          dot: "bg-sage-deep",
          label: "Patio, shed, or driveway",
          body: "tell us before we start — anything structural needs the stump and root plate excavated rather than ground, and often a different trade.",
        },
      ],
    },
    inclusions: {
      eyebrow: "Every grind includes",
      heading: "Underground utilities located before the wheel turns",
      items: [
        {
          title: "USA North 811 ticket",
          body: "Utilities located and marked before we grind. Free, required by law, and the reason we schedule a few days out on new sites.",
        },
        {
          title: "Surface roots chased",
          body: "The runners that lift lawns and crack walkways come out with the stump, not left to surface again next season.",
        },
        {
          title: "Backfilled and raked",
          body: "Grindings returned to the hole and raked level, or hauled away entirely if you're bringing in soil.",
        },
        {
          title: "Contained work area",
          body: "Plywood and blankets shield siding, fences, cars, and windows — grinders throw chips a long way.",
        },
      ],
    },
    timeline: {
      eyebrow: "The day of",
      heading: "What a stump grind actually looks like",
      steps: [
        {
          time: "Before the date",
          title: "Utility locate",
          body: "We file the 811 ticket and wait for the marks. Gas and fibre run shallower than people expect.",
        },
        {
          time: "Arrival",
          title: "Access and shielding",
          body: "Gate width checked, path protected, and everything within throwing distance covered or moved.",
        },
        {
          time: "Grinding",
          title: "Stump and root flare",
          body: "Cut down in passes to depth, then the flare and surface runners chased out to the sides.",
        },
        {
          time: "Before we leave",
          title: "Backfill and cleanup",
          body: "Hole filled and raked level or grindings hauled, then the whole area blown clean.",
        },
      ],
    },
    gallery: {
      heading: "Stump grinding around Yuba City",
      photos: [
        "Before — stump left by another crew",
        "Grinder mid-pass",
        "After — backfilled and raked flat",
      ],
    },
    faqs: [
      {
        question: "How deep do you grind?",
        answer:
          "Eight to twelve inches below grade as standard, which clears anything you'd plant grass or beds over. If you're replanting a tree in the same spot we go deeper and chase the major roots so there's room for clean soil.",
      },
      {
        question: "What happens to the grindings?",
        answer:
          "Your choice. Most people have us backfill the hole with them and rake it level — it settles over a few weeks and can be topped up with soil. We can also haul them away, or leave them as mulch.",
      },
      {
        question: "Can you grind a stump in my backyard?",
        answer:
          "Usually. Our narrow-track grinder fits through a 36-inch gate. Where nothing fits, there are handheld options for smaller stumps — we'll tell you honestly at the estimate if access rules it out.",
      },
      {
        question: "Will the roots keep growing or send up shoots?",
        answer:
          "Most species die once the stump is ground out. A few — privet, ailanthus, some elms and poplars — can sucker from roots left in the ground. If yours is one of those we'll say so and cover what it takes to stop it.",
      },
      {
        question: "Do I need to call before you dig?",
        answer:
          "We handle it. We file the USA North 811 ticket and wait for utilities to be marked before grinding. It's free and it's why new jobs are typically scheduled a few days out.",
      },
    ],
    cta: {
      heading: "Got a stump in the way?",
      body: "Free written estimate, usually same day. Send a photo with something for scale and we can often quote it from that.",
    },
    bannerPrefix: "Need a stump gone before a project starts? Call",
  },
};
