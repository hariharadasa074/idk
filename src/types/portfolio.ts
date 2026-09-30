export interface EducationItem {
  degree: string;
  institution: string;
  affiliation: string;
  duration: string;
  grade?: string;
  highlights: string[];
}

export interface ExperienceItem {
  role: string;
  organization: string;
  location: string;
  duration: string;
  summary: string;
  responsibilities: {
    title: string;
    description: string;
    icon: string;
  }[];
}

export interface ProjectItem {
  title: string;
  category: string;
  scope: string;
  description: string;
  detailedDescription: string[];
  mechanism: string;
  tags: string[];
  specifications: { label: string; value: string }[];
  components: string[];
  procedureTitle?: string;
  procedureSteps?: {
    stepNumber: number;
    title: string;
    items?: { label: string; description: string }[];
    challenge?: string;
    solution?: string;
  }[];
}

export interface SkillCategory {
  category: string;
  description: string;
  skills: {
    name: string;
    levelDescription: string;
    applications?: string;
  }[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  skillsCovered: string[];
  description: string;
}

export interface InterestItem {
  title: string;
  description: string;
  focusAreas: string[];
  icon: string;
}

export interface LanguageItem {
  language: string;
  proficiency: string;
  nativeScript?: string;
}
