import { CaseStudy } from "@/types/case-study";

import { skillVilla } from "./skillvilla";
import { shopHub } from "./shophub";

export const projects: Record<string, CaseStudy> = {
  [skillVilla.slug]: skillVilla,
  [shopHub.slug]: shopHub,
};