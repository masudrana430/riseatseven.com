export type MenuColumn = {
  label?: string;
  items: string[];
};

export type NavDropdown = {
  key: "services" | "international" | "about";
  label: string;
  href: string;
  image: string;
  cta?: string;
  columns: MenuColumn[];
  mobileItems: string[];
};

export const dropdowns: NavDropdown[] = [
  {
    key: "services",
    label: "Services",
    href: "/services/",
    image: "/assets/menu-services.webp",
    cta: "View All Services",
    columns: [],
    mobileItems: [
      "Search & Growth Strategy",
      "Onsite SEO",
      "Content Experience",
      "B2B Marketing",
      "Digital PR",
      "Social Media & Campaigns",
      "Data & Insights",
      "Social SEO/Search",
    ],
  },
  {
    key: "international",
    label: "International",
    href: "/international/",
    image: "/assets/menu-international.webp",
    columns: [],
    mobileItems: [
      "US Digital PR",
      "Spain Digital PR",
      "Germany Digital PR",
      "Netherlands Digital PR",
    ],
  },
  {
    key: "about",
    label: "About",
    href: "/about/",
    image: "/assets/menu-about.webp",
    columns: [],
    mobileItems: ["About Us", "Meet The Risers", "Culture", "Testimonials"],
  },
];

export const plainLinks = [
  { label: "Work", href: "/work/", badge: "25" },
  { label: "Careers", href: "/careers/" },
  { label: "Blog", href: "/blog/" },
  { label: "Webinar", href: "/webinar/" },
];
