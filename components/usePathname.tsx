"use client";

import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const englishPath =
    pathname.startsWith("/tr")
      ? pathname.replace("/tr", "") || "/"
      : pathname;

  const turkishPath =
    pathname.startsWith("/tr")
      ? pathname
      : `/tr${pathname === "/" ? "" : pathname}`;

  return (
    <header className="bg-[#fefefb] border-b border-black/10">
      <div className="relative flex items-center justify-between px-10 py-5">
        <div className="flex gap-5 items-center text-lg">
          <span>f</span>
          <span>𝕏</span>
          <span>◎</span>
        </div>

        <a href="/" className="absolute left-1/2 -translate-x-1/2">
          <img
            src="/logo.png"
            alt="MA&RA"
            className="h-16 w-auto object-contain"
          />
        </a>

        <div className="flex gap-3 text-sm">
          <a href={englishPath} className="hover:opacity-60">EN</a>
          <span>/</span>
          <a href={turkishPath} className="hover:opacity-60">TR</a>
        </div>
      </div>

      <nav className="flex justify-center gap-10 py-4 text-sm border-t border-black/10">
        <a href={pathname.startsWith("/tr") ? "/tr/story" : "/story"}>Story</a>
        <a href={pathname.startsWith("/tr") ? "/tr/collection" : "/collection"}>Collection</a>
        <a href={pathname.startsWith("/tr") ? "/tr/workbench" : "/workbench"}>Workbench</a>
        <a href={pathname.startsWith("/tr") ? "/tr/contact" : "/contact"}>Contact</a>
      </nav>
    </header>
  );
}