import { CaseStudy } from "@/types/case-study";

import { vkSalon } from "./vksalon";
 
export const projects: Record<string, CaseStudy> = {
  [vkSalon.slug]: vkSalon,
  
};