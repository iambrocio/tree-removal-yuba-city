/**
 * Stand-in for the design's `<image-slot>` elements. Swap each one for a
 * `next/image` once the real photography lands.
 */
export function ImagePlaceholder({ label }: { label: string }) {
  return (
    <div
      className="text-muted flex h-full w-full items-center justify-center bg-sand p-6 text-center text-[13px] leading-snug"
      style={{
        backgroundImage:
          "repeating-linear-gradient(135deg, rgba(51,69,47,.06) 0 10px, transparent 10px 20px)",
      }}
    >
      <span className="max-w-[22ch]">{label}</span>
    </div>
  );
}
