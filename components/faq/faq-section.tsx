"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { faqs } from "@/data/faqs";
import { whatsappLink } from "@/data/site";

export default function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-20 md:py-28">
      <div className="container-shiva grid gap-10 md:grid-cols-[minmax(0,1fr)_1.6fr] md:gap-16">
        <div>
          <p className="eyebrow flex items-center gap-3">
            <span className="h-px w-8 bg-gold" /> Good to Know
          </p>
          <h2 className="mt-4 font-display text-4xl leading-tight text-charcoal sm:text-5xl">
            Frequently asked <span className="text-gold">questions.</span>
          </h2>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-charcoal-soft">
            Can&apos;t find what you&apos;re looking for?
          </p>
          <a
            href={whatsappLink("Hi Shiva Caterers, I have a question about catering for my event.")}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 rounded-full border border-charcoal/25 px-5 py-2.5 text-xs font-semibold tracking-wide text-charcoal hover:border-maroon hover:text-maroon"
          >
            Ask us on WhatsApp
          </a>
        </div>

        <div className="divide-y divide-line border-t border-line">
          {faqs.map((faq, i) => {
            const open = openIndex === i;
            return (
              <div key={faq.question}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? null : i)}
                  aria-expanded={open}
                  aria-controls={`faq-panel-${i}`}
                  className="flex w-full items-center justify-between gap-6 py-5 text-left"
                >
                  <span className="font-display text-lg text-charcoal sm:text-xl">
                    {faq.question}
                  </span>
                  <Plus
                    size={18}
                    className={`shrink-0 text-gold transition-transform duration-200 ${
                      open ? "rotate-45" : ""
                    }`}
                  />
                </button>
                <div
                  id={`faq-panel-${i}`}
                  role="region"
                  className={`grid overflow-hidden transition-all duration-200 ${
                    open ? "grid-rows-[1fr] pb-5" : "grid-rows-[0fr]"
                  }`}
                >
                  <p className="min-h-0 max-w-xl text-sm leading-relaxed text-charcoal-soft">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}