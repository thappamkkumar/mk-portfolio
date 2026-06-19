import { CaseStudy } from "@/types/case-study";

import { skillVilla } from "./skillvilla";
import { shopHub } from "./shophub";
import {styleLoop} from "./styleloop";

export const projects: Record<string, CaseStudy> = {
  [skillVilla.slug]: skillVilla,
  [shopHub.slug]: shopHub,
  [styleLoop.slug]: styleLoop,
};