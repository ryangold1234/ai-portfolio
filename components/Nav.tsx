"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/projects", label: "Projects" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const linkCls = (href: string, active: boolean) =>
    `rounded-md px-3 py-2 text-sm transition-colors ${
      active ? "text-white" : "text-zinc-400 hover:text-white"
    }`;

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#070709]/80 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link
          href="/"
          className="flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-lime-300 font-mono text-sm font-bold text-black">
            RG
          </span>
          <span className="hidden text-sm font-semibold tracking-tight min-[420px]:inline">
            Ryan Goldstein
          </span>
        </Link>
        <div className="flex items-center gap-1 sm:gap-2">
          <div className="hidden items-center md:flex">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                aria-current={pathname === l.href ? "page" : undefined}
                className={linkCls(l.href, pathname === l.href)}
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
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-label={open ? "Close menu" : "Open menu"}
            className="ml-1 flex h-10 w-10 items-center justify-center rounded-lg text-zinc-300 transition-colors hover:bg-white/10 hover:text-white md:hidden"
          >
            {open ? (
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden
              >
                <path d="M5 5l10 10M15 5L5 15" />
              </svg>
            ) : (
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                aria-hidden
              >
                <path d="M3 6h14M3 10h14M3 14h14" />
              </svg>
            )}
          </button>
        </div>
      </nav>
      {open && (
        <div className="border-t border-white/10 px-5 pb-6 pt-3 md:hidden">
          {links.map((l) => {
            const active = pathname === l.href;
            return (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                aria-current={active ? "page" : undefined}
                className={`flex items-center justify-between rounded-xl px-4 py-3.5 text-base font-medium transition-colors ${
                  active
                    ? "bg-white/[0.07] text-white"
                    : "text-zinc-300 hover:bg-white/[0.04] hover:text-white"
                }`}
              >
                {l.label}
                <span aria-hidden className="text-zinc-600">
                  →
                </span>
              </Link>
            );
          })}
        </div>
      )}
    </header>
  );
}
