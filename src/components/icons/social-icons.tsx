import { createLucideIcon, type LucideProps } from "lucide-react";

export const DiscordIcon = createLucideIcon("Discord", [
  [
    "path",
    {
      d: "M20.3 4.4A17.2 17.2 0 0 0 15.5 3a12 12 0 0 0-.6 1.2 15.9 15.9 0 0 0-4.8 0A11.6 11.6 0 0 0 9.5 3 17 17 0 0 0 4.7 4.4 18.2 18.2 0 0 0 .5 16.4a17.3 17.3 0 0 0 5.3 2.7 12.8 12.8 0 0 0 1.1-1.8 11.2 11.2 0 0 1-1.7-.8l.4-.3a12.4 12.4 0 0 0 10.6 0l.4.3a11.1 11.1 0 0 1-1.7.8c.3.7.7 1.3 1.1 1.8a17.2 17.2 0 0 0 5.3-2.7 18.1 18.1 0 0 0-4.2-12ZM8.3 13.8c-1 0-1.8-1-1.8-2.1s.8-2.1 1.8-2.1c1 0 1.8 1 1.8 2.1s-.8 2.1-1.8 2.1Zm7.4 0c-1 0-1.8-1-1.8-2.1s.8-2.1 1.8-2.1c1 0 1.8 1 1.8 2.1s-.8 2.1-1.8 2.1Z",
      fill: "currentColor",
      stroke: "none",
      key: "discord",
    },
  ],
]);

export const YoutubeIcon = createLucideIcon("Youtube", [
  [
    "path",
    {
      d: "M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.5v-7l6.4 3.5-6.4 3.5Z",
      fill: "currentColor",
      stroke: "none",
      key: "youtube",
    },
  ],
]);

export const TiktokIcon = createLucideIcon("Tiktok", [
  [
    "path",
    {
      d: "M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.27 6.27 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07Z",
      fill: "currentColor",
      stroke: "none",
      key: "tiktok",
    },
  ],
]);

export type SocialIconProps = LucideProps;
