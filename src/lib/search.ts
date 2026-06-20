import { SEARCH_INDEX } from "@/data/search/index";
import type {
  SearchItem,
  SearchItemType,
} from "@/types/search";

export const SEARCH_GROUP_ORDER: SearchItemType[] =
  [
    "skill",
    "experience",
    "project",
    "contact",
    "info",
  ];

function calculateSearchScore(
  item: SearchItem,
  query: string
) {
  let score = 0;

  const title = item.title.toLowerCase();
 const description =
  item.description?.toLowerCase() ?? "";

  if (title === query) score += 500;
  if (title.startsWith(query)) score += 200;
  if (title.includes(query)) score += 100;
  if (description.includes(query)) {
    score += 50;
  }

  if (
    item.keywords.some((keyword) =>
      keyword.toLowerCase().includes(query)
    )
  ) {
    score += 25;
  }

  return score;
}


//for search
export function searchPortfolio(
  query: string
) {
  const q = query.trim().toLowerCase();

  if (!q) return [];

  return SEARCH_INDEX.map((item) => ({
    item,
    score: calculateSearchScore(
      item,
      q
    ),
  }))
    .filter((entry) => entry.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((entry) => entry.item);
}



//for group data after search
export function groupSearchResults(
  results: SearchItem[]
) {
  const groups: Record<
    string,
    SearchItem[]
  > = {};

  results.forEach((item) => {
    if (!groups[item.type]) {
      groups[item.type] = [];
    }

    groups[item.type].push(item);
  });

  return SEARCH_GROUP_ORDER.filter(
    (group) => groups[group]?.length
  ).map((group) => ({
    group,
    items: groups[group],
  }));
}