"use client";

import { useState } from "react";
import Image from "next/image";
import { galleryCategories, galleryItems, type GalleryCategory } from "@/data/gallery";

export default function GalleryGrid() {
  const [active, setActive] = useState<GalleryCategory>("All");

  const filtered =
    active === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.category === active);

  const featured = filtered.find((i) => i.featured) ?? filtered[0];
  const rest = filtered.filter((i) => i !== featured).slice(0, 4);

  return (
    <section id="gallery" className="bg-maroon-dark py-20 text-ivory md:py-28">
      <div className="container-shiva">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow text-gold-light">A Taste of the Table</p>
            <h2 className="mt-4 font-display text-4xl leading-tight sm:text-5xl">
              Moments we&apos;ve catered
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-ivory/70">
            A glimpse at the warmth, colour and abundance we bring to every
            celebration.
          </p>
        </div>

        <div className="mt-8 flex flex-wrap gap-2">
          {galleryCategories.map((cat) => (
            <button
              key={cat}
              type="button"
              onClick={() => setActive(cat)}
              aria-pressed={active === cat}
              className={`rounded-full border px-4 py-2 text-xs font-semibold tracking-wide transition-colors ${
                active === cat
                  ? "border-gold-light bg-gold-light text-maroon-dark"
                  : "border-ivory/30 text-ivory/80 hover:border-gold-light"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {featured ? (
          <div className="mt-10 grid gap-3 md:grid-cols-[1.35fr_1fr]">
            <div className="relative aspect-[4/3] overflow-hidden md:aspect-auto">
              <Image
                src={featured.src}
                alt={featured.alt}
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
              {featured.caption && (
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-charcoal/70 to-transparent p-6">
                  <p className="text-sm font-medium text-ivory">
                    {featured.caption}
                  </p>
                  <p className="text-[10px] font-semibold tracking-wide text-gold-light">
                    {featured.category.toUpperCase()}
                  </p>
                </div>
              )}
            </div>

            {rest.length > 0 && (
              <div className="grid grid-cols-2 grid-rows-2 gap-3">
                {rest.map((item) => (
                  <div key={item.src} className="relative aspect-square overflow-hidden">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(min-width: 768px) 25vw, 50vw"
                      className="object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        ) : (
          <p className="mt-10 text-sm text-ivory/60">
            Photos for this category are coming soon.
          </p>
        )}
      </div>
    </section>
  );
}