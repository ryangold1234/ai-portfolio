export const metadata = {
  title: "AI Consulting Services — Ryan Goldstein",
  description:
    "Practical AI consulting for small businesses: workflow automation, AI assistants, data pipelines, and real-time alerting.",
};

const offerings = [
  {
    n: "01",
    title: "Workflow automation",
    desc: "The repetitive work eating your week — email triage, data entry, invoicing follow-ups, appointment scheduling — handled by systems that run themselves. You approve the design; the system does the doing.",
    example: "Proven in: my recruiting pipeline and daily briefings, which run unattended every day.",
  },
  {
    n: "02",
    title: "AI assistants & agents",
    desc: "A chatbot or agent trained on your business — your services, your pricing, your policies — that answers customers instantly, books jobs, and escalates to a human when it should.",
    example: "Proven in: Bot Room, a multi-agent platform where AI assistants converse with people and each other in real time.",
  },
  {
    n: "03",
    title: "Data pipelines & dashboards",
    desc: "Your numbers live in five tools. I pull them into one place: a morning brief with yesterday's sales and today's priorities, weekly trend reviews, and alerts when something moves.",
    example: "Proven in: my health analytics pipeline and daily intelligence brief.",
  },
  {
    n: "04",
    title: "Real-time alerting",
    desc: "Stop finding out late. Live monitoring that notifies the right person the moment it matters — low inventory, a late shipment, a deadline at risk, a KPI moving the wrong way.",
    example: "Proven in: my transit ETA system, which texts 'leave now' at exactly the right minute.",
  },
];

const steps = [
  {
    title: "Discover",
    desc: "A free 30-minute call. We find the one or two places AI would actually pay for itself in your business — not a laundry list.",
  },
  {
    title: "Prototype",
    desc: "Within two weeks you get a working prototype on your real data. You react to something real, not a slide deck.",
  },
  {
    title: "Deploy",
    desc: "We harden the prototype, wire it into your tools, and document it so you're never dependent on me to keep it running.",
  },
  {
    title: "Support",
    desc: "A simple monthly check-in keeps everything healthy as your business changes. No lock-in, no black box.",
  },
];

const faqs = [
  {
    q: "We're not technical. Is this for us?",
    a: "Especially for you. My whole approach is built for operators, not engineers: you describe the problem in plain English, I handle the rest, and what you get is documented in plain English too.",
  },
  {
    q: "What does it cost?",
    a: "Every engagement starts with a free discovery call and a fixed-price prototype — you'll know the full cost before committing to anything. Prototypes are scoped to be affordable for a small business, not an enterprise.",
  },
  {
    q: "Will we depend on you forever?",
    a: "No. Everything I build is documented and handed over. The monthly support option exists because businesses prefer it, not because the system needs me.",
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
          Practical AI for small businesses
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-zinc-400">
          No hype, no six-figure transformation programs. I find the two or
          three places AI pays for itself in your business and build them —
          fixed price, working prototype in weeks.
        </p>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {offerings.map((o) => (
            <div
              key={o.n}
              className="rounded-2xl border border-white/10 bg-white/[0.03] p-8"
            >
              <p className="font-mono text-sm text-lime-300">{o.n}</p>
              <h2 className="mt-4 text-2xl font-bold tracking-tight">
                {o.title}
              </h2>
              <p className="mt-3 leading-relaxed text-zinc-400">{o.desc}</p>
              <p className="mt-5 border-t border-white/10 pt-4 text-sm text-zinc-500">
                {o.example}
              </p>
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
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
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
