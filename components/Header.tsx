"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const isTurkish = pathname.startsWith("/tr");

  const getLocalizedPath = (path: string) => {
    if (isTurkish) {
      return path === "/" ? "/tr" : `/tr${path}`;
    }

    return path;
  };

  const switchLanguage = (locale: "en" | "tr") => {
    const pathWithoutLocale = pathname.replace(/^\/tr/, "");

    if (locale === "tr") {
      return pathWithoutLocale === "" ? "/tr" : `/tr${pathWithoutLocale}`;
    }

    return pathWithoutLocale === "" ? "/" : pathWithoutLocale;
  };

  return (
    <header className="bg-[#fefefb] border-b border-black/10">
      <div className="relative flex items-center justify-between px-10 py-5">
        <div className="flex gap-5 items-center text-lg">
          <span>f</span>
          <span>𝕏</span>
          <span>◎</span>
        </div>

        <Link href={getLocalizedPath("/")} className="absolute left-1/2 -translate-x-1/2">
          <img
            src="/logo.png"
            alt="MA&RA"
            className="h-18 w-auto object-contain"
          />
        </Link>

        <div className="flex gap-3 text-sm">
          <Link href={switchLanguage("en")}>EN</Link>
          <span>/</span>
          <Link href={switchLanguage("tr")}>TR</Link>
        </div>
      </div>

      <nav className="flex justify-center gap-10 py-4 text-sm">
        <Link href={getLocalizedPath("/story")}>
          {isTurkish ? "Hikaye" : "Story"}
        </Link>

        <Link href={getLocalizedPath("/collection")}>
          {isTurkish ? "Koleksiyon" : "Collection"}
        </Link>

        <Link href={getLocalizedPath("/workbench")}>
          {isTurkish ? "Atölye" : "Workbench"}
        </Link>

        <Link href={getLocalizedPath("/contact")}>
          {isTurkish ? "İletişim" : "Contact"}
        </Link>
      </nav>
    </header>
  );
}
