import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

const featured = projects.filter((p) => p.featured);

const services = [
  {
    title: "Workflow automation",
    desc: "Kill the repetitive ops work — email triage, data entry, follow-ups, scheduling — with systems that run themselves.",
  },
  {
    title: "AI assistants & agents",
    desc: "Custom chatbots and agents trained on your business that answer customers, book jobs, and take action.",
  },
  {
    title: "Data pipelines & dashboards",
    desc: "Turn scattered spreadsheets and tools into one clear picture: morning briefs, KPI tracking, trend reviews.",
  },
  {
    title: "Real-time alerting",
    desc: "Know the moment something needs attention — inventory, deadlines, delays — instead of finding out late.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="bg-grid mask-fade-y absolute inset-0" aria-hidden />
        <div
          className="absolute -top-40 left-1/2 h-96 w-[42rem] -translate-x-1/2 rounded-full bg-lime-300/15 blur-[120px]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-6xl px-5 pb-24 pt-24 sm:px-8 sm:pt-32">
          <p className="font-mono text-xs uppercase tracking-widest text-lime-300">
            AI builder & consultant
          </p>
          <h1 className="mt-6 max-w-3xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl">
            I build AI systems that do{" "}
            <span className="text-lime-300">real work</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-zinc-400 sm:text-xl">
            I&apos;m Ryan Goldstein, an IU senior who turns machine learning,
            agents, and automation into tools people use every day. Now I bring
            that to small businesses.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/projects"
              className="rounded-full bg-lime-300 px-7 py-3.5 text-sm font-semibold text-black transition-transform hover:scale-[1.03]"
            >
              See the work
            </Link>
            <Link
              href="/services"
              className="rounded-full border border-white/15 px-7 py-3.5 text-sm font-semibold text-zinc-200 transition-colors hover:border-white/40"
            >
              Consulting services
            </Link>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-4">
            {[
              ["5", "AI systems in production"],
              ["Daily", "automations running"],
              ["2", "platforms shipped live"],
              ["2027", "consulting launches"],
            ].map(([n, label]) => (
              <div key={label} className="bg-[#0b0b0d] p-6">
                <p className="text-3xl font-bold text-lime-300">{n}</p>
                <p className="mt-1 text-sm text-zinc-400">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="flex items-end justify-between">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-lime-300">
              Selected work
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              Systems running in the real world
            </h2>
          </div>
          <Link
            href="/projects"
            className="hidden shrink-0 text-sm font-semibold text-lime-300 hover:underline sm:block"
          >
            All projects →
          </Link>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {featured.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>

      {/* Services preview */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <p className="font-mono text-xs uppercase tracking-widest text-lime-300">
            For small businesses
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
            Practical AI, priced for businesses that can&apos;t hire a data team
          </h2>
          <p className="mt-4 max-w-2xl text-zinc-400">
            Everything below is something I&apos;ve already built for myself, in
            production. Your business gets the proven version.
          </p>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {services.map((s, i) => (
              <div
                key={s.title}
                className="rounded-2xl border border-white/10 bg-[#0b0b0d] p-6"
              >
                <p className="font-mono text-sm text-lime-300">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-4 text-lg font-bold tracking-tight">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
          <Link
            href="/services"
            className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-lime-300 hover:underline"
          >
            How engagements work <span aria-hidden>→</span>
          </Link>
        </div>
      </section>

      {/* About teaser */}
      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <p className="font-mono text-xs uppercase tracking-widest text-lime-300">
              About
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              A builder first, a consultant second
            </h2>
            <p className="mt-4 leading-relaxed text-zinc-400">
              I&apos;m a senior at Indiana University&apos;s Kelley School of
              Business, studying Finance and Real Estate. For the past two
              years I&apos;ve been building AI systems that run my own life —
              and I&apos;m good at the part most AI talk skips: shipping
              something that works every day, not just in a demo.
            </p>
            <Link
              href="/about"
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-lime-300 hover:underline"
            >
              More about me <span aria-hidden>→</span>
            </Link>
          </div>
          <div className="animate-drift rounded-3xl border border-white/10 bg-gradient-to-br from-lime-300/15 via-white/[0.04] to-transparent p-8 sm:p-10">
            <p className="text-xl font-medium leading-relaxed tracking-tight sm:text-2xl">
              “The best AI demo is a system that&apos;s been running for six
              months without anyone thinking about it.”
            </p>
            <p className="mt-6 font-mono text-xs uppercase tracking-widest text-zinc-500">
              — How I think about this work
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
