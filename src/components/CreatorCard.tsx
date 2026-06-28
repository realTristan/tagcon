import type { LucideIcon } from "lucide-react";

import { SocialLink } from "@/components/SocialLink";
import { TiktokIcon, YoutubeIcon } from "@/components/icons/social-icons";
import type { Creator, SocialPlatform } from "@/data/creators";
import { profileUrl } from "@/data/creators";

type CreatorCardProps = {
  creator: Creator;
};

const platformConfig: Record<
  SocialPlatform,
  { label: string; icon: LucideIcon; valueKey: SocialPlatform }
> = {
  youtube: {
    label: "YouTube",
    icon: YoutubeIcon,
    valueKey: "youtube",
  },
  tiktok: {
    label: "TikTok",
    icon: TiktokIcon,
    valueKey: "tiktok",
  },
};

export function CreatorCard({ creator }: CreatorCardProps) {
  return (
    <article className="flex h-full flex-col rounded-[1.25rem] border-[3px] border-tagcon-banana/30 bg-[#111]/96 p-6 shadow-[0_5px_0_rgba(251,196,1,0.12)] transition hover:-translate-y-0.5 hover:border-tagcon-banana/55">
      <img
        src={profileUrl(creator.image)}
        alt={creator.name}
        className="size-20 rounded-full border-[3px] border-tagcon-banana object-cover"
      />

      <div className="mt-5 flex flex-1 flex-col">
        <h3 className="font-heading text-xl font-bold uppercase tracking-wide text-white">
          {creator.name}
        </h3>
        {creator.role && (
          <p className="mt-1 text-sm font-semibold text-tagcon-banana">
            {creator.role}
          </p>
        )}

        <div className="mt-4 flex flex-wrap gap-2">
          {creator.platforms.map((platform) => {
            const config = platformConfig[platform];
            const href = creator[config.valueKey];
            if (!href) return null;

            const Icon = config.icon;

            return (
              <SocialLink
                key={platform}
                href={href}
                icon={<Icon className="size-4" aria-hidden />}
                label={config.label}
              />
            );
          })}
        </div>
      </div>
    </article>
  );
}
