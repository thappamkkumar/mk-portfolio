"use client";

import {
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";

import { Search } from "lucide-react";
import { useRouter } from "next/navigation";

import { searchPortfolio } from "@/lib/search";

import SearchResults from "./search-results";

export default function SearchBar() {
  const router = useRouter();

  const wrapperRef =
    useRef<HTMLDivElement>(null);

  const [query, setQuery] =
    useState(() => {
      if (
        typeof window === "undefined"
      ) {
        return "";
      }

      return (
        sessionStorage.getItem(
          "portfolio-search-query"
        ) ?? ""
      );
    });

  const results = useMemo(
    () => searchPortfolio(query),
    [query]
  );

  /**
   * Persist query for current tab
   */
  useEffect(() => {
    if (query.trim()) {
      sessionStorage.setItem(
        "portfolio-search-query",
        query
      );
    } else {
      sessionStorage.removeItem(
        "portfolio-search-query"
      );
    }
  }, [query]);

  /**
   * Clear on outside click
   */
  useEffect(() => {
    const handleClickOutside = (
      event: MouseEvent
    ) => {
      if (
        wrapperRef.current &&
        !wrapperRef.current.contains(
          event.target as Node
        )
      ) {
        setQuery("");
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  const navigateToResult = (
    href: string
  ) => {
    router.push(href);
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (e.key === "Escape") {
      setQuery("");
    }
  };

  const handleCloseResults = () => {
    setQuery("");

    sessionStorage.removeItem(
      "portfolio-search-query"
    );
  };

  return (
    <div
      ref={wrapperRef}
      className={`
        relative
        mx-auto
        w-full
        max-w-3xl
      `}
    >
      <div
        className={`
          absolute
          inset-0
          rounded-3xl
          bg-emerald-500/10
          blur-3xl
        `}
      />

      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className={`
          group
          relative
          flex
          h-16
          w-full
          items-center
          gap-4
          rounded-2xl
          border
          border-white/10
          bg-zinc-900/70
          px-5
          backdrop-blur-xl
          transition-all
          duration-300
          hover:border-emerald-500/20
          focus-within:border-emerald-500/40
          focus-within:bg-zinc-900/80
          focus-within:shadow-[0_0_40px_rgba(16,185,129,0.08)]
        `}
      >
        <Search
          className={`
            h-5
            w-5
            shrink-0
            text-zinc-500
            transition-colors
            duration-300
            group-focus-within:text-emerald-400
          `}
        />

        <input
          type="text"
          value={query}
          onChange={(e) =>
            setQuery(e.target.value)
          }
          onKeyDown={handleKeyDown}
          placeholder="Search React, Laravel, SkillVilla..."
          className={`
            h-full
            w-full
            bg-transparent
            text-sm
            text-zinc-200
            outline-none
            placeholder:text-zinc-500
            sm:text-base
          `}
        />

        <div
          className={`
            hidden
            shrink-0
            items-center
            gap-2
            rounded-xl
            border
            border-white/10
            bg-black/20
            px-3
            py-1.5
            text-xs
            text-zinc-500
            backdrop-blur
            lg:flex
          `}
        >
          <span
            className={`
              h-2
              w-2
              rounded-full
              bg-emerald-400
            `}
          />

          Try &#34;React&#34;
        </div>
      </form>
                     
      <SearchResults
        query={query}
        results={results}
        onSelect={navigateToResult}
        onClose={handleCloseResults}
      />
    </div>
  );
}