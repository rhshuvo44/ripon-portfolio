"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";
import { experience } from "@/data/experience";
import { SectionHeader } from "@/components/shared/section-header";

export function Experience() {
  return (
    <section id="experience" className="relative py-28 md:py-36">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeader
          index="05"
          label="Experience"
          title={
            <>
              Where I&apos;ve <span className="gradient-text italic">worked</span>.
            </>
          }
        />

        <div className="relative max-w-3xl">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" />

          <div className="space-y-14">
            {experience.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.6, delay: idx * 0.05 }}
                className="relative pl-10"
              >
                <span className="absolute left-0 top-1.5 flex h-4 w-4 items-center justify-center">
                  <span className="absolute h-4 w-4 rounded-full bg-signal-500/20" />
                  <span className="relative h-2 w-2 rounded-full bg-signal-500" />
                </span>

                <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-1">
                  <h3 className="font-display text-2xl">{item.role}</h3>
                  <span className="font-mono text-xs text-muted-foreground">
                    {item.startDate} — {item.endDate}
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-3 mb-5">
                  <span className="text-signal-500 font-medium text-sm">
                    {item.company}
                  </span>
                  <span className="flex items-center gap-1 text-muted-foreground text-sm">
                    <MapPin className="h-3.5 w-3.5" /> {item.location}
                  </span>
                  <span className="font-mono text-[11px] uppercase tracking-wider px-2.5 py-0.5 rounded-full border border-border text-muted-foreground">
                    {item.type}
                  </span>
                </div>

                <ul className="space-y-2.5 mb-5">
                  {item.responsibilities.map((r, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-sm text-muted-foreground leading-relaxed"
                    >
                      <span className="text-signal-500 mt-0.5">▸</span>
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>

                <div className="flex flex-wrap gap-2">
                  {item.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[11px] px-2.5 py-1 rounded-full bg-muted text-muted-foreground"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
