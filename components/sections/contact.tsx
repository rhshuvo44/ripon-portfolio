"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Send, Twitter, CheckCircle2 } from "lucide-react";
import { profile } from "@/data/profile";
import { SectionHeader } from "@/components/shared/section-header";
import { Reveal } from "@/components/shared/reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

const socialIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
};

export function Contact() {
  const [submitted, setSubmitted] = React.useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 4000);
  }

  return (
    <section id="contact" className="relative py-28 md:py-36 bg-muted/30">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeader
          index="08"
          label="Contact"
          title={
            <>
              Let&apos;s build <span className="gradient-text italic">something</span>.
            </>
          }
          description="Whether you have a project in mind, want to discuss a technical challenge, or just want to connect — I'm always open to the right conversation."
        />

        <div className="grid lg:grid-cols-[0.85fr_1.15fr] gap-12">
          <div>
            <Reveal direction="left">
              <div className="rounded-2xl border border-border bg-card/50 p-7 mb-6">
                <div className="flex items-center gap-2 mb-1">
                  <span className="relative flex h-2 w-2">
                    <span className="absolute inline-flex h-full w-full rounded-full bg-signal-500 animate-pulse-ring" />
                    <span className="relative inline-flex h-2 w-2 rounded-full bg-signal-500" />
                  </span>
                  <p className="text-sm font-medium">{profile.availability}</p>
                </div>
                <p className="text-xs text-muted-foreground font-mono">
                  {profile.responseTime}
                </p>
              </div>
            </Reveal>

            <Reveal direction="left" delay={0.08}>
              <div className="space-y-4">
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-4 rounded-xl border border-border bg-card/50 p-5 transition-colors hover:border-signal-500/40 group"
                >
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-muted text-signal-500">
                    <Mail className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-muted-foreground font-mono">Email</p>
                    <p className="text-sm font-medium">{profile.email}</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 rounded-xl border border-border bg-card/50 p-5">
                  <div className="flex h-11 w-11 items-center justify-center rounded-full bg-muted text-signal-500">
                    <MapPin className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <p className="text-xs text-muted-foreground font-mono">Location</p>
                    <p className="text-sm font-medium">{profile.location}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3 pt-2">
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
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal direction="right">
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl border border-border bg-card/50 p-7 md:p-9 space-y-6"
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name *</Label>
                  <Input id="name" placeholder="Your name" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email *</Label>
                  <Input id="email" type="email" placeholder="you@example.com" required />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input id="subject" placeholder="Project inquiry" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message *</Label>
                <Textarea id="message" placeholder="Tell me about your project..." required />
              </div>
              <Button type="submit" size="lg" className="rounded-full w-full sm:w-auto">
                {submitted ? (
                  <motion.span
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center gap-2"
                  >
                    Message Sent <CheckCircle2 className="h-4 w-4" />
                  </motion.span>
                ) : (
                  <>
                    Send Message <Send className="h-4 w-4" />
                  </>
                )}
              </Button>
              <p className="text-xs text-muted-foreground font-mono">
                * This is a UI demo — no message is actually sent.
              </p>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
