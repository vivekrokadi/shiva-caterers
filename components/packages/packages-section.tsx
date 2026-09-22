import { MessageCircle } from "lucide-react";
import { packages } from "@/data/packages";
import { whatsappLink } from "@/data/site";
import PackageCard from "./package-card";

export default function PackagesSection() {
  return (
    <section id="packages" className="py-20 md:py-28">
      <div className="container-shiva">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow flex items-center gap-3">
              <span className="h-px w-8 bg-gold" /> Curated for Your Occasion
            </p>
            <h2 className="mt-4 max-w-lg font-display text-4xl leading-tight text-charcoal sm:text-5xl">
              Choose your celebration{" "}
              <span className="text-gold">package.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-charcoal-soft">
            Thoughtfully structured vegetarian menus for different occasions,
            guest sizes and celebrations. Final choices are planned with you.
          </p>
        </div>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {packages.map((pkg) => (
            <PackageCard key={pkg.slug} pkg={pkg} />
          ))}
        </div>
      </div>

      <div className="container-shiva mt-14">
        <div className="flex flex-col items-start justify-between gap-6 bg-ivory-deep px-8 py-10 sm:flex-row sm:items-center">
          <div>
            <p className="eyebrow">Your Occasion, Your Menu</p>
            <h3 className="mt-2 font-display text-2xl text-charcoal sm:text-3xl">
              Need a custom menu?
            </h3>
            <p className="mt-2 max-w-md text-sm leading-relaxed text-charcoal-soft">
              Every celebration is different. Tell us your guest count, event
              type and food preferences, and we&apos;ll help you plan the
              right menu.
            </p>
          </div>
          <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
            <a
              href="/contact"
              className="rounded-full bg-maroon px-6 py-3 text-center text-sm font-semibold text-ivory hover:bg-maroon-dark"
            >
              Plan My Menu
            </a>
            <a
              href={whatsappLink()}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-charcoal/25 px-6 py-3 text-sm font-semibold text-charcoal hover:border-maroon hover:text-maroon"
            >
              <MessageCircle size={16} /> WhatsApp Shiva
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}