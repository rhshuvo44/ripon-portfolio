import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "taskflow",
    title: "TaskFlow",
    description:
      "A bounty and quest management platform handling authentication, submissions, and wallet transactions end-to-end.",
    longDescription:
      "TaskFlow is a full-stack quest and bounty management platform. It handles authentication, bounty browsing and posting, submission review, and wallet transactions, with a real-time dashboard for both posters and hunters.",
    image: "/project-taskflow.svg",
    tags: ["Next.js", "NestJS", "MongoDB", "Stripe", "Shadcn"],
    category: ["Next.js", "Full Stack"],
    liveUrl: "https://example.com/taskflow",
    githubUrl: "https://github.com/aaravmehta/taskflow",
    status: "Completed",
    featured: true,
    year: "2026",
  },
  {
    id: "assessly",
    title: "Assessly",
    description:
      "A React-based assessment platform where learners progress through graded levels and earn certificates.",
    longDescription:
      "Assessly is a modern assessment platform where students participate in graded levels (A1–C2) and earn certificates on completion. Built with a Redux-driven frontend and a Node.js grading engine.",
    image: "/project-assessly.svg",
    tags: ["React", "Redux", "TypeScript", "Tailwind", "Node.js"],
    category: ["React", "Full Stack"],
    liveUrl: "https://example.com/assessly",
    githubUrl: "https://github.com/aaravmehta/assessly",
    status: "Active",
    featured: true,
    year: "2026",
  },
  {
    id: "storehub",
    title: "StoreHub",
    description:
      "A modern e-commerce control panel for product, inventory, and order management with role-based access.",
    longDescription:
      "StoreHub is an e-commerce admin frontend built with Next.js and shadcn/ui for product catalog management, order fulfillment tracking, and inventory alerts, backed by a NestJS API.",
    image: "/project-storehub.svg",
    tags: ["Next.js", "Shadcn", "NestJS", "MongoDB", "Tailwind"],
    category: ["Next.js", "Full Stack"],
    liveUrl: "https://example.com/storehub",
    githubUrl: "https://github.com/aaravmehta/storehub",
    status: "Completed",
    featured: false,
    year: "2026",
  },
  {
    id: "lifelink",
    title: "LifeLink",
    description:
      "A blood donation platform connecting verified donors with recipients in real time, by location and blood type.",
    longDescription:
      "LifeLink bridges the gap between blood donors and people in need. Users register as donors or post urgent requests, with geo-matching to surface the nearest compatible donor instantly.",
    image: "/project-lifelink.svg",
    tags: ["Next.js", "Tailwind", "Express", "Prisma", "PostgreSQL"],
    category: ["Next.js", "Full Stack"],
    liveUrl: "https://example.com/lifelink",
    githubUrl: "https://github.com/aaravmehta/lifelink",
    status: "Completed",
    featured: false,
    year: "2025",
  },
  {
    id: "notionly",
    title: "Notionly",
    description:
      "A minimalist note-taking app with nested pages, slash commands, and offline-first sync.",
    longDescription:
      "Notionly is a lightweight, keyboard-first note-taking app inspired by block-based editors — nested pages, slash commands, and an offline-first sync layer built on IndexedDB.",
    image: "/project-notionly.svg",
    tags: ["React", "TypeScript", "IndexedDB", "Tailwind"],
    category: ["React"],
    liveUrl: "https://example.com/notionly",
    githubUrl: "https://github.com/aaravmehta/notionly",
    status: "Completed",
    featured: false,
    year: "2025",
  },
  {
    id: "pulseboard",
    title: "PulseBoard",
    description:
      "A real-time analytics dashboard streaming live metrics over WebSockets with custom chart widgets.",
    longDescription:
      "PulseBoard is a real-time analytics dashboard that streams live metrics over WebSockets, with drag-and-drop, customizable chart widgets and threshold-based alerting.",
    image: "/project-pulseboard.svg",
    tags: ["Next.js", "Node.js", "WebSockets", "PostgreSQL", "Redis"],
    category: ["Next.js", "Full Stack"],
    liveUrl: "https://example.com/pulseboard",
    githubUrl: "https://github.com/aaravmehta/pulseboard",
    status: "In Progress",
    featured: false,
    year: "2026",
  },
];

export const projectFilters = ["All", "React", "Next.js", "Full Stack"] as const;
