"use client";

type ServiceItem = {
  title: string;
  href: string;
  image: string;
};

const services: ServiceItem[] = [
  {
    title: "Digital PR",
    href: "/services/digital-pr/",
    image:
      "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-23-at-22.39.35.png?w=2000&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847626&s=6d24f03cd6433d18ffdc18236cf7a648",
  },
  {
    title: "Organic Social & Content",
    href: "/services/social/",
    image:
      "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-07-01-at-20.31.18.png?w=400&h=400&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1751398338&s=6dc7a97684078dc9cbe75679b4093ef5",
  },
  {
    title: "Search & Growth Strategy",
    href: "/services/strategy-growth/",
    image:
      "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-25-at-14.37.50.png?w=400&h=400&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750858763&s=624a1f990a8d128dd35cf3a6e1f44dbe",
  },
  {
    title: "Content Experience",
    href: "/services/content-experience/",
    image:
      "https://rise-atseven.transforms.svdcdn.com/production/images/0B5A7499.jpg?w=400&h=400&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750846496&s=1aebaeffe44aa88331de2609962a990e",
  },
  {
    title: "Data & Insights",
    href: "/services/data-insights/",
    image:
      "https://rise-atseven.transforms.svdcdn.com/production/images/e34acc13-be9a-4862-a3bd-95aa2738aeb3.JPG?w=400&h=400&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1751398487&s=5c5ad2c6b822417723c4f682fd885ced",
  },
  {
    title: "Onsite SEO",
    href: "/services/onsite-seo/",
    image:
      "https://rise-atseven.transforms.svdcdn.com/production/images/Screenshot-2025-06-24-at-00.20.47.png?w=400&h=400&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750847627&s=4a4a4154f7497d086fc695e27bf2aa17",
  },
];

const headingImage =
  "https://rise-atseven.transforms.svdcdn.com/production/images/IMG_5079.JPG?w=200&h=200&q=80&fm=webp&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.5&dm=1750944462&s=5eb651d549739cde26429958911743ea";

function ArrowIcon() {
  return (
    <span className="r7svc-arrow" aria-hidden="true">
      ↗
    </span>
  );
}

function ServiceBigArrow() {
  return (
    <span className="r7svc-big-arrow" aria-hidden="true">
      ↗
    </span>
  );
}

function ServicesButton() {
  return (
    <a href="/services/" className="r7svc-button">
      <span className="r7svc-button-window">
        <span className="r7svc-button-line r7svc-button-current">
          <span>View All Services</span>
          <ArrowIcon />
        </span>

        <span className="r7svc-button-line r7svc-button-next">
          <span>View All Services</span>
          <ArrowIcon />
        </span>
      </span>
    </a>
  );
}

function ServiceRow({ service }: { service: ServiceItem }) {
  return (
    <a href={service.href} className="r7svc-row">
      <span className="r7svc-pill" aria-hidden="true">
        <img src={service.image} alt="" className="r7svc-pill-img" />
        <span className="r7svc-pill-overlay" />
      </span>

      <span className="r7svc-row-content">
        <ServiceBigArrow />
        <span className="r7svc-title">{service.title}</span>
      </span>
    </a>
  );
}

export function ServicesSection() {
  return (
    <section className="r7svc-section">
      <div className="r7svc-container">
        <div className="r7svc-header">
          <h2 className="r7svc-heading">
            <span>Our</span>
            <span className="r7svc-heading-img-wrap">
              <img src={headingImage} alt="" className="r7svc-heading-img" />
            </span>
            <span>Services</span>
          </h2>

          <div className="r7svc-header-button">
            <ServicesButton />
          </div>
        </div>

        <div className="r7svc-grid">
          {services.map((service) => (
            <ServiceRow key={service.title} service={service} />
          ))}
        </div>

        <div className="r7svc-mobile-button">
          <ServicesButton />
        </div>
      </div>
    </section>
  );
}
