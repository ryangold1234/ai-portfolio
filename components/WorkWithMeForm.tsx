"use client";

import { useState } from "react";

const projectTypes = [
  "AI agents",
  "Ecommerce automation",
  "Back-office automation",
  "Agent crew / operations",
  "Something else",
];
const budgets = ["Under $1k", "$1k–$5k", "$5k+", "Not sure yet"];
const timelines = ["ASAP", "1–3 months", "Just exploring"];

const inputCls =
  "w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-base text-zinc-100 placeholder:text-zinc-500 outline-none transition-colors focus:border-lime-300/60 sm:text-sm";

export default function WorkWithMeForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "done" | "error">(
    "idle"
  );
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError("");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      const json = await res.json();
      if (json.ok) {
        setStatus("done");
      } else {
        setError(json.error ?? "Something went wrong — please try again.");
        setStatus("error");
      }
    } catch {
      setError("Couldn't send that — check your connection and try again.");
      setStatus("error");
    }
  }

  if (status === "done") {
    return (
      <div className="rounded-2xl border border-lime-300/30 bg-lime-300/5 p-8 text-center">
        <p className="font-mono text-xs uppercase tracking-widest text-lime-300">
          Request received
        </p>
        <h3 className="mt-3 text-2xl font-bold tracking-tight">
          Thanks — I&apos;ll reply within 48 hours.
        </h3>
        <p className="mx-auto mt-3 max-w-md text-sm text-zinc-400">
          Your request is in my inbox. If it&apos;s urgent, email me directly at{" "}
          <a
            href="mailto:rygold04@gmail.com"
            className="text-lime-300 underline underline-offset-2"
          >
            rygold04@gmail.com
          </a>
          .
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      {/* honeypot — humans never see this */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        className="hidden"
        aria-hidden
      />
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="mb-2 block text-sm text-zinc-300">
            Your name *
          </label>
          <input
            id="name"
            name="name"
            required
            minLength={2}
            placeholder="Jordan Smith"
            className={inputCls}
          />
        </div>
        <div>
          <label htmlFor="email" className="mb-2 block text-sm text-zinc-300">
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="jordan@company.com"
            className={inputCls}
          />
        </div>
      </div>
      <div>
        <label htmlFor="company" className="mb-2 block text-sm text-zinc-300">
          Company
        </label>
        <input
          id="company"
          name="company"
          placeholder="Company, Inc. (optional)"
          className={inputCls}
        />
      </div>
      <div className="grid gap-5 sm:grid-cols-3">
        <div>
          <label
            htmlFor="projectType"
            className="mb-2 block text-sm text-zinc-300"
          >
            Project type
          </label>
          <select id="projectType" name="projectType" className={inputCls} defaultValue="">
            <option value="" disabled>
              Select…
            </option>
            {projectTypes.map((t) => (
              <option key={t} value={t} className="bg-zinc-900">
                {t}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="budget" className="mb-2 block text-sm text-zinc-300">
            Budget
          </label>
          <select id="budget" name="budget" className={inputCls} defaultValue="">
            <option value="" disabled>
              Select…
            </option>
            {budgets.map((b) => (
              <option key={b} value={b} className="bg-zinc-900">
                {b}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="timeline" className="mb-2 block text-sm text-zinc-300">
            Timeline
          </label>
          <select id="timeline" name="timeline" className={inputCls} defaultValue="">
            <option value="" disabled>
              Select…
            </option>
            {timelines.map((t) => (
              <option key={t} value={t} className="bg-zinc-900">
                {t}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <label htmlFor="message" className="mb-2 block text-sm text-zinc-300">
          What are you trying to automate? *
        </label>
        <textarea
          id="message"
          name="message"
          required
          minLength={10}
          rows={5}
          placeholder="A sentence or two is plenty — what takes up your team's time, and what would you rather they be doing?"
          className={inputCls}
        />
      </div>
      {status === "error" && (
        <p className="text-sm text-red-400">{error}</p>
      )}
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-full bg-lime-300 px-7 py-3.5 text-sm font-semibold text-black transition-transform hover:scale-[1.01] disabled:opacity-60 sm:w-auto"
      >
        {status === "sending" ? "Sending…" : "Send the request"}
      </button>
      <p className="text-xs text-zinc-500">
        Goes straight to my inbox — no mailing list, no spam, no sharing your
        info with anyone.
      </p>
    </form>
  );
}
