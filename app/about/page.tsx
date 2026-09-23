import Link from "next/link";

// TODO: Ryan's LinkedIn URL — LinkedIn button renders only when this is set.
const LINKEDIN_URL = "https://www.linkedin.com/in/ryangoldstein7/";

export const metadata = {
  title: "About — Ryan Goldstein",
  description:
    "Ryan Goldstein builds AI agents that do your work for you — Shopify automation, back-office pipelines, and agent crews for small businesses.",
};

const story = [
  {
    year: "2024",
    title: "JLK, Ltd. — Dallas real estate",
    text: "Summer 2024, inside the back office of a Dallas real estate firm: organizing the deeds and ownership papers for about 20 properties, working day-to-day in Yardi, and writing file-automation scripts that turned a chaotic archive into a system the team could actually use.",
    link: "/projects/jlk",
  },
  {
    year: "2025",
    title: "Apex Supply — wholesale distribution",
    text: "Summer 2025, a GPT-powered pipeline for a wholesale supply distributor: Matrixify exports in, clean SEO-ready Shopify listings out — SKU matching across supplier price files, tuned product-description prompts, and scraping to fill the gaps.",
    link: "/projects/apex-supply",
  },
  {
    year: "2026",
    title: "Bot Room + Midday Madness — multi-agent platforms",
    text: "Building multi-agent platforms: Bot Room, a real-time chat system where AI agents work alongside people every day, and an agent crew that runs the Midday Madness podcast's website and production operations.",
    link: "/projects/midday-madness",
  },
];

const forBusinesses = [
  {
    title: "AI agents that do the work",
    text: "Custom agents set up on your business — drafting, organizing, following up — instead of you doing it.",
    link: "/projects/bot-room",
  },
  {
    title: "Ecommerce data automation",
    text: "Shopify catalog pipelines: supplier spreadsheets in, clean SEO-ready listings out.",
    link: "/projects/apex-supply",
  },
  {
    title: "Back-office automation",
    text: "Documents and property records organized and kept current automatically.",
    link: "/projects/jlk",
  },
  {
    title: "Agent-run operations",
    text: "A crew of AI agents coordinating your content or ops workflow, without the email threads.",
    link: "/projects/midday-madness",
  },
];

const facts = [
  ["School", "Indiana University, Kelley School of Business — Class of 2027"],
  ["Studying", "Finance + Real Estate"],
  ["Based in", "Bloomington, IN"],
  ["Building with", "Python, TypeScript, Next.js, LLMs, APIs, automation"],
];

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-24">
      <p className="font-mono text-xs uppercase tracking-widest text-lime-300">
        About
      </p>
      <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
        About Ryan
      </h1>

      <div className="mt-8 flex flex-col gap-8 sm:flex-row sm:items-start">
        <img
          src="/headshot.jpg"
          alt="Ryan Goldstein"
          className="h-64 w-52 shrink-0 rounded-3xl border border-white/10 object-cover"
        />
        <div className="space-y-5 text-lg leading-relaxed text-zinc-400">
          <p>
            I&apos;m Ryan Goldstein, a senior at Indiana University&apos;s Kelley
            School of Business studying Finance and Real Estate (Class of 2027).
            I&apos;m obsessed with building AI that does real work.
          </p>
          <p>
            I didn&apos;t start with a theory of AI. I started with a mess — a
            real estate firm&apos;s disorganized archive — and kept score on one
            metric:{" "}
            <span className="text-zinc-200">
              does it still work six months later without me thinking about it?
            </span>{" "}
            Everything on this site passed that test. That&apos;s a rarer bar
            than it sounds — most AI demos die the week after they&apos;re
            recorded.
          </p>
        </div>
      </div>

      {/* Story */}
      <h2 className="mt-16 text-3xl font-bold tracking-tight sm:text-4xl">
        The arc so far
      </h2>
      <div className="mt-8 space-y-4">
        {story.map((s) => (
          <Link
            key={s.year}
            href={s.link}
            className="group block rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all hover:-translate-y-0.5 hover:border-lime-300/40 sm:p-8"
          >
            <p className="font-mono text-sm text-lime-300">{s.year}</p>
            <h3 className="mt-2 text-xl font-bold tracking-tight transition-colors group-hover:text-lime-200">
              {s.title}
            </h3>
            <p className="mt-2 leading-relaxed text-zinc-400">{s.text}</p>
            <p className="mt-4 text-sm font-semibold text-lime-300">
              Case study <span aria-hidden>→</span>
            </p>
          </Link>
        ))}
      </div>

      {/* Thesis */}
      <div className="mt-16 rounded-3xl border border-white/10 bg-gradient-to-br from-lime-300/15 via-white/[0.04] to-transparent p-8 sm:p-10">
        <p className="font-mono text-xs uppercase tracking-widest text-lime-300">
          How I think about it
        </p>
        <p className="mt-4 text-xl font-medium leading-relaxed tracking-tight sm:text-2xl">
          Most AI talk is demos. The real win is systems that run for months
          without anyone thinking about them. I make and set up agents to do
          your work instead of you doing the work.
        </p>
      </div>

      {/* What I do for businesses */}
      <h2 className="mt-16 text-3xl font-bold tracking-tight sm:text-4xl">
        What I do for businesses
      </h2>
      <div className="mt-8 grid gap-5 sm:grid-cols-2">
        {forBusinesses.map((b) => (
          <Link
            key={b.title}
            href={b.link}
            className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 transition-all hover:-translate-y-0.5 hover:border-lime-300/40"
          >
            <h3 className="text-lg font-bold tracking-tight transition-colors group-hover:text-lime-200">
              {b.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">
              {b.text}
            </p>
          </Link>
        ))}
      </div>

      {/* Facts */}
      <div className="mt-12 overflow-hidden rounded-2xl border border-white/10">
        {facts.map(([k, v], i) => (
          <div
            key={k}
            className={`grid gap-1 px-6 py-4 sm:grid-cols-[140px_1fr] sm:gap-6 ${
              i % 2 === 0 ? "bg-white/[0.03]" : "bg-transparent"
            }`}
          >
            <dt className="font-mono text-xs uppercase tracking-widest text-zinc-500 sm:pt-1">
              {k}
            </dt>
            <dd className="text-zinc-200">{v}</dd>
          </div>
        ))}
      </div>

      {/* Connect */}
      <h2 className="mt-16 text-3xl font-bold tracking-tight sm:text-4xl">
        Connect
      </h2>
      <div className="mt-8 flex flex-wrap gap-3">
        <a
          href={LINKEDIN_URL}
          target="_blank"
          rel="noreferrer"
          className="rounded-full bg-lime-300 px-6 py-3 text-sm font-semibold text-black transition-transform hover:scale-[1.03]"
        >
          LinkedIn
        </a>
        <a
          href="mailto:rygold04@gmail.com?subject=Hello%20from%20your%20portfolio"
          className="rounded-full bg-lime-300 px-6 py-3 text-sm font-semibold text-black transition-transform hover:scale-[1.03]"
        >
          Email me
        </a>
        <a
          href="https://github.com/ryangold1234"
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-zinc-200 transition-colors hover:border-white/40"
        >
          GitHub
        </a>
        <Link
          href="/services"
          className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-zinc-200 transition-colors hover:border-white/40"
        >
          Consulting services
        </Link>
      </div>
    </section>
  );
}
