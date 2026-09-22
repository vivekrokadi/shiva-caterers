import { siteConfig } from "@/data/site";

export default function TrustStrip() {
  return (
    <section className="border-b border-line bg-ivory-deep">
      <div className="container-shiva grid grid-cols-3 divide-x divide-line">
        {siteConfig.stats.map((stat) => (
          <div
            key={stat.value}
            className="flex flex-col items-center gap-1 py-8 text-center sm:flex-row sm:justify-center sm:gap-3"
          >
            <span className="font-display text-3xl text-maroon sm:text-4xl">
              {stat.value}
            </span>
            <span className="text-xs font-medium leading-tight text-charcoal-soft sm:text-left">
              {stat.label.split("\n").map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}