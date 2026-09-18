import { getLecturerStats } from "@/lib/getLecturerStats";

const expectedLevels = ["PhD", "MSc", "BSc"];

export function LecturerStatsSkeleton() {
  return (
    <section
      aria-label="Loading lecturer statistics"
      className="bg-secondary/60 px-5 py-16 lg:px-8"
    >
      <div className="mx-auto max-w-7xl animate-pulse">
        <div className="mx-auto h-4 max-w-32 rounded bg-muted" />
        <div className="mx-auto mt-3 h-10 max-w-md rounded bg-muted" />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {["PhD", "MSc", "BSc"].map((level) => (
            <div
              key={level}
              className="h-36 rounded-2xl border border-border bg-card p-6"
            >
              <div className="h-4 w-16 rounded bg-muted" />
              <div className="mt-6 h-10 w-24 rounded bg-muted" />
            </div>
          ))}
        </div>
        <div className="mx-auto mt-4 h-36 max-w-sm rounded-2xl border border-border bg-card p-6">
          <div className="h-4 w-16 rounded bg-muted" />
          <div className="mt-6 h-10 w-24 rounded bg-muted" />
        </div>
      </div>
    </section>
  );
}

export default async function LecturerStats() {
  const stats = await getLecturerStats();

  if (stats.length === 0) {
    return (
      <section className="bg-secondary/60 px-5 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Lecturer statistics
          </p>
          <p className="mt-4 text-muted-foreground">
            Lecturer statistics are not available right now. Please check back
            soon.
          </p>
        </div>
      </section>
    );
  }

  const statsByLevel = new Map(stats.map((stat) => [stat.level, stat.count]));
  const total = stats.reduce((sum, stat) => sum + stat.count, 0);

  return (
    <section className="bg-secondary/60 px-5 py-16 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Lecturer statistics
          </p>
          <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Our lecturers at a glance
          </h2>
        </div>
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {expectedLevels.map((level) => (
            <article
              key={level}
              className="rounded-2xl border border-border bg-card p-6 text-center shadow-sm"
            >
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                {level}
              </p>
              <p className="mt-4 font-serif text-5xl font-bold text-primary">
                {statsByLevel.get(level) ?? 0}
              </p>
              <p className="mt-2 text-sm text-muted-foreground">lecturers</p>
            </article>
          ))}
        </div>
        <article className="mx-auto mt-4 max-w-sm rounded-2xl bg-primary p-6 text-center text-primary-foreground shadow-sm">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-foreground/70">
            Total
          </p>
          <p className="mt-4 font-serif text-5xl font-bold text-accent">
            {total}
          </p>
          <p className="mt-2 text-sm text-primary-foreground/70">lecturers</p>
        </article>
      </div>
    </section>
  );
}
