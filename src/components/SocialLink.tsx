import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type SocialLinkProps = {
  href: string;
  icon: ReactNode;
  label: string;
  className?: string;
};

export function SocialLink({ href, icon, label, className }: SocialLinkProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full border-2 border-tagcon-banana/35 bg-black/45 px-3 py-1 font-heading text-xs font-bold text-white transition hover:border-tagcon-banana hover:bg-tagcon-banana/12",
        className
      )}
    >
      <span className="size-4 shrink-0">{icon}</span>
      {label}
    </a>
  );
}
