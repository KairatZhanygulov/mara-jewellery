"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();
  const isTurkish = pathname.startsWith("/tr");

  const getLocalizedPath = (path: string) => {
    if (isTurkish) {
      return path === "/" ? "/tr" : `/tr${path}`;
    }

    return path;
  };

  return (
    <footer className="bg-black text-white px-10 py-16">
      <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-10 text-center md:text-left">
        <div>
          <h3 className="font-serif text-2xl mb-4">MA&RA</h3>
          <p className="text-sm text-white/60">
            {isTurkish
              ? "Zamansız mücevherler, zarafet ve özenle hazırlanır."
              : "Timeless jewellery, crafted with elegance and care."}
          </p>
        </div>

        <div>
          <h4 className="mb-4 text-sm uppercase tracking-widest">
            {isTurkish ? "Menü" : "Menu"}
          </h4>

          <div className="flex flex-col gap-2 text-sm text-white/70">
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
          </div>
        </div>

        <div>
          <h4 className="mb-4 text-sm uppercase tracking-widest">Social</h4>

          <div className="flex gap-5 justify-center md:justify-start text-lg text-white/70">
            <span>f</span>
            <span>𝕏</span>
            <span>◎</span>
          </div>
        </div>
      </div>

      <div className="mt-12 pt-6 border-t border-white/20 text-center text-xs text-white/50">
        © 2026 MA&RA.{" "}
        {isTurkish ? "Tüm hakları saklıdır." : "All rights reserved."}
      </div>
    </footer>
  );
}