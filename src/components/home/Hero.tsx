import { RiseHeader } from "@/components/header/RiseHeader";
import { PlatformLogoStrip } from "./PlatformLogoStrip";

export function HomeHero() {
  return (
    <section className="r7-home-hero">
      <div className="r7-hero-media" aria-hidden="true">
        <img
          src="https://rise-atseven.transforms.svdcdn.com/production/images/Pooky-Rechargable-Doorstop-Cordless-100-Straight-Empire-Pendant-Silk-Ikat-Shade-in-Black-and-Cream-Atlas-44-Single-chukka-Cordless-95-scaled-1-1.jpg?w=2560&h=1707&q=100&auto=format&fit=crop&dm=1750847623&s=2e6f5684a2dcbdbd148a651a17aafe47"
          alt=""
          className="r7-hero-media-img"
        />

        <div className="r7-hero-media-overlay" />
        <div className="r7-hero-media-blur" />
      </div>

      <RiseHeader />

      <div className="r7-hero-center">
        <div className="r7-awards-block">
          <p className="r7-awards-eyebrow">
            #1 Most Recommended
            <br />
            Content Marketing Agency
          </p>

          <div className="r7-awards-row" aria-hidden="true">
            <span className="r7-awards-laurel">‹</span>

            <span className="r7-award-mini">
              Global
              <br />
              Search
              <br />
              Awards
            </span>

            <span className="r7-award-mark">▾▾▾</span>

            <span className="r7-award-mini">
              UK Social
              <br />
              Media Awards
            </span>

            <span className="r7-awards-laurel">›</span>
          </div>
        </div>

        <h1 className="r7-hero-headline">
          <span className="r7-hero-headline-row">
            <span>We</span>
            <span>Create</span>
          </span>

          <span className="r7-hero-headline-row r7-hero-headline-row-second">
            <span>Category</span>

            <span className="r7-hero-inline-image-wrap" aria-hidden="true">
              <img
                src="https://rise-atseven.transforms.svdcdn.com/production/images/b2087e0cd3f699d3efc76f809ec72a85a6ab378e-1080x1350.jpg?w=200&h=200&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847630&s=a668733e8ced1733809794da9c15f062"
                alt=""
                className="r7-hero-inline-image"
              />
            </span>

            <span>Leaders</span>
          </span>
        </h1>

        <p className="r7-hero-subtitle">on every searchable platform</p>
        <PlatformLogoStrip />
      </div>

      <div className="r7-hero-bottom-left">
        Organic media planners creating, distributing &amp; optimising campaigns.
      </div>

      <div className="r7-hero-bottom-right">
        4 Global Offices serving UK, USA (New York) &amp; EU
      </div>
    </section>
  );
}