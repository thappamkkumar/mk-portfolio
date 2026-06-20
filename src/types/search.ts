export type SearchItemType =
  | "skill"
  | "project"
  | "experience"
  | "page";

export interface SearchItem {
  id: string;

  title: string;

  description: string;

  type: SearchItemType;

  href: string;

  keywords: string[];
}