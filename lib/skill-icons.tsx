import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiPrisma,
  SiDocker,
  SiGithub,
} from "react-icons/si";
import { Plug } from "lucide-react";
import { IconType } from "react-icons";

export const skillIconMap: Record<string, IconType | React.ComponentType<{ className?: string; size?: number }>> = {
  react: SiReact,
  nextjs: SiNextdotjs,
  typescript: SiTypescript,
  tailwind: SiTailwindcss,
  nodejs: SiNodedotjs,
  express: SiExpress,
  mongodb: SiMongodb,
  postgresql: SiPostgresql,
  prisma: SiPrisma,
  docker: SiDocker,
  github: SiGithub,
  api: Plug,
};
