export interface ExperienceImage {
  src: string;
  label: string;
}

export interface Experience {
  id: string;

  company: string;

  role: string;

  period: string;

  description: string;

  technologies: string[];

  liveUrl?: string;

  images?: ExperienceImage[];
}