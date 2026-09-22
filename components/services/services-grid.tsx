import { services } from "@/data/services";

export default function ServicesGrid() {
  return (
    <section className="py-20 md:py-28">
      <div className="container-shiva">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="eyebrow">For Every Kind of Gathering</p>
            <h2 className="mt-4 max-w-lg font-display text-4xl leading-tight text-charcoal sm:text-5xl">
              Made for the <span className="text-gold">moments that matter.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-charcoal-soft">
            Whether it is an intimate family ceremony or a large public
            gathering, Shiva Caterers brings the same care, clarity and pure
            vegetarian promise to every table.
          </p>
        </div>

        <div className="mt-14 grid gap-x-10 gap-y-10 border-t border-line pt-10 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <div key={service.slug} className="border-b border-line pb-8">
              <span className="text-xs font-semibold text-gold">
                0{i + 1}
              </span>
              <h3 className="mt-3 font-display text-2xl text-maroon">
                {service.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-charcoal-soft">
                {service.description}
              </p>
            </div>
          ))}
        </div>

        <p className="mt-10 max-w-2xl text-sm leading-relaxed text-charcoal-soft">
          Shiva Caterers also handles large public gatherings and community
          events — from opening ceremonies to civic functions — with the same
          discipline and pure vegetarian standard applied to every table.
        </p>
      </div>
    </section>
  );
}