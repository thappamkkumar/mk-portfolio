export interface CaseStudyMetric {
  label: string;
  value: string;
}

export interface CaseStudySection {
  title: string;
  content: string;
}

export interface CaseStudyChallenge {
  title: string;
  problem: string;
  solution: string;
}

export interface CaseStudyArchitectureLayer {
  title: string;
  items: string[];
}

export interface CaseStudy {
  slug: string;

  title: string;
  subtitle: string;

  category: "project" | "experience";

  type: "Personal Project" | "Client Project";

  overview: string;

  image: string;

  liveUrl?: string;

  githubUrl?: string;
  
  technologies: string[];

  metrics: CaseStudyMetric[];

  problem: string;

  role?: string;

  architecture?: {
    layers: CaseStudyArchitectureLayer[];
  };

  systems?: CaseStudySection[];

  challenges?: CaseStudyChallenge[];

  achievements?: string[];

  deployment?: string[];

  outcomes?: string[];
}