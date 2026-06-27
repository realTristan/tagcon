import type { ReactNode } from "react"

import { cn } from "@/lib/utils"

type SocialLinkProps = {
  href: string
  icon: ReactNode
  label: string
  className?: string
}

export function SocialLink({ href, icon, label, className }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={cn(
        "inline-flex items-center gap-1.5 rounded-md border bg-muted px-2.5 py-1 text-xs font-medium text-foreground transition-colors hover:bg-muted/80",
        className
      )}
    >
      <span className="size-3.5 shrink-0">{icon}</span>
      {label}
    </a>
  )
}
