import Link from "next/link";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import { profile } from "@/data/profile";
import { navLinks } from "@/lib/constants";

const socialIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
};

export function Footer() {
  return (
    <footer className="relative border-t border-border pt-16 pb-8">
      <div className="container-px mx-auto max-w-7xl">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">
          <div className="lg:col-span-2">
            <Link href="#home" className="font-display text-xl tracking-tight flex items-center gap-2 mb-4">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-signal-500 text-ink-950 font-mono text-sm font-bold">
                {profile.firstName[0]}
                {profile.lastName[0]}
              </span>
              {profile.firstName} {profile.lastName}
            </Link>
            <p className="text-sm text-muted-foreground max-w-sm leading-relaxed">
              {profile.designation} building scalable systems for tomorrow&apos;s
              digital infrastructure.
            </p>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-5">
              Navigation
            </h3>
            <ul className="space-y-3">
              {navLinks.slice(1).map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-signal-500 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-5">
              Connect
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`mailto:${profile.email}`}
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-signal-500 transition-colors"
                >
                  <Mail className="h-3.5 w-3.5" /> Email
                </a>
              </li>
              {profile.socials.map((social) => {
                const Icon = socialIcons[social.icon];
                return (
                  <li key={social.name}>
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-sm text-muted-foreground hover:text-signal-500 transition-colors"
                    >
                      {Icon && <Icon className="h-3.5 w-3.5" />} {social.name}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-border pt-8">
          <p className="text-xs text-muted-foreground font-mono">
            © 2026 {profile.name}. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground font-mono">
            Built with Next.js &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
