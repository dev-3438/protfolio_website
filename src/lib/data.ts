import {
  Code2,
  Palette,
  Server,
  Database,
  Globe,
  Layers,
  FileCode,
  Box,
  GitBranch,
  Terminal,
  Cpu,
  Figma,
  Monitor,
  Smartphone,
  Layout,
  Workflow,
  type LucideIcon,
} from 'lucide-react';


export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },

  { label: "Log In", to: "/login" },
  { label: "Sign Up", to: "/signup" },
];

export const skills = {
  frontend: [
    { name: 'HTML', icon: 'FileCode', level: 95 },
    { name: 'CSS', icon: 'Palette', level: 90 },
    { name: 'JavaScript', icon: 'Code2', level: 92 },
    { name: 'TypeScript', icon: 'FileCode', level: 88 },
    { name: 'React', icon: 'Globe', level: 90 },
    { name: 'Redux Toolkit', icon: 'Layers', level: 85 },
    { name: 'Tailwind CSS', icon: 'Palette', level: 92 },
    { name: 'Bootstrap', icon: 'Layout', level: 80 },
    { name: 'Framer Motion', icon: 'Workflow', level: 85 },
  ],
  backend: [
    { name: 'Node.js', icon: 'Server', level: 88 },
    { name: 'Express.js', icon: 'Server', level: 86 },
    { name: 'MongoDB', icon: 'Database', level: 82 },
    { name: 'Mongoose', icon: 'Database', level: 80 },
    { name: 'REST API', icon: 'Globe', level: 90 },
    { name: 'JWT Authentication', icon: 'Lock', level: 85 },
  ],
  programming: [
    { name: 'C++', icon: 'Cpu', level: 78 },
    { name: 'Python', icon: 'Terminal', level: 82 },
    { name: 'SQL', icon: 'Database', level: 80 },
    { name: 'Git', icon: 'GitBranch', level: 88 },
    { name: 'GitHub', icon: 'GitBranch', level: 90 },

  ],
};

export const iconMap: Record<string, LucideIcon> = {
  Code2,
  Palette,
  Server,
  Database,
  Globe,
  Layers,
  FileCode,
  Box,
  GitBranch,
  Terminal,
  Cpu,
  Figma,
  Monitor,
  Smartphone,
  Layout,
  Workflow,
};

export const projects = [
  {
    id: 1,
    title: 'Production SaaS E-Commerce Platform',
    description:
      'A fully-featured e-commerce platform built with the MERN stack. Features include product management, cart functionality, Stripe payment integration, order tracking, admin dashboard, and real-time inventory updates.',
    image: 'https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800',
    techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe', 'Redux'],
    features: [
      'Product catalog with search & filters',
      'Shopping cart & wishlist',
      'Stripe payment integration',
      'Admin dashboard with analytics',
      'Real-time order tracking',
      'User authentication & profiles',
    ],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 2,
    title: 'Visitor Pass Management System',
    description:
      'A comprehensive visitor management system for organizations. Includes QR code generation, digital passes, check-in/check-out tracking, and reporting dashboard for security teams.',
    image: 'https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800',
    techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'QR Code'],
    features: [
      'Digital pass generation with QR codes',
      'Check-in/check-out tracking',
      'Visitor history & analytics',
      'Email notifications',
      'Role-based access control',
      'Export reports to PDF/Excel',
    ],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 3,
    title: 'Banking Application',
    description:
      'A secure banking application with account management, transaction processing, fund transfers, and comprehensive financial analytics. Built with security best practices and JWT authentication.',
    image: 'https://images.pexels.com/photos/534216/pexels-photo-534216.jpeg?auto=compress&cs=tinysrgb&w=800',
    techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT', 'Chart.js'],
    features: [
      'Account management & balance tracking',
      'Fund transfers between accounts',
      'Transaction history & filters',
      'Financial analytics dashboard',
      'Secure JWT authentication',
      'Two-factor authentication',
    ],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 4,
    title: 'Student Learning Platform',
    description:
      'An interactive learning management system for students and educators. Features course creation, video lessons, quizzes, progress tracking, and a discussion forum.',
    image: 'https://images.pexels.com/photos/301926/pexels-photo-301926.jpeg?auto=compress&cs=tinysrgb&w=800',
    techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'Socket.io'],
    features: [
      'Course creation & management',
      'Video lesson player',
      'Interactive quizzes & assessments',
      'Progress tracking & certificates',
      'Real-time discussion forum',
      'Gamification with badges',
    ],
    liveUrl: '#',
    githubUrl: '#',
  },
  {
    id: 5,
    title: 'Task Management App',
    description:
      'A productivity-focused task management application with drag-and-drop kanban boards, team collaboration, time tracking, and deadline reminders.',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800',
    techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'Drag & Drop'],
    features: [
      'Drag & drop kanban boards',
      'Team collaboration & assignments',
      'Time tracking per task',
      'Deadline reminders & notifications',
      'Labels, tags & filters',
      'Calendar integration',
    ],
    liveUrl: '#',
    githubUrl: '#',
  },
];

export const experiences = [
  {
    id: 1,
    title: 'MERN Stack Development',
    company: 'Freelance & Personal Projects',
    period: '2026 - Present',
    description:
      'Built and deployed multiple production-ready applications using MongoDB, Express.js, React, and Node.js. Implemented RESTful APIs, authentication systems, and real-time features.',
    technologies: ['React', 'Node.js', 'MongoDB', 'Express', 'Redux'],
  },
  {
    id: 2,
    title: 'SaaS Development',
    company: 'Independent Projects',
    period: '2026 - Present',
    description:
      'Developed SaaS applications with subscription models, payment integration, and multi-tenant architecture. Focused on scalability, security, and user experience.',
    technologies: ['React', 'Stripe', 'Node.js', 'MongoDB', 'JWT'],
  },
  {
    id: 3,
    title: 'Full Stack Projects',
    company: 'Open Source & Personal',
    period: '2026 - Present',
    description:
      'Contributed to open-source projects and built personal projects to showcase full-stack capabilities. Focused on modern web technologies and best practices.',
    technologies: ['TypeScript', 'Next.js', 'Tailwind', 'PostgreSQL'],
  },
  {
    id: 4,
    title: 'Open Source Contributions',
    company: 'GitHub Community',
    period: '2026 - Present',
    description:
      'Active contributor to open-source projects. Submitted PRs, reported issues, and collaborated with developers worldwide to improve tools and libraries.',
    technologies: ['Git', 'GitHub', 'JavaScript', 'TypeScript'],
  },
];

export const certificates = [
  {
    id: 1,
    name: 'CS50x',
    issuer: 'Harvard University',
    date: '2026',
    verifyUrl: 'https://certificates.cs50.io/55852341-d90e-4793-97a6-2eb46551f233.pdf?size=letter',
  },
  {
    id: 2,
    name: 'CS50P',
    issuer: 'Harvard University',
    date: '2023',
    verifyUrl: 'https://certificates.cs50.io/7342453a-486a-4455-bdd6-6c1ffedced8f.pdf?size=letter',
  },
  {
    id: 3,
    name: 'Web Development',
    issuer: 'freeCodeCamp',
    date: '2023',
    verifyUrl: '#',
  },
  {
    id: 4,
    name: 'Python Programming',
    issuer: 'Coursera',
    date: '2023',
    verifyUrl: '#',
  },
  {
    id: 5,
    name: 'JavaScript Algorithms',
    issuer: 'freeCodeCamp',
    date: '2023',
    verifyUrl: '#',
  },
];

export const achievements = [
  { label: 'LeetCode Problems', value: 110, suffix: '+' },
  { label: 'Production Projects', value: 5, suffix: '+' },
  { label: 'Open Source Contributions', value: 20, suffix: '+' },
  { label: 'Technologies Mastered', value: 15, suffix: '+' },
];

export const socialLinks = [
  { name: 'GitHub', url: 'https://github.com', icon: 'github' },
  { name: 'LinkedIn', url: 'https://linkedin.com', icon: 'linkedin' },
  { name: 'X', url: 'https://twitter.com', icon: 'twitter' },
  { name: 'Email', url: 'mailto:developer@example.com', icon: 'mail' },
];
