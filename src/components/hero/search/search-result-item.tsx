"use client";

import type { SearchItem } from "@/types/search";

interface SearchResultItemProps {
  result: SearchItem;
  active: boolean;
  onSelect: (href: string) => void;
}

export default function SearchResultItem({
  result,
  active,
  onSelect,
}: SearchResultItemProps) {
  return (
    <button
      type="button"
      onClick={() => onSelect(result.href)}
      className={`
        flex
        w-full
        items-center
        justify-between
        border-b
        border-white/5
        px-4
        py-3
        text-left
        transition-colors

        ${
          active
            ? "bg-white/10"
            : "hover:bg-white/5"
        }
      `}
    >
      <div>
        <p className="text-sm font-medium text-white">
          {result.title}
        </p>

        <p className="mt-1 text-xs text-zinc-500">
          {result.description}
        </p>
      </div>

      <span
        className="
          rounded-lg
          border
          border-white/10
          px-2
          py-1
          text-xs
          capitalize
          text-zinc-400
        "
      >
        {result.type}
      </span>
    </button>
  );
}