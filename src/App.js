import { useEffect, useState } from "react";
import { Link, Route, Routes, useLocation, useParams } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const initialContactForm = {
  from_name: "",
  from_email: "",
  subject: "",
  message: "",
};

const formspreeEndpoint = "https://formspree.io/f/xkoqljvo";
const githubUrl = "https://github.com/ASSOLOU/projet-ecole";

const projectList = [
  {
    slug: "glow-beauty",
    title: "Glow Beauty",
    description:
      "Boutique de maquillage développée avec Vue et Vite, avec collections, filtres par catégorie, panier dynamique et parcours de commande.",
    stack: "Vue 3, Vite, CSS, JSON",
    image:
      "https://images.pexels.com/photos/2113855/pexels-photo-2113855.jpeg?auto=compress&cs=tinysrgb&w=1200",
    context: "Projet front-end",
    previewUrl: "/glow-beauty-preview/index.html",
    details: [
      "Création d'une interface boutique orientée expérience utilisateur.",
      "Mise en place de collections, filtres et panier dynamique.",
      "Travail sur la présentation des produits et le parcours de navigation.",
      "Projet utile pour progresser en front-end moderne avec Vue.",
    ],
  },
  {
    slug: "kpalime",
    title: "Kpalimé",
    description:
      "Site vitrine réalisé en HTML, CSS, Bootstrap et PHP pour faire découvrir Kpalimé à travers son histoire, ses lieux incontournables et ses commerces.",
    stack: "HTML, CSS, Bootstrap, PHP",
    image: "/kpalime-vuedelaville.jpg",
    context: "Projet web",
    previewUrl: "/kpalime-preview/index.html",
    details: [
      "Création d'un site vitrine autour de la ville de Kpalimé.",
      "Mise en avant de son histoire, de ses lieux à découvrir et de ses commerces.",
      "Travail sur l'intégration visuelle et la navigation.",
      "Utilisation de PHP pour structurer certaines parties du site.",
    ],
  },
  {
    slug: "projet-lwh",
    title: "Projet LWH",
    description:
      "Projet réalisé dans le cadre d'un devoir. Le document PDF présente le travail demandé, la démarche suivie et le rendu final.",
    stack: "Linux, Web, documentation PDF",
    image:
      "https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1200",
    context: "Projet académique",
    pdf: "/projet-lwh-chantale-assolou.pdf",
    details: [
      "Projet réalisé dans le cadre de la formation.",
      "Le rendu complet est disponible sous forme de PDF.",
      "Il présente les étapes du travail et les résultats obtenus.",
    ],
  },
  {
    slug: "devoir-linux-1",
    title: "Devoir de Linux",
    description:
      "Devoir réalisé autour de Linux. Le PDF regroupe le contenu du travail, les manipulations effectuées et les réponses apportées.",
    stack: "Linux, terminal, documentation PDF",
    image:
      "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1200",
    context: "Projet académique",
    pdf: "/devoir-linux-1.pdf",
    details: [
      "Travail effectué dans le cadre d'un devoir de Linux.",
      "Le document PDF permet de consulter directement le contenu rendu.",
      "Il montre ma progression sur les commandes et l'environnement Linux.",
    ],
  },
];

const skillGroups = [
  {
    title: "Langages et technologies utilis\u00e9s",
    text: "Voici les langages et outils que j'ai d\u00e9j\u00e0 eu l'occasion d'utiliser dans mes projets et dans ma formation.",
    skills: [
      "HTML",
      "CSS",
      "Bootstrap",
      "JavaScript",
      "Java",
      "PHP",
      "SQL",
      "WordPress",
      "Vue",
      "React",
    ],
  },
  {
    title: "Technologies en apprentissage",
    text: "Je continue aussi \u00e0 progresser sur des outils et frameworks que j'apprends actuellement pour \u00e9largir mes comp\u00e9tences.",
    skills: ["Angular", "Symfony", "Docker", "API", "Linux"],
  },
];

const strengths = [
  "Capacit\u00e9 d'adaptation sur de nouveaux outils",
  "Bonne base en int\u00e9gration web",
  "Int\u00e9r\u00eat fort pour les r\u00e9seaux et le support technique",
  "Envie d'apprendre \u00e0 travers des projets concrets",
];

function SectionIntro({ eyebrow, title, text }) {
  return (
    <div className="max-w-2xl">
      <p className="text-sm uppercase tracking-[0.24em] text-[var(--color-muted)]">
        {eyebrow}
      </p>
      <h2 className="mt-4 text-3xl font-semibold text-[var(--color-text)] md:text-4xl">
        {title}
      </h2>
      <p className="mt-4 leading-8 text-[var(--color-soft)]">{text}</p>
    </div>
  );
}

function ProjectVisual({ project, large = false }) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !project.image) {
    return (
      <div className="flex h-full w-full items-end bg-[linear-gradient(135deg,#c26a3d_0%,#e7d8ca_55%,#f7f2ea_100%)] p-5">
        <div className="rounded-2xl bg-black/20 px-4 py-3 text-white backdrop-blur-sm">
          <p className="text-xs uppercase tracking-[0.18em] text-white/80">
            {project.context}
          </p>
          <p className="mt-2 text-lg font-semibold">{project.title}</p>
        </div>
      </div>
    );
  }

  return (
    <img
      src={project.image}
      alt={`Aperçu du projet ${project.title}`}
      className={`w-full object-cover ${large ? "h-[320px] md:h-[420px]" : "h-full"}`}
      onError={() => setHasError(true)}
    />
  );
}

function ProjectCard({ project, index = 0 }) {
  const delayClass =
    index === 0
      ? ""
      : index === 1
        ? " animate-delay-1"
        : index === 2
          ? " animate-delay-2"
          : index === 3
            ? " animate-delay-3"
            : " animate-delay-4";

  return (
    <article
      className={`animate-fade-up${delayClass} overflow-hidden rounded-[1.5rem] border border-[var(--color-border)] bg-[var(--color-surface-alt)] transition duration-300 hover:-translate-y-1 hover:border-[var(--color-accent)]/40 hover:bg-[var(--color-surface-strong)]`}
    >
      <Link to={`/projets/${project.slug}`} className="block">
        <div className="relative h-52 overflow-hidden">
          <ProjectVisual project={project} />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/55 to-transparent" />
        </div>
      </Link>

      <div className="p-6">
        <div className="mb-4 h-2 w-16 rounded-full bg-[var(--color-accent)]" />
        <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-muted)]">
          {project.context}
        </p>
        <h3 className="text-xl font-semibold text-[var(--color-text)]">
          {project.title}
        </h3>
        <p className="mt-4 leading-7 text-[var(--color-soft)]">
          {project.description}
        </p>
        <p className="mt-6 text-sm text-[var(--color-muted)]">{project.stack}</p>
        <Link
          to={`/projets/${project.slug}`}
          className="btn-premium mt-6 inline-flex items-center rounded-full bg-[var(--color-accent)] px-4 py-2 text-sm font-medium text-white transition duration-300 hover:bg-[var(--color-accent-strong)]"
        >
          Voir le projet
        </Link>
      </div>
    </article>
  );
}

function Home() {
  return (
    <main className="animate-page-enter relative overflow-hidden bg-[var(--color-bg)] text-[var(--color-text)]">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-8rem] top-20 h-72 w-72 rounded-full bg-[var(--color-orb-1)] blur-3xl" />
        <div className="absolute right-[-6rem] top-40 h-80 w-80 rounded-full bg-[var(--color-orb-2)] blur-3xl" />
        <div className="absolute bottom-10 left-1/2 h-56 w-56 -translate-x-1/2 rounded-full bg-[var(--color-orb-3)] blur-3xl" />
      </div>

      <section className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col justify-center gap-14 px-6 pb-16 pt-32 md:px-10 lg:flex-row lg:items-center lg:gap-20 lg:pt-36">
        <div className="max-w-2xl">
          <p className="animate-fade-up mb-4 inline-flex rounded-full border border-[var(--color-border)] bg-[var(--color-surface-strong)] px-4 py-2 text-sm uppercase tracking-[0.24em] text-[var(--color-muted)] shadow-sm">
            Étudiante en informatique à Orléans
          </p>

          <h1 className="animate-fade-up animate-delay-1 max-w-3xl text-4xl font-semibold leading-tight sm:text-5xl lg:text-6xl">
            Chantale Essowedeo Assolou
          </h1>

          <p className="animate-fade-up animate-delay-2 mt-6 max-w-2xl text-base leading-8 text-[var(--color-soft)] sm:text-lg">
            Je suis en 2e année d'informatique à l'École-IT d'Orléans. Je
            m'intéresse particulièrement au développement web, aux réseaux et à
            la résolution de problèmes techniques. Ce portfolio présente mon
            parcours, mes compétences et quelques projets qui montrent ma progression.
          </p>

          <div className="animate-fade-up animate-delay-3 mt-8 grid gap-4 sm:grid-cols-3">
            <div className="rounded-[1.5rem] border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-5 shadow-sm">
              <p className="text-sm text-[var(--color-muted)]">Formation</p>
              <p className="mt-2 text-lg font-semibold text-[var(--color-text)]">
                2e année
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-5 shadow-sm">
              <p className="text-sm text-[var(--color-muted)]">Domaines</p>
              <p className="mt-2 text-lg font-semibold text-[var(--color-text)]">
                Web et réseaux
              </p>
            </div>
            <div className="rounded-[1.5rem] border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-5 shadow-sm">
              <p className="text-sm text-[var(--color-muted)]">Objectif</p>
              <p className="mt-2 text-lg font-semibold text-[var(--color-text)]">
                Gagner en expérience
              </p>
            </div>
          </div>

          <div className="animate-fade-up animate-delay-4 mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              to="/competences"
              className="btn-premium inline-flex items-center justify-center rounded-full bg-[var(--color-accent)] px-6 py-3 font-medium text-white transition duration-300 hover:translate-y-[-2px] hover:bg-[var(--color-accent-strong)]"
            >
              Voir mes compétences
            </Link>

            <Link
              to="/projets"
              className="btn-premium inline-flex items-center justify-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface-strong)] px-6 py-3 font-medium text-[var(--color-text)] transition duration-300 hover:border-[var(--color-accent)] hover:bg-[var(--color-surface-alt)]"
            >
              Découvrir mes projets
            </Link>
          </div>
        </div>

        <div className="animate-fade-in animate-delay-2 relative mx-auto w-full max-w-sm">
          <div className="animate-pulse-glow absolute inset-0 rounded-[2rem] bg-[var(--color-image-glow)] blur-2xl" />

          <div className="animate-float-soft relative rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-3 shadow-2xl backdrop-blur">
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
                    Développement web, support et systèmes d'information
                  </p>
                </div>
                <div className="h-3 w-3 rounded-full bg-emerald-400 shadow-[0_0_18px_rgba(74,222,128,0.8)]" />
              </div>

              <div className="mt-4 flex flex-wrap gap-2">
                <span className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1 text-xs font-medium text-[var(--color-soft)]">
                  React
                </span>
                <span className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1 text-xs font-medium text-[var(--color-soft)]">
                  Intégration
                </span>
                <span className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-1 text-xs font-medium text-[var(--color-soft)]">
                  Réseaux
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-6xl px-6 pb-20 md:px-10">
        <div className="grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          <div className="animate-fade-up rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-8 shadow-xl">
            <SectionIntro
              eyebrow="À propos"
              title="Un portfolio plus simple, plus vrai"
              text="J'ai voulu présenter ici ce que je sais faire aujourd'hui, ce que j'apprends encore et la direction dans laquelle je souhaite évoluer. Je préfère montrer une progression sincère plutôt qu'un discours trop parfait."
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {strengths.map((item) => (
              <div
                key={item}
                className="animate-fade-up rounded-[1.5rem] border border-[var(--color-border)] bg-[var(--color-surface-alt)] p-6"
              >
                <div className="mb-4 h-2 w-14 rounded-full bg-[var(--color-accent)]" />
                <p className="leading-7 text-[var(--color-soft)]">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative mx-auto w-full max-w-6xl px-6 pb-20 md:px-10">
        <div className="animate-fade-up rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-8 shadow-xl">
          <SectionIntro
            eyebrow="Projets"
            title="Un aperçu de mes réalisations"
            text="Voici quelques projets que j'ai réalisés dans le cadre de ma formation et de ma pratique. Vous pouvez retrouver la liste complète dans la page projets."
          />

          <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {projectList.slice(0, 3).map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>

          <div className="mt-8">
            <Link
              to="/projets"
              className="btn-premium inline-flex items-center justify-center rounded-full bg-[var(--color-accent)] px-6 py-3 font-medium text-white transition duration-300 hover:bg-[var(--color-accent-strong)]"
            >
              Voir tous mes projets
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}

function Skills() {
  return (
    <section className="animate-page-enter mx-auto min-h-screen w-full max-w-6xl px-6 pb-16 pt-32 md:px-10">
      <div className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-8 shadow-xl md:p-10">
        <div className="animate-fade-up grid gap-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
          <div>
            <span className="inline-flex rounded-full border border-[var(--color-border)] bg-[var(--color-surface-alt)] px-4 py-2 text-xs font-semibold uppercase tracking-[0.28em] text-[var(--color-accent)]">
              {"Comp\u00e9tences"}
            </span>
            <h1 className="mt-6 max-w-3xl text-4xl font-semibold leading-tight text-[var(--color-text)] md:text-5xl">
              {"Les outils et langages que j'utilise dans ma formation et mes projets."}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--color-soft)] md:text-lg">
              {"Je pr\u00e9f\u00e8re pr\u00e9senter mes comp\u00e9tences simplement : ce que j'ai d\u00e9j\u00e0 pratiqu\u00e9, ce que je continue \u00e0 apprendre et la mani\u00e8re dont j'avance sur des projets concrets."}
            </p>
          </div>

          <div className="animate-fade-up animate-delay-1 rounded-[1.75rem] border border-[var(--color-border)] bg-[var(--color-surface-alt)] p-6">
            <p className="text-sm uppercase tracking-[0.22em] text-[var(--color-muted)]">
              {"En ce moment"}
            </p>
            <h3 className="mt-3 text-2xl font-semibold text-[var(--color-text)]">
              {"Je consolide mes bases et j'explore de nouveaux outils."}
            </h3>
            <p className="mt-4 leading-7 text-[var(--color-soft)]">
              {"Je travaille surtout sur le d\u00e9veloppement web, l'int\u00e9gration, le d\u00e9bogage et la d\u00e9couverte de technologies comme Angular, Symfony, Docker et les API."}
            </p>
          </div>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {skillGroups.map((group, index) => (
            <article
              key={group.title}
              className={`animate-fade-up rounded-[1.75rem] border border-[var(--color-border)] bg-[var(--color-surface-alt)] p-6 shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-2xl ${
                index === 0 ? "animate-delay-1" : index === 1 ? "animate-delay-2" : "animate-delay-3"
              }`}
            >
              <div className="mb-5 flex items-center justify-between">
                <div className="h-2 w-16 rounded-full bg-[var(--color-accent)]" />
                <span className="rounded-full border border-[var(--color-border)] px-3 py-1 text-xs uppercase tracking-[0.2em] text-[var(--color-muted)]">
                  {index + 1 < 10 ? `0${index + 1}` : index + 1}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-[var(--color-text)]">
                {group.title}
              </h3>
              <p className="mt-3 leading-7 text-[var(--color-soft)]">
                {group.text}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3 py-2 text-sm text-[var(--color-soft)] shadow-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </article>
          ))}
        </div>

        <div className="animate-fade-up animate-delay-4 mt-10 rounded-[1.75rem] border border-[var(--color-border)] bg-[var(--color-surface-alt)] p-6 md:p-8">
          <div className="grid gap-6 md:grid-cols-[1.3fr_0.7fr] md:items-end">
            <div>
              <h3 className="text-2xl font-semibold text-[var(--color-text)] md:text-3xl">
                {"Ce que je recherche"}
              </h3>
              <p className="mt-4 max-w-3xl leading-8 text-[var(--color-soft)]">
                {"Je souhaite continuer \u00e0 gagner en exp\u00e9rience sur des projets concrets, en particulier dans le d\u00e9veloppement web, l'int\u00e9gration et le support technique. Chaque projet me permet d'apprendre, de mieux comprendre les besoins et de progresser avec plus de m\u00e9thode."}
              </p>
            </div>

            <div className="flex md:justify-end">
              <Link
                to="/projets"
                className="btn-premium inline-flex items-center rounded-full bg-[var(--color-accent)] px-6 py-3 font-medium text-white"
              >
                {"Voir mes projets"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
function Projects() {
  return (
    <section className="animate-page-enter mx-auto min-h-screen w-full max-w-6xl px-6 pb-16 pt-32 md:px-10">
      <div className="animate-fade-up rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-8 shadow-xl backdrop-blur">
        <SectionIntro
          eyebrow="Projets"
          title="Quelques réalisations"
          text="Une sélection de projets réalisés pour mettre en pratique mes compétences en développement web, en intégration d'interfaces et en organisation du contenu."
        />

        <div className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {projectList.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectDetails() {
  const { slug } = useParams();
  const project = projectList.find((item) => item.slug === slug);

  if (!project) {
    return (
      <section className="animate-page-enter mx-auto min-h-screen w-full max-w-6xl px-6 pb-16 pt-32 md:px-10">
        <div className="rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-8 shadow-xl">
          <h2 className="text-3xl font-semibold text-[var(--color-text)]">
            Projet introuvable
          </h2>
          <p className="mt-4 leading-8 text-[var(--color-soft)]">
            Ce projet n'existe pas ou n'est plus disponible dans le portfolio.
          </p>
          <Link
            to="/projets"
            className="btn-premium mt-8 inline-flex rounded-full bg-[var(--color-accent)] px-6 py-3 font-medium text-white"
          >
            Retour aux projets
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="animate-page-enter mx-auto min-h-screen w-full max-w-6xl px-6 pb-16 pt-32 md:px-10">
      <div className="animate-fade-up rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-8 shadow-xl">
        <div className="flex flex-wrap items-center gap-3">
          <span className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface-alt)] px-4 py-2 text-sm text-[var(--color-muted)]">
            {project.context}
          </span>
          <span className="rounded-full border border-[var(--color-border)] bg-[var(--color-surface-alt)] px-4 py-2 text-sm text-[var(--color-muted)]">
            {project.stack}
          </span>
        </div>

        <h1 className="mt-6 text-4xl font-semibold text-[var(--color-text)]">
          {project.title}
        </h1>
        <p className="mt-4 max-w-3xl leading-8 text-[var(--color-soft)]">
          {project.description}
        </p>

        <div className="mt-8 overflow-hidden rounded-[1.75rem] border border-[var(--color-border)] bg-[var(--color-surface-alt)]">
          <ProjectVisual project={project} large />
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <div className="animate-fade-up rounded-[1.75rem] border border-[var(--color-border)] bg-[var(--color-surface-alt)] p-6">
            <h2 className="text-2xl font-semibold text-[var(--color-text)]">
              Ce que j'ai réalisé
            </h2>
            <div className="mt-6 space-y-4">
              {project.details.map((detail) => (
                <p
                  key={detail}
                  className="rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-4 leading-7 text-[var(--color-soft)]"
                >
                  {detail}
                </p>
              ))}
            </div>
          </div>

          <div className="animate-fade-up animate-delay-1 rounded-[1.75rem] border border-[var(--color-border)] bg-[var(--color-surface-alt)] p-6">
            <h2 className="text-2xl font-semibold text-[var(--color-text)]">
              À retenir
            </h2>
            <p className="mt-4 leading-8 text-[var(--color-soft)]">
              Ce projet fait partie de mon parcours d'apprentissage. Il montre
              ma capacité à construire un rendu concret, à organiser des idées
              et à progresser sur des outils techniques différents.
            </p>

            <Link
              to="/projets"
              className="btn-premium mt-8 inline-flex rounded-full bg-[var(--color-accent)] px-6 py-3 font-medium text-white transition duration-300 hover:bg-[var(--color-accent-strong)]"
            >
              Retour aux projets
            </Link>

            {project.pdf ? (
              <a
                href={project.pdf}
                target="_blank"
                rel="noreferrer"
                className="btn-premium mt-4 inline-flex rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-6 py-3 font-medium text-[var(--color-text)] transition duration-300 hover:border-[var(--color-accent)]"
              >
                Ouvrir le PDF
              </a>
            ) : null}
          </div>
        </div>

        {project.pdf || project.previewUrl ? (
          <div className="animate-fade-up mt-10 rounded-[1.75rem] border border-[var(--color-border)] bg-[var(--color-surface-alt)] p-4 md:p-6">
            <div className="mb-4 flex items-center justify-between gap-4">
              <h2 className="text-2xl font-semibold text-[var(--color-text)]">
                Aperçu du projet
              </h2>
              {project.pdf || project.previewUrl ? (
                <a
                  href={project.previewUrl || project.pdf}
                  target="_blank"
                  rel="noreferrer"
                  className="btn-premium inline-flex rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-2 text-sm font-medium text-[var(--color-text)] transition duration-300 hover:border-[var(--color-accent)]"
                >
                  Ouvrir dans un nouvel onglet
                </a>
              ) : null}
            </div>

            <div className="overflow-hidden rounded-[1.25rem] border border-[var(--color-border)] bg-white">
              <iframe
                title={project.title}
                src={project.previewUrl || project.pdf}
                className="h-[75vh] w-full"
              />
            </div>
          </div>
        ) : null}
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
          "Envoi impossible. Réessaie dans un instant.";
        throw new Error(message);
      }

      setStatus({
        type: "success",
        message: "Message envoyé avec succès.",
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
        <div className="animate-fade-up rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface)] p-8 shadow-xl backdrop-blur md:p-10">
          <SectionIntro
            eyebrow="Contact"
            title="Me contacter"
            text="Pour un projet, un stage, une alternance ou simplement pour échanger autour de mon parcours."
          />

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
                  placeholder="Votre nom"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm text-[var(--color-muted)]">
                  E-mail
                </span>
                <input
                  type="email"
                  name="from_email"
                  value={formData.from_email}
                  onChange={handleChange}
                  required
                  className="w-full rounded-2xl border border-[var(--color-border)] bg-[var(--color-surface-alt)] px-4 py-3.5 text-[var(--color-text)] outline-none transition duration-300 placeholder:text-[var(--color-muted)] focus:border-[var(--color-accent)]"
                  placeholder="votre@email.com"
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
                placeholder="Sujet de votre message"
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
                Réponse par e-mail.
              </p>
              <button
                type="submit"
                disabled={isSending}
                className="btn-premium inline-flex items-center justify-center rounded-full bg-[var(--color-accent)] px-6 py-3 font-medium text-white transition duration-300 hover:bg-[var(--color-accent-strong)] disabled:cursor-not-allowed disabled:opacity-70"
              >
                {isSending ? "Envoi..." : "Envoyer"}
              </button>
            </div>
          </form>
        </div>

        <div className="animate-fade-up animate-delay-1 rounded-[2rem] border border-[var(--color-border)] bg-[var(--color-surface-alt)] p-8 md:p-9">
          <p className="text-sm uppercase tracking-[0.24em] text-[var(--color-muted)]">
            Coordonnées
          </p>
          <div className="mt-6 space-y-4">
            <div className="rounded-[1.5rem] border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-4">
              <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-muted)]">
                E-mail
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
                GitHub
              </p>
              <a
                href={githubUrl}
                target="_blank"
                rel="noreferrer"
                className="mt-2 block break-all text-base font-medium text-[var(--color-text)] transition duration-300 hover:text-[var(--color-accent)]"
              >
                github.com/ASSOLOU/projet-ecole
              </a>
            </div>

            <div className="rounded-[1.5rem] border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-4">
              <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-muted)]">
                LinkedIn
              </p>
              <p className="mt-2 text-base font-medium text-[var(--color-text)]">
                @Chantale Assolou
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-4">
              <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-muted)]">
                Localisation
              </p>
              <p className="mt-2 text-base font-medium text-[var(--color-text)]">
                Orléans
              </p>
            </div>

            <div className="rounded-[1.5rem] border border-[var(--color-border)] bg-[var(--color-surface)] px-4 py-4">
              <p className="text-xs uppercase tracking-[0.18em] text-[var(--color-muted)]">
                Disponibilité
              </p>
              <p className="mt-2 text-base font-medium text-[var(--color-text)]">
                Ouverte aux opportunités
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const location = useLocation();
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

      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/competences" element={<Skills />} />
        <Route path="/projets" element={<Projects />} />
        <Route path="/projets/:slug" element={<ProjectDetails />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </div>
  );
}
