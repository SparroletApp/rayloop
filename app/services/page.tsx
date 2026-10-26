"use client";

import Link from "next/link";
import "./services.css";

function Services() {

    const statistics = [
        {
            icon: "bi bi-emoji-smile",
            number: "250+",
            label: "Happy Clients",
        },
        {
            icon: "bi bi-briefcase",
            number: "650+",
            label: "Projects Completed",
        },
        {
            icon: "bi bi-trophy",
            number: "8+",
            label: "Years Experience",
        },
        {
            icon: "bi bi-people",
            number: "25+",
            label: "Expert Team",
        },
        {
            icon: "bi bi-globe",
            number: "30+",
            label: "Countries Served",
        },
    ];

    const services = [
        {
            number: "01",
            slug: "web-app-development",
            icon: "bi bi-globe2",
            title: "Web App Development",
            description:
                "Empowering businesses with cutting-edge web solutions and inspiring designs. We build powerful, scalable, and user-friendly web applications tailored to your business needs.",
            tags: ["Next.js", "React", "Java", "PHP"],
        },
        {
            number: "02",
            slug: "mobile-app-development",
            icon: "bi bi-phone",
            title: "Mobile App Development",
            description:
                "Unleashing the power of innovation through mobile app development. We transform your ideas into exceptional mobile experiences with intuitive designs and powerful functionality.",
            tags: ["React Native", "Android", "iOS"],
        },
        {
            number: "03",
            slug: "ecommerce-development",
            icon: "bi bi-cart3",
            title: "Ecommerce Development",
            description:
                "Transforming e-commerce visions into reality with secure, scalable, and conversion-focused online stores designed to grow your business and deliver seamless shopping experiences.",
            tags: ["Online Stores", "Payment Integration", "Custom Solutions"],
        },
        {
            number: "04",
            slug: "edu-tech-solutions",
            icon: "bi bi-mortarboard",
            title: "Edu Tech Solutions",
            description:
                "Revolutionizing education through technology-driven solutions. We develop digital learning platforms that empower students, educators, and institutions to achieve more.",
            tags: ["LMS", "E-Learning", "Education Platforms"],
        },
        {
            number: "05",
            slug: "digital-marketing",
            icon: "bi bi-graph-up-arrow",
            title: "Digital Marketing",
            description:
                "Accelerating business growth with data-driven digital strategies. We help brands strengthen their online presence, reach the right audience, and build lasting customer relationships.",
            tags: ["SEO", "Social Media", "Digital Strategy"],
        },
        {
            number: "06",
            slug: "graphic-designing",
            icon: "bi bi-palette",
            title: "Graphic Designing",
            description:
                "Bringing ideas to life with creative mastery. We create visually captivating brand identities and digital designs that communicate your message and make your business stand out.",
            tags: ["Branding", "UI/UX", "Creative Design"],
        },
    ];

    return (
        <main className="services-page">
            <section className="services-hero">
                <div className="services-hero-glow services-glow-one"></div>
                <div className="services-hero-glow services-glow-two"></div>

                <div className="services-hero-content">
                    <span className="services-eyebrow">
                        <span className="services-eyebrow-dot"></span>
                        WHAT WE DO
                    </span>

                    <h1>
                        Turning Ideas Into
                        <br />
                        <span>Digital Excellence.</span>
                    </h1>

                    <p>
                        We combine technology, creativity, and innovation
                        to build digital solutions that empower businesses
                        and create meaningful experiences.
                    </p>

                    <a href="#our-services" className="services-hero-button">
                        Explore Our Services
                        <i className="bi bi-arrow-down-right"></i>
                    </a>

                    <div className="services-hero-bottom">
                        <span>INNOVATION</span>
                        <span className="services-hero-line"></span>
                        <span>CREATIVITY</span>
                        <span className="services-hero-line"></span>
                        <span>TECHNOLOGY</span>
                    </div>
                </div>

                <div className="services-hero-decoration">
                    <div className="services-decoration-circle circle-one"></div>
                    <div className="services-decoration-circle circle-two"></div>
                    <div className="services-decoration-circle circle-three"></div>

                    <div className="services-floating-card floating-card-one">
                        <i className="bi bi-code-slash"></i>
                        <span>Development</span>
                    </div>

                    <div className="services-floating-card floating-card-two">
                        <i className="bi bi-lightbulb"></i>
                        <span>Innovation</span>
                    </div>

                    <div className="services-floating-card floating-card-three">
                        <i className="bi bi-rocket-takeoff"></i>
                        <span>Growth</span>
                    </div>
                </div>
            </section>
            <div className="container">
                <div className="service-clear">
                    <div className="service-stats">
                        {statistics.map((item, index) => (
                            <div className="service-stat-item" key={index}>
                                <i className={item.icon}></i>

                                <div className="service-stat-content">
                                    <h3>{item.number}</h3>
                                    <p>{item.label}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="container">
                <section
                    className="services-list-section"
                    id="our-services"
                >
                    <div className="services-section-heading">
                        <span className="services-section-label">
                            OUR EXPERTISE
                        </span>

                        <h2>
                            Solutions Designed
                            <br />
                            for <span>Your Success.</span>
                        </h2>

                        <p>
                            From building powerful applications to creating
                            memorable brand experiences, we provide the
                            expertise your business needs to move forward.
                        </p>
                    </div>

                    <div className="services-grid">
                        {services.map((service) => (
                            <Link
                                href={`/services/${service.slug}`}
                                className="service-card"
                                key={service.number}
                                aria-label={`Explore ${service.title}`}
                            >
                                <div className="service-card-top">
                                    <div className="service-icon">
                                        <i className={service.icon}></i>
                                    </div>

                                    <span className="service-number">
                                        {service.number}
                                    </span>
                                </div>

                                <h3>{service.title}</h3>

                                <p className="service-description">
                                    {service.description}
                                </p>

                                <div className="service-tags">
                                    {service.tags.map((tag) => (
                                        <span key={tag}>{tag}</span>
                                    ))}
                                </div>

                                <div className="service-card-link">
                                    <span>Explore Service</span>
                                    <i className="bi bi-arrow-up-right"></i>
                                </div>

                                <div className="service-card-glow"></div>
                            </Link>
                        ))}
                    </div>
                </section>

            </div>

            <section className="why-choose-section">
                <div className="container">
                    <div className="why-choose-container">

                        <div className="why-choose-heading">
                            <span className="why-choose-label">
                                <span className="why-choose-label-dot"></span>
                                WHY RAYLOOP
                            </span>

                            <h2>
                                Why Choose <span>Us?</span>
                            </h2>

                            <p>
                                We combine creativity, technology, and expertise to deliver
                                digital solutions that help your business move forward.
                            </p>
                        </div>

                        <div className="why-choose-grid">

                            <div className="why-choose-card">
                                <div className="why-choose-icon">
                                    <i className="bi bi-lightbulb"></i>
                                </div>

                                <span className="why-choose-number">01</span>

                                <h3>Tailored Solutions</h3>

                                <p>
                                    We create customized software solutions that align with
                                    your business goals, workflows, and unique requirements.
                                </p>

                                <div className="why-choose-arrow">
                                    <i className="bi bi-arrow-up-right"></i>
                                </div>
                            </div>

                            <div className="why-choose-card">
                                <div className="why-choose-icon">
                                    <i className="bi bi-cpu"></i>
                                </div>

                                <span className="why-choose-number">02</span>

                                <h3>Modern Technology</h3>

                                <p>
                                    We use modern technologies and innovative approaches to
                                    build scalable, efficient, and user-friendly applications.
                                </p>

                                <div className="why-choose-arrow">
                                    <i className="bi bi-arrow-up-right"></i>
                                </div>
                            </div>

                            <div className="why-choose-card">
                                <div className="why-choose-icon">
                                    <i className="bi bi-patch-check"></i>
                                </div>

                                <span className="why-choose-number">03</span>

                                <h3>Quality & Reliability</h3>

                                <p>
                                    We focus on reliable performance, thoughtful design,
                                    and quality development to deliver better digital experiences.
                                </p>

                                <div className="why-choose-arrow">
                                    <i className="bi bi-arrow-up-right"></i>
                                </div>
                            </div>

                            <div className="why-choose-card">
                                <div className="why-choose-icon">
                                    <i className="bi bi-headset"></i>
                                </div>

                                <span className="why-choose-number">04</span>

                                <h3>Dedicated Support</h3>

                                <p>
                                    We help you navigate technical challenges and improve
                                    your digital solutions as your business continues to grow.
                                </p>

                                <div className="why-choose-arrow">
                                    <i className="bi bi-arrow-up-right"></i>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
            <div className="container">
                <section className="rayloop-approach-section">
                    <div className="rayloop-approach-decoration rayloop-approach-circle"></div>
                    <div className="rayloop-approach-decoration rayloop-approach-arc"></div>

                    <div className="rayloop-approach-container">
                        <div className="rayloop-approach-heading" id="our-approach">
                            <span className="rayloop-approach-eyebrow">
                                <span></span>
                                THE RAYLOOP APPROACH
                            </span>

                            <h2>
                                Build Smarter.
                                <br />
                                <span>Grow Faster.</span>
                            </h2>

                            <p>
                                We turn business ideas into powerful digital solutions
                                through thoughtful planning, innovative technology, and
                                a commitment to long-term success.
                            </p>
                        </div>
                        <div className="rayloop-approach-feature" id="our-process">
                            <div className="rayloop-approach-image">
                                <img
                                    src="/rayloop-development.jpg"
                                    alt="RayLoop software development team collaborating on a project"
                                />

                                <div className="rayloop-approach-image-overlay"></div>

                                <div className="rayloop-approach-image-content">
                                    <span className="rayloop-approach-image-label">
                                        FROM CONCEPT TO CREATION
                                    </span>

                                    <h3>
                                        Your Vision.
                                        <br />
                                        Our Technology.
                                        <br />
                                        <span>One Powerful Solution.</span>
                                    </h3>

                                    <p>
                                        We combine technical expertise and creative thinking
                                        to build digital experiences that solve real-world
                                        business challenges.
                                    </p>

                                    <Link
                                        href="/contact"
                                        className="rayloop-approach-image-button"
                                    >
                                        Start Your Project
                                        <i className="bi bi-arrow-up-right"></i>
                                    </Link>
                                </div>

                                <div className="rayloop-approach-image-badge">
                                    <i className="bi bi-lightning-charge-fill"></i>
                                    <span>Ideas into Innovation</span>
                                </div>
                            </div>
                        </div>
                        <div className="rayloop-approach-highlights" id="our-expertise">
                            <div className="rayloop-approach-highlight">
                                <div className="rayloop-approach-highlight-icon">
                                    <i className="bi bi-lightbulb"></i>
                                </div>

                                <div>
                                    <h4>Innovation First</h4>
                                    <p>
                                        Creative thinking and modern technology for
                                        meaningful digital solutions.
                                    </p>
                                </div>
                            </div>

                            <div className="rayloop-approach-highlight">
                                <div className="rayloop-approach-highlight-icon">
                                    <i className="bi bi-code-slash"></i>
                                </div>

                                <div>
                                    <h4>Built Around You</h4>
                                    <p>
                                        Custom applications designed around your
                                        business goals and workflows.
                                    </p>
                                </div>
                            </div>

                            <div className="rayloop-approach-highlight">
                                <div className="rayloop-approach-highlight-icon">
                                    <i className="bi bi-rocket-takeoff"></i>
                                </div>

                                <div>
                                    <h4>Ready to Scale</h4>
                                    <p>
                                        Reliable, scalable solutions that evolve
                                        as your business grows.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>


        </main>
    );
}

export default Services;