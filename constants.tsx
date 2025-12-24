
import React from 'react';
import { Database, BarChart, Code, FileSpreadsheet, Layout, Terminal, Github, Linkedin, Cpu, Layers, MessageSquare, Brain, Search, CheckCircle } from 'lucide-react';
import { Skill, Project, Experience, Education, Certification } from './types';

export const SKILLS: Skill[] = [
  // Languages & Databases
  { name: 'SQL (PostgreSQL, MySQL, SQL Server)', category: 'Languages & Databases', icon: <Database className="w-6 h-6" /> },
  { name: 'Python (Pandas, NumPy)', category: 'Languages & Databases', icon: <Terminal className="w-6 h-6" /> },
  { name: 'XML, JSON', category: 'Languages & Databases', icon: <Code className="w-6 h-6" /> },
  
  // Visualization & Reporting
  { name: 'Power BI', category: 'Visualization & Reporting', icon: <BarChart className="w-6 h-6" /> },
  { name: 'Tableau', category: 'Visualization & Reporting', icon: <Layout className="w-6 h-6" /> },
  { name: 'Advanced Excel (Pivot, VLOOKUP, Macros, Charts)', category: 'Visualization & Reporting', icon: <FileSpreadsheet className="w-6 h-6" /> },
  
  // Data Engineering
  { name: 'ETL Basics & Data Modeling', category: 'Data Engineering', icon: <Layers className="w-6 h-6" /> },
  { name: 'Data Cleansing & Mapping', category: 'Data Engineering', icon: <Search className="w-6 h-6" /> },
  { name: 'Integrity & Validation', category: 'Data Engineering', icon: <CheckCircle className="w-6 h-6" /> },
  
  // Soft Skills
  { name: 'Analytical Thinking', category: 'Soft Skills', icon: <Brain className="w-6 h-6" /> },
  { name: 'Cross-Functional Collaboration', category: 'Soft Skills', icon: <Cpu className="w-6 h-6" /> },
  { name: 'Data Storytelling & Communication', category: 'Soft Skills', icon: <MessageSquare className="w-6 h-6" /> },
];

export const PROJECTS: Project[] = [
  {
    title: 'COVID-19 Global Data Analysis',
    description: 'SQL/PostgreSQL & Tableau. Analyzed 85,000+ rows to identify global infection/mortality trends and spread patterns.',
    stats: '85,000+ rows analyzed',
    tech: ['SQL', 'Tableau', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1584483766114-2cea6facdf57?auto=format&fit=crop&q=80&w=800',
    githubUrl: 'https://github.com/chinmayichage/PortfolioProjectFirst'
  },
  {
    title: 'Customer Behavior Analysis',
    description: 'Python & Power BI. EDA to identify spending patterns, demographics, and high-value customer segments in retail datasets.',
    stats: 'Spending Trend Identification',
    tech: ['Python', 'Power BI', 'EDA'],
    image: 'https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800',
    githubUrl: 'https://github.com/chinmayichage/customer_behavior_data_analysis'
  },
  {
    title: 'Movie Correlation Analysis',
    description: 'Python-based analysis of how budgets impact gross revenue using regression and heatmaps.',
    stats: 'Correlation Heatmaps',
    tech: ['Python', 'Pandas', 'Seaborn'],
    image: 'https://images.unsplash.com/photo-1485846234645-a62644f84728?auto=format&fit=crop&q=80&w=800',
    githubUrl: 'https://github.com/chinmayichage/MovieCorrelationProject'
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    title: 'Deloitte - Data Analytics Job Simulation',
    link: 'https://drive.google.com/file/d/1yFy4BQuSTsnVF1e0Bdc3k9wfcdXBKJEL/view?usp=drive_link'
  },
  {
    title: 'TATA - Data Visualisation: Empowering Business with Effective Insights',
    link: 'https://drive.google.com/file/d/1k2sTW_MCTbWD-niWqBf86zEVT214iFJK/view?usp=drive_link'
  }
];

export const EXPERIENCE: Experience[] = [
  {
    company: 'Digitech Engineers',
    role: 'Analyst Intern',
    period: 'May 2025 - Dec 2025',
    description: 'Streamlining data workflows and generating actionable insights for engineering projects.',
    achievements: [
      'Developed a "One-Click Excel Reporting System" reducing manual reporting time by 80%.',
      'Automated data validation processes for inventory tracking.',
    ],
  },
];

export const EDUCATION: Education[] = [
  {
    school: 'N. K. Orchid College of Engineering & Technology',
    degree: 'BTech in Electronics and Telecommunication',
    period: '2021 - 2025',
    gpa: '8.07 CGPA',
  },
  {
    school: 'A. D. Joshi Jr College',
    degree: 'Class XII (HSC)',
    period: '2021',
    gpa: '95.80%',
  },
  {
    school: 'Indian Model School',
    degree: 'Class X (SSC)',
    period: '2019',
    gpa: '91.40%',
  },
];

export const SOCIAL_LINKS = [
  { name: 'LinkedIn', url: 'https://linkedin.com/in/chinmay-ichage', icon: <Linkedin className="w-5 h-5" /> },
  { name: 'GitHub', url: 'https://github.com/chinmayichage', icon: <Github className="w-5 h-5" /> },
];
