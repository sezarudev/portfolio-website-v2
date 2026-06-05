import { cn } from "@/lib/utils"
import React from "react"
import { Slot } from "@radix-ui/react-slot"

type ButtonProps = {
  variant?: "primary" | "secondary" | "ghost"
  size?: "sm" | "default" | "lg"
  asChild?: boolean
  children: React.ReactNode
} & React.ButtonHTMLAttributes<HTMLButtonElement>

const Button = ({
  children = "Button",
  variant = "primary",
  size = "default",
  className,
  asChild = false,
  ...props
}: ButtonProps) => {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      {...props}
      className={cn(
        "font-medium inline-flex items-center justify-center transition-all duration-100 ease-in-out rounded-customRadius w-full max-w-fit",

        /* variant */
        variant === "primary" &&
          "bg-primary hover:scale-[1.02] shadow drop-shadow-[4px_0px_20px_hsl(var(--primary)/0.2)]",

        variant === "secondary" &&
          "bg-surface/60 border border-primary/[.12] hover:border-primary/60 text-muted-foreground hover:text-primary-foreground backdrop-blur-md",

        variant === "ghost" &&
          "text-muted-foreground hover:text-primary-foreground backdrop-blur-md",

        /* size */
        size === "sm" && "px-4 py-2 text-xs",
        size === "default" && "px-4 py-2.5 text-sm",
        size === "lg" && "px-5 py-2.5 text-base",

        className
      )}
    >
      {children}
    </Comp>
  )
}

export default Button