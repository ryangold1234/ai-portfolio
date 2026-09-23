import Link from "next/link";
import type { Project } from "@/lib/projects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all hover:-translate-y-1 hover:border-lime-300/40 hover:bg-white/[0.05] sm:p-8"
    >
      <div className="flex items-center justify-between">
        <span className="font-mono text-xs uppercase tracking-widest text-zinc-500">
          {project.year}
        </span>
        <span className="rounded-full border border-lime-300/30 bg-lime-300/10 px-3 py-1 text-xs font-medium text-lime-200">
          {project.status}
        </span>
      </div>
      <h3 className="mt-5 text-2xl font-bold tracking-tight transition-colors group-hover:text-lime-200">
        {project.title}
      </h3>
      <p className="mt-2 text-zinc-400">{project.tagline}</p>
      <div className="mt-6 flex flex-wrap gap-2">
        {project.tech.slice(0, 4).map((t) => (
          <span
            key={t}
            className="rounded-md bg-white/[0.06] px-2.5 py-1 font-mono text-xs text-zinc-300"
          >
            {t}
          </span>
        ))}
      </div>
      <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-lime-300">
        Read the case study
        <span aria-hidden className="transition-transform group-hover:translate-x-1">
          →
        </span>
      </span>
    </Link>
  );
}
