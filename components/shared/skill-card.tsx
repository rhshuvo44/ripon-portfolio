"use client";

import { motion } from "framer-motion";
import { Skill } from "@/types";
import { skillIconMap } from "@/lib/skill-icons";

export function SkillCard({ skill }: { skill: Skill }) {
  const Icon = skillIconMap[skill.icon];

  return (
    <div className="group rounded-2xl border border-border bg-card/50 p-6 transition-all duration-300 hover:border-signal-500/40 hover:bg-card">
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted text-foreground transition-colors group-hover:text-signal-500">
            {Icon && <Icon className="h-5 w-5" />}
          </div>
          <span className="font-display text-base">{skill.name}</span>
        </div>
        <span className="font-mono text-sm text-signal-500">{skill.level}%</span>
      </div>
      <div className="h-1.5 w-full rounded-full bg-muted overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="h-full rounded-full bg-gradient-to-r from-signal-600 to-signal-400"
        />
      </div>
    </div>
  );
}
