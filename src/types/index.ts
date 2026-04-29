// Tipos para los datos del portafolio

export type Locale = "es" | "en";

export interface ContactInfo {
  city: string;
  phone: string;
  email: string;
  linkedin: string;
  github: string;
  whatsapp: string;
}

export interface Language {
  name: string;
  percentage: number;
}

export interface ProgrammingLanguage {
  name: string;
  percentage: number;
}

export interface Knowledge {
  id: string;
  title: string;
  description: string;
  icon: "code" | "database" | "api" | "git" | "crud" | "testing" | "frontend" | "backend";
}

export interface Education {
  id: string;
  institution: string;
  period: string;
  degree: string;
  description: string;
}

export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface ProfileData {
  name: string;
  title: string;
  profileSummary: string;
  photo: string;
  contact: ContactInfo;
  languages: Language[];
  programmingLanguages: ProgrammingLanguage[];
  extraSkills: string[];
  knowledges: Knowledge[];
  education: Education[];
  projects: Project[];
  // Footer
  footerTitle: string;
  footerSubtitle: string;
  footerCopyright: string;
}