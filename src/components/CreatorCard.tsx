import type { ReactNode } from "react"

import type { Creator, SocialPlatform } from "@/data/site"
import { profileUrl, socialUrl } from "@/data/site"
import { SocialLink } from "@/components/SocialLink"
import { TiktokIcon, YoutubeIcon } from "@/components/icons/brand-icons"

type CreatorCardProps = {
  creator: Creator
}

const platformConfig: Record<
  SocialPlatform,
  { label: string; icon: ReactNode; valueKey: "youtube" | "tiktok" }
> = {
  youtube: {
    label: "YouTube",
    icon: <YoutubeIcon className="size-full" />,
    valueKey: "youtube",
  },
  tiktok: {
    label: "TikTok",
    icon: <TiktokIcon className="size-full" />,
    valueKey: "tiktok",
  },
}

export function CreatorCard({ creator }: CreatorCardProps) {
  return (
    <article className="flex h-full flex-col rounded-xl border bg-card p-6">
      <img
        src={profileUrl(creator.image)}
        alt={creator.name}
        className="size-20 rounded-full border object-cover"
      />

      <div className="mt-5 flex flex-1 flex-col">
        <h3 className="text-lg font-medium tracking-tight">{creator.name}</h3>
        {creator.role && (
          <p className="mt-1 text-sm text-muted-foreground">{creator.role}</p>
        )}

        <div className="mt-4 flex flex-wrap gap-2">
          {creator.platforms.map((platform) => {
            const config = platformConfig[platform]
            const value = creator[config.valueKey]
            if (!value) return null

            return (
              <SocialLink
                key={platform}
                href={socialUrl(platform, value)}
                icon={config.icon}
                label={config.label}
              />
            )
          })}
        </div>
      </div>
    </article>
  )
}
