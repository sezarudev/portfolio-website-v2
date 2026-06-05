import { cn } from '@/lib/utils'
import React from 'react'

type BadgeProps = {
  variant?: "default" | "primary" | "accent"
  children: React.ReactNode
}

export default function Badge({children = "Badge", variant = "default"}:BadgeProps) {
  return (
    <span className={cn("text-xs font-medium leading-none",
      variant === "default" &&
          "inline-flex items-center px-[12px] py-1.5 bg-primary-foreground/[0.04] border border-primary-foreground/[0.06] rounded-customRadius text-muted-foreground",
      variant === "primary" &&
          "inline-flex items-center px-[12px] py-1.5 bg-primary/[0.15] border border-primary/[0.25] rounded-customRadius text-accent",
      variant === "accent" &&
          "inline-flex items-center px-[12px] py-1.5 text-accent bg-transparent rounded-customRadius backdrop-blur-md",

    )}>
      {children}
    </span>

  )
}