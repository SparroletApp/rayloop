import Link from "next/link";
import "./aboutus.css";

function Aboutus() {
    const cultureValues = [
        {
            number: "01",
            title: "Innovation",
            description:
                "We encourage fresh thinking, explore new possibilities, and embrace technology to create smarter solutions for the challenges businesses face.",
            icon: "✳",
        },
        {
            number: "02",
            title: "Collaboration",
            description:
                "We believe great ideas grow through teamwork. By sharing knowledge, respecting different perspectives, and working together, we achieve more.",
            icon: "↗",
        },
        {
            number: "03",
            title: "Excellence",
            description:
                "We are committed to quality, attention to detail, and continuous improvement in every project, interaction, and solution we deliver.",
            icon: "✦",
        },
    ];

    return (
        <section className="rayloop-about container">
            <div className="rayloop-about-container">
                <div className="rayloop-about-top">
                    <div className="rayloop-about-content">
                        <span className="rayloop-about-label">
                            <span className="rayloop-about-label-line"></span>
                            ABOUT RAYLOOP
                        </span>

                        <h2>
                            Empowering the Future Through{" "}
                            <span>Innovation.</span>
                        </h2>

                        <p className="rayloop-about-intro">
                            At RayLoop, we believe technology has the power
                            to transform businesses, simplify challenges,
                            and create meaningful digital experiences.
                        </p>

                        <p className="rayloop-about-description">
                            We combine technical expertise, creativity, and
                            a commitment to excellence to develop solutions
                            that align with our clients&apos; goals. Our
                            approach is built on understanding, collaboration,
                            and a shared vision for a better digital future.
                        </p>

                        <Link
                            href="/about-us"
                            className="rayloop-about-button"
                        >
                            Discover Our Story
                            <span>↗</span>
                        </Link>
                    </div>


                    <div className="rayloop-about-visual">
                        <div className="rayloop-about-image-wrap">
                            <img
                                src="/about.jpg"
                                alt="Team collaborating on innovative technology solutions"
                                className="rayloop-about-image"
                            />

                            <div className="rayloop-about-image-overlay"></div>

                            <div className="rayloop-about-image-caption">
                                <span className="rayloop-about-caption-dot"></span>

                                <div>
                                    <strong>Driven by Innovation</strong>
                                    <p>
                                        Ideas, people, and possibilities.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="rayloop-about-orange-shape"></div>
                        <div className="rayloop-about-small-dot"></div>
                    </div>
                </div>

                <div className="rayloop-about-bottom">
                    <div className="rayloop-about-culture-heading">
                        <div>
                            <span className="rayloop-about-culture-label">
                                THE WAY WE THINK. THE WAY WE WORK.
                            </span>

                            <h3>
                                Our Culture, Our <span>Strength.</span>
                            </h3>
                        </div>

                        <p>
                            Our culture shapes everything we do. We create
                            an environment where creativity is encouraged,
                            ideas are shared, and excellence is always
                            the goal.
                        </p>
                    </div>

                    <div className="rayloop-about-culture-grid">
                        {cultureValues.map((value) => (
                            <article
                                className="rayloop-about-culture-card"
                                key={value.number}
                            >
                                <div className="rayloop-about-culture-card-top">
                                    <span className="rayloop-about-culture-icon">
                                        {value.icon}
                                    </span>

                                    <span className="rayloop-about-culture-number">
                                        {value.number}
                                    </span>
                                </div>

                                <h4>{value.title}</h4>

                                <p>{value.description}</p>

                                <div className="rayloop-about-culture-card-line"></div>
                            </article>
                        ))}
                    </div>

                    <div className="rayloop-about-culture-footer">
                        <span className="rayloop-about-footer-mark">“</span>

                        <p>
                            Together, we turn ideas into possibilities
                            and possibilities into progress.
                        </p>

                        <span className="rayloop-about-footer-accent"></span>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Aboutus;