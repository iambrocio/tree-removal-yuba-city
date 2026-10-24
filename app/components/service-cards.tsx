import Link from "next/link";

const GUTTER = "px-5 sm:px-8 lg:px-14";

export type ServiceCard = {
  number: string;
  title: string;
  body: string;
  href?: string;
};

/**
 * The numbered four-up service grid. Shared by the homepage and the
 * `/tree-service-yuba-city` hub; cards with an `href` link to that service,
 * and `learnMore` adds a visible "Learn more" cue to those cards.
 */
export function ServiceCards({
  id,
  eyebrow,
  heading,
  cards,
  learnMore = false,
}: {
  id?: string;
  eyebrow: string;
  heading: string;
  cards: ServiceCard[];
  learnMore?: boolean;
}) {
  return (
    <section id={id} className={`${GUTTER} scroll-mt-4 bg-white py-20 lg:py-22`}>
      <div className="mb-11 text-center">
        <div className="mb-3.5 text-[12.5px] uppercase tracking-[0.16em] text-sage-deep">
          {eyebrow}
        </div>
        <h2 className="mx-auto max-w-[700px] text-[32px] leading-[1.1] font-bold tracking-[-0.03em] text-ink sm:text-[38px] lg:text-[44px]">
          {heading}
        </h2>
      </div>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {cards.map((card) => {
          const content = (
            <>
              <div className="mb-5 flex h-10 w-10 items-center justify-center rounded-full bg-forest text-[14px] font-semibold text-cream">
                {card.number}
              </div>
              <div className="mb-2.5 text-[20px] font-bold tracking-[-0.02em] text-ink">
                {card.title}
              </div>
              <p className="text-[15px] leading-[1.62] text-moss">{card.body}</p>
              {learnMore && card.href && (
                <span className="mt-auto pt-5 text-[15px] font-semibold text-forest">
                  Learn more →
                </span>
              )}
            </>
          );
          const className =
            "flex flex-col rounded-[22px] bg-cream p-8 transition-colors hover:bg-sand";

          return card.href ? (
            <Link key={card.number} href={card.href} className={className}>
              {content}
            </Link>
          ) : (
            <div key={card.number} className={className}>
              {content}
            </div>
          );
        })}
      </div>
    </section>
  );
}
