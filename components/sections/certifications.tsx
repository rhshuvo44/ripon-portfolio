"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { certifications } from "@/data/certifications";
import { SectionHeader } from "@/components/shared/section-header";
import { StaggerGroup, staggerItem } from "@/components/shared/reveal";

export function Certifications() {
  return (
    <section className="relative py-28 md:py-36 bg-muted/30">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeader
          index="06"
          label="Certifications"
          title={
            <>
              Credentials that <span className="gradient-text italic">back it up</span>.
            </>
          }
        />

        <StaggerGroup className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5" stagger={0.08}>
          {certifications.map((cert) => (
            <motion.a
              key={cert.id}
              href={cert.credentialUrl}
              target="_blank"
              rel="noopener noreferrer"
              variants={staggerItem}
              className="group rounded-2xl border border-border bg-card/50 overflow-hidden transition-all duration-300 hover:border-signal-500/40 hover:-translate-y-1.5"
            >
              <div className="relative aspect-square border-b border-border">
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="280px"
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-base leading-snug mb-2 line-clamp-2">
                  {cert.title}
                </h3>
                <p className="text-sm text-signal-500 mb-1">{cert.organization}</p>
                <div className="flex items-center justify-between mt-3">
                  <span className="font-mono text-[11px] text-muted-foreground">
                    {cert.date}
                  </span>
                  <ExternalLink className="h-3.5 w-3.5 text-muted-foreground transition-colors group-hover:text-signal-500" />
                </div>
              </div>
            </motion.a>
          ))}
        </StaggerGroup>
      </div>
    </section>
  );
}
