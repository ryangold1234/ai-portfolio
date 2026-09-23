import SectionHeading from "@/components/SectionHeading";
import WorkWithMeForm from "@/components/WorkWithMeForm";

export const metadata = {
  title: "Work With Me — Ryan Goldstein",
  description:
    "Start an AI automation project with Ryan Goldstein: ecommerce pipelines, back-office automation, AI agents, and agent-run operations for small businesses.",
};

const steps = [
  {
    n: "01",
    title: "You reach out",
    desc: "Fill out the form below — a few sentences about what's eating your team's time is plenty. I reply personally within 48 hours.",
  },
  {
    n: "02",
    title: "We scope it",
    desc: "A short call to map the work: where the repetitive hours are, what good looks like, and whether automation actually pays for itself here. If it's not a fit, I'll tell you.",
  },
  {
    n: "03",
    title: "Pilot, then handover",
    desc: "We start with a small, bounded pilot on your real workflow — not a slide deck. When it works, your team gets trained, everything's documented, and you own it outright.",
  },
];

const faqs = [
  {
    q: "What does a project cost?",
    a: "It depends on scope, which is why we start with a pilot. Small automations land in the hundreds; full catalog pipelines and agent systems run higher. The scoping call is free, and I'll give you an honest number before anything starts.",
  },
  {
    q: "We're not technical. Is this for us?",
    a: "Especially for you. You describe the problem in plain English, I handle the rest, and what you get is documented in plain English too.",
  },
  {
    q: "Who owns what we build?",
    a: "You do. Code, docs, credentials — everything lives in your accounts. No lock-in, no retainer required to keep it running.",
  },
  {
    q: "Hiring for a full-time role instead?",
    a: "Happy to talk — just say so in the message. I'm an IU Kelley senior (Finance + Real Estate, Class of 2027) with an investment banking internship at Cascadia Capital under my belt.",
  },
];

export default function WorkWithMePage() {
  return (
    <div className="mx-auto max-w-4xl px-5 py-16 sm:px-8 sm:py-24">
      <p className="font-mono text-xs uppercase tracking-widest text-lime-300">
        Work with me
      </p>
      <h1 className="mt-4 max-w-2xl text-balance text-4xl font-bold tracking-tight sm:text-5xl">
        Tell me what&apos;s eating your team&apos;s time.{" "}
        <span className="text-zinc-500">I&apos;ll tell you if I can kill it.</span>
      </h1>
      <p className="mt-6 max-w-2xl text-lg text-zinc-400">
        I build AI systems for small businesses — catalog automation,
        back-office pipelines, agents that do the repetitive work. If
        automation won&apos;t pay for itself in your case, I&apos;ll say that
        too.
      </p>

      <SectionHeading
        index="01"
        kicker="How it works"
        title="Three steps, no pitch decks"
        className="mt-16"
      />
      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        {steps.map((s) => (
          <div
            key={s.n}
            className="rounded-2xl border border-white/10 bg-white/[0.02] p-6"
          >
            <p className="font-mono text-xs text-lime-300">{s.n}</p>
            <h3 className="mt-3 font-semibold tracking-tight">{s.title}</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">
              {s.desc}
            </p>
          </div>
        ))}
      </div>

      <SectionHeading
        index="02"
        kicker="Start here"
        title="Send a project request"
        className="mt-16"
      />
      <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8">
        <WorkWithMeForm />
      </div>

      <SectionHeading
        index="03"
        kicker="Fair questions"
        title="Before you ask"
        className="mt-16"
      />
      <div className="mt-8 space-y-4">
        {faqs.map((f) => (
          <div
            key={f.q}
            className="rounded-2xl border border-white/10 bg-white/[0.02] p-6"
          >
            <h3 className="font-semibold tracking-tight">{f.q}</h3>
            <p className="mt-2 text-sm leading-relaxed text-zinc-400">{f.a}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
