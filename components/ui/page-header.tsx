export default function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="border-b border-line bg-ivory-deep py-16 md:py-20">
      <div className="container-shiva">
        <p className="eyebrow flex items-center gap-3">
          <span className="h-px w-8 bg-gold" /> {eyebrow}
        </p>
        <h1 className="mt-4 max-w-2xl font-display text-4xl leading-tight text-charcoal sm:text-5xl">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-charcoal-soft">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}