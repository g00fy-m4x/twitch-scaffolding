export type Stream = {
  id: number;
  username: string;
  displayName: string;
  game: string;
  title: string;
  viewers: number;
  avatarColor: string;
  gradientFrom: string;
  gradientTo: string;
  tags: string[];
  isVerified?: boolean;
};

export type Category = {
  id: number;
  name: string;
  viewers: number;
  tags: string[];
  gradientFrom: string;
  gradientTo: string;
};

export type FeaturedStream = {
  id: number;
  displayName: string;
  game: string;
  viewers: number;
  tags: string[];
  avatarColor: string;
  avatarInitial: string;
  // gradient colors for the wide background art panels
  artFrom: string;
  artTo: string;
  // gradient for the center "video" area
  videoFrom: string;
  videoTo: string;
};

export function formatViewers(count: number): string {
  if (count >= 1_000_000) return `${(count / 1_000_000).toFixed(1)}M`;
  if (count >= 1_000) return `${(count / 1_000).toFixed(1)}K`;
  return count.toString();
}

export const STREAMS: Stream[] = [
  {
    id: 1,
    username: "xqcow",
    displayName: "xQcOW",
    game: "Just Chatting",
    title: "🔴 JUST CHATTING - WATCHING STUFF WITH CHAT | !prime !socials",
    viewers: 47823,
    avatarColor: "#9147ff",
    gradientFrom: "#1a0533",
    gradientTo: "#4b2080",
    tags: ["English"],
    isVerified: true,
  },
  {
    id: 2,
    username: "kai_cenat",
    displayName: "Kai Cenat",
    game: "Just Chatting",
    title: "MAR!O PARTY WITH THE BOYS 😤🔥 | !sub !discord",
    viewers: 38104,
    avatarColor: "#ff6b35",
    gradientFrom: "#3d1500",
    gradientTo: "#9b3a00",
    tags: ["English"],
    isVerified: true,
  },
  {
    id: 3,
    username: "hasanabi",
    displayName: "HasanAbi",
    game: "Just Chatting",
    title: "morning show - reading the news | !socials",
    viewers: 31298,
    avatarColor: "#d62828",
    gradientFrom: "#1a0000",
    gradientTo: "#5a0000",
    tags: ["English", "Politics"],
    isVerified: true,
  },
  {
    id: 4,
    username: "shroud",
    displayName: "shroud",
    game: "VALORANT",
    title: "Radiant grind | !config !crosshair",
    viewers: 28745,
    avatarColor: "#c89b3c",
    gradientFrom: "#0a1628",
    gradientTo: "#1a3a5c",
    tags: ["English", "FPS"],
    isVerified: true,
  },
  {
    id: 5,
    username: "pokimane",
    displayName: "pokimane",
    game: "VALORANT",
    title: "valo ranked !! playing w friends later",
    viewers: 19283,
    avatarColor: "#ff8cc8",
    gradientFrom: "#1a0028",
    gradientTo: "#4d0080",
    tags: ["English"],
    isVerified: true,
  },
  {
    id: 6,
    username: "summit1g",
    displayName: "summit1g",
    game: "Counter-Strike 2",
    title: "CS2 - GLOBAL ELITE GRIND | !prime",
    viewers: 16423,
    avatarColor: "#f0ad00",
    gradientFrom: "#0a1a0a",
    gradientTo: "#1a4a1a",
    tags: ["English", "FPS"],
    isVerified: true,
  },
  {
    id: 7,
    username: "sodapoppin",
    displayName: "Sodapoppin",
    game: "World of Warcraft",
    title: "WoW - Mythic+ with the boys | !discord",
    viewers: 13876,
    avatarColor: "#00aeef",
    gradientFrom: "#001a33",
    gradientTo: "#004080",
    tags: ["English", "MMO"],
    isVerified: true,
  },
  {
    id: 8,
    username: "loltyler1",
    displayName: "loltyler1",
    game: "League of Legends",
    title: "GRANDMASTER ADC | RANKED GRIND | !merch",
    viewers: 24531,
    avatarColor: "#1ea0f0",
    gradientFrom: "#001533",
    gradientTo: "#0a2952",
    tags: ["English", "MOBA"],
    isVerified: true,
  },
  {
    id: 9,
    username: "mizkif",
    displayName: "Mizkif",
    game: "Just Chatting",
    title: "STORY TIME + Reactions | !discord !socials",
    viewers: 11204,
    avatarColor: "#f59342",
    gradientFrom: "#1a0a00",
    gradientTo: "#4a2000",
    tags: ["English"],
    isVerified: true,
  },
  {
    id: 10,
    username: "asmongold",
    displayName: "Asmongold",
    game: "Final Fantasy XIV",
    title: "FF14 - Dawntrail new content | !throne !youtube",
    viewers: 33102,
    avatarColor: "#ffd700",
    gradientFrom: "#1a1400",
    gradientTo: "#4a3800",
    tags: ["English", "MMO"],
    isVerified: true,
  },
  {
    id: 11,
    username: "timthetatman",
    displayName: "TimTheTatman",
    game: "Call of Duty: Warzone",
    title: "WARZONE WITH THE SQUAD | NEW SEASON | !socials",
    viewers: 18763,
    avatarColor: "#00c951",
    gradientFrom: "#001a0a",
    gradientTo: "#004a1a",
    tags: ["English", "FPS"],
    isVerified: true,
  },
  {
    id: 12,
    username: "nickmercs",
    displayName: "NICKMERCS",
    game: "Call of Duty: Warzone",
    title: "WARZONE TRIO - dropping hot | !MFAM",
    viewers: 21834,
    avatarColor: "#ff4500",
    gradientFrom: "#1a0500",
    gradientTo: "#4a1000",
    tags: ["English", "Battle Royale"],
    isVerified: true,
  },
];

export const CATEGORIES: Category[] = [
  {
    id: 1,
    name: "Just Chatting",
    viewers: 287453,
    tags: ["IRL", "Talk Shows & Podcasts"],
    gradientFrom: "#1a0533",
    gradientTo: "#6b2fa0",
  },
  {
    id: 2,
    name: "VALORANT",
    viewers: 183291,
    tags: ["Shooter", "FPS"],
    gradientFrom: "#2d0a0a",
    gradientTo: "#8b0000",
  },
  {
    id: 3,
    name: "Fortnite",
    viewers: 142308,
    tags: ["Battle Royale", "Shooter"],
    gradientFrom: "#002b4d",
    gradientTo: "#0a5fa0",
  },
  {
    id: 4,
    name: "League of Legends",
    viewers: 128754,
    tags: ["MOBA", "Strategy"],
    gradientFrom: "#0a1a2a",
    gradientTo: "#1a3a5c",
  },
  {
    id: 5,
    name: "Counter-Strike 2",
    viewers: 98453,
    tags: ["Shooter", "FPS"],
    gradientFrom: "#0a1a0a",
    gradientTo: "#1a5a1a",
  },
  {
    id: 6,
    name: "Minecraft",
    viewers: 87234,
    tags: ["Survival", "Building"],
    gradientFrom: "#1a1400",
    gradientTo: "#5a4a00",
  },
  {
    id: 7,
    name: "World of Warcraft",
    viewers: 76102,
    tags: ["MMORPG", "Fantasy"],
    gradientFrom: "#001a33",
    gradientTo: "#004a8a",
  },
  {
    id: 8,
    name: "Dota 2",
    viewers: 64891,
    tags: ["MOBA", "Strategy"],
    gradientFrom: "#1a0000",
    gradientTo: "#5c1a00",
  },
];

export const FEATURED: FeaturedStream[] = [
  {
    id: 1,
    displayName: "xQcOW",
    game: "Just Chatting",
    viewers: 47800,
    tags: ["English", "xQc"],
    avatarColor: "#9147ff",
    avatarInitial: "X",
    artFrom: "#0d0020",
    artTo: "#2d0060",
    videoFrom: "#0a0015",
    videoTo: "#1a0035",
  },
  {
    id: 2,
    displayName: "shroud",
    game: "VALORANT",
    viewers: 28700,
    tags: ["English", "FPS"],
    avatarColor: "#c89b3c",
    avatarInitial: "S",
    artFrom: "#200005",
    artTo: "#5a0010",
    videoFrom: "#120003",
    videoTo: "#2a0008",
  },
  {
    id: 3,
    displayName: "Asmongold",
    game: "Final Fantasy XIV",
    viewers: 33100,
    tags: ["English", "MMO"],
    avatarColor: "#ffd700",
    avatarInitial: "A",
    artFrom: "#1a1000",
    artTo: "#4a3000",
    videoFrom: "#100a00",
    videoTo: "#2a1a00",
  },
];
