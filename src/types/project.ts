export interface ProjectImage {
  src: string;
  label: string;
}

export interface Project {
  id: string;
  slug: string;

  name: string;
  tagline: string;
  period: string;

  summary: string;

  technologies: string[];

  images?: ProjectImage[];

  githubUrl?: string;
  liveUrl?: string;
  caseStudyUrl?: string;
}