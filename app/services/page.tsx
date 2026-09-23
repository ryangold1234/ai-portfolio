import Link from "next/link";

export const metadata = {
  title: "AI Consulting Services — Ryan Goldstein",
  description:
    "I make and set up AI agents to do your work instead of you doing work: ecommerce automation, back-office pipelines, and agent-run operations for small businesses.",
};

const offerings = [
  {
    n: "01",
    title: "AI agents that do the work",
    desc: "Custom agents set up on your business that handle the repetitive work — drafting, organizing, following up — instead of you doing it. Built on your real workflow, handed over documented.",
    example: "Proven in: Bot Room, a live multi-agent platform where AI assistants work alongside people in real time.",
    link: "/projects/bot-room",
  },
  {
    n: "02",
    title: "Ecommerce data automation",
    desc: "Shopify catalog pipelines: messy supplier spreadsheets, price files, and exports in — clean, consistent, SEO-ready listings out. Your catalog starts maintaining itself.",
    example: "Proven in: Apex Supply, a GPT-powered pipeline that turns raw supplier data into publish-ready Shopify listings.",
    link: "/projects/apex-supply",
  },
  {
    n: "03",
    title: "Back-office automation",
    desc: "Documents, records, property data — audited, organized, and kept current automatically. I work inside your systems (Yardi, spreadsheets, file shares) and leave automation scripts your team keeps using.",
    example: "Proven in: JLK, Ltd., where I organized deeds and ownership papers across ~20 properties for a Dallas real estate firm.",
    link: "/projects/jlk",
  },
  {
    n: "04",
    title: "Agent-run operations",
    desc: "A crew of AI agents that coordinates your content or ops workflow — posting updates, handling handoffs, running the playbook — without the email threads. You see a feed of what's done, not a pile of questions.",
    example: "Proven in: Midday Madness, where an agent crew runs a live podcast's website and production operations.",
    link: "/projects/midday-madness",
  },
];

const steps = [
  {
    title: "Map the work",
    desc: "A short audit to find the repetitive hours: where the team does the same thing over and over, and what it's costing you.",
  },
  {
    title: "Build the system",
    desc: "The agent or pipeline gets built and tested on your real workflow — your data, your tools, your edge cases — not a generic template.",
  },
  {
    title: "Hand over the keys",
    desc: "It runs itself from day one. Your team gets trained, everything is documented, and there's no lock-in — you own it.",
  },
];

const faqs = [
  {
    q: "We're not technical. Is this for us?",
    a: "Especially for you. My whole approach is built for operators, not engineers: you describe the problem in plain English, I handle the rest, and what you get is documented in plain English too.",
  },
  {
    q: "What does it cost?",
    a: "Every engagement starts with a free discovery call and a fixed-price build — you'll know the full cost before committing to anything. Projects are scoped to be affordable for a small business, not an enterprise. Now booking projects for 2027.",
  },
  {
    q: "Will we depend on you forever?",
    a: "No. Everything I build is documented and handed over. If you want me to keep an eye on things as your business changes, we can arrange that — but the system never needs me.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <section className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-24">
        <p className="font-mono text-xs uppercase tracking-widest text-lime-300">
          Services
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl font-bold tracking-tight sm:text-5xl">
          I make and set up agents to do your work instead of you doing work.
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-zinc-400">
          Practical AI for small businesses — fixed price, built on your real
          workflow, handed over documented so you own it.
        </p>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {offerings.map((o) => (
            <div
              key={o.n}
              className="flex flex-col rounded-2xl border border-white/10 bg-white/[0.03] p-8"
            >
              <p className="font-mono text-sm text-lime-300">{o.n}</p>
              <h2 className="mt-4 text-2xl font-bold tracking-tight">
                {o.title}
              </h2>
              <p className="mt-3 leading-relaxed text-zinc-400">{o.desc}</p>
              <p className="mt-5 flex-1 border-t border-white/10 pt-4 text-sm text-zinc-500">
                {o.example}
              </p>
              <Link
                href={o.link}
                className="mt-4 text-sm font-semibold text-lime-300 hover:underline"
              >
                See the case study <span aria-hidden>→</span>
              </Link>
            </div>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02]">
        <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
          <p className="font-mono text-xs uppercase tracking-widest text-lime-300">
            How it works
          </p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            From first call to working system
          </h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {steps.map((s, i) => (
              <div key={s.title} className="relative">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-lime-300 font-mono text-sm font-bold text-black">
                    {i + 1}
                  </span>
                  {i < steps.length - 1 && (
                    <span
                      aria-hidden
                      className="hidden h-px flex-1 bg-white/10 lg:block"
                    />
                  )}
                </div>
                <h3 className="mt-4 text-lg font-bold tracking-tight">
                  {s.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                  {s.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-5 py-20 sm:px-8">
        <p className="font-mono text-xs uppercase tracking-widest text-lime-300">
          FAQ
        </p>
        <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
          Fair questions
        </h2>
        <div className="mt-8 divide-y divide-white/10">
          {faqs.map((f) => (
            <div key={f.q} className="py-6">
              <h3 className="text-lg font-semibold tracking-tight">{f.q}</h3>
              <p className="mt-2 leading-relaxed text-zinc-400">{f.a}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 rounded-2xl border border-lime-300/25 bg-lime-300/[0.06] p-8 text-center">
          <h3 className="text-2xl font-bold tracking-tight">
            Start with a free discovery call
          </h3>
          <p className="mx-auto mt-2 max-w-md text-zinc-400">
            Thirty minutes, no pitch. If AI can&apos;t pay for itself in your
            business, I&apos;ll tell you that too.
          </p>
          <a
            href="mailto:rygold04@gmail.com?subject=AI%20consulting%20inquiry"
            className="mt-6 inline-block rounded-full bg-lime-300 px-8 py-3.5 text-sm font-semibold text-black transition-transform hover:scale-[1.03]"
          >
            Book the call
          </a>
        </div>
      </section>
    </>
  );
}
