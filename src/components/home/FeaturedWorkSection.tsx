"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type FeaturedProject = {
  title: string;
  meta: string;
  category: string;
  href: string;
  type: "image" | "cta";
  image?: string;
  color?: string;
  ctaTitle?: string;
};

const featuredProjects: FeaturedProject[] = [
  {
    title: "SIXT",
    meta: "[2023-2025]",
    category: "Car rental",
    href: "/work/sixt/",
    type: "image",
    image:
      "https://rise-atseven.transforms.svdcdn.com/production/images/Logos/Client/Black/sixt-1.jpg?w=1600&h=1200&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847611&s=b5b3d324e0455061c60fe917b85d106c",
  },
  {
    title: "Dojo - B2B",
    meta: "[2021-2025]",
    category: "Card Machines",
    href: "/work/dojo/",
    type: "cta",
    color: "#fdd8c4",
    ctaTitle: "A B2B success story for Dojo card machines",
  },
  {
    title: "Magnet Trade - B2B",
    meta: "[2023-2024]",
    category: "B2B",
    href: "/work/magnet-trade-b2b/",
    type: "image",
    image:
      "https://rise-atseven.transforms.svdcdn.com/production/images/dojo-go-product-shot-1.jpg?w=1600&h=1200&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847714&s=22e15e8ff19558f300183bc7ebc1b0ff",
  },
  {
    title: "Leading E Sim brand globally",
    meta: "[2023-2025]",
    category: "Travel",
    href: "/work/esim/",
    type: "image",
    image:
      "https://rise-atseven.transforms.svdcdn.com/production/images/eSIM-Europe-p1-what-is-eSIM-2-1.jpg?w=1600&h=1200&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1761234573&s=9ef283005801f5f7607377f62cc54be8",
  },
  {
    title: "JD Sports",
    meta: "[2025]",
    category: "Retail",
    href: "/work/jd-sports/",
    type: "image",
    image:
      "https://rise-atseven.transforms.svdcdn.com/production/images/maxresdefault_2025-10-22-141838_nmnu.jpg?w=1600&h=1200&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1761142718&s=19d31221b717bb829b65ed531322d432",
  },
  {
    title: "Parkdean Resorts",
    meta: "[2018-2025]",
    category: "Travel",
    href: "/work/parkdean-resorts/",
    type: "image",
    image:
      "https://rise-atseven.transforms.svdcdn.com/production/images/easter-breaks.jpg?w=1600&h=1200&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847715&s=e29b3435cbe0e68f30856e79714a50f3",
  },
  {
    title: "Pooky",
    meta: "[2025]",
    category: "Homeware",
    href: "/work/pooky/",
    type: "image",
    image:
      "https://rise-atseven.transforms.svdcdn.com/production/images/Pooky-Rechargable-Doorstop-Cordless-100-Straight-Empire-Pendant-Silk-Ikat-Shade-in-Black-and-Cream-Atlas-44-Single-chukka-Cordless-95-scaled-1-1.jpg?w=1600&h=1200&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847623&s=5e3e3b48f331495fa309422c715b5b6d",
  },
];

function ArrowIcon() {
  return (
    <span className="r7-fw-arrow" aria-hidden="true">
      ↗
    </span>
  );
}

function WorkCard({
  project,
  index,
  onHover,
  setCursor,
}: {
  project: FeaturedProject;
  index: number;
  onHover: (index: number) => void;
  setCursor: (visible: boolean, label?: string) => void;
}) {
  const commonProps = {
    href: project.href,
    onMouseEnter: () => {
      onHover(index);
      setCursor(true, project.category);
    },
    onMouseLeave: () => setCursor(false),
  };

  if (project.type === "cta") {
    return (
      <a
        {...commonProps}
        className="r7-fw-card r7-fw-cta-card"
        style={{ backgroundColor: project.color }}
      >
        <h3 className="r7-fw-cta-title">{project.ctaTitle}</h3>

        <div className="r7-fw-cta-bottom">
          <span>{project.category}</span>
          <span className="r7-fw-cta-circle">
            <ArrowIcon />
          </span>
        </div>
      </a>
    );
  }

  return (
    <a {...commonProps} className="r7-fw-card r7-fw-image-card">
      <div className="r7-fw-card-image-shell">
        <img
          src={project.image}
          alt={project.title}
          className="r7-fw-card-image"
          draggable={false}
        />
      </div>

      <div className="r7-fw-card-label-wrap">
        <span className="r7-fw-card-label">
          <span className="r7-fw-card-label-dot" />
          {project.category}
          <ArrowIcon />
        </span>
      </div>
    </a>
  );
}

export function FeaturedWorkSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const stickyRef = useRef<HTMLDivElement | null>(null);
  const imagesRef = useRef<HTMLDivElement | null>(null);
  const cardRefs = useRef<Array<HTMLAnchorElement | null>>([]);
  const scrollTriggerRef = useRef<ScrollTrigger | null>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [cursor, setCursorState] = useState({
    visible: false,
    x: 0,
    y: 0,
    label: "View",
  });

  function setCursor(visible: boolean, label = "View") {
    setCursorState((value) => ({
      ...value,
      visible,
      label,
    }));
  }

  function handleMouseMove(event: React.MouseEvent<HTMLElement>) {
    setCursorState((value) => ({
      ...value,
      x: event.clientX,
      y: event.clientY,
    }));
  }

  function scrollToProject(index: number) {
    const section = sectionRef.current;
    const sticky = stickyRef.current;
    const card = cardRefs.current[index];
    const images = imagesRef.current;

    if (!section || !sticky || !card || !images) return;

    const maxScroll = Math.max(1, section.offsetHeight - sticky.offsetHeight);
    const cardTop = card.offsetTop;
    const imagesHeight = imagesRef.current?.scrollHeight || 1;
    const progress = Math.min(1, Math.max(0, cardTop / imagesHeight));

    window.scrollTo({
      top: section.offsetTop + maxScroll * progress,
      behavior: "smooth",
    });

    setActiveIndex(index);
  }

useEffect(() => {
  const section = sectionRef.current;
  const sticky = stickyRef.current;
  const imageColumn = imagesRef.current;

  if (!section || !sticky || !imageColumn) return;

  const mm = gsap.matchMedia();

  mm.add("(min-width: 1024px)", () => {
    let distance = 0;

    const calculateDistance = () => {
      distance = Math.max(
        0,
        imageColumn.scrollHeight - sticky.offsetHeight + 56,
      );

      section.style.height = `${sticky.offsetHeight + distance}px`;
    };

    calculateDistance();

    const trigger = ScrollTrigger.create({
      trigger: section,
      start: "top top",
      end: "bottom bottom",
      scrub: 0.65,
      invalidateOnRefresh: true,
      onRefresh: calculateDistance,
      onUpdate: (self) => {
        gsap.set(imageColumn, {
          y: -distance * self.progress,
          force3D: true,
        });

        const nextIndex = Math.min(
          featuredProjects.length - 1,
          Math.max(
            0,
            Math.round(self.progress * (featuredProjects.length - 1)),
          ),
        );

        setActiveIndex(nextIndex);
      },
    });

    scrollTriggerRef.current = trigger;

    const handleResize = () => {
      calculateDistance();
      ScrollTrigger.refresh();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      trigger.kill();
      scrollTriggerRef.current = null;
      section.style.height = "";
      gsap.set(imageColumn, { clearProps: "transform" });
    };
  });

  return () => {
    mm.revert();
  };
}, []);

  return (
    <section
      ref={sectionRef}
      className="r7-fw-section"
      onMouseMove={handleMouseMove}
    >
      <div
        className={`r7-fw-cursor ${cursor.visible ? "is-visible" : ""}`}
        style={
          {
            "--cursor-x": `${cursor.x}px`,
            "--cursor-y": `${cursor.y}px`,
          } as CSSProperties
        }
      >
        <span>{cursor.label}</span>
        <ArrowIcon />
      </div>

      <div ref={stickyRef} className="r7-fw-sticky">
        <div className="r7-fw-panel">
          <aside className="r7-fw-left">
            <div className="r7-fw-left-inner">
              <h2 className="r7-fw-eyebrow">Featured Work</h2>

              <div className="r7-fw-title-list">
                {featuredProjects.map((project, index) => (
                  <a
                    key={project.title}
                    href={project.href}
                    onMouseEnter={() => scrollToProject(index)}
                    className={`r7-fw-title-item ${
                      activeIndex === index ? "is-active" : "is-muted"
                    }`}
                  >
                    <span className="r7-fw-title-text">{project.title}</span>
                    <span className="r7-fw-title-meta">{project.meta}</span>
                  </a>
                ))}
              </div>
            </div>
          </aside>

          <div ref={imagesRef} className="r7-fw-images">
            <div className="r7-fw-mobile-title">
              <h2>Featured Work</h2>
            </div>

            {featuredProjects.map((project, index) => (
              <div
                key={project.title}
                ref={(node) => {
                  cardRefs.current[index] = node?.querySelector("a") || null;
                }}
              >
                <WorkCard
                  project={project}
                  index={index}
                  onHover={setActiveIndex}
                  setCursor={setCursor}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
