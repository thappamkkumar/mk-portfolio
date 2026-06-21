"use client";

import Link from "next/link";
import { ArrowLeft, Home, Search } from "lucide-react";

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      {/* Background Grid */}
      <div
        className="
          absolute inset-0
          bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)]
          bg-size-[40px_40px]
        "
      />

      <div className="relative z-10 max-w-xl text-center">
        <p className="mb-4 text-sm tracking-[0.3em] text-zinc-500 uppercase">
          Error 404
        </p>

        <h1 className="mb-4 text-5xl font-bold tracking-tight md:text-7xl">
          Page Not Found
        </h1>

        <p className="mb-8 text-zinc-400">
          The page you&apos;re looking for doesn&apos;t exist, was moved, or the URL is
          incorrect.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/"
            className="
              inline-flex items-center gap-2
              rounded-lg border border-zinc-800
              px-5 py-3
              transition
              hover:border-zinc-700
              hover:bg-zinc-900
            "
          >
            <Home size={18} />
            Home
          </Link>

          <button
            onClick={() => window.history.back()}
            className="
              inline-flex items-center gap-2
              rounded-lg border border-zinc-800
              px-5 py-3
              transition
              hover:border-zinc-700
              hover:bg-zinc-900
            "
          >
            <ArrowLeft size={18} />
            Go Back
          </button>
        </div>

        <div className="mt-10 flex items-center justify-center gap-2 text-zinc-500">
          <Search size={16} />
          <span>Try searching for projects, skills, or experience.</span>
        </div>
      </div>
    </main>
  );
}