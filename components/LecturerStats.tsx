import { BookOpen, GraduationCap, Microscope } from "lucide-react";
import { getLecturerStats } from "@/lib/getLecturerStats";

const expectedLevels = [
  {
    name: "PhD",
    icon: GraduationCap,
    tone: "bg-accent text-accent-foreground",
  },
  { name: "MSc", icon: Microscope, tone: "bg-secondary text-primary" },
  { name: "BSc", icon: BookOpen, tone: "bg-secondary text-primary" },
];

export function LecturerStatsSkeleton() {
  return (
    <section
      aria-label="Loading lecturer statistics"
      className="bg-secondary/60 px-5 py-16 lg:px-8"
    >
      <div className="mx-auto max-w-7xl animate-pulse">
        <div className="h-4 max-w-32 rounded bg-muted" />
        <div className="mt-3 h-10 max-w-md rounded bg-muted" />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {["PhD", "MSc", "BSc"].map((level) => (
            <div
              key={level}
              className="h-40 rounded-2xl border border-border bg-card p-6"
            >
              <div className="h-11 w-11 rounded-xl bg-muted" />
              <div className="mt-8 h-10 w-24 rounded bg-muted" />
            </div>
          ))}
        </div>
        <div className="mt-5 h-24 rounded-2xl bg-muted" />
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
    <section className="bg-secondary/60 px-5 py-20 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col justify-between gap-6 border-b border-border pb-8 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">
              Faculty profile
            </p>
            <h2 className="mt-3 font-serif text-3xl font-bold tracking-tight text-foreground md:text-4xl">
              Lecturer qualifications
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-muted-foreground md:text-right">
            Academic staff across the Faculty of Applied Science, grouped by
            highest qualification.
          </p>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {expectedLevels.map(({ name: level, icon: Icon, tone }) => {
            const count = statsByLevel.get(level) ?? 0;
            const percentage = total ? (count / total) * 100 : 0;

            return (
              <article
                key={level}
                className="rounded-2xl border border-border bg-card p-6 shadow-sm transition-transform hover:-translate-y-1"
              >
                <div className="flex items-start justify-between">
                  <span
                    className={`grid size-11 place-items-center rounded-xl ${tone}`}
                  >
                    <Icon className="size-5" />
                  </span>
                  <span className="rounded-full bg-secondary px-3 py-1 text-xs font-semibold text-muted-foreground">
                    {Math.round(percentage)}%
                  </span>
                </div>
                <div className="mt-8 flex items-end justify-between gap-4">
                  <div>
                    <p className="text-sm font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                      {level}
                    </p>
                    <p className="mt-2 font-serif text-5xl font-bold text-primary">
                      {count}
                    </p>
                  </div>
                  <p className="pb-1 text-sm text-muted-foreground">
                    lecturers
                  </p>
                </div>
                <div className="mt-5 h-1.5 overflow-hidden rounded-full bg-secondary">
                  <div
                    className="h-full rounded-full bg-primary"
                    style={{ width: `${percentage}%` }}
                  />
                </div>
              </article>
            );
          })}
        </div>
        <article className="mt-5 flex flex-col justify-between gap-5 rounded-2xl bg-primary p-6 text-primary-foreground shadow-sm sm:flex-row sm:items-center sm:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-foreground/70">
              Faculty total
            </p>
            <p className="mt-2 text-sm text-primary-foreground/75">
              Teaching staff represented in the current faculty profile.
            </p>
          </div>
          <p className="font-serif text-5xl font-bold text-accent">{total}</p>
        </article>
      </div>
    </section>
  );
}
