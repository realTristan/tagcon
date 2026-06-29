export type SocialPlatform = "youtube" | "tiktok";

export type Creator = {
  name: string;
  image: string;
  role?: string;
  platforms: SocialPlatform[];
  youtube?: string;
  tiktok?: string;
};

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
  {
    name: "DrBearVR",
    image: "drbearvr.png",
    platforms: ["youtube"],
    youtube: "https://www.youtube.com/channel/UC4CCOg3H164oAMsJYVSpBCw",
  },
  {
    name: "BananaGT",
    image: "bananagt.png",
    platforms: ["youtube"],
    youtube: "https://www.youtube.com/channel/UCvAiwaVA-cxxeDZbGLcgU8g",
  },
];

export function profileUrl(filename: string) {
  return `${import.meta.env.BASE_URL}profiles/${encodeURIComponent(filename)}`;
}
