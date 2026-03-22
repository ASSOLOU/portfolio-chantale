import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const navItems = [
  { to: "/", label: "Accueil" },
  { to: "/projets", label: "Projets" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar({ theme, onToggleTheme }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 md:px-6">
      <nav className="mx-auto w-full max-w-6xl rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-3 text-[var(--color-text)] shadow-lg backdrop-blur-xl md:rounded-full md:px-6">
        <div className="flex items-center justify-between gap-4">
          <Link
            to="/"
            className="flex items-center gap-3"
            onClick={() => setIsOpen(false)}
          >
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[var(--color-accent)] text-sm font-semibold text-white">
              CA
            </span>
            <div className="leading-tight">
              <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[var(--color-muted)]">
                Portfolio
              </p>
              <p className="text-sm font-medium text-[var(--color-text)] sm:text-base">
                Chantale Assolou
              </p>
            </div>
          </Link>

          <div className="hidden items-center gap-2 rounded-full border border-[var(--color-border)] bg-[var(--color-surface-alt)] p-1 md:flex">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  [
                    "rounded-full px-4 py-2 text-sm font-medium transition duration-300",
                    isActive
                      ? "bg-[var(--color-accent)] text-white"
                      : "text-[var(--color-soft)] hover:bg-[var(--color-surface-strong)] hover:text-[var(--color-text)]",
                  ].join(" ")
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={onToggleTheme}
              className="hidden rounded-full border border-[var(--color-border)] bg-[var(--color-surface-alt)] px-4 py-2 text-sm font-medium text-[var(--color-text)] transition duration-300 hover:bg-[var(--color-surface-strong)] md:inline-flex"
              aria-label="Changer le theme"
            >
              {theme === "light" ? "Mode sombre" : "Mode clair"}
            </button>

            <Link
              to="/contact"
              className="hidden rounded-full border border-[var(--color-accent)]/30 bg-[var(--color-accent-soft)] px-4 py-2 text-sm font-medium text-[var(--color-accent-strong)] transition duration-300 hover:bg-[var(--color-accent)] hover:text-white md:inline-flex"
            >
              Contact
            </Link>

            <button
              type="button"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface-alt)] text-[var(--color-text)] md:hidden"
              onClick={() => setIsOpen((value) => !value)}
              aria-label="Ouvrir le menu"
              aria-expanded={isOpen}
            >
              <span className="text-xl leading-none">{isOpen ? "X" : "="}</span>
            </button>
          </div>
        </div>

        {isOpen ? (
          <div className="mt-4 space-y-2 border-t border-[var(--color-border)] pt-4 md:hidden">
            <button
              type="button"
              onClick={onToggleTheme}
              className="block w-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-alt)] px-4 py-3 text-left text-sm font-medium text-[var(--color-text)] transition duration-300 hover:bg-[var(--color-surface-strong)]"
            >
              {theme === "light" ? "Passer en mode sombre" : "Passer en mode clair"}
            </button>

            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                onClick={() => setIsOpen(false)}
                className={({ isActive }) =>
                  [
                    "block rounded-2xl px-4 py-3 text-sm font-medium transition duration-300",
                    isActive
                      ? "bg-[var(--color-accent)] text-white"
                      : "bg-[var(--color-surface-alt)] text-[var(--color-soft)] hover:bg-[var(--color-surface-strong)] hover:text-[var(--color-text)]",
                  ].join(" ")
                }
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        ) : null}
      </nav>
    </header>
  );
}
