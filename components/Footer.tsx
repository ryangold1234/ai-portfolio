import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-8 sm:p-12">
          <p className="font-mono text-xs uppercase tracking-widest text-lime-300">
            AI consulting for small businesses
          </p>
          <h2 className="mt-4 max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
            Have a business problem AI could solve? Let&apos;s talk.
          </h2>
          <p className="mt-4 max-w-xl text-zinc-400">
            I help small businesses automate the busywork, understand their
            data, and put AI to work where it actually moves the needle.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="mailto:rygold04@gmail.com?subject=AI%20consulting%20inquiry"
              className="rounded-full bg-lime-300 px-6 py-3 text-sm font-semibold text-black transition-transform hover:scale-[1.03]"
            >
              Get in touch
            </a>
            <a
              href="https://github.com/ryangold1234"
              target="_blank"
              rel="noreferrer"
              className="rounded-full border border-white/15 px-6 py-3 text-sm font-semibold text-zinc-200 transition-colors hover:border-white/40"
            >
              GitHub
            </a>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-4 text-sm text-zinc-500 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Ryan Goldstein. Built with Next.js.</p>
          <div className="flex gap-6">
            <Link href="/projects" className="transition-colors hover:text-zinc-300">
              Projects
            </Link>
            <Link href="/services" className="transition-colors hover:text-zinc-300">
              Services
            </Link>
            <Link href="/about" className="transition-colors hover:text-zinc-300">
              About
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
