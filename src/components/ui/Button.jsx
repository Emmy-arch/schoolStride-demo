import React from "react";
import { cn } from "../../lib/utils";

/**
 * Button variants mapping
 * -----------------------
 * This mimics `cva` from shadcn.
 * You can pass `variant` and `size` props.
 */
const buttonVariants = {
  variant: {
    default:
      "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25",
    destructive:
      "bg-destructive text-destructive-foreground hover:bg-destructive/90",
    outline:
      "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
    ghost: "hover:bg-accent/10 hover:text-accent-foreground",
    link: "text-primary underline-offset-4 hover:underline",
    gradient:
      "gradient-primary text-primary-foreground hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5",
    hero: "gradient-primary text-primary-foreground hover:shadow-glow hover:-translate-y-1 font-semibold",
    accent:
      "bg-accent text-accent-foreground hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/25",
    "outline-white":
      "border-2 border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:border-primary-foreground/50",
  },
  size: {
    default: "h-10 px-4 py-2",
    sm: "h-9 rounded-md px-3",
    lg: "h-11 rounded-lg px-8",
    xl: "h-14 rounded-xl px-10 text-base",
    icon: "h-10 w-10",
  },
  base:
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-lg text-sm font-medium " +
    "ring-offset-background transition-all duration-200 focus-visible:outline-none " +
    "focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 " +
    "disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
};


const Button = React.forwardRef(function Button(
  { variant = "default", size = "default", className, as = "button", ...props },
  ref
) {
  const Comp = as; // render as whatever element is passed

  return (
    <Comp
      ref={ref}
      className={cn(
        buttonVariants.base,
        buttonVariants.variant[variant],
        buttonVariants.size[size],
        className
      )}
      {...props}
    />
  );
});
Button.displayName = "Button";

export { Button, buttonVariants };
