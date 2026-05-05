"use client";

import { useEffect, useRef, useState } from "react";
import { dropdowns, plainLinks, type NavDropdown } from "@/data/navigation";

type ActiveKey = NavDropdown["key"] | null;

type Props = {
  active: ActiveKey;
  openDropdown: (key: NavDropdown["key"]) => void;
  closeImmediately: () => void;
};

type Pill = {
  width: number;
  left: number;
  opacity: number;
};

export function DesktopNavPill({ active, openDropdown, closeImmediately }: Props) {
  const navRef = useRef<HTMLDivElement | null>(null);
  const refs = useRef<Record<string, HTMLAnchorElement | null>>({});

  const [currentKey, setCurrentKey] = useState<string | null>(null);
  const [pill, setPill] = useState<Pill>({
    width: 0,
    left: 0,
    opacity: 0,
  });

  function movePill(key: string) {
    const link = refs.current[key];
    const nav = navRef.current;

    if (!link || !nav) return;

    const linkRect = link.getBoundingClientRect();
    const navRect = nav.getBoundingClientRect();

    setPill({
      width: linkRect.width,
      left: linkRect.left - navRect.left,
      opacity: 1,
    });
  }

  function handleDropdownEnter(key: NavDropdown["key"]) {
    setCurrentKey(key);
    movePill(key);
    openDropdown(key);
  }

  function handlePlainEnter(key: string) {
    setCurrentKey(key);
    movePill(key);
    closeImmediately();
  }

  function handleLeave() {
    if (active) {
      setCurrentKey(active);
      movePill(active);
      return;
    }

    setCurrentKey(null);
    setPill((prev) => ({
      ...prev,
      opacity: 0,
    }));
  }

  useEffect(() => {
    if (!active) return;

    setCurrentKey(active);

    requestAnimationFrame(() => {
      movePill(active);
    });
  }, [active]);

  useEffect(() => {
    function handleResize() {
      const key = currentKey || active;
      if (!key) return;
      movePill(key);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [currentKey, active]);

  return (
    <div ref={navRef} className="r7-real-nav" onMouseLeave={handleLeave}>
      <div
        className="r7-real-nav-pill"
        style={{
          width: `${pill.width}px`,
          left: `${pill.left}px`,
          opacity: pill.opacity,
        }}
      />

      {dropdowns.map((item) => {
        const isActive = currentKey === item.key;

        return (
          <div key={item.key} className="r7-real-nav-item">
            <a
              ref={(node) => {
                refs.current[item.key] = node;
              }}
              href={item.href}
              className={`r7-real-nav-link ${isActive ? "is-active" : ""}`}
              onMouseEnter={() => handleDropdownEnter(item.key)}
              onFocus={() => handleDropdownEnter(item.key)}
            >
              <span>{item.label}</span>
              <span className="r7-real-nav-plus">+</span>
            </a>
          </div>
        );
      })}

      {plainLinks.map((link) => {
        const key = link.label.toLowerCase();
        const isActive = currentKey === key;

        return (
          <div key={link.label} className="r7-real-nav-item">
            <a
              ref={(node) => {
                refs.current[key] = node;
              }}
              href={link.href}
              className={`r7-real-nav-link ${isActive ? "is-active" : ""}`}
              onMouseEnter={() => handlePlainEnter(key)}
              onFocus={() => handlePlainEnter(key)}
            >
              <span>{link.label}</span>

              {link.badge ? (
                <span className="r7-real-work-badge">{link.badge}</span>
              ) : null}
            </a>
          </div>
        );
      })}
    </div>
  );
}