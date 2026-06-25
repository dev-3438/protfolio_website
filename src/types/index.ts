export interface Skill {
  name: string;
  icon: string;
  level: number;
  category: 'frontend' | 'backend' | 'programming';
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  features: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

export interface Certificate {
  id: number;
  name: string;
  issuer: string;
  date: string;
  verifyUrl?: string;
  image?: string;
}

export interface Achievement {
  label: string;
  value: number;
  suffix: string;
  icon: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface NavItem {
  label: string;
  href: string;
}
