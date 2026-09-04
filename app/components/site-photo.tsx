import Image from "next/image";
import type { Photo } from "../photos";

/**
 * Fills the rounded slots the layout reserves for photography. The parent sets
 * the size and the rounding; this only fills it, so it needs `relative` on the
 * parent — same contract the hero's `<Image fill>` already uses.
 */
export function SitePhoto({
  photo,
  sizes,
  className = "",
  priority = false,
}: {
  photo: Photo;
  /** Match the slot's real width so the browser picks a sane candidate. */
  sizes: string;
  className?: string;
  priority?: boolean;
}) {
  return (
    <Image
      src={photo.src}
      alt={photo.alt}
      fill
      sizes={sizes}
      placeholder="blur"
      {...(priority
        ? { loading: "eager" as const, fetchPriority: "high" as const }
        : null)}
      className={`object-cover ${className}`}
    />
  );
}
