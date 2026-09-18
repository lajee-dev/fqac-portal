export function SiteFooter() {
  return (
    <footer className="bg-primary px-5 pb-8 text-primary-foreground lg:px-8">
      <div className="mx-auto flex max-w-7xl flex-col gap-5 border-t border-primary-foreground/15 pt-7 text-sm text-primary-foreground/60 md:flex-row md:items-center md:justify-between">
        <p>© 2025 Faculty Quality Assurance Cell · University of Vavuniya</p>
        <div className="flex flex-wrap gap-4">
          <a href="#home">UoV</a>
          <a href="#about">CQA</a>
          <a href="#about">UGC</a>
          <a href="#about">MoHE</a>
          <a href="#about">SLQF</a>
          <a href="#about">QAAC</a>
        </div>
      </div>
    </footer>
  );
}
