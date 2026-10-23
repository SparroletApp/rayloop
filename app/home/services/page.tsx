
"use client";

import { useState } from "react";
import Link from "next/link";
import "./services.css";

const services = [
  {
    number: "01",
    title: "Web App Development",
    shortTitle: "Web Development",
    description:
      "We build powerful, scalable web applications with modern technology, intuitive experiences, and designs that help your business stand out.",
    tags: ["Next.js", "React", "Node.js"],
    icon: "bi-window",
    link: "/services/web-development",
  },
  {
    number: "02",
    title: "Mobile App Development",
    shortTitle: "Mobile Apps",
    description:
      "Turn your ideas into exceptional mobile experiences with reliable, user-friendly applications built for Android and iOS.",
    tags: ["Android", "iOS", "React Native"],
    icon: "bi-phone",
    link: "/services/mobile-development",
  },
  {
    number: "03",
    title: "Ecommerce Development",
    shortTitle: "Ecommerce",
    description:
      "Launch your online store with a seamless shopping experience, secure payments, and flexible solutions designed to grow with your business.",
    tags: ["Online Stores", "Payments", "Integration"],
    icon: "bi-bag",
    link: "/services/ecommerce",
  },
  {
    number: "04",
    title: "EduTech Solutions",
    shortTitle: "EduTech",
    description:
      "Transform learning with digital education platforms, interactive learning experiences, and technology that connects students and educators.",
    tags: ["LMS", "E-Learning", "Portals"],
    icon: "bi-mortarboard",
    link: "/services/edutech",
  },
  {
    number: "05",
    title: "Digital Marketing",
    shortTitle: "Marketing",
    description:
      "Reach the right audience through data-driven campaigns, search optimization, and creative digital strategies built to increase visibility.",
    tags: ["SEO", "Social Media", "Campaigns"],
    icon: "bi-graph-up-arrow",
    link: "/services/digital-marketing",
  },
  {
    number: "06",
    title: "Graphic Designing",
    shortTitle: "Graphic Design",
    description:
      "Create a memorable brand identity with thoughtful visual design, compelling creative assets, and consistent brand experiences.",
    tags: ["Branding", "UI Design", "Creatives"],
    icon: "bi-palette2",
    link: "/services/graphic-designing",
  },
];

export default function Services() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeService = services[activeIndex];

  return (
    <section className="rl-services" id="services">
      <div className="rl-services-container">
        <div className="rl-services-top">
          <div className="rl-services-heading">
            <span className="rl-services-eyebrow">
              <span className="rl-eyebrow-dot" />
              WHAT WE DO
            </span>

            <h2>
              Ideas into
              <br />
              <span>digital impact.</span>
            </h2>
          </div>

          <div className="rl-services-intro">
            <p>
              We combine technology, creativity, and strategy to build
              digital experiences that move your business forward.
            </p>

            <Link href="/services" className="rl-services-all-link">
              Explore all services
              <span className="bi bi-arrow-up-right" />
            </Link>
          </div>
        </div>

        <div className="rl-services-workspace">
          <div className="rl-services-list" role="tablist" aria-label="Our services">
            {services.map((service, index) => (
              <button
                type="button"
                role="tab"
                aria-selected={activeIndex === index}
                aria-controls="rl-service-detail"
                className={`rl-service-tab ${
                  activeIndex === index ? "is-active" : ""
                }`}
                key={service.number}
                onClick={() => setActiveIndex(index)}
              >
                <span className="rl-service-tab-number">
                  {service.number}
                </span>

                <span className="rl-service-tab-title">
                  {service.shortTitle}
                </span>

                <span className="rl-service-tab-arrow bi bi-arrow-up-right" />
              </button>
            ))}
          </div>

          <div
            className="rl-service-feature"
            id="rl-service-detail"
            role="tabpanel"
            key={activeService.number}
          >
            <div className="rl-feature-topline">
              <span>FEATURED SERVICE</span>
              <span>{activeService.number} / 06</span>
            </div>

            <div className="rl-feature-visual">
              <div className="rl-feature-orbit rl-orbit-one" />
              <div className="rl-feature-orbit rl-orbit-two" />

              <div className="rl-feature-icon">
                <span className={`bi ${activeService.icon}`} />
              </div>

              <span className="rl-feature-visual-number">
                {activeService.number}
              </span>

              <span className="rl-feature-cross rl-cross-one">+</span>
              <span className="rl-feature-cross rl-cross-two">+</span>

              <div className="rl-feature-visual-label">
                <span className="rl-feature-status-dot" />
                BUILT FOR WHAT&apos;S NEXT
              </div>
            </div>

            <div className="rl-feature-content">
              <span className="rl-feature-kicker">RAYLOOP / DIGITAL SOLUTIONS</span>

              <h3>{activeService.title}</h3>

              <p>{activeService.description}</p>

              <div className="rl-feature-tags">
                {activeService.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              <Link
                href={activeService.link}
                className="rl-feature-link"
                aria-label={`Explore ${activeService.title}`}
              >
                <span>Explore service</span>
                <span className="bi bi-arrow-up-right" />
              </Link>
            </div>
          </div>
        </div>

        <div className="rl-services-bottom">
          <span>STRATEGY. DESIGN. TECHNOLOGY.</span>
          <span className="rl-services-bottom-right">
            ONE PARTNER. ENDLESS POSSIBILITIES.
            <span className="bi bi-arrow-down-right" />
          </span>
        </div>
      </div>
    </section>
  );
}
