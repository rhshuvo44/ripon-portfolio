import { ExperienceItem } from "@/types";

export const experience: ExperienceItem[] = [
  {
    id: "exp-1",
    role: "Full Stack Developer",
    company: "Sarkar Group",
    location: "Remote · Narayanganj, Bangladesh",
    type: "Full-time",
    startDate: "Nov 2022",
    endDate: "Present",
    responsibilities: [
      "Lead development of a multi-tenant SaaS platform serving 12k+ monthly active users, built on Next.js and PostgreSQL.",
      "Designed and shipped a REST API layer with Express and Prisma, cutting average response times by 40%.",
      "Mentored two junior engineers on code review practices and component architecture.",
      "Set up CI/CD pipelines with GitHub Actions and Docker for zero-downtime deployments.",
    ],
    technologies: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "Docker"],
  },
  // {
  //   id: "exp-2",
  //   role: "Backend Developer",
  //   company: "Spandan Systems",
  //   location: "Pune, IN",
  //   type: "Full-time",
  //   startDate: "Aug 2023",
  //   endDate: "Dec 2024",
  //   responsibilities: [
  //     "Developed scalable RESTful backend APIs using Node.js, Express.js, and PostgreSQL.",
  //     "Integrated Prisma ORM for efficient data modeling, schema management, and complex queries.",
  //     "Collaborated closely with the frontend team to deliver end-to-end features and resolve integration issues.",
  //     "Worked in an agile environment, contributing to multiple concurrent client projects.",
  //   ],
  //   technologies: ["Node.js", "Express.js", "Prisma", "PostgreSQL", "Redis"],
  // },
  // {
  //   id: "exp-3",
  //   role: "Frontend Developer Intern",
  //   company: "Codeverse Studio",
  //   location: "Remote",
  //   type: "Internship",
  //   startDate: "Feb 2023",
  //   endDate: "Jul 2023",
  //   responsibilities: [
  //     "Built and styled reusable React components for a marketing site redesign.",
  //     "Improved Lighthouse performance scores from 68 to 94 through image optimization and code-splitting.",
  //     "Collaborated with designers to translate Figma mockups into responsive, accessible UI.",
  //   ],
  //   technologies: ["React", "JavaScript", "Tailwind CSS", "Figma"],
  // },
];
