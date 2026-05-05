type DemandButtonProps = {
  href: string;
  label: string;
  variant?: "primary" | "ghost";
};

function ArrowIcon() {
  return (
    <span className="r7-demand-btn-arrow" aria-hidden="true">
      ↗
    </span>
  );
}

function DemandButton({
  href,
  label,
  variant = "primary",
}: DemandButtonProps) {
  return (
    <a
      href={href}
      className={`r7-demand-btn ${
        variant === "primary" ? "r7-demand-btn-primary" : "r7-demand-btn-ghost"
      }`}
    >
      <span className="r7-demand-btn-window">
        <span className="r7-demand-btn-line r7-demand-btn-line-current">
          <span>{label}</span>
          <ArrowIcon />
        </span>

        <span className="r7-demand-btn-line r7-demand-btn-line-next">
          <span>{label}</span>
          <ArrowIcon />
        </span>
      </span>
    </a>
  );
}

export function DemandDiscoverySection() {
  return (
    <section className="r7-demand-section">
      <div className="r7-demand-inner">
        <div className="r7-demand-mobile-buttons">
          <DemandButton href="/about/" label="Our Story" />
          <DemandButton href="/services/" label="Our Services" variant="ghost" />
        </div>

        <div className="r7-demand-copy">
          <p>
            A global team of search-first content marketers engineering semantic
            relevancy &amp; category signals for both the internet and people
          </p>
        </div>

        <div className="r7-demand-main">
          <h2 className="r7-demand-heading">
            <span className="r7-demand-heading-row">
              <span className="r7-demand-word">Driving</span>
              <span className="r7-demand-word">Demand</span>
              <span className="r7-demand-word">&amp;</span>
              <span className="r7-demand-word">Discovery</span>

              <span className="r7-demand-inline-image-wrap" aria-hidden="true">
                <img
                  src="https://rise-atseven.transforms.svdcdn.com/production/images/b2087e0cd3f699d3efc76f809ec72a85a6ab378e-1080x1350.jpg?w=200&h=200&q=90&auto=format&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847630&s=2cf16743338412726c0b8ad40904233f"
                  alt=""
                  className="r7-demand-inline-image"
                />
              </span>
            </span>
          </h2>

          <div className="r7-demand-buttons">
            <DemandButton href="/about/" label="Our Story" />
            <DemandButton href="/services/" label="Our Services" variant="ghost" />
          </div>
        </div>
      </div>
    </section>
  );
}