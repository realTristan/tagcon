export const site = {
  title: "TAGCON",
  tagline: "Meet Creators!",
  schedule: "June 30th 8:35 AM - 10:30 AM Central time.",
  /** June 30, 8:35 AM Central (CDT) */
  eventStart: "2026-06-30T08:35:00-05:00",
  featuredHeading: "Featured Creators!",
  troopCode: {
    label: "Troop Code TAGCON",
    maps: "Forest, And City",
  },
  cta: {
    heading: "Want To Be A Featured Creator?",
    line1: "DM BlueMonkgtag On Discord",
    line2: "And Ask For It",
    discordUrl: "https://discord.gg/TpFpN2afdg",
    discordLabel: "discord.gg/TpFpN2afdg",
  },
  footer: "WTH Am I Doing",
} as const

export type SocialPlatform = "youtube" | "tiktok"

export type Creator = {
  name: string
  image: string
  role?: string
  /** Which platforms this creator is on (from the flyer) */
  platforms: SocialPlatform[]
  /** Full URL or @handle */
  youtube?: string
  tiktok?: string
}

export const creators: Creator[] = [
  {
    name: "BlueMonk",
    image: "bluemonk.png",
    role: "Owner",
    platforms: ["youtube", "tiktok"],
    youtube: "https://www.youtube.com/@BlueMonk2CoolTT",
    tiktok: "https://www.tiktok.com/@bluemonk2cool",
  },
  {
    name: "Corbin Ttrimue",
    image: "corbin ttrimue.png",
    role: "Idea Maker For Updates",
    platforms: ["youtube"],
    youtube: "https://www.youtube.com/channel/UCCu2istjR_exL7THNl0pFTA",
  },
  {
    name: "Drifter",
    image: "drifter.png",
    platforms: ["youtube", "tiktok"],
    youtube: "https://www.youtube.com/@driftervrgt",
    tiktok: "https://www.tiktok.com/@driftervrgt",
  },
  {
    name: "Teckz",
    image: "teckz.png",
    platforms: ["youtube"],
    youtube: "https://www.youtube.com/channel/UCJ_Ucntni659_pmuaJFNpNQ",
  },
  {
    name: "TinyBlock",
    image: "tinyblock.png",
    platforms: ["youtube"],
    youtube: "https://www.youtube.com/@tinyblock",
  },
  {
    name: "S1LLYBLOSSOM",
    image: "s1llyblossom.png",
    platforms: ["youtube"],
    youtube: "https://www.youtube.com/@BL0SS0M_GT",
  },
]

export function profileUrl(filename: string) {
  return `${import.meta.env.BASE_URL}profiles/${encodeURIComponent(filename)}`
}

export function socialUrl(platform: SocialPlatform, value: string) {
  if (value.startsWith("http://") || value.startsWith("https://")) {
    return value
  }

  const handle = value.startsWith("@") ? value : `@${value}`

  if (platform === "youtube") {
    return `https://www.youtube.com/${handle}`
  }

  return `https://www.tiktok.com/${handle}`
}
