"use client";

import { useRef, useState } from "react";
import { estimatePage } from "../site-content";

const FIELD =
  "w-full min-w-0 rounded-xl bg-cream px-4 py-3.5 text-[15px] text-ink placeholder:text-muted focus:outline-2 focus:outline-offset-2 focus:outline-forest";
const FIELD_LABEL = "text-[13.5px] font-medium text-[#46523f]";

export function EstimateForm() {
  const [services, setServices] = useState<string[]>(["Tree removal"]);
  const [timing, setTiming] = useState<string>("");
  const [photos, setPhotos] = useState<string[]>([]);
  const [dragging, setDragging] = useState(false);
  const fileInput = useRef<HTMLInputElement>(null);

  const toggleService = (option: string) =>
    setServices((current) =>
      current.includes(option)
        ? current.filter((item) => item !== option)
        : [...current, option],
    );

  const addFiles = (list: FileList | null) => {
    if (!list?.length) return;
    setPhotos((current) => [
      ...current,
      ...Array.from(list).map((file) => file.name),
    ]);
  };

  return (
    // TODO: wire to a lead-capture endpoint — this form does not submit anywhere yet.
    <form className="flex flex-col gap-5.5 rounded-3xl bg-white p-6 sm:p-9">
      <input type="hidden" name="services" value={services.join(", ")} />
      <input type="hidden" name="timing" value={timing} />

      <div className="grid gap-4.5 sm:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className={FIELD_LABEL}>Full name</span>
          <input
            name="name"
            type="text"
            required
            autoComplete="name"
            placeholder="Jane Whitaker"
            className={FIELD}
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className={FIELD_LABEL}>Phone</span>
          <input
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            placeholder="(530) 000-0000"
            className={FIELD}
          />
        </label>
      </div>

      <div className="grid gap-4.5 sm:grid-cols-2">
        <label className="flex flex-col gap-2">
          <span className={FIELD_LABEL}>
            Email <span className="font-normal text-muted">(optional)</span>
          </span>
          <input
            name="email"
            type="email"
            autoComplete="email"
            placeholder="you@email.com"
            className={FIELD}
          />
        </label>
        <label className="flex flex-col gap-2">
          <span className={FIELD_LABEL}>Property address</span>
          <input
            name="address"
            type="text"
            required
            autoComplete="street-address"
            placeholder="Street, city"
            className={FIELD}
          />
        </label>
      </div>

      <fieldset className="flex flex-col gap-2.5">
        <legend className={`${FIELD_LABEL} mb-2.5`}>What do you need?</legend>
        <div className="flex flex-wrap gap-2.5">
          {estimatePage.serviceOptions.map((option) => (
            <Chip
              key={option}
              label={option}
              selected={services.includes(option)}
              onClick={() => toggleService(option)}
            />
          ))}
        </div>
      </fieldset>

      <fieldset className="flex flex-col gap-2.5">
        <legend className={`${FIELD_LABEL} mb-2.5`}>How soon?</legend>
        <div className="flex flex-wrap gap-2.5">
          {estimatePage.timingOptions.map((option) => (
            <Chip
              key={option}
              label={option}
              selected={timing === option}
              onClick={() => setTiming(timing === option ? "" : option)}
            />
          ))}
        </div>
      </fieldset>

      <label className="flex flex-col gap-2">
        <span className={FIELD_LABEL}>Anything we should know?</span>
        <textarea
          name="details"
          rows={3}
          placeholder="Height, how close to the house, power lines, access for equipment…"
          className={`${FIELD} min-h-[84px] resize-y`}
        />
      </label>

      <div className="flex flex-col gap-2">
        <span className={FIELD_LABEL}>
          Photos of the tree{" "}
          <span className="font-normal text-muted">
            (optional, speeds things up a lot)
          </span>
        </span>
        <button
          type="button"
          onClick={() => fileInput.current?.click()}
          onDragOver={(event) => {
            event.preventDefault();
            setDragging(true);
          }}
          onDragLeave={() => setDragging(false)}
          onDrop={(event) => {
            event.preventDefault();
            setDragging(false);
            addFiles(event.dataTransfer.files);
          }}
          className={`flex w-full items-center justify-center gap-2.5 rounded-[14px] border-[1.5px] border-dashed px-4 py-6 text-[14.5px] text-[#7d8676] transition-colors ${
            dragging ? "border-forest bg-cream" : "border-line-strong hover:border-forest"
          }`}
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#7d8676"
            strokeWidth="1.7"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden
          >
            <path d="M12 16V4" />
            <path d="M7.5 8.5L12 4l4.5 4.5" />
            <path d="M4 16v3a1 1 0 001 1h14a1 1 0 001-1v-3" />
          </svg>
          Drag photos here or browse
        </button>
        <input
          ref={fileInput}
          name="photos"
          type="file"
          multiple
          accept="image/*"
          className="sr-only"
          onChange={(event) => addFiles(event.target.files)}
        />
        {photos.length > 0 && (
          <ul className="flex flex-wrap gap-2 pt-1">
            {photos.map((photo, index) => (
              <li
                key={`${photo}-${index}`}
                className="rounded-full bg-cream px-3 py-1.5 text-[13px] text-[#46523f]"
              >
                {photo}
              </li>
            ))}
          </ul>
        )}
      </div>

      <div className="flex flex-col gap-3 pt-1">
        <button
          type="submit"
          className="w-full rounded-full bg-gold px-6 py-[19px] text-[17.5px] font-bold text-[#241d0c] hover:bg-gold-dark"
        >
          Get my free estimate
        </button>
        <p className="text-center text-[13.5px] text-[#7d8676]">
          No cost, no obligation, no sales visit unless you want one. We never
          sell your information.
        </p>
        <div className="flex items-center justify-center gap-2.5 rounded-xl bg-cream p-3 text-center text-[13.5px] text-[#46523f]">
          <span className="h-[7px] w-[7px] shrink-0 rounded-full bg-forest" />
          {estimatePage.activityNote}
        </div>
      </div>
    </form>
  );
}

function Chip({
  label,
  selected,
  onClick,
}: {
  label: string;
  selected: boolean;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={`rounded-full px-4.5 py-2.5 text-[14px] transition-colors ${
        selected
          ? "bg-forest font-medium text-cream"
          : "bg-cream text-[#46523f] hover:bg-sand"
      }`}
    >
      {label}
    </button>
  );
}
