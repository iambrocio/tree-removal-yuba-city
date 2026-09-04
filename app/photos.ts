/**
 * Every real job photo on the site, with the alt text that describes it.
 *
 * Pages and content files reference these by key so a photo's alt travels with
 * it — alt text is written from what the photo actually shows, not from the
 * slot it happens to fill, and never claims a city the photo can't prove.
 *
 * Full-resolution originals live in `assets/photo-originals/` (untracked); the
 * files here are resized to 1600px and re-encoded as webp.
 */
import type { StaticImageData } from "next/image";
import backyardClearedAfter from "../public/backyard-cleared-after.webp";
import backyardTreeBefore from "../public/backyard-tree-before.webp";
import bucketTruckBoomInCanopy from "../public/bucket-truck-boom-in-canopy.webp";
import bucketTruckPineDriveway from "../public/bucket-truck-pine-driveway.webp";
import chipperStreetRemoval from "../public/chipper-street-removal.webp";
import frontYardTrimmedOaks from "../public/front-yard-trimmed-oaks.webp";
import oakCanopyFromBucket from "../public/oak-canopy-from-bucket.webp";
import prunedTreePoolside from "../public/pruned-tree-poolside.webp";
import stormDamage from "../public/1.webp";
import bucketTruckPine from "../public/3.webp";
import heavyReduction from "../public/7.webp";
import stumpGround from "../public/stump-grinding.webp";
import ownerOnSite from "../public/tree-boss-owner.webp";

export type Photo = { src: StaticImageData; alt: string };

export const photos = {
  ownerOnSite: {
    src: ownerOnSite,
    alt: "Tree Boss owner on site in Yuba City",
  },
  bucketTruckPineDriveway: {
    src: bucketTruckPineDriveway,
    alt: "Tree Boss bucket truck and chipper parked in a driveway below a mature pine",
  },
  bucketTruckBoomInCanopy: {
    src: bucketTruckBoomInCanopy,
    alt: "Bucket truck boom extended into a shade tree beside a backyard treehouse",
  },
  oakCanopyFromBucket: {
    src: oakCanopyFromBucket,
    alt: "View from the bucket looking across the canopy of a large backyard oak",
  },
  frontYardTrimmedOaks: {
    src: frontYardTrimmedOaks,
    alt: "Crew member in high-visibility gear under two freshly trimmed front-yard shade trees",
  },
  chipperStreetRemoval: {
    src: chipperStreetRemoval,
    alt: "Chipper and bucket truck staged at the curb for a residential tree removal",
  },
  prunedTreePoolside: {
    src: prunedTreePoolside,
    alt: "Tree pruned back for clearance over a pool deck and backyard structures",
  },
  backyardTreeBefore: {
    src: backyardTreeBefore,
    alt: "Before: a large tree leaning over a covered back patio and fence line",
  },
  backyardClearedAfter: {
    src: backyardClearedAfter,
    alt: "After: the same back yard cleared, with chips raked out and the patio open",
  },
  stormDamage: {
    src: stormDamage,
    alt: "Wind-thrown tree resting on a backyard shed, root plate lifted out of the ground",
  },
  bucketTruckPine: {
    src: bucketTruckPine,
    alt: "Tree Boss bucket truck beside a pine cut into rounds",
  },
  heavyReduction: {
    src: heavyReduction,
    alt: "Front-yard tree cut back to its main leaders during a heavy reduction",
  },
  stumpGround: {
    src: stumpGround,
    alt: "Stump ground flush in a side yard with the chips raked out",
  },
} satisfies Record<string, Photo>;
