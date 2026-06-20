import { SEARCH_INDEX } from "@/data/search/index";

import type {
  SearchItem,
  SearchItemType,
} from "@/types/search";

export const SEARCH_GROUP_ORDER: SearchItemType[] =
  [
    "skills",
    "experience",
    "projects",
    "contact",
    "info",
  ];

const CATEGORY_MAP: Record<
  string,
  SearchItemType
> = {
  skill: "skills",
  skills: "skills",

  experience: "experience",
  experiences: "experience",

  project: "projects",
  projects: "projects",

  contact: "contact",
  contacts: "contact",

  info: "info",
  information: "info",
};

// Search portfolio
export function searchPortfolio(
  query: string
) {
  const q = query.trim().toLowerCase();

  if (!q) {
    return [];
  }

  // Category intent detection
  const targetType =
    CATEGORY_MAP[q];

  if (targetType) {
    return SEARCH_INDEX.filter(
      (item) =>
        item.type === targetType
    );
  }

  // Normal search
  return SEARCH_INDEX.filter((item) => {
    const title =
      item.title.toLowerCase();

    const description =
      item.description?.toLowerCase() ??
      "";

    const value =
      item.value?.toLowerCase() ?? "";

    const keywords = item.keywords.map(
      (keyword) =>
        keyword.toLowerCase()
    );

    return (
      title.includes(q) ||
      description.includes(q) ||
      value.includes(q) ||
      keywords.some((keyword) =>
        keyword.includes(q)
      )
    );
  });
}

// Group search results
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