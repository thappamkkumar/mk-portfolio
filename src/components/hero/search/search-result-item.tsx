"use client";

import { Eye } from "lucide-react";

import type { SearchItem } from "@/types/search";

interface SearchResultItemProps {
  result: SearchItem;
  onSelect: (href: string) => void;
}

export default function SearchResultItem({
  result,
  onSelect,
}: SearchResultItemProps) {
  return (
    <div
      className="
        w-full
        border-b
        border-white/5

        px-4
        py-2.5
 
 
      "
    >
      <div className="flex w-full items-center gap-3">
        <div className="min-w-0 flex-1">
          <p className="truncate text-sm text-start font-medium text-white">
            {result.title}
          </p>

          <p className="mt-0.5 truncate text-start text-xs text-zinc-400">
            {result.value ??
              result.description}
          </p>
        </div>

        {result.href && (
          <button
            type="button"
            onClick={() =>
              onSelect(result.href!)
            }
            className={`
              flex
              shrink-0
              items-center
              gap-1.5

              cursor-pointer
              text-xs
              rounded-full
              border
              border-white/10
              px-2
              py-1.5
              text-white/70
              transition-all
              duration-300
              hover:border-emerald-400/30
              hover:bg-emerald-400/5
              hover:text-white
              
            `}
          >
            <Eye size={14} />

            <span className="hidden sm:inline">
              View
            </span>
          </button>
        )}
      </div>
    </div>
  );
}