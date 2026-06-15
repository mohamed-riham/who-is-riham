export type ProjectCategory = 'software' | 'data-science' | 'iot' | 'game' | 'full-stack';

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  shortDescription: string;
  longDescription: string;
  problem: string;
  solution: string;
  results: string[];
  features?: string[];
  techStack: string[];
  architecture?: string[];
  githubUrl?: string;
  kaggleUrl?: string;
  demoUrl?: string;
  customStats?: { label: string; value: string }[];
  hardwareSpecs?: string[];
  image?: string;
}

export interface ResearchMetric {
  metric: string;
  randomForest: number;
  xgboost: number;
  improvement: string;
}

export interface TimelineItem {
  id: string;
  period: string;
  title: string;
  institution: string;
  status: string;
  coreFocus: string;
  details: string[];
  category: 'academic' | 'career';
}

export interface Skill {
  name: string;
  level: number; // 1-100 percentage
  description: string;
}

export interface SkillGroup {
  category: string;
  iconName: string;
  skills: Skill[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
  badgeColor: string;
  description: string;
  skillsValidated: string[];
}

export interface Article {
  id: string;
  title: string;
  date: string;
  readTime: string;
  platform: string;
  url: string;
  excerpt: string;
  tags: string[];
  impactNotes?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  details: string[];
  type: string;
}
