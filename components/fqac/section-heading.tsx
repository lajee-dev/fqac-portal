export function SectionHeading({
  eyebrow,
  title,
  text,
}: {
  eyebrow: string;
  title: string;
  text?: string;
}) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.22em] text-primary">
        {eyebrow}
      </p>
      <h2 className="text-balance font-serif text-3xl font-bold tracking-tight text-foreground md:text-5xl">
        {title}
      </h2>
      {text && (
        <p className="mx-auto mt-5 max-w-2xl text-pretty leading-7 text-muted-foreground">
          {text}
        </p>
      )}
    </div>
  );
}
