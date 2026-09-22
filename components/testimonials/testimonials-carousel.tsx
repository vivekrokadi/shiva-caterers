"use client";

import { useState } from "react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";

export default function TestimonialsCarousel() {
  const [index, setIndex] = useState(0);
  const current = testimonials[index];

  const prev = () =>
    setIndex((i) => (i === 0 ? testimonials.length - 1 : i - 1));
  const next = () =>
    setIndex((i) => (i === testimonials.length - 1 ? 0 : i + 1));

  return (
    <section id="reviews" className="py-20 md:py-28">
      <div className="container-shiva grid gap-10 md:grid-cols-[minmax(0,1fr)_2fr] md:items-center md:gap-16">
        <div>
          <p className="eyebrow">Words From Celebrations</p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-charcoal sm:text-5xl">
            The food is remembered. <span className="text-gold">The feeling stays.</span>
          </h2>
          <div className="mt-8 flex gap-3">
            <button
              type="button"
              onClick={prev}
              aria-label="Previous testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-charcoal hover:border-maroon hover:text-maroon"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              type="button"
              onClick={next}
              aria-label="Next testimonial"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-charcoal hover:border-maroon hover:text-maroon"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        <div className="border-t border-line pt-8 md:border-l md:border-t-0 md:pl-16 md:pt-0">
          <div className="flex gap-1 text-gold" aria-hidden="true">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={18} fill="currentColor" strokeWidth={0} />
            ))}
          </div>
          <blockquote className="mt-5 font-display text-2xl leading-snug text-maroon sm:text-3xl">
            &ldquo;{current.quote}&rdquo;
          </blockquote>
          <div className="mt-6 border-l-2 border-gold pl-4">
            <p className="text-sm font-semibold text-charcoal">{current.name}</p>
            <p className="eyebrow mt-0.5">{current.context}</p>
          </div>
        </div>
      </div>
    </section>
  );
}