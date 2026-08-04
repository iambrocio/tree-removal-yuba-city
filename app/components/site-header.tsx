"use client";

import Link from "next/link";
import { useState } from "react";
import { business, headerNavLinks, layout, type NavLink } from "../site-content";

type SiteHeaderProps = {
  /** Copy shown before the phone number in the amber banner. */
  bannerPrefix?: string;
  /** Copy shown after the phone number in the amber banner; include its own leading space. */
  bannerSuffix?: string;
  links?: NavLink[];
  /** Where the logo points. */
  homeHref?: string;
  /** Nav label to render as the current section. */
  activeLabel?: string;
};

export function SiteHeader({
  bannerPrefix = "Storm damage or a hazardous tree? Call",
  bannerSuffix,
  links = headerNavLinks,
  homeHref = "/",
  activeLabel,
}: SiteHeaderProps) {
  const [open, setOpen] = useState(false);

  return (
    <>
      {layout.showEmergencyBar && (
        <div className="flex items-center justify-center gap-3 bg-gold px-5 py-2.5 text-center text-[13.5px] font-medium text-[#241d0c] sm:px-8 lg:px-14">
          <span className="hidden h-[7px] w-[7px] shrink-0 rounded-full bg-[#241d0c] sm:block" />
          <span>
            {bannerPrefix}{" "}
            <a
              href={business.phoneHref}
              className="font-bold underline-offset-2 hover:underline"
            >
              {business.phone}
            </a>
            {bannerSuffix}
          </span>
        </div>
      )}

      <header className="bg-cream px-5 sm:px-8 lg:px-14">
        <div className="flex h-[76px] items-center justify-between gap-6 lg:grid lg:h-[88px] lg:grid-cols-[1fr_auto_1fr] lg:gap-8">
          <Link
            href={homeHref}
            className="flex shrink-0 items-center gap-3 lg:justify-self-start"
          >
            <span className="flex h-[42px] w-[42px] shrink-0 items-center justify-center rounded-full bg-forest text-[18px] font-bold text-cream">
              T
            </span>
            <span className="flex flex-col leading-[1.15]">
              <span className="text-[16px] font-bold tracking-[-0.025em] text-ink sm:text-[18px]">
                {business.name}
              </span>
              <span className="text-[11.5px] uppercase tracking-[0.12em] text-[#7d8676]">
                Certified Arborists
              </span>
            </span>
          </Link>

          <nav className="hidden items-center gap-[34px] text-[15.5px] text-[#46523f] lg:flex">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                aria-current={link.label === activeLabel ? "page" : undefined}
                className={
                  link.label === activeLabel
                    ? "font-semibold text-ink"
                    : "hover:text-ink"
                }
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3 lg:justify-self-end">
            {/* Below `sm` this moves into the mobile menu — the logo, pill, and
                hamburger together overflow a 390px viewport. */}
            <a
              href={business.phoneHref}
              className="hidden items-center gap-2.5 rounded-full bg-forest px-6 py-3.5 text-cream hover:bg-ink sm:flex"
            >
              <PhoneIcon />
              <span className="text-[15px] font-bold tracking-[-0.01em] sm:text-[17px]">
                {business.phone}
              </span>
            </a>

            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-expanded={open}
              aria-controls="mobile-nav"
              aria-label="Toggle navigation menu"
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line-strong text-ink lg:hidden"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round">
                {open ? (
                  <>
                    <path d="M6 6l12 12" />
                    <path d="M18 6L6 18" />
                  </>
                ) : (
                  <>
                    <path d="M4 7h16" />
                    <path d="M4 12h16" />
                    <path d="M4 17h16" />
                  </>
                )}
              </svg>
            </button>
          </div>
        </div>

        {open && (
          <nav
            id="mobile-nav"
            className="flex flex-col gap-1 border-t border-line pb-5 pt-4 text-[15.5px] text-[#46523f] lg:hidden"
          >
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                aria-current={link.label === activeLabel ? "page" : undefined}
                className={`rounded-lg px-2 py-2.5 hover:bg-sand hover:text-ink ${
                  link.label === activeLabel ? "font-semibold text-ink" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}
            <a
              href={business.phoneHref}
              className="mt-3 flex items-center justify-center gap-2.5 rounded-full bg-forest px-6 py-3.5 text-cream sm:hidden"
            >
              <PhoneIcon />
              <span className="text-[16px] font-bold tracking-[-0.01em]">
                {business.phone}
              </span>
            </a>
          </nav>
        )}
      </header>
    </>
  );
}

function PhoneIcon() {
  return (
    <svg
      width="17"
      height="17"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#d9a441"
      strokeWidth="1.9"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="shrink-0"
      aria-hidden
    >
      <path d="M6.4 3.6h3.1l1.6 3.9-2 1.3a11.4 11.4 0 006.1 6.1l1.3-2 3.9 1.6v3.1a1.8 1.8 0 01-2 1.8A16.6 16.6 0 014.6 5.6a1.8 1.8 0 011.8-2z" />
    </svg>
  );
}
