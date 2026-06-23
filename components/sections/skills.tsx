"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { skills, skillCategories } from "@/data/skills";
import { SectionHeader } from "@/components/shared/section-header";
import { SkillCard } from "@/components/shared/skill-card";
import { cn } from "@/lib/utils";

export function Skills() {
  const [active, setActive] = React.useState<string>("All");
  const categories = ["All", ...skillCategories];

  const filtered =
    active === "All" ? skills : skills.filter((s) => s.category === active);

  return (
    <section id="skills" className="relative py-28 md:py-36 bg-muted/30">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeader
          index="02"
          label="Skills"
          title={
            <>
              Tools I <span className="gradient-text italic">master</span> daily.
            </>
          }
          description="A focused selection of technologies I use to build fast, scalable, and beautiful applications."
        />

        <div className="flex flex-wrap gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={cn(
                "relative font-mono text-xs uppercase tracking-wider px-4 py-2.5 rounded-full transition-colors duration-200",
                active === cat
                  ? "text-ink-950"
                  : "text-muted-foreground hover:text-foreground border border-border"
              )}
            >
              {active === cat && (
                <motion.span
                  layoutId="skill-tab"
                  className="absolute inset-0 rounded-full bg-signal-500"
                  transition={{ type: "spring", duration: 0.5 }}
                />
              )}
              <span className="relative z-10">{cat}</span>
            </button>
          ))}
        </div>

        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {filtered.map((skill) => (
            <motion.div
              key={skill.name}
              layout
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
            >
              <SkillCard skill={skill} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
