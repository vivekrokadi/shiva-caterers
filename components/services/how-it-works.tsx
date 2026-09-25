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

        {/* Using standard vertical gap for mobile, turning into a clean 4-column grid on desktop */}
        <div className="mt-16 grid grid-cols-1 gap-12 sm:grid-cols-4 sm:gap-6">
          {steps.map((step, i) => (
            <div key={step.title} className="group relative flex flex-col items-center text-center">
              
              {/* Connecting Lines: Rendered ONLY on desktop views (sm:) and hidden on mobile */}
              {i < steps.length - 1 && (
                <span className="hidden absolute left-[60%] right-[-40%] top-8 h-px bg-gold/30 sm:block" />
              )}

              {/* Number Circle: Clean, centered, and interactive */}
              <div className="relative z-10 flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-gold bg-ivory-deep font-display text-lg text-maroon transition-transform duration-300 group-hover:scale-105">
                0{i + 1}
              </div>

              {/* Step Title: Balanced alignment with a max-width boundary */}
              <p className="mt-5 max-w-[180px] text-base font-medium text-charcoal">
                {step.title}
              </p>
              
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
  