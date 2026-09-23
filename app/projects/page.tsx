import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export const metadata = {
  title: "Projects — Ryan Goldstein",
  description: "AI systems designed, built, and operated by Ryan Goldstein.",
};

export default function ProjectsPage() {
  return (
    <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
      <p className="font-mono text-xs uppercase tracking-widest text-lime-300">
        Portfolio
      </p>
      <h1 className="mt-4 max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl">
        Things I&apos;ve built with AI
      </h1>
      <p className="mt-4 max-w-2xl text-lg text-zinc-400">
        Every project below is designed, built, and operated by me — not a
        tutorial, not a demo-day prototype. Each one runs (or ran) in the real
        world, solving a real problem.
      </p>
      <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <ProjectCard key={p.slug} project={p} />
        ))}
      </div>
    </section>
  );
}
