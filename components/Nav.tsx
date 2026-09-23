import Link from "next/link";

const links = [
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#070709]/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link href="/" className="flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-lime-300 font-mono text-sm font-bold text-black">
            RG
          </span>
          <span className="text-sm font-semibold tracking-tight">
            Ryan Goldstein
          </span>
        </Link>
        <div className="flex items-center gap-1 sm:gap-2">
          <div className="hidden items-center md:flex">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="rounded-md px-3 py-2 text-sm text-zinc-400 transition-colors hover:text-white"
              >
                {l.label}
              </Link>
            ))}
          </div>
          <Link
            href="/work-with-me"
            className="ml-2 rounded-full bg-lime-300 px-4 py-2 text-sm font-semibold text-black transition-transform hover:scale-[1.03]"
          >
            Work with me
          </Link>
        </div>
      </nav>
    </header>
  );
}
