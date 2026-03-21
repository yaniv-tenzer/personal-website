"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/research", label: "Research" },
  { href: "/teaching", label: "Teaching" },
  { href: "/tech", label: "Tech" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  const pathname = usePathname();

  return (
    <header className="bg-[#002147] rounded-t-sm px-10 py-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <Link href="/" className="shrink-0 group">
        <span className="block text-xl font-semibold tracking-tight text-white">
          Yaniv Tenzer
        </span>
        <span className="block text-xs text-blue-200 font-normal tracking-wide mt-0.5">
          Statistics &amp; Data Science Researcher
        </span>
      </Link>
      <nav className="flex flex-wrap gap-x-6 gap-y-1 text-sm text-blue-200">
        {links.map(({ href, label }) => {
          const active =
            href === "/" ? pathname === "/" : pathname.startsWith(href);
          return (
            <Link
              key={href}
              href={href}
              className={`transition-colors hover:text-white pb-0.5 ${
                active
                  ? "text-white border-b border-white"
                  : ""
              }`}
            >
              {label}
            </Link>
          );
        })}
      </nav>
    </header>
  );
}
