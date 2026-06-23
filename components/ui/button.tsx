import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full text-sm font-medium transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-signal-500 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
  {
    variants: {
      variant: {
        default:
          "bg-signal-500 text-ink-950 hover:bg-signal-400 shadow-[0_0_0_1px_rgba(16,224,112,0.4)] hover:shadow-[0_0_24px_rgba(16,224,112,0.35)]",
        outline:
          "border border-border bg-transparent hover:border-signal-500/50 hover:bg-signal-500/5 text-foreground",
        ghost: "hover:bg-muted text-foreground",
        link: "text-signal-500 underline-offset-4 hover:underline",
      },
      size: {
        default: "h-12 px-7",
        sm: "h-10 px-5 text-sm",
        lg: "h-14 px-9 text-base",
        icon: "h-11 w-11",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
