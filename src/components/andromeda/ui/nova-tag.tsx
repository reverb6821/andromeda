import { cn } from "@/lib/utils"
import type { HTMLAttributes, ReactNode } from "react"

export interface NovaTagProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: "default" | "success" | "warning" | "destructive" | "outline"
  icon?: ReactNode
  label: string
}

const variantClasses: Record<NonNullable<NovaTagProps["variant"]>, string> = {
  default: "bg-muted text-foreground",
  success: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100",
  warning: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-100",
  destructive: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100",
  outline:
    "border border-border text-foreground bg-transparent dark:text-foreground/80",
}

export function NovaTag({
  className,
  variant = "default",
  icon,
  label,
  ...props
}: NovaTagProps) {
  return (
    <span
      role="status"
      aria-label={props["aria-label"] ?? label}
      className={cn(
        "inline-flex items-center gap-1 rounded-sm px-2.5 py-0.5 text-xs font-semibold",
        variantClasses[variant],
        className
      )}
      {...props}
    >
      {icon && <span className="w-3 h-3">{icon}</span>}
      {label}
    </span>
  )
}
