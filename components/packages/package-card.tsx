"use client";

import { useState } from "react";
import { Check, X } from "lucide-react";
import type { CateringPackage } from "@/data/packages";
import { whatsappLink } from "@/data/site";

export default function PackageCard({ pkg }: { pkg: CateringPackage }) {
  const [open, setOpen] = useState(false);
  const featured = pkg.mostChosen;

  return (
    <>
      <div
        className={`relative flex flex-col border p-8 ${
          featured
            ? "border-maroon bg-ivory shadow-[0_18px_40px_-24px_rgba(91,18,32,0.45)] md:-translate-y-3"
            : "border-line bg-ivory-deep/60"
        }`}
      >
        {featured && (
          <span className="absolute right-8 top-8 rounded-full bg-maroon px-3 py-1 text-[10px] font-semibold tracking-wide text-ivory">
            Most Chosen
          </span>
        )}

        <p className="eyebrow">{pkg.eyebrow}</p>
        <h3 className="mt-3 font-display text-4xl text-charcoal">{pkg.name}</h3>
        <p className="mt-3 text-sm leading-relaxed text-charcoal-soft">
          {pkg.tagline}
        </p>

        <div className="mt-6 border-t border-line pt-6">
          {pkg.price !== null ? (
            <p className="flex items-baseline gap-2">
              <span className="font-display text-3xl text-maroon">
                ₹{pkg.price}
              </span>
              <span className="text-sm text-charcoal-soft">
                {pkg.priceUnit}
              </span>
            </p>
          ) : (
            <p className="font-display text-2xl text-maroon">
              Enquire{" "}
              <span className="font-sans text-sm font-normal text-charcoal-soft">
                for a tailored quote
              </span>
            </p>
          )}
          <p className="mt-1 text-xs font-semibold tracking-wide text-gold">
            {pkg.guestRange.toUpperCase()}
          </p>
        </div>

        <ul className="mt-6 space-y-3">
          {pkg.highlights.map((h) => (
            <li
              key={h}
              className="flex items-start gap-2.5 text-sm text-charcoal"
            >
              <Check size={16} className="mt-0.5 shrink-0 text-gold" />
              {h}
            </li>
          ))}
        </ul>

        <p className="mt-6 text-xs leading-relaxed text-charcoal-soft">
          {pkg.footnote}
        </p>

        <div className="mt-6 flex gap-3">
          <button
            type="button"
            onClick={() => setOpen(true)}
            className="flex-1 rounded-full border border-charcoal/25 px-4 py-2.5 text-xs font-semibold tracking-wide text-charcoal transition-colors hover:border-maroon hover:text-maroon"
          >
            View Menu
          </button>
          <a
            href={whatsappLink(
              `Hi Shiva Caterers, I'd like to enquire about the ${pkg.name} package.`,
            )}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 rounded-full bg-maroon px-4 py-2.5 text-center text-xs font-semibold tracking-wide text-ivory transition-colors hover:bg-maroon-dark"
          >
            Enquire
          </a>
        </div>
      </div>

      {open && (
        <div
          className="fixed inset-0 z-[60] flex items-end justify-center bg-charcoal/50 p-0 sm:items-center sm:p-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby={`${pkg.slug}-menu-heading`}
          onClick={() => setOpen(false)}
        >
          <div
            className="max-h-[85vh] w-full max-w-2xl overflow-y-auto rounded-t-2xl bg-ivory p-6 sm:rounded-2xl sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="eyebrow">{pkg.eyebrow}</p>
                <h3
                  id={`${pkg.slug}-menu-heading`}
                  className="mt-2 font-display text-3xl text-charcoal"
                >
                  {pkg.name} Menu
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close menu"
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line text-charcoal hover:border-maroon hover:text-maroon"
              >
                <X size={18} />
              </button>
            </div>
            <p className="mt-2 text-sm text-charcoal-soft">
              Exact selection is planned around your event and guest count.
            </p>

            <div className="mt-6 grid gap-x-8 gap-y-7 border-t border-line pt-6 sm:grid-cols-2">
              {pkg.categories.map((cat) => (
                <div key={cat.name}>
                  <div className="flex items-baseline justify-between gap-2">
                    <h4 className="font-display text-lg text-maroon">
                      {cat.name}
                    </h4>
                    {cat.selectionText && (
                      <span className="text-[11px] font-semibold tracking-wide text-gold">
                        {cat.selectionText.toUpperCase()}
                      </span>
                    )}
                  </div>
                  {cat.items.length > 0 ? (
                    <div className="mt-3 flex flex-wrap gap-2">
                      {cat.items.map((item) => (
                        <span
                          key={item}
                          className="rounded-full border border-line bg-ivory-deep/70 px-3 py-1.5 text-xs text-charcoal"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  ) : (
                    <p className="mt-3 text-xs italic text-charcoal-soft">
                      Menu items shared during planning.
                    </p>
                  )}
                </div>
              ))}
            </div>

            <a
              href={whatsappLink(
                `Hi Shiva Caterers, I'd like to enquire about the ${pkg.name} package.`,
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 block rounded-full bg-maroon px-6 py-3 text-center text-sm font-semibold text-ivory hover:bg-maroon-dark"
            >
              Enquire About {pkg.name}
            </a>
          </div>
        </div>
      )}
    </>
  );
}
