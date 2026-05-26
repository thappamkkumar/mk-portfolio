export type AppId =
  | "about"
  | "projects"
  | "experience"
  | "skills"
  | "resume"
  | "contact";

export type OpenedApp = {
  id: AppId;
  hidden: boolean;
};
