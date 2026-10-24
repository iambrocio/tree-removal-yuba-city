import Link from "next/link";
import type { Photo } from "../photos";
import { business, type LongFormContent } from "../site-content";
import { SitePhoto } from "./site-photo";

const GUTTER = "px-5 sm:px-8 lg:px-14";

/**
 * Long-form article with a sticky photo and call card beside it. Shared by the
 * homepage and the `/tree-service-yuba-city` hub.
 */
export function ContentSection({
  content,
  photo,
  aside,
  background = "bg-white",
  plainSubheadings = false,
}: {
  content: LongFormContent;
  photo: Photo;
  aside: { heading: string; body: string };
  background?: "bg-white" | "bg-cream";
  /** Render subsection headings as bold body text rather than h3s. */
  plainSubheadings?: boolean;
}) {
  // The call card's outline button sits on the sand card, so it takes
  // whichever of white/cream the section isn't.
  const altSurface = background === "bg-white" ? "bg-cream" : "bg-white";

  return (
    <section className={`${GUTTER} ${background} py-20 lg:py-22`}>
      <div className="grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_380px] lg:gap-16">
        <article className="max-w-[760px]">
          <div className="mb-3.5 text-[12.5px] uppercase tracking-[0.16em] text-sage-deep">
            {content.eyebrow}
          </div>
          <h2 className="mb-5 text-[30px] leading-[1.1] font-bold tracking-[-0.03em] text-balance text-ink sm:text-[36px] lg:text-[40px]">
            {content.heading}
          </h2>
          <div className="mb-10 flex flex-col gap-4">
            {content.intro.map((paragraph) => (
              <p
                key={paragraph}
                className="text-[17px] leading-[1.66] text-pretty text-moss sm:text-[18px]"
              >
                {paragraph}
              </p>
            ))}
          </div>
          <div className="flex flex-col gap-8">
            {content.sections.map((section) => (
              <div key={section.heading} id={section.id} className="scroll-mt-4">
                {plainSubheadings ? (
                  <p className="mb-2 text-[16px] leading-[1.7] font-bold text-ink sm:text-[16.5px]">
                    {section.heading}
                  </p>
                ) : (
                  <h3 className="mb-2.5 text-[20px] font-bold tracking-[-0.02em] text-ink sm:text-[22px]">
                    {section.heading}
                  </h3>
                )}
                <div className="flex flex-col gap-3.5">
                  {section.body.map((paragraph, index) => (
                    <p
                      key={index}
                      className="text-[16px] leading-[1.7] text-pretty text-moss sm:text-[16.5px]"
                    >
                      {paragraph.map((part) =>
                        typeof part === "string" ? (
                          part
                        ) : (
                          <Link
                            key={part.href}
                            href={part.href}
                            className="font-medium text-forest underline underline-offset-2 hover:text-ink"
                          >
                            {part.label}
                          </Link>
                        ),
                      )}
                    </p>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </article>

        <aside className="flex flex-col gap-4.5 lg:sticky lg:top-8">
          <div className="relative aspect-[4/3] overflow-hidden rounded-[22px] lg:aspect-[4/5]">
            <SitePhoto photo={photo} sizes="(min-width: 1024px) 380px, 100vw" />
          </div>
          <div className="rounded-[22px] bg-sand p-7">
            <div className="mb-2 text-[18px] font-bold tracking-[-0.02em] text-ink">
              {aside.heading}
            </div>
            <p className="mb-5 text-[14.5px] leading-[1.6] text-moss">
              {aside.body}
            </p>
            <div className="flex flex-col gap-2.5">
              <a
                href={business.phoneHref}
                className="rounded-full bg-forest px-6 py-3.5 text-center text-[15.5px] font-bold text-cream hover:bg-ink"
              >
                Call {business.phone}
              </a>
              <Link
                href="/free-estimate"
                className={`rounded-full border-[1.5px] border-line-strong ${altSurface} px-6 py-3.5 text-center text-[15.5px] font-semibold text-ink hover:bg-white`}
              >
                Get a free estimate
              </Link>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
