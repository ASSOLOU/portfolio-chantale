import { useEffect, useState } from "react";
import { Link, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const initialContactForm = {
  from_name: "",
  from_email: "",
  subject: "",
  message: "",
};

const formspreeEndpoint = "https://formspree.io/f/xkoqljvo";

const projectList = [
  {
    title: "Kpalime",
    description:
      "Site vitrine realise en HTML, CSS, Bootstrap et PHP pour faire decouvrir Kpalime a travers son histoire, ses lieux incontournables, ses commerces et une navigation simple.",
    stack: "HTML, CSS, Bootstrap, PHP",
    image: "http://projet.test/images/vuedelaville.jpg",
    url: "http://projet.test/html/index.php",
  },
  {
    title: "Glow Beauty",
    description:
      "Boutique de maquillage developpee avec Vue et Vite, proposant des collections de produits, des filtres par categorie, un panier dynamique et un parcours de commande.",
    stack: "Vue 3, Vite, CSS, JSON",
    image:
      "https://images.pexels.com/photos/7290745/pexels-photo-7290745.jpeg?cs=srgb&dl=pexels-mart-production-7290745.jpg&fm=jpg",
    url: "http://localhost:5173/#collections",
  },
];

function Home() {
  return (
    <main className="relative overflow-hidden bg-[var(--color-bg)] text-[var(--color-text)]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-8rem] top-20 h-72 w-72 rounded-full bg-[var(--color-orb-1)] blur-3xl" />
        <div className="absolute right-[-6rem] top-40 h-80 w-80 rounded-full bg-[var(--color-orb-2)] blur-3xl" />
        <div className="absolute bottom-10 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-[var(--color-orb-3)] blur-3xl" />
      </div>

      <section className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center gap-14 px-6 pb-16 pt-32 md:px-10 lg:flex-row lg:items-center lg:gap-20 lg:pt-36">
        <div className="max-w-2xl">
          <p className="mb-4 inline-flex rounded-full border border-[var(--color-border)] bg-[var(--color-surface-strong)] px-4 py-2 text-sm uppercase tracking-[0.24em] text-[var(--color-muted)] shadow-sm">
            Portfolio etudiant
          </p>

          <h1 className="max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            Chantale Essowedeo ASSOLOU
          </h1>

          <p className="mt-6 max-w-2xl text-base leading-8 text-[var(--color-soft)] sm:text-lg">
            Etudiante en 2e annee d'informatique a l'Ecole-IT d'Orleans,
            je m'interesse particulierement aux reseaux, au developpement web
            et a la resolution de problemes techniques. A travers ce portfolio,
            je presente mon parcours, mes competences et les projets qui
            illustrent mon evolution.
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-[1.5rem] border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-5 shadow-sm">
              <p className="text-sm text-[var(--color-muted)]">Parcours</p>
              <p className="mt-2 text-lg font-semibold text-[var(--color-text)]">
                2e annee
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-5 shadow-sm">
              <p className="text-sm text-[var(--color-muted)]">Focus</p>
              <p className="mt-2 text-lg font-semibold text-[var(--color-text)]">
                Web et reseaux
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-5 shadow-sm">
              <p className="text-sm text-[var(--color-muted)]">Objectif</p>
              <p className="mt-2 text-lg font-semibold text-[var(--color-text)]">
                Evoluer sur le terrain
              </p>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/projets"
              className="inline-flex items-center justify-center rounded-full bg-[var(--color-accent)] px-6 py-3 font-medium text-white transition duration-300 hover:translate-y-[-2px] hover:bg-[var(--color-accent-strong)]"
            >
              Voir mes projets
            </Link>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface-strong)] px-6 py-3 font-medium text-[var(--color-text)] transition duration-300 hover:border-[var(--color-accent)] hover:bg-[var(--color-surface-alt)]"
            >
              Me contacter
            </Link>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-sm">
          <div className="absolute inset-0 rounded-[2rem] bg-[var(--color-image-glow)] blur-2xl" />

          <div className="relative rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-3 shadow-2xl backdrop-blur">
            <div className="overflow-hidden rounded-[1.5rem] bg-[var(--color-surface-alt)]">
              <img
                src="/photo%20.jpeg"
                alt="Portrait de Chantale Assolou"
                className="h-[430px] w-full object-cover object-center sm:h-[520px]"
              />
            </div>

            <div className="mt-4 rounded-[1.25rem] border border-[var(--color-border)] bg-[var(--color-surface-alt)] px-4 py-4">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm text-[var(--color-muted)]">Profil</p>
                  <p className="text-base font-medium text-[var(--color-text)]">
                    Developpement web et systemes d'information
                  </p>
                </div>
                <div className="h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(74,222,128,0.8)]" />
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1 text-xs font-medium text-[var(--color-soft)]">
                  React
                </span>
                <span className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1 text-xs font-medium text-[var(--color-soft)]">
                  Integration
                </span>
                <span className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1 text-xs font-medium text-[var(--color-soft)]">
                  Reseaux
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function Projects() {
  return (
    <section className="mx-auto min-h-screen w-full max-w-6xl px-6 pb-16 pt-32 md:px-10">
      <div className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-8 shadow-xl backdrop-blur">
        <p className="text-sm uppercase tracking-[0.24em] text-[var(--color-muted)]">
          Projets
        </p>
        <h2 className="mt-4 text-3xl font-semibold text-[var(--color-text)]">
          Mes projets
        </h2>
        <p className="mt-4 max-w-2xl leading-8 text-[var(--color-soft)]">
          Une selection de projets realises pour mettre en pratique mes
          competences en developpement web et en integration d'interfaces.
        </p>

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projectList.map((project) => (
            <article
              key={project.title}
              className="overflow-hidden rounded-[1.5rem] border border-[var(--color-border)] bg-[var(--color-surface-alt)] transition duration-300 hover:-translate-y-1 hover:border-[var(--color-accent)]/40 hover:bg-[var(--color-surface-strong)]"
            >
              <div className="relative h-52 overflow-hidden">
                <img
                  src={project.image}
                  alt={`Apercu du projet ${project.title}`}
                  className="h-full w-full object-cover transition duration-500 hover:scale-105"
                />
                <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/55 to-transparent" />
              </div>

              <div className="p-6">
                <div className="mb-4 h-2 w-16 rounded-full bg-[var(--color-accent)]" />
                <h3 className="text-xl font-semibold text-[var(--color-text)]">
                  {project.title}
                </h3>
                <p className="mt-4 leading-7 text-[var(--color-soft)]">
                  {project.description}
                </p>
                <p className="mt-6 text-sm text-[var(--color-muted)]">
                  {project.stack}
                </p>
                <a
                  href={project.url}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-6 inline-flex items-center rounded-full bg-[var(--color-accent)] px-4 py-2 text-sm font-medium text-white transition duration-300 hover:bg-[var(--color-accent-strong)]"
                >
                  Voir le projet
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  const [formData, setFormData] = useState(initialContactForm);
  const [isSending, setIsSending] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  useEffect(() => {
    if (!status.message || status.type !== "success") {
      return undefined;
    }

    const timer = window.setTimeout(() => {
      setStatus({ type: "", message: "" });
    }, 4000);

    return () => window.clearTimeout(timer);
  }, [status]);

  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((current) => ({
      ...current,
      [name]: value,
    }));
  }

  async function handleSubmit(event) {
    event.preventDefault();

    setIsSending(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await fetch(formspreeEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: formData.from_name,
          email: formData.from_email,
          subject: formData.subject,
          message: formData.message,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => null);
        const message =
          errorData?.errors?.[0]?.message ||
          "Envoi impossible. Reessaie dans un instant.";
        throw new Error(message);
      }

      setStatus({
        type: "success",
        message: "Message envoye avec succes.",
      });
      setFormData(initialContactForm);
    } catch (error) {
      setStatus({
        type: "error",
        message: error.message,
      });
    } finally {
      setIsSending(false);
    }
  }

  return (
    <section className="mx-auto flex min-h-screen w-full max-w-6xl items-center px-6 pb-16 pt-32 md:px-10">
      <div className="grid w-full gap-6 lg:grid-cols-[1.35fr_0.65fr] lg:items-start">
        <div className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-8 shadow-xl backdrop-blur md:p-10">
          <p className="text-sm uppercase tracking-[0.24em] text-[var(--color-muted)]">
            Contact
          </p>
          <h2 className="mt-4 text-3xl font-semibold text-[var(--color-text)]">
            Me contacter
          </h2>
          <p className="mt-3 max-w-xl leading-7 text-[var(--color-soft)]">
            Pour un projet, un stage ou une opportunite.
          </p>

          <form className="mt-8 space-y-5" onSubmit={handleSubmit}>
            <div className="grid gap-5 md:grid-cols-2">
              <label className="block">
                <span className="mb-2 block text-sm text-[var(--color-muted)]">
                  Nom
                </span>
                <input
                  type="text"
                  name="from_name"
                  value={formData.from_name}
                  onChange={handleChange}
                  required
                  className="w-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-alt)] px-4 py-3.5 text-[var(--color-text)] outline-none transition duration-300 placeholder:text-[var(--color-muted)] focus:border-[var(--color-accent)]"
                  placeholder="Ton nom"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm text-[var(--color-muted)]">
                  Email
                </span>
                <input
                  type="email"
                  name="from_email"
                  value={formData.from_email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-alt)] px-4 py-3.5 text-[var(--color-text)] outline-none transition duration-300 placeholder:text-[var(--color-muted)] focus:border-[var(--color-accent)]"
                  placeholder="ton@email.com"
                />
              </label>
            </div>

            <label className="block">
              <span className="mb-2 block text-sm text-[var(--color-muted)]">
                Sujet
              </span>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-alt)] px-4 py-3.5 text-[var(--color-text)] outline-none transition duration-300 placeholder:text-[var(--color-muted)] focus:border-[var(--color-accent)]"
                  placeholder="Sujet"
                />
              </label>

            <label className="block">
              <span className="mb-2 block text-sm text-[var(--color-muted)]">
                Message
              </span>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                className="min-h-[180px] w-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-alt)] px-4 py-3.5 text-[var(--color-text)] outline-none transition duration-300 placeholder:text-[var(--color-muted)] focus:border-[var(--color-accent)]"
                placeholder="Votre message"
              />
            </label>

            {status.message ? (
              <p
                className={
                  status.type === "success"
                    ? "rounded-2xl border border-emerald-400/40 bg-emerald-400/10 px-4 py-3 text-sm font-medium text-emerald-600"
                    : "rounded-2xl border border-rose-400/40 bg-rose-400/10 px-4 py-3 text-sm text-rose-600"
                }
              >
                {status.message}
              </p>
            ) : null}

            <div className="flex items-center justify-between gap-4 pt-2">
              <p className="text-sm text-[var(--color-muted)]">
                Reponse par email.
              </p>
              <button
                type="submit"
                disabled={isSending}
                className="inline-flex items-center justify-center rounded-full bg-[var(--color-accent)] px-6 py-3 font-medium text-white transition duration-300 hover:bg-[var(--color-accent-strong)] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSending ? "Envoi..." : "Envoyer"}
              </button>
            </div>
          </form>
        </div>

        <div className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface-alt)] p-8 md:p-9">
          <p className="text-sm uppercase tracking-[0.24em] text-[var(--color-muted)]">
            Coordonnees
          </p>
          <div className="mt-6 space-y-4">
            <div className="rounded-[1.5rem] border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-4">
              <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-muted)]">
                Email
              </p>
              <a
                href="mailto:chantaleassolou2@gmail.com"
                className="mt-2 block break-all text-base font-medium text-[var(--color-text)] transition duration-300 hover:text-[var(--color-accent)]"
              >
                chantaleassolou2@gmail.com
              </a>
            </div>

            <div className="rounded-[1.5rem] border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-4">
              <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-muted)]">
                Localisation
              </p>
              <p className="mt-2 text-base font-medium text-[var(--color-text)]">
                Orleans
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-4">
              <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-muted)]">
                Disponibilite
              </p>
              <p className="mt-2 text-base font-medium text-[var(--color-text)]">
                Ouverte aux opportunites
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark" ? "dark" : "light";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <div className="min-h-screen" style={{ background: "var(--page-bg)" }}>
      <Navbar
        theme={theme}
        onToggleTheme={() =>
          setTheme((currentTheme) =>
            currentTheme === "light" ? "dark" : "light"
          )
        }
      />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projets" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
}
