"use client";

import { useState } from "react";
import Link from "next/link";
import "./technologies.css";

const technologies = [
    {
        name: "React Native",
        short: "RN",
        category: "Mobile",
        description: "Building cross-platform mobile applications for Android and iOS.",
        color: "#61dafb",
        level: "MOBILE DEVELOPMENT",
    },
    {
        name: "React.js",
        short: "R",
        category: "Frontend",
        description: "Creating dynamic, component-driven user interfaces for the web.",
        color: "#61dafb",
        level: "FRONTEND DEVELOPMENT",
    },
    {
        name: "Next.js",
        short: "N",
        category: "Frontend",
        description: "Developing fast, scalable web applications and modern websites.",
        color: "#171717",
        level: "WEB DEVELOPMENT",
    },
    {
        name: "Java",
        short: "J",
        category: "Backend",
        description: "Developing robust backend systems and enterprise applications.",
        color: "#e76f00",
        level: "BACKEND DEVELOPMENT",
    },
    {
        name: "PHP",
        short: "php",
        category: "Backend",
        description: "Building server-side applications and dynamic web platforms.",
        color: "#777bb4",
        level: "BACKEND DEVELOPMENT",
    },
    {
        name: "JavaScript",
        short: "JS",
        category: "Frontend",
        description: "Adding interactive experiences and functionality to digital products.",
        color: "#f0db4f",
        level: "PROGRAMMING LANGUAGE",
    },
    {
        name: "TypeScript",
        short: "TS",
        category: "Frontend",
        description: "Writing maintainable applications with reliable type checking.",
        color: "#3178c6",
        level: "PROGRAMMING LANGUAGE",
    },
    {
        name: "HTML5",
        short: "5",
        category: "Frontend",
        description: "Structuring accessible and meaningful web experiences.",
        color: "#e34f26",
        level: "WEB TECHNOLOGY",
    },
    {
        name: "CSS3",
        short: "3",
        category: "Frontend",
        description: "Designing responsive layouts, polished interfaces, and animations.",
        color: "#1572b6",
        level: "WEB TECHNOLOGY",
    },
    {
        name: "Python",
        short: "Py",
        category: "Backend",
        description: "Supporting automation, backend development, and data-driven solutions.",
        color: "#3776ab",
        level: "PROGRAMMING LANGUAGE",
    },
    {
        name: "MySQL",
        short: "SQL",
        category: "Database",
        description: "Organizing application data with relational database systems.",
        color: "#00758f",
        level: "DATABASE TECHNOLOGY",
    },
    {
        name: "PostgreSQL",
        short: "PG",
        category: "Database",
        description: "Managing structured data with a powerful relational database.",
        color: "#336791",
        level: "DATABASE TECHNOLOGY",
    },
    {
        name: "Spring Boot",
        short: "SB",
        category: "Backend",
        description: "Building production-ready Java APIs and backend services.",
        color: "#6db33f",
        level: "BACKEND FRAMEWORK",
    },
    {
        name: "Figma",
        short: "F",
        category: "Design",
        description: "Planning user experiences and designing intuitive interfaces.",
        color: "#a259ff",
        level: "UI/UX DESIGN",
    },
];

const categories = [
    "All",
    "Frontend",
    "Mobile",
    "Backend",
    "Database",
    "Design",
];

function Technologies() {
    const [activeCategory, setActiveCategory] = useState("All");

    const filteredTechnologies =
        activeCategory === "All"
            ? technologies
            : technologies.filter(
                  (technology) => technology.category === activeCategory
              );

    return (
        <main className="rl-tech-page container">

            <section className="rl-tech-hero">
                <div className="rl-tech-hero-decoration rl-tech-decoration-one" />
                <div className="rl-tech-hero-decoration rl-tech-decoration-two" />

                <div className="rl-tech-container">
                    <div className="rl-tech-hero-content">
                        <div className="rl-tech-eyebrow">
                            <span className="rl-tech-eyebrow-dot" />
                            TECHNOLOGY THAT MOVES YOU FORWARD
                        </div>

                        <h1>
                            The right tech.
                            <br />
                            <span>Built for what&apos;s next.</span>
                        </h1>

                        <p>
                            At RayLoop, we combine modern technologies,
                            thoughtful engineering, and creative problem-solving
                            to build digital products that help businesses grow.
                        </p>

                        <div className="rl-tech-hero-actions">
                            <a href="#rl-tech-stack" className="rl-tech-primary-btn">
                                Explore our technologies
                                <i className="bi bi-arrow-down-right" />
                            </a>

                            <Link href="/contact" className="rl-tech-text-link">
                                Discuss your project
                                <i className="bi bi-arrow-up-right" />
                            </Link>
                        </div>
                    </div>

                    <div className="rl-tech-hero-visual">
                        <div className="rl-tech-visual-top">
                            <span className="rl-tech-live-dot" />
                            OUR TECHNOLOGY STACK
                            <span className="rl-tech-visual-count">01 — 16</span>
                        </div>

                        <div className="rl-tech-orbit rl-tech-orbit-outer" />
                        <div className="rl-tech-orbit rl-tech-orbit-inner" />

                        <div className="rl-tech-core">
                            <span>R</span>
                            <small>RAYLOOP</small>
                        </div>

                        <div className="rl-tech-float rl-tech-float-react">
                            <span className="rl-tech-mini-logo react-logo">R</span>
                            <div>
                                <strong>React</strong>
                                <small>Frontend</small>
                            </div>
                        </div>

                        <div className="rl-tech-float rl-tech-float-java">
                            <span className="rl-tech-mini-logo java-logo">J</span>
                            <div>
                                <strong>Java</strong>
                                <small>Backend</small>
                            </div>
                        </div>

                        <div className="rl-tech-float rl-tech-float-next">
                            <span className="rl-tech-mini-logo next-logo">N</span>
                            <div>
                                <strong>Next.js</strong>
                                <small>Web apps</small>
                            </div>
                        </div>

                        <div className="rl-tech-float rl-tech-float-mobile">
                            <span className="rl-tech-mini-logo mobile-logo">RN</span>
                            <div>
                                <strong>React Native</strong>
                                <small>Mobile apps</small>
                            </div>
                        </div>

                        <span className="rl-tech-spark rl-tech-spark-one">+</span>
                        <span className="rl-tech-spark rl-tech-spark-two">✳</span>
                    </div>
                </div>

                <div className="rl-tech-hero-bottom">
                    <span>ENGINEERED WITH PURPOSE</span>
                    <span>DESIGNED FOR GROWTH</span>
                    <span>BUILT FOR TOMORROW <i className="bi bi-arrow-up-right" /></span>
                </div>
            </section>

            <section className="rl-tech-stack" id="rl-tech-stack">
                <div className="rl-tech-container">
                    <div className="rl-tech-section-heading">
                        <div>
                            <span className="rl-tech-section-label">
                                OUR TECHNOLOGY STACK
                            </span>
                            <h2>
                                Tools behind
                                <br />
                                <span>great solutions.</span>
                            </h2>
                        </div>

                        <p>
                            From frontend experiences to powerful backend
                            systems, we choose technologies based on your
                            product goals, performance needs, and future growth.
                        </p>
                    </div>

                    <div className="rl-tech-filter-bar">
                        <div className="rl-tech-filters" aria-label="Filter technologies">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    type="button"
                                    className={`rl-tech-filter ${
                                        activeCategory === category ? "is-active" : ""
                                    }`}
                                    onClick={() => setActiveCategory(category)}
                                    aria-pressed={activeCategory === category}
                                >
                                    {category}
                                    {activeCategory === category && (
                                        <span className="rl-tech-filter-dot" />
                                    )}
                                </button>
                            ))}
                        </div>

                        <span className="rl-tech-results">
                            {filteredTechnologies.length} TECHNOLOGIES
                        </span>
                    </div>

                    <div className="rl-tech-grid">
                        {filteredTechnologies.map((technology, index) => (
                            <article
                                className="rl-tech-card"
                                key={technology.name}
                                style={
                                    {
                                        "--tech-color": technology.color,
                                        "--tech-index": index,
                                    } as React.CSSProperties
                                }
                            >
                                <div className="rl-tech-card-top">
                                    <span className="rl-tech-card-number">
                                        {String(index + 1).padStart(2, "0")}
                                    </span>
                                    <span className="rl-tech-card-arrow">
                                        <i className="bi bi-arrow-up-right" />
                                    </span>
                                </div>

                                <div className="rl-tech-card-logo">
                                    <span>{technology.short}</span>
                                </div>

                                <div className="rl-tech-card-content">
                                    <span className="rl-tech-card-category">
                                        {technology.level}
                                    </span>
                                    <h3>{technology.name}</h3>
                                    <p>{technology.description}</p>
                                </div>

                                <div className="rl-tech-card-bottom">
                                    <span>{technology.category}</span>
                                    <span className="rl-tech-card-line" />
                                </div>
                            </article>
                        ))}
                    </div>

                    <div className="rl-tech-stack-footer">
                        <span>
                            <span className="rl-tech-footer-dot" />
                            THE RIGHT TOOL FOR EVERY CHALLENGE
                        </span>
                        <span>01 / {String(filteredTechnologies.length).padStart(2, "0")}</span>
                    </div>
                </div>
            </section>

            <section className="rl-tech-approach">
                <div className="rl-tech-container rl-tech-approach-inner">
                    <div className="rl-tech-approach-heading">
                        <span className="rl-tech-section-label">
                            OUR APPROACH
                        </span>
                        <h2>
                            Technology is a tool.
                            <br />
                            <span>Impact is the goal.</span>
                        </h2>
                    </div>

                    <div className="rl-tech-approach-items">
                        <article>
                            <span className="rl-tech-approach-number">01</span>
                            <h3>Built around your needs</h3>
                            <p>
                                We choose the technology that fits your business,
                                users, and project requirements.
                            </p>
                        </article>

                        <article>
                            <span className="rl-tech-approach-number">02</span>
                            <h3>Made to scale</h3>
                            <p>
                                We focus on maintainable architecture and
                                foundations that can evolve with your business.
                            </p>
                        </article>

                        <article>
                            <span className="rl-tech-approach-number">03</span>
                            <h3>Designed for people</h3>
                            <p>
                                We combine engineering and thoughtful design to
                                create useful digital experiences.
                            </p>
                        </article>
                    </div>
                </div>
            </section>

            <section className="rl-tech-cta">
                <div className="rl-tech-container">
                    <div className="rl-tech-cta-inner">
                        <div>
                            <span className="rl-tech-cta-label">
                                HAVE A PROJECT IN MIND?
                            </span>
                            <h2>
                                Let&apos;s build
                                <br />
                                something meaningful.
                            </h2>
                            <p>
                                Tell us what you want to create. We&apos;ll help
                                you find the right technology and the right way forward.
                            </p>
                        </div>

                        <Link href="/contact" className="rl-tech-cta-button">
                            Start a conversation
                            <span>
                                <i className="bi bi-arrow-up-right" />
                            </span>
                        </Link>

                    </div>
                </div>
            </section>
        </main>
    );
}

export default Technologies;