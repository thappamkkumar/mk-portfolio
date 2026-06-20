import { SEARCH_INDEX } from "@/data/search/index";

export function searchPortfolio(query: string) {
  const q = query.trim().toLowerCase();

  if (!q) return [];

  return SEARCH_INDEX.filter((item) => {
    return (
      item.title.toLowerCase().includes(q) ||
      item.description.toLowerCase().includes(q) ||
      item.keywords.some((keyword) =>
        keyword.toLowerCase().includes(q)
      )
    );
  });
}