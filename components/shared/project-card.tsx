"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import { Project } from "@/types";
import { cn } from "@/lib/utils";

const statusStyles: Record<Project["status"], string> = {
  Completed: "bg-signal-500/10 text-signal-500 border-signal-500/30",
  Active: "bg-amber-500/10 text-amber-400 border-amber-500/30",
  "In Progress": "bg-ink-500/30 text-ink-200 border-ink-500/40",
};

export function ProjectCard({ project }: { project: Project }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.4 }}
      className="group relative rounded-2xl border border-border bg-card/50 overflow-hidden transition-all duration-300 hover:border-signal-500/40 hover:-translate-y-1.5"
    >
      <div className="relative aspect-[16/10] overflow-hidden border-b border-border">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950/70 via-transparent to-transparent" />

        <div className="absolute top-4 left-4 flex items-center gap-2">
          <span className="font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full bg-ink-950/70 backdrop-blur-sm text-ink-100 border border-white/10">
            {project.category[project.category.length - 1]} · {project.year}
          </span>
        </div>
        <div className="absolute top-4 right-4">
          <span
            className={cn(
              "font-mono text-[10px] uppercase tracking-wider px-2.5 py-1 rounded-full border backdrop-blur-sm",
              statusStyles[project.status]
            )}
          >
            {project.status}
          </span>
        </div>

        {/* hover actions */}
        <div className="absolute inset-0 flex items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-ink-950/40">
          <a
            href={project.liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-full bg-signal-500 text-ink-950 px-4 py-2 text-sm font-medium translate-y-2 group-hover:translate-y-0 transition-transform duration-300"
          >
            Live Demo <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="View source on GitHub"
            className="flex items-center justify-center h-10 w-10 rounded-full bg-ink-950/80 border border-white/15 text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-300 delay-75"
          >
            <Github className="h-4 w-4" />
          </a>
        </div>
      </div>

      <div className="p-6">
        {project.featured && (
          <span className="font-mono text-[10px] uppercase tracking-wider text-signal-500 mb-2 inline-block">
            ★ Featured
          </span>
        )}
        <h3 className="font-display text-xl mb-2">{project.title}</h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-5 line-clamp-2">
          {project.description}
        </p>
        <div className="flex flex-wrap gap-2">
          {project.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="font-mono text-[11px] px-2.5 py-1 rounded-full bg-muted text-muted-foreground"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 4 && (
            <span className="font-mono text-[11px] px-2.5 py-1 rounded-full bg-muted text-muted-foreground">
              +{project.tags.length - 4}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}
