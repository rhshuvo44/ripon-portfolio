"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { projects, projectFilters } from "@/data/projects";
import { ProjectFilter } from "@/types";
import { profile } from "@/data/profile";
import { SectionHeader } from "@/components/shared/section-header";
import { ProjectCard } from "@/components/shared/project-card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Projects() {
  const [filter, setFilter] = React.useState<ProjectFilter>("All");

  const filtered =
    filter === "All"
      ? projects
      : projects.filter((p) => p.category.includes(filter));

  return (
    <section id="projects" className="relative py-28 md:py-36 bg-muted/30">
      <div className="container-px mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8">
          <SectionHeader
            index="04"
            label="Selected Works"
            title={
              <>
                What I&apos;ve <span className="gradient-text italic">shipped</span>.
              </>
            }
            className="mb-0"
          />
          <div className="mb-14 md:mb-20">
            <Button asChild variant="outline" className="rounded-full">
              <a
                href={profile.socials.find((s) => s.name === "GitHub")?.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                View All on GitHub <ArrowUpRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-10 -mt-6">
          {projectFilters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={cn(
                "relative font-mono text-xs uppercase tracking-wider px-4 py-2.5 rounded-full transition-colors duration-200",
                filter === f
                  ? "text-ink-950"
                  : "text-muted-foreground hover:text-foreground border border-border"
              )}
            >
              {filter === f && (
                <motion.span
                  layoutId="project-tab"
                  className="absolute inset-0 rounded-full bg-signal-500"
                  transition={{ type: "spring", duration: 0.5 }}
                />
              )}
              <span className="relative z-10">{f}</span>
            </button>
          ))}
        </div>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground py-20 font-mono text-sm">
            No projects found in this category yet.
          </p>
        )}
      </div>
    </section>
  );
}
