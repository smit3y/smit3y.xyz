// The chain: one block per chapter, in order. The hub renders these as the
// floating glass blocks; each block also has its own page (see BlockPage).

export interface ChainBlock {
  id: string;
  scene: "home" | "arena" | "sny" | "dyer" | "exchange" | "research" | "pending";
  /** Short name for nav, breadcrumbs, and prev/next links. */
  label: string;
  title: string;
  tx: string[];
  time: string;
  href: string;
  cta: string;
}

export const BLOCKS: ChainBlock[] = [
  {
    id: "genesis", scene: "home", label: "About", title: "Genesis · Who I Am",
    tx: ["Economics & Psychology · University of Michigan '27", "Builder, basketball player, researcher"],
    time: "block 0", href: "/about/", cta: "About me",
  },
  {
    id: "coinbase", scene: "exchange", label: "Coinbase", title: "Incoming Institutional Analyst",
    tx: ["Coinbase · Sales, Trading & Prime Brokerage", "Sales, custody & staking requests"],
    time: "incoming", href: "/experience/coinbase/", cta: "Open block",
  },
  {
    id: "research", scene: "research", label: "Research", title: "Research · Investment Theses",
    tx: ["The Shrinking Anchor · Ledger N3XT", "Equities, digital assets & DeFi"],
    time: "Sep 2026", href: "/research/", cta: "Research",
  },
  {
    id: "sny", scene: "sny", label: "S&Y Scholars", title: "Co-Founder · S&Y Scholars",
    tx: ["Peer-to-peer college admissions consulting", "Winner · 2023 NYT College Essay Challenge"],
    time: "2023 → present", href: "/sny/", cta: "S&Y Scholars",
  },
  {
    id: "arena", scene: "arena", label: "Michigan WBB", title: "Practice Player",
    tx: ["University of Michigan Women's Basketball", "Training with a D1 roster"],
    time: "2023 → present", href: "/experience/michigan-wbb/", cta: "Open block",
  },
  {
    id: "pending", scene: "pending", label: "What's next", title: "Pending",
    tx: ["Next block is still in the mempool", "Say gm"],
    time: "mempool", href: "/next/", cta: "What's next",
  },
];

export const VISITED_KEY = "smit3y-chain-visited";
export const ZERO_HASH = "0x" + "0".repeat(64);

/** The exact string each block's SHA-256 is taken over: parent hash + contents. */
export const hashInput = (parent: string, b: ChainBlock) =>
  parent + JSON.stringify({ title: b.title, tx: b.tx, time: b.time });

export const shortHash = (h: string) => (h.length > 14 ? h.slice(0, 8) + "…" + h.slice(-4) : h);

// each block's neon colour in the city (matches the towers on the skyline)
export const NODE_COLORS = ["#ff5aa8", "#4c8dff", "#17d4c8", "#ffcb05", "#ffb02e", "#a78bfa"];
