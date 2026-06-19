export interface Contact {
  email: string;
  phone: string;

  location: string;

  availability: string;

  headline: string;

  description: string;

  resumeUrl?: string;

  linkedinUrl?: string;

  githubUrl?: string;

  lookingFor: string[];
}