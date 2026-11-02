// Content shared by the classic long-scroll page and the per-block pages.

export interface ExperienceEntry {
  period: string;
  role: string;
  organization: string;
  organizationUrl?: string;
  slug: string;
  /** Its block on the chain, if it has one. */
  block: number | null;
  bullets: string[];
}

export const experienceEntries: ExperienceEntry[] = [
  {
    period: "INCOMING",
    role: "Incoming Institutional Analyst",
    organization: "Coinbase",
    slug: "coinbase",
    block: 1,
    organizationUrl: "https://www.coinbase.com",
    bullets: [
      "Working closely on navigating sales, custodial, and staking requests from clients inspired to get involved with the digital asset space",
    ],
  },
  {
    period: "SUMMER 2025",
    role: "Wealth Management Intern",
    organization: "Dyer Wealth Management - San Diego, CA",
    slug: "dyer",
    block: null,
    bullets: [
      "Assisted in portfolio construction, backtesting financial models and algorithms, and client advisory across equity and fixed-income allocations.",
    ],
  },
  {
    period: "2023 - PRESENT",
    role: "Practice Player",
    organization: "University of Michigan Women's Basketball",
    slug: "michigan-wbb",
    block: 4,
    bullets: [
      "Selected as a practice player to train with the University of Michigan's Division I basketball team, making me a further fan of the WNBA and women's college basketball",
    ],
  },
  {
    period: "2023 - PRESENT",
    role: "Co-Founder",
    organization: "S&Y Scholars - College Consulting",
    slug: "sny",
    block: 3,
    bullets: [
      "Co-founded a peer-to-peer college admissions consulting service helping families navigate recruitment and strategy.",
      "Read more on how you can use our services below",
      "Winner of the 2023 New York Times College Essay Challenge",
    ],
  },
];
export const snyStats = [
  { value: "75%+", label: "Success Rate", detail: "Across all schools applied" },
  { value: "37", label: "Schools Applied" },
  { value: "1570", label: "Combined SAT" },
  { value: "4.7", label: "Combined GPA" },
];
export const snyServices = [
  {
    title: "Interview & Resume Guidance",
    description:
      "Real-time consultation leveraging our personal experiences. Personalized strategy tailored to each student's aspirations.",
    icon: "microphone",
  },
  {
    title: "Essay Editing",
    description:
      "Refining application essays to showcase your unique strengths. We translate your voice directly onto paper.",
    icon: "pen",
  },
  {
    title: "Application Strategy",
    description: "Expert advice on school selection, timelines, and standing out.",
    icon: "target",
  },
];
export const snyFounders = [
  {
    name: "Samuel Smith",
    school: "University of Michigan - Economics & Psychology",
    bio: "Senior at U of M and incoming Analyst at Coinbase in New York City. Practice player on the Women's Basketball team, avid chess player, and winner of the 2023 New York Times College Essay Challenge.",
    linkedin: "https://www.linkedin.com/in/ssam-smith/",
  },
  {
    name: "Richard Yoon",
    school: "Columbia University - Economics & Political Science",
    bio: "Senior at Columbia and incoming Analyst at McKinsey & Company in New York City. Spent his first two years in Reims, France through the dual-degree program with Sciences Po. Avid basketball player with 10+ years of robotics experience.",
    linkedin: "https://www.linkedin.com/in/yoonrichard/",
  },
];
