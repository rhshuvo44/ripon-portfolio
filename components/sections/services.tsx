"use client";

import { Bug, Layers, LayoutGrid, Plug, Smartphone } from "lucide-react";
import { services } from "@/data/services";
import { SectionHeader } from "@/components/shared/section-header";
import { StaggerGroup, staggerItem } from "@/components/shared/reveal";
import { motion } from "framer-motion";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  layout: LayoutGrid,
  layers: Layers,
  plug: Plug,
  smartphone: Smartphone,
  bug: Bug,
};

export function Services() {
  return (
    <section id="services" className="relative py-28 md:py-36">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeader
          index="03"
          label="Services"
          title={
            <>
              What I do <span className="gradient-text italic">best</span>.
            </>
          }
          description="From interface to infrastructure — I cover the full development spectrum and the connective tissue in between."
        />

        <StaggerGroup className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5" stagger={0.1}>
          {services.map((service) => {
            const Icon = iconMap[service.icon] ?? LayoutGrid;
            return (
              <motion.div
                key={service.id}
                variants={staggerItem}
                className="group relative rounded-2xl border border-border bg-card/50 p-7 transition-all duration-300 hover:border-signal-500/40 hover:-translate-y-1.5 overflow-hidden"
              >
                <span className="absolute top-6 right-7 font-mono text-4xl font-bold text-foreground/[0.04] transition-colors group-hover:text-signal-500/10">
                  {service.index}
                </span>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-muted mb-6 transition-colors group-hover:bg-signal-500/10">
                  <Icon className="h-5 w-5 text-signal-500" />
                </div>
                <h3 className="font-display text-xl mb-3">{service.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-mono text-[11px] px-2.5 py-1 rounded-full border border-border text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </StaggerGroup>
      </div>
    </section>
  );
}
