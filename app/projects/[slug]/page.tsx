import Link from "next/link";
import { notFound } from "next/navigation";
import { getProject, projects } from "@/lib/projects";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: `${project.title} — Ryan Goldstein`,
    description: project.tagline,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const others = projects.filter((p) => p.slug !== slug).slice(0, 2);

  return (
    <article className="mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-24">
      <Link
        href="/projects"
        className="text-sm font-semibold text-zinc-400 transition-colors hover:text-white"
      >
        ← All projects
      </Link>

      <header className="mt-8">
        <div className="flex flex-wrap items-center gap-3">
          <span className="font-mono text-xs uppercase tracking-widest text-zinc-500">
            {project.year}
          </span>
          <span className="rounded-full border border-lime-300/30 bg-lime-300/10 px-3 py-1 text-xs font-medium text-lime-200">
            {project.status}
          </span>
        </div>
        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
          {project.title}
        </h1>
        <p className="mt-3 text-xl text-zinc-400">{project.tagline}</p>
        <div className="mt-6 flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-md bg-white/[0.06] px-3 py-1.5 font-mono text-xs text-zinc-300"
            >
              {t}
            </span>
          ))}
        </div>
      </header>

      <p className="mt-10 border-l-2 border-lime-300 pl-6 text-lg leading-relaxed text-zinc-300">
        {project.summary}
      </p>

      <section className="mt-14">
        <h2 className="text-2xl font-bold tracking-tight">The problem</h2>
        <p className="mt-4 leading-relaxed text-zinc-400">{project.problem}</p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold tracking-tight">What I built</h2>
        <ul className="mt-4 space-y-3">
          {project.built.map((b) => (
            <li key={b} className="flex gap-3 leading-relaxed text-zinc-400">
              <span aria-hidden className="mt-1 shrink-0 text-lime-300">
                ▸
              </span>
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold tracking-tight">How it works</h2>
        <p className="mt-4 leading-relaxed text-zinc-400">
          {project.howItWorks}
        </p>
      </section>

      <section className="mt-12">
        <h2 className="text-2xl font-bold tracking-tight">Results</h2>
        <ul className="mt-4 space-y-3">
          {project.results.map((r) => (
            <li key={r} className="flex gap-3 leading-relaxed text-zinc-400">
              <span aria-hidden className="mt-1 shrink-0 text-lime-300">
                ✓
              </span>
              <span>{r}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-14 rounded-2xl border border-lime-300/25 bg-lime-300/[0.06] p-6 sm:p-8">
        <p className="font-mono text-xs uppercase tracking-widest text-lime-300">
          What this means for your business
        </p>
        <p className="mt-3 leading-relaxed text-zinc-300">
          {project.businessAngle}
        </p>
        <Link
          href="/services"
          className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-lime-300 hover:underline"
        >
          See consulting services <span aria-hidden>→</span>
        </Link>
      </section>

      <section className="mt-16 border-t border-white/10 pt-10">
        <h2 className="text-xl font-bold tracking-tight">Keep exploring</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          {others.map((o) => (
            <Link
              key={o.slug}
              href={`/projects/${o.slug}`}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all hover:border-lime-300/40"
            >
              <h3 className="text-lg font-bold tracking-tight transition-colors group-hover:text-lime-200">
                {o.title}
              </h3>
              <p className="mt-1 text-sm text-zinc-400">{o.tagline}</p>
            </Link>
          ))}
        </div>
      </section>
    </article>
  );
}
