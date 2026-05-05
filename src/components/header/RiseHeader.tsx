"use client";

import { useEffect, useRef, useState } from "react";
import { dropdowns, plainLinks, type NavDropdown } from "@/data/navigation";
// import { MobileMenu } from "./MobileMenu";
import { RiseLogo } from "./RiseLogo";
import { GetInTouchButton } from "./GetInTouchButton";
import { DesktopNavPill } from "./DesktopNavPill";
// import { useEffect, useRef, useState } from "react";

import { MobileMenu, MobileMenuIcon } from "./MobileMenu";

type ActiveKey = NavDropdown["key"] | null;

function Hamburger({
  open,
  onClick,
}: {
  open: boolean;
  onClick: () => void;
}) {
  return (
    <div className="r7-mobile-menu-btn">
      <MobileMenuIcon open={open} onClick={onClick} label={open ? "Close menu" : "Open menu"} />
    </div>
  );
}

function DesktopNavItem({
  label,
  href,
  active,
  badge,
  onMouseEnter,
}: {
  label: string;
  href: string;
  active?: boolean;
  badge?: string;
  onMouseEnter?: () => void;
}) {
  return (
    <a
      href={href}
      onMouseEnter={onMouseEnter}
      onFocus={onMouseEnter}
      className={`r7-nav-item ${active ? "r7-nav-item-active" : ""}`}
    >
      {badge ? <span className="r7-work-badge">{badge}</span> : null}
      <span className="r7-nav-text">{label}</span>
    </a>
  );
}

type ServiceMenuItem = {
  label: string;
  href: string;
  image: string;
};

const serviceMenuItems: ServiceMenuItem[] = [
  {
    label: "Search & Growth Strategy",
    href: "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-23-at-23.14.49.png?w=2000&h=2000&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847626&s=a51fa90e59f4de7a51395aaed8e58428 ",
    image:
      "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-23-at-23.14.49.png?w=2000&h=2000&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847626&s=a51fa90e59f4de7a51395aaed8e58428",
  },
  {
    label: "Onsite SEO",
    href: "/services/onsite-seo/",
    image:
      "https://rise-atseven.transforms.svdcdn.com/production/images/WhatsApp-Image-2025-06-03-at-08.34.50.jpeg?w=2000&h=2000&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1766399268&s=7b53d90905d984816762e873a47f385d",
  },
  {
    label: "Content Experience",
    href: "/services/content-experience/",
    image:
      "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-23-at-23.16.14.png?w=2000&h=2000&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847627&s=0eac1033a387c2e512f40f9edecda2a3",
  },
  {
    label: "B2B Marketing",
    href: "/services/b2b-marketing/",
    image: "/assets/services/b2b-marketing.webp",
  },
  {
    label: "Digital PR",
    href: "/services/digital-pr/",
    image: "/assets/services/digital-pr.webp",
  },
  {
    label: "Social Media & Campaigns",
    href: "/services/social-media-campaigns/",
    image: "/assets/services/social-media.webp",
  },
  {
    label: "Data & Insights",
    href: "/services/data-insights/",
    image: "/assets/services/data-insights.webp",
  },
  {
    label: "Social SEO/Search",
    href: "/services/social-seo-search/",
    image: "/assets/services/social-seo.webp",
  },
];

function ServiceMenuLink({
  item,
  onHover,
}: {
  item: ServiceMenuItem;
  onHover: () => void;
}) {
  return (
    <a
      href={item.href}
      className="r7-service-menu-link"
      onMouseEnter={onHover}
      onFocus={onHover}
    >
      <span className="r7-service-menu-mask">
        <span className="r7-service-menu-line r7-service-menu-line-current">
          {item.label}
        </span>
        <span className="r7-service-menu-line r7-service-menu-line-next">
          {item.label}
        </span>
      </span>
    </a>
  );
}

type ImageMenuItem = {
  label: string;
  href: string;
  image: string;
};

const internationalMenuItems: ImageMenuItem[] = [
  {
    label: "US Digital PR",
    href: "/international/us-digital-pr/",
    image: "/assets/international/us-digital-pr.webp",
  },
  {
    label: "Spain Digital PR",
    href: "/international/spain-digital-pr/",
    image: "/assets/international/spain-digital-pr.webp",
  },
  {
    label: "Germany Digital PR",
    href: "/international/germany-digital-pr/",
    image: "/assets/international/germany-digital-pr.webp",
  },
  {
    label: "Netherlands Digital PR",
    href: "/international/netherlands-digital-pr/",
    image: "/assets/international/netherlands-digital-pr.webp",
  },
];

const aboutMenuItems: ImageMenuItem[] = [
  {
    label: "About Us",
    href: "/about/",
    image: "/assets/about/about-us.webp",
  },
  {
    label: "Meet The Risers",
    href: "/about/meet-the-risers/",
    image: "/assets/about/meet-the-risers.webp",
  },
  {
    label: "Culture",
    href: "/about/culture/",
    image: "/assets/about/culture.webp",
  },
  {
    label: "Testimonials",
    href: "/about/testimonials/",
    image: "/assets/about/testimonials.webp",
  },
];

function DropdownHoverLink({
  item,
  onHover,
}: {
  item: ImageMenuItem;
  onHover: () => void;
}) {
  return (
    <a
      href={item.href}
      className="r7-dropdown-hover-link"
      onMouseEnter={onHover}
      onFocus={onHover}
    >
      <span className="r7-dropdown-hover-mask">
        <span className="r7-dropdown-hover-line r7-dropdown-hover-line-current">
          {item.label}
        </span>
        <span className="r7-dropdown-hover-line r7-dropdown-hover-line-next">
          {item.label}
        </span>
      </span>
    </a>
  );
}

function ServicesDropdown({ group }: { group: NavDropdown }) {
  const [activeIndex, setActiveIndex] = useState(0);

  const firstColumn = serviceMenuItems.slice(0, 4);
  const secondColumn = serviceMenuItems.slice(4);

  return (
    <div className="r7-dropdown-card r7-mega-dropdown-position">
      <div className="grid h-full grid-cols-[285px_270px_248px]">
        <div className="flex items-center pl-[28px]">
          <div>
            <p className="mb-[10px] text-[11px] font-normal italic leading-none tracking-[-0.35px] text-black/65">
              Core Services
            </p>

            <div className="space-y-0">
              {firstColumn.map((item, index) => (
                <ServiceMenuLink
                  key={item.label}
                  item={item}
                  onHover={() => setActiveIndex(index)}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="flex items-center pl-[0px]">
          <div className="mt-[21px] space-y-0">
            {secondColumn.map((item, index) => (
              <ServiceMenuLink
                key={item.label}
                item={item}
                onHover={() => setActiveIndex(index + 4)}
              />
            ))}
          </div>
        </div>

        <div className="relative h-[193px] overflow-hidden rounded-[10px] bg-[#d8d2c9]">
          {serviceMenuItems.map((item, index) => (
            <div
              key={item.label}
              className={`r7-service-menu-image ${
                activeIndex === index ? "is-active" : ""
              }`}
              style={{
                backgroundImage: `url(${item.image})`,
              }}
            />
          ))}

          <a href={group.href} className="r7-service-view-button">
            View All Services&nbsp;↗
          </a>
        </div>
      </div>
    </div>
  );
}

function InternationalDropdown({ group }: { group: NavDropdown }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="r7-dropdown-card r7-mega-dropdown-position">
      <div className="grid h-full grid-cols-[555px_248px]">
        <div className="flex items-center pl-[28px]">
          <div className="space-y-0">
            {internationalMenuItems.map((item, index) => (
              <DropdownHoverLink
                key={item.label}
                item={item}
                onHover={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>

        <div className="relative h-[193px] w-[248px] overflow-hidden rounded-[10px] bg-[#d8d2c9]">
          {internationalMenuItems.map((item, index) => (
            <div
              key={item.label}
              className={`r7-dropdown-menu-image ${
                activeIndex === index ? "is-active" : ""
              }`}
              style={{
                backgroundImage: `url(${item.image})`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function AboutDropdown({ group }: { group: NavDropdown }) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="r7-dropdown-card r7-mega-dropdown-position">
      <div className="grid h-full grid-cols-[555px_248px]">
        <div className="flex items-center pl-[28px]">
          <div className="space-y-0">
            {aboutMenuItems.map((item, index) => (
              <DropdownHoverLink
                key={item.label}
                item={item}
                onHover={() => setActiveIndex(index)}
              />
            ))}
          </div>
        </div>

        <div className="relative h-[193px] w-[248px] overflow-hidden rounded-[10px] bg-[#d8d2c9]">
          {aboutMenuItems.map((item, index) => (
            <div
              key={item.label}
              className={`r7-dropdown-menu-image ${
                activeIndex === index ? "is-active" : ""
              }`}
              style={{
                backgroundImage: `url(${item.image})`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function DesktopDropdown({ group }: { group: NavDropdown }) {
  if (group.key === "services") return <ServicesDropdown group={group} />;
  if (group.key === "international")
    return <InternationalDropdown group={group} />;
  return <AboutDropdown group={group} />;
}

export function ReportBanner() {
  return (
    <a
      href="#"
      className="r7-report-banner relative z-50 mx-[5px] mt-[12px] flex h-[24px] items-center justify-center rounded-full bg-[#b3ffe9] px-4 text-center text-[10px] font-semibold leading-none text-black max-[640px]:mx-[10px] max-[640px]:mt-[10px] max-[640px]:h-[28px] max-[640px]:text-[10px]"
    >
      <span className="mr-1">🚨</span>
      <span>Where are your customers actually searching? Download the report</span>
    </a>
  );
}

export function RiseHeader() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [active, setActive] = useState<ActiveKey>(null);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const activeDropdown = dropdowns.find((item) => item.key === active);

  function openDropdown(key: NavDropdown["key"]) {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActive(key);
  }

  function closeDropdown() {
    closeTimer.current = setTimeout(() => {
      setActive(null);
    }, 90);
  }

  function closeImmediately() {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActive(null);
  }

  useEffect(() => {
    return () => {
      if (closeTimer.current) clearTimeout(closeTimer.current);
    };
  }, []);

  return (
    <>
      <header
        className="r7-site-header"
        onMouseLeave={closeDropdown}
        onMouseEnter={() => {
          if (closeTimer.current) clearTimeout(closeTimer.current);
        }}
      >
        {active ? <div className="r7-hero-hover-blur" /> : null}

        <RiseLogo className="text-[30px] max-[640px]:text-[28px]" />

        <nav className="r7-desktop-nav">
          <DesktopNavPill
            active={active}
            openDropdown={openDropdown}
            closeImmediately={closeImmediately}
          />
        </nav>

        <div className="r7-contact-btn">
          <GetInTouchButton />
        </div>

        <Hamburger open={mobileOpen} onClick={() => setMobileOpen((value) => !value)} />

        {activeDropdown ? <DesktopDropdown group={activeDropdown} /> : null}
      </header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
