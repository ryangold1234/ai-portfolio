"use client";

import { useState } from "react";
import Link from "next/link";
import { projects } from "@/lib/projects";

type Skill = {
  name: string;
  slugs: string[];
};

const skillGroups: { name: string; skills: Skill[] }[] = [
  {
    name: "AI & Automation",
    skills: [
      { name: "OpenAI GPT", slugs: ["apex-supply", "eastcoast-studios"] },
      { name: "Multi-agent rooms", slugs: ["bot-room", "midday-madness"] },
      { name: "Agent delegation", slugs: ["bot-room", "midday-madness"] },
      { name: "Web scraping", slugs: ["apex-supply"] },
    ],
  },
  {
    name: "Engineering",
    skills: [
      { name: "Python", slugs: ["apex-supply", "eastcoast-studios", "jlk"] },
      { name: "TypeScript", slugs: ["bot-room"] },
      { name: "Next.js", slugs: ["bot-room"] },
      { name: "React Native", slugs: ["bot-room"] },
      { name: "Supabase", slugs: ["bot-room"] },
      { name: "Vercel", slugs: ["bot-room"] },
    ],
  },
  {
    name: "Data & Ecommerce",
    skills: [
      { name: "Shopify", slugs: ["apex-supply", "eastcoast-studios"] },
      { name: "Matrixify", slugs: ["apex-supply", "eastcoast-studios"] },
      { name: "Yardi", slugs: ["jlk"] },
      { name: "Document automation", slugs: ["jlk"] },
    ],
  },
  {
    name: "APIs & Platforms",
    skills: [
      { name: "ESPN API", slugs: ["bot-room"] },
      { name: "The Odds API", slugs: ["bot-room"] },
      { name: "GitHub Pages", slugs: ["midday-madness"] },
    ],
  },
];

export default function Toolkit() {
  const [selected, setSelected] = useState<string | null>(null);

  const activeSkill = selected
    ? skillGroups.flatMap((g) => g.skills).find((s) => s.name === selected)
    : null;

  const visible = activeSkill
    ? projects.filter((p) => activeSkill.slugs.includes(p.slug))
    : projects;

  return (
    <div>
      <p className="text-sm text-zinc-500">
        Tap any skill to see the projects where I put it to use.
      </p>
      <div className="mt-6 space-y-6">
        {skillGroups.map((group) => (
          <div key={group.name}>
            <p className="font-mono text-xs uppercase tracking-widest text-zinc-500">
              {group.name}
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {group.skills.map((skill) => {
                const isActive = selected === skill.name;
                return (
                  <button
                    key={skill.name}
                    onClick={() => setSelected(isActive ? null : skill.name)}
                    aria-pressed={isActive}
                    className={`rounded-full border px-4 py-2.5 text-sm font-medium transition-all ${
                      isActive
                        ? "border-lime-300 bg-lime-300 text-black"
                        : "border-white/15 text-zinc-300 hover:border-lime-300/60 hover:text-white"
                    }`}
                  >
                    {skill.name}
                  </button>
                );
              })}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8">
        <p className="font-mono text-xs uppercase tracking-widest text-zinc-500">
          {activeSkill ? `Used in ${visible.length} project${visible.length === 1 ? "" : "s"}` : "All work"}
        </p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          {visible.map((p) => (
            <Link
              key={p.slug}
              href={`/projects/${p.slug}`}
              className="group rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all hover:-translate-y-0.5 hover:border-lime-300/40"
            >
              <div className="flex items-baseline justify-between gap-3">
                <h3 className="font-bold tracking-tight transition-colors group-hover:text-lime-200">
                  {p.title}
                </h3>
                <span className="shrink-0 font-mono text-xs text-zinc-500">
                  {p.year}
                </span>
              </div>
              <p className="mt-1 text-sm leading-relaxed text-zinc-400">
                {p.tagline}
              </p>
              <p className="mt-3 text-sm font-semibold text-lime-300">
                Case study <span aria-hidden>→</span>
              </p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
