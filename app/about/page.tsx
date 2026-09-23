import Link from "next/link";

export const metadata = {
  title: "About — Ryan Goldstein",
  description: "About Ryan Goldstein: IU Kelley senior building AI systems that do real work.",
};

const facts = [
  ["School", "Indiana University, Kelley School of Business — Class of 2027"],
  ["Studying", "Finance + Real Estate"],
  ["Based in", "Bloomington, IN / Dallas, TX"],
  ["Building with", "Python, TypeScript, Next.js, LLMs, APIs, automation"],
  ["Currently", "Shipping Bot Room, running five AI systems daily"],
  ["Next", "AI consulting for small businesses — launching 2027"],
];

export default function AboutPage() {
  return (
    <section className="mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-24">
      <p className="font-mono text-xs uppercase tracking-widest text-lime-300">
        About
      </p>
      <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
        Hi, I&apos;m Ryan.
      </h1>

      <div className="mt-8 space-y-5 text-lg leading-relaxed text-zinc-400">
        <p>
          I&apos;m a senior at Indiana University&apos;s Kelley School of
          Business, studying Finance and Real Estate. I&apos;m also, somewhat
          accidentally, an AI engineer: for the past two years I&apos;ve been
          building AI systems that run my actual life — my mornings, my
          commute, my job search, my health, and a chat platform my friends use
          every day.
        </p>
        <p>
          I didn&apos;t set out to collect projects. I set out to solve my own
          problems, and I kept score on one metric: <span className="text-zinc-200">does it still work six months later without me thinking about it?</span> The
          systems on this site passed that test. That&apos;s a rarer bar than
          it sounds — most AI demos die the week after they&apos;re recorded.
        </p>
        <p>
          Next year I&apos;m bringing that bar to small businesses. Not
          AI strategy decks — working systems: the busywork automated, the
          data finally in one place, an assistant that actually answers
          customers. If that sounds useful,{" "}
          <a
            href="mailto:rygold04@gmail.com?subject=AI%20consulting%20inquiry"
            className="font-semibold text-lime-300 hover:underline"
          >
            let&apos;s talk
          </a>
          .
        </p>
      </div>

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

      <div className="mt-10 flex flex-wrap gap-3">
        <Link
          href="/projects"
          className="rounded-full bg-lime-300 px-6 py-3 text-sm font-semibold text-black transition-transform hover:scale-[1.03]"
        >
          See the work
        </Link>
        <a
          href="https://github.com/ryangold1234"
          target="_blank"
          rel="noreferrer"
          className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-zinc-200 transition-colors hover:border-white/40"
        >
          GitHub
        </a>
      </div>
    </section>
  );
}
