"use client";

import { Code2, Database, Layers, Server } from "lucide-react";
import { profile } from "@/data/profile";
import { education } from "@/data/education";
import { SectionHeader } from "@/components/shared/section-header";
import { Reveal, StaggerGroup, staggerItem } from "@/components/shared/reveal";
import { motion } from "framer-motion";

const pillars = [
  {
    icon: Server,
    title: "Backend First",
    description:
      "I architect systems that scale — from RESTful APIs to complex database schemas.",
  },
  {
    icon: Layers,
    title: "Fullstack Capable",
    description:
      "End-to-end delivery with Next.js on the frontend and Node.js powering the engine.",
  },
  {
    icon: Database,
    title: "Data-Driven",
    description:
      "Deep expertise across SQL and NoSQL — designing schemas that perform under pressure.",
  },
  {
    icon: Code2,
    title: "Detail Obsessed",
    description:
      "Pixel-accurate UI, clean commit history, and code that the next developer can read.",
  },
];

const personalInfo = [
  { label: "Location", value: profile.location },
  { label: "Email", value: profile.email },
  { label: "Phone", value: profile.phone },
  { label: "Freelance", value: "Available" },
];

export function About() {
  return (
    <section id="about" className="relative py-28 md:py-36">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeader
          index="01"
          label="About"
          title={
            <>
              Engineering the{" "}
              <span className="gradient-text italic">invisible layer</span>{" "}
              beneath the UI.
            </>
          }
        />

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16">
          <div>
            <Reveal>
              <div className="space-y-5 text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
                {profile.longBio.map((p, i) => (
                  <p key={i}>
                    {i === 0 ? (
                      <>
                        I&apos;m <strong className="text-foreground font-semibold">{profile.name}</strong>
                        {p.replace(/^I'm Aarav Mehta,/, "")}
                      </>
                    ) : (
                      p
                    )}
                  </p>
                ))}
              </div>
            </Reveal>

            <StaggerGroup className="grid sm:grid-cols-2 gap-5 mt-12" stagger={0.1}>
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <motion.div
                    key={pillar.title}
                    variants={staggerItem}
                    className="group rounded-2xl border border-border bg-card/50 p-6 transition-all duration-300 hover:border-signal-500/40 hover:-translate-y-1"
                  >
                    <Icon className="h-5 w-5 text-signal-500 mb-4" />
                    <h3 className="font-display text-lg mb-2">{pillar.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {pillar.description}
                    </p>
                  </motion.div>
                );
              })}
            </StaggerGroup>
          </div>

          <div className="space-y-8">
            {/* Personal Info Card */}
            <Reveal direction="left">
              <div className="rounded-2xl border border-border bg-card/50 p-7">
                <h3 className="section-label mb-6">Personal Information</h3>
                <dl className="space-y-4">
                  {personalInfo.map((item) => (
                    <div
                      key={item.label}
                      className="flex justify-between items-center border-b border-border/60 pb-3 last:border-0 last:pb-0"
                    >
                      <dt className="text-sm text-muted-foreground">{item.label}</dt>
                      <dd className="text-sm font-medium text-foreground text-right">
                        {item.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>

            {/* Education Card */}
            <Reveal direction="left" delay={0.1}>
              <div className="rounded-2xl border border-border bg-card/50 p-7">
                <h3 className="section-label mb-6">Education</h3>
                <div className="space-y-6">
                  {education.map((edu) => (
                    <div key={edu.id} className="relative pl-6 border-l-2 border-signal-500/30">
                      <span className="absolute -left-[5px] top-1 h-2 w-2 rounded-full bg-signal-500" />
                      <p className="font-display text-base leading-snug">{edu.degree}</p>
                      <p className="text-sm text-muted-foreground mt-1">
                        {edu.institution}
                      </p>
                      <p className="font-mono text-xs text-signal-500 mt-1.5">{edu.year}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
