export type SkillLevel =
  | "comfortable"
  | "working"
  | "familiar";

export interface Skill {
  id:string;
  name: string;
  level: SkillLevel;
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: Skill[];
}
