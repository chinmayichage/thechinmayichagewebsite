
// Import React to resolve the 'React' namespace error for React.ReactNode
import React from 'react';

export interface Skill {
  name: string;
  category: 'Languages & Databases' | 'Visualization & Reporting' | 'Data Engineering' | 'Soft Skills';
  icon: React.ReactNode;
}

export interface Project {
  title: string;
  description: string;
  stats: string;
  tech: string[];
  image: string;
  githubUrl: string;
}

export interface Certification {
  title: string;
  link: string;
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  achievements: string[];
}

export interface Education {
  school: string;
  degree: string;
  period: string;
  gpa: string;
}
