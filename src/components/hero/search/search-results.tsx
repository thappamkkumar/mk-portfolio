import type { SearchItem } from "@/types/search";

import { groupSearchResults } from "@/lib/search";

import SearchResultItem from "./search-result-item";

interface SearchResultsProps {
  query: string;
  results: SearchItem[];
  onSelect: (href: string) => void;
}

export default function SearchResults({
  query,
  results,
  onSelect,
}: SearchResultsProps) {
  if (!query.trim()) {
    return null;
  }

  const groupedResults =
    groupSearchResults(results);

  return (
    <div
      className="
        absolute
        top-full
        left-0
        right-0
        z-50
        mt-3
        max-h-96
        overflow-y-auto
        overscroll-contain
        rounded-2xl
        border
        border-white/10
        bg-zinc-900
        backdrop-blur-xl
        
        shadow-[0_0_30px_rgba(255,255,255,0.2)]
      "
    >
      {results.length > 0 ? (
        groupedResults.map(
          ({ group, items }) => (
            <div
              key={group}
              className="w-full"
            >
              <div
                className="
                  sticky
                  top-0
                  z-10

                  border-b
                  border-white/5

                  bg-zinc-900

                  px-4
                  py-2
                  text-start
                  text-[10px]
                  font-semibold
                  uppercase
                  tracking-[0.15em]

                  text-emerald-400
                "
              >
                {group}
              </div>

              {items.map((result) => (
                <SearchResultItem
                  key={result.id}
                  result={result}
                  onSelect={onSelect}
                />
              ))}
            </div>
          )
        )
      ) : (
        <div className="p-4 text-sm text-zinc-500">
          No results found.
        </div>
      )}
    </div>
  );
}