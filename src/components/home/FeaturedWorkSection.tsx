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
  image: string;
  color: string;
  hoverTitle: string;
};

const featuredProjects: FeaturedProject[] = [
  {
    title: "SIXT",
    meta: "[2023-2025]",
    category: "Car rental",
    href: "/work/sixt/",
    color: "#cb7b3a",
    hoverTitle: "Driving organic visibility for SIXT",
    image:
      "https://rise-atseven.transforms.svdcdn.com/production/images/Logos/Client/Black/sixt-1.jpg?w=1600&h=1200&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847611&s=b5b3d324e0455061c60fe917b85d106c",
  },
  {
    title: "Dojo - B2B",
    meta: "[2021-2025]",
    category: "Card Machines",
    href: "/work/dojo/",
    color: "#fdd8c4",
    hoverTitle: "A B2B success story for Dojo card machines",
    image:
      "https://rise-atseven.transforms.svdcdn.com/production/images/dojo-go-product-shot-1.jpg?w=1600&h=1200&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847714&s=22e15e8ff19558f300183bc7ebc1b0ff",
  },
  {
    title: "Magnet Trade - B2B",
    meta: "[2023-2024]",
    category: "B2B",
    href: "/work/magnet-trade-b2b/",
    color: "#d8c4fd",
    hoverTitle: "A full service SEO success story 170%+ increase",
    image:
      "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2026-02-07-at-17.01.43.png?w=1600&h=1200&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1770483725&s=f1d98712e630df66aaf9b713ce70db2d",
  },
  {
    title: "Leading E Sim brand globally",
    meta: "[2023-2025]",
    category: "Esims",
    href: "/work/esim/",
    color: "#ca7b3a",
    hoverTitle: "Increasing brand and non brand visibility UK/ES",
    image:
      "https://rise-atseven.transforms.svdcdn.com/production/images/eSIM-Europe-p1-what-is-eSIM-2-1.jpg?w=1600&h=1200&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1761234573&s=9ef283005801f5f7607377f62cc54be8",
  },
  {
    title: "JD Sports",
    meta: "[2025]",
    category: "Trainers",
    href: "/work/jd-sports/",
    color: "#459dd0",
    hoverTitle: "65% up YoY in clicks for JD Sports FR, IT, ES",
    image:
      "https://rise-atseven.transforms.svdcdn.com/production/images/maxresdefault_2025-10-22-141838_nmnu.jpg?w=1600&h=1200&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1761142718&s=19d31221b717bb829b65ed531322d432",
  },
  {
    title: "Parkdean Resorts",
    meta: "[2018-2025]",
    category: "Travel",
    href: "/work/parkdean-resorts/",
    color: "#b6d8ff",
    hoverTitle: "Search growth for UK holiday parks",
    image:
      "https://rise-atseven.transforms.svdcdn.com/production/images/easter-breaks.jpg?w=1600&h=1200&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847715&s=e29b3435cbe0e68f30856e79714a50f3",
  },
  {
    title: "Pooky",
    meta: "[2025]",
    category: "Homeware",
    href: "/work/pooky/",
    color: "#d6b985",
    hoverTitle: "Creating searchable demand for interiors",
    image:
      "https://rise-atseven.transforms.svdcdn.com/production/images/Pooky-Rechargable-Doorstop-Cordless-100-Straight-Empire-Pendant-Silk-Ikat-Shade-in-Black-and-Cream-Atlas-44-Single-chukka-Cordless-95-scaled-1-1.jpg?w=1600&h=1200&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847623&s=5e3e3b48f331495fa309422c715b5b6d",
  },
];

function getTitleStep() {
  if (typeof window === "undefined") return 58;
  if (window.innerWidth >= 1920) return 72;
  if (window.innerWidth >= 1280) return 62;
  return 56;
}

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
  onActive,
  setCursor,
}: {
  project: FeaturedProject;
  index: number;
  onActive: (index: number) => void;
  setCursor: (visible: boolean, label?: string) => void;
}) {
  const [mask, setMask] = useState({ x: 50, y: 50 });

  function updateMask(event: React.MouseEvent<HTMLAnchorElement>) {
    const rect = event.currentTarget.getBoundingClientRect();

    setMask({
      x: ((event.clientX - rect.left) / rect.width) * 100,
      y: ((event.clientY - rect.top) / rect.height) * 100,
    });
  }

  return (
    <a
      href={project.href}
      className="r7-fw-card"
      style={
        {
          "--mask-x": `${mask.x}%`,
          "--mask-y": `${mask.y}%`,
          "--card-color": project.color,
        } as CSSProperties
      }
      onMouseEnter={(event) => {
        updateMask(event);
        onActive(index);
        setCursor(true, project.category);
      }}
      onMouseMove={updateMask}
      onMouseLeave={() => setCursor(false)}
    >
      <div className="r7-fw-card-image-shell">
        <img
          src={project.image}
          alt={project.title}
          className="r7-fw-card-image"
          draggable={false}
        />
      </div>

      <div className="r7-fw-card-mask-layer">
        <h3 className="r7-fw-card-mask-title">{project.hoverTitle}</h3>

        <div className="r7-fw-card-mask-bottom">
          <span>{project.category}</span>
          <span className="r7-fw-card-mask-icon">
            <ArrowIcon />
          </span>
        </div>
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
  const cardWrapRefs = useRef<Array<HTMLDivElement | null>>([]);

  const [activeIndex, setActiveIndex] = useState(0);
  const [titleStep, setTitleStep] = useState(72);
  const [cursor, setCursorState] = useState({
    visible: false,
    x: 0,
    y: 0,
    label: "View",
  });

  const titleOffset = activeIndex * -titleStep - titleStep / 2;

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
    const sectionEl = sectionRef.current;
    const stickyEl = stickyRef.current;
    const imagesEl = imagesRef.current;
    const cardEl = cardWrapRefs.current[index];

    if (!sectionEl || !stickyEl || !imagesEl || !cardEl) return;

    const maxScroll = Math.max(
      1,
      sectionEl.offsetHeight - stickyEl.offsetHeight,
    );

    const maxTranslate = Math.max(
      1,
      imagesEl.scrollHeight - stickyEl.offsetHeight,
    );

    const progress = Math.min(1, Math.max(0, cardEl.offsetTop / maxTranslate));

    window.scrollTo({
      top: sectionEl.offsetTop + maxScroll * progress,
      behavior: "smooth",
    });

    setActiveIndex(index);
  }

  useEffect(() => {
    const updateTitleStep = () => {
      setTitleStep(getTitleStep());
    };

    updateTitleStep();

    window.addEventListener("resize", updateTitleStep);

    return () => {
      window.removeEventListener("resize", updateTitleStep);
    };
  }, []);

  useEffect(() => {
    const sectionEl = sectionRef.current;
    const stickyEl = stickyRef.current;
    const imageColumnEl = imagesRef.current;

    if (!sectionEl || !stickyEl || !imageColumnEl) return;

    const mm = gsap.matchMedia();

    mm.add("(min-width: 1024px)", () => {
      let distance = 0;

      const calculateDistance = () => {
        distance = Math.max(
          0,
          imageColumnEl.scrollHeight - stickyEl.offsetHeight + 56,
        );

        sectionEl.style.height = `${stickyEl.offsetHeight + distance}px`;
      };

      calculateDistance();

      const trigger = ScrollTrigger.create({
        trigger: sectionEl,
        start: "top top",
        end: "bottom bottom",
        scrub: 0.65,
        invalidateOnRefresh: true,
        onRefresh: calculateDistance,
        onUpdate: (self) => {
          gsap.set(imageColumnEl, {
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

      const handleResize = () => {
        calculateDistance();
        ScrollTrigger.refresh();
      };

      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
        trigger.kill();
        sectionEl.style.height = "";
        gsap.set(imageColumnEl, { clearProps: "transform" });
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

              <div className="r7-fw-title-window">
                <div
                  className="r7-fw-title-list"
                  style={
                    {
                      "--r7-title-offset": `${titleOffset}px`,
                    } as CSSProperties
                  }
                >
                  {featuredProjects.map((project, index) => (
                    <button
                      key={project.title}
                      type="button"
                      onMouseEnter={() => {
                        setActiveIndex(index);
                        scrollToProject(index);
                      }}
                      onFocus={() => {
                        setActiveIndex(index);
                        scrollToProject(index);
                      }}
                      className={`r7-fw-title-item ${
                        activeIndex === index ? "is-active" : "is-muted"
                      }`}
                    >
                      <span className="r7-fw-title-text">{project.title}</span>
                      <span className="r7-fw-title-meta">{project.meta}</span>
                    </button>
                  ))}
                </div>
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
                  cardWrapRefs.current[index] = node;
                }}
              >
                <WorkCard
                  project={project}
                  index={index}
                  onActive={setActiveIndex}
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