"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type LegacyCard = {
  title: string;
  paragraphs: string[];
  image: string;
  alt: string;
  theme: "black" | "mint" | "white";
  initialRotate: number;
};

const cards: LegacyCard[] = [
  {
    title: "Pioneers",
    theme: "black",
    initialRotate: -2.7,
    image:
      "https://rise-atseven.transforms.svdcdn.com/production/images/b2087e0cd3f699d3efc76f809ec72a85a6ab378e-1080x1350.jpg?w=2000&h=2000&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847630&s=69735376fddade35059585570e316087",
    alt: "Pioneers",
    paragraphs: [
      "We’re dedicated to creating the industry narrative that others follow 3 years from now. We paved the path for creative SEO, multi-channel search with Digital PR, and Social Search and we will continue to do it.",
      "We’re on a mission to be the first search-first agency to win a Cannes Lion disrupting the status quo.",
    ],
  },
  {
    title: "Award Winning",
    theme: "mint",
    initialRotate: 4,
    image:
      "https://rise-atseven.transforms.svdcdn.com/production/images/d4df0d30-d590-4e94-9056-9491f4beacba.JPG?w=2000&h=2000&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847714&s=9b6e0a98f94b563a89840f3250cd1656",
    alt: "Award Winning",
    paragraphs: [
      "A roll top bath full of 79 awards. Voted The Drum’s best agency outside of London. We are official judges for industry awards including Global Search Awards and Global Content Marketing Awards.",
    ],
  },
  {
    title: "Speed",
    theme: "white",
    initialRotate: -3,
    image:
      "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-23-at-23.15.19.png?w=2000&h=2000&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847626&s=211fe5c665b93a978c596f9070aed44c",
    alt: "Speed",
    paragraphs: [
      "People ask us why we are called Rise at Seven? Ever heard the saying Early Bird catches the worm? Google is moving fast, but humans are moving faster. We chase consumers, not algorithms. We’ve created a service which takes ideas to result within 60 minutes.",
    ],
  },
];

export function LegacyCardsSection() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const section = sectionRef.current;
    const cardElements = cardRefs.current.filter(Boolean) as HTMLDivElement[];

    if (!section || cardElements.length === 0) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width: 768px)", () => {
        gsap.set(cardElements[0], {
          zIndex: 30,
          y: -42,
          x: -8,
          rotate: -4.8,
          scale: 0.92,
          opacity: 1,
          transformOrigin: "50% 50%",
        });

        gsap.set(cardElements[1], {
          zIndex: 20,
          y: 205,
          x: 8,
          rotate: 5.2,
          scale: 0.92,
          opacity: 1,
          transformOrigin: "50% 50%",
        });

        gsap.set(cardElements[2], {
          zIndex: 10,
          y: 275,
          x: 18,
          rotate: 7,
          scale: 0.92,
          opacity: 1,
          transformOrigin: "50% 50%",
        });

        const timeline = gsap.timeline({
          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.9,
            invalidateOnRefresh: true,
          },
        });

        timeline
          .to(
            cardElements[0],
            {
              y: -760,
              x: -120,
              rotate: -13,
              scale: 0.92,
              ease: "none",
              duration: 1,
            },
            0,
          )
          .to(
            cardElements[1],
            {
              y: -42,
              x: -8,
              rotate: -4.2,
              scale: 0.92,
              ease: "none",
              duration: 1,
            },
            0,
          )
          .to(
            cardElements[2],
            {
              y: 205,
              x: 8,
              rotate: 5.2,
              scale: 0.92,
              ease: "none",
              duration: 1,
            },
            0,
          )
          .to(
            cardElements[1],
            {
              y: -760,
              x: 120,
              rotate: 13,
              scale: 0.92,
              ease: "none",
              duration: 1,
            },
            1,
          )
          .to(
            cardElements[2],
            {
              y: -42,
              x: -8,
              rotate: -4.2,
              scale: 0.92,
              ease: "none",
              duration: 1,
            },
            1,
          );

        timeline
          .to(
            cardElements[0],
            {
              yPercent: -125,
              y: -220,
              rotate: -10,
              scale: 0.94,
              ease: "none",
              duration: 1,
            },
            0,
          )
          .to(
            cardElements[1],
            {
              y: -8,
              rotate: 3,
              scale: 1,
              ease: "none",
              duration: 1,
            },
            0,
          )
          .to(
            cardElements[2],
            {
              y: 44,
              rotate: -2,
              scale: 0.985,
              ease: "none",
              duration: 1,
            },
            0,
          )
          .to(
            cardElements[1],
            {
              yPercent: -125,
              y: -220,
              rotate: 10,
              scale: 0.94,
              ease: "none",
              duration: 1,
            },
            1,
          )
          .to(
            cardElements[2],
            {
              y: -4,
              rotate: -3,
              scale: 1,
              ease: "none",
              duration: 1,
            },
            1,
          );

        return () => {
          timeline.scrollTrigger?.kill();
          timeline.kill();
        };
      });

      mm.add("(max-width: 767px)", () => {
        gsap.set(cardElements, {
          clearProps: "all",
        });
      });

      return () => {
        mm.revert();
      };
    }, section);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} className="r7cards-section">
      <div className="r7cards-sticky">
        <div className="r7cards-label">Legacy In The Making</div>

        <div className="r7cards-stage">
          {cards.map((card, index) => (
            <div
              key={card.title}
              ref={(node) => {
                cardRefs.current[index] = node;
              }}
              className="r7cards-card-wrap"
            >
              <div className="r7cards-outer">
                <span className="r7cards-paper-shadow" aria-hidden="true" />

                <article className={`r7cards-card r7cards-card-${card.theme}`}>
                  <div className="r7cards-content">
                    <div className="r7cards-image-wrap">
                      <img
                        src={card.image}
                        alt={card.alt}
                        className="r7cards-image"
                        draggable={false}
                      />
                    </div>

                    <div className="r7cards-copy">
                      <h2 className="r7cards-title">{card.title}</h2>

                      <div className="r7cards-text">
                        {card.paragraphs.map((paragraph) => (
                          <p key={paragraph}>{paragraph}</p>
                        ))}
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
