import Link from "next/link";
import "./industries.css";

function Industries() {
    const industryFeatures = [
        {
            icon: "bi bi-lightbulb",
            title: "Industry Expertise",
            description: "Deep Industry Knowledge",
        },
        {
            icon: "bi bi-gear",
            title: "Custom Solutions",
            description: "Tailored Business Solutions",
        },
        {
            icon: "bi bi-graph-up-arrow",
            title: "Scalable Growth",
            description: "Sustainable Business Growth",
        },
    ];

    const industries = [
        {
            slug: "healthcare-medical",
            image: "/health.jpg",
            icon: "bi bi-heart-pulse",
            iconClass: "healthcare-icon",
            title: "Healthcare & Medical",
            description:
                "Improving healthcare operations with innovative software, digital solutions, and efficient medical management systems.",
        },
        {
            slug: "travel-hospitality",
            image: "/travel.jpg",
            icon: "bi bi-airplane",
            iconClass: "travel-icon",
            title: "Travel & Hospitality",
            description:
                "Enhancing guest experiences with smart booking platforms, reservation systems, and streamlined hospitality operations.",
        },
        {
            slug: "manufacturing-industrial",
            image: "/manufacturing.jpg",
            icon: "bi bi-gear-wide-connected",
            iconClass: "manufacture-icon",
            title: "Manufacturing & Industrial",
            description:
                "Optimizing industrial operations through automation, production monitoring, and intelligent management solutions.",
        },
        {
            slug: "retail-e-commerce",
            image: "/retail-ecommerce.jpg",
            icon: "bi bi-shop",
            iconClass: "retail-icon",
            title: "Retail & E-Commerce",
            description:
                "Simplifying online shopping, inventory management, and retail operations with seamless digital solutions.",
        },
        {
            slug: "education-training",
            image: "/edu-training.jpg",
            icon: "bi bi-mortarboard",
            iconClass: "education-icon",
            title: "Education & Training",
            description:
                "Transforming learning experiences with digital education platforms, training systems, and modern learning technologies.",
        },
        {
            slug: "real-estate-architecture",
            image: "/real-estate.jpg",
            icon: "bi bi-buildings",
            iconClass: "estate-icon",
            title: "Real Estate & Architecture",
            description:
                "Streamlining property management, architectural projects, and construction workflows with smart digital tools.",
        },
        {
            slug: "fsm-service",
            image: "/tech.jpg",
            icon: "bi bi-tools",
            iconClass: "fsm-icon",
            title: "FSM Service",
            description:
                "Managing field service operations efficiently with technician scheduling, job tracking, asset management, and maintenance solutions.",
        },
    ];

    return (
        <>
            <section className="container industries">
                <div className="row">
                    <div className="col-lg-7 col-md-7 col-12 industry-line">
                        <div className="industries-left">
                            <div className="small-industries">
                                OUR INDUSTRIES
                            </div>
                            <h1>Industries Focused <br /><span>Digital Solutions</span></h1>
                            <div className="industries-desc">
                                Explore how RayLoop delivers innovative software solutions across <br />
                                diverse industries, helping businesses streamline operations, enhance <br />
                                customer experiences, and achieve sustainable growth through technology.
                            </div>

                            <div className="industries-top">
                                {industryFeatures.map((feature, index) => (
                                    <div
                                        className="industires-part-card"
                                        key={index}
                                    >
                                        <div className="industries-feature-icon">
                                            <i className={feature.icon}></i>
                                        </div>

                                        <div className="industries-feature-content">
                                            <h5>{feature.title}</h5>
                                            <p>{feature.description}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="col-lg-5 col-md-5 col-12">
                        <div className="image-right">
                            <img src="industries.jpg"></img>
                        </div>
                    </div>
                </div>
            </section>

            <section className="container explore-industries">
                <div className="small-industries">
                    EXPLORE OUR INDUSTRIES
                </div>
                <h1>Industries We Serve</h1>
                <div className="industries-desc">We deliver innovative, industry-specific digital solutions that <br />
                    drive efficiency, growth, and success.</div>

                <div className="industries-card-container">
                    <div className="row g-4">
                        {industries.map((industry, index) => (
                            <div className="col-lg-3 col-md-6 col-12" key={index}>
                                <Link
                                    href={`/industries/${industry.slug}`}
                                    className="industrial-card-link"
                                >
                                    <div className="industrial-card">
                                        <div className="industrial-card-image">
                                            <img
                                                src={industry.image}
                                                alt={industry.title}
                                            />
                                            <div className="data-iconic">
                                                <div className={`industrial-card-icon ${industry.iconClass}`}>
                                                    <i className={industry.icon}></i>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="industrial-card-content">
                                            <h3>{industry.title}</h3>
                                            <p>{industry.description}</p>

                                            <div className="learnmore-btn">Learn More <i className="bi bi-arrow-right"></i></div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>

            </section>
        </>
    );
}

export default Industries;