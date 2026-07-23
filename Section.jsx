export default function Section({
  id,
  eyebrow,
  title,
  description,
  tone = "dark",
  children,
  className = "",
}) {
  const toneClasses =
    tone === "light"
      ? "bg-parchment text-ink"
      : "bg-ink text-parchment";

  return (
    <section id={id} className={`${toneClasses} ${className}`}>
      <div className="mx-auto max-w-6xl px-6 py-20 sm:py-24 lg:px-8">
        {(eyebrow || title) && (
          <header className="mb-12 max-w-2xl">
            {eyebrow && (
              <p
                className={`eyebrow mb-4 ${
                  tone === "light" ? "text-seal-dark" : "text-brass"
                }`}
              >
                {eyebrow}
              </p>
            )}
            {title && (
              <h2 className="font-display text-3xl sm:text-4xl leading-tight">
                {title}
              </h2>
            )}
            {description && (
              <p
                className={`mt-4 text-base sm:text-lg ${
                  tone === "light" ? "text-ink/70" : "text-ash"
                }`}
              >
                {description}
              </p>
            )}
          </header>
        )}
        {children}
      </div>
    </section>
  );
}
