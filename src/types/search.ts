export type SearchItemType =
  | "skills"
  | "projects"
  | "experience"
  | "contact"
  | "info";

export interface SearchItem {
  id: string;

  type: SearchItemType;

  title: string;

  description?: string;

  value?: string;

  href?: string;

  keywords: string[];
}