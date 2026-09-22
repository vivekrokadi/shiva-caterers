import { Download } from "lucide-react";

export default function MenuDownloadCta() {
  return (
    <section className="border-y border-line bg-ivory-deep">
      <div className="container-shiva flex flex-col items-start justify-between gap-6 py-12 sm:flex-row sm:items-center">
        <div>
          <p className="eyebrow">Plan Your Spread</p>
          <h2 className="mt-2 font-display text-3xl text-charcoal sm:text-4xl">
            Explore our complete menu
          </h2>
          <p className="mt-2 text-sm text-charcoal-soft">
            Browse the vegetarian menu collection we bring to every
            celebration.
          </p>
        </div>
        <a
          href="/menu/shiva-caterers-menu.pdf"
          download
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-maroon px-6 py-3 text-sm font-semibold text-ivory hover:bg-maroon-dark"
        >
          Download Full Menu <Download size={16} />
        </a>
      </div>
    </section>
  );
}