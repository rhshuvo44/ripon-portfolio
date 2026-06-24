// import { Project } from "@/types";

// export const projects: Project[] = [
//   {
//     id: "taskflow",
//     title: "TaskFlow",
//     description:
//       "A bounty and quest management platform handling authentication, submissions, and wallet transactions end-to-end.",
//     longDescription:
//       "TaskFlow is a full-stack quest and bounty management platform. It handles authentication, bounty browsing and posting, submission review, and wallet transactions, with a real-time dashboard for both posters and hunters.",
//     image: "/project-taskflow.svg",
//     tags: ["Next.js", "NestJS", "MongoDB", "Stripe", "Shadcn"],
//     category: ["Next.js", "Full Stack"],
//     liveUrl: "https://example.com/taskflow",
//     githubUrl: "https://github.com/aaravmehta/taskflow",
//     status: "Completed",
//     featured: true,
//     year: "2026",
//   },
//   {
//     id: "assessly",
//     title: "Assessly",
//     description:
//       "A React-based assessment platform where learners progress through graded levels and earn certificates.",
//     longDescription:
//       "Assessly is a modern assessment platform where students participate in graded levels (A1–C2) and earn certificates on completion. Built with a Redux-driven frontend and a Node.js grading engine.",
//     image: "/project-assessly.svg",
//     tags: ["React", "Redux", "TypeScript", "Tailwind", "Node.js"],
//     category: ["React", "Full Stack"],
//     liveUrl: "https://example.com/assessly",
//     githubUrl: "https://github.com/aaravmehta/assessly",
//     status: "Active",
//     featured: true,
//     year: "2026",
//   },
//   {
//     id: "storehub",
//     title: "StoreHub",
//     description:
//       "A modern e-commerce control panel for product, inventory, and order management with role-based access.",
//     longDescription:
//       "StoreHub is an e-commerce admin frontend built with Next.js and shadcn/ui for product catalog management, order fulfillment tracking, and inventory alerts, backed by a NestJS API.",
//     image: "/project-storehub.svg",
//     tags: ["Next.js", "Shadcn", "NestJS", "MongoDB", "Tailwind"],
//     category: ["Next.js", "Full Stack"],
//     liveUrl: "https://example.com/storehub",
//     githubUrl: "https://github.com/aaravmehta/storehub",
//     status: "Completed",
//     featured: false,
//     year: "2026",
//   },
//   {
//     id: "lifelink",
//     title: "LifeLink",
//     description:
//       "A blood donation platform connecting verified donors with recipients in real time, by location and blood type.",
//     longDescription:
//       "LifeLink bridges the gap between blood donors and people in need. Users register as donors or post urgent requests, with geo-matching to surface the nearest compatible donor instantly.",
//     image: "/project-lifelink.svg",
//     tags: ["Next.js", "Tailwind", "Express", "Prisma", "PostgreSQL"],
//     category: ["Next.js", "Full Stack"],
//     liveUrl: "https://example.com/lifelink",
//     githubUrl: "https://github.com/aaravmehta/lifelink",
//     status: "Completed",
//     featured: false,
//     year: "2025",
//   },
//   {
//     id: "notionly",
//     title: "Notionly",
//     description:
//       "A minimalist note-taking app with nested pages, slash commands, and offline-first sync.",
//     longDescription:
//       "Notionly is a lightweight, keyboard-first note-taking app inspired by block-based editors — nested pages, slash commands, and an offline-first sync layer built on IndexedDB.",
//     image: "/project-notionly.svg",
//     tags: ["React", "TypeScript", "IndexedDB", "Tailwind"],
//     category: ["React"],
//     liveUrl: "https://example.com/notionly",
//     githubUrl: "https://github.com/aaravmehta/notionly",
//     status: "Completed",
//     featured: false,
//     year: "2025",
//   },
//   {
//     id: "pulseboard",
//     title: "PulseBoard",
//     description:
//       "A real-time analytics dashboard streaming live metrics over WebSockets with custom chart widgets.",
//     longDescription:
//       "PulseBoard is a real-time analytics dashboard that streams live metrics over WebSockets, with drag-and-drop, customizable chart widgets and threshold-based alerting.",
//     image: "/project-pulseboard.svg",
//     tags: ["Next.js", "Node.js", "WebSockets", "PostgreSQL", "Redis"],
//     category: ["Next.js", "Full Stack"],
//     liveUrl: "https://example.com/pulseboard",
//     githubUrl: "https://github.com/aaravmehta/pulseboard",
//     status: "In Progress",
//     featured: false,
//     year: "2026",
//   },
// ];

// export const projectFilters = ["All", "React", "Next.js", "Full Stack"] as const;
import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: "nextbazaar",
    title: "NextBazaar",
    description:
      "A modern e-commerce platform built with Next.js, TypeScript, and Tailwind CSS.",
    longDescription:
      "NextBazaar is a full-featured e-commerce website where users can browse products, add to cart, and place orders. Includes product filtering, search, and user authentication.",
    image: "/nextbazar.PNG",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "Jest", "Playwright"],
    category: ["Next.js", "Full Stack"],
    liveUrl: "https://next-bazaar-ashy.vercel.app",
    githubUrl: "https://github.com/rhshuvo44/NextBazaar",
    status: "Completed",
    featured: true,
    year: "2025",
  },
  {
    id: "textiles",
    title: "Textiles - Next.js Template",
    description:
      "A premium Next.js template designed for the textile industry.",
    longDescription:
      "Textiles is a professional Next.js template featuring product galleries, quotation forms, blog sections, and an admin panel. Styled with Tailwind CSS and animated with Framer Motion.",
    image: "/textiles.PNG",
    tags: ["Next.js", "TypeScript", "Tailwind CSS", "DaisyUI", "Framer Motion"],
    category: ["Next.js"],
    liveUrl: "https://textiles.vercel.app",
    githubUrl: "https://github.com/rhshuvo44/textiles",
    status: "Completed",
    featured: true,
    year: "2025",
  },
  {
    id: "factory-evaluation",
    title: "Factory Evaluation - SMD",
    description:
      "A monolithic REST system for product and employee management.",
    longDescription:
      "Factory Evaluation is an enterprise-level application for factory employee performance evaluation, product management, and reporting. Built with React, Redux, and Ant Design.",
    image: "/project-factory.svg",
    tags: ["React", "Redux", "TypeScript", "Ant Design", "JWT", "Zod"],
    category: ["React", "Full Stack"],
    liveUrl: "https://factory-evaluation.vercel.app",
    githubUrl: "https://github.com/rhshuvo44/factory-evaluation",
    status: "Completed",
    featured: false,
    year: "2024",
  },
  {
    id: "foodi",
    title: "Foodi - Restaurant App",
    description:
      "A food delivery app using Firebase authentication and real-time database.",
    longDescription:
      "Foodi is a restaurant application where users can browse menus, place orders, and track order status in real-time. Firebase Authentication and Firestore handle data management.",
    image: "/foodi.PNG",
    tags: ["React", "Firebase", "Tailwind CSS", "DaisyUI", "Vite"],
    category: ["React"],
    liveUrl: "https://foodi-zeta.vercel.app",
    githubUrl: "https://github.com/rhshuvo44/foodi",
    status: "Completed",
    featured: false,
    year: "2024",
  },
  {
    id: "pofo",
    title: "Pofo - Portfolio Template",
    description:
      "A creative portfolio template built with Create React App.",
    longDescription:
      "Pofo is a modern portfolio template designed for freelancers, designers, and developers. Features responsive layout, animations, and a contact form.",
    image: "/pofo.PNG",
    tags: ["React", "JavaScript", "CSS3", "HTML5"],
    category: ["React"],
    liveUrl: "https://pofo1.netlify.app",
    githubUrl: "https://github.com/rhshuvo44/pofo",
    status: "Completed",
    featured: false,
    year: "2022",
  },
  {
    id: "logixs",
    title: "Logixs - Transport & Logistics",
    description:
      "A transport and logistics HTML template with Bootstrap and CSS animations.",
    longDescription:
      "Logixs is a professional HTML template for transport and logistics companies. Features Bootstrap 5, WOW.js animations, and a fully responsive design.",
    image: "/logixs.PNG",
    tags: ["HTML5", "CSS3", "Bootstrap 5", "JavaScript", "WOW.js"],
    category: ["React"],
    liveUrl: "https://rhshuvo44.github.io/logixs-transport-logistics-html-template/",
    githubUrl: "https://github.com/rhshuvo44/logixs-transport-logistics-html-template",
    status: "Completed",
    featured: false,
    year: "2022",
  },
];

export const projectFilters = ["All", "React", "Next.js", "Full Stack"] as const;