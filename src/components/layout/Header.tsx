"use client";

import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { navGroups } from "@/data/site";
import { Logo } from "./Logo";

export function Header() {
  const [open, setOpen] = useState(false);
  const [expanded, setExpanded] = useState<string | null>("Services");

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;
    gsap.fromTo(
      ".mobile-menu-item",
      { y: 18, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.45, stagger: 0.035, ease: "power3.out" },
    );
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-r7-cream/95 backdrop-blur-sm">
      <a href="#report" className="block overflow-hidden bg-r7-lime py-2 text-[11px] font-black uppercase tracking-tight text-r7-black">
        <span className="marquee-track flex gap-6 whitespace-nowrap px-4">
          <span>Where are your customers actually searching? Download the report</span>
          <span>Where are your customers actually searching? Download the report</span>
          <span>Where are your customers actually searching? Download the report</span>
          <span>Where are your customers actually searching? Download the report</span>
        </span>
      </a>

      <div className="r7-container flex h-[66px] items-center justify-between px-4">
        <Logo />
        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
          className="relative flex h-12 w-12 flex-col items-center justify-center gap-1.5 rounded-full bg-r7-black text-white"
        >
          <span className={`h-0.5 w-5 rounded-full bg-current transition ${open ? "translate-y-2 rotate-45" : ""}`} />
          <span className={`h-0.5 w-5 rounded-full bg-current transition ${open ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-5 rounded-full bg-current transition ${open ? "-translate-y-2 -rotate-45" : ""}`} />
        </button>
      </div>

      {open ? (
        <div className="fixed inset-x-0 top-[98px] h-[calc(100dvh-98px)] overflow-y-auto bg-r7-black text-white">
          <nav className="r7-container px-4 pb-8 pt-5" aria-label="Mobile navigation">
            <a
              href="#contact"
              className="mobile-menu-item mb-5 flex min-h-14 items-center justify-center rounded-full bg-r7-lime px-6 text-[15px] font-black uppercase tracking-tight text-r7-black"
            >
              Get in touch
            </a>

            <div className="divide-y divide-white/15 border-y border-white/15">
              {navGroups.map((group) => {
                const isExpandable = Boolean(group.children?.length);
                const isExpanded = expanded === group.title;
                return (
                  <div key={group.title} className="mobile-menu-item py-1">
                    <button
                      type="button"
                      onClick={() => (isExpandable ? setExpanded(isExpanded ? null : group.title) : undefined)}
                      className="flex w-full items-center justify-between py-4 text-left text-[29px] font-black uppercase leading-none tracking-[-0.08em]"
                    >
                      <span>
                        {group.title} {group.count ? <em className="align-top text-sm not-italic">{group.count}</em> : null}
                      </span>
                      {isExpandable ? <span className="text-3xl leading-none">{isExpanded ? "−" : "+"}</span> : null}
                    </button>
                    {isExpandable && isExpanded ? (
                      <div className="grid gap-2 pb-5">
                        {group.children?.map((child) => (
                          <a
                            href={child.href}
                            key={child.label}
                            className="rounded-full border border-white/20 px-4 py-3 text-sm font-bold uppercase tracking-tight text-white/85"
                          >
                            {child.label}
                          </a>
                        ))}
                      </div>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
