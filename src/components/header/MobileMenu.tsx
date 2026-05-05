"use client";

import { useEffect, useState } from "react";
import { dropdowns, plainLinks, type NavDropdown } from "@/data/navigation";
import { RiseLogo } from "./RiseLogo";
import { GetInTouchButton } from "./GetInTouchButton";

type MobileMenuProps = {
  open: boolean;
  onClose: () => void;
};

type MobileAccordionProps = {
  group: NavDropdown;
  activeKey: string | null;
  setActiveKey: (key: string | null) => void;
};

function MobileMenuIcon({
  open,
  onClick,
  label,
}: {
  open: boolean;
  onClick: () => void;
  label: string;
}) {
  return (
    <button
      type="button"
      className="r7-mobile-trigger"
      onClick={onClick}
      aria-label={label}
      aria-expanded={open}
    >
      <span className="r7-mobile-trigger-bars">
        <span className={`r7-mobile-trigger-bar-wrap r7-mobile-trigger-bar-top ${open ? "is-open" : ""}`}>
          <span className="r7-mobile-trigger-bar" />
        </span>

        <span className={`r7-mobile-trigger-bar-wrap r7-mobile-trigger-bar-bottom ${open ? "is-open" : ""}`}>
          <span className="r7-mobile-trigger-bar" />
        </span>
      </span>
    </button>
  );
}

function MobileAccordion({ group, activeKey, setActiveKey }: MobileAccordionProps) {
  const isOpen = activeKey === group.key;

  function toggleAccordion() {
    setActiveKey(isOpen ? null : group.key);
  }

  return (
    <div className="r7-mobile-accordion">
      <div className="r7-mobile-accordion-head">
        <a href={group.href} className="r7-mobile-main-link">
          {group.label}
        </a>

        <button
          type="button"
          className={`r7-mobile-accordion-toggle ${isOpen ? "is-open" : ""}`}
          onClick={toggleAccordion}
          aria-label={`${isOpen ? "Close" : "Open"} ${group.label} menu`}
          aria-expanded={isOpen}
        >
          <span className="r7-mobile-plus-line r7-mobile-plus-line-x" />
          <span className="r7-mobile-plus-line r7-mobile-plus-line-y" />
        </button>
      </div>

      <div className={`r7-mobile-submenu-shell ${isOpen ? "is-open" : ""}`}>
        <div className="r7-mobile-submenu-inner">
          <div className="r7-mobile-submenu-list">
            {group.mobileItems.map((item, index) => (
              <a
                key={item}
                href="#"
                className="r7-mobile-submenu-link"
                style={{
                  transitionDelay: isOpen ? `${index * 45}ms` : "0ms",
                }}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export function MobileMenu({ open, onClose }: MobileMenuProps) {
  const [activeKey, setActiveKey] = useState<string | null>(null);

  useEffect(() => {
    document.body.classList.toggle("menu-locked", open);

    if (!open) {
      setActiveKey(null);
    }

    return () => {
      document.body.classList.remove("menu-locked");
    };
  }, [open]);

  return (
    <div className={`r7-mobile-overlay ${open ? "is-open" : ""}`} aria-hidden={!open}>
      <div className="r7-mobile-panel" role="dialog" aria-modal="true" aria-label="Mobile navigation">
        <div className="r7-mobile-panel-top">
          <RiseLogo className="text-[31px]" />

          <MobileMenuIcon open={open} onClick={onClose} label="Close menu" />
        </div>

        <nav className="r7-mobile-menu-content" aria-label="Mobile menu">
          <div className="r7-mobile-menu-list">
            {dropdowns.map((group) => (
              <MobileAccordion
                key={group.key}
                group={group}
                activeKey={activeKey}
                setActiveKey={setActiveKey}
              />
            ))}

            {plainLinks.map((link) => (
              <a key={link.label} href={link.href} className="r7-mobile-main-link r7-mobile-plain-link">
                {link.label}
                {link.badge ? <span className="r7-mobile-work-badge">{link.badge}</span> : null}
              </a>
            ))}
          </div>
        </nav>

        <div className="r7-mobile-menu-cta">
          <GetInTouchButton />
        </div>
      </div>
    </div>
  );
}

export { MobileMenuIcon };