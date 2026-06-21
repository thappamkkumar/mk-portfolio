"use client";

import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

export default function SecondaryHeader() {
  const router = useRouter();

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-black/50 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 md:px-6">
        <button
          onClick={() => router.back()}
          className="
            cursor-pointer
            flex
            items-center
            gap-2
            text-sm
            text-zinc-400
            transition-colors
            hover:text-white
          "
        >
          <ArrowLeft className="h-4 w-4" />
          Back
        </button>

        <Link
          href="/"
          className="font-mono text-lg font-semibold tracking-tight text-white"
        >
          {"<"}MK
          <span className="text-emerald-400">.</span>
          {" />"}
        </Link>
      </div>
    </header>
  );
}