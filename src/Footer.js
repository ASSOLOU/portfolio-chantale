import { Link } from "react-router-dom";

const githubUrl = "https://github.com/ASSOLOU/projet-ecole";

const footerLinks = [
  { to: "/", label: "Accueil" },
  { to: "/competences", label: "Compétences" },
  { to: "/projets", label: "Projets" },
  { to: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-12 text-[var(--color-soft)] backdrop-blur md:px-10">
      <div className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="max-w-2xl">
          <p className="text-sm uppercase tracking-[0.24em] text-[var(--color-muted)]">
            Chantale Essowedeo ASSOLOU
          </p>
          <h3 className="mt-3 text-2xl font-semibold text-[var(--color-text)]">
            Merci de votre visite
          </h3>
          <p className="mt-3 leading-7">
            Portfolio personnel dédié à mon parcours, mes compétences et mes
            projets en développement web et systèmes d'information.
          </p>

          <div className="mt-6 flex flex-wrap gap-3">
            {footerLinks.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface-alt)] px-4 py-2 text-sm transition duration-300 hover:border-[var(--color-accent)] hover:text-[var(--color-accent)]"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="rounded-[1.75rem] border border-[var(--color-border)] bg-[var(--color-surface-alt)] p-6 lg:justify-self-end lg:text-right">
          <p className="text-sm uppercase tracking-[0.24em] text-[var(--color-muted)]">
            Coordonnées
          </p>
          <a
            href="mailto:chantaleassolou2@gmail.com"
            className="mt-4 block break-all text-[var(--color-text)] transition duration-300 hover:text-[var(--color-accent)]"
          >
            chantaleassolou2@gmail.com
          </a>
          <a
            href={githubUrl}
            target="_blank"
            rel="noreferrer"
            className="mt-2 block text-[var(--color-text)] transition duration-300 hover:text-[var(--color-accent)]"
          >
            GitHub : github.com/ASSOLOU/projet-ecole
          </a>
          <p className="mt-2 text-[var(--color-text)]">LinkedIn : @Chantale Assolou</p>
          <p className="mt-2">Orléans</p>
          <p className="mt-2">Étudiante en informatique</p>
        </div>
      </div>

      <div className="mx-auto mt-8 flex w-full max-w-6xl flex-col gap-2 border-t border-[var(--color-border)] pt-6 text-sm md:flex-row md:items-center md:justify-between">
        <p className="text-[var(--color-text)]">
          {"\u00A9"} {new Date().getFullYear()} Chantale Essowedeo ASSOLOU
        </p>
      </div>
    </footer>
  );
}
