"use client";

import {
  ArrowRight,
  CalendarDays,
  CheckCircle2,
  ChevronDown,
  FileText,
  ImageIcon,
  Landmark,
  Mail,
  MessageSquareQuote,
  Phone,
  Search,
  Sparkles,
  Users,
} from "lucide-react";
import { SectionHeading } from "./section-heading";
import {
  committeeRoles,
  documentLibrary,
  faqs,
  governancePillars,
  meetingRecords,
  officialHighlights,
  recentNews,
  services,
} from "./data";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative overflow-hidden border-b border-border bg-primary text-primary-foreground"
    >
      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-20 lg:grid-cols-[1.1fr_.9fr] lg:items-center lg:px-8 lg:py-28">
        <div>
          <p className="mb-6 flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.2em] text-primary-foreground/70">
            <Sparkles className="size-4" /> Faculty quality assurance cell
          </p>
          <h1 className="max-w-3xl text-balance font-serif text-5xl font-bold leading-[1.02] tracking-tight md:text-7xl">
            Building a culture of{" "}
            <span className="text-accent">continuous improvement.</span>
          </h1>
          <p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-primary-foreground/80">
            The Faculty Quality Assurance Cell supports academic excellence,
            meaningful evidence and better experiences for every student at the
            Faculty of Applied Science, University of Vavuniya.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a
              href="#about"
              className="inline-flex items-center gap-2 rounded-lg bg-accent px-5 py-3 font-semibold text-accent-foreground transition-transform hover:-translate-y-0.5"
            >
              Explore our work <ArrowRight className="size-4" />
            </a>
            <a
              href="#downloads"
              className="inline-flex items-center gap-2 rounded-lg border border-primary-foreground/25 px-5 py-3 font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              Resource library
            </a>
          </div>
        </div>
        <div className="relative">
          <div className="rounded-2xl border border-primary-foreground/15 bg-primary-foreground/10 p-7 shadow-2xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary-foreground/60">
              Our focus
            </p>
            <div className="mt-8 grid gap-5">
              {[
                ["01", "Evidence", "Making decisions with clarity and care."],
                [
                  "02",
                  "Dialogue",
                  "Creating space for honest academic conversations.",
                ],
                [
                  "03",
                  "Enhancement",
                  "Turning reflection into practical action.",
                ],
              ].map(([number, title, text]) => (
                <div
                  key={number}
                  className="flex gap-4 border-t border-primary-foreground/15 pt-5"
                >
                  <span className="font-mono text-sm text-accent">
                    {number}
                  </span>
                  <div>
                    <h3 className="font-serif text-2xl font-bold">{title}</h3>
                    <p className="mt-1 text-sm leading-6 text-primary-foreground/70">
                      {text}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function AboutSection() {
  return (
    <section
      id="about"
      className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28"
    >
      <SectionHeading
        eyebrow="Why we exist"
        title="Quality is a shared responsibility."
        text="FQAC works under the University’s Centre for Quality Assurance to strengthen academic standards through reflection, evidence and collaborative enhancement."
      />
      <div className="mt-14 grid gap-5 md:grid-cols-3">
        {[
          [
            "Mission",
            "To nurture a culture of quality that supports excellent teaching, learning and scholarship.",
          ],
          [
            "Vision",
            "A faculty recognised for thoughtful, inclusive and continuously improving academic provision.",
          ],
          [
            "Our role",
            "Connecting SLQF and OBE expectations with the lived experience of programmes, staff and students.",
          ],
        ].map(([title, text]) => (
          <article
            key={title}
            className="rounded-2xl border border-border bg-card p-7 shadow-sm"
          >
            <div className="mb-8 grid size-11 place-items-center rounded-lg bg-secondary text-primary">
              <CheckCircle2 className="size-5" />
            </div>
            <h3 className="font-serif text-2xl font-bold">{title}</h3>
            <p className="mt-3 leading-7 text-muted-foreground">{text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function GovernanceSection() {
  return (
    <section className="bg-secondary/60 px-5 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Governance"
          title="How the faculty strengthens quality"
          text="Quality assurance is implemented through structured review, evidence-driven action and transparent communication across departments and committees."
        />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {governancePillars.map(([title, text]) => (
            <article
              key={title}
              className="rounded-2xl border border-border bg-background p-6 shadow-sm"
            >
              <h3 className="font-serif text-2xl font-bold text-foreground">
                {title}
              </h3>
              <p className="mt-4 leading-7 text-muted-foreground">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ServicesSection() {
  return (
    <section className="bg-secondary/60 px-5 py-20 lg:px-8 lg:py-28">
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="How we help"
          title="Our services"
          text="Practical support for review, reflection and meaningful quality enhancement across the faculty."
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(([title, Icon, text]) => (
            <article
              key={title}
              className="group rounded-2xl border border-border bg-background p-6 transition-all hover:-translate-y-1 hover:shadow-lg"
            >
              <Icon className="size-7 text-primary" />
              <h3 className="mt-7 font-serif text-xl font-bold">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {text}
              </p>
              <ArrowRight className="mt-6 size-4 text-primary transition-transform group-hover:translate-x-1" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function QuoteSection() {
  return (
    <section className="mx-auto grid max-w-7xl gap-10 px-5 py-20 lg:grid-cols-[.8fr_1.2fr] lg:items-center lg:px-8 lg:py-28">
      <div className="aspect-[4/5] overflow-hidden rounded-2xl bg-secondary">
        <div className="flex h-full flex-col items-center justify-center gap-4 text-center text-muted-foreground">
          <Users className="size-12 text-primary/60" />
          <p className="max-w-[12rem] text-sm">
            Coordinator portrait
            <br />
            coming soon
          </p>
        </div>
      </div>
      <div>
        <MessageSquareQuote className="size-10 text-accent" />
        <blockquote className="mt-6 font-serif text-3xl font-bold leading-tight md:text-4xl">
          “Quality assurance is not an inspection at the end. It is the
          thoughtful work we do together, every day, to help our students
          flourish.”
        </blockquote>
        <div className="mt-8 border-l-2 border-primary pl-4">
          <p className="font-semibold">Coordinator, FQAC</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Faculty of Applied Science · University of Vavuniya
          </p>
        </div>
      </div>
    </section>
  );
}

export function MembersSection({
  openCommittee,
  setOpenCommittee,
}: {
  openCommittee: boolean;
  setOpenCommittee: (open: boolean) => void;
}) {
  return (
    <section
      id="members"
      className="bg-primary px-5 py-20 text-primary-foreground lg:px-8 lg:py-28"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="People behind the process"
          title="Meet the FQAC community"
          text="A cross-faculty team bringing academic leadership, professional expertise and student voice together."
        />
        <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {committeeRoles.map((member, index) => (
            <div
              key={member}
              className="rounded-xl border border-primary-foreground/15 bg-primary-foreground/10 p-5"
            >
              <div className="mb-6 grid size-10 place-items-center rounded-full bg-accent font-serif font-bold text-accent-foreground">
                {index + 1}
              </div>
              <p className="font-semibold">{member}</p>
              <p className="mt-1 text-sm text-primary-foreground/60">
                Faculty of Applied Science
              </p>
            </div>
          ))}
        </div>
        <div className="mt-12 rounded-2xl border border-primary-foreground/15 bg-primary-foreground/10 p-6">
          <button
            className="flex w-full items-center justify-between text-left font-serif text-2xl font-bold"
            onClick={() => setOpenCommittee(!openCommittee)}
          >
            Programme & Institutional Review Committees
            <ChevronDown
              className={
                "transition-transform " + (openCommittee ? "rotate-180" : "")
              }
            />
          </button>
          {openCommittee && (
            <div className="mt-6 grid gap-3 border-t border-primary-foreground/15 pt-6 md:grid-cols-2">
              {[
                "Programme Management",
                "Human & Physical Resources",
                "Programme Design & Development",
                "Course / Module Design & Development",
                "Teaching & Learning",
                "Learning Environment & Student Support",
                "Student Assessment & Awards",
                "Innovative & Healthy Practices",
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-lg bg-primary-foreground/10 px-4 py-3 text-sm"
                >
                  {item}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export function HighlightsSection() {
  return (
    <section className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
      <SectionHeading
        eyebrow="Official updates"
        title="Recent quality assurance highlights"
        text="Institutional progress, evidence reviews and faculty-level actions that support continuous improvement at the Faculty of Applied Science."
      />
      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {officialHighlights.map((item) => (
          <article
            key={item.title}
            className="rounded-2xl border border-border bg-card p-6 shadow-sm"
          >
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-primary">
              {item.date}
            </p>
            <h3 className="mt-5 font-serif text-2xl font-bold leading-tight">
              {item.title}
            </h3>
            <p className="mt-3 leading-7 text-muted-foreground">{item.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function EventsSection() {
  return (
    <section
      id="events"
      className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28"
    >
      <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
        <SectionHeading eyebrow="Stay informed" title="Latest events & news" />
        <a
          href="#meetings"
          className="inline-flex items-center gap-2 font-semibold text-primary"
        >
          View meetings <ArrowRight className="size-4" />
        </a>
      </div>
      <div className="mt-12 grid gap-5 lg:grid-cols-3">
        {recentNews.map((event) => (
          <article
            key={event.title}
            className="rounded-2xl border border-border bg-card p-6 shadow-sm"
          >
            <p className="flex items-center gap-2 text-sm font-semibold text-primary">
              <CalendarDays className="size-4" /> {event.date}
            </p>
            <h3 className="mt-7 font-serif text-2xl font-bold leading-tight">
              {event.title}
            </h3>
            <p className="mt-3 leading-7 text-muted-foreground">{event.text}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

export function MeetingsSection() {
  return (
    <section
      id="meetings"
      className="border-y border-border bg-secondary/50 px-5 py-20 lg:px-8"
    >
      <div className="mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Governance"
          title="Meetings & action plans"
          text="Transparent records that help the faculty move from reflection to accountable action."
        />
        <div className="mx-auto mt-12 max-w-4xl overflow-hidden rounded-2xl border border-border bg-background shadow-sm">
          {meetingRecords.map((item, index) => (
            <div
              key={item.title}
              className={
                "grid grid-cols-[1fr_auto] gap-4 p-5 " +
                (index !== meetingRecords.length - 1
                  ? "border-b border-border"
                  : "")
              }
            >
              <div>
                <p className="font-semibold text-foreground">{item.title}</p>
                <p className="mt-1 text-sm text-muted-foreground">
                  {item.date}
                </p>
              </div>
              <a href="#downloads" className="text-primary">
                {item.status}
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function DownloadsSection() {
  return (
    <section
      id="downloads"
      className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28"
    >
      <SectionHeading
        eyebrow="Resources"
        title="Downloads & document library"
        text="A growing collection of quality assurance resources, reports and guidance."
      />
      <div className="mx-auto mt-12 max-w-4xl">
        <div className="flex items-center gap-3 rounded-xl border border-border bg-card px-4 py-3 shadow-sm">
          <Search className="size-5 text-muted-foreground" />
          <input
            aria-label="Search documents"
            placeholder="Search documents by title, category or year"
            className="w-full bg-transparent outline-none placeholder:text-muted-foreground"
          />
        </div>
        <div className="mt-5 grid gap-3">
          {documentLibrary.map((document) => (
            <a
              href="#contact"
              key={document.name}
              className="flex items-center justify-between rounded-xl border border-border p-5 transition-colors hover:bg-secondary"
            >
              <span className="flex items-center gap-3 font-semibold">
                <FileText className="size-5 text-primary" />
                {document.name}
              </span>
              <span className="text-sm text-muted-foreground">
                {document.type} · {document.year}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function GallerySection() {
  return (
    <section id="gallery" className="bg-secondary/60 px-5 py-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <SectionHeading eyebrow="In the faculty" title="Gallery" />
        <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
          {[
            "Review conversations",
            "Learning together",
            "Faculty community",
            "Quality in practice",
          ].map((label, index) => (
            <div
              key={label}
              className={
                "flex aspect-square items-end rounded-2xl bg-primary p-5 text-primary-foreground " +
                (index === 1 ? "lg:col-span-2 lg:row-span-2" : "")
              }
            >
              <div>
                <ImageIcon className="mb-4 size-6 text-accent" />
                <p className="font-serif text-xl font-bold">{label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function FaqSection({
  openFaq,
  setOpenFaq,
}: {
  openFaq: number;
  setOpenFaq: (index: number) => void;
}) {
  return (
    <section id="faqs" className="mx-auto max-w-4xl px-5 py-20 lg:py-28">
      <SectionHeading
        eyebrow="Questions, answered"
        title="Frequently asked questions"
      />
      <div className="mt-12 divide-y divide-border rounded-2xl border border-border bg-card px-6">
        {faqs.map(([question, answer], index) => (
          <div key={question} className="py-5">
            <button
              className="flex w-full items-center justify-between gap-4 text-left font-semibold"
              onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
            >
              {question}
              <ChevronDown
                className={
                  "size-5 shrink-0 text-primary transition-transform " +
                  (openFaq === index ? "rotate-180" : "")
                }
              />
            </button>
            {openFaq === index && (
              <p className="mt-3 max-w-3xl leading-7 text-muted-foreground">
                {answer}
              </p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

export function ContactSection({
  sent,
  setSent,
}: {
  sent: boolean;
  setSent: (sent: boolean) => void;
}) {
  return (
    <section
      id="contact"
      className="bg-primary px-5 py-20 text-primary-foreground lg:px-8 lg:py-28"
    >
      <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[.8fr_1.2fr]">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-foreground/60">
            Contact FQAC
          </p>
          <h2 className="mt-4 font-serif text-4xl font-bold md:text-5xl">
            Let&apos;s improve together.
          </h2>
          <div className="mt-10 flex flex-col gap-5 text-primary-foreground/80">
            <p className="flex gap-3">
              <Landmark className="size-5 shrink-0 text-accent" /> Faculty of
              Applied Science, Pampaimadu, Vavuniya
            </p>
            <p className="flex gap-3">
              <Phone className="size-5 shrink-0 text-accent" /> +94 24 222 XXXX
            </p>
            <p className="flex gap-3">
              <Mail className="size-5 shrink-0 text-accent" /> fqac@vau.ac.lk
            </p>
          </div>
        </div>
        <form
          className="rounded-2xl bg-background p-6 text-foreground shadow-xl md:p-8"
          onSubmit={(event) => {
            event.preventDefault();
            setSent(true);
          }}
        >
          {sent ? (
            <div className="flex min-h-64 flex-col items-center justify-center text-center">
              <CheckCircle2 className="size-12 text-primary" />
              <h3 className="mt-5 font-serif text-2xl font-bold">
                Message received
              </h3>
              <p className="mt-2 text-muted-foreground">
                Thank you. The FQAC team will be in touch.
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-5">
              <div>
                <label
                  htmlFor="name"
                  className="mb-2 block text-sm font-semibold"
                >
                  Name
                </label>
                <input
                  id="name"
                  required
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-semibold"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  required
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-sm font-semibold"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={4}
                  className="w-full resize-none rounded-lg border border-border bg-background px-4 py-3 outline-none focus:ring-2 focus:ring-ring"
                />
              </div>
              <button className="rounded-lg bg-primary px-5 py-3 font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5">
                Send message
              </button>
            </div>
          )}
        </form>
      </div>
    </section>
  );
}
