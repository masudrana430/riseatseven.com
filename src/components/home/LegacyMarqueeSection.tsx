"use client";

import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
} from "react";
import gsap from "gsap";

type LegacyItem = {
  text: string;
  image: string;
  alt: string;
};

const legacyItems: LegacyItem[] = [
  {
    text: "Chasing Consumers",
    image:
      "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-25-at-14.49.00.png?w=1600&h=1600&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750859361&s=8df7953c8590164f1507ce725ef56bd7",
    alt: "Chasing Consumers",
  },
  {
    text: "Not Algorithms",
    image:
      "https://rise-atseven.transforms.svdcdn.com/production/images/IMG_5023.jpg?w=1600&h=1600&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750846538&s=b3a59f30ae95b2098230edc2137e02f7",
    alt: "Not Algorithms",
  },
];

export function LegacyMarqueeSection() {
  const trackRef = useRef<HTMLDivElement | null>(null);

  const [cursor, setCursor] = useState({
    visible: false,
    x: 0,
    y: 0,
  });

  const renderedItems = useMemo(() => {
    const baseItems = Array.from({ length: 8 }, (_, index) => {
      return legacyItems[index % legacyItems.length];
    });

    return [...baseItems, ...baseItems];
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let x = 0;
    let halfWidth = track.scrollWidth / 2;
    let lastScrollY = window.scrollY;
    let scrollBoost = 0;

    const baseSpeed = 70;

    const updateWidth = () => {
      halfWidth = track.scrollWidth / 2;
    };

    const handleScroll = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastScrollY;

      scrollBoost = gsap.utils.clamp(-480, 480, delta * 16);
      lastScrollY = currentY;
    };

    const tick = () => {
      const delta = gsap.ticker.deltaRatio(60) / 60;

      scrollBoost *= 0.88;

      x -= baseSpeed * delta;
      x -= scrollBoost * delta;

      if (halfWidth > 0) {
        x = gsap.utils.wrap(-halfWidth, 0, x);
      }

      gsap.set(track, {
        x,
        force3D: true,
      });
    };

    updateWidth();

    gsap.ticker.add(tick);
    window.addEventListener("resize", updateWidth);
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      gsap.ticker.remove(tick);
      window.removeEventListener("resize", updateWidth);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <section className="r7lm-section">
      <a
        href="/connect-with-us/"
        className="r7lm-link"
        aria-label="Send Us Your Brief"
        onMouseEnter={() => {
          setCursor((value) => ({
            ...value,
            visible: true,
          }));
        }}
        onMouseLeave={() => {
          setCursor((value) => ({
            ...value,
            visible: false,
          }));
        }}
        onMouseMove={(event) => {
          setCursor({
            visible: true,
            x: event.clientX,
            y: event.clientY,
          });
        }}
      >
        <div
          className={`r7lm-brief-cursor ${
            cursor.visible ? "is-visible" : ""
          }`}
          style={
            {
              "--brief-x": `${cursor.x}px`,
              "--brief-y": `${cursor.y}px`,
            } as CSSProperties
          }
        >
          <span className="r7lm-brief-window">
            <span className="r7lm-brief-line r7lm-brief-current">
              <span>Send Us Your Brief</span>
              <span className="r7lm-brief-arrow">↗</span>
            </span>

            <span className="r7lm-brief-line r7lm-brief-next">
              <span>Send Us Your Brief</span>
              <span className="r7lm-brief-arrow">↗</span>
            </span>
          </span>
        </div>

        <div className="r7lm-viewport">
          <div ref={trackRef} className="r7lm-track">
            {renderedItems.map((item, index) => (
              <div key={`${item.text}-${index}`} className="r7lm-item">
                <h2 className="r7lm-heading">{item.text}</h2>

                <div className="r7lm-image-card">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="r7lm-image"
                    draggable={false}
                  />
                </div>
              </div>
            ))}
          </div>

          
        </div>
      </a>
    </section>
  );
}