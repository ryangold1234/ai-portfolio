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
        {project.pipeline.length > 0 && (
          <div className="mt-6 flex flex-wrap items-center gap-2">
            {project.pipeline.map((step, i) => (
              <div key={step} className="flex items-center gap-2">
                <span className="inline-flex items-center rounded-full border border-lime-300/30 bg-lime-300/10 px-4 py-2 text-sm font-medium text-lime-200">
                  <span className="mr-2 font-mono text-xs text-lime-300/70">
                    {i + 1}
                  </span>
                  {step}
                </span>
                {i < project.pipeline.length - 1 && (
                  <span aria-hidden className="text-zinc-600">
                    →
                  </span>
                )}
              </div>
            ))}
          </div>
        )}
      </section>

      {project.demo && (
        <section className="mt-12">
          <h2 className="text-2xl font-bold tracking-tight">
            See it in action
          </h2>
          <div className="mt-4 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-white/10 bg-white/[0.03] p-6">
              <p className="font-mono text-xs uppercase tracking-widest text-zinc-500">
                {project.demo.beforeTitle}
              </p>
              <ul className="mt-3 space-y-2 font-mono text-[13px] leading-relaxed text-zinc-400">
                {project.demo.before.map((line) => (
                  <li key={line} className="break-words">
                    {line}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl border border-lime-300/25 bg-lime-300/[0.05] p-6">
              <p className="font-mono text-xs uppercase tracking-widest text-lime-300">
                {project.demo.afterTitle}
              </p>
              <ul className="mt-3 space-y-2 font-mono text-[13px] leading-relaxed text-zinc-200">
                {project.demo.after.map((line) => (
                  <li key={line} className="break-words">
                    {line}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-3 text-sm text-zinc-500">{project.demo.note}</p>
        </section>
      )}

      <section className="mt-12">
        <h2 className="text-2xl font-bold tracking-tight">Results</h2>
        {project.kpis.length > 0 && (
          <div className="mt-6 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {project.kpis.map((kpi) => (
              <div
                key={kpi.label}
                className="rounded-2xl border border-white/10 bg-white/[0.03] p-5"
              >
                <p className="text-3xl font-bold tracking-tight text-lime-300">
                  {kpi.value}
                </p>
                <p className="mt-1 text-sm leading-snug text-zinc-400">
                  {kpi.label}
                </p>
              </div>
            ))}
          </div>
        )}
        <ul className="mt-6 space-y-3">
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
