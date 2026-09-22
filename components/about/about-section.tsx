import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-shiva grid gap-12 md:grid-cols-2 md:items-center md:gap-16">
        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-sm">
            <Image
              src="/images/gallery/shiva-caterers.jpeg"
              alt="A traditional vegetarian thali with rice, dal, sabzi and roti"
              fill
              sizes="(min-width: 768px) 40vw, 90vw"
              className="object-cover object-left"
            />
          </div>
          <div className="absolute -bottom-6 -right-4 flex h-24 w-24 flex-col items-center justify-center bg-maroon text-center text-ivory sm:h-28 sm:w-28">
            <span className="font-display text-sm leading-tight">शुद्ध</span>
            <span className="mt-1 text-[9px] font-semibold tracking-wide text-gold-light">
              PURE BY CHOICE
            </span>
          </div>
        </div>

        <div>
          <p className="eyebrow flex items-center gap-3">
            <span className="h-px w-8 bg-gold" /> Our Story
          </p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-charcoal sm:text-5xl">
            Rooted in tradition.{" "}
            <span className="text-gold">Made for celebrations.</span>
          </h2>

          <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-charcoal-soft">
            Shiva Caterers brings authentic vegetarian flavours and traditional
            cooking methods to weddings, engagements, family gatherings,
            religious ceremonies, corporate events and large celebrations.
          </p>
          <p className="mt-4 max-w-lg text-[15px] leading-relaxed text-charcoal-soft">
            For more than a decade, our team has focused on quality
            ingredients, thoughtful preparation and professional service — so
            every guest remembers not only the food, but how the celebration
            felt.
          </p>

          <div className="mt-8 grid grid-cols-2 gap-x-8 gap-y-5 border-t border-line pt-8">
            {[
              "Traditional cooking",
              "Quality ingredients",
              "Professional service",
              "Authentic flavours",
            ].map((item, i) => (
              <div key={item} className="flex items-baseline gap-3">
                <span className="font-display text-sm text-gold">
                  0{i + 1}
                </span>
                <span className="text-sm font-medium text-charcoal">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}