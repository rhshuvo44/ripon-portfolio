export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Profile {
  name: string;
  firstName: string;
  lastName: string;
  designation: string;
  tagline: string;
  bio: string;
  longBio: string[];
  email: string;
  phone: string;
  location: string;
  availability: string;
  responseTime: string;
  resumeUrl: string;
  avatarUrl: string;
  socials: SocialLink[];
  yearsExperience: number;
  projectsCompleted: number;
  clientsServed: number;
}

export type SkillCategory =
  | "Frontend"
  | "Backend"
  | "Database"
  | "DevOps & Tools";

export interface Skill {
  name: string;
  level: number;
  category: SkillCategory;
  icon: string;
}

export interface Service {
  id: string;
  index: string;
  title: string;
  description: string;
  tags: string[];
  icon: string;
}

export type ProjectFilter = "All" | "React" | "Next.js" | "Full Stack";

export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  category: ProjectFilter[];
  liveUrl: string;
  githubUrl: string;
  status: "Completed" | "Active" | "In Progress";
  featured: boolean;
  year: string;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  location: string;
  type: string;
  startDate: string;
  endDate: string;
  responsibilities: string[];
  technologies: string[];
}

export interface EducationItem {
  id: string;
  degree: string;
  institution: string;
  location: string;
  year: string;
  description?: string;
}

export interface Certification {
  id: string;
  title: string;
  organization: string;
  date: string;
  image: string;
  credentialUrl?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  review: string;
  rating: number;
}
