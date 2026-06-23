import { Service } from "@/types";

export const services: Service[] = [
  {
    id: "frontend-development",
    index: "01",
    title: "Frontend Development",
    description:
      "Modern, performant interfaces built with React and Next.js — from server components to smooth, accessible interactions.",
    tags: ["React & Next.js", "TypeScript", "Framer Motion"],
    icon: "layout",
  },
  {
    id: "fullstack-development",
    index: "02",
    title: "Full Stack Development",
    description:
      "End-to-end product development — databases, APIs, and the client experiences that sit on top of them, shipped as one cohesive system.",
    tags: ["Next.js App Router", "Node.js & Express", "Database Design"],
    icon: "layers",
  },
  {
    id: "api-development",
    index: "03",
    title: "API Development",
    description:
      "Well-documented, versioned REST APIs designed for reliability, security, and a great developer experience for the teams that consume them.",
    tags: ["REST & GraphQL", "JWT Auth", "OpenAPI / Swagger"],
    icon: "plug",
  },
  {
    id: "responsive-development",
    index: "04",
    title: "Responsive Website Development",
    description:
      "Mobile-first builds that hold up at every breakpoint, tuned for fast loads and a consistent feel across devices.",
    tags: ["Mobile-First", "Cross-Browser", "Performance Tuning"],
    icon: "smartphone",
  },
  {
    id: "bug-fixing",
    index: "05",
    title: "Bug Fixing",
    description:
      "Methodical debugging and root-cause analysis — for frontend glitches, backend race conditions, or anything in between.",
    tags: ["Debugging", "Code Review", "Regression Testing"],
    icon: "bug",
  }, {
    id: "app-development",
    index: "06",
    title: "App Development (React Native)",
    description:
      "Cross-platform mobile applications built with React Native — write once, run on both iOS and Android with native performance and pixel-perfect UI.",
    tags: ["React Native", "Expo", "iOS & Android", "Mobile-First"],
    icon: "smartphone",
  },
];
