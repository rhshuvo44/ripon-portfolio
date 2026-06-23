import { cn } from "@/lib/utils";
import { Reveal } from "@/components/shared/reveal";

interface SectionHeaderProps {
  index: string;
  label: string;
  title: React.ReactNode;
  description?: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeader({
  index,
  label,
  title,
  description,
  align = "left",
  className,
}: SectionHeaderProps) {
  return (
    <div
      className={cn(
        "mb-14 md:mb-20",
        align === "center" && "text-center flex flex-col items-center",
        className
      )}
    >
      <Reveal direction="up">
        <div className="flex items-center gap-3 mb-5">
          <span className="font-mono text-xs text-signal-500">{index}</span>
          <span className="h-px w-8 bg-signal-500/50" />
          <span className="section-label">{label}</span>
        </div>
      </Reveal>
      <Reveal direction="up" delay={0.08}>
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl leading-[1.05] tracking-tight text-balance max-w-2xl">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal direction="up" delay={0.16}>
          <p className="mt-5 text-muted-foreground text-base md:text-lg max-w-xl leading-relaxed">
            {description}
          </p>
        </Reveal>
      )}
    </div>
  );
}
