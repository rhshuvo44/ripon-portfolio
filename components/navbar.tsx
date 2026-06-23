"use client";

import * as React from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { navLinks } from "@/lib/constants";
import { profile } from "@/data/profile";
import { useScrolled } from "@/hooks/use-scrolled";
import { useActiveSection } from "@/hooks/use-active-section";
import { ThemeToggle } from "@/components/shared/theme-toggle";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Navbar() {
  const scrolled = useScrolled(20);
  const [open, setOpen] = React.useState(false);
  const sectionIds = navLinks.map((l) => l.href.replace("#", ""));
  const active = useActiveSection(sectionIds);

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 transition-all duration-300",
          scrolled
            ? "bg-background/80 backdrop-blur-xl border-b border-border"
            : "bg-transparent border-b border-transparent"
        )}
      >
        <nav className="container-px mx-auto max-w-7xl flex items-center justify-between h-20">
          <Link
            href="#home"
            className="font-display text-xl tracking-tight flex items-center gap-2 group"
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-signal-500 text-ink-950 font-mono text-sm font-bold transition-transform group-hover:rotate-[8deg]">
              {profile.firstName[0]}
              {profile.lastName[0]}
            </span>
            <span className="hidden sm:inline">{profile.firstName}</span>
          </Link>

          <ul className="hidden lg:flex items-center gap-1 font-mono text-[13px]">
            {navLinks.map((link) => {
              const isActive = active === link.href.replace("#", "");
              return (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "relative px-4 py-2 rounded-full transition-colors duration-200",
                      isActive
                        ? "text-foreground"
                        : "text-muted-foreground hover:text-foreground"
                    )}
                  >
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 rounded-full bg-muted"
                        transition={{ type: "spring", duration: 0.5 }}
                      />
                    )}
                    <span className="relative z-10">{link.name}</span>
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="hidden lg:flex items-center gap-3">
            <ThemeToggle />
            <Button asChild size="sm" className="rounded-full">
              <Link href="#contact">
                Hire Me <ArrowUpRight className="h-3.5 w-3.5" />
              </Link>
            </Button>
          </div>

          <div className="flex items-center gap-2 lg:hidden">
            <ThemeToggle />
            <Button
              variant="ghost"
              size="icon"
              className="rounded-full"
              onClick={() => setOpen(!open)}
              aria-label="Toggle menu"
            >
              {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </nav>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-background lg:hidden"
          >
            <div className="flex flex-col h-full pt-28 container-px">
              <ul className="flex flex-col gap-1">
                {navLinks.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * i }}
                    className="border-b border-border"
                  >
                    <Link
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="flex items-center justify-between py-5 font-display text-3xl"
                    >
                      {link.name}
                      <span className="font-mono text-xs text-muted-foreground">
                        0{i + 1}
                      </span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-auto mb-12 flex flex-col gap-4"
              >
                <Button asChild size="lg" className="rounded-full w-full">
                  <Link href="#contact" onClick={() => setOpen(false)}>
                    Hire Me <ArrowUpRight className="h-4 w-4" />
                  </Link>
                </Button>
                <p className="text-center text-sm text-muted-foreground font-mono">
                  {profile.email}
                </p>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
