import Link from "next/link";
import "./industries.css";

function Industries() {
    const reasons = [
        {
            icon: "bi bi-person-workspace",
            title: "Experienced Faculty",
            description:
                "Learn from industry experts who bring real-world design experience, practical knowledge, and professional insights into every class.",
        },
        {
            icon: "bi bi-people",
            title: "Networking Opportunities",
            description:
                "Connect with fellow designers, experienced mentors, and industry professionals to build valuable relationships.",
        },
        {
            icon: "bi bi-lightbulb",
            title: "Hands-On Learning",
            description:
                "Work on practical assignments, real-world challenges, and design projects that help you develop industry-ready skills.",
        },
        {
            icon: "bi bi-briefcase",
            title: "Career Support",
            description:
                "Prepare for your next career move with portfolio guidance, interview preparation, and placement assistance.",
        },
    ];

    const courseHighlights = [
        {
            icon: "bi bi-palette",
            title: "UI Fundamentals",
            description:
                "Understand visual design principles, typography, color theory, layouts, and intuitive interface design.",
        },
        {
            icon: "bi bi-person-check",
            title: "UX Strategies",
            description:
                "Learn user research, user personas, journey mapping, usability testing, and user-centered design.",
        },
        {
            icon: "bi bi-bezier2",
            title: "Wireframing & Prototyping",
            description:
                "Transform ideas into wireframes, interactive prototypes, and clear user flows.",
        },
        {
            icon: "bi bi-cursor",
            title: "Interaction Design",
            description:
                "Create meaningful interactions that make digital products engaging, accessible, and easy to use.",
        },
        {
            icon: "bi bi-brush",
            title: "Visual Design",
            description:
                "Master visual hierarchy, spacing, color combinations, typography, and modern design systems.",
        },
        {
            icon: "bi bi-folder2-open",
            title: "Portfolio Development",
            description:
                "Build and present your design projects in a professional portfolio that demonstrates your abilities.",
        },
    ];

    const careers = [
        { icon: "bi bi-window", title: "UI Designer" },
        { icon: "bi bi-person-check", title: "Interaction Designer" },
        { icon: "bi bi-search", title: "UX Researcher" },
        { icon: "bi bi-diagram-3", title: "UX Architect" },
        { icon: "bi bi-lightbulb", title: "UX Strategist" },
        { icon: "bi bi-box", title: "Product Designer" },
        { icon: "bi bi-code-slash", title: "Web Designer" },
        { icon: "bi bi-kanban", title: "Product Manager" },
    ];

    const features = [
        {
            icon: "bi bi-mortarboard",
            title: "Expert-Led Curriculum",
            description:
                "A structured learning program designed around industry-relevant UI/UX skills.",
        },
        {
            icon: "bi bi-camera-video",
            title: "Live Classes & Practice",
            description:
                "Learn through interactive sessions, practical exercises, and guided assignments.",
        },
        {
            icon: "bi bi-file-earmark-play",
            title: "Learning Resources",
            description:
                "Revisit available course materials and recorded sessions to reinforce your learning.",
        },
        {
            icon: "bi bi-patch-check",
            title: "Course Certification",
            description:
                "Complete the course requirements and earn a certificate of completion.",
        },
        {
            icon: "bi bi-briefcase",
            title: "Placement Assistance",
            description:
                "Get career guidance, interview preparation, and support exploring job opportunities.",
        },
        {
            icon: "bi bi-collection",
            title: "Portfolio Projects",
            description:
                "Build practical design projects to demonstrate your creativity and problem-solving skills.",
        },
    ];

    const projects = [
        {
            number: "01",
            title: "Corporate Business Website",
            description:
                "Design a professional business website with a clear visual hierarchy and intuitive navigation.",
            icon: "bi bi-building",
        },
        {
            number: "02",
            title: "E-Commerce Landing Page",
            description:
                "Create an engaging shopping experience with product sections, promotions, and conversion-focused design.",
            icon: "bi bi-bag",
        },
        {
            number: "03",
            title: "Podcast Application",
            description:
                "Design a podcast application with discovery, listening controls, and personalized content.",
            icon: "bi bi-headphones",
        },
        {
            number: "04",
            title: "Travel Website UX Analysis",
            description:
                "Evaluate a travel website's usability and recommend improvements based on user needs.",
            icon: "bi bi-airplane",
        },
        {
            number: "05",
            title: "Short-Video App Research",
            description:
                "Conduct competitive analysis and explore opportunities to improve the user experience.",
            icon: "bi bi-play-btn",
        },
        {
            number: "06",
            title: "EdTech Application UI",
            description:
                "Design a learning application with intuitive navigation, course discovery, and progress tracking.",
            icon: "bi bi-journal-bookmark",
        },
    ];

    const tools = [
        "Figma",
        "Wireframing",
        "Prototyping",
        "User Research",
        "Design Systems",
        "Usability Testing",
    ];

    return (
        <main className="tm-page">

            {/* HERO SECTION */}
            <section className="tm-hero">
                <div className="tm-hero-shape tm-hero-shape-one"></div>
                <div className="tm-hero-shape tm-hero-shape-two"></div>

                <div className="container tm-container">
                    <div className="row align-items-center gy-5">

                        <div className="col-lg-6">
                            <div className="tm-hero-content">

                                <span className="tm-eyebrow">
                                    <span className="tm-eyebrow-dot"></span>
                                    TOGGLEMAX EDUCATION
                                </span>

                                <h1>
                                    Learn UI/UX Design.
                                    <span> Design Your Future.</span>
                                </h1>

                                <p className="tm-hero-subtitle">
                                    Best UI/UX Design Course in Kochi
                                </p>

                                <p className="tm-hero-description">
                                    Kerala&apos;s UI/UX design training academy focused
                                    on creativity, practical learning, and real-world
                                    design skills. Turn your ideas into digital
                                    experiences people love.
                                </p>

                                <div className="tm-hero-actions">

                                    <a
                                        href="https://togglemax.com/contact/"
                                        className="tm-btn tm-btn-primary"
                                    >
                                        Join Now
                                        <i className="bi bi-arrow-up-right"></i>
                                    </a>

                                    <a
                                        href="https://togglemax.com/our-courses/"
                                        className="tm-btn tm-btn-outline"
                                    >
                                        Explore Course
                                        <i className="bi bi-arrow-down"></i>
                                    </a>
                                </div>

                                <div className="tm-hero-trust">
                                    <div className="tm-trust-item">
                                        <i className="bi bi-check-circle-fill"></i>
                                        Practical Training
                                    </div>

                                    <div className="tm-trust-item">
                                        <i className="bi bi-check-circle-fill"></i>
                                        Portfolio Projects
                                    </div>

                                    <div className="tm-trust-item">
                                        <i className="bi bi-check-circle-fill"></i>
                                        Career Guidance
                                    </div>
                                </div>

                            </div>
                        </div>

                        <div className="col-lg-6">
                            <div className="tm-hero-visual">

                                <div className="tm-hero-image">
                                    <img
                                        src="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?auto=format&fit=crop&w=1100&q=85"
                                        alt="UI UX designer working on a digital interface"
                                    />

                                    <div className="tm-image-overlay"></div>

                                    <div className="tm-floating-card tm-floating-top">
                                        <span className="tm-floating-icon">
                                            <i className="bi bi-palette2"></i>
                                        </span>

                                        <div>
                                            <strong>Creative Thinking</strong>
                                            <small>Design with purpose</small>
                                        </div>
                                    </div>

                                    <div className="tm-floating-card tm-floating-bottom">
                                        <span className="tm-floating-icon tm-icon-dark">
                                            <i className="bi bi-vector-pen"></i>
                                        </span>

                                        <div>
                                            <strong>Build Your Portfolio</strong>
                                            <small>Learn by creating</small>
                                        </div>
                                    </div>

                                    <div className="tm-hero-image-label">
                                        <span>01</span>
                                        <div>
                                            <strong>UI/UX Design</strong>
                                            <p>Learn. Create. Grow.</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="tm-hero-decoration">
                                    <i className="bi bi-stars"></i>
                                </div>

                            </div>
                        </div>

                    </div>
                </div>
            </section>


            {/* INTRODUCTION */}
            <section className="tm-about section-padding">
                <div className="container tm-container">
                    <div className="row align-items-center gy-5">

                        <div className="col-lg-5">
                            <div className="tm-about-visual">

                                <div className="tm-about-image">
                                    <img
                                        src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1000&q=85"
                                        alt="Students and professionals collaborating on creative projects"
                                        loading="lazy"
                                    />
                                </div>

                                <div className="tm-about-note">
                                    <i className="bi bi-lightbulb-fill"></i>
                                    <span>
                                        Creativity meets
                                        <strong> functionality.</strong>
                                    </span>
                                </div>

                                <div className="tm-about-outline"></div>
                            </div>
                        </div>

                        <div className="col-lg-7">
                            <div className="tm-section-content tm-about-content">

                                <span className="tm-section-label">
                                    ABOUT TOGGLEMAX
                                </span>

                                <h2>
                                    Your Gateway to
                                    <span> Exceptional UI/UX Training</span>
                                </h2>

                                <p>
                                    Welcome to Togglemax Education, your destination
                                    for learning UI/UX design in Kochi. We are
                                    passionate about nurturing creative thinkers,
                                    problem-solvers, and future designers.
                                </p>

                                <p>
                                    Our training focuses on the principles of user
                                    interface and user experience design, combining
                                    design fundamentals with practical assignments
                                    and project-based learning.
                                </p>

                                <p>
                                    Whether you are starting your career or looking
                                    to expand your existing skills, Togglemax helps
                                    you develop the confidence and knowledge to
                                    create thoughtful, user-centered digital
                                    experiences.
                                </p>

                                <div className="tm-about-points">
                                    <div>
                                        <i className="bi bi-check2-circle"></i>
                                        Industry-relevant learning
                                    </div>

                                    <div>
                                        <i className="bi bi-check2-circle"></i>
                                        Practical design experience
                                    </div>

                                    <div>
                                        <i className="bi bi-check2-circle"></i>
                                        Portfolio-focused training
                                    </div>
                                </div>

                                <a
                                    href="#tm-course"
                                    className="tm-text-link"
                                >
                                    Discover Our Course
                                    <i className="bi bi-arrow-right"></i>
                                </a>

                            </div>
                        </div>

                    </div>
                </div>
            </section>


            {/* WHY CHOOSE US */}
            <section className="tm-why section-padding">
                <div className="container tm-container">

                    <div className="tm-section-heading text-center">
                        <span className="tm-section-label">
                            THE TOGGLEMAX ADVANTAGE
                        </span>

                        <h2>
                            Why Choose <span>Togglemax?</span>
                        </h2>

                        <p>
                            Learn in an environment that encourages creativity,
                            practical thinking, and professional growth.
                        </p>
                    </div>

                    <div className="row g-4 tm-reasons-grid">
                        {reasons.map((reason, index) => (
                            <div
                                className="col-lg-3 col-md-6"
                                key={reason.title}
                            >
                                <div className="tm-reason-card">
                                    <div className="tm-card-number">
                                        0{index + 1}
                                    </div>

                                    <div className="tm-icon-box">
                                        <i className={reason.icon}></i>
                                    </div>

                                    <h3>{reason.title}</h3>

                                    <p>{reason.description}</p>

                                    <span className="tm-card-arrow">
                                        <i className="bi bi-arrow-up-right"></i>
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>


            {/* COURSE OVERVIEW */}
            <section className="tm-course section-padding" id="tm-course">
                <div className="container tm-container">

                    <div className="row align-items-end gy-4 tm-course-heading">
                        <div className="col-lg-7">
                            <span className="tm-section-label">
                                COURSE OVERVIEW
                            </span>

                            <h2>
                                Master the Art of
                                <span> UI/UX Design</span>
                            </h2>
                        </div>

                        <div className="col-lg-5">
                            <p>
                                From understanding user needs to creating
                                polished interfaces, develop the essential
                                skills needed to design meaningful digital
                                experiences.
                            </p>
                        </div>
                    </div>

                    <div className="row g-4 tm-highlights-grid">
                        {courseHighlights.map((course, index) => (
                            <div
                                className="col-lg-4 col-md-6"
                                key={course.title}
                            >
                                <div className="tm-highlight-card">
                                    <div className="tm-highlight-top">
                                        <span className="tm-highlight-icon">
                                            <i className={course.icon}></i>
                                        </span>

                                        <span className="tm-highlight-number">
                                            0{index + 1}
                                        </span>
                                    </div>

                                    <h3>{course.title}</h3>

                                    <p>{course.description}</p>

                                    <div className="tm-highlight-line"></div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <div className="tm-tools-box">
                        <div>
                            <span className="tm-tools-label">
                                SKILLS YOU WILL EXPLORE
                            </span>

                            <h3>Learn. Practice. Create.</h3>
                        </div>

                        <div className="tm-tools-list">
                            {tools.map((tool) => (
                                <span key={tool} className="tm-tool-tag">
                                    <i className="bi bi-check2"></i>
                                    {tool}
                                </span>
                            ))}
                        </div>
                    </div>

                </div>
            </section>


            {/* WHO SHOULD ENROLL */}
            <section className="tm-enroll section-padding" id="tm-enroll">
                <div className="container tm-container">

                    <div className="row align-items-center gy-5">

                        <div className="col-lg-6">
                            <span className="tm-section-label">
                                YOUR NEXT CHAPTER STARTS HERE
                            </span>

                            <h2>
                                Is UI/UX Design
                                <span> Right for You?</span>
                            </h2>

                            <p className="tm-enroll-description">
                                Our UI/UX Design Course is suitable for anyone
                                interested in combining creativity, technology,
                                and problem-solving to create better digital
                                products.
                            </p>

                            <div className="tm-enroll-list">

                                <div className="tm-enroll-item">
                                    <span>
                                        <i className="bi bi-brush"></i>
                                    </span>

                                    <div>
                                        <h3>Aspiring Designers</h3>
                                        <p>
                                            Start learning the fundamentals of
                                            UI/UX and build your design skills.
                                        </p>
                                    </div>
                                </div>

                                <div className="tm-enroll-item">
                                    <span>
                                        <i className="bi bi-graph-up-arrow"></i>
                                    </span>

                                    <div>
                                        <h3>Working Professionals</h3>
                                        <p>
                                            Expand your skills and explore
                                            opportunities in digital design.
                                        </p>
                                    </div>
                                </div>

                                <div className="tm-enroll-item">
                                    <span>
                                        <i className="bi bi-rocket-takeoff"></i>
                                    </span>

                                    <div>
                                        <h3>Entrepreneurs & Founders</h3>
                                        <p>
                                            Understand user experience and
                                            create more intuitive digital
                                            products.
                                        </p>
                                    </div>
                                </div>

                            </div>

                            <a
                                href="mailto:info@rayloop.com?subject=UI%2FUX%20Design%20Course%20Enquiry"
                                className="tm-btn tm-btn-primary"
                            >
                                Enquire About the Course
                                <i className="bi bi-arrow-up-right"></i>
                            </a>
                        </div>

                        <div className="col-lg-6">
                            <div className="tm-enroll-visual">

                                <img
                                    src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1100&q=85"
                                    alt="Creative team working together on digital projects"
                                    loading="lazy"
                                />

                                <div className="tm-enroll-image-caption">
                                    <span>
                                        <i className="bi bi-stars"></i>
                                    </span>

                                    <div>
                                        <strong>Your Ideas. Your Designs.</strong>
                                        <p>Build skills that move you forward.</p>
                                    </div>
                                </div>

                            </div>
                        </div>

                    </div>

                </div>
            </section>


            {/* COURSE FEATURES */}
            <section className="tm-features section-padding">
                <div className="container tm-container">

                    <div className="tm-section-heading text-center">
                        <span className="tm-section-label">
                            DESIGNED FOR YOUR SUCCESS
                        </span>

                        <h2>
                            UI/UX Course <span>Features</span>
                        </h2>

                        <p>
                            A learning experience that combines expert
                            guidance, practical projects, and career
                            preparation.
                        </p>
                    </div>

                    <div className="row g-4">
                        {features.map((feature, index) => (
                            <div
                                className="col-lg-4 col-md-6"
                                key={feature.title}
                            >
                                <div className="tm-feature-card">
                                    <div className="tm-feature-icon">
                                        <i className={feature.icon}></i>
                                    </div>

                                    <div className="tm-feature-content">
                                        <span>
                                            FEATURE 0{index + 1}
                                        </span>

                                        <h3>{feature.title}</h3>

                                        <p>{feature.description}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>


            {/* CAREER OPPORTUNITIES */}
            <section className="tm-careers section-padding">
                <div className="container tm-container">

                    <div className="row align-items-center gy-5">

                        <div className="col-lg-5">
                            <span className="tm-section-label">
                                EXPLORE CAREER PATHS
                            </span>

                            <h2>
                                Turn Your Creativity Into a
                                <span> Career</span>
                            </h2>

                            <p>
                                UI/UX design skills can open doors to different
                                roles across technology, product development,
                                digital agencies, and other industries.
                            </p>

                            <a
                                href="#tm-contact"
                                className="tm-btn tm-btn-primary"
                            >
                                Start Your Journey
                                <i className="bi bi-arrow-up-right"></i>
                            </a>
                        </div>

                        <div className="col-lg-7">
                            <div className="tm-career-grid">
                                {careers.map((career, index) => (
                                    <div
                                        className="tm-career-card"
                                        key={career.title}
                                    >
                                        <span className="tm-career-icon">
                                            <i className={career.icon}></i>
                                        </span>

                                        <span className="tm-career-title">
                                            {career.title}
                                        </span>

                                        <i className="bi bi-arrow-up-right tm-career-arrow"></i>
                                    </div>
                                ))}
                            </div>
                        </div>

                    </div>

                </div>
            </section>


            {/* STUDENT PROJECTS */}
            <section className="tm-projects section-padding">
                <div className="container tm-container">

                    <div className="tm-section-heading text-center">
                        <span className="tm-section-label">
                            LEARNING THROUGH CREATION
                        </span>

                        <h2>
                            Projects You'll <span>Work On</span>
                        </h2>

                        <p>
                            Put your knowledge into practice through projects
                            that challenge your creativity and strengthen
                            your portfolio.
                        </p>
                    </div>

                    <div className="row g-4">
                        {projects.map((project) => (
                            <div
                                className="col-lg-4 col-md-6"
                                key={project.number}
                            >
                                <div className="tm-project-card">

                                    <div className="tm-project-card-top">
                                        <span className="tm-project-number">
                                            {project.number}
                                        </span>

                                        <span className="tm-project-icon">
                                            <i className={project.icon}></i>
                                        </span>
                                    </div>

                                    <h3>{project.title}</h3>

                                    <p>{project.description}</p>

                                    <div className="tm-project-footer">
                                        <span>UI/UX PROJECT</span>

                                        <i className="bi bi-arrow-up-right"></i>
                                    </div>

                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </section>


            {/* MENTORSHIP SECTION */}
            <section className="tm-mentorship section-padding">
                <div className="container tm-container">

                    <div className="tm-mentorship-box">

                        <div className="tm-mentorship-content">
                            <span className="tm-section-label">
                                LEARN FROM INDUSTRY EXPERTS
                            </span>

                            <h2>
                                Guidance That Helps You
                                <span> Grow With Confidence</span>
                            </h2>

                            <p>
                                Get personalized mentorship, constructive
                                feedback, and practical guidance to strengthen
                                your design thinking and develop your portfolio.
                            </p>

                            <a
                                href="mailto:info@rayloop.com?subject=UI%2FUX%20Mentorship%20Enquiry"
                                className="tm-btn tm-btn-primary"
                            >
                                Connect With Us
                                <i className="bi bi-arrow-up-right"></i>
                            </a>
                        </div>

                        <div className="tm-mentorship-visual">
                            <img
                                src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1000&q=85"
                                alt="Professionals collaborating and sharing ideas"
                                loading="lazy"
                            />

                            <div className="tm-mentorship-badge">
                                <i className="bi bi-chat-heart"></i>
                                <span>
                                    Learn with
                                    <strong> expert guidance</strong>
                                </span>
                            </div>
                        </div>

                    </div>

                </div>
            </section>


            {/* FINAL CTA */}
            <section className="tm-final-cta" id="tm-contact">
                <div className="container tm-container">

                    <div className="tm-final-cta-inner">

                        <div className="tm-cta-decoration tm-cta-decoration-one"></div>
                        <div className="tm-cta-decoration tm-cta-decoration-two"></div>

                        <div className="tm-final-cta-content">
                            <span className="tm-cta-eyebrow">
                                YOUR DESIGN JOURNEY STARTS HERE
                            </span>

                            <h2>
                                Ready to Design
                                <br />
                                <span>Something Amazing?</span>
                            </h2>

                            <p>
                                Take the first step towards learning UI/UX
                                design. Connect with Togglemax Education and
                                discover your next opportunity.
                            </p>

                            <div className="tm-final-cta-actions">
                                <a
                                    href="mailto:info@rayloop.com?subject=UI%2FUX%20Design%20Course%20Enquiry"
                                    className="tm-btn tm-btn-white"
                                >
                                    Enquire Now
                                    <i className="bi bi-arrow-up-right"></i>
                                </a>

                                <a
                                    href="tel:+916282089962"
                                    className="tm-cta-phone"
                                >
                                    <i className="bi bi-telephone"></i>
                                    +91 6282 089 962
                                </a>
                            </div>
                        </div>

                        <div className="tm-final-cta-icon">
                            <i className="bi bi-vector-pen"></i>
                            <span className="tm-cta-icon-small">
                                <i className="bi bi-stars"></i>
                            </span>
                        </div>

                    </div>

                </div>
            </section>

        </main>
    );
}

export default Industries;