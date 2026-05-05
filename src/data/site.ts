export type NavGroup = {
  title: string;
  href: string;
  count?: string;
  children?: { label: string; href: string }[];
};

export const navGroups: NavGroup[] = [
  {
    title: "Services",
    href: "/services",
    children: [
      { label: "Search & Growth Strategy", href: "/services/search-growth-strategy" },
      { label: "Onsite SEO", href: "/services/onsite-seo" },
      { label: "Content Experience", href: "/services/content-experience" },
      { label: "B2B Marketing", href: "/services/b2b-marketing" },
      { label: "Digital PR", href: "/services/digital-pr" },
      { label: "Social Media & Campaigns", href: "/services/social-media-campaigns" },
      { label: "Data & Insights", href: "/services/data-insights" },
      { label: "Social SEO/Search", href: "/services/social-seo-search" },
    ],
  },
  {
    title: "International",
    href: "/international",
    children: [
      { label: "US Digital PR", href: "/international/us-digital-pr" },
      { label: "Spain Digital PR", href: "/international/spain-digital-pr" },
      { label: "Germany Digital PR", href: "/international/germany-digital-pr" },
      { label: "Netherlands Digital PR", href: "/international/netherlands-digital-pr" },
    ],
  },
  {
    title: "About",
    href: "/about",
    children: [
      { label: "About Us", href: "/about" },
      { label: "Meet The Risers", href: "/meet-the-risers" },
      { label: "Culture", href: "/culture" },
      { label: "Testimonials", href: "/testimonials" },
    ],
  },
  { title: "Work", count: "25", href: "/work" },
  { title: "Careers", href: "/careers" },
  { title: "Blog", href: "/blog" },
  { title: "Webinar", href: "/webinar" },
];

export const platforms = [
  "Google",
  "ChatGPT",
  "Gemini",
  "TikTok",
  "YouTube",
  "Pinterest",
  "Giphy",
  "Reddit",
  "Amazon",
];

export const clientLogos = ["SIXT", "SN", "Red Bull", "Dojo"];

export const featuredWork = [
  {
    category: "Car rental",
    years: "2023-2025",
    brand: "SIXT",
    title: "An extra 3m clicks regionally through SEO",
  },
  {
    category: "Card Machines",
    years: "2021-2025",
    brand: "Dojo - B2B",
    title: "A B2B success story for Dojo card machines",
  },
  {
    category: "Trainers",
    years: "2025",
    brand: "JD Sports",
    title: "65% up YoY in clicks across EU markets",
  },
  {
    category: "UK holidays",
    years: "2019-2025",
    brand: "Parkdean Resorts",
    title: "Dominating Google and AI search",
  },
];

export const services = [
  "Digital PR",
  "Organic Social & Content",
  "Search & Growth Strategy",
  "Content Experience",
  "Data & Insights",
  "Onsite SEO",
];

export const legacyCards = [
  {
    title: "Pioneers",
    text: "Creating the industry narrative that others follow 3 years from now.",
  },
  {
    title: "Award Winning",
    text: "A roll top bath full of awards, industry recognition and category leadership.",
  },
  {
    title: "Speed",
    text: "Fast-moving search-first teams creating ideas, content and results quickly.",
  },
];

export const news = [
  "Ryan McNamara Is Now Rise at Seven's Global Operations Director",
  "Rise at Seven Appointed by Coneys to Drive Demand and Retail Growth",
  "Rise at Seven Appointed by Langtins to Drive Retail Growth",
];
