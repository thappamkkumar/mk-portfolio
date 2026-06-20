import type { SearchItem } from "@/types/search";

import SearchResultItem from "./search-result-item";

interface SearchResultsProps {
  query: string;
  results: SearchItem[];
  activeIndex: number;
  onSelect: (href: string) => void;
}

export default function SearchResults({
  query,
  results,
  activeIndex,
  onSelect,
}: SearchResultsProps) {
  if (!query.trim()) {
    return null;
  }

  return (
    <div
      className="
        absolute
        top-full
        left-0
        right-0
        z-50
        mt-3
        overflow-hidden
        rounded-2xl
        border
        border-white/10
        bg-zinc-950/95
        backdrop-blur-xl
      "
    >
      {results.length > 0 ? (
        results.map((result, index) => (
          <SearchResultItem
            key={result.id}
            result={result}
            active={index === activeIndex}
            onSelect={onSelect}
          />
        ))
      ) : (
        <div className="p-4 text-sm text-zinc-500">
          No results found.
        </div>
      )}
    </div>
  );
}