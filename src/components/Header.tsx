export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-paper">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-5">
        <span className="font-display text-lg font-semibold text-ink">
          Yuliia Stanenko
        </span>

        <nav className="flex gap-6 text-sm text-ink-soft">
          <a href="#projects" className="hover:text-teal">
            Projects
          </a>
          <a href="#experience" className="hover:text-teal">
            Experience
          </a>
          <a href="#skills" className="hover:text-teal">
            Skills
          </a>
          <a href="#contact" className="hover:text-teal">
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
