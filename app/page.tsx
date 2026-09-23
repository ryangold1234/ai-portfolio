import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

const featured = projects.filter((p) => p.featured);

const services = [
  {
    title: "AI agents that do the work",
    desc: "Custom agents set up on your business that handle the repetitive work — drafting, organizing, following up — instead of you doing it.",
  },
  {
    title: "Ecommerce data automation",
    desc: "Shopify catalog pipelines: supplier spreadsheets in, clean SEO-ready listings out. Proven on a wholesale supply catalog.",
  },
  {
    title: "Back-office automation",
    desc: "Documents, records, property data — organized and kept current automatically. Proven across ~20 properties at a Dallas real estate firm.",
  },
  {
    title: "Agent-run operations",
    desc: "A crew of AI agents that coordinates your content or ops workflow — posting updates, handling handoffs — without the email threads. Proven running a live podcast.",
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
            AI automation for small business
          </p>
          <h1 className="mt-6 max-w-3xl text-5xl font-bold leading-[1.05] tracking-tight sm:text-7xl">
            I build AI agents that do{" "}
            <span className="text-lime-300">your work for you</span>.
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-zinc-400 sm:text-xl">
            I&apos;m Ryan Goldstein, an IU Kelley senior studying Finance and
            Real Estate. I design AI systems — catalog automation, back-office
            pipelines, agent crews — that take work off a business&apos;s plate
            instead of adding to it.
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
              ["4", "business AI systems shipped"],
              ["≈20", "property records organized at JLK"],
              ["3", "industries: supply, real estate, media"],
              ["2024", "building for businesses since"],
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
              01 — Selected work
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
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featured.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </section>

      {/* Services preview */}
      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <p className="font-mono text-xs uppercase tracking-widest text-lime-300">
            02 — Services
          </p>
          <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
            Practical AI, priced for businesses that can&apos;t hire a data team
          </h2>
          <p className="mt-4 max-w-2xl text-zinc-400">
            Everything below is something I&apos;ve already shipped for a real
            business. Yours gets the proven version.
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
              03 — About
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
              A builder first, a consultant second
            </h2>
            <p className="mt-4 leading-relaxed text-zinc-400">
              I&apos;m a senior at Indiana University&apos;s Kelley School of
              Business, studying Finance and Real Estate. I got hooked building
              AI that does real work — first organizing a real estate
              firm&apos;s records, then automating a Shopify catalog, now
              setting up agent crews that run operations on their own. I&apos;m
              good at the part most AI talk skips: shipping something that
              works every day, not just in a demo.
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
