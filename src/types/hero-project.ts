export type HeroProjectType =
  | "Personal"
  | "Client";

export interface HeroProject {
  title: string;
  href: string;
  type: HeroProjectType;
}