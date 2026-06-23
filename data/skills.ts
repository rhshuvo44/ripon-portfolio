import { Skill } from "@/types";

export const skills: Skill[] = [
  { name: "React", level: 95, category: "Frontend", icon: "react" },
  { name: "Next.js", level: 92, category: "Frontend", icon: "nextjs" },
  { name: "TypeScript", level: 90, category: "Frontend", icon: "typescript" },
  { name: "Tailwind CSS", level: 94, category: "Frontend", icon: "tailwind" },
  { name: "Node.js", level: 88, category: "Backend", icon: "nodejs" },
  { name: "Express.js", level: 86, category: "Backend", icon: "express" },
  { name: "REST APIs", level: 90, category: "Backend", icon: "api" },
  { name: "MongoDB", level: 84, category: "Database", icon: "mongodb" },
  { name: "PostgreSQL", level: 82, category: "Database", icon: "postgresql" },
  { name: "Prisma", level: 80, category: "Database", icon: "prisma" },
  { name: "Docker", level: 75, category: "DevOps & Tools", icon: "docker" },
  { name: "GitHub", level: 92, category: "DevOps & Tools", icon: "github" },
];

export const skillCategories = [
  "Frontend",
  "Backend",
  "Database",
  "DevOps & Tools",
] as const;

export const coreTechnologies = [
  "TypeScript",
  "Node.js",
  "Express",
  "Next.js",
  "MongoDB",
  "PostgreSQL",
  "Docker",
  "Prisma",
  "React",
  "Tailwind",
  "Shadcn/UI",
];
