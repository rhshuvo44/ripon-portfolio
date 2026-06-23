"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Download, Github, Linkedin, Twitter } from "lucide-react";
import { profile } from "@/data/profile";
import { coreTechnologies } from "@/data/skills";
import { Button } from "@/components/ui/button";
import { GridBackdrop } from "@/components/shared/grid-backdrop";

const socialIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
};

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-[100vh] flex flex-col justify-center pt-32 pb-16 overflow-hidden"
    >
      <GridBackdrop />

      <div className="container-px mx-auto max-w-7xl w-full">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-16 items-center">
          {/* Left: text content */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2.5 rounded-full border border-border bg-card/60 px-4 py-2 mb-8"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full rounded-full bg-signal-500 animate-pulse-ring" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-signal-500" />
              </span>
              <span className="font-mono text-xs text-muted-foreground tracking-wide">
                {profile.availability} · 2026
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="font-display text-5xl sm:text-6xl md:text-7xl leading-[1.02] tracking-tight"
            >
              Hi, I&apos;m{" "}
              <span className="block sm:inline gradient-text">
                {profile.firstName}
              </span>{" "}
              <span className="block">{profile.lastName}.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.22 }}
              className="mt-6 max-w-lg text-base sm:text-lg text-muted-foreground leading-relaxed"
            >
              {profile.bio}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.34 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Button asChild size="lg" className="rounded-full">
                <Link href="#projects">
                  View Projects <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full">
                <Link href="#contact">Get in Touch</Link>
              </Button>
              <Button asChild variant="ghost" size="lg" className="rounded-full">
                <a href={profile.resumeUrl} download>
                  Resume <Download className="h-4 w-4" />
                </a>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-12 flex items-center gap-5"
            >
              {profile.socials.map((social) => {
                const Icon = socialIcons[social.icon];
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.name}
                    className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-muted-foreground transition-all duration-300 hover:border-signal-500/50 hover:text-signal-500 hover:-translate-y-1"
                  >
                    {Icon && <Icon className="h-[18px] w-[18px]" />}
                  </a>
                );
              })}
            </motion.div>
          </div>

          {/* Right: profile image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative mx-auto w-full max-w-sm lg:max-w-md"
          >
            <div className="relative aspect-[4/5] rounded-[2rem] border border-border bg-gradient-to-br from-card to-muted overflow-hidden card-glow">
              <Image
                src={profile.avatarUrl}
                alt={profile.name}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 90vw, 420px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink-950/40 via-transparent to-transparent" />
            </div>

            {/* floating stat card */}
            <motion.div
              initial={{ opacity: 0, x: -20, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="absolute -bottom-6 -left-6 rounded-2xl border border-border bg-card/95 backdrop-blur-xl px-5 py-4 shadow-xl hidden sm:block"
            >
              <p className="font-display text-3xl text-signal-500">
                {profile.yearsExperience}+
              </p>
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mt-1">
                Years Experience
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20, y: -20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="absolute -top-6 -right-4 rounded-2xl border border-border bg-card/95 backdrop-blur-xl px-5 py-4 shadow-xl hidden sm:block"
            >
              <p className="font-display text-3xl text-foreground">
                {profile.projectsCompleted}+
              </p>
              <p className="font-mono text-[11px] uppercase tracking-wider text-muted-foreground mt-1">
                Projects Shipped
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* marquee of tech */}
        <div className="mt-20 border-t border-border pt-8 overflow-hidden">
          <div className="flex whitespace-nowrap animate-marquee gap-12">
            {[...coreTechnologies, ...coreTechnologies].map((tech, i) => (
              <span
                key={`${tech}-${i}`}
                className="font-mono text-sm text-muted-foreground/70 tracking-wide flex items-center gap-3"
              >
                {tech}
                <span className="h-1 w-1 rounded-full bg-signal-500/50" />
              </span>
            ))}
          </div>
        </div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
        className="absolute bottom-0 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-muted-foreground hover:text-signal-500 transition-colors"
        aria-label="Scroll to about section"
      >
        <span className="font-mono text-[11px] uppercase tracking-widest">Scroll</span>
        <ArrowDown className="h-4 w-4 animate-bounce" />
      </motion.a>
    </section>
  );
}
