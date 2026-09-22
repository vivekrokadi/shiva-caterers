const values = [
  {
    title: "100% Pure Vegetarian",
    description: "Committed to authentic vegetarian cuisine with no compromise.",
  },
  {
    title: "Traditional Methods",
    description: "Time-honoured cooking techniques passed down through generations.",
  },
  {
    title: "Quality Ingredients",
    description: "Fresh and carefully selected ingredients for consistent taste.",
  },
  {
    title: "Professional Service",
    description: "Well-organized catering for celebrations of every scale.",
  },
];

export default function CoreValues() {
  return (
    <section className="bg-maroon-dark py-20 text-ivory md:py-24">
      <div className="container-shiva">
        <p className="eyebrow text-gold-light">The Shiva Standard</p>
        <div className="mt-4 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <h2 className="font-display text-4xl leading-tight sm:text-5xl">
            Care in every course.{" "}
            <span className="text-gold-light">Character in every bite.</span>
          </h2>
          <p className="max-w-sm text-sm leading-relaxed text-ivory/70">
            From the first welcome drink to the last sweet, our service is
            built around the generous spirit of Indian hospitality.
          </p>
        </div>

        <div className="mt-14 grid divide-y divide-ivory/15 border-t border-ivory/15 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-4">
          {values.map((value, i) => (
            <div key={value.title} className="px-1 py-8 sm:px-6 first:pl-0">
              <span className="text-xs font-semibold text-gold-light">
                0{i + 1}
              </span>
              <h3 className="mt-4 font-display text-xl text-ivory">
                {value.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-ivory/65">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}