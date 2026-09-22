const steps = [
  { title: "Tell Us About Your Event" },
  { title: "Choose Your Package / Menu" },
  { title: "Confirm Date & Guest Count" },
  { title: "Enjoy the Celebration" },
];

export default function HowItWorks() {
  return (
    <section className="bg-ivory-deep py-20 md:py-24">
      <div className="container-shiva text-center">
        <p className="eyebrow">A Smooth Beginning to End</p>
        <h2 className="mt-3 font-display text-4xl text-charcoal sm:text-5xl">
          How it works
        </h2>

        <div className="mt-16 flex flex-col gap-10 sm:flex-row sm:items-start sm:justify-between">
          {steps.map((step, i) => (
            <div key={step.title} className="relative flex-1">
              <div className="flex items-center">
                <span
                  className={`flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-gold font-display text-lg text-maroon ${
                    i === 0 ? "mx-auto sm:mx-0" : "mx-auto"
                  }`}
                >
                  0{i + 1}
                </span>
                {i < steps.length - 1 && (
                  <span className="hidden h-px flex-1 bg-gold/40 sm:block" />
                )}
              </div>
              <p className="mt-4 text-sm font-medium text-charcoal">
                {step.title}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}