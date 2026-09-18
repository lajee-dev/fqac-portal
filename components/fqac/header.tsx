"use client";

import { Menu, ShieldCheck, X } from "lucide-react";
import { nav } from "./data";

export function SiteHeader({
  mobileOpen,
  setMobileOpen,
}: {
  mobileOpen: boolean;
  setMobileOpen: (open: boolean) => void;
}) {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-4 lg:px-8">
        <a
          href="#home"
          className="flex items-center gap-3"
          onClick={() => setMobileOpen(false)}
        >
          <span className="grid size-11 place-items-center rounded-xl bg-primary text-primary-foreground shadow-sm">
            <ShieldCheck />
          </span>
          <span>
            <span className="block font-serif text-lg font-bold leading-none">
              FQAC
            </span>
            <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Faculty of Applied Science
            </span>
          </span>
        </a>
        <nav className="hidden items-center gap-5 xl:flex">
          {nav.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replaceAll(" ", "-")}`}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {item}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="hidden rounded-lg bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-transform hover:-translate-y-0.5 lg:block"
        >
          Connect with FQAC
        </a>
        <button
          aria-label="Toggle navigation"
          className="rounded-md p-2 lg:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X /> : <Menu />}
        </button>
      </div>
      {mobileOpen && (
        <nav className="border-t border-border bg-background px-5 py-4 lg:hidden">
          <div className="flex flex-col gap-4">
            {nav.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replaceAll(" ", "-")}`}
                onClick={() => setMobileOpen(false)}
                className="font-medium"
              >
                {item}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
